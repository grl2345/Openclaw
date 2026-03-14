"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Package, MessageSquare } from "lucide-react"
import Link from "next/link"

export function QuickStart() {
  const { t } = useI18n()

  const steps = [
    {
      step: 1,
      icon: <Rocket className="h-6 w-6" />,
      titleKey: "quickstart.step1.title" as const,
      descKey: "quickstart.step1.desc" as const,
      href: "/install",
      ctaKey: "quickstart.step1.cta" as const,
    },
    {
      step: 2,
      icon: <Package className="h-6 w-6" />,
      titleKey: "quickstart.step2.title" as const,
      descKey: "quickstart.step2.desc" as const,
      href: "/#skills",
      ctaKey: "quickstart.step2.cta" as const,
    },
    {
      step: 3,
      icon: <MessageSquare className="h-6 w-6" />,
      titleKey: "quickstart.step3.title" as const,
      descKey: "quickstart.step3.desc" as const,
      href: "/#usecases",
      ctaKey: "quickstart.step3.cta" as const,
    },
  ]

  return (
    <section id="quickstart" className="relative scroll-mt-24 border-t border-border/40 bg-muted/20 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
            {t("quickstart.title")}
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">{t("quickstart.subtitle")}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map(({ step, icon, titleKey, descKey, href, ctaKey }) => (
            <div
              key={step}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {icon}
              </div>
              <span className="absolute right-4 top-4 text-3xl font-bold text-foreground/10">
                {step}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {t(titleKey)}
              </h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {t(descKey)}
              </p>
              <Button variant="outline" size="sm" className="w-fit gap-2" asChild>
                <Link href={href}>
                  {t(ctaKey)}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
