"use client"

import { useI18n } from "@/lib/i18n"
import { useCases } from "@/lib/usecases"
import { UseCaseCard } from "./usecase-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FeaturedUseCases() {
  const { t } = useI18n()

  const featuredUseCases = useCases.filter((uc) => uc.featured)

  return (
    <section id="usecases" className="relative pt-12 pb-12 sm:pt-16 sm:pb-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/3">
          <div className="h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
              {t("usecases.title")}
            </h2>
            <p className="text-lg text-muted-foreground">{t("usecases.subtitle")}</p>
          </div>
          <Button variant="outline" className="gap-2" asChild>
            <Link
              href="https://github.com/AlexAnys/awesome-openclaw-usecases-zh"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("usecases.viewall")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Featured Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredUseCases.map((useCase) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  )
}
