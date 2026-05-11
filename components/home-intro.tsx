"use client"

import { useI18n } from "@/lib/i18n"
import Link from "next/link"
import { BookOpen, Compass, Wrench, Users } from "lucide-react"

/**
 * HomeIntro — 首页正文介绍区
 *
 * 目的：为爬虫和审核机器人提供足量、原创、可索引的中英双语正文，
 * 解决 AdSense / 搜索引擎判定"内容稀缺"的问题。
 * 内容覆盖：站点定位、目标读者、栏目结构、内容来源与原创补充说明。
 */
export function HomeIntro() {
  const { locale } = useI18n()
  const isZh = locale === "zh"

  const pillars = isZh
    ? [
        {
          icon: BookOpen,
          title: "系统化教程",
          desc:
            "从 OpenClaw 的基本概念、安装方式、常用配置，到进阶的 MCP Server 接入、自定义技能开发，我们把分散在官方文档、GitHub Issue 和社区博客里的知识整理成循序渐进的教程，让新手不会迷路。",
        },
        {
          icon: Compass,
          title: "真实场景案例",
          desc:
            "67+ 个经过整理的实战用例，覆盖代码生成、数据分析、自动化办公、内容创作等高频场景。每个用例都包含前置要求、实现步骤和易踩的坑，方便你照着复刻。",
        },
        {
          icon: Wrench,
          title: "精选技能与插件",
          desc:
            "我们从社区与官方仓库筛选出 800+ 个高质量技能（Skills / Plugins / MCP Servers），按「开发」「数据」「办公」「创意」等 25 个分类组织，附上简介、适用版本和原始链接。",
        },
        {
          icon: Users,
          title: "为新手而生",
          desc:
            "我们假设读者刚接触 AI 助理，所以每篇内容都解释为什么这样做、踩坑提示和最低可运行示例，不堆砌术语，不复制粘贴官方文档。",
        },
      ]
    : [
        {
          icon: BookOpen,
          title: "Structured Tutorials",
          desc:
            "From the basics of OpenClaw, installation and configuration, to advanced MCP Server integration and custom skill development — we consolidate knowledge that is otherwise scattered across official docs, GitHub issues and community blog posts into step-by-step guides.",
        },
        {
          icon: Compass,
          title: "Hands-on Use Cases",
          desc:
            "67+ curated real-world use cases covering code generation, data analysis, office automation and content creation. Each case ships with prerequisites, step-by-step instructions and the pitfalls we hit in practice.",
        },
        {
          icon: Wrench,
          title: "Curated Skills & Plugins",
          desc:
            "800+ high-quality skills (plugins / MCP servers) hand-picked from the community and official repos, organised across 25 categories such as Development, Data, Productivity and Creative — each with a description, supported version and source link.",
        },
        {
          icon: Users,
          title: "Built for Beginners",
          desc:
            "We assume the reader is new to AI assistants, so every article explains the why, calls out common pitfalls and provides a minimum working example — no jargon-piling, no copy-pasted official docs.",
        },
      ]

  return (
    <section
      aria-labelledby="home-intro-heading"
      className="mx-auto mt-6 mb-10 max-w-5xl rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-8"
    >
      <h2
        id="home-intro-heading"
        className="mb-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl"
      >
        {isZh
          ? "OpenClaw Hub —— 中文 OpenClaw 用户的一站式学习与导航站"
          : "OpenClaw Hub — The one-stop learning hub for OpenClaw users"}
      </h2>

      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {isZh ? (
          <>
            <p>
              OpenClaw 是一个面向开发者与重度用户的开源 AI 助理框架。它通过"技能（Skills）"机制把
              大语言模型连接到本地工具、API 和数据源，让 AI 不再只是一个聊天框，而是真正
              能写代码、查数据、写报告、执行命令的工作伙伴。但对于刚接触它的新人来说，零散的
              GitHub 仓库、官方 changelog 和分散在论坛的安装坑点，常常让人不知道从哪里开始。
            </p>
            <p>
              <strong className="text-foreground">OpenClaw Hub</strong> 就是为了解决这件事而做。
              我们围绕「看懂、装上、用起来、用得好」四个阶段，把社区里最有价值的内容重新
              整理、补充原创注释，做成可读、可复用的中文教程：覆盖 Windows / macOS / Linux 三端
              安装、常用模型 API（OpenAI、Anthropic、DeepSeek、阿里通义、智谱等）的接入对比、
              25 个细分领域共 800+ 个技能的中文化整理，以及 67+ 个端到端用例。
            </p>
            <p>
              所有内容均署名标注来源；外部仓库的部分我们只引用必要的代码片段，重点在补充
              <strong className="text-foreground">原创解读、对比测评和踩坑记录</strong>。
              我们不抓取、不洗稿、不堆关键词，只发布我们自己实际验证过的内容。
              站点持续更新，欢迎通过{" "}
              <Link href="/contact" className="text-primary hover:underline">
                联系我们
              </Link>{" "}
              页面提交建议或纠错。
            </p>
          </>
        ) : (
          <>
            <p>
              OpenClaw is an open-source AI assistant framework aimed at developers and power
              users. Through its "Skills" mechanism it connects large language models to local
              tools, APIs and data sources, turning the model from a chat box into a real
              working partner that writes code, queries data, drafts reports and runs commands
              for you. For newcomers, though, the scattered GitHub repos, official changelogs
              and forum threads make it hard to know where to start.
            </p>
            <p>
              <strong className="text-foreground">OpenClaw Hub</strong> exists to fix that. We
              organise the most valuable community content around four stages — understand,
              install, use, master — and re-write it as readable, reusable English / Chinese
              tutorials: installation on Windows, macOS and Linux; comparison guides for the
              most popular model APIs (OpenAI, Anthropic, DeepSeek, Qwen, GLM and more);
              localised summaries of 800+ skills across 25 categories; and 67+ end-to-end use
              cases.
            </p>
            <p>
              Every piece of content credits its source. For external repositories we only
              quote the minimum necessary snippets — the value we add lies in our{" "}
              <strong className="text-foreground">
                original commentary, benchmarks and pitfall notes
              </strong>
              . We do not scrape, spin or keyword-stuff; we only publish what we have actually
              verified ourselves. The site is updated continuously — feedback and corrections
              are welcome via our{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact page
              </Link>
              .
            </p>
          </>
        )}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {pillars.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-xl border border-border/50 bg-background/50 p-4"
          >
            <div className="mb-2 flex items-center gap-2 text-primary">
              <Icon className="h-4 w-4" />
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <Link
          href="/install"
          className="rounded-lg border border-border/60 bg-background/60 px-3 py-1.5 text-foreground transition-colors hover:bg-background"
        >
          {isZh ? "新手安装指南 →" : "Installation guide →"}
        </Link>
        <Link
          href="/skills"
          className="rounded-lg border border-border/60 bg-background/60 px-3 py-1.5 text-foreground transition-colors hover:bg-background"
        >
          {isZh ? "浏览全部技能 →" : "Browse all skills →"}
        </Link>
        <Link
          href="/usecases"
          className="rounded-lg border border-border/60 bg-background/60 px-3 py-1.5 text-foreground transition-colors hover:bg-background"
        >
          {isZh ? "查看实战用例 →" : "See use cases →"}
        </Link>
        <Link
          href="/blog"
          className="rounded-lg border border-border/60 bg-background/60 px-3 py-1.5 text-foreground transition-colors hover:bg-background"
        >
          {isZh ? "原创博客 →" : "Read the blog →"}
        </Link>
      </div>
    </section>
  )
}
