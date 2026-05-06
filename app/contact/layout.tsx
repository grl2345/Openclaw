import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export const metadata: Metadata = {
  title: "联系我们 - Contact Us",
  description:
    "通过邮箱、微信公众号或个人微信联系 OpenClaw Hub 团队，欢迎合作、反馈与技术交流。Get in touch with the OpenClaw Hub team for collaboration, feedback, or technical discussions.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
