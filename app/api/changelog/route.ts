import { NextRequest, NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase"
import { CHANGELOG } from "@/lib/changelog-data"

function checkAdminAuth(req: NextRequest) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "")
  return token === process.env.ADMIN_SECRET
}

// GET /api/changelog?source=db|static
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const source = searchParams.get("source") || "auto"

  // Try database first
  if (source !== "static") {
    try {
      const supabase = createAdminClient()
      const { data, error } = await supabase
        .from("openclaw_changelog")
        .select("*")
        .eq("status", "published")
        .order("release_date", { ascending: false })

      if (!error && data && data.length > 0) {
        const entries = data.map((row: any) => ({
          slug: row.slug,
          version: row.version,
          releaseDate: row.release_date,
          releasedBy: row.released_by,
          contributorCount: row.contributor_count,
          coverImage: row.cover_image,
          githubUrl: row.github_url,
          tagline: { zh: row.tagline_zh, en: row.tagline_en },
          summary: { zh: row.summary_zh, en: row.summary_en },
          highlights: row.highlights ?? [],
          sections: row.sections ?? [],
        }))
        return NextResponse.json({ entries, source: "db" })
      }
    } catch {
      // Database not available
    }
  }

  // Fallback: static data
  return NextResponse.json({ entries: CHANGELOG, source: "static" })
}

// POST /api/changelog (admin only - create changelog entry)
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
    .from("openclaw_changelog")
    .insert({
      slug: body.slug,
      version: body.version,
      release_date: body.releaseDate,
      released_by: body.releasedBy || "core-team",
      contributor_count: body.contributorCount || 0,
      cover_image: body.coverImage || "/logo.webp",
      github_url: body.githubUrl || "",
      tagline_zh: body.tagline?.zh || "",
      tagline_en: body.tagline?.en || "",
      summary_zh: body.summary?.zh || "",
      summary_en: body.summary?.en || "",
      highlights: body.highlights || [],
      sections: body.sections || [],
      status: body.status || "published",
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json({ entry: data }, { status: 201 })
}
