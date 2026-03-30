import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export const metadata: Metadata = {
  title: "场景案例 - Use Cases",
  description:
    "50+ 真实场景案例，涵盖生产力、创意、DevOps、社交媒体等领域，助你发掘 OpenClaw 的无限可能。",
  alternates: {
    canonical: `${siteUrl}/usecases`,
  },
}

export default function UsecasesLayout({ children }: { children: React.ReactNode }) {
  return children
}
