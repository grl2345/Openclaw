"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DmcaPage() {
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
          {isZh ? "版权声明与 DMCA 下架流程" : "Copyright Notice & DMCA Takedown"}
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          {isZh ? "最后更新：2026 年 5 月" : "Last updated: May 2026"}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          {isZh ? (
            <>
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. 内容来源说明</h2>
                <p>
                  OpenClaw Hub 是一个面向 OpenClaw 用户的导航与教程站点。站内内容分为三类：
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    <strong className="text-foreground">原创内容</strong>：博客文章、安装
                    教程、用例解读、API 评测、踩坑笔记等，由本站作者独立撰写，
                    版权归 OpenClaw Hub 所有。
                  </li>
                  <li>
                    <strong className="text-foreground">编辑性聚合</strong>：技能 / 用例
                    目录的标题、分类、标签和简介。我们在公开可访问的开源仓库（如 GitHub
                    awesome 列表）基础上进行筛选、翻译与整理，并对每一条注明原始来源链接。
                  </li>
                  <li>
                    <strong className="text-foreground">外部链接</strong>：跳转到第三方仓库
                    或官方文档；版权归原作者所有，本站不复制其完整内容。
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">2. 开源许可证遵守</h2>
                <p>
                  对于引用的开源内容，我们尊重并遵守其原始许可证（绝大多数为 MIT、Apache 2.0、
                  CC BY 4.0 等宽松协议）。如发现某条目的来源许可证不允许我们的使用方式，请
                  通过下文邮箱联系我们，我们会立即评估并下架。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">3. 原创内容版权</h2>
                <p>
                  除非另有说明，OpenClaw Hub 原创的文字、图表、配图、UI 设计在
                  <strong className="text-foreground">
                    「署名 - 非商业性使用 - 相同方式共享 4.0（CC BY-NC-SA 4.0）」
                  </strong>
                  许可下发布。允许个人非商业转载，但必须保留作者署名及原文链接，
                  且不得用于训练商业 AI 模型。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. DMCA 侵权下架通知</h2>
                <p>
                  如果您是版权人或其授权代表，认为本站某项内容侵犯了您的版权，请通过电子邮件
                  向我们发送 DMCA 通知，应包含以下信息（依据 17 U.S.C. § 512(c)(3)）：
                </p>
                <ol className="list-decimal space-y-1 pl-6">
                  <li>版权人或其授权代表的实体或电子签名。</li>
                  <li>受侵权作品的明确描述（标题、URL、登记号等）。</li>
                  <li>本站上涉嫌侵权材料的具体 URL。</li>
                  <li>您的联系方式（姓名、地址、电话、邮箱）。</li>
                  <li>
                    一份声明：您善意地认为对该材料的使用未经版权人、其代理人或法律授权。
                  </li>
                  <li>
                    一份声明：通知中的信息准确，且您在伪证罪处罚下声明自己是版权人或其
                    授权代表。
                  </li>
                </ol>
                <p className="mt-3">
                  请将通知发送至：
                  <br />
                  <strong className="text-foreground">dmca [at] openclaw-s.com</strong>
                </p>
                <p>
                  我们承诺在收到符合要求的通知后{" "}
                  <strong className="text-foreground">5 个工作日内</strong>{" "}
                  处理，包括删除内容或屏蔽访问，并通知用户。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. 反通知（Counter-Notice）</h2>
                <p>
                  如果您认为自己的内容被错误下架，可以提交反通知，包含 17 U.S.C. § 512(g)
                  规定的全部要素，邮件主题请标注"DMCA Counter-Notice"。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">6. 重复侵权政策</h2>
                <p>
                  本站对重复侵权行为采取零容忍政策。我们会限制或终止重复侵权用户的访问权限。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">7. 其他联系方式</h2>
                <p>
                  非版权相关的纠错、内容反馈请使用{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    联系我们
                  </Link>{" "}
                  页面提交。
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-xl font-semibold text-foreground">1. Content sources</h2>
                <p>OpenClaw Hub publishes three categories of content:</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    <strong className="text-foreground">Original content</strong> — blog
                    articles, installation tutorials, use-case walkthroughs, API reviews and
                    pitfall notes written by our authors. Copyright belongs to OpenClaw Hub.
                  </li>
                  <li>
                    <strong className="text-foreground">Editorial aggregation</strong> — the
                    titles, categories, tags and descriptions in our skill / use-case
                    directory, curated and translated from publicly accessible open-source
                    repositories (e.g. GitHub awesome lists). Each entry links back to its
                    original source.
                  </li>
                  <li>
                    <strong className="text-foreground">External links</strong> — outbound
                    links to third-party repositories and official documentation. The full
                    content remains on the original site; we never mirror it.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">
                  2. Open-source license compliance
                </h2>
                <p>
                  We respect and comply with the original licenses of any referenced
                  open-source content (most are permissive — MIT, Apache 2.0, CC BY 4.0). If
                  you believe our use violates an entry&apos;s original license, please contact
                  us and we will evaluate it immediately.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">
                  3. Copyright of original content
                </h2>
                <p>
                  Unless otherwise noted, text, diagrams, illustrations and UI design original
                  to OpenClaw Hub are released under{" "}
                  <strong className="text-foreground">
                    Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (CC BY-NC-SA 4.0)
                  </strong>
                  . Personal non-commercial reuse is permitted with author credit and a link
                  back, but commercial AI-model training is not.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">4. DMCA takedown notice</h2>
                <p>
                  If you are a copyright owner or authorised agent and believe content on this
                  site infringes your copyright, please send a DMCA notice by email containing
                  the following (17 U.S.C. § 512(c)(3)):
                </p>
                <ol className="list-decimal space-y-1 pl-6">
                  <li>Physical or electronic signature of the rights holder or agent.</li>
                  <li>Identification of the copyrighted work (title, URL, registration).</li>
                  <li>The specific URL(s) of the allegedly infringing material.</li>
                  <li>Your contact information (name, address, phone, email).</li>
                  <li>
                    A statement that you have a good-faith belief the use is not authorised.
                  </li>
                  <li>
                    A statement, under penalty of perjury, that the information is accurate
                    and that you are the rights holder or authorised agent.
                  </li>
                </ol>
                <p className="mt-3">
                  Send the notice to:{" "}
                  <strong className="text-foreground">dmca [at] openclaw-s.com</strong>
                </p>
                <p>
                  We commit to acting on valid notices within{" "}
                  <strong className="text-foreground">5 business days</strong> — either by
                  removing the material or disabling access — and notifying the affected
                  party.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">5. Counter-notice</h2>
                <p>
                  If you believe your content was removed in error, you may file a
                  counter-notice meeting all the requirements of 17 U.S.C. § 512(g). Use the
                  subject line &quot;DMCA Counter-Notice&quot;.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">
                  6. Repeat infringer policy
                </h2>
                <p>
                  We have a zero-tolerance policy for repeat infringers and will restrict or
                  terminate access for repeat offenders.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground">7. Other contact</h2>
                <p>
                  For non-copyright corrections and feedback, please use the{" "}
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
