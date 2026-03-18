"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { OFFICIAL_LINKS } from "@/lib/official-links"
import { COMMUNITY_FEED_ITEMS } from "@/lib/news-feed"
import {
  BookOpen,
  ExternalLink,
  Search,
  FileText,
  Users,
  ChevronRight,
  Rocket,
  Settings,
  HelpCircle,
  MessageSquare,
  Eye,
  Download,
  RefreshCw,
  Compass,
  Target,
} from "lucide-react"

/* ── 图标映射 ─────────────────────────────────────────────── */
const ICON_MAP: Record<string, React.ReactNode> = {
  docs: <BookOpen className="h-5 w-5" />,
  github: <FileText className="h-5 w-5" />,
  quickstart: <Rocket className="h-5 w-5" />,
  docker: <Download className="h-5 w-5" />,
  faq: <HelpCircle className="h-5 w-5" />,
  updating: <RefreshCw className="h-5 w-5" />,
  wizard: <Settings className="h-5 w-5" />,
  vision: <Eye className="h-5 w-5" />,
  discord: <MessageSquare className="h-5 w-5" />,
  showcase: <Target className="h-5 w-5" />,
}

/* ── 社区文章来源图标颜色 ──────────────────────────────────── */
const SOURCE_COLORS: Record<string, string> = {
  少数派: "bg-blue-500",
  掘金: "bg-amber-500",
  CSDN: "bg-red-500",
  V2EX: "bg-zinc-500",
  知乎专栏: "bg-sky-500",
  Medium: "bg-emerald-600",
  "Dev.to": "bg-violet-500",
  阮一峰技术周刊: "bg-orange-500",
  B站: "bg-pink-500",
  "GitHub Discussions": "bg-slate-500",
}

export default function ManualPage() {
  const { t, locale } = useI18n()
  const isZh = locale === "zh"
  const [searchQuery, setSearchQuery] = useState("")

  const lowerQ = searchQuery.trim().toLowerCase()

  // 过滤官方文档
  const filteredOfficial = OFFICIAL_LINKS.filter((item) => {
    if (!lowerQ) return true
    return [item.titleZh, item.titleEn, item.introZh, item.introEn]
      .join(" ")
      .toLowerCase()
      .includes(lowerQ)
  })

  // 过滤社区教程
  const filteredCommunity = COMMUNITY_FEED_ITEMS.filter((item) => {
    if (!lowerQ) return true
    return [item.titleZh, item.titleEn, item.descriptionZh, item.descriptionEn]
      .join(" ")
      .toLowerCase()
      .includes(lowerQ)
  })

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <div className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          {/* ── 页面标题 ────────────────────────────────────── */}
          <header className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <BookOpen className="h-3.5 w-3.5" />
              {isZh ? "使用指南" : "User Guide"}
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {isZh ? "官方手册" : "Official Manual"}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {isZh
                ? "从安装部署到进阶用法，官方文档 + 社区精选教程，一站搞定"
                : "From installation to advanced usage — official docs and community tutorials in one place"}
            </p>
          </header>

          {/* ── 搜索框 ─────────────────────────────────────── */}
          <div className="mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isZh ? "搜索文档、教程…" : "Search docs, tutorials…"}
                className="w-full rounded-xl border border-border/60 bg-card/50 py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* ═════════════════════════════════════════════════
              第一区块：官方文档
              ════════════════════════════════════════════════ */}
          <section className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Compass className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold">{isZh ? "官方文档" : "Official Docs"}</h2>
                <p className="text-sm text-muted-foreground">
                  {isZh ? "OpenClaw 官方出品，最权威的学习资源" : "From the OpenClaw team — the most authoritative resources"}
                </p>
              </div>
            </div>

            {filteredOfficial.length === 0 ? (
              <p className="rounded-xl border border-dashed border-border/60 px-4 py-8 text-center text-sm text-muted-foreground">
                {isZh ? "未找到匹配的官方文档" : "No matching official docs found"}
              </p>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {filteredOfficial.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-xl border border-border/50 bg-card/60 p-4 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card hover:shadow-sm"
                  >
                    {/* 图标 */}
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      {ICON_MAP[item.id] || <FileText className="h-5 w-5" />}
                    </div>
                    {/* 内容 */}
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary">
                        <span className="truncate">{isZh ? item.titleZh : item.titleEn}</span>
                        <ExternalLink className="h-3 w-3 shrink-0 opacity-50 group-hover:opacity-100" />
                      </h3>
                      <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                        {isZh ? item.introZh : item.introEn}
                      </p>
                    </div>
                    <ChevronRight className="mt-2.5 h-4 w-4 shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </a>
                ))}
              </div>
            )}
          </section>

          {/* ═════════════════════════════════════════════════
              第二区块：社区精选教程
              ════════════════════════════════════════════════ */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10">
                <Users className="h-4 w-4 text-amber-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold">{isZh ? "社区精选教程" : "Community Tutorials"}</h2>
                <p className="text-sm text-muted-foreground">
                  {isZh ? "来自社区的实战经验分享与深度教程" : "Real-world experience and in-depth tutorials from the community"}
                </p>
              </div>
            </div>

            {filteredCommunity.length === 0 ? (
              <p className="rounded-xl border border-dashed border-border/60 px-4 py-8 text-center text-sm text-muted-foreground">
                {isZh ? "未找到匹配的社区教程" : "No matching community tutorials found"}
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCommunity.map((item) => {
                  const title = isZh ? item.titleZh : item.titleEn
                  const desc = isZh ? item.descriptionZh : item.descriptionEn
                  const dotColor = SOURCE_COLORS[item.source] || "bg-zinc-400"

                  return (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col rounded-xl border border-border/50 bg-card/60 p-4 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card hover:shadow-sm"
                    >
                      {/* 来源 + 浏览量 */}
                      <div className="mb-2.5 flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <span className={`h-2 w-2 rounded-full ${dotColor}`} />
                          {item.source}
                          <span className="text-muted-foreground/50">·</span>
                          {item.author}
                        </span>
                        {item.viewCount && (
                          <span className="flex items-center gap-1 tabular-nums">
                            <Eye className="h-3 w-3" />
                            {item.viewCount >= 10000
                              ? `${(item.viewCount / 10000).toFixed(1)}万`
                              : item.viewCount.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* 标题 */}
                      <h3 className="mb-2 flex items-start gap-1 text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                        <span className="line-clamp-2">{title}</span>
                        <ExternalLink className="mt-0.5 h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-60" />
                      </h3>

                      {/* 描述 */}
                      <p className="mb-3 flex-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                        {desc}
                      </p>

                      {/* 标签 */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-border/50 bg-muted/50 px-1.5 py-0.5 text-[10px] text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* 日期 */}
                      {item.date && (
                        <div className="mt-2.5 border-t border-border/30 pt-2 text-[10px] text-muted-foreground/60">
                          {item.date}
                        </div>
                      )}
                    </a>
                  )
                })}
              </div>
            )}

            {/* 底部提示 */}
            <div className="mt-8 rounded-xl border border-dashed border-border/50 bg-muted/20 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                {isZh
                  ? "📝 持续收集中，欢迎推荐优质教程和文章"
                  : "📝 Always collecting — recommend quality tutorials and articles"}
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
