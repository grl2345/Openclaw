"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { LobsterIcon } from "@/components/lobster-icon"
import { ArrowRight, Github, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow Effect - Warm lobster colors */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[600px] w-[800px] rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="absolute bottom-0 right-0">
          <div className="h-[400px] w-[600px] rounded-full bg-accent/8 blur-[100px]" />
        </div>
        
        {/* Decorative Lobsters */}
        <div className="absolute left-[10%] top-[20%] opacity-[0.06]">
          <LobsterIcon size={120} className="text-primary rotate-[-15deg]" />
        </div>
        <div className="absolute right-[8%] top-[35%] opacity-[0.04]">
          <LobsterIcon size={180} className="text-primary rotate-[20deg]" />
        </div>
        <div className="absolute left-[5%] bottom-[25%] opacity-[0.03]">
          <LobsterIcon size={100} className="text-accent rotate-[10deg]" />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        {/* Badge */}
        <div className="mb-8 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
          <LobsterIcon size={18} className="text-primary" />
          <span className="text-sm text-foreground/70">{t("hero.badge")}</span>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-center font-mono text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {t("hero.title")}
        </h1>
        <p className="mb-6 text-center text-2xl font-medium text-primary sm:text-3xl lg:text-4xl">
          {t("hero.subtitle")}
        </p>
        <p className="mb-12 max-w-2xl text-balance text-center text-lg text-muted-foreground">
          {t("hero.description")}
        </p>

        {/* CTA Buttons */}
        <div className="mb-16 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 px-8" asChild>
            <Link href="#usecases">
              {t("hero.cta.start")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="gap-2 px-8" asChild>
            <Link
              href="https://github.com/AlexAnys/awesome-openclaw-usecases-zh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              {t("hero.cta.github")}
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid w-full max-w-3xl grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <span className="mb-2 font-mono text-4xl font-bold text-foreground sm:text-5xl">40+</span>
            <span className="text-center text-sm text-muted-foreground">{t("hero.stats.usecases")}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2 font-mono text-4xl font-bold text-foreground sm:text-5xl">7</span>
            <span className="text-center text-sm text-muted-foreground">{t("hero.stats.categories")}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2 font-mono text-4xl font-bold text-foreground sm:text-5xl">800+</span>
            <span className="text-center text-sm text-muted-foreground">{t("hero.stats.stars")}</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  )
}
