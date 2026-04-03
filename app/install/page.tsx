"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ExternalLink,
  Monitor,
  Cloud,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Download,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Play,
  HelpCircle,
  Zap,
  MessageSquare,
  Search,
  FileText,
} from "lucide-react"

const MIAODA_URL = "https://miaoda.feishu.cn/home"
const WORKBUDDY_URL = "https://www.codebuddy.cn/work/"

const IMG_STEP = { w: 560, h: 373 }
const IMG_TALL = { w: 560, h: 420 }

const FAQ_ITEMS = [
  {
    q: "OpenClaw 免费吗？",
    a: "OpenClaw 本身完全开源免费。但它底层需要调用 AI 模型（如 DeepSeek、Claude 等），这些模型的 API 调用是需要付费的。好消息是很多国产模型（如 DeepSeek）提供了大量免费额度，日常使用基本够用。",
  },
  {
    q: "飞书方式和微信方式选哪个？",
    a: "如果你只是想快速体验，选飞书（1 分钟搞定）；如果你希望在微信里日常使用、或者需要读写本地文件，选微信 WorkBuddy。两种方式可以同时装，不冲突。",
  },
  {
    q: "部署后为什么回复很慢？",
    a: "大概率是你在用免费的公共 API，请求排队导致的。解决办法：去模型 API 页面选一个付费但便宜的 API 服务商（比如 DeepSeek 官方），配置你自己的 API Key。",
  },
  {
    q: "可以同时接入多个平台（飞书 + 微信 + 钉钉）吗？",
    a: "可以。OpenClaw 支持多通道并行，一个实例可以同时接入多个平台。具体配置方法可参考官方文档的 Multi-Channel 章节。",
  },
  {
    q: "部署后数据存在哪里？安全吗？",
    a: "飞书方式的数据存在秒搭的云端（飞书服务器）；微信 WorkBuddy 方式的数据存在你的本地电脑。如果对隐私要求高，建议用微信本地方式或自建 Docker。",
  },
  {
    q: "不会写代码也能用吗？",
    a: "完全可以。飞书方式零代码、零命令行，点几下鼠标就能用。微信方式也只需要装一个桌面软件、扫个码。真正需要写代码的是自建 Docker 部署，但这是进阶玩法，新手不用管。",
  },
  {
    q: "OpenClaw 和 ChatGPT / Coze 有什么区别？",
    a: "ChatGPT 和 Coze 是封闭平台，你只能在它们的界面里用。OpenClaw 是开源框架，你可以部署在自己的服务器上、接入你常用的聊天平台（微信/飞书/钉钉），而且可以自由更换底层模型、安装各种技能插件。简单说：自由度和可控度更高。",
  },
]

export default function InstallPage() {
  const [showDecisionTable, setShowDecisionTable] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <div className="relative overflow-hidden border-b border-border/40">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/8 blur-[100px]" />
            <div className="absolute -bottom-20 right-0 h-60 w-60 rounded-full bg-blue-500/8 blur-[80px]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <Download className="h-3.5 w-3.5" />
                新手上手
              </div>
              <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
                从零开始，10 分钟拥有你的 AI 助手
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                不用写代码、不用买服务器。飞书 1 分钟、微信 5 分钟，跟着做就行。
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">

          {/* ═══════ 第 0 节：什么是 OpenClaw ═══════ */}
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
              <BookOpen className="h-5 w-5 text-primary" />
              什么是 OpenClaw？
            </h2>
            <div className="rounded-xl border border-border/60 bg-card/50 p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                一句话解释：<strong className="text-foreground">OpenClaw 是一个开源的 AI 助手，你可以把它「养」在微信、飞书、钉钉里，让它帮你干活。</strong>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                它不是另一个 ChatGPT 套壳。它的核心能力是「连接」—— 连接你常用的聊天平台、连接各种 AI 模型（想用 DeepSeek 就用 DeepSeek，想用 Claude 就换 Claude）、
                连接各种「技能」插件（搜索网页、读取文件、操作表格、发通知……）。
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: <MessageSquare className="h-4 w-4" />, title: "在你熟悉的地方用", desc: "微信、飞书、钉钉、网页，哪里方便在哪用" },
                  { icon: <Zap className="h-4 w-4" />, title: "能力可以一直加", desc: "安装「技能」插件，搜索、写代码、读文件都行" },
                  { icon: <Search className="h-4 w-4" />, title: "模型随便换", desc: "DeepSeek、Claude、GPT，哪个便宜用哪个" },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-border/40 bg-muted/10 p-4">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════ 第 1 节：两种推荐方式 ═══════ */}
          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-2 text-lg font-bold">
              <Sparkles className="h-5 w-5 text-primary" />
              新手推荐：最简单的两种方式
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <a href="#guide-feishu" className="group relative overflow-hidden rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute right-4 top-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">约 1 分钟</div>
                <div className="mb-3 text-3xl">🔵</div>
                <h3 className="mb-2 text-lg font-semibold group-hover:text-primary transition-colors">飞书秒搭</h3>
                <p className="mb-4 text-sm text-muted-foreground">一键部署到飞书，自动创建机器人。零命令行，最适合新手。</p>
                <div className="flex items-center gap-1 text-sm font-medium text-primary">
                  查看教程
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
              <a href="#guide-wechat" className="group relative overflow-hidden rounded-xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-transparent p-6 transition-all hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="absolute right-4 top-4 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">约 5 分钟</div>
                <div className="mb-3 text-3xl">💬</div>
                <h3 className="mb-2 text-lg font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">微信 + WorkBuddy</h3>
                <p className="mb-4 text-sm text-muted-foreground">在微信里发消息使唤龙虾。装上桌面工具，绑定微信即可。</p>
                <div className="flex items-center gap-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  查看教程
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </div>
          </section>

          {/* ═══════ 决策表（可展开） ═══════ */}
          <section className="mb-12">
            <button
              onClick={() => setShowDecisionTable(!showDecisionTable)}
              className="flex w-full items-center justify-between rounded-xl border border-border/60 bg-card/50 p-5 text-left transition-colors hover:bg-card"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">不确定选哪种？看对比表</h3>
                  <p className="text-sm text-muted-foreground">根据你的需求场景，推荐最适合的部署方式</p>
                </div>
              </div>
              {showDecisionTable ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
            </button>

            {showDecisionTable && (
              <div className="mt-4 overflow-hidden rounded-xl border border-border/60 bg-card/50">
                <div className="grid gap-4 p-5 sm:grid-cols-2">
                  <div className="rounded-lg border border-border/50 bg-muted/20 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Monitor className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">本地部署（微信方式）</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />直接读写本地文件</li>
                      <li className="flex items-start gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />数据在自己手里，更隐私</li>
                      <li className="flex items-start gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />不用额外付云服务器费</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-border/50 bg-muted/20 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-blue-500" />
                      <span className="font-medium text-foreground">云端部署（飞书方式）</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500" />24 小时在线，不占本地</li>
                      <li className="flex items-start gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500" />手机随时访问</li>
                      <li className="flex items-start gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500" />团队共享使用</li>
                    </ul>
                  </div>
                </div>
                <div className="overflow-x-auto border-t border-border/40">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border/40 bg-muted/20">
                        <th className="px-5 py-3 font-medium text-foreground">你的情况</th>
                        <th className="px-5 py-3 font-medium text-foreground">推荐</th>
                        <th className="px-5 py-3 font-medium text-foreground">原因</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      {[
                        { scene: "写代码、改本地文档", pick: "微信方式", why: "直接读写文件" },
                        { scene: "随时微信/手机访问", pick: "飞书方式", why: "不受电脑开关限制" },
                        { scene: "对隐私要求高", pick: "微信方式", why: "数据不出本机" },
                        { scene: "不想家里电脑一直开着", pick: "飞书方式", why: "云服务器 24h 在线" },
                        { scene: "完全不想折腾命令行", pick: "飞书方式", why: "一键创建，零配置" },
                      ].map((row) => (
                        <tr key={row.scene} className="border-b border-border/30 last:border-0">
                          <td className="px-5 py-3">{row.scene}</td>
                          <td className="px-5 py-3 font-medium text-foreground">{row.pick}</td>
                          <td className="px-5 py-3">{row.why}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>

          {/* ═══════ 第 2 节：图文教程 ═══════ */}
          <section className="mb-12" id="guide-feishu">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
              <Play className="h-5 w-5 text-primary" />
              图文详细教程
            </h2>

            <Tabs defaultValue="feishu" className="w-full">
              <TabsList className="mb-6 flex h-auto w-fit gap-2 bg-transparent p-0">
                <TabsTrigger
                  value="feishu"
                  className="gap-2 rounded-full border border-border/60 bg-card/50 px-5 py-2.5 text-sm font-medium data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  🔵 飞书秒搭
                </TabsTrigger>
                <TabsTrigger
                  value="wechat"
                  className="gap-2 rounded-full border border-border/60 bg-card/50 px-5 py-2.5 text-sm font-medium data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  💬 微信 WorkBuddy
                </TabsTrigger>
              </TabsList>

              {/* 飞书教程 */}
              <TabsContent value="feishu" className="mt-0">
                <div className="rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm sm:p-8">
                  <h3 className="mb-6 text-lg font-semibold">飞书秒搭 · 三步搞定（约 1 分钟）</h3>

                  <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</span>
                      <span className="font-medium text-foreground">打开飞书秒搭，点「创建」OpenClaw 智能助手</span>
                    </div>
                    <p className="mb-4 pl-6 text-sm text-muted-foreground sm:pl-11">打开官网，找到「OpenClaw 智能助手」，点右侧蓝色「创建」按钮。</p>
                    <figure className="ml-0 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50 sm:ml-11">
                      <Image src="/install/feishu-miaoda-1.webp" alt="飞书秒搭创建" width={IMG_STEP.w} height={IMG_STEP.h} className="w-full object-contain" priority sizes="(max-width: 560px) 100vw, 560px" />
                    </figure>
                  </div>

                  <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</span>
                      <span className="font-medium text-foreground">等约 1 分钟，自动部署完成</span>
                    </div>
                    <p className="mb-4 pl-6 text-sm text-muted-foreground sm:pl-11">页面会显示启动进度，全程自动，无需操作。看到「已连接」就成功了。</p>
                    <div className="ml-0 space-y-3 sm:ml-11">
                      <figure className="max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50">
                        <Image src="/install/feishu-miaoda-2.webp" alt="部署进度" width={IMG_STEP.w} height={IMG_STEP.h} className="w-full object-contain" sizes="(max-width: 560px) 100vw, 560px" />
                      </figure>
                      <figure className="max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50">
                        <Image src="/install/feishu-miaoda-3.webp" alt="连接成功" width={IMG_STEP.w} height={IMG_STEP.h} className="w-full object-contain" sizes="(max-width: 560px) 100vw, 560px" />
                      </figure>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">3</span>
                      <span className="font-medium text-foreground">在飞书里和机器人对话</span>
                    </div>
                    <p className="mb-4 pl-11 text-sm text-muted-foreground">打开飞书，在聊天里找到 OpenClaw 助手，直接发消息即可。</p>
                    <figure className="ml-11 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50">
                      <Image src="/install/feishu-miaoda-5.webp" alt="飞书对话" width={IMG_STEP.w} height={IMG_TALL.h} className="w-full object-contain" sizes="(max-width: 560px) 100vw, 560px" />
                    </figure>
                  </div>

                  <div className="mb-8 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <p className="text-sm font-medium text-foreground">💡 想换模型？</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      默认是妙搭的自动模型。在飞书秒搭的「管理智能助手」里，用对话告诉助手「换一个模型」并重启即可。
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
                    <p className="text-sm text-muted-foreground">准备好就点下面按钮，去飞书秒搭创建你的 OpenClaw：</p>
                    <a href={MIAODA_URL} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="gap-2">
                        打开飞书秒搭 · 创建
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </TabsContent>

              {/* 微信教程 */}
              <TabsContent value="wechat" className="mt-0">
                <div className="rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm sm:p-8" id="guide-wechat">
                  <h3 className="mb-6 text-lg font-semibold">微信 + WorkBuddy · 四步搞定（约 5 分钟）</h3>

                  <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">1</span>
                      <span className="font-medium text-foreground">下载并安装 WorkBuddy</span>
                    </div>
                    <p className="mb-4 pl-11 text-sm text-muted-foreground">打开下载页，安装时一路点「下一步」即可。</p>
                    <figure className="ml-11 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50">
                      <Image src="/install/wechat-workbuddy-1.webp" alt="WorkBuddy 下载" width={IMG_STEP.w} height={IMG_STEP.h} className="w-full object-contain" sizes="(max-width: 560px) 100vw, 560px" />
                    </figure>
                    <a href={WORKBUDDY_URL} target="_blank" rel="noopener noreferrer" className="ml-11 mt-2 inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
                      打开 WorkBuddy 下载页 <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">2</span>
                      <span className="font-medium text-foreground">打开 WorkBuddy，微信扫码登录</span>
                    </div>
                    <p className="mb-4 pl-11 text-sm text-muted-foreground">打开软件后点「登录」，浏览器弹出页面，用微信扫一扫即可。</p>
                    <figure className="ml-11 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50">
                      <Image src="/install/wechat-workbuddy-2.webp" alt="WorkBuddy 登录" width={IMG_STEP.w} height={IMG_TALL.h} className="w-full object-contain" sizes="(max-width: 560px) 100vw, 560px" />
                    </figure>
                  </div>

                  <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">3</span>
                      <span className="font-medium text-foreground">绑定微信号</span>
                    </div>
                    <p className="mb-4 pl-11 text-sm text-muted-foreground">
                      头像 → Claw 设置 → 微信客服号集成 → 配置 → 扫码绑定。看到「已绑定」就成功了。
                    </p>
                    <div className="ml-11 space-y-3">
                      <figure className="max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50">
                        <Image src="/install/wechat-workbuddy-3.webp" alt="Claw 设置" width={IMG_STEP.w} height={IMG_TALL.h} className="w-full object-contain" sizes="(max-width: 560px) 100vw, 560px" />
                      </figure>
                      <figure className="max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50">
                        <Image src="/install/wechat-workbuddy-4.webp" alt="扫码绑定" width={IMG_STEP.w} height={IMG_TALL.h} className="w-full object-contain" sizes="(max-width: 560px) 100vw, 560px" />
                      </figure>
                      <figure className="max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50">
                        <Image src="/install/wechat-workbuddy-5.webp" alt="绑定成功" width={IMG_STEP.w} height={IMG_TALL.h} className="w-full object-contain" sizes="(max-width: 560px) 100vw, 560px" />
                      </figure>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">4</span>
                      <span className="font-medium text-foreground">在微信里和龙虾聊天</span>
                    </div>
                    <p className="mb-4 pl-11 text-sm text-muted-foreground">
                      配好了！注意：电脑和 WorkBuddy 都要开着才能收到消息。合上笔记本或关掉软件就收不到了。
                    </p>
                    <figure className="ml-11 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50">
                      <Image src="/install/wechat-workbuddy-6.webp" alt="微信对话" width={IMG_STEP.w} height={IMG_TALL.h} className="w-full object-contain" sizes="(max-width: 560px) 100vw, 560px" />
                    </figure>
                  </div>

                  <div className="flex flex-col items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center">
                    <a href={WORKBUDDY_URL} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                        打开 WorkBuddy 下载页
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* ═══════ 第 3 节：部署完成，试试第一个任务 ═══════ */}
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
              <Zap className="h-5 w-5 text-primary" />
              部署完成？试试你的第一个任务
            </h2>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
              <p className="mb-4 text-sm text-muted-foreground">
                OpenClaw 装好后默认只有基础对话能力。试试发以下消息给它，验证是否正常工作：
              </p>
              <div className="space-y-3">
                {[
                  { task: "帮我查一下今天北京的天气", desc: "测试基础对话能力" },
                  { task: "用 200 字总结一下量子计算是什么", desc: "测试文本生成能力" },
                  { task: "帮我写一封请假邮件，原因是感冒", desc: "测试实际应用场景" },
                ].map((item) => (
                  <div key={item.task} className="flex items-start gap-3 rounded-lg border border-border/40 bg-background/50 p-4">
                    <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">「{item.task}」</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-amber-600 dark:text-amber-400">下一步：</strong>
                  想让它能搜索网页、读本地文件、操作表格？去
                  <Link href="/usecases" className="mx-1 font-medium text-primary hover:underline">场景案例</Link>
                  看看别人都在用它做什么，找到适合你的用法。
                </p>
              </div>
            </div>
          </section>

          {/* ═══════ 第 4 节：常见问题 FAQ ═══════ */}
          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
              <HelpCircle className="h-5 w-5 text-primary" />
              常见问题
            </h2>
            <div className="space-y-2">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="rounded-xl border border-border/60 bg-card/50 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-muted/20"
                  >
                    <span className="pr-4 text-sm font-medium text-foreground">{item.q}</span>
                    {openFaq === i
                      ? <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" />
                      : <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                    }
                  </button>
                  {openFaq === i && (
                    <div className="border-t border-border/40 px-5 py-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <p className="text-center text-xs text-muted-foreground">
            更多方式（自建服务器、Docker 等）可参考{" "}
            <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              OpenClaw 官方文档
            </a>
            。
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
