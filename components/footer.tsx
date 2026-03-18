"use client"

import { useI18n } from "@/lib/i18n"
import Link from "next/link"
import { Github } from "lucide-react"
import { LobsterIcon } from "@/components/lobster-icon"

const linkClass = "text-sm text-muted-foreground transition-colors hover:text-primary"
const linkClassRed = "text-sm text-primary transition-colors hover:opacity-90"

export function Footer() {
  const { t, locale } = useI18n()
  const isZh = locale === "zh"

  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-4 inline-flex items-center gap-2.5">
              <LobsterIcon size={36} className="h-9 w-9 shrink-0" />
              <span className="text-lg font-semibold text-foreground">{t("brand.name")}</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{t("footer.description")}</p>
          </div>

          {/* Quick Links - 左右 2 列 */}
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">{t("footer.links")}</h3>
            <ul className="grid grid-cols-1 gap-y-2.5 sm:grid-cols-2 sm:gap-x-6">
              <li><Link href="/#usecases" className={linkClass}>{t("nav.usecases")}</Link></li>
              <li><Link href="/#categories" className={linkClass}>{t("nav.categories")}</Link></li>
              <li><Link href="/api-recommend" className={linkClass}>{t("nav.apiRecommend")}</Link></li>
              <li><Link href="/install" className={linkClass}>{t("nav.install")}</Link></li>
              <li><Link href="/news" className={linkClass}>{isZh ? "官方手册" : "Manual"}</Link></li>
              <li><Link href="/about#support" className={linkClass}>{t("footer.support")}</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">{t("footer.community")}</h3>
            <Link
              href="https://github.com/AlexAnys/awesome-openclaw-usecases-zh"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 ${linkClass}`}
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </div>

          {/* 内容来源 */}
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">{t("footer.sources.title")}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("footer.sources.intro")}
              {t("footer.sources.usecases")}
              <Link href="https://github.com/AlexAnys/awesome-openclaw-usecases-zh" target="_blank" rel="noopener noreferrer" className={linkClassRed}>
                {t("footer.sources.usecases.zh")}
              </Link>
              、
              <Link href="https://github.com/hesamsheikh/awesome-openclaw-usecases" target="_blank" rel="noopener noreferrer" className={linkClassRed}>
                {t("footer.sources.usecases.en")}
              </Link>
              {t("footer.sources.sep")}{t("footer.sources.skills")}
              <Link href="https://clawhub.io" target="_blank" rel="noopener noreferrer" className={linkClassRed}>
                {t("footer.sources.skills.clawhub")}
              </Link>
              、
              <Link href="https://github.com/VoltAgent/awesome-openclaw-skills" target="_blank" rel="noopener noreferrer" className={linkClassRed}>
                {t("footer.sources.skills.repo")}
              </Link>
              、
              <Link href="https://www.skill-cn.com/?from=openclaw101&mode=practices" target="_blank" rel="noopener noreferrer" className={linkClassRed}>
                {t("footer.sources.skillhub")}
              </Link>
              。
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {t("footer.copyright")}. {t("footer.rights")}
          </p>
          <p className="text-xs text-muted-foreground">MIT License</p>
        </div>
      </div>
    </footer>
  )
}
