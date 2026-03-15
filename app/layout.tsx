import { cookies, headers } from "next/headers"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ClientLayout } from "@/components/client-layout"
import type { Locale } from "@/lib/i18n"
import "./globals.css"

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
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ClientLayout defaultLocale={defaultLocale}>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  )
}
