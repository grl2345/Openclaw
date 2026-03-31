"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { Mail, MessageCircle, ScanLine, User, Briefcase, Sparkles } from "lucide-react"

export default function ContactPage() {
  const { locale } = useI18n()
  const isZh = locale === "zh"

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight">
            {isZh ? "联系我们" : "Contact Us"}
          </h1>
          <p className="mt-3 text-muted-foreground">
            {isZh
              ? "欢迎通过以下方式与我们取得联系，无论是合作、反馈还是技术交流，我们都期待您的来信。"
              : "Feel free to reach out to us for collaboration, feedback, or technical discussions. We look forward to hearing from you."}
          </p>

          {/* Founder Section */}
          <section className="mt-12 rounded-xl border border-border/60 bg-card/50 p-6 sm:p-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              <div className="shrink-0">
                <Image
                  src="/contact/founder.webp"
                  alt={isZh ? "创始人照片" : "Founder photo"}
                  width={160}
                  height={160}
                  className="rounded-xl object-cover"
                  priority
                />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="flex items-center justify-center gap-2 text-xl font-semibold sm:justify-start">
                  <User className="h-5 w-5 text-primary" />
                  {isZh ? "关于作者" : "About the Author"}
                </h2>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 shrink-0 text-primary/70" />
                    {isZh ? "大厂程序员" : "Senior Engineer at Top Tech Company"}
                  </p>
                  <p className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 shrink-0 text-primary/70" />
                    {isZh ? "国内 TOP 级 AI 社群合伙人" : "Partner of Top AI Community in China"}
                  </p>
                  <p className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 shrink-0 text-primary/70" />
                    {isZh ? "专注于 AI 编程的实战" : "Focused on Practical AI Programming"}
                  </p>
                  <p className="flex items-center gap-2">
                    <ScanLine className="h-4 w-4 shrink-0 text-primary/70" />
                    {isZh ? "微信公众号「小高聊AI」主理人" : "WeChat Official Account \"小高聊AI\" Creator"}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="mt-10">
            <h2 className="text-xl font-semibold">
              {isZh ? "联系方式" : "Get in Touch"}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {/* Email */}
              <div className="flex flex-col items-center rounded-xl border border-border/60 bg-card/50 p-6 text-center">
                <Mail className="h-8 w-8 text-primary" />
                <span className="mt-3 text-sm font-medium text-foreground">
                  {isZh ? "电子邮件" : "Email"}
                </span>
                <p className="mt-1 text-xs text-muted-foreground">
                  {isZh ? "合作咨询、意见反馈" : "Collaboration & Feedback"}
                </p>
                <Link
                  href="mailto:gaoruilinbaima@gmail.com"
                  className="mt-3 text-sm text-primary transition-colors hover:underline"
                >
                  gaoruilinbaima@gmail.com
                </Link>
              </div>

              {/* WeChat Personal */}
              <div className="flex flex-col items-center rounded-xl border border-border/60 bg-card/50 p-6 text-center">
                <MessageCircle className="h-8 w-8 text-primary" />
                <span className="mt-3 text-sm font-medium text-foreground">
                  {isZh ? "加微信" : "Add WeChat"}
                </span>
                <p className="mt-1 text-xs text-muted-foreground">
                  {isZh ? "扫一扫加我为朋友" : "Scan to add as friend"}
                </p>
                <div className="mt-3 flex justify-center">
                  <Image
                    src="/contact/wechat-personal.webp"
                    alt={isZh ? "个人微信二维码" : "WeChat personal QR code"}
                    width={160}
                    height={160}
                    className="rounded-lg object-contain"
                  />
                </div>
              </div>

              {/* WeChat Official Account */}
              <div className="flex flex-col items-center rounded-xl border border-border/60 bg-card/50 p-5 text-center sm:col-span-2">
                <ScanLine className="h-8 w-8 text-primary" />
                <span className="mt-3 text-sm font-medium text-foreground">
                  {isZh ? "关注微信公众号" : "WeChat Official Account"}
                </span>
                <p className="mt-1 text-xs text-muted-foreground">
                  {isZh ? "微信搜一搜：小高聊AI" : "Search: 小高聊AI"}
                </p>
                <div className="mt-3 flex justify-center">
                  <Image
                    src="/contact/wechat-oa-xiaogao.webp"
                    alt={isZh ? "微信公众号 小高聊AI" : "WeChat OA 小高聊AI"}
                    width={160}
                    height={160}
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
