/**
 * Content for the example case study.
 *
 * This file is the TEMPLATE for every case study you write. The shape matters
 * more than the words: keep the ES/EN parallel structure, because hreflang,
 * the language toggle, and the RAG chunker all assume both exist.
 *
 * Writing guidance (this is what separates a portfolio from a résumé):
 *   - Lead with the PROBLEM and its cost. No one cares what you built until
 *     they know what was broken.
 *   - Show the ARCHITECTURE, including what you rejected and why. Trade-offs
 *     are the actual signal of seniority.
 *   - Put NUMBERS in results. "Faster" is noise; "p95 4.2s → 890ms" is evidence.
 *   - Write LESSONS honestly, including what went wrong. This is the most-read
 *     section and the least-faked.
 */
export type CaseStudyLang = 'en'

export const caseStudyContent = {
  en: {
    kicker: 'TODO: Case Study — Context',
    h1: 'TODO: A specific, concrete title',
    subtitle:
      'TODO: One sentence. The problem, the approach, the outcome — in that order.',
    date: 'TODO: January 2026',
    dateISO: '2026-01-01',
    readingTime: 'TODO: 8 min read',

    problem: {
      heading: 'The problem',
      body: [
        'TODO: What was broken, and what did it cost? Be specific about scale — hours lost, error rate, revenue impact, headcount consumed.',
        'TODO: Why did obvious solutions fail? This is where you earn the reader\'s attention.',
      ],
    },

    architecture: {
      heading: 'Architecture',
      body: [
        'TODO: How the system works, end to end. Name the actual components.',
      ],
      steps: [
        { title: 'TODO: Step one', detail: 'TODO: What happens here and why.' },
        { title: 'TODO: Step two', detail: 'TODO: What happens here and why.' },
        { title: 'TODO: Step three', detail: 'TODO: What happens here and why.' },
      ],
      tradeoffs: 'TODO: What you chose NOT to build, and why. Include the option you rejected and the constraint that killed it.',
    },

    results: {
      heading: 'Results',
      metrics: [
        { value: 'TODO', label: 'TODO: what it measures', detail: 'TODO: baseline → result' },
        { value: 'TODO', label: 'TODO: what it measures', detail: 'TODO: baseline → result' },
        { value: 'TODO', label: 'TODO: what it measures', detail: 'TODO: baseline → result' },
      ],
    },

    lessons: {
      heading: 'Lessons',
      items: [
        { title: 'TODO: A thing you got wrong', detail: 'TODO: What it cost and what you do differently now.' },
        { title: 'TODO: A thing that worked', detail: 'TODO: Why it worked, specifically enough to be reusable.' },
      ],
    },

    faq: {
      heading: 'FAQ',
      items: [
        { q: 'TODO: A question a hiring manager would actually ask', a: 'TODO: A direct answer.' },
        { q: 'TODO: A technical objection to your approach', a: 'TODO: Address it honestly.' },
      ],
    },

    cta: {
      heading: 'TODO: Want the details?',
      body: 'TODO: One line inviting a conversation.',
      ctaLabel: 'TODO: Get in touch',
      ctaHref: '/#contact',
    },

    // Required by buildJsonLdFromRegistry — keep in sync with the registry slug.
    slug: 'example-case-study',
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Example Case Study' },
  },

} as const
