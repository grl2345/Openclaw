"use client"

import { useState } from "react"
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
  Clock,
  HelpCircle,
} from "lucide-react"

const catIcons: Record<string, React.ReactNode> = {
  flagship: <Crown className="h-5 w-5" />,
  value: <TrendingDown className="h-5 w-5" />,
  domestic: <Globe className="h-5 w-5" />,
}

const aggIcons: Record<string, React.ReactNode> = {
  "domestic-relay": <Globe className="h-5 w-5" />,
  overseas: <Zap className="h-5 w-5" />,
  cloud: <Server className="h-5 w-5" />,
  opensource: <Shield className="h-5 w-5" />,
}

const LAST_UPDATED = "2026-04-03"

export default function ApiRecommendPage() {
  const { t } = useI18n()
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
                模型 API
              </div>
              <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
                选模型、选供应商，一页搞定
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                OpenClaw 支持接入多种 AI 模型。不知道选哪个？看下面的推荐和对比。
              </p>

              <div className="mx-auto mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                最后更新：{LAST_UPDATED}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

          {/* ═══════ 新手默认推荐 ═══════ */}
          <section className="mb-10">
            <div className="rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-6 sm:p-8">
              <div className="flex items-start gap-3 mb-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground">不知道选什么？看这里</h2>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    如果你是新手，按下面的推荐来，不会错。
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border/40 bg-background/60 p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-sm font-bold text-foreground">国内用户首选</span>
                  </div>
                  <div className="mb-2 text-base font-bold text-foreground">DeepSeek V3</div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 国内直连，不用翻墙</li>
                    <li>• 价格最便宜（¥2/百万 Token 输入）</li>
                    <li>• 注册送大量免费额度</li>
                    <li>• 中文能力优秀，日常够用</li>
                  </ul>
                  <p className="mt-3 text-xs text-muted-foreground/70">
                    适合：日常问答、写邮件、总结文档、翻译等
                  </p>
                </div>
                <div className="rounded-lg border border-border/40 bg-background/60 p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-amber-500" />
                    <span className="text-sm font-bold text-foreground">追求最强效果</span>
                  </div>
                  <div className="mb-2 text-base font-bold text-foreground">Claude Opus 4.5 / Gemini 2.5 Pro</div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 推理和代码能力顶级</li>
                    <li>• 国内需走中转（下方有推荐）</li>
                    <li>• 价格较高，适合关键任务</li>
                    <li>• Gemini 2.5 Pro 上下文超长（百万级）</li>
                  </ul>
                  <p className="mt-3 text-xs text-muted-foreground/70">
                    适合：写代码、复杂分析、长文档处理
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Tabs defaultValue="pricing" className="w-full">
            <TabsList className="mb-8 flex h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
              <TabsTrigger
                value="pricing"
                className="gap-2 rounded-full border border-border/60 bg-card/50 px-5 py-2.5 text-sm font-medium data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <DollarSign className="h-4 w-4" />
                价格对比
              </TabsTrigger>
              <TabsTrigger
                value="aggregators"
                className="gap-2 rounded-full border border-border/60 bg-card/50 px-5 py-2.5 text-sm font-medium data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <LayoutGrid className="h-4 w-4" />
                聚合与中转
              </TabsTrigger>
              <TabsTrigger
                value="tips"
                className="gap-2 rounded-full border border-border/60 bg-card/50 px-5 py-2.5 text-sm font-medium data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Lightbulb className="h-4 w-4" />
                选型建议
              </TabsTrigger>
            </TabsList>

            {/* Tab 1: 价格对比 */}
            <TabsContent value="pricing" className="mt-0 space-y-10">
              {modelCategories.map((cat: ModelCategory) => (
                <section key={cat.id} id={cat.id}>
                  <div className="mb-6 flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {catIcons[cat.id] ?? <Sparkles className="h-5 w-5" />}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-foreground sm:text-xl">{cat.name}</h2>
                      {cat.desc && <p className="mt-0.5 text-sm text-muted-foreground">{cat.desc}</p>}
                    </div>
                  </div>

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
                          <div className="flex items-center justify-between border-b border-border/40 bg-muted/20 px-5 py-3.5">
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                                <Cpu className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-foreground">{model.modelName}</h3>
                                {model.context && (
                                  <span className="text-xs text-muted-foreground">上下文 {model.context}</span>
                                )}
                              </div>
                            </div>
                            {bestProvider && (
                              <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                <Star className="h-3 w-3 fill-current" />
                                {bestProvider.nameEn ?? bestProvider.name}
                              </div>
                            )}
                          </div>

                          <div className="divide-y divide-border/30">
                            {displayProviders.map((p) => (
                              <div
                                key={p.name}
                                className={`flex items-center justify-between px-5 py-3 transition-colors hover:bg-muted/20 ${
                                  p.recommended ? "bg-primary/[0.03]" : ""
                                }`}
                              >
                                <div className="flex items-center gap-2 text-sm">
                                  <span className="font-medium text-foreground">{p.name}</span>
                                  {p.recommended && (
                                    <span className="inline-flex items-center gap-0.5 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
                                      <Star className="h-2.5 w-2.5 fill-current" />
                                      推荐
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
                                    {p.note && <div className="mt-0.5 text-[10px] text-muted-foreground/70">{p.note}</div>}
                                  </div>
                                  {p.url && !p.url.startsWith("#") && (
                                    <a
                                      href={p.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                                      title="访问"
                                    >
                                      <ExternalLink className="h-3.5 w-3.5" />
                                    </a>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>

                          {model.providers.length > 3 && (
                            <button
                              onClick={() => toggleModel(model.modelName)}
                              className="flex w-full items-center justify-center gap-1 border-t border-border/30 py-2.5 text-xs text-muted-foreground transition-colors hover:bg-muted/20 hover:text-foreground"
                            >
                              {isExpanded ? (
                                <>收起 <ChevronUp className="h-3.5 w-3.5" /></>
                              ) : (
                                <>展开全部 {model.providers.length} 个供应商 <ChevronDown className="h-3.5 w-3.5" /></>
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

            {/* Tab 2: 聚合与中转 */}
            <TabsContent value="aggregators" className="mt-0 space-y-10">
              {aggregatorCategories.map((group: AggregatorCategory) => (
                <section key={group.id} id={group.id}>
                  <div className="mb-6 flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {aggIcons[group.id] ?? <LayoutGrid className="h-5 w-5" />}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-foreground sm:text-xl">{group.name}</h2>
                      {group.desc && <p className="mt-0.5 text-sm text-muted-foreground">{group.desc}</p>}
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
                            {agg.name}
                          </h3>
                          <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">{agg.desc}</p>
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
                              访问官网
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

            {/* Tab 3: 选型建议 */}
            <TabsContent value="tips" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { icon: <DollarSign className="h-5 w-5" />, color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400", text: "日常对话用 DeepSeek V3 就够了。¥2/百万 Token，性价比最高。注册后有免费额度，先用完再考虑付费。" },
                  { icon: <Zap className="h-5 w-5" />, color: "bg-blue-500/10 text-blue-600 dark:text-blue-400", text: "写代码、做分析推荐 Claude Opus 4.5。国内可通过中转服务商接入，价格约 ¥3-4/百万 Token。" },
                  { icon: <Shield className="h-5 w-5" />, color: "bg-amber-500/10 text-amber-600 dark:text-amber-400", text: "对隐私要求高的用户，可以选择自建开源模型（如 Qwen、Yi）或使用国内大厂的 API（阿里云、百度云）。" },
                  { icon: <Globe className="h-5 w-5" />, color: "bg-purple-500/10 text-purple-600 dark:text-purple-400", text: "海外用户直接用 OpenAI 或 Anthropic 的官方 API，价格透明、延迟最低。国内用户建议走中转以避免网络问题。" },
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
                  快速推荐
                </h3>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-border/40 bg-background/50 p-4">
                    <div className="mb-1 text-xs font-medium text-primary">性价比之选</div>
                    <div className="font-semibold text-foreground">DeepSeek V3</div>
                    <div className="mt-1 text-xs text-muted-foreground">¥2/M 输入，国内直连，免费额度多</div>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-background/50 p-4">
                    <div className="mb-1 text-xs font-medium text-primary">推理最强</div>
                    <div className="font-semibold text-foreground">Claude Opus 4.5</div>
                    <div className="mt-1 text-xs text-muted-foreground">国内中转约 ¥3-4/M，推理和代码顶级</div>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-background/50 p-4">
                    <div className="mb-1 text-xs font-medium text-primary">长上下文</div>
                    <div className="font-semibold text-foreground">Gemini 2.5 Pro</div>
                    <div className="mt-1 text-xs text-muted-foreground">百万级上下文，适合超长文档分析</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <p className="mt-10 text-center text-xs text-muted-foreground">
            价格信息仅供参考，以各供应商官网最新定价为准。最后更新：{LAST_UPDATED}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
