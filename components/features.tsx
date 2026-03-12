"use client"

import { useI18n } from "@/lib/i18n"
import { CheckCircle, Globe2, BookOpen, Rocket } from "lucide-react"

const features = [
  {
    key: "verified",
    icon: CheckCircle,
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    key: "china",
    icon: Globe2,
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    key: "guide",
    icon: BookOpen,
    gradient: "from-amber-500/20 to-amber-500/5",
  },
  {
    key: "beginner",
    icon: Rocket,
    gradient: "from-rose-500/20 to-rose-500/5",
  },
]

export function Features() {
  const { t } = useI18n()

  return (
    <section className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            {t("featured.title")}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.key}
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm"
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-50`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {t(`featured.${feature.key}`)}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground">{t(`featured.${feature.key}.desc`)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
