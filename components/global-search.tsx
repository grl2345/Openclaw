"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useI18n } from "@/lib/i18n"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Newspaper,
  PenLine,
  Lightbulb,
  History,
  Code2,
  Cpu,
  Rocket,
  FileText,
  Search,
} from "lucide-react"

interface SearchItem {
  id: string
  titleZh: string
  titleEn: string
  href: string
  group: string
  groupZh: string
  icon: React.ElementType
}

// Static navigation items for search
const SEARCH_ITEMS: SearchItem[] = [
  // Pages
  { id: "page-news",      titleZh: "新闻动态",          titleEn: "News & Updates",    href: "/news",          group: "pages", groupZh: "页面导航", icon: Newspaper },
  { id: "page-blog",      titleZh: "教程 & 博客",       titleEn: "Tutorials & Blog",  href: "/blog",          group: "pages", groupZh: "页面导航", icon: PenLine },
  { id: "page-skills",    titleZh: "技能库",            titleEn: "Skills Explorer",   href: "/skills",        group: "pages", groupZh: "页面导航", icon: Lightbulb },
  { id: "page-usecases",  titleZh: "场景案例",          titleEn: "Use Cases",         href: "/usecases",      group: "pages", groupZh: "页面导航", icon: FileText },
  { id: "page-changelog", titleZh: "版本更新",          titleEn: "Changelog",         href: "/changelog",     group: "pages", groupZh: "页面导航", icon: History },
  { id: "page-api-docs",  titleZh: "API 文档",          titleEn: "API Documentation", href: "/api-docs",      group: "pages", groupZh: "页面导航", icon: Code2 },
  { id: "page-api-rec",   titleZh: "模型 API 推荐",     titleEn: "Model API Pricing", href: "/api-recommend", group: "pages", groupZh: "页面导航", icon: Cpu },
  { id: "page-install",   titleZh: "安装部署教程",       titleEn: "Installation Guide",href: "/install",       group: "pages", groupZh: "页面导航", icon: Rocket },

  // Quick actions
  { id: "act-deploy",     titleZh: "如何部署 OpenClaw",         titleEn: "How to deploy OpenClaw",        href: "/install",                group: "guides", groupZh: "快速指南", icon: Rocket },
  { id: "act-feishu",     titleZh: "飞书机器人接入教程",         titleEn: "Feishu bot integration",        href: "/usecases",               group: "guides", groupZh: "快速指南", icon: FileText },
  { id: "act-skills",     titleZh: "如何安装技能",              titleEn: "How to install skills",         href: "/skills-guide",           group: "guides", groupZh: "快速指南", icon: Lightbulb },
  { id: "act-api",        titleZh: "API 快速开始",              titleEn: "API quick start",               href: "/api-docs",               group: "guides", groupZh: "快速指南", icon: Code2 },
  { id: "act-changelog",  titleZh: "最新版本更新了什么",         titleEn: "What's new in latest version",  href: "/changelog",              group: "guides", groupZh: "快速指南", icon: History },
]

export function GlobalSearch() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { locale } = useI18n()
  const isZh = locale === "zh"

  // Keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = useCallback(
    (href: string) => {
      setOpen(false)
      router.push(href)
    },
    [router],
  )

  // Group items
  const groups = SEARCH_ITEMS.reduce<Record<string, SearchItem[]>>((acc, item) => {
    if (!acc[item.group]) acc[item.group] = []
    acc[item.group].push(item)
    return acc
  }, {})

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-lg border border-border/60 bg-muted/40 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-border hover:text-foreground md:flex"
      >
        <Search className="h-3.5 w-3.5" />
        <span>{isZh ? "搜索…" : "Search…"}</span>
        <kbd className="ml-2 hidden rounded border border-border/60 bg-background px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground lg:inline-block">
          ⌘K
        </kbd>
      </button>

      {/* Mobile search icon */}
      <button
        onClick={() => setOpen(true)}
        className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground md:hidden"
      >
        <Search className="h-4 w-4" />
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={isZh ? "搜索页面、教程、功能…" : "Search pages, tutorials, features…"} />
        <CommandList>
          <CommandEmpty>
            {isZh ? "没有找到匹配结果" : "No results found"}
          </CommandEmpty>
          {Object.entries(groups).map(([groupKey, items]) => (
            <CommandGroup key={groupKey} heading={isZh ? items[0].groupZh : groupKey}>
              {items.map((item) => {
                const Icon = item.icon
                return (
                  <CommandItem
                    key={item.id}
                    value={`${item.titleZh} ${item.titleEn}`}
                    onSelect={() => handleSelect(item.href)}
                  >
                    <Icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{isZh ? item.titleZh : item.titleEn}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
