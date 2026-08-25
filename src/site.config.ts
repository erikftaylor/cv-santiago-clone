/**
 * SITE IDENTITY (typed wrapper)
 * ─────────────────────────────
 * The VALUES live in `site.identity.json` at the repo root — edit them there.
 * That file is plain JSON so the Edge runtime (`api/_shared/identity.js`) can
 * read the exact same values without a TypeScript build step.
 *
 * This module adds types, derived helpers (`url()`, `sameAs`), and nothing else.
 *
 * ⚠️  Any value still reading as an unfilled scaffold placeholder is not real
 *     yet. The site builds and runs with them, but do not deploy publicly
 *     until they are real:
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
  lang: { primary: 'en' }
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
 * This site is single-language (English). The upstream project was bilingual
 * ES/EN; that surface was removed deliberately — see README. `Lang` is narrowed
 * to 'en' in i18n.ts so the type system prevents a second language creeping
 * back in without a considered decision.
 */

export const siteTitle = `${site.brand} | ${site.tagline}`

export default site
