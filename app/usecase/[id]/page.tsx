"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { useCases } from "@/lib/usecases"
import { useI18n } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  ExternalLink,
  Star,
  CheckCircle2,
  ListOrdered,
  Lightbulb,
  Clock,
  Zap,
  Target,
} from "lucide-react"

const difficultyConfig = {
  easy: { color: "bg-emerald-100 text-emerald-700 border-emerald-200", icon: Zap },
  medium: { color: "bg-amber-100 text-amber-700 border-amber-200", icon: Clock },
  hard: { color: "bg-rose-100 text-rose-700 border-rose-200", icon: Target },
}

export default function UseCaseDetailPage() {
  const params = useParams()
  const { t, locale } = useI18n()
  const useCase = useCases.find((u) => u.id === params.id)

  if (!useCase) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <h1 className="mb-4 text-2xl font-bold text-foreground">
          {locale === "zh" ? "未找到该用例" : "Use case not found"}
        </h1>
        <Link href="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {locale === "zh" ? "返回首页" : "Back to Home"}
          </Button>
        </Link>
      </div>
    )
  }

  const DifficultyIcon = difficultyConfig[useCase.difficulty].icon

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/" className="mb-8 inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {locale === "zh" ? "返回全部用例" : "Back to all use cases"}
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            {useCase.featured && (
              <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                <Star className="h-4 w-4 fill-current" />
                {locale === "zh" ? "精选" : "Featured"}
              </div>
            )}
            <span
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium ${difficultyConfig[useCase.difficulty].color}`}
            >
              <DifficultyIcon className="h-4 w-4" />
              {t(`usecases.difficulty.${useCase.difficulty}`)}
            </span>
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {locale === "zh" ? useCase.title.zh : useCase.title.en}
          </h1>

          <p className="text-lg text-muted-foreground">
            {locale === "zh" ? useCase.fullDescription.zh : useCase.fullDescription.en}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          {useCase.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Requirements Card */}
          <div className="rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2 text-primary">
              <CheckCircle2 className="h-5 w-5" />
              <h2 className="text-lg font-semibold">
                {locale === "zh" ? "前置要求" : "Requirements"}
              </h2>
            </div>
            <ul className="space-y-3">
              {(locale === "zh" ? useCase.requirements.zh : useCase.requirements.en).map(
                (req, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {req}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Tips Card */}
          <div className="rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2 text-accent">
              <Lightbulb className="h-5 w-5" />
              <h2 className="text-lg font-semibold">
                {locale === "zh" ? "实用技巧" : "Tips"}
              </h2>
            </div>
            <ul className="space-y-3">
              {(locale === "zh" ? useCase.tips.zh : useCase.tips.en).map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Implementation Steps */}
        <div className="mt-6 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
          <div className="mb-6 flex items-center gap-2 text-primary">
            <ListOrdered className="h-5 w-5" />
            <h2 className="text-lg font-semibold">
              {locale === "zh" ? "实现步骤" : "Implementation Steps"}
            </h2>
          </div>
          <div className="space-y-4">
            {(locale === "zh" ? useCase.steps.zh : useCase.steps.en).map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg bg-secondary/30 p-4 transition-colors hover:bg-secondary/50"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {index + 1}
                </div>
                <p className="mt-1 text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {useCase.externalUrl && (
          <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground">
              {locale === "zh" ? "准备好开始了吗？" : "Ready to get started?"}
            </h3>
            <p className="text-muted-foreground">
              {locale === "zh"
                ? "查看 GitHub 仓库获取完整的代码和文档"
                : "Check out the GitHub repo for complete code and documentation"}
            </p>
            <a href={useCase.externalUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                {locale === "zh" ? "查看完整教程" : "View Full Tutorial"}
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
