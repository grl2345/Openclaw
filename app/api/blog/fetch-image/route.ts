import { NextRequest, NextResponse } from "next/server"
import sharp from "sharp"
import { createAdminClient } from "@/lib/supabase"

const BUCKET = "article-images"
const MAX_SIZE = 5 * 1024 * 1024 // 5 MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"]
const OPTIMIZE_MAX_WIDTH = 1200
const OPTIMIZE_QUALITY = 80

function checkAdminAuth(req: NextRequest) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "")
  return token === process.env.ADMIN_SECRET
}

function extFromType(type: string) {
  switch (type) {
    case "image/jpeg":
      return "jpg"
    case "image/png":
      return "png"
    case "image/webp":
      return "webp"
    case "image/gif":
      return "gif"
    case "image/svg+xml":
      return "svg"
    default:
      return "jpg"
  }
}

// POST /api/blog/fetch-image
// Body: { url: string }
// Returns: { url: string }
export async function POST(req: NextRequest) {
  if (!checkAdminAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  let url = ""
  try {
    const body = await req.json()
    url = typeof body?.url === "string" ? body.url : ""
  } catch {
    // ignore
  }
  if (!url) return NextResponse.json({ error: "No url provided" }, { status: 400 })

  let resp: Response
  try {
    resp = await fetch(url, {
      // WeChat images can be picky; keep headers minimal and acceptable.
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "image/*,*/*;q=0.8",
        Referer: "https://mp.weixin.qq.com/",
        Origin: "https://mp.weixin.qq.com",
      },
      redirect: "follow",
    })
  } catch {
    return NextResponse.json({ error: "Fetch failed" }, { status: 400 })
  }
  if (!resp.ok) return NextResponse.json({ error: `Fetch failed: ${resp.status}` }, { status: 400 })

  const contentType = (resp.headers.get("content-type") || "").split(";")[0].trim()
  if (!ALLOWED_TYPES.includes(contentType)) {
    return NextResponse.json({ error: `Unsupported content-type: ${contentType || "unknown"}` }, { status: 400 })
  }

  const lenHeader = resp.headers.get("content-length")
  if (lenHeader) {
    const len = Number(lenHeader)
    if (Number.isFinite(len) && len > MAX_SIZE) {
      return NextResponse.json({ error: "File too large (max 5 MB)" }, { status: 400 })
    }
  }

  const buf = await resp.arrayBuffer()
  if (buf.byteLength > MAX_SIZE) {
    return NextResponse.json({ error: "File too large (max 5 MB)" }, { status: 400 })
  }

  // Optimize: resize + convert to WebP (skip SVG and GIF)
  const skipOptimize = contentType === "image/svg+xml" || contentType === "image/gif"
  let uploadBuffer: Buffer | ArrayBuffer = buf
  let uploadContentType = contentType
  let uploadExt = extFromType(contentType)

  if (!skipOptimize) {
    try {
      uploadBuffer = await sharp(Buffer.from(buf))
        .resize(OPTIMIZE_MAX_WIDTH, undefined, { withoutEnlargement: true, fit: "inside" })
        .webp({ quality: OPTIMIZE_QUALITY })
        .toBuffer()
      uploadContentType = "image/webp"
      uploadExt = "webp"
    } catch {
      // If sharp fails, upload original
      uploadBuffer = buf
    }
  }

  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${uploadExt}`
  const path = `articles/${fileName}`

  const supabase = createAdminClient()
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, uploadBuffer, { contentType: uploadContentType, upsert: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const { data: { publicUrl } } = supabase.storage.from(BUCKET).getPublicUrl(path)
  return NextResponse.json({ url: publicUrl })
}

