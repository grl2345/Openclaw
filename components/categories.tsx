"use client"

import { useI18n } from "@/lib/i18n"
import { categories, useCases, type Category } from "@/lib/usecases"
import {
  Flag,
  MessageCircle,
  Palette,
  Server,
  Zap,
  Microscope,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

const categoryIcons: Record<Category, React.ReactNode> = {
  china: <Flag className="h-6 w-6" />,
  social: <MessageCircle className="h-6 w-6" />,
  creative: <Palette className="h-6 w-6" />,
  devops: <Server className="h-6 w-6" />,
  productivity: <Zap className="h-6 w-6" />,
  research: <Microscope className="h-6 w-6" />,
  finance: <TrendingUp className="h-6 w-6" />,
}

export function Categories() {
  const { t, locale } = useI18n()

  const getCategoryCount = (category: Category) => {
    return useCases.filter((uc) => uc.category === category).length
  }

  return (
    <section id="categories" className="relative pt-24 pb-12 sm:pt-32 sm:pb-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-accent/5 blur-[100px]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            {t("categories.title")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("categories.subtitle")}</p>
        </div>

        {/* Category Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#category-${category.id}`}
              className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  {categoryIcons[category.id]}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {t(`category.${category.id}`)}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {t(`category.${category.id}.desc`)}
                </p>

                {/* Count & Arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {getCategoryCount(category.id)} {locale === "zh" ? "个用例" : "use cases"}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
