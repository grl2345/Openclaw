"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { ARTICLE_CATEGORIES, getCategoryLabel, type Article, type ArticleCategory } from "@/lib/blog"
import { Search, BookOpen, Clock, Eye, Tag, ChevronRight, PenLine, Loader2 } from "lucide-react"
import { format } from "date-fns"

const LIMIT = 12

export function BlogListClient({ initialArticles, initialCount }: { initialArticles: Article[]; initialCount: number }) {
  const { locale } = useI18n()
  const isZh = locale === "zh"

  const [articles, setArticles] = useState<Article[]>(initialArticles)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | "all">("all")
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(initialArticles.length === LIMIT)

  // Fallback: if SSR didn't provide data, fetch on client
  useEffect(() => {
    if (initialArticles.length === 0) {
      fetchArticles("all", 0, true)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const fetchArticles = async (cat: ArticleCategory | "all", off: number, replace: boolean) => {
    setLoading(true)
    const params = new URLSearchParams({
      status: "published",
      limit: String(LIMIT),
      offset: String(off),
    })
    if (cat !== "all") params.set("category", cat)

    try {
      const res = await fetch(`/api/blog/articles?${params}`)
      const json = await res.json()
      const fetched: Article[] = json.articles || []
      setArticles((prev) => replace ? fetched : [...prev, ...fetched])
      setHasMore(fetched.length === LIMIT)
    } catch {
      // API unavailable
    }
    setLoading(false)
  }

  const handleCategoryChange = (cat: ArticleCategory | "all") => {
    setActiveCategory(cat)
    setOffset(0)
    fetchArticles(cat, 0, true)
  }

  const loadMore = () => {
    const newOffset = offset + LIMIT
    setOffset(newOffset)
    fetchArticles(activeCategory, newOffset, false)
  }

  const filtered = search
    ? articles.filter((a) => {
        const q = search.toLowerCase()
        return (
          a.title_zh.toLowerCase().includes(q) ||
          a.title_en.toLowerCase().includes(q) ||
          a.excerpt_zh.toLowerCase().includes(q) ||
          a.excerpt_en.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
        )
      })
    : articles

  return (
    <>
      {/* ── 搜索 ───────────────────────────────────────────── */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={isZh ? "搜索文章…" : "Search articles…"}
            className="w-full rounded-xl border border-border/60 bg-card/50 py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* ── 分类筛选 ────────────────────────────────────────── */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            activeCategory === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          {isZh ? "全部" : "All"}
        </button>
        {ARTICLE_CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => handleCategoryChange(cat.value)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === cat.value
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {isZh ? cat.labelZh : cat.labelEn}
          </button>
        ))}
      </div>

      {/* ── 文章列表 ────────────────────────────────────────── */}
      {loading && articles.length === 0 ? (
        <div className="flex items-center justify-center py-24 text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          {isZh ? "加载中…" : "Loading…"}
        </div>
      ) : filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border/60 py-16 text-center text-sm text-muted-foreground">
          {isZh ? "暂无文章，敬请期待 ✍️" : "No articles yet — stay tuned ✍️"}
        </div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} isZh={isZh} />
            ))}
          </div>

          {/* 加载更多 */}
          {!search && hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={loadMore}
                disabled={loading}
                className="flex items-center gap-2 rounded-full border border-border/60 bg-card px-6 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground disabled:opacity-50"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                {isZh ? "加载更多" : "Load more"}
              </button>
            </div>
          )}
        </>
      )}
    </>
  )
}

function ArticleCard({ article, isZh }: { article: Article; isZh: boolean }) {
  const title = article.title_zh || article.title_en
  const excerpt = article.excerpt_zh || article.excerpt_en
  const categoryLabel = getCategoryLabel(article.category, isZh ? "zh" : "en")
  const date = article.published_at || article.created_at

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card hover:shadow-md"
    >
      {/* 封面图 */}
      {article.cover_image ? (
        <div className="relative h-44 w-full overflow-hidden rounded-t-xl">
          <img
            src={article.cover_image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex h-44 items-center justify-center rounded-t-xl bg-gradient-to-br from-primary/10 to-primary/5">
          <BookOpen className="h-12 w-12 text-primary/30" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        {/* 分类 + 阅读量 */}
        <div className="mb-2.5 flex items-center justify-between text-xs text-muted-foreground">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 font-medium text-primary">
            {categoryLabel}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {article.view_count.toLocaleString()}
          </span>
        </div>

        {/* 标题 */}
        <h2 className="mb-2 line-clamp-2 text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
          {title}
        </h2>

        {/* 摘要 */}
        <p className="mb-4 flex-1 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
          {excerpt}
        </p>

        {/* 标签 */}
        {article.tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-0.5 rounded border border-border/50 bg-muted/50 px-1.5 py-0.5 text-[10px] text-muted-foreground"
              >
                <Tag className="h-2.5 w-2.5" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* 日期 + 阅读 */}
        <div className="flex items-center justify-between border-t border-border/30 pt-3 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {format(new Date(date), "yyyy-MM-dd")}
          </span>
          <span className="flex items-center gap-1 font-medium text-foreground/70">
            {isZh ? "阅读" : "Read"}
            <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 text-primary" />
          </span>
        </div>
      </div>
    </Link>
  )
}
