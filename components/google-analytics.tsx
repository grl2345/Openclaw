"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

const GA_MEASUREMENT_ID = "G-B3YR91E98N"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined" || !pathname) return
    if (typeof window.gtag !== "function") return

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: pathname,
    })
  }, [pathname])

  return null
}
