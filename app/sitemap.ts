import type { MetadataRoute } from "next"
import { useCases } from "@/lib/usecases"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ]

  const usecasePages: MetadataRoute.Sitemap = useCases.map((uc) => ({
    url: `${baseUrl}/usecase/${uc.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...usecasePages]
}
