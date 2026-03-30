"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { ARTICLE_CATEGORIES, generateRandomSlug, generateSlug, markdownToHtml, type Article, type ArticleCategory } from "@/lib/blog"
import { htmlToMarkdown } from "@/lib/html-to-markdown"
import {
  Plus, Pencil, Trash2, Eye, EyeOff, ArrowLeft, Upload, Image as ImageIcon,
  Loader2, CheckCircle2, XCircle, Bold, Italic, Heading2, Heading3,
  Code, Link as LinkIcon, List, ListOrdered, Quote, Minus, Save, Send, X, Highlighter, Palette, RemoveFormatting,
  LayoutList, FileEdit,
} from "lucide-react"

// ─── Auth ─────────────────────────────────────────────────────────────────────

function useAdminAuth() {
  const [token, setToken] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const t = localStorage.getItem("blog_admin_token")
    setToken(t)
    setChecked(true)
  }, [])

  const login = async (password: string): Promise<boolean> => {
    const res = await fetch("/api/blog/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })
    if (!res.ok) return false
    const { token: t } = await res.json()
    localStorage.setItem("blog_admin_token", t)
    setToken(t)
    return true
  }

  const logout = () => {
    localStorage.removeItem("blog_admin_token")
    setToken(null)
  }

  return { token, checked, login, logout }
}

// ─── Types ────────────────────────────────────────────────────────────────────

type View = "list" | "editor"

interface Toast { id: number; type: "success" | "error"; message: string }

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const { token, checked, login, logout } = useAdminAuth()
  const [view, setView] = useState<View>("list")
  const [editingId, setEditingId] = useState<string | null>(null)
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (type: "success" | "error", message: string) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, type, message }])
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3500)
  }

  if (!checked) return null

  if (!token) {
    return <LoginScreen onLogin={login} />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Toasts ── */}
      <div className="fixed right-4 top-4 z-50 flex flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium shadow-lg animate-in slide-in-from-right-4 ${
              t.type === "success"
                ? "bg-green-500 text-white"
                : "bg-destructive text-destructive-foreground"
            }`}
          >
            {t.type === "success" ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
            {t.message}
          </div>
        ))}
      </div>

      {/* ── Header ── */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              OpenClaw Hub
            </Link>
            <span className="text-border">/</span>
            <span className="text-sm font-semibold">博客管理</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/blog"
              target="_blank"
              className="flex items-center gap-1.5 rounded-lg border border-border/50 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
            >
              <Eye className="h-3.5 w-3.5" />
              预览博客
            </Link>
            <button
              onClick={logout}
              className="rounded-lg border border-border/50 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
            >
              退出登录
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {view === "list" ? (
          <ArticleList
            token={token}
            onNew={() => { setEditingId(null); setView("editor") }}
            onEdit={(id) => { setEditingId(id); setView("editor") }}
            onToast={addToast}
          />
        ) : (
          <ArticleEditor
            token={token}
            articleId={editingId}
            onBack={() => setView("list")}
            onToast={addToast}
          />
        )}
      </div>
    </div>
  )
}

// ─── Login Screen ─────────────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: (pw: string) => Promise<boolean> }) {
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    const ok = await onLogin(password)
    if (!ok) setError("密码错误")
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-2xl border border-border/50 bg-card p-8 shadow-xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <FileEdit className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-xl font-bold">博客管理后台</h1>
          <p className="mt-1 text-sm text-muted-foreground">输入管理密码继续</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="管理密码"
            autoFocus
            className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {error && <p className="text-xs text-destructive">{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground disabled:opacity-50"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            登录
          </button>
        </form>
      </div>
    </div>
  )
}

// ─── Article List ─────────────────────────────────────────────────────────────

function ArticleList({
  token,
  onNew,
  onEdit,
  onToast,
}: {
  token: string
  onNew: () => void
  onEdit: (id: string) => void
  onToast: (type: "success" | "error", msg: string) => void
}) {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  const fetchAll = useCallback(async () => {
    setLoading(true)
    const res = await fetch("/api/blog/articles?status=all&limit=100", {
      headers: { Authorization: `Bearer ${token}` },
    })
    const json = await res.json()
    setArticles(json.articles || [])
    setLoading(false)
  }, [token])

  useEffect(() => { fetchAll() }, [fetchAll])

  const deleteArticle = async (id: string, title: string) => {
    if (!confirm(`确认删除「${title}」？此操作不可撤销。`)) return
    const res = await fetch(`/api/blog/articles/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
    if (res.ok) { onToast("success", "已删除"); fetchAll() }
    else onToast("error", "删除失败")
  }

  const toggleStatus = async (article: Article) => {
    const newStatus = article.status === "published" ? "draft" : "published"
    const res = await fetch(`/api/blog/articles/${article.id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
    if (res.ok) { onToast("success", newStatus === "published" ? "已发布" : "已设为草稿"); fetchAll() }
    else onToast("error", "操作失败")
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">文章列表</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">共 {articles.length} 篇</p>
        </div>
        <button
          onClick={onNew}
          className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          新建文章
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />加载中…
        </div>
      ) : articles.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border/60 py-20 text-center">
          <LayoutList className="mx-auto mb-3 h-10 w-10 text-muted-foreground/30" />
          <p className="text-sm text-muted-foreground">还没有文章，点击「新建文章」开始创作</p>
        </div>
      ) : (
        <div className="space-y-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/60 p-4"
            >
              {/* 封面缩略图 */}
              <div className="h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                {article.cover_image ? (
                  <img src={article.cover_image} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <ImageIcon className="h-5 w-5 text-muted-foreground/30" />
                  </div>
                )}
              </div>

              {/* 标题 + 元信息 */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="truncate text-sm font-semibold">{article.title_zh || article.title_en}</h3>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      article.status === "published"
                        ? "bg-green-500/10 text-green-600"
                        : "bg-yellow-500/10 text-yellow-600"
                    }`}
                  >
                    {article.status === "published" ? "已发布" : "草稿"}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  /{article.slug} · {article.category} · {article.view_count} 阅读
                </p>
              </div>

              {/* 操作按钮 */}
              <div className="flex shrink-0 items-center gap-1">
                <button
                  onClick={() => toggleStatus(article)}
                  title={article.status === "published" ? "设为草稿" : "发布"}
                  className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {article.status === "published" ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => onEdit(article.id)}
                  title="编辑"
                  className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  onClick={() => deleteArticle(article.id, article.title_zh || article.title_en)}
                  title="删除"
                  className="rounded-lg p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Article Editor ────────────────────────────────────────────────────────────

const EMPTY_FORM = {
  title_zh: "",
  title_en: "",
  slug: "",
  excerpt_zh: "",
  excerpt_en: "",
  content_zh: "",
  content_en: "",
  cover_image: "",
  category: "tutorial" as ArticleCategory,
  tags: [] as string[],
  author: "OpenClaw Hub",
  status: "draft" as "draft" | "published",
  published_at: null as string | null,
}

function toDatetimeLocalValue(iso: string | null) {
  if (!iso) return ""
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ""
  const pad = (n: number) => String(n).padStart(2, "0")
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

function fromDatetimeLocalValue(v: string) {
  if (!v) return null
  const d = new Date(v)
  if (Number.isNaN(d.getTime())) return null
  return d.toISOString()
}

function ArticleEditor({
  token,
  articleId,
  onBack,
  onToast,
}: {
  token: string
  articleId: string | null
  onBack: () => void
  onToast: (type: "success" | "error", msg: string) => void
}) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [loading, setLoading] = useState(!!articleId)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState<"zh" | "en">("zh")
  const [previewMode, setPreviewMode] = useState(false)
  const [tagInput, setTagInput] = useState("")
  const [uploadingCover, setUploadingCover] = useState(false)
  const [uploadingInline, setUploadingInline] = useState(false)
  const [pastingWechat, setPastingWechat] = useState(false)

  const zhRef = useRef<HTMLTextAreaElement>(null)
  const enRef = useRef<HTMLTextAreaElement>(null)
  const coverInputRef = useRef<HTMLInputElement>(null)
  const inlineInputRef = useRef<HTMLInputElement>(null)

  // Load existing article
  useEffect(() => {
    if (!articleId) return
    fetch(`/api/blog/articles/${articleId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then(({ article }) => {
        if (article) {
          setForm({
            title_zh: article.title_zh,
            title_en: article.title_en,
            slug: article.slug,
            excerpt_zh: article.excerpt_zh,
            excerpt_en: article.excerpt_en,
            content_zh: article.content_zh,
            content_en: article.content_en,
            cover_image: article.cover_image || "",
            category: article.category,
            tags: article.tags,
            author: article.author,
            status: article.status,
            published_at: article.published_at,
          })
        }
        setLoading(false)
      })
  }, [articleId, token])

  // Auto-generate random slug for new articles when empty.
  useEffect(() => {
    if (articleId) return
    if (form.slug) return
    setForm((f) => ({ ...f, slug: generateRandomSlug("p", 10) }))
  }, [articleId, form.slug])

  const set = (key: keyof typeof EMPTY_FORM, value: unknown) =>
    setForm((f) => ({ ...f, [key]: value }))

  // ── Toolbar actions ─────────────────────────────────────────────────────────
  const insertText = (before: string, after = "", placeholder = "文字") => {
    const ref = activeTab === "zh" ? zhRef : enRef
    const ta = ref.current
    if (!ta) return
    const key = activeTab === "zh" ? "content_zh" : "content_en"
    const start = ta.selectionStart
    const end = ta.selectionEnd
    const sel = ta.value.slice(start, end) || placeholder
    const newVal = ta.value.slice(0, start) + before + sel + after + ta.value.slice(end)
    set(key, newVal)
    setTimeout(() => {
      ta.focus()
      ta.setSelectionRange(start + before.length, start + before.length + sel.length)
    }, 0)
  }

  const insertAtCursor = (text: string) => {
    const ref = activeTab === "zh" ? zhRef : enRef
    const ta = ref.current
    if (!ta) return
    const key = activeTab === "zh" ? "content_zh" : "content_en"
    const start = ta.selectionStart
    const end = ta.selectionEnd
    const newVal = ta.value.slice(0, start) + text + ta.value.slice(end)
    set(key, newVal)
    setTimeout(() => {
      ta.focus()
      ta.setSelectionRange(start + text.length, start + text.length)
    }, 0)
  }

  const replaceSelection = (transform: (sel: string) => string, placeholder = "文字") => {
    const ref = activeTab === "zh" ? zhRef : enRef
    const ta = ref.current
    if (!ta) return
    const key = activeTab === "zh" ? "content_zh" : "content_en"
    const start = ta.selectionStart
    const end = ta.selectionEnd
    const sel = ta.value.slice(start, end) || placeholder
    const replaced = transform(sel)
    const newVal = ta.value.slice(0, start) + replaced + ta.value.slice(end)
    set(key, newVal)
    setTimeout(() => {
      ta.focus()
      ta.setSelectionRange(start, start + replaced.length)
    }, 0)
  }

  const applyTextColor = (color: "red" | "orange" | "green" | "blue" | "purple") => {
    replaceSelection((sel) => {
      const s = sel.trim()
      // If already wrapped in {{color:...}}, replace outer color
      const m = s.match(/^\{\{\s*(#[0-9a-fA-F]{3,8}|[a-zA-Z]+)\s*:\s*([\s\S]+?)\s*\}\}$/)
      if (m) return `{{${color}:${m[2]}}}`
      return `{{${color}:${sel}}}`
    }, "彩色文字")
  }

  const applyHighlight = (color: "yellow" | "green" | "blue" | "pink") => {
    replaceSelection((sel) => {
      const s = sel.trim()
      // If already wrapped in ==...== (with or without color), replace outer color
      const m = s.match(/^==(?:(yellow|green|blue|pink|gray)\s*:\s*)?([\s\S]+?)==$/i)
      if (m) return `==${color}:${m[2]}==`
      return `==${color}:${sel}==`
    }, "高亮文字")
  }

  const clearFormatting = () => {
    replaceSelection((sel) => {
      let s = sel
      // remove our custom wrappers repeatedly
      for (let i = 0; i < 5; i++) {
        s = s.replace(/\{\{\s*(#[0-9a-fA-F]{3,8}|[a-zA-Z]+)\s*:\s*([\s\S]+?)\s*\}\}/g, "$2")
        s = s.replace(/==(?:(yellow|green|blue|pink|gray)\s*:\s*)?([\s\S]+?)==/gi, "$2")
      }
      // unwrap common markdown inline styles
      s = s
        .replace(/\*\*([\s\S]+?)\*\*/g, "$1")
        .replace(/\*([\s\S]+?)\*/g, "$1")
        .replace(/__([\s\S]+?)__/g, "$1")
        .replace(/_([\s\S]+?)_/g, "$1")
        .replace(/`([\s\S]+?)`/g, "$1")
      return s
    }, "文字")
  }

  const toolbarButtons = [
    { icon: <Heading2 className="h-4 w-4" />, title: "H2", action: () => insertText("\n## ", "", "标题") },
    { icon: <Heading3 className="h-4 w-4" />, title: "H3", action: () => insertText("\n### ", "", "标题") },
    { icon: <Bold className="h-4 w-4" />, title: "粗体", action: () => insertText("**", "**", "粗体") },
    { icon: <Italic className="h-4 w-4" />, title: "斜体", action: () => insertText("*", "*", "斜体") },
    { icon: <RemoveFormatting className="h-4 w-4" />, title: "清除格式", action: clearFormatting },
    { icon: <Palette className="h-4 w-4 text-rose-500" />, title: "文字(红)", action: () => applyTextColor("red") },
    { icon: <Palette className="h-4 w-4 text-amber-500" />, title: "文字(橙)", action: () => applyTextColor("orange") },
    { icon: <Palette className="h-4 w-4 text-emerald-500" />, title: "文字(绿)", action: () => applyTextColor("green") },
    { icon: <Palette className="h-4 w-4 text-sky-500" />, title: "文字(蓝)", action: () => applyTextColor("blue") },
    { icon: <Palette className="h-4 w-4 text-violet-500" />, title: "文字(紫)", action: () => applyTextColor("purple") },
    { icon: <Highlighter className="h-4 w-4 text-yellow-500" />, title: "高亮(黄)", action: () => applyHighlight("yellow") },
    { icon: <Highlighter className="h-4 w-4 text-emerald-500" />, title: "高亮(绿)", action: () => applyHighlight("green") },
    { icon: <Highlighter className="h-4 w-4 text-sky-500" />, title: "高亮(蓝)", action: () => applyHighlight("blue") },
    { icon: <Highlighter className="h-4 w-4 text-pink-500" />, title: "高亮(粉)", action: () => applyHighlight("pink") },
    { icon: <Code className="h-4 w-4" />, title: "代码", action: () => insertText("`", "`", "代码") },
    { icon: <LinkIcon className="h-4 w-4" />, title: "链接", action: () => insertText("[", "](https://)", "链接文字") },
    { icon: <List className="h-4 w-4" />, title: "无序列表", action: () => insertText("\n- ", "", "列表项") },
    { icon: <ListOrdered className="h-4 w-4" />, title: "有序列表", action: () => insertText("\n1. ", "", "列表项") },
    { icon: <Quote className="h-4 w-4" />, title: "引用", action: () => insertText("\n> ", "", "引用内容") },
    { icon: <Minus className="h-4 w-4" />, title: "分割线", action: () => insertAtCursor("\n\n---\n\n") },
  ]

  // ── Upload cover image ──────────────────────────────────────────────────────
  const uploadCover = async (file: File) => {
    setUploadingCover(true)
    const fd = new FormData()
    fd.append("file", file)
    const res = await fetch("/api/blog/upload", { method: "POST", headers: { Authorization: `Bearer ${token}` }, body: fd })
    if (res.ok) {
      const { url } = await res.json()
      set("cover_image", url)
      onToast("success", "封面图上传成功")
    } else onToast("error", "上传失败")
    setUploadingCover(false)
  }

  // ── Upload inline image ─────────────────────────────────────────────────────
  const uploadInline = async (file: File) => {
    setUploadingInline(true)
    const fd = new FormData()
    fd.append("file", file)
    const res = await fetch("/api/blog/upload", { method: "POST", headers: { Authorization: `Bearer ${token}` }, body: fd })
    if (res.ok) {
      const { url } = await res.json()
      insertAtCursor(`\n![${file.name.replace(/\.[^.]+$/, "")}](${url})\n`)
      onToast("success", "图片已插入")
    } else onToast("error", "上传失败")
    setUploadingInline(false)
  }

  const pasteFromWechat = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    // Case 1: clipboard contains image files directly
    const files = Array.from(e.clipboardData?.files ?? []).filter((f) => f.type.startsWith("image/"))
    if (files.length > 0) {
      e.preventDefault()
      if (pastingWechat) return
      setPastingWechat(true)
      try {
        for (const f of files) {
          await uploadInline(f)
        }
        onToast("success", `已粘贴 ${files.length} 张图片`)
      } finally {
        setPastingWechat(false)
      }
      return
    }

    const html = e.clipboardData?.getData("text/html") || ""
    if (!html) return

    // Heuristic: only hijack when it's really rich HTML (WeChat editor paste)
    if (!/[<][a-z!/]/i.test(html)) return

    e.preventDefault()
    if (pastingWechat) return

    setPastingWechat(true)
    try {
      const { markdown, images } = htmlToMarkdown(html)
      if (!markdown && images.length === 0) {
        onToast("error", "未识别到可粘贴内容")
        return
      }

      let out = markdown

      if (images.length > 0) {
        onToast("success", `检测到 ${images.length} 张图片，正在转存…`)
        const failed: string[] = []
        for (const img of images) {
          const originalSrc = img.src.startsWith("//") ? `https:${img.src}` : img.src
          // data URL → upload directly
          if (originalSrc.startsWith("data:image/")) {
            const m = originalSrc.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.*)$/)
            if (!m) continue
            const mime = m[1]
            const b64 = m[2]
            const bin = atob(b64)
            const bytes = new Uint8Array(bin.length)
            for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
            const ext = mime.split("/")[1] || "png"
            const file = new File([bytes], `wechat-image.${ext}`, { type: mime })

            const fd = new FormData()
            fd.append("file", file)
            const res = await fetch("/api/blog/upload", {
              method: "POST",
              headers: { Authorization: `Bearer ${token}` },
              body: fd,
            })
            if (!res.ok) {
              failed.push(originalSrc)
              out = out.split(img.placeholder).join(originalSrc)
              continue
            }
            const { url } = await res.json()
            out = out.split(img.placeholder).join(url || originalSrc)
            continue
          }

          // remote URL → fetch on server and re-upload
          const res = await fetch("/api/blog/fetch-image", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: originalSrc }),
          })
          if (!res.ok) {
            failed.push(originalSrc)
            // fallback to hotlink if transfer failed (may still be blocked by remote)
            out = out.split(img.placeholder).join(originalSrc)
            continue
          }
          const { url } = await res.json()
          out = out.split(img.placeholder).join(url || originalSrc)
        }
        if (failed.length > 0) {
          onToast("error", `有 ${failed.length} 张图片转存失败，已尝试使用原图链接（可能被防盗链）`)
        }
      }

      insertAtCursor(`\n${out}\n`)
      onToast("success", images.length > 0 ? "公众号内容已粘贴（图片已转存）" : "公众号内容已粘贴")
    } catch {
      onToast("error", "粘贴失败，请重试")
    } finally {
      setPastingWechat(false)
    }
  }

  // ── Save ────────────────────────────────────────────────────────────────────
  const save = async (publish = false) => {
    if (!form.title_zh && !form.title_en) { onToast("error", "请填写标题"); return }
    if (!form.slug) { onToast("error", "请填写 slug"); return }

    setSaving(true)
    const payload = {
      ...form,
      status: publish ? "published" : form.status,
      published_at: publish && !form.published_at ? new Date().toISOString() : form.published_at,
    }

    const method = articleId ? "PUT" : "POST"
    const url = articleId ? `/api/blog/articles/${articleId}` : "/api/blog/articles"
    const res = await fetch(url, {
      method,
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    setSaving(false)
    if (res.ok) {
      onToast("success", publish ? "已发布！" : "已保存草稿")
      onBack()
    } else {
      const { error } = await res.json()
      onToast("error", error || "保存失败")
    }
  }

  // ── Tag helpers ─────────────────────────────────────────────────────────────
  const addTag = () => {
    const t = tagInput.trim()
    if (t && !form.tags.includes(t)) set("tags", [...form.tags, t])
    setTagInput("")
  }
  const removeTag = (tag: string) => set("tags", form.tags.filter((t) => t !== tag))

  const activeContent = activeTab === "zh" ? form.content_zh : form.content_en

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24 text-muted-foreground">
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />加载文章中…
      </div>
    )
  }

  return (
    <div>
      {/* ── 顶部操作栏 ── */}
      <div className="mb-6 flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          返回列表
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => save(false)}
            disabled={saving}
            className="flex items-center gap-1.5 rounded-xl border border-border/60 px-4 py-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-50"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            保存草稿
          </button>
          <button
            onClick={() => save(true)}
            disabled={saving}
            className="flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 disabled:opacity-50"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {form.status === "published" ? "更新发布" : "发布"}
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        {/* ── 左侧主编辑区 ── */}
        <div className="space-y-5">
          {/* 标题 */}
          <div className="rounded-xl border border-border/50 bg-card/60 p-5">
            <h2 className="mb-4 text-sm font-semibold text-muted-foreground">标题</h2>
            <div className="space-y-3">
              <div>
                <label className="mb-1.5 block text-xs text-muted-foreground">中文标题</label>
                <input
                  value={form.title_zh}
                  onChange={(e) => {
                    set("title_zh", e.target.value)
                  }}
                  placeholder="文章中文标题"
                  className="w-full rounded-lg border border-border/60 bg-background px-3.5 py-2.5 text-sm focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-muted-foreground">English Title</label>
                <input
                  value={form.title_en}
                  onChange={(e) => {
                    set("title_en", e.target.value)
                  }}
                  placeholder="Article English title"
                  className="w-full rounded-lg border border-border/60 bg-background px-3.5 py-2.5 text-sm focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs text-muted-foreground">Slug（URL 路径）</label>
                <input
                  value={form.slug}
                  onChange={(e) => set("slug", e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))}
                  placeholder="my-article-slug"
                  className="w-full rounded-lg border border-border/60 bg-background px-3.5 py-2.5 font-mono text-sm focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>

          {/* 摘要 */}
          <div className="rounded-xl border border-border/50 bg-card/60 p-5">
            <h2 className="mb-4 text-sm font-semibold text-muted-foreground">摘要</h2>
            <div className="space-y-3">
              <textarea
                value={form.excerpt_zh}
                onChange={(e) => set("excerpt_zh", e.target.value)}
                placeholder="中文摘要（显示在列表页）"
                rows={2}
                className="w-full rounded-lg border border-border/60 bg-background px-3.5 py-2.5 text-sm focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
              />
              <textarea
                value={form.excerpt_en}
                onChange={(e) => set("excerpt_en", e.target.value)}
                placeholder="English excerpt (shown on listing page)"
                rows={2}
                className="w-full rounded-lg border border-border/60 bg-background px-3.5 py-2.5 text-sm focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* 正文编辑器 */}
          <div className="rounded-xl border border-border/50 bg-card/60 overflow-hidden">
            {/* 语言 Tab */}
            <div className="flex items-center justify-between border-b border-border/40 px-4 py-2">
              <div className="flex gap-1">
                {(["zh", "en"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveTab(lang)}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                      activeTab === lang
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {lang === "zh" ? "中文正文" : "English Body"}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  previewMode ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {previewMode ? <Pencil className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                {previewMode ? "编辑" : "预览"}
              </button>
            </div>

            {!previewMode && (
              /* Markdown 工具栏 */
              <div className="flex flex-wrap items-center gap-0.5 border-b border-border/40 bg-muted/30 px-2 py-1.5">
                {toolbarButtons.map((btn) => (
                  <button
                    key={btn.title}
                    title={btn.title}
                    onClick={btn.action}
                    className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {btn.icon}
                  </button>
                ))}
                <span className="mx-1 h-4 w-px bg-border/50" />
                {/* 插入图片按钮 */}
                <button
                  title="插入图片"
                  disabled={uploadingInline}
                  onClick={() => inlineInputRef.current?.click()}
                  className="flex items-center gap-1 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground disabled:opacity-50"
                >
                  {uploadingInline
                    ? <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    : <ImageIcon className="h-3.5 w-3.5" />}
                  插入图片
                </button>
                <input
                  ref={inlineInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && uploadInline(e.target.files[0])}
                />
              </div>
            )}

            {/* 内容区 */}
            {previewMode ? (
              <div
                className="prose-custom min-h-80 p-6"
                dangerouslySetInnerHTML={{ __html: markdownToHtml(activeContent) || `<p class="text-muted-foreground text-sm">${activeTab === "zh" ? "（无内容）" : "(No content)"}</p>` }}
              />
            ) : (
              <textarea
                ref={activeTab === "zh" ? zhRef : enRef}
                value={activeContent}
                onChange={(e) => set(activeTab === "zh" ? "content_zh" : "content_en", e.target.value)}
                onPaste={pasteFromWechat}
                placeholder={activeTab === "zh" ? "用 Markdown 写正文…\n\n支持 **粗体**、*斜体*、# 标题、![图片描述](url)、代码块等" : "Write in Markdown…\n\nSupports **bold**, *italic*, # Heading, ![alt](url), code blocks, etc."}
                className="w-full min-h-[500px] bg-transparent p-4 font-mono text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/50 focus:outline-none resize-y"
              />
            )}
          </div>
        </div>

        {/* ── 右侧设置面板 ── */}
        <div className="space-y-5">
          {/* 封面图 */}
          <div className="rounded-xl border border-border/50 bg-card/60 p-4">
            <h2 className="mb-3 text-sm font-semibold">封面图</h2>
            {form.cover_image ? (
              <div className="relative">
                <img
                  src={form.cover_image}
                  alt="封面图"
                  className="w-full rounded-lg object-cover"
                  style={{ maxHeight: 160 }}
                />
                <button
                  onClick={() => set("cover_image", "")}
                  className="absolute right-1.5 top-1.5 rounded-full bg-black/60 p-1 text-white hover:bg-black/80"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => coverInputRef.current?.click()}
                disabled={uploadingCover}
                className="flex w-full flex-col items-center gap-2 rounded-lg border-2 border-dashed border-border/60 py-8 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground disabled:opacity-50"
              >
                {uploadingCover
                  ? <Loader2 className="h-6 w-6 animate-spin" />
                  : <Upload className="h-6 w-6" />}
                <span>{uploadingCover ? "上传中…" : "点击上传封面图"}</span>
                <span className="text-xs text-muted-foreground/60">JPG / PNG / WebP，最大 5 MB</span>
              </button>
            )}
            <input
              ref={coverInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && uploadCover(e.target.files[0])}
            />
          </div>

          {/* 分类 */}
          <div className="rounded-xl border border-border/50 bg-card/60 p-4">
            <h2 className="mb-3 text-sm font-semibold">分类</h2>
            <div className="grid grid-cols-2 gap-2">
              {ARTICLE_CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => set("category", cat.value)}
                  className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                    form.category === cat.value
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {cat.labelZh}
                </button>
              ))}
            </div>
          </div>

          {/* 标签 */}
          <div className="rounded-xl border border-border/50 bg-card/60 p-4">
            <h2 className="mb-3 text-sm font-semibold">标签</h2>
            <div className="mb-2 flex flex-wrap gap-1.5">
              {form.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary"
                >
                  {tag}
                  <button onClick={() => removeTag(tag)}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag() } }}
                placeholder="输入标签后回车"
                className="flex-1 rounded-lg border border-border/60 bg-background px-3 py-1.5 text-xs focus:border-primary/50 focus:outline-none"
              />
              <button
                onClick={addTag}
                className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium hover:bg-muted/80"
              >
                添加
              </button>
            </div>
          </div>

          {/* 作者 */}
          <div className="rounded-xl border border-border/50 bg-card/60 p-4">
            <h2 className="mb-3 text-sm font-semibold">作者</h2>
            <input
              value={form.author}
              onChange={(e) => set("author", e.target.value)}
              className="w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm focus:border-primary/50 focus:outline-none"
            />
          </div>

          {/* 日期 */}
          <div className="rounded-xl border border-border/50 bg-card/60 p-4">
            <h2 className="mb-3 text-sm font-semibold">日期</h2>
            <label className="mb-1.5 block text-xs text-muted-foreground">发布日期（用于列表展示）</label>
            <input
              type="datetime-local"
              value={toDatetimeLocalValue(form.published_at)}
              onChange={(e) => set("published_at", fromDatetimeLocalValue(e.target.value))}
              className="w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm focus:border-primary/50 focus:outline-none"
            />
            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => set("published_at", new Date().toISOString())}
                className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium hover:bg-muted/80"
              >
                设为当前时间
              </button>
              <button
                type="button"
                onClick={() => set("published_at", null)}
                className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium hover:bg-muted/80"
              >
                清空
              </button>
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground/80">
              提示：不填写会默认使用创建时间；发布时如果为空会自动填当前时间。
            </p>
          </div>

          {/* 状态说明 */}
          <div className="rounded-xl border border-border/40 bg-muted/30 p-4 text-xs text-muted-foreground space-y-1">
            <p className="font-medium text-foreground/80">发布说明</p>
            <p>• 「保存草稿」：不对外展示</p>
            <p>• 「发布」：立即在 /blog 展示</p>
            <p>• 已发布后点「更新发布」保存改动</p>
          </div>
        </div>
      </div>
    </div>
  )
}
