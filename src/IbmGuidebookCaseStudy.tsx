/**
 * IBM Digital Sellers Guidebook case study page. Built from the shared
 * article primitives — see src/articles/components.tsx and content-types.tsx.
 * No MetricsGrid: the source has no quantified results, only qualitative
 * success factors (see src/ibm-guidebook-i18n.ts header).
 */
import { type IbmGuidebookLang as Lang, ibmGuidebookContent } from './ibm-guidebook-i18n'
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
import { H2, Prose, Callout, StepList, BulletList, FloatingToc } from './articles/content-types'
import { site } from './site.config'

export default function IbmGuidebookCaseStudy({ lang }: { lang: Lang }) {
  const t = ibmGuidebookContent[lang]

  const jsonLd = buildJsonLdFromRegistry('ibm-guidebook-case-study', lang, {
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
    articleTags: 'content strategy, sales enablement, stakeholder research, product ownership',
    jsonLd,
  })

  return (
    <ArticleLayout lang={lang}>
      <FloatingToc />

      <ArticleHeader
        editorId="ibm-guidebook-header"
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
      {t.results.body.map((p, i) => (
        <Prose key={i}>{p}</Prose>
      ))}
      <BulletList items={t.results.factors} />

      <LessonsSection heading={t.lessons.heading} items={t.lessons.items} />

      <FaqSection heading={t.faq.heading} items={t.faq.items} />

      <CaseStudyCta
        heading={t.cta.heading}
        body={t.cta.body}
        ctaLabel={t.cta.ctaLabel}
        ctaHref={t.cta.ctaHref}
      />

      <ArticleFooter lang={lang} utmCampaign="ibm-guidebook-case-study" editorId="ibm-guidebook-footer" />
    </ArticleLayout>
  )
}
