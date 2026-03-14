"use client"

import { useI18n } from "@/lib/i18n"
import { useCases, categories, type Category } from "@/lib/usecases"
import { UseCaseCard } from "./usecase-card"
import {
  Flag,
  MessageCircle,
  Palette,
  Server,
  Zap,
  Microscope,
  TrendingUp,
} from "lucide-react"

const categoryIcons: Record<Category, React.ReactNode> = {
  china: <Flag className="h-5 w-5" />,
  social: <MessageCircle className="h-5 w-5" />,
  creative: <Palette className="h-5 w-5" />,
  devops: <Server className="h-5 w-5" />,
  productivity: <Zap className="h-5 w-5" />,
  research: <Microscope className="h-5 w-5" />,
  finance: <TrendingUp className="h-5 w-5" />,
}

export function AllUseCases() {
  const { t } = useI18n()

  return (
    <section id="categories" className="relative scroll-mt-24 pt-12 pb-24 sm:pt-16 sm:pb-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4">
          <div className="h-[500px] w-[500px] rounded-full bg-accent/5 blur-[100px]" />
        </div>
        <div className="absolute bottom-1/4 left-0">
          <div className="h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {categories.map((category) => {
          const categoryUseCases = useCases.filter((uc) => uc.category === category.id)
          if (categoryUseCases.length === 0) return null

          return (
            <div key={category.id} id={`category-${category.id}`} className="mb-20 last:mb-0">
              {/* Category Header */}
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                  {categoryIcons[category.id]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {t(`category.${category.id}`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`category.${category.id}.desc`)}
                  </p>
                </div>
              </div>

              {/* Use Cases Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categoryUseCases.map((useCase) => (
                  <UseCaseCard key={useCase.id} useCase={useCase} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
