"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { useCases, type Category } from "@/lib/usecases"
import { UseCaseCard } from "@/components/usecase-card"
import { Search, Sparkles } from "lucide-react"

const CATEGORIES: { id: Category | "all"; labelZh: string; labelEn: string }[] = [
  { id: "all", labelZh: "全部", labelEn: "All" },
  { id: "china", labelZh: "国内生态", labelEn: "China Ecosystem" },
  { id: "productivity", labelZh: "生产力", labelEn: "Productivity" },
  { id: "creative", labelZh: "创意与构建", labelEn: "Creative" },
  { id: "devops", labelZh: "DevOps", labelEn: "DevOps" },
  { id: "social", labelZh: "社交媒体", labelEn: "Social Media" },
  { id: "research", labelZh: "研究与学习", labelEn: "Research" },
  { id: "finance", labelZh: "金融与交易", labelEn: "Finance" },
]

const PAGE_SIZE = 24

export default function UseCasesPage() {
  const { locale } = useI18n()
  const isZh = locale === "zh"
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState<Category | "all">("all")
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    let list = useCases
    if (category !== "all") {
      list = list.filter((uc) => uc.category === category)
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter((uc) =>
        [uc.title.zh, uc.title.en, uc.description.zh, uc.description.en, ...uc.tags]
          .join(" ")
          .toLowerCase()
          .includes(q)
      )
    }
    return list
  }, [search, category])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const catCounts = useMemo(() => {
    const counts: Record<string, number> = { all: useCases.length }
    useCases.forEach((uc) => {
      counts[uc.category] = (counts[uc.category] || 0) + 1
    })
    return counts
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              {isZh ? "场景案例" : "Use Cases"}
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {isZh ? "探索所有用例" : "Explore All Use Cases"}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {isZh
                ? `共收录 ${useCases.length}+ 个用例，涵盖 ${CATEGORIES.length - 1} 大类，持续更新中。`
                : `${useCases.length}+ use cases across ${CATEGORIES.length - 1} categories. Updated regularly.`}
            </p>
          </header>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                placeholder={isZh ? "搜索用例名称、描述、标签..." : "Search use cases..."}
                className="w-full rounded-xl border border-border/60 bg-card/50 py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Category pills */}
          <div className="mb-8 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const count = catCounts[cat.id] || 0
              const isActive = category === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => { setCategory(cat.id); setPage(1) }}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border/60 bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {isZh ? cat.labelZh : cat.labelEn}
                  {count > 0 && (
                    <span className={`text-xs ${isActive ? "text-primary-foreground/70" : "text-muted-foreground/60"}`}>
                      {count}
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Count + Grid */}
          <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
            <span>
              {isZh
                ? `显示 ${(page - 1) * PAGE_SIZE + 1}-${Math.min(page * PAGE_SIZE, filtered.length)} / ${filtered.length} 个用例`
                : `Showing ${(page - 1) * PAGE_SIZE + 1}-${Math.min(page * PAGE_SIZE, filtered.length)} of ${filtered.length}`}
            </span>
          </div>

          {paged.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border/60 px-4 py-16 text-center text-muted-foreground">
              {isZh ? "没有匹配的用例，换个关键词试试" : "No matching use cases found"}
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {paged.map((uc) => (
                <UseCaseCard key={uc.id} useCase={uc} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                disabled={page <= 1}
                onClick={() => setPage(page - 1)}
                className="rounded-lg border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted disabled:opacity-40"
              >
                {isZh ? "上一页" : "Previous"}
              </button>
              <span className="px-3 text-sm text-muted-foreground">
                {page} / {totalPages}
              </span>
              <button
                disabled={page >= totalPages}
                onClick={() => setPage(page + 1)}
                className="rounded-lg border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted disabled:opacity-40"
              >
                {isZh ? "下一页" : "Next"}
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
