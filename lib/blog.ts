// ─── Types ────────────────────────────────────────────────────────────────────

export type ArticleStatus = "draft" | "published"
export type ArticleCategory = "tutorial" | "blog" | "guide" | "tips" | "release"

export interface Article {
  id: string
  title_zh: string
  title_en: string
  slug: string
  content_zh: string
  content_en: string
  excerpt_zh: string
  excerpt_en: string
  cover_image: string | null
  category: ArticleCategory
  tags: string[]
  author: string
  status: ArticleStatus
  view_count: number
  published_at: string | null
  created_at: string
  updated_at: string
}

export type ArticleFormData = Omit<Article, "id" | "view_count" | "created_at" | "updated_at">

// ─── Category helpers ──────────────────────────────────────────────────────────

export const ARTICLE_CATEGORIES: { value: ArticleCategory; labelZh: string; labelEn: string }[] = [
  { value: "tutorial", labelZh: "教程", labelEn: "Tutorial" },
  { value: "guide", labelZh: "指南", labelEn: "Guide" },
  { value: "blog", labelZh: "博客", labelEn: "Blog" },
  { value: "tips", labelZh: "技巧", labelEn: "Tips" },
  { value: "release", labelZh: "更新", labelEn: "Release" },
]

export function getCategoryLabel(cat: ArticleCategory, locale: "zh" | "en"): string {
  const found = ARTICLE_CATEGORIES.find((c) => c.value === cat)
  if (!found) return cat
  return locale === "zh" ? found.labelZh : found.labelEn
}

// ─── Slug generator ────────────────────────────────────────────────────────────

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[\u4e00-\u9fa5]+/g, "") // strip CJK characters
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    || `article-${Date.now()}`
}

export function generateRandomSlug(prefix = "p", length = 10): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789"
  const n = Math.max(6, Math.min(32, Math.floor(length)))
  let out = ""
  for (let i = 0; i < n; i++) out += alphabet[Math.floor(Math.random() * alphabet.length)]
  return `${prefix}-${out}`
}

// ─── Simple Markdown → HTML renderer ──────────────────────────────────────────
// Handles: headings, bold, italic, images, links, code blocks, inline code,
//          blockquotes, unordered/ordered lists, horizontal rules, paragraphs.

function escHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function safeColorToken(token: string): string | null {
  const t = token.trim().toLowerCase()
  const named: Record<string, string> = {
    red: "#ef4444",
    orange: "#f97316",
    yellow: "#eab308",
    green: "#22c55e",
    blue: "#3b82f6",
    purple: "#8b5cf6",
    pink: "#ec4899",
    gray: "#9ca3af",
    muted: "#94a3b8",
    white: "#ffffff",
    black: "#000000",
  }
  if (t in named) return named[t]
  // allow #RGB, #RRGGBB, #RRGGBBAA
  if (/^#[0-9a-f]{3}([0-9a-f]{3})?([0-9a-f]{2})?$/.test(t)) return t
  return null
}

export function markdownToHtml(md: string): string {
  if (!md) return ""
  let html = md

  // ── normalize "WeChat pasted image url" lines ───────────────────────────
  // Common paste result: a standalone line like:
  // (https://.../xxx.png)
  // Convert it to markdown image so it can be rendered.
  html = html.replace(/^\(\s*(https?:\/\/[^\s)]+(?:png|jpe?g|gif|webp|svg)(?:\?[^\s)]*)?)\s*\)$/gim, (_m, url) => {
    return `![]( ${url} )`
  })

  // ── protect fenced code blocks ─────────────────────────────────────────
  const codeBlocks: string[] = []
  html = html.replace(/```(\w*)\n?([\s\S]*?)```/g, (_, lang, code) => {
    const i = codeBlocks.length
    const langClass = lang ? ` class="language-${lang}"` : ""
    codeBlocks.push(
      `<pre class="bg-muted rounded-lg p-4 overflow-x-auto my-6 text-sm"><code${langClass}>${escHtml(code.trim())}</code></pre>`
    )
    return `\x00CB${i}\x00`
  })

  // ── protect inline code ────────────────────────────────────────────────
  const inlineCodes: string[] = []
  html = html.replace(/`([^`\n]+)`/g, (_, code) => {
    const i = inlineCodes.length
    inlineCodes.push(
      `<code class="bg-muted px-1.5 py-0.5 rounded text-[0.875em] font-mono">${escHtml(code)}</code>`
    )
    return `\x00IC${i}\x00`
  })

  // ── text color ─────────────────────────────────────────────────────────
  // Syntax:
  // {{red:text}}  {{#ff3355:text}}
  html = html.replace(/\{\{\s*(#[0-9a-fA-F]{3,8}|[a-zA-Z]+)\s*:\s*([\s\S]+?)\s*\}\}/g, (_m, colorToken, text) => {
    const color = safeColorToken(String(colorToken))
    if (!color) return escHtml(String(text))
    return `<span style="color:${color}; font-weight:600">${escHtml(String(text))}</span>`
  })

  // ── highlight (background color) ───────────────────────────────────────
  // Syntax:
  // ==text== (default yellow)
  // ==yellow:text== / ==green:text== / ==blue:text== / ==pink:text== / ==gray:text==
  const highlightClass: Record<string, string> = {
    yellow: "bg-yellow-200/70 dark:bg-yellow-400/20",
    green: "bg-emerald-200/70 dark:bg-emerald-400/20",
    blue: "bg-sky-200/70 dark:bg-sky-400/20",
    pink: "bg-pink-200/70 dark:bg-pink-400/20",
    gray: "bg-muted",
  }
  html = html.replace(/==(?:(yellow|green|blue|pink|gray)\s*:\s*)?([\s\S]+?)==/g, (_m, color, text) => {
    const c = (color || "yellow").toLowerCase()
    const cls = highlightClass[c] || highlightClass.yellow
    return `<mark class="${cls} rounded px-1 py-0.5">${escHtml(String(text))}</mark>`
  })

  // ── images (before links) ──────────────────────────────────────────────
  html = html.replace(/!\[([^\]]*)\]\(\s*([^)\s]+)\s*(?:\s+"([^"]*)")?\)/g, (_, alt, src, title) => {
    const caption = alt ? `<figcaption class="text-center text-xs text-muted-foreground mt-2">${escHtml(alt)}</figcaption>` : ""
    const titleAttr = title ? ` title="${escHtml(title)}"` : ""
    return `<figure class="my-6"><img src="${src}" alt="${escHtml(alt)}"${titleAttr} class="rounded-xl w-full object-cover shadow-sm" loading="lazy" onload="this.dataset.loaded='true'" />${caption}</figure>`
  })

  // ── links ──────────────────────────────────────────────────────────────
  html = html.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (_, text, href) => {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-4 hover:text-primary/80">${text}</a>`
  })

  // ── headings h1–h6 ─────────────────────────────────────────────────────
  const hStyles = [
    "",
    "text-3xl font-bold mt-10 mb-4",
    "text-2xl font-bold mt-8 mb-3 border-b border-border pb-2",
    "text-xl font-semibold mt-7 mb-3",
    "text-lg font-semibold mt-6 mb-2",
    "text-base font-medium mt-5 mb-2",
    "text-sm font-medium mt-4 mb-1",
  ]
  for (let i = 6; i >= 1; i--) {
    const hashes = "#".repeat(i)
    html = html.replace(
      new RegExp(`^${hashes}\\s+(.+)$`, "gm"),
      `<h${i} class="${hStyles[i]}">$1</h${i}>`
    )
  }

  // ── bold + italic ──────────────────────────────────────────────────────
  html = html.replace(/\*\*\*([^*\n]+)\*\*\*/g, "<strong><em>$1</em></strong>")
  html = html.replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>")
  html = html.replace(/__([^_\n]+)__/g, "<strong>$1</strong>")
  html = html.replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
  html = html.replace(/_([^_\n]+)_/g, "<em>$1</em>")

  // ── blockquotes ────────────────────────────────────────────────────────
  html = html.replace(
    /^>\s*(.+)$/gm,
    '<blockquote class="border-l-4 border-primary/40 pl-4 py-1 my-4 italic text-muted-foreground">$1</blockquote>'
  )

  // ── horizontal rules ───────────────────────────────────────────────────
  html = html.replace(/^(?:---|\*\*\*|___)$/gm, '<hr class="border-border my-8" />')

  // ── unordered lists ────────────────────────────────────────────────────
  html = html.replace(/^([ \t]*[-*+] .+\n?)+/gm, (match) => {
    const items = match
      .trim()
      .split("\n")
      .map((l) => `<li>${l.replace(/^[ \t]*[-*+] /, "")}</li>`)
      .join("")
    return `<ul class="list-disc pl-6 my-4 space-y-1.5">${items}</ul>\n`
  })

  // ── ordered lists ──────────────────────────────────────────────────────
  html = html.replace(/^([ \t]*\d+\. .+\n?)+/gm, (match) => {
    const items = match
      .trim()
      .split("\n")
      .map((l) => `<li>${l.replace(/^[ \t]*\d+\. /, "")}</li>`)
      .join("")
    return `<ol class="list-decimal pl-6 my-4 space-y-1.5">${items}</ol>\n`
  })

  // ── paragraphs ─────────────────────────────────────────────────────────
  const chunks = html.split(/\n{2,}/)
  html = chunks
    .map((chunk) => {
      const t = chunk.trim()
      if (!t) return ""
      // already an HTML tag or a placeholder → pass through
      if (/^</.test(t) || /^\x00/.test(t)) return t
      return `<p class="my-4 leading-relaxed">${t.replace(/\n/g, "<br />")}</p>`
    })
    .filter(Boolean)
    .join("\n")

  // ── restore placeholders ───────────────────────────────────────────────
  codeBlocks.forEach((b, i) => {
    html = html.split(`\x00CB${i}\x00`).join(b)
  })
  inlineCodes.forEach((c, i) => {
    html = html.split(`\x00IC${i}\x00`).join(c)
  })

  return html
}

export function countWords(md: string, locale: "zh" | "en"): number {
  const raw = (md || "")
    // drop code blocks
    .replace(/```[\s\S]*?```/g, " ")
    // drop inline code
    .replace(/`[^`\n]+`/g, " ")
    // drop images/links urls, keep visible text
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1 ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1 ")
    // drop markdown syntax
    .replace(/[#>*_\-\n\r]/g, " ")
    .replace(/\s+/g, " ")
    .trim()

  if (!raw) return 0

  if (locale === "zh") {
    // count CJK characters + alphanumerics groups
    const cjk = raw.match(/[\u4e00-\u9fa5]/g)?.length ?? 0
    const latinWords = raw.match(/[A-Za-z0-9]+/g)?.length ?? 0
    return cjk + latinWords
  }

  return raw.match(/[A-Za-z0-9]+(?:'[A-Za-z0-9]+)*/g)?.length ?? 0
}
