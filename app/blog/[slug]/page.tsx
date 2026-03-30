"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { markdownToHtml, getCategoryLabel, countWords, type Article } from "@/lib/blog"
import {
  Clock,
  Eye,
  Tag,
  ArrowLeft,
  BookOpen,
  Loader2,
  AlertCircle,
  Calendar,
  User,
} from "lucide-react"
import { format } from "date-fns"
import { useParams } from "next/navigation"

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { locale } = useI18n()
  const isZh = locale === "zh"

  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!slug) return
    // Ensure navigation always lands at top (avoid seeing previous page hero)
    window.scrollTo({ top: 0, left: 0 })
    fetch(`/api/blog/articles/${slug}`)
      .then((r) => {
        if (r.status === 404) { setNotFound(true); setLoading(false); return null }
        return r.json()
      })
      .then((json) => {
        if (json?.article) setArticle(json.article)
        setLoading(false)
      })
      .catch(() => { setNotFound(true); setLoading(false) })
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex items-center justify-center pt-32">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </main>
      </div>
    )
  }

  if (notFound || !article) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="mx-auto max-w-3xl px-4 pt-32 text-center">
          <AlertCircle className="mx-auto mb-4 h-12 w-12 text-muted-foreground/40" />
          <h1 className="mb-4 text-2xl font-bold">{isZh ? "文章不存在" : "Article not found"}</h1>
          <Link href="/blog" className="text-sm text-primary underline underline-offset-4">
            {isZh ? "← 返回博客列表" : "← Back to blog"}
          </Link>
        </main>
      </div>
    )
  }

  // Title also prefers Chinese, regardless of UI language.
  const title = article.title_zh || article.title_en
  // Blog content always prefers Chinese, regardless of UI language.
  const content = article.content_zh || article.content_en
  const excerpt = article.excerpt_zh || article.excerpt_en
  const categoryLabel = getCategoryLabel(article.category, isZh ? "zh" : "en")
  const date = article.published_at || article.created_at
  const htmlContent = markdownToHtml(content)
  const words = countWords(content, isZh ? "zh" : "en")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          {/* ── 返回 ────────────────────────────────────────────── */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {isZh ? "博客列表" : "All articles"}
          </Link>

          {/* ── 文章元信息 ──────────────────────────────────────── */}
          <header className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                {categoryLabel}
              </span>
              {article.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-md border border-border/50 bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mb-4 text-2xl font-bold leading-snug tracking-tight sm:text-3xl lg:text-4xl">
              {title}
            </h1>

            {excerpt && (
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">{excerpt}</p>
            )}

            <div className="flex flex-wrap items-center gap-4 border-b border-border/50 pb-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {format(new Date(date), "yyyy-MM-dd")}
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="h-4 w-4" />
                {article.view_count.toLocaleString()} {isZh ? "次阅读" : "views"}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {words.toLocaleString()} {isZh ? "字" : "words"}
              </span>
            </div>
          </header>

          {/* ── 正文 ─────────────────────────────────────────────── */}
          <article
            className="prose-custom min-h-32"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* ── 底部 ─────────────────────────────────────────────── */}
          <footer className="mt-12 border-t border-border/50 pt-8">
            <div className="flex items-center justify-between">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                {isZh ? "返回列表" : "Back to list"}
              </Link>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5" />
                {isZh ? "感谢阅读" : "Thanks for reading"}
              </div>
            </div>
          </footer>
        </div>
      </main>
      <Footer />
    </div>
  )
}
