/**
 * Content for the IBM Digital Sellers Guidebook case study.
 * No MetricsGrid here — the source PDF reports only qualitative success
 * factors (a "noticeable uptick," executive praise, sustained engagement),
 * no measured numbers, so `results` renders as prose + a BulletList instead.
 * Source: "Empowering IBM Sellers: A UX-Driven Guidebook for Sales Enablement" (PDF, 2025).
 */
export type IbmGuidebookLang = 'en'

export const ibmGuidebookContent = {
  en: {
    kicker: 'Case Study — Product Ownership at IBM',
    h1: 'Empowering IBM Sellers: A UX-Driven Guidebook for Sales Enablement',
    subtitle:
      'IBM\'s Cognitive Sales Advisor platform was meant to enhance the sales process, but sellers saw it as an added burden and managers lacked the resources to demonstrate its value. I led the Digital Sellers Guidebook — a centralized, WordPress-based resource built from stakeholder research to close that gap.',
    date: 'IBM, 2017–2020',
    dateISO: '2020-01-01',
    readingTime: '6 min read',

    problem: {
      heading: 'The problem',
      body: [
        'IBM\'s Cognitive Sales Advisor platform was designed to enhance the sales process, but adoption rates were low. Sellers, focused on closing deals, viewed the platform as an additional burden rather than a helpful tool. Managers, despite incentives to promote it, lacked the engagement and resources to effectively demonstrate its value — a barrier to adoption across the organization that a comprehensive, user-friendly resource was needed to close.',
      ],
    },

    architecture: {
      heading: 'Process',
      body: [
        'I conducted stakeholder interviews with sellers and managers to understand the barriers to adoption, which surfaced the real constraint: high cognitive load and limited time for training, not a lack of awareness. WordPress was the deliberate technical choice — it allowed easy integration with existing IBM tools rather than adding another system for sellers to learn.',
      ],
      steps: [
        {
          title: 'Research and analysis',
          detail: 'Stakeholder interviews with sellers and managers surfaced the real barriers: high cognitive load, limited time for training, and a lack of clear, accessible resources. Existing workflows and tools were analyzed for integration opportunities.',
        },
        {
          title: 'Content strategy',
          detail: 'Built around three pillars: product pages (features, benefits, seller testimonials), a knowledge base segmented by role (general users, enterprise sellers, other specific roles), and a video library organized and searchable by user goals.',
        },
        {
          title: 'Prototyping and testing',
          detail: 'Wireframes and interactive prototypes were tested with sellers and managers; feedback shaped navigation, content layout, and search functionality before launch.',
        },
        {
          title: 'Development, launch, and iteration',
          detail: 'Built on WordPress in collaboration with developers for seamless integration with existing IBM tools, then launched after QA testing. Post-launch, content continued to expand to support new initiatives and evolving user needs.',
        },
      ],
      tradeoffs:
        'WordPress was chosen for tool familiarity and integration, not for being the most powerful platform available — the tradeoff was accepting its constraints in exchange for a resource sellers and managers could actually adopt inside their existing workflow.',
    },

    results: {
      heading: 'What it surfaced',
      body: [
        'This case study reports what the source material claims, not an independently verified figure: no adoption percentage was tracked, and none is claimed here.',
      ],
      factors: [
        {
          label: 'Increased platform adoption',
          detail: 'A noticeable uptick in Cognitive Sales Advisor usage among both managers and sellers, per the original case study — not a measured percentage.',
        },
        {
          label: 'Executive recognition',
          detail: 'The guidebook was praised as IBM\'s most comprehensive internal resource for sellers.',
        },
        {
          label: 'Sustained engagement',
          detail: 'Content expansion after launch supported new initiatives and adapted to evolving user needs.',
        },
      ],
    },

    lessons: {
      heading: 'Lessons',
      items: [
        {
          title: 'Cognitive load, not awareness, was the real barrier',
          detail: 'Sellers weren\'t unaware of the platform — they were focused on closing deals and had no bandwidth for anything that felt like extra training. Simplifying the path to value mattered more than promoting the platform harder.',
        },
        {
          title: 'Content strategy is a design decision, not an afterthought',
          detail: 'Segmenting the knowledge base by role and organizing the video library by user goals, rather than shipping one undifferentiated resource, is what made the guidebook usable across a diverse seller and manager audience.',
        },
        {
          title: 'Iteration kept the resource relevant after launch',
          detail: 'Continuing to gather feedback and expand content post-launch — rather than treating launch as the finish line — is what let the guidebook adapt to new initiatives instead of going stale.',
        },
      ],
    },

    faq: {
      heading: 'FAQ',
      items: [
        {
          q: 'Did the guidebook measurably increase adoption?',
          a: 'The original case study reports a noticeable uptick in usage and recognition as IBM\'s most comprehensive internal resource for sellers, but no specific adoption percentage was tracked or verified — this case study does not claim one.',
        },
        {
          q: 'Why WordPress instead of a more specialized platform?',
          a: 'Tool familiarity and integration with IBM\'s existing systems — sellers and managers could adopt a resource built on a platform their teams already knew, rather than learning something new on top of the platform they were already resisting.',
        },
      ],
    },

    cta: {
      heading: 'Want the details?',
      body: 'Happy to walk through the stakeholder research, the content strategy, or how the guidebook evolved after launch.',
      ctaLabel: 'Get in touch',
      ctaHref: '/#contact',
    },

    // Required by buildJsonLdFromRegistry — keep in sync with the registry slug.
    slug: 'driving-adoption-and-engagement-with-ibms-digital-sellers-guidebook',
    nav: { breadcrumbHome: 'Home', breadcrumbCurrent: 'IBM Digital Sellers Guidebook' },
  },
} as const
