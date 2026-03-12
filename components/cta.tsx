"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  const { t } = useI18n()

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[400px] w-[600px] rounded-full bg-primary/15 blur-[120px]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-12 text-center backdrop-blur-sm sm:p-16">
          {/* Decorative elements */}
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">{t("cta.description")}</p>
          <Button size="lg" className="gap-2 px-8" asChild>
            <Link
              href="https://github.com/AlexAnys/awesome-openclaw-usecases-zh"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("cta.button")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
