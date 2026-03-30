import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export const metadata: Metadata = {
  title: "安装教程 - Installation Guide",
  description:
    "OpenClaw 安装部署教程，支持桌面端和云端多种方式，手把手教你快速上手。",
  alternates: {
    canonical: `${siteUrl}/install`,
  },
}

export default function InstallLayout({ children }: { children: React.ReactNode }) {
  return children
}
