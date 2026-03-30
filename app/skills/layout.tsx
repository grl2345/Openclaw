import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export const metadata: Metadata = {
  title: "技能目录 - Skills Directory",
  description:
    "浏览 800+ 精选 OpenClaw 技能，按分类搜索和筛选，快速找到适合你的 AI 技能。Browse 800+ curated OpenClaw skills.",
  alternates: {
    canonical: `${siteUrl}/skills`,
  },
}

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children
}
