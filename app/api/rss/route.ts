import { NextRequest, NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase"

function checkAdminAuth(req: NextRequest) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "")
  return token === process.env.ADMIN_SECRET
}

/**
 * Simple RSS/Atom XML parser — extracts title, link, pubDate, description.
 * No external dependency needed for basic feeds.
 */
function parseRssXml(xml: string): Array<{ title: string; link: string; pubDate: string; description: string }> {
  const items: Array<{ title: string; link: string; pubDate: string; description: string }> = []

  // Match <item> (RSS) or <entry> (Atom)
  const itemRegex = /<(?:item|entry)[\s>]([\s\S]*?)<\/(?:item|entry)>/gi
  let match: RegExpExecArray | null

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1]

    const getTag = (tag: string): string => {
      // Handle both <tag>content</tag> and <tag><![CDATA[content]]></tag>
      const re = new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`, "i")
      const m = block.match(re)
      return m ? m[1].trim() : ""
    }

    // Atom uses <link href="..." /> instead of <link>url</link>
    let link = getTag("link")
    if (!link) {
      const linkHref = block.match(/<link[^>]+href=["']([^"']+)["']/i)
      if (linkHref) link = linkHref[1]
    }

    items.push({
      title: getTag("title"),
      link,
      pubDate: getTag("pubDate") || getTag("published") || getTag("updated") || "",
      description: getTag("description") || getTag("summary") || getTag("content") || "",
    })
  }

  return items
}

/**
 * POST /api/rss (admin only)
 *
 * Fetches RSS feeds from configured sources (or a provided URL)
 * and inserts new items into openclaw_news.
 *
 * Body: { url?: string, category?: string }
 *   - If url is provided, fetch that single feed
 *   - If no url, fetch all enabled sources from openclaw_rss_sources
 */
export async function POST(req: NextRequest) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await req.json().catch(() => ({}))
  const singleUrl = body.url as string | undefined
  const defaultCategory = (body.category as string) || "programming"

  let supabase: ReturnType<typeof createAdminClient>
  try {
    supabase = createAdminClient()
  } catch {
    return NextResponse.json({ error: "Database not configured" }, { status: 500 })
  }

  // Determine which feeds to fetch
  let feeds: Array<{ name: string; url: string; category: string }> = []

  if (singleUrl) {
    feeds = [{ name: "manual", url: singleUrl, category: defaultCategory }]
  } else {
    // Fetch from RSS sources table
    const { data: sources } = await supabase
      .from("openclaw_rss_sources")
      .select("*")
      .eq("enabled", true)

    if (sources && sources.length > 0) {
      feeds = sources.map((s: any) => ({
        name: s.name,
        url: s.feed_url,
        category: s.category || "programming",
      }))
    }
  }

  if (feeds.length === 0) {
    return NextResponse.json({
      message: "No RSS sources configured. Add sources to openclaw_rss_sources table or provide a url in the request body.",
      inserted: 0,
    })
  }

  let totalInserted = 0
  const errors: string[] = []

  for (const feed of feeds) {
    try {
      const res = await fetch(feed.url, {
        headers: { "User-Agent": "OpenClaw-Hub-RSS/1.0" },
        signal: AbortSignal.timeout(10000),
      })

      if (!res.ok) {
        errors.push(`${feed.name}: HTTP ${res.status}`)
        continue
      }

      const xml = await res.text()
      const items = parseRssXml(xml)

      for (const item of items.slice(0, 20)) {
        if (!item.title || !item.link) continue

        // Strip HTML tags from description
        const cleanDesc = item.description
          .replace(/<[^>]+>/g, "")
          .replace(/&nbsp;/g, " ")
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .slice(0, 500)

        // Upsert: skip if URL already exists
        const { error: insertError } = await supabase
          .from("openclaw_news")
          .upsert(
            {
              source: feed.name,
              author: feed.name,
              date: item.pubDate ? new Date(item.pubDate).toISOString().slice(0, 10) : null,
              title_zh: item.title,
              title_en: item.title,
              desc_zh: cleanDesc,
              desc_en: cleanDesc,
              tags: ["rss", feed.category],
              url: item.link,
              category: feed.category,
              status: "published",
            },
            { onConflict: "url", ignoreDuplicates: true },
          )

        if (!insertError) totalInserted++
      }

      // Update last_fetched timestamp
      if (!singleUrl) {
        await supabase
          .from("openclaw_rss_sources")
          .update({ last_fetched: new Date().toISOString() })
          .eq("feed_url", feed.url)
      }
    } catch (err) {
      errors.push(`${feed.name}: ${err instanceof Error ? err.message : "unknown error"}`)
    }
  }

  return NextResponse.json({
    message: `Processed ${feeds.length} feed(s)`,
    inserted: totalInserted,
    errors: errors.length > 0 ? errors : undefined,
  })
}
