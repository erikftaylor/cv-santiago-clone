/**
 * Worker entry point — routes /api/* to the matching handler; everything
 * else falls through to static assets (see wrangler.jsonc `assets` config).
 *
 * Each handler below was ported from the Vercel Edge Function of the same
 * name under api/. Only two things changed in that port: waitUntil now
 * comes from 'cloudflare:workers' instead of '@vercel/functions', and the
 * Vercel-only `export const config = { runtime: 'edge' }` was dropped.
 * Everything else (process.env, Request/Response, crypto.randomUUID) is
 * Web-standard and needed no changes.
 *
 * Not ported yet: api/ops/* (internal admin dashboard) and api/cron/*
 * (scheduled eval job) — neither is called by the public site.
 */
import chatHandler from './chat.js'
import ragSearchHandler from './rag-search.js'
import voiceTokenHandler from './voice-token.js'
import voiceTraceHandler from './voice-trace.js'

const ROUTES = {
  '/api/chat': chatHandler,
  '/api/rag-search': ragSearchHandler,
  '/api/voice-token': voiceTokenHandler,
  '/api/voice-trace': voiceTraceHandler,
}

export default {
  async fetch(request) {
    const url = new URL(request.url)
    const handler = ROUTES[url.pathname]

    if (handler) {
      return handler(request)
    }

    if (url.pathname.startsWith('/api/')) {
      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Non-API, non-asset requests (shouldn't normally reach here given
    // run_worker_first is scoped to /api/*) — 404 rather than guessing.
    return new Response('Not found', { status: 404 })
  },
}
