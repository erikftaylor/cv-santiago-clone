/**
 * CASE STUDY TEMPLATE
 * ───────────────────
 * A complete, working case-study page built from the shared article primitives.
 * Copy this file per case study, point a registry entry at it, and replace the
 * content in the matching i18n file.
 *
 * The shared components (ArticleLayout, H2, Prose, StepList, MetricsGrid…)
 * carry the design system — use them rather than hand-rolling markup, so every
 * case study stays visually consistent and the prerenderer can parse it.
 */
import { type CaseStudyLang as Lang, caseStudyContent } from './case-study-i18n'
import { buildJsonLdFromRegistry } from './articles/json-ld'
import { useArticleSeo } from './articles/use-article-seo'
import {
  ArticleLayout,
  ArticleHeader,
  ArticleFooter,
  FaqSection,
  LessonsSection,
  MetricsGrid,
  CaseStudyCta,
} from './articles/components'
import { H2, Prose, Callout, StepList, FloatingToc } from './articles/content-types'
import { site } from './site.config'

export default function CaseStudyTemplate({ lang }: { lang: Lang }) {
  const t = caseStudyContent[lang]

  // `buildJsonLdFromRegistry` pulls dates, keywords, and images from the registry
  // entry, and the human-readable parts from this article's i18n.
  const jsonLd = buildJsonLdFromRegistry('example-case-study', lang, {
    header: { h1: t.h1 },
    seo: { title: t.h1, description: t.subtitle },
    slug: t.slug,
    nav: t.nav,
    faq: t.faq,
  })

  useArticleSeo({
    lang,
    slug: t.slug,
    title: t.h1,
    description: t.subtitle,
    publishedTime: t.dateISO,
    // String literal on purpose: `scripts/validate-articles.ts --fix` rewrites
    // this date in place, and it can only see literals, not expressions.
    modifiedTime: '2026-08-20',
    image: `${site.origin}/og-image.webp`,
    articleTags: 'TODO, comma, separated',
    jsonLd,
  })

  return (
    <ArticleLayout lang={lang}>
      <FloatingToc />

      <ArticleHeader
        editorId="case-study-header"
        kicker={t.kicker}
        h1={t.h1}
        subtitle={t.subtitle}
        date={t.date}
        dateISO={t.dateISO}
        readingTime={t.readingTime}
        lang={lang}
      />

      {/* ── The problem ─────────────────────────────────────────────────── */}
      <H2 id="problem">{t.problem.heading}</H2>
      {t.problem.body.map((p, i) => (
        <Prose key={i}>{p}</Prose>
      ))}

      {/* ── Architecture ────────────────────────────────────────────────── */}
      <H2 id="architecture">{t.architecture.heading}</H2>
      {t.architecture.body.map((p, i) => (
        <Prose key={i}>{p}</Prose>
      ))}
      <StepList items={t.architecture.steps.map((s) => ({ label: s.title, detail: s.detail }))} />
      <Callout>{t.architecture.tradeoffs}</Callout>

      {/* ── Results ─────────────────────────────────────────────────────── */}
      <H2 id="results">{t.results.heading}</H2>
      <MetricsGrid items={t.results.metrics} columns={3} />

      {/* ── Lessons ─────────────────────────────────────────────────────── */}
      <LessonsSection heading={t.lessons.heading} items={t.lessons.items} />

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <FaqSection heading={t.faq.heading} items={t.faq.items} />

      <CaseStudyCta
        heading={t.cta.heading}
        body={t.cta.body}
        ctaLabel={t.cta.ctaLabel}
        ctaHref={t.cta.ctaHref}
      />

      <ArticleFooter lang={lang} utmCampaign="example-case-study" editorId="case-study-footer" />
    </ArticleLayout>
  )
}
