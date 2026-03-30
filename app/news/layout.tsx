import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export const metadata: Metadata = {
  title: "官方手册与社区动态 - News",
  description:
    "OpenClaw 官方文档链接、社区动态和最新资讯汇总。",
  alternates: {
    canonical: `${siteUrl}/news`,
  },
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children
}
