import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export const metadata: Metadata = {
  title: "DMCA 版权声明与下架流程 - DMCA Notice",
  description:
    "OpenClaw Hub 版权与 DMCA 政策：内容来源声明、原创内容版权、第三方内容引用规则，以及如何提交侵权下架通知。",
  alternates: {
    canonical: `${siteUrl}/dmca`,
  },
}

export default function DmcaLayout({ children }: { children: React.ReactNode }) {
  return children
}
