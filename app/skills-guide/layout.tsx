import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export const metadata: Metadata = {
  title: "技能使用指南 - Skills Guide",
  description:
    "OpenClaw 技能使用完全指南，涵盖命令、搜索、办公自动化等功能的详细教程。",
  alternates: {
    canonical: `${siteUrl}/skills-guide`,
  },
}

export default function SkillsGuideLayout({ children }: { children: React.ReactNode }) {
  return children
}
