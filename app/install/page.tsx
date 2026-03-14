"use client"

import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useI18n } from "@/lib/i18n"
import { ArrowLeft, ExternalLink } from "lucide-react"

const MIAODA_URL = "https://miaoda.feishu.cn/home"
const WORKBUDDY_URL = "https://www.codebuddy.cn/work/"

// 图片统一缩小展示：最大宽度 560px，高度按比例
const IMG_MAX_W = 560
const IMG_STEP = { w: 560, h: 373 }
const IMG_TALL = { w: 560, h: 420 }

export default function InstallPage() {
  const { locale } = useI18n()
  const isZh = locale === "zh"

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {isZh ? "返回首页" : "Back to Home"}
        </Link>

        {/* 第一章：部署方式选择 */}
        <section className="mb-10 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            {isZh ? "先想清楚：放自己电脑，还是放云端？" : "First: run it on your PC or in the cloud?"}
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            {isZh
              ? "OpenClaw 的“大脑”可以装在你手边的电脑上（本地），也可以装在大厂的服务器上（云端）。选哪种，决定了它是你桌边的「全能管家」还是 24 小时在线的「数字分身」。"
              : "OpenClaw can run on your own Mac/PC (local) or on a rented cloud server. That choice decides whether it’s a desktop assistant or an always-on remote one."}
          </p>
          <div className="mb-4 grid gap-4 text-sm sm:grid-cols-2">
            <div className="rounded-lg border border-border/50 bg-muted/20 p-4">
              <p className="mb-2 font-medium text-foreground">
                {isZh ? "本地部署" : "Local"}
              </p>
              <p className="mb-2 text-muted-foreground">
                {isZh ? "装在你自己的 Mac / PC / NAS 上。" : "Runs on your Mac, PC, or NAS."}
              </p>
              <p className="text-xs text-muted-foreground">
                {isZh ? "✓ 能直接动你电脑里的文件，隐私在自己手里，不另付月租。✗ 电脑关或断网就收不到指令，大任务会占你电脑性能。" : "✓ Direct file access, privacy, no monthly fee. ✗ Off when your PC is off or offline."}
              </p>
            </div>
            <div className="rounded-lg border border-border/50 bg-muted/20 p-4">
              <p className="mb-2 font-medium text-foreground">
                {isZh ? "云端部署" : "Cloud"}
              </p>
              <p className="mb-2 text-muted-foreground">
                {isZh ? "装在大厂服务器上（如飞书秒搭、阿里云）。" : "Runs on a cloud server (e.g. Feishu Miaoda)."}
              </p>
              <p className="text-xs text-muted-foreground">
                {isZh ? "✓ 24 小时在线，不占你电脑。✗ 动不了你本地文件，每月要付服务器钱。" : "✓ Always on, no local load. ✗ No local file access, monthly cost."}
              </p>
            </div>
          </div>
          <p className="mb-3 text-sm font-medium text-foreground">
            {isZh ? "还不确定？看下面这张表对号入座：" : "Still unsure? Match your situation:"}
          </p>
          <div className="overflow-x-auto rounded-lg border border-border/50">
            <table className="w-full min-w-[320px] text-left text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-muted/30">
                  <th className="px-3 py-2.5 font-medium text-foreground">
                    {isZh ? "需求场景" : "Scenario"}
                  </th>
                  <th className="px-3 py-2.5 font-medium text-foreground">
                    {isZh ? "推荐方式" : "Recommend"}
                  </th>
                  <th className="px-3 py-2.5 font-medium text-foreground">
                    {isZh ? "理由" : "Why"}
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/40">
                  <td className="px-3 py-2.5">{isZh ? "需要它写代码、改本地文档" : "Code & local files"}</td>
                  <td className="px-3 py-2.5">{isZh ? "本地" : "Local"}</td>
                  <td className="px-3 py-2.5">{isZh ? "直接读写本地文件，效率最高" : "Direct file access, most efficient"}</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="px-3 py-2.5">{isZh ? "经常在外，要随时微信传文档" : "Often out, need WeChat anytime"}</td>
                  <td className="px-3 py-2.5">{isZh ? "云端" : "Cloud"}</td>
                  <td className="px-3 py-2.5">{isZh ? "随时在线，不会因家里断网失联" : "Always online, no home outage"}</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="px-3 py-2.5">{isZh ? "完全不想折腾命令行" : "Don’t want command line"}</td>
                  <td className="px-3 py-2.5">{isZh ? "本地" : "Local"}</td>
                  <td className="px-3 py-2.5">{isZh ? "Windows/Mac 图形界面更顺手" : "GUI on Windows/Mac is easier"}</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="px-3 py-2.5">{isZh ? "对隐私极度在意" : "Care a lot about privacy"}</td>
                  <td className="px-3 py-2.5">{isZh ? "本地" : "Local"}</td>
                  <td className="px-3 py-2.5">{isZh ? "数据在自己硬盘，更安心" : "Data on your disk, more secure"}</td>
                </tr>
                <tr>
                  <td className="px-3 py-2.5">{isZh ? "不想家里电脑一直开着" : "Don’t want PC on 24/7"}</td>
                  <td className="px-3 py-2.5">{isZh ? "云端" : "Cloud"}</td>
                  <td className="px-3 py-2.5">{isZh ? "云服务器 24 小时稳定在线" : "Cloud is always on and stable"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <header className="mb-6">
          <h1 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {isZh ? "OpenClaw 部署安装教程" : "OpenClaw Installation Guide"}
          </h1>
          <p className="mb-4 text-muted-foreground">
            {isZh
              ? "下面两种是零门槛的现成方式：飞书（云端）、微信（本地，电脑要开着）。根据上面的选择或喜好，选一种查看详细步骤。"
              : "Two no-setup options: Feishu (cloud) or WeChat (local, PC must be on). Pick one to see the steps."}
          </p>
          <Tabs defaultValue="feishu" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md">
              <TabsTrigger value="feishu" className="text-sm sm:text-base">
                {isZh ? "飞书秒搭" : "Feishu Miaoda"}
              </TabsTrigger>
              <TabsTrigger value="wechat" className="text-sm sm:text-base">
                {isZh ? "微信" : "WeChat"}
              </TabsTrigger>
            </TabsList>
            <p className="mt-2 text-xs text-muted-foreground">
              {isZh ? "在飞书里用，约 1 分钟 · 在微信里发消息使唤龙虾，约 5 分钟" : "Use in Feishu ~1 min · Or use in WeChat ~5 min"}
            </p>

            <TabsContent value="feishu" className="mt-6">
              <section>
                <h2 className="mb-6 text-xl font-semibold text-foreground">
                  {isZh ? "飞书秒搭 · 三步搞定" : "Feishu Miaoda · 3 steps"}
                </h2>

          {/* 步骤 1 */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">1</span>
              <span className="font-medium text-foreground">
                {isZh ? "打开飞书秒搭，点「创建」OpenClaw 智能助手" : "Open Feishu Miaoda, click Create → OpenClaw"}
              </span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {isZh ? "打开官网，找到「OpenClaw 智能助手」，点右侧蓝色「创建」按钮。" : "Open the link below, find OpenClaw Smart Assistant, click Create."}
            </p>
            <figure className="mb-2 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50 bg-card/40">
              <Image
                src="/install/feishu-miaoda-1.png"
                alt={isZh ? "飞书妙搭首页，创建 OpenClaw" : "Feishu Miaoda, create OpenClaw"}
                width={IMG_STEP.w}
                height={IMG_STEP.h}
                className="w-full object-contain"
                priority
                sizes="(max-width: 560px) 100vw, 560px"
              />
            </figure>
          </div>

          {/* 步骤 2 */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">2</span>
              <span className="font-medium text-foreground">
                {isZh ? "等约 1 分钟，自动部署完成" : "Wait ~1 minute for auto deployment"}
              </span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {isZh ? "页面会显示「启动云端电脑 → 启动 OpenClaw → 连接飞书」，全程自动，无需操作。" : "The page shows progress: start cloud → start OpenClaw → connect Feishu. No action needed."}
            </p>
            <figure className="mb-2 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50 bg-card/40">
              <Image
                src="/install/feishu-miaoda-2.png"
                alt={isZh ? "创建进度" : "Creation progress"}
                width={IMG_STEP.w}
                height={IMG_STEP.h}
                className="w-full object-contain"
                sizes="(max-width: 560px) 100vw, 560px"
              />
            </figure>
            <p className="mt-3 text-sm text-muted-foreground">
              {isZh ? "出现「你的助手已连接到飞书」就成功了，可点「去飞书对话」或「管理智能助手」。" : "When you see “Your assistant has connected to Feishu”, you’re done. Click “Go to Feishu” or “Manage”."}
            </p>
            <figure className="mb-2 mt-3 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50 bg-card/40">
              <Image
                src="/install/feishu-miaoda-3.png"
                alt={isZh ? "已连接飞书" : "Connected to Feishu"}
                width={IMG_STEP.w}
                height={IMG_STEP.h}
                className="w-full object-contain"
                sizes="(max-width: 560px) 100vw, 560px"
              />
            </figure>
          </div>

          {/* 步骤 3 */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">3</span>
              <span className="font-medium text-foreground">
                {isZh ? "在飞书里和机器人对话" : "Chat with the bot in Feishu"}
              </span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {isZh ? "打开飞书（手机或电脑都行），在聊天里找到你的 OpenClaw 助手，直接发消息即可。帮你管理日程、写文档、总结消息等。" : "Open Feishu (app or web), find your OpenClaw assistant in chat, and start messaging. You can schedule, write docs, summarize messages, etc."}
            </p>
            <figure className="mb-2 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50 bg-card/40">
              <Image
                src="/install/feishu-miaoda-5.png"
                alt={isZh ? "飞书里和助手对话" : "Chat with assistant in Feishu"}
                width={IMG_STEP.w}
                height={IMG_TALL.h}
                className="w-full object-contain"
                sizes="(max-width: 560px) 100vw, 560px"
              />
            </figure>
          </div>

          {/* 小贴士：模型切换 */}
          <div className="mb-8 rounded-lg border border-border/50 bg-muted/20 p-4">
            <p className="text-sm font-medium text-foreground">
              {isZh ? "💡 想换模型？" : "💡 Want to change model?"}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {isZh
                ? "默认是妙搭的自动模型。在飞书秒搭的「管理智能助手」里，用对话告诉助手「换一个模型」并重启即可。"
                : "Default is Miaoda auto model. In Feishu Miaoda → Manage assistant, tell it to switch model and restart."}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              {isZh ? "准备好就点下面按钮，去飞书秒搭创建你的 OpenClaw：" : "Click below to create your OpenClaw on Feishu Miaoda:"}
            </p>
            <a href={MIAODA_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                {isZh ? "打开飞书秒搭 · 创建" : "Open Feishu Miaoda · Create"}
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
              </section>
            </TabsContent>

            <TabsContent value="wechat" className="mt-6">
              <section>
                <h2 className="mb-6 text-xl font-semibold text-foreground">
                  {isZh ? "微信 · 发消息就能使唤龙虾" : "WeChat · Chat with OpenClaw"}
                </h2>
                <p className="mb-6 text-sm text-muted-foreground">
                  {isZh
                    ? "在微信里发一句话，电脑上的龙虾就帮你干活。先装腾讯的桌面工具 WorkBuddy，再绑一下微信，约 5 分钟搞定。"
                    : "Send a message in WeChat and your PC runs OpenClaw. Install WorkBuddy, bind WeChat, ~5 minutes."}
                </p>

          {/* 步骤 1：下载安装 WorkBuddy */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">1</span>
              <span className="font-medium text-foreground">
                {isZh ? "在电脑上下载并安装 WorkBuddy" : "Download and install WorkBuddy on your PC"}
              </span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {isZh ? "打开下载页，点「下载 WorkBuddy」，装的时候一路点「下一步」即可。" : "Open the download page, click Download WorkBuddy, then Next through the installer."}
            </p>
            <figure className="mb-2 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50 bg-card/40">
              <Image
                src="/install/wechat-workbuddy-1.png"
                alt={isZh ? "WorkBuddy 下载页" : "WorkBuddy download page"}
                width={IMG_STEP.w}
                height={IMG_STEP.h}
                className="w-full object-contain"
                sizes="(max-width: 560px) 100vw, 560px"
              />
            </figure>
            <a
              href={WORKBUDDY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              {isZh ? "打开 WorkBuddy 下载页" : "Open WorkBuddy download"}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* 步骤 2：登录 */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">2</span>
              <span className="font-medium text-foreground">
                {isZh ? "打开 WorkBuddy，用微信登录" : "Open WorkBuddy and log in with WeChat"}
              </span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {isZh ? "打开软件后点「登录」，浏览器会弹出页面，用微信扫一扫即可登录。" : "Click Login, then scan the QR code with WeChat to sign in."}
            </p>
            <figure className="mb-2 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50 bg-card/40">
              <Image
                src="/install/wechat-workbuddy-2.png"
                alt={isZh ? "WorkBuddy 主界面" : "WorkBuddy main screen"}
                width={IMG_STEP.w}
                height={IMG_TALL.h}
                className="w-full object-contain"
                sizes="(max-width: 560px) 100vw, 560px"
              />
            </figure>
          </div>

          {/* 步骤 3：绑定微信 */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">3</span>
              <span className="font-medium text-foreground">
                {isZh ? "绑定用来和龙虾聊天的微信号" : "Bind the WeChat account for chatting with OpenClaw"}
              </span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {isZh
                ? "在 WorkBuddy 主界面点右上角头像，菜单里选「Claw 设置」。在设置里找到「微信客服号集成」，点右侧「配置」，会弹出一个二维码，用微信扫一下，几秒就绑好了。看到你的头像和「已绑定」就说明成功。二维码有过期时间，过期了再点一次「配置」刷新即可；想换微信号就点「解绑」再重新绑。"
                : "Click your avatar (top right) → Claw 设置. Find 微信客服号集成, click 配置, scan the QR code with WeChat. When you see your avatar and 已绑定, you’re done. QR expires—click 配置 again to refresh."}
            </p>
            <figure className="mb-2 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50 bg-card/40">
              <Image
                src="/install/wechat-workbuddy-3.png"
                alt={isZh ? "点头像进入 Claw 设置" : "Avatar → Claw Settings"}
                width={IMG_STEP.w}
                height={IMG_TALL.h}
                className="w-full object-contain"
                sizes="(max-width: 560px) 100vw, 560px"
              />
            </figure>
            <figure className="mb-2 mt-3 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50 bg-card/40">
              <Image
                src="/install/wechat-workbuddy-4.png"
                alt={isZh ? "微信客服号集成，扫二维码绑定" : "WeChat integration, scan QR to bind"}
                width={IMG_STEP.w}
                height={IMG_TALL.h}
                className="w-full object-contain"
                sizes="(max-width: 560px) 100vw, 560px"
              />
            </figure>
            <figure className="mb-2 mt-3 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50 bg-card/40">
              <Image
                src="/install/wechat-workbuddy-5.png"
                alt={isZh ? "绑定成功，显示已绑定" : "Bound successfully"}
                width={IMG_STEP.w}
                height={IMG_TALL.h}
                className="w-full object-contain"
                sizes="(max-width: 560px) 100vw, 560px"
              />
            </figure>
          </div>

          {/* 步骤 4：完成 */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">4</span>
              <span className="font-medium text-foreground">
                {isZh ? "在微信里和龙虾聊天" : "Chat with OpenClaw in WeChat"}
              </span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {isZh
                ? "到这里就全部配好了。以后在微信里发消息，电脑上的龙虾就会干活——微信只是遥控器，活是电脑在干。注意：电脑要开着、WorkBuddy 也要开着，合上笔记本或关掉软件就收不到消息了；发了没反应的话，回去看下电脑是否在运行。"
                : "All set. Send messages in WeChat and your PC runs OpenClaw. Keep your computer on and WorkBuddy running, or you won’t receive messages."}
            </p>
            <figure className="mb-2 max-w-[min(100%,560px)] overflow-hidden rounded-lg border border-border/50 bg-card/40">
              <Image
                src="/install/wechat-workbuddy-6.png"
                alt={isZh ? "WorkBuddy 对话界面" : "WorkBuddy chat"}
                width={IMG_STEP.w}
                height={IMG_TALL.h}
                className="w-full object-contain"
                sizes="(max-width: 560px) 100vw, 560px"
              />
            </figure>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              {isZh ? "先去下载 WorkBuddy：" : "Download WorkBuddy:"}
            </p>
            <a href={WORKBUDDY_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                {isZh ? "打开 WorkBuddy 下载页" : "Open WorkBuddy download"}
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
              </section>
            </TabsContent>
          </Tabs>
        </header>

        <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            {isZh ? "部署完成后，默认仅具备基础对话能力，需安装必装 Skills 才能解锁实操功能。" : "After deployment, only basic chat is available. Install required Skills to unlock real capabilities."}
          </p>
          <Link href="/#skills" className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
            {isZh ? "→ 在首页「精选 Skills」中查看「必装 Skills 指南」" : "→ See Required Skills Guide in Featured Skills on homepage"}
          </Link>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          {isZh ? "更多方式（自建服务器、Docker 等）可参考 OpenClaw 官方文档。" : "For self-hosted or Docker, see OpenClaw official docs."}
        </p>
      </div>
    </div>
  )
}
