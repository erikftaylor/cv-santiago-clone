/**
 * Advisor Navigation (WFG global nav) case study page. Built from the shared
 * article primitives — see src/articles/components.tsx and content-types.tsx.
 * No MetricsGrid: the source has no quantified results, only targets and
 * qualitative research quotes (see src/advisor-nav-i18n.ts header).
 */
import { type AdvisorNavLang as Lang, advisorNavContent } from './advisor-nav-i18n'
import { buildJsonLdFromRegistry } from './articles/json-ld'
import { useArticleSeo } from './articles/use-article-seo'
import {
  ArticleLayout,
  ArticleHeader,
  ArticleFooter,
  FaqSection,
  LessonsSection,
  CaseStudyCta,
} from './articles/components'
import { H2, H3, Prose, Callout, StepList, BulletList, FloatingToc } from './articles/content-types'
import { site } from './site.config'

export default function AdvisorNavCaseStudy({ lang }: { lang: Lang }) {
  const t = advisorNavContent[lang]

  const jsonLd = buildJsonLdFromRegistry('advisor-nav-case-study', lang, {
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
    articleTags: 'information architecture, mobile UX, usability testing, product design',
    jsonLd,
  })

  return (
    <ArticleLayout lang={lang}>
      <FloatingToc />

      <ArticleHeader
        editorId="advisor-nav-header"
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

      <H2 id="key-decision">{t.keyDecision.heading}</H2>
      {t.keyDecision.body.map((p, i) => (
        <Prose key={i}>{p}</Prose>
      ))}

      <H2 id="results">{t.results.heading}</H2>
      {t.results.body.map((p, i) => (
        <Prose key={i}>{p}</Prose>
      ))}
      <H3 id="quotes">Quotes from the research</H3>
      <BulletList items={t.results.quotes} />

      <LessonsSection heading={t.lessons.heading} items={t.lessons.items} />

      <FaqSection heading={t.faq.heading} items={t.faq.items} />

      <CaseStudyCta
        heading={t.cta.heading}
        body={t.cta.body}
        ctaLabel={t.cta.ctaLabel}
        ctaHref={t.cta.ctaHref}
      />

      <ArticleFooter lang={lang} utmCampaign="advisor-nav-case-study" editorId="advisor-nav-footer" />
    </ArticleLayout>
  )
}
