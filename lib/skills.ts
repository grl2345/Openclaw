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
  /** 详情/文档链接 */
  externalUrl: string
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
  },
]

export const SKILLS_SOURCE_URL = "https://github.com/VoltAgent/awesome-openclaw-skills"
export const CLAWHUB_URL = "https://clawhub.io"
