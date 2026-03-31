import { NextRequest, NextResponse } from "next/server"
import sharp from "sharp"

// In-memory cache: URL → { buffer, contentType, timestamp }
const cache = new Map<string, { buf: Buffer; ct: string; ts: number }>()
const CACHE_TTL = 60 * 60 * 1000 // 1 hour
const MAX_CACHE_ENTRIES = 200

const DEFAULT_WIDTH = 800
const DEFAULT_QUALITY = 78
const MAX_WIDTH = 1600

// Allowed source hostnames (prevent open proxy abuse)
const ALLOWED_HOSTS = new Set([
  // Add your Supabase project hostname here; we also accept any *.supabase.co
])

function isAllowedUrl(url: string): boolean {
  try {
    const u = new URL(url)
    if (u.hostname.endsWith(".supabase.co")) return true
    if (u.hostname.endsWith(".supabase.in")) return true
    if (ALLOWED_HOSTS.has(u.hostname)) return true
    return false
  } catch {
    return false
  }
}

function evictStaleEntries() {
  if (cache.size <= MAX_CACHE_ENTRIES) return
  const now = Date.now()
  for (const [key, val] of cache) {
    if (now - val.ts > CACHE_TTL) cache.delete(key)
  }
  // If still over limit, remove oldest
  if (cache.size > MAX_CACHE_ENTRIES) {
    const oldest = [...cache.entries()].sort((a, b) => a[1].ts - b[1].ts)
    for (let i = 0; i < oldest.length - MAX_CACHE_ENTRIES; i++) {
      cache.delete(oldest[i][0])
    }
  }
}

// GET /api/img?url=...&w=800&q=78
export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url")
  if (!url) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 })
  }

  if (!isAllowedUrl(url)) {
    return NextResponse.json({ error: "URL not allowed" }, { status: 403 })
  }

  const w = Math.min(
    Number(req.nextUrl.searchParams.get("w")) || DEFAULT_WIDTH,
    MAX_WIDTH
  )
  const q = Math.min(
    Math.max(Number(req.nextUrl.searchParams.get("q")) || DEFAULT_QUALITY, 10),
    100
  )

  const cacheKey = `${url}|${w}|${q}`

  // Check cache
  const cached = cache.get(cacheKey)
  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    return new NextResponse(cached.buf, {
      headers: {
        "Content-Type": cached.ct,
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Cache": "HIT",
      },
    })
  }

  try {
    // Fetch original image
    const resp = await fetch(url, {
      headers: { Accept: "image/*,*/*;q=0.8" },
      signal: AbortSignal.timeout(10000),
    })

    if (!resp.ok) {
      return NextResponse.json({ error: `Upstream ${resp.status}` }, { status: 502 })
    }

    const arrayBuffer = await resp.arrayBuffer()
    const inputBuffer = Buffer.from(arrayBuffer)

    // Check if it's SVG or GIF (don't process these)
    const ct = resp.headers.get("content-type") || ""
    if (ct.includes("svg") || ct.includes("gif")) {
      return new NextResponse(inputBuffer, {
        headers: {
          "Content-Type": ct,
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      })
    }

    // Resize + convert to WebP
    const optimized = await sharp(inputBuffer)
      .resize(w, undefined, { withoutEnlargement: true, fit: "inside" })
      .webp({ quality: q })
      .toBuffer()

    // Store in cache
    evictStaleEntries()
    cache.set(cacheKey, { buf: optimized, ct: "image/webp", ts: Date.now() })

    return new NextResponse(optimized, {
      headers: {
        "Content-Type": "image/webp",
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Cache": "MISS",
      },
    })
  } catch (err) {
    // On error, redirect to original URL as fallback
    return NextResponse.redirect(url)
  }
}
