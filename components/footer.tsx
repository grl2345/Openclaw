"use client"

import { useI18n } from "@/lib/i18n"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">OC</span>
              </div>
              <span className="text-lg font-semibold text-foreground">{t("brand.name")}</span>
            </Link>
            <p className="text-sm text-muted-foreground">{t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{t("footer.links")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#usecases"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("nav.usecases")}
                </Link>
              </li>
              <li>
                <Link
                  href="#categories"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("nav.categories")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/AlexAnys/awesome-openclaw-usecases-zh/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("nav.contribute")}
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{t("footer.resources")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://github.com/openclaw/openclaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("brand.name")}
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://clawhub.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  ClawHub
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/VoltAgent/awesome-openclaw-skills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Awesome OpenClaw Skills
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">{t("footer.community")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://github.com/AlexAnys/awesome-openclaw-usecases-zh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t("footer.copyright")}. {t("footer.rights")}
          </p>
          <p className="text-sm text-muted-foreground">MIT License</p>
        </div>
      </div>
    </footer>
  )
}
