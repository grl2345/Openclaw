"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import {
  PenLine,
  Lightbulb,
  Newspaper,
  History,
  Code2,
  Cpu,
  Rocket,
  BookOpen,
  Layout,
  ChevronRight,
  ChevronDown,
  Wrench,
  Globe,
  MessageSquare,
  Database,
  BarChart3,
  Brain,
  CreditCard,
  Share2,
  Shield,
  Megaphone,
  Film,
  Monitor,
  GraduationCap,
  Heart,
  Wifi,
  Gamepad2,
  ShoppingCart,
  Palette,
  FileText,
  Languages,
  Terminal,
  Search,
  Calendar,
  StickyNote,
} from "lucide-react"

export interface SidebarCategory {
  id: string
  labelZh: string
  labelEn: string
  icon: React.ElementType
  href?: string
  children?: { id: string; labelZh: string; labelEn: string; href: string }[]
}

export const SIDEBAR_CATEGORIES: SidebarCategory[] = [
  {
    id: "getting-started",
    labelZh: "新手上手",
    labelEn: "Get Started",
    icon: Rocket,
    href: "/install",
  },
  {
    id: "tutorials",
    labelZh: "教程博客",
    labelEn: "Tutorials",
    icon: PenLine,
    href: "/blog",
  },
  {
    id: "news",
    labelZh: "新闻动态",
    labelEn: "News",
    icon: Newspaper,
    href: "/news",
  },
  {
    id: "skills",
    labelZh: "技能库",
    labelEn: "Skills",
    icon: Lightbulb,
    href: "/skills",
    children: [
      { id: "sk-git", labelZh: "Git 与代码", labelEn: "Git & Code", href: "/skills?cat=git" },
      { id: "sk-productivity", labelZh: "效率办公", labelEn: "Productivity", href: "/skills?cat=productivity" },
      { id: "sk-communication", labelZh: "沟通协作", labelEn: "Communication", href: "/skills?cat=communication" },
      { id: "sk-devops", labelZh: "开发运维", labelEn: "DevOps", href: "/skills?cat=devops" },
      { id: "sk-search", labelZh: "搜索调研", labelEn: "Search", href: "/skills?cat=search" },
      { id: "sk-notes", labelZh: "笔记 PKM", labelEn: "Notes", href: "/skills?cat=notes" },
    ],
  },
  {
    id: "usecases",
    labelZh: "场景案例",
    labelEn: "Use Cases",
    icon: Layout,
    href: "/usecases",
  },
  {
    id: "changelog",
    labelZh: "版本更新",
    labelEn: "Changelog",
    icon: History,
    href: "/changelog",
  },
  {
    id: "api-docs",
    labelZh: "API 文档",
    labelEn: "API Docs",
    icon: Code2,
    href: "/api-docs",
  },
  {
    id: "api-recommend",
    labelZh: "模型 API",
    labelEn: "Model API",
    icon: Cpu,
    href: "/api-recommend",
  },
]

export function LeftSidebar() {
  const pathname = usePathname()
  const { locale } = useI18n()
  const isZh = locale === "zh"
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const isActive = (href?: string) => {
    if (!href) return false
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href.split("?")[0] + "/")
  }

  return (
    <aside className="hidden lg:block w-56 shrink-0">
      <div className="sticky top-[4.5rem] max-h-[calc(100vh-5rem)] overflow-y-auto pb-8">
        <nav className="space-y-0.5 py-4">
          {SIDEBAR_CATEGORIES.map((cat) => {
            const Icon = cat.icon
            const active = isActive(cat.href)
            const hasChildren = cat.children && cat.children.length > 0
            const isExpanded = expandedIds.has(cat.id)

            return (
              <div key={cat.id}>
                <div className="flex items-center">
                  <Link
                    href={cat.href || "#"}
                    className={`flex flex-1 items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                      active
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-foreground/70 hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{isZh ? cat.labelZh : cat.labelEn}</span>
                  </Link>
                  {hasChildren && (
                    <button
                      onClick={() => toggleExpand(cat.id)}
                      className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {hasChildren && isExpanded && (
                  <div className="ml-4 mt-0.5 space-y-0.5 border-l border-border/40 pl-3">
                    {cat.children!.map((child) => (
                      <Link
                        key={child.id}
                        href={child.href}
                        className="block rounded-md px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {isZh ? child.labelZh : child.labelEn}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
