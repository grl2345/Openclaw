"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Heart,
  MessageCircle,
  ScanLine,
  Target,
  Users,
  ShieldCheck,
  Mail,
  Github,
  BookOpen,
  CheckCircle2,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

          {/* ── 页面标题 ───────────────────────────────────── */}
          <header className="mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Users className="h-3.5 w-3.5" />
              关于我们
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              OpenClaw Hub 是什么？
            </h1>
          </header>

          {/* ── 1. 网站使命 ─────────────────────────────────── */}
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
              <Target className="h-5 w-5 text-primary" />
              我们的使命
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                OpenClaw 是一个开源的 AI 助手框架，能部署在飞书、微信、钉钉等平台上，让普通人也能拥有自己的智能助理。
                但对于大多数用户来说，面对一个开源项目，第一反应是：「这个东西能帮我干什么？怎么装？装完以后怎么用？」
              </p>
              <p>
                <strong className="text-foreground">OpenClaw Hub 就是为了回答这三个问题而存在的。</strong>
              </p>
              <p>
                我们不是 OpenClaw 的官方文档站，而是一个独立的、社区驱动的实战指南站。
                我们的目标是把「一个开源项目的 README」翻译成「一个普通人能跟着做的教程」。
                从部署安装到场景落地，从新手入门到进阶玩法，我们提供经过实际验证的图文教程、场景案例和模型选型指南。
              </p>
              <p>
                简单说：<strong className="text-foreground">OpenClaw 负责造工具，我们负责教你怎么用好它。</strong>
              </p>
            </div>
          </section>

          {/* ── 2. 作者/团队介绍 ───────────────────────────── */}
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
              <Users className="h-5 w-5 text-primary" />
              关于作者
            </h2>
            <div className="rounded-xl border border-border/60 bg-card/50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-2xl">
                  🦞
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-foreground">小高</h3>
                  <p className="text-sm text-muted-foreground">OpenClaw Hub 站长 · 独立开发者</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    全栈工程师，专注 AI 应用开发和 AI 编程工具链。日常工作是用 AI 提效，
                    业余时间把踩过的坑整理成教程，希望帮更多人少走弯路。
                    同时运营微信公众号「小高聊AI」，分享 AI 工具实战经验。
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href="https://github.com/AlexAnys/awesome-openclaw-usecases-zh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border/50 bg-muted/30 px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-3 w-3" />
                      GitHub
                    </a>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border/50 bg-muted/30 px-2.5 py-1 text-xs text-muted-foreground">
                      <MessageCircle className="h-3 w-3" />
                      公众号：小高聊AI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── 3. 内容标准声明 ─────────────────────────────── */}
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
              <ShieldCheck className="h-5 w-5 text-primary" />
              内容标准
            </h2>
            <p className="mb-4 text-sm text-muted-foreground">
              我们对发布在 OpenClaw Hub 上的每一篇内容都有明确的质量要求：
            </p>
            <div className="space-y-3">
              {[
                { title: "实际验证", desc: "所有教程和案例都经过真实环境部署测试，确保步骤可复现。我们不搬运未验证的信息。" },
                { title: "持续更新", desc: "OpenClaw 版本迭代快，我们会跟进更新教程内容，过时的信息会标注或修订。" },
                { title: "原创为主", desc: "核心教程均为原创撰写。引用社区内容时，会标注来源并链接原文。" },
                { title: "用户视角", desc: "内容面向「想用 OpenClaw 但不知道从哪开始」的用户，避免技术黑话，说人话。" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 rounded-lg border border-border/40 bg-muted/10 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <div>
                    <span className="text-sm font-medium text-foreground">{item.title}</span>
                    <p className="mt-0.5 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4. 联系方式 ─────────────────────────────────── */}
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
              <Mail className="h-5 w-5 text-primary" />
              联系我们
            </h2>
            <p className="mb-4 text-sm text-muted-foreground">
              有任何问题、建议或合作意向，欢迎通过以下方式联系：
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="mailto:openclawhub@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/50 p-4 transition-colors hover:border-primary/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">邮箱</p>
                  <p className="text-xs text-muted-foreground">openclawhub@gmail.com</p>
                </div>
              </a>
              <a
                href="https://github.com/AlexAnys/awesome-openclaw-usecases-zh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/50 p-4 transition-colors hover:border-primary/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">GitHub</p>
                  <p className="text-xs text-muted-foreground">提 Issue 或 PR</p>
                </div>
              </a>
            </div>
          </section>

          {/* ── 5. 支持作者（放底部，不喧宾夺主） ─────────── */}
          <section className="border-t border-border/60 pt-12">
            <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Heart className="h-5 w-5 text-primary" />
              支持作者
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              如果觉得本站内容有帮助，可以请作者喝杯咖啡，或加微信交流。
            </p>
            <div className="grid gap-5 sm:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl border border-border/60 bg-card/50 p-4 text-center">
                <span className="text-xs font-medium text-foreground">打赏赞助</span>
                <p className="mt-0.5 text-[10px] text-muted-foreground">支付宝扫一扫</p>
                <div className="mt-2 flex justify-center">
                  <Image src="/contact/alipay-tip.webp" alt="支付宝打赏" width={140} height={140} className="rounded-lg object-contain" />
                </div>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-border/60 bg-card/50 p-4 text-center">
                <span className="flex items-center gap-1 text-xs font-medium text-foreground">
                  <MessageCircle className="h-3 w-3" />
                  加微信
                </span>
                <p className="mt-0.5 text-[10px] text-muted-foreground">扫一扫加好友</p>
                <div className="mt-2 flex justify-center">
                  <Image src="/contact/wechat-personal.webp" alt="个人微信" width={140} height={140} className="rounded-lg object-contain" />
                </div>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-border/60 bg-card/50 p-4 text-center sm:col-span-2 sm:col-start-1 lg:col-span-1">
                <span className="flex items-center gap-1 text-xs font-medium text-foreground">
                  <ScanLine className="h-3 w-3" />
                  公众号
                </span>
                <p className="mt-0.5 text-[10px] text-muted-foreground">微信搜：小高聊AI</p>
                <div className="mt-2 flex justify-center">
                  <Image src="/contact/wechat-oa-xiaogao.webp" alt="公众号 小高聊AI" width={140} height={140} className="rounded-lg object-contain" />
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}
