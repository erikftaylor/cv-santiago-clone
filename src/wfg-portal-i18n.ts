/**
 * Content for the WFG Agent Portal case study.
 * Shape mirrors the case-study template: problem → architecture → results →
 * lessons → FAQ. See src/i18n.ts header for the editorial rules.
 * Source: "From Friction to Flow: Transforming the WFG Agent Experience" (PDF, 2025).
 */
export type WfgPortalLang = 'en'

export const wfgPortalContent = {
  en: {
    kicker: 'Case Study — Product Design at Transamerica (WFG)',
    h1: 'From Friction to Flow: Redesigning the WFG Agent Portal',
    subtitle:
      'The WFG agent portal was unintuitive and impersonal — essential tools were hard to find and nothing adapted to the agent using it. I joined a redesign already in motion, pushed for user research inside a SAFe Agile team, and built a design system tailored to WFG rather than an off-the-shelf component set.',
    date: 'Transamerica, 2020–2024',
    dateISO: '2024-01-01',
    readingTime: '6 min read',

    problem: {
      heading: 'The problem',
      body: [
        'The WFG agent portal was unintuitive and inefficient, with essential tools hard to find and no personalization — licensed agents and senior agents saw the same undifferentiated dashboard regardless of what their role actually needed day to day. The result was frustration, reduced productivity, and low engagement with a tool agents were supposed to rely on.',
      ],
    },

    architecture: {
      heading: 'Process',
      body: [
        'The project\'s direction — and the decision to redesign the portal — was set before I joined. Working inside a SAFe Agile team, we identified the opportunity to ground that redesign in actual research rather than carried-over assumptions: user interviews, surveys, and usability testing on wireframes and high-fidelity prototypes, iterated on the feedback they surfaced.',
      ],
      steps: [
        {
          title: 'Research',
          detail: 'Gathered insights from user interviews, surveys, and usability tests to identify where the existing portal was costing agents time.',
        },
        {
          title: 'Prototyping',
          detail: 'Created and tested wireframes and high-fidelity prototypes against the pain points research surfaced.',
        },
        {
          title: 'Iteration',
          detail: 'Refined designs based on feedback to improve usability and functionality before the design was finalized.',
        },
        {
          title: 'Customization',
          detail: 'Built an ad-hoc, unique design system tailored to WFG\'s branding and functional requirements to ensure consistency and scalability across the platform.',
        },
      ],
      tradeoffs:
        'The redesign leaned on role-based personalization — licensed agents got quick access to sales tools, senior agents got team-metrics oversight — which meant building a custom design system rather than reusing an existing component set, since WFG\'s branding and functional requirements did not map cleanly onto off-the-shelf patterns.',
    },

    results: {
      heading: 'Targets',
      metrics: [
        {
          value: '95%',
          label: 'task completion target',
          detail: 'Aspirational goal, not a measured outcome',
        },
        {
          value: '20%',
          label: 'weekly login increase target',
          detail: 'Aspirational goal, not a measured outcome',
        },
        {
          value: '75%',
          label: 'satisfaction rate target',
          detail: 'Aspirational goal, not a measured outcome',
        },
      ],
      body: [
        'These figures — along with a target Net Promoter Score of 40+ — were the success metrics defined at the outset, informed by user research, competitive analysis, and usability testing. They were never measured against a shipped result: this case study reports the targets the team set, not verified outcomes, and does not claim the redesign hit them.',
      ],
    },

    lessons: {
      heading: 'Lessons',
      items: [
        {
          title: 'Direct user engagement finds what assumptions miss',
          detail: 'Pushing for user interviews and usability testing on a redesign whose direction was already set uncovered pain points the original plan had not accounted for.',
        },
        {
          title: 'A tailored design system is a usability decision, not just a branding one',
          detail: 'WFG\'s functional requirements did not map cleanly onto an off-the-shelf component set — customization was what made the role-based personalization possible.',
        },
        {
          title: 'Collaboration on someone else\'s plan is still real design work',
          detail: 'Joining after direction was set does not mean design has nothing to contribute — arguing for research and shaping role-specific features within an existing plan is where this project\'s value showed up.',
        },
      ],
    },

    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'Did you set the direction for this redesign?',
          a: 'No. The decision to redesign the portal was made before I joined the team. What I contributed was pushing for user interviews and usability testing so the design was grounded in real agent pain points, plus the design system and personalized, role-based interface built from that research.',
        },
        {
          q: 'Did the redesign hit its targets?',
          a: 'That was never measured and this case study does not claim otherwise. The 95% task-completion, 20% engagement, 75% satisfaction, and NPS 40+ figures were goals set at the outset from research and competitive analysis — aspirational benchmarks, not reported results.',
        },
      ],
    },

    cta: {
      heading: 'Want the details?',
      body: 'Happy to walk through the research process, the role-based design system, or what collaborating inside a SAFe Agile team looked like.',
      ctaLabel: 'Get in touch',
      ctaHref: '/#contact',
    },

    // Required by buildJsonLdFromRegistry — keep in sync with the registry slug.
    slug: 'empowering-financial-agents-with-a-redesigned-portal-experience',
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'WFG Agent Portal' },
  },
} as const
