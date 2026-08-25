/**
 * Content for the "AI-Native Design Practice" combined case study — merges
 * JEM, the 10 custom Claude skills, and the analytics vision into one
 * narrative about building AI infrastructure rather than adding AI tools.
 * Shape mirrors the case-study template: problem → architecture → results →
 * lessons → FAQ. See src/i18n.ts header for the editorial rules.
 * Source: "Case Study Drafts" deep-dive (Aug 2026), items 4 and 7.
 */
export type AiNativeDesignLang = 'en'

export const aiNativeDesignContent = {
  en: {
    kicker: 'Case Study — AI Workflow & Product Strategy at Tovuti LMS',
    h1: 'An AI-Native Design Practice at Tovuti',
    subtitle:
      'Most designers who say they "use AI" mean they\'ve added a tool to their workflow — faster, but the same shape of work. I had a different question: what if AI wasn\'t a tool in the workflow, but the infrastructure the workflow ran on? Three interlocking builds over one year answered it.',
    date: 'Tovuti LMS, 2025–2026',
    dateISO: '2026-06-01',
    readingTime: '7 min read',

    problem: {
      heading: 'The problem',
      body: [
        'Three problems were sitting in front of me simultaneously, and none of them were design problems a new Figma component would solve. Research synthesis took 10–15 hours per feature cycle — pulling from Zendesk, transcripts, KB articles, and meeting notes into a coherent brief. Journey maps were static artifacts disconnected from the evidence that should have built them. And Tovuti\'s analytics product had no strategic vision — no defined north star for what data should surface, to whom, and why.',
      ],
    },

    architecture: {
      heading: 'The action',
      body: [
        'I built three interlocking things over the course of the year, each scoped to eliminate a specific structural bottleneck rather than just speed it up.',
      ],
      steps: [
        {
          title: 'JEM (Journey Experience Mapper)',
          detail: 'A 0→1 web product that ingests multi-source research and generates living, evidence-backed journey maps through guided AI conversation. Full product ownership: architecture, data model, scoping interface, map canvas, engineering collaboration. Shipped to jem-test.tovuti.ai.',
        },
        {
          title: '10 custom Claude skills',
          detail: 'A library of purpose-built AI skills covering research synthesis, competitive analysis, component specification review, and design handoff — each scoped to a specific slow point in the design cycle and built to eliminate it, not just speed it up.',
        },
        {
          title: 'Analytics vision',
          detail: 'A product strategy defining what Tovuti\'s analytics platform should become: an AI-assisted intelligence layer surfacing friction by feature, persona, and stage — audience-by-surface coverage maps, journey maps for analytics users, and a strategic brief positioning analytics as a product capability, not a reporting tab.',
        },
      ],
      tradeoffs:
        'The bar for each skill was: does this eliminate the translation step, or does it just make it faster? General-purpose AI tools were rejected in favor of skills scoped tightly enough to require minimal editing of their output — narrower scope, but output a designer could actually trust.',
    },

    results: {
      heading: 'Results',
      metrics: [
        {
          value: '10–15 hrs → <2 hrs',
          label: 'research synthesis time per cycle',
          detail: 'Across the 10 custom Claude skills',
        },
        {
          value: '20',
          label: 'friction points surfaced in JEM\'s first week',
          detail: '10 shipped as quick wins immediately',
        },
        {
          value: '10',
          label: 'custom Claude skills shipped',
          detail: 'In active use as part of the standard design workflow',
        },
      ],
      body: [
        'More than the individual outputs: a research-to-artifact pipeline that didn\'t exist at the start of the year, journey maps built from evidence instead of memory, and a product strategy for analytics that connected data to decisions rather than adding another report. The demonstration isn\'t that AI tools were used — it\'s that AI-native design practice means building the tools you need, not just using the ones that exist.',
      ],
    },

    lessons: {
      heading: 'Lessons',
      items: [
        {
          title: 'The leverage point is structural, not tool-specific',
          detail: 'Synthesis isn\'t slow because it\'s hard — it\'s slow because information comes in the wrong shape. Building a skill that reshapes it, rather than a faster way to do the reshaping by hand, is where the time actually comes back.',
        },
        {
          title: 'AI infrastructure should eliminate steps, not replace judgment',
          detail: 'The skills that stuck were the ones that removed a mechanical translation step and handed a designer a structured draft to validate — not the ones that tried to make the decision for them.',
        },
        {
          title: 'A product strategy is still design work, even with no shipped UI',
          detail: 'The analytics vision produced no interface, but defining whose decision every report should serve — audience-first rather than data-first — is the same design thinking that shaped JEM\'s data model.',
        },
      ],
    },

    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'Is this the same case study as JEM?',
          a: 'JEM is one of the three builds this piece covers, with its own full case study elsewhere on this site. This piece is the broader story: JEM plus the 10 custom Claude skills plus the analytics vision, told as one narrative about building AI infrastructure rather than adopting AI tools one at a time.',
        },
        {
          q: 'Did the analytics vision ship as a product?',
          a: 'No — it\'s a strategic brief with a defined north star and an AI-integration roadmap, not a shipped interface. This case study represents the vision and the method, not post-launch metrics, and doesn\'t claim otherwise.',
        },
      ],
    },

    cta: {
      heading: 'Want the details?',
      body: 'Happy to walk through any of the three pieces — JEM\'s architecture, how the Claude skills were scoped, or the analytics strategy brief.',
      ctaLabel: 'Get in touch',
      ctaHref: '/#contact',
    },

    // Required by buildJsonLdFromRegistry — keep in sync with the registry slug.
    slug: 'building-an-ai-native-design-practice-not-just-using-ai-tools',
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'AI-Native Design Practice' },
  },
} as const
