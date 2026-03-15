"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { LobsterIcon } from "@/components/lobster-icon"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-screen overflow-hidden bg-[oklch(0.98_0.01_30)] pt-16 dark:bg-background">
      <div className="absolute inset-0 overflow-hidden">
        {/* 明亮：淡红网格；暗色：淡网格 + 星空点缀 */}
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(0 60% 70% / 0.5) 1px, transparent 1px),
                            linear-gradient(to bottom, hsl(0 60% 70% / 0.5) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute inset-0 hidden dark:block opacity-[0.15]" style={{
          backgroundImage: "radial-gradient(circle, white 1.2px, transparent 1.2px)",
          backgroundSize: "36px 36px",
        }} />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-primary/[0.08] blur-[100px] dark:bg-primary/20" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[500px] rounded-full bg-primary/[0.05] blur-[80px] dark:bg-primary/10" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        {/* logo 稍微靠上 */}
        <div className="logo-float -mt-8 mb-4">
          <LobsterIcon size={220} className="h-[160px] w-[160px] sm:h-[220px] sm:w-[220px]" />
        </div>
        {/* 副标题 */}
        <p className="mb-4 text-center text-3xl font-medium text-foreground sm:text-4xl lg:text-5xl">
          {t("hero.subtitle.before")}
          <span className="text-primary">{t("hero.subtitle.highlight")}</span>
          {t("hero.subtitle.after")}
        </p>
        {t("hero.description") && (
          <p className="mb-2 max-w-2xl text-balance text-center text-lg text-muted-foreground">
            {t("hero.description")}
          </p>
        )}
        <p className="mb-6 text-center text-lg text-muted-foreground">
          {t("hero.firstTime")}
        </p>

        {/* CTA */}
        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Button size="lg" className="gap-2 px-8 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="#quickstart">
              {t("hero.cta.guide")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="gap-2 px-8 border-border bg-background" asChild>
            <Link href="#usecases">{t("hero.cta.start")}</Link>
          </Button>
          <Link
            href="https://github.com/AlexAnys/awesome-openclaw-usecases-zh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            {t("hero.cta.github")}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  )
}
