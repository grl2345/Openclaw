import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export const metadata: Metadata = {
  title: "Cookie 政策 - Cookie Policy",
  description:
    "OpenClaw Hub Cookie 政策：详细说明我们使用的 Cookie 类型、用途、第三方 Cookie（包括 Google AdSense）以及您的选择。",
  alternates: {
    canonical: `${siteUrl}/cookie-policy`,
  },
}

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return children
}
