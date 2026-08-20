/**
 * SITE CONTENT (ES / EN)
 * ──────────────────────
 * All user-facing homepage copy. Identity constants (name, domain, email,
 * socials) live in `site.config.ts` — do not duplicate them here.
 *
 * Restructured from the upstream project: sections that were hardcoded to one
 * person's biography (one hardcoded key per employer) are
 * now uniform ARRAYS. Add a job by appending to `experience.items`; the page
 * renders it. No JSX changes required.
 *
 * Both `es` and `en` must stay structurally identical — the language toggle,
 * hreflang, and prerenderer all assume parity.
 */
import { site } from './site.config'

export type Lang = 'es' | 'en'

export const seo = {
  es: {
    title: `${site.brand} | ${site.tagline}`,
    description: 'TODO: 150-160 caracteres. Qué construyes y la evidencia.',
  },
  en: {
    title: `${site.brand} | ${site.tagline}`,
    description: 'TODO: 150-160 chars. What you build and the evidence for it.',
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared shapes — documented once, used by both languages.
// ─────────────────────────────────────────────────────────────────────────────
export interface ExperienceItem {
  company: string
  logo?: string
  location: string
  role: string
  period: string
  desc: string
  highlights: readonly string[]
  /** Optional pill, e.g. 'Open Source' or 'Exit 2025' */
  badge?: string
  /** External link for the org */
  url?: string
  urlLabel?: string
  /** Link to a case study on this site */
  caseStudyUrl?: string
  caseStudyLabel?: string
}

export interface ProjectItem {
  title: string
  badge?: string
  desc: string
  tech: readonly string[]
  /** Bare host + path, no protocol — the UI adds it */
  link?: string
}

export const translations = {
  // ═══════════════════════════════════════════════════════════════════════════
  // ENGLISH
  // ═══════════════════════════════════════════════════════════════════════════
  en: {
    greeting: 'TODO: the half-sentence after your name',
    greetingRoles: ['TODO: Role one', 'TODO: Role two', 'TODO: Role three'],
    pillLabels: ['TODO: Pill A', 'TODO: Pill B'],
    email: site.email,
    role: '',
    location: site.location,
    roles: site.roles,
    taglines: [] as readonly string[],

    // ── Intro animation ──────────────────────────────────────────────────
    story: {
      context: 'TODO: One line of where you come from.',
      reflections: ['TODO: A short beat.', 'TODO: …and the turn.'],
      hookParagraphs: [
        ['TODO: The line that reframes it.'],
        ['TODO: What drives you.', 'TODO: *Emphasised* +phrase+.'],
      ],
      why: 'TODO: The concrete thing you did that proves the above.',
      seeking: [
        'TODO: What you want next.',
        'TODO: The kind of team and problem.',
        'TODO: A closing line.',
      ],
      nav: [
        { icon: 'briefcase', label: 'My path', href: '#experience' },
        { icon: 'folder', label: 'What I build', href: '#projects' },
        { icon: 'mail', label: "Let's talk", href: '#contact' },
        { icon: 'bot', label: 'Ask me', href: '#chat', highlight: true },
      ],
      skills: ['TODO: Skill 1', 'TODO: Skill 2', 'TODO: Skill 3', 'TODO: Skill 4'],
      skipButton: 'Skip intro',
    },

    summary: {
      p2: 'TODO: Opening of your positioning paragraph — ',
      p2Highlight: 'TODO: the emphasised claim',
      p2End: 'TODO: — and how it closes.',
    },

    coreCompetencies: {
      title: 'Core competencies',
      items: [
        { title: 'TODO: Competency', desc: 'TODO: What you actually do inside it.' },
        { title: 'TODO: Competency', desc: 'TODO: What you actually do inside it.' },
        { title: 'TODO: Competency', desc: 'TODO: What you actually do inside it.' },
      ],
    },

    // ── Work history · append entries, do not add new keys ────────────────
    experience: {
      title: 'Experience',
      items: [
        {
          company: 'TODO: Company',
          location: 'TODO: City, Country',
          role: 'TODO: Your title',
          period: 'TODO: 2024 - Present',
          desc: 'TODO: One or two lines on the mandate.',
          highlights: [
            'TODO: An accomplishment with a number in it.',
            'TODO: A system you designed, and its constraint.',
            'TODO: Something that outlived your involvement.',
          ],
        },
        {
          company: 'TODO: Previous company',
          location: 'TODO: City, Country',
          role: 'TODO: Your title',
          period: 'TODO: 2020 - 2024',
          desc: 'TODO: One line.',
          highlights: ['TODO: Accomplishment.'],
        },
      ] as readonly ExperienceItem[],
    },

    projects: {
      title: 'Projects',
      githubLink: site.social.github.replace('https://', ''),
      viewCode: 'View code',
      viewPrototype: 'View prototype',
      items: [
        {
          title: 'TODO: Project name',
          badge: 'TODO: Status',
          desc: 'TODO: What it does and who it is for. One or two sentences.',
          tech: ['TODO', 'Tech', 'Stack'],
          link: '',
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
      items: [
        { year: 'TODO', org: 'TODO: Institution', title: 'TODO: Programme', desc: 'TODO: One line.' },
      ],
    },

    certifications: {
      title: 'Certifications',
      // Only real credentials with working verification URLs. An unverifiable
      // certification is worse than no certification.
      items: [] as readonly { year: string; title: string; org: string; logo?: string; url?: string }[],
    },

    skills: {
      title: 'Skills',
      languages: 'Languages',
      native: 'Native',
      professional: 'Professional',
      english: 'English',
      spanish: 'Spanish',
      soft: 'Soft skills',
      softSkills: ['TODO: Skill', 'TODO: Skill', 'TODO: Skill'],
    },

    techStack: {
      title: 'Tech stack',
      categories: [
        { name: 'TODO: Category', items: ['TODO', 'TODO'] },
        { name: 'TODO: Category', items: ['TODO', 'TODO'] },
      ],
    },

    // Optional showcase block. Delete the section from App.tsx if unused.
    claudeCode: {
      title: 'TODO: Showcase title',
      badge: 'TODO: Badge',
      desc: 'TODO: One paragraph.',
      highlights: [] as readonly string[],
      certs: [] as readonly { title: string; url?: string }[],
    },

    // Social proof — populate with YOUR posts, or leave empty to hide.
    linkedinPosts: { cta: 'Read on LinkedIn', items: [] as readonly unknown[] },
    xPost: null as null | Record<string, unknown>,
    redditPosts: [] as readonly unknown[],

    cta: {
      title: "TODO: Let's talk",
      desc: 'TODO: One line on what you want to hear about.',
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
      subtitle: 'Ask me about my experience',
      greeting: `Hi! I'm **${site.shortName}**. Ask me anything: experience, projects, what drives me.`,
      error: 'Failed to send. Try again.',
      offline: 'Looks like you are offline. Check your connection and try again.',
      prompts: [
        { icon: 'briefcase', label: 'Experience', query: `What is ${site.fullName}'s experience?` },
        { icon: 'rocket', label: 'Projects', query: `What are ${site.fullName}'s most notable projects?` },
        { icon: 'target', label: 'What I want next', query: `What roles is ${site.fullName} looking for?` },
      ],
      contactCtaTitle: 'Prefer email?',
      voice: {
        start: `Talk to ${site.shortName}`,
        stop: 'End',
        connecting: 'Connecting...',
        listening: 'Listening...',
        thinking: 'Thinking...',
        searching: 'Searching my projects...',
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

  // ═══════════════════════════════════════════════════════════════════════════
  // ESPAÑOL — keep structurally identical to `en`
  // ═══════════════════════════════════════════════════════════════════════════
  es: {
    greeting: 'TODO: la media frase que sigue a tu nombre',
    greetingRoles: ['TODO: Rol uno', 'TODO: Rol dos', 'TODO: Rol tres'],
    pillLabels: ['TODO: Pill A', 'TODO: Pill B'],
    email: site.email,
    role: '',
    location: site.location,
    roles: site.roles,
    taglines: [] as readonly string[],

    story: {
      context: 'TODO: Una línea sobre de dónde vienes.',
      reflections: ['TODO: Un compás corto.', 'TODO: …y el giro.'],
      hookParagraphs: [
        ['TODO: La línea que lo replantea.'],
        ['TODO: Lo que te mueve.', 'TODO: Una *frase* +enfatizada+.'],
      ],
      why: 'TODO: Lo concreto que hiciste que demuestra lo anterior.',
      seeking: [
        'TODO: Qué quieres ahora.',
        'TODO: Qué tipo de equipo y problema.',
        'TODO: Una línea de cierre.',
      ],
      nav: [
        { icon: 'briefcase', label: 'Mi camino', href: '#experience' },
        { icon: 'folder', label: 'Lo que construyo', href: '#projects' },
        { icon: 'mail', label: 'Hablemos', href: '#contact' },
        { icon: 'bot', label: 'Pregúntame', href: '#chat', highlight: true },
      ],
      skills: ['TODO: Skill 1', 'TODO: Skill 2', 'TODO: Skill 3', 'TODO: Skill 4'],
      skipButton: 'Saltar intro',
    },

    summary: {
      p2: 'TODO: Apertura de tu párrafo de posicionamiento — ',
      p2Highlight: 'TODO: la afirmación enfatizada',
      p2End: 'TODO: — y cómo cierra.',
    },

    coreCompetencies: {
      title: 'Competencias core',
      items: [
        { title: 'TODO: Competencia', desc: 'TODO: Qué haces realmente dentro.' },
        { title: 'TODO: Competencia', desc: 'TODO: Qué haces realmente dentro.' },
        { title: 'TODO: Competencia', desc: 'TODO: Qué haces realmente dentro.' },
      ],
    },

    experience: {
      title: 'Experiencia',
      items: [
        {
          company: 'TODO: Empresa',
          location: 'TODO: Ciudad, País',
          role: 'TODO: Tu puesto',
          period: 'TODO: 2024 - Presente',
          desc: 'TODO: Una o dos líneas sobre el mandato.',
          highlights: [
            'TODO: Un logro con un número.',
            'TODO: Un sistema que diseñaste, y su restricción.',
            'TODO: Algo que sobrevivió a tu marcha.',
          ],
        },
        {
          company: 'TODO: Empresa anterior',
          location: 'TODO: Ciudad, País',
          role: 'TODO: Tu puesto',
          period: 'TODO: 2020 - 2024',
          desc: 'TODO: Una línea.',
          highlights: ['TODO: Logro.'],
        },
      ] as readonly ExperienceItem[],
    },

    projects: {
      title: 'Proyectos',
      githubLink: site.social.github.replace('https://', ''),
      viewCode: 'Ver código',
      viewPrototype: 'Ver prototipo',
      items: [
        {
          title: 'TODO: Nombre del proyecto',
          badge: 'TODO: Estado',
          desc: 'TODO: Qué hace y para quién. Una o dos frases.',
          tech: ['TODO', 'Tech', 'Stack'],
          link: '',
        },
      ] as readonly ProjectItem[],
    },

    speaking: {
      title: 'Charlas y escritura',
      comingSoon: 'Próximamente más',
      slides: 'Slides',
      items: [] as readonly { title: string; org: string; year: string; desc: string; url?: string }[],
    },

    education: {
      title: 'Formación',
      items: [
        { year: 'TODO', org: 'TODO: Institución', title: 'TODO: Programa', desc: 'TODO: Una línea.' },
      ],
    },

    certifications: {
      title: 'Certificaciones',
      items: [] as readonly { year: string; title: string; org: string; logo?: string; url?: string }[],
    },

    skills: {
      title: 'Habilidades',
      languages: 'Idiomas',
      native: 'Nativo',
      professional: 'Profesional',
      english: 'Inglés',
      spanish: 'Español',
      soft: 'Soft skills',
      softSkills: ['TODO: Skill', 'TODO: Skill', 'TODO: Skill'],
    },

    techStack: {
      title: 'Stack técnico',
      categories: [
        { name: 'TODO: Categoría', items: ['TODO', 'TODO'] },
        { name: 'TODO: Categoría', items: ['TODO', 'TODO'] },
      ],
    },

    claudeCode: {
      title: 'TODO: Título del showcase',
      badge: 'TODO: Badge',
      desc: 'TODO: Un párrafo.',
      highlights: [] as readonly string[],
      certs: [] as readonly { title: string; url?: string }[],
    },

    linkedinPosts: { cta: 'Leer en LinkedIn', items: [] as readonly unknown[] },
    xPost: null as null | Record<string, unknown>,
    redditPosts: [] as readonly unknown[],

    cta: {
      title: 'TODO: Hablemos',
      desc: 'TODO: Una línea sobre qué quieres escuchar.',
      contact: 'Contactar',
    },

    ui: {
      languageBanner: 'This site is available in English',
      languageBannerSwitch: 'Switch to EN',
      languageBannerSwitchPrefix: 'Switch to',
      languageBannerSwitchLang: 'EN',
      languageToggle: 'ES',
      typingIndicator: `${site.shortName} está escribiendo...`,
    },

    chat: {
      placeholder: 'Escribe tu pregunta...',
      title: site.shortName,
      subtitle: 'Pregúntame sobre mi experiencia',
      greeting: `¡Hola! Soy **${site.shortName}**. Pregúntame lo que quieras: experiencia, proyectos, lo que me mueve.`,
      error: 'Error al enviar. Inténtalo de nuevo.',
      offline: 'Parece que no hay conexión a internet. Comprueba tu red e inténtalo de nuevo.',
      prompts: [
        { icon: 'briefcase', label: 'Experiencia', query: `¿Cuál es la experiencia de ${site.fullName}?` },
        { icon: 'rocket', label: 'Proyectos', query: `¿Cuáles son los proyectos más destacados de ${site.fullName}?` },
        { icon: 'target', label: 'Qué busco', query: `¿Qué roles busca ${site.fullName}?` },
      ],
      contactCtaTitle: '¿Prefieres email?',
      voice: {
        start: `Hablar con ${site.shortName}`,
        stop: 'Terminar',
        connecting: 'Conectando...',
        listening: 'Te escucho...',
        thinking: 'Pensando...',
        searching: 'Buscando en mis proyectos...',
        speaking: 'Hablando...',
        timeWarning: '15 segundos restantes',
        ended: 'Sesión de voz terminada',
        rateLimited: 'Has alcanzado el límite de 3 sesiones de voz por día',
        unsupported: 'Tu navegador no soporta la entrada de audio',
        micDenied: 'Se necesita acceso al micrófono para el modo voz',
        switchToText: 'Cambiar a texto',
        connection: 'Error de conexión. Inténtalo de nuevo.',
      },
    },
  },
} as const
