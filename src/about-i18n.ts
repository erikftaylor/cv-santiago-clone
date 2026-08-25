/**
 * ABOUT PAGE CONTENT
 * ──────────────────
 * This page is the canonical "entity home" — the URL that JSON-LD, llms.txt,
 * and your `sameAs` profiles all point back at. AI search engines lean on it
 * heavily when answering "who is X?".
 *
 * Which means: everything here must be true and checkable. The `faq` answers in
 * particular get quoted near-verbatim by assistants, so write them as complete,
 * factual sentences rather than marketing copy.
 *
 * Sections with no verified data stay as empty arrays — AboutPage hides them
 * rather than rendering a bare heading. Do not seed them with examples.
 */
import { site } from './site.config'

export type AboutLang = 'en'

export const aboutContent = {
  en: {
    slug: 'about',
    seo: {
      title: `${site.fullName} | ${site.tagline}`,
      description:
        'Erik Taylor is a Denver-based senior product designer, in design since 2016 and in tech since 2008, across IBM, Transamerica, and Tovuti LMS — upstream, where AI meets UX. Now freelance.',
    },
    heading: site.fullName,
    manifesto: 'The decisions that matter get made upstream of the build — before anything gets generated.',
    storyCta: {
      label: 'How I designed JEM',
      desc: 'An AI journey-mapping tool, from pain point to production in eight weeks.',
      href: '/i-vibe-coded-a-journey-map-generator-auto-synthesizing-docs-and-demos-into-actionable-friction-maps',
    },
    subtitle: site.tagline,
    location: site.location,
    lastUpdated: 'August 2026',
    bio: [
      'Erik Taylor has been working on software since 2008, when he joined IBM as a copywriter. Over the twelve years that followed he moved from copywriting to team lead to product owner and UX designer, ending with ownership of the Digital Sellers Guidebook — an adoption problem wearing a platform problem as a disguise. Stakeholder interviews surfaced the real constraint: sellers had high cognitive load and no time for training, so any fix that asked them to learn something new, somewhere new, would have failed the same way. He built the guidebook on WordPress for easy integration with existing IBM tools, organizing it around product pages, a role-segmented knowledge base, and a searchable video library.',
      'At Transamerica he designed the World Financial Group agent portal, the tools licensed agents work in daily. He joined a redesign whose direction was already set and argued for user interviews and usability testing anyway, built a design system tailored to WFG rather than bending its requirements onto an off-the-shelf component set, and rebuilt global navigation around frequency of use instead of the org chart. The onboarding redesign that followed set research-backed targets for task completion, engagement, and satisfaction; no post-launch adoption numbers were measured. At Tovuti LMS he owned the design system — token layer first, every component traced back to a real primitive, specs consumed by eight to twelve engineers — led the go/no-go discovery on a business-critical approval-workflow feature, and designed JEM, an AI journey-mapping tool shipped with the platform\'s lead engineer that gives teams back 10–15 hours per discovery cycle.',
      'He is freelance as of 2026, based in Denver and working remotely, most interested in teams where AI is reshaping the design work itself. He audits organizations against WCAG 2.2 AA and holds his own work to the same bar. This site is part of the record rather than a description of it: the assistant behind the "Ask about my work" button is a retrieval-augmented build on Claude, with automated evaluations and tracing behind it.',
    ],
    seeking: 'Open to full-time roles in:',
    roles: [...site.roles] as readonly string[],

    timelineHeading: 'Timeline',
    timeline: [
      { period: '2026 –', role: 'Senior Product Designer', company: 'Freelance', desc: 'Product design for teams shipping software, discovery through implementation.' },
      { period: '2025 – 2026', role: 'Senior Product Designer', company: 'Tovuti LMS', desc: 'Led design across admin and learner surfaces; owned the design system.' },
      { period: '2020 – 2024', role: 'Senior UX Designer', company: 'Transamerica', desc: 'The World Financial Group agent portal and its design system.' },
      { period: '2017 – 2020', role: 'Product Owner / UX Designer', company: 'IBM', desc: 'Owned the Digital Sellers Guidebook.' },
      { period: '2010 – 2017', role: 'Team Lead', company: 'IBM', desc: 'Team lead prior to moving into product ownership and design.' },
      { period: '2008 – 2010', role: 'Copywriter', company: 'IBM', desc: 'Where the tenure count starts — writing before designing.' },
    ],

    projectsHeading: 'Projects',
    projects: [
      {
        name: 'JEM (Journey Experience Mapper)',
        desc: 'Tovuti LMS · An AI tool that turns raw research sources into editable, persona-based journey maps.',
        href: 'https://etaylor.co/i-vibe-coded-a-journey-map-generator-auto-synthesizing-docs-and-demos-into-actionable-friction-maps',
      },
      {
        name: 'Checkpoints Go/No-Go',
        desc: 'Tovuti LMS · Discovery synthesis and a five-gate risk assessment on a business-critical approval workflow.',
        href: 'https://etaylor.co/a-go-no-go-discovery-for-a-500k-arr-approval-workflow',
      },
      {
        name: 'WFG Agent Portal',
        desc: 'Transamerica · A design system and portal experience built for licensed financial agents.',
        href: 'https://etaylor.co/empowering-financial-agents-with-a-redesigned-portal-experience',
      },
      {
        name: 'Advisor Navigation',
        desc: 'Transamerica · Global navigation reordered by frequency of use rather than the org chart.',
        href: 'https://etaylor.co/boosting-advisor-efficiency-with-a-renovated-navigation-experience',
      },
      {
        name: 'IBM Digital Sellers Guidebook',
        desc: 'IBM · An adoption problem solved on tooling sellers already used, rather than new infrastructure.',
        href: 'https://etaylor.co/driving-adoption-and-engagement-with-ibms-digital-sellers-guidebook',
      },
      {
        name: 'WFG 365',
        desc: 'Transamerica · Field research that recovered a mobile app launch senior leaders had refused to use.',
        href: 'https://etaylor.co/recovering-a-mobile-app-launch-agents-refused-to-use',
      },
      {
        name: 'An AI-Native Design Practice',
        desc: 'Tovuti LMS · JEM, 10 custom Claude skills, and an analytics vision — AI as infrastructure, not a bolted-on tool.',
        href: 'https://etaylor.co/building-an-ai-native-design-practice-not-just-using-ai-tools',
      },
    ] as readonly { name: string; desc: string; href: string }[],

    certificationsHeading: 'Certifications',
    // Only real credentials with working verification URLs.
    certifications: [] as readonly { org: string; items: readonly string[] }[],

    educationHeading: 'Education',
    // Not present in any existing material, so nothing is assumed here.
    education: [] as readonly string[],

    pressHeading: 'Press',
    press: [] as readonly { title: string; publisher: string; date: string; href: string }[],

    communityHeading: 'Community',
    community: [] as readonly { title: string; platform: string; href: string }[],

    faqHeading: 'FAQ',
    faq: [
      {
        q: `Who is ${site.fullName}?`,
        a: 'Erik Taylor is a senior product designer based in Denver, Colorado, working remotely, with more than eighteen years of experience. He started at IBM in 2008 as a copywriter and moved through team lead into product ownership and UX design, then spent four years at Transamerica designing the World Financial Group agent portal for licensed financial agents, and a year at Tovuti LMS on admin and learner experiences for its learning platform. He works upstream — research, information architecture, and design systems, where the decisions get made — rather than downstream on visual polish. He is currently freelance and open to full-time roles.',
      },
      {
        q: `What has ${site.shortName} built?`,
        a: 'At IBM he owned the Digital Sellers Guidebook: built on WordPress with role-segmented content — product pages, knowledge base, and a searchable video library — informed by stakeholder interviews with sellers and managers. At Transamerica he built a design system for the World Financial Group agent portal, redesigned new-agent onboarding with research-backed targets for task completion, engagement, and satisfaction (no post-launch metrics were measured), and rebuilt global navigation around frequency of use rather than the org chart. At Tovuti LMS he owned the design system, led go/no-go discovery on a business-critical approval-workflow feature, and designed JEM, an AI journey-mapping tool shipped with the platform\'s lead engineer that saves teams 10–15 hours per discovery cycle. He also built this site, including the retrieval-augmented assistant that answers questions about his work.',
      },
    ],

    connectHeading: 'Connect',
    email: site.email,
  },
} as const
