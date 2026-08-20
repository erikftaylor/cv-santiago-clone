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

export type Lang = 'es' | 'en'

export const seo = {
  en: {
    title: `${site.brand} | ${site.tagline}`,
    description:
      'Denver-based product designer, 15+ years across global enterprise, financial services, and learning platforms. Research through engineering handoff.',
  },
  es: {
    title: `${site.brand} | ${site.tagline}`,
    description:
      'Diseñador de producto en Denver, 15+ años en software empresarial, servicios financieros y plataformas de aprendizaje.',
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
      'Product Designer',
      'UX Designer',
      'Design Systems Builder',
      'AI × UX Practitioner',
    ],
    /** The three words in the hero's beam pill. */
    heroPill: ['Research', 'Systems', 'Handoff'],
    pillLabels: ['Product Designer', 'AI × UX'],
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
          role: 'Product Designer',
          period: '2026 – Present',
          desc: 'Product design for teams shipping software — discovery through engineering handoff.',
          highlights: [
            'TODO: name an engagement worth listing, or delete this line and let the description stand alone.',
          ],
        },
        {
          company: 'Tovuti LMS',
          location: 'Remote',
          role: 'Product Designer',
          period: '2025 – 2026',
          desc: 'Designed admin and learner experiences for the LMS platform.',
          highlights: [
            'TODO: confirm attribution — the Journey Map Generator (see Projects) reads like this role, but the case study never names the employer. If it belongs here, move its highlights up.',
          ],
        },
        {
          company: 'Transamerica',
          location: 'Denver, CO',
          role: 'UX Designer',
          period: '2020 – 2024',
          desc: 'Designed the World Financial Group (WFG) agent portal — the tools licensed agents work in daily.',
          highlights: [
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
            'Built the guidebook on WordPress instead of a purpose-built platform so it integrated with tools IBM sellers already used and asked no one to learn new infrastructure. The tradeoff was less flexibility.',
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
          title: 'Journey Map Generator',
          badge: 'Solo build · 8 weeks',
          desc: 'A feature was drawing negative feedback and the root causes were opaque — a ticket saying "confusing" does not say which step confused anyone. Rather than hand-synthesize help docs, demo transcripts, and scattered complaints over weeks, I built a tool that generates persona-based journey maps from help-center content and wires in Zendesk and Slack so every complaint pins to a journey step, auto-classified by owner. The bet: a week lost if it was wrong, months of manual audit saved if it worked. Prototype to shipped tool to engineering handoff inside the eight-week window.',
          tech: ['Journey Mapping', 'Zendesk', 'Slack', 'Research Synthesis', 'AI-Assisted Build'],
          link: 'etaylor.co/i-vibe-coded-a-journey-map-generator-auto-synthesizing-docs-and-demos-into-actionable-friction-maps',
        },
        {
          title: 'WFG Agent Portal',
          badge: 'Transamerica',
          desc: 'The agent portal was unintuitive and impersonal — essential tools were hard to find and nothing adapted to the agent using it. I joined after direction was set and argued for user interviews and usability testing anyway, then built a design system tailored to WFG rather than bending the experience into an off-the-shelf component set.',
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
          desc: 'Sellers saw the platform as overhead, not help, and managers had no way to demonstrate value in the time sellers had. The real constraint was cognitive load, not awareness — so the guidebook was built on tooling sellers already used rather than asking them to learn somewhere new.',
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

  // ═══════════════════════════════════════════════════════════════════════════
  // ESPAÑOL
  //
  // ⚠️  Erik does not publish in Spanish and cannot proofread this. It exists
  //     only because the upstream project was ES-primary. If the Spanish route
  //     is not wanted, strip it rather than maintaining two languages — see the
  //     note in README. Translations below are faithful to the English.
  // ═══════════════════════════════════════════════════════════════════════════
  es: {
    greeting: 'que trabaja antes de que se construya',
    greetingRoles: [
      'Diseñador de Producto',
      'Diseñador UX',
      'Constructor de Design Systems',
      'Práctica en IA × UX',
    ],
    heroPill: ['Investigación', 'Sistemas', 'Entrega'],
    pillLabels: ['Diseñador de Producto', 'IA × UX'],
    email: site.email,
    role: '',
    location: site.location,
    roles: site.roles,

    story: {
      context: '15+ años, empezando como redactor en IBM en 2008.',
      reflections: ['La decisión es la historia.', '…no el diagrama de proceso.'],
      hookParagraphs: [
        ['Trabajo *aguas arriba.*'],
        [
          'Donde se toman las decisiones de diseño —',
          '+antes de que se genere nada+.',
        ],
      ],
      why: 'Software empresarial en IBM, servicios financieros en Transamerica, plataformas de aprendizaje en Tovuti LMS. De la investigación a la entrega a ingeniería, con los tradeoffs dichos en voz alta.',
      seeking: [
        'Ahora freelance.',
        'Trabajando donde la IA cambia lo que el diseño asume.',
        'Abierto al puesto adecuado a tiempo completo.',
      ],
      nav: [
        { icon: 'briefcase', label: 'Mi camino', href: '#experience' },
        { icon: 'folder', label: 'Lo que construyo', href: '#projects' },
        { icon: 'mail', label: 'Hablemos', href: '#contact' },
        { icon: 'bot', label: 'Pregúntame', href: '#chat', highlight: true },
      ],
      skills: ['Diseño de Producto', 'Investigación UX', 'Design Systems', 'Flujos con IA'],
      skipButton: 'Saltar intro',
    },

    summary: {
      p2: 'Más de quince años en ',
      p2Highlight: 'software empresarial, servicios financieros y plataformas de aprendizaje',
      p2End: ' — ahora freelance, trabajando donde la IA cambia de qué responde el diseño.',
    },

    coreCompetencies: {
      title: 'Lo que aporto',
      items: [
        {
          title: 'Colaboración multidisciplinar',
          desc: 'Traduzco entre diseño, producto e ingeniería — y cada vez más entre la intención humana y la salida de un modelo. Las decisiones avanzan más rápido cuando todos parten de la misma imagen.',
        },
        {
          title: 'Design Systems en Figma',
          desc: 'Del wireframe inicial al sistema listo para producción. Trabajo en Figma como los ingenieros trabajan en código: estructura, consistencia y entregas que no necesitan una reunión para descifrarse.',
        },
        {
          title: 'Diseño para experiencias generadas por IA',
          desc: 'Los productos con IA traen una clase nueva de problemas de UX: salidas no deterministas, varianza de confianza, señales de fiabilidad y estados de fallo que no se comportan como errores tradicionales.',
        },
        {
          title: 'Decisiones basadas en investigación',
          desc: 'Los datos cualitativos y cuantitativos guían las decisiones importantes, incluidos los ciclos de feedback para interfaces generadas por IA, donde la varianza es mayor y los casos límite menos predecibles.',
        },
        {
          title: 'Flujos de diseño integrados con IA',
          desc: 'Síntesis de investigación, documentación de design systems, de prompt a prototipo. Como práctica de trabajo, no como comentario.',
        },
        {
          title: 'Accesibilidad WCAG 2.2 AA',
          desc: 'Audito organizaciones con ese estándar y aplico el mismo listón a mi propio trabajo.',
        },
      ],
    },

    experience: {
      title: 'Experiencia',
      items: [
        {
          company: 'Freelance',
          location: 'Denver, CO · Remoto',
          role: 'Diseñador de Producto',
          period: '2026 – Presente',
          desc: 'Diseño de producto para equipos que lanzan software — del descubrimiento a la entrega a ingeniería.',
          highlights: [
            'TODO: nombrar un proyecto que merezca listarse, o borrar esta línea y dejar la descripción sola.',
          ],
        },
        {
          company: 'Tovuti LMS',
          location: 'Remoto',
          role: 'Diseñador de Producto',
          period: '2025 – 2026',
          desc: 'Diseñé las experiencias de administración y de alumno de la plataforma LMS.',
          highlights: [
            'TODO: confirmar atribución — el Generador de Journey Maps (ver Proyectos) encaja con este puesto, pero el caso de estudio no nombra a la empresa.',
          ],
        },
        {
          company: 'Transamerica',
          location: 'Denver, CO',
          role: 'Diseñador UX',
          period: '2020 – 2024',
          desc: 'Diseñé el portal de agentes de World Financial Group (WFG), las herramientas que los agentes usan a diario.',
          highlights: [
            'Me incorporé a un rediseño con la dirección ya fijada y defendí añadir entrevistas y pruebas de usabilidad, para que el trabajo partiera de los problemas reales de los agentes y no de suposiciones heredadas del portal anterior. Costó tiempo no presupuestado; no hacerlo arriesgaba resolver la fricción equivocada.',
            'Construí un design system a medida para WFG en lugar de reutilizar un set de componentes genérico, porque su marca y sus requisitos funcionales no encajaban en los patrones existentes.',
            'Reconstruí la navegación global por frecuencia de uso en lugar de por organigrama: los agentes no pedían menos funciones, pedían menos pasos hasta las que usaban constantemente, como Comisiones y Gestión de Clientes.',
            'Acepté el tradeoff de que ordenar por frecuencia despriorizaba del todo algunas herramientas. Es una apuesta a que esos agentes son suficientemente pocos como para asumir un clic extra, y no será demostrable hasta que lleguen los datos del despliegue completo.',
          ],
        },
        {
          company: 'IBM',
          location: 'Remoto',
          role: 'Product Owner / Diseñador UX',
          period: '2017 – 2020',
          desc: 'Fui responsable del Digital Sellers Guidebook — un problema de adopción disfrazado de problema de plataforma.',
          highlights: [
            'Los comerciales veían la plataforma existente como una carga, no como una ayuda. Las entrevistas con comerciales y managers revelaron la restricción real: mucha carga cognitiva y ningún tiempo para formarse. Cualquier solución que pidiera aprender algo nuevo, en un sitio nuevo, habría fallado igual.',
            'Construí el guidebook sobre WordPress en lugar de una plataforma a medida, para que se integrara con las herramientas que los comerciales ya usaban y no obligara a nadie a aprender infraestructura nueva. El tradeoff fue menos flexibilidad.',
          ],
        },
        {
          company: 'IBM',
          location: 'Remoto',
          role: 'Team Lead',
          period: '2010 – 2017',
          desc: 'Responsable de equipo antes de pasar a product ownership y diseño.',
          highlights: [],
        },
        {
          company: 'IBM',
          location: 'Remoto',
          role: 'Redactor',
          period: '2008 – 2010',
          desc: 'Donde empiezan los quince años — escribir antes que diseñar.',
          highlights: [],
        },
      ] as readonly ExperienceItem[],
    },

    projects: {
      title: 'Casos de estudio',
      githubLink: site.social.github.replace('https://', ''),
      viewCode: 'Leer el caso',
      viewPrototype: 'Ver prototipo',
      items: [
        {
          title: 'Generador de Journey Maps',
          badge: 'En solitario · 8 semanas',
          desc: 'Una funcionalidad recibía feedback negativo y las causas raíz eran opacas: un ticket que dice "confuso" no dice qué paso confundió a nadie. En vez de sintetizar a mano documentación, transcripciones y quejas dispersas durante semanas, construí una herramienta que genera journey maps por persona a partir del centro de ayuda y conecta Zendesk y Slack para que cada queja quede anclada a un paso y clasificada por responsable. La apuesta: perder una semana si me equivocaba, ahorrar meses de auditoría manual si funcionaba. De prototipo a herramienta entregada a ingeniería dentro de las ocho semanas.',
          tech: ['Journey Mapping', 'Zendesk', 'Slack', 'Síntesis de investigación', 'Construcción con IA'],
          link: 'etaylor.co/i-vibe-coded-a-journey-map-generator-auto-synthesizing-docs-and-demos-into-actionable-friction-maps',
        },
        {
          title: 'Portal de Agentes WFG',
          badge: 'Transamerica',
          desc: 'El portal era poco intuitivo e impersonal: las herramientas esenciales costaban de encontrar y nada se adaptaba al agente. Me incorporé con la dirección ya fijada y aun así defendí entrevistas y pruebas de usabilidad, y construí un design system a medida en lugar de forzar la experiencia dentro de componentes genéricos.',
          tech: ['Design Systems', 'Figma', 'Pruebas de usabilidad', 'Entrevistas'],
          link: 'etaylor.co/empowering-financial-agents-with-a-redesigned-portal-experience',
        },
        {
          title: 'Navegación para Asesores',
          badge: 'Transamerica',
          desc: 'Los agentes no llegaban a las herramientas que usaban constantemente: la navegación global estaba saturada de enlaces y subcategorías, y en móvil era peor. Recorté enlaces y reordené el resto por frecuencia de uso en lugar de por organigrama. El tradeoff — enterrar herramientas poco usadas — es una apuesta que no será demostrable hasta el despliegue completo.',
          tech: ['Arquitectura de información', 'Móvil', 'Pruebas de usabilidad', 'Figma'],
          link: 'etaylor.co/boosting-advisor-efficiency-with-a-renovated-navigation-experience',
        },
        {
          title: 'IBM Digital Sellers Guidebook',
          badge: 'IBM',
          desc: 'Los comerciales veían la plataforma como una carga, no como una ayuda, y los managers no podían demostrar su valor en el tiempo disponible. La restricción real era la carga cognitiva, no el desconocimiento: por eso el guidebook se construyó sobre herramientas que ya usaban.',
          tech: ['WordPress', 'Entrevistas', 'Diseño de contenido', 'Adopción'],
          link: 'etaylor.co/driving-adoption-and-engagement-with-ibms-digital-sellers-guidebook',
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
      items: [] as readonly { year: string; org: string; title: string; desc: string }[],
    },

    certifications: {
      title: 'Certificaciones',
      items: [] as readonly { year: string; title: string; org: string; logo?: string; url?: string }[],
    },

    skills: {
      title: 'Habilidades',
      languages: 'Idiomas',
      languageList: [{ name: 'Inglés', level: 'Nativo' }] as readonly LanguageSkill[],
      soft: 'Práctica',
      softSkills: [
        'Entrevistas con stakeholders',
        'Pruebas de usabilidad',
        'Síntesis de investigación',
        'Design systems',
        'Arquitectura de información',
        'Colaboración multidisciplinar',
        'Entrega a ingeniería',
        'Accesibilidad (WCAG 2.2 AA)',
      ],
    },

    techStack: {
      title: 'Herramientas',
      categories: [
        { name: 'Diseño', items: ['Figma', 'Design Systems', 'Prototipado', 'Wireframing'] },
        { name: 'Investigación', items: ['Pruebas de usabilidad', 'Journey Mapping', 'Entrevistas'] },
        { name: 'IA', items: ['Claude', 'Prompt-to-Prototype', 'Síntesis de investigación'] },
        { name: 'Plataformas', items: ['WordPress', 'Zendesk', 'Slack'] },
      ],
    },

    cta: {
      title: 'Hablemos',
      desc: 'Abierto al puesto adecuado a tiempo completo, y disponible para diseño de producto freelance mientras tanto.',
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
      subtitle: 'Pregúntame sobre mi trabajo',
      greeting: `¡Hola! Soy **${site.shortName}**. Pregúntame lo que quieras: los casos de estudio, cómo trabajo, qué busco.`,
      error: 'Error al enviar. Inténtalo de nuevo.',
      offline: 'Parece que no hay conexión a internet. Comprueba tu red e inténtalo de nuevo.',
      prompts: [
        { icon: 'briefcase', label: 'Experiencia', query: `¿Cuál es la trayectoria de ${site.fullName}?` },
        { icon: 'rocket', label: 'Casos de estudio', query: `Cuéntame los casos de estudio de ${site.fullName}.` },
        { icon: 'target', label: 'Qué busco', query: `¿Qué puestos busca ${site.fullName}?` },
      ],
      contactCtaTitle: '¿Prefieres email?',
      voice: {
        start: `Hablar con ${site.shortName}`,
        stop: 'Terminar',
        connecting: 'Conectando...',
        listening: 'Te escucho...',
        thinking: 'Pensando...',
        searching: 'Buscando en mis casos de estudio...',
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
