"use client"

import { useI18n } from "@/lib/i18n"
import { CHANGELOG } from "@/lib/changelog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, History, Tag } from "lucide-react"
import Link from "next/link"

export function LatestChangelog() {
  const { locale } = useI18n()
  const isZh = locale === "zh"

  // Get the most recent changelog entry
  const latest = CHANGELOG[0]
  if (!latest) return null

  const badgeStyle: Record<string, string> = {
    breaking: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    new: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    improved: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    fixed: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  }

  const badgeLabel: Record<string, string> = isZh
    ? { breaking: "破坏性变更", new: "新增", improved: "改进", fixed: "修复" }
    : { breaking: "Breaking", new: "New", improved: "Improved", fixed: "Fixed" }

  // Collect first few highlight items across all sections
  const allItems = latest.sections.flatMap((s) => s.items).slice(0, 5)

  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 bottom-0">
          <div className="h-[300px] w-[400px] rounded-full bg-primary/5 blur-[80px]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <History className="h-3.5 w-3.5" />
            {isZh ? "版本更新" : "Latest Release"}
          </div>
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            {latest.version}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {isZh ? latest.tagline.zh : latest.tagline.en}
          </p>
          <div className="mt-2 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <span>{latest.releaseDate}</span>
            <span>·</span>
            <span>{latest.contributorCount} {isZh ? "位贡献者" : "contributors"}</span>
          </div>
        </div>

        {/* Highlights Pills */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {latest.highlights.map((h, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/50 px-3 py-1.5 text-sm text-foreground"
            >
              <span>{h.icon}</span>
              {isZh ? h.zh : h.en}
            </span>
          ))}
        </div>

        {/* Key Changes List */}
        <div className="mx-auto max-w-3xl rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm">
          {allItems.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 p-4 ${
                i < allItems.length - 1 ? "border-b border-border/40" : ""
              }`}
            >
              {item.badge && (
                <Badge
                  variant="outline"
                  className={`mt-0.5 shrink-0 text-[10px] ${badgeStyle[item.badge] ?? ""}`}
                >
                  {badgeLabel[item.badge] ?? item.badge}
                </Badge>
              )}
              <div className="min-w-0">
                <h4 className="text-sm font-medium text-foreground">
                  {isZh ? item.title.zh : item.title.en}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Changelog */}
        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" className="group gap-2 px-8" asChild>
            <Link href="/changelog">
              {isZh ? "查看完整更新日志" : "View full changelog"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
