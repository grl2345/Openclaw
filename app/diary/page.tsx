"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { ArrowLeft, BookOpen, Calendar } from "lucide-react"

const DIARY_ENTRIES = [
  { id: "day3", date: "2026-03-12", dateLabelZh: "第 3 天", dateLabelEn: "Day 3", titleZh: "微信也绑上了，出门也能使唤龙虾", titleEn: "WeChat bound—use the lobster on the go" },
  { id: "day2", date: "2026-03-11", dateLabelZh: "第 2 天", dateLabelEn: "Day 2", titleZh: "试着让龙虾帮我干点正经事", titleEn: "Tried getting the lobster to do real work" },
  { id: "day1", date: "2026-03-10", dateLabelZh: "第 1 天", dateLabelEn: "Day 1", titleZh: "从零到在飞书里和龙虾说上话", titleEn: "From zero to chatting with the lobster in Feishu" },
  { id: "intro", date: "2026-03-09", dateLabelZh: "开篇", dateLabelEn: "First", titleZh: "欢迎来到养虾日记", titleEn: "Welcome to Claw Diary" },
] as const

export default function DiaryPage() {
  const { t, locale } = useI18n()
  const isZh = locale === "zh"

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-8 pt-24 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {isZh ? "返回首页" : "Back to Home"}
        </Link>

        <header className="mb-10">
          <div className="mb-3 flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {t("nav.diary")}
            </h1>
          </div>
          <p className="text-muted-foreground">
            {isZh
              ? "这里记录和 OpenClaw（龙虾）相关的使用心得、更新速报或社区小故事。"
              : "Notes, updates, and stories around OpenClaw (the lobster)."}
          </p>
        </header>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* 左侧导航目录 */}
          <aside className="shrink-0 lg:w-56">
            <nav
              className="sticky top-24 rounded-xl border border-border/60 bg-card/50 p-4 backdrop-blur-sm"
              aria-label={isZh ? "日记目录" : "Diary contents"}
            >
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {isZh ? "目录" : "Contents"}
              </p>
              <ul className="space-y-1">
                {DIARY_ENTRIES.map(({ id, date, dateLabelZh, dateLabelEn, titleZh, titleEn }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <span className="block text-xs text-muted-foreground/80">{date}</span>
                      <span className="mt-0.5 block font-medium text-foreground">{isZh ? titleZh : titleEn}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* 右侧正文 */}
          <main className="min-w-0 flex-1">
            <section className="space-y-6">
              {/* 第三天 2026-03-12 */}
              <article
                id="day3"
                className="scroll-mt-28 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm"
              >
                <time className="text-xs text-muted-foreground" dateTime="2026-03-12">
                  2026-03-12 · {isZh ? "第 3 天" : "Day 3"}
                </time>
                <h2 className="mt-2 text-lg font-semibold text-foreground">
                  {isZh ? "微信也绑上了，出门也能使唤龙虾" : "WeChat bound—use the lobster on the go"}
                </h2>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {isZh ? (
                    <>
                      <p>
                        前两天都在飞书里和龙虾玩，但一出门、一关电脑就联系不上了。看到站里出了「微信 + WorkBuddy」的教程，决定把微信也接上，这样在外面用手机就能发指令。
                      </p>
                      <p>
                        步骤不复杂：先在电脑上下载 WorkBuddy（腾讯官方的），安装时一路下一步。打开后点「登录」，浏览器弹出页面，用微信扫一扫就登上了。接下来是关键一步——点右上角头像，在菜单里选「Claw 设置」，在设置页找到「微信客服号集成」，点右侧的「配置」按钮，会弹出一个二维码。用你要用来和龙虾聊天的那个微信号扫一下，几秒钟后页面会显示你的头像和「已绑定」，就成功了。
                      </p>
                      <p>
                        绑完我立刻在微信里发了一句「你是谁」，真的秒回了一长段自我介绍……感动。试了发「帮我记一下明天买咖啡」，也正常进了待办。唯一要记牢的：<strong className="text-foreground">电脑得开着、WorkBuddy 也得开着</strong>，不然微信发过去会石沉大海。我今天就踩了坑：在外面发了一堆话，回来才发现家里电脑休眠了，一条都没收到。出门前记得确认一下电脑和 WorkBuddy 都在跑。
                      </p>
                      <p>
                        小结：飞书适合在办公室用，微信适合出门遥控家里的龙虾。两个都配好，场景就全覆盖了。
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        I’d been using the lobster in Feishu for two days, but once I left my desk or closed the laptop, I lost the connection. The site’s “WeChat + WorkBuddy” guide looked like the fix: use WeChat on my phone to send commands.
                      </p>
                      <p>
                        Steps: download WorkBuddy (Tencent’s app), install (Next all the way), open and click Login, scan the QR with WeChat. Then click your avatar (top right) → Claw 设置 → find 微信客服号集成 → 配置, scan the new QR with the WeChat account you want to use for the lobster. When you see your avatar and “已绑定”, you’re done.
                      </p>
                      <p>
                        I sent “who are you” in WeChat and got an instant reply. One thing to remember: <strong className="text-foreground">keep your PC and WorkBuddy running</strong>, or messages won’t get through. I learned the hard way when I was out and my home PC had gone to sleep.
                      </p>
                    </>
                  )}
                </div>
              </article>

              {/* 第二天 2026-03-11 */}
              <article
                id="day2"
                className="scroll-mt-28 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm"
              >
                <time className="text-xs text-muted-foreground" dateTime="2026-03-11">
                  2026-03-11 · {isZh ? "第 2 天" : "Day 2"}
                </time>
                <h2 className="mt-2 text-lg font-semibold text-foreground">
                  {isZh ? "试着让龙虾帮我干点正经事" : "Tried getting the lobster to do real work"}
                </h2>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {isZh ? (
                    <>
                      <p>
                        昨天只是在飞书里打了个招呼，今天想试试能不能真的派活。我平时最烦的两件事：一是飞书文档里被 @ 了一堆，要自己翻；二是约会议要切到日历里一条条加。所以先试了第一件事。
                      </p>
                      <p>
                        我对龙虾说：「帮我总结一下这周飞书文档里 @ 我的内容，按文档列个清单，每条一句话。」等了几秒，它真的去翻了（应该是调了飞书的接口），给了一版摘要，还带了文档链接。惊了，省了我至少十几分钟。
                      </p>
                      <p>
                        接着试日程。我说：「把明天下午 3 点设为和产品对需求，标题写『需求评审』。」过一会儿去飞书日历看，真的多了一条。又试了「把本周五下午 4 点设为团队周会」，也成功了。
                      </p>
                      <p>
                        踩到的小坑：<strong className="text-foreground">要说清楚是「飞书文档」还是「飞书日程」</strong>，不然它会反问你「要操作的是文档还是日历？」。还有，一次别塞太多事，比如「总结文档再帮我加三条日程再……」这种，它会懵。拆成几句、一句一件事，体验好很多。
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Yesterday was just saying hi in Feishu. Today I tried real tasks: summarizing docs where I was @’ed, and adding calendar events.
                      </p>
                      <p>
                        I asked the lobster to “Summarize Feishu docs where I was @’ed this week, list by doc with one line each.” It actually pulled the docs and returned a summary with links. Then I asked it to add “Demand review with product, tomorrow 3pm” to the calendar—done. Breaking requests into one thing per message worked best.
                      </p>
                    </>
                  )}
                </div>
              </article>

              {/* 第一天 2026-03-10 */}
              <article
                id="day1"
                className="scroll-mt-28 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm"
              >
                <time className="text-xs text-muted-foreground" dateTime="2026-03-10">
                  2026-03-10 · {isZh ? "第 1 天" : "Day 1"}
                </time>
                <h2 className="mt-2 text-lg font-semibold text-foreground">
                  {isZh ? "从零到在飞书里和龙虾说上话" : "From zero to chatting with the lobster in Feishu"}
                </h2>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {isZh ? (
                    <>
                      <p>
                        完全小白，之前没碰过 OpenClaw，只听说「龙虾」很火、能当 AI 助理用。搜到 OpenClaw Market 这个站，看到有「部署安装」教程，点进去先读了「部署方式选择」——本地 vs 云端那张表。我经常在外面跑、也不想家里电脑一直开着，就选了云端，对应的是站里推荐的「飞书秒搭」。
                      </p>
                      <p>
                        操作比想象中简单：打开飞书秒搭的官网，找到「OpenClaw 智能助手」那一张卡片，点右侧蓝色的「创建」按钮。页面会依次显示「启动云端电脑」「启动 OpenClaw」「连接飞书」，全程自动，不用填任何 API Key 或服务器配置。大约一分钟左右，弹窗提示「你的助手已连接到飞书」，下面有两个按钮：「管理智能助手」和「去飞书对话」。我点了「去飞书对话」。
                      </p>
                      <p>
                        飞书里多了一个机器人，名字是创建时填的助手名。点进对话，发了一句「你好」，它回了一长段自我介绍，说自己是生活在飞书里的小龙虾、已经学会了用飞书、有什么需要帮忙的随时说……笑死，但确实有被可爱到。全程没配服务器、没填 API Key，就点了几下，感觉像白嫖了一个私人助理。明天打算试试让它干点正经事，比如总结文档、约个会议什么的。
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Total newbie—never used OpenClaw, only heard about the “lobster” as an AI assistant. Found OpenClaw Market, read the install guide and the “local vs cloud” table. I’m often on the go and don’t want my home PC on 24/7, so I went with cloud: Feishu Miaoda.
                      </p>
                      <p>
                        Flow: open Miaoda, find OpenClaw Smart Assistant, click Create. The page auto-ran “start cloud computer → start OpenClaw → connect Feishu.” About a minute later, “Your assistant has connected to Feishu” with a “Go to Feishu” button. In Feishu I had a new bot; I said “hello” and got a long lobster intro. No server, no API keys—felt like a free assistant. Tomorrow I’ll try real tasks.
                      </p>
                    </>
                  )}
                </div>
              </article>

              {/* 开篇 2026-03-09 */}
              <article
                id="intro"
                className="scroll-mt-28 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm"
              >
                <time className="text-xs text-muted-foreground" dateTime="2026-03-09">
                  2026-03-09 · {isZh ? "开篇" : "First"}
                </time>
                <h2 className="mt-2 text-lg font-semibold text-foreground">
                  {isZh ? "欢迎来到养虾日记" : "Welcome to Claw Diary"}
                </h2>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {isZh ? (
                    <>
                      <p>
                        养虾日记今天正式开张。「养虾」是社区里对用 OpenClaw（龙虾）的戏称——把 AI 助理当宠物养，一点点摸熟它的脾气和用法。
                      </p>
                      <p>
                        之后会在这里不定期更新和龙虾有关的实战技巧、版本动向或社区小故事：比如怎么在飞书里让它帮你总结文档、怎么用微信在外面遥控家里的龙虾、踩过的坑和解决办法，等等。欢迎常来看看，也欢迎在 GitHub 或社区里分享你自己的养虾心得。
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        The Claw Diary is open. “Raising the lobster” is the community’s way of saying using OpenClaw—getting to know your AI assistant bit by bit.
                      </p>
                      <p>
                        We’ll post tips, updates, and stories here from time to time. Feel free to share your own in the community or on GitHub.
                      </p>
                    </>
                  )}
                </div>
              </article>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}
