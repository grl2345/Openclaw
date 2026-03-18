"use client"

import { useState } from "react"
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
import {
  ExternalLink,
  Star,
  LayoutGrid,
  DollarSign,
  Lightbulb,
  Sparkles,
  Cpu,
  Zap,
  Globe,
  Shield,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  TrendingDown,
  Crown,
  Server,
} from "lucide-react"

// 模型分类图标
const catIcons: Record<string, React.ReactNode> = {
  flagship: <Crown className="h-5 w-5" />,
  value: <TrendingDown className="h-5 w-5" />,
  domestic: <Globe className="h-5 w-5" />,
}

// 聚合分类图标
const aggIcons: Record<string, React.ReactNode> = {
  "domestic-relay": <Globe className="h-5 w-5" />,
  overseas: <Zap className="h-5 w-5" />,
  cloud: <Server className="h-5 w-5" />,
  opensource: <Shield className="h-5 w-5" />,
}

export default function ApiRecommendPage() {
  const { locale, t } = useI18n()
  const isZh = locale === "zh"
  const [expandedModel, setExpandedModel] = useState<string | null>(null)

  const toggleModel = (name: string) => {
    setExpandedModel(expandedModel === name ? null : name)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden border-b border-border/40">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/8 blur-[100px]" />
            <div className="absolute -bottom-20 right-0 h-60 w-60 rounded-full bg-blue-500/8 blur-[80px]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <Cpu className="h-3.5 w-3.5" />
                {isZh ? "模型 API" : "Model API"}
              </div>
              <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {t("apiRecommend.title")}
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {t("apiRecommend.subtitle")}
              </p>

              {/* Quick Stats */}
              <div className="mx-auto mt-8 flex max-w-lg justify-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">15+</div>
                  <div className="text-xs text-muted-foreground">{isZh ? "主流模型" : "Models"}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">30+</div>
                  <div className="text-xs text-muted-foreground">{isZh ? "供应商" : "Providers"}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">4</div>
                  <div className="text-xs text-muted-foreground">{isZh ? "平台分类" : "Categories"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Tabs defaultValue="pricing" className="w-full">
            <TabsList className="mb-8 flex h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
              <TabsTrigger
                value="pricing"
                className="gap-2 rounded-full border border-border/60 bg-card/50 px-5 py-2.5 text-sm font-medium data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <DollarSign className="h-4 w-4" />
                {t("apiRecommend.tab.pricing")}
              </TabsTrigger>
              <TabsTrigger
                value="aggregators"
                className="gap-2 rounded-full border border-border/60 bg-card/50 px-5 py-2.5 text-sm font-medium data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <LayoutGrid className="h-4 w-4" />
                {t("apiRecommend.tab.aggregators")}
              </TabsTrigger>
              <TabsTrigger
                value="tips"
                className="gap-2 rounded-full border border-border/60 bg-card/50 px-5 py-2.5 text-sm font-medium data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Lightbulb className="h-4 w-4" />
                {t("apiRecommend.tab.tips")}
              </TabsTrigger>
            </TabsList>

            {/* Tab 1: 价格对比 — 全新卡片式布局 */}
            <TabsContent value="pricing" className="mt-0 space-y-10">
              {modelCategories.map((cat: ModelCategory) => (
                <section key={cat.id} id={cat.id}>
                  {/* Category Header */}
                  <div className="mb-6 flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {catIcons[cat.id] ?? <Sparkles className="h-5 w-5" />}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-foreground sm:text-xl">
                        {isZh ? cat.name : cat.nameEn}
                      </h2>
                      {(cat.desc || cat.descEn) && (
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {isZh ? cat.desc : (cat.descEn ?? cat.desc)}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Model Cards — 卡片式而非纯表格 */}
                  <div className="grid gap-4 lg:grid-cols-2">
                    {cat.models.map((model) => {
                      const isExpanded = expandedModel === model.modelName
                      const bestProvider = model.providers.find((p) => p.recommended)
                      const displayProviders = isExpanded ? model.providers : model.providers.slice(0, 3)

                      return (
                        <div
                          key={model.modelName}
                          className="group overflow-hidden rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                        >
                          {/* Model Header */}
                          <div className="flex items-center justify-between border-b border-border/40 bg-muted/20 px-5 py-3.5">
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                                <Cpu className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-foreground">
                                  {isZh ? model.modelName : (model.modelNameEn ?? model.modelName)}
                                </h3>
                                {model.context && (
                                  <span className="text-xs text-muted-foreground">
                                    {isZh ? "上下文" : "Context"} {model.context}
                                  </span>
                                )}
                              </div>
                            </div>
                            {bestProvider && (
                              <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                <Star className="h-3 w-3 fill-current" />
                                {isZh ? (bestProvider.nameEn ?? bestProvider.name) : (bestProvider.nameEn ?? bestProvider.name)}
                              </div>
                            )}
                          </div>

                          {/* Provider List */}
                          <div className="divide-y divide-border/30">
                            {displayProviders.map((p) => (
                              <div
                                key={p.name}
                                className={`flex items-center justify-between px-5 py-3 transition-colors hover:bg-muted/20 ${
                                  p.recommended ? "bg-primary/[0.03]" : ""
                                }`}
                              >
                                <div className="flex items-center gap-2 text-sm">
                                  <span className="font-medium text-foreground">
                                    {isZh ? p.name : (p.nameEn ?? p.name)}
                                  </span>
                                  {p.recommended && (
                                    <span className="inline-flex items-center gap-0.5 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
                                      <Star className="h-2.5 w-2.5 fill-current" />
                                      {isZh ? "推荐" : "Pick"}
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="text-right text-xs">
                                    <div className="text-muted-foreground">
                                      <span className="text-foreground/80">{p.input}</span>
                                      <span className="mx-1 text-muted-foreground/50">/</span>
                                      <span className="text-foreground/80">{p.output}</span>
                                    </div>
                                    {p.note && (
                                      <div className="mt-0.5 text-[10px] text-muted-foreground/70">{p.note}</div>
                                    )}
                                  </div>
                                  {p.url && !p.url.startsWith("#") && (
                                    <a
                                      href={p.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                                      title={t("apiRecommend.visit")}
                                    >
                                      <ExternalLink className="h-3.5 w-3.5" />
                                    </a>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Expand/Collapse */}
                          {model.providers.length > 3 && (
                            <button
                              onClick={() => toggleModel(model.modelName)}
                              className="flex w-full items-center justify-center gap-1 border-t border-border/30 py-2.5 text-xs text-muted-foreground transition-colors hover:bg-muted/20 hover:text-foreground"
                            >
                              {isExpanded ? (
                                <>
                                  {isZh ? "收起" : "Collapse"}
                                  <ChevronUp className="h-3.5 w-3.5" />
                                </>
                              ) : (
                                <>
                                  {isZh
                                    ? `展开全部 ${model.providers.length} 个供应商`
                                    : `Show all ${model.providers.length} providers`}
                                  <ChevronDown className="h-3.5 w-3.5" />
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </section>
              ))}
            </TabsContent>

            {/* Tab 2: 聚合与中转 — 更现代的卡片设计 */}
            <TabsContent value="aggregators" className="mt-0 space-y-10">
              {aggregatorCategories.map((group: AggregatorCategory) => (
                <section key={group.id} id={group.id}>
                  <div className="mb-6 flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {aggIcons[group.id] ?? <LayoutGrid className="h-5 w-5" />}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-foreground sm:text-xl">
                        {isZh ? group.name : group.nameEn}
                      </h2>
                      {(group.desc || group.descEn) && (
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {isZh ? group.desc : (group.descEn ?? group.desc)}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.list.map((agg: AggregatorRow) => (
                      <div
                        key={agg.name}
                        className="group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                      >
                        <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="relative flex flex-1 flex-col">
                          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                            {isZh ? agg.name : (agg.nameEn ?? agg.name)}
                          </h3>
                          <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
                            {isZh ? agg.desc : (agg.descEn ?? agg.desc)}
                          </p>
                          {agg.features && agg.features.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {agg.features.map((f) => (
                                <span
                                  key={f}
                                  className="inline-flex items-center rounded-full border border-border/50 bg-muted/30 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                                >
                                  {f}
                                </span>
                              ))}
                            </div>
                          )}
                          {!agg.url.startsWith("#") && (
                            <a
                              href={agg.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                            >
                              {t("apiRecommend.visit")}
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </TabsContent>

            {/* Tab 3: 选型建议 — 卡片化 */}
            <TabsContent value="tips" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    icon: <DollarSign className="h-5 w-5" />,
                    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                    text: t("apiRecommend.tip1"),
                  },
                  {
                    icon: <Zap className="h-5 w-5" />,
                    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
                    text: t("apiRecommend.tip2"),
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                    text: t("apiRecommend.tip3"),
                  },
                  {
                    icon: <Globe className="h-5 w-5" />,
                    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
                    text: t("apiRecommend.tip4"),
                  },
                ].map((tip, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm"
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tip.color}`}>
                      {tip.icon}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{tip.text}</p>
                  </div>
                ))}
              </div>

              {/* 快速推荐 */}
              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-foreground">
                  <Sparkles className="h-4 w-4 text-primary" />
                  {isZh ? "快速推荐" : "Quick Picks"}
                </h3>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-border/40 bg-background/50 p-4">
                    <div className="mb-1 text-xs font-medium text-primary">{isZh ? "性价比之选" : "Best Value"}</div>
                    <div className="font-semibold text-foreground">DeepSeek V3</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {isZh ? "¥2/M 输入，国内直连，免费额度多" : "¥2/M input, China direct, generous free tier"}
                    </div>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-background/50 p-4">
                    <div className="mb-1 text-xs font-medium text-primary">{isZh ? "推理最强" : "Best Reasoning"}</div>
                    <div className="font-semibold text-foreground">Claude Opus 4.5</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {isZh ? "国内中转约 ¥3-4/M，推理和代码顶级" : "$5/M input, top reasoning & code"}
                    </div>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-background/50 p-4">
                    <div className="mb-1 text-xs font-medium text-primary">{isZh ? "长上下文" : "Long Context"}</div>
                    <div className="font-semibold text-foreground">Gemini 2.5 Pro</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {isZh ? "百万级上下文，适合超长文档分析" : "1M context, for long document analysis"}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <p className="mt-10 text-center text-xs text-muted-foreground">
            {t("apiRecommend.disclaimer")}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
