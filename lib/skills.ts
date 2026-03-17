// 精选 Skills 来源：VoltAgent/awesome-openclaw-skills（5,400+ 技能，来自 OpenClaw 官方技能库 ClawHub）
// https://github.com/VoltAgent/awesome-openclaw-skills

export type SkillCategoryId =
  | "git"
  | "productivity"
  | "communication"
  | "devops"
  | "research"
  | "calendar"
  | "notes"

export interface Skill {
  id: string
  name: { zh: string; en: string }
  description: { zh: string; en: string }
  category: SkillCategoryId
  tags: string[]
  /** 常用操作示例（对话/API/指令），便于用户理解如何调用 */
  operations: string[]
  /** ClawHub 安装用 slug，如 steipete/slack */
  installSlug?: string
  /** 详情/文档链接（外链） */
  externalUrl: string
  /** 站内路径，优先于 externalUrl，不新开窗口 */
  path?: string
  /** 是否必装，卡片上会显示「必装」标注 */
  required?: boolean
  /** 免费 / 付费 / 免费额度（有免费额度，超出需付费） */
  pricing?: "free" | "paid" | "freemium"
}

export const skillCategories: { id: SkillCategoryId; nameKey: string }[] = [
  { id: "git", nameKey: "skills.category.git" },
  { id: "productivity", nameKey: "skills.category.productivity" },
  { id: "communication", nameKey: "skills.category.communication" },
  { id: "devops", nameKey: "skills.category.devops" },
  { id: "research", nameKey: "skills.category.research" },
  { id: "calendar", nameKey: "skills.category.calendar" },
  { id: "notes", nameKey: "skills.category.notes" },
]

export const skills: Skill[] = [
  // 必装（4 个，点击进站内指南页看安装/配置/命令）
  {
    id: "find-skills",
    name: { zh: "Find Skills", en: "Find Skills" },
    description: {
      zh: "技能导航仪，快速发现、安装、更新所需技能，不知道装啥时先装它。",
      en: "Discover, install, update skills. Install this first when you don’t know what to add.",
    },
    category: "productivity",
    tags: ["技能发现", "ClawHub"],
    operations: [
      "npx clawhub@latest install find-skills",
      "openclaw skills search excel",
    ],
    externalUrl: "/skills-guide",
    path: "/skills-guide#find-skills",
    required: true,
    pricing: "free",
  },
  {
    id: "tavily-search",
    name: { zh: "Tavily Search", en: "Tavily Search" },
    description: {
      zh: "给 AI 用的精准搜索，结果干净、能联网，适合查最新信息与深度调研。",
      en: "AI-optimized search, clean results, real-time web. For latest info and deep research.",
    },
    category: "research",
    tags: ["搜索", "联网"],
    operations: [
      "npx clawhub@latest install tavily-search",
      "openclaw chat \"用tavily-search --deep 搜索...\"",
    ],
    externalUrl: "/skills-guide",
    path: "/skills-guide#tavily",
    required: true,
    pricing: "freemium",
  },
  {
    id: "multi-search-engine",
    name: { zh: "Multi Search Engine", en: "Multi Search Engine" },
    description: {
      zh: "聚合 17 个搜索引擎，无需 API Key，支持隐私搜索与知识计算（WolframAlpha）。",
      en: "17 search engines in one, no API key. Privacy search and WolframAlpha for math/units.",
    },
    category: "research",
    tags: ["多引擎", "隐私搜索"],
    operations: [
      "npx clawhub@latest install multi-search-engine",
      "openclaw chat \"用multi-search-engine搜索...\"",
    ],
    externalUrl: "/skills-guide",
    path: "/skills-guide#multi-search",
    required: true,
    pricing: "free",
  },
  {
    id: "office-automation",
    name: { zh: "Office-Automation", en: "Office-Automation" },
    description: {
      zh: "周报、邮件、日程、Excel 一条龙，需配置邮箱与日程同步后使用。",
      en: "Reports, email, calendar, Excel. Requires mail and calendar config.",
    },
    category: "productivity",
    tags: ["办公", "日程", "邮件"],
    operations: [
      "npx clawhub@latest install office-automation",
      "openclaw skills configure office-automation",
    ],
    externalUrl: "/skills-guide",
    path: "/skills-guide#office-automation",
    required: true,
    pricing: "free",
  },
  // Git & GitHub
  {
    id: "agent-commons",
    name: { zh: "Agent Commons", en: "Agent Commons" },
    description: {
      zh: "咨询、提交、扩展与质疑推理链，与 Git 工作流深度结合",
      en: "Consult, commit, extend, and challenge reasoning chains; deep Git workflow integration",
    },
    category: "git",
    tags: ["Git", "推理链", "协作"],
    operations: [
      "commit()  # 提交当前推理与改动",
      "extend_chain(\"...\")  # 扩展推理链",
      "challenge_reasoning()  # 质疑并修正推理",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#git--github",
    pricing: "free",
  },
  {
    id: "alex-session-wrap-up",
    name: { zh: "Alex Session Wrap-Up", en: "Alex Session Wrap-Up" },
    description: {
      zh: "会话结束时自动提交未推送工作、提取学习要点、检测模式并持久化规则",
      en: "End-of-session automation: commit unpushed work, extract learnings, detect patterns, persist rules",
    },
    category: "git",
    tags: ["Git", "自动化", "复盘"],
    operations: [
      "wrap_up()  # 会话结束触发",
      "commit_unpushed()  # 提交未推送工作",
      "extract_learnings()  # 提取学习要点",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#git--github",
    pricing: "free",
  },
  {
    id: "arc-skill-gitops",
    name: { zh: "Arc Skill GitOps", en: "Arc Skill GitOps" },
    description: {
      zh: "智能体工作流与技能的自动化部署、回滚与版本管理",
      en: "Automated deployment, rollback, and version management for agent workflows and skills",
    },
    category: "git",
    tags: ["GitOps", "部署", "版本"],
    operations: [
      "deploy_workflow(\"...\")  # 部署工作流",
      "rollback(\"workflow-id\")  # 回滚到上一版本",
      "list_versions()  # 查看版本历史",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#git--github",
    pricing: "free",
  },
  // Productivity & Tasks
  {
    id: "4todo",
    name: { zh: "4todo", en: "4todo" },
    description: {
      zh: "在对话中管理 4todo (4to.do) 任务",
      en: "Manage 4todo (4to.do) from chat",
    },
    category: "productivity",
    tags: ["任务", "待办"],
    operations: [
      "4todo add 买牛奶",
      "4todo list  # 列出今日/本周任务",
      "4todo complete <id>  # 标记完成",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#productivity--tasks",
    pricing: "free",
  },
  {
    id: "adhd-daily-planner",
    name: { zh: "ADHD 每日计划", en: "ADHD Daily Planner" },
    description: {
      zh: "时间感知友好的计划与执行追踪，支持执行功能辅助",
      en: "Time-blind friendly planning, executive function support",
    },
    category: "productivity",
    tags: ["计划", "ADHD", "每日"],
    operations: [
      "plan_my_day  # 生成今日计划",
      "what_next  # 下一步建议",
      "log_completion(\"...\")  # 记录完成项",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#productivity--tasks",
    pricing: "free",
  },
  {
    id: "agent-autopilot",
    name: { zh: "Agent Autopilot", en: "Agent Autopilot" },
    description: {
      zh: "心跳驱动的自主任务执行、日/周进度报告与长期记忆",
      en: "Self-driving workflow with heartbeat-driven execution, day/night reports, long-term memory",
    },
    category: "productivity",
    tags: ["自主", "心跳", "报告"],
    operations: [
      "set_goal(\"...\")  # 设定长期目标",
      "daily_report()  # 获取今日进度报告",
      "weekly_report()  # 获取本周总结",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#productivity--tasks",
    pricing: "free",
  },
  {
    id: "asana",
    name: { zh: "Asana", en: "Asana" },
    description: {
      zh: "通过 Asana REST API 与 OpenClaw 集成任务与项目",
      en: "Integrate Asana with OpenClaw via REST API for tasks and projects",
    },
    category: "productivity",
    tags: ["Asana", "项目管理"],
    operations: [
      "asana list tasks --project \"...\"",
      "asana create task \"标题\" --assignee ...",
      "asana update task <id> --complete",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#productivity--tasks",
    pricing: "freemium",
  },
  // Communication
  {
    id: "feishu-calendar",
    name: { zh: "飞书日历", en: "Feishu Calendar" },
    description: {
      zh: "管理飞书（Lark）日历日程",
      en: "Manage Feishu (Lark) Calendars",
    },
    category: "communication",
    tags: ["飞书", "日历", "日程"],
    operations: [
      "feishu_calendar list today  # 今日日程",
      "feishu_calendar create \"会议\" --start ...",
      "feishu_calendar list week  # 本周日程",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#calendar--scheduling",
    pricing: "freemium",
  },
  {
    id: "agent-mail",
    name: { zh: "Agent Mail", en: "Agent Mail" },
    description: {
      zh: "为 AI 智能体提供的邮箱收件箱能力",
      en: "Email inbox for AI agents",
    },
    category: "communication",
    tags: ["邮件", "收件箱"],
    operations: [
      "inbox()  # 获取未读邮件",
      "read_mail(id)  # 读取单封邮件",
      "reply_mail(id, \"...\")  # 回复邮件",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#communication",
    pricing: "free",
  },
  {
    id: "aliyun-asr",
    name: { zh: "阿里云 ASR", en: "Aliyun ASR" },
    description: {
      zh: "纯阿里云 ASR 语音转写，支持飞书等多通道语音消息转文字",
      en: "Pure Aliyun ASR for voice message transcription; supports Feishu and other channels",
    },
    category: "communication",
    tags: ["语音", "转写", "飞书"],
    operations: [
      "transcribe(audio_url)  # 语音转文字",
      "transcribe_from_feishu(message_id)  # 飞书语音消息转写",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#communication",
    pricing: "paid",
  },
  // DevOps & Cloud
  {
    id: "n8n",
    name: { zh: "n8n", en: "n8n" },
    description: {
      zh: "通过 API 管理 n8n 工作流与自动化",
      en: "Manage n8n workflows and automations via API",
    },
    category: "devops",
    tags: ["n8n", "工作流", "自动化"],
    operations: [
      "n8n workflow list  # 列出工作流",
      "n8n workflow execute <id>  # 执行指定工作流",
      "n8n workflow trigger <id>  # 通过 webhook 触发",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#devops--cloud",
    pricing: "free",
  },
  {
    id: "agentic-devops",
    name: { zh: "Agentic DevOps", en: "Agentic DevOps" },
    description: {
      zh: "生产级智能体 DevOps：Docker、进程管理、日志分析与健康监控",
      en: "Production-grade agent DevOps — Docker, process management, log analysis, health monitoring",
    },
    category: "devops",
    tags: ["Docker", "运维", "监控"],
    operations: [
      "docker_ps  # 查看容器状态",
      "logs(service, --tail 100)  # 查看日志",
      "health_check()  # 健康检查",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#devops--cloud",
    pricing: "free",
  },
  {
    id: "agent-metrics-osiris",
    name: { zh: "Agent Metrics Osiris", en: "Agent Metrics Osiris" },
    description: {
      zh: "智能体可观测性与指标：调用量、错误、延迟追踪",
      en: "Observability and metrics for AI agents — track calls, errors, latency",
    },
    category: "devops",
    tags: ["可观测性", "指标", "监控"],
    operations: [
      "metrics_summary()  # 调用量/错误/延迟汇总",
      "metrics_trace(session_id)  # 单次会话追踪",
      "metrics_alert_threshold(...)  # 设置告警阈值",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#devops--cloud",
    pricing: "free",
  },
  // Search & Research
  {
    id: "academic-research",
    name: { zh: "Academic Research", en: "Academic Research" },
    description: {
      zh: "使用 OpenAlex API 检索学术论文与文献综述（免费、无需 key）",
      en: "Search academic papers and conduct literature reviews using OpenAlex API (free, no key)",
    },
    category: "research",
    tags: ["学术", "论文", "OpenAlex"],
    operations: [
      "search_papers(\"transformer architecture\")  # 检索论文",
      "get_citations(paper_id)  # 获取引用",
      "literature_review(\"topic\", limit=20)  # 文献综述",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#search--research",
    pricing: "free",
  },
  {
    id: "2nd-brain",
    name: { zh: "2nd Brain", en: "2nd Brain" },
    description: {
      zh: "个人知识库：记录与检索人物、地点、餐厅、游戏、技术等信息",
      en: "Personal knowledge base for capturing and retrieving people, places, restaurants, games, tech",
    },
    category: "research",
    tags: ["知识库", "PKM", "记忆"],
    operations: [
      "memory_search(\"Raven Duran\")  # 按人名检索",
      "memory_search(\"Mamou Prime restaurant\")  # 按地点/餐厅检索",
      "memory_search(\"what games has Raven played\")  # 自然语言问句检索",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#coding-agents--ides",
    pricing: "free",
  },
  {
    id: "braindb",
    name: { zh: "BrainDB", en: "BrainDB" },
    description: {
      zh: "智能体持久化语义记忆存储与检索",
      en: "Persistent, semantic memory for AI agents",
    },
    category: "research",
    tags: ["记忆", "语义", "检索"],
    operations: [
      "memory_store(\"key\", \"...\")  # 写入记忆",
      "memory_search(\"...\")  # 语义检索",
      "memory_recall(embedding)  # 按向量回忆",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#notes--pkm",
    pricing: "free",
  },
  // Calendar & Scheduling
  {
    id: "google-calendar",
    name: { zh: "Google Calendar", en: "Google Calendar" },
    description: {
      zh: "通过 Google Calendar API 查看、创建与管理日程",
      en: "Interact with Google Calendar via API — view, create, manage events",
    },
    category: "calendar",
    tags: ["Google", "日历", "日程"],
    operations: [
      "gcal list today  # 今日日程",
      "gcal create \"会议\" --start ... --end ...",
      "gcal list --range week  # 本周日程",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#calendar--scheduling",
    pricing: "freemium",
  },
  {
    id: "apple-reminders",
    name: { zh: "Apple Reminders", en: "Apple Reminders" },
    description: {
      zh: "通过 remindctl CLI 管理 Apple 提醒事项",
      en: "Manage Apple Reminders via remindctl CLI (list, add, edit, complete, delete)",
    },
    category: "calendar",
    tags: ["Apple", "提醒", "macOS"],
    operations: [
      "remindctl list  # 列出提醒",
      "remindctl add \"买牛奶\"  # 添加提醒",
      "remindctl complete <id>  # 标记完成",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#calendar--scheduling",
    pricing: "free",
  },
  // Notes & PKM
  {
    id: "apple-notes",
    name: { zh: "Apple Notes", en: "Apple Notes" },
    description: {
      zh: "在 macOS 上通过 memo CLI 管理 Apple 备忘录",
      en: "Manage Apple Notes via memo CLI on macOS",
    },
    category: "notes",
    tags: ["Apple", "备忘录", "macOS"],
    operations: [
      "memo list  # 列出笔记",
      "memo new \"标题\" --body \"...\"  # 新建笔记",
      "memo search \"关键词\"  # 搜索笔记",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#notes--pkm",
    pricing: "free",
  },
  {
    id: "bear-notes",
    name: { zh: "Bear 笔记", en: "Bear Notes" },
    description: {
      zh: "通过 grizzly 创建、搜索与管理 Bear 笔记",
      en: "Create, search, and manage Bear notes via grizzly",
    },
    category: "notes",
    tags: ["Bear", "笔记", "macOS"],
    operations: [
      "grizzly search \"...\"  # 搜索笔记",
      "grizzly create \"标题\"  # 创建笔记",
      "grizzly open <id>  # 打开指定笔记",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#notes--pkm",
    pricing: "free",
  },
  // Communication (additional)
  {
    id: "slack",
    name: { zh: "Slack", en: "Slack" },
    description: {
      zh: "通过 API 管理 Slack 消息、频道与工作区，支持发送通知、搜索历史与机器人回复",
      en: "Manage Slack messages, channels, and workspaces — send notifications, search history, and bot replies",
    },
    category: "communication",
    tags: ["Slack", "消息", "团队"],
    operations: [
      "slack_send(channel, \"...\")  # 发送消息",
      "slack_search(query)  # 搜索历史消息",
      "slack_list_channels()  # 列出所有频道",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#communication",
    pricing: "freemium",
  },
  {
    id: "telegram",
    name: { zh: "Telegram", en: "Telegram" },
    description: {
      zh: "通过 Telegram Bot API 发送消息、管理群组与频道，支持图片、文件与 inline 键盘",
      en: "Send messages, manage groups and channels via Telegram Bot API — supports images, files, and inline keyboards",
    },
    category: "communication",
    tags: ["Telegram", "消息", "机器人"],
    operations: [
      "telegram_send(chat_id, \"...\")  # 发送消息",
      "telegram_send_photo(chat_id, url)  # 发送图片",
      "telegram_create_poll(...)  # 创建投票",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#communication",
    pricing: "free",
  },
  {
    id: "discord-bot",
    name: { zh: "Discord Bot", en: "Discord Bot" },
    description: {
      zh: "通过 Discord API 管理服务器、发送嵌入消息、审核内容与监控频道活动",
      en: "Manage Discord servers, send rich embeds, moderate content, and monitor channel activity via API",
    },
    category: "communication",
    tags: ["Discord", "社区", "机器人"],
    operations: [
      "discord_send(channel_id, embed)  # 发送富文本消息",
      "discord_moderate(message_id, action)  # 内容审核",
      "discord_list_members()  # 列出成员",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#communication",
    pricing: "free",
  },
  {
    id: "whatsapp",
    name: { zh: "WhatsApp", en: "WhatsApp" },
    description: {
      zh: "通过 WhatsApp Business API 发送消息模板、接收用户消息并自动回复",
      en: "Send message templates, receive user messages, and auto-reply via WhatsApp Business API",
    },
    category: "communication",
    tags: ["WhatsApp", "消息", "商务"],
    operations: [
      "whatsapp_send(phone, template, params)  # 发送模板消息",
      "whatsapp_reply(msg_id, \"...\")  # 回复消息",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#communication",
    pricing: "paid",
  },
  // Git & GitHub (additional)
  {
    id: "github-tools",
    name: { zh: "GitHub Tools", en: "GitHub Tools" },
    description: {
      zh: "管理 GitHub 仓库、Issue、PR 与 Actions，支持代码审查辅助与自动化发布",
      en: "Manage GitHub repos, issues, PRs, and Actions — code review assistance and automated releases",
    },
    category: "git",
    tags: ["GitHub", "仓库", "PR"],
    operations: [
      "github_create_issue(repo, title, body)  # 创建 Issue",
      "github_list_prs(repo)  # 列出 PR",
      "github_trigger_workflow(repo, workflow_id)  # 触发 Actions",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#git--github",
    pricing: "freemium",
  },
  {
    id: "gitlab-tools",
    name: { zh: "GitLab Tools", en: "GitLab Tools" },
    description: {
      zh: "管理 GitLab 项目、Merge Request、CI/CD pipeline 与 Issue 追踪",
      en: "Manage GitLab projects, merge requests, CI/CD pipelines, and issue tracking",
    },
    category: "git",
    tags: ["GitLab", "CI/CD", "MR"],
    operations: [
      "gitlab_list_mrs(project_id)  # 列出 MR",
      "gitlab_trigger_pipeline(project_id)  # 触发 CI",
      "gitlab_create_issue(project_id, title)  # 创建 Issue",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#git--github",
    pricing: "freemium",
  },
  // Productivity & Tasks (additional)
  {
    id: "linear-tasks",
    name: { zh: "Linear", en: "Linear" },
    description: {
      zh: "通过 Linear API 管理工程团队的 Issue、项目与迭代周期",
      en: "Manage engineering team issues, projects, and cycles via Linear API",
    },
    category: "productivity",
    tags: ["Linear", "项目管理", "工程"],
    operations: [
      "linear_create_issue(title, team_id)  # 创建 Issue",
      "linear_list_issues(team_id, status)  # 按状态筛选",
      "linear_update_issue(id, status)  # 更新状态",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#productivity--tasks",
    pricing: "freemium",
  },
  {
    id: "jira-project",
    name: { zh: "Jira", en: "Jira" },
    description: {
      zh: "通过 Jira REST API 管理 Sprint、Issue 与项目进度，支持 Scrum 与看板工作流",
      en: "Manage sprints, issues, and project progress via Jira REST API — Scrum and Kanban workflows",
    },
    category: "productivity",
    tags: ["Jira", "Sprint", "项目管理"],
    operations: [
      "jira_list_issues(project, sprint)  # 查看 Sprint 任务",
      "jira_create_issue(project, summary, type)  # 新建 Issue",
      "jira_transition(issue_id, status)  # 更新状态",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#productivity--tasks",
    pricing: "paid",
  },
  {
    id: "stripe-monitor",
    name: { zh: "Stripe 支付监控", en: "Stripe Monitor" },
    description: {
      zh: "监控 Stripe 支付状态、订阅变化与退款事件，异常时自动通知",
      en: "Monitor Stripe payment status, subscription changes, and refund events — auto-notify on anomalies",
    },
    category: "productivity",
    tags: ["Stripe", "支付", "监控"],
    operations: [
      "stripe_list_payments(limit=10)  # 查看最近支付",
      "stripe_subscription_status(customer_id)  # 订阅状态",
      "stripe_refund_summary(period)  # 退款汇总",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#productivity--tasks",
    pricing: "paid",
  },
  // Notes & PKM (additional)
  {
    id: "notion-workspace",
    name: { zh: "Notion", en: "Notion" },
    description: {
      zh: "读写 Notion 数据库与页面，支持数据查询、页面创建与工作区自动化",
      en: "Read and write Notion databases and pages — query data, create pages, and automate workspace workflows",
    },
    category: "notes",
    tags: ["Notion", "知识库", "数据库"],
    operations: [
      "notion_query_db(db_id, filter)  # 查询数据库",
      "notion_create_page(parent_id, title, content)  # 创建页面",
      "notion_update_page(page_id, properties)  # 更新属性",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#notes--pkm",
    pricing: "freemium",
  },
  {
    id: "obsidian-vault",
    name: { zh: "Obsidian", en: "Obsidian" },
    description: {
      zh: "读写本地 Obsidian Vault，支持笔记创建、双链管理与知识图谱查询",
      en: "Read and write local Obsidian Vault — create notes, manage backlinks, and query knowledge graph",
    },
    category: "notes",
    tags: ["Obsidian", "笔记", "知识图谱"],
    operations: [
      "obsidian_create(title, content, tags)  # 创建笔记",
      "obsidian_search(query)  # 全文搜索",
      "obsidian_get_backlinks(note_path)  # 获取反向链接",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#notes--pkm",
    pricing: "free",
  },
  // Search & Research (additional)
  {
    id: "arxiv-search",
    name: { zh: "ArXiv Search", en: "ArXiv Search" },
    description: {
      zh: "检索 ArXiv 最新论文，支持按领域、关键词与作者筛选，并生成摘要",
      en: "Search latest ArXiv papers by field, keywords, or author — with auto-generated summaries",
    },
    category: "research",
    tags: ["ArXiv", "论文", "学术"],
    operations: [
      "arxiv_search(\"diffusion models\", max=10)  # 检索论文",
      "arxiv_get_abstract(arxiv_id)  # 获取摘要",
      "arxiv_latest(category=\"cs.AI\")  # 最新 AI 论文",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#search--research",
    pricing: "free",
  },
  {
    id: "wikipedia-lookup",
    name: { zh: "Wikipedia", en: "Wikipedia" },
    description: {
      zh: "快速查询维基百科词条，支持摘要提取、多语言与相关词条推荐",
      en: "Quick Wikipedia lookups — extract summaries, multi-language support, and related article suggestions",
    },
    category: "research",
    tags: ["Wikipedia", "百科", "知识"],
    operations: [
      "wiki_summary(\"量子计算\")  # 获取词条摘要",
      "wiki_search(query, lang=\"zh\")  # 搜索词条",
      "wiki_related(title)  # 获取相关词条",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#search--research",
    pricing: "free",
  },
  // DevOps & Cloud (additional)
  {
    id: "aws-tools",
    name: { zh: "AWS Tools", en: "AWS Tools" },
    description: {
      zh: "通过 AWS CLI 与 SDK 管理 EC2、S3、Lambda 与 CloudWatch，支持资源查询与操作",
      en: "Manage EC2, S3, Lambda, and CloudWatch via AWS CLI and SDK — query and operate cloud resources",
    },
    category: "devops",
    tags: ["AWS", "云服务", "基础设施"],
    operations: [
      "aws_ec2_list()  # 列出实例",
      "aws_s3_upload(bucket, file)  # 上传文件",
      "aws_cloudwatch_alerts()  # 查看告警",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#devops--cloud",
    pricing: "paid",
  },
  // Calendar & Scheduling (additional)
  {
    id: "outlook-calendar",
    name: { zh: "Outlook Calendar", en: "Outlook Calendar" },
    description: {
      zh: "通过 Microsoft Graph API 管理 Outlook 日历：查看、创建与更新会议，支持会议室预订",
      en: "Manage Outlook Calendar via Microsoft Graph API — view, create, update events, and book meeting rooms",
    },
    category: "calendar",
    tags: ["Outlook", "日历", "Microsoft"],
    operations: [
      "outlook_cal_list(date_range)  # 查看日程",
      "outlook_cal_create(subject, start, end, attendees)  # 创建会议",
      "outlook_find_free_slot(attendees, duration)  # 查找空闲时间",
    ],
    externalUrl: "https://github.com/VoltAgent/awesome-openclaw-skills#calendar--scheduling",
    pricing: "freemium",
  },
]

export const SKILLS_SOURCE_URL = "https://github.com/VoltAgent/awesome-openclaw-skills"
export const CLAWHUB_URL = "https://clawhub.io"
