"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
          {isZh ? "隐私政策" : "Privacy Policy"}
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          {isZh ? "最后更新：2025 年 3 月" : "Last updated: March 2025"}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          {isZh ? (
            <>
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. 概述</h2>
                <p>
                  OpenClaw Hub（以下简称"本站"，网址：www.openclaw-s.com）是一个面向 OpenClaw
                  新手和爱好者的导航与资源聚合站点。我们重视用户隐私，本政策说明我们如何收集、使用和保护您的信息。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. 信息收集</h2>
                <p>本站不要求用户注册或登录，我们收集的信息十分有限：</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    <strong>自动收集的信息：</strong>
                    当您访问本站时，我们的服务器可能自动记录标准的访问日志信息，包括 IP
                    地址、浏览器类型、操作系统、访问页面和时间戳。
                  </li>
                  <li>
                    <strong>Cookie 和本地存储：</strong>
                    本站使用 Cookie 记录您的语言偏好（中文/英文）和主题偏好（亮色/暗色模式），以提升浏览体验。
                  </li>
                  <li>
                    <strong>分析工具：</strong>
                    本站使用 Vercel Analytics 收集匿名的网站使用数据，帮助我们了解用户行为并改善网站。这些数据不包含个人身份信息。
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. 第三方广告</h2>
                <p>
                  本站使用 Google AdSense
                  展示广告。Google 及其合作伙伴可能使用 Cookie
                  根据您的访问记录向您展示相关广告。您可以通过访问{" "}
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google 广告设置
                  </a>{" "}
                  来管理广告个性化选项，也可以访问{" "}
                  <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.aboutads.info
                  </a>{" "}
                  了解更多关于第三方广告 Cookie 的信息。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. 信息使用</h2>
                <p>我们收集的有限信息仅用于以下目的：</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>维护和改善网站功能</li>
                  <li>记住您的语言和主题偏好</li>
                  <li>分析网站流量以优化内容</li>
                  <li>展示相关广告</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. 信息共享</h2>
                <p>
                  本站不会出售、交易或以其他方式向外部方转让您的个人信息，但以下情况除外：
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>经您明确同意</li>
                  <li>遵守法律法规要求</li>
                  <li>通过 Google AdSense 和 Vercel Analytics 等第三方服务处理匿名数据</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. 外部链接</h2>
                <p>
                  本站包含大量指向第三方网站的链接（如 GitHub、ClawHub
                  等）。我们不对这些外部网站的隐私做法负责，建议您在访问这些网站时查阅其各自的隐私政策。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">7. 数据安全</h2>
                <p>
                  我们采取合理的技术和管理措施来保护收集到的信息，但请注意，互联网传输不能保证
                  100% 安全。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">8. 儿童隐私</h2>
                <p>
                  本站不针对 13 岁以下儿童，也不会故意收集儿童的个人信息。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">9. 政策更新</h2>
                <p>
                  我们可能会不定期更新本隐私政策。更新后的版本将在本页面发布，并更新"最后更新"日期。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">10. 联系我们</h2>
                <p>
                  如果您对本隐私政策有任何疑问，请通过网站上的商务合作入口与我们联系。
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. Overview</h2>
                <p>
                  OpenClaw Hub (&quot;the Site&quot;, www.openclaw-s.com) is a navigation and resource
                  aggregation site for OpenClaw beginners and enthusiasts. We value your privacy.
                  This policy explains how we collect, use, and protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. Information Collection</h2>
                <p>The Site does not require registration or login. We collect very limited information:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    <strong>Automatically collected:</strong> Our servers may log standard access information including IP address, browser type, OS, pages visited, and timestamps.
                  </li>
                  <li>
                    <strong>Cookies & local storage:</strong> We use cookies to remember your language preference (Chinese/English) and theme preference (light/dark mode).
                  </li>
                  <li>
                    <strong>Analytics:</strong> We use Vercel Analytics to collect anonymous usage data to understand user behavior and improve the site. No personally identifiable information is collected.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. Third-Party Advertising</h2>
                <p>
                  This site uses Google AdSense to display advertisements. Google and its partners may use cookies to serve ads based on your browsing history. You can manage ad personalization at{" "}
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Google Ads Settings
                  </a>{" "}
                  or learn more at{" "}
                  <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.aboutads.info
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. Use of Information</h2>
                <p>The limited information we collect is used solely for:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Maintaining and improving site functionality</li>
                  <li>Remembering your language and theme preferences</li>
                  <li>Analyzing traffic to optimize content</li>
                  <li>Displaying relevant advertisements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. Information Sharing</h2>
                <p>We do not sell, trade, or transfer your personal information to outside parties, except:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>Anonymous data processed through third-party services like Google AdSense and Vercel Analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. External Links</h2>
                <p>
                  This site contains links to third-party websites (e.g., GitHub, ClawHub). We are not responsible for the privacy practices of these external sites.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">7. Data Security</h2>
                <p>
                  We take reasonable technical and administrative measures to protect collected information, but no internet transmission is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">8. Children&apos;s Privacy</h2>
                <p>
                  This site is not directed at children under 13 and we do not knowingly collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">9. Policy Updates</h2>
                <p>
                  We may update this policy from time to time. Updated versions will be posted on this page with a new &quot;Last Updated&quot; date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">10. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy, please contact us through the business cooperation entry on the site.
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
