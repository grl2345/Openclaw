import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogListClient } from "./blog-list-client"
import { createAdminClient } from "@/lib/supabase"
import type { Article } from "@/lib/blog"

// Force dynamic rendering so content is always fresh (not cached at build time)
export const dynamic = "force-dynamic"

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
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

          {/* ── Interactive client part (search, filter, cards) ── */}
          <BlogListClient initialArticles={articles} initialCount={count} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
