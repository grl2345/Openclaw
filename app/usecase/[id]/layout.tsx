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
    }
  }

  return {
    title: `${uc.title.zh} - ${uc.title.en}`,
    description: uc.description.zh,
    alternates: {
      canonical: `${siteUrl}/usecase/${id}`,
    },
  }
}

export default function UseCaseLayout({ children }: { children: React.ReactNode }) {
  return children
}
