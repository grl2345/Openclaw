"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { LobsterIcon } from "@/components/lobster-icon"
import { useI18n } from "@/lib/i18n"
import {
  Menu,
  X,
  Github,
  Sun,
  Moon,
  Lightbulb,
  Cpu,
  Newspaper,
  PenLine,
  History,

  Rocket,
  Layout,
  Info,
  ChevronRight,
} from "lucide-react"
import { useState, useEffect } from "react"
import { GlobalSearch } from "@/components/global-search"

const navItems = [
  { href: "/skills",        labelZh: "技能库",    labelEn: "Skills",     icon: Lightbulb },
  { href: "/news",          labelZh: "新闻动态",  labelEn: "News",       icon: Newspaper },
  { href: "/blog",          labelZh: "教程",      labelEn: "Tutorials",  icon: PenLine   },
  { href: "/usecases",      labelZh: "场景案例",  labelEn: "Use Cases",  icon: Layout    },
  { href: "/changelog",     labelZh: "版本更新",  labelEn: "Changelog",  icon: History   },

  { href: "/api-recommend", labelZh: "模型 API",  labelEn: "Model API",  icon: Cpu       },
  { href: "/about",         labelZh: "关于",      labelEn: "About",      icon: Info      },
] as const

export function Header() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const { locale } = useI18n()
  const isZh = locale === "zh"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-6 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 shrink-0">
          <LobsterIcon size={28} className="text-primary" />
          <span className="text-base font-bold text-foreground hidden sm:inline">OpenClaw Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 md:flex flex-1 min-w-0">
          {navItems.map(({ href, labelZh, labelEn, icon: Icon }) => {
            const active = isActive(href)
            return (
              <Link
                key={href}
                href={href}
                className={`relative flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[13px] font-medium whitespace-nowrap transition-all ${
                  active
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{isZh ? labelZh : labelEn}</span>
              </Link>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1 shrink-0 ml-auto">
          <GlobalSearch />

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-8 w-8"
          >
            {mounted ? (
              theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />
            ) : (
              <Moon className="h-3.5 w-3.5" />
            )}
          </Button>

          <Button variant="ghost" size="icon" asChild className="h-8 w-8">
            <Link
              href="https://github.com/AlexAnys/awesome-openclaw-usecases-zh"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <Github className="h-3.5 w-3.5" />
            </Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="animate-in slide-in-from-top-2 border-t border-border/40 bg-background/98 backdrop-blur-xl md:hidden">
          <nav className="mx-auto max-w-lg space-y-1 p-3">
            {navItems.map(({ href, labelZh, labelEn, icon: Icon }) => {
              const active = isActive(href)
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    active
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <div className={`flex h-7 w-7 items-center justify-center rounded-md ${active ? "bg-primary/20" : "bg-muted"}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="flex-1">{isZh ? labelZh : labelEn}</span>
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
