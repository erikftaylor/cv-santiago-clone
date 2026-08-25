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
      description: 'Product teams spent an estimated 10-15 hours per discovery cycle on hand synthesis. The design story of JEM, an AI journey-mapping tool shipped in eight weeks at Tovuti LMS.',
    },
    sectionLabels: {
      problem: 'The problem',
      architecture: 'Architecture',
      'human-judgment': 'Human judgment stayed in the loop',
      results: 'Results',
      lessons: 'Lessons',
    },
    type: 'case-study',
    ogImage: `${site.origin}/og-image.webp`,
    component: () => import('../JemCaseStudy.tsx'),
    ragReady: true,
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
      title: `Go/No-Go Discovery on an Approval Workflow | ${site.domain}`,
      description: 'How 60+ support tickets, internal case notes, and team signals became four journey maps and five go/no-go gates for a business-critical LMS approval workflow.',
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
    ragReady: true,
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
  {
    id: 'wfg-portal-case-study',
    slug: 'empowering-financial-agents-with-a-redesigned-portal-experience',
    title: 'WFG Agent Portal Redesign',
    seo: {
      title: `Redesigning the WFG Agent Portal | ${site.domain}`,
      description: 'The WFG agent portal was unintuitive and impersonal. A research-driven redesign with role-based personalization and a tailored design system at Transamerica.',
    },
    sectionLabels: {
      problem: 'The problem',
      architecture: 'Process',
      results: 'Targets',
      lessons: 'Lessons',
    },
    type: 'case-study',
    ogImage: `${site.origin}/og-image.webp`,
    component: () => import('../WfgPortalCaseStudy.tsx'),
    ragReady: true,
    i18nFile: 'src/wfg-portal-i18n.ts',
    seoMeta: {
      datePublished: '2026-08-24',
      dateModified: '2026-08-24',
      keywords: [
        'product design', 'UX research', 'design systems', 'usability testing',
        'financial services UX', 'role-based personalization', 'SAFe Agile',
        'Transamerica', 'WFG', 'enterprise portal design',
      ],
      articleType: 'TechArticle',
      articleTags: 'product design, UX research, design systems, usability testing',
      images: [`${site.origin}/og-image.webp`],
      about: [
        { '@type': 'Thing', name: 'Enterprise portal redesign' },
        { '@type': 'Thing', name: 'Role-based personalization' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Figma', url: 'https://www.figma.com' },
      ],
      citation: [
        { '@type': 'WebPage', name: 'SAFe (Scaled Agile Framework)', url: 'https://framework.scaledagile.com/' },
      ],
    },
  },
  {
    id: 'advisor-nav-case-study',
    slug: 'boosting-advisor-efficiency-with-a-renovated-navigation-experience',
    title: 'Advisor Navigation Overhaul',
    seo: {
      title: `A Research-Driven Navigation Overhaul | ${site.domain}`,
      description: 'Licensed WFG agents lost time to a cluttered global navigation. A frequency-of-use redesign, tested with agents on desktop and mobile, at Transamerica.',
    },
    sectionLabels: {
      problem: 'The problem',
      architecture: 'The method',
      results: 'What it surfaced',
      lessons: 'Lessons',
    },
    type: 'case-study',
    ogImage: `${site.origin}/og-image.webp`,
    component: () => import('../AdvisorNavCaseStudy.tsx'),
    ragReady: true,
    i18nFile: 'src/advisor-nav-i18n.ts',
    seoMeta: {
      datePublished: '2026-08-24',
      dateModified: '2026-08-24',
      keywords: [
        'information architecture', 'mobile UX', 'usability testing', 'navigation design',
        'financial services UX', 'Transamerica', 'WFG', 'frequency of use',
        'global navigation', 'change management',
      ],
      articleType: 'TechArticle',
      articleTags: 'information architecture, mobile UX, usability testing, product design',
      images: [`${site.origin}/og-image.webp`],
      about: [
        { '@type': 'Thing', name: 'Global navigation redesign' },
        { '@type': 'Thing', name: 'Mobile-first UX' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Figma', url: 'https://www.figma.com' },
      ],
      citation: [
        { '@type': 'WebPage', name: 'Navigation Usability Research (Nielsen Norman Group)', url: 'https://www.nngroup.com/topic/navigation/' },
      ],
    },
  },
  {
    id: 'ibm-guidebook-case-study',
    slug: 'driving-adoption-and-engagement-with-ibms-digital-sellers-guidebook',
    title: 'IBM Digital Sellers Guidebook',
    seo: {
      title: `Empowering IBM Sellers: A UX-Driven Guidebook | ${site.domain}`,
      description: 'IBM sellers saw a new sales platform as a burden. A WordPress-based guidebook built from stakeholder research and role-segmented content closed the gap.',
    },
    sectionLabels: {
      problem: 'The problem',
      architecture: 'Process',
      results: 'What it surfaced',
      lessons: 'Lessons',
    },
    type: 'case-study',
    ogImage: `${site.origin}/og-image.webp`,
    component: () => import('../IbmGuidebookCaseStudy.tsx'),
    ragReady: true,
    i18nFile: 'src/ibm-guidebook-i18n.ts',
    seoMeta: {
      datePublished: '2026-08-24',
      dateModified: '2026-08-24',
      keywords: [
        'content strategy', 'sales enablement', 'stakeholder research', 'product ownership',
        'cognitive load', 'knowledge base design', 'IBM', 'WordPress',
        'enterprise UX', 'internal tools',
      ],
      articleType: 'TechArticle',
      articleTags: 'content strategy, sales enablement, stakeholder research, product ownership',
      images: [`${site.origin}/og-image.webp`],
      about: [
        { '@type': 'Thing', name: 'Sales enablement content strategy' },
        { '@type': 'Thing', name: 'Cognitive load reduction' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'WordPress', url: 'https://wordpress.org' },
      ],
      citation: [
        { '@type': 'WebPage', name: 'Minimize Cognitive Load to Maximize Usability (Nielsen Norman Group)', url: 'https://www.nngroup.com/articles/minimize-cognitive-load/' },
      ],
    },
  },
  {
    id: 'wfg365-case-study',
    slug: 'recovering-a-mobile-app-launch-agents-refused-to-use',
    title: 'WFG 365: Recovering a Mobile App Launch',
    seo: {
      title: `WFG 365: Recovering a Mobile App Launch | ${site.domain}`,
      description: 'Senior WFG leaders refused to use the app that replaced Pulse. Field research with top producers turned "this doesn\'t work" into a prioritized fix list.',
    },
    sectionLabels: {
      problem: 'The problem',
      architecture: 'The action',
      results: 'What it surfaced',
      lessons: 'Lessons',
    },
    type: 'case-study',
    ogImage: `${site.origin}/og-image.webp`,
    component: () => import('../Wfg365CaseStudy.tsx'),
    ragReady: false,
    i18nFile: 'src/wfg365-i18n.ts',
    seoMeta: {
      datePublished: '2026-08-24',
      dateModified: '2026-08-24',
      keywords: [
        'field research', 'mobile UX', 'change management', 'user interviews',
        'product recovery', 'financial services UX', 'Transamerica', 'WFG',
        'stakeholder research', 'app redesign',
      ],
      articleType: 'TechArticle',
      articleTags: 'field research, mobile UX, change management, product recovery',
      images: [`${site.origin}/og-image.webp`],
      about: [
        { '@type': 'Thing', name: 'Field research for mobile UX' },
        { '@type': 'Thing', name: 'Product launch recovery' },
      ],
      citation: [
        { '@type': 'WebPage', name: 'Interviewing Users (Nielsen Norman Group)', url: 'https://www.nngroup.com/topic/interviewing-users/' },
      ],
      mentions: [
        { '@type': 'Organization', name: 'Deloitte', url: 'https://www.deloitte.com' },
      ],
    },
  },
  {
    id: 'ai-native-design-case-study',
    slug: 'building-an-ai-native-design-practice-not-just-using-ai-tools',
    title: 'An AI-Native Design Practice',
    seo: {
      title: `An AI-Native Design Practice at Tovuti | ${site.domain}`,
      description: 'JEM, 10 custom Claude skills, and an analytics strategy vision — three builds on the thesis that AI should be infrastructure, not a bolted-on tool.',
    },
    sectionLabels: {
      problem: 'The problem',
      architecture: 'The operating model',
      results: 'Results',
      'human-judgment': 'Where judgment stayed human',
    },
    type: 'case-study',
    ogImage: `${site.origin}/og-image.webp`,
    component: () => import('../AiNativeDesignCaseStudy.tsx'),
    ragReady: false,
    i18nFile: 'src/ai-native-design-i18n.ts',
    seoMeta: {
      datePublished: '2026-08-24',
      dateModified: '2026-08-24',
      keywords: [
        'AI workflow design', 'product strategy', 'research synthesis', 'Claude',
        'design systems', 'Tovuti LMS', 'AI product design', 'analytics strategy',
        'journey mapping', 'AI-native design',
      ],
      articleType: 'TechArticle',
      articleTags: 'AI workflow design, product strategy, research synthesis, design systems',
      images: [`${site.origin}/og-image.webp`],
      about: [
        { '@type': 'Thing', name: 'AI-native design workflow' },
        { '@type': 'Thing', name: 'Research synthesis automation' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Claude', url: 'https://www.anthropic.com/claude' },
      ],
      citation: [
        { '@type': 'WebPage', name: 'Anthropic Claude API documentation', url: 'https://docs.anthropic.com' },
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
