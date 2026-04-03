import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CHANGELOG } from "@/lib/changelog-data"
import { History, ArrowRight, Users, GitBranch, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "版本更新日志 | Changelog - OpenClaw",
  description:
    "OpenClaw 各版本发布说明、新特性介绍与升级指南。Release notes, new features, and upgrade guides for every OpenClaw version.",
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export default function ChangelogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "OpenClaw Changelog",
    description: "OpenClaw 各版本发布说明与新特性介绍",
    url: `${SITE_URL}/changelog`,
    itemListElement: CHANGELOG.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `OpenClaw ${entry.version}`,
      url: `${SITE_URL}/changelog/${entry.slug}`,
      description: entry.summary.zh,
    })),
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-16">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Page header */}
          <header className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <History className="h-4 w-4" />
              版本历史
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              OpenClaw 更新日志
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              每个版本的完整发布说明、核心特性介绍与升级指南
            </p>
          </header>

          {/* Version list */}
          <div className="space-y-6">
            {CHANGELOG.map((entry) => (
              <Link
                key={entry.slug}
                href={`/changelog/${entry.slug}`}
                className="group block rounded-2xl border border-border/60 bg-card/50 p-6 transition-all hover:border-primary/40 hover:bg-card hover:shadow-md"
              >
                <div className="flex items-start gap-5">
                  {/* Cover image */}
                  <div className="relative hidden h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-border/40 sm:block">
                    <Image
                      src={entry.coverImage}
                      alt={`OpenClaw ${entry.version}`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Version + date */}
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                        <GitBranch className="h-3 w-3" />
                        {entry.version}
                      </span>
                      <time
                        dateTime={entry.releaseDate}
                        className="text-xs text-muted-foreground"
                      >
                        {entry.releaseDate}
                      </time>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="h-3 w-3" />
                        {entry.contributorCount} Contributors
                      </span>
                    </div>

                    {/* Tagline */}
                    <p className="text-sm font-semibold text-foreground mb-2">
                      {entry.tagline.zh}
                    </p>

                    {/* Summary */}
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {entry.summary.zh}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {entry.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 rounded-full border border-border/50 bg-muted/50 px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          <span>{h.icon}</span>
                          <span>{h.zh}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-1 group-hover:text-primary mt-1" />
                </div>
              </Link>
            ))}
          </div>

          {/* GitHub link */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://github.com/openclaw/openclaw/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-muted/40 px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
              在 GitHub 查看完整 Release 历史
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
