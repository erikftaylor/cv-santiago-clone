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
  {
    id: 'jem-case-study',
    slug: 'i-vibe-coded-a-journey-map-generator-auto-synthesizing-docs-and-demos-into-actionable-friction-maps',
    title: 'JEM: An AI Journey-Mapping Tool',
    seo: {
      title: `JEM: Designing an AI Journey-Mapping Tool | ${site.domain}`,
      description: 'Product teams lost 10-15 hours per discovery cycle to hand synthesis. The design story of JEM, an AI journey-mapping tool shipped in eight weeks at Tovuti LMS.',
    },
    sectionLabels: {
      problem: 'The problem',
      architecture: 'Architecture',
      results: 'Results',
      lessons: 'Lessons',
    },
    type: 'case-study',
    ogImage: `${site.origin}/og-image.webp`,
    component: () => import('../JemCaseStudy.tsx'),
    // Draft — flip to true after review so the chatbot can retrieve it.
    ragReady: false,
    i18nFile: 'src/jem-i18n.ts',
    seoMeta: {
      datePublished: '2026-08-24',
      dateModified: '2026-08-24',
      keywords: [
        'AI product design', 'journey mapping', 'UX research synthesis', 'Claude API',
        'design systems', 'Tovuti LMS', 'product discovery', 'journey map generator',
        'AI UX', 'product design case study', 'research operations',
      ],
      articleType: 'TechArticle',
      articleTags: 'AI product design, journey mapping, UX research, Claude',
      images: [`${site.origin}/og-image.webp`],
      about: [
        { '@type': 'Thing', name: 'AI-assisted journey mapping' },
        { '@type': 'Thing', name: 'UX research synthesis' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Claude', url: 'https://www.anthropic.com/claude' },
        { '@type': 'SoftwareApplication', name: 'Nuxt', url: 'https://nuxt.com' },
        { '@type': 'SoftwareApplication', name: 'Zendesk', url: 'https://www.zendesk.com' },
      ],
      citation: [
        { '@type': 'WebPage', name: 'Anthropic Claude API documentation', url: 'https://docs.anthropic.com' },
        { '@type': 'WebPage', name: 'Nuxt documentation', url: 'https://nuxt.com/docs' },
      ],
    },
  },
  {
    id: 'checkpoints-case-study',
    slug: 'a-go-no-go-discovery-for-a-500k-arr-approval-workflow',
    title: 'Checkpoints: A Go/No-Go Discovery',
    seo: {
      title: `Go/No-Go Discovery on a $500K Approval Workflow | ${site.domain}`,
      description: 'How 60+ support tickets, internal case notes, and team signals became four journey maps and five go/no-go gates for a $500K ARR LMS approval workflow.',
    },
    sectionLabels: {
      problem: 'The problem',
      architecture: 'The method',
      results: 'What it surfaced',
      lessons: 'Lessons',
    },
    type: 'case-study',
    ogImage: `${site.origin}/og-image.webp`,
    component: () => import('../CheckpointsCaseStudy.tsx'),
    // Draft — flip to true after review so the chatbot can retrieve it.
    ragReady: false,
    i18nFile: 'src/checkpoints-i18n.ts',
    seoMeta: {
      datePublished: '2026-08-24',
      dateModified: '2026-08-24',
      keywords: [
        'product discovery', 'UX research', 'journey mapping', 'approval workflow',
        'go/no-go framework', 'risk assessment', 'support ticket synthesis', 'LMS',
        'enterprise UX', 'state machine design', 'root cause analysis',
      ],
      articleType: 'TechArticle',
      articleTags: 'product discovery, journey mapping, risk assessment, UX research',
      images: [`${site.origin}/og-image.webp`],
      about: [
        { '@type': 'Thing', name: 'Product discovery' },
        { '@type': 'Thing', name: 'Approval workflow UX' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Zendesk', url: 'https://www.zendesk.com' },
        { '@type': 'SoftwareApplication', name: 'LaunchDarkly', url: 'https://launchdarkly.com' },
      ],
      citation: [
        { '@type': 'WebPage', name: 'Journey Mapping 101 (Nielsen Norman Group)', url: 'https://www.nngroup.com/articles/journey-mapping-101/' },
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
