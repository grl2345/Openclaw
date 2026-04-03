"use client"

import { useI18n } from "@/lib/i18n"
import { allSkills } from "@/lib/all-skills"
import { COMMUNITY_FEED_ITEMS } from "@/lib/news-feed"
import Link from "next/link"
import { Flame, Clock } from "lucide-react"
import { AdSlot } from "@/components/ad-slot"

// Pick 8 popular skills for the hot tools grid
const HOT_SKILL_IDS = [
  "google-calendar",
  "web-search",
  "1password",
  "notion",
  "slack",
  "github",
  "obsidian",
  "todoist",
]

export function RightSidebar() {
  const { locale } = useI18n()
  const isZh = locale === "zh"

  const hotSkills = HOT_SKILL_IDS
    .map((id) => allSkills.find((s) => s.id === id))
    .filter(Boolean)

  const latestNews = [...COMMUNITY_FEED_ITEMS]
    .filter((item) => item.date)
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
    .slice(0, 5)

  return (
    <aside className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-[4.5rem] max-h-[calc(100vh-5rem)] overflow-y-auto space-y-5 py-4 pb-8">

        {/* Ad Slot — Top Banner (like TRAE ad in screenshot) */}
        <AdSlot slot="sidebar-top" />

        {/* Hot Skills */}
        <div className="rounded-xl border border-border/60 bg-card/50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Flame className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold">{isZh ? "热门技能" : "Hot Skills"}</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {hotSkills.map((skill) => {
              if (!skill) return null
              return (
                <a
                  key={skill.id}
                  href={skill.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/50 px-2.5 py-2 text-xs transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <span className="h-5 w-5 flex items-center justify-center rounded-md bg-primary/10 text-[10px] font-bold text-primary shrink-0">
                    {(isZh ? skill.name.zh : skill.name.en).charAt(0)}
                  </span>
                  <span className="truncate text-foreground/80">
                    {isZh ? skill.name.zh : skill.name.en}
                  </span>
                </a>
              )
            })}
          </div>
          <Link
            href="/skills"
            className="mt-3 block text-center text-xs text-primary hover:underline"
          >
            {isZh ? "查看全部 →" : "View all →"}
          </Link>
        </div>

        {/* Ad Slot — Mid Banner (like iTab ad in screenshot) */}
        <AdSlot slot="sidebar-mid" />

        {/* Latest News */}
        <div className="rounded-xl border border-border/60 bg-card/50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold">{isZh ? "最新收录" : "Latest"}</h3>
          </div>
          <div className="space-y-2.5">
            {latestNews.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2 rounded-lg p-1.5 transition-colors hover:bg-muted/50"
              >
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-md bg-muted text-[10px] font-bold text-muted-foreground shrink-0">
                  {item.source.charAt(0)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-foreground/80 line-clamp-2 group-hover:text-primary transition-colors">
                    {isZh ? item.titleZh : item.titleEn}
                  </p>
                  <span className="text-[10px] text-muted-foreground">{item.source}</span>
                </div>
              </a>
            ))}
          </div>
          <Link
            href="/news"
            className="mt-3 block text-center text-xs text-primary hover:underline"
          >
            {isZh ? "查看全部 →" : "View all →"}
          </Link>
        </div>
      </div>
    </aside>
  )
}
