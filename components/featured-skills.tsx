"use client"

import { useI18n } from "@/lib/i18n"
import { allSkills, allSkillCategories } from "@/lib/all-skills"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

// 精选 6 个热门技能 ID（均为 allSkills 中真实存在的 ID）
const hotSkillIds = [
  "google-calendar",          // 日历 - Google 日历
  "1password",                // 安全 - 1Password 密码管理
  "academic-research",        // 搜索·调研 - 学术研究
  "12306",                    // 国内生态 - 12306 火车票
  "a-share-real-time-data",   // 金融 - A股实时数据
  "2nd-brain",                // 笔记 - 第二大脑
]

export function FeaturedSkills() {
  const { t, locale } = useI18n()
  const isZh = locale === "zh"

  const hotSkills = hotSkillIds
    .map((id) => allSkills.find((s) => s.id === id))
    .filter(Boolean)

  const pricingStyle: Record<string, string> = {
    free: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    freemium: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    paid: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  }
  const pricingLabel: Record<string, string> = {
    free: isZh ? "免费" : "Free",
    freemium: isZh ? "免费额度" : "Freemium",
    paid: isZh ? "付费" : "Paid",
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
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Zap className="h-3.5 w-3.5" />
            {isZh ? "热门技能" : "Hot Skills"}
          </div>
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            {t("skills.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {isZh
              ? `共收录 ${allSkills.length}+ 个技能，覆盖 ${allSkillCategories.length} 大类，以下是最受欢迎的技能`
              : `${allSkills.length}+ skills across ${allSkillCategories.length} categories. Here are the most popular ones`}
          </p>
        </div>

        {/* Skills Grid — 6 items */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hotSkills.map((skill) => {
            if (!skill) return null
            const catMeta = allSkillCategories.find((c) => c.id === skill.category)
            return (
              <a
                key={skill.id}
                href={skill.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card hover:shadow-md"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  {/* Meta row */}
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    {catMeta && (
                      <span className="text-xs font-medium text-muted-foreground">
                        {isZh ? catMeta.nameZh : catMeta.nameEn}
                      </span>
                    )}
                    {skill.required && (
                      <Badge variant="default" className="h-5 px-1.5 text-[10px]">
                        {isZh ? "必装" : "Required"}
                      </Badge>
                    )}
                    {skill.pricing && (
                      <span
                        className={`inline-flex items-center rounded-full border px-1.5 py-0.5 text-[10px] font-medium ${pricingStyle[skill.pricing]}`}
                      >
                        {pricingLabel[skill.pricing]}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="mb-2 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {isZh ? skill.name.zh : skill.name.en}
                  </h3>

                  {/* Description */}
                  <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                    {isZh ? skill.description.zh : skill.description.en}
                  </p>

                  {/* Install command */}
                  {skill.operations?.length > 0 && (
                    <div className="mb-3 rounded-md border border-border/50 bg-muted/30 px-2.5 py-2 font-mono text-xs text-foreground/90">
                      <div className="truncate" title={skill.operations[0]}>
                        {skill.operations[0]}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* View More */}
        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" className="group gap-2 px-8" asChild>
            <Link href="/skills">
              {isZh ? `查看全部 ${allSkills.length}+ 个技能` : `Explore all ${allSkills.length}+ skills`}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
