"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useI18n } from "@/lib/i18n"
import { Home, ChevronRight } from "lucide-react"

const ROUTE_LABELS: Record<string, { zh: string; en: string }> = {
  "/news":          { zh: "新闻动态", en: "News" },
  "/blog":          { zh: "教程博客", en: "Tutorials" },
  "/skills":        { zh: "技能库", en: "Skills" },
  "/usecases":      { zh: "场景案例", en: "Use Cases" },
  "/changelog":     { zh: "版本更新", en: "Changelog" },
  "/api-docs":      { zh: "API 文档", en: "API Docs" },
  "/api-recommend": { zh: "模型 API", en: "Model API" },
  "/install":       { zh: "安装部署", en: "Install" },
  "/about":         { zh: "关于", en: "About" },
  "/contact":       { zh: "联系我们", en: "Contact" },
  "/admin":         { zh: "管理后台", en: "Admin" },
}

export function Breadcrumb() {
  const pathname = usePathname()
  const { locale } = useI18n()
  const isZh = locale === "zh"

  if (pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)
  const crumbs: { label: string; href: string }[] = []

  let currentPath = ""
  for (const seg of segments) {
    currentPath += `/${seg}`
    const route = ROUTE_LABELS[currentPath]
    crumbs.push({
      label: route ? (isZh ? route.zh : route.en) : decodeURIComponent(seg),
      href: currentPath,
    })
  }

  return (
    <nav className="flex items-center gap-1.5 py-3 text-xs text-muted-foreground">
      <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
        <Home className="h-3 w-3" />
        <span>{isZh ? "首页" : "Home"}</span>
      </Link>
      {crumbs.map((crumb, i) => (
        <span key={crumb.href} className="flex items-center gap-1.5">
          <ChevronRight className="h-3 w-3" />
          {i === crumbs.length - 1 ? (
            <span className="text-foreground font-medium">{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className="hover:text-foreground transition-colors">
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  )
}
