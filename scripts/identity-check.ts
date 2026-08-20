/**
 * identity-check — fails the build if the previous owner's identity survives,
 * or if scaffold placeholders are still unfilled.
 *
 * Two independent gates:
 *   LEAKS       — any trace of santifer/santiago/their domains, IDs, or assets.
 *                 These are hard failures: shipping them is both wrong and
 *                 actively harmful to your own SEO/entity resolution.
 *   PLACEHOLDERS— unfilled `TODO:` scaffold values. Warn by default; hard-fail
 *                 with --strict so CI can block a public deploy.
 *
 * Usage:  npx tsx scripts/identity-check.ts [--strict]
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

const ROOT = process.cwd()

/** The domain of record. Everything self-referential must agree with this. */
const SITE_DOMAIN: string = (
  JSON.parse(readFileSync(join(process.cwd(), 'site.identity.json'), 'utf8')) as { domain: string }
).domain.toLowerCase()
const STRICT = process.argv.includes('--strict')

const SKIP_DIRS = new Set([
  'node_modules', '.git', 'dist', '.vercel', 'coverage',
  '.playwright-mcp', '.seo-audit', '.seo-audit-v2',
])
const SKIP_FILES = new Set(['package-lock.json', 'identity-check.ts'])
const TEXT_EXT = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.css',
  '.md', '.txt', '.xml', '.yml', '.yaml', '.svg',
])

/** Previous-owner identity markers. Case-insensitive. */
const LEAK_PATTERNS: Array<{ re: RegExp; label: string }> = [
  { re: /santifer/i,                      label: 'brand handle' },
  { re: /santiago\s+fern[aá]ndez/i,       label: 'full name' },
  { re: /\bsantiago\b/i,                  label: 'given name' },
  { re: /valderrama/i,                    label: 'surname' },
  { re: /\bjacobo\b/i,                    label: 'their AI agent' },
  { re: /career-ops/i,                    label: 'their OSS project' },
  { re: /zinkee/i,                        label: 'their employer' },
  { re: /irepair/i,                       label: 'their business' },
  { re: /orcid\.org\/0009-0006-2192-7210/, label: 'their ORCID' },
  { re: /Q13(8710224|9007988)/,           label: 'their Wikidata ID' },
  { re: /verify\.skilljar\.com/,          label: 'their certification URLs' },
  { re: /22F0E5AD398442DDC95900300A3B4537/, label: 'their Bing token' },
  { re: /businessinsider\.(com|de)\/.*job-listings|wired\.com\.gr/i, label: 'their press coverage' },
]

const walk = (dir: string, out: string[] = []): string[] => {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry) || SKIP_FILES.has(entry)) continue
    const full = join(dir, entry)
    const st = statSync(full)
    if (st.isDirectory()) walk(full, out)
    else if (TEXT_EXT.has(extname(entry)) && st.size < 2_000_000) out.push(full)
  }
  return out
}

type Hit = { file: string; line: number; label: string; text: string }
const leaks: Hit[] = []
const todos: Hit[] = []

for (const file of walk(ROOT)) {
  const rel = file.slice(ROOT.length + 1)
  let content: string
  try { content = readFileSync(file, 'utf8') } catch { continue }

  // Deliberate upstream attribution is allowed. An `identity-check:allow` marker
  // exempts its own line and everything up to the next blank line, so a whole
  // attribution paragraph can be marked once. Crediting the project this was
  // adapted from is correct — it is only a leak when it claims the identity as
  // your own.
  let allowBlock = false

  content.split('\n').forEach((text, i) => {
    const trimmed = text.trim().slice(0, 160)

    if (/identity-check:allow/.test(text)) allowBlock = true
    else if (trimmed === '') allowBlock = false

    if (!allowBlock) {
      for (const { re, label } of LEAK_PATTERNS) {
        if (re.test(text)) { leaks.push({ file: rel, line: i + 1, label, text: trimmed }); break }
      }
    }
    if (/TODO:/.test(text)) todos.push({ file: rel, line: i + 1, label: 'placeholder', text: trimmed })
  })
}

const group = (hits: Hit[]) => {
  const by = new Map<string, Hit[]>()
  for (const h of hits) { const k = h.file; by.set(k, [...(by.get(k) ?? []), h]) }
  return [...by.entries()].sort((a, b) => b[1].length - a[1].length)
}


// ─────────────────────────────────────────────────────────────────────────────
// DOMAIN DRIFT
//
// Some files embed the domain as literal text and cannot import site.config —
// robots.txt, humans.txt, security.txt, llms.txt, CI workflows. They silently
// keep a stale domain when site.identity.json changes, which is how a sitemap
// ends up advertising a domain you do not own.
//
// Rule: inside these files, the only self-referential host allowed is the one
// in site.identity.json. Third-party hosts are allowlisted explicitly.
// ─────────────────────────────────────────────────────────────────────────────
const DOMAIN_BOUND_FILES = [
  'public/robots.txt',
  'public/humans.txt',
  'public/llms.txt',
  'public/.well-known/security.txt',
  '.github/workflows/evals.yml',
  '.github/workflows/adversarial.yml',
]

/** Hosts that legitimately belong to someone else. */
const EXTERNAL_HOSTS = [
  'github.com', 'www.github.com', 'linkedin.com', 'www.linkedin.com',
  'x.com', 'twitter.com', 'instagram.com', 'www.instagram.com',
  'threads.net', 'www.threads.net', 'schema.org', 'example.com',
  'securitytxt.org', 'www.securitytxt.org',
]

const drift: Array<{ file: string; line: number; host: string }> = []

for (const rel of DOMAIN_BOUND_FILES) {
  const full = join(ROOT, rel)
  let content: string
  try { content = readFileSync(full, 'utf8') } catch { continue }

  content.split('\n').forEach((text, i) => {
    if (/identity-check:allow/.test(text)) return
    for (const m of text.matchAll(/https?:\/\/([a-z0-9.-]+)/gi)) {
      const host = m[1].toLowerCase()
      if (host === SITE_DOMAIN) continue
      if (EXTERNAL_HOSTS.includes(host)) continue
      drift.push({ file: rel, line: i + 1, host })
    }
    // Bare email domains too (Contact: foo@bar)
    for (const m of text.matchAll(/[a-z0-9._%+-]+@([a-z0-9.-]+\.[a-z]{2,})/gi)) {
      const host = m[1].toLowerCase()
      if (host === SITE_DOMAIN) continue
      drift.push({ file: rel, line: i + 1, host })
    }
  })
}

console.log('\n═══ IDENTITY CHECK ═══\n')

if (leaks.length) {
  console.log(`❌ ${leaks.length} previous-owner reference(s) in ${new Set(leaks.map(l => l.file)).size} file(s):\n`)
  for (const [file, hits] of group(leaks).slice(0, 25)) {
    console.log(`  ${file}  (${hits.length})`)
    for (const h of hits.slice(0, 3)) console.log(`    :${h.line}  [${h.label}]  ${h.text}`)
    if (hits.length > 3) console.log(`    … ${hits.length - 3} more`)
  }
  const rest = group(leaks).length - 25
  if (rest > 0) console.log(`\n  … and ${rest} more file(s)`)
} else {
  console.log('✅ No previous-owner identity references found.')
}

console.log('')
if (drift.length) {
  console.log(`❌ ${drift.length} stale domain reference(s) — these files embed the domain as text:\n`)
  for (const d of drift) {
    console.log(`  ${d.file}:${d.line}  found "${d.host}", expected "${SITE_DOMAIN}"`)
  }
  console.log('')
} else {
  console.log(`✅ Domain references consistent with site.identity.json (${SITE_DOMAIN}).`)
  console.log('')
}

if (todos.length) {
  console.log(`${STRICT ? '❌' : '⚠️ '} ${todos.length} unfilled placeholder(s) in ${new Set(todos.map(t => t.file)).size} file(s):\n`)
  for (const [file, hits] of group(todos).slice(0, 20)) {
    console.log(`  ${file}  (${hits.length})`)
  }
} else {
  console.log('✅ No unfilled placeholders.')
}

const failed = leaks.length > 0 || drift.length > 0 || (STRICT && todos.length > 0)
console.log(`\n${failed ? '━━━ FAILED ━━━' : '━━━ PASSED ━━━'}\n`)
process.exit(failed ? 1 : 0)
