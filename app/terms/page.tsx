"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
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
          {isZh ? "服务条款" : "Terms of Service"}
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          {isZh ? "最后更新：2025 年 3 月" : "Last updated: March 2025"}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          {isZh ? (
            <>
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. 接受条款</h2>
                <p>
                  欢迎访问 OpenClaw Hub（以下简称"本站"）。使用本站即表示您同意遵守以下服务条款。如果您不同意这些条款，请勿使用本站。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. 服务描述</h2>
                <p>
                  本站是一个免费的信息聚合与导航平台，旨在帮助用户快速找到与 OpenClaw
                  相关的技能、教程、场景案例和资源。本站内容来源于开源社区和公开信息。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. 内容与版权</h2>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    本站收录的技能、案例等信息来源于 GitHub 开源仓库（如 awesome-openclaw-skills、awesome-openclaw-usecases-zh）、ClawHub、Skill Hub 等公开平台。
                  </li>
                  <li>
                    原始内容的版权归其各自作者或项目所有。本站仅提供索引和导航功能。
                  </li>
                  <li>
                    本站自身的设计、代码和原创内容受 MIT 许可证保护。
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. 免责声明</h2>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    本站内容仅供参考，不构成专业建议。模型 API 价格、技能功能等信息可能随时变化，请以各平台官网最新信息为准。
                  </li>
                  <li>
                    本站包含指向第三方网站的链接，我们不对这些外部网站的内容、准确性或可用性负责。
                  </li>
                  <li>
                    本站不保证所收录技能和工具的安全性、稳定性或兼容性，用户使用时应自行评估风险。
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. 用户行为</h2>
                <p>使用本站时，您同意不会：</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>以任何方式干扰或破坏本站的正常运行</li>
                  <li>使用自动化工具大量抓取本站内容</li>
                  <li>将本站内容用于非法目的</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. 广告</h2>
                <p>
                  本站可能展示由 Google AdSense 提供的广告。广告内容由 Google
                  根据其政策投放，不代表本站的立场或推荐。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">7. 条款修改</h2>
                <p>
                  我们保留随时修改本服务条款的权利。修改后的条款将在本页面发布，继续使用本站即表示接受修改后的条款。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">8. 联系方式</h2>
                <p>
                  如果您对本服务条款有任何疑问，请通过网站上的商务合作入口与我们联系。
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                <p>
                  Welcome to OpenClaw Hub (&quot;the Site&quot;). By using this site, you agree to these terms of service. If you do not agree, please do not use the site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. Service Description</h2>
                <p>
                  This site is a free information aggregation and navigation platform designed to help users find OpenClaw-related skills, tutorials, use cases, and resources. Content is sourced from open-source communities and public information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. Content & Copyright</h2>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Skills, use cases, and other information are sourced from GitHub repositories (awesome-openclaw-skills, awesome-openclaw-usecases-zh), ClawHub, Skill Hub, and other public platforms.</li>
                  <li>Copyright of original content belongs to their respective authors or projects. This site provides indexing and navigation only.</li>
                  <li>The site&apos;s own design, code, and original content are protected under the MIT License.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. Disclaimer</h2>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Content is for reference only and does not constitute professional advice. API pricing, skill features, and other information may change at any time.</li>
                  <li>This site contains links to third-party websites. We are not responsible for their content, accuracy, or availability.</li>
                  <li>We do not guarantee the security, stability, or compatibility of listed skills and tools. Users should assess risks independently.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. User Conduct</h2>
                <p>When using this site, you agree not to:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Interfere with or disrupt the normal operation of the site</li>
                  <li>Use automated tools to scrape site content at scale</li>
                  <li>Use site content for illegal purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. Advertising</h2>
                <p>
                  This site may display advertisements provided by Google AdSense. Ad content is served by Google according to its policies and does not represent our endorsement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">7. Modifications</h2>
                <p>
                  We reserve the right to modify these terms at any time. Updated terms will be posted on this page. Continued use of the site constitutes acceptance.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">8. Contact</h2>
                <p>
                  If you have questions about these terms, please contact us through the business cooperation entry on the site.
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
