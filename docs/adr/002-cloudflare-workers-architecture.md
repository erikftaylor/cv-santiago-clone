# ADR-002: Cloudflare Workers Architecture (supersedes ADR-001)

**Date:** 2026-08-25
**Status:** Accepted — supersedes ADR-001
**Decision makers:** Erik Taylor

## Context

ADR-001 chose Vercel Edge and explicitly rejected Cloudflare Workers. The site
has since migrated wholesale to Cloudflare, and several product decisions
changed with it: the site is single-language, the chat assistant ships dark,
and the model generation moved on. This ADR records the architecture actually
serving etaylor.co so the record matches reality; ADR-001 remains as history
and as the still-accurate rationale for the frontend stack (React 19,
TypeScript strict, Vite, Tailwind v4, Motion, Lucide, React Router).

## Decision

| Layer | Choice | Why |
|-------|--------|-----|
| Deploy | Cloudflare Workers (`portfolio-site`), static assets binding over `dist/`, SPA fallback, `run_worker_first` scoped to `/api/*` | One platform for static serving, API routes, and the etaylor.co zone; Wrangler gives a staging Worker (`portfolio-site-staging`) for look-before-promote deploys |
| API | `worker/index.js` routing `/api/*` (chat, RAG search, voice token/trace, ops) | Ported from the Vercel Edge functions with minimal changes; Web-standard APIs made the port nearly mechanical |
| Chat model | Anthropic `claude-sonnet-4-6` (streaming) | Generation bump from 4-5; prompt and persona unchanged |
| Chat availability | Shipped but disabled (`CHAT_ENABLED = false` in `src/main.tsx`) | Deliberate: the assistant stays dark until its RAG index and prompt are re-synced and re-evaluated; the code path stays warm |
| RAG store | Supabase (pgvector) + OpenAI embeddings, synced by `scripts/export-chunks.ts` / `ingest-rag.ts` | Content chunks are exported from the case-study i18n files, so the assistant answers from the same copy the site renders |
| Language | Single-language English (`type Lang = 'en'`) | The ES surface was cut to keep every word of copy under editorial control; bilingual support from ADR-001 is retired, not deferred |
| SEO | Prerender via `scripts/prerender.tsx` (SSG + `hydrateRoot`), per-page meta and JSON-LD, `llms.txt` | Same strategy as ADR-001, now with hydration-structure validation in the build |
| Observability | Langfuse (prompt sync + tracing) and Cloudflare Workers observability | Unchanged from ADR-001, plus platform logs |

## Consequences

- **Deploys replace hashed bundles.** Each `wrangler deploy` removes the prior
  build's assets; a browser holding stale HTML requests bundles the SPA
  fallback answers with HTML. Guarded twice: an inline boot guard in
  `index.html` reloads once with a cache-busting query, and
  `vite:preloadError` covers lazy chunks.
- **`api/` is a legacy tree.** The Vercel-era functions remain in-repo beside
  `worker/` and have already drifted (`chat.js`). Treat `worker/` as the only
  live backend; deleting or de-duplicating `api/` is cleanup, not a decision.
- **Deploy flow is two-step by convention:** `npm run worker:staging`, verify,
  then `npm run worker:deploy`. Nothing enforces it; it is how this repo is
  operated.
- Single-language means residual `Lang`/ES scaffolding (props, chunk metadata
  fields, banner strings) is dead weight to be removed opportunistically.
