export type Difficulty = "easy" | "medium" | "hard"
export type Category = "china" | "social" | "creative" | "devops" | "productivity" | "research" | "finance"

export interface UseCase {
  id: string
  title: {
    zh: string
    en: string
  }
  description: {
    zh: string
    en: string
  }
  fullDescription: {
    zh: string
    en: string
  }
  category: Category
  difficulty: Difficulty
  tags: string[]
  tagsEn?: string[]
  featured?: boolean
  requirements: {
    zh: string[]
    en: string[]
  }
  steps: {
    zh: string[]
    en: string[]
  }
  tips: {
    zh: string[]
    en: string[]
  }
  externalUrl?: string
}

// 用例来源：AlexAnys/awesome-openclaw-usecases-zh（中文）、hesamsheikh/awesome-openclaw-usecases（国际）、EvoLinkAI/awesome-openclaw-usecases-moltbook 等
export const useCases: UseCase[] = [
  // 国内生态用例
  {
    id: "feishu-ai-assistant",
    title: { zh: "飞书 AI 助手", en: "Feishu AI Assistant" },
    description: {
      zh: "把 OpenClaw 部署为飞书机器人，在对话中直接触发 AI 任务，支持文档自动化",
      en: "Deploy OpenClaw as a Feishu bot, trigger AI tasks in conversations, supports document automation",
    },
    fullDescription: {
      zh: "将 OpenClaw 无缝集成到飞书工作流中，创建一个智能机器人助手。支持在群聊或私聊中直接 @机器人 触发 AI 任务，可以自动处理文档、表格、会议纪要等多种办公场景。通过 webhook 和事件订阅，实现消息实时响应和任务自动执行。",
      en: "Seamlessly integrate OpenClaw into your Feishu workflow by creating an intelligent bot assistant. Support triggering AI tasks by @mentioning the bot in group or private chats. Automatically handle documents, spreadsheets, meeting notes and various office scenarios. Achieve real-time message responses and automatic task execution through webhooks and event subscriptions.",
    },
    category: "china",
    difficulty: "medium",
    tags: ["飞书", "机器人", "文档自动化"],
    tagsEn: ["Feishu", "Bot", "Doc Automation"],
    featured: true,
    requirements: {
      zh: ["飞书企业版或开放平台账号", "OpenClaw 已部署并运行", "具备 webhook 接收能力的服务器", "基础的 API 开发知识"],
      en: ["Feishu Enterprise or Open Platform account", "OpenClaw deployed and running", "Server capable of receiving webhooks", "Basic API development knowledge"],
    },
    steps: {
      zh: [
        "在飞书开放平台创建企业自建应用",
        "配置机器人能力，获取 App ID 和 App Secret",
        "设置事件订阅 URL，配置消息接收权限",
        "部署 webhook 服务，处理飞书消息事件",
        "集成 OpenClaw API，实现智能对话逻辑",
        "测试机器人响应，优化提示词和任务流程",
      ],
      en: [
        "Create an enterprise app on Feishu Open Platform",
        "Configure bot capabilities, obtain App ID and App Secret",
        "Set up event subscription URL, configure message permissions",
        "Deploy webhook service to handle Feishu message events",
        "Integrate OpenClaw API for intelligent conversation logic",
        "Test bot responses, optimize prompts and task workflows",
      ],
    },
    tips: {
      zh: [
        "建议使用 Stream 模式避免公网 IP 需求",
        "合理设置消息过滤规则，避免机器人循环回复",
        "利用飞书消息卡片提升交互体验",
        "定期检查 token 刷新逻辑确保稳定运行",
      ],
      en: [
        "Use Stream mode to avoid public IP requirements",
        "Set proper message filters to prevent bot reply loops",
        "Use Feishu message cards for better interaction",
        "Regularly check token refresh logic for stability",
      ],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "dingtalk-ai-assistant",
    title: { zh: "钉钉 AI 助手", en: "DingTalk AI Assistant" },
    description: {
      zh: "把 OpenClaw 部署为钉钉机器人，Stream 模式无需公网 IP",
      en: "Deploy OpenClaw as DingTalk bot, Stream mode requires no public IP",
    },
    fullDescription: {
      zh: "利用钉钉开放平台的 Stream 模式，无需公网 IP 即可部署 AI 机器人。支持单聊、群聊场景，可接入各种 AI 能力，实现智能问答、任务执行、通知推送等功能。特别适合内网环境或家庭服务器部署。",
      en: "Deploy AI bots using DingTalk's Stream mode without requiring a public IP. Supports private and group chat scenarios with various AI capabilities for Q&A, task execution, and notifications. Perfect for intranet or home server deployment.",
    },
    category: "china",
    difficulty: "medium",
    tags: ["钉钉", "机器人", "Stream"],
    requirements: {
      zh: ["钉钉企业账号", "钉钉开放平台应用", "OpenClaw 运行环境", "Node.js 或 Python 运行环境"],
      en: ["DingTalk enterprise account", "DingTalk Open Platform app", "OpenClaw runtime environment", "Node.js or Python runtime"],
    },
    steps: {
      zh: [
        "登录钉钉开放平台，创建企业内部应用",
        "添加机器人能力，启用 Stream 模式",
        "获取 Client ID 和 Client Secret",
        "使用官方 SDK 建立 Stream 连接",
        "集成 OpenClaw 处理消息逻辑",
        "测试并发布机器人",
      ],
      en: [
        "Log into DingTalk Open Platform, create internal app",
        "Add bot capability, enable Stream mode",
        "Obtain Client ID and Client Secret",
        "Use official SDK to establish Stream connection",
        "Integrate OpenClaw for message handling",
        "Test and publish the bot",
      ],
    },
    tips: {
      zh: [
        "Stream 模式长连接需要保持进程常驻",
        "使用 PM2 或 systemd 管理进程",
        "注意处理断线重连逻辑",
      ],
      en: [
        "Stream mode requires persistent process",
        "Use PM2 or systemd for process management",
        "Handle reconnection logic properly",
      ],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "wecom-ai-assistant",
    title: { zh: "企业微信 AI 助手", en: "WeCom AI Assistant" },
    description: {
      zh: "在企业微信中使用 AI，通过微信插件让个人微信也能用",
      en: "Use AI in WeCom, personal WeChat enabled via plugin",
    },
    fullDescription: {
      zh: "在企业微信环境中部署 AI 智能体，支持客服机器人、内部问答、知识库检索等场景。通过企业微信与个人微信的互通能力，还可以为外部客户提供 AI 服务。",
      en: "Deploy AI agents in WeCom environment, supporting customer service bots, internal Q&A, and knowledge base retrieval. Through WeCom's integration with personal WeChat, you can also provide AI services to external customers.",
    },
    category: "china",
    difficulty: "medium",
    tags: ["企业微信", "微信", "插件"],
    requirements: {
      zh: ["企业微信管理员权限", "企业微信开放平台应用", "服务器或云函数", "OpenClaw 环境"],
      en: ["WeCom admin privileges", "WeCom Open Platform app", "Server or cloud functions", "OpenClaw environment"],
    },
    steps: {
      zh: [
        "在企业微信管理后台创建应用",
        "配置回调 URL 和 Token",
        "开启 API 接收消息功能",
        "部署消息处理服务",
        "集成 OpenClaw API",
        "配置客服或群机器人",
      ],
      en: [
        "Create app in WeCom admin console",
        "Configure callback URL and Token",
        "Enable API message receiving",
        "Deploy message handling service",
        "Integrate OpenClaw API",
        "Configure customer service or group bot",
      ],
    },
    tips: {
      zh: [
        "注意企业微信的消息加解密",
        "合理使用消息类型（文本、图文、小程序卡片等）",
        "可以结合微信客服实现跨平台服务",
      ],
      en: [
        "Handle WeCom message encryption properly",
        "Use appropriate message types",
        "Can combine with WeChat customer service",
      ],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "morning-briefing-china",
    title: { zh: "早间简报（适配）", en: "Morning Briefing (China)" },
    description: {
      zh: "每日定时推送简报到飞书/钉钉，支持中文新闻源和 cron 配置",
      en: "Daily briefing pushed to Feishu/DingTalk, supports Chinese news sources and cron",
    },
    fullDescription: {
      zh: "打造个人化的每日早间简报系统，自动聚合多个信息源的内容，通过 AI 智能摘要后推送到飞书/钉钉。支持新闻、行业动态、天气、股市等多种信息类型，帮助你高效开启每一天。",
      en: "Build a personalized daily morning briefing system that automatically aggregates content from multiple sources, summarizes with AI, and pushes to Feishu/DingTalk. Supports news, industry updates, weather, stock market and more.",
    },
    category: "china",
    difficulty: "easy",
    tags: ["简报", "定时任务", "新闻"],
    tagsEn: ["Briefing", "Scheduled", "News"],
    featured: true,
    requirements: {
      zh: ["飞书/钉钉机器人 webhook", "定时任务服务（cron）", "OpenClaw 环境", "RSS 订阅源或 API"],
      en: ["Feishu/DingTalk bot webhook", "Cron service", "OpenClaw environment", "RSS feeds or APIs"],
    },
    steps: {
      zh: [
        "确定简报内容来源（RSS、API、网站）",
        "配置数据抓取脚本",
        "使用 AI 生成摘要和亮点",
        "格式化为消息卡片",
        "配置定时任务（每天早上 8 点）",
        "通过 webhook 推送到群聊",
      ],
      en: [
        "Determine content sources (RSS, API, websites)",
        "Configure data scraping scripts",
        "Use AI to generate summaries and highlights",
        "Format as message cards",
        "Configure cron job (8 AM daily)",
        "Push to group via webhook",
      ],
    },
    tips: {
      zh: [
        "选择稳定的中文新闻源（36氪、少数派等）",
        "控制简报长度，保持在 5-10 条",
        "可以加入个性化推荐",
      ],
      en: [
        "Choose stable Chinese news sources",
        "Keep briefing length at 5-10 items",
        "Can add personalized recommendations",
      ],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "xiaohongshu-automation",
    title: { zh: "小红书内容自动化", en: "Xiaohongshu Automation" },
    description: {
      zh: "从选题、文案、封面图到定时发布的全流程自动化",
      en: "Full workflow automation from topic selection to scheduled publishing",
    },
    fullDescription: {
      zh: "利用 AI 实现小红书内容创作的全流程自动化。从热门话题分析、选题策划、文案撰写、封面图生成到定时发布，一站式解决内容创作痛点。特别适合需要批量创作的运营人员和自媒体创作者。",
      en: "Automate the entire Xiaohongshu content creation workflow with AI. From trending topic analysis, content planning, copywriting, cover image generation to scheduled posting. Perfect for operators and content creators who need batch creation.",
    },
    category: "china",
    difficulty: "easy",
    tags: ["小红书", "内容创作", "自动化"],
    tagsEn: ["Xiaohongshu", "Content", "Automation"],
    featured: true,
    requirements: {
      zh: ["小红书创作者账号", "图片生成 AI（如 Midjourney、SD）", "OpenClaw 环境", "自动化工具（n8n/Make）"],
      en: ["Xiaohongshu creator account", "Image generation AI", "OpenClaw environment", "Automation tools (n8n/Make)"],
    },
    steps: {
      zh: [
        "分析目标领域的热门内容和关键词",
        "使用 AI 生成选题库",
        "根据选题生成多版本文案",
        "AI 生成配套的封面图",
        "人工审核和调整",
        "配置定时发布计划",
      ],
      en: [
        "Analyze trending content and keywords in target area",
        "Use AI to generate topic library",
        "Generate multiple versions of copy for each topic",
        "AI generates matching cover images",
        "Manual review and adjustment",
        "Configure scheduled publishing",
      ],
    },
    tips: {
      zh: [
        "注意遵守平台规则，避免过度营销",
        "保持内容调性一致",
        "定期分析数据优化内容策略",
        "结合热点时效性内容",
      ],
      en: [
        "Follow platform rules, avoid over-marketing",
        "Maintain consistent content tone",
        "Regularly analyze data to optimize strategy",
        "Combine with timely trending topics",
      ],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "a-stock-tracker",
    title: { zh: "A股财报追踪器", en: "A-Share Earnings Tracker" },
    description: {
      zh: "A 股财报追踪，AKShare 免费数据源 + 业绩预告/快报自动化",
      en: "A-share earnings tracking with AKShare free data source",
    },
    fullDescription: {
      zh: "基于 AKShare 免费数据接口，自动追踪 A 股上市公司的财报发布、业绩预告和业绩快报。支持自定义关注股票池，在财报发布时第一时间推送提醒和智能分析。",
      en: "Based on AKShare free data API, automatically track A-share listed company earnings releases, forecasts, and quick reports. Support custom watchlists with instant alerts and AI analysis when earnings are released.",
    },
    category: "china",
    difficulty: "medium",
    tags: ["A股", "财报", "AKShare"],
    requirements: {
      zh: ["Python 环境", "AKShare 库", "OpenClaw 环境", "消息推送渠道"],
      en: ["Python environment", "AKShare library", "OpenClaw environment", "Message push channel"],
    },
    steps: {
      zh: [
        "安装配置 AKShare",
        "设置关注的股票池",
        "配置定时数据抓取任务",
        "检测新发布的财报",
        "AI 生成财报分析摘要",
        "推送到飞书/钉钉",
      ],
      en: [
        "Install and configure AKShare",
        "Set up watchlist",
        "Configure scheduled data fetching",
        "Detect newly released earnings",
        "AI generates earnings analysis summary",
        "Push to Feishu/DingTalk",
      ],
    },
    tips: {
      zh: [
        "注意 AKShare 的调用频率限制",
        "财报季期间增加检查频率",
        "可以结合历史数据进行同比分析",
      ],
      en: [
        "Mind AKShare rate limits",
        "Increase check frequency during earnings season",
        "Can combine with historical data for YoY analysis",
      ],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  // 社交媒体
  {
    id: "reddit-digest",
    title: { zh: "每日 Reddit 摘要", en: "Daily Reddit Digest" },
    description: {
      zh: "根据你的偏好，生成你喜爱的 subreddit 精选摘要",
      en: "Generate curated summaries from your favorite subreddits",
    },
    fullDescription: {
      zh: "自动订阅你感兴趣的 subreddit，每天定时生成精选内容摘要。AI 会智能筛选高质量帖子，生成简洁的摘要和评论亮点，让你不错过任何有价值的讨论。",
      en: "Automatically subscribe to your favorite subreddits and generate daily curated summaries. AI intelligently filters high-quality posts, creates concise summaries and comment highlights so you never miss valuable discussions.",
    },
    category: "social",
    difficulty: "easy",
    tags: ["Reddit", "摘要", "内容聚合"],
    tagsEn: ["Reddit", "Summary", "Content"],
    featured: true,
    requirements: {
      zh: ["Reddit 账号", "Reddit API 凭证", "OpenClaw 环境"],
      en: ["Reddit account", "Reddit API credentials", "OpenClaw environment"],
    },
    steps: {
      zh: ["获取 Reddit API 凭证", "配置关注的 subreddit 列表", "设置内容筛选规则", "AI 生成摘要", "定时推送"],
      en: ["Get Reddit API credentials", "Configure subreddit list", "Set content filters", "AI generates summaries", "Schedule delivery"],
    },
    tips: {
      zh: ["按时间和热度平衡筛选内容", "可以按话题分类摘要"],
      en: ["Balance selection by time and popularity", "Can categorize summaries by topic"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "youtube-digest",
    title: { zh: "每日 YouTube 摘要", en: "Daily YouTube Digest" },
    description: {
      zh: "获取你关注频道的每日新视频摘要，不错过任何内容",
      en: "Get daily summaries of new videos from channels you follow",
    },
    fullDescription: {
      zh: "自动追踪你订阅的 YouTube 频道，每天生成新视频的智能摘要。包括视频主题、关键时间点、重要观点等，帮你快速判断是否值得观看完整视频。",
      en: "Automatically track your subscribed YouTube channels and generate intelligent summaries of new videos daily. Includes video topics, key timestamps, and main points to help you decide if the full video is worth watching.",
    },
    category: "social",
    difficulty: "easy",
    tags: ["YouTube", "视频", "摘要"],
    requirements: {
      zh: ["YouTube Data API", "OpenClaw 环境", "可选：字幕获取服务"],
      en: ["YouTube Data API", "OpenClaw environment", "Optional: subtitle service"],
    },
    steps: {
      zh: ["配置 YouTube API", "设置频道订阅列表", "获取视频信息和字幕", "AI 生成摘要", "推送通知"],
      en: ["Configure YouTube API", "Set up channel list", "Fetch video info and subtitles", "AI generates summaries", "Push notifications"],
    },
    tips: {
      zh: ["优先使用字幕生成更准确的摘要", "可以生成关键时间点便于跳转"],
      en: ["Use subtitles for better summaries", "Can generate timestamps for navigation"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "x-analysis",
    title: { zh: "X 账号分析", en: "X Account Analysis" },
    description: {
      zh: "获取你的 X（原 Twitter）账号的定性分析",
      en: "Get qualitative analysis of your X (formerly Twitter) account",
    },
    fullDescription: {
      zh: "深度分析 X 账号的内容表现、粉丝互动和增长趋势。AI 提供内容策略建议、最佳发布时间、热门话题推荐等洞察。",
      en: "Deep analysis of X account content performance, follower engagement, and growth trends. AI provides content strategy suggestions, optimal posting times, and trending topic recommendations.",
    },
    category: "social",
    difficulty: "medium",
    tags: ["Twitter", "X", "分析"],
    requirements: {
      zh: ["X API 访问权限", "OpenClaw 环境"],
      en: ["X API access", "OpenClaw environment"],
    },
    steps: {
      zh: ["配置 X API", "抓取账号数据", "AI 分析内容表现", "生成洞察报告"],
      en: ["Configure X API", "Fetch account data", "AI analyzes performance", "Generate insights report"],
    },
    tips: {
      zh: ["定期生成报告追踪变化", "结合竞品分析效果更好"],
      en: ["Generate regular reports to track changes", "Combine with competitor analysis"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "tech-news-aggregator",
    title: { zh: "多源科技新闻摘要", en: "Multi-Source Tech News" },
    description: {
      zh: "自动聚合 109+ 来源的科技新闻，支持质量评分和多渠道分发",
      en: "Auto-aggregate tech news from 109+ sources with quality scoring",
    },
    fullDescription: {
      zh: "构建个人科技新闻聚合平台，自动从 Hacker News、TechCrunch、Product Hunt 等 100+ 来源抓取内容。AI 进行去重、质量评分和智能分类，推送真正有价值的科技资讯。",
      en: "Build a personal tech news aggregation platform, automatically scraping content from 100+ sources like Hacker News, TechCrunch, Product Hunt. AI handles deduplication, quality scoring, and smart categorization.",
    },
    category: "social",
    difficulty: "medium",
    tags: ["新闻", "聚合", "科技"],
    requirements: {
      zh: ["RSS 解析器", "新闻 API（可选）", "OpenClaw 环境", "数据存储"],
      en: ["RSS parser", "News APIs (optional)", "OpenClaw environment", "Data storage"],
    },
    steps: {
      zh: ["收集新闻源列表", "配置 RSS 抓取", "AI 去重和评分", "智能分类", "多渠道分发"],
      en: ["Collect news source list", "Configure RSS fetching", "AI deduplication and scoring", "Smart categorization", "Multi-channel distribution"],
    },
    tips: {
      zh: ["按话题分组推送避免信息过载", "可以训练个性化推荐模型"],
      en: ["Group by topic to avoid overload", "Can train personalized recommendation model"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  // 创意与构建
  {
    id: "autonomous-tasks",
    title: { zh: "目标驱动的自主任务", en: "Goal-Driven Autonomous Tasks" },
    description: {
      zh: "告诉 AI 你的目标，它自动拆解并每天执行，还能一夜之间造出迷你应用",
      en: "Tell AI your goal, it breaks down and executes daily, can build mini apps overnight",
    },
    fullDescription: {
      zh: "只需告诉 AI 你的目标，它会自动拆解成可执行的子任务，每天自主执行并汇报进展。从学习计划到产品开发，甚至可以一夜之间构建出功能完整的迷你应用。",
      en: "Just tell AI your goal, it automatically breaks it down into executable subtasks, executes daily, and reports progress. From learning plans to product development, can even build functional mini apps overnight.",
    },
    category: "creative",
    difficulty: "medium",
    tags: ["自主任务", "目标", "应用构建"],
    tagsEn: ["Autonomous", "Goals", "App Build"],
    featured: true,
    requirements: {
      zh: ["OpenClaw 高级版", "代码执行环境（可选）", "外部工具集成"],
      en: ["OpenClaw Pro", "Code execution environment (optional)", "External tool integrations"],
    },
    steps: {
      zh: ["描述你的目标", "AI 生成任务计划", "配置自动执行", "每日进度汇报", "迭代优化"],
      en: ["Describe your goal", "AI generates task plan", "Configure auto-execution", "Daily progress reports", "Iterate and optimize"],
    },
    tips: {
      zh: ["目标描述越清晰效果越好", "设置合理的检查点和反馈机制"],
      en: ["Clearer goals yield better results", "Set reasonable checkpoints and feedback"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "youtube-pipeline",
    title: { zh: "YouTube 内容流水线", en: "YouTube Content Pipeline" },
    description: {
      zh: "为 YouTube 频道自动化视频创意发掘、研究和追踪",
      en: "Automate video idea discovery, research and tracking for YouTube channels",
    },
    fullDescription: {
      zh: "为 YouTube 创作者打造完整的内容生产流水线。自动挖掘热门话题、分析竞品视频、生成脚本大纲、追踪视频表现，让内容创作更系统化、更高效。",
      en: "Build a complete content production pipeline for YouTube creators. Auto-discover trending topics, analyze competitor videos, generate script outlines, track video performance for more systematic and efficient content creation.",
    },
    category: "creative",
    difficulty: "hard",
    tags: ["YouTube", "内容创作", "流水线"],
    requirements: {
      zh: ["YouTube Data API", "SEO 工具（可选）", "OpenClaw 环境", "项目管理工具"],
      en: ["YouTube Data API", "SEO tools (optional)", "OpenClaw environment", "Project management tool"],
    },
    steps: {
      zh: ["配置数据源", "话题研究和验证", "脚本大纲生成", "制作追踪", "发布后分析"],
      en: ["Configure data sources", "Topic research and validation", "Script outline generation", "Production tracking", "Post-publish analysis"],
    },
    tips: {
      zh: ["结合 SEO 工具提高选题成功率", "建立内容日历保持发布节奏"],
      en: ["Combine SEO tools for better topic selection", "Build content calendar for publishing rhythm"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "multi-agent-content",
    title: { zh: "多智能体内容工厂", en: "Multi-Agent Content Factory" },
    description: {
      zh: "在 Discord 中运行研究、写作、设计三个智能体组成的内容流水线",
      en: "Run a content pipeline with research, writing, and design agents in Discord",
    },
    fullDescription: {
      zh: "在 Discord 服务器中部署三个协作的 AI 智能体：研究员负责收集资料，写手负责撰写内容，设计师负责配图。通过频道消息协调工作，形成完整的内容生产流水线。",
      en: "Deploy three collaborative AI agents in Discord: Researcher collects materials, Writer creates content, Designer handles visuals. Coordinate through channel messages to form a complete content production pipeline.",
    },
    category: "creative",
    difficulty: "hard",
    tags: ["多智能体", "Discord", "内容"],
    requirements: {
      zh: ["Discord 服务器", "多个 AI 智能体", "OpenClaw 环境", "图像生成服务"],
      en: ["Discord server", "Multiple AI agents", "OpenClaw environment", "Image generation service"],
    },
    steps: {
      zh: ["搭建 Discord 服务器", "部署三个智能体", "配置协作流程", "设置触发词和指令", "测试内容生产"],
      en: ["Set up Discord server", "Deploy three agents", "Configure collaboration flow", "Set up triggers and commands", "Test content production"],
    },
    tips: {
      zh: ["明确每个智能体的职责边界", "设计合理的交接流程"],
      en: ["Define clear responsibilities for each agent", "Design proper handoff process"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  // 基础设施与 DevOps
  {
    id: "n8n-workflow",
    title: { zh: "n8n 工作流编排", en: "n8n Workflow Orchestration" },
    description: {
      zh: "通过 webhook 将 API 调用委托给 n8n 工作流，智能体从不接触凭证",
      en: "Delegate API calls to n8n workflows via webhook, agent never touches credentials",
    },
    fullDescription: {
      zh: "将敏感的 API 操作封装在 n8n 工作流中，AI 智能体只需调用 webhook 即可触发复杂操作。这种架构确保智能体永远不接触真实凭证，大大提升安全性。",
      en: "Encapsulate sensitive API operations in n8n workflows, AI agents just call webhooks to trigger complex operations. This architecture ensures agents never touch real credentials, greatly improving security.",
    },
    category: "devops",
    difficulty: "hard",
    tags: ["n8n", "工作流", "webhook"],
    requirements: {
      zh: ["n8n 实例", "OpenClaw 环境", "需要对接的第三方服务"],
      en: ["n8n instance", "OpenClaw environment", "Third-party services to integrate"],
    },
    steps: {
      zh: ["部署 n8n", "设计工作流", "配置 webhook 触发器", "集成 OpenClaw", "测试端到端流程"],
      en: ["Deploy n8n", "Design workflows", "Configure webhook triggers", "Integrate OpenClaw", "Test end-to-end flow"],
    },
    tips: {
      zh: ["为每个功能创建独立工作流", "添加错误处理和重试逻辑"],
      en: ["Create separate workflow for each function", "Add error handling and retry logic"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "self-healing-server",
    title: { zh: "自愈家庭服务器", en: "Self-Healing Home Server" },
    description: {
      zh: "运行始终在线的基础设施智能体，自动发现并修复故障",
      en: "Run an always-on infrastructure agent that auto-discovers and fixes issues",
    },
    fullDescription: {
      zh: "部署一个 7x24 运行的基础设施智能体，持续监控服务器状态。当检测到服务宕机、磁盘空间不足、内存溢出等问题时，自动执行修复脚本或发送告警。",
      en: "Deploy a 24/7 infrastructure agent that continuously monitors server status. Automatically executes fix scripts or sends alerts when detecting service outages, low disk space, memory overflow, etc.",
    },
    category: "devops",
    difficulty: "hard",
    tags: ["服务器", "自愈", "基础设施"],
    tagsEn: ["Server", "Self-Healing", "Infra"],
    featured: true,
    requirements: {
      zh: ["Linux 服务器", "SSH 访问权限", "OpenClaw 环境", "监控工具（可选）"],
      en: ["Linux server", "SSH access", "OpenClaw environment", "Monitoring tools (optional)"],
    },
    steps: {
      zh: ["部署监控智能体", "配置健康检查", "编写修复脚本", "设置告警规则", "测试各种故障场景"],
      en: ["Deploy monitoring agent", "Configure health checks", "Write fix scripts", "Set up alert rules", "Test various failure scenarios"],
    },
    tips: {
      zh: ["谨慎授予执行权限", "保留操作日志便于审计", "设置人工确认步骤"],
      en: ["Carefully grant execution permissions", "Keep operation logs for auditing", "Set up manual confirmation steps"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  // 生产力
  {
    id: "inbox-organizer",
    title: { zh: "收件箱整理", en: "Inbox Organizer" },
    description: {
      zh: "自动总结新闻通讯并发送摘要邮件，告别邮件堆积",
      en: "Auto-summarize newsletters and send digest emails, say goodbye to inbox overload",
    },
    fullDescription: {
      zh: "自动处理订阅的新闻通讯邮件，AI 提取关键信息生成每日摘要。支持按主题分类、标记重要邮件、一键归档已读内容，让收件箱始终保持清爽。",
      en: "Automatically process subscribed newsletters, AI extracts key information to generate daily digests. Supports topic categorization, important email flagging, one-click archiving to keep your inbox clean.",
    },
    category: "productivity",
    difficulty: "easy",
    tags: ["邮件", "整理", "摘要"],
    requirements: {
      zh: ["邮箱 API 访问", "OpenClaw 环境"],
      en: ["Email API access", "OpenClaw environment"],
    },
    steps: {
      zh: ["连接邮箱", "配置过滤规则", "AI 生成摘要", "发送整理报告", "自动归档"],
      en: ["Connect email", "Configure filter rules", "AI generates summaries", "Send digest report", "Auto-archive"],
    },
    tips: {
      zh: ["设置白名单避免误处理重要邮件", "可以训练分类模型提升准确度"],
      en: ["Set whitelist to avoid processing important emails", "Can train classification model for accuracy"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "second-brain",
    title: { zh: "第二大脑", en: "Second Brain" },
    description: {
      zh: "随手发消息记住一切，在自定义仪表板中随时搜索",
      en: "Remember everything with quick messages, search anytime in custom dashboard",
    },
    fullDescription: {
      zh: "打造你的数字第二大脑。随时随地通过消息记录想法、链接、笔记，AI 自动整理分类并建立知识关联。通过自然语言随时检索，再也不会忘记重要信息。",
      en: "Build your digital second brain. Record ideas, links, notes anytime via messages, AI auto-organizes and builds knowledge connections. Retrieve anytime with natural language, never forget important information.",
    },
    category: "productivity",
    difficulty: "easy",
    tags: ["笔记", "搜索", "知识管理"],
    tagsEn: ["Notes", "Search", "Knowledge"],
    featured: true,
    requirements: {
      zh: ["消息接入渠道", "向量数据库", "OpenClaw 环境"],
      en: ["Message channel", "Vector database", "OpenClaw environment"],
    },
    steps: {
      zh: ["选择消息渠道", "配置内容解析", "存入向量数据库", "构建搜索接口", "可选：构建仪表板"],
      en: ["Choose message channel", "Configure content parsing", "Store in vector database", "Build search interface", "Optional: Build dashboard"],
    },
    tips: {
      zh: ["定期回顾和整理", "建立标签体系便于分类"],
      en: ["Regularly review and organize", "Build tag system for categorization"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "personal-crm",
    title: { zh: "个人 CRM", en: "Personal CRM" },
    description: {
      zh: "自动从邮件和日历中发现并追踪联系人，支持自然语言查询",
      en: "Auto-discover and track contacts from email and calendar, natural language queries",
    },
    fullDescription: {
      zh: "自动从邮件、日历、社交媒体中发现和追踪联系人关系。AI 记录互动历史、提醒跟进时机、支持自然语言查询（如：上个月联系过的投资人有哪些？）。",
      en: "Auto-discover and track contact relationships from email, calendar, social media. AI records interaction history, reminds follow-up timing, supports natural language queries like 'Which investors did I contact last month?'",
    },
    category: "productivity",
    difficulty: "medium",
    tags: ["CRM", "联系人", "自然语言"],
    requirements: {
      zh: ["邮箱/日历 API", "数据存储", "OpenClaw 环境"],
      en: ["Email/Calendar API", "Data storage", "OpenClaw environment"],
    },
    steps: {
      zh: ["连接数据源", "提取联系人信息", "建立关系图谱", "配置提醒规则", "构建查询接口"],
      en: ["Connect data sources", "Extract contact info", "Build relationship graph", "Configure reminder rules", "Build query interface"],
    },
    tips: {
      zh: ["注意隐私保护", "定期清理无效联系人"],
      en: ["Mind privacy protection", "Regularly clean invalid contacts"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "multi-channel-assistant",
    title: { zh: "多渠道个人助理", en: "Multi-Channel Assistant" },
    description: {
      zh: "一个 AI 助理统管 Telegram、Slack、邮件和日历",
      en: "One AI assistant manages Telegram, Slack, email and calendar",
    },
    fullDescription: {
      zh: "部署一个全能 AI 助理，统一管理你的 Telegram、Slack、邮件和日历。无论从哪个渠道发起，AI 都能理解上下文并执行任务，保持信息同步。",
      en: "Deploy an all-in-one AI assistant that manages your Telegram, Slack, email, and calendar. Regardless of which channel you use, AI understands context and executes tasks, keeping information synchronized.",
    },
    category: "productivity",
    difficulty: "medium",
    tags: ["多渠道", "助理", "统一管理"],
    requirements: {
      zh: ["各平台 API 凭证", "OpenClaw 环境", "统一身份识别"],
      en: ["API credentials for each platform", "OpenClaw environment", "Unified identity recognition"],
    },
    steps: {
      zh: ["集成各平台 API", "建立统一会话管理", "配置跨平台同步", "训练助理技能", "测试各场景"],
      en: ["Integrate platform APIs", "Build unified session management", "Configure cross-platform sync", "Train assistant skills", "Test scenarios"],
    },
    tips: {
      zh: ["保持各平台响应风格一致", "设置优先级处理规则"],
      en: ["Keep consistent response style across platforms", "Set priority handling rules"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  // 研究与学习
  {
    id: "personal-kb",
    title: { zh: "个人知识库 (RAG)", en: "Personal Knowledge Base (RAG)" },
    description: {
      zh: "把 URL、推文和文章拖入聊天，构建可语义搜索的知识库",
      en: "Drag URLs, tweets and articles into chat, build a semantically searchable knowledge base",
    },
    fullDescription: {
      zh: "基于 RAG 技术构建个人知识库。只需把网页链接、推文、文章拖入聊天，AI 自动提取内容、生成向量索引。之后可以通过自然语言检索所有保存的知识。",
      en: "Build a personal knowledge base using RAG technology. Just drag web links, tweets, articles into chat, AI auto-extracts content and generates vector indexes. Then retrieve all saved knowledge via natural language.",
    },
    category: "research",
    difficulty: "medium",
    tags: ["RAG", "知识库", "语义搜索"],
    tagsEn: ["RAG", "Knowledge Base", "Semantic"],
    featured: true,
    requirements: {
      zh: ["向量数据库", "内容解析服务", "OpenClaw 环境"],
      en: ["Vector database", "Content parsing service", "OpenClaw environment"],
    },
    steps: {
      zh: ["部署向量数据库", "配置内容解析", "实现向量化存储", "构建 RAG 检索", "优化检索效果"],
      en: ["Deploy vector database", "Configure content parsing", "Implement vector storage", "Build RAG retrieval", "Optimize retrieval quality"],
    },
    tips: {
      zh: ["选择合适的分块策略", "定期更新过时内容"],
      en: ["Choose appropriate chunking strategy", "Regularly update outdated content"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "market-research",
    title: { zh: "市场研究与产品工厂", en: "Market Research & Product Factory" },
    description: {
      zh: "从 Reddit 和 X 挖掘真实痛点，让 AI 构建解决方案 MVP",
      en: "Mine real pain points from Reddit and X, let AI build solution MVPs",
    },
    fullDescription: {
      zh: "自动化市场调研流程：从 Reddit、X、ProductHunt 等平台挖掘用户真实痛点，AI 分析需求并生成产品方案，甚至可以快速构建 MVP 原型。",
      en: "Automate market research: mine real user pain points from Reddit, X, ProductHunt, AI analyzes needs and generates product solutions, can even quickly build MVP prototypes.",
    },
    category: "research",
    difficulty: "hard",
    tags: ["市场研究", "产品", "MVP"],
    requirements: {
      zh: ["社交平台 API", "OpenClaw 高级版", "代码生成能力"],
      en: ["Social platform APIs", "OpenClaw Pro", "Code generation capability"],
    },
    steps: {
      zh: ["配置数据抓取", "痛点提取和分类", "需求验证", "方案生成", "MVP 原型构建"],
      en: ["Configure data scraping", "Pain point extraction and classification", "Demand validation", "Solution generation", "MVP prototype building"],
    },
    tips: {
      zh: ["关注高频出现的痛点", "快速验证，快速迭代"],
      en: ["Focus on frequently mentioned pain points", "Validate fast, iterate fast"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "idea-validator",
    title: { zh: "开发前创意验证器", en: "Pre-Dev Idea Validator" },
    description: {
      zh: "编码前自动扫描竞品，返回竞争度评分",
      en: "Auto-scan competitors before coding, return competition score",
    },
    fullDescription: {
      zh: "在动手开发前快速验证创意可行性。AI 自动扫描市场上的竞品，分析功能差异、用户评价、定价策略，返回竞争度评分和差异化建议。",
      en: "Quickly validate idea feasibility before development. AI auto-scans market competitors, analyzes feature differences, user reviews, pricing strategies, returns competition score and differentiation suggestions.",
    },
    category: "research",
    difficulty: "medium",
    tags: ["创意验证", "竞品分析", "评分"],
    requirements: {
      zh: ["搜索引擎 API", "App 商店数据", "OpenClaw 环境"],
      en: ["Search engine API", "App store data", "OpenClaw environment"],
    },
    steps: {
      zh: ["输入创意描述", "AI 搜索竞品", "提取关键信息", "生成分析报告", "给出评分和建议"],
      en: ["Input idea description", "AI searches competitors", "Extract key information", "Generate analysis report", "Provide score and suggestions"],
    },
    tips: {
      zh: ["不要只看直接竞品", "关注用户评论中的抱怨"],
      en: ["Don't just look at direct competitors", "Pay attention to complaints in user reviews"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  // 以下用例来自 hesamsheikh/awesome-openclaw-usecases、EvoLinkAI/awesome-openclaw-usecases-moltbook 等
  {
    id: "autonomous-game-dev",
    title: { zh: "自主游戏开发流水线", en: "Autonomous Game Dev Pipeline" },
    description: {
      zh: "从需求到实现、文档与 Git 提交的全生命周期管理，支持「Bugs First」策略",
      en: "Full lifecycle from backlog to implementation, docs and git commit; enforces Bugs First policy",
    },
    fullDescription: {
      zh: "用 AI 智能体管理教育类游戏开发全流程：从 backlog 选需求、实现功能、注册与文档到 git 提交。可配置优先修 bug 的策略，适合个人或小团队做游戏项目。",
      en: "Use AI agent to manage educational game development end-to-end: backlog selection, implementation, registration, documentation, and git commits. Configurable Bugs First policy for indie/small teams.",
    },
    category: "creative",
    difficulty: "hard",
    tags: ["游戏开发", "自动化", "Git"],
    requirements: {
      zh: ["OpenClaw 环境", "代码执行与 Git 权限", "项目仓库"],
      en: ["OpenClaw environment", "Code execution and Git access", "Project repo"],
    },
    steps: {
      zh: ["配置游戏项目仓库", "定义 backlog 与优先级", "设置 Bugs First 规则", "智能体自动实现与提交", "生成文档与发布"],
      en: ["Configure game project repo", "Define backlog and priority", "Set Bugs First rules", "Agent implements and commits", "Generate docs and release"],
    },
    tips: {
      zh: ["先用小需求验证流程", "保留人工 code review"],
      en: ["Validate with small tasks first", "Keep manual code review"],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "podcast-pipeline",
    title: { zh: "播客制作流水线", en: "Podcast Production Pipeline" },
    description: {
      zh: "从选题、嘉宾调研、大纲、节目笔记到社媒推广的全流程自动化",
      en: "Automate full podcast workflow from topic to publish-ready assets and promo",
    },
    fullDescription: {
      zh: "自动化播客制作：嘉宾与选题调研、单集大纲、节目笔记、时间戳与摘要，以及小宇宙/喜马拉雅/B 站等国内平台的发布与社媒推广。",
      en: "Automate podcast production: guest and topic research, episode outlines, show notes, timestamps, and promo for distribution and social media.",
    },
    category: "creative",
    difficulty: "medium",
    tags: ["播客", "内容流水线", "自动化"],
    requirements: {
      zh: ["OpenClaw 环境", "播客发布平台账号", "可选：转录/剪辑工具"],
      en: ["OpenClaw environment", "Podcast platform account", "Optional: transcription/editing tools"],
    },
    steps: {
      zh: ["确定单集选题与嘉宾", "AI 生成调研与大纲", "录制后生成节目笔记", "生成时间戳与摘要", "一键发布与推广"],
      en: ["Set episode topic and guests", "AI generates research and outline", "Post-recording show notes", "Timestamps and summary", "Publish and promote"],
    },
    tips: {
      zh: ["统一模板保证风格一致", "可接飞书/钉钉做团队协作"],
      en: ["Use templates for consistency", "Integrate with Feishu/DingTalk for team"],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "habit-tracker-coach",
    title: { zh: "习惯追踪与问责教练", en: "Habit Tracker & Accountability Coach" },
    description: {
      zh: "通过 Telegram/SMS 每日主动打卡，追踪习惯、保持连续并随进度调整语气",
      en: "Proactive daily check-ins via Telegram or SMS; track habits, streaks, and adapt tone by progress",
    },
    fullDescription: {
      zh: "AI 每天主动通过 Telegram 或短信提醒打卡，记录习惯完成情况、连续天数，并根据你的进度调整鼓励或督促的语气，相当于一位 24 小时在线的习惯教练。",
      en: "AI proactively reminds you daily via Telegram or SMS, logs habit completion and streaks, and adapts encouragement or accountability based on your progress.",
    },
    category: "productivity",
    difficulty: "easy",
    tags: ["习惯", "打卡", "问责"],
    requirements: {
      zh: ["OpenClaw 环境", "Telegram 或短信通道", "简单数据存储"],
      en: ["OpenClaw environment", "Telegram or SMS channel", "Simple data storage"],
    },
    steps: {
      zh: ["设定要追踪的习惯列表", "配置每日提醒时间", "设置打卡指令与关键词", "查看统计与连续记录", "按需调整提醒策略"],
      en: ["Define habits to track", "Set daily reminder time", "Configure check-in commands", "View stats and streaks", "Tune reminder strategy"],
    },
    tips: {
      zh: ["习惯数量不宜过多", "结合第二大脑做复盘"],
      en: ["Keep habit list small", "Combine with Second Brain for review"],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "phone-call-notifications",
    title: { zh: "电话通知", en: "Phone Call Notifications" },
    description: {
      zh: "把智能体的提醒变成真实电话——早报、降价、紧急邮件，支持双向对话",
      en: "Turn agent alerts into real phone calls — briefings, price drops, urgent email — with two-way conversation",
    },
    fullDescription: {
      zh: "将早间简报、价格提醒、紧急邮件等告警转为真实来电，用语音与 AI 双向对话，适合开车、运动等不方便看屏幕的场景。",
      en: "Convert morning briefings, price alerts, urgent emails into real phone calls with two-way voice conversation. Ideal when you can't look at screens.",
    },
    category: "productivity",
    difficulty: "medium",
    tags: ["电话", "语音", "通知"],
    requirements: {
      zh: ["OpenClaw 环境", "语音/电话 API（如 Twilio）", "触发规则配置"],
      en: ["OpenClaw environment", "Voice/call API (e.g. Twilio)", "Trigger rules"],
    },
    steps: {
      zh: ["接入语音通话服务", "配置告警类型与条件", "编写播报与对话提示词", "设置接听与超时逻辑", "测试各类场景"],
      en: ["Integrate voice/call service", "Configure alert types and conditions", "Write announcement and dialog prompts", "Set answer and timeout logic", "Test scenarios"],
    },
    tips: {
      zh: ["避免高频打扰", "重要事项可设置必须确认"],
      en: ["Avoid excessive calls", "Require confirmation for critical alerts"],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "meeting-notes-action-items",
    title: { zh: "会议纪要与待办自动化", en: "Automated Meeting Notes & Action Items" },
    description: {
      zh: "会议转录自动生成纪要并创建任务，支持 Jira、Linear、Todoist 分配负责人",
      en: "Turn transcripts into summaries and auto-create tasks in Jira, Linear, or Todoist — assigned to the right person",
    },
    fullDescription: {
      zh: "对接飞书妙记、腾讯会议、钉钉等会议转录，AI 生成结构化纪要与待办事项，并自动在 Jira、Linear 或 Todoist 中创建任务并指定负责人。",
      en: "Connect Feishu, Tencent Meeting, or DingTalk transcripts; AI generates structured notes and action items, then creates tasks in Jira, Linear, or Todoist with assignees.",
    },
    category: "productivity",
    difficulty: "medium",
    tags: ["会议", "纪要", "待办"],
    requirements: {
      zh: ["会议转录来源", "Jira/Linear/Todoist API", "OpenClaw 环境"],
      en: ["Meeting transcript source", "Jira/Linear/Todoist API", "OpenClaw environment"],
    },
    steps: {
      zh: ["接入会议录制/转录", "配置纪要模板与字段", "对接任务系统 API", "设置负责人映射规则", "测试创建与分配"],
      en: ["Connect meeting recording/transcript", "Configure note template", "Integrate task system API", "Set assignee mapping", "Test create and assign"],
    },
    tips: {
      zh: ["纪要先人工抽检再全自动", "负责人可从参会列表推断"],
      en: ["Spot-check notes before full automation", "Infer assignees from attendee list"],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "event-guest-confirmation",
    title: { zh: "活动嘉宾确认", en: "Event Guest Confirmation" },
    description: {
      zh: "自动逐一呼叫嘉宾确认出席、收集备注并编译成摘要",
      en: "Call guests one-by-one to confirm attendance, collect notes, and compile a summary — fully automated via AI voice",
    },
    fullDescription: {
      zh: "用 AI 语音电话按名单逐个联系嘉宾，确认是否出席、收集备注与饮食偏好等，最后生成一份汇总报告，适合活动、婚礼、会议前的确认工作。",
      en: "Use AI voice calls to contact each guest, confirm attendance, collect notes and preferences, then compile a summary report. Ideal for events, weddings, and pre-meeting confirmation.",
    },
    category: "productivity",
    difficulty: "medium",
    tags: ["活动", "电话", "确认"],
    requirements: {
      zh: ["OpenClaw 环境", "语音外呼能力", "嘉宾名单与联系方式"],
      en: ["OpenClaw environment", "Voice outbound capability", "Guest list and contacts"],
    },
    steps: {
      zh: ["准备嘉宾名单与问题", "配置外呼顺序与话术", "设置未接听重试规则", "收集回复并写入表格", "生成汇总报告"],
      en: ["Prepare guest list and questions", "Configure call order and script", "Set retry rules for no-answer", "Collect replies into sheet", "Generate summary report"],
    },
    tips: {
      zh: ["话术简短友好", "预留人工兜底处理异常"],
      en: ["Keep script short and friendly", "Have human fallback for edge cases"],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "opik-observability",
    title: { zh: "Opik 可观测性追踪", en: "Opik Observability" },
    description: {
      zh: "将 OpenClaw 运行链路接入 Opik，统一查看 LLM/工具/子智能体追踪与 token 成本",
      en: "Connect OpenClaw runs to Opik for unified LLM/tool/sub-agent tracing and token cost monitoring",
    },
    fullDescription: {
      zh: "把 OpenClaw 的调用链接入 Opik，在一个面板里查看每次对话的 LLM 调用、工具调用、子智能体调用，并监控 token 消耗与成本，便于调试与成本控制。",
      en: "Send OpenClaw invocation traces to Opik to view LLM, tool, and sub-agent calls per conversation, plus token usage and cost monitoring for debugging and cost control.",
    },
    category: "devops",
    difficulty: "medium",
    tags: ["可观测性", "追踪", "成本"],
    requirements: {
      zh: ["OpenClaw 环境", "Opik 账号或自建", "配置追踪端点"],
      en: ["OpenClaw environment", "Opik account or self-hosted", "Trace endpoint config"],
    },
    steps: {
      zh: ["注册/部署 Opik", "在 OpenClaw 中配置追踪", "验证链路数据上报", "配置告警与成本看板", "定期查看并优化调用"],
      en: ["Sign up or deploy Opik", "Configure tracing in OpenClaw", "Verify trace data", "Set alerts and cost dashboard", "Review and optimize calls"],
    },
    tips: {
      zh: ["先看 token 分布再优化提示词", "对高价模型设用量上限"],
      en: ["Inspect token distribution before tuning prompts", "Set usage caps for expensive models"],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "semantic-memory-search",
    title: { zh: "语义记忆搜索", en: "Semantic Memory Search" },
    description: {
      zh: "为 OpenClaw 的 Markdown 记忆文件增加向量语义检索与自动同步",
      en: "Add vector-powered semantic search to OpenClaw markdown memory with hybrid retrieval and auto-sync",
    },
    fullDescription: {
      zh: "在现有 Markdown 记忆文件基础上，增加向量索引与混合检索（关键词+语义），让智能体更准地回忆历史对话与事实，并支持自动同步更新。",
      en: "Add vector index and hybrid retrieval (keyword + semantic) to Markdown memory so the agent recalls past conversations and facts more accurately, with auto-sync.",
    },
    category: "research",
    difficulty: "medium",
    tags: ["记忆", "向量", "检索"],
    requirements: {
      zh: ["OpenClaw 环境", "向量数据库", "记忆文件存储"],
      en: ["OpenClaw environment", "Vector database", "Memory file storage"],
    },
    steps: {
      zh: ["部署向量库", "将记忆文件分块并向量化", "配置混合检索策略", "接入 OpenClaw 记忆读取", "设置增量同步"],
      en: ["Deploy vector DB", "Chunk and embed memory files", "Configure hybrid retrieval", "Plug into OpenClaw memory", "Set incremental sync"],
    },
    tips: {
      zh: ["分块不宜过大", "可对敏感内容做脱敏"],
      en: ["Keep chunks moderate size", "Sanitize sensitive content"],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "desktop-cowork",
    title: { zh: "桌面协作用例（AionUI Cowork）", en: "OpenClaw as Desktop Cowork" },
    description: {
      zh: "在桌面端用统一 UI 使用 OpenClaw：多智能体、MCP 一次配置，支持 WebUI/Telegram/飞书/钉钉",
      en: "Use OpenClaw as desktop Cowork app — unified UI, multi-agent, MCP once; WebUI/Telegram/Lark/DingTalk",
    },
    fullDescription: {
      zh: "通过 AionUI Cowork 等桌面应用，一次配置多智能体与 MCP，在 WebUI、Telegram、飞书、钉钉等多端统一使用。OpenClaw 异常时还可通过 Telegram 或 WebUI 远程修复（内置部署专家）。",
      en: "Use AionUI Cowork or similar desktop app to configure multi-agent and MCP once, then use the same setup on WebUI, Telegram, Lark, DingTalk. When OpenClaw is down, fix it remotely via Telegram or WebUI with built-in deployment expert.",
    },
    category: "productivity",
    difficulty: "medium",
    tags: ["桌面", "多端", "MCP"],
    requirements: {
      zh: ["OpenClaw 环境", "AionUI Cowork 或同类客户端", "各通道凭证"],
      en: ["OpenClaw environment", "AionUI Cowork or similar client", "Channel credentials"],
    },
    steps: {
      zh: ["安装桌面 Cowork 客户端", "配置 OpenClaw 连接与 MCP", "添加 Telegram/飞书/钉钉", "测试多端消息与任务", "了解远程修复流程"],
      en: ["Install desktop Cowork client", "Configure OpenClaw and MCP", "Add Telegram/Lark/DingTalk", "Test multi-channel messaging", "Learn remote fix workflow"],
    },
    tips: {
      zh: ["MCP 工具统一在桌面配置", "定期备份配置与 SOUL"],
      en: ["Configure MCP tools in one place", "Back up config and SOUL regularly"],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "office-automation-suite",
    title: { zh: "办公自动化套件", en: "Office Automation Suite" },
    description: {
      zh: "邮件管理、文件整理、会议纪要、周报生成，支持 163/QQ/Outlook",
      en: "Email management, file organization, meeting notes, weekly reports — 163/QQ/Outlook supported",
    },
    fullDescription: {
      zh: "一站式办公自动化：统一处理多邮箱（163、QQ、Outlook）的整理与摘要、文件分类归档、会议纪要生成与周报模板，与飞书/钉钉等国内办公场景深度结合。",
      en: "All-in-one office automation: multi-inbox (163, QQ, Outlook) organization and digest, file categorization, meeting notes, and weekly report templates, integrated with Feishu/DingTalk.",
    },
    category: "china",
    difficulty: "medium",
    tags: ["办公", "邮件", "周报"],
    requirements: {
      zh: ["邮箱与办公平台账号", "OpenClaw 环境", "文件存储与权限"],
      en: ["Email and office platform accounts", "OpenClaw environment", "File storage and permissions"],
    },
    steps: {
      zh: ["接入邮箱与网盘", "配置分类与摘要规则", "设置会议转录与纪要模板", "配置周报模板与触发", "对接飞书/钉钉推送"],
      en: ["Connect email and cloud storage", "Configure categorization and digest", "Set meeting transcript and note template", "Configure weekly report template", "Connect Feishu/DingTalk for delivery"],
    },
    tips: {
      zh: ["先做单场景再组合", "注意企业邮箱安全策略"],
      en: ["Start with one scenario then combine", "Respect corporate email security policies"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "multi-agent-os",
    title: { zh: "多智能体协作操作系统", en: "Multi-Agent Operating System" },
    description: {
      zh: "把 OpenClaw 变成专业分工、协同、稳定迭代的智能体系统",
      en: "Turn OpenClaw into a specialized, coordinated, and steadily iterating agent system",
    },
    fullDescription: {
      zh: "用多智能体架构划分角色（如产品、开发、运营），通过统一编排与状态管理实现协作与迭代，适合小团队或个人用 AI 模拟一个「虚拟团队」完成复杂项目。",
      en: "Use multi-agent architecture with roles (e.g. product, dev, ops), coordinated by orchestration and state management for collaboration and iteration. Ideal for small teams or solo users running a virtual AI team.",
    },
    category: "china",
    difficulty: "hard",
    tags: ["多智能体", "协作", "编排"],
    requirements: {
      zh: ["OpenClaw 环境", "多实例或子智能体", "状态/编排层（如 STATE.yaml）"],
      en: ["OpenClaw environment", "Multiple instances or sub-agents", "State/orchestration layer (e.g. STATE.yaml)"],
    },
    steps: {
      zh: ["定义角色与职责", "设计任务拆分与交接协议", "配置状态存储与同步", "实现编排与心跳", "测试端到端协作"],
      en: ["Define roles and responsibilities", "Design task handoff protocol", "Configure state storage and sync", "Implement orchestration and heartbeat", "Test end-to-end collaboration"],
    },
    tips: {
      zh: ["从 2～3 个角色开始", "状态要可追溯便于排错"],
      en: ["Start with 2–3 roles", "Keep state traceable for debugging"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "dynamic-dashboard",
    title: { zh: "动态仪表板", en: "Dynamic Dashboard" },
    description: {
      zh: "实时仪表板，子智能体并行从 API、数据库和社交媒体获取数据",
      en: "Real-time dashboard with parallel data from APIs, DBs, and social media via sub-agents",
    },
    fullDescription: {
      zh: "用多个子智能体并行拉取 API、数据库和社交数据，在一个实时仪表板中展示 KPI、动态列表和图表，适合个人或团队做数据总览与决策。",
      en: "Use sub-agents to fetch APIs, databases, and social data in parallel, then display KPIs, lists, and charts in a real-time dashboard for personal or team overview.",
    },
    category: "productivity",
    difficulty: "hard",
    tags: ["仪表板", "实时", "多源"],
    requirements: {
      zh: ["OpenClaw 环境", "数据源 API", "前端或低代码仪表板"],
      en: ["OpenClaw environment", "Data source APIs", "Frontend or low-code dashboard"],
    },
    steps: {
      zh: ["定义要展示的指标与数据源", "为每个源配置子智能体或工具", "设计仪表板布局与刷新策略", "对接鉴权与限流", "部署并设置告警"],
      en: ["Define metrics and data sources", "Configure sub-agents or tools per source", "Design layout and refresh strategy", "Wire auth and rate limits", "Deploy and set alerts"],
    },
    tips: {
      zh: ["避免过频刷新", "敏感数据做脱敏或权限控制"],
      en: ["Avoid excessive refresh", "Mask or restrict sensitive data"],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "todoist-task-manager",
    title: { zh: "Todoist 任务管理器", en: "Todoist Task Manager" },
    description: {
      zh: "将 AI 推理与进度日志同步到 Todoist，实时看到智能体在做什么",
      en: "Sync AI reasoning and progress logs to Todoist for full transparency",
    },
    fullDescription: {
      zh: "把 OpenClaw 的任务拆解、执行步骤和进度同步到 Todoist，在同一个任务列表里看到 AI 的「思考」与待办，方便跟进与复盘。",
      en: "Sync OpenClaw task breakdowns, steps, and progress to Todoist so you see the agent's reasoning and todos in one list for follow-up and review.",
    },
    category: "productivity",
    difficulty: "medium",
    tags: ["Todoist", "任务", "同步"],
    requirements: {
      zh: ["Todoist 账号", "OpenClaw 环境", "Todoist API"],
      en: ["Todoist account", "OpenClaw environment", "Todoist API"],
    },
    steps: {
      zh: ["获取 Todoist API Token", "在 OpenClaw 中配置 Todoist 技能", "设置任务创建与更新规则", "可选：同步子任务与标签", "验证双向同步"],
      en: ["Get Todoist API token", "Configure Todoist skill in OpenClaw", "Set task create/update rules", "Optional: sync subtasks and labels", "Verify two-way sync"],
    },
    tips: {
      zh: ["用项目或标签区分 AI 任务", "避免重复创建相同任务"],
      en: ["Use projects/labels for AI tasks", "Avoid duplicate task creation"],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "family-calendar-assistant",
    title: { zh: "家庭日历与家务助理", en: "Family Calendar & Household Assistant" },
    description: {
      zh: "聚合家庭日历到早间简报，监控消息获取预约，管理家庭库存",
      en: "Aggregate family calendars into morning briefing, monitor messages for appointments, manage household inventory",
    },
    fullDescription: {
      zh: "把家人多个日历聚合到每日早报，从消息中识别预约与待办，并维护家庭库存（如日用品、药品），提醒补货与重要日期。",
      en: "Merge family calendars into a daily briefing, extract appointments and todos from messages, maintain household inventory (supplies, meds), and remind for restock and key dates.",
    },
    category: "productivity",
    difficulty: "medium",
    tags: ["日历", "家庭", "库存"],
    requirements: {
      zh: ["日历 API（Google/Outlook 等）", "OpenClaw 环境", "消息接入（可选）"],
      en: ["Calendar API (Google/Outlook etc.)", "OpenClaw environment", "Message channel (optional)"],
    },
    steps: {
      zh: ["接入各成员日历", "配置早报时间与内容", "设置库存清单与阈值", "配置补货与生日提醒", "测试多日历冲突检测"],
      en: ["Connect each member's calendar", "Configure briefing time and content", "Set inventory list and thresholds", "Configure restock and birthday reminders", "Test multi-calendar conflict detection"],
    },
    tips: {
      zh: ["尊重隐私，仅共享必要信息", "库存可接电商或购物清单"],
      en: ["Respect privacy, share only what's needed", "Link inventory to shopping list or e-commerce"],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "autonomous-project-mgmt",
    title: { zh: "自主项目管理", en: "Autonomous Project Management" },
    description: {
      zh: "用 STATE.yaml 模式协调多智能体项目，子智能体并行工作无需人工编排",
      en: "Coordinate multi-agent projects with STATE.yaml; subagents work in parallel without orchestrator",
    },
    fullDescription: {
      zh: "通过 STATE.yaml 等共享状态模式，让多个子智能体按角色并行推进项目（需求、开发、测试等），减少中心化编排，适合敏捷或个人项目。",
      en: "Use shared state (e.g. STATE.yaml) so multiple sub-agents work in parallel by role (requirements, dev, test), with minimal central orchestration. Suited for agile or personal projects.",
    },
    category: "productivity",
    difficulty: "hard",
    tags: ["项目管理", "多智能体", "STATE"],
    requirements: {
      zh: ["OpenClaw 环境", "多子智能体或实例", "共享状态存储"],
      en: ["OpenClaw environment", "Multiple sub-agents or instances", "Shared state storage"],
    },
    steps: {
      zh: ["设计 STATE 结构与角色", "为每个角色配置智能体", "定义任务类型与状态流转", "配置读写 STATE 的权限", "跑通一个最小项目"],
      en: ["Design STATE schema and roles", "Configure agent per role", "Define task types and state transitions", "Set read/write permissions for STATE", "Run a minimal project end-to-end"],
    },
    tips: {
      zh: ["STATE 要版本化或可回溯", "先单角色再扩展"],
      en: ["Version or snapshot STATE", "Start with one role then scale"],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "multi-agent-specialized-team",
    title: { zh: "多智能体专业团队", en: "Multi-Agent Specialized Team" },
    description: {
      zh: "战略、开发、营销、商务四个专业智能体通过一个 Telegram 聊天协同",
      en: "Strategy, dev, marketing, business agents as a coordinated team via one Telegram chat",
    },
    fullDescription: {
      zh: "在单一 Telegram 对话中运行多个专业智能体（战略、开发、营销、商务），你发一条需求，各角色按分工回复与协作，像一支虚拟团队。",
      en: "Run multiple specialized agents (strategy, dev, marketing, business) in one Telegram chat; you send a request and each role responds and collaborates like a virtual team.",
    },
    category: "productivity",
    difficulty: "hard",
    tags: ["多智能体", "Telegram", "协作"],
    requirements: {
      zh: ["OpenClaw 环境", "多个 SOUL/AGENTS 配置", "Telegram Bot"],
      en: ["OpenClaw environment", "Multiple SOUL/AGENTS configs", "Telegram Bot"],
    },
    steps: {
      zh: ["为每个角色编写 SOUL 与技能", "配置路由：按关键词或意图分配", "在 Telegram 中测试多轮协作", "优化角色间的交接与冲突处理", "可选：接入文档与任务系统"],
      en: ["Write SOUL and skills per role", "Configure routing by keyword or intent", "Test multi-turn collaboration in Telegram", "Tune handoffs and conflict handling", "Optional: connect docs and task system"],
    },
    tips: {
      zh: ["角色边界要清晰", "用 @提及 指定回复对象"],
      en: ["Keep role boundaries clear", "Use @mention to direct replies"],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "health-symptom-tracker",
    title: { zh: "健康与症状追踪器", en: "Health & Symptom Tracker" },
    description: {
      zh: "追踪饮食与症状以识别诱因，带定期签到提醒",
      en: "Track food intake and symptoms to identify triggers, with scheduled check-in reminders",
    },
    fullDescription: {
      zh: "通过每日签到记录饮食、睡眠与身体症状，AI 帮助发现可能诱因（如过敏、不耐受），并给出简单建议与提醒，数据仅存本地可保护隐私。",
      en: "Log diet, sleep, and symptoms via daily check-ins; AI helps identify potential triggers (e.g. allergies) and suggests simple follow-ups. Data stays local for privacy.",
    },
    category: "productivity",
    difficulty: "easy",
    tags: ["健康", "症状", "签到"],
    requirements: {
      zh: ["OpenClaw 环境", "消息或表单渠道", "本地或私有存储"],
      en: ["OpenClaw environment", "Message or form channel", "Local or private storage"],
    },
    steps: {
      zh: ["设计签到问题与选项", "配置每日提醒时间", "存储与检索历史记录", "让 AI 做简单关联分析", "导出或可视化趋势"],
      en: ["Design check-in questions and options", "Set daily reminder", "Store and query history", "Use AI for simple correlation analysis", "Export or visualize trends"],
    },
    tips: {
      zh: ["不替代医疗建议", "数据加密或仅本地"],
      en: ["Not a substitute for medical advice", "Encrypt or keep data local only"],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  // 金融与交易
  {
    id: "polymarket-autopilot",
    title: { zh: "Polymarket 自动驾驶", en: "Polymarket Autopilot" },
    description: {
      zh: "自动化预测市场模拟交易，带回测、策略分析和每日绩效报告",
      en: "Automate prediction market simulation with backtesting and daily performance reports",
    },
    fullDescription: {
      zh: "为 Polymarket 等预测市场构建自动化交易系统。支持策略回测、模拟交易、风险控制和每日绩效分析报告。让 AI 帮你在预测市场中做出更明智的决策。",
      en: "Build automated trading system for prediction markets like Polymarket. Supports strategy backtesting, paper trading, risk control, and daily performance reports. Let AI help you make smarter decisions in prediction markets.",
    },
    category: "finance",
    difficulty: "hard",
    tags: ["预测市场", "模拟交易", "回测"],
    requirements: {
      zh: ["Polymarket API", "历史数据", "OpenClaw 环境", "回测框架"],
      en: ["Polymarket API", "Historical data", "OpenClaw environment", "Backtesting framework"],
    },
    steps: {
      zh: ["获取市场数据", "设计交易策略", "回测验证", "模拟交易测试", "每日报告生成"],
      en: ["Get market data", "Design trading strategy", "Backtest validation", "Paper trading test", "Daily report generation"],
    },
    tips: {
      zh: ["始终从模拟交易开始", "设置严格的止损规则", "定期回顾策略表现"],
      en: ["Always start with paper trading", "Set strict stop-loss rules", "Regularly review strategy performance"],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  // 新增用例
  {
    id: "wechat-official-account-bot",
    title: { zh: "微信公众号自动回复", en: "WeChat Official Account Bot" },
    description: {
      zh: "接入 OpenClaw 实现公众号关键词自动回复、粉丝互动与文章定期推送",
      en: "Connect OpenClaw to WeChat Official Account for keyword auto-reply, fan engagement, and scheduled article publishing",
    },
    fullDescription: {
      zh: "将 OpenClaw 与微信公众号平台深度集成，打造智能内容运营体系。通过关键词规则引擎实现精准自动回复，利用 AI 生成个性化互动内容提升粉丝留存率。支持定时任务批量推送图文消息，大幅降低运营人力成本，让公众号保持高频优质更新。",
      en: "Deeply integrate OpenClaw with WeChat Official Account platform to build an intelligent content operation system. Use a keyword rule engine for precise auto-replies and AI-generated personalized content to boost fan retention. Supports scheduled batch publishing of rich media messages, significantly reducing operational labor costs and keeping the account consistently updated with quality content.",
    },
    category: "china",
    difficulty: "medium",
    tags: ["微信", "公众号", "自动回复"],
    requirements: {
      zh: ["微信公众号（认证服务号或订阅号）", "微信公众平台开发者配置", "OpenClaw 已部署并运行", "具备 HTTPS 的公网服务器"],
      en: ["WeChat Official Account (verified service or subscription account)", "WeChat Official Platform developer configuration", "OpenClaw deployed and running", "Public HTTPS server"],
    },
    steps: {
      zh: [
        "在微信公众平台开启开发者模式，填写服务器 URL 和 Token",
        "完成服务器验证，配置消息加解密方式",
        "在 OpenClaw 中设计关键词匹配规则与回复模板",
        "接入 OpenClaw AI 接口，为复杂问题生成动态回复",
        "配置定时推送任务，设置文章生成与发布工作流",
        "上线测试并监控消息响应成功率与粉丝互动数据",
      ],
      en: [
        "Enable developer mode on WeChat Official Platform, set server URL and Token",
        "Complete server verification and configure message encryption",
        "Design keyword matching rules and reply templates in OpenClaw",
        "Integrate OpenClaw AI API for dynamic replies to complex queries",
        "Configure scheduled push tasks and article generation/publishing workflows",
        "Launch, test, and monitor message response rates and fan engagement metrics",
      ],
    },
    tips: {
      zh: [
        "客服消息接口有 48 小时回复窗口限制，需合理设计被动回复与主动推送策略",
        "善用模板消息发送交易通知，避免滥用导致封号风险",
        "先在测试号上验证所有功能，再切换到正式公众号",
      ],
      en: [
        "Customer service message API has a 48-hour reply window; design passive replies and proactive push strategies accordingly",
        "Use template messages for transactional notifications to avoid account suspension from abuse",
        "Validate all features on a sandbox account before switching to the production Official Account",
      ],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "douyin-content-pipeline",
    title: { zh: "抖音内容自动化流水线", en: "Douyin Content Pipeline" },
    description: {
      zh: "从选题到文案到定时发布，全程 AI 驱动的短视频内容工作流",
      en: "Full AI-driven short video workflow from topic selection to copywriting to scheduled publishing on Douyin",
    },
    fullDescription: {
      zh: "构建端到端的抖音内容生产流水线，让 AI 全程参与短视频创作。系统自动监控热点话题与热榜数据，智能筛选适合账号定位的选题，然后生成爆款文案框架、口播脚本与话题标签组合。配合定时发布策略，实现账号的持续稳定更新，大幅提升内容生产效率。",
      en: "Build an end-to-end Douyin content production pipeline with AI involved throughout. The system automatically monitors trending topics and hot charts, intelligently selects topics that fit the account's positioning, then generates viral copywriting frameworks, voiceover scripts, and hashtag combinations. Combined with scheduled publishing strategies, it enables continuous and stable account updates while dramatically improving content production efficiency.",
    },
    category: "china",
    difficulty: "medium",
    tags: ["抖音", "短视频", "内容创作"],
    requirements: {
      zh: ["抖音创作者账号", "抖音开放平台 API 权限（或第三方发布工具）", "OpenClaw 已部署", "内容素材库或图片/视频资源"],
      en: ["Douyin creator account", "Douyin Open Platform API access (or third-party publishing tool)", "OpenClaw deployed", "Content asset library or image/video resources"],
    },
    steps: {
      zh: [
        "接入抖音热榜 API 或爬虫，每日获取热门话题数据",
        "配置 OpenClaw 对热点进行相关性打分和选题推荐",
        "根据选中话题生成视频脚本、标题、封面文案和话题标签",
        "对接视频剪辑工具或 AI 生图工具生成素材",
        "通过抖音开放平台或第三方工具实现定时发布",
        "收集发布后的数据反馈，持续优化选题与文案策略",
      ],
      en: [
        "Integrate Douyin trending API or scraper to fetch daily hot topic data",
        "Configure OpenClaw to score relevance and recommend topics",
        "Generate video scripts, titles, cover copy, and hashtags for selected topics",
        "Connect to video editing or AI image generation tools to create assets",
        "Schedule and publish via Douyin Open Platform or third-party tools",
        "Collect post-publish performance data to continuously optimize topic and copy strategy",
      ],
    },
    tips: {
      zh: [
        "短视频黄金时长为 15–60 秒，脚本生成时注意控制节奏",
        "话题标签建议混合大流量标签和垂直细分标签，提升曝光与精准度",
        "每周分析爆款视频的共同特征，反哺 AI 提示词优化",
      ],
      en: [
        "The golden duration for short videos is 15–60 seconds; ensure scripts are paced accordingly",
        "Mix high-traffic hashtags with niche vertical tags to balance reach and precision",
        "Weekly analysis of viral video patterns should feed back into AI prompt optimization",
      ],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "zhihu-knowledge-mining",
    title: { zh: "知乎热点挖掘与内容创作", en: "Zhihu Knowledge Mining" },
    description: {
      zh: "自动追踪知乎热榜，提炼核心观点并生成高质量回答草稿",
      en: "Auto-track Zhihu trending topics, extract key insights, and draft high-quality answers",
    },
    fullDescription: {
      zh: "利用 OpenClaw 自动化追踪知乎热榜与特定领域的热门问题，对高赞回答进行结构化提炼，抽取核心论点、数据支撑和论证逻辑。在此基础上，AI 生成兼具深度与可读性的回答草稿，帮助创作者快速建立知乎专业形象和粉丝积累。",
      en: "Use OpenClaw to automatically track Zhihu trending topics and popular questions in specific domains. Structurally extract key arguments, supporting data, and reasoning logic from top-voted answers. AI then generates draft answers with both depth and readability, helping creators quickly build professional presence and grow followers on Zhihu.",
    },
    category: "china",
    difficulty: "easy",
    tags: ["知乎", "热点", "内容创作"],
    requirements: {
      zh: ["知乎账号", "OpenClaw 已部署", "知乎热榜数据源（API 或爬虫）", "文本编辑或发布工具"],
      en: ["Zhihu account", "OpenClaw deployed", "Zhihu trending data source (API or scraper)", "Text editing or publishing tool"],
    },
    steps: {
      zh: [
        "配置知乎热榜数据采集，定时获取热门问题列表",
        "筛选与目标领域相关的问题，排除不适合回答的话题",
        "抓取目标问题下的高赞回答并结构化解析",
        "使用 OpenClaw 生成包含独特视角的回答草稿",
        "人工审核并补充个人经验与案例，完善内容",
        "发布到知乎并追踪点赞、评论和关注转化数据",
      ],
      en: [
        "Configure Zhihu trending data collection to periodically fetch hot question lists",
        "Filter questions relevant to target domains, excluding unsuitable topics",
        "Scrape top-voted answers to target questions and parse them structurally",
        "Use OpenClaw to generate answer drafts with unique perspectives",
        "Manually review and supplement with personal experience and case studies",
        "Publish to Zhihu and track upvote, comment, and follower conversion data",
      ],
    },
    tips: {
      zh: [
        "知乎重视原创性，AI 草稿仅作参考骨架，务必加入个人真实经历和见解",
        "优先选择有持续讨论热度的长尾问题，比追热点更能积累稳定流量",
        "回答结构建议：结论前置 + 论据展开 + 个人案例 + 行动建议",
      ],
      en: [
        "Zhihu values originality; use AI drafts only as structural scaffolding and always add genuine personal insights",
        "Prioritize evergreen long-tail questions over trending topics for more stable traffic accumulation",
        "Recommended answer structure: conclusion first, followed by evidence, personal case study, and actionable advice",
      ],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "taobao-product-tracker",
    title: { zh: "淘宝/拼多多商品降价监控", en: "Taobao Price Tracker" },
    description: {
      zh: "监控淘宝、拼多多商品价格变动，降价时自动通知到飞书/微信",
      en: "Monitor Taobao and Pinduoduo product prices, auto-notify via Feishu or WeChat when prices drop",
    },
    fullDescription: {
      zh: "构建智能商品价格监控系统，持续追踪淘宝和拼多多上目标商品的价格、库存与促销状态。当价格触达预设阈值或降幅超过设定比例时，系统立即通过飞书机器人或微信通知推送提醒，帮助用户在最佳时机下单，不再错过任何优惠。",
      en: "Build an intelligent product price monitoring system that continuously tracks prices, inventory, and promotion status of target products on Taobao and Pinduoduo. When prices hit preset thresholds or drop by a set percentage, the system immediately pushes alerts via Feishu bot or WeChat, helping users place orders at the best time and never miss a deal.",
    },
    category: "china",
    difficulty: "easy",
    tags: ["电商", "价格监控", "购物"],
    requirements: {
      zh: ["OpenClaw 已部署", "商品数据采集方案（API 或爬虫）", "飞书机器人或微信通知渠道", "数据库用于存储历史价格"],
      en: ["OpenClaw deployed", "Product data collection solution (API or scraper)", "Feishu bot or WeChat notification channel", "Database for storing price history"],
    },
    steps: {
      zh: [
        "收集目标商品的商品 ID 和初始价格信息，建立监控列表",
        "设置定时任务，定期（如每小时）抓取最新价格数据",
        "将历史价格存入数据库，计算价格变动幅度",
        "配置降价触发规则（绝对降幅或百分比降幅）",
        "接入飞书 Webhook 或微信推送接口，格式化通知内容",
        "添加历史价格走势图表功能，辅助决策",
      ],
      en: [
        "Collect target product IDs and initial prices to build a monitoring list",
        "Set up scheduled tasks to periodically (e.g., hourly) scrape latest price data",
        "Store historical prices in a database and calculate price change magnitudes",
        "Configure price drop trigger rules (absolute or percentage decrease)",
        "Integrate Feishu webhook or WeChat push API with formatted notification content",
        "Add historical price trend chart functionality to support purchase decisions",
      ],
    },
    tips: {
      zh: [
        "抓取频率不宜过高，避免触发平台反爬策略，建议间隔不低于 30 分钟",
        "注意识别商品改款或规格变更导致的「假降价」现象",
        "可结合平台大促日历（双十一、618 等）做预期价格预测",
      ],
      en: [
        "Avoid overly frequent scraping to prevent triggering platform anti-bot measures; intervals of at least 30 minutes are recommended",
        "Be aware of 'fake price drops' caused by product spec changes or SKU swaps",
        "Combine with platform promotion calendars (Double 11, 618, etc.) for price expectation forecasting",
      ],
    },
    externalUrl: "https://github.com/AlexAnys/awesome-openclaw-usecases-zh",
  },
  {
    id: "linkedin-career-assistant",
    title: { zh: "LinkedIn 职场助理", en: "LinkedIn Career Assistant" },
    description: {
      zh: "自动优化 LinkedIn 个人资料、跟踪求职进度、生成个性化求职信",
      en: "Auto-optimize LinkedIn profile, track job applications, and generate personalized cover letters",
    },
    fullDescription: {
      zh: "借助 OpenClaw 打造全方位的 LinkedIn 职场助理。AI 分析你的简历与目标职位 JD，提供针对性的个人资料优化建议，确保关键词匹配度最大化。同时自动化管理求职申请记录、面试安排和跟进提醒，并根据每个职位 JD 动态生成高匹配度的个性化求职信。",
      en: "Build a comprehensive LinkedIn career assistant with OpenClaw. AI analyzes your resume and target job descriptions to provide targeted profile optimization suggestions for maximum keyword match. It also automates job application tracking, interview scheduling, and follow-up reminders, while dynamically generating personalized cover letters with high relevance to each specific job description.",
    },
    category: "social",
    difficulty: "easy",
    tags: ["LinkedIn", "求职", "职场"],
    requirements: {
      zh: ["LinkedIn 账号", "OpenClaw 已部署", "简历文档（PDF 或 Word）", "目标职位关键词或 JD 列表"],
      en: ["LinkedIn account", "OpenClaw deployed", "Resume document (PDF or Word)", "Target job keywords or JD list"],
    },
    steps: {
      zh: [
        "上传个人简历，使用 OpenClaw 提取技能关键词和工作亮点",
        "分析目标职位 JD，识别高频要求关键词和技能缺口",
        "生成 LinkedIn 个人简介、标题和工作经历的优化建议",
        "建立求职申请追踪表，记录申请状态与下一步行动",
        "针对每个目标职位生成定制化求职信草稿",
        "设置面试提醒和跟进任务，确保不遗漏任何机会",
      ],
      en: [
        "Upload resume and use OpenClaw to extract skill keywords and work highlights",
        "Analyze target job descriptions to identify high-frequency requirements and skill gaps",
        "Generate optimization suggestions for LinkedIn summary, headline, and work experience",
        "Build a job application tracking sheet to record application status and next steps",
        "Generate customized cover letter drafts tailored to each target position",
        "Set interview reminders and follow-up tasks to ensure no opportunities are missed",
      ],
    },
    tips: {
      zh: [
        "LinkedIn 简介的前 3 行是最关键的展示区域，务必包含核心技能和价值主张",
        "申请后 5–7 个工作日内发送跟进消息，能显著提升回复率",
        "定期更新 LinkedIn 动态（分享文章、评论行业新闻）以提高曝光度",
      ],
      en: [
        "The first 3 lines of your LinkedIn summary are the most visible; make sure they include core skills and your value proposition",
        "Sending a follow-up message 5–7 business days after applying significantly improves response rates",
        "Regularly update LinkedIn activity (share articles, comment on industry news) to increase profile visibility",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "discord-community-manager",
    title: { zh: "Discord 社区管理机器人", en: "Discord Community Manager" },
    description: {
      zh: "接入 OpenClaw 管理 Discord 社区：自动审核消息、回答常见问题、生成每周社区报告",
      en: "Manage Discord communities with OpenClaw: auto-moderate messages, answer FAQs, generate weekly community reports",
    },
    fullDescription: {
      zh: "将 OpenClaw 集成到 Discord 服务器中，构建智能社区管理机器人。机器人可以自动审核违规消息（垃圾信息、不当内容）、回答社区 FAQ、欢迎新成员并引导入门。此外，每周自动生成包含活跃度统计、热门话题和成员增长趋势的社区健康报告，帮助管理员更高效地运营社区。",
      en: "Integrate OpenClaw into Discord servers to build an intelligent community management bot. The bot auto-moderates rule-violating messages (spam, inappropriate content), answers community FAQs, welcomes new members, and guides onboarding. It also auto-generates weekly community health reports with activity stats, trending topics, and member growth trends to help admins manage more efficiently.",
    },
    category: "social",
    difficulty: "medium",
    tags: ["Discord", "社区", "机器人"],
    requirements: {
      zh: ["Discord 服务器管理员权限", "Discord Bot Token（Discord Developer Portal）", "OpenClaw 已部署", "服务器或云主机用于托管机器人"],
      en: ["Discord server administrator permissions", "Discord Bot Token (Discord Developer Portal)", "OpenClaw deployed", "Server or cloud host for bot hosting"],
    },
    steps: {
      zh: [
        "在 Discord Developer Portal 创建应用并生成 Bot Token",
        "为机器人分配必要权限（读写消息、管理消息、查看成员等）",
        "部署机器人服务，连接 Discord Gateway 监听事件",
        "配置内容审核规则，集成 OpenClaw 进行语义级违规检测",
        "建立 FAQ 知识库，让 OpenClaw 处理常见问题的自然语言回答",
        "设置每周定时任务，自动统计数据并生成社区报告发送到指定频道",
      ],
      en: [
        "Create an application in Discord Developer Portal and generate a Bot Token",
        "Assign necessary permissions to the bot (read/write messages, manage messages, view members, etc.)",
        "Deploy bot service and connect to Discord Gateway to listen for events",
        "Configure content moderation rules and integrate OpenClaw for semantic-level violation detection",
        "Build an FAQ knowledge base and let OpenClaw handle natural language answers to common questions",
        "Set up weekly scheduled tasks to auto-collect stats and generate community reports to designated channels",
      ],
    },
    tips: {
      zh: [
        "使用 Discord 的线程（Thread）功能隔离深度讨论，让频道保持整洁",
        "为机器人设置明确的命令前缀（如 `/ask`），避免误触发",
        "重要的审核决策建议保留人工复核环节，避免误封用户",
      ],
      en: [
        "Use Discord Threads to isolate in-depth discussions and keep channels clean",
        "Set clear command prefixes (e.g., `/ask`) for the bot to avoid accidental triggers",
        "For important moderation decisions, retain a human review step to avoid wrongful bans",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "hacker-news-digest",
    title: { zh: "Hacker News 每日精华", en: "Hacker News Daily Digest" },
    description: {
      zh: "每日汇总 Hacker News 热帖并提炼技术要点，推送到个人频道",
      en: "Daily summary of top Hacker News posts with key technical insights, delivered to your channel",
    },
    fullDescription: {
      zh: "每日自动抓取 Hacker News 热门帖子和精华评论，由 OpenClaw 提炼核心技术要点、行业洞察与值得关注的开源项目，生成结构清晰的技术简报。通过个性化过滤器，只推送与你技术栈和兴趣领域相关的内容，让你每天用 10 分钟掌握技术社区最新动向。",
      en: "Every day, automatically scrape top Hacker News posts and comments, have OpenClaw extract core technical insights, industry observations, and noteworthy open-source projects, then generate a clearly structured tech briefing. With personalized filters, only content relevant to your tech stack and interest areas is pushed, letting you keep up with the latest tech community developments in just 10 minutes a day.",
    },
    category: "social",
    difficulty: "easy",
    tags: ["HackerNews", "技术", "资讯"],
    requirements: {
      zh: ["OpenClaw 已部署", "Hacker News 官方 API（免费公开）", "推送渠道（Slack、邮件、Telegram 等）", "兴趣关键词或技术栈配置"],
      en: ["OpenClaw deployed", "Hacker News official API (free and public)", "Push channel (Slack, email, Telegram, etc.)", "Interest keywords or tech stack configuration"],
    },
    steps: {
      zh: [
        "调用 Hacker News API 获取每日 Top 30 热门帖子及评论数据",
        "使用 OpenClaw 对每篇帖子进行摘要提炼和技术要点抽取",
        "按主题标签分类（如 AI、安全、开源工具、创业等）",
        "根据个人兴趣配置关键词过滤，排除不相关内容",
        "格式化生成每日简报，包含标题、摘要和原文链接",
        "通过 cron 定时任务每日早晨推送到指定渠道",
      ],
      en: [
        "Call Hacker News API to fetch daily Top 30 posts and comment data",
        "Use OpenClaw to summarize each post and extract key technical points",
        "Categorize by topic tags (AI, security, open-source tools, startups, etc.)",
        "Configure keyword filters based on personal interests to exclude irrelevant content",
        "Format and generate the daily briefing with title, summary, and source link",
        "Use a cron job to push to designated channels every morning",
      ],
    },
    tips: {
      zh: [
        "HN 的 \"Ask HN\" 和 \"Show HN\" 帖子往往比新闻链接更有深度，优先纳入摘要",
        "评论区的高赞评论有时比原帖更有价值，建议一并抽取",
        "可以将简报存档到 Notion 或 Obsidian，建立个人技术知识库",
      ],
      en: [
        "'Ask HN' and 'Show HN' posts often have more depth than news links; prioritize them in your digest",
        "Top-voted comments are sometimes more valuable than the original post; extract them as well",
        "Consider archiving briefings to Notion or Obsidian to build a personal technical knowledge base",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "telegram-channel-bot",
    title: { zh: "Telegram 频道智能助手", en: "Telegram Channel Bot" },
    description: {
      zh: "为 Telegram 频道添加 AI 助手：自动回答问题、翻译消息、汇总讨论内容",
      en: "Add AI assistant to Telegram channels: auto-answer questions, translate messages, summarize discussions",
    },
    fullDescription: {
      zh: "为 Telegram 频道或群组部署基于 OpenClaw 的智能 AI 助手，提升社群价值和活跃度。助手能够实时响应成员提问，提供智能问答；自动将多语言消息翻译成频道主语言，降低国际化社群的沟通门槛；每日或每周自动汇总频道讨论精华，帮助成员快速获取重要信息。",
      en: "Deploy an OpenClaw-powered AI assistant in Telegram channels or groups to enhance community value and engagement. The assistant responds in real-time to member questions with intelligent Q&A, auto-translates multilingual messages into the channel's primary language to lower barriers in international communities, and auto-summarizes daily or weekly discussion highlights to help members quickly access important information.",
    },
    category: "social",
    difficulty: "medium",
    tags: ["Telegram", "频道", "机器人"],
    requirements: {
      zh: ["Telegram 账号", "通过 @BotFather 创建的 Bot Token", "OpenClaw 已部署", "服务器或 Serverless 平台用于托管 bot"],
      en: ["Telegram account", "Bot Token created via @BotFather", "OpenClaw deployed", "Server or serverless platform for bot hosting"],
    },
    steps: {
      zh: [
        "通过 @BotFather 创建机器人并获取 Bot Token",
        "选择 Webhook 或轮询模式部署机器人服务",
        "将机器人添加到目标频道/群组并授予管理员权限",
        "配置命令处理器：/ask 问答、/translate 翻译、/summary 汇总",
        "集成 OpenClaw 实现智能对话、翻译和内容汇总功能",
        "设置权限控制，确保只有授权用户可触发特定命令",
      ],
      en: [
        "Create a bot via @BotFather and obtain the Bot Token",
        "Choose Webhook or polling mode to deploy the bot service",
        "Add the bot to the target channel/group and grant admin permissions",
        "Configure command handlers: /ask for Q&A, /translate for translation, /summary for summarization",
        "Integrate OpenClaw for intelligent conversation, translation, and content summarization",
        "Set up permission controls to ensure only authorized users can trigger specific commands",
      ],
    },
    tips: {
      zh: [
        "Webhook 模式比轮询更高效，推荐在有公网 IP 或使用 ngrok/Cloudflare Tunnel 时使用",
        "为汇总功能设置固定触发时间（如每晚 22:00），培养用户获取简报的习惯",
        "使用 Telegram 的内联按钮提供交互式选项，提升用户体验",
      ],
      en: [
        "Webhook mode is more efficient than polling; recommended when you have a public IP or use ngrok/Cloudflare Tunnel",
        "Schedule summary generation at a fixed time (e.g., 10 PM daily) to build a user habit of reading briefings",
        "Use Telegram inline buttons to provide interactive options and improve user experience",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "ai-blog-writer",
    title: { zh: "AI 博客写手", en: "AI Blog Writer" },
    description: {
      zh: "从关键词到发布，AI 全程辅助博客文章创作、SEO 优化与多平台分发",
      en: "From keyword to publish: AI-assisted blog writing, SEO optimization, and multi-platform distribution",
    },
    fullDescription: {
      zh: "构建完整的 AI 驱动博客创作流水线。从输入目标关键词开始，OpenClaw 自动进行竞品文章分析、内容大纲规划、全文撰写与 SEO 元素优化（标题标签、描述、内链建议）。完成后自动同步分发到 WordPress、Medium、掘金等多个平台，实现一键内容分发，最大化内容价值。",
      en: "Build a complete AI-driven blog content pipeline. Starting from target keywords, OpenClaw automatically performs competitor article analysis, content outline planning, full article writing, and SEO element optimization (title tags, meta descriptions, internal link suggestions). After completion, it automatically syncs and distributes to multiple platforms like WordPress, Medium, and Juejin, achieving one-click content distribution to maximize content value.",
    },
    category: "creative",
    difficulty: "easy",
    tags: ["博客", "写作", "SEO"],
    requirements: {
      zh: ["OpenClaw 已部署", "目标博客平台账号（WordPress/Medium 等）", "SEO 关键词工具（可选）", "内容发布 API 或 CMS 集成"],
      en: ["OpenClaw deployed", "Target blog platform account (WordPress/Medium, etc.)", "SEO keyword tool (optional)", "Content publishing API or CMS integration"],
    },
    steps: {
      zh: [
        "输入目标关键词，OpenClaw 分析搜索意图和竞品内容结构",
        "生成 SEO 优化的文章大纲，确认主要标题和子标题层级",
        "逐段生成文章正文，保持逻辑连贯性和阅读流畅性",
        "优化 meta 标题、描述、关键词密度和内链锚文本",
        "人工审核内容质量，补充专业见解和真实案例",
        "通过 API 自动同步发布到多个博客平台",
      ],
      en: [
        "Enter target keywords; OpenClaw analyzes search intent and competitor content structures",
        "Generate an SEO-optimized article outline and confirm main headings and subheading hierarchy",
        "Generate the article body section by section, maintaining logical coherence and readability",
        "Optimize meta title, description, keyword density, and internal link anchor text",
        "Manually review content quality and supplement with professional insights and real-world case studies",
        "Auto-publish to multiple blog platforms via API",
      ],
    },
    tips: {
      zh: [
        "AI 生成内容发布前务必人工润色，加入个人视角和独家案例以区别 AI 痕迹",
        "文章字数建议针对目标关键词做竞品分析：如竞品均在 2000 字以上，则不要低于此门槛",
        "内链布局要自然，避免为了 SEO 堆砌关键词导致可读性下降",
      ],
      en: [
        "Always manually polish AI-generated content before publishing; add personal perspectives and exclusive examples to stand out",
        "Conduct competitor analysis for article length based on target keywords; don't fall below the threshold if competitors average 2000+ words",
        "Internal links should feel natural; avoid keyword stuffing that degrades readability for SEO purposes",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "video-script-generator",
    title: { zh: "视频脚本生成器", en: "Video Script Generator" },
    description: {
      zh: "根据主题生成结构化视频脚本，包含钩子、正文、CTA，适配 YouTube 与 B 站",
      en: "Generate structured video scripts with hook, body, and CTA, optimized for YouTube and Bilibili",
    },
    fullDescription: {
      zh: "专为视频内容创作者设计的 AI 脚本生成工具，深度适配 YouTube 和 B 站的内容偏好与受众习惯。输入视频主题和目标受众，OpenClaw 自动生成包含黄金开场钩子（前 15 秒留住观众）、逻辑清晰的正文段落、自然过渡语和强效 CTA 的完整脚本，同时生成视频标题候选和描述文案。",
      en: "An AI script generation tool designed specifically for video content creators, deeply adapted to YouTube and Bilibili content preferences and audience habits. Enter the video topic and target audience, and OpenClaw automatically generates a complete script with a golden opening hook (to retain viewers in the first 15 seconds), logically structured body paragraphs, natural transitions, and an effective CTA. It also generates candidate video titles and description copy.",
    },
    category: "creative",
    difficulty: "medium",
    tags: ["视频", "脚本", "YouTube"],
    requirements: {
      zh: ["OpenClaw 已部署", "视频主题和目标受众定义", "视频时长预设（如 5 分钟、10 分钟）", "平台偏好配置（YouTube/B 站风格差异）"],
      en: ["OpenClaw deployed", "Video topic and target audience definition", "Target video duration (e.g., 5 minutes, 10 minutes)", "Platform preference configuration (YouTube/Bilibili style differences)"],
    },
    steps: {
      zh: [
        "定义视频主题、目标受众画像和期望时长",
        "选择平台风格（YouTube 国际化 vs. B 站 UP 主风格）",
        "生成 3–5 个开场钩子方案，选择最具吸引力的版本",
        "根据时长生成结构化正文：主要论点、案例、过渡语",
        "生成多版本 CTA 和结尾留白设计",
        "输出最终脚本并附带口播时间节点标注",
      ],
      en: [
        "Define video topic, target audience persona, and expected duration",
        "Select platform style (YouTube international vs. Bilibili creator style)",
        "Generate 3–5 opening hook options and select the most engaging version",
        "Generate structured body content based on duration: main arguments, case studies, transitions",
        "Generate multiple CTA versions and closing designs",
        "Output the final script with voiceover timestamp annotations",
      ],
    },
    tips: {
      zh: [
        "开场前 15 秒是留住观众的关键，务必在钩子中预告视频最有价值的内容",
        "口播脚本建议按 150 字/分钟的语速估算时长，避免脚本过长或过短",
        "B 站观众对弹幕互动更敏感，可在脚本中设计互动引导点（如「你觉得呢？」）",
      ],
      en: [
        "The first 15 seconds are critical for retaining viewers; always tease the most valuable content in the hook",
        "Estimate voiceover duration at ~150 words per minute to avoid scripts that are too long or too short",
        "Bilibili audiences are more responsive to danmaku (bullet comments); design interactive cue points in the script (e.g., 'What do you think?')",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "product-launch-assistant",
    title: { zh: "产品发布助理", en: "Product Launch Assistant" },
    description: {
      zh: "自动生成产品发布所需的全套内容：发布帖、邮件、社交媒体文案与 FAQ",
      en: "Auto-generate all content for product launches: posts, emails, social copy, and FAQs",
    },
    fullDescription: {
      zh: "为产品发布打造一站式内容生成助手。只需输入产品名称、核心功能和目标用户，OpenClaw 自动生成全套发布物料：Product Hunt 发布帖、用户邮件（公告版和福利版）、Twitter/X 发布线程、LinkedIn 深度介绍文章，以及提前准备好常见 FAQ 回答，让你以最专业的姿态迎接产品发布日。",
      en: "Build a one-stop content generation assistant for product launches. Simply input the product name, core features, and target users, and OpenClaw auto-generates the full suite of launch materials: Product Hunt submission post, user emails (announcement and incentive versions), Twitter/X launch thread, LinkedIn in-depth article, and pre-written FAQ answers — so you can greet launch day with maximum professionalism.",
    },
    category: "creative",
    difficulty: "medium",
    tags: ["产品", "发布", "营销"],
    requirements: {
      zh: ["OpenClaw 已部署", "产品信息文档（功能列表、目标用户、差异化卖点）", "各平台账号（Product Hunt、Twitter 等）", "邮件营销工具（可选，如 Mailchimp）"],
      en: ["OpenClaw deployed", "Product information document (feature list, target users, differentiating value propositions)", "Platform accounts (Product Hunt, Twitter, etc.)", "Email marketing tool (optional, e.g., Mailchimp)"],
    },
    steps: {
      zh: [
        "整理产品核心信息：名称、Tagline、功能列表、目标用户和竞品对比",
        "生成 Product Hunt 发布帖，包含标语、描述和 First Comment",
        "生成邮件内容：预热邮件、发布日公告、发布后感谢信",
        "生成 Twitter 发布线程（10–15 条推文组成的叙事链）",
        "生成 LinkedIn 文章和 FAQ 文档",
        "按发布日期排程，创建各平台发布计划表",
      ],
      en: [
        "Compile core product information: name, tagline, feature list, target users, and competitor comparison",
        "Generate Product Hunt submission post with tagline, description, and First Comment",
        "Generate email content: pre-launch teaser, launch day announcement, post-launch thank-you note",
        "Generate Twitter launch thread (10–15 tweet narrative chain)",
        "Generate LinkedIn article and FAQ document",
        "Schedule against the launch date and create a cross-platform publishing plan",
      ],
    },
    tips: {
      zh: [
        "Product Hunt 发布前需积累 Upvote 资源，提前在 Upcoming 页面预热至关重要",
        "发布日当天的推文应保持高频（每 2–3 小时一条），并积极与评论互动",
        "FAQ 内容应覆盖隐私、定价、技术栈和路线图等高频问题",
      ],
      en: [
        "Build Upvote resources before Product Hunt launch day; warming up on the Upcoming page is critical",
        "Maintain high tweet frequency on launch day (every 2–3 hours) and actively engage with comments",
        "FAQ should cover high-frequency topics: privacy, pricing, tech stack, and roadmap",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "ai-image-prompt-studio",
    title: { zh: "AI 绘画提示词工作室", en: "AI Image Prompt Studio" },
    description: {
      zh: "将创意描述转化为高质量 Midjourney/Stable Diffusion 提示词，并批量管理生图结果",
      en: "Transform creative ideas into high-quality Midjourney/Stable Diffusion prompts and manage image results in bulk",
    },
    fullDescription: {
      zh: "构建专业的 AI 绘画提示词工程体系。用户只需用自然语言描述创意想法，OpenClaw 根据目标模型（Midjourney、DALL-E、Stable Diffusion 等）的特性自动生成结构化的高质量提示词，涵盖风格、光线、构图、负面提示词等关键参数。同时提供提示词变体批量生成、版本管理和效果对比功能。",
      en: "Build a professional AI image prompt engineering system. Users simply describe their creative ideas in natural language, and OpenClaw automatically generates structured, high-quality prompts tailored to the target model (Midjourney, DALL-E, Stable Diffusion, etc.), covering key parameters like style, lighting, composition, and negative prompts. Also provides bulk prompt variant generation, version management, and result comparison features.",
    },
    category: "creative",
    difficulty: "easy",
    tags: ["AI绘画", "提示词", "Midjourney"],
    requirements: {
      zh: ["OpenClaw 已部署", "目标 AI 绘画平台账号（Midjourney/DALL-E/SD）", "提示词知识库或参考素材", "图片存储方案（本地或云存储）"],
      en: ["OpenClaw deployed", "Target AI image platform account (Midjourney/DALL-E/SD)", "Prompt knowledge base or reference materials", "Image storage solution (local or cloud)"],
    },
    steps: {
      zh: [
        "收集目标模型的提示词规范和最佳实践，建立知识库",
        "设计自然语言到提示词的转换模板，适配不同风格类型",
        "实现批量提示词变体生成（修改风格、光线、构图等维度）",
        "集成 AI 绘画平台 API，自动触发图片生成任务",
        "建立图片-提示词关联数据库，支持按关键词检索",
        "实现提示词版本管理和效果评分，持续优化提示词库",
      ],
      en: [
        "Collect target model prompt guidelines and best practices to build a knowledge base",
        "Design natural language to prompt conversion templates for different style types",
        "Implement bulk prompt variant generation (modifying dimensions like style, lighting, composition)",
        "Integrate AI image platform API to auto-trigger image generation tasks",
        "Build an image-prompt association database with keyword search support",
        "Implement prompt version management and effectiveness scoring to continuously optimize the prompt library",
      ],
    },
    tips: {
      zh: [
        "Midjourney 提示词中，风格参考词（如 \"cinematic lighting\"、\"8k\"）对效果影响很大，值得系统整理",
        "负面提示词（Negative Prompts）在 SD 中尤为关键，建议维护一个通用负面提示词列表",
        "同一想法生成多个变体后，用 A/B 比较找出最优参数组合",
      ],
      en: [
        "Style reference words in Midjourney prompts (e.g., 'cinematic lighting', '8k') have a major impact on results and are worth systematically organizing",
        "Negative prompts are especially important in Stable Diffusion; maintain a universal negative prompt list",
        "After generating multiple variants of the same idea, use A/B comparison to find the optimal parameter combination",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "github-actions-assistant",
    title: { zh: "GitHub Actions CI 助手", en: "GitHub Actions Assistant" },
    description: {
      zh: "监控 GitHub Actions 工作流状态，失败时自动分析日志并提供修复建议",
      en: "Monitor GitHub Actions workflow status, auto-analyze logs on failure, and suggest fixes",
    },
    fullDescription: {
      zh: "将 OpenClaw 接入 GitHub Actions 生态，打造智能 CI/CD 辅助系统。系统实时监控所有工作流的运行状态，当 Job 失败时自动拉取错误日志，使用 AI 分析根因（依赖版本冲突、测试失败、构建错误等），并给出具体的修复代码建议。同时生成周期性的工作流健康报告，帮助团队识别构建瓶颈。",
      en: "Connect OpenClaw to the GitHub Actions ecosystem to build an intelligent CI/CD assistant. The system monitors all workflow run statuses in real-time. When a job fails, it automatically fetches error logs, uses AI to analyze root causes (dependency version conflicts, test failures, build errors, etc.), and provides specific code fix suggestions. It also generates periodic workflow health reports to help teams identify build bottlenecks.",
    },
    category: "devops",
    difficulty: "medium",
    tags: ["GitHub", "CI/CD", "自动化"],
    requirements: {
      zh: ["GitHub 账号和目标仓库", "GitHub Personal Access Token（workflow 权限）", "OpenClaw 已部署", "通知渠道（Slack、飞书或邮件）"],
      en: ["GitHub account and target repository", "GitHub Personal Access Token (workflow permissions)", "OpenClaw deployed", "Notification channel (Slack, Feishu, or email)"],
    },
    steps: {
      zh: [
        "配置 GitHub Webhook，监听 workflow_run 和 check_run 事件",
        "在 Webhook 处理服务中识别失败状态并提取 Job ID",
        "调用 GitHub API 拉取完整的失败日志内容",
        "将日志发送至 OpenClaw，生成根因分析和修复建议",
        "将分析结果推送到团队通知渠道（附 PR 链接和 AI 建议）",
        "定期生成工作流统计报告：成功率、平均耗时和高频失败点",
      ],
      en: [
        "Configure GitHub Webhook to listen for workflow_run and check_run events",
        "In the webhook handler, identify failure states and extract Job IDs",
        "Call GitHub API to fetch full failed job log content",
        "Send logs to OpenClaw to generate root cause analysis and fix suggestions",
        "Push analysis results to team notification channels (with PR link and AI recommendations)",
        "Regularly generate workflow stats reports: success rate, average duration, and frequent failure points",
      ],
    },
    tips: {
      zh: [
        "GitHub Actions 日志可能很长，建议只截取最后 100–200 行错误相关日志发给 AI 分析",
        "为常见错误类型（如 npm 依赖冲突）建立修复模板，加快响应速度",
        "将 AI 修复建议自动创建为 GitHub Issue 或 PR Comment，方便开发者跟踪",
      ],
      en: [
        "GitHub Actions logs can be very long; extract only the last 100–200 lines of error-relevant logs for AI analysis",
        "Build fix templates for common error types (e.g., npm dependency conflicts) to speed up response time",
        "Auto-create AI fix suggestions as GitHub Issues or PR Comments so developers can track them easily",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "aws-cost-monitor",
    title: { zh: "AWS 成本监控助手", en: "AWS Cost Monitor" },
    description: {
      zh: "每日分析 AWS 账单，识别异常消费、优化建议并推送报告到飞书/Slack",
      en: "Daily AWS bill analysis: spot anomalous spending, optimization suggestions, and reports pushed to Feishu/Slack",
    },
    fullDescription: {
      zh: "构建基于 AI 的 AWS 云成本智能管理系统。每日自动通过 AWS Cost Explorer API 拉取账单数据，OpenClaw 对比历史基线识别异常消费（如 EC2 实例意外扩容、数据传输费用突增），同时分析资源利用率低的服务并给出优化建议（Reserved Instance、Savings Plan、闲置资源清理等），生成管理者易读的成本报告。",
      en: "Build an AI-powered AWS cloud cost intelligent management system. Every day, automatically pull billing data via AWS Cost Explorer API; OpenClaw compares against historical baselines to identify anomalous spending (e.g., unexpected EC2 instance scaling, data transfer cost spikes). It also analyzes underutilized services and provides optimization suggestions (Reserved Instances, Savings Plans, idle resource cleanup, etc.), generating easy-to-read cost reports for managers.",
    },
    category: "devops",
    difficulty: "hard",
    tags: ["AWS", "云成本", "监控"],
    requirements: {
      zh: ["AWS 账号和 Cost Explorer 访问权限", "AWS IAM 只读成本权限配置", "OpenClaw 已部署", "通知渠道（飞书/Slack）和数据库（存储历史账单基线）"],
      en: ["AWS account and Cost Explorer access", "AWS IAM read-only cost permissions configured", "OpenClaw deployed", "Notification channel (Feishu/Slack) and database (for storing historical billing baselines)"],
    },
    steps: {
      zh: [
        "配置 AWS IAM Role，授予 Cost Explorer 和 CloudWatch 只读权限",
        "编写每日定时任务，调用 Cost Explorer API 拉取前一天账单明细",
        "将账单数据与历史基线（30 天均值）对比，识别超阈值服务",
        "使用 OpenClaw 分析异常成因并生成自然语言优化建议",
        "生成图表化成本报告（按服务、账户、Region 分类）",
        "推送每日报告到飞书/Slack，并设置告警阈值超限时立即通知",
      ],
      en: [
        "Configure AWS IAM Role with read-only permissions for Cost Explorer and CloudWatch",
        "Write a daily scheduled task to call the Cost Explorer API and pull the previous day's billing details",
        "Compare billing data against historical baselines (30-day average) to identify services exceeding thresholds",
        "Use OpenClaw to analyze anomaly root causes and generate natural language optimization suggestions",
        "Generate charted cost reports (categorized by service, account, and region)",
        "Push daily reports to Feishu/Slack, with immediate alerts when cost alert thresholds are exceeded",
      ],
    },
    tips: {
      zh: [
        "AWS Cost Explorer API 本身有使用费用（约 $0.01/次请求），建议每日只调用一次并缓存结果",
        "为每个 AWS 服务设置独立的成本告警阈值，而非只看总账单",
        "结合 AWS Trusted Advisor 的建议一起分析，能发现更多优化机会",
      ],
      en: [
        "AWS Cost Explorer API itself has a usage fee (~$0.01 per request); call it only once per day and cache results",
        "Set individual cost alert thresholds for each AWS service rather than only monitoring the total bill",
        "Combine with AWS Trusted Advisor recommendations for more comprehensive optimization opportunities",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "kubernetes-guardian",
    title: { zh: "Kubernetes 集群守护者", en: "Kubernetes Cluster Guardian" },
    description: {
      zh: "持续监控 K8s 集群健康状态，自动重启故障 Pod、分析异常日志并生成运维报告",
      en: "Continuously monitor K8s cluster health, auto-restart failed pods, analyze abnormal logs, and generate ops reports",
    },
    fullDescription: {
      zh: "基于 OpenClaw 构建智能 Kubernetes 集群运维守护系统。系统持续监控集群节点、Pod、Service 和 PVC 的健康状态，当检测到 CrashLoopBackOff、OOMKilled 等故障时，自动执行标准恢复操作并发送告警。AI 对异常日志进行语义分析，识别应用层 Bug、资源配置不当或依赖服务故障等根因，帮助运维团队快速定位和解决问题。",
      en: "Build an intelligent Kubernetes cluster operations guardian system based on OpenClaw. The system continuously monitors the health of cluster nodes, pods, services, and PVCs. When failures like CrashLoopBackOff or OOMKilled are detected, it automatically executes standard recovery operations and sends alerts. AI semantically analyzes abnormal logs to identify root causes such as application-layer bugs, misconfigured resources, or dependency service failures, helping ops teams quickly locate and resolve issues.",
    },
    category: "devops",
    difficulty: "hard",
    tags: ["Kubernetes", "运维", "监控"],
    requirements: {
      zh: ["Kubernetes 集群访问权限（kubectl 配置）", "Prometheus + Grafana 监控栈（可选但推荐）", "OpenClaw 已部署", "告警通知渠道和运维日志存储"],
      en: ["Kubernetes cluster access (kubectl configured)", "Prometheus + Grafana monitoring stack (optional but recommended)", "OpenClaw deployed", "Alert notification channel and ops log storage"],
    },
    steps: {
      zh: [
        "部署 K8s 监控 Agent，通过 Kubernetes API 持续 Watch 资源状态变更",
        "配置异常检测规则：Pod 重启次数、节点资源压力、Service 端点健康等",
        "接入 OpenClaw 对异常事件进行根因分析和处置建议生成",
        "实现自动恢复动作：重启 Pod、扩容副本、隔离故障节点",
        "将分析结果和处置记录推送到告警渠道并写入运维日志",
        "每周生成集群健康报告：可用性 SLA、资源趋势和优化建议",
      ],
      en: [
        "Deploy a K8s monitoring agent to continuously watch resource state changes via the Kubernetes API",
        "Configure anomaly detection rules: pod restart counts, node resource pressure, service endpoint health, etc.",
        "Integrate OpenClaw for root cause analysis and remediation suggestion generation on anomalous events",
        "Implement auto-recovery actions: restart pods, scale replicas, isolate faulty nodes",
        "Push analysis results and remediation records to alert channels and write to ops logs",
        "Generate weekly cluster health reports: availability SLA, resource trends, and optimization suggestions",
      ],
    },
    tips: {
      zh: [
        "自动恢复操作建议设置冷却期（如 5 分钟内同一 Pod 只自动重启一次），避免无限循环重启",
        "CrashLoopBackOff 通常是应用 Bug 或配置问题，自动重启只是临时措施，务必同步发出告警让人工介入",
        "建议在非生产集群先测试所有自动化操作，确认安全后再应用到生产环境",
      ],
      en: [
        "Set cooldown periods for auto-recovery actions (e.g., auto-restart the same pod only once within 5 minutes) to avoid infinite restart loops",
        "CrashLoopBackOff is usually caused by application bugs or configuration issues; auto-restart is only a temporary measure — always send alerts for human intervention",
        "Test all automation actions in a non-production cluster first to confirm safety before applying to production",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "language-learning-partner",
    title: { zh: "AI 语言学习伴侣", en: "Language Learning Partner" },
    description: {
      zh: "个性化语言学习助手：每日词汇练习、口语对话、语法纠错与学习进度追踪",
      en: "Personalized language learning: daily vocabulary, conversation practice, grammar correction, and progress tracking",
    },
    fullDescription: {
      zh: "打造基于 OpenClaw 的个性化 AI 语言学习伙伴，提供沉浸式语言学习体验。系统根据用户的水平和学习目标，每日推送定制化词汇练习和情景对话任务；用户的对话输入将获得即时语法纠错和地道表达建议；学习进度和薄弱点被持续追踪，动态调整学习内容难度，实现真正的个性化学习路径。",
      en: "Create a personalized AI language learning partner powered by OpenClaw for an immersive learning experience. The system delivers customized daily vocabulary exercises and situational dialogue tasks based on the user's level and learning goals. User input receives instant grammar correction and idiomatic expression suggestions. Learning progress and weak points are continuously tracked to dynamically adjust content difficulty, achieving a truly personalized learning path.",
    },
    category: "productivity",
    difficulty: "easy",
    tags: ["语言学习", "口语", "词汇"],
    requirements: {
      zh: ["OpenClaw 已部署", "目标语言和当前水平设定", "对话渠道（微信、Telegram 或 Web 界面）", "学习进度记录数据库"],
      en: ["OpenClaw deployed", "Target language and current proficiency level settings", "Conversation channel (WeChat, Telegram, or web interface)", "Learning progress record database"],
    },
    steps: {
      zh: [
        "收集用户语言水平信息（可通过简短测试自动评估）",
        "设计词汇学习模块：间隔重复算法推送每日单词",
        "构建情景对话系统，模拟日常生活、商务、旅游等场景",
        "实现实时语法纠错，高亮错误并给出正确用法解释",
        "建立学习记录数据库，追踪掌握词汇量、对话轮数和错误频率",
        "每周生成学习进度报告，动态调整学习计划",
      ],
      en: [
        "Collect user language proficiency information (can be auto-assessed via a short test)",
        "Design vocabulary learning module with spaced repetition algorithm for daily word delivery",
        "Build situational conversation system simulating daily life, business, travel, and other scenarios",
        "Implement real-time grammar correction, highlighting errors and explaining correct usage",
        "Build a learning records database to track vocabulary mastered, conversation turns, and error frequency",
        "Generate weekly learning progress reports and dynamically adjust the learning plan",
      ],
    },
    tips: {
      zh: [
        "间隔重复（SRS）是词汇记忆的黄金算法，建议基于 Anki 的间隔模型来安排复习频率",
        "口语练习时，让 AI 同时扮演对话伙伴和纠错老师两个角色，每轮对话后给出反馈",
        "学习频率比学习时长更重要，每天 15 分钟坚持优于每周一次 2 小时",
      ],
      en: [
        "Spaced repetition (SRS) is the gold standard algorithm for vocabulary retention; base review frequency on Anki's spacing model",
        "During speaking practice, have AI play both the conversation partner and error correction teacher roles, providing feedback after each exchange",
        "Learning frequency matters more than duration; 15 minutes daily beats a 2-hour session once a week",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "travel-planning-assistant",
    title: { zh: "旅行规划助理", en: "Travel Planning Assistant" },
    description: {
      zh: "输入目的地和预算，AI 自动生成详细行程、景点推荐、餐厅建议与交通方案",
      en: "Enter destination and budget: AI generates detailed itinerary, attraction recommendations, restaurant picks, and transport plans",
    },
    fullDescription: {
      zh: "借助 OpenClaw 打造智能旅行规划助理，将繁琐的旅行准备工作自动化。只需输入目的地、出发日期、天数和人均预算，AI 综合考虑季节气候、热门景点、本地美食特色和交通效率，自动生成按天排布的详细行程表，并附上景点门票信息、推荐餐厅和交通换乘指南，让每次旅行都精心规划。",
      en: "Use OpenClaw to build a smart travel planning assistant that automates tedious travel preparation. Simply enter the destination, departure date, duration, and per-person budget. AI comprehensively considers seasonal weather, popular attractions, local cuisine, and transportation efficiency to automatically generate a detailed day-by-day itinerary with attraction ticket information, recommended restaurants, and transportation guides for every well-planned trip.",
    },
    category: "productivity",
    difficulty: "easy",
    tags: ["旅行", "行程", "规划"],
    requirements: {
      zh: ["OpenClaw 已部署", "地图或景点数据 API（如高德、Google Places）", "实时天气 API（可选）", "行程文档导出工具（PDF 或 Notion）"],
      en: ["OpenClaw deployed", "Maps or attraction data API (e.g., Amap, Google Places)", "Real-time weather API (optional)", "Itinerary export tool (PDF or Notion)"],
    },
    steps: {
      zh: [
        "收集旅行基本信息：目的地、日期、天数、人数和总预算",
        "调用地图 API 获取目的地景点、餐厅和住宿数据",
        "使用 OpenClaw 根据预算和偏好生成初始行程方案",
        "优化行程路线，减少不必要的跨城区往返（地理聚合）",
        "为每天补充餐厅推荐（早中晚）和实用交通信息",
        "导出行程到 PDF 或 Notion，支持在线分享给同行伙伴",
      ],
      en: [
        "Collect basic travel information: destination, dates, duration, group size, and total budget",
        "Call maps API to fetch destination attraction, restaurant, and accommodation data",
        "Use OpenClaw to generate an initial itinerary based on budget and preferences",
        "Optimize routing to minimize unnecessary cross-district travel (geographic clustering)",
        "Add restaurant recommendations (breakfast, lunch, dinner) and practical transport info for each day",
        "Export itinerary to PDF or Notion with online sharing support for travel companions",
      ],
    },
    tips: {
      zh: [
        "行程安排要留有余地，建议每天安排 70% 满的行程密度，为意外情况和随性探索预留空间",
        "网红景点建议提前预订门票，并安排在工作日或非高峰时段游览",
        "在行程中加入 1–2 个「备选方案」，以应对天气变化或临时计划调整",
      ],
      en: [
        "Leave buffer in your itinerary; aim for 70% density each day to allow for unexpected situations and spontaneous exploration",
        "Book tickets for popular attractions in advance and schedule visits on weekdays or off-peak hours",
        "Include 1–2 'backup options' in the itinerary to handle weather changes or last-minute plan adjustments",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "personal-finance-tracker",
    title: { zh: "个人财务追踪器", en: "Personal Finance Tracker" },
    description: {
      zh: "自动收集消费记录、分类统计、预算预警，每月生成财务健康报告",
      en: "Auto-collect spending records, categorize, budget alerts, and monthly financial health reports",
    },
    fullDescription: {
      zh: "利用 OpenClaw 构建个人财务智能管理系统，告别手动记账的麻烦。系统自动从微信/支付宝账单、银行短信中提取消费记录，AI 智能分类（餐饮、交通、娱乐、购物等），对接预算目标进行实时预警。每月末自动生成财务健康报告，分析消费趋势、储蓄率和财务目标完成进度，帮助用户建立良好的财务习惯。",
      en: "Use OpenClaw to build a personal financial intelligent management system, eliminating the hassle of manual bookkeeping. The system automatically extracts spending records from WeChat/Alipay bills and bank SMS messages. AI intelligently categorizes expenses (dining, transportation, entertainment, shopping, etc.) and provides real-time budget alerts against set targets. At month-end, it auto-generates financial health reports analyzing spending trends, savings rate, and financial goal progress, helping users build good financial habits.",
    },
    category: "productivity",
    difficulty: "medium",
    tags: ["财务", "记账", "预算"],
    requirements: {
      zh: ["OpenClaw 已部署", "账单数据来源（微信/支付宝账单导出或银行短信）", "数据库用于存储交易记录", "可视化工具（可选，如 Notion 或 Google Sheets）"],
      en: ["OpenClaw deployed", "Bill data sources (WeChat/Alipay export or bank SMS)", "Database for storing transaction records", "Visualization tool (optional, e.g., Notion or Google Sheets)"],
    },
    steps: {
      zh: [
        "配置账单数据导入：支持 CSV 导入和短信解析两种模式",
        "使用 OpenClaw 对每笔交易进行智能分类和标签打标",
        "设置月度预算目标（按分类或总额）",
        "配置预算预警规则：超出 80% 时发送提醒，超出 100% 时紧急告警",
        "同步消费数据到电子表格或 Notion 数据库，实现可视化",
        "月末触发 AI 生成财务报告，总结消费亮点、问题和改进建议",
      ],
      en: [
        "Configure bill data import: support both CSV import and SMS parsing modes",
        "Use OpenClaw to intelligently categorize and tag each transaction",
        "Set monthly budget targets (by category or total)",
        "Configure budget alert rules: send reminders at 80% usage, urgent alerts at 100%",
        "Sync spending data to spreadsheets or Notion database for visualization",
        "Trigger AI-generated financial reports at month-end, summarizing spending highlights, issues, and improvement suggestions",
      ],
    },
    tips: {
      zh: [
        "「50/30/20 法则」是入门预算分配的好参考：必要支出 50%、个人支出 30%、储蓄/投资 20%",
        "数据隐私优先：财务数据建议仅存储在本地或私有服务器，不上传至第三方云服务",
        "每月回顾时聚焦 1–2 个可改进项，避免因目标过多而放弃坚持",
      ],
      en: [
        "The '50/30/20 rule' is a good starting budget framework: 50% necessities, 30% personal spending, 20% savings/investment",
        "Prioritize data privacy: financial data should only be stored locally or on a private server, not uploaded to third-party cloud services",
        "During monthly reviews, focus on 1–2 actionable improvements to avoid abandoning the habit due to overwhelming goals",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "competitor-intelligence",
    title: { zh: "竞品情报追踪器", en: "Competitor Intelligence Monitor" },
    description: {
      zh: "定期抓取竞品官网、社交媒体与新闻动态，自动汇总变化并推送情报报告",
      en: "Regularly scrape competitor websites, social media, and news, auto-summarize changes, and push intelligence reports",
    },
    fullDescription: {
      zh: "构建系统化的竞品情报监控体系，让 OpenClaw 成为你的专属市场情报分析师。系统自动监控目标竞品的官网更新（产品页、定价页、招聘页）、社交媒体动态（Twitter、LinkedIn）和新闻报道，通过 AI 对比分析识别重要变化（新功能发布、定价调整、人员变动等），定期生成结构化情报报告供决策参考。",
      en: "Build a systematic competitive intelligence monitoring system with OpenClaw as your dedicated market intelligence analyst. The system automatically monitors target competitor website updates (product pages, pricing pages, careers pages), social media activity (Twitter, LinkedIn), and news coverage. AI comparative analysis identifies significant changes (new feature releases, pricing adjustments, personnel changes, etc.) and regularly generates structured intelligence reports for decision-making.",
    },
    category: "research",
    difficulty: "medium",
    tags: ["竞品分析", "情报", "市场"],
    requirements: {
      zh: ["OpenClaw 已部署", "目标竞品列表和监控维度配置", "网页抓取工具或 API（如 Jina Reader、Firecrawl）", "情报报告分发渠道（飞书/Slack/邮件）"],
      en: ["OpenClaw deployed", "Target competitor list and monitoring dimension configuration", "Web scraping tool or API (e.g., Jina Reader, Firecrawl)", "Intelligence report distribution channel (Feishu/Slack/email)"],
    },
    steps: {
      zh: [
        "建立竞品监控列表，定义每家竞品的监控 URL 和关注维度",
        "配置定时抓取任务，按频率（日/周）抓取目标页面内容",
        "将最新内容与历史版本对比，提取变更差异（diff）",
        "使用 OpenClaw 对变更进行语义分析，评估重要性和影响",
        "汇总生成结构化情报报告（按竞品、按变更类型分类）",
        "推送报告到团队渠道，并维护竞品动态时间线档案",
      ],
      en: [
        "Build a competitor monitoring list, defining monitoring URLs and focus dimensions for each competitor",
        "Configure scheduled scraping tasks to fetch target page content at set frequencies (daily/weekly)",
        "Compare latest content with historical versions to extract change diffs",
        "Use OpenClaw to semantically analyze changes, assessing importance and business impact",
        "Compile and generate structured intelligence reports (categorized by competitor and change type)",
        "Push reports to team channels and maintain a competitor activity timeline archive",
      ],
    },
    tips: {
      zh: [
        "竞品招聘页面变化往往预示战略方向调整，是情报价值较高的监控点",
        "对内容变化做重要性分级（高/中/低），避免信息过载导致关键情报被忽视",
        "建议监控竞品的 G2/Capterra 评论区，用户的真实反馈是产品差距分析的宝贵信息源",
      ],
      en: [
        "Competitor careers page changes often signal strategic direction shifts and are high-value intelligence monitoring points",
        "Grade content changes by importance (high/medium/low) to prevent information overload from burying critical intelligence",
        "Monitor competitor G2/Capterra review sections; genuine user feedback is a valuable source for product gap analysis",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
  {
    id: "github-trending-tracker",
    title: { zh: "GitHub 趋势追踪器", en: "GitHub Trending Tracker" },
    description: {
      zh: "每日追踪 GitHub 热门仓库，按语言和主题分类，生成开发者技术趋势简报",
      en: "Daily GitHub trending repos by language and topic, generating developer tech trend briefings",
    },
    fullDescription: {
      zh: "打造面向开发者的 GitHub 技术趋势智能追踪系统。每日自动抓取 GitHub Trending 页面的热门仓库数据，OpenClaw 按编程语言、技术领域（AI/Web/DevOps/安全等）分类汇总，提炼每个仓库的核心价值和应用场景，最终生成简洁易读的技术趋势简报，帮助开发者在碎片化时间内掌握开源生态最新动向。",
      en: "Build an intelligent GitHub technology trend tracking system for developers. Every day, automatically scrape trending repository data from GitHub Trending. OpenClaw categorizes and aggregates by programming language and technical domain (AI/Web/DevOps/Security, etc.), distills the core value and use cases of each repository, and generates a concise, readable tech trend briefing to help developers stay on top of the latest open-source ecosystem developments during spare moments.",
    },
    category: "research",
    difficulty: "easy",
    tags: ["GitHub", "开源", "技术趋势"],
    requirements: {
      zh: ["OpenClaw 已部署", "GitHub Trending 数据源（网页抓取或第三方 API）", "推送渠道（邮件、Telegram、飞书等）", "语言和主题偏好配置"],
      en: ["OpenClaw deployed", "GitHub Trending data source (web scraping or third-party API)", "Push channel (email, Telegram, Feishu, etc.)", "Language and topic preference configuration"],
    },
    steps: {
      zh: [
        "配置 GitHub Trending 数据抓取，覆盖日榜、周榜和月榜",
        "按个人关注的编程语言和技术领域过滤仓库列表",
        "使用 OpenClaw 为每个仓库生成一句话核心价值摘要",
        "识别连续上榜仓库和新兴爆发仓库，标记重要程度",
        "生成按类别分组的技术趋势简报，附仓库链接和 Star 增长数据",
        "设置每日定时推送，并提供历史趋势归档查询",
      ],
      en: [
        "Configure GitHub Trending data scraping covering daily, weekly, and monthly charts",
        "Filter repository lists by programming languages and technical domains of personal interest",
        "Use OpenClaw to generate a one-sentence core value summary for each repository",
        "Identify consistently trending repos and newly surging repos, marking their importance level",
        "Generate tech trend briefings grouped by category, with repository links and star growth data",
        "Set up daily scheduled delivery and provide historical trend archive querying",
      ],
    },
    tips: {
      zh: [
        "周榜和月榜比日榜更能反映真实趋势，减少一日热点带来的噪音干扰",
        "重点关注 Star 增速超过仓库历史积累量 10% 的仓库，这类爆发式增长往往代表重要的范式转变",
        "将长期追踪的优质仓库加入个人 Star 列表，结合 Changelog 监控实现深度跟踪",
      ],
      en: [
        "Weekly and monthly charts reflect real trends better than daily charts, reducing noise from one-day spikes",
        "Focus on repos where star growth exceeds 10% of their historical accumulated stars; such explosive growth often signals important paradigm shifts",
        "Add consistently high-quality repos to your personal Star list and combine with Changelog monitoring for in-depth tracking",
      ],
    },
    externalUrl: "https://github.com/hesamsheikh/awesome-openclaw-usecases",
  },
]

export const categories: { id: Category; icon: string }[] = [
  { id: "china", icon: "🇨🇳" },
  { id: "social", icon: "📱" },
  { id: "creative", icon: "🎨" },
  { id: "devops", icon: "🔧" },
  { id: "productivity", icon: "⚡" },
  { id: "research", icon: "🔬" },
  { id: "finance", icon: "💹" },
]
