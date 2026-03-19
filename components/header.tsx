"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { LobsterIcon } from "@/components/lobster-icon"
import {
  Menu,
  X,
  Github,
  Globe,
  Sun,
  Moon,
  Rocket,
  Download,
  Lightbulb,
  Puzzle,
  Cpu,
  BookOpen,
  Info,
  Zap,
  ChevronRight,
} from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { href: "/#quickstart", key: "nav.quickstart", icon: Rocket, group: "start" },
  { href: "/install", key: "nav.install", icon: Download, group: "start" },
  { href: "/skills", key: "nav.skills", icon: Puzzle, group: "browse" },
  { href: "/usecases", key: "nav.usecases", icon: Lightbulb, group: "browse" },
  { href: "/api-recommend", key: "nav.apiRecommend", icon: Cpu, group: "more" },
  { href: "/news", key: "nav.news", icon: BookOpen, group: "more" },
  { href: "/about", key: "nav.about", icon: Info, group: "more" },
] as const

export function Header() {
  const { t, locale, setLocale } = useI18n()
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const toggleLocale = () => setLocale(locale === "zh" ? "en" : "zh")
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/90 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
            <LobsterIcon size={24} className="text-primary" />
          </div>
          <span className="text-sm font-bold text-foreground sm:text-base">{t("brand.name")}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center md:flex">
          {/* Start group */}
          <div className="flex items-center">
            {navItems
              .filter((item) => item.group === "start")
              .map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                const Comp = item.href.startsWith("/#") ? "a" : Link
                return (
                  <Comp
                    key={item.key}
                    href={item.href}
                    className={`relative flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[13px] font-medium transition-all ${
                      active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{t(item.key)}</span>
                    {active && (
                      <span className="absolute -bottom-[13px] left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
                    )}
                  </Comp>
                )
              })}
          </div>

          <span className="mx-1.5 h-4 w-px bg-border/50" aria-hidden />

          {/* Browse group */}
          <div className="flex items-center">
            {navItems
              .filter((item) => item.group === "browse")
              .map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`relative flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[13px] font-medium transition-all ${
                      active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{t(item.key)}</span>
                    {active && (
                      <span className="absolute -bottom-[13px] left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
                    )}
                  </Link>
                )
              })}
          </div>

          <span className="mx-1.5 h-4 w-px bg-border/50" aria-hidden />

          {/* More group */}
          <div className="flex items-center">
            {navItems
              .filter((item) => item.group === "more")
              .map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`relative flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[13px] font-medium transition-all ${
                      active
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{t(item.key)}</span>
                    {active && (
                      <span className="absolute -bottom-[13px] left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
                    )}
                  </Link>
                )
              })}
          </div>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1">
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
          <Button variant="ghost" size="icon" onClick={toggleLocale} className="h-8 w-8" title={t("lang.switch")}>
            <Globe className="h-3.5 w-3.5" />
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

          {/* Quick Start CTA - desktop only */}
          <Link
            href="/#quickstart"
            className="ml-1.5 hidden items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md md:inline-flex"
          >
            <Zap className="h-3 w-3" />
            {t("nav.quickstart.cta")}
          </Link>

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
            {/* Start group */}
            <p className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-widest text-primary/70">
              {t("nav.group.start")}
            </p>
            {navItems
              .filter((item) => item.group === "start")
              .map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                const Comp = item.href.startsWith("/#") ? "a" : Link
                return (
                  <Comp
                    key={item.key}
                    href={item.href}
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
                    <span className="flex-1">{t(item.key)}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
                  </Comp>
                )
              })}

            {/* Browse group */}
            <p className="px-3 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-widest text-primary/70">
              {t("nav.group.browse")}
            </p>
            {navItems
              .filter((item) => item.group === "browse")
              .map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.key}
                    href={item.href}
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
                    <span className="flex-1">{t(item.key)}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
                  </Link>
                )
              })}

            {/* More group */}
            <p className="px-3 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-widest text-primary/70">
              {t("footer.resources")}
            </p>
            {navItems
              .filter((item) => item.group === "more")
              .map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.key}
                    href={item.href}
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
                    <span className="flex-1">{t(item.key)}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
                  </Link>
                )
              })}

            {/* Mobile Quick Start CTA */}
            <div className="px-3 pt-3">
              <a
                href="/#quickstart"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
              >
                <Zap className="h-4 w-4" />
                {t("nav.quickstart.cta")}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
