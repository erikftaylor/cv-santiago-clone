/**
 * WFG Agent Portal case study page. Built from the shared article primitives —
 * see src/articles/components.tsx and content-types.tsx.
 */
import { type WfgPortalLang as Lang, wfgPortalContent } from './wfg-portal-i18n'
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

export default function WfgPortalCaseStudy({ lang }: { lang: Lang }) {
  const t = wfgPortalContent[lang]

  const jsonLd = buildJsonLdFromRegistry('wfg-portal-case-study', lang, {
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
    modifiedTime: '2026-08-24',
    image: `${site.origin}/og-image.webp`,
    articleTags: 'product design, UX research, design systems, usability testing',
    jsonLd,
  })

  return (
    <ArticleLayout lang={lang}>
      <FloatingToc />

      <ArticleHeader
        editorId="wfg-portal-header"
        kicker={t.kicker}
        h1={t.h1}
        subtitle={t.subtitle}
        date={t.date}
        dateISO={t.dateISO}
        readingTime={t.readingTime}
        lang={lang}
      />

      <H2 id="problem">{t.problem.heading}</H2>
      {t.problem.body.map((p, i) => (
        <Prose key={i}>{p}</Prose>
      ))}

      <H2 id="architecture">{t.architecture.heading}</H2>
      {t.architecture.body.map((p, i) => (
        <Prose key={i}>{p}</Prose>
      ))}
      <StepList items={t.architecture.steps.map((s) => ({ label: s.title, detail: s.detail }))} />
      <Callout>{t.architecture.tradeoffs}</Callout>

      <H2 id="results">{t.results.heading}</H2>
      <MetricsGrid items={t.results.metrics} columns={3} />
      {t.results.body.map((p, i) => (
        <Prose key={i}>{p}</Prose>
      ))}

      <LessonsSection heading={t.lessons.heading} items={t.lessons.items} />

      <FaqSection heading={t.faq.heading} items={t.faq.items} />

      <CaseStudyCta
        heading={t.cta.heading}
        body={t.cta.body}
        ctaLabel={t.cta.ctaLabel}
        ctaHref={t.cta.ctaHref}
      />

      <ArticleFooter lang={lang} utmCampaign="wfg-portal-case-study" editorId="wfg-portal-footer" />
    </ArticleLayout>
  )
}
