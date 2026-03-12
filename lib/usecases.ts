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
