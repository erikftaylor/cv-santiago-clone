import { site } from '../site.config'
import type { ComponentType } from 'react'

export interface ArticleSeo {
  title: string
  description: string
}

export interface ArticleSeoMeta {
  datePublished: string
  dateModified: string
  keywords: string[]
  articleType: 'Article' | 'TechArticle'
  articleTags: string
  images: string[]
  about: Array<Record<string, string>>
  extra?: Record<string, string>
  citation?: Array<{ '@type': string; name: string; url: string; sameAs?: string }>
  isBasedOn?: Record<string, unknown>
  mentions?: Array<Record<string, string | string[] | Record<string, string>>>
  discussionUrl?: string
  relatedLink?: string
  communityUrl?: string
  video?: Record<string, unknown>
  subjectOf?: Record<string, unknown>
}

export interface ArticleConfig {
  id: string
  slug: string
  title: string
  seo: ArticleSeo
  sectionLabels: Record<string, string>
  type: 'collab' | 'case-study' | 'bridge'
  /** Absolute OG image URL for prerender (social cards: LinkedIn, Twitter) */
  ogImage?: string
  /** Hero image path for JSON-LD / GEO (what AI search engines see). Falls back to ogImage if not set. */
  heroImage?: string
  component: () => Promise<{ default: ComponentType<{ lang: 'en' }> }>
  /** Whether this article is ready for RAG indexing (default: false) */
  ragReady?: boolean
  /** Path to i18n content file relative to project root (required when ragReady=true) */
  i18nFile?: string
  /** SEO metadata for prerender JSON-LD + article meta tags */
  seoMeta?: ArticleSeoMeta
}

/**
 * ARTICLE / CASE-STUDY REGISTRY
 * ─────────────────────────────
 * Adding a case study is a two-file operation:
 *   1. Add an entry here.
 *   2. Create the component + its i18n file.
 * Routing, hreflang, sitemap, RSS, prerender, JSON-LD, and RAG ingestion all
 * derive from this array — nothing else needs touching.
 *
 * `ragReady: true` puts the article into the chatbot's retrieval corpus, so the
 * bot can answer questions about it. Leave it false until the copy is final;
 * the RAG index is only as good as what you feed it.
 */
export const articleRegistry: ArticleConfig[] = [
  // ── TEMPLATE ───────────────────────────────────────────────────────────────
  // A complete, working entry. Copy it for each real case study you write.
  // Delete this one once you have at least one of your own.
  {
    id: 'example-case-study',
    slug: 'example-case-study',
    title: 'Example Case Study',
    seo: {
      title: `TODO: Case study title · 55-60 chars | ${site.domain}`,
      description: 'TODO: 150-160 chars. The problem, what you built, the measurable outcome.',
    },
    sectionLabels: {
      problem: 'The problem',
      architecture: 'Architecture',
      results: 'Results',
      lessons: 'Lessons',
    },
    type: 'case-study',
    ogImage: `${site.origin}/og-image.webp`,
    component: () => import('../CaseStudyTemplate.tsx'),
    // Flip to true (and set i18nFile) once the copy is real and you want the
    // chatbot to retrieve it.
    ragReady: false,
    seoMeta: {
      datePublished: '2026-01-01',
      dateModified: '2026-08-20',
      // 10+ keywords is the validator's minimum — these feed article JSON-LD.
      keywords: [
        'TODO-keyword-1', 'TODO-keyword-2', 'TODO-keyword-3', 'TODO-keyword-4',
        'TODO-keyword-5', 'TODO-keyword-6', 'TODO-keyword-7', 'TODO-keyword-8',
        'TODO-keyword-9', 'TODO-keyword-10',
      ],
      articleType: 'TechArticle',
      articleTags: 'TODO, comma, separated',
      images: [`${site.origin}/og-image.webp`],
      // 2+ entries. `about` is what the article IS; `mentions` is what it
      // REFERENCES. Both feed entity resolution for AI search.
      about: [
        { '@type': 'Thing', name: 'TODO: primary subject' },
        { '@type': 'Thing', name: 'TODO: secondary subject' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'TODO: a tool you used', url: 'https://example.com' },
      ],
      // Sources you cite. Real URLs only.
      citation: [
        { '@type': 'WebPage', name: 'TODO: a source you cite', url: 'https://example.com' },
      ],
    },
  },
]

// Derived maps for GlobalNav and routing.
// `getAltPaths` and `getEsSlugs` are gone — this site is single-language.

export function getPageTitles(): Record<string, string> {
  const map: Record<string, string> = {
    '/': 'Portfolio',
    '/about': 'About',
  }
  for (const article of articleRegistry) {
    map[`/${article.slug}`] = article.title
  }
  return map
}

export function getSectionLabels(): Record<string, Record<string, string>> {
  const map: Record<string, Record<string, string>> = {}
  for (const article of articleRegistry) {
    map[`/${article.slug}`] = article.sectionLabels
  }
  return map
}
