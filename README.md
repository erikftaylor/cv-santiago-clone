# Portfolio

> Interactive portfolio with AI chatbot (text + voice), agentic RAG, automated evals, LLMOps dashboard, and 6-layer prompt injection defense.

**Status: scaffold.** The machinery works end to end; the content is placeholders.
Run `npm run identity:check` to see everything still unfilled.

---

## Attribution

<!-- identity-check:allow -->
This project's architecture is adapted from [santifer/cv-santiago](https://github.com/santifer/cv-santiago)
by Santiago Fernández de Valderrama ([santifer.io](https://santifer.io)) — the
chatbot pipeline, RAG design, eval harness, LLMOps dashboard, and SEO/prerender
build are his work.

**All identity content in this repository is original.** The upstream case
studies, biography, press coverage, credentials, and personal assets were
removed rather than rewritten, because they document work that is not mine.

Upstream ships no LICENSE file, which means default copyright applies. If you
intend to publish this, contact the original author about reuse terms.

---

## What this is

A portfolio that demonstrates the skills it describes, rather than listing them:

- **AI chatbot** — text (Claude) + voice (OpenAI Realtime API), first person, with agentic RAG over your own case studies (pgvector + BM25 hybrid search, reranking)
- **6-layer prompt-injection defense** — keyword detection, canary tokens, fingerprinting, anti-extraction, online safety scoring, adversarial red-team suite
- **Automated evals** — 10 categories (factual accuracy, persona, boundaries, quality, safety, language, RAG quality, multi-turn, source badges, voice) running as a CI gate
- **LLMOps dashboard** — private `/ops` route backed by Langfuse + Supabase
- **Closed loop** — production trace → online scoring → low quality → auto-generated test → CI gate
- **GEO-ready** — `llms.txt`, JSON-LD, AI-crawler-friendly robots.txt, prerendered HTML

## Identity: one source of truth

Everything that makes the site *yours* lives in **`site.identity.json`**.

It is read by `src/site.config.ts` (typed wrapper, adds `url()` and `sameAs`
helpers) and by `api/_shared/identity.js` (Edge runtime). The chatbot prompt,
voice prompt, and eval datasets are identity-free templates using `{{FULL_NAME}}`,
`{{SHORT_NAME}}`, `{{EMAIL}}`, `{{DOMAIN}}` tokens, resolved at load time.

Change a value there and it propagates to meta tags, JSON-LD, sitemap, RSS, the
chatbot persona, and the eval suite.

```bash
npm run identity:check          # list unfilled placeholders + any identity leaks
npm run identity:check:strict   # non-zero exit if any placeholder remains (for CI)
```

## Getting started

```bash
npm install
cp .env.local.example .env.local   # fill in the keys below
npm run dev
```

### What to fill in, in order

1. **`site.identity.json`** — name, domain, email, socials, roles, location
2. **`src/i18n.ts`** — homepage copy: experience, projects, skills (arrays; add entries, don't add keys)
3. **`src/about-i18n.ts`** — the About page, your canonical entity home
4. **`chatbot-prompt.txt`** — the persona. The chatbot is only as good as this file
5. **`public/llms.txt`** — what AI search engines read about you
6. **`src/case-study-i18n.ts`** + a registry entry — your first case study
7. **`public/`** — replace `foto-avatar*`, `og-image`, and the favicons (currently generated placeholders)

### Adding a case study

Two files: an entry in `src/articles/registry.ts`, and a component + i18n file
(copy `CaseStudyTemplate.tsx` and `case-study-i18n.ts`). Routing, hreflang,
sitemap, RSS, prerendering, JSON-LD, and RAG ingestion all derive from the
registry.

## Environment

| Variable | Needed for | Where |
|---|---|---|
| `ANTHROPIC_API_KEY` | text chatbot | console.anthropic.com |
| `OPENAI_API_KEY` | embeddings + voice mode | platform.openai.com |
| `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` | RAG vector store | Supabase → Project Settings → API |
| `LANGFUSE_*` | tracing, evals, `/ops` dashboard | cloud.langfuse.com |
| `RESEND_API_KEY` | jailbreak alert emails | resend.com |

The site runs without the AI keys — the chatbot degrades gracefully. Add them
when you want the chatbot live.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server |
| `npm run build` | Full pipeline: RAG sync → prompt sync → build → sitemap/RSS → prerender → validate |
| `npm run evals` | Run the eval suite against the chatbot |
| `npm run rag:sync` | Export content chunks and ingest into pgvector |
| `npm run adversarial` | Red-team the prompt-injection defenses |
| `npm run identity:check` | Placeholder + identity-leak audit |

## Deploying

Vercel. Set the environment variables in the project settings, point your domain
at it, then:

1. Flip `<meta name="robots">` in `index.html` from `noindex` to `index, follow`
2. Generate an IndexNow key → `public/<key>.txt` + `site.identity.json`
3. Update `CHAT_API_URL` in `.github/workflows/evals.yml` and `adversarial.yml`

**Do not deploy publicly until `npm run identity:check:strict` passes.** Shipping
unfilled placeholder text into JSON-LD and `llms.txt` teaches search engines and
AI assistants the wrong things about you, and that is slow to undo.

## Tech stack

React 19 · TypeScript · Vite 7 · Tailwind v4 · Claude API · OpenAI Realtime ·
Supabase pgvector · Langfuse · Vercel Edge · Recharts
