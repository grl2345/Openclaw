import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export const metadata: Metadata = {
  title: "关于我们 - About",
  description:
    "了解 OpenClaw Hub 的使命与愿景，为中文用户打造最好的 OpenClaw 导航站。",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
