"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import {
  getAllFeedItems,
  filterBySearch,
  sortFeedItems,
  type FeedItem,
  type SortType,
} from "@/lib/news-feed"
import { ExternalLink, Newspaper, Search } from "lucide-react"

const DOT_COLORS = [
  "bg-red-500",
  "bg-orange-500",
  "bg-amber-500",
  "bg-primary",
]

function getDotColor(index: number): string {
  return DOT_COLORS[index % DOT_COLORS.length]
}

function NewsCard({
  item,
  isZh,
  dotColor,
  sourceLabel,
}: {
  item: FeedItem
  isZh: boolean
  dotColor: string
  sourceLabel: string
}) {
  const title = isZh ? item.titleZh : item.titleEn
  const description = isZh ? item.descriptionZh : item.descriptionEn

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-border/50 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:bg-card/80 dark:border-border/60"
    >
      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
        <span className={`h-2 w-2 shrink-0 rounded-full ${dotColor}`} />
        {sourceLabel}·{item.author}
      </div>
      <h3 className="mb-2 flex items-center gap-1.5 line-clamp-2 text-base font-bold text-foreground group-hover:text-primary">
        {title}
        <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" />
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </a>
  )
}

export default function NewsPage() {
  const { t, locale } = useI18n()
  const isZh = locale === "zh"
  const [searchQuery, setSearchQuery] = useState("")

  const feedItems = useMemo(() => getAllFeedItems(), [])
  const filtered = useMemo(() => {
    const list = filterBySearch(feedItems, searchQuery, isZh)
    return sortFeedItems(list, "latest" as SortType)
  }, [feedItems, searchQuery, isZh])

  const sourceLabel = t("news.sourceOfficial")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <div className="relative mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <header className="mb-6">
            <div className="mb-3 flex items-center gap-2">
              <Newspaper className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {t("news.title")}
              </h1>
            </div>
            <p className="text-muted-foreground">
              {t("news.subtitle")}
            </p>
          </header>

          {/* 搜索 */}
          <div className="mb-6">
            <label htmlFor="news-search" className="sr-only">
              {t("news.searchPlaceholder")}
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="news-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("news.searchPlaceholder")}
                className="w-full rounded-xl border border-border/60 bg-card/50 py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label={t("news.searchPlaceholder")}
              />
            </div>
          </div>

          {/* 卡片网格：每列 4 个 */}
          {filtered.length === 0 ? (
            <p className="rounded-xl border border-border/60 bg-card/50 px-4 py-8 text-center text-sm text-muted-foreground">
              {t("news.noResults")}
            </p>
          ) : (
            <ul className="grid grid-cols-1 gap-4 md:grid-flow-col md:grid-rows-4 md:auto-cols-[minmax(280px,1fr)]">
              {filtered.map((item, index) => (
                <li key={item.id}>
                  <NewsCard
                    item={item}
                    isZh={isZh}
                    dotColor={getDotColor(index)}
                    sourceLabel={sourceLabel}
                  />
                </li>
              ))}
            </ul>
          )}

          {/* 社区分享占位说明：无卡片时或底部提示 */}
          {filtered.length > 0 && (
            <p className="mt-8 text-center text-sm text-muted-foreground">
              {t("news.empty")}
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
