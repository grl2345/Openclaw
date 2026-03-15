"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { LobsterIcon } from "@/components/lobster-icon"
import { ArrowRight, Github, Zap } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-screen overflow-hidden bg-[oklch(0.98_0.01_30)] pt-20 sm:pt-24 dark:bg-background">
      <div className="absolute inset-0 overflow-hidden">
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

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-24 lg:pb-28">
        {/* 开源免费 · 收录全网最全教程与用例 */}
        <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/60 px-3 py-1.5 text-sm font-medium text-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
            <Zap className="h-4 w-4 text-muted-foreground" />
            {t("hero.tutorialBadge")}
          </span>
        </div>

        {/* Logo */}
        <div className="logo-float mb-6">
          <LobsterIcon size={180} className="h-[140px] w-[140px] sm:h-[180px] sm:w-[180px]" />
        </div>

        {/* 大标题 */}
        <h1 className="mb-4 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          {t("hero.mainTitle").split(t("hero.mainTitle.highlight"))[0]}
          <span className="text-primary">{t("hero.mainTitle.highlight")}</span>
          {t("hero.mainTitle").split(t("hero.mainTitle.highlight"))[1]}
        </h1>
        <p className="mb-8 max-w-xl text-center text-base text-muted-foreground sm:text-lg">
          {t("hero.mainSubtitle")}
        </p>

        {/* CTA */}
        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Button size="lg" className="group gap-2 px-8 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="#quickstart" className="inline-flex items-center gap-2">
              {t("hero.cta.guide")}
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2 px-8 border-border bg-background" asChild>
            <a href="#usecases">{t("hero.cta.start")}</a>
          </Button>
          <Link
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-200 ease-out hover:text-foreground"
          >
            <Github className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out hover:scale-110" />
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
