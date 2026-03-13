"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { LobsterIcon } from "@/components/lobster-icon"
import { Menu, X, Github, Globe } from "lucide-react"
import { useState } from "react"

export function Header() {
  const { t, locale, setLocale } = useI18n()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleLocale = () => {
    setLocale(locale === "zh" ? "en" : "zh")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
            <LobsterIcon size={24} className="text-primary" />
          </div>
          <span className="text-lg font-bold text-foreground">{t("brand.name")}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/#usecases"
            className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {t("nav.usecases")}
          </Link>
          <Link
            href="/#categories"
            className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {t("nav.categories")}
          </Link>
          <Link
            href="/#skills"
            className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {t("nav.skills")}
          </Link>
          <Link
            href="/install"
            className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {t("nav.install")}
          </Link>
          <Link
            href="/about"
            className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {t("nav.about")}
          </Link>
          <Link
            href="https://github.com/AlexAnys/awesome-openclaw-usecases-zh/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {t("nav.contribute")}
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 p-4">
            <Link
              href="/#usecases"
              className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.usecases")}
            </Link>
            <Link
              href="/#categories"
              className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.categories")}
            </Link>
            <Link
              href="/#skills"
              className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.skills")}
            </Link>
            <Link
              href="/install"
              className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.install")}
            </Link>
            <Link
              href="/about"
              className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="https://github.com/AlexAnys/awesome-openclaw-usecases-zh/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("nav.contribute")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
