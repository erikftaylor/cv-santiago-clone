/**
 * SITE CONTENT (EN / ES)
 * ──────────────────────
 * All user-facing homepage copy. Identity constants (name, domain, email,
 * socials) live in `site.config.ts` — do not duplicate them here.
 *
 * Sections are uniform ARRAYS. Add a job by appending to `experience.items`;
 * the page renders it. No JSX changes required.
 *
 * ── EDITORIAL RULES (from PRODUCT.md, confirmed 2026-08-06) ────────────────
 * These are not style preferences. They are the reason the work reads as
 * credible, and breaking them costs more than the copy gains:
 *
 *   1. THE BET IS THE STORY. Lead with the decision, the tradeoff, and its
 *      open status — never with a process description.
 *   2. UNPROVEN STAYS UNPROVEN. The case studies state plainly that their
 *      metrics are not yet realized. Do not convert research-backed *goals*
 *      into achieved outcomes, and do not attach numbers to any of them.
 *   3. ONE HONEST CLAIM BEATS TWO IMPRESSIVE ONES. Tenure is **15+ years**,
 *      counted from IBM in 2008. The old "8+ years" line is retired; the two
 *      must never appear together.
 *   4. Erik is **freelance** — no longer at Tovuti LMS. All Tovuti copy is
 *      past tense.
 *   5. Ridgeframe Strategies and his co-founder are deliberately OFF this
 *      surface. Do not add them.
 *   6. Availability is stated quietly, in the contact section only. No banner,
 *      no badge, no urgency device.
 */
import { site } from './site.config'

/** Single-language site. See site.config.ts. */
export type Lang = 'en'

export const seo = {
  en: {
    title: `${site.brand} | ${site.tagline}`,
    description:
      'Denver-based senior product designer, 15+ years across global enterprise, financial services, and learning platforms. Research through engineering handoff.',
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared shapes
// ─────────────────────────────────────────────────────────────────────────────
export interface ExperienceItem {
  company: string
  logo?: string
  location: string
  role: string
  period: string
  desc: string
  highlights: readonly string[]
  badge?: string
  url?: string
  urlLabel?: string
  /** Internal route only — external links belong in `projects`. */
  caseStudyUrl?: string
  caseStudyLabel?: string
}

export interface ProjectItem {
  title: string
  badge?: string
  desc: string
  tech: readonly string[]
  /** Bare host + path, no protocol — the UI adds it. */
  link?: string
}

export interface LanguageSkill {
  name: string
  level: string
}

export const translations = {
  // ═══════════════════════════════════════════════════════════════════════════
  // ENGLISH
  // ═══════════════════════════════════════════════════════════════════════════
  en: {
    greeting: 'who works upstream of the build',
    greetingRoles: [
      'Senior Product Designer',
      'UX Designer',
      'Design Systems Builder',
      'AI × UX Practitioner',
    ],
    /** The three words in the hero's beam pill. */
    heroPill: ['Research', 'Systems', 'Handoff'],
    pillLabels: ['Senior Product Designer', 'AI × UX'],
    email: site.email,
    role: '',
    location: site.location,
    roles: site.roles,

    // ── Intro animation ──────────────────────────────────────────────────
    story: {
      context: '15+ years of it, starting as an IBM copywriter in 2008.',
      reflections: ['The decision is the story.', '…not the process diagram.'],
      hookParagraphs: [
        ['I work *upstream.*'],
        [
          'Where design decisions get made —',
          '+before anything gets generated+.',
        ],
      ],
      why: 'Enterprise at IBM, financial services at Transamerica, learning platforms at Tovuti LMS. Research through engineering handoff, and the tradeoffs named out loud.',
      seeking: [
        'Now freelance.',
        'Working where AI is changing what design owns.',
        'Open to the right full-time role.',
      ],
      nav: [
        { icon: 'briefcase', label: 'My path', href: '#experience' },
        { icon: 'folder', label: 'What I build', href: '#projects' },
        { icon: 'mail', label: "Let's talk", href: '#contact' },
        { icon: 'bot', label: 'Ask me', href: '#chat', highlight: true },
      ],
      skills: ['Product Design', 'UX Research', 'Design Systems', 'AI-Integrated Workflows'],
      skipButton: 'Skip intro',
    },

    summary: {
      p2: 'Fifteen-plus years across ',
      p2Highlight: 'global enterprise, financial services, and learning platforms',
      p2End: ' — now freelance, working where AI is changing what design is responsible for.',
    },

    // ── What I deliver ───────────────────────────────────────────────────
    coreCompetencies: {
      title: 'What I deliver',
      items: [
        {
          title: 'Cross-Functional Collaboration',
          desc: 'I translate between design, product, and engineering — and increasingly between human intent and AI output. Decisions move faster when everyone is working from the same picture.',
        },
        {
          title: 'Design Systems in Figma',
          desc: 'From early wireframes to production-ready systems. I work in Figma the way engineers work in code: structure, consistency, and handoffs that do not require a meeting to decode.',
        },
        {
          title: 'Designing for AI-Generated Experiences',
          desc: 'AI products introduce a new class of UX problems — non-deterministic outputs, confidence variance, trust signals, and failure states that do not behave like traditional errors.',
        },
        {
          title: 'Research-Driven Decisions',
          desc: 'Qualitative and quantitative insight shapes the major calls, including feedback loops for AI-generated interfaces where variance is higher and edge cases are less predictable.',
        },
        {
          title: 'AI-Integrated Design Workflows',
          desc: 'Research synthesis, design-system documentation, prompt-to-prototype. Built as working practice rather than commentary.',
        },
        {
          title: 'Accessibility to WCAG 2.2 AA',
          desc: 'I audit organizations against it and hold my own work to the same bar.',
        },
      ],
    },

    // ── Work history ─────────────────────────────────────────────────────
    experience: {
      title: 'Experience',
      items: [
        {
          company: 'Freelance',
          location: 'Denver, CO · Remote',
          role: 'Senior Product Designer',
          period: '2026 – Present',
          desc: 'Product design for teams shipping software — discovery through engineering handoff.',
          highlights: [],
        },
        {
          company: 'Tovuti LMS',
          location: 'Remote',
          role: 'Senior Product Designer',
          period: '2025 – 2026',
          desc: 'Led design across admin and learner surfaces, and owned the design system.',
          highlights: [
            'Designed and shipped JEM, an AI journey-mapping tool. Teams were losing 10–15 hours per discovery cycle hand-synthesizing help docs, transcripts, and support tickets, so I designed the product — source ingestion, a guided AI scoping chat, an editable persona-by-stage canvas — defined its data model, and shipped it with the platform\'s lead engineer. Ten fixes landed in the first week of production.',
            'Led discovery on Checkpoints, an approval-workflow feature carrying $500K+ ARR and a set of at-risk accounts: synthesized 60+ support tickets, Slack signals, and internal case notes into four persona journey maps and five go/no-go gates before GA — including silent auto-approvals, a compliance risk no ticket had named.',
            'Owned the design system: token layer defined first, with a governance rule that every custom component traces back to a real primitive — so 8–12 engineers build from one shared taxonomy instead of drifting into one-offs. Specs held to WCAG AA.',
          ],
        },
        {
          company: 'Transamerica',
          location: 'Denver, CO',
          role: 'UX Designer',
          period: '2020 – 2024',
          desc: 'Designed the World Financial Group (WFG) agent portal — the tools licensed agents work in daily.',
          highlights: [
            'Redesigned new-agent onboarding on a research base of 100+ financial advisors across the US and Canada — a card-based homepage over a blank dashboard, entitlements shaping what recruits versus licensed agents see. Onboarding adoption among new agents rose 30% after launch.',
            'Joined a redesign whose direction was already set and pushed to add user interviews and usability testing, so the work was grounded in actual agent pain points rather than assumptions carried over from the prior portal. It cost time the team had not budgeted; skipping it risked solving the wrong friction.',
            'Built a custom design system for WFG rather than reusing an off-the-shelf component set, because WFG branding and functional requirements did not map cleanly onto existing patterns.',
            'Rebuilt global navigation around frequency of use rather than the org chart — agents were not asking for fewer features, they were asking for fewer steps to the ones they used constantly, like Commissions and Client Management.',
            'Accepted the tradeoff that frequency-based ordering deprioritizes rarely-used tools entirely. That is a bet on those agents being rare enough to accept the extra click, and it will not be provable until full rollout data comes in.',
          ],
        },
        {
          company: 'IBM',
          location: 'Remote',
          role: 'Product Owner / UX Designer',
          period: '2017 – 2020',
          desc: 'Owned the Digital Sellers Guidebook — an adoption problem wearing a platform problem as a disguise.',
          highlights: [
            'Sellers treated the existing platform as overhead rather than help. Stakeholder interviews with sellers and managers surfaced the real constraint: high cognitive load and no time for training. Any fix that asked sellers to learn something new, somewhere new, would have failed the same way.',
            'Ran a five-platform evaluation — WordPress, w3 Publisher, custom w3DS, Seismic, IBM Connections — and moved the guidebook to w3 Publisher for supported metrics and search indexing, keeping WordPress only for the knowledge base. The tradeoff, named up front: less customization and no embedded video.',
            'Restructured that knowledge base around seller journeys — Clients, Contacts, Communications, Opportunity — with manager and seller paths separated, instead of mirroring how the content team was organized.',
          ],
        },
        {
          company: 'IBM',
          location: 'Remote',
          role: 'Team Lead',
          period: '2010 – 2017',
          desc: 'Team lead prior to moving into product ownership and design.',
          highlights: [],
        },
        {
          company: 'IBM',
          location: 'Remote',
          role: 'Copywriter',
          period: '2008 – 2010',
          desc: 'Where the fifteen years starts — writing before designing.',
          highlights: [],
        },
      ] as readonly ExperienceItem[],
    },

    // ── Case studies ─────────────────────────────────────────────────────
    // Each leads with the decision and its open status, per PRODUCT.md rule 1.
    projects: {
      title: 'Case studies',
      githubLink: site.social.github.replace('https://', ''),
      viewCode: 'Read the case study',
      viewPrototype: 'View prototype',
      items: [
        {
          title: 'JEM (Journey Experience Mapper)',
          badge: 'Tovuti LMS · 8 weeks',
          desc: 'Product teams were losing 10–15 hours per discovery cycle hand-synthesizing help docs, transcripts, and support tickets into journey maps. I designed JEM — source ingestion, a guided AI scoping chat, an editable persona-by-stage canvas — defined its data model, and shipped it with Tovuti\'s lead engineer inside the eight-week window. The bet: a week lost if it was wrong, those hours back every cycle if it worked. Ten fixes shipped in the first week of production.',
          tech: ['Journey Mapping', 'Zendesk', 'Slack', 'Research Synthesis', 'AI-Assisted Build'],
          link: 'etaylor.co/i-vibe-coded-a-journey-map-generator-auto-synthesizing-docs-and-demos-into-actionable-friction-maps',
        },
        {
          title: 'Checkpoints Go/No-Go',
          badge: 'Tovuti LMS',
          desc: 'An approval-workflow feature carrying $500K+ ARR was "broken again" in support channels, and nobody could say precisely how. I synthesized 60+ Zendesk tickets, Slack signals, and internal case notes into four persona journey maps and a five-gate go/no-go assessment — surfacing silent auto-approvals, a compliance risk no ticket had named. The gates went to leadership before GA; the fixes are theirs to sequence.',
          tech: ['Discovery', 'Journey Mapping', 'Zendesk', 'Risk Assessment'],
        },
        {
          title: 'WFG Agent Portal',
          badge: 'Transamerica',
          desc: 'The agent portal was unintuitive and impersonal — essential tools were hard to find and nothing adapted to the agent using it. I joined after direction was set and argued for user interviews and usability testing anyway, then built a design system tailored to WFG rather than bending the experience into an off-the-shelf component set. The research base ran to 100+ financial advisors across the US and Canada; onboarding adoption among new agents rose 30% after launch.',
          tech: ['Design Systems', 'Figma', 'Usability Testing', 'Stakeholder Interviews'],
          link: 'etaylor.co/empowering-financial-agents-with-a-redesigned-portal-experience',
        },
        {
          title: 'Advisor Navigation',
          badge: 'Transamerica',
          desc: 'Licensed agents could not get to the tools they used constantly: the global nav was cluttered with links and subcategories, and mobile was worse. I cut links and reordered what remained by frequency of use rather than by org chart. The tradeoff — burying rarely-used tools — is a bet that will not be provable until full rollout data comes in.',
          tech: ['Information Architecture', 'Mobile', 'Usability Testing', 'Figma'],
          link: 'etaylor.co/boosting-advisor-efficiency-with-a-renovated-navigation-experience',
        },
        {
          title: 'IBM Digital Sellers Guidebook',
          badge: 'IBM',
          desc: 'Sellers saw the platform as overhead, not help — the real constraint was cognitive load, not awareness. A five-platform evaluation moved the guidebook to w3 Publisher, kept WordPress for the knowledge base, and the KB itself was restructured around seller journeys rather than how the content team was organized.',
          tech: ['WordPress', 'Stakeholder Interviews', 'Content Design', 'Adoption'],
          link: 'etaylor.co/driving-adoption-and-engagement-with-ibms-digital-sellers-guidebook',
        },
      ] as readonly ProjectItem[],
    },

    speaking: {
      title: 'Speaking & writing',
      comingSoon: 'More coming soon',
      slides: 'Slides',
      items: [] as readonly { title: string; org: string; year: string; desc: string; url?: string }[],
    },

    education: {
      title: 'Education',
      // TODO: add degree / institution / year. Not present in any existing
      // material, so nothing is assumed here.
      items: [] as readonly { year: string; org: string; title: string; desc: string }[],
    },

    certifications: {
      title: 'Certifications',
      // Only real credentials with working verification URLs.
      items: [] as readonly { year: string; title: string; org: string; logo?: string; url?: string }[],
    },

    skills: {
      title: 'Skills',
      languages: 'Languages',
      languageList: [{ name: 'English', level: 'Native' }] as readonly LanguageSkill[],
      soft: 'Practice',
      softSkills: [
        'Stakeholder interviews',
        'Usability testing',
        'Research synthesis',
        'Design systems',
        'Information architecture',
        'Cross-functional collaboration',
        'Engineering handoff',
        'Accessibility (WCAG 2.2 AA)',
      ],
    },

    techStack: {
      title: 'Tools',
      categories: [
        { name: 'Design', items: ['Figma', 'Design Systems', 'Prototyping', 'Wireframing'] },
        { name: 'Research', items: ['Usability Testing', 'Journey Mapping', 'Stakeholder Interviews'] },
        { name: 'AI', items: ['Claude', 'Prompt-to-Prototype', 'Research Synthesis'] },
        { name: 'Platforms', items: ['WordPress', 'Zendesk', 'Slack'] },
      ],
    },

    cta: {
      title: "Let's talk",
      desc: 'Open to the right full-time role, and available for freelance product design in the meantime.',
      contact: 'Get in touch',
    },

    ui: {
      languageBanner: 'Este sitio está disponible en español',
      languageBannerSwitch: 'Cambiar a ES',
      languageBannerSwitchPrefix: 'Switch to',
      languageBannerSwitchLang: 'ES',
      languageToggle: 'EN',
      typingIndicator: `${site.shortName} is typing...`,
    },

    chat: {
      placeholder: 'Ask me anything...',
      title: site.shortName,
      subtitle: 'Ask me about my work',
      greeting: `Hi! I'm **${site.shortName}**. Ask me anything: the case studies, how I work, what I'm looking for.`,
      error: 'Failed to send. Try again.',
      offline: 'Looks like you are offline. Check your connection and try again.',
      prompts: [
        { icon: 'briefcase', label: 'Experience', query: `What is ${site.fullName}'s background?` },
        { icon: 'rocket', label: 'Case studies', query: `Walk me through ${site.fullName}'s case studies.` },
        { icon: 'target', label: 'What I want next', query: `What roles is ${site.fullName} looking for?` },
      ],
      contactCtaTitle: 'Prefer email?',
      voice: {
        start: `Talk to ${site.shortName}`,
        stop: 'End',
        connecting: 'Connecting...',
        listening: 'Listening...',
        thinking: 'Thinking...',
        searching: 'Searching my case studies...',
        speaking: 'Speaking...',
        timeWarning: '15 seconds left',
        ended: 'Voice session ended',
        rateLimited: 'You have reached the limit of 3 voice sessions per day',
        unsupported: 'Your browser does not support audio input',
        micDenied: 'Microphone access is required for voice mode',
        switchToText: 'Switch to text',
        connection: 'Connection error. Try again.',
      },
    },
  },

} as const
