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
 */
import { site } from './site.config'

export type AboutLang = 'en'

export const aboutContent = {
  en: {
    slug: 'about',
    seo: {
      title: `${site.fullName} | ${site.tagline}`,
      description: 'TODO: 150-160 chars. Who you are and the most credible proof.',
    },
    heading: site.fullName,
    manifesto: 'TODO: One sentence capturing your point of view. It reads first.',
    storyCta: { label: '', desc: '', href: '' },
    subtitle: site.tagline,
    location: site.location,
    lastUpdated: 'TODO: Month Year',
    bio: [
      'TODO: First paragraph — where you come from and what you built. Third person, concrete facts.',
      'TODO: Second paragraph — what you build now. Name the systems and the numbers.',
      'TODO: Third paragraph — education, certifications, anything verifiable.',
    ],
    seeking: '',
    roles: [] as readonly string[],

    timelineHeading: 'Timeline',
    timeline: [
      { period: 'TODO: 2024–', role: 'TODO: Title', company: 'TODO: Company', desc: 'TODO: One line.' },
    ],

    projectsHeading: 'Projects',
    projects: [] as readonly { name: string; desc: string; href: string }[],

    certificationsHeading: 'Certifications',
    certifications: [] as readonly { org: string; items: readonly string[] }[],

    educationHeading: 'Education',
    education: ['TODO: Institution — Programme'] as readonly string[],

    pressHeading: 'Press',
    press: [] as readonly { title: string; publisher: string; date: string; href: string }[],

    communityHeading: 'Community',
    community: [] as readonly { title: string; platform: string; href: string }[],

    faqHeading: 'FAQ',
    faq: [
      {
        q: `Who is ${site.fullName}?`,
        a: 'TODO: A complete 3-5 sentence answer. This is what an AI assistant will quote verbatim. Include role, location, what you have built, and what sets you apart.',
      },
      {
        q: `What has ${site.shortName} built?`,
        a: 'TODO: Describe your main systems with their numbers.',
      },
    ],

    connectHeading: 'Connect',
    email: site.email,
  },
} as const
