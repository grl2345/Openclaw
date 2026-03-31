import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogListClient } from "./blog-list-client"
import { createAdminClient } from "@/lib/supabase"
import { getCategoryLabel, type Article } from "@/lib/blog"

// Revalidate every 60 seconds so content stays fresh without hitting DB on every request
export const revalidate = 60

export const metadata: Metadata = {
  title: "博客 & 教程 | Blog & Tutorials - OpenClaw Hub",
  description:
    "OpenClaw Hub 原创技术博客与实战教程，帮你更快掌握 AI 助理。Original technical blog posts and hands-on tutorials.",
}

const LIMIT = 12

async function getPublishedArticles(): Promise<{ articles: Article[]; count: number }> {
  try {
    const supabase = createAdminClient()
    const { data, count } = await supabase
      .from("openclaw_posts")
      .select(
        "id,title_zh,title_en,slug,summary_zh,summary_en,cover_image,category,tags,author,status,view_count,published_at,created_at,updated_at",
        { count: "exact" }
      )
      .eq("status", "published")
      .order("published_at", { ascending: false, nullsFirst: false })
      .order("created_at", { ascending: false })
      .range(0, LIMIT - 1)

    const articles: Article[] = (data ?? []).map((p: any) => ({
      id: p.id,
      title_zh: p.title_zh ?? "",
      title_en: p.title_en ?? "",
      slug: p.slug,
      content_zh: "",
      content_en: "",
      excerpt_zh: p.summary_zh ?? "",
      excerpt_en: p.summary_en ?? "",
      cover_image: p.cover_image ?? null,
      category: p.category,
      tags: p.tags ?? [],
      author: p.author ?? "OpenClaw Hub",
      status: p.status,
      view_count: p.view_count ?? 0,
      published_at: p.published_at ?? null,
      created_at: p.created_at,
      updated_at: p.updated_at,
    }))

    return { articles, count: count ?? 0 }
  } catch {
    return { articles: [], count: 0 }
  }
}

export default async function BlogPage() {
  const { articles, count } = await getPublishedArticles()

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "OpenClaw Hub 博客 & 教程",
    description: "OpenClaw Hub 原创技术博客与实战教程",
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"}/blog`,
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title_zh || a.title_en,
      description: a.excerpt_zh || a.excerpt_en,
      url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"}/blog/${a.slug}`,
      author: { "@type": "Person", name: a.author },
      ...(a.published_at ? { datePublished: a.published_at } : {}),
      ...(a.cover_image ? { image: a.cover_image } : {}),
    })),
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-16">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          {/* ── 页头 (static, rendered server-side for SEO) ──── */}
          <header className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              原创内容
            </div>
            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              博客 &amp; 教程
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              OpenClaw Hub 原创技术博客与实战教程，帮你更快掌握 AI 助理
            </p>
          </header>

          {/*
            ── Server-rendered article list for SEO ────────────
            This section is always in the HTML source so search engine crawlers
            can discover all article titles, excerpts, and links even without
            executing JavaScript. The client component below replaces the visual
            rendering with interactive search/filter/pagination.
          */}
          {articles.length > 0 && (
            <section className="sr-only" aria-label="文章列表">
              <h2>全部文章</h2>
              <ul>
                {articles.map((a) => (
                  <li key={a.id}>
                    <article>
                      <h3>
                        <Link href={`/blog/${a.slug}`}>{a.title_zh || a.title_en}</Link>
                      </h3>
                      <p>{a.excerpt_zh || a.excerpt_en}</p>
                      <span>{getCategoryLabel(a.category, "zh")}</span>
                      {a.tags.length > 0 && <span>{a.tags.join(", ")}</span>}
                      {a.published_at && <time dateTime={a.published_at}>{a.published_at.slice(0, 10)}</time>}
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── Interactive client part (search, filter, cards) ── */}
          <BlogListClient initialArticles={articles} initialCount={count} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
