"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { Heart, MessageCircle, ScanLine } from "lucide-react"

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

          {/* 支持作者：打赏、加微信、公众号 */}
          <section id="support" className="mt-16 scroll-mt-24 border-t border-border/60 pt-12">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
              <Heart className="h-5 w-5 text-primary" />
              {isZh ? "支持作者" : "Support"}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {isZh ? "喜欢本站内容？可以打赏赞助作者，或加微信、关注公众号交流。" : "Enjoy the site? Tip the author, add WeChat, or follow our official account."}
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl border border-border/60 bg-card/50 p-5 text-center">
                <span className="text-sm font-medium text-foreground">
                  {isZh ? "打赏赞助作者" : "Tip the author"}
                </span>
                <p className="mt-1 text-xs text-muted-foreground">
                  {isZh ? "支付宝扫一扫" : "Alipay scan"}
                </p>
                <div className="mt-3 flex justify-center">
                  <Image
                    src="/contact/alipay-tip.png"
                    alt={isZh ? "支付宝打赏二维码" : "Alipay tip QR code"}
                    width={180}
                    height={180}
                    className="rounded-lg object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-border/60 bg-card/50 p-5 text-center">
                <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <MessageCircle className="h-4 w-4" />
                  {isZh ? "加微信" : "Add WeChat"}
                </span>
                <p className="mt-1 text-xs text-muted-foreground">
                  {isZh ? "扫一扫加我为朋友" : "Scan to add as friend"}
                </p>
                <div className="mt-3 flex justify-center">
                  <Image
                    src="/contact/wechat-personal.png"
                    alt={isZh ? "个人微信二维码" : "WeChat personal QR code"}
                    width={180}
                    height={180}
                    className="rounded-lg object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-border/60 bg-card/50 p-5 text-center sm:col-span-2 lg:col-span-1">
                <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <ScanLine className="h-4 w-4" />
                  {isZh ? "关注微信公众号" : "WeChat official account"}
                </span>
                <p className="mt-1 text-xs text-muted-foreground">
                  {isZh ? "微信搜一搜：小高聊AI" : "Search: 小高聊AI"}
                </p>
                <div className="mt-3 flex justify-center">
                  <Image
                    src="/contact/wechat-oa-xiaogao.png"
                    alt={isZh ? "微信公众号 小高聊AI" : "WeChat OA 小高聊AI"}
                    width={180}
                    height={180}
                    className="rounded-lg object-contain"
                  />
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
