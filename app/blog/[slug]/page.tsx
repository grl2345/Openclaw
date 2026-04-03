// Revalidate every 60 seconds so content stays fresh without hitting DB on every request
export const revalidate = 60

import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { markdownToHtml, getCategoryLabel, countWords, type Article } from "@/lib/blog"
import { createAdminClient } from "@/lib/supabase"
import { format } from "date-fns"
import { ViewTracker } from "./view-tracker"
import { GiscusComments } from "@/components/giscus-comments"
import { AdSlot } from "@/components/ad-slot"

async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from("openclaw_posts")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .single()

    if (error || !data) return null

    return {
      id: data.id,
      title_zh: data.title_zh ?? "",
      title_en: data.title_en ?? "",
      slug: data.slug,
      content_zh: data.content_zh ?? "",
      content_en: data.content_en ?? "",
      excerpt_zh: data.summary_zh ?? "",
      excerpt_en: data.summary_en ?? "",
      cover_image: data.cover_image ?? null,
      category: data.category,
      tags: data.tags ?? [],
      author: data.author ?? "OpenClaw Hub",
      status: data.status,
      view_count: data.view_count ?? 0,
      published_at: data.published_at ?? null,
      created_at: data.created_at,
      updated_at: data.updated_at,
    }
  } catch {
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) {
    return { title: "文章不存在 | Article not found" }
  }

  const title = article.title_zh || article.title_en
  const description = article.excerpt_zh || article.excerpt_en
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

  return {
    title: `${title} - OpenClaw Hub`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${baseUrl}/blog/${article.slug}`,
      publishedTime: article.published_at ?? undefined,
      authors: [article.author],
      ...(article.cover_image ? { images: [{ url: article.cover_image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(article.cover_image ? { images: [article.cover_image] } : {}),
    },
  }
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const title = article.title_zh || article.title_en
  const content = article.content_zh || article.content_en
  const excerpt = article.excerpt_zh || article.excerpt_en
  const categoryLabel = getCategoryLabel(article.category, "zh")
  const date = article.published_at || article.created_at
  const htmlContent = markdownToHtml(content)
  const words = countWords(content, "zh")
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

  // JSON-LD structured data for search engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    url: `${baseUrl}/blog/${article.slug}`,
    author: { "@type": "Person", name: article.author },
    ...(article.published_at ? { datePublished: article.published_at } : {}),
    ...(article.updated_at ? { dateModified: article.updated_at } : {}),
    ...(article.cover_image ? { image: article.cover_image } : {}),
    wordCount: words,
    keywords: article.tags.join(", "),
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Client component to track view count */}
      <ViewTracker slug={slug} />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          {/* ── 返回 ────────────────────────────────────────────── */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← 博客列表
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
              <span>{article.author}</span>
              <span>{format(new Date(date), "yyyy-MM-dd")}</span>
              <span>{article.view_count.toLocaleString()} 次阅读</span>
              <span>{words.toLocaleString()} 字</span>
            </div>
          </header>

          {/* ── 正文 (server-rendered HTML for SEO) ──────────── */}
          <article
            className="prose-custom min-h-32"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* ── 文章底部广告位 ───────────────────────────────────── */}
          <AdSlot slot="article-bottom" className="my-8" />

          {/* ── 评论 ─────────────────────────────────────────────── */}
          <GiscusComments term={slug} />

          {/* ── 底部 ─────────────────────────────────────────────── */}
          <footer className="mt-12 border-t border-border/50 pt-8">
            <div className="flex items-center justify-between">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                ← 返回列表
              </Link>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                感谢阅读
              </div>
            </div>
          </footer>
        </div>
      </main>
      <Footer />
    </div>
  )
}
