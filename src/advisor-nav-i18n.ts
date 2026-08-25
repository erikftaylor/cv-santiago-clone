/**
 * Content for the Advisor Navigation (WFG global nav) case study.
 * No MetricsGrid here — the source PDF has no quantified results, only
 * research-backed targets and qualitative usability-test findings, so
 * `results` renders as prose + real research quotes instead.
 * Source: "A Research-Driven Navigation Overhaul" (PDF, 2025).
 */
export type AdvisorNavLang = 'en'

export const advisorNavContent = {
  en: {
    kicker: 'Case Study — Product Design at Transamerica (WFG)',
    h1: 'A Research-Driven Navigation Overhaul',
    subtitle:
      'Licensed WFG agents faced a cluttered global navigation — too many links and subcategories, worse on mobile — that buried the tools they used constantly. I cut links and reordered what remained by frequency of use rather than by org chart.',
    date: 'Transamerica, 2020–2024',
    dateISO: '2024-01-01',
    readingTime: '5 min read',

    problem: {
      heading: 'The problem',
      body: [
        'Licensed WFG agents faced difficulty accessing key tools quickly due to a cluttered and inefficient global navigation system, leading to reduced productivity and frustration — particularly on mobile devices, which agents relied on heavily for daily tasks and where the clutter hurt most.',
      ],
    },

    architecture: {
      heading: 'The method',
      body: [
        'The project began with user research — interviews and surveys with WFG agents to identify pain points and understand how the existing navigation was affecting their workflow. From those insights we set research-backed goals, then moved into design and prototyping, developing several concepts focused on simplifying navigation and improving mobile accessibility.',
      ],
      steps: [
        {
          title: 'Research',
          detail: 'Interviews and surveys with WFG agents surfaced where the cluttered navigation was costing them time, especially on mobile.',
        },
        {
          title: 'Design & prototyping',
          detail: 'Developed several concepts focused on simplifying navigation and reordering tools by frequency of use rather than org-chart structure.',
        },
        {
          title: 'Usability testing',
          detail: 'Tested prototypes with agents; the iterative process refined both desktop and mobile usability based on real-world feedback.',
        },
        {
          title: 'Implementation',
          detail: 'Rolled out the finalized design while closely monitoring user feedback to refine the system further.',
        },
      ],
      tradeoffs:
        'Reordering by frequency of use meant deprioritizing rarely-used tools entirely — a bet that those tools are used rarely enough that the extra click is an acceptable cost. Change management was a real factor: some agents had an initial negative reaction to the new layout before adapting to it.',
    },

    results: {
      heading: 'What it surfaced',
      body: [
        'This case study reports ahead of full rollout data. The goals set from the outset — a notable increase in task completion, higher agent engagement, improved satisfaction, and optimized mobile usage — were research-backed targets, not measured outcomes, and this case study does not claim otherwise.',
        'What usability testing did surface was directional and qualitative: agents found the simplified layout easier to navigate and teach to new recruits, mobile optimization was consistently called out as valuable, and change management mattered — some agents had an initial negative reaction to the new layout before adapting to it.',
      ],
      quotes: [
        '"I feel this is friendlier. This one would be easier to teach my recruits."',
        '"This one is better than Concept A... better because it\'s more aligned to how people see the business. I just want to see how to manage / grow my business. It\'s more conducive to what I\'m trying to do."',
        '"I like the other one better. People will have negative reaction to change."',
      ],
    },

    lessons: {
      heading: 'Lessons',
      items: [
        {
          title: 'Frequency-of-use beats org-chart structure',
          detail: 'Reordering navigation around how often agents actually used a tool, rather than how the organization categorized it, was the change users responded to.',
        },
        {
          title: 'Mobile optimization was not a secondary concern',
          detail: 'Agents who relied on mobile devices reported the clearest improvements — treating mobile as a first-class surface rather than a scaled-down desktop view mattered.',
        },
        {
          title: 'Change management is part of the design, not an afterthought',
          detail: 'Some agents reacted negatively to the new layout before adapting to it. A redesign that improves the metrics can still need a deliberate rollout to get there.',
        },
      ],
    },

    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'Did the redesign improve task completion and engagement?',
          a: 'Full rollout metrics were not measured, so this case study does not claim a verified result. What did come out of usability testing was qualitative: agents described the simplified layout as easier to use and teach, and mobile optimization was consistently flagged as valuable — but the completion-rate and engagement targets were goals, not reported outcomes.',
        },
        {
          q: 'How is this different from the WFG Agent Portal case study?',
          a: 'That project covered the portal\'s homepage and role-based dashboards. This one is scoped specifically to the global navigation — the menu structure agents used to get to every tool in the portal, redesigned around frequency of use rather than org-chart categories.',
        },
      ],
    },

    cta: {
      heading: 'Want the details?',
      body: 'Happy to walk through the research process, the frequency-of-use reordering, or how the mobile-first navigation held up in testing.',
      ctaLabel: 'Get in touch',
      ctaHref: '/#contact',
    },

    // Required by buildJsonLdFromRegistry — keep in sync with the registry slug.
    slug: 'boosting-advisor-efficiency-with-a-renovated-navigation-experience',
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'Advisor Navigation' },
  },
} as const
