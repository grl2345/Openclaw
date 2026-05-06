import type { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/api/img/", "/api/rss", "/_next/static/", "/_next/image"],
        disallow: [
          "/api/admin/",
          "/api/blog/admin",
          "/blog/admin",
          "/admin",
          "/admin/",
          "/*?*",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
