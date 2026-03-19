import { cookies, headers } from "next/headers"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ClientLayout } from "@/components/client-layout"
import type { Locale } from "@/lib/i18n"
import type { Metadata, Viewport } from "next"
import "./globals.css"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OpenClaw Hub - 全网最全 OpenClaw 教程与技能导航",
    template: "%s | OpenClaw Hub",
  },
  description:
    "OpenClaw Hub 是面向新手和爱好者的一站式导航站，收录全网最全的 OpenClaw 技能、场景案例、部署教程和模型 API 推荐，帮你快速上手 AI 智能助理。",
  keywords: [
    "OpenClaw",
    "OpenClaw Hub",
    "OpenClaw 教程",
    "OpenClaw 技能",
    "OpenClaw Skills",
    "AI 助手",
    "AI Agent",
    "MCP",
    "MCP Server",
    "开源 AI",
    "ClawHub",
    "部署教程",
  ],
  authors: [{ name: "OpenClaw Hub" }],
  creator: "OpenClaw Hub",
  publisher: "OpenClaw Hub",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "OpenClaw Hub",
    title: "OpenClaw Hub - 全网最全 OpenClaw 教程与技能导航",
    description:
      "收录 800+ 精选技能、50+ 场景案例，从部署到进阶全覆盖。帮你快速上手 OpenClaw，打造真正懂你的 AI 助理。",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "OpenClaw Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Hub - 全网最全 OpenClaw 教程与技能导航",
    description:
      "收录 800+ 精选技能、50+ 场景案例，从部署到进阶全覆盖。",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "googleaa30782c42ce8f8d",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const headersList = await headers()
  const localeFromCookie = cookieStore.get("NEXT_LOCALE")?.value
  const localeFromHeader = headersList.get("x-next-locale")
  const defaultLocale: Locale =
    (localeFromCookie === "en" || localeFromCookie === "zh" ? localeFromCookie : null) ??
    (localeFromHeader === "en" || localeFromHeader === "zh" ? localeFromHeader : null) ??
    "zh"

  return (
    <html lang={defaultLocale === "zh" ? "zh-CN" : "en"} suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5612094173556578"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "OpenClaw Hub",
              url: siteUrl,
              description:
                "面向新手和爱好者的 OpenClaw 一站式导航站，收录 800+ 技能、50+ 场景案例。",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${siteUrl}/skills?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ClientLayout defaultLocale={defaultLocale}>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  )
}
