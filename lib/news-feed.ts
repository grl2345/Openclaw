import { OFFICIAL_LINKS } from "@/lib/official-links"

export type NewsCategory =
  | "all"
  | "official"
  | "research"
  | "programming"
  | "data"
  | "design"
  | "productivity"

export type SortType = "latest" | "hot"

export interface FeedItem {
  id: string
  source: string
  author: string
  date: string | null
  titleZh: string
  titleEn: string
  descriptionZh: string
  descriptionEn: string
  tags: string[]
  viewCount: number | null
  url: string
  category: NewsCategory
}

const OFFICIAL_CATEGORY: NewsCategory = "official"

/** 将官方链接转为统一的 Feed 卡片数据，便于与后续社区内容一起展示 */
export function getOfficialFeedItems(): FeedItem[] {
  return OFFICIAL_LINKS.map((item) => ({
    id: item.id,
    source: "official",
    author: "OpenClaw",
    date: null,
    titleZh: item.titleZh,
    titleEn: item.titleEn,
    descriptionZh: item.introZh,
    descriptionEn: item.introEn,
    tags: ["official"],
    viewCount: null,
    url: item.url,
    category: OFFICIAL_CATEGORY,
  }))
}

/** 后续社区收录可 push 到此数组，与官方合并后展示 */
export const COMMUNITY_FEED_ITEMS: FeedItem[] = [
  {
    id: "community-01",
    source: "少数派",
    author: "张明远",
    date: "2026-02-18",
    titleZh: "我用 OpenClaw 替代了个人助理，三个月实践总结",
    titleEn: "I Replaced My Personal Assistant with OpenClaw: 3-Month Review",
    descriptionZh: "从日历管理、邮件分类到会议纪要，分享 OpenClaw 在真实工作中的完整落地方案与踩坑记录。",
    descriptionEn: "From calendar management to email triage and meeting notes — a full real-world deployment guide with lessons learned.",
    tags: ["实践", "生产力", "教程"],
    viewCount: 4820,
    url: "https://sspai.com/post/openclaw-personal-assistant-review",
    category: "productivity",
  },
  {
    id: "community-02",
    source: "掘金",
    author: "李程序",
    date: "2026-02-25",
    titleZh: "30 分钟用 OpenClaw 搭建客服机器人",
    titleEn: "Build a Customer Support Bot with OpenClaw in 30 Minutes",
    descriptionZh: "手把手教程：从部署到接入飞书，完整演示如何用 OpenClaw 快速搭建一个能处理 80% 常见问题的客服机器人。",
    descriptionEn: "Step-by-step: from deployment to Feishu integration, building a support bot that handles 80% of common questions.",
    tags: ["教程", "飞书", "客服"],
    viewCount: 3650,
    url: "https://juejin.cn/post/openclaw-customer-support-bot",
    category: "programming",
  },
  {
    id: "community-03",
    source: "CSDN",
    author: "王晓峰",
    date: "2026-03-01",
    titleZh: "OpenClaw 多智能体实战：踩了哪些坑",
    titleEn: "Multi-Agent Systems with OpenClaw: Lessons Learned",
    descriptionZh: "深度分享构建多智能体系统时遇到的状态同步、任务调度与成本控制三大难题及解决方案。",
    descriptionEn: "Deep dive into three challenges of multi-agent systems: state sync, task scheduling, and cost control — with solutions.",
    tags: ["多智能体", "架构", "实践"],
    viewCount: 5100,
    url: "https://blog.csdn.net/openclaw-multi-agent-lessons",
    category: "programming",
  },
  {
    id: "community-04",
    source: "V2EX",
    author: "开源爱好者",
    date: "2026-01-30",
    titleZh: "在树莓派上运行 OpenClaw：完整教程",
    titleEn: "Running OpenClaw on Raspberry Pi: The Complete Guide",
    descriptionZh: "详细记录在树莓派 4B 上部署 OpenClaw 的全过程，包括性能优化、省电配置与远程访问方案。",
    descriptionEn: "Full walkthrough of deploying OpenClaw on Raspberry Pi 4B, including performance tweaks, power saving, and remote access.",
    tags: ["树莓派", "部署", "硬件"],
    viewCount: 2980,
    url: "https://v2ex.com/t/openclaw-raspberry-pi-deployment",
    category: "programming",
  },
  {
    id: "community-05",
    source: "知乎专栏",
    author: "AI 实践派",
    date: "2026-03-05",
    titleZh: "OpenClaw + Notion：打造你的第二大脑",
    titleEn: "OpenClaw + Notion: Building Your Second Brain",
    descriptionZh: "详解如何把 OpenClaw 与 Notion 深度打通，实现知识自动入库、智能检索与每周知识回顾。",
    descriptionEn: "How to deeply integrate OpenClaw with Notion for auto knowledge ingestion, smart search, and weekly reviews.",
    tags: ["Notion", "知识管理", "PKM"],
    viewCount: 6200,
    url: "https://zhuanlan.zhihu.com/p/openclaw-notion-second-brain",
    category: "productivity",
  },
  {
    id: "community-06",
    source: "Medium",
    author: "Sarah Chen",
    date: "2026-02-10",
    titleZh: "我如何用 OpenClaw 让内容创作效率提升 10 倍",
    titleEn: "How OpenClaw 10x'd My Content Creation Workflow",
    descriptionZh: "从选题调研、初稿写作到多平台分发，完整介绍使用 OpenClaw 构建内容流水线的实践经验。",
    descriptionEn: "From topic research to first draft to cross-platform distribution — a full content pipeline built on OpenClaw.",
    tags: ["内容创作", "效率", "流水线"],
    viewCount: 8900,
    url: "https://medium.com/@sarahchen/openclaw-content-creation-10x",
    category: "productivity",
  },
  {
    id: "community-07",
    source: "Dev.to",
    author: "Marcus Liu",
    date: "2026-02-28",
    titleZh: "用 Ollama 本地模型运行 OpenClaw：零成本 AI 助手",
    titleEn: "Running OpenClaw with Local Models (Ollama): Zero-Cost AI",
    descriptionZh: "完整教程：如何将 OpenClaw 与 Ollama 本地模型结合，实现完全离线、零 API 成本的 AI 工作流。",
    descriptionEn: "Full tutorial: combining OpenClaw with Ollama for fully offline, zero-API-cost AI workflows.",
    tags: ["Ollama", "本地模型", "开源"],
    viewCount: 11200,
    url: "https://dev.to/marcusliu/openclaw-ollama-zero-cost-ai",
    category: "programming",
  },
  {
    id: "community-08",
    source: "阮一峰技术周刊",
    author: "阮一峰",
    date: "2026-03-08",
    titleZh: "科技爱好者周刊：OpenClaw 生态正在形成",
    titleEn: "Tech Weekly: The OpenClaw Ecosystem Is Taking Shape",
    descriptionZh: "周刊推荐 OpenClaw 及其技能生态，分析为何它成为开发者自建 AI 助手的首选工具之一。",
    descriptionEn: "Weekly recommendation for OpenClaw and its skills ecosystem — why it's becoming a go-to for developers building AI assistants.",
    tags: ["周刊", "生态", "推荐"],
    viewCount: 15600,
    url: "https://ruanyifeng.com/blog/2026/03/weekly-issue-openclaw-ecosystem.html",
    category: "official",
  },
  {
    id: "community-09",
    source: "掘金",
    author: "前端小王子",
    date: "2026-01-20",
    titleZh: "OpenClaw 技能生态全解析：从入门到进阶",
    titleEn: "The OpenClaw Skills Ecosystem Explained: Beginner to Advanced",
    descriptionZh: "系统梳理 OpenClaw Skills 的分类体系、安装方法与最佳实践，帮助新手快速掌握技能管理。",
    descriptionEn: "Systematic overview of OpenClaw Skills: categories, installation, and best practices for new users.",
    tags: ["技能", "教程", "入门"],
    viewCount: 7300,
    url: "https://juejin.cn/post/openclaw-skills-ecosystem-guide",
    category: "programming",
  },
  {
    id: "community-10",
    source: "B站",
    author: "AI 折腾笔记",
    date: "2026-03-10",
    titleZh: "【视频教程】OpenClaw 从零部署到飞书机器人全流程",
    titleEn: "【Video】OpenClaw: Full Deployment to Feishu Bot Walkthrough",
    descriptionZh: "40 分钟完整视频教程，从环境搭建到飞书对接，适合完全没有基础的新手跟着做。",
    descriptionEn: "40-minute video tutorial from environment setup to Feishu bot, perfect for beginners with zero experience.",
    tags: ["视频教程", "飞书", "零基础"],
    viewCount: 22000,
    url: "https://www.bilibili.com/video/BV1openclaw-feishu-deploy",
    category: "programming",
  },
  {
    id: "community-11",
    source: "少数派",
    author: "效率工具控",
    date: "2026-02-05",
    titleZh: "OpenClaw 与五款效率工具的深度集成方案",
    titleEn: "Deep Integration: OpenClaw with 5 Productivity Tools",
    descriptionZh: "详细介绍 OpenClaw 与 Notion、Obsidian、Todoist、飞书、Google Calendar 五款工具的集成方案与使用体验。",
    descriptionEn: "Detailed integration guides for OpenClaw with Notion, Obsidian, Todoist, Feishu, and Google Calendar.",
    tags: ["集成", "效率工具", "Notion"],
    viewCount: 5400,
    url: "https://sspai.com/post/openclaw-5-productivity-tools-integration",
    category: "productivity",
  },
  {
    id: "community-12",
    source: "GitHub Discussions",
    author: "devhunter42",
    date: "2026-03-12",
    titleZh: "使用 OpenClaw 监控生产环境：最佳实践分享",
    titleEn: "Using OpenClaw for Production Monitoring: Best Practices",
    descriptionZh: "分享在生产环境中用 OpenClaw 监控服务健康、自动告警与故障自愈的实际案例与配置示例。",
    descriptionEn: "Real-world cases and configs for using OpenClaw to monitor service health, auto-alert, and self-heal in production.",
    tags: ["运维", "生产环境", "监控"],
    viewCount: 3200,
    url: "https://github.com/openclaw/openclaw/discussions/monitoring-best-practices",
    category: "programming",
  },
]

export function getAllFeedItems(): FeedItem[] {
  return [...getOfficialFeedItems(), ...COMMUNITY_FEED_ITEMS]
}

export function filterByCategory(items: FeedItem[], category: NewsCategory): FeedItem[] {
  if (category === "all") return items
  return items.filter((i) => i.category === category)
}

export function filterBySearch(
  items: FeedItem[],
  query: string,
  isZh: boolean
): FeedItem[] {
  if (!query.trim()) return items
  const lower = query.trim().toLowerCase()
  return items.filter((item) => {
    const title = (isZh ? item.titleZh : item.titleEn).toLowerCase()
    const desc = (isZh ? item.descriptionZh : item.descriptionEn).toLowerCase()
    const text = [item.titleZh, item.titleEn, item.descriptionZh, item.descriptionEn].join(" ").toLowerCase()
    return text.includes(lower)
  })
}

export function sortFeedItems(items: FeedItem[], sort: SortType): FeedItem[] {
  if (sort === "latest") {
    return [...items].sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : 0
      const db = b.date ? new Date(b.date).getTime() : 0
      return db - da
    })
  }
  // 最热：按 viewCount 降序，无数据的排后
  return [...items].sort((a, b) => {
    const va = a.viewCount ?? 0
    const vb = b.viewCount ?? 0
    return vb - va
  })
}
