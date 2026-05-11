"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicyPage() {
  const { locale } = useI18n()
  const isZh = locale === "zh"

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {isZh ? "返回首页" : "Back to Home"}
        </Link>

        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          {isZh ? "Cookie 政策" : "Cookie Policy"}
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          {isZh ? "最后更新：2026 年 5 月" : "Last updated: May 2026"}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          {isZh ? (
            <>
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. 什么是 Cookie</h2>
                <p>
                  Cookie 是当您访问网站时存储在您设备上的小型文本文件。它可以帮助网站记住您的
                  偏好（例如语言、主题）、统计访问数据，以及提供个性化的广告体验。本页面详细
                  说明 OpenClaw Hub（openclaw-s.com，以下简称"本站"）使用的 Cookie 及其用途。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. 本站使用的 Cookie 类型</h2>
                <h3 className="mt-3 text-lg font-semibold text-foreground">2.1 必要 Cookie（无法关闭）</h3>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    <code>NEXT_LOCALE</code>：记录您选择的语言（zh / en），有效期 1 年。
                  </li>
                  <li>
                    <code>theme</code>：记录您选择的主题（亮色 / 暗色 / 跟随系统），保存在
                    浏览器 localStorage 中。
                  </li>
                </ul>

                <h3 className="mt-4 text-lg font-semibold text-foreground">2.2 分析 Cookie</h3>
                <p>
                  我们使用 <strong className="text-foreground">Vercel Analytics</strong>{" "}
                  收集匿名的访问统计（页面浏览量、来源、设备类型等），不识别个人身份，
                  不进行跨站追踪。详见{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Vercel 隐私政策
                  </a>
                  。
                </p>

                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  2.3 广告 Cookie（第三方）
                </h3>
                <p>
                  本站使用 <strong className="text-foreground">Google AdSense</strong>{" "}
                  展示广告。作为 Google
                  的合作伙伴，Google 及其广告联盟伙伴可能会通过 DoubleClick DART Cookie
                  等技术，基于您在本站及互联网其他站点的历史访问记录，向您展示相关广告。
                  这些 Cookie 由 Google 及其合作伙伴直接设置和管理，不由本站控制。
                </p>
                <p>
                  您可以通过以下方式管理或禁用广告个性化：
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    访问{" "}
                    <a
                      href="https://www.google.com/settings/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google 广告设置
                    </a>{" "}
                    关闭个性化广告。
                  </li>
                  <li>
                    访问{" "}
                    <a
                      href="https://www.aboutads.info/choices/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      aboutads.info
                    </a>{" "}
                    或{" "}
                    <a
                      href="https://www.youronlinechoices.eu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      youronlinechoices.eu
                    </a>{" "}
                    选择退出多个广告联盟。
                  </li>
                  <li>在浏览器设置中禁用第三方 Cookie。</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. 您的选择</h2>
                <p>
                  您可以随时通过浏览器设置查看、删除或阻止 Cookie。请注意，禁用必要 Cookie
                  会影响语言切换、主题保存等基础功能；禁用分析或广告 Cookie 不会影响内容浏览。
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Chrome：设置 → 隐私和安全 → Cookie 和其他网站数据</li>
                  <li>Firefox：设置 → 隐私与安全 → Cookie 和网站数据</li>
                  <li>Safari：偏好设置 → 隐私 → 管理网站数据</li>
                  <li>Edge：设置 → Cookie 和网站权限</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. 政策更新</h2>
                <p>
                  我们可能会不定期更新本 Cookie 政策。重大变更会在本页面顶部"最后更新"
                  日期处明示。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. 联系我们</h2>
                <p>
                  如对 Cookie 使用有疑问，请通过{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    联系我们
                  </Link>{" "}
                  页面与我们联系。
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. What are cookies</h2>
                <p>
                  Cookies are small text files stored on your device when you visit a website.
                  They help the site remember your preferences (language, theme), measure
                  traffic, and serve personalised ads. This page describes how OpenClaw Hub
                  (openclaw-s.com, &quot;the Site&quot;) uses cookies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">
                  2. Types of cookies we use
                </h2>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  2.1 Strictly necessary (cannot be disabled)
                </h3>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    <code>NEXT_LOCALE</code> — remembers your language choice (zh / en), valid
                    for 1 year.
                  </li>
                  <li>
                    <code>theme</code> — remembers your theme choice (light / dark / system),
                    stored in browser localStorage.
                  </li>
                </ul>

                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  2.2 Analytics cookies
                </h3>
                <p>
                  We use <strong className="text-foreground">Vercel Analytics</strong> to
                  collect anonymous traffic statistics (page views, referrer, device type).
                  No personally identifiable information is collected and no cross-site
                  tracking is performed. See{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Vercel&apos;s privacy policy
                  </a>{" "}
                  for details.
                </p>

                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  2.3 Advertising cookies (third-party)
                </h3>
                <p>
                  The Site uses <strong className="text-foreground">Google AdSense</strong> to
                  display ads. As a Google publisher partner, Google and its advertising
                  partners may use technologies such as the DoubleClick DART cookie to serve
                  ads based on your browsing history on this site and across the web. These
                  cookies are set and controlled by Google and its partners, not by us.
                </p>
                <p>You can manage or opt out of personalised advertising via:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    <a
                      href="https://www.google.com/settings/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google Ads Settings
                    </a>{" "}
                    — turn off personalised ads.
                  </li>
                  <li>
                    <a
                      href="https://www.aboutads.info/choices/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      aboutads.info
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://www.youronlinechoices.eu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      youronlinechoices.eu
                    </a>{" "}
                    — opt out of multiple ad networks.
                  </li>
                  <li>Disabling third-party cookies in your browser settings.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. Your choices</h2>
                <p>
                  You can view, delete or block cookies at any time via your browser settings.
                  Note that disabling strictly necessary cookies will break language switching
                  and theme persistence; disabling analytics or advertising cookies will not
                  affect content browsing.
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
                  <li>Firefox: Settings → Privacy &amp; Security → Cookies and Site Data</li>
                  <li>Safari: Preferences → Privacy → Manage Website Data</li>
                  <li>Edge: Settings → Cookies and site permissions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. Updates</h2>
                <p>
                  We may update this Cookie Policy from time to time. Material changes will be
                  reflected in the &quot;Last updated&quot; date at the top of this page.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. Contact</h2>
                <p>
                  For questions about cookie usage, please reach out via our{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    contact page
                  </Link>
                  .
                </p>
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
