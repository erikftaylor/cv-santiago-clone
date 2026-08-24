/**
 * JEM case study page. Built from the shared article primitives — see
 * src/articles/components.tsx and content-types.tsx.
 */
import { type JemLang as Lang, jemContent } from './jem-i18n'
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

export default function JemCaseStudy({ lang }: { lang: Lang }) {
  const t = jemContent[lang]

  const jsonLd = buildJsonLdFromRegistry('jem-case-study', lang, {
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
    // String literal on purpose: validate-articles --fix rewrites this in place.
    modifiedTime: '2026-08-24',
    image: `${site.origin}/og-image.webp`,
    articleTags: 'AI product design, journey mapping, UX research, Claude',
    jsonLd,
  })

  return (
    <ArticleLayout lang={lang}>
      <FloatingToc />

      <ArticleHeader
        editorId="jem-header"
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

      <LessonsSection heading={t.lessons.heading} items={t.lessons.items} />

      <FaqSection heading={t.faq.heading} items={t.faq.items} />

      <CaseStudyCta
        heading={t.cta.heading}
        body={t.cta.body}
        ctaLabel={t.cta.ctaLabel}
        ctaHref={t.cta.ctaHref}
      />

      <ArticleFooter lang={lang} utmCampaign="jem-case-study" editorId="jem-footer" />
    </ArticleLayout>
  )
}
