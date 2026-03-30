"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useI18n } from "@/lib/i18n"
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
} from "lucide-react"

const MIAODA_URL = "https://miaoda.feishu.cn/home"
const WORKBUDDY_URL = "https://www.codebuddy.cn/work/"

const IMG_STEP = { w: 560, h: 373 }
const IMG_TALL = { w: 560, h: 420 }

export default function InstallPage() {
  const { locale } = useI18n()
  const isZh = locale === "zh"
  const [showDecisionTable, setShowDecisionTable] = useState(false)

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
                {isZh ? "部署安装" : "Install & Deploy"}
              </div>
              <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {isZh ? "OpenClaw 部署安装指南" : "OpenClaw Installation Guide"}
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {isZh
                  ? "从零到能用，两种零门槛方式任你选。飞书约 1 分钟、微信约 5 分钟，跟着做就行。"
                  : "From zero to running. Two easy options: Feishu ~1 min, WeChat ~5 min. Just follow the steps."}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">

          {/* 新手推荐：两种最简单方式 */}
          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-2 text-lg font-bold">
              <Sparkles className="h-5 w-5 text-primary" />
              {isZh ? "新手推荐：最简单的两种方式" : "Recommended: Two Easiest Options"}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {/* 飞书秒搭 */}
              <a href="#guide-feishu" className="group relative overflow-hidden rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute right-4 top-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {isZh ? "约 1 分钟" : "~1 min"}
                </div>
                <div className="mb-3 text-3xl">🔵</div>
                <h3 className="mb-2 text-lg font-semibold group-hover:text-primary transition-colors">
                  {isZh ? "飞书秒搭" : "Feishu Miaoda"}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {isZh
                    ? "一键部署到飞书，自动创建机器人。零命令行，最适合新手。"
                    : "One-click deploy to Feishu. Zero CLI, best for beginners."}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium text-primary">
                  {isZh ? "查看教程" : "View tutorial"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>

              {/* 微信 WorkBuddy */}
              <a href="#guide-wechat" className="group relative overflow-hidden rounded-xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-transparent p-6 transition-all hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10">
                <div className="absolute right-4 top-4 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  {isZh ? "约 5 分钟" : "~5 min"}
                </div>
                <div className="mb-3 text-3xl">💬</div>
                <h3 className="mb-2 text-lg font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {isZh ? "微信 + WorkBuddy" : "WeChat + WorkBuddy"}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {isZh
                    ? "在微信里发消息使唤龙虾。装上桌面工具，绑定微信即可。"
                    : "Chat with OpenClaw in WeChat. Install desktop tool, bind WeChat."}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  {isZh ? "查看教程" : "View tutorial"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </div>
          </section>

          {/* 选择决策：本地还是云端 */}
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
                  <h3 className="font-semibold text-foreground">
                    {isZh ? "不确定选哪种？看决策表 →" : "Not sure which? Decision table →"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isZh ? "根据你的需求场景，推荐最适合的部署方式" : "Recommend the best deployment based on your needs"}
                  </p>
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
                      <span className="font-medium text-foreground">{isZh ? "本地部署（微信方式）" : "Local (WeChat)"}</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />{isZh ? "直接读写本地文件" : "Direct local file access"}</li>
                      <li className="flex items-start gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />{isZh ? "数据在自己手里，更隐私" : "Data stays on your machine"}</li>
                      <li className="flex items-start gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />{isZh ? "不用额外付云服务器费" : "No cloud server cost"}</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-border/50 bg-muted/20 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-blue-500" />
                      <span className="font-medium text-foreground">{isZh ? "云端部署（飞书方式）" : "Cloud (Feishu)"}</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li className="flex items-start gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500" />{isZh ? "24 小时在线，不占本地" : "24/7 online, no local load"}</li>
                      <li className="flex items-start gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500" />{isZh ? "手机随时访问" : "Access from any device"}</li>
                      <li className="flex items-start gap-1.5"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500" />{isZh ? "团队共享使用" : "Team sharing"}</li>
                    </ul>
                  </div>
                </div>
                <div className="overflow-x-auto border-t border-border/40">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-border/40 bg-muted/20">
                        <th className="px-5 py-3 font-medium text-foreground">{isZh ? "你的情况" : "Your Scenario"}</th>
                        <th className="px-5 py-3 font-medium text-foreground">{isZh ? "推荐" : "Pick"}</th>
                        <th className="px-5 py-3 font-medium text-foreground">{isZh ? "原因" : "Why"}</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      {[
                        { scene: isZh ? "写代码、改本地文档" : "Code & local files", pick: isZh ? "微信方式" : "WeChat", why: isZh ? "直接读写文件" : "Direct file I/O" },
                        { scene: isZh ? "随时微信/手机访问" : "Anytime mobile access", pick: isZh ? "飞书方式" : "Feishu", why: isZh ? "不受电脑开关限制" : "Always available" },
                        { scene: isZh ? "对隐私要求高" : "Privacy sensitive", pick: isZh ? "微信方式" : "WeChat", why: isZh ? "数据不出本机" : "Data stays local" },
                        { scene: isZh ? "不想家里电脑一直开着" : "Don't want PC on 24/7", pick: isZh ? "飞书方式" : "Feishu", why: isZh ? "云服务器 24h 在线" : "Cloud is always on" },
                        { scene: isZh ? "完全不想折腾命令行" : "Don't want CLI", pick: isZh ? "飞书方式" : "Feishu", why: isZh ? "一键创建，零配置" : "One-click, zero config" },
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

          {/* 图文详细教程 */}
          <section className="mb-12" id="guide-feishu">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
              <Play className="h-5 w-5 text-primary" />
              {isZh ? "图文详细教程" : "Step-by-Step Guides"}
            </h2>

            <Tabs defaultValue="feishu" className="w-full">
              <TabsList className="mb-6 flex h-auto w-fit gap-2 bg-transparent p-0">
                <TabsTrigger
                  value="feishu"
                  className="gap-2 rounded-full border border-border/60 bg-card/50 px-5 py-2.5 text-sm font-medium data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  🔵 {isZh ? "飞书秒搭" : "Feishu Miaoda"}
                </TabsTrigger>
                <TabsTrigger
                  value="wechat"
                  className="gap-2 rounded-full border border-border/60 bg-card/50 px-5 py-2.5 text-sm font-medium data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  💬 {isZh ? "微信 WorkBuddy" : "WeChat WorkBuddy"}
                </TabsTrigger>
              </TabsList>

              {/* 飞书教程 */}
              <TabsContent value="feishu" className="mt-0">
                <div className="rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm sm:p-8">
                  <h3 className="mb-6 text-lg font-semibold">
                    {isZh ? "飞书秒搭 · 三步搞定（约 1 分钟）" : "Feishu Miaoda · 3 Steps (~1 min)"}
                  </h3>

                  {/* Step 1 */}
                  <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</span>
                      <span className="font-medium text-foreground">
                        {isZh ? "打开飞书秒搭，点「创建」OpenClaw 智能助手" : "Open Feishu Miaoda, click Create"}
                      </span>
                    </div>
                  <p className="mb-4 pl-6 text-sm text-muted-foreground sm:pl-11">
                      {isZh ? "打开官网，找到「OpenClaw 智能助手」，点右侧蓝色「创建」按钮。" : "Open the link, find OpenClaw Smart Assistant, click Create."}
                    </p>
                  <figure className="ml-0 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50 sm:ml-11">
                      <Image src="/install/feishu-miaoda-1.webp" alt="飞书秒搭创建" width={IMG_STEP.w} height={IMG_STEP.h} className="w-full object-contain" priority sizes="(max-width: 560px) 100vw, 560px" />
                    </figure>
                  </div>

                  {/* Step 2 */}
                  <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</span>
                      <span className="font-medium text-foreground">
                        {isZh ? "等约 1 分钟，自动部署完成" : "Wait ~1 min for auto deployment"}
                      </span>
                    </div>
                  <p className="mb-4 pl-6 text-sm text-muted-foreground sm:pl-11">
                      {isZh ? "页面会显示启动进度，全程自动，无需操作。看到「已连接」就成功了。" : "Progress auto-runs. When you see 'Connected', you're done."}
                    </p>
                  <div className="ml-0 space-y-3 sm:ml-11">
                      <figure className="max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50">
                        <Image src="/install/feishu-miaoda-2.webp" alt="部署进度" width={IMG_STEP.w} height={IMG_STEP.h} className="w-full object-contain" sizes="(max-width: 560px) 100vw, 560px" />
                      </figure>
                      <figure className="max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50">
                        <Image src="/install/feishu-miaoda-3.webp" alt="连接成功" width={IMG_STEP.w} height={IMG_STEP.h} className="w-full object-contain" sizes="(max-width: 560px) 100vw, 560px" />
                      </figure>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">3</span>
                      <span className="font-medium text-foreground">
                        {isZh ? "在飞书里和机器人对话" : "Chat with the bot in Feishu"}
                      </span>
                    </div>
                    <p className="mb-4 pl-11 text-sm text-muted-foreground">
                      {isZh ? "打开飞书，在聊天里找到 OpenClaw 助手，直接发消息即可。" : "Open Feishu, find OpenClaw in chat, start messaging."}
                    </p>
                    <figure className="ml-11 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50">
                      <Image src="/install/feishu-miaoda-5.webp" alt="飞书对话" width={IMG_STEP.w} height={IMG_TALL.h} className="w-full object-contain" sizes="(max-width: 560px) 100vw, 560px" />
                    </figure>
                  </div>

                  {/* 小贴士 */}
                  <div className="mb-8 rounded-lg border border-border/50 bg-muted/20 p-4">
                    <p className="text-sm font-medium text-foreground">
                      {isZh ? "💡 想换模型？" : "💡 Want to change model?"}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {isZh
                        ? "默认是妙搭的自动模型。在飞书秒搭的「管理智能助手」里，用对话告诉助手「换一个模型」并重启即可。"
                        : "Default is Miaoda auto model. In Manage assistant, tell it to switch model and restart."}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      {isZh ? "准备好就点下面按钮，去飞书秒搭创建你的 OpenClaw：" : "Click below to create your OpenClaw:"}
                    </p>
                    <a href={MIAODA_URL} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="gap-2">
                        {isZh ? "打开飞书秒搭 · 创建" : "Open Feishu Miaoda"}
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </TabsContent>

              {/* 微信教程 */}
              <TabsContent value="wechat" className="mt-0">
                <div className="rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm sm:p-8" id="guide-wechat">
                  <h3 className="mb-6 text-lg font-semibold">
                    {isZh ? "微信 + WorkBuddy · 四步搞定（约 5 分钟）" : "WeChat + WorkBuddy · 4 Steps (~5 min)"}
                  </h3>

                  {/* Step 1 */}
                  <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">1</span>
                      <span className="font-medium text-foreground">
                        {isZh ? "下载并安装 WorkBuddy" : "Download and install WorkBuddy"}
                      </span>
                    </div>
                    <p className="mb-4 pl-11 text-sm text-muted-foreground">
                      {isZh ? "打开下载页，安装时一路点「下一步」即可。" : "Open download page, click Next through installer."}
                    </p>
                    <figure className="ml-11 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50">
                      <Image src="/install/wechat-workbuddy-1.webp" alt="WorkBuddy 下载" width={IMG_STEP.w} height={IMG_STEP.h} className="w-full object-contain" sizes="(max-width: 560px) 100vw, 560px" />
                    </figure>
                    <a
                      href={WORKBUDDY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-11 mt-2 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                    >
                      {isZh ? "打开 WorkBuddy 下载页" : "Open WorkBuddy download"}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Step 2 */}
                  <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">2</span>
                      <span className="font-medium text-foreground">
                        {isZh ? "打开 WorkBuddy，微信扫码登录" : "Open WorkBuddy, scan with WeChat"}
                      </span>
                    </div>
                    <p className="mb-4 pl-11 text-sm text-muted-foreground">
                      {isZh ? "打开软件后点「登录」，浏览器弹出页面，用微信扫一扫即可。" : "Click Login, scan the QR code with WeChat to sign in."}
                    </p>
                    <figure className="ml-11 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50">
                      <Image src="/install/wechat-workbuddy-2.webp" alt="WorkBuddy 登录" width={IMG_STEP.w} height={IMG_TALL.h} className="w-full object-contain" sizes="(max-width: 560px) 100vw, 560px" />
                    </figure>
                  </div>

                  {/* Step 3 */}
                  <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">3</span>
                      <span className="font-medium text-foreground">
                        {isZh ? "绑定微信号" : "Bind WeChat account"}
                      </span>
                    </div>
                    <p className="mb-4 pl-11 text-sm text-muted-foreground">
                      {isZh
                        ? "头像 → Claw 设置 → 微信客服号集成 → 配置 → 扫码绑定。看到「已绑定」就成功了。"
                        : "Avatar → Claw Settings → WeChat integration → Configure → Scan. 'Bound' means success."}
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

                  {/* Step 4 */}
                  <div className="mb-8">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">4</span>
                      <span className="font-medium text-foreground">
                        {isZh ? "在微信里和龙虾聊天" : "Chat in WeChat"}
                      </span>
                    </div>
                    <p className="mb-4 pl-11 text-sm text-muted-foreground">
                      {isZh
                        ? "配好了！注意：电脑和 WorkBuddy 都要开着才能收到消息。合上笔记本或关掉软件就收不到了。"
                        : "All set! Keep your PC and WorkBuddy running to receive messages."}
                    </p>
                    <figure className="ml-11 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50">
                      <Image src="/install/wechat-workbuddy-6.webp" alt="微信对话" width={IMG_STEP.w} height={IMG_TALL.h} className="w-full object-contain" sizes="(max-width: 560px) 100vw, 560px" />
                    </figure>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center">
                    <a href={WORKBUDDY_URL} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                        {isZh ? "打开 WorkBuddy 下载页" : "Download WorkBuddy"}
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* 部署完成提示 */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
            <h3 className="mb-2 font-semibold text-foreground">
              {isZh ? "部署完成后，别忘了安装必装 Skills" : "After deployment, install required Skills"}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              {isZh ? "默认仅具备基础对话能力，安装 Skills 才能解锁搜索、办公、写代码等实操功能。" : "Default is basic chat only. Install Skills to unlock search, productivity, coding, etc."}
            </p>
            <Link href="/skills">
              <Button variant="outline" className="gap-2">
                {isZh ? "去选技能" : "Browse Skills"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            {isZh ? "更多方式（自建服务器、Docker 等）可参考 OpenClaw 官方文档。" : "For self-hosted or Docker, see OpenClaw official docs."}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
