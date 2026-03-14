"use client"

import { useI18n } from "@/lib/i18n"
import { skills, SKILLS_SOURCE_URL } from "@/lib/skills"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export function FeaturedSkills() {
  const { t, locale } = useI18n()

  const getCategoryName = (categoryId: string) => {
    const key = `skills.category.${categoryId}` as keyof typeof t
    return t(key)
  }

  return (
    <section id="skills" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[300px] w-[500px] rounded-full bg-primary/5 blur-[80px]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
              {t("skills.title")}
            </h2>
            <p className="text-lg text-muted-foreground">{t("skills.subtitle")}</p>
          </div>
          <Button variant="outline" className="gap-2 shrink-0" asChild>
            <Link
              href={SKILLS_SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("skills.viewall")}
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const className = "group relative overflow-hidden rounded-xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card"
            const content = (
              <>
                <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {getCategoryName(skill.category)}
                  </span>
                  {skill.required && (
                    <Badge variant="default" className="text-xs">
                      {t("skills.required")}
                    </Badge>
                  )}
                  {skill.pricing && (
                    <Badge
                      variant={skill.pricing === "paid" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {t(`skills.pricing.${skill.pricing}`)}
                    </Badge>
                  )}
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground group-hover:text-primary">
                  {locale === "zh" ? skill.name.zh : skill.name.en}
                </h3>
                <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                  {locale === "zh" ? skill.description.zh : skill.description.en}
                </p>
                {skill.operations?.length > 0 && (
                  <div className="mb-3">
                    <p className="mb-1.5 text-xs font-medium text-muted-foreground">
                      {t("skills.operations")}
                    </p>
                    <div className="rounded-md border border-border/60 bg-muted/30 px-2.5 py-2 font-mono text-xs text-foreground/90">
                      {skill.operations.slice(0, 3).map((op, i) => (
                        <div key={i} className="truncate" title={op}>
                          {op}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                </div>
              </>
            )
            return skill.path ? (
              <Link key={skill.id} href={skill.path} className={className}>
                {content}
              </Link>
            ) : (
              <a
                key={skill.id}
                href={skill.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            )
          })}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {t("skills.source")} ·{" "}
          <Link
            href={SKILLS_SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            GitHub
          </Link>
          {" · "}
          <Link
            href="https://clawhub.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            ClawHub
          </Link>
        </p>
      </div>
    </section>
  )
}
