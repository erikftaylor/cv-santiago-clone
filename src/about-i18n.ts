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
        'Erik Taylor is a Denver-based product designer with 15+ years across IBM, Transamerica, and Tovuti LMS, working upstream where AI meets UX. Now freelance.',
    },
    heading: site.fullName,
    manifesto: 'The decisions that matter get made upstream of the build — before anything gets generated.',
    storyCta: { label: '', desc: '', href: '' },
    subtitle: site.tagline,
    location: site.location,
    lastUpdated: 'August 2026',
    bio: [
      'Erik Taylor has been working on software since 2008, when he joined IBM as a copywriter. Over the twelve years that followed he moved from copywriting to team lead to product owner and UX designer, ending with ownership of the Digital Sellers Guidebook — an adoption problem wearing a platform problem as a disguise. Stakeholder interviews surfaced the real constraint: sellers had high cognitive load and no time for training, so any fix that asked them to learn something new, somewhere new, would have failed the same way.',
      'At Transamerica he designed the World Financial Group agent portal, the tools licensed agents work in daily. He joined a redesign whose direction was already set and argued for user interviews and usability testing anyway, built a design system tailored to WFG rather than bending its requirements onto an off-the-shelf component set, and rebuilt global navigation around frequency of use instead of the org chart. At Tovuti LMS he designed admin and learner experiences, and built a journey map generator that turns help-center content into persona-based journey maps with Zendesk and Slack wired in, so every incoming complaint pins to a journey step and auto-classifies by owner.',
      'He is freelance as of 2026, based in Denver and working remotely, focused on where AI is changing what design owns. He audits organizations against WCAG 2.2 AA and holds his own work to the same bar. This site is part of the record rather than a description of it: the assistant behind the "Ask me" button is a retrieval-augmented build on Claude, with automated evaluations and tracing behind it.',
    ],
    seeking: 'Open to full-time roles in:',
    roles: [...site.roles] as readonly string[],

    timelineHeading: 'Timeline',
    timeline: [
      { period: '2026 –', role: 'Product Designer', company: 'Freelance', desc: 'Product design for teams shipping software, discovery through engineering handoff.' },
      { period: '2025 – 2026', role: 'Product Designer', company: 'Tovuti LMS', desc: 'Admin and learner experiences for the LMS platform.' },
      { period: '2020 – 2024', role: 'UX Designer', company: 'Transamerica', desc: 'The World Financial Group agent portal and its design system.' },
      { period: '2017 – 2020', role: 'Product Owner / UX Designer', company: 'IBM', desc: 'Owned the Digital Sellers Guidebook.' },
      { period: '2010 – 2017', role: 'Team Lead', company: 'IBM', desc: 'Team lead prior to moving into product ownership and design.' },
      { period: '2008 – 2010', role: 'Copywriter', company: 'IBM', desc: 'Where the fifteen years starts — writing before designing.' },
    ],

    projectsHeading: 'Projects',
    projects: [
      {
        name: 'Journey Map Generator',
        desc: 'Tovuti LMS · Persona-based journey maps from help-center content, with Zendesk and Slack pinned to each step.',
        href: 'https://etaylor.co/i-vibe-coded-a-journey-map-generator-auto-synthesizing-docs-and-demos-into-actionable-friction-maps',
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
        a: 'Erik Taylor is a product designer based in Denver, Colorado, working remotely, with more than fifteen years of experience. He started at IBM in 2008 as a copywriter and moved through team lead into product ownership and UX design, then spent four years at Transamerica designing the World Financial Group agent portal for licensed financial agents, and a year at Tovuti LMS on admin and learner experiences for its learning platform. He works upstream — research, information architecture, and design systems, where the decisions get made — rather than downstream on visual polish. He is currently freelance and open to full-time roles.',
      },
      {
        q: `What has ${site.shortName} built?`,
        a: 'At IBM he owned the Digital Sellers Guidebook, built on WordPress so it integrated with tools sellers already used instead of asking anyone to learn new infrastructure. At Transamerica he built a design system for the World Financial Group agent portal and rebuilt its global navigation around frequency of use rather than the org chart, accepting that the tradeoff deprioritizes rarely-used tools. At Tovuti LMS he built a journey map generator that synthesizes help-center content into persona-based journey maps and wires in Zendesk and Slack so every support complaint pins to a journey step and auto-classifies by owner, going from prototype to engineering handoff inside eight weeks. He also built this site, including the retrieval-augmented assistant that answers questions about his work.',
      },
    ],

    connectHeading: 'Connect',
    email: site.email,
  },
} as const
