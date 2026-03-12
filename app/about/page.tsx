"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"

export default function AboutPage() {
  const { t, locale } = useI18n()
  const isZh = locale === "zh"

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight">
            {isZh ? "关于我们" : "About Us"}
          </h1>
          <div className="mt-8 space-y-6 text-muted-foreground">
            {isZh ? (
              <>
                <p>
                  OpenClaw Market 是一个开源、社区驱动的 AI 智能体用例合集，旨在帮助中文用户发现并实践 AI 的无限可能。
                </p>
                <p>
                  我们收集并整理经过社区验证的真实场景用例，覆盖飞书、钉钉、企业微信、小红书等国内生态，以及自动化办公、创意构建、研究与学习等多个领域。
                </p>
                <p>
                  欢迎在 GitHub 参与贡献，或通过反馈帮助我们持续改进。
                </p>
              </>
            ) : (
              <>
                <p>
                  OpenClaw Market is an open-source, community-driven collection of AI agent use cases, helping users discover and practice the possibilities of AI.
                </p>
                <p>
                  We curate verified real-world scenarios, covering collaboration platforms like Feishu, DingTalk, WeCom, and Xiaohongshu, as well as office automation, creative building, research, and more.
                </p>
                <p>
                  We welcome contributions on GitHub and feedback to help us improve.
                </p>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
