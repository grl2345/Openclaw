"use client"

import Script from "next/script"
import { I18nProvider } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics } from "@/components/google-analytics"
import { BusinessCoopDialog } from "@/components/business-coop-dialog"

const GA_MEASUREMENT_ID = "G-B3YR91E98N"

export function ClientLayout({
  children,
  defaultLocale,
}: {
  children: React.ReactNode
  defaultLocale: Locale
}) {
  return (
    <>
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
        <I18nProvider initialLocale={defaultLocale}>
          {children}
          <BusinessCoopDialog />
        </I18nProvider>
      </ThemeProvider>
    </>
  )
}
