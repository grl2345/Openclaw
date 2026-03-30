import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export const metadata: Metadata = {
  title: "API 推荐 - API Recommendations",
  description:
    "AI 模型 API 聚合推荐与对比，帮你选择最适合的 API 服务商和模型方案。",
  alternates: {
    canonical: `${siteUrl}/api-recommend`,
  },
}

export default function ApiRecommendLayout({ children }: { children: React.ReactNode }) {
  return children
}
