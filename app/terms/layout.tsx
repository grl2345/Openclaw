import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export const metadata: Metadata = {
  title: "服务条款 - Terms of Service",
  description: "OpenClaw Hub 服务条款与使用条件。",
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
