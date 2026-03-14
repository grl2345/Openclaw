"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/lib/i18n"
import { ArrowLeft, BookOpen, Wrench, Search, LayoutGrid, FileSpreadsheet, Zap, HelpCircle, Rocket } from "lucide-react"

const SECTIONS = [
  { id: "upgrade", titleZh: "2026 版有啥不一样", titleEn: "What’s new in 2026" },
  { id: "why-required", titleZh: "为啥说不装等于白部署", titleEn: "Why no skills = wasted deploy" },
  { id: "commands", titleZh: "先把这几条命令记熟", titleEn: "Commands to know" },
  { id: "find-skills", titleZh: "Find Skills", titleEn: "Find Skills" },
  { id: "tavily", titleZh: "Tavily Search", titleEn: "Tavily Search" },
  { id: "multi-search", titleZh: "Multi Search Engine", titleEn: "Multi Search Engine" },
  { id: "office-automation", titleZh: "Office-Automation", titleEn: "Office-Automation" },
  { id: "combo", titleZh: "几个技能一起用", titleEn: "Combining skills" },
  { id: "faq", titleZh: "踩坑了怎么办", titleEn: "When things go wrong" },
  { id: "advanced", titleZh: "再往后：优化与自定义", titleEn: "Next: trim & custom" },
]

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="mt-2 overflow-x-auto rounded-lg border border-border/60 bg-muted/50 px-4 py-3 font-mono text-sm text-foreground">
      <code className="whitespace-pre">{children}</code>
    </pre>
  )
}

export default function SkillsGuidePage() {
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
        <Link href="/" className="mb-8 inline-flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {isZh ? "返回首页" : "Back to Home"}
        </Link>

        <header className="mb-10">
          <div className="mb-3 flex items-center gap-2">
            <Wrench className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {isZh ? "必装 Skills 指南" : "Required Skills Guide"}
            </h1>
          </div>
          <p className="text-muted-foreground">
            {isZh
              ? "刚部署好的龙虾只会聊天，想让它真的帮你搜资料、写周报、发邮件，得先装几颗「技能」。这篇把最该装的四颗讲清楚，命令都能直接拷到终端用。"
              : "Fresh install = chat only. To search, draft reports, or send email, you need Skills. Here’s the four to install first, with copy-paste commands."}
          </p>
        </header>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <aside className="shrink-0 lg:w-56">
            <nav className="sticky top-24 rounded-xl border border-border/60 bg-card/50 p-4 backdrop-blur-sm" aria-label={isZh ? "目录" : "Contents"}>
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5" />
                {isZh ? "目录" : "Contents"}
              </p>
              <ul className="space-y-1">
                {SECTIONS.map(({ id, titleZh, titleEn }) => (
                  <li key={id}>
                    <a href={`#${id}`} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary">
                      {isZh ? titleZh : titleEn}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <main className="min-w-0 flex-1 space-y-12">
            {/* 一、2026 版核心升级亮点 */}
            <section id="upgrade" className="scroll-mt-28 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
                <Zap className="h-5 w-5 text-primary" />
                {isZh ? "2026 版有啥不一样" : "What’s new in 2026"}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {isZh
                  ? "官方技能市场 ClawHub 里已经有三千多款技能，装起来就是一条命令的事，不用自己写配置。想自己搞一个技能也支持，满足个性化需求。另外今年在安全和稳定上做了不少事：权限、审计、指令白名单都能管住文件访问和高危操作，后台跑得也更稳。"
                  : "ClawHub has 3000+ skills; install with one command, no config. Custom skills are supported. Security and stability got a boost: permissions, audit logs, and command whitelists limit file access and risky actions."}
              </p>
            </section>

            {/* 二、必装 Skills 核心价值 */}
            <section id="why-required" className="scroll-mt-28 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-foreground">
                {isZh ? "为啥说「不装等于白部署」" : "Why “no skills = wasted deploy”"}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {isZh
                  ? "龙虾能干多少活，全看给它装了什么技能。市集里技能虽多，真正用得上的就那一小撮。下面这四个属于「装了立刻能干活」的基础款，覆盖你大部分日常：找技能、搜东西、多引擎对比、办公自动化。"
                  : "What your lobster can do depends on which skills you install. These four are the ones that unlock real work: finding skills, searching the web, multi-engine comparison, and office automation."}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Find Skills</strong> — {isZh ? "不知道装啥时先装它，用来找、装、更新其他技能。" : "Install this first to discover and install other skills."}</li>
                <li><strong className="text-foreground">Tavily Search</strong> — {isZh ? "给 AI 用的搜索，结果干净、能联网，适合查最新信息。" : "Search built for AI: clean results, real-time web."}</li>
                <li><strong className="text-foreground">Multi Search Engine</strong> — {isZh ? "一口气用 17 个搜索引擎，不用配 Key，还能隐私搜索、算数。" : "17 engines in one, no API key; privacy search and math (e.g. Wolfram)."}</li>
                <li><strong className="text-foreground">Office-Automation</strong> — {isZh ? "周报、邮件、日程、Excel 一条龙，办公场景必备。" : "Reports, email, calendar, Excel—office in one skill."}</li>
              </ul>
            </section>

            {/* 三、Skills 管理核心命令 */}
            <section id="commands" className="scroll-mt-28 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
                <Wrench className="h-5 w-5 text-primary" />
                {isZh ? "先把这几条命令记熟" : "Commands to know"}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{isZh ? "下面这些在服务器终端里跑，所有技能都适用。装任何技能前先扫一眼，后面会反复用到。" : "Run these on your server; they work for every skill. Skim before installing anything."}</p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground">{isZh ? "查看已安装 Skills" : "List installed"}</p>
                  <CodeBlock>openclaw skills list --status ready</CodeBlock>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{isZh ? "安装 Skills（推荐）" : "Install (recommended)"}</p>
                  <CodeBlock>npx clawhub@latest install &lt;skill-slug&gt;</CodeBlock>
                  <p className="mt-1 text-xs text-muted-foreground">{isZh ? "备选：" : "Alternative: "}openclaw skills install &lt;skill-slug&gt;</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{isZh ? "卸载 / 启用 / 禁用" : "Uninstall / Enable / Disable"}</p>
                  <CodeBlock>{`openclaw skills uninstall <skill-slug>
openclaw skills enable <skill-slug>
openclaw skills disable <skill-slug>`}</CodeBlock>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{isZh ? "检查更新、更新全部" : "Check & update"}</p>
                  <CodeBlock>{`npx skills check
npx skills update all`}</CodeBlock>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{isZh ? "查看技能详情" : "Skill info"}</p>
                  <CodeBlock>openclaw skills info &lt;skill-slug&gt;</CodeBlock>
                </div>
              </div>
            </section>

            {/* 四、Find Skills */}
            <section id="find-skills" className="scroll-mt-28 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
                <Search className="h-5 w-5 text-primary" />
                {isZh ? "第一颗：Find Skills" : "Skill 1: Find Skills"}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{isZh ? "它的作用就一个：帮你「找技能」。市集里东西太多，不知道装啥时用它在命令行里搜一下（比如 excel、email），再按提示装。不用额外配置，装完就能用。" : "One job: help you find skills. Search by keyword (e.g. excel, email) in the terminal and install from results. No config."}</p>
              <p className="mt-3 text-sm font-medium text-foreground">{isZh ? "装完怎么确认" : "Verify install"}</p>
              <CodeBlock>{`npx clawhub@latest install find-skills
openclaw skills list --status ready`}</CodeBlock>
              <p className="mt-4 text-sm font-medium text-foreground">{isZh ? "命令行里搜完再装" : "Search then install"}</p>
              <CodeBlock>{`openclaw skills search excel
openclaw skills search email
npx clawhub@latest install <搜索到的技能名>`}</CodeBlock>
            </section>

            {/* 五、Tavily Search */}
            <section id="tavily" className="scroll-mt-28 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
                <Search className="h-5 w-5 text-primary" />
                {isZh ? "第二颗：Tavily Search" : "Skill 2: Tavily Search"}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{isZh ? "想让龙虾「上网查一下」就得装它。返回来的结果是给 AI 嚼的，比较干净，不像你直接搜出来一堆广告。支持深度搜和按新闻专题搜，查最新政策、报错解法都合适。" : "This is how your lobster gets live web results. Output is tuned for AI—cleaner than raw search. Use for deep research or news-style queries."}</p>
              <CodeBlock>{`npx clawhub@latest install tavily-search
openclaw skills configure tavily-search   # 可选：language=zh-CN`}</CodeBlock>
              <p className="mt-4 text-sm font-medium text-foreground">{isZh ? "怎么用" : "Usage"}</p>
              <CodeBlock>{`openclaw chat "用tavily-search --deep 搜索'Python ValueError: invalid literal for int()'的解决方案"
openclaw chat "用tavily-search --news 搜索近期AI领域热门新闻，返回5条"`}</CodeBlock>
            </section>

            {/* 六、Multi Search Engine */}
            <section id="multi-search" className="scroll-mt-28 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
                <LayoutGrid className="h-5 w-5 text-primary" />
                {isZh ? "第三颗：Multi Search Engine" : "Skill 3: Multi Search Engine"}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{isZh ? "一个技能背后挂了 17 个搜索引擎，国内外都有，不用自己申请 Key。需要「多几个来源对比一下」或「不想被记录搜索」时用 DuckDuckGo/Startpage；算数、单位换算可以走 WolframAlpha。" : "One skill, 17 engines, no API keys. Use it when you want multiple sources or privacy (DuckDuckGo/Startpage); use WolframAlpha for math and units."}</p>
              <CodeBlock>{`npx clawhub@latest install multi-search-engine
openclaw skills list --status ready`}</CodeBlock>
              <p className="mt-4 text-sm font-medium text-foreground">{isZh ? "和 Tavily 怎么选" : "When to use Tavily vs Multi"}</p>
              <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
                <li>{isZh ? "要快、要准 → Tavily" : "Fast & precise → Tavily"}</li>
                <li>{isZh ? "要对比多家、要隐私 → Multi" : "Compare sources or privacy → Multi"}</li>
                <li>{isZh ? "算数、单位换算 → Multi 里选 WolframAlpha" : "Math/units → Multi + WolframAlpha"}</li>
              </ul>
            </section>

            {/* 七、Office-Automation */}
            <section id="office-automation" className="scroll-mt-28 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
                <FileSpreadsheet className="h-5 w-5 text-primary" />
                {isZh ? "第四颗：Office-Automation" : "Skill 4: Office-Automation"}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{isZh ? "周报、发邮件、排日程、搞 Excel 都归它管。第一次用前要配一下：邮箱 SMTP、日程同步（飞书/Outlook 等）、文档保存路径，配完重启网关生效。" : "Handles reports, email, calendar, Excel. First-time setup: SMTP, calendar sync (Feishu/Outlook), doc path; then restart gateway."}</p>
              <CodeBlock>{`npx clawhub@latest install office-automation
openclaw skills configure office-automation
openclaw gateway restart`}</CodeBlock>
              <p className="mt-4 text-sm font-medium text-foreground">{isZh ? "可以这样使唤它" : "Example prompts"}</p>
              <CodeBlock>{`openclaw chat "用office-automation生成本周工作周报，工作内容：部署OpenClaw；成果：完成部署；下周计划：学习自定义技能"
openclaw chat "用office-automation发送邮件，收件人：xxx@163.com，主题：部署总结，内容：已完成部署"
openclaw chat "用office-automation查看本周所有日程，按时间排序"`}</CodeBlock>
            </section>

            {/* 八、组合最佳实践 */}
            <section id="combo" className="scroll-mt-28 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-foreground">{isZh ? "几个技能一起用" : "Combining skills"}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{isZh ? "单用一个技能往往不够，串起来才猛。比如：先多引擎搜趋势，再用 Tavily 深挖，最后让办公技能生成报告发邮箱。" : "Chain skills for real power: e.g. multi-search for trends → Tavily deep → office skill to generate report and email."}</p>
              <CodeBlock>{`openclaw chat "先用multi-search-engine搜索2026年AI自动化工具发展趋势，再用tavily-search --deep 挖掘核心数据，最后用office-automation生成分析报告，保存为PDF并发送至我的邮箱"`}</CodeBlock>
              <p className="mt-4 text-sm text-muted-foreground">{isZh ? "再比如：先让 Find Skills 找 Excel 相关技能，装好导入数据，再查标准、生成报表。" : "Or: Find Skills → install Excel skill → import data → Tavily for standards → office-automation for report."}</p>
              <CodeBlock>{`openclaw chat "先用find-skills搜索'Excel批量数据导入'相关技能，安装后批量导入数据，再用tavily-search查询最新数据统计标准，最后用office-automation生成统计报表"`}</CodeBlock>
            </section>

            {/* 九、常见问题 */}
            <section id="faq" className="scroll-mt-28 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
                <HelpCircle className="h-5 w-5 text-primary" />
                {isZh ? "踩坑了怎么办" : "When things go wrong"}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{isZh ? "列几个新手最容易撞上的问题，照着做一般能解决。" : "Common issues and fixes below."}</p>
              <ul className="mt-4 space-y-6 text-sm">
                <li>
                  <strong className="text-foreground">{isZh ? "提示 API-Key invalid：" : "API-Key invalid: "}</strong>
                  {isZh ? "先看密钥有没有多打空格、大小写对不对；再去阿里云控制台看密钥是不是启用状态；初始化时模型要选 Qwen (OAuth)。" : "No extra spaces, correct case; enable key in Aliyun console; pick Qwen (OAuth) at init."}
                </li>
                <li>
                  <strong className="text-foreground">{isZh ? "装技能时超时或失败：" : "Install timeout/fail: "}</strong>
                  <CodeBlock>{`openclaw config set plugins.registry https://registry.npmmirror.com/openclaw-plugins
npx clawhub@latest install <skill-slug>`}</CodeBlock>
                </li>
                <li>
                  <strong className="text-foreground">{isZh ? "说 18789 端口被占：" : "Port 18789 in use: "}</strong>
                  <CodeBlock>{`lsof -i:18789
kill -9 <PID>
openclaw gateway restart`}</CodeBlock>
                </li>
                <li>
                  <strong className="text-foreground">{isZh ? "列表里是 not ready、用不了：" : "Skill not ready: "}</strong>
                  <CodeBlock>{`openclaw skills enable <skill-slug>
openclaw skills install-deps <skill-slug>
openclaw gateway restart`}</CodeBlock>
                </li>
                <li>
                  <strong className="text-foreground">{isZh ? "网页控制台登不上、Token 报错：" : "Web console Token invalid: "}</strong>
                  <CodeBlock>openclaw token generate --expire 365d</CodeBlock>
                </li>
                <li>
                  <strong className="text-foreground">{isZh ? "重启服务器后龙虾没起来：" : "No auto-start after reboot: "}</strong>
                  <CodeBlock>{`openclaw gateway enable
openclaw gateway is-enabled`}</CodeBlock>
                </li>
              </ul>
            </section>

            {/* 十、进阶 */}
            <section id="advanced" className="scroll-mt-28 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
                <Rocket className="h-5 w-5 text-primary" />
                {isZh ? "再往后：省资源、自己写技能" : "Next: trim resources, custom skills"}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{isZh ? "用不上的技能关掉就行，别卸；偶尔清一下缓存能少占盘。" : "Disable skills you don’t use; clear cache to free disk."}</p>
              <CodeBlock>{`openclaw skills disable <skill-slug>
openclaw skills clean-cache`}</CodeBlock>
              <p className="mt-4 text-sm text-muted-foreground">{isZh ? "想自己写一个技能：在 ~/.openclaw/skills 下建目录，放 skill.json 和入口脚本，再用 install/enable 装上去。" : "Custom skill: create a dir under ~/.openclaw/skills, add skill.json and entry script, then install and enable."}</p>
              <CodeBlock>{`mkdir -p ~/.openclaw/skills/my-custom-skill
cd ~/.openclaw/skills/my-custom-skill
# 创建 skill.json、index.js 等
openclaw skills install ~/.openclaw/skills/my-custom-skill
openclaw skills enable my-custom-skill`}</CodeBlock>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
