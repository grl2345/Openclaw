import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const LOCALE_COOKIE = "NEXT_LOCALE"
const LOCALE_HEADER = "x-next-locale"
const ZH_REGIONS = new Set(["CN", "HK", "TW"]) // 中国大陆、香港、台湾

export function middleware(request: NextRequest) {
  const existing = request.cookies.get(LOCALE_COOKIE)?.value
  const locale: "zh" | "en" =
    existing === "en" ? "en" : existing === "zh" ? "zh" : (() => {
      const country = request.geo?.country ?? request.headers.get("x-vercel-ip-country") ?? ""
      return ZH_REGIONS.has(country.toUpperCase()) ? "zh" : "en"
    })()

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set(LOCALE_HEADER, locale)

  const response = NextResponse.next({ request: { headers: requestHeaders } })
  response.cookies.set(LOCALE_COOKIE, locale, { path: "/", maxAge: 60 * 60 * 24 * 365 })
  return response
}
