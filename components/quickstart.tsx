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
      icon: Rocket,
      titleKey: "quickstart.step1.title" as const,
      descKey: "quickstart.step1.desc" as const,
      href: "/install",
      ctaKey: "quickstart.step1.cta" as const,
    },
    {
      step: 2,
      icon: Package,
      titleKey: "quickstart.step2.title" as const,
      descKey: "quickstart.step2.desc" as const,
      href: "/#skills",
      ctaKey: "quickstart.step2.cta" as const,
    },
    {
      step: 3,
      icon: MessageSquare,
      titleKey: "quickstart.step3.title" as const,
      descKey: "quickstart.step3.desc" as const,
      href: "/#usecases",
      ctaKey: "quickstart.step3.cta" as const,
    },
  ]

  return (
    <section
      id="quickstart"
      className="relative scroll-mt-24 overflow-hidden border-t border-border/40 py-20 sm:py-24 lg:py-28"
    >
      {/* 背景：微渐变 + 网格 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, var(--primary) 0%, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 标题区 */}
        <div className="mb-14 text-center sm:mb-16">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            {t("quickstart.badge")}
          </span>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]">
            {t("quickstart.title")}
          </h2>
          <p className="mx-auto max-w-lg text-base text-muted-foreground sm:text-lg">
            {t("quickstart.subtitle")}
          </p>
        </div>

        {/* 步骤卡片 + 连接线（大屏） */}
        <div className="relative grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-8">
          {/* 桌面端步骤间装饰线 */}
          <div
            className="absolute left-[16.666%] right-[16.666%] top-[72px] hidden h-px bg-gradient-to-r from-transparent via-border/60 to-transparent sm:block"
            aria-hidden
          />

          {steps.map(({ step, icon: Icon, titleKey, descKey, href, ctaKey }) => (
            <div
              key={step}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-6 lg:p-8"
            >
              {/* 步骤角标 */}
              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-muted/30 text-sm font-semibold tabular-nums text-muted-foreground transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary">
                {String(step).padStart(2, "0")}
              </div>

              {/* 图标 */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:from-primary/20 group-hover:to-primary/10 group-hover:ring-primary/20">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mb-2 text-xl font-semibold tracking-tight text-foreground">
                {t(titleKey)}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(descKey)}
              </p>

              <Button
                variant="outline"
                size="sm"
                className="group/btn w-fit gap-2 rounded-lg border-border/60 bg-background/60 font-medium transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                asChild
              >
                <Link href={href} className="inline-flex items-center gap-2">
                  {t(ctaKey)}
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
