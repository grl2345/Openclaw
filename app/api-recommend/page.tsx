"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import {
  modelCategories,
  aggregatorCategories,
  type ModelCategory,
  type AggregatorCategory,
  type AggregatorRow,
} from "@/lib/api-recommend-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ExternalLink, Star, LayoutGrid, DollarSign, Lightbulb } from "lucide-react"

export default function ApiRecommendPage() {
  const { locale, t } = useI18n()
  const isZh = locale === "zh"

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("nav.home")}
        </Link>

        <header className="mb-6">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t("apiRecommend.title")}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t("apiRecommend.subtitle")}
          </p>
        </header>

        <Tabs defaultValue="pricing" className="w-full">
          <TabsList className="mb-6 flex h-auto flex-wrap gap-1 bg-muted/60 p-1.5 sm:mb-8">
            <TabsTrigger
              value="pricing"
              className="gap-2 data-[state=active]:bg-muted data-[state=active]:text-primary data-[state=active]:ring-1 data-[state=active]:ring-primary data-[state=active]:ring-inset"
            >
              <DollarSign className="h-4 w-4" />
              {t("apiRecommend.tab.pricing")}
            </TabsTrigger>
            <TabsTrigger
              value="aggregators"
              className="gap-2 data-[state=active]:bg-muted data-[state=active]:text-primary data-[state=active]:ring-1 data-[state=active]:ring-primary data-[state=active]:ring-inset"
            >
              <LayoutGrid className="h-4 w-4" />
              {t("apiRecommend.tab.aggregators")}
            </TabsTrigger>
            <TabsTrigger
              value="tips"
              className="gap-2 data-[state=active]:bg-muted data-[state=active]:text-primary data-[state=active]:ring-1 data-[state=active]:ring-primary data-[state=active]:ring-inset"
            >
              <Lightbulb className="h-4 w-4" />
              {t("apiRecommend.tab.tips")}
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: 价格对比 */}
          <TabsContent value="pricing" className="mt-0">
            {modelCategories.map((cat: ModelCategory) => (
              <section
                key={cat.id}
                id={cat.id}
                className="mb-8 rounded-xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm sm:p-6"
              >
                <h2 className="mb-1 text-base font-semibold text-foreground sm:text-lg">
                  {isZh ? cat.name : cat.nameEn}
                </h2>
                {(cat.desc || cat.descEn) && (
                  <p className="mb-4 text-sm text-muted-foreground">
                    {isZh ? cat.desc : (cat.descEn ?? cat.desc)}
                  </p>
                )}
                <div className="space-y-4">
                  {cat.models.map((model) => (
                    <div
                      key={model.modelName}
                      className="overflow-hidden rounded-lg border border-border/50 bg-muted/10"
                    >
                      <div className="border-b border-border/50 bg-muted/20 px-3 py-2">
                        <span className="font-medium text-foreground">
                          {isZh ? model.modelName : (model.modelNameEn ?? model.modelName)}
                        </span>
                        {model.context && (
                          <span className="ml-2 text-xs text-muted-foreground">
                            {t("apiRecommend.context")} {model.context}
                          </span>
                        )}
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[520px] text-left text-sm">
                          <thead>
                            <tr className="border-b border-border/50 bg-muted/20">
                              <th className="px-3 py-2 font-medium text-foreground">{t("apiRecommend.provider")}</th>
                              <th className="px-3 py-2 font-medium text-foreground">{t("apiRecommend.input")}</th>
                              <th className="px-3 py-2 font-medium text-foreground">{t("apiRecommend.output")}</th>
                              <th className="px-3 py-2 font-medium text-foreground">{t("apiRecommend.note")}</th>
                            </tr>
                          </thead>
                          <tbody className="text-muted-foreground">
                            {model.providers.map((p) => (
                              <tr key={p.name} className="border-b border-border/40 last:border-0">
                                <td className="px-3 py-2">
                                  <span className="font-medium text-foreground">
                                    {isZh ? p.name : (p.nameEn ?? p.name)}
                                  </span>
                                  {p.recommended && (
                                    <span
                                      className="ml-2 inline-flex items-center gap-0.5 rounded bg-primary/15 px-1.5 py-0.5 text-xs font-medium text-primary"
                                      title={t("apiRecommend.recommended")}
                                    >
                                      <Star className="h-3 w-3 fill-current" />
                                      {t("apiRecommend.recommended")}
                                    </span>
                                  )}
                                  {p.url && !p.url.startsWith("#") && (
                                    <a
                                      href={p.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="ml-2 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                                    >
                                      {t("apiRecommend.visit")}
                                      <ExternalLink className="h-3 w-3" />
                                    </a>
                                  )}
                                </td>
                                <td className="px-3 py-2">{p.input}</td>
                                <td className="px-3 py-2">{p.output}</td>
                                <td className="max-w-[180px] px-3 py-2 text-muted-foreground/90">
                                  {p.note ?? "—"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </TabsContent>

          {/* Tab 2: 聚合与中转（全网分类） */}
          <TabsContent value="aggregators" className="mt-0">
            <p className="mb-6 text-sm text-muted-foreground">
              {t("apiRecommend.aggregatorsDesc")}
            </p>
            <div className="space-y-8">
              {aggregatorCategories.map((group: AggregatorCategory) => (
                <section
                  key={group.id}
                  id={group.id}
                  className="rounded-xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm sm:p-6"
                >
                  <h2 className="mb-1 text-base font-semibold text-foreground sm:text-lg">
                    {isZh ? group.name : group.nameEn}
                  </h2>
                  {(group.desc || group.descEn) && (
                    <p className="mb-4 text-sm text-muted-foreground">
                      {isZh ? group.desc : (group.descEn ?? group.desc)}
                    </p>
                  )}
                  <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {group.list.map((agg: AggregatorRow) => (
                      <li
                        key={agg.name}
                        className="flex flex-col rounded-lg border border-border/50 bg-muted/20 p-4 transition-colors hover:border-primary/30 hover:bg-muted/30"
                      >
                        <div className="flex min-h-0 flex-1 flex-col">
                          <h3 className="font-medium text-foreground">
                            {isZh ? agg.name : (agg.nameEn ?? agg.name)}
                          </h3>
                          <p className="mt-1.5 line-clamp-3 flex-1 text-sm text-muted-foreground">
                            {isZh ? agg.desc : (agg.descEn ?? agg.desc)}
                          </p>
                          {agg.features && agg.features.length > 0 && (
                            <p className="mt-2 text-xs text-muted-foreground/80">
                              {agg.features.join(" · ")}
                            </p>
                          )}
                        </div>
                        {!agg.url.startsWith("#") && (
                          <a
                            href={agg.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex w-fit items-center gap-1 text-sm text-primary hover:underline"
                          >
                            {t("apiRecommend.visit")}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </TabsContent>

          {/* Tab 3: 选型建议 */}
          <TabsContent value="tips" className="mt-0">
            <section className="rounded-xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm sm:p-6">
              <h2 className="mb-4 text-base font-semibold text-foreground sm:text-lg">
                {t("apiRecommend.tipsTitle")}
              </h2>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                <li>{t("apiRecommend.tip1")}</li>
                <li>{t("apiRecommend.tip2")}</li>
                <li>{t("apiRecommend.tip3")}</li>
                <li>{t("apiRecommend.tip4")}</li>
              </ul>
            </section>
          </TabsContent>
        </Tabs>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          {t("apiRecommend.disclaimer")}
        </p>
      </div>

      <Footer />
    </div>
  )
}
