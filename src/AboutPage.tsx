import { site } from './site.config'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Mail, ExternalLink, Award, GraduationCap, Briefcase, ChevronRight, Clock, Newspaper, HelpCircle, Users } from 'lucide-react'
import { aboutContent, type AboutLang } from './about-i18n'

// `rel: 'me'` is the IndieAuth standard for declaring profiles/sites the person controls.
// Used here for cross-domain entity ownership signals (parsed by Mastodon, Bluesky, KG crawlers).
const SOCIAL_LABELS: Record<string, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  x: 'X / Twitter',
  instagram: 'Instagram',
  threads: 'Threads',
  youtube: 'YouTube',
  substack: 'Substack',
  devto: 'Dev.to',
  stackoverflow: 'Stack Overflow',
  orcid: 'ORCID',
  wikidata: 'Wikidata',
}

// Built from site.identity.json — empty entries are dropped, so the page never
// renders a link to a profile that does not exist.
const SOCIAL_LINKS: { name: string; url: string; rel?: string }[] = Object.entries(site.social)
  .filter(([, url]) => Boolean(url))
  .map(([key, url]) => ({
    name: SOCIAL_LABELS[key] ?? key,
    url,
    rel: 'me noopener noreferrer',
  }))

export default function AboutPage({ lang = 'en' }: { lang?: AboutLang }) {
  const t = aboutContent[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.seo.title

    let desc = document.querySelector('meta[name="description"]') as HTMLMetaElement
    if (!desc) { desc = document.createElement('meta'); desc.name = 'description'; document.head.appendChild(desc) }
    desc.content = t.seo.description

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = site.url(`/${t.slug}`)

    const hreflangs = [
      { lang: 'en', href: site.url('/about') },
      { lang: 'x-default', href: site.url('/about') },
    ]
    document.querySelectorAll('link[hreflang]').forEach(el => el.remove())
    for (const hl of hreflangs) {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = hl.lang
      link.href = hl.href
      document.head.appendChild(link)
    }

    // ProfilePage + FAQPage JSON-LD now SSR'd by prerender (scripts/prerender.tsx → buildAboutJsonLd).
    // No useEffect injection needed for SEO. SPA-navigated visits keep the prerendered HTML's
    // JSON-LD if user lands on /about first; otherwise the homepage's JSON-LD persists which is
    // acceptable since AI crawlers always do fresh fetches (they don't SPA-navigate).

    return () => {
      document.querySelectorAll('link[hreflang]').forEach(el => el.remove())
    }
  }, [lang, t])

  return (
    <div className="min-h-screen bg-background text-foreground bg-[length:24px_24px] [background-image:radial-gradient(circle,hsl(var(--dot-grid))_1px,transparent_1px)]">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-20">

        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10">
          <div className="group relative w-24 h-24 shrink-0 rounded-full border-2 border-border shadow-lg overflow-hidden">
            <img
              src="/foto-avatar-sm.webp"
              srcSet="/foto-avatar-sm.webp 192w, /foto-avatar.webp 384w"
              sizes="96px"
              alt={site.fullName}
              className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              width={96}
              height={96}
            />
            {/* Yarn twin — crossfades in with a springy settle on hover */}
            <img
              src="/foto-avatar-yarn-sm.webp"
              sizes="96px"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 rotate-6 transition-[opacity,scale,rotate] duration-500 [transition-timing-function:cubic-bezier(.34,1.56,.64,1)] group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 motion-reduce:scale-100 motion-reduce:rotate-0 motion-reduce:transition-opacity"
              width={96}
              height={96}
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-1">
              {t.heading}
            </h1>
            <p className="text-sm text-primary font-medium mb-2">{t.subtitle}</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {t.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {t.lastUpdated}
              </span>
            </div>
          </div>
        </header>

        {/* Manifesto */}
        <blockquote className="mb-4 border-l-4 border-primary pl-6 pr-4 py-3 text-xl md:text-2xl italic font-display leading-snug text-foreground/90">
          {t.manifesto}
        </blockquote>

        {/* Story CTA — hidden until it has a destination */}
        {t.storyCta.href && t.storyCta.label && (
        <Link
          to={t.storyCta.href}
          className="flex items-center justify-between mb-10 p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all group"
        >
          <div>
            <p className="font-medium text-primary text-sm group-hover:text-primary transition-colors">{t.storyCta.label}</p>
            <p className="text-xs text-muted-foreground">{t.storyCta.desc}</p>
          </div>
          <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform shrink-0" />
        </Link>
        )}

        {/* Bio */}
        <section className="mb-10">
          {t.bio.map((paragraph, i) => (
            <p key={i} className="text-base text-muted-foreground leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Seeking — hidden when empty */}
        {t.seeking && t.roles.length > 0 && (
        <section className="mb-10 p-4 rounded-lg bg-primary/5 border border-primary/20">
          <p className="text-sm font-medium text-primary mb-2">{t.seeking}</p>
          <div className="flex flex-wrap gap-2">
            {t.roles.map((role) => (
              <span key={role} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {role}
              </span>
            ))}
          </div>
        </section>
        )}

        {/* Timeline */}
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            {t.timelineHeading}
          </h2>
          <div className="space-y-3">
            {t.timeline.map((item) => (
              <div key={item.period} className="flex gap-4 p-3 rounded-lg bg-card border border-border">
                <span className="text-xs font-mono text-primary whitespace-nowrap pt-0.5">{item.period}</span>
                <div>
                  <p className="font-medium text-foreground text-sm">{item.role}</p>
                  <p className="text-xs text-muted-foreground">{item.company} — {item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects — hidden when empty */}
        {t.projects.length > 0 && (
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" />
            {t.projectsHeading}
          </h2>
          <div className="space-y-2">
            {t.projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all group"
              >
                <div>
                  <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{project.name}</p>
                  <p className="text-xs text-muted-foreground">{project.desc}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </section>
        )}

        {/* Certifications — hidden when empty */}
        {t.certifications.length > 0 && (
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            {t.certificationsHeading}
          </h2>
          <div className="space-y-3">
            {t.certifications.map((cert) => (
              <div key={cert.org} className="p-3 rounded-lg bg-card border border-border">
                <p className="font-medium text-foreground text-sm mb-1">{cert.org}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cert.items.map((item) => (
                    <span key={item} className="px-2 py-0.5 rounded text-xs bg-muted/30 text-muted-foreground">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        )}

        {/* Education — hidden when empty */}
        {t.education.length > 0 && (
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-primary" />
            {t.educationHeading}
          </h2>
          <ul className="space-y-1.5">
            {t.education.map((item) => (
              <li key={item} className="text-sm text-muted-foreground">{item}</li>
            ))}
          </ul>
        </section>
        )}

        {/* Press — hidden when empty */}
        {t.press.length > 0 && (
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-primary" />
            {t.pressHeading}
          </h2>
          {t.press.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-all group"
            >
              <div>
                <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.publisher} · {item.date}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
            </a>
          ))}
        </section>
        )}

        {/* Community — hidden when empty */}
        {t.community.length > 0 && (
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            {t.communityHeading}
          </h2>
          <div className="space-y-2">
            {t.community.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div>
                  <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.platform}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              </a>
            ))}
          </div>
        </section>
        )}

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-primary" />
            {t.faqHeading}
          </h2>
          <div className="space-y-4">
            {t.faq.map((item) => (
              <div key={item.q} className="p-4 rounded-lg bg-card border border-border">
                <p className="font-medium text-foreground text-sm mb-2">{item.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Connect */}
        <section className="mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-primary" />
            {t.connectHeading}
          </h2>

          <a
            href={`mailto:${t.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors mb-4"
          >
            <Mail className="w-4 h-4" />
            {t.email}
          </a>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel={link.rel ?? 'noopener noreferrer'}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                <ExternalLink className="w-3 h-3 text-primary shrink-0" />
                {link.name}
              </a>
            ))}
          </div>
        </section>

        {/* Language toggle */}
        <div className="text-center pt-6 border-t border-border">
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  )
}
