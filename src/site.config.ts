/**
 * SITE IDENTITY (typed wrapper)
 * ─────────────────────────────
 * The VALUES live in `site.identity.json` at the repo root — edit them there.
 * That file is plain JSON so the Edge runtime (`api/_shared/identity.js`) can
 * read the exact same values without a TypeScript build step.
 *
 * This module adds types, derived helpers (`url()`, `sameAs`), and nothing else.
 *
 * ⚠️  Any value still reading `TODO:` is a placeholder. The site builds and runs
 *     with them, but do not deploy publicly until they are real:
 *         npx tsx scripts/identity-check.ts --strict
 */
import identity from '../site.identity.json'

export interface SiteIdentity {
  fullName: string
  shortName: string
  brand: string
  alternateNames: string[]
  domain: string
  email: string
  tagline: string
  description: string
  roles: string[]
  location: string
  address: { locality: string; country: string }
  social: Record<string, string>
  lang: { primary: 'es' | 'en'; secondary: 'es' | 'en'; bilingual: boolean }
  avatar: string
  ogImage: string
  themeColor: string
  verification: { bing: string; indexnow: string }
}

const base = identity as unknown as SiteIdentity

export const site = {
  ...base,

  /** Origin with protocol, no trailing slash. */
  get origin() {
    return `https://${base.domain}`
  },

  /** Canonical URL builder — always use this instead of concatenating strings. */
  url(path = '/') {
    const clean = path.startsWith('/') ? path : `/${path}`
    return `https://${base.domain}${clean}`
  },

  /**
   * Non-empty social URLs, for JSON-LD `sameAs` and rel="me".
   * Empty entries are filtered out deliberately: a `sameAs` pointing at a 404
   * damages entity resolution in search and AI answers rather than helping it.
   */
  get sameAs() {
    return Object.values(base.social).filter(Boolean)
  },
}

/**
 * Route that serves the secondary language. `/` always serves the primary.
 * Upstream hardcoded `/` = Spanish and `/en` = English; deriving it from
 * `lang` means flipping `primary` in site.identity.json moves the whole site.
 */
export const SECONDARY_PATH = `/${base.lang.secondary}`

/** Which language a given pathname is served in. */
export function langForPath(pathname: string): 'es' | 'en' {
  if (pathname === '/') return base.lang.primary
  if (pathname === SECONDARY_PATH) return base.lang.secondary
  // Article and static pages carry language in the slug itself.
  return ES_PATHS.has(pathname) ? 'es' : 'en'
}

/** Static (non-article) paths that are inherently Spanish. */
const ES_PATHS = new Set(['/privacidad', '/sobre-mi'])

export const siteTitle = `${site.brand} | ${site.tagline}`

export default site
