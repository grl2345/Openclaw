"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { LobsterIcon } from "@/components/lobster-icon"
import {
  Menu,
  X,
  Github,
  Sun,
  Moon,
  Rocket,
  Lightbulb,
  Cpu,
  Info,
  ChevronRight,
  PenLine,
  Newspaper,
  History,
} from "lucide-react"
import { useState, useEffect } from "react"
import { GlobalSearch } from "@/components/global-search"

const navItems = [
  { href: "/news",          label: "新闻动态", labelEn: "News",      icon: Newspaper },
  { href: "/blog",          label: "教程",     labelEn: "Tutorials", icon: PenLine   },
  { href: "/skills",        label: "技能库",   labelEn: "Skills",    icon: Lightbulb },
  { href: "/changelog",     label: "版本更新", labelEn: "Changelog", icon: History   },
  { href: "/api-recommend", label: "模型 API", labelEn: "Model API", icon: Cpu       },
  { href: "/about",         label: "关于",     labelEn: "About",     icon: Info      },
] as const

export function Header() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/90 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
            <LobsterIcon size={28} className="text-primary" />
          </div>
          <span className="text-base font-bold text-foreground sm:text-lg">OpenClaw Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = isActive(href)
            return (
              <Link
                key={href}
                href={href}
                className={`relative flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-all ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
                {active && (
                  <span className="absolute -bottom-[11px] left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1">
          <GlobalSearch />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "切换到明亮模式" : "切换到暗色模式"}
            className="h-8 w-8 shrink-0"
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
            className="ml-0.5 h-8 w-8 md:hidden"
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
            {navItems.map(({ href, label, icon: Icon }) => {
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
                  <span className="flex-1">{label}</span>
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
