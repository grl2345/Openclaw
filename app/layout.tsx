"use client"

import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from "@/lib/i18n"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics } from "@/components/google-analytics"
import './globals.css'

const GA_MEASUREMENT_ID = 'G-B3YR91E98N'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
})

// Metadata is defined via generateMetadata or in a separate metadata.ts file for client components

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google AdSense - 每个页面都会通过根 layout 自动包含 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5612094173556578"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
