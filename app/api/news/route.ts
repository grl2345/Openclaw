import { NextRequest, NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase"
import { COMMUNITY_FEED_ITEMS, getOfficialFeedItems } from "@/lib/news-feed"

function checkAdminAuth(req: NextRequest) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "")
  return token === process.env.ADMIN_SECRET
}

// GET /api/news?category=programming&limit=20&offset=0&source=db|static
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const source = searchParams.get("source") || "auto"
  const category = searchParams.get("category")
  const limit = Number(searchParams.get("limit") || 20)
  const offset = Number(searchParams.get("offset") || 0)

  // Try database first, fall back to static data
  if (source !== "static") {
    try {
      const supabase = createAdminClient()
      let query = supabase
        .from("openclaw_news")
        .select("*", { count: "exact" })
        .eq("status", "published")
        .order("date", { ascending: false, nullsFirst: false })
        .range(offset, offset + limit - 1)

      if (category && category !== "all") {
        query = query.eq("category", category)
      }

      const { data, error, count } = await query
      if (!error && data && data.length > 0) {
        const items = data.map((row: any) => ({
          id: row.id,
          source: row.source,
          author: row.author,
          date: row.date,
          titleZh: row.title_zh,
          titleEn: row.title_en,
          descriptionZh: row.desc_zh,
          descriptionEn: row.desc_en,
          tags: row.tags ?? [],
          viewCount: row.view_count,
          url: row.url,
          category: row.category,
        }))
        return NextResponse.json({ items, count, source: "db" })
      }
    } catch {
      // Database not available, fall back to static
    }
  }

  // Fallback: static data
  let items = [...getOfficialFeedItems(), ...COMMUNITY_FEED_ITEMS]
  if (category && category !== "all") {
    items = items.filter((i) => i.category === category)
  }
  // Sort by date descending
  items.sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0
    const db = b.date ? new Date(b.date).getTime() : 0
    return db - da
  })
  const total = items.length
  items = items.slice(offset, offset + limit)

  return NextResponse.json({ items, count: total, source: "static" })
}

// POST /api/news (admin only - create news item)
export async function POST(req: NextRequest) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await req.json()

  let supabase: ReturnType<typeof createAdminClient>
  try {
    supabase = createAdminClient()
  } catch {
    return NextResponse.json({ error: "Database not configured" }, { status: 500 })
  }

  const { data, error } = await supabase
    .from("openclaw_news")
    .insert({
      source: body.source || "",
      author: body.author || "",
      date: body.date || null,
      title_zh: body.titleZh || "",
      title_en: body.titleEn || "",
      desc_zh: body.descriptionZh || "",
      desc_en: body.descriptionEn || "",
      tags: body.tags || [],
      url: body.url || "",
      category: body.category || "programming",
      status: body.status || "published",
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ item: data }, { status: 201 })
}
