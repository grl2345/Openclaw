import { NextRequest, NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase"
import type { ArticleFormData } from "@/lib/blog"

function checkAdminAuth(req: NextRequest) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "")
  return token === process.env.ADMIN_SECRET
}

// GET /api/blog/articles?status=published&category=tutorial&limit=20&offset=0
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const status = searchParams.get("status") || "published"
  const category = searchParams.get("category")
  const limit = Number(searchParams.get("limit") || 20)
  const offset = Number(searchParams.get("offset") || 0)

  let supabase: ReturnType<typeof createAdminClient>
  try {
    supabase = createAdminClient()
  } catch {
    return NextResponse.json({ articles: [], count: 0 })
  }
  let query = supabase
    .from("openclaw_posts")
    .select("id,title_zh,title_en,slug,summary_zh,summary_en,cover_image,category,tags,author,status,view_count,published_at,created_at,updated_at", { count: "exact" })
    .order("published_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1)

  if (status !== "all") query = query.eq("status", status)
  if (category) query = query.eq("category", category)

  const { data, error, count } = await query
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  const articles = (data ?? []).map((p: any) => ({
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
  return NextResponse.json({ articles, count })
}

// POST /api/blog/articles  (admin only)
export async function POST(req: NextRequest) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body: ArticleFormData = await req.json()

  // Auto-set published_at if status is published and not already set
  if (body.status === "published" && !body.published_at) {
    body.published_at = new Date().toISOString()
  }

  const supabase = createAdminClient()
  const insertBody: any = {
    slug: body.slug,
    title_zh: body.title_zh,
    title_en: body.title_en || null,
    summary_zh: body.excerpt_zh || null,
    summary_en: body.excerpt_en || null,
    content_zh: body.content_zh || null,
    content_en: body.content_en || null,
    cover_image: body.cover_image || null,
    category: body.category,
    tags: body.tags ?? [],
    author: body.author || "OpenClaw Hub",
    status: body.status,
    published_at: body.published_at ?? null,
  }

  const { data, error } = await supabase.from("openclaw_posts").insert(insertBody).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  const article = {
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
  return NextResponse.json({ article }, { status: 201 })
}
