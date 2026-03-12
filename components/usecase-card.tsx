"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { type UseCase, type Difficulty } from "@/lib/usecases"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight } from "lucide-react"

interface UseCaseCardProps {
  useCase: UseCase
}

const difficultyColors: Record<Difficulty, string> = {
  easy: "bg-emerald-100 text-emerald-700 border-emerald-200",
  medium: "bg-amber-100 text-amber-700 border-amber-200",
  hard: "bg-rose-100 text-rose-700 border-rose-200",
}

export function UseCaseCard({ useCase }: UseCaseCardProps) {
  const { t, locale } = useI18n()

  return (
    <Link href={`/usecase/${useCase.id}`} className="block">
      <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card cursor-pointer">
        {/* Featured Badge */}
        {useCase.featured && (
          <div className="absolute right-4 top-4">
            <Star className="h-5 w-5 fill-primary text-primary" />
          </div>
        )}

        {/* Glow effect */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="relative">
          {/* Title */}
          <h3 className="mb-2 pr-8 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {locale === "zh" ? useCase.title.zh : useCase.title.en}
          </h3>

          {/* Description */}
          <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
            {locale === "zh" ? useCase.description.zh : useCase.description.en}
          </p>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {useCase.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            {/* Difficulty */}
            <span
              className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${difficultyColors[useCase.difficulty]}`}
            >
              {t(`usecases.difficulty.${useCase.difficulty}`)}
            </span>

            {/* View details indicator */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
              <span>{locale === "zh" ? "查看详情" : "View details"}</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
