import type { MetadataRoute } from "next"
import { useCases } from "@/lib/usecases"
import { CHANGELOG } from "@/lib/changelog-data"
import { createAdminClient } from "@/lib/supabase"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

const SLUG_RE = /^[a-z0-9][a-z0-9-]*[a-z0-9]$/i

function safeDate(value: unknown): Date {
  if (typeof value === "string" && value) {
    const d = new Date(value)
    if (!Number.isNaN(d.getTime())) return d
  }
  return new Date()
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/skills`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/usecases`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/install`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/api-recommend`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/changelog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/news`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/skills-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  const usecasePages: MetadataRoute.Sitemap = useCases
    .filter((uc) => uc.id && SLUG_RE.test(uc.id))
    .map((uc) => ({
      url: `${baseUrl}/usecase/${uc.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  const changelogPages: MetadataRoute.Sitemap = CHANGELOG
    .filter((entry) => entry.slug && SLUG_RE.test(entry.slug))
    .map((entry) => ({
      url: `${baseUrl}/changelog/${entry.slug}`,
      lastModified: safeDate(entry.releaseDate),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }))

  // Fetch published blog articles for sitemap
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const supabase = createAdminClient()
    const { data } = await supabase
      .from("openclaw_posts")
      .select("slug,published_at,updated_at")
      .eq("status", "published")
      .order("published_at", { ascending: false, nullsFirst: false })

    blogPages = (data ?? [])
      .filter((post: any) => typeof post?.slug === "string" && SLUG_RE.test(post.slug))
      .map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: safeDate(post.updated_at || post.published_at),
        changeFrequency: "monthly" as const,
        priority: 0.75,
      }))
  } catch {
    // Supabase not available — skip blog entries
  }

  return [...staticPages, ...usecasePages, ...changelogPages, ...blogPages]
}
