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
      'Most designers who say they "use AI" mean they\'ve added a tool to their workflow — faster, but the same shape of work. I had a different question: what if AI wasn\'t a tool in the workflow, but the infrastructure the workflow ran on?',
    date: 'Tovuti LMS, 2025–2026',
    dateISO: '2026-06-01',
    readingTime: '7 min read',

    problem: {
      heading: 'The problem',
      body: [
        'Over one year, I built a connected operating model for moving design work from evidence to decisions. Three bottlenecks were connected, even though they appeared in different parts of the practice: research synthesis took 10–15 hours per feature cycle, with evidence living across Zendesk, transcripts, knowledge-base articles, and meeting notes before being manually shaped into a coherent brief; journey maps were static artifacts, disconnected from the evidence that should have built them; and Tovuti\'s analytics product had no strategic vision — no defined north star for what data should surface, to whom, and why.',
        'None of these were problems a new Figma component would solve. They were translation and decision-design problems.',
      ],
    },

    architecture: {
      heading: 'The operating model',
      body: [
        'The work followed three principles. Structural leverage beats generic tooling: look for places where information is being manually translated from one form into another. AI should remove mechanical work without removing judgment: the useful output is a structured draft a designer can validate, not an automated decision. And strategy is design work: defining whose decision a product capability should serve is part of designing the product, even when the interface has not shipped.',
        'The three builds were different layers of the same system: make evidence easier to shape, make experience models easier to work with, and define how product data should support decisions.',
      ],
      steps: [
        {
          title: 'Research infrastructure: 10 custom Claude skills',
          detail: 'Each scoped to a specific slow point in the design cycle — the goal was not a faster general-purpose assistant, but eliminating a translation step and producing an output a designer can actually use. Two representative examples: a research-synthesis skill that shapes Zendesk content, transcripts, knowledge-base articles, and meeting notes into a coherent brief — the workflow associated with the change from 10–15 hours to under 2 hours of typical synthesis effort per feature cycle — and a component-specification and design-handoff review skill whose value is a structured review draft for the designer to validate, not an autonomous implementation decision.',
        },
        {
          title: 'Journey modeling: JEM',
          detail: 'The product layer of the operating model: a 0→1 web product that ingests multi-source research and generates living, evidence-backed journey maps through guided AI conversation. I owned the product design across the system — the product architecture and data model, the scoping interface, the map canvas, and collaboration with engineering through the build. Shipped to jem-test.tovuti.ai; in its first week JEM surfaced 20 friction points, and 10 were shipped as quick wins immediately.',
        },
        {
          title: 'Decision intelligence: analytics strategy',
          detail: 'An AI-assisted intelligence layer that could surface friction by feature, persona, and stage: audience-by-surface coverage maps, analytics-user journey maps, and a strategic brief connecting those artifacts to a north star and an AI-integration roadmap. Together they framed analytics around the decisions it should support rather than the data available to display. This was strategy work, not a shipped interface: the vision produced no post-launch product metrics.',
        },
      ],
      tradeoffs:
        'The same principle governed all 10 skills: does this remove a mechanical translation step, or does it merely make the step faster? The narrower scope meant less flexibility than a general-purpose tool, but it produced outputs that required minimal editing and could be used in the standard design workflow.',
    },

    results: {
      heading: 'Results',
      metrics: [
        {
          value: '10–15 hrs → <2 hrs',
          label: 'typical research-synthesis effort per feature cycle',
          detail: 'After introducing the AI-assisted synthesis workflow — a description of that workflow, not a claim that every one of the 10 skills independently produced the reduction',
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
        'More important than the individual outputs, the work created a research-to-decision pipeline that did not exist at the start of the year: evidence could be synthesized into structured understanding, modeled as a living journey, and connected to a strategy for decision intelligence.',
      ],
    },

    // Replaces the former Lessons section — the md's three principles moved
    // into the operating-model intro, and this closes the piece instead.
    humanJudgment: {
      heading: 'Where judgment stayed human',
      body: [
        'The AI-assisted workflows did not decide which findings represented meaningful product opportunities. They organized evidence, surfaced patterns, and produced structured drafts to validate. Determining what to trust, what to prioritize, and what decision a product should support remained design judgment.',
        'That boundary was intentional: AI infrastructure should eliminate mechanical translation, not replace the reasoning that gives the translation meaning.',
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
