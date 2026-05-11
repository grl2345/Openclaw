import type { Metadata } from "next"
import { useCases } from "@/lib/usecases"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const uc = useCases.find((u) => u.id === id)

  if (!uc) {
    return {
      title: "案例未找到 - Not Found",
      robots: { index: false, follow: false },
    }
  }

  const titleZh = uc.title.zh
  const titleEn = uc.title.en
  const fullTitle = `${titleZh} | ${titleEn}`
  const description = uc.fullDescription?.zh ?? uc.description.zh
  const descriptionEn = uc.fullDescription?.en ?? uc.description.en
  const url = `${siteUrl}/usecase/${id}`

  return {
    title: fullTitle,
    description,
    keywords: [
      titleZh,
      titleEn,
      "OpenClaw",
      "OpenClaw 用例",
      "AI Agent",
      "AI 助手",
      ...(uc.tags ?? []),
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: fullTitle,
      description,
      siteName: "OpenClaw Hub",
      locale: "zh_CN",
      alternateLocale: "en_US",
      images: [{ url: "/logo.webp", width: 512, height: 512, alt: titleZh }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: descriptionEn,
      images: ["/logo.webp"],
    },
  }
}

export default async function UseCaseLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const uc = useCases.find((u) => u.id === id)

  const jsonLd = uc
    ? {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: `${uc.title.zh} | ${uc.title.en}`,
        description: uc.fullDescription?.zh ?? uc.description.zh,
        inLanguage: ["zh-CN", "en"],
        url: `${siteUrl}/usecase/${id}`,
        author: { "@type": "Organization", name: "OpenClaw Hub" },
        publisher: {
          "@type": "Organization",
          name: "OpenClaw Hub",
          logo: { "@type": "ImageObject", url: `${siteUrl}/logo.webp` },
        },
        keywords: (uc.tags ?? []).join(", "),
      }
    : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </>
  )
}
