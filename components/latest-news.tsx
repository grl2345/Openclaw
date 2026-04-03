"use client"

import { useI18n } from "@/lib/i18n"
import { COMMUNITY_FEED_ITEMS } from "@/lib/news-feed"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Newspaper, ExternalLink } from "lucide-react"
import Link from "next/link"

export function LatestNews() {
  const { locale } = useI18n()
  const isZh = locale === "zh"

  // Take the 3 most recent news items by date
  const latestItems = [...COMMUNITY_FEED_ITEMS]
    .filter((item) => item.date)
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
    .slice(0, 3)

  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4">
          <div className="h-[300px] w-[400px] rounded-full bg-primary/5 blur-[80px]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Newspaper className="h-3.5 w-3.5" />
            {isZh ? "最新动态" : "Latest News"}
          </div>
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            {isZh ? "OpenClaw 新闻与社区动态" : "OpenClaw News & Community"}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {isZh
              ? "收录最新的教程、实践分享与社区动态，持续更新中"
              : "Latest tutorials, practical guides, and community updates"}
          </p>
        </div>

        {/* News Cards - 3 items */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latestItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card hover:shadow-md"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                {/* Source & Date */}
                <div className="mb-3 flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs font-normal">
                    {item.source}
                  </Badge>
                  {item.date && (
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base font-semibold text-foreground transition-colors group-hover:text-primary line-clamp-2">
                  {isZh ? item.titleZh : item.titleEn}
                </h3>

                {/* Description */}
                <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
                  {isZh ? item.descriptionZh : item.descriptionEn}
                </p>

                {/* Tags & Link */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-border/50 px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View More */}
        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" className="group gap-2 px-8" asChild>
            <Link href="/news">
              {isZh ? "查看全部动态" : "View all news"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
