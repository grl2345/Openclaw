"use client"

import { useI18n } from "@/lib/i18n"
import { useCases } from "@/lib/usecases"
import { UseCaseCard } from "./usecase-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function FeaturedUseCases() {
  const { t, locale } = useI18n()
  const isZh = locale === "zh"

  // 优先展示 featured，取前 6 个
  const featuredUseCases = useCases.filter((uc) => uc.featured).slice(0, 6)

  return (
    <section id="usecases" className="relative py-16 sm:py-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/3">
          <div className="h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            {isZh ? "精选案例" : "Featured Cases"}
          </div>
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            {t("usecases.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {isZh
              ? `社区验证的高质量案例，共 ${useCases.length}+ 个场景，涵盖办公、开发、创作等多种场景`
              : `Community-verified quality cases. ${useCases.length}+ scenarios covering productivity, development, creative work and more`}
          </p>
        </div>

        {/* Featured Grid — 6 items */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredUseCases.map((useCase) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>

        {/* View More */}
        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" className="group gap-2 px-8" asChild>
            <Link href="https://github.com/AlexAnys/awesome-openclaw-usecases-zh" target="_blank" rel="noopener noreferrer">
              {isZh ? `查看全部 ${useCases.length}+ 个用例` : `Explore all ${useCases.length}+ use cases`}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
