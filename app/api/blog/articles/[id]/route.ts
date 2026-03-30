import { NextRequest, NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase"

function checkAdminAuth(req: NextRequest) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "")
  return token === process.env.ADMIN_SECRET
}

// GET /api/blog/articles/:id  (can also fetch by slug)
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = createAdminClient()

  // Try UUID first, then slug
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  let query = supabase.from("openclaw_posts").select("*")
  query = uuidRegex.test(id) ? query.eq("id", id) : query.eq("slug", id)

  const { data, error } = await query.single()
  if (error || !data) return NextResponse.json({ error: "Not found" }, { status: 404 })

  // Increment view count (fire and forget)
  supabase.rpc("increment_post_view", { post_id: data.id }).then(() => {})

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
  return NextResponse.json({ article })
}

// PUT /api/blog/articles/:id  (admin only)
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params
  const body = await req.json()

  // Auto-set published_at when first publishing
  if (body.status === "published" && !body.published_at) {
    body.published_at = new Date().toISOString()
  }

  const supabase = createAdminClient()
  const updateBody: any = {
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

  const { data, error } = await supabase
    .from("openclaw_posts")
    .update(updateBody)
    .eq("id", id)
    .select()
    .single()

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
  return NextResponse.json({ article })
}

// DELETE /api/blog/articles/:id  (admin only)
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params
  const supabase = createAdminClient()
  const { error } = await supabase.from("openclaw_posts").delete().eq("id", id)
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ success: true })
}
