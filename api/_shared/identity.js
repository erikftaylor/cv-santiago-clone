/**
 * Edge-runtime view of the site identity.
 * Reads the SAME `site.identity.json` as `src/site.config.ts` — do not add
 * values here; add them to the JSON.
 */
import identity from '../../site.identity.json' with { type: 'json' }

export const site = identity

/**
 * Resolve {{TOKEN}} placeholders in a template against the identity.
 * Used for the chatbot system prompt so the persona file stays identity-free.
 */
export function resolveIdentityTokens(text) {
  const tokens = {
    FULL_NAME: identity.fullName,
    SHORT_NAME: identity.shortName,
    BRAND: identity.brand,
    DOMAIN: identity.domain,
    ORIGIN: `https://${identity.domain}`,
    EMAIL: identity.email,
    TAGLINE: identity.tagline,
    LOCATION: identity.location,
    LINKEDIN: identity.social.linkedin,
    GITHUB: identity.social.github,
    REPO_NAME: (identity.social.github || '').split('/').pop() || '',
  }
  return text.replace(/\{\{([A-Z_]+)\}\}/g, (match, key) =>
    key in tokens ? tokens[key] : match
  )
}
