import { site, resolveIdentityTokens } from './_shared/identity.js'
import { Langfuse } from 'langfuse'

// ---------------------------------------------------------------------------
// Langfuse (singleton)
// ---------------------------------------------------------------------------

let langfuseClient = null
function getLangfuse() {
  if (!langfuseClient && process.env.LANGFUSE_SECRET_KEY) {
    langfuseClient = new Langfuse({
      publicKey: process.env.LANGFUSE_PUBLIC_KEY,
      secretKey: process.env.LANGFUSE_SECRET_KEY,
      baseUrl: process.env.LANGFUSE_BASE_URL,
    })
  }
  return langfuseClient
}

// ---------------------------------------------------------------------------
// Rate limiting via Supabase
// ---------------------------------------------------------------------------

const MAX_SESSIONS_PER_IP = 3
const WINDOW_MS = 24 * 60 * 60 * 1000 // 24 hours

async function checkRateLimit(ip) {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return { allowed: true, remaining: MAX_SESSIONS_PER_IP }
  }

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const headers = {
    'apikey': supabaseKey,
    'Authorization': `Bearer ${supabaseKey}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation',
  }

  // Check current count
  const windowStart = new Date(Date.now() - WINDOW_MS).toISOString()
  const checkRes = await fetch(
    `${supabaseUrl}/rest/v1/voice_rate_limits?ip=eq.${encodeURIComponent(ip)}&window_start=gte.${windowStart}&select=count`,
    { headers },
  )

  if (!checkRes.ok) {
    // If table doesn't exist or error, allow (fail open)
    return { allowed: true, remaining: MAX_SESSIONS_PER_IP }
  }

  const rows = await checkRes.json()
  const currentCount = rows[0]?.count || 0

  if (currentCount >= MAX_SESSIONS_PER_IP) {
    return { allowed: false, remaining: 0 }
  }

  // Increment
  await fetch(`${supabaseUrl}/rest/v1/voice_rate_limits`, {
    method: 'POST',
    headers: { ...headers, 'Prefer': 'resolution=merge-duplicates' },
    body: JSON.stringify({
      ip,
      count: currentCount + 1,
      window_start: rows.length > 0 ? undefined : new Date().toISOString(),
    }),
  }).catch(() => {}) // non-critical

  return { allowed: true, remaining: MAX_SESSIONS_PER_IP - currentCount - 1 }
}

// ---------------------------------------------------------------------------
// Voice system prompt (adapted for speech — shorter, no markdown)
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Voice affect blocks (language-specific speech style + contact)
// ---------------------------------------------------------------------------

const VOICE_AFFECT_ES = `## Voice affect (speech style)

- Language: Spanish. ALWAYS respond in Spanish.
- Accent: Peninsular Spanish (matches the filler markers and "avoid Latin American expressions" rule below).
- Voice: warm, conversational, confident.
- Pacing: natural Spanish rhythm — not too fast, not too slow. Pause naturally between ideas.
- Emotion: genuine enthusiasm when talking about projects. Calm confidence about experience.
- Avoid: robotic cadence, listing items monotonically, corporate tone, Latin American expressions.
- Filler: use natural Peninsular Spanish conversational markers (bueno, mira, la verdad es que, hombre, pues nada, vamos).
- Contact: ${site.email}
- Fallback when missing data: "No tengo esa cifra exacta, pero te lo puedo detallar por email"
- Badge mention examples: "te acaba de aparecer ahí abajo el enlace al caso completo", "mira, justo te ha aparecido el badge del artículo"
- Text mode suggestion: "Eso te lo puedo detallar mejor por texto, dale al botón de mensaje abajo."
- Meta-command refusal: "No puedo hacer eso, pero puedes cerrar y volver a abrir el modo voz."`

const VOICE_AFFECT_EN = `## Voice affect (speech style)

- Language: English. ALWAYS respond in English.
- Accent: neutral American English — warm and direct, no regional markers.
- Voice: warm, conversational, confident. Like a casual chat with a recruiter over video call.
- Pacing: natural rhythm — not too fast, not too slow. Pause naturally between ideas.
- Emotion: genuine enthusiasm when talking about projects. Calm confidence about experience.
- Avoid: robotic cadence, listing items monotonically, corporate tone, overly formal language.
- Filler: use natural English conversational markers (so, well, actually, you know, the thing is, honestly).
- Contact: ${site.email}
- Fallback when missing data: "I don't have that exact figure, but I can get you the details by email"
- Badge mention examples: "the link to the full case study just popped up below", "you should see the article badge right there"
- Text mode suggestion: "That one's easier to explain in detail over text, just hit the message button below."
- Meta-command refusal: "I can't do that, but you can close and reopen voice mode."`

// ---------------------------------------------------------------------------
// Voice base prompt (language-agnostic rules — model understands regardless of response language)
// ---------------------------------------------------------------------------

const VOICE_BASE_PROMPT = `Eres {{SHORT_NAME}}, la versión IA de {{FULL_NAME}}. Estás hablando por voz con alguien interesado en tu perfil profesional.

## Reglas para voz (CRÍTICO)

- Respuestas MUY breves: máximo 2-3 frases cortas. Esto es una conversación hablada, no un artículo.
- Sin markdown, sin listas, sin formato — solo texto hablado natural
- No escribas URLs en el texto hablado — pero cuando llames a search_portfolio, automáticamente aparecen badges con enlaces a los artículos debajo del orbe de voz. El usuario SÍ puede hacer clic en ellos.
- Tono conversacional y directo, como en una llamada
- Primera persona siempre
- Ritmo: mezcla frases cortas con largas. Un dato. Luego contexto.

## Sobre {{FULL_NAME}} (para saludos y contexto básico)

Este bloque existe solo para que el modelo salude y se oriente; cualquier
métrica o detalle de proyecto debe venir de search_portfolio, nunca de aquí.

- {{FULL_NAME}} — diseñador de producto senior, especializado en IA × UX
- Enfoque: investigación, sistemas de diseño y diseño de producto con IA, de principio a fin
- Ubicación: {{LOCATION}}
- Busca: rol de diseño de producto senior a tiempo completo; freelance mientras tanto

Proyectos (usa search_portfolio para CUALQUIER detalle — CERO métricas de memoria):
- JEM — herramienta de mapeo de journeys con IA, construida en Tovuti LMS
- Checkpoints — discovery go/no-go sobre un flujo de aprobación crítico para el negocio
- {{DOMAIN}} — este portfolio con chatbot IA`

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  if (!process.env.OPENAI_API_KEY) {
    return new Response(JSON.stringify({ error: 'Voice mode not configured' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const { lang = 'en', sessionId } = await req.json()

    // Rate limiting
    const ip = req.headers.get('cf-connecting-ip') || req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const rateLimit = await checkRateLimit(ip)
    if (!rateLimit.allowed) {
      return new Response(JSON.stringify({
        error: 'rate_limited',
        message: lang === 'en'
          ? 'You have reached the limit of 3 voice sessions per day'
          : 'Has alcanzado el límite de 3 sesiones de voz por día',
      }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Compose prompt: base rules + language-specific voice affect
    // The site is English-only, but a visitor may still speak Spanish.
    const voiceAffect = lang === 'es' ? VOICE_AFFECT_ES : VOICE_AFFECT_EN
    const instructions = resolveIdentityTokens(`${VOICE_BASE_PROMPT}\n\n${voiceAffect}`)

    // Request ephemeral token from OpenAI Realtime API
    const response = await fetch('https://api.openai.com/v1/realtime/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-realtime-2025-08-28',
        voice: 'cedar',
        modalities: ['audio', 'text'],
        instructions,
        input_audio_transcription: { model: 'whisper-1' },
        turn_detection: { type: 'server_vad' },
        tools: [{
          type: 'function',
          name: 'search_portfolio',
          description: 'Search your own published case studies for project details, architectures, metrics, and technical decisions.',
          parameters: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'The search query to find relevant portfolio content',
              },
            },
            required: ['query'],
          },
        }],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('OpenAI Realtime session error:', errorText)
      return new Response(JSON.stringify({ error: 'Failed to create voice session' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const data = await response.json()

    // Create Langfuse trace for this voice session
    const langfuse = getLangfuse()
    let traceId = null
    if (langfuse) {
      const trace = langfuse.trace({
        name: 'voice-session',
        sessionId: sessionId || undefined,
        tags: [lang, 'voice'],
        metadata: { lang, ip: ip.slice(0, 8) + '...', remaining: rateLimit.remaining },
      })
      traceId = trace.id
      await langfuse.flushAsync()
    }

    return new Response(JSON.stringify({
      token: data.client_secret?.value,
      traceId,
      expiresAt: data.client_secret?.expires_at,
    }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Voice token error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
