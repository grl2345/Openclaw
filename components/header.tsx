"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { LobsterIcon } from "@/components/lobster-icon"
import { Menu, X, Github, Globe, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const { t, locale, setLocale } = useI18n()
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleLocale = () => {
    setLocale(locale === "zh" ? "en" : "zh")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-11 w-11 items-center justify-center">
            <LobsterIcon size={36} className="text-primary" />
          </div>
          <span className="text-lg font-bold text-foreground">{t("brand.name")}</span>
        </Link>

        {/* Desktop Navigation：上手 → 浏览 → 更多 */}
        <nav className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <a href="/#quickstart" className="rounded-md px-3 py-2 font-medium transition-colors hover:text-foreground">
              {t("nav.quickstart")}
            </a>
            <Link href="/install" className="rounded-md px-3 py-2 transition-colors hover:text-foreground">
              {t("nav.install")}
            </Link>
          </div>
          <span className="h-4 w-px bg-border/60" aria-hidden />
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Link href="/#usecases" className="rounded-md px-3 py-2 transition-colors hover:text-foreground">
              {t("nav.usecases")}
            </Link>
            <Link href="/#skills" className="rounded-md px-3 py-2 transition-colors hover:text-foreground">
              {t("nav.skills")}
            </Link>
          </div>
          <span className="h-4 w-px bg-border/40" aria-hidden />
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Link href="/api-recommend" className="rounded-md px-3 py-2 transition-colors hover:text-foreground">
              {t("nav.apiRecommend")}
            </Link>
            <Link href="/news" className="rounded-md px-3 py-2 transition-colors hover:text-foreground">
              {t("nav.news")}
            </Link>
            <Link href="/about" className="rounded-md px-3 py-2 transition-colors hover:text-foreground">
              {t("nav.about")}
            </Link>
          </div>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "切换到明亮模式" : "切换到暗色模式"}
            className="shrink-0"
          >
            {mounted ? (theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />) : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="sm" onClick={toggleLocale} className="gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">{t("lang.switch")}</span>
          </Button>
          <Button variant="ghost" size="sm" asChild className="gap-2">
            <Link
              href="https://github.com/AlexAnys/awesome-openclaw-usecases-zh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu：上手 → 浏览 → 资源，与桌面顺序一致 */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-0 p-4">
            <p className="mb-1 px-3 text-[10px] uppercase tracking-wider text-muted-foreground/70">
              {t("nav.group.start")}
            </p>
            <a href="/#quickstart" onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary/10">
              {t("nav.quickstart")}
            </a>
            <Link href="/install" className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>{t("nav.install")}</Link>
            <div className="mt-3 flex flex-col border-b border-border/40 pb-3">
              <p className="mb-1 px-3 text-[10px] uppercase tracking-wider text-muted-foreground/70">
                {t("nav.group.browse")}
              </p>
              <Link href="/#usecases" className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>{t("nav.usecases")}</Link>
              <Link href="/#skills" className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>{t("nav.skills")}</Link>
            </div>
            <div className="mt-2">
              <p className="mb-1 px-3 text-[10px] uppercase tracking-wider text-muted-foreground/70">
                {t("footer.resources")}
              </p>
              <Link href="/api-recommend" className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>{t("nav.apiRecommend")}</Link>
              <Link href="/news" className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>{t("nav.news")}</Link>
              <Link href="/about" className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>{t("nav.about")}</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
