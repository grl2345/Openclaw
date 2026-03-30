import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export const metadata: Metadata = {
  title: "隐私政策 - Privacy Policy",
  description: "OpenClaw Hub 隐私政策，了解我们如何收集和使用您的数据。",
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
