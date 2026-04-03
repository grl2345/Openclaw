"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Newspaper, History, PenLine, Rss, LogOut, Loader2,
  Plus, Trash2, ExternalLink, RefreshCw, Shield,
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

type Tab = "news" | "changelog" | "rss" | "blog"

interface NewsItem {
  id?: string
  source: string
  author: string
  date: string
  titleZh: string
  titleEn: string
  descriptionZh: string
  descriptionEn: string
  tags: string[]
  url: string
  category: string
  status?: string
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const { token, checked, login, logout } = useAdminAuth()
  const [tab, setTab] = useState<Tab>("news")
  const [loginPassword, setLoginPassword] = useState("")
  const [loginError, setLoginError] = useState(false)

  if (!checked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="w-full max-w-sm rounded-2xl border border-border/60 bg-card p-8">
          <div className="mb-6 flex items-center gap-2 justify-center">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Admin Login</h1>
          </div>
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              setLoginError(false)
              const ok = await login(loginPassword)
              if (!ok) setLoginError(true)
            }}
          >
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Admin Secret"
              className="mb-3 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
            />
            {loginError && (
              <p className="mb-3 text-xs text-red-500">Invalid password</p>
            )}
            <button className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "news", label: "News", icon: Newspaper },
    { id: "changelog", label: "Changelog", icon: History },
    { id: "rss", label: "RSS Fetch", icon: Rss },
    { id: "blog", label: "Blog (old)", icon: PenLine },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              &larr; Site
            </Link>
            <span className="text-sm font-bold">OpenClaw Admin</span>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <LogOut className="h-3.5 w-3.5" />
            Logout
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-border/40">
        <div className="mx-auto flex max-w-6xl gap-0 px-4">
          {tabs.map((t) => {
            const Icon = t.icon
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-1.5 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                  tab === t.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {t.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-8">
        {tab === "news" && <NewsManager token={token} />}
        {tab === "changelog" && <ChangelogManager token={token} />}
        {tab === "rss" && <RssFetcher token={token} />}
        {tab === "blog" && (
          <div className="rounded-xl border border-border/60 bg-card/50 p-8 text-center">
            <PenLine className="mx-auto mb-3 h-8 w-8 text-muted-foreground/50" />
            <p className="mb-4 text-sm text-muted-foreground">
              Blog management is available at the dedicated admin page.
            </p>
            <Link
              href="/blog/admin"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Go to Blog Admin
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── News Manager ─────────────────────────────────────────────────────────────

function NewsManager({ token }: { token: string }) {
  const [items, setItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)

  const fetchItems = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/news?limit=50")
      const json = await res.json()
      setItems(json.items || [])
    } catch { /* */ }
    setLoading(false)
  }

  useEffect(() => { fetchItems() }, [])

  const handleCreate = async (item: NewsItem) => {
    const res = await fetch("/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(item),
    })
    if (res.ok) {
      setShowForm(false)
      fetchItems()
    }
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold">News Management</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          Add News
        </button>
      </div>

      {showForm && (
        <NewsForm onSubmit={handleCreate} onCancel={() => setShowForm(false)} />
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      ) : items.length === 0 ? (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No news items yet. Add your first one or configure RSS feeds.
        </p>
      ) : (
        <div className="space-y-2">
          {items.map((item, i) => (
            <div
              key={item.id || i}
              className="flex items-center gap-4 rounded-lg border border-border/50 bg-card/50 p-4"
            >
              <div className="flex-1 min-w-0">
                <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded bg-muted px-1.5 py-0.5">{item.source}</span>
                  <span>{item.date}</span>
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 text-primary">{item.category}</span>
                </div>
                <h3 className="text-sm font-medium truncate">{item.titleZh || item.titleEn}</h3>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── News Form ────────────────────────────────────────────────────────────────

function NewsForm({
  onSubmit,
  onCancel,
}: {
  onSubmit: (item: NewsItem) => void
  onCancel: () => void
}) {
  const [form, setForm] = useState<NewsItem>({
    source: "",
    author: "",
    date: new Date().toISOString().slice(0, 10),
    titleZh: "",
    titleEn: "",
    descriptionZh: "",
    descriptionEn: "",
    tags: [],
    url: "",
    category: "programming",
  })

  const set = (key: keyof NewsItem, value: any) => setForm((prev) => ({ ...prev, [key]: value }))

  return (
    <div className="mb-6 rounded-xl border border-border/60 bg-card/50 p-6">
      <h3 className="mb-4 text-sm font-semibold">New News Item</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        <input placeholder="Source (e.g. 掘金)" value={form.source} onChange={(e) => set("source", e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        <input placeholder="Author" value={form.author} onChange={(e) => set("author", e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        <input placeholder="Title (中文)" value={form.titleZh} onChange={(e) => set("titleZh", e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2 text-sm sm:col-span-2" />
        <input placeholder="Title (English)" value={form.titleEn} onChange={(e) => set("titleEn", e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2 text-sm sm:col-span-2" />
        <input placeholder="URL" value={form.url} onChange={(e) => set("url", e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2 text-sm sm:col-span-2" />
        <textarea placeholder="Description (中文)" value={form.descriptionZh} onChange={(e) => set("descriptionZh", e.target.value)} rows={2} className="rounded-lg border border-border bg-background px-3 py-2 text-sm sm:col-span-2" />
        <input type="date" value={form.date} onChange={(e) => set("date", e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        <select value={form.category} onChange={(e) => set("category", e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2 text-sm">
          <option value="official">Official</option>
          <option value="programming">Programming</option>
          <option value="productivity">Productivity</option>
          <option value="research">Research</option>
          <option value="data">Data</option>
          <option value="design">Design</option>
        </select>
        <input placeholder="Tags (comma separated)" value={form.tags.join(",")} onChange={(e) => set("tags", e.target.value.split(",").map((t) => t.trim()).filter(Boolean))} className="rounded-lg border border-border bg-background px-3 py-2 text-sm sm:col-span-2" />
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={() => onSubmit(form)} className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Save
        </button>
        <button onClick={onCancel} className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
          Cancel
        </button>
      </div>
    </div>
  )
}

// ─── Changelog Manager ────────────────────────────────────────────────────────

function ChangelogManager({ token }: { token: string }) {
  const [entries, setEntries] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [dataSource, setDataSource] = useState("")

  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const res = await fetch("/api/changelog")
        const json = await res.json()
        setEntries(json.entries || [])
        setDataSource(json.source || "unknown")
      } catch { /* */ }
      setLoading(false)
    })()
  }, [])

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">Changelog Management</h2>
          <p className="text-xs text-muted-foreground">
            Data source: <span className="font-mono">{dataSource}</span>
            {dataSource === "static" && " (migrate to Supabase for full CRUD)"}
          </p>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <div className="space-y-2">
          {entries.map((entry: any) => (
            <div
              key={entry.slug}
              className="flex items-center gap-4 rounded-lg border border-border/50 bg-card/50 p-4"
            >
              <div className="flex-1 min-w-0">
                <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-primary">
                    {entry.version}
                  </span>
                  <span>{entry.releaseDate}</span>
                  <span>{entry.contributorCount} contributors</span>
                </div>
                <h3 className="text-sm font-medium">
                  {entry.tagline?.zh || entry.tagline?.en || entry.version}
                </h3>
              </div>
              <Link
                href={`/changelog/${entry.slug}`}
                className="shrink-0 text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 rounded-xl border border-dashed border-border/60 bg-muted/20 p-6 text-center text-sm text-muted-foreground">
        <p className="mb-2">
          To enable full CRUD for changelog entries, run the migration SQL:
        </p>
        <code className="rounded bg-muted px-2 py-1 text-xs font-mono">
          supabase-schema-v2.sql
        </code>
      </div>
    </div>
  )
}

// ─── RSS Fetcher ──────────────────────────────────────────────────────────────

function RssFetcher({ token }: { token: string }) {
  const [url, setUrl] = useState("")
  const [category, setCategory] = useState("programming")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleFetch = async () => {
    setLoading(true)
    setResult(null)
    try {
      const body: any = { category }
      if (url.trim()) body.url = url.trim()

      const res = await fetch("/api/rss", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      })
      const json = await res.json()
      setResult(json)
    } catch (err) {
      setResult({ error: "Network error" })
    }
    setLoading(false)
  }

  return (
    <div>
      <h2 className="mb-2 text-lg font-bold">RSS Feed Aggregation</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        Fetch RSS/Atom feeds and auto-import articles into the news database.
        Configure sources in the <code className="rounded bg-muted px-1 text-xs">openclaw_rss_sources</code> table,
        or provide a URL below for manual fetch.
      </p>

      <div className="mb-6 rounded-xl border border-border/60 bg-card/50 p-6">
        <h3 className="mb-4 text-sm font-semibold">Manual Feed Fetch</h3>
        <div className="grid gap-3 sm:grid-cols-[1fr_auto_auto]">
          <input
            placeholder="RSS/Atom feed URL (leave empty to fetch all configured sources)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
          >
            <option value="official">Official</option>
            <option value="programming">Programming</option>
            <option value="productivity">Productivity</option>
            <option value="research">Research</option>
          </select>
          <button
            onClick={handleFetch}
            disabled={loading}
            className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
            Fetch
          </button>
        </div>
      </div>

      {result && (
        <div className={`rounded-xl border p-4 text-sm ${
          result.error
            ? "border-red-500/30 bg-red-500/5 text-red-600"
            : "border-emerald-500/30 bg-emerald-500/5 text-emerald-600"
        }`}>
          {result.error ? (
            <p>{result.error}</p>
          ) : (
            <>
              <p className="font-medium">{result.message}</p>
              <p>Inserted: {result.inserted} new items</p>
              {result.errors && result.errors.length > 0 && (
                <ul className="mt-2 list-disc pl-4 text-amber-600">
                  {result.errors.map((err: string, i: number) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      )}

      <div className="mt-8 rounded-xl border border-border/60 bg-card/50 p-6">
        <h3 className="mb-3 text-sm font-semibold">Recommended RSS Sources</h3>
        <p className="mb-4 text-xs text-muted-foreground">
          Add these to your <code className="rounded bg-muted px-1">openclaw_rss_sources</code> table for automatic aggregation:
        </p>
        <div className="space-y-2 text-xs">
          {[
            { name: "OpenClaw GitHub Releases", url: "https://github.com/openclaw/openclaw/releases.atom", cat: "official" },
            { name: "Hacker News (AI)", url: "https://hnrss.org/newest?q=openclaw+OR+%22ai+agent%22", cat: "programming" },
            { name: "Dev.to (OpenClaw)", url: "https://dev.to/feed/tag/openclaw", cat: "programming" },
            { name: "Reddit r/LocalLLaMA", url: "https://www.reddit.com/r/LocalLLaMA/.rss", cat: "programming" },
          ].map((src) => (
            <div key={src.url} className="flex items-center gap-3 rounded-lg border border-border/40 bg-muted/20 p-3">
              <Rss className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="font-medium text-foreground">{src.name}</span>
                <span className="ml-2 text-muted-foreground truncate">{src.url}</span>
              </div>
              <span className="shrink-0 rounded bg-primary/10 px-1.5 py-0.5 text-primary">{src.cat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
