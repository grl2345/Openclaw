import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CHANGELOG, getChangelog, type ChangelogItem, type ChangelogSection } from "@/lib/changelog-data"
import {
  AlertTriangle,
  Sparkles,
  Wrench,
  Bug,
  ArrowUpCircle,
  ChevronLeft,
  Users,
  ExternalLink,
  GitBranch,
  Calendar,
  User,
} from "lucide-react"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export async function generateStaticParams() {
  return CHANGELOG.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const entry = getChangelog(slug)
  if (!entry) return {}
  return {
    title: `OpenClaw ${entry.version} 版本说明 | Changelog`,
    description: entry.summary.zh,
    openGraph: {
      title: `OpenClaw ${entry.version} 新版发布`,
      description: entry.summary.zh,
      images: [entry.coverImage],
    },
  }
}

const SECTION_ICONS: Record<string, React.ReactNode> = {
  breaking: <AlertTriangle className="h-5 w-5 text-destructive" />,
  feature: <Sparkles className="h-5 w-5 text-primary" />,
  improvement: <Wrench className="h-5 w-5 text-blue-500" />,
  fix: <Bug className="h-5 w-5 text-emerald-500" />,
  upgrade: <ArrowUpCircle className="h-5 w-5 text-amber-500" />,
}

const BADGE_STYLES: Record<string, string> = {
  breaking: "bg-destructive/10 text-destructive border-destructive/30",
  new: "bg-primary/10 text-primary border-primary/30",
  improved: "bg-blue-500/10 text-blue-600 border-blue-400/30 dark:text-blue-400",
  fixed: "bg-emerald-500/10 text-emerald-700 border-emerald-400/30 dark:text-emerald-400",
}

const BADGE_LABELS: Record<string, { zh: string; en: string }> = {
  breaking: { zh: "破坏性变更", en: "Breaking" },
  new: { zh: "新功能", en: "New" },
  improved: { zh: "改进", en: "Improved" },
  fixed: { zh: "修复", en: "Fixed" },
}

function renderBody(text: string) {
  // Convert markdown-like formatting to JSX-friendly HTML
  const lines = text.split("\n")
  const result: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith("- ")) {
      // Collect list items
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2))
        i++
      }
      result.push(
        <ul key={i} className="my-3 space-y-1.5 list-none pl-0">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      )
      continue
    }

    if (line.startsWith("**") && line.endsWith("**")) {
      result.push(
        <p key={i} className="mt-3 mb-1 text-sm font-semibold text-foreground"
           dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      )
    } else if (line.trim() === "") {
      result.push(<span key={i} className="block h-2" />)
    } else {
      result.push(
        <p key={i} className="text-sm text-muted-foreground leading-relaxed"
           dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      )
    }
    i++
  }
  return result
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, '<code class="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground border border-border/50">$1</code>')
}

function SectionBlock({ section }: { section: ChangelogSection }) {
  const icon = SECTION_ICONS[section.type]
  return (
    <section id={section.id} className="scroll-mt-24">
      <div className="flex items-center gap-2 mb-5 pb-3 border-b border-border/50">
        {icon}
        <h2 className="text-xl font-bold text-foreground">{section.title.zh}</h2>
        <span className="text-sm text-muted-foreground">/ {section.title.en}</span>
      </div>

      <div className="space-y-6">
        {section.items.map((item, i) => (
          <ItemCard key={i} item={item} />
        ))}
      </div>
    </section>
  )
}

function ItemCard({ item }: { item: ChangelogItem }) {
  return (
    <div className="rounded-xl border border-border/50 bg-card/40 overflow-hidden">
      <div className="p-5">
        {/* Title row */}
        <div className="flex flex-wrap items-start gap-3 mb-3">
          {item.badge && (
            <span
              className={`inline-flex shrink-0 items-center rounded-md border px-2 py-0.5 text-xs font-semibold ${BADGE_STYLES[item.badge]}`}
            >
              {BADGE_LABELS[item.badge]?.zh}
            </span>
          )}
          <h3 className="text-sm font-semibold text-foreground leading-snug">{item.title.zh}</h3>
        </div>
        <div className="text-sm text-muted-foreground">
          {renderBody(item.body.zh)}
        </div>
      </div>

      {/* Code block */}
      {item.code && (
        <div className="border-t border-border/40 bg-muted/30">
          <pre className="overflow-x-auto p-4 text-xs text-foreground/80 font-mono leading-relaxed">
            <code>{item.code}</code>
          </pre>
        </div>
      )}
    </div>
  )
}

export default async function ChangelogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry = getChangelog(slug)
  if (!entry) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `OpenClaw ${entry.version} 版本发布说明`,
    description: entry.summary.zh,
    image: `${SITE_URL}${entry.coverImage}`,
    datePublished: entry.releaseDate,
    author: { "@type": "Person", name: entry.releasedBy },
    publisher: {
      "@type": "Organization",
      name: "OpenClaw",
      url: "https://github.com/openclaw/openclaw",
    },
    url: `${SITE_URL}/changelog/${entry.slug}`,
    about: {
      "@type": "SoftwareApplication",
      name: "OpenClaw",
      softwareVersion: entry.version,
    },
  }

  // Table of contents
  const toc = entry.sections.map((s) => ({ id: s.id, title: s.title }))

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-16">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/changelog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            版本列表
          </Link>

          {/* Hero */}
          <header className="mb-10">
            <div className="rounded-2xl border border-border/60 bg-card/50 overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center gap-4 p-6 sm:p-8 border-b border-border/40">
                {/* Cover image */}
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-border/40 sm:h-20 sm:w-20">
                  <Image
                    src={entry.coverImage}
                    alt={`OpenClaw ${entry.version}`}
                    fill
                    priority
                    className="object-contain p-1"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                    New Release
                  </p>
                  <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                    openclaw {entry.version}
                  </h1>
                  <p className="mt-1 text-base font-medium text-primary">
                    {entry.tagline.zh}
                  </p>
                </div>
              </div>

              {/* Meta row */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 px-6 py-4 sm:px-8 text-xs text-muted-foreground bg-muted/20">
                <span className="flex items-center gap-1.5">
                  <GitBranch className="h-3.5 w-3.5" />
                  {entry.version}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {entry.releaseDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" />
                  Released by @{entry.releasedBy}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" />
                  {entry.contributorCount} Contributors
                </span>
                <a
                  href={entry.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-primary hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  GitHub Release
                </a>
              </div>

              {/* Highlights */}
              <div className="px-6 py-5 sm:px-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {entry.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/60 px-3 py-1 text-sm font-medium text-foreground"
                    >
                      <span>{h.icon}</span>
                      <span>{h.zh}</span>
                    </span>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {entry.summary.zh}
                </p>
              </div>
            </div>
          </header>

          <div className="lg:grid lg:grid-cols-[1fr_200px] lg:gap-10 lg:items-start">
            {/* Main content */}
            <article className="space-y-12 min-w-0">
              {entry.sections.map((section) => (
                <SectionBlock key={section.id} section={section} />
              ))}
            </article>

            {/* Sidebar: Table of Contents */}
            <aside className="hidden lg:block sticky top-24">
              <div className="rounded-xl border border-border/50 bg-card/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  目录
                </p>
                <nav className="space-y-1">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block rounded-md px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {item.title.zh}
                    </a>
                  ))}
                </nav>

                <div className="mt-4 pt-4 border-t border-border/40">
                  <a
                    href={entry.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    查看原始 Release
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom nav */}
          <div className="mt-12 pt-6 border-t border-border/40 flex justify-between items-center">
            <Link
              href="/changelog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              所有版本
            </Link>
            <a
              href={entry.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-muted/40 px-4 py-2 text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              GitHub Release
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
