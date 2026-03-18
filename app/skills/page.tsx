"use client"

import { useState, useMemo, useCallback } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"
import { allSkills, allSkillCategories, type AllSkillCategoryId } from "@/lib/all-skills"
import { Search, X, ExternalLink, Zap, ChevronLeft, ChevronRight } from "lucide-react"

const PAGE_SIZE = 60

export default function SkillsPage() {
  const { locale } = useI18n()
  const isZh = locale === "zh"

  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<AllSkillCategoryId | "all">("all")
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    let list = allSkills
    if (activeCategory !== "all") {
      list = list.filter((s) => s.category === activeCategory)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(
        (s) =>
          s.name.zh.toLowerCase().includes(q) ||
          s.name.en.toLowerCase().includes(q) ||
          s.description.zh.toLowerCase().includes(q) ||
          s.description.en.toLowerCase().includes(q) ||
          s.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    return list
  }, [searchQuery, activeCategory])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const currentPage = Math.min(page, totalPages || 1)
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const clearSearch = useCallback(() => {
    setSearchQuery("")
    setPage(1)
  }, [])

  const handleCategoryChange = useCallback((cat: AllSkillCategoryId | "all") => {
    setActiveCategory(cat)
    setPage(1)
  }, [])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setPage(1)
  }, [])

  const pricingColor: Record<string, string> = {
    free: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    freemium: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    paid: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  }
  const pricingLabel: Record<string, string> = {
    free: isZh ? "免费" : "Free",
    freemium: isZh ? "免费额度" : "Freemium",
    paid: isZh ? "付费" : "Paid",
  }

  const catCounts = useMemo(() => {
    const map: Record<string, number> = { all: allSkills.length }
    for (const s of allSkills) {
      map[s.category] = (map[s.category] ?? 0) + 1
    }
    return map
  }, [])

  // 分页按钮列表
  const pageButtons = useMemo(() => {
    const pages: (number | "...")[] = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push("...")
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i)
      }
      if (currentPage < totalPages - 2) pages.push("...")
      pages.push(totalPages)
    }
    return pages
  }, [currentPage, totalPages])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/8 blur-[100px]" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent/8 blur-[80px]" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/5 blur-[60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Zap className="h-3.5 w-3.5" />
            {isZh ? "Skills 技能库" : "Skills Library"}
          </div>
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {isZh ? "探索所有技能" : "Explore All Skills"}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {isZh
              ? `共收录 ${allSkills.length.toLocaleString()}+ 个技能，涵盖 ${allSkillCategories.length} 大类，持续更新中。`
              : `${allSkills.length.toLocaleString()}+ skills across ${allSkillCategories.length} categories, continuously updated.`}
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-6 relative mx-auto max-w-2xl">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder={isZh ? "搜索技能名称、描述、标签…" : "Search skills by name, description, tags…"}
            className="w-full rounded-xl border border-border/60 bg-card/60 py-3 pl-11 pr-11 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-sm outline-none ring-0 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category tabs */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-border/60 bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {isZh ? "全部" : "All"}
            <span className="rounded-full bg-white/20 px-1.5 text-xs">{catCounts.all}</span>
          </button>
          {allSkillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border/60 bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {isZh ? cat.nameZh : cat.nameEn}
              {catCounts[cat.id] && (
                <span className={`rounded-full px-1.5 text-xs ${activeCategory === cat.id ? "bg-white/20" : "bg-muted"}`}>
                  {catCounts[cat.id]}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Result count */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {isZh
              ? `显示 ${((currentPage - 1) * PAGE_SIZE + 1).toLocaleString()}-${Math.min(currentPage * PAGE_SIZE, filtered.length).toLocaleString()} / ${filtered.length.toLocaleString()} 个技能`
              : `Showing ${((currentPage - 1) * PAGE_SIZE + 1).toLocaleString()}-${Math.min(currentPage * PAGE_SIZE, filtered.length).toLocaleString()} of ${filtered.length.toLocaleString()} skills`}
            {searchQuery && (
              <span className="ml-2 text-primary">
                {isZh ? `· 搜索「${searchQuery}」` : `· searching "${searchQuery}"`}
              </span>
            )}
          </p>
          <Link
            href="https://github.com/VoltAgent/awesome-openclaw-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            {isZh ? "提交技能" : "Submit skill"}
            <ExternalLink className="h-3 w-3" />
          </Link>
        </div>

        {/* Skills grid */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-lg font-medium text-muted-foreground">
              {isZh ? "没有找到匹配的技能" : "No skills found"}
            </p>
            <button onClick={clearSearch} className="mt-3 text-sm text-primary hover:underline">
              {isZh ? "清除搜索" : "Clear search"}
            </button>
          </div>
        ) : (
          <>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {paged.map((skill) => {
                const catMeta = allSkillCategories.find((c) => c.id === skill.category)
                return (
                  <a
                    key={skill.id}
                    href={skill.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/40 p-4 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card hover:shadow-md"
                  >
                    <div className="absolute inset-0 bg-primary/3 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      {/* Meta row */}
                      <div className="mb-2 flex flex-wrap items-center gap-1.5">
                        {catMeta && (
                          <span className="text-xs font-medium text-muted-foreground">
                            {isZh ? catMeta.nameZh : catMeta.nameEn}
                          </span>
                        )}
                        {skill.required && (
                          <Badge variant="default" className="h-4 px-1.5 text-[10px]">
                            {isZh ? "必装" : "Required"}
                          </Badge>
                        )}
                        {skill.pricing && (
                          <span
                            className={`inline-flex items-center rounded-full border px-1.5 py-0.5 text-[10px] font-medium ${pricingColor[skill.pricing]}`}
                          >
                            {pricingLabel[skill.pricing]}
                          </span>
                        )}
                      </div>

                      {/* Name */}
                      <h3 className="mb-1.5 text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                        {isZh ? skill.name.zh : skill.name.en}
                      </h3>

                      {/* Description */}
                      <p className="mb-3 line-clamp-2 text-xs text-muted-foreground leading-relaxed">
                        {isZh ? skill.description.zh : skill.description.en}
                      </p>

                      {/* Operations */}
                      {skill.operations?.length > 0 && (
                        <div className="mb-2.5 rounded-md border border-border/50 bg-muted/30 px-2 py-1.5 font-mono text-[11px] text-foreground/80">
                          {skill.operations.slice(0, 2).map((op, i) => (
                            <div key={i} className="truncate leading-relaxed" title={op}>
                              {op}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {skill.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex rounded-md bg-muted/60 px-1.5 py-0.5 text-[10px] text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-1.5">
                <button
                  onClick={() => { setPage(Math.max(1, currentPage - 1)); window.scrollTo(0, 0) }}
                  disabled={currentPage === 1}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card/50 text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {pageButtons.map((p, i) =>
                  p === "..." ? (
                    <span key={`dot-${i}`} className="px-1 text-muted-foreground">...</span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => { setPage(p as number); window.scrollTo(0, 0) }}
                      className={`inline-flex h-9 min-w-[36px] items-center justify-center rounded-lg border px-2 text-sm font-medium transition-all ${
                        currentPage === p
                          ? "border-primary bg-primary text-primary-foreground shadow-sm"
                          : "border-border/60 bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {p}
                    </button>
                  )
                )}
                <button
                  onClick={() => { setPage(Math.min(totalPages, currentPage + 1)); window.scrollTo(0, 0) }}
                  disabled={currentPage === totalPages}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card/50 text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </>
        )}

      </div>
      <Footer />
    </div>
  )
}
