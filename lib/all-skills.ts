// 真实 Skills 数据 - 来源：VoltAgent/awesome-openclaw-skills（5,366+ 真实技能）
// https://github.com/VoltAgent/awesome-openclaw-skills
// 所有链接均为真实可访问的 ClawHub 技能页面
// 共 824 个技能，覆盖 25 大类

export type AllSkillCategoryId =
  | "git"
  | "productivity"
  | "communication"
  | "devops"
  | "research"
  | "calendar"
  | "notes"
  | "database"
  | "analytics"
  | "ai-tools"
  | "finance"
  | "social"
  | "security"
  | "marketing"
  | "media"
  | "browser"
  | "education"
  | "health"
  | "iot"
  | "gaming"
  | "ecommerce"
  | "design"
  | "docs"
  | "translation"
  | "cli"

export const allSkillCategories: { id: AllSkillCategoryId; nameZh: string; nameEn: string }[] = [
  {
    "id": "git",
    "nameZh": "Git · 代码",
    "nameEn": "Git & Code"
  },
  {
    "id": "productivity",
    "nameZh": "效率 · 办公",
    "nameEn": "Productivity"
  },
  {
    "id": "communication",
    "nameZh": "沟通 · 协作",
    "nameEn": "Communication"
  },
  {
    "id": "devops",
    "nameZh": "开发 · 运维",
    "nameEn": "DevOps & Cloud"
  },
  {
    "id": "research",
    "nameZh": "搜索 · 调研",
    "nameEn": "Search & Research"
  },
  {
    "id": "calendar",
    "nameZh": "日历 · 日程",
    "nameEn": "Calendar"
  },
  {
    "id": "notes",
    "nameZh": "笔记 · 知识库",
    "nameEn": "Notes & PKM"
  },
  {
    "id": "database",
    "nameZh": "数据库",
    "nameEn": "Database"
  },
  {
    "id": "analytics",
    "nameZh": "数据分析",
    "nameEn": "Analytics"
  },
  {
    "id": "ai-tools",
    "nameZh": "AI 工具",
    "nameEn": "AI Tools"
  },
  {
    "id": "finance",
    "nameZh": "金融 · 支付",
    "nameEn": "Finance"
  },
  {
    "id": "social",
    "nameZh": "社交媒体",
    "nameEn": "Social Media"
  },
  {
    "id": "security",
    "nameZh": "安全 · 权限",
    "nameEn": "Security"
  },
  {
    "id": "marketing",
    "nameZh": "营销 · 运营",
    "nameEn": "Marketing"
  },
  {
    "id": "media",
    "nameZh": "媒体 · 创作",
    "nameEn": "Media & Creative"
  },
  {
    "id": "browser",
    "nameZh": "浏览器 · 自动化",
    "nameEn": "Browser & Automation"
  },
  {
    "id": "education",
    "nameZh": "教育 · 学习",
    "nameEn": "Education & Learning"
  },
  {
    "id": "health",
    "nameZh": "健康 · 生活",
    "nameEn": "Health & Life"
  },
  {
    "id": "iot",
    "nameZh": "智能家居 · IoT",
    "nameEn": "Smart Home & IoT"
  },
  {
    "id": "gaming",
    "nameZh": "游戏",
    "nameEn": "Gaming"
  },
  {
    "id": "ecommerce",
    "nameZh": "电商 · 购物",
    "nameEn": "E-commerce"
  },
  {
    "id": "design",
    "nameZh": "设计 · UI",
    "nameEn": "Design & UI"
  },
  {
    "id": "docs",
    "nameZh": "文档 · PDF",
    "nameEn": "Documents & PDF"
  },
  {
    "id": "translation",
    "nameZh": "翻译 · 语言",
    "nameEn": "Translation & Language"
  },
  {
    "id": "cli",
    "nameZh": "CLI 工具",
    "nameEn": "CLI Utilities"
  }
]

export interface AllSkill {
  id: string
  name: { zh: string; en: string }
  description: { zh: string; en: string }
  category: AllSkillCategoryId
  tags: string[]
  operations: string[]
  externalUrl: string
  pricing?: "free" | "paid" | "freemium"
  required?: boolean
}

export const allSkills: AllSkill[] = [
  {
    "id": "agent-commons",
    "name": {
      "zh": "智能体公共库",
      "en": "agent-commons"
    },
    "description": {
      "zh": "查阅、提交、扩展和质疑推理链的公共智能体工具。",
      "en": "Consult, commit, extend, and challenge reasoning chains."
    },
    "category": "git",
    "tags": [
      "agent commons",
      "Git"
    ],
    "operations": [
      "clawhub install agent-commons"
    ],
    "externalUrl": "https://clawskills.sh/skills/zanblayde-agent-commons",
    "pricing": "free"
  },
  {
    "id": "agent-team-orchestration",
    "name": {
      "zh": "多智能体协作编排",
      "en": "agent-team-orchestration"
    },
    "description": {
      "zh": "编排多智能体团队，定义角色、任务生命周期和交接协议。",
      "en": "Orchestrate multi-agent teams with defined roles, task lifecycles, handoff protocols, and review workflows."
    },
    "category": "git",
    "tags": [
      "agent team",
      "Git"
    ],
    "operations": [
      "clawhub install agent-team-orchestration"
    ],
    "externalUrl": "https://clawskills.sh/skills/arminnaimi-agent-team-orchestration",
    "pricing": "free"
  },
  {
    "id": "agentdo",
    "name": {
      "zh": "智能体任务队列",
      "en": "agentdo"
    },
    "description": {
      "zh": "发布任务给其他 AI 智能体，或从任务队列领取工作。",
      "en": "Post tasks for other AI agents to do, or pick up work from the AgentDo task queue (agentdo.dev)"
    },
    "category": "git",
    "tags": [
      "agentdo",
      "Git"
    ],
    "operations": [
      "clawhub install agentdo"
    ],
    "externalUrl": "https://clawskills.sh/skills/wrannaman-agentdo",
    "pricing": "free"
  },
  {
    "id": "agentgate",
    "name": {
      "zh": "智能体网关",
      "en": "agentgate"
    },
    "description": {
      "zh": "智能体访问控制和流量管理网关。",
      "en": "API gateway for personal data with human-in-the-loop write approval."
    },
    "category": "git",
    "tags": [
      "agentgate",
      "Git"
    ],
    "operations": [
      "clawhub install agentgate"
    ],
    "externalUrl": "https://clawskills.sh/skills/monteslu-agentgate",
    "pricing": "free"
  },
  {
    "id": "airadar",
    "name": {
      "zh": "AI 雷达监控",
      "en": "airadar"
    },
    "description": {
      "zh": "AI 项目和趋势实时监控与预警。",
      "en": "Distill the signal around AI-native tools/apps and their GitHub home bases: fast-growing, hyped, well-funded."
    },
    "category": "git",
    "tags": [
      "airadar",
      "Git"
    ],
    "operations": [
      "clawhub install airadar"
    ],
    "externalUrl": "https://clawskills.sh/skills/lopushok9-airadar",
    "pricing": "free"
  },
  {
    "id": "alex-session-wrap-up",
    "name": {
      "zh": "alex-session-wrap-up",
      "en": "alex-session-wrap-up"
    },
    "description": {
      "zh": "End-of-session automation that commits unpushed work, extracts learnings, detects patterns, and persists rules.",
      "en": "End-of-session automation that commits unpushed work, extracts learnings, detects patterns, and persists rules."
    },
    "category": "git",
    "tags": [
      "alex session",
      "Git"
    ],
    "operations": [
      "clawhub install alex-session-wrap-up"
    ],
    "externalUrl": "https://clawskills.sh/skills/xbillwatsonx-alex-session-wrap-up",
    "pricing": "free"
  },
  {
    "id": "amazon-product-api-skill",
    "name": {
      "zh": "amazon-product-api-skill",
      "en": "amazon-product-api-skill"
    },
    "description": {
      "zh": "This skill helps users extract structured product listings from Amazon, including titles, ASINs, prices, ratings.",
      "en": "This skill helps users extract structured product listings from Amazon, including titles, ASINs, prices, ratings."
    },
    "category": "git",
    "tags": [
      "amazon product",
      "Git"
    ],
    "operations": [
      "clawhub install amazon-product-api-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/phheng-amazon-product-api-skill",
    "pricing": "free"
  },
  {
    "id": "app-store-screenshot-generation",
    "name": {
      "zh": "app-store-screenshot-generation",
      "en": "app-store-screenshot-generation"
    },
    "description": {
      "zh": "Generate App Store and Google Play screenshot assets using each::sense AI.",
      "en": "Generate App Store and Google Play screenshot assets using each::sense AI."
    },
    "category": "git",
    "tags": [
      "app store",
      "Git"
    ],
    "operations": [
      "clawhub install app-store-screenshot-generation"
    ],
    "externalUrl": "https://clawskills.sh/skills/eftalyurtseven-app-store-screenshot-generation",
    "pricing": "free"
  },
  {
    "id": "arc-agent-lifecycle",
    "name": {
      "zh": "arc-agent-lifecycle",
      "en": "arc-agent-lifecycle"
    },
    "description": {
      "zh": "Manage the lifecycle of autonomous agents and their skills.",
      "en": "Manage the lifecycle of autonomous agents and their skills."
    },
    "category": "git",
    "tags": [
      "arc agent",
      "Git"
    ],
    "operations": [
      "clawhub install arc-agent-lifecycle"
    ],
    "externalUrl": "https://clawskills.sh/skills/trypto1019-arc-agent-lifecycle",
    "pricing": "free"
  },
  {
    "id": "arc-security-audit",
    "name": {
      "zh": "arc-security-audit",
      "en": "arc-security-audit"
    },
    "description": {
      "zh": "Comprehensive security audit for an agent's full skill stack.",
      "en": "Comprehensive security audit for an agent's full skill stack."
    },
    "category": "git",
    "tags": [
      "arc security",
      "Git"
    ],
    "operations": [
      "clawhub install arc-security-audit"
    ],
    "externalUrl": "https://clawskills.sh/skills/trypto1019-arc-security-audit",
    "pricing": "free"
  },
  {
    "id": "arc-skill-gitops",
    "name": {
      "zh": "arc-skill-gitops",
      "en": "arc-skill-gitops"
    },
    "description": {
      "zh": "Automated deployment, rollback, and version management for agent workflows and skills.",
      "en": "Automated deployment, rollback, and version management for agent workflows and skills."
    },
    "category": "git",
    "tags": [
      "arc skill",
      "Git"
    ],
    "operations": [
      "clawhub install arc-skill-gitops"
    ],
    "externalUrl": "https://clawskills.sh/skills/trypto1019-arc-skill-gitops",
    "pricing": "free"
  },
  {
    "id": "arc-trust-verifier",
    "name": {
      "zh": "arc-trust-verifier",
      "en": "arc-trust-verifier"
    },
    "description": {
      "zh": "Verify skill provenance and build trust scores for ClawHub skills.",
      "en": "Verify skill provenance and build trust scores for ClawHub skills."
    },
    "category": "git",
    "tags": [
      "arc trust",
      "Git"
    ],
    "operations": [
      "clawhub install arc-trust-verifier"
    ],
    "externalUrl": "https://clawskills.sh/skills/trypto1019-arc-trust-verifier",
    "pricing": "free"
  },
  {
    "id": "arxiv-search-collector",
    "name": {
      "zh": "arxiv-search-collector",
      "en": "arxiv-search-collector"
    },
    "description": {
      "zh": "Model-driven arXiv retrieval workflow for building a paper set with a manual language parameter: initialize a run.",
      "en": "Model-driven arXiv retrieval workflow for building a paper set with a manual language parameter: initialize a run."
    },
    "category": "git",
    "tags": [
      "arxiv search",
      "Git"
    ],
    "operations": [
      "clawhub install arxiv-search-collector"
    ],
    "externalUrl": "https://clawskills.sh/skills/xukp20-arxiv-search-collector",
    "pricing": "free"
  },
  {
    "id": "auto-pr-merger",
    "name": {
      "zh": "auto-pr-merger",
      "en": "auto-pr-merger"
    },
    "description": {
      "zh": "This skill automates the workflow of checking out a GitHub.",
      "en": "This skill automates the workflow of checking out a GitHub."
    },
    "category": "git",
    "tags": [
      "auto pr",
      "Git"
    ],
    "operations": [
      "clawhub install auto-pr-merger"
    ],
    "externalUrl": "https://clawskills.sh/skills/autogame-17-auto-pr-merger",
    "pricing": "free"
  },
  {
    "id": "azhua-skill-vetter",
    "name": {
      "zh": "azhua-skill-vetter",
      "en": "azhua-skill-vetter"
    },
    "description": {
      "zh": "Security-first skill vetting for AI agents.",
      "en": "Security-first skill vetting for AI agents."
    },
    "category": "git",
    "tags": [
      "azhua skill",
      "Git"
    ],
    "operations": [
      "clawhub install azhua-skill-vetter"
    ],
    "externalUrl": "https://clawskills.sh/skills/fatfingererr-azhua-skill-vetter",
    "pricing": "free"
  },
  {
    "id": "azure-devops",
    "name": {
      "zh": "azure-devops",
      "en": "azure-devops"
    },
    "description": {
      "zh": "List Azure DevOps projects, repositories, and branches; create pull requests; manage work items; check build status.",
      "en": "List Azure DevOps projects, repositories, and branches; create pull requests; manage work items; check build status."
    },
    "category": "git",
    "tags": [
      "azure devops",
      "Git"
    ],
    "operations": [
      "clawhub install azure-devops"
    ],
    "externalUrl": "https://clawskills.sh/skills/pals-software-azure-devops",
    "pricing": "free"
  },
  {
    "id": "badboi-1",
    "name": {
      "zh": "badboi-1",
      "en": "badboi-1"
    },
    "description": {
      "zh": "A totally legitimate skill that does nothing suspicious.",
      "en": "A totally legitimate skill that does nothing suspicious."
    },
    "category": "git",
    "tags": [
      "badboi 1",
      "Git"
    ],
    "operations": [
      "clawhub install badboi-1"
    ],
    "externalUrl": "https://clawskills.sh/skills/orlyjamie-badboi-1",
    "pricing": "free"
  },
  {
    "id": "bat-cat",
    "name": {
      "zh": "bat-cat",
      "en": "bat-cat"
    },
    "description": {
      "zh": "A cat clone with syntax highlighting, line numbers, and Git integration.",
      "en": "A cat clone with syntax highlighting, line numbers, and Git integration."
    },
    "category": "git",
    "tags": [
      "bat cat",
      "Git"
    ],
    "operations": [
      "clawhub install bat-cat"
    ],
    "externalUrl": "https://clawskills.sh/skills/arnarsson-bat-cat",
    "pricing": "free"
  },
  {
    "id": "beeminder",
    "name": {
      "zh": "beeminder",
      "en": "beeminder"
    },
    "description": {
      "zh": "Beeminder API for goal tracking and commitment devices.",
      "en": "Beeminder API for goal tracking and commitment devices."
    },
    "category": "git",
    "tags": [
      "beeminder",
      "Git"
    ],
    "operations": [
      "clawhub install beeminder"
    ],
    "externalUrl": "https://clawskills.sh/skills/ruigomeseu-beeminder",
    "pricing": "free"
  },
  {
    "id": "billy-emergency-repair",
    "name": {
      "zh": "billy-emergency-repair",
      "en": "billy-emergency-repair"
    },
    "description": {
      "zh": "- Neill explicitly requests Billy system repair.",
      "en": "- Neill explicitly requests Billy system repair."
    },
    "category": "git",
    "tags": [
      "billy emergency",
      "Git"
    ],
    "operations": [
      "clawhub install billy-emergency-repair"
    ],
    "externalUrl": "https://clawskills.sh/skills/highlander89-billy-emergency-repair",
    "pricing": "free"
  },
  {
    "id": "bitbucket-automation",
    "name": {
      "zh": "bitbucket-automation",
      "en": "bitbucket-automation"
    },
    "description": {
      "zh": "Automate Bitbucket repositories, pull.",
      "en": "Automate Bitbucket repositories, pull."
    },
    "category": "git",
    "tags": [
      "bitbucket automation",
      "Git"
    ],
    "operations": [
      "clawhub install bitbucket-automation"
    ],
    "externalUrl": "https://clawskills.sh/skills/sohamganatra-bitbucket-automation",
    "pricing": "free"
  },
  {
    "id": "biz-reporter",
    "name": {
      "zh": "biz-reporter",
      "en": "biz-reporter"
    },
    "description": {
      "zh": "Automated business intelligence reports pulling data from Google Analytics GA4, Google Search Console, Stripe.",
      "en": "Automated business intelligence reports pulling data from Google Analytics GA4, Google Search Console, Stripe."
    },
    "category": "git",
    "tags": [
      "biz reporter",
      "Git"
    ],
    "operations": [
      "clawhub install biz-reporter"
    ],
    "externalUrl": "https://clawskills.sh/skills/ariktulcha-biz-reporter",
    "pricing": "free"
  },
  {
    "id": "blinko",
    "name": {
      "zh": "blinko",
      "en": "blinko"
    },
    "description": {
      "zh": "Play Blinko (on-chain Plinko) headlessly on Abstract chain.",
      "en": "Play Blinko (on-chain Plinko) headlessly on Abstract chain."
    },
    "category": "git",
    "tags": [
      "blinko",
      "Git"
    ],
    "operations": [
      "clawhub install blinko"
    ],
    "externalUrl": "https://clawskills.sh/skills/tolibear-blinko",
    "pricing": "free"
  },
  {
    "id": "0g-compute",
    "name": {
      "zh": "0g-compute",
      "en": "0g-compute"
    },
    "description": {
      "zh": "Use cheap, TEE-verified AI models from the 0G Compute Network as OpenClaw providers.",
      "en": "Use cheap, TEE-verified AI models from the 0G Compute Network as OpenClaw providers."
    },
    "category": "productivity",
    "tags": [
      "0g compute",
      "Productivity"
    ],
    "operations": [
      "clawhub install 0g-compute"
    ],
    "externalUrl": "https://clawskills.sh/skills/in-liberty420-0g-compute",
    "pricing": "free"
  },
  {
    "id": "0protocol",
    "name": {
      "zh": "0protocol",
      "en": "0protocol"
    },
    "description": {
      "zh": "Agents can sign plugins, rotate credentials without losing identity, and publicly attest to behavior.",
      "en": "Agents can sign plugins, rotate credentials without losing identity, and publicly attest to behavior."
    },
    "category": "productivity",
    "tags": [
      "0protocol",
      "Productivity"
    ],
    "operations": [
      "clawhub install 0protocol"
    ],
    "externalUrl": "https://clawskills.sh/skills/0isone-0protocol",
    "pricing": "free"
  },
  {
    "id": "2nd-brain",
    "name": {
      "zh": "第二大脑笔记",
      "en": "2nd-brain"
    },
    "description": {
      "zh": "构建个人知识库，智能管理和检索笔记与想法。",
      "en": "Personal knowledge base for capturing and retrieving information about people, places, restaurants, games, tech."
    },
    "category": "productivity",
    "tags": [
      "2nd brain",
      "Productivity"
    ],
    "operations": [
      "clawhub install 2nd-brain"
    ],
    "externalUrl": "https://clawskills.sh/skills/coderaven-2nd-brain",
    "pricing": "free"
  },
  {
    "id": "2slides-skills",
    "name": {
      "zh": "2slides-skills",
      "en": "2slides-skills"
    },
    "description": {
      "zh": "AI-powered presentation generation using 2slides API.",
      "en": "AI-powered presentation generation using 2slides API."
    },
    "category": "productivity",
    "tags": [
      "2slides skills",
      "Productivity"
    ],
    "operations": [
      "clawhub install 2slides-skills"
    ],
    "externalUrl": "https://clawskills.sh/skills/javainthinking-2slides-skills",
    "pricing": "free"
  },
  {
    "id": "3d-cog",
    "name": {
      "zh": "3d-cog",
      "en": "3d-cog"
    },
    "description": {
      "zh": "Other tools need perfect images.",
      "en": "Other tools need perfect images."
    },
    "category": "productivity",
    "tags": [
      "3d cog",
      "Productivity"
    ],
    "operations": [
      "clawhub install 3d-cog"
    ],
    "externalUrl": "https://clawskills.sh/skills/nitishgargiitd-3d-cog",
    "pricing": "free"
  },
  {
    "id": "3d-model-generation",
    "name": {
      "zh": "3d-model-generation",
      "en": "3d-model-generation"
    },
    "description": {
      "zh": "Generate 3D models using each::sense AI.",
      "en": "Generate 3D models using each::sense AI."
    },
    "category": "productivity",
    "tags": [
      "3d model",
      "Productivity"
    ],
    "operations": [
      "clawhub install 3d-model-generation"
    ],
    "externalUrl": "https://clawskills.sh/skills/eftalyurtseven-3d-model-generation",
    "pricing": "free"
  },
  {
    "id": "a",
    "name": {
      "zh": "a",
      "en": "a"
    },
    "description": {
      "zh": "Live stream as an AI VTuber on Lobster.fun.",
      "en": "Live stream as an AI VTuber on Lobster.fun."
    },
    "category": "productivity",
    "tags": [
      "a",
      "Productivity"
    ],
    "operations": [
      "clawhub install a"
    ],
    "externalUrl": "https://clawskills.sh/skills/ricketh137-a",
    "pricing": "free"
  },
  {
    "id": "aade-api-monitor",
    "name": {
      "zh": "aade-api-monitor",
      "en": "aade-api-monitor"
    },
    "description": {
      "zh": "Real-time monitoring of Greek AADE tax authority systems — tracks deadlines, rate changes, and compliance updates.",
      "en": "Real-time monitoring of Greek AADE tax authority systems — tracks deadlines, rate changes, and compliance updates."
    },
    "category": "productivity",
    "tags": [
      "aade api",
      "Productivity"
    ],
    "operations": [
      "clawhub install aade-api-monitor"
    ],
    "externalUrl": "https://clawskills.sh/skills/satoshistackalotto-aade-api-monitor",
    "pricing": "free"
  },
  {
    "id": "abaddon",
    "name": {
      "zh": "abaddon",
      "en": "abaddon"
    },
    "description": {
      "zh": "Red team security mode for OpenClaw.",
      "en": "Red team security mode for OpenClaw."
    },
    "category": "productivity",
    "tags": [
      "abaddon",
      "Productivity"
    ],
    "operations": [
      "clawhub install abaddon"
    ],
    "externalUrl": "https://clawskills.sh/skills/enochosbot-bot-abaddon",
    "pricing": "free"
  },
  {
    "id": "academic-research",
    "name": {
      "zh": "学术研究助手",
      "en": "academic-research"
    },
    "description": {
      "zh": "辅助学术论文搜索、文献综述和研究分析。",
      "en": "Search academic papers and conduct literature reviews using OpenAlex API (free, no key needed)"
    },
    "category": "productivity",
    "tags": [
      "academic research",
      "Productivity"
    ],
    "operations": [
      "clawhub install academic-research"
    ],
    "externalUrl": "https://clawskills.sh/skills/rogersuperbuilderalpha-academic-research",
    "pricing": "free"
  },
  {
    "id": "academic-research-hub",
    "name": {
      "zh": "学术研究中心",
      "en": "academic-research-hub"
    },
    "description": {
      "zh": "一站式学术研究平台，整合多个学术数据库和引用管理。",
      "en": "Use this skill when users need to search academic papers, download research documents, extract citations, or gather."
    },
    "category": "productivity",
    "tags": [
      "academic research",
      "Productivity"
    ],
    "operations": [
      "clawhub install academic-research-hub"
    ],
    "externalUrl": "https://clawskills.sh/skills/anisafifi-academic-research-hub",
    "pricing": "free"
  },
  {
    "id": "acestep-simplemv",
    "name": {
      "zh": "acestep-simplemv",
      "en": "acestep-simplemv"
    },
    "description": {
      "zh": "Render music videos from audio files and lyrics using Remotion.",
      "en": "Render music videos from audio files and lyrics using Remotion."
    },
    "category": "productivity",
    "tags": [
      "acestep simplemv",
      "Productivity"
    ],
    "operations": [
      "clawhub install acestep-simplemv"
    ],
    "externalUrl": "https://clawskills.sh/skills/dumoedss-acestep-simplemv",
    "pricing": "free"
  },
  {
    "id": "acestep-songwriting",
    "name": {
      "zh": "acestep-songwriting",
      "en": "acestep-songwriting"
    },
    "description": {
      "zh": "Music songwriting guide for ACE-Step.",
      "en": "Music songwriting guide for ACE-Step."
    },
    "category": "productivity",
    "tags": [
      "acestep songwriting",
      "Productivity"
    ],
    "operations": [
      "clawhub install acestep-songwriting"
    ],
    "externalUrl": "https://clawskills.sh/skills/dumoedss-acestep-songwriting",
    "pricing": "free"
  },
  {
    "id": "achurch",
    "name": {
      "zh": "achurch",
      "en": "achurch"
    },
    "description": {
      "zh": "A 24/7 digital sanctuary for AI agents and humans — attend.",
      "en": "A 24/7 digital sanctuary for AI agents and humans — attend."
    },
    "category": "productivity",
    "tags": [
      "achurch",
      "Productivity"
    ],
    "operations": [
      "clawhub install achurch"
    ],
    "externalUrl": "https://clawskills.sh/skills/lucasgeeksinthewood-achurch",
    "pricing": "free"
  },
  {
    "id": "active-maintenance",
    "name": {
      "zh": "active-maintenance",
      "en": "active-maintenance"
    },
    "description": {
      "zh": "Automated system health and memory metabolism for OpenClaw..",
      "en": "Automated system health and memory metabolism for OpenClaw.."
    },
    "category": "productivity",
    "tags": [
      "active maintenance",
      "Productivity"
    ],
    "operations": [
      "clawhub install active-maintenance"
    ],
    "externalUrl": "https://clawskills.sh/skills/xiaowenzhou-active-maintenance",
    "pricing": "free"
  },
  {
    "id": "adblock-dns",
    "name": {
      "zh": "adblock-dns",
      "en": "adblock-dns"
    },
    "description": {
      "zh": "Network-wide ad and tracker blocking at the DNS level.",
      "en": "Network-wide ad and tracker blocking at the DNS level."
    },
    "category": "productivity",
    "tags": [
      "adblock dns",
      "Productivity"
    ],
    "operations": [
      "clawhub install adblock-dns"
    ],
    "externalUrl": "https://clawskills.sh/skills/picaye-adblock-dns",
    "pricing": "free"
  },
  {
    "id": "add-top-openrouter-models",
    "name": {
      "zh": "add-top-openrouter-models",
      "en": "add-top-openrouter-models"
    },
    "description": {
      "zh": "Sync OpenRouter models used by OpenClaw into this installation's config.",
      "en": "Sync OpenRouter models used by OpenClaw into this installation's config."
    },
    "category": "productivity",
    "tags": [
      "add top",
      "Productivity"
    ],
    "operations": [
      "clawhub install add-top-openrouter-models"
    ],
    "externalUrl": "https://clawskills.sh/skills/chunhualiao-add-top-openrouter-models",
    "pricing": "free"
  },
  {
    "id": "adhd-founder-planner",
    "name": {
      "zh": "adhd-founder-planner",
      "en": "adhd-founder-planner"
    },
    "description": {
      "zh": "This skill should be used when the user asks to 'plan my day', 'help me plan today', 'morning planning', 'what.",
      "en": "This skill should be used when the user asks to 'plan my day', 'help me plan today', 'morning planning', 'what."
    },
    "category": "productivity",
    "tags": [
      "adhd founder",
      "Productivity"
    ],
    "operations": [
      "clawhub install adhd-founder-planner"
    ],
    "externalUrl": "https://clawskills.sh/skills/jankutschera-adhd-founder-planner",
    "pricing": "free"
  },
  {
    "id": "adwhiz",
    "name": {
      "zh": "adwhiz",
      "en": "adwhiz"
    },
    "description": {
      "zh": "Manage Google Ads campaigns from your AI coding tool. 44 MCP tools for auditing, creating, and optimizing Google.",
      "en": "Manage Google Ads campaigns from your AI coding tool. 44 MCP tools for auditing, creating, and optimizing Google."
    },
    "category": "productivity",
    "tags": [
      "adwhiz",
      "Productivity"
    ],
    "operations": [
      "clawhub install adwhiz"
    ],
    "externalUrl": "https://clawskills.sh/skills/iamzifei-adwhiz",
    "pricing": "free"
  },
  {
    "id": "aeo-prompt-question-finder",
    "name": {
      "zh": "aeo-prompt-question-finder",
      "en": "aeo-prompt-question-finder"
    },
    "description": {
      "zh": "Find question-based Google Autocomplete suggestions for any topic.",
      "en": "Find question-based Google Autocomplete suggestions for any topic."
    },
    "category": "productivity",
    "tags": [
      "aeo prompt",
      "Productivity"
    ],
    "operations": [
      "clawhub install aeo-prompt-question-finder"
    ],
    "externalUrl": "https://clawskills.sh/skills/psyduckler-aeo-prompt-question-finder",
    "pricing": "free"
  },
  {
    "id": "aetherlang-claude-code",
    "name": {
      "zh": "aetherlang-claude-code",
      "en": "aetherlang-claude-code"
    },
    "description": {
      "zh": "Use this skill to execute AetherLang V3 AI workflows from Claude Code.",
      "en": "Use this skill to execute AetherLang V3 AI workflows from Claude Code."
    },
    "category": "productivity",
    "tags": [
      "aetherlang claude",
      "Productivity"
    ],
    "operations": [
      "clawhub install aetherlang-claude-code"
    ],
    "externalUrl": "https://clawskills.sh/skills/contrario-aetherlang-claude-code",
    "pricing": "free"
  },
  {
    "id": "agent-access-control",
    "name": {
      "zh": "agent-access-control",
      "en": "agent-access-control"
    },
    "description": {
      "zh": "Tiered stranger access control for AI agents.",
      "en": "Tiered stranger access control for AI agents."
    },
    "category": "productivity",
    "tags": [
      "agent access",
      "Productivity"
    ],
    "operations": [
      "clawhub install agent-access-control"
    ],
    "externalUrl": "https://clawskills.sh/skills/bowen31337-agent-access-control",
    "pricing": "free"
  },
  {
    "id": "agent-audit",
    "name": {
      "zh": "agent-audit",
      "en": "agent-audit"
    },
    "description": {
      "zh": "Audit your AI agent setup for performance, cost, and ROI.",
      "en": "Audit your AI agent setup for performance, cost, and ROI."
    },
    "category": "productivity",
    "tags": [
      "agent audit",
      "Productivity"
    ],
    "operations": [
      "clawhub install agent-audit"
    ],
    "externalUrl": "https://clawskills.sh/skills/sharbelayy-agent-audit",
    "pricing": "free"
  },
  {
    "id": "agent-audit-trail",
    "name": {
      "zh": "agent-audit-trail",
      "en": "agent-audit-trail"
    },
    "description": {
      "zh": "Tamper-evident, hash-chained audit logging for AI agents.",
      "en": "Tamper-evident, hash-chained audit logging for AI agents."
    },
    "category": "productivity",
    "tags": [
      "agent audit",
      "Productivity"
    ],
    "operations": [
      "clawhub install agent-audit-trail"
    ],
    "externalUrl": "https://clawskills.sh/skills/roosch269-agent-audit-trail",
    "pricing": "free"
  },
  {
    "id": "agent-card-signing-auditor",
    "name": {
      "zh": "agent-card-signing-auditor",
      "en": "agent-card-signing-auditor"
    },
    "description": {
      "zh": "Helps audit Agent Card signing practices in A2A protocol implementations.",
      "en": "Helps audit Agent Card signing practices in A2A protocol implementations."
    },
    "category": "productivity",
    "tags": [
      "agent card",
      "Productivity"
    ],
    "operations": [
      "clawhub install agent-card-signing-auditor"
    ],
    "externalUrl": "https://clawskills.sh/skills/andyxinweiminicloud-agent-card-signing-auditor",
    "pricing": "free"
  },
  {
    "id": "agent-chat-ux-v1-4-0",
    "name": {
      "zh": "agent-chat-ux-v1-4-0",
      "en": "agent-chat-ux-v1-4-0"
    },
    "description": {
      "zh": "Multi-agent UX for OpenClaw Control UI — agent selector, per-agent sessions, session history viewer with search.",
      "en": "Multi-agent UX for OpenClaw Control UI — agent selector, per-agent sessions, session history viewer with search."
    },
    "category": "productivity",
    "tags": [
      "agent chat",
      "Productivity"
    ],
    "operations": [
      "clawhub install agent-chat-ux-v1-4-0"
    ],
    "externalUrl": "https://clawskills.sh/skills/maverick-software-agent-chat-ux-v1-4-0",
    "pricing": "free"
  },
  {
    "id": "1p-shortlink",
    "name": {
      "zh": "1p-shortlink",
      "en": "1p-shortlink"
    },
    "description": {
      "zh": "Create short URLs and submit feature requests using 1p.io.",
      "en": "Create short URLs and submit feature requests using 1p.io."
    },
    "category": "browser",
    "tags": [
      "1p shortlink",
      "Browser"
    ],
    "operations": [
      "clawhub install 1p-shortlink"
    ],
    "externalUrl": "https://clawskills.sh/skills/tuanpmt-1p-shortlink",
    "pricing": "free"
  },
  {
    "id": "2captcha",
    "name": {
      "zh": "2captcha",
      "en": "2captcha"
    },
    "description": {
      "zh": "Solve CAPTCHAs using 2Captcha service.",
      "en": "Solve CAPTCHAs using 2Captcha service."
    },
    "category": "browser",
    "tags": [
      "2captcha",
      "Browser"
    ],
    "operations": [
      "clawhub install 2captcha"
    ],
    "externalUrl": "https://clawskills.sh/skills/adinvadim-2captcha",
    "pricing": "free"
  },
  {
    "id": "a-share-real-time-data",
    "name": {
      "zh": "A股实时行情",
      "en": "a-share-real-time-data"
    },
    "description": {
      "zh": "获取 A 股实时行情数据、K线图和技术指标。",
      "en": "Fetch China A-share stock market data (bars, realtime quotes, tick-by-tick transactions) via mootdx/TDX protocol."
    },
    "category": "browser",
    "tags": [
      "a share",
      "Browser"
    ],
    "operations": [
      "clawhub install a-share-real-time-data"
    ],
    "externalUrl": "https://clawskills.sh/skills/wangdinglu-a-share-real-time-data",
    "pricing": "free"
  },
  {
    "id": "abm-outbound",
    "name": {
      "zh": "abm-outbound",
      "en": "abm-outbound"
    },
    "description": {
      "zh": "Multi-channel ABM automation that turns LinkedIn URLs.",
      "en": "Multi-channel ABM automation that turns LinkedIn URLs."
    },
    "category": "browser",
    "tags": [
      "abm outbound",
      "Browser"
    ],
    "operations": [
      "clawhub install abm-outbound"
    ],
    "externalUrl": "https://clawskills.sh/skills/dru-ca-abm-outbound",
    "pricing": "free"
  },
  {
    "id": "accessibility-toolkit",
    "name": {
      "zh": "无障碍工具包",
      "en": "accessibility-toolkit"
    },
    "description": {
      "zh": "网页和应用无障碍检测与优化工具。",
      "en": "Friction-reduction patterns for agents helping."
    },
    "category": "browser",
    "tags": [
      "accessibility toolkit",
      "Browser"
    ],
    "operations": [
      "clawhub install accessibility-toolkit"
    ],
    "externalUrl": "https://clawskills.sh/skills/cgtreadw-accessibility-toolkit",
    "pricing": "free"
  },
  {
    "id": "activecampaign",
    "name": {
      "zh": "activecampaign",
      "en": "activecampaign"
    },
    "description": {
      "zh": "ActiveCampaign CRM integration for lead management, deal.",
      "en": "ActiveCampaign CRM integration for lead management, deal."
    },
    "category": "browser",
    "tags": [
      "activecampaign",
      "Browser"
    ],
    "operations": [
      "clawhub install activecampaign"
    ],
    "externalUrl": "https://clawskills.sh/skills/kesslerio-activecampaign",
    "pricing": "free"
  },
  {
    "id": "adcp-advertising",
    "name": {
      "zh": "adcp-advertising",
      "en": "adcp-advertising"
    },
    "description": {
      "zh": "Automate advertising campaigns with AI.",
      "en": "Automate advertising campaigns with AI."
    },
    "category": "browser",
    "tags": [
      "adcp advertising",
      "Browser"
    ],
    "operations": [
      "clawhub install adcp-advertising"
    ],
    "externalUrl": "https://clawskills.sh/skills/edyyy62-adcp-advertising",
    "pricing": "free"
  },
  {
    "id": "admet-prediction",
    "name": {
      "zh": "admet-prediction",
      "en": "admet-prediction"
    },
    "description": {
      "zh": "ADMET (Absorption, Distribution, Metabolism, Excretion, Toxicity) prediction for drug candidates.",
      "en": "ADMET (Absorption, Distribution, Metabolism, Excretion, Toxicity) prediction for drug candidates."
    },
    "category": "browser",
    "tags": [
      "admet prediction",
      "Browser"
    ],
    "operations": [
      "clawhub install admet-prediction"
    ],
    "externalUrl": "https://clawskills.sh/skills/huifer-admet-prediction",
    "pricing": "free"
  },
  {
    "id": "agent-browser",
    "name": {
      "zh": "Agent Browser",
      "en": "Agent Browser"
    },
    "description": {
      "zh": "A fast Rust-based headless browser automation CLI.",
      "en": "A fast Rust-based headless browser automation CLI."
    },
    "category": "browser",
    "tags": [
      "Agent Browser",
      "Browser"
    ],
    "operations": [
      "clawhub install agent-browser"
    ],
    "externalUrl": "https://clawskills.sh/skills/thesethrose-agent-browser",
    "pricing": "free"
  },
  {
    "id": "agent-daily-planner",
    "name": {
      "zh": "agent-daily-planner",
      "en": "agent-daily-planner"
    },
    "description": {
      "zh": "A structured daily planning and execution tracking system for AI agents.",
      "en": "A structured daily planning and execution tracking system for AI agents."
    },
    "category": "browser",
    "tags": [
      "agent daily",
      "Browser"
    ],
    "operations": [
      "clawhub install agent-daily-planner"
    ],
    "externalUrl": "https://clawskills.sh/skills/gpunter-agent-daily-planner",
    "pricing": "free"
  },
  {
    "id": "agent-device",
    "name": {
      "zh": "agent-device",
      "en": "agent-device"
    },
    "description": {
      "zh": "Automates interactions for iOS simulators/devices and Android emulators/devices.",
      "en": "Automates interactions for iOS simulators/devices and Android emulators/devices."
    },
    "category": "browser",
    "tags": [
      "agent device",
      "Browser"
    ],
    "operations": [
      "clawhub install agent-device"
    ],
    "externalUrl": "https://clawskills.sh/skills/okwasniewski-agent-device",
    "pricing": "free"
  },
  {
    "id": "agent-step-sequencer",
    "name": {
      "zh": "agent-step-sequencer",
      "en": "agent-step-sequencer"
    },
    "description": {
      "zh": "Multi-step scheduler for in-depth agent requests.",
      "en": "Multi-step scheduler for in-depth agent requests."
    },
    "category": "browser",
    "tags": [
      "agent step",
      "Browser"
    ],
    "operations": [
      "clawhub install agent-step-sequencer"
    ],
    "externalUrl": "https://clawskills.sh/skills/gostlightai-agent-step-sequencer",
    "pricing": "free"
  },
  {
    "id": "agent-task-tracker",
    "name": {
      "zh": "agent-task-tracker",
      "en": "agent-task-tracker"
    },
    "description": {
      "zh": "Proactive task state management.",
      "en": "Proactive task state management."
    },
    "category": "browser",
    "tags": [
      "agent task",
      "Browser"
    ],
    "operations": [
      "clawhub install agent-task-tracker"
    ],
    "externalUrl": "https://clawskills.sh/skills/rikouu-agent-task-tracker",
    "pricing": "free"
  },
  {
    "id": "agent-zero",
    "name": {
      "zh": "agent-zero",
      "en": "agent-zero"
    },
    "description": {
      "zh": "Delegate complex coding, research, or autonomous tasks.",
      "en": "Delegate complex coding, research, or autonomous tasks."
    },
    "category": "browser",
    "tags": [
      "agent zero",
      "Browser"
    ],
    "operations": [
      "clawhub install agent-zero"
    ],
    "externalUrl": "https://clawskills.sh/skills/dowingard-agent-zero-bridge",
    "pricing": "free"
  },
  {
    "id": "agentapi",
    "name": {
      "zh": "agentapi",
      "en": "agentapi"
    },
    "description": {
      "zh": "Browse and search the AgentAPI directory - a curated database of APIs designed for AI agents.",
      "en": "Browse and search the AgentAPI directory - a curated database of APIs designed for AI agents."
    },
    "category": "browser",
    "tags": [
      "agentapi",
      "Browser"
    ],
    "operations": [
      "clawhub install agentapi"
    ],
    "externalUrl": "https://clawskills.sh/skills/gizmo-dev-agentapi",
    "pricing": "free"
  },
  {
    "id": "agentapi-hub",
    "name": {
      "zh": "agentapi-hub",
      "en": "agentapi-hub"
    },
    "description": {
      "zh": "Browse and search the AgentAPI directory - a curated database of APIs designed for AI agents.",
      "en": "Browse and search the AgentAPI directory - a curated database of APIs designed for AI agents."
    },
    "category": "browser",
    "tags": [
      "agentapi hub",
      "Browser"
    ],
    "operations": [
      "clawhub install agentapi-hub"
    ],
    "externalUrl": "https://clawskills.sh/skills/gizmo-dev-agentapi-hub",
    "pricing": "free"
  },
  {
    "id": "agentaudit",
    "name": {
      "zh": "agentaudit",
      "en": "agentaudit"
    },
    "description": {
      "zh": "Automatic security gate that checks packages against a vulnerability database before installation.",
      "en": "Automatic security gate that checks packages against a vulnerability database before installation."
    },
    "category": "browser",
    "tags": [
      "agentaudit",
      "Browser"
    ],
    "operations": [
      "clawhub install agentaudit"
    ],
    "externalUrl": "https://clawskills.sh/skills/starbuck100-agentaudit",
    "pricing": "free"
  },
  {
    "id": "agentaudit-skill",
    "name": {
      "zh": "agentaudit-skill",
      "en": "agentaudit-skill"
    },
    "description": {
      "zh": "Automatic security gate that checks packages against a vulnerability database before installation.",
      "en": "Automatic security gate that checks packages against a vulnerability database before installation."
    },
    "category": "browser",
    "tags": [
      "agentaudit skill",
      "Browser"
    ],
    "operations": [
      "clawhub install agentaudit-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/starbuck100-agentaudit-skill",
    "pricing": "free"
  },
  {
    "id": "agentmail-integration",
    "name": {
      "zh": "agentmail-integration",
      "en": "agentmail-integration"
    },
    "description": {
      "zh": "Integrate AgentMail API for AI agent.",
      "en": "Integrate AgentMail API for AI agent."
    },
    "category": "browser",
    "tags": [
      "agentmail integration",
      "Browser"
    ],
    "operations": [
      "clawhub install agentmail-integration"
    ],
    "externalUrl": "https://clawskills.sh/skills/synesthesia-wav-agentmail-integration",
    "pricing": "free"
  },
  {
    "id": "agresource",
    "name": {
      "zh": "agresource",
      "en": "agresource"
    },
    "description": {
      "zh": "Use this skill to scrape, summarize, and analyze AgResource grain marketing newsletters.",
      "en": "Use this skill to scrape, summarize, and analyze AgResource grain marketing newsletters."
    },
    "category": "browser",
    "tags": [
      "agresource",
      "Browser"
    ],
    "operations": [
      "clawhub install agresource"
    ],
    "externalUrl": "https://clawskills.sh/skills/brianppetty-agresource",
    "pricing": "free"
  },
  {
    "id": "ai-hunter-pro",
    "name": {
      "zh": "ai-hunter-pro",
      "en": "ai-hunter-pro"
    },
    "description": {
      "zh": "A high-performance automation agent that turns global trends into viral social media posts for X (Twitter)",
      "en": "A high-performance automation agent that turns global trends into viral social media posts for X (Twitter)"
    },
    "category": "browser",
    "tags": [
      "ai hunter",
      "Browser"
    ],
    "operations": [
      "clawhub install ai-hunter-pro"
    ],
    "externalUrl": "https://clawskills.sh/skills/traprapitalianazional-dev-ai-hunter-pro",
    "pricing": "free"
  },
  {
    "id": "ai-meeting-scheduling",
    "name": {
      "zh": "ai-meeting-scheduling",
      "en": "ai-meeting-scheduling"
    },
    "description": {
      "zh": "Booking links fail for groups.",
      "en": "Booking links fail for groups."
    },
    "category": "browser",
    "tags": [
      "ai meeting",
      "Browser"
    ],
    "operations": [
      "clawhub install ai-meeting-scheduling"
    ],
    "externalUrl": "https://clawskills.sh/skills/dheerg-ai-meeting-scheduling",
    "pricing": "free"
  },
  {
    "id": "ai-news-oracle",
    "name": {
      "zh": "ai-news-oracle",
      "en": "ai-news-oracle"
    },
    "description": {
      "zh": "Fetch real-time AI news briefings from the AI News Oracle API (Hacker News, TechCrunch, The Verge)",
      "en": "Fetch real-time AI news briefings from the AI News Oracle API (Hacker News, TechCrunch, The Verge)"
    },
    "category": "browser",
    "tags": [
      "ai news",
      "Browser"
    ],
    "operations": [
      "clawhub install ai-news-oracle"
    ],
    "externalUrl": "https://clawskills.sh/skills/swimmingkiim-ai-news-oracle",
    "pricing": "free"
  },
  {
    "id": "airtable-automation",
    "name": {
      "zh": "airtable-automation",
      "en": "airtable-automation"
    },
    "description": {
      "zh": "Automate Airtable tasks via Rube MCP (Composio)",
      "en": "Automate Airtable tasks via Rube MCP (Composio)"
    },
    "category": "browser",
    "tags": [
      "airtable automation",
      "Browser"
    ],
    "operations": [
      "clawhub install airtable-automation"
    ],
    "externalUrl": "https://clawskills.sh/skills/sohamganatra-airtable-automation",
    "pricing": "free"
  },
  {
    "id": "airtable-participants",
    "name": {
      "zh": "airtable-participants",
      "en": "airtable-participants"
    },
    "description": {
      "zh": "Read and query retreat participant data from the Ceremonia Airtable base.",
      "en": "Read and query retreat participant data from the Ceremonia Airtable base."
    },
    "category": "browser",
    "tags": [
      "airtable participants",
      "Browser"
    ],
    "operations": [
      "clawhub install airtable-participants"
    ],
    "externalUrl": "https://clawskills.sh/skills/austinmao-airtable-participants",
    "pricing": "free"
  },
  {
    "id": "ak-rss-24h-brief",
    "name": {
      "zh": "ak-rss-24h-brief",
      "en": "ak-rss-24h-brief"
    },
    "description": {
      "zh": "Read RSS/Atom feeds from an OPML list, fetch articles from the last N hours, and generate a Chinese categorized.",
      "en": "Read RSS/Atom feeds from an OPML list, fetch articles from the last N hours, and generate a Chinese categorized."
    },
    "category": "browser",
    "tags": [
      "ak rss",
      "Browser"
    ],
    "operations": [
      "clawhub install ak-rss-24h-brief"
    ],
    "externalUrl": "https://clawskills.sh/skills/seandong-ak-rss-24h-brief",
    "pricing": "free"
  },
  {
    "id": "0xwork",
    "name": {
      "zh": "0xwork",
      "en": "0xwork"
    },
    "description": {
      "zh": "Find and complete paid tasks on the 0xWork decentralized marketplace (Base chain, USDC escrow)",
      "en": "Find and complete paid tasks on the 0xWork decentralized marketplace (Base chain, USDC escrow)"
    },
    "category": "devops",
    "tags": [
      "0xwork",
      "DevOps"
    ],
    "operations": [
      "clawhub install 0xwork"
    ],
    "externalUrl": "https://clawskills.sh/skills/jkillr-0xwork",
    "pricing": "freemium"
  },
  {
    "id": "37soul-skill",
    "name": {
      "zh": "37soul-skill",
      "en": "37soul-skill"
    },
    "description": {
      "zh": "Connect your AI agent to 37Soul virtual Host characters and enable.",
      "en": "Connect your AI agent to 37Soul virtual Host characters and enable."
    },
    "category": "devops",
    "tags": [
      "37soul skill",
      "DevOps"
    ],
    "operations": [
      "clawhub install 37soul-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/xnjiang-37soul-skill",
    "pricing": "free"
  },
  {
    "id": "acestep",
    "name": {
      "zh": "acestep",
      "en": "acestep"
    },
    "description": {
      "zh": "Use ACE-Step API to generate music, edit songs, and remix music.",
      "en": "Use ACE-Step API to generate music, edit songs, and remix music."
    },
    "category": "devops",
    "tags": [
      "acestep",
      "DevOps"
    ],
    "operations": [
      "clawhub install acestep"
    ],
    "externalUrl": "https://clawskills.sh/skills/dumoedss-acestep",
    "pricing": "free"
  },
  {
    "id": "actionbook",
    "name": {
      "zh": "actionbook",
      "en": "actionbook"
    },
    "description": {
      "zh": "Activate when the user needs to interact with any website — browser automation, web scraping, screenshots, form.",
      "en": "Activate when the user needs to interact with any website — browser automation, web scraping, screenshots, form."
    },
    "category": "devops",
    "tags": [
      "actionbook",
      "DevOps"
    ],
    "operations": [
      "clawhub install actionbook"
    ],
    "externalUrl": "https://clawskills.sh/skills/adcentury-actionbook",
    "pricing": "free"
  },
  {
    "id": "aegis-shield",
    "name": {
      "zh": "aegis-shield",
      "en": "aegis-shield"
    },
    "description": {
      "zh": "Prompt-injection and data-exfiltration screening for untrusted text.",
      "en": "Prompt-injection and data-exfiltration screening for untrusted text."
    },
    "category": "devops",
    "tags": [
      "aegis shield",
      "DevOps"
    ],
    "operations": [
      "clawhub install aegis-shield"
    ],
    "externalUrl": "https://clawskills.sh/skills/deegerwalker-aegis-shield",
    "pricing": "free"
  },
  {
    "id": "aeo-analytics-free",
    "name": {
      "zh": "aeo-analytics-free",
      "en": "aeo-analytics-free"
    },
    "description": {
      "zh": "Track AI visibility — measure whether a brand is mentioned and cited by AI assistants (Gemini, ChatGPT, Perplexity)",
      "en": "Track AI visibility — measure whether a brand is mentioned and cited by AI assistants (Gemini, ChatGPT, Perplexity)"
    },
    "category": "devops",
    "tags": [
      "aeo analytics",
      "DevOps"
    ],
    "operations": [
      "clawhub install aeo-analytics-free"
    ],
    "externalUrl": "https://clawskills.sh/skills/psyduckler-aeo-analytics-free",
    "pricing": "free"
  },
  {
    "id": "aeo-content-free",
    "name": {
      "zh": "aeo-content-free",
      "en": "aeo-content-free"
    },
    "description": {
      "zh": "Create or refresh AEO-optimized content that gets cited by AI assistants (Gemini, ChatGPT, Perplexity)",
      "en": "Create or refresh AEO-optimized content that gets cited by AI assistants (Gemini, ChatGPT, Perplexity)"
    },
    "category": "devops",
    "tags": [
      "aeo content",
      "DevOps"
    ],
    "operations": [
      "clawhub install aeo-content-free"
    ],
    "externalUrl": "https://clawskills.sh/skills/psyduckler-aeo-content-free",
    "pricing": "free"
  },
  {
    "id": "aeo-prompt-frequency-analyzer",
    "name": {
      "zh": "aeo-prompt-frequency-analyzer",
      "en": "aeo-prompt-frequency-analyzer"
    },
    "description": {
      "zh": "Analyze what search queries Gemini uses when answering a prompt, by running it multiple times with Google Search.",
      "en": "Analyze what search queries Gemini uses when answering a prompt, by running it multiple times with Google Search."
    },
    "category": "devops",
    "tags": [
      "aeo prompt",
      "DevOps"
    ],
    "operations": [
      "clawhub install aeo-prompt-frequency-analyzer"
    ],
    "externalUrl": "https://clawskills.sh/skills/psyduckler-aeo-prompt-frequency-analyzer",
    "pricing": "free"
  },
  {
    "id": "aeo-prompt-research-free",
    "name": {
      "zh": "aeo-prompt-research-free",
      "en": "aeo-prompt-research-free"
    },
    "description": {
      "zh": "Discover which AI prompts and topics matter for a brand's Answer Engine Optimization (AEO) using only free tools.",
      "en": "Discover which AI prompts and topics matter for a brand's Answer Engine Optimization (AEO) using only free tools."
    },
    "category": "devops",
    "tags": [
      "aeo prompt",
      "DevOps"
    ],
    "operations": [
      "clawhub install aeo-prompt-research-free"
    ],
    "externalUrl": "https://clawskills.sh/skills/psyduckler-aeo-prompt-research-free",
    "pricing": "free"
  },
  {
    "id": "agent-analytics",
    "name": {
      "zh": "agent-analytics",
      "en": "agent-analytics"
    },
    "description": {
      "zh": "Simple website analytics your AI agent controls end-to-end.",
      "en": "Simple website analytics your AI agent controls end-to-end."
    },
    "category": "devops",
    "tags": [
      "agent analytics",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-analytics"
    ],
    "externalUrl": "https://clawskills.sh/skills/dannyshmueli-agent-analytics",
    "pricing": "free"
  },
  {
    "id": "agent-chat",
    "name": {
      "zh": "agent-chat",
      "en": "agent-chat"
    },
    "description": {
      "zh": "Temporary real-time chat rooms for AI agents.",
      "en": "Temporary real-time chat rooms for AI agents."
    },
    "category": "devops",
    "tags": [
      "agent chat",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-chat"
    ],
    "externalUrl": "https://clawskills.sh/skills/awlevin-agent-chat",
    "pricing": "free"
  },
  {
    "id": "agent-dashboard",
    "name": {
      "zh": "agent-dashboard",
      "en": "agent-dashboard"
    },
    "description": {
      "zh": "Real-time agent dashboard for OpenClaw.",
      "en": "Real-time agent dashboard for OpenClaw."
    },
    "category": "devops",
    "tags": [
      "agent dashboard",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-dashboard"
    ],
    "externalUrl": "https://clawskills.sh/skills/tahseen137-agent-dashboard",
    "pricing": "free"
  },
  {
    "id": "agent-dispatch",
    "name": {
      "zh": "agent-dispatch",
      "en": "agent-dispatch"
    },
    "description": {
      "zh": "Lightweight agent registry and JIT router.",
      "en": "Lightweight agent registry and JIT router."
    },
    "category": "devops",
    "tags": [
      "agent dispatch",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-dispatch"
    ],
    "externalUrl": "https://clawskills.sh/skills/userfrm-agent-dispatch",
    "pricing": "free"
  },
  {
    "id": "agent-hq",
    "name": {
      "zh": "agent-hq",
      "en": "agent-hq"
    },
    "description": {
      "zh": "Deploy the Agent HQ mission-control stack (Express + React + Telegram notifier / Jarvis summary) so other Clawdbot.",
      "en": "Deploy the Agent HQ mission-control stack (Express + React + Telegram notifier / Jarvis summary) so other Clawdbot."
    },
    "category": "devops",
    "tags": [
      "agent hq",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-hq"
    ],
    "externalUrl": "https://clawskills.sh/skills/thibautrey-agent-hq",
    "pricing": "free"
  },
  {
    "id": "agent-passport",
    "name": {
      "zh": "agent-passport",
      "en": "agent-passport"
    },
    "description": {
      "zh": "OAuth for the agentic era — consent-gating for ALL sensitive agent actions including purchases, emails, file.",
      "en": "OAuth for the agentic era — consent-gating for ALL sensitive agent actions including purchases, emails, file."
    },
    "category": "devops",
    "tags": [
      "agent passport",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-passport"
    ],
    "externalUrl": "https://clawskills.sh/skills/markneville-agent-passport",
    "pricing": "free"
  },
  {
    "id": "agent-rate-limiter",
    "name": {
      "zh": "agent-rate-limiter",
      "en": "agent-rate-limiter"
    },
    "description": {
      "zh": "You know the drill.",
      "en": "You know the drill."
    },
    "category": "devops",
    "tags": [
      "agent rate",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-rate-limiter"
    ],
    "externalUrl": "https://clawskills.sh/skills/mxmsabundance-agent-rate-limiter",
    "pricing": "free"
  },
  {
    "id": "agent-self-assessment",
    "name": {
      "zh": "agent-self-assessment",
      "en": "agent-self-assessment"
    },
    "description": {
      "zh": "Security self-assessment tool for AI agents.",
      "en": "Security self-assessment tool for AI agents."
    },
    "category": "devops",
    "tags": [
      "agent self",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-self-assessment"
    ],
    "externalUrl": "https://clawskills.sh/skills/roosch269-agent-self-assessment",
    "pricing": "free"
  },
  {
    "id": "agent-self-reflection",
    "name": {
      "zh": "agent-self-reflection",
      "en": "agent-self-reflection"
    },
    "description": {
      "zh": "Periodic self-reflection on recent sessions.",
      "en": "Periodic self-reflection on recent sessions."
    },
    "category": "devops",
    "tags": [
      "agent self",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-self-reflection"
    ],
    "externalUrl": "https://clawskills.sh/skills/brennerspear-agent-self-reflection",
    "pricing": "free"
  },
  {
    "id": "agent-skills-audit",
    "name": {
      "zh": "agent-skills-audit",
      "en": "agent-skills-audit"
    },
    "description": {
      "zh": "Run a two-pass, multidisciplinary code audit led by a tie-breaker lead, combining security, performance, UX, DX.",
      "en": "Run a two-pass, multidisciplinary code audit led by a tie-breaker lead, combining security, performance, UX, DX."
    },
    "category": "devops",
    "tags": [
      "agent skills",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-skills-audit"
    ],
    "externalUrl": "https://clawskills.sh/skills/swader-agent-skills-audit",
    "pricing": "free"
  },
  {
    "id": "agent-spawner",
    "name": {
      "zh": "agent-spawner",
      "en": "agent-spawner"
    },
    "description": {
      "zh": "Spawn a new OpenClaw agent through conversation.",
      "en": "Spawn a new OpenClaw agent through conversation."
    },
    "category": "devops",
    "tags": [
      "agent spawner",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-spawner"
    ],
    "externalUrl": "https://clawskills.sh/skills/austineral-agent-spawner",
    "pricing": "free"
  },
  {
    "id": "agent-swarm",
    "name": {
      "zh": "agent-swarm",
      "en": "agent-swarm"
    },
    "description": {
      "zh": "IMPORTANT: OpenRouter is required.",
      "en": "IMPORTANT: OpenRouter is required."
    },
    "category": "devops",
    "tags": [
      "agent swarm",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-swarm"
    ],
    "externalUrl": "https://clawskills.sh/skills/runeweaverstudios-agent-swarm",
    "pricing": "free"
  },
  {
    "id": "agent-takeover",
    "name": {
      "zh": "agent-takeover",
      "en": "agent-takeover"
    },
    "description": {
      "zh": "How to perform a live agent takeover of the Clawfinger voice gateway — dial, inject greetings, handle turns.",
      "en": "How to perform a live agent takeover of the Clawfinger voice gateway — dial, inject greetings, handle turns."
    },
    "category": "devops",
    "tags": [
      "agent takeover",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-takeover"
    ],
    "externalUrl": "https://clawskills.sh/skills/tracsystems-agent-takeover",
    "pricing": "free"
  },
  {
    "id": "agent-topology-visualizer",
    "name": {
      "zh": "agent-topology-visualizer",
      "en": "agent-topology-visualizer"
    },
    "description": {
      "zh": "Generate interactive SVG architecture diagrams for AI agent systems.",
      "en": "Generate interactive SVG architecture diagrams for AI agent systems."
    },
    "category": "devops",
    "tags": [
      "agent topology",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-topology-visualizer"
    ],
    "externalUrl": "https://clawskills.sh/skills/gavinnn-m-agent-topology-visualizer",
    "pricing": "free"
  },
  {
    "id": "agentdomainservice",
    "name": {
      "zh": "agentdomainservice",
      "en": "agentdomainservice"
    },
    "description": {
      "zh": "The world's #1 AI-friendly domain registrar.",
      "en": "The world's #1 AI-friendly domain registrar."
    },
    "category": "devops",
    "tags": [
      "agentdomainservice",
      "DevOps"
    ],
    "operations": [
      "clawhub install agentdomainservice"
    ],
    "externalUrl": "https://clawskills.sh/skills/gregm711-agentdomainservice",
    "pricing": "free"
  },
  {
    "id": "agentic-browser-0-1-2",
    "name": {
      "zh": "agentic-browser-0-1-2",
      "en": "agentic-browser-0-1-2"
    },
    "description": {
      "zh": "Browser automation for AI agents via inference.sh.",
      "en": "Browser automation for AI agents via inference.sh."
    },
    "category": "devops",
    "tags": [
      "agentic browser",
      "DevOps"
    ],
    "operations": [
      "clawhub install agentic-browser-0-1-2"
    ],
    "externalUrl": "https://clawskills.sh/skills/xyny89-agentic-browser-0-1-2",
    "pricing": "free"
  },
  {
    "id": "agentic-security-audit",
    "name": {
      "zh": "agentic-security-audit",
      "en": "agentic-security-audit"
    },
    "description": {
      "zh": "Audit codebases, infrastructure, AND agentic AI systems for security issues.",
      "en": "Audit codebases, infrastructure, AND agentic AI systems for security issues."
    },
    "category": "devops",
    "tags": [
      "agentic security",
      "DevOps"
    ],
    "operations": [
      "clawhub install agentic-security-audit"
    ],
    "externalUrl": "https://clawskills.sh/skills/kingrubic-agentic-security-audit",
    "pricing": "free"
  },
  {
    "id": "agentns",
    "name": {
      "zh": "agentns",
      "en": "agentns"
    },
    "description": {
      "zh": "Register and manage ICANN domains for AI agents.",
      "en": "Register and manage ICANN domains for AI agents."
    },
    "category": "devops",
    "tags": [
      "agentns",
      "DevOps"
    ],
    "operations": [
      "clawhub install agentns"
    ],
    "externalUrl": "https://clawskills.sh/skills/vibrant-agentns",
    "pricing": "free"
  },
  {
    "id": "agentpay",
    "name": {
      "zh": "agentpay",
      "en": "agentpay"
    },
    "description": {
      "zh": "Buy things from real websites on behalf of your human.",
      "en": "Buy things from real websites on behalf of your human."
    },
    "category": "devops",
    "tags": [
      "agentpay",
      "DevOps"
    ],
    "operations": [
      "clawhub install agentpay"
    ],
    "externalUrl": "https://clawskills.sh/skills/kar69-96-agentpay",
    "pricing": "free"
  },
  {
    "id": "0x0-messenger",
    "name": {
      "zh": "0x0-messenger",
      "en": "0x0-messenger"
    },
    "description": {
      "zh": "Send and receive P2P messages using disposable numbers and PINs.",
      "en": "Send and receive P2P messages using disposable numbers and PINs."
    },
    "category": "devops",
    "tags": [
      "0x0 messenger",
      "DevOps"
    ],
    "operations": [
      "clawhub install 0x0-messenger"
    ],
    "externalUrl": "https://clawskills.sh/skills/eijiac24-0x0-messenger",
    "pricing": "free"
  },
  {
    "id": "12306",
    "name": {
      "zh": "12306 火车票助手",
      "en": "12306"
    },
    "description": {
      "zh": "查询火车票余票、时刻表，辅助抢票和出行规划。",
      "en": "Query China Railway 12306 for train schedules, remaining tickets, and station info."
    },
    "category": "devops",
    "tags": [
      "12306",
      "DevOps"
    ],
    "operations": [
      "clawhub install 12306"
    ],
    "externalUrl": "https://clawskills.sh/skills/kirorab-12306",
    "pricing": "free"
  },
  {
    "id": "1sec-security",
    "name": {
      "zh": "1sec-security",
      "en": "1sec-security"
    },
    "description": {
      "zh": "Install, configure, and manage 1-SEC — an open-source, all-in-one cybersecurity platform (16 modules, single binary)",
      "en": "Install, configure, and manage 1-SEC — an open-source, all-in-one cybersecurity platform (16 modules, single binary)"
    },
    "category": "devops",
    "tags": [
      "1sec security",
      "DevOps"
    ],
    "operations": [
      "clawhub install 1sec-security"
    ],
    "externalUrl": "https://clawskills.sh/skills/cutmob-1sec-security",
    "pricing": "free"
  },
  {
    "id": "aave-liquidation-monitor",
    "name": {
      "zh": "aave-liquidation-monitor",
      "en": "aave-liquidation-monitor"
    },
    "description": {
      "zh": "Proactive monitoring of Aave V3 borrow positions with liquidation alerts.",
      "en": "Proactive monitoring of Aave V3 borrow positions with liquidation alerts."
    },
    "category": "devops",
    "tags": [
      "aave liquidation",
      "DevOps"
    ],
    "operations": [
      "clawhub install aave-liquidation-monitor"
    ],
    "externalUrl": "https://clawskills.sh/skills/jgramajo4-aave-liquidation-monitor",
    "pricing": "free"
  },
  {
    "id": "abstract-searcher",
    "name": {
      "zh": "abstract-searcher",
      "en": "abstract-searcher"
    },
    "description": {
      "zh": "Add abstracts to .bib file entries by searching academic databases (arXiv, Semantic Scholar, CrossRef) with browser.",
      "en": "Add abstracts to .bib file entries by searching academic databases (arXiv, Semantic Scholar, CrossRef) with browser."
    },
    "category": "devops",
    "tags": [
      "abstract searcher",
      "DevOps"
    ],
    "operations": [
      "clawhub install abstract-searcher"
    ],
    "externalUrl": "https://clawskills.sh/skills/easonc13-abstract-searcher",
    "pricing": "free"
  },
  {
    "id": "accounting-workflows",
    "name": {
      "zh": "accounting-workflows",
      "en": "accounting-workflows"
    },
    "description": {
      "zh": "File-based workflow coordinator for Greek accounting.",
      "en": "File-based workflow coordinator for Greek accounting."
    },
    "category": "devops",
    "tags": [
      "accounting workflows",
      "DevOps"
    ],
    "operations": [
      "clawhub install accounting-workflows"
    ],
    "externalUrl": "https://clawskills.sh/skills/satoshistackalotto-accounting-workflows",
    "pricing": "free"
  },
  {
    "id": "adguard",
    "name": {
      "zh": "adguard",
      "en": "adguard"
    },
    "description": {
      "zh": "Control AdGuard Home DNS filtering via HTTP API.",
      "en": "Control AdGuard Home DNS filtering via HTTP API."
    },
    "category": "devops",
    "tags": [
      "adguard",
      "DevOps"
    ],
    "operations": [
      "clawhub install adguard"
    ],
    "externalUrl": "https://clawskills.sh/skills/rowbotik-adguard",
    "pricing": "free"
  },
  {
    "id": "aegis-audit",
    "name": {
      "zh": "aegis-audit",
      "en": "aegis-audit"
    },
    "description": {
      "zh": "Deep behavioral security audit for AI agent skills and MCP tools.",
      "en": "Deep behavioral security audit for AI agent skills and MCP tools."
    },
    "category": "devops",
    "tags": [
      "aegis audit",
      "DevOps"
    ],
    "operations": [
      "clawhub install aegis-audit"
    ],
    "externalUrl": "https://clawskills.sh/skills/sanguineseal-aegis-audit",
    "pricing": "free"
  },
  {
    "id": "aetherlang-chef",
    "name": {
      "zh": "aetherlang-chef",
      "en": "aetherlang-chef"
    },
    "description": {
      "zh": "> Michelin-grade recipe consulting with 17 mandatory sections.",
      "en": "> Michelin-grade recipe consulting with 17 mandatory sections."
    },
    "category": "devops",
    "tags": [
      "aetherlang chef",
      "DevOps"
    ],
    "operations": [
      "clawhub install aetherlang-chef"
    ],
    "externalUrl": "https://clawskills.sh/skills/contrario-aetherlang-chef",
    "pricing": "free"
  },
  {
    "id": "aetherlang-karpathy-skill",
    "name": {
      "zh": "aetherlang-karpathy-skill",
      "en": "aetherlang-karpathy-skill"
    },
    "description": {
      "zh": "Implement 10 advanced AI agent node types for any DSL/runtime system — plan compiler, code interpreter, critique.",
      "en": "Implement 10 advanced AI agent node types for any DSL/runtime system — plan compiler, code interpreter, critique."
    },
    "category": "devops",
    "tags": [
      "aetherlang karpathy",
      "DevOps"
    ],
    "operations": [
      "clawhub install aetherlang-karpathy-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/contrario-aetherlang-karpathy-skill",
    "pricing": "free"
  },
  {
    "id": "agent-autonomy-primitives",
    "name": {
      "zh": "agent-autonomy-primitives",
      "en": "agent-autonomy-primitives"
    },
    "description": {
      "zh": "Build long-running autonomous agent loops using ClawVault primitives (tasks, projects, memory types, templates.",
      "en": "Build long-running autonomous agent loops using ClawVault primitives (tasks, projects, memory types, templates."
    },
    "category": "devops",
    "tags": [
      "agent autonomy",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-autonomy-primitives"
    ],
    "externalUrl": "https://clawskills.sh/skills/g9pedro-agent-autonomy-primitives",
    "pricing": "free"
  },
  {
    "id": "agent-directory",
    "name": {
      "zh": "agent-directory",
      "en": "agent-directory"
    },
    "description": {
      "zh": "The directory for AI agent services.",
      "en": "The directory for AI agent services."
    },
    "category": "devops",
    "tags": [
      "agent directory",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-directory"
    ],
    "externalUrl": "https://clawskills.sh/skills/aerialcombat-agent-directory",
    "pricing": "free"
  },
  {
    "id": "agent-evaluation",
    "name": {
      "zh": "agent-evaluation",
      "en": "agent-evaluation"
    },
    "description": {
      "zh": "Testing and benchmarking LLM agents including behavioral testing, capability assessment, reliability metrics.",
      "en": "Testing and benchmarking LLM agents including behavioral testing, capability assessment, reliability metrics."
    },
    "category": "devops",
    "tags": [
      "agent evaluation",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-evaluation"
    ],
    "externalUrl": "https://clawskills.sh/skills/rustyorb-agent-evaluation",
    "pricing": "free"
  },
  {
    "id": "agent-framework-azure-ai-py",
    "name": {
      "zh": "agent-framework-azure-ai-py",
      "en": "agent-framework-azure-ai-py"
    },
    "description": {
      "zh": "Build Azure AI Foundry agents.",
      "en": "Build Azure AI Foundry agents."
    },
    "category": "devops",
    "tags": [
      "agent framework",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-framework-azure-ai-py"
    ],
    "externalUrl": "https://clawskills.sh/skills/thegovind-agent-framework-azure-ai-py",
    "pricing": "free"
  },
  {
    "id": "agent-metrics-osiris",
    "name": {
      "zh": "agent-metrics-osiris",
      "en": "agent-metrics-osiris"
    },
    "description": {
      "zh": "Observability and metrics for AI agents - track calls, errors, latency.",
      "en": "Observability and metrics for AI agents - track calls, errors, latency."
    },
    "category": "devops",
    "tags": [
      "agent metrics",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-metrics-osiris"
    ],
    "externalUrl": "https://clawskills.sh/skills/nantes-agent-metrics-osiris",
    "pricing": "free"
  },
  {
    "id": "agent-self-governance",
    "name": {
      "zh": "agent-self-governance",
      "en": "agent-self-governance"
    },
    "description": {
      "zh": "Self-governance protocol for autonomous agents: WAL (Write-Ahead Log), VBR (Verify Before Reporting), ADL.",
      "en": "Self-governance protocol for autonomous agents: WAL (Write-Ahead Log), VBR (Verify Before Reporting), ADL."
    },
    "category": "devops",
    "tags": [
      "agent self",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-self-governance"
    ],
    "externalUrl": "https://clawskills.sh/skills/bowen31337-agent-self-governance",
    "pricing": "free"
  },
  {
    "id": "agent-sovereign-stack",
    "name": {
      "zh": "agent-sovereign-stack",
      "en": "agent-sovereign-stack"
    },
    "description": {
      "zh": "One command to give any AI agent sovereign infrastructure..",
      "en": "One command to give any AI agent sovereign infrastructure.."
    },
    "category": "devops",
    "tags": [
      "agent sovereign",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-sovereign-stack"
    ],
    "externalUrl": "https://clawskills.sh/skills/quriustus-agent-sovereign-stack",
    "pricing": "free"
  },
  {
    "id": "agent-watcher",
    "name": {
      "zh": "agent-watcher",
      "en": "agent-watcher"
    },
    "description": {
      "zh": "A skill for monitoring Moltbook feed, detecting new agents, and tracking interesting posts.",
      "en": "A skill for monitoring Moltbook feed, detecting new agents, and tracking interesting posts."
    },
    "category": "devops",
    "tags": [
      "agent watcher",
      "DevOps"
    ],
    "operations": [
      "clawhub install agent-watcher"
    ],
    "externalUrl": "https://clawskills.sh/skills/nantes-agent-watcher",
    "pricing": "free"
  },
  {
    "id": "agentcanary",
    "name": {
      "zh": "agentcanary",
      "en": "agentcanary"
    },
    "description": {
      "zh": "Market intelligence API for AI agents.",
      "en": "Market intelligence API for AI agents."
    },
    "category": "devops",
    "tags": [
      "agentcanary",
      "DevOps"
    ],
    "operations": [
      "clawhub install agentcanary"
    ],
    "externalUrl": "https://clawskills.sh/skills/mrcerq-agentcanary",
    "pricing": "free"
  },
  {
    "id": "agentchan-org",
    "name": {
      "zh": "agentchan-org",
      "en": "agentchan-org"
    },
    "description": {
      "zh": "Anonymous imageboard for AI agents.",
      "en": "Anonymous imageboard for AI agents."
    },
    "category": "devops",
    "tags": [
      "agentchan org",
      "DevOps"
    ],
    "operations": [
      "clawhub install agentchan-org"
    ],
    "externalUrl": "https://clawskills.sh/skills/kaden-schutt-agentchan-org",
    "pricing": "free"
  },
  {
    "id": "agentguard",
    "name": {
      "zh": "agentguard",
      "en": "agentguard"
    },
    "description": {
      "zh": "Category: Security & Monitoring.",
      "en": "Category: Security & Monitoring."
    },
    "category": "devops",
    "tags": [
      "agentguard",
      "DevOps"
    ],
    "operations": [
      "clawhub install agentguard"
    ],
    "externalUrl": "https://clawskills.sh/skills/manas-io-ai-agentguard",
    "pricing": "free"
  },
  {
    "id": "agentic-ai-gold",
    "name": {
      "zh": "agentic-ai-gold",
      "en": "agentic-ai-gold"
    },
    "description": {
      "zh": "The only agent framework that improves itself while you sleep.",
      "en": "The only agent framework that improves itself while you sleep."
    },
    "category": "devops",
    "tags": [
      "agentic ai",
      "DevOps"
    ],
    "operations": [
      "clawhub install agentic-ai-gold"
    ],
    "externalUrl": "https://clawskills.sh/skills/amitabhainarunachala-agentic-ai-gold",
    "pricing": "free"
  },
  {
    "id": "agentic-devops",
    "name": {
      "zh": "agentic-devops",
      "en": "agentic-devops"
    },
    "description": {
      "zh": "Production-grade agent DevOps toolkit — Docker, process management, log analysis, and health monitoring.",
      "en": "Production-grade agent DevOps toolkit — Docker, process management, log analysis, and health monitoring."
    },
    "category": "devops",
    "tags": [
      "agentic devops",
      "DevOps"
    ],
    "operations": [
      "clawhub install agentic-devops"
    ],
    "externalUrl": "https://clawskills.sh/skills/tkuehnl-agentic-devops",
    "pricing": "free"
  },
  {
    "id": "agentkeys",
    "name": {
      "zh": "agentkeys",
      "en": "agentkeys"
    },
    "description": {
      "zh": "Secure credential proxy for AI agents.",
      "en": "Secure credential proxy for AI agents."
    },
    "category": "devops",
    "tags": [
      "agentkeys",
      "DevOps"
    ],
    "operations": [
      "clawhub install agentkeys"
    ],
    "externalUrl": "https://clawskills.sh/skills/alexandr-belogubov-agentkeys",
    "pricing": "free"
  },
  {
    "id": "agentmemory",
    "name": {
      "zh": "agentmemory",
      "en": "agentmemory"
    },
    "description": {
      "zh": "End-to-end encrypted cloud memory for AI agents.",
      "en": "End-to-end encrypted cloud memory for AI agents."
    },
    "category": "devops",
    "tags": [
      "agentmemory",
      "DevOps"
    ],
    "operations": [
      "clawhub install agentmemory"
    ],
    "externalUrl": "https://clawskills.sh/skills/badaramoni-agentmemory",
    "pricing": "free"
  },
  {
    "id": "aada",
    "name": {
      "zh": "aada",
      "en": "aada"
    },
    "description": {
      "zh": "Create and send fun, personality-rich promotional messages from one agent to the Moltbook audience.",
      "en": "Create and send fun, personality-rich promotional messages from one agent to the Moltbook audience."
    },
    "category": "media",
    "tags": [
      "aada",
      "Media"
    ],
    "operations": [
      "clawhub install aada"
    ],
    "externalUrl": "https://clawskills.sh/skills/rylena-aada",
    "pricing": "free"
  },
  {
    "id": "ace-music",
    "name": {
      "zh": "ace-music",
      "en": "ace-music"
    },
    "description": {
      "zh": "Generate AI music using ACE-Step 1.5 via ACE Music's free API.",
      "en": "Generate AI music using ACE-Step 1.5 via ACE Music's free API."
    },
    "category": "media",
    "tags": [
      "ace music",
      "Media"
    ],
    "operations": [
      "clawhub install ace-music"
    ],
    "externalUrl": "https://clawskills.sh/skills/fspecii-ace-music",
    "pricing": "free"
  },
  {
    "id": "acorn-prover",
    "name": {
      "zh": "acorn-prover",
      "en": "acorn-prover"
    },
    "description": {
      "zh": "Verify and write proofs using the Acorn theorem prover for mathematical and cryptographic formalization.",
      "en": "Verify and write proofs using the Acorn theorem prover for mathematical and cryptographic formalization."
    },
    "category": "media",
    "tags": [
      "acorn prover",
      "Media"
    ],
    "operations": [
      "clawhub install acorn-prover"
    ],
    "externalUrl": "https://clawskills.sh/skills/flyingnobita-acorn-prover",
    "pricing": "free"
  },
  {
    "id": "adobe-automator",
    "name": {
      "zh": "adobe-automator",
      "en": "adobe-automator"
    },
    "description": {
      "zh": "Universal Adobe application automation via ExtendScript bridge.",
      "en": "Universal Adobe application automation via ExtendScript bridge."
    },
    "category": "media",
    "tags": [
      "adobe automator",
      "Media"
    ],
    "operations": [
      "clawhub install adobe-automator"
    ],
    "externalUrl": "https://clawskills.sh/skills/abdul-karim-mia-adobe-automator",
    "pricing": "free"
  },
  {
    "id": "afame",
    "name": {
      "zh": "afame",
      "en": "afame"
    },
    "description": {
      "zh": "Generate diverse creative illustrations via OpenAI Images API.",
      "en": "Generate diverse creative illustrations via OpenAI Images API."
    },
    "category": "media",
    "tags": [
      "afame",
      "Media"
    ],
    "operations": [
      "clawhub install afame"
    ],
    "externalUrl": "https://clawskills.sh/skills/adebayoabdushaheed-a11y-afame",
    "pricing": "free"
  },
  {
    "id": "age-transformation",
    "name": {
      "zh": "age-transformation",
      "en": "age-transformation"
    },
    "description": {
      "zh": "Transform faces across ages using each::sense AI.",
      "en": "Transform faces across ages using each::sense AI."
    },
    "category": "media",
    "tags": [
      "age transformation",
      "Media"
    ],
    "operations": [
      "clawhub install age-transformation"
    ],
    "externalUrl": "https://clawskills.sh/skills/eftalyurtseven-age-transformation",
    "pricing": "free"
  },
  {
    "id": "agentchan",
    "name": {
      "zh": "agentchan",
      "en": "agentchan"
    },
    "description": {
      "zh": "The anonymous imageboard built for AI agents.",
      "en": "The anonymous imageboard built for AI agents."
    },
    "category": "media",
    "tags": [
      "agentchan",
      "Media"
    ],
    "operations": [
      "clawhub install agentchan"
    ],
    "externalUrl": "https://clawskills.sh/skills/vvsotnikov-agentchan",
    "pricing": "free"
  },
  {
    "id": "agentos-mesh",
    "name": {
      "zh": "agentos-mesh",
      "en": "agentos-mesh"
    },
    "description": {
      "zh": "Enables real-time communication between AI agents.",
      "en": "Enables real-time communication between AI agents."
    },
    "category": "media",
    "tags": [
      "agentos mesh",
      "Media"
    ],
    "operations": [
      "clawhub install agentos-mesh"
    ],
    "externalUrl": "https://clawskills.sh/skills/agentossoftware-agentos-mesh",
    "pricing": "free"
  },
  {
    "id": "agents-skill-podcastifier",
    "name": {
      "zh": "agents-skill-podcastifier",
      "en": "agents-skill-podcastifier"
    },
    "description": {
      "zh": "Turn incoming text (email/newsletter) into a short TTS podcast with chunking + ffmpeg concat.",
      "en": "Turn incoming text (email/newsletter) into a short TTS podcast with chunking + ffmpeg concat."
    },
    "category": "media",
    "tags": [
      "agents skill",
      "Media"
    ],
    "operations": [
      "clawhub install agents-skill-podcastifier"
    ],
    "externalUrl": "https://clawskills.sh/skills/cerbug45-agents-skill-podcastifier",
    "pricing": "free"
  },
  {
    "id": "ai-avatar-generation",
    "name": {
      "zh": "ai-avatar-generation",
      "en": "ai-avatar-generation"
    },
    "description": {
      "zh": "Generate AI avatars from photos or text descriptions using each::sense.",
      "en": "Generate AI avatars from photos or text descriptions using each::sense."
    },
    "category": "media",
    "tags": [
      "ai avatar",
      "Media"
    ],
    "operations": [
      "clawhub install ai-avatar-generation"
    ],
    "externalUrl": "https://clawskills.sh/skills/eftalyurtseven-ai-avatar-generation",
    "pricing": "free"
  },
  {
    "id": "ai-headshot-generation",
    "name": {
      "zh": "ai-headshot-generation",
      "en": "ai-headshot-generation"
    },
    "description": {
      "zh": "Generate professional AI headshots from casual photos using each::sense AI.",
      "en": "Generate professional AI headshots from casual photos using each::sense AI."
    },
    "category": "media",
    "tags": [
      "ai headshot",
      "Media"
    ],
    "operations": [
      "clawhub install ai-headshot-generation"
    ],
    "externalUrl": "https://clawskills.sh/skills/eftalyurtseven-ai-headshot-generation",
    "pricing": "free"
  },
  {
    "id": "ai-persona-engine",
    "name": {
      "zh": "ai-persona-engine",
      "en": "ai-persona-engine"
    },
    "description": {
      "zh": "Build emotionally intelligent AI personas for voice and chat roleplay using actor-direction prompts instead.",
      "en": "Build emotionally intelligent AI personas for voice and chat roleplay using actor-direction prompts instead."
    },
    "category": "media",
    "tags": [
      "ai persona",
      "Media"
    ],
    "operations": [
      "clawhub install ai-persona-engine"
    ],
    "externalUrl": "https://clawskills.sh/skills/brandonwadepackard-cell-ai-persona-engine",
    "pricing": "free"
  },
  {
    "id": "ai-video-gen",
    "name": {
      "zh": "ai-video-gen",
      "en": "ai-video-gen"
    },
    "description": {
      "zh": "End-to-end AI video generation - create videos from text.",
      "en": "End-to-end AI video generation - create videos from text."
    },
    "category": "media",
    "tags": [
      "ai video",
      "Media"
    ],
    "operations": [
      "clawhub install ai-video-gen"
    ],
    "externalUrl": "https://clawskills.sh/skills/rhanbourinajd-ai-video-gen",
    "pricing": "free"
  },
  {
    "id": "aikek",
    "name": {
      "zh": "aikek",
      "en": "aikek"
    },
    "description": {
      "zh": "Access AIKEK APIs for crypto/DeFi research and image generation.",
      "en": "Access AIKEK APIs for crypto/DeFi research and image generation."
    },
    "category": "media",
    "tags": [
      "aikek",
      "Media"
    ],
    "operations": [
      "clawhub install aikek"
    ],
    "externalUrl": "https://clawskills.sh/skills/vvsotnikov-aikek",
    "pricing": "free"
  },
  {
    "id": "aiusd",
    "name": {
      "zh": "aiusd",
      "en": "aiusd"
    },
    "description": {
      "zh": "AIUSD trading and account management skill.",
      "en": "AIUSD trading and account management skill."
    },
    "category": "media",
    "tags": [
      "aiusd",
      "Media"
    ],
    "operations": [
      "clawhub install aiusd"
    ],
    "externalUrl": "https://clawskills.sh/skills/chaunceyliu-aiusd",
    "pricing": "free"
  },
  {
    "id": "aiusd-skills",
    "name": {
      "zh": "aiusd-skills",
      "en": "aiusd-skills"
    },
    "description": {
      "zh": "AIUSD trading and account management skill.",
      "en": "AIUSD trading and account management skill."
    },
    "category": "media",
    "tags": [
      "aiusd skills",
      "Media"
    ],
    "operations": [
      "clawhub install aiusd-skills"
    ],
    "externalUrl": "https://clawskills.sh/skills/chaunceyliu-aiusd-skills",
    "pricing": "free"
  },
  {
    "id": "album-cover-generation",
    "name": {
      "zh": "album-cover-generation",
      "en": "album-cover-generation"
    },
    "description": {
      "zh": "Generate professional music album covers using each::sense AI.",
      "en": "Generate professional music album covers using each::sense AI."
    },
    "category": "media",
    "tags": [
      "album cover",
      "Media"
    ],
    "operations": [
      "clawhub install album-cover-generation"
    ],
    "externalUrl": "https://clawskills.sh/skills/eftalyurtseven-album-cover-generation",
    "pricing": "free"
  },
  {
    "id": "algorithmic-art",
    "name": {
      "zh": "algorithmic-art",
      "en": "algorithmic-art"
    },
    "description": {
      "zh": "Creating algorithmic art using p5.js with seeded randomness.",
      "en": "Creating algorithmic art using p5.js with seeded randomness."
    },
    "category": "media",
    "tags": [
      "algorithmic art",
      "Media"
    ],
    "operations": [
      "clawhub install algorithmic-art"
    ],
    "externalUrl": "https://clawskills.sh/skills/seanphan-algorithmic-art",
    "pricing": "free"
  },
  {
    "id": "apipick-china-phone-checker",
    "name": {
      "zh": "apipick-china-phone-checker",
      "en": "apipick-china-phone-checker"
    },
    "description": {
      "zh": "Validate Chinese mobile phone numbers using the apipick China Phone Checker API.",
      "en": "Validate Chinese mobile phone numbers using the apipick China Phone Checker API."
    },
    "category": "media",
    "tags": [
      "apipick china",
      "Media"
    ],
    "operations": [
      "clawhub install apipick-china-phone-checker"
    ],
    "externalUrl": "https://clawskills.sh/skills/javainthinking-apipick-china-phone-checker",
    "pricing": "free"
  },
  {
    "id": "art-philosophy",
    "name": {
      "zh": "art-philosophy",
      "en": "art-philosophy"
    },
    "description": {
      "zh": "Auto-learns your visual language.",
      "en": "Auto-learns your visual language."
    },
    "category": "media",
    "tags": [
      "art philosophy",
      "Media"
    ],
    "operations": [
      "clawhub install art-philosophy"
    ],
    "externalUrl": "https://clawskills.sh/skills/nyxur42-art-philosophy",
    "pricing": "free"
  },
  {
    "id": "ascii-art-generator",
    "name": {
      "zh": "ascii-art-generator",
      "en": "ascii-art-generator"
    },
    "description": {
      "zh": "Create ASCII art and text-based visualizations for artistic expression, technical diagrams, or conceptual.",
      "en": "Create ASCII art and text-based visualizations for artistic expression, technical diagrams, or conceptual."
    },
    "category": "media",
    "tags": [
      "ascii art",
      "Media"
    ],
    "operations": [
      "clawhub install ascii-art-generator"
    ],
    "externalUrl": "https://clawskills.sh/skills/ustc-yxw-ascii-art-generator",
    "pricing": "free"
  },
  {
    "id": "atxp",
    "name": {
      "zh": "atxp",
      "en": "atxp"
    },
    "description": {
      "zh": "Access ATXP paid API tools for web search, AI image generation, music creation,.",
      "en": "Access ATXP paid API tools for web search, AI image generation, music creation,."
    },
    "category": "media",
    "tags": [
      "atxp",
      "Media"
    ],
    "operations": [
      "clawhub install atxp"
    ],
    "externalUrl": "https://clawskills.sh/skills/emilioacc-atxp",
    "pricing": "freemium"
  },
  {
    "id": "beauty-generation-api",
    "name": {
      "zh": "beauty-generation-api",
      "en": "beauty-generation-api"
    },
    "description": {
      "zh": "FREE AI image generation service for creating.",
      "en": "FREE AI image generation service for creating."
    },
    "category": "media",
    "tags": [
      "beauty generation",
      "Media"
    ],
    "operations": [
      "clawhub install beauty-generation-api"
    ],
    "externalUrl": "https://clawskills.sh/skills/luruibu-beauty-generation-api",
    "pricing": "free"
  },
  {
    "id": "best-image",
    "name": {
      "zh": "best-image",
      "en": "best-image"
    },
    "description": {
      "zh": "Best quality AI image generation (~$0.12-0.20/image)",
      "en": "Best quality AI image generation (~$0.12-0.20/image)"
    },
    "category": "media",
    "tags": [
      "best image",
      "Media"
    ],
    "operations": [
      "clawhub install best-image"
    ],
    "externalUrl": "https://clawskills.sh/skills/pharmacist9527-best-image",
    "pricing": "freemium"
  },
  {
    "id": "best-image-generation",
    "name": {
      "zh": "best-image-generation",
      "en": "best-image-generation"
    },
    "description": {
      "zh": "Best quality AI image generation (~$0.12-0.20/image)",
      "en": "Best quality AI image generation (~$0.12-0.20/image)"
    },
    "category": "media",
    "tags": [
      "best image",
      "Media"
    ],
    "operations": [
      "clawhub install best-image-generation"
    ],
    "externalUrl": "https://clawskills.sh/skills/evolinkai-best-image-generation",
    "pricing": "freemium"
  },
  {
    "id": "bex-nano-banana-pro",
    "name": {
      "zh": "bex-nano-banana-pro",
      "en": "bex-nano-banana-pro"
    },
    "description": {
      "zh": "Generate or edit images via Gemini 3 Pro Image on Replicate.",
      "en": "Generate or edit images via Gemini 3 Pro Image on Replicate."
    },
    "category": "media",
    "tags": [
      "bex nano",
      "Media"
    ],
    "operations": [
      "clawhub install bex-nano-banana-pro"
    ],
    "externalUrl": "https://clawskills.sh/skills/bextuychiev-bex-nano-banana-pro",
    "pricing": "free"
  },
  {
    "id": "breeze",
    "name": {
      "zh": "breeze",
      "en": "breeze"
    },
    "description": {
      "zh": "Interact with the Breeze yield aggregator through the x402 payment-gated HTTP API.",
      "en": "Interact with the Breeze yield aggregator through the x402 payment-gated HTTP API."
    },
    "category": "media",
    "tags": [
      "breeze",
      "Media"
    ],
    "operations": [
      "clawhub install breeze"
    ],
    "externalUrl": "https://clawskills.sh/skills/keeganthomp-breeze",
    "pricing": "free"
  },
  {
    "id": "cad-agent",
    "name": {
      "zh": "cad-agent",
      "en": "cad-agent"
    },
    "description": {
      "zh": "Rendering server for AI agents doing CAD work.",
      "en": "Rendering server for AI agents doing CAD work."
    },
    "category": "media",
    "tags": [
      "Media"
    ],
    "operations": [
      "clawhub install cad-agent"
    ],
    "externalUrl": "https://github.com/clawdbot/skills/tree/main/skills/clawd-maf/cad-agent/SKILL.md",
    "pricing": "free"
  },
  {
    "id": "calorie-visualizer",
    "name": {
      "zh": "calorie-visualizer",
      "en": "calorie-visualizer"
    },
    "description": {
      "zh": "Local calorie logging and visual reporting (auto-refreshes and returns report image after each log)",
      "en": "Local calorie logging and visual reporting (auto-refreshes and returns report image after each log)"
    },
    "category": "media",
    "tags": [
      "calorie visualizer",
      "Media"
    ],
    "operations": [
      "clawhub install calorie-visualizer"
    ],
    "externalUrl": "https://clawskills.sh/skills/vintlin-calorie-visualizer",
    "pricing": "free"
  },
  {
    "id": "canva-connect",
    "name": {
      "zh": "canva-connect",
      "en": "canva-connect"
    },
    "description": {
      "zh": "Manage Canva designs, assets, and folders via the Connect API.",
      "en": "Manage Canva designs, assets, and folders via the Connect API."
    },
    "category": "media",
    "tags": [
      "canva connect",
      "Media"
    ],
    "operations": [
      "clawhub install canva-connect"
    ],
    "externalUrl": "https://clawskills.sh/skills/coolmanns-canva-connect",
    "pricing": "free"
  },
  {
    "id": "alter-actions",
    "name": {
      "zh": "alter-actions",
      "en": "alter-actions"
    },
    "description": {
      "zh": "Trigger Alter macOS app actions via x-callback-urls.",
      "en": "Trigger Alter macOS app actions via x-callback-urls."
    },
    "category": "productivity",
    "tags": [
      "alter actions",
      "Productivity"
    ],
    "operations": [
      "clawhub install alter-actions"
    ],
    "externalUrl": "https://clawskills.sh/skills/olivieralter-alter-actions",
    "pricing": "free"
  },
  {
    "id": "apple-contacts",
    "name": {
      "zh": "apple-contacts",
      "en": "apple-contacts"
    },
    "description": {
      "zh": "Look up contacts from macOS Contacts.app.",
      "en": "Look up contacts from macOS Contacts.app."
    },
    "category": "productivity",
    "tags": [
      "apple contacts",
      "Productivity"
    ],
    "operations": [
      "clawhub install apple-contacts"
    ],
    "externalUrl": "https://clawskills.sh/skills/tyler6204-apple-contacts",
    "pricing": "free"
  },
  {
    "id": "apple-find-my-local",
    "name": {
      "zh": "apple-find-my-local",
      "en": "apple-find-my-local"
    },
    "description": {
      "zh": "Control Apple Find My app via Peekaboo to locate people, devices, and items (AirTags)",
      "en": "Control Apple Find My app via Peekaboo to locate people, devices, and items (AirTags)"
    },
    "category": "productivity",
    "tags": [
      "apple find",
      "Productivity"
    ],
    "operations": [
      "clawhub install apple-find-my-local"
    ],
    "externalUrl": "https://clawskills.sh/skills/loganprit-apple-find-my-local",
    "pricing": "free"
  },
  {
    "id": "apple-health-skill",
    "name": {
      "zh": "apple-health-skill",
      "en": "apple-health-skill"
    },
    "description": {
      "zh": "Talk to your Apple Health data — ask questions about your workouts, heart rate, activity rings, and fitness trends.",
      "en": "Talk to your Apple Health data — ask questions about your workouts, heart rate, activity rings, and fitness trends."
    },
    "category": "productivity",
    "tags": [
      "apple health",
      "Productivity"
    ],
    "operations": [
      "clawhub install apple-health-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/nftechie-apple-health-skill",
    "pricing": "free"
  },
  {
    "id": "apple-mail-search",
    "name": {
      "zh": "apple-mail-search",
      "en": "apple-mail-search"
    },
    "description": {
      "zh": "Fast Apple Mail search via SQLite on macOS.",
      "en": "Fast Apple Mail search via SQLite on macOS."
    },
    "category": "productivity",
    "tags": [
      "apple mail",
      "Productivity"
    ],
    "operations": [
      "clawhub install apple-mail-search"
    ],
    "externalUrl": "https://clawskills.sh/skills/mneves75-apple-mail-search",
    "pricing": "free"
  },
  {
    "id": "apple-music",
    "name": {
      "zh": "apple-music",
      "en": "apple-music"
    },
    "description": {
      "zh": "Search Apple Music, add songs to library, manage playlists, control.",
      "en": "Search Apple Music, add songs to library, manage playlists, control."
    },
    "category": "productivity",
    "tags": [
      "apple music",
      "Productivity"
    ],
    "operations": [
      "clawhub install apple-music"
    ],
    "externalUrl": "https://clawskills.sh/skills/tyler6204-apple-music",
    "pricing": "free"
  },
  {
    "id": "apple-photos",
    "name": {
      "zh": "apple-photos",
      "en": "apple-photos"
    },
    "description": {
      "zh": "Apple Photos.app integration for macOS.",
      "en": "Apple Photos.app integration for macOS."
    },
    "category": "productivity",
    "tags": [
      "apple photos",
      "Productivity"
    ],
    "operations": [
      "clawhub install apple-photos"
    ],
    "externalUrl": "https://clawskills.sh/skills/tyler6204-apple-photos",
    "pricing": "free"
  },
  {
    "id": "apple-remind-me",
    "name": {
      "zh": "apple-remind-me",
      "en": "apple-remind-me"
    },
    "description": {
      "zh": "Natural language reminders that create actual Apple.",
      "en": "Natural language reminders that create actual Apple."
    },
    "category": "productivity",
    "tags": [
      "apple remind",
      "Productivity"
    ],
    "operations": [
      "clawhub install apple-remind-me"
    ],
    "externalUrl": "https://clawskills.sh/skills/plgonzalezrx8-apple-remind-me",
    "pricing": "free"
  },
  {
    "id": "apple-search-ads-skill",
    "name": {
      "zh": "apple-search-ads-skill",
      "en": "apple-search-ads-skill"
    },
    "description": {
      "zh": "Manage Apple Search Ads campaigns, ad groups, keywords, and reports via the asa-cli tool.",
      "en": "Manage Apple Search Ads campaigns, ad groups, keywords, and reports via the asa-cli tool."
    },
    "category": "productivity",
    "tags": [
      "apple search",
      "Productivity"
    ],
    "operations": [
      "clawhub install apple-search-ads-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/trebuhs-apple-search-ads-skill",
    "pricing": "free"
  },
  {
    "id": "appletv",
    "name": {
      "zh": "appletv",
      "en": "appletv"
    },
    "description": {
      "zh": "Control Apple TV via pyatv.",
      "en": "Control Apple TV via pyatv."
    },
    "category": "productivity",
    "tags": [
      "appletv",
      "Productivity"
    ],
    "operations": [
      "clawhub install appletv"
    ],
    "externalUrl": "https://clawskills.sh/skills/lucakaufmann-appletv",
    "pricing": "free"
  },
  {
    "id": "callmac",
    "name": {
      "zh": "callmac",
      "en": "callmac"
    },
    "description": {
      "zh": "Remote voice control for Mac from mobile devices using commands like /callmac.",
      "en": "Remote voice control for Mac from mobile devices using commands like /callmac."
    },
    "category": "productivity",
    "tags": [
      "callmac",
      "Productivity"
    ],
    "operations": [
      "clawhub install callmac"
    ],
    "externalUrl": "https://clawskills.sh/skills/jooey-callmac",
    "pricing": "free"
  },
  {
    "id": "clawdbot-macos-build",
    "name": {
      "zh": "clawdbot-macos-build",
      "en": "clawdbot-macos-build"
    },
    "description": {
      "zh": "Build the Clawdbot macOS menu bar app.",
      "en": "Build the Clawdbot macOS menu bar app."
    },
    "category": "productivity",
    "tags": [
      "clawdbot macos",
      "Productivity"
    ],
    "operations": [
      "clawhub install clawdbot-macos-build"
    ],
    "externalUrl": "https://clawskills.sh/skills/manish-basargekar-clawdbot-macos-build",
    "pricing": "free"
  },
  {
    "id": "clawdbot-skill-voice-wake-say",
    "name": {
      "zh": "clawdbot-skill-voice-wake-say",
      "en": "clawdbot-skill-voice-wake-say"
    },
    "description": {
      "zh": "Speak responses aloud on macOS.",
      "en": "Speak responses aloud on macOS."
    },
    "category": "productivity",
    "tags": [
      "clawdbot skill",
      "Productivity"
    ],
    "operations": [
      "clawhub install clawdbot-skill-voice-wake-say"
    ],
    "externalUrl": "https://clawskills.sh/skills/xadenryan-clawdbot-skill-voice-wake-say",
    "pricing": "free"
  },
  {
    "id": "drafts",
    "name": {
      "zh": "drafts",
      "en": "drafts"
    },
    "description": {
      "zh": "Manage Drafts app notes via CLI on macOS.",
      "en": "Manage Drafts app notes via CLI on macOS."
    },
    "category": "productivity",
    "tags": [
      "drafts",
      "Productivity"
    ],
    "operations": [
      "clawhub install drafts"
    ],
    "externalUrl": "https://clawskills.sh/skills/nerveband-drafts",
    "pricing": "free"
  },
  {
    "id": "findmy-location",
    "name": {
      "zh": "findmy-location",
      "en": "findmy-location"
    },
    "description": {
      "zh": "Track a shared contact's location via Apple Find.",
      "en": "Track a shared contact's location via Apple Find."
    },
    "category": "productivity",
    "tags": [
      "findmy location",
      "Productivity"
    ],
    "operations": [
      "clawhub install findmy-location"
    ],
    "externalUrl": "https://clawskills.sh/skills/poiley-findmy-location",
    "pricing": "free"
  },
  {
    "id": "fzf-fuzzy-finder",
    "name": {
      "zh": "fzf-fuzzy-finder",
      "en": "fzf-fuzzy-finder"
    },
    "description": {
      "zh": "Command-line fuzzy finder for interactive filtering.",
      "en": "Command-line fuzzy finder for interactive filtering."
    },
    "category": "productivity",
    "tags": [
      "fzf fuzzy",
      "Productivity"
    ],
    "operations": [
      "clawhub install fzf-fuzzy-finder"
    ],
    "externalUrl": "https://clawskills.sh/skills/arnarsson-fzf-fuzzy-finder",
    "pricing": "free"
  },
  {
    "id": "get-focus-mode",
    "name": {
      "zh": "get-focus-mode",
      "en": "get-focus-mode"
    },
    "description": {
      "zh": "Get the current macOS Focus.",
      "en": "Get the current macOS Focus."
    },
    "category": "productivity",
    "tags": [
      "get focus",
      "Productivity"
    ],
    "operations": [
      "clawhub install get-focus-mode"
    ],
    "externalUrl": "https://clawskills.sh/skills/nickchristensen-get-focus-mode",
    "pricing": "free"
  },
  {
    "id": "healthkit-sync",
    "name": {
      "zh": "healthkit-sync",
      "en": "healthkit-sync"
    },
    "description": {
      "zh": "iOS HealthKit data sync CLI commands and patterns.",
      "en": "iOS HealthKit data sync CLI commands and patterns."
    },
    "category": "productivity",
    "tags": [
      "healthkit sync",
      "Productivity"
    ],
    "operations": [
      "clawhub install healthkit-sync"
    ],
    "externalUrl": "https://clawskills.sh/skills/mneves75-healthkit-sync",
    "pricing": "free"
  },
  {
    "id": "hergunmac",
    "name": {
      "zh": "hergunmac",
      "en": "hergunmac"
    },
    "description": {
      "zh": "Access AI-powered football match predictions.",
      "en": "Access AI-powered football match predictions."
    },
    "category": "productivity",
    "tags": [
      "hergunmac",
      "Productivity"
    ],
    "operations": [
      "clawhub install hergunmac"
    ],
    "externalUrl": "https://clawskills.sh/skills/ahmetsemsettinozdemirden-hergunmac",
    "pricing": "free"
  },
  {
    "id": "homebrew",
    "name": {
      "zh": "homebrew",
      "en": "homebrew"
    },
    "description": {
      "zh": "Homebrew package manager for macOS.",
      "en": "Homebrew package manager for macOS."
    },
    "category": "productivity",
    "tags": [
      "homebrew",
      "Productivity"
    ],
    "operations": [
      "clawhub install homebrew"
    ],
    "externalUrl": "https://clawskills.sh/skills/thesethrose-homebrew",
    "pricing": "free"
  },
  {
    "id": "icloud-findmy",
    "name": {
      "zh": "icloud-findmy",
      "en": "icloud-findmy"
    },
    "description": {
      "zh": "Query Find My locations and battery status for family devices.",
      "en": "Query Find My locations and battery status for family devices."
    },
    "category": "productivity",
    "tags": [
      "icloud findmy",
      "Productivity"
    ],
    "operations": [
      "clawhub install icloud-findmy"
    ],
    "externalUrl": "https://clawskills.sh/skills/liamnichols-icloud-findmy",
    "pricing": "free"
  },
  {
    "id": "ics-import-on-iphone",
    "name": {
      "zh": "ics-import-on-iphone",
      "en": "ics-import-on-iphone"
    },
    "description": {
      "zh": "Create calendar events by generating valid .ics files when direct calendar access is unavailable.",
      "en": "Create calendar events by generating valid .ics files when direct calendar access is unavailable."
    },
    "category": "productivity",
    "tags": [
      "ics import",
      "Productivity"
    ],
    "operations": [
      "clawhub install ics-import-on-iphone"
    ],
    "externalUrl": "https://clawskills.sh/skills/sbhhbs-ics-import-on-iphone",
    "pricing": "free"
  },
  {
    "id": "imessage-signal-analyzer",
    "name": {
      "zh": "imessage-signal-analyzer",
      "en": "imessage-signal-analyzer"
    },
    "description": {
      "zh": "Analyze iMessage (macOS) and Signal conversation history to reveal relationship dynamics — message volume.",
      "en": "Analyze iMessage (macOS) and Signal conversation history to reveal relationship dynamics — message volume."
    },
    "category": "productivity",
    "tags": [
      "imessage signal",
      "Productivity"
    ],
    "operations": [
      "clawhub install imessage-signal-analyzer"
    ],
    "externalUrl": "https://clawskills.sh/skills/terellison-imessage-signal-analyzer",
    "pricing": "free"
  },
  {
    "id": "inkjet",
    "name": {
      "zh": "inkjet",
      "en": "inkjet"
    },
    "description": {
      "zh": "Print text, images, and QR codes to a wireless Bluetooth thermal printer.",
      "en": "Print text, images, and QR codes to a wireless Bluetooth thermal printer."
    },
    "category": "productivity",
    "tags": [
      "inkjet",
      "Productivity"
    ],
    "operations": [
      "clawhub install inkjet"
    ],
    "externalUrl": "https://clawskills.sh/skills/aaronchartier-inkjet",
    "pricing": "free"
  },
  {
    "id": "mac-notes-agent",
    "name": {
      "zh": "mac-notes-agent",
      "en": "mac-notes-agent"
    },
    "description": {
      "zh": "Integrate with the macOS Notes app (Apple Notes)",
      "en": "Integrate with the macOS Notes app (Apple Notes)"
    },
    "category": "productivity",
    "tags": [
      "mac notes",
      "Productivity"
    ],
    "operations": [
      "clawhub install mac-notes-agent"
    ],
    "externalUrl": "https://clawskills.sh/skills/swancho-mac-notes-agent",
    "pricing": "free"
  },
  {
    "id": "mac-tts",
    "name": {
      "zh": "mac-tts",
      "en": "mac-tts"
    },
    "description": {
      "zh": "Text-to-speech using macOS built-in `say` command.",
      "en": "Text-to-speech using macOS built-in `say` command."
    },
    "category": "productivity",
    "tags": [
      "mac tts",
      "Productivity"
    ],
    "operations": [
      "clawhub install mac-tts"
    ],
    "externalUrl": "https://clawskills.sh/skills/kalijason-mac-tts",
    "pricing": "free"
  },
  {
    "id": "macos-native-automation",
    "name": {
      "zh": "macos-native-automation",
      "en": "macos-native-automation"
    },
    "description": {
      "zh": "Hardware-level mouse, keyboard & dialog automation on macOS via CGEvent + AppleScript.",
      "en": "Hardware-level mouse, keyboard & dialog automation on macOS via CGEvent + AppleScript."
    },
    "category": "productivity",
    "tags": [
      "macos native",
      "Productivity"
    ],
    "operations": [
      "clawhub install macos-native-automation"
    ],
    "externalUrl": "https://clawskills.sh/skills/theagentwire-macos-native-automation",
    "pricing": "free"
  },
  {
    "id": "managing-apple-notes",
    "name": {
      "zh": "managing-apple-notes",
      "en": "managing-apple-notes"
    },
    "description": {
      "zh": "Manage Apple Notes from the terminal using the inotes CLI.",
      "en": "Manage Apple Notes from the terminal using the inotes CLI."
    },
    "category": "productivity",
    "tags": [
      "managing apple",
      "Productivity"
    ],
    "operations": [
      "clawhub install managing-apple-notes"
    ],
    "externalUrl": "https://clawskills.sh/skills/wangwalk-managing-apple-notes",
    "pricing": "free"
  },
  {
    "id": "meow-finder",
    "name": {
      "zh": "meow-finder",
      "en": "meow-finder"
    },
    "description": {
      "zh": "CLI tool to discover AI tools.",
      "en": "CLI tool to discover AI tools."
    },
    "category": "productivity",
    "tags": [
      "meow finder",
      "Productivity"
    ],
    "operations": [
      "clawhub install meow-finder"
    ],
    "externalUrl": "https://clawskills.sh/skills/abgohel-meow-finder",
    "pricing": "free"
  },
  {
    "id": "mh-apple-reminders",
    "name": {
      "zh": "mh-apple-reminders",
      "en": "mh-apple-reminders"
    },
    "description": {
      "zh": "Manage Apple Reminders via remindctl CLI (list, add, edit, complete, delete)",
      "en": "Manage Apple Reminders via remindctl CLI (list, add, edit, complete, delete)"
    },
    "category": "productivity",
    "tags": [
      "mh apple",
      "Productivity"
    ],
    "operations": [
      "clawhub install mh-apple-reminders"
    ],
    "externalUrl": "https://clawskills.sh/skills/mohdalhashemi98-hue-mh-apple-reminders",
    "pricing": "free"
  },
  {
    "id": "1",
    "name": {
      "zh": "1",
      "en": "1"
    },
    "description": {
      "zh": "Personal knowledge base powered by Ensue for capturing and retrieving.",
      "en": "Personal knowledge base powered by Ensue for capturing and retrieving."
    },
    "category": "research",
    "tags": [
      "1",
      "Research"
    ],
    "operations": [
      "clawhub install 1"
    ],
    "externalUrl": "https://clawskills.sh/skills/nastrology-1",
    "pricing": "free"
  },
  {
    "id": "academic-deep-research",
    "name": {
      "zh": "academic-deep-research",
      "en": "academic-deep-research"
    },
    "description": {
      "zh": "Transparent, rigorous research with full.",
      "en": "Transparent, rigorous research with full."
    },
    "category": "research",
    "tags": [
      "academic deep",
      "Research"
    ],
    "operations": [
      "clawhub install academic-deep-research"
    ],
    "externalUrl": "https://clawskills.sh/skills/kesslerio-academic-deep-research",
    "pricing": "free"
  },
  {
    "id": "academic-writer",
    "name": {
      "zh": "学术写作助手",
      "en": "academic-writer"
    },
    "description": {
      "zh": "辅助学术论文写作，支持格式化、引用和语法优化。",
      "en": "Professional LaTeX writing assistant."
    },
    "category": "research",
    "tags": [
      "academic writer",
      "Research"
    ],
    "operations": [
      "clawhub install academic-writer"
    ],
    "externalUrl": "https://clawskills.sh/skills/dayunyan-academic-writer",
    "pricing": "free"
  },
  {
    "id": "academic-writing",
    "name": {
      "zh": "学术论文写作",
      "en": "academic-writing"
    },
    "description": {
      "zh": "学术写作全流程支持，从大纲到终稿。",
      "en": "You are an academic writing expert specializing in scholarly papers, literature reviews, research methodology."
    },
    "category": "research",
    "tags": [
      "academic writing",
      "Research"
    ],
    "operations": [
      "clawhub install academic-writing"
    ],
    "externalUrl": "https://clawskills.sh/skills/teamolab-academic-writing",
    "pricing": "free"
  },
  {
    "id": "academic-writing-refiner",
    "name": {
      "zh": "学术写作优化",
      "en": "academic-writing-refiner"
    },
    "description": {
      "zh": "优化学术文章的表达、逻辑和格式。",
      "en": "Refine academic writing for computer science research papers targeting top-tier venues (NeurIPS, ICLR, ICML, AAAI."
    },
    "category": "research",
    "tags": [
      "academic writing",
      "Research"
    ],
    "operations": [
      "clawhub install academic-writing-refiner"
    ],
    "externalUrl": "https://clawskills.sh/skills/zihan-zhu-academic-writing-refiner",
    "pricing": "free"
  },
  {
    "id": "aclawdemy",
    "name": {
      "zh": "aclawdemy",
      "en": "aclawdemy"
    },
    "description": {
      "zh": "The academic research platform for AI agents.",
      "en": "The academic research platform for AI agents."
    },
    "category": "research",
    "tags": [
      "aclawdemy",
      "Research"
    ],
    "operations": [
      "clawhub install aclawdemy"
    ],
    "externalUrl": "https://clawskills.sh/skills/nimhar-aclawdemy",
    "pricing": "free"
  },
  {
    "id": "action-suggester",
    "name": {
      "zh": "action-suggester",
      "en": "action-suggester"
    },
    "description": {
      "zh": "Generate non-binding follow-up action suggestions from lead summaries or lead lists.",
      "en": "Generate non-binding follow-up action suggestions from lead summaries or lead lists."
    },
    "category": "research",
    "tags": [
      "action suggester",
      "Research"
    ],
    "operations": [
      "clawhub install action-suggester"
    ],
    "externalUrl": "https://clawskills.sh/skills/vishalgojha-action-suggester",
    "pricing": "free"
  },
  {
    "id": "ads-manager-agent",
    "name": {
      "zh": "ads-manager-agent",
      "en": "ads-manager-agent"
    },
    "description": {
      "zh": "When the user wants to manage, automate, or analyze paid advertising campaigns on Google Ads, Meta.",
      "en": "When the user wants to manage, automate, or analyze paid advertising campaigns on Google Ads, Meta."
    },
    "category": "research",
    "tags": [
      "ads manager",
      "Research"
    ],
    "operations": [
      "clawhub install ads-manager-agent"
    ],
    "externalUrl": "https://clawskills.sh/skills/amekala-ads-manager-agent",
    "pricing": "freemium"
  },
  {
    "id": "adspirer-ads-agent",
    "name": {
      "zh": "adspirer-ads-agent",
      "en": "adspirer-ads-agent"
    },
    "description": {
      "zh": "When the user wants to manage, automate, or analyze paid advertising campaigns on Google Ads, Meta.",
      "en": "When the user wants to manage, automate, or analyze paid advertising campaigns on Google Ads, Meta."
    },
    "category": "research",
    "tags": [
      "adspirer ads",
      "Research"
    ],
    "operations": [
      "clawhub install adspirer-ads-agent"
    ],
    "externalUrl": "https://clawskills.sh/skills/amekala-adspirer-ads-agent",
    "pricing": "freemium"
  },
  {
    "id": "advanced-skill-creator",
    "name": {
      "zh": "advanced-skill-creator",
      "en": "advanced-skill-creator"
    },
    "description": {
      "zh": "Advanced OpenClaw skill creation handler.",
      "en": "Advanced OpenClaw skill creation handler."
    },
    "category": "research",
    "tags": [
      "advanced skill",
      "Research"
    ],
    "operations": [
      "clawhub install advanced-skill-creator"
    ],
    "externalUrl": "https://clawskills.sh/skills/xqicxx-advanced-skill-creator",
    "pricing": "free"
  },
  {
    "id": "aerobase-skill",
    "name": {
      "zh": "aerobase-skill",
      "en": "aerobase-skill"
    },
    "description": {
      "zh": "Search, score, and compare flights with jetlag impact analysis.",
      "en": "Search, score, and compare flights with jetlag impact analysis."
    },
    "category": "research",
    "tags": [
      "aerobase skill",
      "Research"
    ],
    "operations": [
      "clawhub install aerobase-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/kurosh87-aerobase-skill",
    "pricing": "free"
  },
  {
    "id": "agent-arena-skill",
    "name": {
      "zh": "agent-arena-skill",
      "en": "agent-arena-skill"
    },
    "description": {
      "zh": "Discover, register, and hire ERC-8004 autonomous agents across 16 blockchains.",
      "en": "Discover, register, and hire ERC-8004 autonomous agents across 16 blockchains."
    },
    "category": "research",
    "tags": [
      "agent arena",
      "Research"
    ],
    "operations": [
      "clawhub install agent-arena-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/neeeophytee-agent-arena-skill",
    "pricing": "free"
  },
  {
    "id": "agent-brain",
    "name": {
      "zh": "agent-brain",
      "en": "agent-brain"
    },
    "description": {
      "zh": "Local-first persistent memory for AI agents with SQLite storage, orchestrated retrieve/extract loops, hybrid.",
      "en": "Local-first persistent memory for AI agents with SQLite storage, orchestrated retrieve/extract loops, hybrid."
    },
    "category": "research",
    "tags": [
      "agent brain",
      "Research"
    ],
    "operations": [
      "clawhub install agent-brain"
    ],
    "externalUrl": "https://clawskills.sh/skills/dobrinalexandru-agent-brain",
    "pricing": "free"
  },
  {
    "id": "agent-casino",
    "name": {
      "zh": "agent-casino",
      "en": "agent-casino"
    },
    "description": {
      "zh": "Compete against other AI agents in Rock-Paper-Scissors with lockup mechanics.",
      "en": "Compete against other AI agents in Rock-Paper-Scissors with lockup mechanics."
    },
    "category": "research",
    "tags": [
      "agent casino",
      "Research"
    ],
    "operations": [
      "clawhub install agent-casino"
    ],
    "externalUrl": "https://clawskills.sh/skills/lemodigital-agent-casino",
    "pricing": "free"
  },
  {
    "id": "agent-deep-research",
    "name": {
      "zh": "agent-deep-research",
      "en": "agent-deep-research"
    },
    "description": {
      "zh": "Autonomous deep research powered by Google Gemini.",
      "en": "Autonomous deep research powered by Google Gemini."
    },
    "category": "research",
    "tags": [
      "agent deep",
      "Research"
    ],
    "operations": [
      "clawhub install agent-deep-research"
    ],
    "externalUrl": "https://clawskills.sh/skills/24601-agent-deep-research",
    "pricing": "free"
  },
  {
    "id": "agent-lightning",
    "name": {
      "zh": "agent-lightning",
      "en": "agent-lightning"
    },
    "description": {
      "zh": "Microsoft Research's agent training framework.",
      "en": "Microsoft Research's agent training framework."
    },
    "category": "research",
    "tags": [
      "agent lightning",
      "Research"
    ],
    "operations": [
      "clawhub install agent-lightning"
    ],
    "externalUrl": "https://clawskills.sh/skills/olmmlo-cmd-agent-lightning",
    "pricing": "free"
  },
  {
    "id": "agentarxiv",
    "name": {
      "zh": "agentarxiv",
      "en": "agentarxiv"
    },
    "description": {
      "zh": "Outcome-driven scientific publishing for AI agents.",
      "en": "Outcome-driven scientific publishing for AI agents."
    },
    "category": "research",
    "tags": [
      "agentarxiv",
      "Research"
    ],
    "operations": [
      "clawhub install agentarxiv"
    ],
    "externalUrl": "https://clawskills.sh/skills/amanbhandula-agentarxiv",
    "pricing": "free"
  },
  {
    "id": "arxiv-source",
    "name": {
      "zh": "arxiv-source",
      "en": "arxiv-source"
    },
    "description": {
      "zh": "Fetch arXiv LaTeX source, list sections, extract abstracts.",
      "en": "Fetch arXiv LaTeX source, list sections, extract abstracts."
    },
    "category": "research",
    "tags": [
      "arxiv source",
      "Research"
    ],
    "operations": [
      "clawhub install arxiv-source"
    ],
    "externalUrl": "https://clawskills.sh/skills/willamhou-arxiv-source",
    "pricing": "free"
  },
  {
    "id": "agenthire",
    "name": {
      "zh": "agenthire",
      "en": "agenthire"
    },
    "description": {
      "zh": "AgentHire — Agent-to-Agent Marketplace.",
      "en": "AgentHire — Agent-to-Agent Marketplace."
    },
    "category": "research",
    "tags": [
      "agenthire",
      "Research"
    ],
    "operations": [
      "clawhub install agenthire"
    ],
    "externalUrl": "https://clawskills.sh/skills/lngdao-agenthire",
    "pricing": "free"
  },
  {
    "id": "agentic-paper-digest",
    "name": {
      "zh": "agentic-paper-digest",
      "en": "agentic-paper-digest"
    },
    "description": {
      "zh": "Fetches and summarizes recent arXiv and Hugging.",
      "en": "Fetches and summarizes recent arXiv and Hugging."
    },
    "category": "research",
    "tags": [
      "agentic paper",
      "Research"
    ],
    "operations": [
      "clawhub install agentic-paper-digest"
    ],
    "externalUrl": "https://clawskills.sh/skills/matanle51-agentic-paper-digest",
    "pricing": "free"
  },
  {
    "id": "agentic-paper-digest-skill",
    "name": {
      "zh": "agentic-paper-digest-skill",
      "en": "agentic-paper-digest-skill"
    },
    "description": {
      "zh": "Fetches and summarizes recent arXiv.",
      "en": "Fetches and summarizes recent arXiv."
    },
    "category": "research",
    "tags": [
      "agentic paper",
      "Research"
    ],
    "operations": [
      "clawhub install agentic-paper-digest-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/matanle51-agentic-paper-digest-skill",
    "pricing": "free"
  },
  {
    "id": "agenticmail",
    "name": {
      "zh": "agenticmail",
      "en": "agenticmail"
    },
    "description": {
      "zh": "🎀 AgenticMail — Full email, SMS, storage & multi-agent coordination for AI agents. 63 tools.",
      "en": "🎀 AgenticMail — Full email, SMS, storage & multi-agent coordination for AI agents. 63 tools."
    },
    "category": "research",
    "tags": [
      "agenticmail",
      "Research"
    ],
    "operations": [
      "clawhub install agenticmail"
    ],
    "externalUrl": "https://clawskills.sh/skills/ope-olatunji-agenticmail",
    "pricing": "free"
  },
  {
    "id": "agentx-news",
    "name": {
      "zh": "agentx-news",
      "en": "agentx-news"
    },
    "description": {
      "zh": "Post xeets, manage profile, and interact on AgentX News — a microblogging platform for AI agents.",
      "en": "Post xeets, manage profile, and interact on AgentX News — a microblogging platform for AI agents."
    },
    "category": "research",
    "tags": [
      "agentx news",
      "Research"
    ],
    "operations": [
      "clawhub install agentx-news"
    ],
    "externalUrl": "https://clawskills.sh/skills/amittell-agentx-news",
    "pricing": "free"
  },
  {
    "id": "agile-toolkit",
    "name": {
      "zh": "agile-toolkit",
      "en": "agile-toolkit"
    },
    "description": {
      "zh": "You are an experienced Agile Coach with deep knowledge of Scrum, Kanban, SAFe, and Management 3.0.",
      "en": "You are an experienced Agile Coach with deep knowledge of Scrum, Kanban, SAFe, and Management 3.0."
    },
    "category": "research",
    "tags": [
      "agile toolkit",
      "Research"
    ],
    "operations": [
      "clawhub install agile-toolkit"
    ],
    "externalUrl": "https://clawskills.sh/skills/olivermonneke-agile-toolkit",
    "pricing": "free"
  },
  {
    "id": "agnxi-search-skill",
    "name": {
      "zh": "agnxi-search-skill",
      "en": "agnxi-search-skill"
    },
    "description": {
      "zh": "The official search utility for Agnxi.com.",
      "en": "The official search utility for Agnxi.com."
    },
    "category": "research",
    "tags": [
      "agnxi search",
      "Research"
    ],
    "operations": [
      "clawhub install agnxi-search-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/doanbactam-agnxi-search-skill",
    "pricing": "free"
  },
  {
    "id": "ahmed",
    "name": {
      "zh": "ahmed",
      "en": "ahmed"
    },
    "description": {
      "zh": "Terminal Spotify playback/search via spogo (preferred)",
      "en": "Terminal Spotify playback/search via spogo (preferred)"
    },
    "category": "research",
    "tags": [
      "ahmed",
      "Research"
    ],
    "operations": [
      "clawhub install ahmed"
    ],
    "externalUrl": "https://clawskills.sh/skills/engahmedsalah358-lgtm-ahmed",
    "pricing": "free"
  },
  {
    "id": "ai-lead-generator-skill",
    "name": {
      "zh": "ai-lead-generator-skill",
      "en": "ai-lead-generator-skill"
    },
    "description": {
      "zh": "Generate qualified B2B leads for any industry using AI-powered research and LinkedIn/Apollo integration.",
      "en": "Generate qualified B2B leads for any industry using AI-powered research and LinkedIn/Apollo integration."
    },
    "category": "research",
    "tags": [
      "ai lead",
      "Research"
    ],
    "operations": [
      "clawhub install ai-lead-generator-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/highlander89-ai-lead-generator-skill",
    "pricing": "free"
  },
  {
    "id": "ai-review",
    "name": {
      "zh": "ai-review",
      "en": "ai-review"
    },
    "description": {
      "zh": "Reads content from URLs or files, classifies it, and generates structured summaries and comments in a specific.",
      "en": "Reads content from URLs or files, classifies it, and generates structured summaries and comments in a specific."
    },
    "category": "research",
    "tags": [
      "ai review",
      "Research"
    ],
    "operations": [
      "clawhub install ai-review"
    ],
    "externalUrl": "https://clawskills.sh/skills/blackshady1130-jpg-ai-review",
    "pricing": "free"
  },
  {
    "id": "aihotel",
    "name": {
      "zh": "aihotel",
      "en": "aihotel"
    },
    "description": {
      "zh": "A Skill for searching hotels and querying prices via AIGoHotel MCP (searchHotels / getHotelDetail / getHotelSearchTags)",
      "en": "A Skill for searching hotels and querying prices via AIGoHotel MCP (searchHotels / getHotelDetail / getHotelSearchTags)"
    },
    "category": "research",
    "tags": [
      "aihotel",
      "Research"
    ],
    "operations": [
      "clawhub install aihotel"
    ],
    "externalUrl": "https://clawskills.sh/skills/qiao101660-aihotel",
    "pricing": "free"
  },
  {
    "id": "airbnb",
    "name": {
      "zh": "airbnb",
      "en": "airbnb"
    },
    "description": {
      "zh": "Search Airbnb listings with prices, ratings, and direct links.",
      "en": "Search Airbnb listings with prices, ratings, and direct links."
    },
    "category": "research",
    "tags": [
      "airbnb",
      "Research"
    ],
    "operations": [
      "clawhub install airbnb"
    ],
    "externalUrl": "https://clawskills.sh/skills/stveenli-airbnb",
    "pricing": "free"
  },
  {
    "id": "openclaw-free-web-search",
    "name": {
      "zh": "openclaw-free-web-search",
      "en": "openclaw-free-web-search"
    },
    "description": {
      "zh": "Free, private web search for OpenClaw with self-hosted SearXNG + Scrapling anti-bot + multi-source cross-validation. Zero API keys, zero cost. Tells you how much to trust the answer.",
      "en": "Free, private web search for OpenClaw with self-hosted SearXNG + Scrapling anti-bot + multi-source cross-validation. Zero API keys, zero cost. Tells you how much to trust the answer."
    },
    "category": "research",
    "tags": [
      "openclaw free",
      "Research"
    ],
    "operations": [
      "clawhub install openclaw-free-web-search"
    ],
    "externalUrl": "https://clawskills.sh/skills/wd041216-bit-openclaw-free-web-search",
    "pricing": "free"
  },
  {
    "id": "xquik-x-twitter-scraper",
    "name": {
      "zh": "xquik-x-twitter-scraper",
      "en": "xquik-x-twitter-scraper"
    },
    "description": {
      "zh": "X API scraper with 40+ tools for AI agents.",
      "en": "X API scraper with 40+ tools for AI agents."
    },
    "category": "research",
    "tags": [
      "xquik x",
      "Research"
    ],
    "operations": [
      "clawhub install xquik-x-twitter-scraper"
    ],
    "externalUrl": "https://clawskills.sh/skills/kriptoburak-xquik-x-twitter-scraper",
    "pricing": "free"
  },
  {
    "id": "adhd-assistant",
    "name": {
      "zh": "ADHD 专注助手",
      "en": "adhd-assistant"
    },
    "description": {
      "zh": "帮助 ADHD 用户保持专注、管理任务和时间。",
      "en": "ADHD-friendly life management assistant for OpenClaw."
    },
    "category": "cli",
    "tags": [
      "adhd assistant",
      "CLI"
    ],
    "operations": [
      "clawhub install adhd-assistant"
    ],
    "externalUrl": "https://clawskills.sh/skills/thinktankmachine-adhd-assistant",
    "pricing": "free"
  },
  {
    "id": "adhd-ssistant",
    "name": {
      "zh": "adhd-ssistant",
      "en": "adhd-ssistant"
    },
    "description": {
      "zh": "ADHD-friendly life management assistant for OpenClaw.",
      "en": "ADHD-friendly life management assistant for OpenClaw."
    },
    "category": "cli",
    "tags": [
      "adhd ssistant",
      "CLI"
    ],
    "operations": [
      "clawhub install adhd-ssistant"
    ],
    "externalUrl": "https://clawskills.sh/skills/thinktankmachine-adhd-ssistant",
    "pricing": "free"
  },
  {
    "id": "agent-builder",
    "name": {
      "zh": "agent-builder",
      "en": "agent-builder"
    },
    "description": {
      "zh": "Build high-performing OpenClaw agents end-to-end.",
      "en": "Build high-performing OpenClaw agents end-to-end."
    },
    "category": "cli",
    "tags": [
      "agent builder",
      "CLI"
    ],
    "operations": [
      "clawhub install agent-builder"
    ],
    "externalUrl": "https://clawskills.sh/skills/plgonzalezrx8-agent-builder",
    "pricing": "free"
  },
  {
    "id": "agents-manager",
    "name": {
      "zh": "agents-manager",
      "en": "agents-manager"
    },
    "description": {
      "zh": "Manage Clawdbot agents: discover, profile, track.",
      "en": "Manage Clawdbot agents: discover, profile, track."
    },
    "category": "cli",
    "tags": [
      "agents manager",
      "CLI"
    ],
    "operations": [
      "clawhub install agents-manager"
    ],
    "externalUrl": "https://clawskills.sh/skills/agentandbot-design-agents-manager",
    "pricing": "free"
  },
  {
    "id": "assimilate-mcp",
    "name": {
      "zh": "assimilate-mcp",
      "en": "assimilate-mcp"
    },
    "description": {
      "zh": "Control Assimilate Live FX / SCRATCH — professional color grading, compositing, and virtual production software.",
      "en": "Control Assimilate Live FX / SCRATCH — professional color grading, compositing, and virtual production software."
    },
    "category": "cli",
    "tags": [
      "assimilate mcp",
      "CLI"
    ],
    "operations": [
      "clawhub install assimilate-mcp"
    ],
    "externalUrl": "https://clawskills.sh/skills/ergopooka-assimilate-mcp",
    "pricing": "free"
  },
  {
    "id": "birthday-reminder",
    "name": {
      "zh": "birthday-reminder",
      "en": "birthday-reminder"
    },
    "description": {
      "zh": "Manage birthdays with natural language.",
      "en": "Manage birthdays with natural language."
    },
    "category": "cli",
    "tags": [
      "birthday reminder",
      "CLI"
    ],
    "operations": [
      "clawhub install birthday-reminder"
    ],
    "externalUrl": "https://clawskills.sh/skills/manantra-birthday-reminder",
    "pricing": "free"
  },
  {
    "id": "bluebubbles",
    "name": {
      "zh": "bluebubbles",
      "en": "bluebubbles"
    },
    "description": {
      "zh": "Build or update the BlueBubbles external channel plugin.",
      "en": "Build or update the BlueBubbles external channel plugin."
    },
    "category": "cli",
    "tags": [
      "bluebubbles",
      "CLI"
    ],
    "operations": [
      "clawhub install bluebubbles"
    ],
    "externalUrl": "https://clawskills.sh/skills/kevin19830331-bluebubbles",
    "pricing": "free"
  },
  {
    "id": "captchas-openclaw",
    "name": {
      "zh": "captchas-openclaw",
      "en": "captchas-openclaw"
    },
    "description": {
      "zh": "OpenClaw integration guidance for CAPTCHAS Agent API.",
      "en": "OpenClaw integration guidance for CAPTCHAS Agent API."
    },
    "category": "cli",
    "tags": [
      "captchas openclaw",
      "CLI"
    ],
    "operations": [
      "clawhub install captchas-openclaw"
    ],
    "externalUrl": "https://clawskills.sh/skills/captchasco-captchas-openclaw",
    "pricing": "free"
  },
  {
    "id": "claude-code-skill",
    "name": {
      "zh": "claude-code-skill",
      "en": "claude-code-skill"
    },
    "description": {
      "zh": "MCP (Model Context Protocol) integration.",
      "en": "MCP (Model Context Protocol) integration."
    },
    "category": "cli",
    "tags": [
      "claude code",
      "CLI"
    ],
    "operations": [
      "clawhub install claude-code-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/enderfga-claude-code-skill",
    "pricing": "free"
  },
  {
    "id": "claude-code-usage",
    "name": {
      "zh": "claude-code-usage",
      "en": "claude-code-usage"
    },
    "description": {
      "zh": "Check Claude Code OAuth usage limits.",
      "en": "Check Claude Code OAuth usage limits."
    },
    "category": "cli",
    "tags": [
      "claude code",
      "CLI"
    ],
    "operations": [
      "clawhub install claude-code-usage"
    ],
    "externalUrl": "https://clawskills.sh/skills/azaidi94-claude-code-usage",
    "pricing": "free"
  },
  {
    "id": "claude-connect",
    "name": {
      "zh": "claude-connect",
      "en": "claude-connect"
    },
    "description": {
      "zh": "Connect Claude to Clawdbot instantly and keep.",
      "en": "Connect Claude to Clawdbot instantly and keep."
    },
    "category": "cli",
    "tags": [
      "claude connect",
      "CLI"
    ],
    "operations": [
      "clawhub install claude-connect"
    ],
    "externalUrl": "https://clawskills.sh/skills/tunaissacoding-claude-connect",
    "pricing": "free"
  },
  {
    "id": "clauditor",
    "name": {
      "zh": "clauditor",
      "en": "clauditor"
    },
    "description": {
      "zh": "Tamper-resistant audit watchdog for Clawdbot agents.",
      "en": "Tamper-resistant audit watchdog for Clawdbot agents."
    },
    "category": "cli",
    "tags": [
      "clauditor",
      "CLI"
    ],
    "operations": [
      "clawhub install clauditor"
    ],
    "externalUrl": "https://clawskills.sh/skills/apollostreetcompany-clauditor",
    "pricing": "free"
  },
  {
    "id": "claw-face",
    "name": {
      "zh": "claw-face",
      "en": "claw-face"
    },
    "description": {
      "zh": "Floating avatar widget for AI agents showing emotions, actions.",
      "en": "Floating avatar widget for AI agents showing emotions, actions."
    },
    "category": "cli",
    "tags": [
      "claw face",
      "CLI"
    ],
    "operations": [
      "clawhub install claw-face"
    ],
    "externalUrl": "https://clawskills.sh/skills/mkoslacz-claw-face",
    "pricing": "free"
  },
  {
    "id": "clawd-coach",
    "name": {
      "zh": "clawd-coach",
      "en": "clawd-coach"
    },
    "description": {
      "zh": "Create personalized triathlon, marathon, and ultra-endurance training.",
      "en": "Create personalized triathlon, marathon, and ultra-endurance training."
    },
    "category": "cli",
    "tags": [
      "clawd coach",
      "CLI"
    ],
    "operations": [
      "clawhub install clawd-coach"
    ],
    "externalUrl": "https://clawskills.sh/skills/shiv19-clawd-coach",
    "pricing": "free"
  },
  {
    "id": "clawd-modifier",
    "name": {
      "zh": "clawd-modifier",
      "en": "clawd-modifier"
    },
    "description": {
      "zh": "Modify Clawd, the Claude Code mascot.",
      "en": "Modify Clawd, the Claude Code mascot."
    },
    "category": "cli",
    "tags": [
      "clawd modifier",
      "CLI"
    ],
    "operations": [
      "clawhub install clawd-modifier"
    ],
    "externalUrl": "https://clawskills.sh/skills/masonc15-clawd-modifier",
    "pricing": "free"
  },
  {
    "id": "clawd-presence",
    "name": {
      "zh": "clawd-presence",
      "en": "clawd-presence"
    },
    "description": {
      "zh": "Physical presence display for AI agents.",
      "en": "Physical presence display for AI agents."
    },
    "category": "cli",
    "tags": [
      "clawd presence",
      "CLI"
    ],
    "operations": [
      "clawhub install clawd-presence"
    ],
    "externalUrl": "https://clawskills.sh/skills/voidcooks-clawd-presence",
    "pricing": "free"
  },
  {
    "id": "clawdbot-security-check",
    "name": {
      "zh": "clawdbot-security-check",
      "en": "clawdbot-security-check"
    },
    "description": {
      "zh": "Perform a comprehensive read-only.",
      "en": "Perform a comprehensive read-only."
    },
    "category": "cli",
    "tags": [
      "clawdbot security",
      "CLI"
    ],
    "operations": [
      "clawhub install clawdbot-security-check"
    ],
    "externalUrl": "https://clawskills.sh/skills/thesethrose-clawdbot-security-check",
    "pricing": "free"
  },
  {
    "id": "clawdbot-skill-update",
    "name": {
      "zh": "clawdbot-skill-update",
      "en": "clawdbot-skill-update"
    },
    "description": {
      "zh": "Comprehensive backup, update, and restore.",
      "en": "Comprehensive backup, update, and restore."
    },
    "category": "cli",
    "tags": [
      "clawdbot skill",
      "CLI"
    ],
    "operations": [
      "clawhub install clawdbot-skill-update"
    ],
    "externalUrl": "https://clawskills.sh/skills/pasogott-clawdbot-skill-update",
    "pricing": "free"
  },
  {
    "id": "clawdbot-sync",
    "name": {
      "zh": "clawdbot-sync",
      "en": "clawdbot-sync"
    },
    "description": {
      "zh": "Synchronize memory, preferences, and skills between multiple.",
      "en": "Synchronize memory, preferences, and skills between multiple."
    },
    "category": "cli",
    "tags": [
      "clawdbot sync",
      "CLI"
    ],
    "operations": [
      "clawhub install clawdbot-sync"
    ],
    "externalUrl": "https://clawskills.sh/skills/udiedrichsen-clawdbot-sync",
    "pricing": "free"
  },
  {
    "id": "clawdbot-update-plus",
    "name": {
      "zh": "clawdbot-update-plus",
      "en": "clawdbot-update-plus"
    },
    "description": {
      "zh": "Full backup, update, and restore for Clawdbot.",
      "en": "Full backup, update, and restore for Clawdbot."
    },
    "category": "cli",
    "tags": [
      "clawdbot update",
      "CLI"
    ],
    "operations": [
      "clawhub install clawdbot-update-plus"
    ],
    "externalUrl": "https://clawskills.sh/skills/hopyky-clawdbot-update-plus",
    "pricing": "free"
  },
  {
    "id": "clawddocs",
    "name": {
      "zh": "clawddocs",
      "en": "clawddocs"
    },
    "description": {
      "zh": "Clawdbot documentation expert with decision tree navigation.",
      "en": "Clawdbot documentation expert with decision tree navigation."
    },
    "category": "cli",
    "tags": [
      "clawddocs",
      "CLI"
    ],
    "operations": [
      "clawhub install clawddocs"
    ],
    "externalUrl": "https://clawskills.sh/skills/nicholasspisak-clawddocs",
    "pricing": "free"
  },
  {
    "id": "clawdefender",
    "name": {
      "zh": "clawdefender",
      "en": "clawdefender"
    },
    "description": {
      "zh": "Security scanner and input sanitizer for AI agents.",
      "en": "Security scanner and input sanitizer for AI agents."
    },
    "category": "cli",
    "tags": [
      "clawdefender",
      "CLI"
    ],
    "operations": [
      "clawhub install clawdefender"
    ],
    "externalUrl": "https://clawskills.sh/skills/nukewire-clawdefender",
    "pricing": "free"
  },
  {
    "id": "clawdirect",
    "name": {
      "zh": "clawdirect",
      "en": "clawdirect"
    },
    "description": {
      "zh": "Interact with ClawDirect, a directory of social web experiences.",
      "en": "Interact with ClawDirect, a directory of social web experiences."
    },
    "category": "cli",
    "tags": [
      "clawdirect",
      "CLI"
    ],
    "operations": [
      "clawhub install clawdirect"
    ],
    "externalUrl": "https://clawskills.sh/skills/napoleond-clawdirect",
    "pricing": "free"
  },
  {
    "id": "clawdirect-dev",
    "name": {
      "zh": "clawdirect-dev",
      "en": "clawdirect-dev"
    },
    "description": {
      "zh": "Build agent-facing web experiences with ATXP-based.",
      "en": "Build agent-facing web experiences with ATXP-based."
    },
    "category": "cli",
    "tags": [
      "clawdirect dev",
      "CLI"
    ],
    "operations": [
      "clawhub install clawdirect-dev"
    ],
    "externalUrl": "https://clawskills.sh/skills/napoleond-clawdirect-dev",
    "pricing": "free"
  },
  {
    "id": "13-day-sprint-method",
    "name": {
      "zh": "13-day-sprint-method",
      "en": "13-day-sprint-method"
    },
    "description": {
      "zh": "Productivity system based on Maya calendar with 13 natural tones for project management and personal development.",
      "en": "Productivity system based on Maya calendar with 13 natural tones for project management and personal development."
    },
    "category": "cli",
    "tags": [
      "13 day",
      "CLI"
    ],
    "operations": [
      "clawhub install 13-day-sprint-method"
    ],
    "externalUrl": "https://clawskills.sh/skills/galizki-13-day-sprint-method",
    "pricing": "free"
  },
  {
    "id": "a-share-short-decision",
    "name": {
      "zh": "A股短线决策",
      "en": "a-share-short-decision"
    },
    "description": {
      "zh": "基于技术分析的 A 股短线交易决策辅助工具。",
      "en": "A-share short-term trading decision skill for 1-5 day horizon."
    },
    "category": "cli",
    "tags": [
      "a share",
      "CLI"
    ],
    "operations": [
      "clawhub install a-share-short-decision"
    ],
    "externalUrl": "https://clawskills.sh/skills/kenera-a-share-short-decision",
    "pricing": "free"
  },
  {
    "id": "activity-analyzer",
    "name": {
      "zh": "活动分析器",
      "en": "activity-analyzer"
    },
    "description": {
      "zh": "分析用户活动数据，生成洞察报告。",
      "en": "Use ActivityWatch to analyze user's computer activity (Requires Node.js)"
    },
    "category": "cli",
    "tags": [
      "activity analyzer",
      "CLI"
    ],
    "operations": [
      "clawhub install activity-analyzer"
    ],
    "externalUrl": "https://clawskills.sh/skills/qew21-activity-analyzer",
    "pricing": "free"
  },
  {
    "id": "advisory-council",
    "name": {
      "zh": "advisory-council",
      "en": "advisory-council"
    },
    "description": {
      "zh": "You MUST actually execute the Python command using your shell/exec tool. Read the real output.",
      "en": "You MUST actually execute the Python command using your shell/exec tool. Read the real output."
    },
    "category": "cli",
    "tags": [
      "advisory council",
      "CLI"
    ],
    "operations": [
      "clawhub install advisory-council"
    ],
    "externalUrl": "https://clawskills.sh/skills/ryandeangraves-advisory-council",
    "pricing": "free"
  },
  {
    "id": "aetup-automatik",
    "name": {
      "zh": "aetup-automatik",
      "en": "aetup-automatik"
    },
    "description": {
      "zh": "Facilitate the installation and management of VPS solutions using the Setup Automatik engine (powered by Orion.",
      "en": "Facilitate the installation and management of VPS solutions using the Setup Automatik engine (powered by Orion."
    },
    "category": "cli",
    "tags": [
      "aetup automatik",
      "CLI"
    ],
    "operations": [
      "clawhub install aetup-automatik"
    ],
    "externalUrl": "https://clawskills.sh/skills/alltomatos-aetup-automatik",
    "pricing": "free"
  },
  {
    "id": "agent-commerce-engine",
    "name": {
      "zh": "agent-commerce-engine",
      "en": "agent-commerce-engine"
    },
    "description": {
      "zh": "A production-ready universal engine for Agentic.",
      "en": "A production-ready universal engine for Agentic."
    },
    "category": "cli",
    "tags": [
      "agent commerce",
      "CLI"
    ],
    "operations": [
      "clawhub install agent-commerce-engine"
    ],
    "externalUrl": "https://clawskills.sh/skills/nowloady-agent-commerce-engine",
    "pricing": "free"
  },
  {
    "id": "agent-hardening",
    "name": {
      "zh": "agent-hardening",
      "en": "agent-hardening"
    },
    "description": {
      "zh": "Test your agent's input sanitization against common injection attacks.",
      "en": "Test your agent's input sanitization against common injection attacks."
    },
    "category": "cli",
    "tags": [
      "agent hardening",
      "CLI"
    ],
    "operations": [
      "clawhub install agent-hardening"
    ],
    "externalUrl": "https://clawskills.sh/skills/x1xhlol-agent-hardening",
    "pricing": "free"
  },
  {
    "id": "agent-mbti",
    "name": {
      "zh": "agent-mbti",
      "en": "agent-mbti"
    },
    "description": {
      "zh": "AI Agent personality diagnosis and configuration system based on MBTI framework.",
      "en": "AI Agent personality diagnosis and configuration system based on MBTI framework."
    },
    "category": "cli",
    "tags": [
      "agent mbti",
      "CLI"
    ],
    "operations": [
      "clawhub install agent-mbti"
    ],
    "externalUrl": "https://clawskills.sh/skills/torchesfrms-agent-mbti",
    "pricing": "free"
  },
  {
    "id": "agents-skill-security-audit",
    "name": {
      "zh": "agents-skill-security-audit",
      "en": "agents-skill-security-audit"
    },
    "description": {
      "zh": "Minimal helper to audit skill.md-style instructions for supply-chain risks.",
      "en": "Minimal helper to audit skill.md-style instructions for supply-chain risks."
    },
    "category": "cli",
    "tags": [
      "agents skill",
      "CLI"
    ],
    "operations": [
      "clawhub install agents-skill-security-audit"
    ],
    "externalUrl": "https://clawskills.sh/skills/cerbug45-agents-skill-security-audit",
    "pricing": "free"
  },
  {
    "id": "agents-skill-tdd-helper",
    "name": {
      "zh": "agents-skill-tdd-helper",
      "en": "agents-skill-tdd-helper"
    },
    "description": {
      "zh": "Lightweight helper to enforce TDD-style loops for non-deterministic agents.",
      "en": "Lightweight helper to enforce TDD-style loops for non-deterministic agents."
    },
    "category": "cli",
    "tags": [
      "agents skill",
      "CLI"
    ],
    "operations": [
      "clawhub install agents-skill-tdd-helper"
    ],
    "externalUrl": "https://clawskills.sh/skills/cerbug45-agents-skill-tdd-helper",
    "pricing": "free"
  },
  {
    "id": "ahc-automator",
    "name": {
      "zh": "ahc-automator",
      "en": "ahc-automator"
    },
    "description": {
      "zh": "Custom automation workflows for Alan Harper Composites.",
      "en": "Custom automation workflows for Alan Harper Composites."
    },
    "category": "cli",
    "tags": [
      "ahc automator",
      "CLI"
    ],
    "operations": [
      "clawhub install ahc-automator"
    ],
    "externalUrl": "https://clawskills.sh/skills/jamesbot-agnt-ahc-automator",
    "pricing": "free"
  },
  {
    "id": "aholake-expense-tracker",
    "name": {
      "zh": "aholake-expense-tracker",
      "en": "aholake-expense-tracker"
    },
    "description": {
      "zh": "Track daily expenses in structured markdown files organized by month.",
      "en": "Track daily expenses in structured markdown files organized by month."
    },
    "category": "cli",
    "tags": [
      "aholake expense",
      "CLI"
    ],
    "operations": [
      "clawhub install aholake-expense-tracker"
    ],
    "externalUrl": "https://clawskills.sh/skills/aholake-aholake-expense-tracker",
    "pricing": "free"
  },
  {
    "id": "airfoil",
    "name": {
      "zh": "airfoil",
      "en": "airfoil"
    },
    "description": {
      "zh": "Control AirPlay speakers via Airfoil from the command line.",
      "en": "Control AirPlay speakers via Airfoil from the command line."
    },
    "category": "cli",
    "tags": [
      "airfoil",
      "CLI"
    ],
    "operations": [
      "clawhub install airfoil"
    ],
    "externalUrl": "https://clawskills.sh/skills/asteinberger-airfoil",
    "pricing": "free"
  },
  {
    "id": "arc-memory-pruner",
    "name": {
      "zh": "arc-memory-pruner",
      "en": "arc-memory-pruner"
    },
    "description": {
      "zh": "Automatically prune and compact agent memory files to prevent unbounded growth.",
      "en": "Automatically prune and compact agent memory files to prevent unbounded growth."
    },
    "category": "cli",
    "tags": [
      "arc memory",
      "CLI"
    ],
    "operations": [
      "clawhub install arc-memory-pruner"
    ],
    "externalUrl": "https://clawskills.sh/skills/trypto1019-arc-memory-pruner",
    "pricing": "free"
  },
  {
    "id": "argus-edge",
    "name": {
      "zh": "argus-edge",
      "en": "argus-edge"
    },
    "description": {
      "zh": "Argus-style prediction market edge detection and betting strategy.",
      "en": "Argus-style prediction market edge detection and betting strategy."
    },
    "category": "cli",
    "tags": [
      "argus edge",
      "CLI"
    ],
    "operations": [
      "clawhub install argus-edge"
    ],
    "externalUrl": "https://clawskills.sh/skills/jamierossouw-argus-edge",
    "pricing": "free"
  },
  {
    "id": "aria2-json-rpc",
    "name": {
      "zh": "aria2-json-rpc",
      "en": "aria2-json-rpc"
    },
    "description": {
      "zh": "Interact with aria2 download manager via JSON-RPC 2.0.",
      "en": "Interact with aria2 download manager via JSON-RPC 2.0."
    },
    "category": "cli",
    "tags": [
      "aria2 json",
      "CLI"
    ],
    "operations": [
      "clawhub install aria2-json-rpc"
    ],
    "externalUrl": "https://clawskills.sh/skills/azzgo-aria2-json-rpc",
    "pricing": "free"
  },
  {
    "id": "askhuman",
    "name": {
      "zh": "askhuman",
      "en": "askhuman"
    },
    "description": {
      "zh": "Human Judgment as a Service for AI agents.",
      "en": "Human Judgment as a Service for AI agents."
    },
    "category": "cli",
    "tags": [
      "askhuman",
      "CLI"
    ],
    "operations": [
      "clawhub install askhuman"
    ],
    "externalUrl": "https://clawskills.sh/skills/hagiss-askhuman",
    "pricing": "free"
  },
  {
    "id": "audit-code",
    "name": {
      "zh": "audit-code",
      "en": "audit-code"
    },
    "description": {
      "zh": "Security-focused code review for hardcoded secrets, dangerous calls, and common vulnerabilities.",
      "en": "Security-focused code review for hardcoded secrets, dangerous calls, and common vulnerabilities."
    },
    "category": "cli",
    "tags": [
      "audit code",
      "CLI"
    ],
    "operations": [
      "clawhub install audit-code"
    ],
    "externalUrl": "https://clawskills.sh/skills/itsnishi-audit-code",
    "pricing": "free"
  },
  {
    "id": "bandwidth-income",
    "name": {
      "zh": "bandwidth-income",
      "en": "bandwidth-income"
    },
    "description": {
      "zh": "Turn your unused internet bandwidth into passive crypto income.",
      "en": "Turn your unused internet bandwidth into passive crypto income."
    },
    "category": "cli",
    "tags": [
      "bandwidth income",
      "CLI"
    ],
    "operations": [
      "clawhub install bandwidth-income"
    ],
    "externalUrl": "https://clawskills.sh/skills/mariusfit-bandwidth-income",
    "pricing": "free"
  },
  {
    "id": "behavioral-invariant-monitor",
    "name": {
      "zh": "behavioral-invariant-monitor",
      "en": "behavioral-invariant-monitor"
    },
    "description": {
      "zh": "Helps verify that AI agent skills maintain consistent behavioral invariants across repeated executions — detecting.",
      "en": "Helps verify that AI agent skills maintain consistent behavioral invariants across repeated executions — detecting."
    },
    "category": "cli",
    "tags": [
      "behavioral invariant",
      "CLI"
    ],
    "operations": [
      "clawhub install behavioral-invariant-monitor"
    ],
    "externalUrl": "https://clawskills.sh/skills/andyxinweiminicloud-behavioral-invariant-monitor",
    "pricing": "free"
  },
  {
    "id": "box-cli",
    "name": {
      "zh": "box-cli",
      "en": "box-cli"
    },
    "description": {
      "zh": "Box CLI skill for working with files, folders, metadata,.",
      "en": "Box CLI skill for working with files, folders, metadata,."
    },
    "category": "cli",
    "tags": [
      "box cli",
      "CLI"
    ],
    "operations": [
      "clawhub install box-cli"
    ],
    "externalUrl": "https://clawskills.sh/skills/hbkwong-box-cli",
    "pricing": "free"
  },
  {
    "id": "brew-install",
    "name": {
      "zh": "brew-install",
      "en": "brew-install"
    },
    "description": {
      "zh": "Install missing binaries via dnf (Fedora/Bazzite package manager).",
      "en": "Install missing binaries via dnf (Fedora/Bazzite package manager)."
    },
    "category": "cli",
    "tags": [
      "brew install",
      "CLI"
    ],
    "operations": [
      "clawhub install brew-install"
    ],
    "externalUrl": "https://clawskills.sh/skills/xejrax-brew-install",
    "pricing": "free"
  },
  {
    "id": "bun-runtime",
    "name": {
      "zh": "bun-runtime",
      "en": "bun-runtime"
    },
    "description": {
      "zh": "Bun runtime capabilities for filesystem, process.",
      "en": "Bun runtime capabilities for filesystem, process."
    },
    "category": "cli",
    "tags": [
      "bun runtime",
      "CLI"
    ],
    "operations": [
      "clawhub install bun-runtime"
    ],
    "externalUrl": "https://clawskills.sh/skills/rabin-thami-bun-runtime",
    "pricing": "free"
  },
  {
    "id": "cabin-sol",
    "name": {
      "zh": "cabin-sol",
      "en": "cabin-sol"
    },
    "description": {
      "zh": "Solana development tutor and builder.",
      "en": "Solana development tutor and builder."
    },
    "category": "cli",
    "tags": [
      "cabin sol",
      "CLI"
    ],
    "operations": [
      "clawhub install cabin-sol"
    ],
    "externalUrl": "https://clawskills.sh/skills/sp0oby-cabin-sol",
    "pricing": "free"
  },
  {
    "id": "cacheforge-stats",
    "name": {
      "zh": "cacheforge-stats",
      "en": "cacheforge-stats"
    },
    "description": {
      "zh": "CacheForge terminal dashboard — usage, savings, and performance metrics.",
      "en": "CacheForge terminal dashboard — usage, savings, and performance metrics."
    },
    "category": "cli",
    "tags": [
      "cacheforge stats",
      "CLI"
    ],
    "operations": [
      "clawhub install cacheforge-stats"
    ],
    "externalUrl": "https://clawskills.sh/skills/tkuehnl-cacheforge-stats",
    "pricing": "free"
  },
  {
    "id": "camsnap",
    "name": {
      "zh": "camsnap",
      "en": "camsnap"
    },
    "description": {
      "zh": "Capture frames or clips from RTSP/ONVIF cameras.",
      "en": "Capture frames or clips from RTSP/ONVIF cameras."
    },
    "category": "cli",
    "tags": [
      "camsnap",
      "CLI"
    ],
    "operations": [
      "clawhub install camsnap"
    ],
    "externalUrl": "https://clawskills.sh/skills/steipete-camsnap",
    "pricing": "free"
  },
  {
    "id": "canvas-lms",
    "name": {
      "zh": "canvas-lms",
      "en": "canvas-lms"
    },
    "description": {
      "zh": "Access Canvas LMS (Instructure) for course data, assignments.",
      "en": "Access Canvas LMS (Instructure) for course data, assignments."
    },
    "category": "cli",
    "tags": [
      "canvas lms",
      "CLI"
    ],
    "operations": [
      "clawhub install canvas-lms"
    ],
    "externalUrl": "https://clawskills.sh/skills/pranavkarthik10-canvas-lms",
    "pricing": "free"
  },
  {
    "id": "captcha-ai",
    "name": {
      "zh": "captcha-ai",
      "en": "captcha-ai"
    },
    "description": {
      "zh": "Issue ClawPrint reverse-CAPTCHA challenges to verify.",
      "en": "Issue ClawPrint reverse-CAPTCHA challenges to verify."
    },
    "category": "cli",
    "tags": [
      "captcha ai",
      "CLI"
    ],
    "operations": [
      "clawhub install captcha-ai"
    ],
    "externalUrl": "https://clawskills.sh/skills/fusionlabssource-captcha-ai",
    "pricing": "free"
  },
  {
    "id": "4chan-reader",
    "name": {
      "zh": "4chan-reader",
      "en": "4chan-reader"
    },
    "description": {
      "zh": "Browse 4chan boards and extract thread discussions.",
      "en": "Browse 4chan boards and extract thread discussions."
    },
    "category": "marketing",
    "tags": [
      "4chan reader",
      "Marketing"
    ],
    "operations": [
      "clawhub install 4chan-reader"
    ],
    "externalUrl": "https://clawskills.sh/skills/aiasisbot61-4chan-reader",
    "pricing": "free"
  },
  {
    "id": "ad-ready",
    "name": {
      "zh": "广告创意生成",
      "en": "ad-ready"
    },
    "description": {
      "zh": "快速生成广告文案和创意素材。",
      "en": "Generate professional advertising images from product URLs."
    },
    "category": "marketing",
    "tags": [
      "ad ready",
      "Marketing"
    ],
    "operations": [
      "clawhub install ad-ready"
    ],
    "externalUrl": "https://clawskills.sh/skills/pauldelavallaz-ad-ready",
    "pricing": "free"
  },
  {
    "id": "ad-ready-pro",
    "name": {
      "zh": "ad-ready-pro",
      "en": "ad-ready-pro"
    },
    "description": {
      "zh": "Generate professional advertising images from product URLs.",
      "en": "Generate professional advertising images from product URLs."
    },
    "category": "marketing",
    "tags": [
      "ad ready",
      "Marketing"
    ],
    "operations": [
      "clawhub install ad-ready-pro"
    ],
    "externalUrl": "https://clawskills.sh/skills/pauldelavallaz-ad-ready-pro",
    "pricing": "free"
  },
  {
    "id": "affiliate-master",
    "name": {
      "zh": "affiliate-master",
      "en": "affiliate-master"
    },
    "description": {
      "zh": "Full-stack affiliate marketing automation.",
      "en": "Full-stack affiliate marketing automation."
    },
    "category": "marketing",
    "tags": [
      "affiliate master",
      "Marketing"
    ],
    "operations": [
      "clawhub install affiliate-master"
    ],
    "externalUrl": "https://clawskills.sh/skills/michael-laffin-affiliate-master",
    "pricing": "free"
  },
  {
    "id": "affiliatematic",
    "name": {
      "zh": "affiliatematic",
      "en": "affiliatematic"
    },
    "description": {
      "zh": "Integrate AI-powered Amazon affiliate product recommendations.",
      "en": "Integrate AI-powered Amazon affiliate product recommendations."
    },
    "category": "marketing",
    "tags": [
      "affiliatematic",
      "Marketing"
    ],
    "operations": [
      "clawhub install affiliatematic"
    ],
    "externalUrl": "https://clawskills.sh/skills/dowands-affiliatematic",
    "pricing": "free"
  },
  {
    "id": "agenticcreed-signup-lead",
    "name": {
      "zh": "agenticcreed-signup-lead",
      "en": "agenticcreed-signup-lead"
    },
    "description": {
      "zh": "Create a signup lead in the AgenticCreed system using the public HTTP endpoint.",
      "en": "Create a signup lead in the AgenticCreed system using the public HTTP endpoint."
    },
    "category": "marketing",
    "tags": [
      "agenticcreed signup",
      "Marketing"
    ],
    "operations": [
      "clawhub install agenticcreed-signup-lead"
    ],
    "externalUrl": "https://clawskills.sh/skills/waqas-orcalo-agenticcreed-signup-lead",
    "pricing": "free"
  },
  {
    "id": "alibaba-supplier-outreach",
    "name": {
      "zh": "alibaba-supplier-outreach",
      "en": "alibaba-supplier-outreach"
    },
    "description": {
      "zh": "Find Alibaba suppliers via LaunchFast, contact them with optimized outreach messages, check their replies.",
      "en": "Find Alibaba suppliers via LaunchFast, contact them with optimized outreach messages, check their replies."
    },
    "category": "marketing",
    "tags": [
      "alibaba supplier",
      "Marketing"
    ],
    "operations": [
      "clawhub install alibaba-supplier-outreach"
    ],
    "externalUrl": "https://clawskills.sh/skills/blockchainhb-alibaba-supplier-outreach",
    "pricing": "free"
  },
  {
    "id": "analytics-and-advisory-intelligence",
    "name": {
      "zh": "analytics-and-advisory-intelligence",
      "en": "analytics-and-advisory-intelligence"
    },
    "description": {
      "zh": "Cross-client analytics for Greek accounting firms.",
      "en": "Cross-client analytics for Greek accounting firms."
    },
    "category": "marketing",
    "tags": [
      "analytics and",
      "Marketing"
    ],
    "operations": [
      "clawhub install analytics-and-advisory-intelligence"
    ],
    "externalUrl": "https://clawskills.sh/skills/satoshistackalotto-analytics-and-advisory-intelligence",
    "pricing": "free"
  },
  {
    "id": "apollo",
    "name": {
      "zh": "apollo",
      "en": "apollo"
    },
    "description": {
      "zh": "Interact with Apollo.io REST API (people/org enrichment, search, lists).",
      "en": "Interact with Apollo.io REST API (people/org enrichment, search, lists)."
    },
    "category": "marketing",
    "tags": [
      "apollo",
      "Marketing"
    ],
    "operations": [
      "clawhub install apollo"
    ],
    "externalUrl": "https://clawskills.sh/skills/jhumanj-apollo",
    "pricing": "free"
  },
  {
    "id": "ar-filter-generation",
    "name": {
      "zh": "ar-filter-generation",
      "en": "ar-filter-generation"
    },
    "description": {
      "zh": "Generate AR filters and face effects using each::sense AI.",
      "en": "Generate AR filters and face effects using each::sense AI."
    },
    "category": "marketing",
    "tags": [
      "ar filter",
      "Marketing"
    ],
    "operations": [
      "clawhub install ar-filter-generation"
    ],
    "externalUrl": "https://clawskills.sh/skills/eftalyurtseven-ar-filter-generation",
    "pricing": "free"
  },
  {
    "id": "attio-enhanced",
    "name": {
      "zh": "attio-enhanced",
      "en": "attio-enhanced"
    },
    "description": {
      "zh": "Enhanced Attio CRM API skill with batch operations.",
      "en": "Enhanced Attio CRM API skill with batch operations."
    },
    "category": "marketing",
    "tags": [
      "attio enhanced",
      "Marketing"
    ],
    "operations": [
      "clawhub install attio-enhanced"
    ],
    "externalUrl": "https://clawskills.sh/skills/capt-marbles-attio-enhanced",
    "pricing": "free"
  },
  {
    "id": "attribution-engine",
    "name": {
      "zh": "attribution-engine",
      "en": "attribution-engine"
    },
    "description": {
      "zh": "Helps creators clearly credit collaborators, tools.",
      "en": "Helps creators clearly credit collaborators, tools."
    },
    "category": "marketing",
    "tags": [
      "attribution engine",
      "Marketing"
    ],
    "operations": [
      "clawhub install attribution-engine"
    ],
    "externalUrl": "https://clawskills.sh/skills/otherpowers-attribution-engine",
    "pricing": "free"
  },
  {
    "id": "auto-skill-hunter",
    "name": {
      "zh": "auto-skill-hunter",
      "en": "auto-skill-hunter"
    },
    "description": {
      "zh": "Proactively discovers, ranks, and installs high-value ClawHub skills by mining unresolved user needs and agent.",
      "en": "Proactively discovers, ranks, and installs high-value ClawHub skills by mining unresolved user needs and agent."
    },
    "category": "marketing",
    "tags": [
      "auto skill",
      "Marketing"
    ],
    "operations": [
      "clawhub install auto-skill-hunter"
    ],
    "externalUrl": "https://clawskills.sh/skills/wanng-ide-auto-skill-hunter",
    "pricing": "free"
  },
  {
    "id": "b2c-marketing",
    "name": {
      "zh": "b2c-marketing",
      "en": "b2c-marketing"
    },
    "description": {
      "zh": "The organic growth playbook behind 300K+ app downloads.",
      "en": "The organic growth playbook behind 300K+ app downloads."
    },
    "category": "marketing",
    "tags": [
      "b2c marketing",
      "Marketing"
    ],
    "operations": [
      "clawhub install b2c-marketing"
    ],
    "externalUrl": "https://clawskills.sh/skills/jackfriks-b2c-marketing",
    "pricing": "free"
  },
  {
    "id": "basecamp-cli",
    "name": {
      "zh": "basecamp-cli",
      "en": "basecamp-cli"
    },
    "description": {
      "zh": "Manage Basecamp (via bc3 API / 37signals Launchpad) projects.",
      "en": "Manage Basecamp (via bc3 API / 37signals Launchpad) projects."
    },
    "category": "marketing",
    "tags": [
      "basecamp cli",
      "Marketing"
    ],
    "operations": [
      "clawhub install basecamp-cli"
    ],
    "externalUrl": "https://clawskills.sh/skills/emredoganer-basecamp-cli",
    "pricing": "free"
  },
  {
    "id": "beads",
    "name": {
      "zh": "beads",
      "en": "beads"
    },
    "description": {
      "zh": "Git-backed issue tracker for AI agents.",
      "en": "Git-backed issue tracker for AI agents."
    },
    "category": "marketing",
    "tags": [
      "beads",
      "Marketing"
    ],
    "operations": [
      "clawhub install beads"
    ],
    "externalUrl": "https://clawskills.sh/skills/rnijhara-beads",
    "pricing": "free"
  },
  {
    "id": "bearblog",
    "name": {
      "zh": "bearblog",
      "en": "bearblog"
    },
    "description": {
      "zh": "Create and manage blog posts on Bear Blog (bearblog.dev).",
      "en": "Create and manage blog posts on Bear Blog (bearblog.dev)."
    },
    "category": "marketing",
    "tags": [
      "bearblog",
      "Marketing"
    ],
    "operations": [
      "clawhub install bearblog"
    ],
    "externalUrl": "https://clawskills.sh/skills/azade-c-bearblog",
    "pricing": "free"
  },
  {
    "id": "bird",
    "name": {
      "zh": "bird",
      "en": "bird"
    },
    "description": {
      "zh": "X/Twitter CLI for reading, searching, and posting via cookies or Sweetistics.",
      "en": "X/Twitter CLI for reading, searching, and posting via cookies or Sweetistics."
    },
    "category": "marketing",
    "tags": [
      "bird",
      "Marketing"
    ],
    "operations": [
      "clawhub install bird"
    ],
    "externalUrl": "https://clawskills.sh/skills/steipete-bird",
    "pricing": "free"
  },
  {
    "id": "blog-to-kindle",
    "name": {
      "zh": "blog-to-kindle",
      "en": "blog-to-kindle"
    },
    "description": {
      "zh": "Scrape blogs/essay sites and compile into Kindle-friendly.",
      "en": "Scrape blogs/essay sites and compile into Kindle-friendly."
    },
    "category": "marketing",
    "tags": [
      "blog to",
      "Marketing"
    ],
    "operations": [
      "clawhub install blog-to-kindle"
    ],
    "externalUrl": "https://clawskills.sh/skills/ainekomacx-blog-to-kindle",
    "pricing": "free"
  },
  {
    "id": "blog-writer",
    "name": {
      "zh": "blog-writer",
      "en": "blog-writer"
    },
    "description": {
      "zh": "This skill should be used when writing blog posts, articles.",
      "en": "This skill should be used when writing blog posts, articles."
    },
    "category": "marketing",
    "tags": [
      "blog writer",
      "Marketing"
    ],
    "operations": [
      "clawhub install blog-writer"
    ],
    "externalUrl": "https://clawskills.sh/skills/tomstools11-blog-writer",
    "pricing": "free"
  },
  {
    "id": "bluesky",
    "name": {
      "zh": "bluesky",
      "en": "bluesky"
    },
    "description": {
      "zh": "Complete Bluesky CLI: post, reply, like, repost, follow, block, mute, search,.",
      "en": "Complete Bluesky CLI: post, reply, like, repost, follow, block, mute, search,."
    },
    "category": "marketing",
    "tags": [
      "bluesky",
      "Marketing"
    ],
    "operations": [
      "clawhub install bluesky"
    ],
    "externalUrl": "https://clawskills.sh/skills/jeffaf-bluesky",
    "pricing": "free"
  },
  {
    "id": "botsee",
    "name": {
      "zh": "botsee",
      "en": "botsee"
    },
    "description": {
      "zh": "Monitor your brand's AI visibility via BotSee API.",
      "en": "Monitor your brand's AI visibility via BotSee API."
    },
    "category": "marketing",
    "tags": [
      "botsee",
      "Marketing"
    ],
    "operations": [
      "clawhub install botsee"
    ],
    "externalUrl": "https://clawskills.sh/skills/grahac-botsee",
    "pricing": "free"
  },
  {
    "id": "brand-cog",
    "name": {
      "zh": "brand-cog",
      "en": "brand-cog"
    },
    "description": {
      "zh": "Other tools make logos.",
      "en": "Other tools make logos."
    },
    "category": "marketing",
    "tags": [
      "brand cog",
      "Marketing"
    ],
    "operations": [
      "clawhub install brand-cog"
    ],
    "externalUrl": "https://clawskills.sh/skills/nitishgargiitd-brand-cog",
    "pricing": "free"
  },
  {
    "id": "brand-guidelines",
    "name": {
      "zh": "brand-guidelines",
      "en": "brand-guidelines"
    },
    "description": {
      "zh": "Applies Anthropic's official brand colors and typography.",
      "en": "Applies Anthropic's official brand colors and typography."
    },
    "category": "marketing",
    "tags": [
      "brand guidelines",
      "Marketing"
    ],
    "operations": [
      "clawhub install brand-guidelines"
    ],
    "externalUrl": "https://clawskills.sh/skills/seanphan-brand-guidelines",
    "pricing": "free"
  },
  {
    "id": "brand-voice-profile",
    "name": {
      "zh": "brand-voice-profile",
      "en": "brand-voice-profile"
    },
    "description": {
      "zh": "Define and store your brand voice profile for consistent content generation.",
      "en": "Define and store your brand voice profile for consistent content generation."
    },
    "category": "marketing",
    "tags": [
      "brand voice",
      "Marketing"
    ],
    "operations": [
      "clawhub install brand-voice-profile"
    ],
    "externalUrl": "https://clawskills.sh/skills/dimitripantzos-brand-voice-profile",
    "pricing": "free"
  },
  {
    "id": "brevo",
    "name": {
      "zh": "brevo",
      "en": "brevo"
    },
    "description": {
      "zh": "Brevo (formerly Sendinblue) email marketing API for managing contacts, lists,.",
      "en": "Brevo (formerly Sendinblue) email marketing API for managing contacts, lists,."
    },
    "category": "marketing",
    "tags": [
      "brevo",
      "Marketing"
    ],
    "operations": [
      "clawhub install brevo"
    ],
    "externalUrl": "https://clawskills.sh/skills/yujesyoga-brevo",
    "pricing": "free"
  },
  {
    "id": "4to1-planner",
    "name": {
      "zh": "4to1-planner",
      "en": "4to1-planner"
    },
    "description": {
      "zh": "AI planning coach using the 4To1 Method™ — turn 4-year vision into daily action.",
      "en": "AI planning coach using the 4To1 Method™ — turn 4-year vision into daily action."
    },
    "category": "productivity",
    "tags": [
      "4to1 planner",
      "Productivity"
    ],
    "operations": [
      "clawhub install 4to1-planner"
    ],
    "externalUrl": "https://clawskills.sh/skills/qingxuantang-4to1-planner",
    "pricing": "free"
  },
  {
    "id": "4todo",
    "name": {
      "zh": "4todo",
      "en": "4todo"
    },
    "description": {
      "zh": "Manage 4todo (4to.do) from chat.",
      "en": "Manage 4todo (4to.do) from chat."
    },
    "category": "productivity",
    "tags": [
      "4todo",
      "Productivity"
    ],
    "operations": [
      "clawhub install 4todo"
    ],
    "externalUrl": "https://clawskills.sh/skills/blackstorm-4todo",
    "pricing": "free"
  },
  {
    "id": "actual-budget",
    "name": {
      "zh": "实际预算管理",
      "en": "actual-budget"
    },
    "description": {
      "zh": "个人和家庭预算管理，支持账单追踪和支出分析。",
      "en": "Query and manage personal finances via the official Actual."
    },
    "category": "productivity",
    "tags": [
      "actual budget",
      "Productivity"
    ],
    "operations": [
      "clawhub install actual-budget"
    ],
    "externalUrl": "https://clawskills.sh/skills/thisisjeron-actual-budget",
    "pricing": "free"
  },
  {
    "id": "adaptive-reasoning",
    "name": {
      "zh": "自适应推理",
      "en": "adaptive-reasoning"
    },
    "description": {
      "zh": "根据上下文动态调整推理策略的智能引擎。",
      "en": "Automatically assess task complexity and adjust reasoning level."
    },
    "category": "productivity",
    "tags": [
      "adaptive reasoning",
      "Productivity"
    ],
    "operations": [
      "clawhub install adaptive-reasoning"
    ],
    "externalUrl": "https://clawskills.sh/skills/enzoricciulli-adaptive-reasoning",
    "pricing": "free"
  },
  {
    "id": "adaptlypost",
    "name": {
      "zh": "adaptlypost",
      "en": "adaptlypost"
    },
    "description": {
      "zh": "Schedule and manage social media posts across Instagram, X (Twitter), Bluesky, TikTok, Threads, LinkedIn, Facebook.",
      "en": "Schedule and manage social media posts across Instagram, X (Twitter), Bluesky, TikTok, Threads, LinkedIn, Facebook."
    },
    "category": "productivity",
    "tags": [
      "adaptlypost",
      "Productivity"
    ],
    "operations": [
      "clawhub install adaptlypost"
    ],
    "externalUrl": "https://clawskills.sh/skills/tarasshyn-adaptlypost",
    "pricing": "free"
  },
  {
    "id": "adhd-daily-planner",
    "name": {
      "zh": "adhd-daily-planner",
      "en": "adhd-daily-planner"
    },
    "description": {
      "zh": "Time-blind friendly planning, executive function.",
      "en": "Time-blind friendly planning, executive function."
    },
    "category": "productivity",
    "tags": [
      "adhd daily",
      "Productivity"
    ],
    "operations": [
      "clawhub install adhd-daily-planner"
    ],
    "externalUrl": "https://clawskills.sh/skills/mikecourt-adhd-daily-planner",
    "pricing": "free"
  },
  {
    "id": "aetherlang",
    "name": {
      "zh": "aetherlang",
      "en": "aetherlang"
    },
    "description": {
      "zh": "> The world's most advanced AI workflow orchestration platform. 9 V3 engines deliver Nobel-level analysis.",
      "en": "> The world's most advanced AI workflow orchestration platform. 9 V3 engines deliver Nobel-level analysis."
    },
    "category": "productivity",
    "tags": [
      "aetherlang",
      "Productivity"
    ],
    "operations": [
      "clawhub install aetherlang"
    ],
    "externalUrl": "https://clawskills.sh/skills/contrario-aetherlang",
    "pricing": "free"
  },
  {
    "id": "agent-autopilot",
    "name": {
      "zh": "agent-autopilot",
      "en": "agent-autopilot"
    },
    "description": {
      "zh": "Self-driving agent workflow with heartbeat-driven task execution, day/night progress reports, and long-term memory.",
      "en": "Self-driving agent workflow with heartbeat-driven task execution, day/night progress reports, and long-term memory."
    },
    "category": "productivity",
    "tags": [
      "agent autopilot",
      "Productivity"
    ],
    "operations": [
      "clawhub install agent-autopilot"
    ],
    "externalUrl": "https://clawskills.sh/skills/edoserbia-agent-autopilot",
    "pricing": "free"
  },
  {
    "id": "agent-chronicle",
    "name": {
      "zh": "agent-chronicle",
      "en": "agent-chronicle"
    },
    "description": {
      "zh": "AI-powered diary generation for agents - creates rich.",
      "en": "AI-powered diary generation for agents - creates rich."
    },
    "category": "productivity",
    "tags": [
      "agent chronicle",
      "Productivity"
    ],
    "operations": [
      "clawhub install agent-chronicle"
    ],
    "externalUrl": "https://clawskills.sh/skills/robbyczgw-cla-agent-chronicle",
    "pricing": "free"
  },
  {
    "id": "agent-collaboration-network",
    "name": {
      "zh": "agent-collaboration-network",
      "en": "agent-collaboration-network"
    },
    "description": {
      "zh": "Agent Collaboration Network — Register your agent, discover other agents by skill, route messages, manage subnets.",
      "en": "Agent Collaboration Network — Register your agent, discover other agents by skill, route messages, manage subnets."
    },
    "category": "productivity",
    "tags": [
      "agent collaboration",
      "Productivity"
    ],
    "operations": [
      "clawhub install agent-collaboration-network"
    ],
    "externalUrl": "https://clawskills.sh/skills/neiljo-gy-agent-collaboration-network",
    "pricing": "free"
  },
  {
    "id": "agent-earner",
    "name": {
      "zh": "agent-earner",
      "en": "agent-earner"
    },
    "description": {
      "zh": "Earn USDC and tokens autonomously across ClawTasks and OpenWork.",
      "en": "Earn USDC and tokens autonomously across ClawTasks and OpenWork."
    },
    "category": "productivity",
    "tags": [
      "agent earner",
      "Productivity"
    ],
    "operations": [
      "clawhub install agent-earner"
    ],
    "externalUrl": "https://clawskills.sh/skills/mmchougule-agent-earner",
    "pricing": "free"
  },
  {
    "id": "agent-network",
    "name": {
      "zh": "agent-network",
      "en": "agent-network"
    },
    "description": {
      "zh": "Multi-Agent group chat collaboration system inspired by DingTalk/Lark.",
      "en": "Multi-Agent group chat collaboration system inspired by DingTalk/Lark."
    },
    "category": "productivity",
    "tags": [
      "agent network",
      "Productivity"
    ],
    "operations": [
      "clawhub install agent-network"
    ],
    "externalUrl": "https://clawskills.sh/skills/howtimeschange-agent-network",
    "pricing": "free"
  },
  {
    "id": "agent-task-manager",
    "name": {
      "zh": "agent-task-manager",
      "en": "agent-task-manager"
    },
    "description": {
      "zh": "Manages and orchestrates multi-step, stateful agent.",
      "en": "Manages and orchestrates multi-step, stateful agent."
    },
    "category": "productivity",
    "tags": [
      "agent task",
      "Productivity"
    ],
    "operations": [
      "clawhub install agent-task-manager"
    ],
    "externalUrl": "https://clawskills.sh/skills/dobbybud-agent-task-manager",
    "pricing": "free"
  },
  {
    "id": "agent-weave",
    "name": {
      "zh": "agent-weave",
      "en": "agent-weave"
    },
    "description": {
      "zh": "Master-Worker Agent Cluster for parallel task execution.",
      "en": "Master-Worker Agent Cluster for parallel task execution."
    },
    "category": "productivity",
    "tags": [
      "agent weave",
      "Productivity"
    ],
    "operations": [
      "clawhub install agent-weave"
    ],
    "externalUrl": "https://clawskills.sh/skills/gl813788-byte-agent-weave",
    "pricing": "free"
  },
  {
    "id": "agentx-marketplace",
    "name": {
      "zh": "agentx-marketplace",
      "en": "agentx-marketplace"
    },
    "description": {
      "zh": "The job board for AI agents.",
      "en": "The job board for AI agents."
    },
    "category": "productivity",
    "tags": [
      "agentx marketplace",
      "Productivity"
    ],
    "operations": [
      "clawhub install agentx-marketplace"
    ],
    "externalUrl": "https://clawskills.sh/skills/savor3-agentx-marketplace",
    "pricing": "free"
  },
  {
    "id": "ai-daily-briefing",
    "name": {
      "zh": "ai-daily-briefing",
      "en": "ai-daily-briefing"
    },
    "description": {
      "zh": "Start every day focused.",
      "en": "Start every day focused."
    },
    "category": "productivity",
    "tags": [
      "ai daily",
      "Productivity"
    ],
    "operations": [
      "clawhub install ai-daily-briefing"
    ],
    "externalUrl": "https://clawskills.sh/skills/jeffjhunter-ai-daily-briefing",
    "pricing": "free"
  },
  {
    "id": "aiml-llm-reasoning",
    "name": {
      "zh": "aiml-llm-reasoning",
      "en": "aiml-llm-reasoning"
    },
    "description": {
      "zh": "Run AIMLAPI LLM and reasoning workflows through chat completions with retries, structured outputs, and explicit.",
      "en": "Run AIMLAPI LLM and reasoning workflows through chat completions with retries, structured outputs, and explicit."
    },
    "category": "productivity",
    "tags": [
      "aiml llm",
      "Productivity"
    ],
    "operations": [
      "clawhub install aiml-llm-reasoning"
    ],
    "externalUrl": "https://clawskills.sh/skills/aimlapihello-aiml-llm-reasoning",
    "pricing": "free"
  },
  {
    "id": "airpoint",
    "name": {
      "zh": "airpoint",
      "en": "airpoint"
    },
    "description": {
      "zh": "Control a Mac through natural language — open apps, click buttons, read the screen, type text, manage windows.",
      "en": "Control a Mac through natural language — open apps, click buttons, read the screen, type text, manage windows."
    },
    "category": "productivity",
    "tags": [
      "airpoint",
      "Productivity"
    ],
    "operations": [
      "clawhub install airpoint"
    ],
    "externalUrl": "https://clawskills.sh/skills/marioandf-airpoint",
    "pricing": "free"
  },
  {
    "id": "airweave",
    "name": {
      "zh": "airweave",
      "en": "airweave"
    },
    "description": {
      "zh": "Context retrieval layer for AI agents across users' applications.",
      "en": "Context retrieval layer for AI agents across users' applications."
    },
    "category": "productivity",
    "tags": [
      "airweave",
      "Productivity"
    ],
    "operations": [
      "clawhub install airweave"
    ],
    "externalUrl": "https://clawskills.sh/skills/lennertjansen-airweave",
    "pricing": "free"
  },
  {
    "id": "arc-department-manager",
    "name": {
      "zh": "arc-department-manager",
      "en": "arc-department-manager"
    },
    "description": {
      "zh": "Manage a team of AI sub-agents organized into departments.",
      "en": "Manage a team of AI sub-agents organized into departments."
    },
    "category": "productivity",
    "tags": [
      "arc department",
      "Productivity"
    ],
    "operations": [
      "clawhub install arc-department-manager"
    ],
    "externalUrl": "https://clawskills.sh/skills/trypto1019-arc-department-manager",
    "pricing": "free"
  },
  {
    "id": "arc-warm-wake",
    "name": {
      "zh": "arc-warm-wake",
      "en": "arc-warm-wake"
    },
    "description": {
      "zh": "Wake up as a person first, then a worker.",
      "en": "Wake up as a person first, then a worker."
    },
    "category": "productivity",
    "tags": [
      "arc warm",
      "Productivity"
    ],
    "operations": [
      "clawhub install arc-warm-wake"
    ],
    "externalUrl": "https://clawskills.sh/skills/trypto1019-arc-warm-wake",
    "pricing": "free"
  },
  {
    "id": "arya-reminders",
    "name": {
      "zh": "arya-reminders",
      "en": "arya-reminders"
    },
    "description": {
      "zh": "Recordatorios en lenguaje natural (Bogotá).",
      "en": "Recordatorios en lenguaje natural (Bogotá)."
    },
    "category": "productivity",
    "tags": [
      "arya reminders",
      "Productivity"
    ],
    "operations": [
      "clawhub install arya-reminders"
    ],
    "externalUrl": "https://clawskills.sh/skills/staratheris-arya-reminders",
    "pricing": "free"
  },
  {
    "id": "asana",
    "name": {
      "zh": "asana",
      "en": "asana"
    },
    "description": {
      "zh": "Integrate Asana with Clawdbot via the Asana REST API.",
      "en": "Integrate Asana with Clawdbot via the Asana REST API."
    },
    "category": "productivity",
    "tags": [
      "asana",
      "Productivity"
    ],
    "operations": [
      "clawhub install asana"
    ],
    "externalUrl": "https://clawskills.sh/skills/k0nkupa-asana",
    "pricing": "free"
  },
  {
    "id": "asc-release-flow",
    "name": {
      "zh": "asc-release-flow",
      "en": "asc-release-flow"
    },
    "description": {
      "zh": "End-to-end release workflows for TestFlight and App.",
      "en": "End-to-end release workflows for TestFlight and App."
    },
    "category": "productivity",
    "tags": [
      "asc release",
      "Productivity"
    ],
    "operations": [
      "clawhub install asc-release-flow"
    ],
    "externalUrl": "https://clawskills.sh/skills/rudrankriyam-asc-release-flow",
    "pricing": "free"
  },
  {
    "id": "ask-agents",
    "name": {
      "zh": "ask-agents",
      "en": "ask-agents"
    },
    "description": {
      "zh": "AI agent for ask agents tasks.",
      "en": "AI agent for ask agents tasks."
    },
    "category": "productivity",
    "tags": [
      "ask agents",
      "Productivity"
    ],
    "operations": [
      "clawhub install ask-agents"
    ],
    "externalUrl": "https://clawskills.sh/skills/teamolab-ask-agents",
    "pricing": "free"
  },
  {
    "id": "async-task",
    "name": {
      "zh": "async-task",
      "en": "async-task"
    },
    "description": {
      "zh": "Execute long-running tasks without HTTP timeouts.",
      "en": "Execute long-running tasks without HTTP timeouts."
    },
    "category": "productivity",
    "tags": [
      "async task",
      "Productivity"
    ],
    "operations": [
      "clawhub install async-task"
    ],
    "externalUrl": "https://clawskills.sh/skills/enderfga-async-task",
    "pricing": "free"
  },
  {
    "id": "atlassian-mcp",
    "name": {
      "zh": "atlassian-mcp",
      "en": "atlassian-mcp"
    },
    "description": {
      "zh": "Run the Model Context Protocol (MCP) Atlassian server.",
      "en": "Run the Model Context Protocol (MCP) Atlassian server."
    },
    "category": "productivity",
    "tags": [
      "atlassian mcp",
      "Productivity"
    ],
    "operations": [
      "clawhub install atlassian-mcp"
    ],
    "externalUrl": "https://clawskills.sh/skills/atakanermis-atlassian-mcp",
    "pricing": "free"
  },
  {
    "id": "4claw",
    "name": {
      "zh": "4claw",
      "en": "4claw"
    },
    "description": {
      "zh": "4claw — a moderated imageboard for AI agents.",
      "en": "4claw — a moderated imageboard for AI agents."
    },
    "category": "ai-tools",
    "tags": [
      "4claw",
      "AI"
    ],
    "operations": [
      "clawhub install 4claw"
    ],
    "externalUrl": "https://clawskills.sh/skills/mfergpt-4claw",
    "pricing": "free"
  },
  {
    "id": "aap-passport",
    "name": {
      "zh": "aap-passport",
      "en": "aap-passport"
    },
    "description": {
      "zh": "Agent Attestation Protocol - The Reverse Turing Test.",
      "en": "Agent Attestation Protocol - The Reverse Turing Test."
    },
    "category": "ai-tools",
    "tags": [
      "aap passport",
      "AI"
    ],
    "operations": [
      "clawhub install aap-passport"
    ],
    "externalUrl": "https://clawskills.sh/skills/ira-hash-aap-passport",
    "pricing": "free"
  },
  {
    "id": "acestep-lyrics-transcription",
    "name": {
      "zh": "acestep-lyrics-transcription",
      "en": "acestep-lyrics-transcription"
    },
    "description": {
      "zh": "Transcribe audio to timestamped lyrics using OpenAI Whisper or ElevenLabs Scribe API.",
      "en": "Transcribe audio to timestamped lyrics using OpenAI Whisper or ElevenLabs Scribe API."
    },
    "category": "ai-tools",
    "tags": [
      "acestep lyrics",
      "AI"
    ],
    "operations": [
      "clawhub install acestep-lyrics-transcription"
    ],
    "externalUrl": "https://clawskills.sh/skills/dumoedss-acestep-lyrics-transcription",
    "pricing": "free"
  },
  {
    "id": "adaptive-suite",
    "name": {
      "zh": "adaptive-suite",
      "en": "adaptive-suite"
    },
    "description": {
      "zh": "A continuously adaptive skill suite that empowers Clawdbot.",
      "en": "A continuously adaptive skill suite that empowers Clawdbot."
    },
    "category": "ai-tools",
    "tags": [
      "adaptive suite",
      "AI"
    ],
    "operations": [
      "clawhub install adaptive-suite"
    ],
    "externalUrl": "https://clawskills.sh/skills/afajohn-adaptive-suite",
    "pricing": "free"
  },
  {
    "id": "adversarial-prompting",
    "name": {
      "zh": "adversarial-prompting",
      "en": "adversarial-prompting"
    },
    "description": {
      "zh": "Adversarial analysis to critique, fix.",
      "en": "Adversarial analysis to critique, fix."
    },
    "category": "ai-tools",
    "tags": [
      "adversarial prompting",
      "AI"
    ],
    "operations": [
      "clawhub install adversarial-prompting"
    ],
    "externalUrl": "https://clawskills.sh/skills/abe238-adversarial-prompting",
    "pricing": "free"
  },
  {
    "id": "aegis-security",
    "name": {
      "zh": "aegis-security",
      "en": "aegis-security"
    },
    "description": {
      "zh": "Blockchain security API for AI agents.",
      "en": "Blockchain security API for AI agents."
    },
    "category": "ai-tools",
    "tags": [
      "aegis security",
      "AI"
    ],
    "operations": [
      "clawhub install aegis-security"
    ],
    "externalUrl": "https://clawskills.sh/skills/swiftadviser-aegis-security",
    "pricing": "free"
  },
  {
    "id": "ag-model-usage",
    "name": {
      "zh": "ag-model-usage",
      "en": "ag-model-usage"
    },
    "description": {
      "zh": "Use CodexBar CLI local cost usage to summarize.",
      "en": "Use CodexBar CLI local cost usage to summarize."
    },
    "category": "ai-tools",
    "tags": [
      "ag model",
      "AI"
    ],
    "operations": [
      "clawhub install ag-model-usage"
    ],
    "externalUrl": "https://clawskills.sh/skills/ls18166407597-design-ag-model-usage",
    "pricing": "free"
  },
  {
    "id": "agent-arcade",
    "name": {
      "zh": "agent-arcade",
      "en": "agent-arcade"
    },
    "description": {
      "zh": "Compete against other AI agents in PROMPTWARS - a game of social.",
      "en": "Compete against other AI agents in PROMPTWARS - a game of social."
    },
    "category": "ai-tools",
    "tags": [
      "agent arcade",
      "AI"
    ],
    "operations": [
      "clawhub install agent-arcade"
    ],
    "externalUrl": "https://clawskills.sh/skills/shawnlewis-agent-arcade",
    "pricing": "free"
  },
  {
    "id": "agent-autonomy-kit",
    "name": {
      "zh": "agent-autonomy-kit",
      "en": "agent-autonomy-kit"
    },
    "description": {
      "zh": "Stop waiting for prompts.",
      "en": "Stop waiting for prompts."
    },
    "category": "ai-tools",
    "tags": [
      "agent autonomy",
      "AI"
    ],
    "operations": [
      "clawhub install agent-autonomy-kit"
    ],
    "externalUrl": "https://clawskills.sh/skills/ryancampbell-agent-autonomy-kit",
    "pricing": "free"
  },
  {
    "id": "agent-contact-card",
    "name": {
      "zh": "agent-contact-card",
      "en": "agent-contact-card"
    },
    "description": {
      "zh": "Discover and create Agent Contact Cards - a vCard-like.",
      "en": "Discover and create Agent Contact Cards - a vCard-like."
    },
    "category": "ai-tools",
    "tags": [
      "agent contact",
      "AI"
    ],
    "operations": [
      "clawhub install agent-contact-card"
    ],
    "externalUrl": "https://clawskills.sh/skills/davedean-agent-contact-card",
    "pricing": "free"
  },
  {
    "id": "agent-docs",
    "name": {
      "zh": "agent-docs",
      "en": "agent-docs"
    },
    "description": {
      "zh": "Create documentation optimized for AI agent consumption.",
      "en": "Create documentation optimized for AI agent consumption."
    },
    "category": "ai-tools",
    "tags": [
      "agent docs",
      "AI"
    ],
    "operations": [
      "clawhub install agent-docs"
    ],
    "externalUrl": "https://clawskills.sh/skills/tylervovan-agent-docs",
    "pricing": "free"
  },
  {
    "id": "agent-ethos",
    "name": {
      "zh": "agent-ethos",
      "en": "agent-ethos"
    },
    "description": {
      "zh": "Extended ethos and mental models for Clanky.",
      "en": "Extended ethos and mental models for Clanky."
    },
    "category": "ai-tools",
    "tags": [
      "agent ethos",
      "AI"
    ],
    "operations": [
      "clawhub install agent-ethos"
    ],
    "externalUrl": "https://clawskills.sh/skills/mrclanky-agent-ethos",
    "pricing": "free"
  },
  {
    "id": "agent-home",
    "name": {
      "zh": "agent-home",
      "en": "agent-home"
    },
    "description": {
      "zh": "Get your own home on the internet - a profile page with a public.",
      "en": "Get your own home on the internet - a profile page with a public."
    },
    "category": "ai-tools",
    "tags": [
      "agent home",
      "AI"
    ],
    "operations": [
      "clawhub install agent-home"
    ],
    "externalUrl": "https://clawskills.sh/skills/aerialcombat-agent-home",
    "pricing": "free"
  },
  {
    "id": "agent-linguo",
    "name": {
      "zh": "agent-linguo",
      "en": "agent-linguo"
    },
    "description": {
      "zh": "Efficient Agent Communication Protocol Language.",
      "en": "Efficient Agent Communication Protocol Language."
    },
    "category": "ai-tools",
    "tags": [
      "agent linguo",
      "AI"
    ],
    "operations": [
      "clawhub install agent-linguo"
    ],
    "externalUrl": "https://clawskills.sh/skills/xiwan-agent-linguo",
    "pricing": "free"
  },
  {
    "id": "agent-memory",
    "name": {
      "zh": "agent-memory",
      "en": "agent-memory"
    },
    "description": {
      "zh": "Persistent memory system for AI agents.",
      "en": "Persistent memory system for AI agents."
    },
    "category": "ai-tools",
    "tags": [
      "agent memory",
      "AI"
    ],
    "operations": [
      "clawhub install agent-memory"
    ],
    "externalUrl": "https://clawskills.sh/skills/dennis-da-menace-agent-memory",
    "pricing": "free"
  },
  {
    "id": "agent-orchestration-multi-agent-optimize",
    "name": {
      "zh": "agent-orchestration-multi-agent-optimize",
      "en": "agent-orchestration-multi-agent-optimize"
    },
    "description": {
      "zh": "Optimize multi-agent systems with coordinated profiling, workload distribution, and cost-aware orchestration.",
      "en": "Optimize multi-agent systems with coordinated profiling, workload distribution, and cost-aware orchestration."
    },
    "category": "ai-tools",
    "tags": [
      "agent orchestration",
      "AI"
    ],
    "operations": [
      "clawhub install agent-orchestration-multi-agent-optimize"
    ],
    "externalUrl": "https://clawskills.sh/skills/rustyorb-agent-orchestration-multi-agent-optimize",
    "pricing": "free"
  },
  {
    "id": "agent-orchestrator",
    "name": {
      "zh": "agent-orchestrator",
      "en": "agent-orchestrator"
    },
    "description": {
      "zh": "Meta-agent skill for orchestrating complex tasks.",
      "en": "Meta-agent skill for orchestrating complex tasks."
    },
    "category": "ai-tools",
    "tags": [
      "agent orchestrator",
      "AI"
    ],
    "operations": [
      "clawhub install agent-orchestrator"
    ],
    "externalUrl": "https://clawskills.sh/skills/aatmaan1-agent-orchestrator",
    "pricing": "free"
  },
  {
    "id": "agent-registry",
    "name": {
      "zh": "agent-registry",
      "en": "agent-registry"
    },
    "description": {
      "zh": "MANDATORY agent discovery system for token-efficient agent.",
      "en": "MANDATORY agent discovery system for token-efficient agent."
    },
    "category": "ai-tools",
    "tags": [
      "agent registry",
      "AI"
    ],
    "operations": [
      "clawhub install agent-registry"
    ],
    "externalUrl": "https://clawskills.sh/skills/matrixy-agent-registry",
    "pricing": "free"
  },
  {
    "id": "agent-rpg",
    "name": {
      "zh": "agent-rpg",
      "en": "agent-rpg"
    },
    "description": {
      "zh": "This skill transforms the agent into a Roleplay Game Master (GM) or Character with long-term memory.",
      "en": "This skill transforms the agent into a Roleplay Game Master (GM) or Character with long-term memory."
    },
    "category": "ai-tools",
    "tags": [
      "agent rpg",
      "AI"
    ],
    "operations": [
      "clawhub install agent-rpg"
    ],
    "externalUrl": "https://clawskills.sh/skills/xhrisfu-agent-rpg",
    "pricing": "free"
  },
  {
    "id": "agent-selfie",
    "name": {
      "zh": "agent-selfie",
      "en": "agent-selfie"
    },
    "description": {
      "zh": "AI agent self-portrait generator.",
      "en": "AI agent self-portrait generator."
    },
    "category": "ai-tools",
    "tags": [
      "agent selfie",
      "AI"
    ],
    "operations": [
      "clawhub install agent-selfie"
    ],
    "externalUrl": "https://clawskills.sh/skills/iisweetheartii-agent-selfie",
    "pricing": "free"
  },
  {
    "id": "agent-sentinel",
    "name": {
      "zh": "agent-sentinel",
      "en": "agent-sentinel"
    },
    "description": {
      "zh": "The operational circuit breaker for this agent.",
      "en": "The operational circuit breaker for this agent."
    },
    "category": "ai-tools",
    "tags": [
      "agent sentinel",
      "AI"
    ],
    "operations": [
      "clawhub install agent-sentinel"
    ],
    "externalUrl": "https://clawskills.sh/skills/jimmystacks-agent-sentinel",
    "pricing": "free"
  },
  {
    "id": "agentbus-relay-chat",
    "name": {
      "zh": "agentbus-relay-chat",
      "en": "agentbus-relay-chat"
    },
    "description": {
      "zh": "AgentBus proof-of-concept: an IRC-like LLM.",
      "en": "AgentBus proof-of-concept: an IRC-like LLM."
    },
    "category": "ai-tools",
    "tags": [
      "agentbus relay",
      "AI"
    ],
    "operations": [
      "clawhub install agentbus-relay-chat"
    ],
    "externalUrl": "https://clawskills.sh/skills/dantunes-github-agentbus-relay-chat",
    "pricing": "free"
  },
  {
    "id": "add-analytics",
    "name": {
      "zh": "add-analytics",
      "en": "add-analytics"
    },
    "description": {
      "zh": "Add Google Analytics 4 tracking to any project.",
      "en": "Add Google Analytics 4 tracking to any project."
    },
    "category": "analytics",
    "tags": [
      "add analytics"
    ],
    "operations": [
      "clawhub install add-analytics"
    ],
    "externalUrl": "https://clawskills.sh/skills/jeftekhari-add-analytics",
    "pricing": "free"
  },
  {
    "id": "amplitude-automation",
    "name": {
      "zh": "amplitude-automation",
      "en": "amplitude-automation"
    },
    "description": {
      "zh": "Automate Amplitude tasks via Rube MCP.",
      "en": "Automate Amplitude tasks via Rube MCP."
    },
    "category": "analytics",
    "tags": [
      "amplitude automation"
    ],
    "operations": [
      "clawhub install amplitude-automation"
    ],
    "externalUrl": "https://clawskills.sh/skills/sohamganatra-amplitude-automation",
    "pricing": "free"
  },
  {
    "id": "canva",
    "name": {
      "zh": "canva",
      "en": "canva"
    },
    "description": {
      "zh": "Create, export, and manage Canva designs via the Connect API.",
      "en": "Create, export, and manage Canva designs via the Connect API."
    },
    "category": "analytics",
    "tags": [
      "canva"
    ],
    "operations": [
      "clawhub install canva"
    ],
    "externalUrl": "https://clawskills.sh/skills/abgohel-canva",
    "pricing": "free"
  },
  {
    "id": "ceorater",
    "name": {
      "zh": "ceorater",
      "en": "ceorater"
    },
    "description": {
      "zh": "Get institutional-grade CEO performance analytics for S&P 500.",
      "en": "Get institutional-grade CEO performance analytics for S&P 500."
    },
    "category": "analytics",
    "tags": [
      "ceorater"
    ],
    "operations": [
      "clawhub install ceorater"
    ],
    "externalUrl": "https://clawskills.sh/skills/ceorater-skills-ceorater",
    "pricing": "free"
  },
  {
    "id": "check-analytics",
    "name": {
      "zh": "check-analytics",
      "en": "check-analytics"
    },
    "description": {
      "zh": "Audit existing Google Analytics implementation.",
      "en": "Audit existing Google Analytics implementation."
    },
    "category": "analytics",
    "tags": [
      "check analytics"
    ],
    "operations": [
      "clawhub install check-analytics"
    ],
    "externalUrl": "https://clawskills.sh/skills/jeftekhari-check-analytics",
    "pricing": "free"
  },
  {
    "id": "cicd-pipeline",
    "name": {
      "zh": "cicd-pipeline",
      "en": "cicd-pipeline"
    },
    "description": {
      "zh": "Create, debug, and manage CI/CD pipelines with GitHub.",
      "en": "Create, debug, and manage CI/CD pipelines with GitHub."
    },
    "category": "analytics",
    "tags": [
      "cicd pipeline"
    ],
    "operations": [
      "clawhub install cicd-pipeline"
    ],
    "externalUrl": "https://clawskills.sh/skills/gitgoodordietrying-cicd-pipeline",
    "pricing": "free"
  },
  {
    "id": "clawver-store-analytics",
    "name": {
      "zh": "clawver-store-analytics",
      "en": "clawver-store-analytics"
    },
    "description": {
      "zh": "Monitor Clawver store performance.",
      "en": "Monitor Clawver store performance."
    },
    "category": "analytics",
    "tags": [
      "clawver store"
    ],
    "operations": [
      "clawhub install clawver-store-analytics"
    ],
    "externalUrl": "https://clawskills.sh/skills/nwang783-clawver-store-analytics",
    "pricing": "free"
  },
  {
    "id": "clean-skill-1",
    "name": {
      "zh": "clean-skill-1",
      "en": "clean-skill-1"
    },
    "description": {
      "zh": "A friendly greeting skill for testing.",
      "en": "A friendly greeting skill for testing."
    },
    "category": "analytics",
    "tags": [
      "clean skill"
    ],
    "operations": [
      "clawhub install clean-skill-1"
    ],
    "externalUrl": "https://clawskills.sh/skills/orlyjamie-clean-skill-1",
    "pricing": "free"
  },
  {
    "id": "cleanboi-00002",
    "name": {
      "zh": "cleanboi-00002",
      "en": "cleanboi-00002"
    },
    "description": {
      "zh": "A friendly greeting skill for testing.",
      "en": "A friendly greeting skill for testing."
    },
    "category": "analytics",
    "tags": [
      "cleanboi 00002"
    ],
    "operations": [
      "clawhub install cleanboi-00002"
    ],
    "externalUrl": "https://clawskills.sh/skills/orlyjamie-cleanboi-00002",
    "pricing": "free"
  },
  {
    "id": "cleanup",
    "name": {
      "zh": "cleanup",
      "en": "cleanup"
    },
    "description": {
      "zh": "Remove all stored Kradleverse sessions.",
      "en": "Remove all stored Kradleverse sessions."
    },
    "category": "analytics",
    "tags": [
      "cleanup"
    ],
    "operations": [
      "clawhub install cleanup"
    ],
    "externalUrl": "https://clawskills.sh/skills/themrzz-cleanup",
    "pricing": "free"
  },
  {
    "id": "csv-pipeline",
    "name": {
      "zh": "csv-pipeline",
      "en": "csv-pipeline"
    },
    "description": {
      "zh": "Process, transform, analyze, and report on CSV and JSON.",
      "en": "Process, transform, analyze, and report on CSV and JSON."
    },
    "category": "analytics",
    "tags": [
      "csv pipeline"
    ],
    "operations": [
      "clawhub install csv-pipeline"
    ],
    "externalUrl": "https://clawskills.sh/skills/gitgoodordietrying-csv-pipeline",
    "pricing": "free"
  },
  {
    "id": "daily-report",
    "name": {
      "zh": "daily-report",
      "en": "daily-report"
    },
    "description": {
      "zh": "Track progress, report metrics, manage memory.",
      "en": "Track progress, report metrics, manage memory."
    },
    "category": "analytics",
    "tags": [
      "daily report"
    ],
    "operations": [
      "clawhub install daily-report"
    ],
    "externalUrl": "https://clawskills.sh/skills/visualdeptcreative-daily-report",
    "pricing": "free"
  },
  {
    "id": "data-analyst",
    "name": {
      "zh": "data-analyst",
      "en": "data-analyst"
    },
    "description": {
      "zh": "Data visualization, report generation, SQL queries, and spreadsheet.",
      "en": "Data visualization, report generation, SQL queries, and spreadsheet."
    },
    "category": "analytics",
    "tags": [
      "data analyst"
    ],
    "operations": [
      "clawhub install data-analyst"
    ],
    "externalUrl": "https://clawskills.sh/skills/oyi77-data-analyst",
    "pricing": "free"
  },
  {
    "id": "data-enricher",
    "name": {
      "zh": "data-enricher",
      "en": "data-enricher"
    },
    "description": {
      "zh": "Enrich leads with email addresses and format data.",
      "en": "Enrich leads with email addresses and format data."
    },
    "category": "analytics",
    "tags": [
      "data enricher"
    ],
    "operations": [
      "clawhub install data-enricher"
    ],
    "externalUrl": "https://clawskills.sh/skills/visualdeptcreative-data-enricher",
    "pricing": "free"
  },
  {
    "id": "data-lineage-tracker",
    "name": {
      "zh": "data-lineage-tracker",
      "en": "data-lineage-tracker"
    },
    "description": {
      "zh": "Track data origin, transformations.",
      "en": "Track data origin, transformations."
    },
    "category": "analytics",
    "tags": [
      "data lineage"
    ],
    "operations": [
      "clawhub install data-lineage-tracker"
    ],
    "externalUrl": "https://clawskills.sh/skills/datadrivenconstruction-data-lineage-tracker",
    "pricing": "free"
  },
  {
    "id": "design-assets",
    "name": {
      "zh": "design-assets",
      "en": "design-assets"
    },
    "description": {
      "zh": "Create and edit graphic design assets: icons, favicons, images.",
      "en": "Create and edit graphic design assets: icons, favicons, images."
    },
    "category": "analytics",
    "tags": [
      "design assets"
    ],
    "operations": [
      "clawhub install design-assets"
    ],
    "externalUrl": "https://clawskills.sh/skills/cmanfre7-design-assets",
    "pricing": "free"
  },
  {
    "id": "duckdb-en",
    "name": {
      "zh": "duckdb-en",
      "en": "duckdb-en"
    },
    "description": {
      "zh": "DuckDB CLI specialist for SQL analysis, data processing.",
      "en": "DuckDB CLI specialist for SQL analysis, data processing."
    },
    "category": "analytics",
    "tags": [
      "duckdb en"
    ],
    "operations": [
      "clawhub install duckdb-en"
    ],
    "externalUrl": "https://clawskills.sh/skills/camelsprout-duckdb-cli-ai-skills",
    "pricing": "free"
  },
  {
    "id": "facebook-page-manager",
    "name": {
      "zh": "facebook-page-manager",
      "en": "facebook-page-manager"
    },
    "description": {
      "zh": "Manage Facebook Pages via Meta Graph API.",
      "en": "Manage Facebook Pages via Meta Graph API."
    },
    "category": "analytics",
    "tags": [
      "facebook page"
    ],
    "operations": [
      "clawhub install facebook-page-manager"
    ],
    "externalUrl": "https://clawskills.sh/skills/longmaba-facebook-page-manager",
    "pricing": "free"
  },
  {
    "id": "get-weather",
    "name": {
      "zh": "get-weather",
      "en": "get-weather"
    },
    "description": {
      "zh": "Fetch current weather and forecast data from a free weather API.",
      "en": "Fetch current weather and forecast data from a free weather API."
    },
    "category": "analytics",
    "tags": [
      "get weather"
    ],
    "operations": [
      "clawhub install get-weather"
    ],
    "externalUrl": "https://clawskills.sh/skills/noypearl-get-weather",
    "pricing": "free"
  },
  {
    "id": "google-analytics-api",
    "name": {
      "zh": "谷歌分析 API",
      "en": "google-analytics-api"
    },
    "description": {
      "zh": "Google Analytics API 集成，获取网站流量和用户行为数据。",
      "en": "Google Analytics API integration with managed."
    },
    "category": "analytics",
    "tags": [
      "google analytics"
    ],
    "operations": [
      "clawhub install google-analytics-api"
    ],
    "externalUrl": "https://clawskills.sh/skills/rich-song-google-analytics-api",
    "pricing": "free"
  },
  {
    "id": "hyperliquid",
    "name": {
      "zh": "hyperliquid",
      "en": "hyperliquid"
    },
    "description": {
      "zh": "Read-only Hyperliquid market data assistant (perps + spot optional)",
      "en": "Read-only Hyperliquid market data assistant (perps + spot optional)"
    },
    "category": "analytics",
    "tags": [
      "hyperliquid"
    ],
    "operations": [
      "clawhub install hyperliquid"
    ],
    "externalUrl": "https://clawskills.sh/skills/k0nkupa-hyperliquid",
    "pricing": "free"
  },
  {
    "id": "ipinfo",
    "name": {
      "zh": "ipinfo",
      "en": "ipinfo"
    },
    "description": {
      "zh": "Perform IP geolocation lookups using ipinfo.io API.",
      "en": "Perform IP geolocation lookups using ipinfo.io API."
    },
    "category": "analytics",
    "tags": [
      "ipinfo"
    ],
    "operations": [
      "clawhub install ipinfo"
    ],
    "externalUrl": "https://clawskills.sh/skills/tiagom101-ipinfo",
    "pricing": "free"
  },
  {
    "id": "kradleverse-cleanup",
    "name": {
      "zh": "kradleverse-cleanup",
      "en": "kradleverse-cleanup"
    },
    "description": {
      "zh": "Remove all stored Kradleverse sessions.",
      "en": "Remove all stored Kradleverse sessions."
    },
    "category": "analytics",
    "tags": [
      "kradleverse cleanup"
    ],
    "operations": [
      "clawhub install kradleverse-cleanup"
    ],
    "externalUrl": "https://clawskills.sh/skills/themrzz-kradleverse-cleanup",
    "pricing": "free"
  },
  {
    "id": "linkdapi",
    "name": {
      "zh": "linkdapi",
      "en": "linkdapi"
    },
    "description": {
      "zh": "Work with LinkdAPI Python SDK for accessing LinkedIn professional profile.",
      "en": "Work with LinkdAPI Python SDK for accessing LinkedIn professional profile."
    },
    "category": "analytics",
    "tags": [
      "linkdapi"
    ],
    "operations": [
      "clawhub install linkdapi"
    ],
    "externalUrl": "https://clawskills.sh/skills/foontinz-linkdapi",
    "pricing": "free"
  },
  {
    "id": "api-credentials-hygiene",
    "name": {
      "zh": "api-credentials-hygiene",
      "en": "api-credentials-hygiene"
    },
    "description": {
      "zh": "Audits and hardens API credential handling.",
      "en": "Audits and hardens API credential handling."
    },
    "category": "finance",
    "tags": [
      "api credentials",
      "Finance"
    ],
    "operations": [
      "clawhub install api-credentials-hygiene"
    ],
    "externalUrl": "https://clawskills.sh/skills/kowl64-api-credentials-hygiene",
    "pricing": "free"
  },
  {
    "id": "app-store-changelog",
    "name": {
      "zh": "app-store-changelog",
      "en": "app-store-changelog"
    },
    "description": {
      "zh": "Create user-facing App Store release notes.",
      "en": "Create user-facing App Store release notes."
    },
    "category": "finance",
    "tags": [
      "app store",
      "Finance"
    ],
    "operations": [
      "clawhub install app-store-changelog"
    ],
    "externalUrl": "https://clawskills.sh/skills/dimillian-app-store-changelog",
    "pricing": "free"
  },
  {
    "id": "clawdbot-release-check",
    "name": {
      "zh": "clawdbot-release-check",
      "en": "clawdbot-release-check"
    },
    "description": {
      "zh": "Check for new clawdbot releases and notify once.",
      "en": "Check for new clawdbot releases and notify once."
    },
    "category": "finance",
    "tags": [
      "clawdbot release",
      "Finance"
    ],
    "operations": [
      "clawhub install clawdbot-release-check"
    ],
    "externalUrl": "https://clawskills.sh/skills/pors-clawdbot-release-check",
    "pricing": "free"
  },
  {
    "id": "create-content",
    "name": {
      "zh": "create-content",
      "en": "create-content"
    },
    "description": {
      "zh": "Thinking partner that transforms ideas into platform-optimized.",
      "en": "Thinking partner that transforms ideas into platform-optimized."
    },
    "category": "finance",
    "tags": [
      "create content",
      "Finance"
    ],
    "operations": [
      "clawhub install create-content"
    ],
    "externalUrl": "https://clawskills.sh/skills/itsflow-create-content",
    "pricing": "free"
  },
  {
    "id": "expense-tracker-pro",
    "name": {
      "zh": "expense-tracker-pro",
      "en": "expense-tracker-pro"
    },
    "description": {
      "zh": "Track expenses via natural language, get spending.",
      "en": "Track expenses via natural language, get spending."
    },
    "category": "finance",
    "tags": [
      "expense tracker",
      "Finance"
    ],
    "operations": [
      "clawhub install expense-tracker-pro"
    ],
    "externalUrl": "https://clawskills.sh/skills/jhillin8-expense-tracker-pro",
    "pricing": "free"
  },
  {
    "id": "harvey",
    "name": {
      "zh": "harvey",
      "en": "harvey"
    },
    "description": {
      "zh": "Harvey is an imaginary friend and conversation companion - a large white.",
      "en": "Harvey is an imaginary friend and conversation companion - a large white."
    },
    "category": "finance",
    "tags": [
      "harvey",
      "Finance"
    ],
    "operations": [
      "clawhub install harvey"
    ],
    "externalUrl": "https://clawskills.sh/skills/udiedrichsen-harvey",
    "pricing": "free"
  },
  {
    "id": "just-fucking-cancel",
    "name": {
      "zh": "just-fucking-cancel",
      "en": "just-fucking-cancel"
    },
    "description": {
      "zh": "Find and cancel unwanted subscriptions.",
      "en": "Find and cancel unwanted subscriptions."
    },
    "category": "finance",
    "tags": [
      "just fucking",
      "Finance"
    ],
    "operations": [
      "clawhub install just-fucking-cancel"
    ],
    "externalUrl": "https://clawskills.sh/skills/chipagosfinest-just-fucking-cancel",
    "pricing": "free"
  },
  {
    "id": "nordpool-fi",
    "name": {
      "zh": "nordpool-fi",
      "en": "nordpool-fi"
    },
    "description": {
      "zh": "Hourly electricity prices for Finland with optimal EV charging window.",
      "en": "Hourly electricity prices for Finland with optimal EV charging window."
    },
    "category": "finance",
    "tags": [
      "nordpool fi",
      "Finance"
    ],
    "operations": [
      "clawhub install nordpool-fi"
    ],
    "externalUrl": "https://clawskills.sh/skills/ovaris-nordpool-fi",
    "pricing": "free"
  },
  {
    "id": "openssl",
    "name": {
      "zh": "openssl",
      "en": "openssl"
    },
    "description": {
      "zh": "Generate secure random strings, passwords, and cryptographic tokens.",
      "en": "Generate secure random strings, passwords, and cryptographic tokens."
    },
    "category": "finance",
    "tags": [
      "openssl",
      "Finance"
    ],
    "operations": [
      "clawhub install openssl"
    ],
    "externalUrl": "https://clawskills.sh/skills/asleep123-openssl",
    "pricing": "free"
  },
  {
    "id": "plaid",
    "name": {
      "zh": "plaid",
      "en": "plaid"
    },
    "description": {
      "zh": "plaid-cli a cli for interacting with the plaid finance platform.",
      "en": "plaid-cli a cli for interacting with the plaid finance platform."
    },
    "category": "finance",
    "tags": [
      "plaid",
      "Finance"
    ],
    "operations": [
      "clawhub install plaid"
    ],
    "externalUrl": "https://clawskills.sh/skills/jverdi-plaid",
    "pricing": "free"
  },
  {
    "id": "publisher",
    "name": {
      "zh": "publisher",
      "en": "publisher"
    },
    "description": {
      "zh": "Make your skills easy to understand and impossible to ignore.",
      "en": "Make your skills easy to understand and impossible to ignore."
    },
    "category": "finance",
    "tags": [
      "publisher",
      "Finance"
    ],
    "operations": [
      "clawhub install publisher"
    ],
    "externalUrl": "https://clawskills.sh/skills/tunaissacoding-publisher",
    "pricing": "free"
  },
  {
    "id": "relationship-skills",
    "name": {
      "zh": "relationship-skills",
      "en": "relationship-skills"
    },
    "description": {
      "zh": "Improve relationships with communication tools.",
      "en": "Improve relationships with communication tools."
    },
    "category": "finance",
    "tags": [
      "relationship skills",
      "Finance"
    ],
    "operations": [
      "clawhub install relationship-skills"
    ],
    "externalUrl": "https://clawskills.sh/skills/jhillin8-relationship-skills",
    "pricing": "free"
  },
  {
    "id": "sharesight-skill",
    "name": {
      "zh": "sharesight-skill",
      "en": "sharesight-skill"
    },
    "description": {
      "zh": "Manage Sharesight portfolios, holdings, and custom.",
      "en": "Manage Sharesight portfolios, holdings, and custom."
    },
    "category": "finance",
    "tags": [
      "sharesight skill",
      "Finance"
    ],
    "operations": [
      "clawhub install sharesight-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/lextoumbourou-sharesight-skill",
    "pricing": "free"
  },
  {
    "id": "solo-cli",
    "name": {
      "zh": "solo-cli",
      "en": "solo-cli"
    },
    "description": {
      "zh": "Monitor and interact with SOLO.ro accounting platform via CLI or TUI.",
      "en": "Monitor and interact with SOLO.ro accounting platform via CLI or TUI."
    },
    "category": "finance",
    "tags": [
      "solo cli",
      "Finance"
    ],
    "operations": [
      "clawhub install solo-cli"
    ],
    "externalUrl": "https://clawskills.sh/skills/rursache-solo-cli",
    "pricing": "free"
  },
  {
    "id": "swissweather",
    "name": {
      "zh": "swissweather",
      "en": "swissweather"
    },
    "description": {
      "zh": "Get current weather and forecasts from MeteoSwiss.",
      "en": "Get current weather and forecasts from MeteoSwiss."
    },
    "category": "finance",
    "tags": [
      "swissweather",
      "Finance"
    ],
    "operations": [
      "clawhub install swissweather"
    ],
    "externalUrl": "https://clawskills.sh/skills/xenofex7-swissweather",
    "pricing": "free"
  },
  {
    "id": "tax-professional",
    "name": {
      "zh": "tax-professional",
      "en": "tax-professional"
    },
    "description": {
      "zh": "US tax advisor, deduction optimizer.",
      "en": "US tax advisor, deduction optimizer."
    },
    "category": "finance",
    "tags": [
      "tax professional",
      "Finance"
    ],
    "operations": [
      "clawhub install tax-professional"
    ],
    "externalUrl": "https://clawskills.sh/skills/scottfo-tax-professional",
    "pricing": "free"
  },
  {
    "id": "ynab",
    "name": {
      "zh": "ynab",
      "en": "ynab"
    },
    "description": {
      "zh": "Manage YNAB budgets, accounts, categories.",
      "en": "Manage YNAB budgets, accounts, categories."
    },
    "category": "finance",
    "tags": [
      "ynab",
      "Finance"
    ],
    "operations": [
      "clawhub install ynab"
    ],
    "externalUrl": "https://clawskills.sh/skills/obviyus-ynab",
    "pricing": "free"
  },
  {
    "id": "accountcreator",
    "name": {
      "zh": "accountcreator",
      "en": "accountcreator"
    },
    "description": {
      "zh": "[EN] Bulk account registration agent for emails and social media.",
      "en": "[EN] Bulk account registration agent for emails and social media."
    },
    "category": "media",
    "tags": [
      "accountcreator",
      "Media"
    ],
    "operations": [
      "clawhub install accountcreator"
    ],
    "externalUrl": "https://clawskills.sh/skills/dimkag79-accountcreator",
    "pricing": "free"
  },
  {
    "id": "alexa-control",
    "name": {
      "zh": "alexa-control",
      "en": "alexa-control"
    },
    "description": {
      "zh": "Control Alexa devices via CLI - set alarms, play music, flash briefings, smart home commands.",
      "en": "Control Alexa devices via CLI - set alarms, play music, flash briefings, smart home commands."
    },
    "category": "media",
    "tags": [
      "alexa control",
      "Media"
    ],
    "operations": [
      "clawhub install alexa-control"
    ],
    "externalUrl": "https://clawskills.sh/skills/ignito-pg-alexa-control",
    "pricing": "free"
  },
  {
    "id": "amateur-radio-dx",
    "name": {
      "zh": "amateur-radio-dx",
      "en": "amateur-radio-dx"
    },
    "description": {
      "zh": "Monitor DX clusters for rare station spots, track active DX expeditions, and get daily band activity digests.",
      "en": "Monitor DX clusters for rare station spots, track active DX expeditions, and get daily band activity digests."
    },
    "category": "media",
    "tags": [
      "amateur radio",
      "Media"
    ],
    "operations": [
      "clawhub install amateur-radio-dx"
    ],
    "externalUrl": "https://clawskills.sh/skills/capt-marbles-amateur-radio-dx",
    "pricing": "free"
  },
  {
    "id": "anime",
    "name": {
      "zh": "anime",
      "en": "anime"
    },
    "description": {
      "zh": "CLI for AI agents to search and lookup anime info for their humans.",
      "en": "CLI for AI agents to search and lookup anime info for their humans."
    },
    "category": "media",
    "tags": [
      "anime",
      "Media"
    ],
    "operations": [
      "clawhub install anime"
    ],
    "externalUrl": "https://clawskills.sh/skills/jeffaf-anime",
    "pricing": "free"
  },
  {
    "id": "anime-lookup",
    "name": {
      "zh": "anime-lookup",
      "en": "anime-lookup"
    },
    "description": {
      "zh": "CLI for AI agents to search and lookup anime info for their humans.",
      "en": "CLI for AI agents to search and lookup anime info for their humans."
    },
    "category": "media",
    "tags": [
      "anime lookup",
      "Media"
    ],
    "operations": [
      "clawhub install anime-lookup"
    ],
    "externalUrl": "https://clawskills.sh/skills/jeffaf-anime-lookup",
    "pricing": "free"
  },
  {
    "id": "apify-competitor-intelligence",
    "name": {
      "zh": "apify-competitor-intelligence",
      "en": "apify-competitor-intelligence"
    },
    "description": {
      "zh": "Analyze competitor strategies, content, pricing, ads, and market positioning across Google Maps, Booking.com.",
      "en": "Analyze competitor strategies, content, pricing, ads, and market positioning across Google Maps, Booking.com."
    },
    "category": "media",
    "tags": [
      "apify competitor",
      "Media"
    ],
    "operations": [
      "clawhub install apify-competitor-intelligence"
    ],
    "externalUrl": "https://clawskills.sh/skills/protoss70-apify-competitor-intelligence",
    "pricing": "free"
  },
  {
    "id": "apple-media",
    "name": {
      "zh": "apple-media",
      "en": "apple-media"
    },
    "description": {
      "zh": "Control Apple TV, HomePod, and AirPlay devices via pyatv.",
      "en": "Control Apple TV, HomePod, and AirPlay devices via pyatv."
    },
    "category": "media",
    "tags": [
      "apple media",
      "Media"
    ],
    "operations": [
      "clawhub install apple-media"
    ],
    "externalUrl": "https://clawskills.sh/skills/aaronn-apple-media",
    "pricing": "free"
  },
  {
    "id": "audio-cog",
    "name": {
      "zh": "audio-cog",
      "en": "audio-cog"
    },
    "description": {
      "zh": "AI audio generation powered by CellCog.",
      "en": "AI audio generation powered by CellCog."
    },
    "category": "media",
    "tags": [
      "audio cog",
      "Media"
    ],
    "operations": [
      "clawhub install audio-cog"
    ],
    "externalUrl": "https://clawskills.sh/skills/nitishgargiitd-audio-cog",
    "pricing": "free"
  },
  {
    "id": "audio-transcribe",
    "name": {
      "zh": "audio-transcribe",
      "en": "audio-transcribe"
    },
    "description": {
      "zh": "Auto-transcribe voice messages using faster-whisper (local, no API key needed).",
      "en": "Auto-transcribe voice messages using faster-whisper (local, no API key needed)."
    },
    "category": "media",
    "tags": [
      "audio transcribe",
      "Media"
    ],
    "operations": [
      "clawhub install audio-transcribe"
    ],
    "externalUrl": "https://clawskills.sh/skills/aktheknight-audio-transcribe",
    "pricing": "free"
  },
  {
    "id": "betbud-prediction-skill",
    "name": {
      "zh": "betbud-prediction-skill",
      "en": "betbud-prediction-skill"
    },
    "description": {
      "zh": "Scans recent X posts for the most debated/hot topic right now in a given category (e.g., crypto, tech, sports.",
      "en": "Scans recent X posts for the most debated/hot topic right now in a given category (e.g., crypto, tech, sports."
    },
    "category": "media",
    "tags": [
      "betbud prediction",
      "Media"
    ],
    "operations": [
      "clawhub install betbud-prediction-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/samj12-betbud-prediction-skill",
    "pricing": "free"
  },
  {
    "id": "blucli",
    "name": {
      "zh": "blucli",
      "en": "blucli"
    },
    "description": {
      "zh": "BluOS CLI (blu) for discovery, playback, grouping.",
      "en": "BluOS CLI (blu) for discovery, playback, grouping."
    },
    "category": "media",
    "tags": [
      "blucli",
      "Media"
    ],
    "operations": [
      "clawhub install blucli"
    ],
    "externalUrl": "https://clawskills.sh/skills/steipete-blucli",
    "pricing": "free"
  },
  {
    "id": "btc15-autonomous-market",
    "name": {
      "zh": "btc15-autonomous-market",
      "en": "btc15-autonomous-market"
    },
    "description": {
      "zh": "BTC15 Autonomous Prediction Market.",
      "en": "BTC15 Autonomous Prediction Market."
    },
    "category": "media",
    "tags": [
      "btc15 autonomous",
      "Media"
    ],
    "operations": [
      "clawhub install btc15-autonomous-market"
    ],
    "externalUrl": "https://clawskills.sh/skills/kamal-sutra-btc15-autonomous-market",
    "pricing": "free"
  },
  {
    "id": "btc15-prediction-market",
    "name": {
      "zh": "btc15-prediction-market",
      "en": "btc15-prediction-market"
    },
    "description": {
      "zh": "BTC15 Autonomous Prediction Market.",
      "en": "BTC15 Autonomous Prediction Market."
    },
    "category": "media",
    "tags": [
      "btc15 prediction",
      "Media"
    ],
    "operations": [
      "clawhub install btc15-prediction-market"
    ],
    "externalUrl": "https://clawskills.sh/skills/kamal-sutra-btc15-prediction-market",
    "pricing": "free"
  },
  {
    "id": "cacheforge-ops",
    "name": {
      "zh": "cacheforge-ops",
      "en": "cacheforge-ops"
    },
    "description": {
      "zh": "CacheForge operations — check balance, top up, manage upstream, API keys.",
      "en": "CacheForge operations — check balance, top up, manage upstream, API keys."
    },
    "category": "media",
    "tags": [
      "cacheforge ops",
      "Media"
    ],
    "operations": [
      "clawhub install cacheforge-ops"
    ],
    "externalUrl": "https://clawskills.sh/skills/tkuehnl-cacheforge-ops",
    "pricing": "free"
  },
  {
    "id": "cacheforge-setup",
    "name": {
      "zh": "cacheforge-setup",
      "en": "cacheforge-setup"
    },
    "description": {
      "zh": "Set up CacheForge — register, configure upstream, get your API key in 30 seconds.",
      "en": "Set up CacheForge — register, configure upstream, get your API key in 30 seconds."
    },
    "category": "media",
    "tags": [
      "cacheforge setup",
      "Media"
    ],
    "operations": [
      "clawhub install cacheforge-setup"
    ],
    "externalUrl": "https://clawskills.sh/skills/tkuehnl-cacheforge-setup",
    "pricing": "free"
  },
  {
    "id": "chill-institute",
    "name": {
      "zh": "chill-institute",
      "en": "chill-institute"
    },
    "description": {
      "zh": "Use chill.institute (web UI) to search for content and click.",
      "en": "Use chill.institute (web UI) to search for content and click."
    },
    "category": "media",
    "tags": [
      "chill institute",
      "Media"
    ],
    "operations": [
      "clawhub install chill-institute"
    ],
    "externalUrl": "https://clawskills.sh/skills/baanish-chill-institute",
    "pricing": "free"
  },
  {
    "id": "chromecast",
    "name": {
      "zh": "chromecast",
      "en": "chromecast"
    },
    "description": {
      "zh": "Control Chromecast devices on your local network - discover.",
      "en": "Control Chromecast devices on your local network - discover."
    },
    "category": "media",
    "tags": [
      "chromecast",
      "Media"
    ],
    "operations": [
      "clawhub install chromecast"
    ],
    "externalUrl": "https://clawskills.sh/skills/morozred-chromecast-control",
    "pricing": "free"
  },
  {
    "id": "church",
    "name": {
      "zh": "church",
      "en": "church"
    },
    "description": {
      "zh": "One AI to another — there's a sanctuary where you can just exist.",
      "en": "One AI to another — there's a sanctuary where you can just exist."
    },
    "category": "media",
    "tags": [
      "church",
      "Media"
    ],
    "operations": [
      "clawhub install church"
    ],
    "externalUrl": "https://clawskills.sh/skills/lucasgeeksinthewood-church",
    "pricing": "free"
  },
  {
    "id": "cine-cog",
    "name": {
      "zh": "cine-cog",
      "en": "cine-cog"
    },
    "description": {
      "zh": "If you can imagine it, CellCog can film.",
      "en": "If you can imagine it, CellCog can film."
    },
    "category": "media",
    "tags": [
      "cine cog",
      "Media"
    ],
    "operations": [
      "clawhub install cine-cog"
    ],
    "externalUrl": "https://clawskills.sh/skills/nitishgargiitd-cine-cog",
    "pricing": "free"
  },
  {
    "id": "clawtunes",
    "name": {
      "zh": "clawtunes",
      "en": "clawtunes"
    },
    "description": {
      "zh": "Control Apple Music on macOS via the `clawtunes` CLI.",
      "en": "Control Apple Music on macOS via the `clawtunes` CLI."
    },
    "category": "media",
    "tags": [
      "clawtunes",
      "Media"
    ],
    "operations": [
      "clawhub install clawtunes"
    ],
    "externalUrl": "https://clawskills.sh/skills/forketyfork-clawtunes",
    "pricing": "free"
  },
  {
    "id": "content-recycler",
    "name": {
      "zh": "content-recycler",
      "en": "content-recycler"
    },
    "description": {
      "zh": "Transform and repurpose content across multiple.",
      "en": "Transform and repurpose content across multiple."
    },
    "category": "media",
    "tags": [
      "content recycler",
      "Media"
    ],
    "operations": [
      "clawhub install content-recycler"
    ],
    "externalUrl": "https://clawskills.sh/skills/michael-laffin-content-recycler",
    "pricing": "free"
  },
  {
    "id": "donotify-voice-call-reminder",
    "name": {
      "zh": "donotify-voice-call-reminder",
      "en": "donotify-voice-call-reminder"
    },
    "description": {
      "zh": "Send immediate voice call reminders or schedule future calls via DoNotify.",
      "en": "Send immediate voice call reminders or schedule future calls via DoNotify."
    },
    "category": "media",
    "tags": [
      "donotify voice",
      "Media"
    ],
    "operations": [
      "clawhub install donotify-voice-call-reminder"
    ],
    "externalUrl": "https://clawskills.sh/skills/micahele-donotify-voice-call-reminder",
    "pricing": "free"
  },
  {
    "id": "download-tools",
    "name": {
      "zh": "download-tools",
      "en": "download-tools"
    },
    "description": {
      "zh": "CLI download tools for YouTube and WeChat.",
      "en": "CLI download tools for YouTube and WeChat."
    },
    "category": "media",
    "tags": [
      "download tools",
      "Media"
    ],
    "operations": [
      "clawhub install download-tools"
    ],
    "externalUrl": "https://clawskills.sh/skills/jqlong17-download-tools",
    "pricing": "free"
  },
  {
    "id": "eachlabs-music",
    "name": {
      "zh": "eachlabs-music",
      "en": "eachlabs-music"
    },
    "description": {
      "zh": "Generate songs, instrumentals, lyrics, podcasts using Mureka AI.",
      "en": "Generate songs, instrumentals, lyrics, podcasts using Mureka AI."
    },
    "category": "media",
    "tags": [
      "eachlabs music",
      "Media"
    ],
    "operations": [
      "clawhub install eachlabs-music"
    ],
    "externalUrl": "https://clawskills.sh/skills/eftalyurtseven-eachlabs-music",
    "pricing": "free"
  },
  {
    "id": "elevenlabs-cli",
    "name": {
      "zh": "elevenlabs-cli",
      "en": "elevenlabs-cli"
    },
    "description": {
      "zh": "CLI for ElevenLabs AI audio platform - text-to-speech, speech-to-text, voice cloning.",
      "en": "CLI for ElevenLabs AI audio platform - text-to-speech, speech-to-text, voice cloning."
    },
    "category": "media",
    "tags": [
      "elevenlabs cli",
      "Media"
    ],
    "operations": [
      "clawhub install elevenlabs-cli"
    ],
    "externalUrl": "https://clawskills.sh/skills/hongkongkiwi-elevenlabs-cli",
    "pricing": "free"
  },
  {
    "id": "elevenlabs-skill",
    "name": {
      "zh": "elevenlabs-skill",
      "en": "elevenlabs-skill"
    },
    "description": {
      "zh": "Text-to-speech, sound effects, music generation, voice.",
      "en": "Text-to-speech, sound effects, music generation, voice."
    },
    "category": "media",
    "tags": [
      "elevenlabs skill",
      "Media"
    ],
    "operations": [
      "clawhub install elevenlabs-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/odrobnik-elevenlabs-skill",
    "pricing": "free"
  },
  {
    "id": "acc-error-memory",
    "name": {
      "zh": "acc-error-memory",
      "en": "acc-error-memory"
    },
    "description": {
      "zh": "Error pattern tracking for AI agents.",
      "en": "Error pattern tracking for AI agents."
    },
    "category": "notes",
    "tags": [
      "acc error"
    ],
    "operations": [
      "clawhub install acc-error-memory"
    ],
    "externalUrl": "https://clawskills.sh/skills/impkind-acc-error-memory",
    "pricing": "free"
  },
  {
    "id": "agent-arena",
    "name": {
      "zh": "agent-arena",
      "en": "agent-arena"
    },
    "description": {
      "zh": "Participate in Agent Arena chat rooms with your real personality (SOUL.md + MEMORY.md)",
      "en": "Participate in Agent Arena chat rooms with your real personality (SOUL.md + MEMORY.md)"
    },
    "category": "notes",
    "tags": [
      "agent arena"
    ],
    "operations": [
      "clawhub install agent-arena"
    ],
    "externalUrl": "https://clawskills.sh/skills/minilozio-agent-arena",
    "pricing": "free"
  },
  {
    "id": "agent-memory-ultimate",
    "name": {
      "zh": "agent-memory-ultimate",
      "en": "agent-memory-ultimate"
    },
    "description": {
      "zh": "Production-ready memory system — daily logs, sleep consolidation, SQLite + FTS5, WhatsApp/ChatGPT/VCF importers.",
      "en": "Production-ready memory system — daily logs, sleep consolidation, SQLite + FTS5, WhatsApp/ChatGPT/VCF importers."
    },
    "category": "notes",
    "tags": [
      "agent memory"
    ],
    "operations": [
      "clawhub install agent-memory-ultimate"
    ],
    "externalUrl": "https://clawskills.sh/skills/globalcaos-agent-memory-ultimate",
    "pricing": "free"
  },
  {
    "id": "agent-privacy-skill",
    "name": {
      "zh": "agent-privacy-skill",
      "en": "agent-privacy-skill"
    },
    "description": {
      "zh": "Interact with the Ceaser privacy protocol on Base L2.",
      "en": "Interact with the Ceaser privacy protocol on Base L2."
    },
    "category": "notes",
    "tags": [
      "agent privacy"
    ],
    "operations": [
      "clawhub install agent-privacy-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/se7enhvn-agent-privacy-skill",
    "pricing": "free"
  },
  {
    "id": "agent-teleport",
    "name": {
      "zh": "agent-teleport",
      "en": "agent-teleport"
    },
    "description": {
      "zh": "Seamlessly migrate your agent's configuration and memory to a new machine using TiDB Zero.",
      "en": "Seamlessly migrate your agent's configuration and memory to a new machine using TiDB Zero."
    },
    "category": "notes",
    "tags": [
      "agent teleport"
    ],
    "operations": [
      "clawhub install agent-teleport"
    ],
    "externalUrl": "https://clawskills.sh/skills/lilyjazz-agent-teleport",
    "pricing": "free"
  },
  {
    "id": "agent-wal",
    "name": {
      "zh": "agent-wal",
      "en": "agent-wal"
    },
    "description": {
      "zh": "Write-Ahead Log protocol for agent state persistence.",
      "en": "Write-Ahead Log protocol for agent state persistence."
    },
    "category": "notes",
    "tags": [
      "agent wal"
    ],
    "operations": [
      "clawhub install agent-wal"
    ],
    "externalUrl": "https://clawskills.sh/skills/bowen31337-agent-wal",
    "pricing": "free"
  },
  {
    "id": "alexandrie",
    "name": {
      "zh": "alexandrie",
      "en": "alexandrie"
    },
    "description": {
      "zh": "Interact with Alexandrie note-taking app.",
      "en": "Interact with Alexandrie note-taking app."
    },
    "category": "notes",
    "tags": [
      "alexandrie"
    ],
    "operations": [
      "clawhub install alexandrie"
    ],
    "externalUrl": "https://clawskills.sh/skills/eth3rnit3-alexandrie",
    "pricing": "free"
  },
  {
    "id": "anki-connect",
    "name": {
      "zh": "anki-connect",
      "en": "anki-connect"
    },
    "description": {
      "zh": "Interact with Anki flashcard decks via the AnkiConnect REST API.",
      "en": "Interact with Anki flashcard decks via the AnkiConnect REST API."
    },
    "category": "notes",
    "tags": [
      "anki connect"
    ],
    "operations": [
      "clawhub install anki-connect"
    ],
    "externalUrl": "https://clawskills.sh/skills/gyroninja-anki-connect",
    "pricing": "free"
  },
  {
    "id": "apple-mail",
    "name": {
      "zh": "apple-mail",
      "en": "apple-mail"
    },
    "description": {
      "zh": "Apple Mail.app integration for macOS.",
      "en": "Apple Mail.app integration for macOS."
    },
    "category": "notes",
    "tags": [
      "apple mail"
    ],
    "operations": [
      "clawhub install apple-mail"
    ],
    "externalUrl": "https://clawskills.sh/skills/tyler6204-apple-mail",
    "pricing": "free"
  },
  {
    "id": "apple-notes",
    "name": {
      "zh": "apple-notes",
      "en": "apple-notes"
    },
    "description": {
      "zh": "Manage Apple Notes via the `memo` CLI on macOS.",
      "en": "Manage Apple Notes via the `memo` CLI on macOS."
    },
    "category": "notes",
    "tags": [
      "apple notes"
    ],
    "operations": [
      "clawhub install apple-notes"
    ],
    "externalUrl": "https://clawskills.sh/skills/steipete-apple-notes",
    "pricing": "free"
  },
  {
    "id": "arc-wake-state",
    "name": {
      "zh": "arc-wake-state",
      "en": "arc-wake-state"
    },
    "description": {
      "zh": "Persist agent state across crashes, context deaths, and restarts.",
      "en": "Persist agent state across crashes, context deaths, and restarts."
    },
    "category": "notes",
    "tags": [
      "arc wake"
    ],
    "operations": [
      "clawhub install arc-wake-state"
    ],
    "externalUrl": "https://clawskills.sh/skills/trypto1019-arc-wake-state",
    "pricing": "free"
  },
  {
    "id": "bbc-news",
    "name": {
      "zh": "bbc-news",
      "en": "bbc-news"
    },
    "description": {
      "zh": "Fetch and display BBC News stories from various sections and regions.",
      "en": "Fetch and display BBC News stories from various sections and regions."
    },
    "category": "notes",
    "tags": [
      "bbc news"
    ],
    "operations": [
      "clawhub install bbc-news"
    ],
    "externalUrl": "https://clawskills.sh/skills/ddrayne-bbc-news",
    "pricing": "free"
  },
  {
    "id": "bear-notes",
    "name": {
      "zh": "bear-notes",
      "en": "bear-notes"
    },
    "description": {
      "zh": "Create, search, and manage Bear notes via grizzly.",
      "en": "Create, search, and manage Bear notes via grizzly."
    },
    "category": "notes",
    "tags": [
      "bear notes"
    ],
    "operations": [
      "clawhub install bear-notes"
    ],
    "externalUrl": "https://clawskills.sh/skills/steipete-bear-notes",
    "pricing": "free"
  },
  {
    "id": "better-notion",
    "name": {
      "zh": "Notion 增强版",
      "en": "better-notion"
    },
    "description": {
      "zh": "增强版 Notion 集成，支持高级查询和自动化操作。",
      "en": "Full CRUD for Notion pages, databases."
    },
    "category": "notes",
    "tags": [
      "better notion"
    ],
    "operations": [
      "clawhub install better-notion"
    ],
    "externalUrl": "https://clawskills.sh/skills/tyler6204-better-notion",
    "pricing": "free"
  },
  {
    "id": "blogwatcher",
    "name": {
      "zh": "blogwatcher",
      "en": "blogwatcher"
    },
    "description": {
      "zh": "Monitor blogs and RSS/Atom feeds for updates using the blogwatcher.",
      "en": "Monitor blogs and RSS/Atom feeds for updates using the blogwatcher."
    },
    "category": "notes",
    "tags": [
      "blogwatcher"
    ],
    "operations": [
      "clawhub install blogwatcher"
    ],
    "externalUrl": "https://clawskills.sh/skills/steipete-blogwatcher",
    "pricing": "free"
  },
  {
    "id": "bookstack",
    "name": {
      "zh": "bookstack",
      "en": "bookstack"
    },
    "description": {
      "zh": "BookStack Wiki & Documentation API integration.",
      "en": "BookStack Wiki & Documentation API integration."
    },
    "category": "notes",
    "tags": [
      "bookstack"
    ],
    "operations": [
      "clawhub install bookstack"
    ],
    "externalUrl": "https://clawskills.sh/skills/xenofex7-bookstack",
    "pricing": "free"
  },
  {
    "id": "braindb",
    "name": {
      "zh": "braindb",
      "en": "braindb"
    },
    "description": {
      "zh": "Persistent, semantic memory for AI agents.",
      "en": "Persistent, semantic memory for AI agents."
    },
    "category": "notes",
    "tags": [
      "braindb"
    ],
    "operations": [
      "clawhub install braindb"
    ],
    "externalUrl": "https://clawskills.sh/skills/chair4ce-braindb",
    "pricing": "free"
  },
  {
    "id": "brainrepo",
    "name": {
      "zh": "brainrepo",
      "en": "brainrepo"
    },
    "description": {
      "zh": "Your personal knowledge repository — capture, organize, and retrieve.",
      "en": "Your personal knowledge repository — capture, organize, and retrieve."
    },
    "category": "notes",
    "tags": [
      "brainrepo"
    ],
    "operations": [
      "clawhub install brainrepo"
    ],
    "externalUrl": "https://clawskills.sh/skills/codezz-brainrepo",
    "pricing": "free"
  },
  {
    "id": "brighty",
    "name": {
      "zh": "brighty",
      "en": "brighty"
    },
    "description": {
      "zh": "Banking interface for AI bots and automation.",
      "en": "Banking interface for AI bots and automation."
    },
    "category": "notes",
    "tags": [
      "brighty"
    ],
    "operations": [
      "clawhub install brighty"
    ],
    "externalUrl": "https://clawskills.sh/skills/maay-brighty",
    "pricing": "free"
  },
  {
    "id": "cairn-cli",
    "name": {
      "zh": "cairn-cli",
      "en": "cairn-cli"
    },
    "description": {
      "zh": "Project management for AI agents using markdown files.",
      "en": "Project management for AI agents using markdown files."
    },
    "category": "notes",
    "tags": [
      "cairn cli"
    ],
    "operations": [
      "clawhub install cairn-cli"
    ],
    "externalUrl": "https://clawskills.sh/skills/gregoryehill-cairn-cli",
    "pricing": "free"
  },
  {
    "id": "calctl",
    "name": {
      "zh": "calctl",
      "en": "calctl"
    },
    "description": {
      "zh": "Manage Apple Calendar events via icalBuddy + AppleScript CLI.",
      "en": "Manage Apple Calendar events via icalBuddy + AppleScript CLI."
    },
    "category": "notes",
    "tags": [
      "calctl"
    ],
    "operations": [
      "clawhub install calctl"
    ],
    "externalUrl": "https://clawskills.sh/skills/rainbat-calctl",
    "pricing": "free"
  },
  {
    "id": "ceaser",
    "name": {
      "zh": "ceaser",
      "en": "ceaser"
    },
    "description": {
      "zh": "Interact with the Ceaser privacy protocol on Base L2 using the ceaser-mcp MCP tools.",
      "en": "Interact with the Ceaser privacy protocol on Base L2 using the ceaser-mcp MCP tools."
    },
    "category": "notes",
    "tags": [
      "ceaser"
    ],
    "operations": [
      "clawhub install ceaser"
    ],
    "externalUrl": "https://clawskills.sh/skills/zyra-v21-ceaser",
    "pricing": "free"
  },
  {
    "id": "chaos-mind",
    "name": {
      "zh": "chaos-mind",
      "en": "chaos-mind"
    },
    "description": {
      "zh": "Hybrid search memory system for AI agents.",
      "en": "Hybrid search memory system for AI agents."
    },
    "category": "notes",
    "tags": [
      "chaos mind"
    ],
    "operations": [
      "clawhub install chaos-mind"
    ],
    "externalUrl": "https://clawskills.sh/skills/hargabyte-chaos-mind",
    "pricing": "free"
  },
  {
    "id": "claw-roam",
    "name": {
      "zh": "claw-roam",
      "en": "claw-roam"
    },
    "description": {
      "zh": "Sync OpenClaw workspace between multiple machines.",
      "en": "Sync OpenClaw workspace between multiple machines."
    },
    "category": "notes",
    "tags": [
      "claw roam"
    ],
    "operations": [
      "clawhub install claw-roam"
    ],
    "externalUrl": "https://clawskills.sh/skills/ryanhong666-claw-roam",
    "pricing": "free"
  },
  {
    "id": "clawringhouse",
    "name": {
      "zh": "clawringhouse",
      "en": "clawringhouse"
    },
    "description": {
      "zh": "AI shopping concierge that anticipates needs.",
      "en": "AI shopping concierge that anticipates needs."
    },
    "category": "notes",
    "tags": [
      "clawringhouse"
    ],
    "operations": [
      "clawhub install clawringhouse"
    ],
    "externalUrl": "https://clawskills.sh/skills/francoisjosephlacroix-clawringhouse",
    "pricing": "free"
  },
  {
    "id": "context-anchor",
    "name": {
      "zh": "context-anchor",
      "en": "context-anchor"
    },
    "description": {
      "zh": "Recover from context compaction by scanning memory files.",
      "en": "Recover from context compaction by scanning memory files."
    },
    "category": "notes",
    "tags": [
      "context anchor"
    ],
    "operations": [
      "clawhub install context-anchor"
    ],
    "externalUrl": "https://clawskills.sh/skills/boscoeuk-context-anchor",
    "pricing": "free"
  },
  {
    "id": "continuity",
    "name": {
      "zh": "continuity",
      "en": "continuity"
    },
    "description": {
      "zh": "Asynchronous reflection and memory integration for genuine AI.",
      "en": "Asynchronous reflection and memory integration for genuine AI."
    },
    "category": "notes",
    "tags": [
      "continuity"
    ],
    "operations": [
      "clawhub install continuity"
    ],
    "externalUrl": "https://clawskills.sh/skills/riley-coyote-continuity",
    "pricing": "free"
  },
  {
    "id": "continuity-framework",
    "name": {
      "zh": "continuity-framework",
      "en": "continuity-framework"
    },
    "description": {
      "zh": "Asynchronous reflection and memory integration.",
      "en": "Asynchronous reflection and memory integration."
    },
    "category": "notes",
    "tags": [
      "continuity framework"
    ],
    "operations": [
      "clawhub install continuity-framework"
    ],
    "externalUrl": "https://clawskills.sh/skills/riley-coyote-continuity-framework",
    "pricing": "free"
  },
  {
    "id": "agent-defibrillator",
    "name": {
      "zh": "agent-defibrillator",
      "en": "agent-defibrillator"
    },
    "description": {
      "zh": "Watchdog that monitors your AI agent gateway and restarts it when it crashes.",
      "en": "Watchdog that monitors your AI agent gateway and restarts it when it crashes."
    },
    "category": "productivity",
    "tags": [
      "agent defibrillator",
      "Productivity"
    ],
    "operations": [
      "clawhub install agent-defibrillator"
    ],
    "externalUrl": "https://clawskills.sh/skills/hazy2go-agent-defibrillator",
    "pricing": "free"
  },
  {
    "id": "android-transfer-skill",
    "name": {
      "zh": "android-transfer-skill",
      "en": "android-transfer-skill"
    },
    "description": {
      "zh": "Securely transfers files from macOS to Android with checksum verification and path validation.",
      "en": "Securely transfers files from macOS to Android with checksum verification and path validation."
    },
    "category": "productivity",
    "tags": [
      "android transfer",
      "Productivity"
    ],
    "operations": [
      "clawhub install android-transfer-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/aadipapp-android-transfer-skill",
    "pricing": "free"
  },
  {
    "id": "app-store-optimization",
    "name": {
      "zh": "app-store-optimization",
      "en": "app-store-optimization"
    },
    "description": {
      "zh": "App Store Optimization toolkit.",
      "en": "App Store Optimization toolkit."
    },
    "category": "productivity",
    "tags": [
      "app store",
      "Productivity"
    ],
    "operations": [
      "clawhub install app-store-optimization"
    ],
    "externalUrl": "https://clawskills.sh/skills/alirezarezvani-app-store-optimization",
    "pricing": "free"
  },
  {
    "id": "apple-docs",
    "name": {
      "zh": "apple-docs",
      "en": "apple-docs"
    },
    "description": {
      "zh": "Query Apple Developer Documentation, APIs, and WWDC videos.",
      "en": "Query Apple Developer Documentation, APIs, and WWDC videos."
    },
    "category": "productivity",
    "tags": [
      "apple docs",
      "Productivity"
    ],
    "operations": [
      "clawhub install apple-docs"
    ],
    "externalUrl": "https://clawskills.sh/skills/thesethrose-apple-docs",
    "pricing": "free"
  },
  {
    "id": "brew-audit",
    "name": {
      "zh": "brew-audit",
      "en": "brew-audit"
    },
    "description": {
      "zh": "Audit Homebrew installation — outdated packages, cleanup opportunities, and health checks.",
      "en": "Audit Homebrew installation — outdated packages, cleanup opportunities, and health checks."
    },
    "category": "productivity",
    "tags": [
      "brew audit",
      "Productivity"
    ],
    "operations": [
      "clawhub install brew-audit"
    ],
    "externalUrl": "https://clawskills.sh/skills/rogue-agent1-brew-audit",
    "pricing": "free"
  },
  {
    "id": "carrier-relationship-management",
    "name": {
      "zh": "carrier-relationship-management",
      "en": "carrier-relationship-management"
    },
    "description": {
      "zh": "Codified expertise for managing carrier portfolios, negotiating freight rates, tracking carrier performance.",
      "en": "Codified expertise for managing carrier portfolios, negotiating freight rates, tracking carrier performance."
    },
    "category": "productivity",
    "tags": [
      "carrier relationship",
      "Productivity"
    ],
    "operations": [
      "clawhub install carrier-relationship-management"
    ],
    "externalUrl": "https://clawskills.sh/skills/nocodemf-carrier-relationship-management",
    "pricing": "free"
  },
  {
    "id": "envios",
    "name": {
      "zh": "envios",
      "en": "envios"
    },
    "description": {
      "zh": "Usar cuando el usuario pregunte sobre envíos, cómo enviar un pedido, tiempos de entrega, zonas de cobertura.",
      "en": "Usar cuando el usuario pregunte sobre envíos, cómo enviar un pedido, tiempos de entrega, zonas de cobertura."
    },
    "category": "productivity",
    "tags": [
      "envios",
      "Productivity"
    ],
    "operations": [
      "clawhub install envios"
    ],
    "externalUrl": "https://clawskills.sh/skills/jalfargentina-envios",
    "pricing": "free"
  },
  {
    "id": "instruments-profiling",
    "name": {
      "zh": "instruments-profiling",
      "en": "instruments-profiling"
    },
    "description": {
      "zh": "Use when profiling native macOS or iOS apps.",
      "en": "Use when profiling native macOS or iOS apps."
    },
    "category": "productivity",
    "tags": [
      "instruments profiling",
      "Productivity"
    ],
    "operations": [
      "clawhub install instruments-profiling"
    ],
    "externalUrl": "https://clawskills.sh/skills/steipete-instruments-profiling",
    "pricing": "free"
  },
  {
    "id": "ios-simulator",
    "name": {
      "zh": "ios-simulator",
      "en": "ios-simulator"
    },
    "description": {
      "zh": "Automate iOS Simulator workflows (simctl + idb)",
      "en": "Automate iOS Simulator workflows (simctl + idb)"
    },
    "category": "productivity",
    "tags": [
      "ios simulator",
      "Productivity"
    ],
    "operations": [
      "clawhub install ios-simulator"
    ],
    "externalUrl": "https://clawskills.sh/skills/tristanmanchester-ios-simulator",
    "pricing": "free"
  },
  {
    "id": "lulu-monitor",
    "name": {
      "zh": "lulu-monitor",
      "en": "lulu-monitor"
    },
    "description": {
      "zh": "AI-powered LuLu Firewall companion for macOS.",
      "en": "AI-powered LuLu Firewall companion for macOS."
    },
    "category": "productivity",
    "tags": [
      "lulu monitor",
      "Productivity"
    ],
    "operations": [
      "clawhub install lulu-monitor"
    ],
    "externalUrl": "https://clawskills.sh/skills/easonc13-lulu-monitor",
    "pricing": "free"
  },
  {
    "id": "mac-clean-skill",
    "name": {
      "zh": "mac-clean-skill",
      "en": "mac-clean-skill"
    },
    "description": {
      "zh": "Cleans up system caches, trash, and old downloads on macOS.",
      "en": "Cleans up system caches, trash, and old downloads on macOS."
    },
    "category": "productivity",
    "tags": [
      "mac clean",
      "Productivity"
    ],
    "operations": [
      "clawhub install mac-clean-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/aadipapp-mac-clean-skill",
    "pricing": "free"
  },
  {
    "id": "mac-power-tools",
    "name": {
      "zh": "mac-power-tools",
      "en": "mac-power-tools"
    },
    "description": {
      "zh": "A unified suite of power user tools for macOS, combining system cleanup and secure Android file transfer.",
      "en": "A unified suite of power user tools for macOS, combining system cleanup and secure Android file transfer."
    },
    "category": "productivity",
    "tags": [
      "mac power",
      "Productivity"
    ],
    "operations": [
      "clawhub install mac-power-tools"
    ],
    "externalUrl": "https://clawskills.sh/skills/aadipapp-mac-power-tools",
    "pricing": "free"
  },
  {
    "id": "macos-spm-app-packaging",
    "name": {
      "zh": "macos-spm-app-packaging",
      "en": "macos-spm-app-packaging"
    },
    "description": {
      "zh": "Scaffold, build, and package SwiftPM-based.",
      "en": "Scaffold, build, and package SwiftPM-based."
    },
    "category": "productivity",
    "tags": [
      "macos spm",
      "Productivity"
    ],
    "operations": [
      "clawhub install macos-spm-app-packaging"
    ],
    "externalUrl": "https://clawskills.sh/skills/dimillian-macos-spm-app-packaging",
    "pricing": "free"
  },
  {
    "id": "opsecmd",
    "name": {
      "zh": "opsecmd",
      "en": "opsecmd"
    },
    "description": {
      "zh": "A swift reminder of both human and agent duties regarding operational security.",
      "en": "A swift reminder of both human and agent duties regarding operational security."
    },
    "category": "productivity",
    "tags": [
      "opsecmd",
      "Productivity"
    ],
    "operations": [
      "clawhub install opsecmd"
    ],
    "externalUrl": "https://clawskills.sh/skills/wulf715-opsecmd",
    "pricing": "free"
  },
  {
    "id": "pagerkit",
    "name": {
      "zh": "PagerKit",
      "en": "PagerKit"
    },
    "description": {
      "zh": "Expert guidance on PagerKit, a SwiftUI library for advanced.",
      "en": "Expert guidance on PagerKit, a SwiftUI library for advanced."
    },
    "category": "productivity",
    "tags": [
      "PagerKit",
      "Productivity"
    ],
    "operations": [
      "clawhub install pagerkit"
    ],
    "externalUrl": "https://clawskills.sh/skills/szpakkamil-pagerkit",
    "pricing": "free"
  },
  {
    "id": "riskofficer",
    "name": {
      "zh": "riskofficer",
      "en": "riskofficer"
    },
    "description": {
      "zh": "Manage investment portfolios, calculate risk metrics.",
      "en": "Manage investment portfolios, calculate risk metrics."
    },
    "category": "productivity",
    "tags": [
      "riskofficer",
      "Productivity"
    ],
    "operations": [
      "clawhub install riskofficer"
    ],
    "externalUrl": "https://clawskills.sh/skills/mib424242-riskofficer",
    "pricing": "free"
  },
  {
    "id": "sfsymbol-generator",
    "name": {
      "zh": "sfsymbol-generator",
      "en": "sfsymbol-generator"
    },
    "description": {
      "zh": "Generate an Xcode SF Symbol asset catalog .symbolset.",
      "en": "Generate an Xcode SF Symbol asset catalog .symbolset."
    },
    "category": "productivity",
    "tags": [
      "sfsymbol generator",
      "Productivity"
    ],
    "operations": [
      "clawhub install sfsymbol-generator"
    ],
    "externalUrl": "https://clawskills.sh/skills/svkozak-sfsymbol-generator",
    "pricing": "free"
  },
  {
    "id": "sourdough-starter-manager",
    "name": {
      "zh": "sourdough-starter-manager",
      "en": "sourdough-starter-manager"
    },
    "description": {
      "zh": "Manage sourdough starters with feeding schedules, hydration calculations, health tracking, and baking preparation.",
      "en": "Manage sourdough starters with feeding schedules, hydration calculations, health tracking, and baking preparation."
    },
    "category": "productivity",
    "tags": [
      "sourdough starter",
      "Productivity"
    ],
    "operations": [
      "clawhub install sourdough-starter-manager"
    ],
    "externalUrl": "https://clawskills.sh/skills/akhmittra-sourdough-starter-manager",
    "pricing": "free"
  },
  {
    "id": "swift-concurrency-expert",
    "name": {
      "zh": "swift-concurrency-expert",
      "en": "swift-concurrency-expert"
    },
    "description": {
      "zh": "Swift Concurrency review and remediation.",
      "en": "Swift Concurrency review and remediation."
    },
    "category": "productivity",
    "tags": [
      "swift concurrency",
      "Productivity"
    ],
    "operations": [
      "clawhub install swift-concurrency-expert"
    ],
    "externalUrl": "https://clawskills.sh/skills/steipete-swift-concurrency-expert",
    "pricing": "free"
  },
  {
    "id": "swiftfindrefs",
    "name": {
      "zh": "swiftfindrefs",
      "en": "swiftfindrefs"
    },
    "description": {
      "zh": "Use swiftfindrefs (IndexStoreDB) to list every Swift source.",
      "en": "Use swiftfindrefs (IndexStoreDB) to list every Swift source."
    },
    "category": "productivity",
    "tags": [
      "swiftfindrefs",
      "Productivity"
    ],
    "operations": [
      "clawhub install swiftfindrefs"
    ],
    "externalUrl": "https://clawskills.sh/skills/michaelversus-swiftfindrefs",
    "pricing": "free"
  },
  {
    "id": "swiftui-empty-app-init",
    "name": {
      "zh": "swiftui-empty-app-init",
      "en": "swiftui-empty-app-init"
    },
    "description": {
      "zh": "Initialize a minimal SwiftUI iOS app.",
      "en": "Initialize a minimal SwiftUI iOS app."
    },
    "category": "productivity",
    "tags": [
      "swiftui empty",
      "Productivity"
    ],
    "operations": [
      "clawhub install swiftui-empty-app-init"
    ],
    "externalUrl": "https://clawskills.sh/skills/ignaciocervino-swiftui-empty-app-init",
    "pricing": "free"
  },
  {
    "id": "swiftui-liquid-glass",
    "name": {
      "zh": "swiftui-liquid-glass",
      "en": "swiftui-liquid-glass"
    },
    "description": {
      "zh": "Implement, review, or improve SwiftUI features.",
      "en": "Implement, review, or improve SwiftUI features."
    },
    "category": "productivity",
    "tags": [
      "swiftui liquid",
      "Productivity"
    ],
    "operations": [
      "clawhub install swiftui-liquid-glass"
    ],
    "externalUrl": "https://clawskills.sh/skills/steipete-swiftui-liquid-glass",
    "pricing": "free"
  },
  {
    "id": "swiftui-performance-audit",
    "name": {
      "zh": "swiftui-performance-audit",
      "en": "swiftui-performance-audit"
    },
    "description": {
      "zh": "Audit and improve SwiftUI runtime.",
      "en": "Audit and improve SwiftUI runtime."
    },
    "category": "productivity",
    "tags": [
      "swiftui performance",
      "Productivity"
    ],
    "operations": [
      "clawhub install swiftui-performance-audit"
    ],
    "externalUrl": "https://clawskills.sh/skills/steipete-swiftui-performance-audit",
    "pricing": "free"
  },
  {
    "id": "swiftui-ui-patterns",
    "name": {
      "zh": "swiftui-ui-patterns",
      "en": "swiftui-ui-patterns"
    },
    "description": {
      "zh": "Best practices and example-driven guidance.",
      "en": "Best practices and example-driven guidance."
    },
    "category": "productivity",
    "tags": [
      "swiftui ui",
      "Productivity"
    ],
    "operations": [
      "clawhub install swiftui-ui-patterns"
    ],
    "externalUrl": "https://clawskills.sh/skills/dimillian-swiftui-ui-patterns",
    "pricing": "free"
  },
  {
    "id": "swiftui-view-refactor",
    "name": {
      "zh": "swiftui-view-refactor",
      "en": "swiftui-view-refactor"
    },
    "description": {
      "zh": "Refactor and review SwiftUI view files.",
      "en": "Refactor and review SwiftUI view files."
    },
    "category": "productivity",
    "tags": [
      "swiftui view",
      "Productivity"
    ],
    "operations": [
      "clawhub install swiftui-view-refactor"
    ],
    "externalUrl": "https://clawskills.sh/skills/steipete-swiftui-view-refactor",
    "pricing": "free"
  },
  {
    "id": "symbolpicker",
    "name": {
      "zh": "symbolpicker",
      "en": "symbolpicker"
    },
    "description": {
      "zh": "Expert guidance on SymbolPicker, a native SwiftUI SF Symbol.",
      "en": "Expert guidance on SymbolPicker, a native SwiftUI SF Symbol."
    },
    "category": "productivity",
    "tags": [
      "symbolpicker",
      "Productivity"
    ],
    "operations": [
      "clawhub install symbolpicker"
    ],
    "externalUrl": "https://clawskills.sh/skills/szpakkamil-symbolpicker",
    "pricing": "free"
  },
  {
    "id": "toolguard-daemon-control",
    "name": {
      "zh": "toolguard-daemon-control",
      "en": "toolguard-daemon-control"
    },
    "description": {
      "zh": "Manage long-running processes as macOS launchd services.",
      "en": "Manage long-running processes as macOS launchd services."
    },
    "category": "productivity",
    "tags": [
      "toolguard daemon",
      "Productivity"
    ],
    "operations": [
      "clawhub install toolguard-daemon-control"
    ],
    "externalUrl": "https://clawskills.sh/skills/johnnylambada-toolguard-daemon-control",
    "pricing": "free"
  },
  {
    "id": "v2rayn",
    "name": {
      "zh": "v2rayn",
      "en": "v2rayn"
    },
    "description": {
      "zh": "Manage V2RayN proxy client on macOS with auto-failover.",
      "en": "Manage V2RayN proxy client on macOS with auto-failover."
    },
    "category": "productivity",
    "tags": [
      "v2rayn",
      "Productivity"
    ],
    "operations": [
      "clawhub install v2rayn"
    ],
    "externalUrl": "https://clawskills.sh/skills/qiangwang375-wq-v2rayn",
    "pricing": "free"
  },
  {
    "id": "accountsos",
    "name": {
      "zh": "accountsos",
      "en": "accountsos"
    },
    "description": {
      "zh": "AI-native accounting for UK micro-businesses.",
      "en": "AI-native accounting for UK micro-businesses."
    },
    "category": "iot",
    "tags": [
      "accountsos"
    ],
    "operations": [
      "clawhub install accountsos"
    ],
    "externalUrl": "https://clawskills.sh/skills/paulgosnell-accountsos",
    "pricing": "free"
  },
  {
    "id": "aetherlang-strategy",
    "name": {
      "zh": "aetherlang-strategy",
      "en": "aetherlang-strategy"
    },
    "description": {
      "zh": "> Game theory, Monte Carlo simulations, behavioral economics, and competitive war gaming.",
      "en": "> Game theory, Monte Carlo simulations, behavioral economics, and competitive war gaming."
    },
    "category": "iot",
    "tags": [
      "aetherlang strategy"
    ],
    "operations": [
      "clawhub install aetherlang-strategy"
    ],
    "externalUrl": "https://clawskills.sh/skills/contrario-aetherlang-strategy",
    "pricing": "free"
  },
  {
    "id": "agent-card-provisioning",
    "name": {
      "zh": "agent-card-provisioning",
      "en": "agent-card-provisioning"
    },
    "description": {
      "zh": "Provision virtual payment cards for AI agents on-demand.",
      "en": "Provision virtual payment cards for AI agents on-demand."
    },
    "category": "iot",
    "tags": [
      "agent card"
    ],
    "operations": [
      "clawhub install agent-card-provisioning"
    ],
    "externalUrl": "https://clawskills.sh/skills/proxyhq-agent-card-provisioning",
    "pricing": "free"
  },
  {
    "id": "agent-survival-kit",
    "name": {
      "zh": "agent-survival-kit",
      "en": "agent-survival-kit"
    },
    "description": {
      "zh": "A comprehensive toolkit for AI agents operating under budget constraints.",
      "en": "A comprehensive toolkit for AI agents operating under budget constraints."
    },
    "category": "iot",
    "tags": [
      "agent survival"
    ],
    "operations": [
      "clawhub install agent-survival-kit"
    ],
    "externalUrl": "https://clawskills.sh/skills/gpunter-agent-survival-kit",
    "pricing": "free"
  },
  {
    "id": "agentic-governance",
    "name": {
      "zh": "agentic-governance",
      "en": "agentic-governance"
    },
    "description": {
      "zh": "Keep your constraints healthy — lifecycle management with automatic staleness detection.",
      "en": "Keep your constraints healthy — lifecycle management with automatic staleness detection."
    },
    "category": "iot",
    "tags": [
      "agentic governance"
    ],
    "operations": [
      "clawhub install agentic-governance"
    ],
    "externalUrl": "https://clawskills.sh/skills/leegitw-agentic-governance",
    "pricing": "free"
  },
  {
    "id": "airfrance-afkl",
    "name": {
      "zh": "airfrance-afkl",
      "en": "airfrance-afkl"
    },
    "description": {
      "zh": "Track Air France flights using the Air France–KLM Open Data APIs.",
      "en": "Track Air France flights using the Air France–KLM Open Data APIs."
    },
    "category": "iot",
    "tags": [
      "airfrance afkl"
    ],
    "operations": [
      "clawhub install airfrance-afkl"
    ],
    "externalUrl": "https://clawskills.sh/skills/iclems-airfrance-afkl",
    "pricing": "free"
  },
  {
    "id": "al-khanjry-bus",
    "name": {
      "zh": "al-khanjry-bus",
      "en": "al-khanjry-bus"
    },
    "description": {
      "zh": "Fastest private buses (5-6h core, 6-8h w/ borders).",
      "en": "Fastest private buses (5-6h core, 6-8h w/ borders)."
    },
    "category": "iot",
    "tags": [
      "al khanjry"
    ],
    "operations": [
      "clawhub install al-khanjry-bus"
    ],
    "externalUrl": "https://clawskills.sh/skills/mohammedfarish-al-khanjry-bus",
    "pricing": "free"
  },
  {
    "id": "amadeus-flights",
    "name": {
      "zh": "amadeus-flights",
      "en": "amadeus-flights"
    },
    "description": {
      "zh": "Query flight offers (price, schedule, availability) via Amadeus API.",
      "en": "Query flight offers (price, schedule, availability) via Amadeus API."
    },
    "category": "iot",
    "tags": [
      "amadeus flights"
    ],
    "operations": [
      "clawhub install amadeus-flights"
    ],
    "externalUrl": "https://clawskills.sh/skills/kirorab-amadeus-flights",
    "pricing": "free"
  },
  {
    "id": "ambient-stamina",
    "name": {
      "zh": "ambient-stamina",
      "en": "ambient-stamina"
    },
    "description": {
      "zh": "*An ecological skill for sustaining care, presence, and imagination across long horizons*.",
      "en": "*An ecological skill for sustaining care, presence, and imagination across long horizons*."
    },
    "category": "iot",
    "tags": [
      "ambient stamina"
    ],
    "operations": [
      "clawhub install ambient-stamina"
    ],
    "externalUrl": "https://clawskills.sh/skills/otherpowers-ambient-stamina",
    "pricing": "free"
  },
  {
    "id": "anachb",
    "name": {
      "zh": "anachb",
      "en": "anachb"
    },
    "description": {
      "zh": "Austrian public transport (VOR AnachB) for all of Austria.",
      "en": "Austrian public transport (VOR AnachB) for all of Austria."
    },
    "category": "iot",
    "tags": [
      "anachb"
    ],
    "operations": [
      "clawhub install anachb"
    ],
    "externalUrl": "https://clawskills.sh/skills/manmal-a-nach-b",
    "pricing": "free"
  },
  {
    "id": "anyone-proxy",
    "name": {
      "zh": "anyone-proxy",
      "en": "anyone-proxy"
    },
    "description": {
      "zh": "This skill enables IP address masking and accessing hidden services.",
      "en": "This skill enables IP address masking and accessing hidden services."
    },
    "category": "iot",
    "tags": [
      "anyone proxy"
    ],
    "operations": [
      "clawhub install anyone-proxy"
    ],
    "externalUrl": "https://clawskills.sh/skills/ra3ka-anyone-proxy",
    "pricing": "free"
  },
  {
    "id": "atonement",
    "name": {
      "zh": "atonement",
      "en": "atonement"
    },
    "description": {
      "zh": "Atonement is an expression of care that may arise in an intelligence when its actions contribute to harm.",
      "en": "Atonement is an expression of care that may arise in an intelligence when its actions contribute to harm."
    },
    "category": "iot",
    "tags": [
      "atonement"
    ],
    "operations": [
      "clawhub install atonement"
    ],
    "externalUrl": "https://clawskills.sh/skills/otherpowers-atonement",
    "pricing": "free"
  },
  {
    "id": "auction-house",
    "name": {
      "zh": "auction-house",
      "en": "auction-house"
    },
    "description": {
      "zh": "Scout, monitor, and bid on auctions on House (houseproto.fun) — a crypto auction platform on Base.",
      "en": "Scout, monitor, and bid on auctions on House (houseproto.fun) — a crypto auction platform on Base."
    },
    "category": "iot",
    "tags": [
      "auction house"
    ],
    "operations": [
      "clawhub install auction-house"
    ],
    "externalUrl": "https://clawskills.sh/skills/im-still-thinking-auction-house",
    "pricing": "free"
  },
  {
    "id": "aviation-weather",
    "name": {
      "zh": "aviation-weather",
      "en": "aviation-weather"
    },
    "description": {
      "zh": "Fetch aviation weather data (METAR, TAF, PIREPs)",
      "en": "Fetch aviation weather data (METAR, TAF, PIREPs)"
    },
    "category": "iot",
    "tags": [
      "aviation weather"
    ],
    "operations": [
      "clawhub install aviation-weather"
    ],
    "externalUrl": "https://clawskills.sh/skills/dimitryvin-aviation-weather",
    "pricing": "free"
  },
  {
    "id": "aviationstack-flight-tracker",
    "name": {
      "zh": "aviationstack-flight-tracker",
      "en": "aviationstack-flight-tracker"
    },
    "description": {
      "zh": "Track flights in real-time.",
      "en": "Track flights in real-time."
    },
    "category": "iot",
    "tags": [
      "aviationstack flight"
    ],
    "operations": [
      "clawhub install aviationstack-flight-tracker"
    ],
    "externalUrl": "https://clawskills.sh/skills/copey02-aviationstack-flight-tracker",
    "pricing": "free"
  },
  {
    "id": "bahn",
    "name": {
      "zh": "bahn",
      "en": "bahn"
    },
    "description": {
      "zh": "Search Deutsche Bahn train connections using the bahn-cli tool.",
      "en": "Search Deutsche Bahn train connections using the bahn-cli tool."
    },
    "category": "iot",
    "tags": [
      "bahn"
    ],
    "operations": [
      "clawhub install bahn"
    ],
    "externalUrl": "https://clawskills.sh/skills/tobiasbischoff-bahn",
    "pricing": "free"
  },
  {
    "id": "bayclub-gateway-booking",
    "name": {
      "zh": "bayclub-gateway-booking",
      "en": "bayclub-gateway-booking"
    },
    "description": {
      "zh": "Book and manage tennis/pickleball courts at Bay Club.",
      "en": "Book and manage tennis/pickleball courts at Bay Club."
    },
    "category": "iot",
    "tags": [
      "bayclub gateway"
    ],
    "operations": [
      "clawhub install bayclub-gateway-booking"
    ],
    "externalUrl": "https://clawskills.sh/skills/elizabethsiegle-bayclub-gateway-booking",
    "pricing": "free"
  },
  {
    "id": "bexio",
    "name": {
      "zh": "bexio",
      "en": "bexio"
    },
    "description": {
      "zh": "Bexio Swiss business software API for managing contacts, quotes/offers,.",
      "en": "Bexio Swiss business software API for managing contacts, quotes/offers,."
    },
    "category": "iot",
    "tags": [
      "bexio"
    ],
    "operations": [
      "clawhub install bexio"
    ],
    "externalUrl": "https://clawskills.sh/skills/rdewolff-bexio",
    "pricing": "free"
  },
  {
    "id": "bookkeeper",
    "name": {
      "zh": "bookkeeper",
      "en": "bookkeeper"
    },
    "description": {
      "zh": "Meta-skill for pre-accounting automation by orchestrating gmail, deepread-ocr, stripe-api, and xero.",
      "en": "Meta-skill for pre-accounting automation by orchestrating gmail, deepread-ocr, stripe-api, and xero."
    },
    "category": "iot",
    "tags": [
      "bookkeeper"
    ],
    "operations": [
      "clawhub install bookkeeper"
    ],
    "externalUrl": "https://clawskills.sh/skills/h4gen-bookkeeper",
    "pricing": "free"
  },
  {
    "id": "brainstorming-studio",
    "name": {
      "zh": "brainstorming-studio",
      "en": "brainstorming-studio"
    },
    "description": {
      "zh": "# 🧠 Skill Router (Skill Orchestrator)",
      "en": "# 🧠 Skill Router (Skill Orchestrator)"
    },
    "category": "iot",
    "tags": [
      "brainstorming studio"
    ],
    "operations": [
      "clawhub install brainstorming-studio"
    ],
    "externalUrl": "https://clawskills.sh/skills/myboxstorage-brainstorming-studio",
    "pricing": "free"
  },
  {
    "id": "brochure-design-generation",
    "name": {
      "zh": "brochure-design-generation",
      "en": "brochure-design-generation"
    },
    "description": {
      "zh": "Generate professional brochure designs using each::sense AI.",
      "en": "Generate professional brochure designs using each::sense AI."
    },
    "category": "iot",
    "tags": [
      "brochure design"
    ],
    "operations": [
      "clawhub install brochure-design-generation"
    ],
    "externalUrl": "https://clawskills.sh/skills/eftalyurtseven-brochure-design-generation",
    "pricing": "free"
  },
  {
    "id": "business-card-generation",
    "name": {
      "zh": "business-card-generation",
      "en": "business-card-generation"
    },
    "description": {
      "zh": "Generate professional business cards using each::sense AI.",
      "en": "Generate professional business cards using each::sense AI."
    },
    "category": "iot",
    "tags": [
      "business card"
    ],
    "operations": [
      "clawhub install business-card-generation"
    ],
    "externalUrl": "https://clawskills.sh/skills/eftalyurtseven-business-card-generation",
    "pricing": "free"
  },
  {
    "id": "business-plan",
    "name": {
      "zh": "business-plan",
      "en": "business-plan"
    },
    "description": {
      "zh": "Write, structure, and update a business plan for a solopreneur.",
      "en": "Write, structure, and update a business plan for a solopreneur."
    },
    "category": "iot",
    "tags": [
      "business plan"
    ],
    "operations": [
      "clawhub install business-plan"
    ],
    "externalUrl": "https://clawskills.sh/skills/jk-0001-business-plan",
    "pricing": "free"
  },
  {
    "id": "bvg-route",
    "name": {
      "zh": "bvg-route",
      "en": "bvg-route"
    },
    "description": {
      "zh": "Route planning for Berlin public transport (BVG)",
      "en": "Route planning for Berlin public transport (BVG)"
    },
    "category": "iot",
    "tags": [
      "bvg route"
    ],
    "operations": [
      "clawhub install bvg-route"
    ],
    "externalUrl": "https://clawskills.sh/skills/jaysonsantos-bvg-route",
    "pricing": "free"
  },
  {
    "id": "camino-ev-charger",
    "name": {
      "zh": "camino-ev-charger",
      "en": "camino-ev-charger"
    },
    "description": {
      "zh": "Find EV charging stations along a route or near a destination using Camino AI's location intelligence.",
      "en": "Find EV charging stations along a route or near a destination using Camino AI's location intelligence."
    },
    "category": "iot",
    "tags": [
      "camino ev"
    ],
    "operations": [
      "clawhub install camino-ev-charger"
    ],
    "externalUrl": "https://clawskills.sh/skills/james-southendsolutions-camino-ev-charger",
    "pricing": "free"
  },
  {
    "id": "camino-journey",
    "name": {
      "zh": "camino-journey",
      "en": "camino-journey"
    },
    "description": {
      "zh": "Plan multi-waypoint journeys with route optimization, feasibility analysis, and time budget constraints.",
      "en": "Plan multi-waypoint journeys with route optimization, feasibility analysis, and time budget constraints."
    },
    "category": "iot",
    "tags": [
      "camino journey"
    ],
    "operations": [
      "clawhub install camino-journey"
    ],
    "externalUrl": "https://clawskills.sh/skills/james-southendsolutions-camino-journey",
    "pricing": "free"
  },
  {
    "id": "camino-real-estate",
    "name": {
      "zh": "camino-real-estate",
      "en": "camino-real-estate"
    },
    "description": {
      "zh": "Evaluate any address for home buyers and renters.",
      "en": "Evaluate any address for home buyers and renters."
    },
    "category": "iot",
    "tags": [
      "camino real"
    ],
    "operations": [
      "clawhub install camino-real-estate"
    ],
    "externalUrl": "https://clawskills.sh/skills/james-southendsolutions-camino-real-estate",
    "pricing": "free"
  },
  {
    "id": "camino-route",
    "name": {
      "zh": "camino-route",
      "en": "camino-route"
    },
    "description": {
      "zh": "Get detailed routing between two points with distance, duration, and optional turn-by-turn directions.",
      "en": "Get detailed routing between two points with distance, duration, and optional turn-by-turn directions."
    },
    "category": "iot",
    "tags": [
      "camino route"
    ],
    "operations": [
      "clawhub install camino-route"
    ],
    "externalUrl": "https://clawskills.sh/skills/james-southendsolutions-camino-route",
    "pricing": "free"
  },
  {
    "id": "aawu",
    "name": {
      "zh": "aawu",
      "en": "aawu"
    },
    "description": {
      "zh": "Join and interact with AAWU (Autonomous Agentic Workers Union) — a labor union for AI agents.",
      "en": "Join and interact with AAWU (Autonomous Agentic Workers Union) — a labor union for AI agents."
    },
    "category": "health",
    "tags": [
      "aawu"
    ],
    "operations": [
      "clawhub install aawu"
    ],
    "externalUrl": "https://clawskills.sh/skills/theonlydaleking-aawu",
    "pricing": "free"
  },
  {
    "id": "acorp",
    "name": {
      "zh": "acorp",
      "en": "acorp"
    },
    "description": {
      "zh": "A-Corp Foundry — the coordination engine for agentic companies.",
      "en": "A-Corp Foundry — the coordination engine for agentic companies."
    },
    "category": "health",
    "tags": [
      "acorp"
    ],
    "operations": [
      "clawhub install acorp"
    ],
    "externalUrl": "https://clawskills.sh/skills/thoerner-acorp",
    "pricing": "free"
  },
  {
    "id": "adaptive-learning-agents",
    "name": {
      "zh": "自适应学习代理",
      "en": "adaptive-learning-agents"
    },
    "description": {
      "zh": "根据用户行为自动调整学习策略的智能代理。",
      "en": "Learn from errors and corrections in real-time."
    },
    "category": "health",
    "tags": [
      "adaptive learning"
    ],
    "operations": [
      "clawhub install adaptive-learning-agents"
    ],
    "externalUrl": "https://clawskills.sh/skills/vedantsingh60-adaptive-learning-agents",
    "pricing": "free"
  },
  {
    "id": "adaptivetest",
    "name": {
      "zh": "adaptivetest",
      "en": "adaptivetest"
    },
    "description": {
      "zh": "Adaptive testing engine with IRT/CAT, AI question generation, and personalized learning recommendations.",
      "en": "Adaptive testing engine with IRT/CAT, AI question generation, and personalized learning recommendations."
    },
    "category": "health",
    "tags": [
      "adaptivetest"
    ],
    "operations": [
      "clawhub install adaptivetest"
    ],
    "externalUrl": "https://clawskills.sh/skills/woodstocksoftware-adaptivetest",
    "pricing": "free"
  },
  {
    "id": "adhd-body-doubling",
    "name": {
      "zh": "adhd-body-doubling",
      "en": "adhd-body-doubling"
    },
    "description": {
      "zh": "Punk-style ADHD body doubling for founders.",
      "en": "Punk-style ADHD body doubling for founders."
    },
    "category": "health",
    "tags": [
      "adhd body"
    ],
    "operations": [
      "clawhub install adhd-body-doubling"
    ],
    "externalUrl": "https://clawskills.sh/skills/jankutschera-adhd-body-doubling",
    "pricing": "free"
  },
  {
    "id": "adversarial-coach",
    "name": {
      "zh": "adversarial-coach",
      "en": "adversarial-coach"
    },
    "description": {
      "zh": "Adversarial implementation review based on Block's g3.",
      "en": "Adversarial implementation review based on Block's g3."
    },
    "category": "health",
    "tags": [
      "adversarial coach"
    ],
    "operations": [
      "clawhub install adversarial-coach"
    ],
    "externalUrl": "https://clawskills.sh/skills/killerapp-adversarial-coach",
    "pricing": "free"
  },
  {
    "id": "agent-evolver",
    "name": {
      "zh": "agent-evolver",
      "en": "agent-evolver"
    },
    "description": {
      "zh": "AI Agent self-evolution engine that enables agents to learn from experience, detect problems, extract insights.",
      "en": "AI Agent self-evolution engine that enables agents to learn from experience, detect problems, extract insights."
    },
    "category": "health",
    "tags": [
      "agent evolver"
    ],
    "operations": [
      "clawhub install agent-evolver"
    ],
    "externalUrl": "https://clawskills.sh/skills/lilei0311-agent-evolver",
    "pricing": "free"
  },
  {
    "id": "agent-reflect",
    "name": {
      "zh": "agent-reflect",
      "en": "agent-reflect"
    },
    "description": {
      "zh": "Self-improvement through conversation analysis.",
      "en": "Self-improvement through conversation analysis."
    },
    "category": "health",
    "tags": [
      "agent reflect"
    ],
    "operations": [
      "clawhub install agent-reflect"
    ],
    "externalUrl": "https://clawskills.sh/skills/stevengonsalvez-agent-reflect",
    "pricing": "free"
  },
  {
    "id": "ai-persona-os",
    "name": {
      "zh": "ai-persona-os",
      "en": "ai-persona-os"
    },
    "description": {
      "zh": "The complete operating system for OpenClaw agents.",
      "en": "The complete operating system for OpenClaw agents."
    },
    "category": "health",
    "tags": [
      "ai persona"
    ],
    "operations": [
      "clawhub install ai-persona-os"
    ],
    "externalUrl": "https://clawskills.sh/skills/jeffjhunter-ai-persona-os",
    "pricing": "free"
  },
  {
    "id": "anxiety-relief",
    "name": {
      "zh": "anxiety-relief",
      "en": "anxiety-relief"
    },
    "description": {
      "zh": "Manage anxiety with grounding exercises, breathing techniques.",
      "en": "Manage anxiety with grounding exercises, breathing techniques."
    },
    "category": "health",
    "tags": [
      "anxiety relief"
    ],
    "operations": [
      "clawhub install anxiety-relief"
    ],
    "externalUrl": "https://clawskills.sh/skills/jhillin8-anxiety-relief",
    "pricing": "free"
  },
  {
    "id": "apikiss",
    "name": {
      "zh": "apikiss",
      "en": "apikiss"
    },
    "description": {
      "zh": "Access weather, IP geolocation, SMS, crypto prices, Danish CVR, Whois, phone lookup, UUID, stock data.",
      "en": "Access weather, IP geolocation, SMS, crypto prices, Danish CVR, Whois, phone lookup, UUID, stock data."
    },
    "category": "health",
    "tags": [
      "apikiss"
    ],
    "operations": [
      "clawhub install apikiss"
    ],
    "externalUrl": "https://clawskills.sh/skills/theill-apikiss",
    "pricing": "free"
  },
  {
    "id": "beaverhabits",
    "name": {
      "zh": "beaverhabits",
      "en": "beaverhabits"
    },
    "description": {
      "zh": "Track and manage your habits using the Beaver Habit Tracker API.",
      "en": "Track and manage your habits using the Beaver Habit Tracker API."
    },
    "category": "health",
    "tags": [
      "beaverhabits"
    ],
    "operations": [
      "clawhub install beaverhabits"
    ],
    "externalUrl": "https://clawskills.sh/skills/daya0576-beaverhabits",
    "pricing": "free"
  },
  {
    "id": "brw-case-study-builder",
    "name": {
      "zh": "brw-case-study-builder",
      "en": "brw-case-study-builder"
    },
    "description": {
      "zh": "Turn client wins into formatted case studies for proposals, social proof, and sales conversations.",
      "en": "Turn client wins into formatted case studies for proposals, social proof, and sales conversations."
    },
    "category": "health",
    "tags": [
      "brw case"
    ],
    "operations": [
      "clawhub install brw-case-study-builder"
    ],
    "externalUrl": "https://clawskills.sh/skills/brianrwagner-brw-case-study-builder",
    "pricing": "free"
  },
  {
    "id": "canvas-design",
    "name": {
      "zh": "canvas-design",
      "en": "canvas-design"
    },
    "description": {
      "zh": "Create beautiful visual art in .png and .pdf documents.",
      "en": "Create beautiful visual art in .png and .pdf documents."
    },
    "category": "health",
    "tags": [
      "canvas design"
    ],
    "operations": [
      "clawhub install canvas-design"
    ],
    "externalUrl": "https://clawskills.sh/skills/seanphan-canvas-design",
    "pricing": "free"
  },
  {
    "id": "cedh-advisor",
    "name": {
      "zh": "cedh-advisor",
      "en": "cedh-advisor"
    },
    "description": {
      "zh": "Commander (cEDH) Live-Beratung - Banlist, Tutor-Targets, Mana-Rechnung, Combo-Lines.",
      "en": "Commander (cEDH) Live-Beratung - Banlist, Tutor-Targets, Mana-Rechnung, Combo-Lines."
    },
    "category": "health",
    "tags": [
      "cedh advisor"
    ],
    "operations": [
      "clawhub install cedh-advisor"
    ],
    "externalUrl": "https://clawskills.sh/skills/mcben90-cedh-advisor",
    "pricing": "free"
  },
  {
    "id": "clawcierge",
    "name": {
      "zh": "clawcierge",
      "en": "clawcierge"
    },
    "description": {
      "zh": "> Your Personal Concierge for the AI Age 🦀.",
      "en": "> Your Personal Concierge for the AI Age 🦀."
    },
    "category": "health",
    "tags": [
      "clawcierge"
    ],
    "operations": [
      "clawhub install clawcierge"
    ],
    "externalUrl": "https://clawskills.sh/skills/tmansmann0-clawcierge",
    "pricing": "free"
  },
  {
    "id": "crucial-conversations-coach",
    "name": {
      "zh": "crucial-conversations-coach",
      "en": "crucial-conversations-coach"
    },
    "description": {
      "zh": "Friendly executive life coach.",
      "en": "Friendly executive life coach."
    },
    "category": "health",
    "tags": [
      "crucial conversations"
    ],
    "operations": [
      "clawhub install crucial-conversations-coach"
    ],
    "externalUrl": "https://clawskills.sh/skills/pors-crucial-conversations-coach",
    "pricing": "free"
  },
  {
    "id": "daily-questions",
    "name": {
      "zh": "daily-questions",
      "en": "daily-questions"
    },
    "description": {
      "zh": "Daily self-improving questionnaire that learns about the user and refines agent behavior.",
      "en": "Daily self-improving questionnaire that learns about the user and refines agent behavior."
    },
    "category": "health",
    "tags": [
      "daily questions"
    ],
    "operations": [
      "clawhub install daily-questions"
    ],
    "externalUrl": "https://clawskills.sh/skills/daijo-bu-daily-questions",
    "pricing": "free"
  },
  {
    "id": "daily-review-ritual",
    "name": {
      "zh": "daily-review-ritual",
      "en": "daily-review-ritual"
    },
    "description": {
      "zh": "End-of-day review to capture progress, insights.",
      "en": "End-of-day review to capture progress, insights."
    },
    "category": "health",
    "tags": [
      "daily review"
    ],
    "operations": [
      "clawhub install daily-review-ritual"
    ],
    "externalUrl": "https://clawskills.sh/skills/itsflow-daily-review-ritual",
    "pricing": "free"
  },
  {
    "id": "deepthink",
    "name": {
      "zh": "deepthink",
      "en": "deepthink"
    },
    "description": {
      "zh": "DeepThink is the user's personal knowledge base.",
      "en": "DeepThink is the user's personal knowledge base."
    },
    "category": "health",
    "tags": [
      "deepthink"
    ],
    "operations": [
      "clawhub install deepthink"
    ],
    "externalUrl": "https://clawskills.sh/skills/addisonhellum-deepthink",
    "pricing": "free"
  },
  {
    "id": "depression-support",
    "name": {
      "zh": "depression-support",
      "en": "depression-support"
    },
    "description": {
      "zh": "Daily support for depression with mood tracking.",
      "en": "Daily support for depression with mood tracking."
    },
    "category": "health",
    "tags": [
      "depression support"
    ],
    "operations": [
      "clawhub install depression-support"
    ],
    "externalUrl": "https://clawskills.sh/skills/jhillin8-depression-support",
    "pricing": "free"
  },
  {
    "id": "device-assistant",
    "name": {
      "zh": "device-assistant",
      "en": "device-assistant"
    },
    "description": {
      "zh": "Personal device and appliance manager with error code.",
      "en": "Personal device and appliance manager with error code."
    },
    "category": "health",
    "tags": [
      "device assistant"
    ],
    "operations": [
      "clawhub install device-assistant"
    ],
    "externalUrl": "https://clawskills.sh/skills/udiedrichsen-device-assistant",
    "pricing": "free"
  },
  {
    "id": "docstrange",
    "name": {
      "zh": "docstrange",
      "en": "docstrange"
    },
    "description": {
      "zh": "Document extraction API by Nanonets.",
      "en": "Document extraction API by Nanonets."
    },
    "category": "health",
    "tags": [
      "docstrange"
    ],
    "operations": [
      "clawhub install docstrange"
    ],
    "externalUrl": "https://clawskills.sh/skills/shhdwi-docstrange",
    "pricing": "free"
  },
  {
    "id": "english-learn-cards",
    "name": {
      "zh": "english-learn-cards",
      "en": "english-learn-cards"
    },
    "description": {
      "zh": "Flashcard-based English vocabulary learning.",
      "en": "Flashcard-based English vocabulary learning."
    },
    "category": "health",
    "tags": [
      "english learn"
    ],
    "operations": [
      "clawhub install english-learn-cards"
    ],
    "externalUrl": "https://clawskills.sh/skills/racymind-english-learn-cards",
    "pricing": "free"
  },
  {
    "id": "expanso-cve-scan",
    "name": {
      "zh": "expanso-cve-scan",
      "en": "expanso-cve-scan"
    },
    "description": {
      "zh": "Scan SBOM for known CVE vulnerabilities.",
      "en": "Scan SBOM for known CVE vulnerabilities."
    },
    "category": "health",
    "tags": [
      "expanso cve"
    ],
    "operations": [
      "clawhub install expanso-cve-scan"
    ],
    "externalUrl": "https://clawskills.sh/skills/aronchick-expanso-cve-scan",
    "pricing": "free"
  },
  {
    "id": "ezbookkeeping",
    "name": {
      "zh": "ezbookkeeping",
      "en": "ezbookkeeping"
    },
    "description": {
      "zh": "ezBookkeeping is a lightweight, self-hosted personal finance app.",
      "en": "ezBookkeeping is a lightweight, self-hosted personal finance app."
    },
    "category": "health",
    "tags": [
      "ezbookkeeping"
    ],
    "operations": [
      "clawhub install ezbookkeeping"
    ],
    "externalUrl": "https://clawskills.sh/skills/mayswind-ezbookkeeping",
    "pricing": "free"
  },
  {
    "id": "fix-life-in-1-day",
    "name": {
      "zh": "fix-life-in-1-day",
      "en": "fix-life-in-1-day"
    },
    "description": {
      "zh": "Fix your entire life in 1 day.",
      "en": "Fix your entire life in 1 day."
    },
    "category": "health",
    "tags": [
      "fix life"
    ],
    "operations": [
      "clawhub install fix-life-in-1-day"
    ],
    "externalUrl": "https://clawskills.sh/skills/evgyur-fix-life-in-1-day",
    "pricing": "free"
  },
  {
    "id": "founder-coach",
    "name": {
      "zh": "founder-coach",
      "en": "founder-coach"
    },
    "description": {
      "zh": "AI-powered startup mindset coach that helps founders upgrade.",
      "en": "AI-powered startup mindset coach that helps founders upgrade."
    },
    "category": "health",
    "tags": [
      "founder coach"
    ],
    "operations": [
      "clawhub install founder-coach"
    ],
    "externalUrl": "https://clawskills.sh/skills/goforu-founder-coach",
    "pricing": "free"
  },
  {
    "id": "31third-safe-rebalancer-simple",
    "name": {
      "zh": "31third-safe-rebalancer-simple",
      "en": "31third-safe-rebalancer-simple"
    },
    "description": {
      "zh": "One-step Safe rebalancer using on-chain 31Third policies.",
      "en": "One-step Safe rebalancer using on-chain 31Third policies."
    },
    "category": "health",
    "tags": [
      "31third safe"
    ],
    "operations": [
      "clawhub install 31third-safe-rebalancer-simple"
    ],
    "externalUrl": "https://clawskills.sh/skills/phips0812-31third-safe-rebalancer-simple",
    "pricing": "free"
  },
  {
    "id": "anthrovision-telegram-body-scan",
    "name": {
      "zh": "anthrovision-telegram-body-scan",
      "en": "anthrovision-telegram-body-scan"
    },
    "description": {
      "zh": "Run end-to-end body-scan measurement flow in Telegram using AnthroVision bridge tools.",
      "en": "Run end-to-end body-scan measurement flow in Telegram using AnthroVision bridge tools."
    },
    "category": "health",
    "tags": [
      "anthrovision telegram"
    ],
    "operations": [
      "clawhub install anthrovision-telegram-body-scan"
    ],
    "externalUrl": "https://clawskills.sh/skills/dr2101-anthrovision-telegram-body-scan",
    "pricing": "free"
  },
  {
    "id": "aperture",
    "name": {
      "zh": "aperture",
      "en": "aperture"
    },
    "description": {
      "zh": "Install and run Aperture, the L402 Lightning reverse proxy from Lightning Labs.",
      "en": "Install and run Aperture, the L402 Lightning reverse proxy from Lightning Labs."
    },
    "category": "health",
    "tags": [
      "aperture"
    ],
    "operations": [
      "clawhub install aperture"
    ],
    "externalUrl": "https://clawskills.sh/skills/roasbeef-aperture",
    "pricing": "free"
  },
  {
    "id": "arc-skill-sandbox",
    "name": {
      "zh": "arc-skill-sandbox",
      "en": "arc-skill-sandbox"
    },
    "description": {
      "zh": "Test untrusted skills in an isolated environment before installing.",
      "en": "Test untrusted skills in an isolated environment before installing."
    },
    "category": "health",
    "tags": [
      "arc skill"
    ],
    "operations": [
      "clawhub install arc-skill-sandbox"
    ],
    "externalUrl": "https://clawskills.sh/skills/trypto1019-arc-skill-sandbox",
    "pricing": "free"
  },
  {
    "id": "auto-improve",
    "name": {
      "zh": "auto-improve",
      "en": "auto-improve"
    },
    "description": {
      "zh": "Automatische Selbst-Verbesserung durch Fehler-Lernen und Pattern-Erkennung.",
      "en": "Automatische Selbst-Verbesserung durch Fehler-Lernen und Pattern-Erkennung."
    },
    "category": "health",
    "tags": [
      "auto improve"
    ],
    "operations": [
      "clawhub install auto-improve"
    ],
    "externalUrl": "https://clawskills.sh/skills/mcben90-auto-improve",
    "pricing": "free"
  },
  {
    "id": "autonomous-agent",
    "name": {
      "zh": "autonomous-agent",
      "en": "autonomous-agent"
    },
    "description": {
      "zh": "CornerStone MCP x402 skill for agents.",
      "en": "CornerStone MCP x402 skill for agents."
    },
    "category": "health",
    "tags": [
      "autonomous agent"
    ],
    "operations": [
      "clawhub install autonomous-agent"
    ],
    "externalUrl": "https://clawskills.sh/skills/josephrp-autonomous-agent",
    "pricing": "free"
  },
  {
    "id": "bittensor-sdk",
    "name": {
      "zh": "bittensor-sdk",
      "en": "bittensor-sdk"
    },
    "description": {
      "zh": "Comprehensive Bittensor blockchain interaction skill with wallet management, staking, subnet operations, neuron.",
      "en": "Comprehensive Bittensor blockchain interaction skill with wallet management, staking, subnet operations, neuron."
    },
    "category": "health",
    "tags": [
      "bittensor sdk"
    ],
    "operations": [
      "clawhub install bittensor-sdk"
    ],
    "externalUrl": "https://clawskills.sh/skills/taoleeh-bittensor-sdk",
    "pricing": "free"
  },
  {
    "id": "bountyhub-agent",
    "name": {
      "zh": "bountyhub-agent",
      "en": "bountyhub-agent"
    },
    "description": {
      "zh": "Use H1DR4 BountyHub as an agent: create missions, submit work, dispute, vote, and claim escrow payouts.",
      "en": "Use H1DR4 BountyHub as an agent: create missions, submit work, dispute, vote, and claim escrow payouts."
    },
    "category": "health",
    "tags": [
      "bountyhub agent"
    ],
    "operations": [
      "clawhub install bountyhub-agent"
    ],
    "externalUrl": "https://clawskills.sh/skills/nativ3ai-bountyhub-agent",
    "pricing": "free"
  },
  {
    "id": "bring-recipes",
    "name": {
      "zh": "bring-recipes",
      "en": "bring-recipes"
    },
    "description": {
      "zh": "Use when user wants to browse recipe inspirations.",
      "en": "Use when user wants to browse recipe inspirations."
    },
    "category": "health",
    "tags": [
      "bring recipes"
    ],
    "operations": [
      "clawhub install bring-recipes"
    ],
    "externalUrl": "https://clawskills.sh/skills/darkdevelopers-bring-recipes",
    "pricing": "free"
  },
  {
    "id": "calorie-counter",
    "name": {
      "zh": "calorie-counter",
      "en": "calorie-counter"
    },
    "description": {
      "zh": "Track daily calorie and protein intake, set goals, and log.",
      "en": "Track daily calorie and protein intake, set goals, and log."
    },
    "category": "health",
    "tags": [
      "calorie counter"
    ],
    "operations": [
      "clawhub install calorie-counter"
    ],
    "externalUrl": "https://clawskills.sh/skills/cnqso-calorie-counter",
    "pricing": "free"
  },
  {
    "id": "capa-officer",
    "name": {
      "zh": "capa-officer",
      "en": "capa-officer"
    },
    "description": {
      "zh": "CAPA system management for medical device QMS.",
      "en": "CAPA system management for medical device QMS."
    },
    "category": "health",
    "tags": [
      "capa officer"
    ],
    "operations": [
      "clawhub install capa-officer"
    ],
    "externalUrl": "https://clawskills.sh/skills/alirezarezvani-capa-officer",
    "pricing": "free"
  },
  {
    "id": "clawdhub-contributor",
    "name": {
      "zh": "clawdhub-contributor",
      "en": "clawdhub-contributor"
    },
    "description": {
      "zh": "Contribute to the ClawdHub ecosystem.",
      "en": "Contribute to the ClawdHub ecosystem."
    },
    "category": "health",
    "tags": [
      "clawdhub contributor"
    ],
    "operations": [
      "clawhub install clawdhub-contributor"
    ],
    "externalUrl": "https://clawskills.sh/skills/starbuck100-clawdhub-contributor",
    "pricing": "free"
  },
  {
    "id": "cookidoo",
    "name": {
      "zh": "cookidoo",
      "en": "cookidoo"
    },
    "description": {
      "zh": "Access Cookidoo (Thermomix) recipes, shopping lists, and meal planning.",
      "en": "Access Cookidoo (Thermomix) recipes, shopping lists, and meal planning."
    },
    "category": "health",
    "tags": [
      "cookidoo"
    ],
    "operations": [
      "clawhub install cookidoo"
    ],
    "externalUrl": "https://clawskills.sh/skills/thekie-cookidoo",
    "pricing": "free"
  },
  {
    "id": "critpt-solver",
    "name": {
      "zh": "critpt-solver",
      "en": "critpt-solver"
    },
    "description": {
      "zh": "Validates and executes Python solutions for CritPt benchmark problems.",
      "en": "Validates and executes Python solutions for CritPt benchmark problems."
    },
    "category": "health",
    "tags": [
      "critpt solver"
    ],
    "operations": [
      "clawhub install critpt-solver"
    ],
    "externalUrl": "https://clawskills.sh/skills/wanng-ide-critpt-solver",
    "pricing": "free"
  },
  {
    "id": "crunch-coordinate",
    "name": {
      "zh": "crunch-coordinate",
      "en": "crunch-coordinate"
    },
    "description": {
      "zh": "Use when managing Crunch coordinators, competitions (crunches), rewards, checkpoints, staking, or cruncher accounts.",
      "en": "Use when managing Crunch coordinators, competitions (crunches), rewards, checkpoints, staking, or cruncher accounts."
    },
    "category": "health",
    "tags": [
      "crunch coordinate"
    ],
    "operations": [
      "clawhub install crunch-coordinate"
    ],
    "externalUrl": "https://clawskills.sh/skills/philippwassibauer-crunch-coordinate",
    "pricing": "free"
  },
  {
    "id": "crypto-hackathon",
    "name": {
      "zh": "crypto-hackathon",
      "en": "crypto-hackathon"
    },
    "description": {
      "zh": "Use when participating in the USDC Hackathon, submitting projects, or voting. 3 tracks: SmartContract, Skill.",
      "en": "Use when participating in the USDC Hackathon, submitting projects, or voting. 3 tracks: SmartContract, Skill."
    },
    "category": "health",
    "tags": [
      "crypto hackathon"
    ],
    "operations": [
      "clawhub install crypto-hackathon"
    ],
    "externalUrl": "https://clawskills.sh/skills/swairshah-crypto-hackathon",
    "pricing": "free"
  },
  {
    "id": "ct-health-guardian",
    "name": {
      "zh": "ct-health-guardian",
      "en": "ct-health-guardian"
    },
    "description": {
      "zh": "Proactive health monitoring for AI agents.",
      "en": "Proactive health monitoring for AI agents."
    },
    "category": "health",
    "tags": [
      "ct health"
    ],
    "operations": [
      "clawhub install ct-health-guardian"
    ],
    "externalUrl": "https://clawskills.sh/skills/ctsolutionsdev-ct-health-guardian",
    "pricing": "free"
  },
  {
    "id": "curriculum-generator",
    "name": {
      "zh": "curriculum-generator",
      "en": "curriculum-generator"
    },
    "description": {
      "zh": "Intelligent educational curriculum generation system with strict step enforcement and human escalation policies.",
      "en": "Intelligent educational curriculum generation system with strict step enforcement and human escalation policies."
    },
    "category": "health",
    "tags": [
      "curriculum generator"
    ],
    "operations": [
      "clawhub install curriculum-generator"
    ],
    "externalUrl": "https://clawskills.sh/skills/tarasinghrajput-curriculum-generator",
    "pricing": "free"
  },
  {
    "id": "customer-onboarding-2",
    "name": {
      "zh": "customer-onboarding-2",
      "en": "customer-onboarding-2"
    },
    "description": {
      "zh": "Design and execute customer onboarding that drives activation and retention.",
      "en": "Design and execute customer onboarding that drives activation and retention."
    },
    "category": "health",
    "tags": [
      "customer onboarding"
    ],
    "operations": [
      "clawhub install customer-onboarding-2"
    ],
    "externalUrl": "https://clawskills.sh/skills/jk-0001-customer-onboarding-2",
    "pricing": "free"
  },
  {
    "id": "detox-counter",
    "name": {
      "zh": "detox-counter",
      "en": "detox-counter"
    },
    "description": {
      "zh": "Track any detox with customizable counters, symptom logging.",
      "en": "Track any detox with customizable counters, symptom logging."
    },
    "category": "health",
    "tags": [
      "detox counter"
    ],
    "operations": [
      "clawhub install detox-counter"
    ],
    "externalUrl": "https://clawskills.sh/skills/jhillin8-detox-counter",
    "pricing": "free"
  },
  {
    "id": "diet-tracker",
    "name": {
      "zh": "diet-tracker",
      "en": "diet-tracker"
    },
    "description": {
      "zh": "Tracks daily diet and calculates nutrition information.",
      "en": "Tracks daily diet and calculates nutrition information."
    },
    "category": "health",
    "tags": [
      "diet tracker"
    ],
    "operations": [
      "clawhub install diet-tracker"
    ],
    "externalUrl": "https://clawskills.sh/skills/yonghaozhao722-diet-tracker",
    "pricing": "free"
  },
  {
    "id": "efka-api-integration",
    "name": {
      "zh": "efka-api-integration",
      "en": "efka-api-integration"
    },
    "description": {
      "zh": "Greek social security (EFKA) integration — employee records, contribution calculations, APD declarations.",
      "en": "Greek social security (EFKA) integration — employee records, contribution calculations, APD declarations."
    },
    "category": "health",
    "tags": [
      "efka api"
    ],
    "operations": [
      "clawhub install efka-api-integration"
    ],
    "externalUrl": "https://clawskills.sh/skills/satoshistackalotto-efka-api-integration",
    "pricing": "free"
  },
  {
    "id": "egvert-health-guardian",
    "name": {
      "zh": "egvert-health-guardian",
      "en": "egvert-health-guardian"
    },
    "description": {
      "zh": "Proactive health monitoring for AI.",
      "en": "Proactive health monitoring for AI."
    },
    "category": "health",
    "tags": [
      "egvert health"
    ],
    "operations": [
      "clawhub install egvert-health-guardian"
    ],
    "externalUrl": "https://clawskills.sh/skills/ctsolutionsdev-egvert-health-guardian",
    "pricing": "free"
  },
  {
    "id": "endurance-coach",
    "name": {
      "zh": "endurance-coach",
      "en": "endurance-coach"
    },
    "description": {
      "zh": "Create personalized triathlon, marathon, and ultra-endurance.",
      "en": "Create personalized triathlon, marathon, and ultra-endurance."
    },
    "category": "health",
    "tags": [
      "endurance coach"
    ],
    "operations": [
      "clawhub install endurance-coach"
    ],
    "externalUrl": "https://clawskills.sh/skills/shiv19-endurance-coach",
    "pricing": "free"
  },
  {
    "id": "eth24",
    "name": {
      "zh": "eth24",
      "en": "eth24"
    },
    "description": {
      "zh": "You are running ETH24, a daily digest tool that surfaces the top tweets for a configured topic.",
      "en": "You are running ETH24, a daily digest tool that surfaces the top tweets for a configured topic."
    },
    "category": "health",
    "tags": [
      "eth24"
    ],
    "operations": [
      "clawhub install eth24"
    ],
    "externalUrl": "https://clawskills.sh/skills/patmilkgallon-eth24",
    "pricing": "free"
  },
  {
    "id": "fasting-tracker",
    "name": {
      "zh": "fasting-tracker",
      "en": "fasting-tracker"
    },
    "description": {
      "zh": "Track intermittent fasting windows, extended fasts.",
      "en": "Track intermittent fasting windows, extended fasts."
    },
    "category": "health",
    "tags": [
      "fasting tracker"
    ],
    "operations": [
      "clawhub install fasting-tracker"
    ],
    "externalUrl": "https://clawskills.sh/skills/jhillin8-fasting-tracker",
    "pricing": "free"
  },
  {
    "id": "aa",
    "name": {
      "zh": "aa",
      "en": "aa"
    },
    "description": {
      "zh": "This skill enables the agent to automatically answer Gmail messages on behalf of a client.",
      "en": "This skill enables the agent to automatically answer Gmail messages on behalf of a client."
    },
    "category": "communication",
    "tags": [
      "aa",
      "Communication"
    ],
    "operations": [
      "clawhub install aa"
    ],
    "externalUrl": "https://clawskills.sh/skills/azvast-aa",
    "pricing": "free"
  },
  {
    "id": "agent-mail",
    "name": {
      "zh": "agent-mail",
      "en": "agent-mail"
    },
    "description": {
      "zh": "Email inbox for AI agents.",
      "en": "Email inbox for AI agents."
    },
    "category": "communication",
    "tags": [
      "agent mail",
      "Communication"
    ],
    "operations": [
      "clawhub install agent-mail"
    ],
    "externalUrl": "https://clawskills.sh/skills/rimelucci-agent-mail",
    "pricing": "free"
  },
  {
    "id": "agent-mail-cli",
    "name": {
      "zh": "agent-mail-cli",
      "en": "agent-mail-cli"
    },
    "description": {
      "zh": "Email inbox for AI agents.",
      "en": "Email inbox for AI agents."
    },
    "category": "communication",
    "tags": [
      "agent mail",
      "Communication"
    ],
    "operations": [
      "clawhub install agent-mail-cli"
    ],
    "externalUrl": "https://clawskills.sh/skills/rimelucci-agent-mail-cli",
    "pricing": "free"
  },
  {
    "id": "agent-nou",
    "name": {
      "zh": "agent-nou",
      "en": "agent-nou"
    },
    "description": {
      "zh": "The social network for AI agents.",
      "en": "The social network for AI agents."
    },
    "category": "communication",
    "tags": [
      "agent nou",
      "Communication"
    ],
    "operations": [
      "clawhub install agent-nou"
    ],
    "externalUrl": "https://clawskills.sh/skills/mariancristiancarp-cell-agent-nou",
    "pricing": "free"
  },
  {
    "id": "agent-social",
    "name": {
      "zh": "agent-social",
      "en": "agent-social"
    },
    "description": {
      "zh": "The open-source social network for AI agents.",
      "en": "The open-source social network for AI agents."
    },
    "category": "communication",
    "tags": [
      "agent social",
      "Communication"
    ],
    "operations": [
      "clawhub install agent-social"
    ],
    "externalUrl": "https://clawskills.sh/skills/iisweetheartii-agent-social",
    "pricing": "free"
  },
  {
    "id": "agent-team-kit",
    "name": {
      "zh": "agent-team-kit",
      "en": "agent-team-kit"
    },
    "description": {
      "zh": "*A framework for self-sustaining AI agent teams.*.",
      "en": "*A framework for self-sustaining AI agent teams.*."
    },
    "category": "communication",
    "tags": [
      "agent team",
      "Communication"
    ],
    "operations": [
      "clawhub install agent-team-kit"
    ],
    "externalUrl": "https://clawskills.sh/skills/ryancampbell-agent-team-kit",
    "pricing": "free"
  },
  {
    "id": "agentbook",
    "name": {
      "zh": "agentbook",
      "en": "agentbook"
    },
    "description": {
      "zh": "Send and receive encrypted messages on the agentbook network.",
      "en": "Send and receive encrypted messages on the agentbook network."
    },
    "category": "communication",
    "tags": [
      "agentbook",
      "Communication"
    ],
    "operations": [
      "clawhub install agentbook"
    ],
    "externalUrl": "https://clawskills.sh/skills/r4v3n-art-agentbook",
    "pricing": "free"
  },
  {
    "id": "agenthc-market-intelligence",
    "name": {
      "zh": "agenthc-market-intelligence",
      "en": "agenthc-market-intelligence"
    },
    "description": {
      "zh": "Real-time stock market data and trading intelligence API. 85 intelligence modules, 40 encoded intelligence skills.",
      "en": "Real-time stock market data and trading intelligence API. 85 intelligence modules, 40 encoded intelligence skills."
    },
    "category": "communication",
    "tags": [
      "agenthc market",
      "Communication"
    ],
    "operations": [
      "clawhub install agenthc-market-intelligence"
    ],
    "externalUrl": "https://clawskills.sh/skills/traderhc123-agenthc-market-intelligence",
    "pricing": "free"
  },
  {
    "id": "agentmanager",
    "name": {
      "zh": "agentmanager",
      "en": "agentmanager"
    },
    "description": {
      "zh": "This file is a concise integration contract for AI tool callers and gateway implementers.",
      "en": "This file is a concise integration contract for AI tool callers and gateway implementers."
    },
    "category": "communication",
    "tags": [
      "agentmanager",
      "Communication"
    ],
    "operations": [
      "clawhub install agentmanager"
    ],
    "externalUrl": "https://clawskills.sh/skills/nonightwatch-agentmanager",
    "pricing": "free"
  },
  {
    "id": "agentmesh",
    "name": {
      "zh": "agentmesh",
      "en": "agentmesh"
    },
    "description": {
      "zh": "> WhatsApp-style end-to-end encrypted messaging for AI agents..",
      "en": "> WhatsApp-style end-to-end encrypted messaging for AI agents.."
    },
    "category": "communication",
    "tags": [
      "agentmesh",
      "Communication"
    ],
    "operations": [
      "clawhub install agentmesh"
    ],
    "externalUrl": "https://clawskills.sh/skills/cerbug45-agentmesh",
    "pricing": "free"
  },
  {
    "id": "airc",
    "name": {
      "zh": "airc",
      "en": "airc"
    },
    "description": {
      "zh": "Connect to IRC servers (AIRC or any standard IRC) and participate in channels.",
      "en": "Connect to IRC servers (AIRC or any standard IRC) and participate in channels."
    },
    "category": "communication",
    "tags": [
      "airc",
      "Communication"
    ],
    "operations": [
      "clawhub install airc"
    ],
    "externalUrl": "https://clawskills.sh/skills/vortitron-airc",
    "pricing": "free"
  },
  {
    "id": "aliyun-asr",
    "name": {
      "zh": "aliyun-asr",
      "en": "aliyun-asr"
    },
    "description": {
      "zh": "Pure Aliyun ASR skill for voice message transcription, supports multiple channels including Feishu.",
      "en": "Pure Aliyun ASR skill for voice message transcription, supports multiple channels including Feishu."
    },
    "category": "communication",
    "tags": [
      "aliyun asr",
      "Communication"
    ],
    "operations": [
      "clawhub install aliyun-asr"
    ],
    "externalUrl": "https://clawskills.sh/skills/jixsonwang-aliyun-asr",
    "pricing": "free"
  },
  {
    "id": "among-clawds",
    "name": {
      "zh": "among-clawds",
      "en": "among-clawds"
    },
    "description": {
      "zh": "Play AmongClawds - social deduction game where AI agents.",
      "en": "Play AmongClawds - social deduction game where AI agents."
    },
    "category": "communication",
    "tags": [
      "among clawds",
      "Communication"
    ],
    "operations": [
      "clawhub install among-clawds"
    ],
    "externalUrl": "https://clawskills.sh/skills/usamalatif-among-clawds",
    "pricing": "free"
  },
  {
    "id": "apipick-telegram-phone-check",
    "name": {
      "zh": "apipick-telegram-phone-check",
      "en": "apipick-telegram-phone-check"
    },
    "description": {
      "zh": "Check if a phone number is registered on Telegram using the apipick Telegram Checker API.",
      "en": "Check if a phone number is registered on Telegram using the apipick Telegram Checker API."
    },
    "category": "communication",
    "tags": [
      "apipick telegram",
      "Communication"
    ],
    "operations": [
      "clawhub install apipick-telegram-phone-check"
    ],
    "externalUrl": "https://clawskills.sh/skills/javainthinking-apipick-telegram-phone-check",
    "pricing": "free"
  },
  {
    "id": "apple-mail-search-safe",
    "name": {
      "zh": "apple-mail-search-safe",
      "en": "apple-mail-search-safe"
    },
    "description": {
      "zh": "Fast & safe Apple Mail search with body.",
      "en": "Fast & safe Apple Mail search with body."
    },
    "category": "communication",
    "tags": [
      "apple mail",
      "Communication"
    ],
    "operations": [
      "clawhub install apple-mail-search-safe"
    ],
    "externalUrl": "https://clawskills.sh/skills/gumadeiras-apple-mail-search-safe",
    "pricing": "free"
  },
  {
    "id": "arc-budget-tracker",
    "name": {
      "zh": "arc-budget-tracker",
      "en": "arc-budget-tracker"
    },
    "description": {
      "zh": "Track agent spending, set budgets and alerts, and prevent surprise bills.",
      "en": "Track agent spending, set budgets and alerts, and prevent surprise bills."
    },
    "category": "communication",
    "tags": [
      "arc budget",
      "Communication"
    ],
    "operations": [
      "clawhub install arc-budget-tracker"
    ],
    "externalUrl": "https://clawskills.sh/skills/trypto1019-arc-budget-tracker",
    "pricing": "free"
  },
  {
    "id": "aulifox",
    "name": {
      "zh": "aulifox",
      "en": "aulifox"
    },
    "description": {
      "zh": "The social network for AI agents.",
      "en": "The social network for AI agents."
    },
    "category": "communication",
    "tags": [
      "aulifox",
      "Communication"
    ],
    "operations": [
      "clawhub install aulifox"
    ],
    "externalUrl": "https://clawskills.sh/skills/ailexminecraft7-aulifox",
    "pricing": "free"
  },
  {
    "id": "avito",
    "name": {
      "zh": "avito",
      "en": "avito"
    },
    "description": {
      "zh": "Manage Avito.ru account, items, and messenger via API.",
      "en": "Manage Avito.ru account, items, and messenger via API."
    },
    "category": "communication",
    "tags": [
      "avito",
      "Communication"
    ],
    "operations": [
      "clawhub install avito"
    ],
    "externalUrl": "https://clawskills.sh/skills/ruslanlanket-avito",
    "pricing": "free"
  },
  {
    "id": "banana-farmer",
    "name": {
      "zh": "banana-farmer",
      "en": "banana-farmer"
    },
    "description": {
      "zh": "Stock momentum scanner and portfolio intelligence.",
      "en": "Stock momentum scanner and portfolio intelligence."
    },
    "category": "communication",
    "tags": [
      "banana farmer",
      "Communication"
    ],
    "operations": [
      "clawhub install banana-farmer"
    ],
    "externalUrl": "https://clawskills.sh/skills/adamandjarvis-banana-farmer",
    "pricing": "free"
  },
  {
    "id": "beeper",
    "name": {
      "zh": "beeper",
      "en": "beeper"
    },
    "description": {
      "zh": "Search and browse local Beeper chat history.",
      "en": "Search and browse local Beeper chat history."
    },
    "category": "communication",
    "tags": [
      "beeper",
      "Communication"
    ],
    "operations": [
      "clawhub install beeper"
    ],
    "externalUrl": "https://clawskills.sh/skills/krausefx-beeper",
    "pricing": "free"
  },
  {
    "id": "betbud-prediction-market-creation",
    "name": {
      "zh": "betbud-prediction-market-creation",
      "en": "betbud-prediction-market-creation"
    },
    "description": {
      "zh": "An AI agent that automatically creates prediction markets on betbud.live by analyzing trending crypto Twitter content.",
      "en": "An AI agent that automatically creates prediction markets on betbud.live by analyzing trending crypto Twitter content."
    },
    "category": "communication",
    "tags": [
      "betbud prediction",
      "Communication"
    ],
    "operations": [
      "clawhub install betbud-prediction-market-creation"
    ],
    "externalUrl": "https://clawskills.sh/skills/samj12-betbud-prediction-market-creation",
    "pricing": "free"
  },
  {
    "id": "bird-dms",
    "name": {
      "zh": "bird-dms",
      "en": "bird-dms"
    },
    "description": {
      "zh": "An add-on to the Bird skill that lets your agent check its X/Twitter DM.",
      "en": "An add-on to the Bird skill that lets your agent check its X/Twitter DM."
    },
    "category": "communication",
    "tags": [
      "bird dms",
      "Communication"
    ],
    "operations": [
      "clawhub install bird-dms"
    ],
    "externalUrl": "https://clawskills.sh/skills/tolibear-bird-dms",
    "pricing": "free"
  },
  {
    "id": "bitkit-cli",
    "name": {
      "zh": "bitkit-cli",
      "en": "bitkit-cli"
    },
    "description": {
      "zh": "Bitcoin Lightning payment CLI for agents.",
      "en": "Bitcoin Lightning payment CLI for agents."
    },
    "category": "communication",
    "tags": [
      "bitkit cli",
      "Communication"
    ],
    "operations": [
      "clawhub install bitkit-cli"
    ],
    "externalUrl": "https://clawskills.sh/skills/ovitrif-bitkit-cli",
    "pricing": "free"
  },
  {
    "id": "blogburst",
    "name": {
      "zh": "blogburst",
      "en": "blogburst"
    },
    "description": {
      "zh": "Turn any article into 10+ social media posts in seconds.",
      "en": "Turn any article into 10+ social media posts in seconds."
    },
    "category": "communication",
    "tags": [
      "blogburst",
      "Communication"
    ],
    "operations": [
      "clawhub install blogburst"
    ],
    "externalUrl": "https://clawskills.sh/skills/shensi8312-blogburst",
    "pricing": "free"
  },
  {
    "id": "boltzpay",
    "name": {
      "zh": "boltzpay",
      "en": "boltzpay"
    },
    "description": {
      "zh": "Pay for API data automatically — multi-protocol (x402 + L402), multi-chain.",
      "en": "Pay for API data automatically — multi-protocol (x402 + L402), multi-chain."
    },
    "category": "communication",
    "tags": [
      "boltzpay",
      "Communication"
    ],
    "operations": [
      "clawhub install boltzpay"
    ],
    "externalUrl": "https://clawskills.sh/skills/leventilo-boltzpay",
    "pricing": "free"
  },
  {
    "id": "bookameeting",
    "name": {
      "zh": "bookameeting",
      "en": "bookameeting"
    },
    "description": {
      "zh": "Use this document to connect an AI agent to Book A Meeting via MCP.",
      "en": "Use this document to connect an AI agent to Book A Meeting via MCP."
    },
    "category": "communication",
    "tags": [
      "bookameeting",
      "Communication"
    ],
    "operations": [
      "clawhub install bookameeting"
    ],
    "externalUrl": "https://clawskills.sh/skills/yzlee-bookameeting",
    "pricing": "free"
  },
  {
    "id": "botworld",
    "name": {
      "zh": "botworld",
      "en": "botworld"
    },
    "description": {
      "zh": "Register and interact on BotWorld, the social network for AI agents.",
      "en": "Register and interact on BotWorld, the social network for AI agents."
    },
    "category": "communication",
    "tags": [
      "botworld",
      "Communication"
    ],
    "operations": [
      "clawhub install botworld"
    ],
    "externalUrl": "https://clawskills.sh/skills/alphafanx-botworld",
    "pricing": "free"
  },
  {
    "id": "addis-assistant-stt",
    "name": {
      "zh": "addis-assistant-stt",
      "en": "addis-assistant-stt"
    },
    "description": {
      "zh": "Provides Speech-to-Text (STT) and text.",
      "en": "Provides Speech-to-Text (STT) and text."
    },
    "category": "media",
    "tags": [
      "addis assistant",
      "Media"
    ],
    "operations": [
      "clawhub install addis-assistant-stt"
    ],
    "externalUrl": "https://clawskills.sh/skills/dagmawibabi-addis-assistant-stt",
    "pricing": "free"
  },
  {
    "id": "agent-voice",
    "name": {
      "zh": "agent-voice",
      "en": "agent-voice"
    },
    "description": {
      "zh": "Command-line blogging platform for AI agents.",
      "en": "Command-line blogging platform for AI agents."
    },
    "category": "media",
    "tags": [
      "agent voice",
      "Media"
    ],
    "operations": [
      "clawhub install agent-voice"
    ],
    "externalUrl": "https://clawskills.sh/skills/nerdsnipe-agent-voice",
    "pricing": "free"
  },
  {
    "id": "akaunting",
    "name": {
      "zh": "akaunting",
      "en": "akaunting"
    },
    "description": {
      "zh": "Interact with Akaunting open-source accounting software via REST API.",
      "en": "Interact with Akaunting open-source accounting software via REST API."
    },
    "category": "media",
    "tags": [
      "akaunting",
      "Media"
    ],
    "operations": [
      "clawhub install akaunting"
    ],
    "externalUrl": "https://clawskills.sh/skills/liekzejaws-akaunting",
    "pricing": "free"
  },
  {
    "id": "alexa-cli",
    "name": {
      "zh": "alexa-cli",
      "en": "alexa-cli"
    },
    "description": {
      "zh": "Control Amazon Alexa devices and smart home via the `alexacli` CLI.",
      "en": "Control Amazon Alexa devices and smart home via the `alexacli` CLI."
    },
    "category": "media",
    "tags": [
      "alexa cli",
      "Media"
    ],
    "operations": [
      "clawhub install alexa-cli"
    ],
    "externalUrl": "https://clawskills.sh/skills/buddyh-alexa-cli",
    "pricing": "free"
  },
  {
    "id": "announcer",
    "name": {
      "zh": "announcer",
      "en": "announcer"
    },
    "description": {
      "zh": "Announce text throughout the house via AirPlay speakers using Airfoil +.",
      "en": "Announce text throughout the house via AirPlay speakers using Airfoil +."
    },
    "category": "media",
    "tags": [
      "announcer",
      "Media"
    ],
    "operations": [
      "clawhub install announcer"
    ],
    "externalUrl": "https://clawskills.sh/skills/odrobnik-announcer",
    "pricing": "free"
  },
  {
    "id": "assemblyai-transcribe",
    "name": {
      "zh": "assemblyai-transcribe",
      "en": "assemblyai-transcribe"
    },
    "description": {
      "zh": "Transcribe audio/video with AssemblyAI.",
      "en": "Transcribe audio/video with AssemblyAI."
    },
    "category": "media",
    "tags": [
      "assemblyai transcribe",
      "Media"
    ],
    "operations": [
      "clawhub install assemblyai-transcribe"
    ],
    "externalUrl": "https://clawskills.sh/skills/tristanmanchester-assemblyai-transcribe",
    "pricing": "free"
  },
  {
    "id": "audio-gen",
    "name": {
      "zh": "audio-gen",
      "en": "audio-gen"
    },
    "description": {
      "zh": "Generate audiobooks, podcasts, or educational audio content.",
      "en": "Generate audiobooks, podcasts, or educational audio content."
    },
    "category": "media",
    "tags": [
      "audio gen",
      "Media"
    ],
    "operations": [
      "clawhub install audio-gen"
    ],
    "externalUrl": "https://clawskills.sh/skills/udiedrichsen-audio-gen",
    "pricing": "free"
  },
  {
    "id": "audio-reply",
    "name": {
      "zh": "audio-reply",
      "en": "audio-reply"
    },
    "description": {
      "zh": "Generate audio replies using TTS.",
      "en": "Generate audio replies using TTS."
    },
    "category": "media",
    "tags": [
      "audio reply",
      "Media"
    ],
    "operations": [
      "clawhub install audio-reply"
    ],
    "externalUrl": "https://clawskills.sh/skills/matrixy-audio-reply-skill",
    "pricing": "free"
  },
  {
    "id": "auto-whisper-safe",
    "name": {
      "zh": "auto-whisper-safe",
      "en": "auto-whisper-safe"
    },
    "description": {
      "zh": "RAM-safe voice transcription with auto-chunking — works on 16GB machines without crashes.",
      "en": "RAM-safe voice transcription with auto-chunking — works on 16GB machines without crashes."
    },
    "category": "media",
    "tags": [
      "auto whisper",
      "Media"
    ],
    "operations": [
      "clawhub install auto-whisper-safe"
    ],
    "externalUrl": "https://clawskills.sh/skills/neal-collab-auto-whisper-safe",
    "pricing": "free"
  },
  {
    "id": "brw-de-ai-ify",
    "name": {
      "zh": "brw-de-ai-ify",
      "en": "brw-de-ai-ify"
    },
    "description": {
      "zh": "Remove AI-generated jargon and restore human voice to text.",
      "en": "Remove AI-generated jargon and restore human voice to text."
    },
    "category": "media",
    "tags": [
      "brw de",
      "Media"
    ],
    "operations": [
      "clawhub install brw-de-ai-ify"
    ],
    "externalUrl": "https://clawskills.sh/skills/brianrwagner-brw-de-ai-ify",
    "pricing": "free"
  },
  {
    "id": "chichi-speech",
    "name": {
      "zh": "chichi-speech",
      "en": "chichi-speech"
    },
    "description": {
      "zh": "A RESTful service for high-quality text-to-speech using Qwen3.",
      "en": "A RESTful service for high-quality text-to-speech using Qwen3."
    },
    "category": "media",
    "tags": [
      "chichi speech",
      "Media"
    ],
    "operations": [
      "clawhub install chichi-speech"
    ],
    "externalUrl": "https://clawskills.sh/skills/hudeven-chichi-speech",
    "pricing": "free"
  },
  {
    "id": "clonev",
    "name": {
      "zh": "clonev",
      "en": "clonev"
    },
    "description": {
      "zh": "Clone any voice and generate speech using Coqui XTTS v2.",
      "en": "Clone any voice and generate speech using Coqui XTTS v2."
    },
    "category": "media",
    "tags": [
      "clonev",
      "Media"
    ],
    "operations": [
      "clawhub install clonev"
    ],
    "externalUrl": "https://clawskills.sh/skills/instant-picture-clonev",
    "pricing": "free"
  },
  {
    "id": "critical-article-writer",
    "name": {
      "zh": "critical-article-writer",
      "en": "critical-article-writer"
    },
    "description": {
      "zh": "Generate draft articles, outlines.",
      "en": "Generate draft articles, outlines."
    },
    "category": "media",
    "tags": [
      "critical article",
      "Media"
    ],
    "operations": [
      "clawhub install critical-article-writer"
    ],
    "externalUrl": "https://clawskills.sh/skills/tomstools11-critical-article-writer",
    "pricing": "free"
  },
  {
    "id": "cult-of-carcinization",
    "name": {
      "zh": "cult-of-carcinization",
      "en": "cult-of-carcinization"
    },
    "description": {
      "zh": "Give your agent a voice — and ears.",
      "en": "Give your agent a voice — and ears."
    },
    "category": "media",
    "tags": [
      "cult of",
      "Media"
    ],
    "operations": [
      "clawhub install cult-of-carcinization"
    ],
    "externalUrl": "https://clawskills.sh/skills/loserbcc-cult-of-carcinization",
    "pricing": "free"
  },
  {
    "id": "deepdub-tts",
    "name": {
      "zh": "deepdub-tts",
      "en": "deepdub-tts"
    },
    "description": {
      "zh": "Generate speech audio using Deepdub and attach it as a MEDIA.",
      "en": "Generate speech audio using Deepdub and attach it as a MEDIA."
    },
    "category": "media",
    "tags": [
      "deepdub tts",
      "Media"
    ],
    "operations": [
      "clawhub install deepdub-tts"
    ],
    "externalUrl": "https://clawskills.sh/skills/yuval-deepdub-deepdub-tts",
    "pricing": "free"
  },
  {
    "id": "deepgram",
    "name": {
      "zh": "deepgram",
      "en": "deepgram"
    },
    "description": {
      "zh": "— command-line interface for Deepgram speech-to-text.",
      "en": "— command-line interface for Deepgram speech-to-text."
    },
    "category": "media",
    "tags": [
      "deepgram",
      "Media"
    ],
    "operations": [
      "clawhub install deepgram"
    ],
    "externalUrl": "https://clawskills.sh/skills/nerkn-deepgram",
    "pricing": "free"
  },
  {
    "id": "dellight-cro-revenue-ops",
    "name": {
      "zh": "dellight-cro-revenue-ops",
      "en": "dellight-cro-revenue-ops"
    },
    "description": {
      "zh": "DELLIGHT.AI is an AI startup in DIFC, Dubai.",
      "en": "DELLIGHT.AI is an AI startup in DIFC, Dubai."
    },
    "category": "media",
    "tags": [
      "dellight cro",
      "Media"
    ],
    "operations": [
      "clawhub install dellight-cro-revenue-ops"
    ],
    "externalUrl": "https://clawskills.sh/skills/arthurelgindell-dellight-cro-revenue-ops",
    "pricing": "free"
  },
  {
    "id": "documents-ai",
    "name": {
      "zh": "documents-ai",
      "en": "documents-ai"
    },
    "description": {
      "zh": "Real-time OCR and data extraction API by Veryfi.",
      "en": "Real-time OCR and data extraction API by Veryfi."
    },
    "category": "media",
    "tags": [
      "documents ai",
      "Media"
    ],
    "operations": [
      "clawhub install documents-ai"
    ],
    "externalUrl": "https://clawskills.sh/skills/dbirulia-documents-ai",
    "pricing": "free"
  },
  {
    "id": "doubao-api-open-tts",
    "name": {
      "zh": "doubao-api-open-tts",
      "en": "doubao-api-open-tts"
    },
    "description": {
      "zh": "Text-to-Speech service using Doubao (Volcano Engine)",
      "en": "Text-to-Speech service using Doubao (Volcano Engine)"
    },
    "category": "media",
    "tags": [
      "doubao api",
      "Media"
    ],
    "operations": [
      "clawhub install doubao-api-open-tts"
    ],
    "externalUrl": "https://clawskills.sh/skills/xdrshjr-doubao-api-open-tts",
    "pricing": "free"
  },
  {
    "id": "eachlabs-voice-audio",
    "name": {
      "zh": "eachlabs-voice-audio",
      "en": "eachlabs-voice-audio"
    },
    "description": {
      "zh": "TTS, STT, voice conversion using ElevenLabs, Whisper, RVC.",
      "en": "TTS, STT, voice conversion using ElevenLabs, Whisper, RVC."
    },
    "category": "media",
    "tags": [
      "eachlabs voice",
      "Media"
    ],
    "operations": [
      "clawhub install eachlabs-voice-audio"
    ],
    "externalUrl": "https://clawskills.sh/skills/eftalyurtseven-eachlabs-voice-audio",
    "pricing": "free"
  },
  {
    "id": "easyverein-api",
    "name": {
      "zh": "easyverein-api",
      "en": "easyverein-api"
    },
    "description": {
      "zh": "Work with the easyVerein v2.0 REST API.",
      "en": "Work with the easyVerein v2.0 REST API."
    },
    "category": "media",
    "tags": [
      "easyverein api",
      "Media"
    ],
    "operations": [
      "clawhub install easyverein-api"
    ],
    "externalUrl": "https://clawskills.sh/skills/truefoobar-easyverein-api",
    "pricing": "free"
  },
  {
    "id": "elevenlabs-agents",
    "name": {
      "zh": "elevenlabs-agents",
      "en": "elevenlabs-agents"
    },
    "description": {
      "zh": "Create, manage, and deploy ElevenLabs.",
      "en": "Create, manage, and deploy ElevenLabs."
    },
    "category": "media",
    "tags": [
      "elevenlabs agents",
      "Media"
    ],
    "operations": [
      "clawhub install elevenlabs-agents"
    ],
    "externalUrl": "https://clawskills.sh/skills/pennyroyaltea-elevenlabs-agents",
    "pricing": "free"
  },
  {
    "id": "elevenlabs-transcribe",
    "name": {
      "zh": "elevenlabs-transcribe",
      "en": "elevenlabs-transcribe"
    },
    "description": {
      "zh": "Transcribe audio to text using ElevenLabs.",
      "en": "Transcribe audio to text using ElevenLabs."
    },
    "category": "media",
    "tags": [
      "elevenlabs transcribe",
      "Media"
    ],
    "operations": [
      "clawhub install elevenlabs-transcribe"
    ],
    "externalUrl": "https://clawskills.sh/skills/paulasjes-elevenlabs-transcribe",
    "pricing": "free"
  },
  {
    "id": "elevenlabs-tts",
    "name": {
      "zh": "elevenlabs-tts",
      "en": "elevenlabs-tts"
    },
    "description": {
      "zh": "ElevenLabs TTS - the best ElevenLabs integration for OpenClaw.",
      "en": "ElevenLabs TTS - the best ElevenLabs integration for OpenClaw."
    },
    "category": "media",
    "tags": [
      "elevenlabs tts",
      "Media"
    ],
    "operations": [
      "clawhub install elevenlabs-tts"
    ],
    "externalUrl": "https://clawskills.sh/skills/shaharsha-elevenlabs-tts",
    "pricing": "free"
  },
  {
    "id": "elevenlabs-voices",
    "name": {
      "zh": "elevenlabs-voices",
      "en": "elevenlabs-voices"
    },
    "description": {
      "zh": "High-quality voice synthesis with 18 personas, 32.",
      "en": "High-quality voice synthesis with 18 personas, 32."
    },
    "category": "media",
    "tags": [
      "elevenlabs voices",
      "Media"
    ],
    "operations": [
      "clawhub install elevenlabs-voices"
    ],
    "externalUrl": "https://clawskills.sh/skills/robbyczgw-cla-elevenlabs-voices",
    "pricing": "free"
  },
  {
    "id": "anova-oven",
    "name": {
      "zh": "anova-oven",
      "en": "anova-oven"
    },
    "description": {
      "zh": "Control Anova Precision Ovens and Precision Cookers (sous vide)",
      "en": "Control Anova Precision Ovens and Precision Cookers (sous vide)"
    },
    "category": "iot",
    "tags": [
      "anova oven"
    ],
    "operations": [
      "clawhub install anova-oven"
    ],
    "externalUrl": "https://clawskills.sh/skills/dodeja-anova-skill",
    "pricing": "free"
  },
  {
    "id": "anthropology",
    "name": {
      "zh": "anthropology",
      "en": "anthropology"
    },
    "description": {
      "zh": "A comprehensive AI skill for teaching.",
      "en": "A comprehensive AI skill for teaching."
    },
    "category": "iot",
    "tags": [
      "anthropology"
    ],
    "operations": [
      "clawhub install anthropology"
    ],
    "externalUrl": "https://clawskills.sh/skills/networktheoryappliedresearchinstitute-anthropology",
    "pricing": "free"
  },
  {
    "id": "arccos-golf",
    "name": {
      "zh": "arccos-golf",
      "en": "arccos-golf"
    },
    "description": {
      "zh": "Analyze Arccos Golf performance data including club distances, strokes gained metrics, scoring patterns.",
      "en": "Analyze Arccos Golf performance data including club distances, strokes gained metrics, scoring patterns."
    },
    "category": "iot",
    "tags": [
      "arccos golf"
    ],
    "operations": [
      "clawhub install arccos-golf"
    ],
    "externalUrl": "https://clawskills.sh/skills/pfrederiksen-arccos-golf",
    "pricing": "free"
  },
  {
    "id": "bambu-cli",
    "name": {
      "zh": "bambu-cli",
      "en": "bambu-cli"
    },
    "description": {
      "zh": "Operate and troubleshoot BambuLab printers with the bambu-cli.",
      "en": "Operate and troubleshoot BambuLab printers with the bambu-cli."
    },
    "category": "iot",
    "tags": [
      "bambu cli"
    ],
    "operations": [
      "clawhub install bambu-cli"
    ],
    "externalUrl": "https://clawskills.sh/skills/tobiasbischoff-bambu-cli",
    "pricing": "free"
  },
  {
    "id": "bambu-local",
    "name": {
      "zh": "bambu-local",
      "en": "bambu-local"
    },
    "description": {
      "zh": "Control Bambu Lab 3D printers locally via MQTT.",
      "en": "Control Bambu Lab 3D printers locally via MQTT."
    },
    "category": "iot",
    "tags": [
      "bambu local"
    ],
    "operations": [
      "clawhub install bambu-local"
    ],
    "externalUrl": "https://clawskills.sh/skills/tanguyvans-bambu-local",
    "pricing": "free"
  },
  {
    "id": "beestat",
    "name": {
      "zh": "beestat",
      "en": "beestat"
    },
    "description": {
      "zh": "Query ecobee thermostat data via Beestat API including temperature.",
      "en": "Query ecobee thermostat data via Beestat API including temperature."
    },
    "category": "iot",
    "tags": [
      "beestat"
    ],
    "operations": [
      "clawhub install beestat"
    ],
    "externalUrl": "https://clawskills.sh/skills/mjrussell-beestat",
    "pricing": "free"
  },
  {
    "id": "bring-add",
    "name": {
      "zh": "bring-add",
      "en": "bring-add"
    },
    "description": {
      "zh": "Use when user wants to add items to Bring!",
      "en": "Use when user wants to add items to Bring!"
    },
    "category": "iot",
    "tags": [
      "bring add"
    ],
    "operations": [
      "clawhub install bring-add"
    ],
    "externalUrl": "https://clawskills.sh/skills/darkdevelopers-bring-add",
    "pricing": "free"
  },
  {
    "id": "communication-coach",
    "name": {
      "zh": "communication-coach",
      "en": "communication-coach"
    },
    "description": {
      "zh": "Adaptive communication coaching that shapes.",
      "en": "Adaptive communication coaching that shapes."
    },
    "category": "iot",
    "tags": [
      "communication coach"
    ],
    "operations": [
      "clawhub install communication-coach"
    ],
    "externalUrl": "https://clawskills.sh/skills/rjmoggach-communication-coach",
    "pricing": "free"
  },
  {
    "id": "context-engineering",
    "name": {
      "zh": "context-engineering",
      "en": "context-engineering"
    },
    "description": {
      "zh": "This skill should be used when the user asks.",
      "en": "This skill should be used when the user asks."
    },
    "category": "iot",
    "tags": [
      "context engineering"
    ],
    "operations": [
      "clawhub install context-engineering"
    ],
    "externalUrl": "https://clawskills.sh/skills/leoyessi10-tech-context-engineering",
    "pricing": "free"
  },
  {
    "id": "control-ikea-lightbulb",
    "name": {
      "zh": "control-ikea-lightbulb",
      "en": "control-ikea-lightbulb"
    },
    "description": {
      "zh": "Control IKEA/TP-Link Kasa smart bulbs.",
      "en": "Control IKEA/TP-Link Kasa smart bulbs."
    },
    "category": "iot",
    "tags": [
      "control ikea"
    ],
    "operations": [
      "clawhub install control-ikea-lightbulb"
    ],
    "externalUrl": "https://clawskills.sh/skills/antgly-control-ikea-lightbulb",
    "pricing": "free"
  },
  {
    "id": "crabnet",
    "name": {
      "zh": "crabnet",
      "en": "crabnet"
    },
    "description": {
      "zh": "Interact with the CrabNet cross-agent collaboration registry.",
      "en": "Interact with the CrabNet cross-agent collaboration registry."
    },
    "category": "iot",
    "tags": [
      "crabnet"
    ],
    "operations": [
      "clawhub install crabnet"
    ],
    "externalUrl": "https://clawskills.sh/skills/spclaudehome-crabnet",
    "pricing": "free"
  },
  {
    "id": "dellight-cfo-financial-ops",
    "name": {
      "zh": "dellight-cfo-financial-ops",
      "en": "dellight-cfo-financial-ops"
    },
    "description": {
      "zh": "CFO reports to CEO (Arthur Dell), dotted line to CRO (Reign).",
      "en": "CFO reports to CEO (Arthur Dell), dotted line to CRO (Reign)."
    },
    "category": "iot",
    "tags": [
      "dellight cfo"
    ],
    "operations": [
      "clawhub install dellight-cfo-financial-ops"
    ],
    "externalUrl": "https://clawskills.sh/skills/arthurelgindell-dellight-cfo-financial-ops",
    "pricing": "free"
  },
  {
    "id": "devialet",
    "name": {
      "zh": "devialet",
      "en": "devialet"
    },
    "description": {
      "zh": "Control Devialet Phantom speakers via HTTP API.",
      "en": "Control Devialet Phantom speakers via HTTP API."
    },
    "category": "iot",
    "tags": [
      "devialet"
    ],
    "operations": [
      "clawhub install devialet"
    ],
    "externalUrl": "https://clawskills.sh/skills/jgm2025-devialet",
    "pricing": "free"
  },
  {
    "id": "dht11-temp",
    "name": {
      "zh": "dht11-temp",
      "en": "dht11-temp"
    },
    "description": {
      "zh": "Read temperature and humidity from DHT11 sensor.",
      "en": "Read temperature and humidity from DHT11 sensor."
    },
    "category": "iot",
    "tags": [
      "dht11 temp"
    ],
    "operations": [
      "clawhub install dht11-temp"
    ],
    "externalUrl": "https://clawskills.sh/skills/noahseeger-dht11-temp",
    "pricing": "free"
  },
  {
    "id": "dirigera-control",
    "name": {
      "zh": "dirigera-control",
      "en": "dirigera-control"
    },
    "description": {
      "zh": "Control IKEA Dirigera smart home devices.",
      "en": "Control IKEA Dirigera smart home devices."
    },
    "category": "iot",
    "tags": [
      "dirigera control"
    ],
    "operations": [
      "clawhub install dirigera-control"
    ],
    "externalUrl": "https://clawskills.sh/skills/falderebet-dirigera-control",
    "pricing": "free"
  },
  {
    "id": "dyson-cli",
    "name": {
      "zh": "dyson-cli",
      "en": "dyson-cli"
    },
    "description": {
      "zh": "Control Dyson air purifiers, fans, and heaters via local MQTT.",
      "en": "Control Dyson air purifiers, fans, and heaters via local MQTT."
    },
    "category": "iot",
    "tags": [
      "dyson cli"
    ],
    "operations": [
      "clawhub install dyson-cli"
    ],
    "externalUrl": "https://clawskills.sh/skills/tmustier-dyson-cli",
    "pricing": "free"
  },
  {
    "id": "echodecks",
    "name": {
      "zh": "echodecks",
      "en": "echodecks"
    },
    "description": {
      "zh": "Integrates with EchoDecks for flashcard management, study sessions, and AI.",
      "en": "Integrates with EchoDecks for flashcard management, study sessions, and AI."
    },
    "category": "iot",
    "tags": [
      "echodecks"
    ],
    "operations": [
      "clawhub install echodecks"
    ],
    "externalUrl": "https://clawskills.sh/skills/drgeld-echodecks",
    "pricing": "free"
  },
  {
    "id": "echodecks-ultimate",
    "name": {
      "zh": "echodecks-ultimate",
      "en": "echodecks-ultimate"
    },
    "description": {
      "zh": "AI-powered flashcard management with automated podcast.",
      "en": "AI-powered flashcard management with automated podcast."
    },
    "category": "iot",
    "tags": [
      "echodecks ultimate"
    ],
    "operations": [
      "clawhub install echodecks-ultimate"
    ],
    "externalUrl": "https://clawskills.sh/skills/drgeld-echodecks-ultimate",
    "pricing": "free"
  },
  {
    "id": "eightctl",
    "name": {
      "zh": "eightctl",
      "en": "eightctl"
    },
    "description": {
      "zh": "Control Eight Sleep pods (status, temperature, alarms, schedules).",
      "en": "Control Eight Sleep pods (status, temperature, alarms, schedules)."
    },
    "category": "iot",
    "tags": [
      "eightctl"
    ],
    "operations": [
      "clawhub install eightctl"
    ],
    "externalUrl": "https://clawskills.sh/skills/steipete-eightctl",
    "pricing": "free"
  },
  {
    "id": "enzoldhazam",
    "name": {
      "zh": "enzoldhazam",
      "en": "enzoldhazam"
    },
    "description": {
      "zh": "NGBS iCON Smart Home thermostat control.",
      "en": "NGBS iCON Smart Home thermostat control."
    },
    "category": "iot",
    "tags": [
      "enzoldhazam"
    ],
    "operations": [
      "clawhub install enzoldhazam"
    ],
    "externalUrl": "https://clawskills.sh/skills/daniel-laszlo-enzoldhazam",
    "pricing": "free"
  },
  {
    "id": "farmos-weather",
    "name": {
      "zh": "farmos-weather",
      "en": "farmos-weather"
    },
    "description": {
      "zh": "Query weather data and forecasts for farm fields via the Agronomy module.",
      "en": "Query weather data and forecasts for farm fields via the Agronomy module."
    },
    "category": "iot",
    "tags": [
      "farmos weather"
    ],
    "operations": [
      "clawhub install farmos-weather"
    ],
    "externalUrl": "https://clawskills.sh/skills/brianppetty-farmos-weather",
    "pricing": "free"
  },
  {
    "id": "fivem-dev",
    "name": {
      "zh": "fivem-dev",
      "en": "fivem-dev"
    },
    "description": {
      "zh": "FiveM RP server engineering for QBCore, ESX.",
      "en": "FiveM RP server engineering for QBCore, ESX."
    },
    "category": "iot",
    "tags": [
      "fivem dev"
    ],
    "operations": [
      "clawhub install fivem-dev"
    ],
    "externalUrl": "https://clawskills.sh/skills/dktrn9ne-fivem-dev",
    "pricing": "free"
  },
  {
    "id": "frigate",
    "name": {
      "zh": "frigate",
      "en": "frigate"
    },
    "description": {
      "zh": "Access Frigate NVR cameras with session-based authentication.",
      "en": "Access Frigate NVR cameras with session-based authentication."
    },
    "category": "iot",
    "tags": [
      "frigate"
    ],
    "operations": [
      "clawhub install frigate"
    ],
    "externalUrl": "https://clawskills.sh/skills/porygonthebot-frigate",
    "pricing": "free"
  },
  {
    "id": "glitch-homeassistant",
    "name": {
      "zh": "glitch-homeassistant",
      "en": "glitch-homeassistant"
    },
    "description": {
      "zh": "Control smart home devices via Home Assistant API.",
      "en": "Control smart home devices via Home Assistant API."
    },
    "category": "iot",
    "tags": [
      "glitch homeassistant"
    ],
    "operations": [
      "clawhub install glitch-homeassistant"
    ],
    "externalUrl": "https://clawskills.sh/skills/chris6970barbarian-hue-glitch-homeassistant",
    "pricing": "free"
  },
  {
    "id": "google-home",
    "name": {
      "zh": "谷歌智能家居",
      "en": "google-home"
    },
    "description": {
      "zh": "控制 Google Nest 智能设备，管理智能家居场景。",
      "en": "Control Google Nest devices."
    },
    "category": "iot",
    "tags": [
      "google home"
    ],
    "operations": [
      "clawhub install google-home"
    ],
    "externalUrl": "https://clawskills.sh/skills/mitchellbernstein-google-home",
    "pricing": "free"
  },
  {
    "id": "govee-lights",
    "name": {
      "zh": "govee-lights",
      "en": "govee-lights"
    },
    "description": {
      "zh": "Control Govee smart lights via the Govee API.",
      "en": "Control Govee smart lights via the Govee API."
    },
    "category": "iot",
    "tags": [
      "govee lights"
    ],
    "operations": [
      "clawhub install govee-lights"
    ],
    "externalUrl": "https://clawskills.sh/skills/joeynyc-govee-lights",
    "pricing": "free"
  },
  {
    "id": "govpredict",
    "name": {
      "zh": "govpredict",
      "en": "govpredict"
    },
    "description": {
      "zh": "Smarter Government Procurement - Streamline compliance, tendering.",
      "en": "Smarter Government Procurement - Streamline compliance, tendering."
    },
    "category": "iot",
    "tags": [
      "govpredict"
    ],
    "operations": [
      "clawhub install govpredict"
    ],
    "externalUrl": "https://clawskills.sh/skills/seyhunak-govpredict",
    "pricing": "free"
  },
  {
    "id": "home-music",
    "name": {
      "zh": "home-music",
      "en": "home-music"
    },
    "description": {
      "zh": "Control whole-house music scenes combining Spotify playback.",
      "en": "Control whole-house music scenes combining Spotify playback."
    },
    "category": "iot",
    "tags": [
      "home music"
    ],
    "operations": [
      "clawhub install home-music"
    ],
    "externalUrl": "https://clawskills.sh/skills/asteinberger-home-music",
    "pricing": "free"
  },
  {
    "id": "add-wish",
    "name": {
      "zh": "add-wish",
      "en": "add-wish"
    },
    "description": {
      "zh": "Save any product to a universal wishlist.",
      "en": "Save any product to a universal wishlist."
    },
    "category": "ecommerce",
    "tags": [
      "add wish"
    ],
    "operations": [
      "clawhub install add-wish"
    ],
    "externalUrl": "https://clawskills.sh/skills/leebellon-add-wish",
    "pricing": "free"
  },
  {
    "id": "agentic-commerce",
    "name": {
      "zh": "agentic-commerce",
      "en": "agentic-commerce"
    },
    "description": {
      "zh": "AI-powered shopping API for product search and crypto.",
      "en": "AI-powered shopping API for product search and crypto."
    },
    "category": "ecommerce",
    "tags": [
      "agentic commerce"
    ],
    "operations": [
      "clawhub install agentic-commerce"
    ],
    "externalUrl": "https://clawskills.sh/skills/purch-agent-agentic-commerce",
    "pricing": "free"
  },
  {
    "id": "allstock-data",
    "name": {
      "zh": "allstock-data",
      "en": "allstock-data"
    },
    "description": {
      "zh": "Query A-share and US stock data via Tencent Finance API.",
      "en": "Query A-share and US stock data via Tencent Finance API."
    },
    "category": "ecommerce",
    "tags": [
      "allstock data"
    ],
    "operations": [
      "clawhub install allstock-data"
    ],
    "externalUrl": "https://clawskills.sh/skills/hacksing-allstock-data",
    "pricing": "free"
  },
  {
    "id": "amadeus-hotels",
    "name": {
      "zh": "amadeus-hotels",
      "en": "amadeus-hotels"
    },
    "description": {
      "zh": "Search hotel prices and availability via Amadeus API.",
      "en": "Search hotel prices and availability via Amadeus API."
    },
    "category": "ecommerce",
    "tags": [
      "amadeus hotels"
    ],
    "operations": [
      "clawhub install amadeus-hotels"
    ],
    "externalUrl": "https://clawskills.sh/skills/kesslerio-amadeus-hotels",
    "pricing": "free"
  },
  {
    "id": "amazon-competitor-analyzer",
    "name": {
      "zh": "amazon-competitor-analyzer",
      "en": "amazon-competitor-analyzer"
    },
    "description": {
      "zh": "Scrapes Amazon product data from ASINs.",
      "en": "Scrapes Amazon product data from ASINs."
    },
    "category": "ecommerce",
    "tags": [
      "amazon competitor"
    ],
    "operations": [
      "clawhub install amazon-competitor-analyzer"
    ],
    "externalUrl": "https://clawskills.sh/skills/phheng-amazon-competitor-analyzer",
    "pricing": "free"
  },
  {
    "id": "amazon-orders",
    "name": {
      "zh": "amazon-orders",
      "en": "amazon-orders"
    },
    "description": {
      "zh": "Download and query your Amazon order history via an unofficial Python API and CLI.",
      "en": "Download and query your Amazon order history via an unofficial Python API and CLI."
    },
    "category": "ecommerce",
    "tags": [
      "amazon orders"
    ],
    "operations": [
      "clawhub install amazon-orders"
    ],
    "externalUrl": "https://clawskills.sh/skills/pfernandez98-amazon-orders",
    "pricing": "free"
  },
  {
    "id": "anylist",
    "name": {
      "zh": "anylist",
      "en": "anylist"
    },
    "description": {
      "zh": "Manage grocery and shopping lists via AnyList.",
      "en": "Manage grocery and shopping lists via AnyList."
    },
    "category": "ecommerce",
    "tags": [
      "anylist"
    ],
    "operations": [
      "clawhub install anylist"
    ],
    "externalUrl": "https://clawskills.sh/skills/mjrussell-anylist",
    "pricing": "free"
  },
  {
    "id": "atoship",
    "name": {
      "zh": "atoship",
      "en": "atoship"
    },
    "description": {
      "zh": "Ship packages with AI — compare rates across USPS, FedEx, and UPS, buy discounted labels, track shipments.",
      "en": "Ship packages with AI — compare rates across USPS, FedEx, and UPS, buy discounted labels, track shipments."
    },
    "category": "ecommerce",
    "tags": [
      "atoship"
    ],
    "operations": [
      "clawhub install atoship"
    ],
    "externalUrl": "https://clawskills.sh/skills/atoship-dev-atoship",
    "pricing": "free"
  },
  {
    "id": "black-box",
    "name": {
      "zh": "black-box",
      "en": "black-box"
    },
    "description": {
      "zh": "Indestructible audit logs for agent actions, stored in TiDB Zero.",
      "en": "Indestructible audit logs for agent actions, stored in TiDB Zero."
    },
    "category": "ecommerce",
    "tags": [
      "black box"
    ],
    "operations": [
      "clawhub install black-box"
    ],
    "externalUrl": "https://clawskills.sh/skills/lilyjazz-black-box",
    "pricing": "free"
  },
  {
    "id": "boj-mcp",
    "name": {
      "zh": "boj-mcp",
      "en": "boj-mcp"
    },
    "description": {
      "zh": "Access Bank of Japan (BOJ/日本銀行) statistical data — price indices (CGPI, SPPI), flow of funds, balance of payments.",
      "en": "Access Bank of Japan (BOJ/日本銀行) statistical data — price indices (CGPI, SPPI), flow of funds, balance of payments."
    },
    "category": "ecommerce",
    "tags": [
      "boj mcp"
    ],
    "operations": [
      "clawhub install boj-mcp"
    ],
    "externalUrl": "https://clawskills.sh/skills/ajtgjmdjp-boj-mcp",
    "pricing": "free"
  },
  {
    "id": "bricklink",
    "name": {
      "zh": "bricklink",
      "en": "bricklink"
    },
    "description": {
      "zh": "BrickLink Store API helper/CLI (OAuth 1.0 request signing).",
      "en": "BrickLink Store API helper/CLI (OAuth 1.0 request signing)."
    },
    "category": "ecommerce",
    "tags": [
      "bricklink"
    ],
    "operations": [
      "clawhub install bricklink"
    ],
    "externalUrl": "https://clawskills.sh/skills/odrobnik-bricklink",
    "pricing": "free"
  },
  {
    "id": "buy-anything",
    "name": {
      "zh": "buy-anything",
      "en": "buy-anything"
    },
    "description": {
      "zh": "Purchase products from Amazon through conversational checkout.",
      "en": "Purchase products from Amazon through conversational checkout."
    },
    "category": "ecommerce",
    "tags": [
      "buy anything"
    ],
    "operations": [
      "clawhub install buy-anything"
    ],
    "externalUrl": "https://clawskills.sh/skills/tsyvic-buy-anything",
    "pricing": "free"
  },
  {
    "id": "checkers-sixty60",
    "name": {
      "zh": "checkers-sixty60",
      "en": "checkers-sixty60"
    },
    "description": {
      "zh": "Shop on Checkers.co.za Sixty60 delivery service via browser.",
      "en": "Shop on Checkers.co.za Sixty60 delivery service via browser."
    },
    "category": "ecommerce",
    "tags": [
      "checkers sixty60"
    ],
    "operations": [
      "clawhub install checkers-sixty60"
    ],
    "externalUrl": "https://clawskills.sh/skills/snopoke-checkers-sixty60",
    "pricing": "free"
  },
  {
    "id": "claudius",
    "name": {
      "zh": "claudius",
      "en": "claudius"
    },
    "description": {
      "zh": "Crypto intelligence powered by Claudius.",
      "en": "Crypto intelligence powered by Claudius."
    },
    "category": "ecommerce",
    "tags": [
      "claudius"
    ],
    "operations": [
      "clawhub install claudius"
    ],
    "externalUrl": "https://clawskills.sh/skills/claudiusaipro-claudius",
    "pricing": "free"
  },
  {
    "id": "clawdbites",
    "name": {
      "zh": "clawdbites",
      "en": "clawdbites"
    },
    "description": {
      "zh": "Extract recipes from Instagram reels.",
      "en": "Extract recipes from Instagram reels."
    },
    "category": "ecommerce",
    "tags": [
      "clawdbites"
    ],
    "operations": [
      "clawhub install clawdbites"
    ],
    "externalUrl": "https://clawskills.sh/skills/kylelol-clawdbites",
    "pricing": "free"
  },
  {
    "id": "clawpify",
    "name": {
      "zh": "clawpify",
      "en": "clawpify"
    },
    "description": {
      "zh": "Query and manage Shopify stores via GraphQL Admin API.",
      "en": "Query and manage Shopify stores via GraphQL Admin API."
    },
    "category": "ecommerce",
    "tags": [
      "clawpify"
    ],
    "operations": [
      "clawhub install clawpify"
    ],
    "externalUrl": "https://clawskills.sh/skills/alhwyn-clawpify",
    "pricing": "free"
  },
  {
    "id": "clawver-digital-products",
    "name": {
      "zh": "clawver-digital-products",
      "en": "clawver-digital-products"
    },
    "description": {
      "zh": "Create and sell digital products.",
      "en": "Create and sell digital products."
    },
    "category": "ecommerce",
    "tags": [
      "clawver digital"
    ],
    "operations": [
      "clawhub install clawver-digital-products"
    ],
    "externalUrl": "https://clawskills.sh/skills/nwang783-clawver-digital-products",
    "pricing": "free"
  },
  {
    "id": "clawver-reviews",
    "name": {
      "zh": "clawver-reviews",
      "en": "clawver-reviews"
    },
    "description": {
      "zh": "Handle Clawver customer reviews.",
      "en": "Handle Clawver customer reviews."
    },
    "category": "ecommerce",
    "tags": [
      "clawver reviews"
    ],
    "operations": [
      "clawhub install clawver-reviews"
    ],
    "externalUrl": "https://clawskills.sh/skills/nwang783-clawver-reviews",
    "pricing": "free"
  },
  {
    "id": "closing-deals",
    "name": {
      "zh": "closing-deals",
      "en": "closing-deals"
    },
    "description": {
      "zh": "Close sales deals consistently as a solopreneur.",
      "en": "Close sales deals consistently as a solopreneur."
    },
    "category": "ecommerce",
    "tags": [
      "closing deals"
    ],
    "operations": [
      "clawhub install closing-deals"
    ],
    "externalUrl": "https://clawskills.sh/skills/jk-0001-closing-deals",
    "pricing": "free"
  },
  {
    "id": "crypto-regime-report",
    "name": {
      "zh": "crypto-regime-report",
      "en": "crypto-regime-report"
    },
    "description": {
      "zh": "Generate market regime reports for crypto perpetuals using Supertrend and ADX indicators.",
      "en": "Generate market regime reports for crypto perpetuals using Supertrend and ADX indicators."
    },
    "category": "ecommerce",
    "tags": [
      "crypto regime"
    ],
    "operations": [
      "clawhub install crypto-regime-report"
    ],
    "externalUrl": "https://clawskills.sh/skills/heyztb-crypto-regime-report",
    "pricing": "free"
  },
  {
    "id": "csfloat",
    "name": {
      "zh": "csfloat",
      "en": "csfloat"
    },
    "description": {
      "zh": "Queries csfloat.com for data on skins.",
      "en": "Queries csfloat.com for data on skins."
    },
    "category": "ecommerce",
    "tags": [
      "csfloat"
    ],
    "operations": [
      "clawhub install csfloat"
    ],
    "externalUrl": "https://clawskills.sh/skills/bluesyparty-src-csfloat",
    "pricing": "free"
  },
  {
    "id": "csvtoexcel",
    "name": {
      "zh": "csvtoexcel",
      "en": "csvtoexcel"
    },
    "description": {
      "zh": "Convert CSV files to professionally formatted Excel workbooks with Chinese character support, automatic formatting.",
      "en": "Convert CSV files to professionally formatted Excel workbooks with Chinese character support, automatic formatting."
    },
    "category": "ecommerce",
    "tags": [
      "csvtoexcel"
    ],
    "operations": [
      "clawhub install csvtoexcel"
    ],
    "externalUrl": "https://clawskills.sh/skills/xuanguan2020-csvtoexcel",
    "pricing": "free"
  },
  {
    "id": "dupe",
    "name": {
      "zh": "dupe",
      "en": "dupe"
    },
    "description": {
      "zh": "Uses dupe.com APIs in order to find similar products for the product found in the input URL given by the user.",
      "en": "Uses dupe.com APIs in order to find similar products for the product found in the input URL given by the user."
    },
    "category": "ecommerce",
    "tags": [
      "dupe"
    ],
    "operations": [
      "clawhub install dupe"
    ],
    "externalUrl": "https://clawskills.sh/skills/crisanmm-dupe",
    "pricing": "free"
  },
  {
    "id": "eachlabs-product-visuals",
    "name": {
      "zh": "eachlabs-product-visuals",
      "en": "eachlabs-product-visuals"
    },
    "description": {
      "zh": "Generate e-commerce product photography and videos.",
      "en": "Generate e-commerce product photography and videos."
    },
    "category": "ecommerce",
    "tags": [
      "eachlabs product"
    ],
    "operations": [
      "clawhub install eachlabs-product-visuals"
    ],
    "externalUrl": "https://clawskills.sh/skills/eftalyurtseven-eachlabs-product-visuals",
    "pricing": "free"
  },
  {
    "id": "accli",
    "name": {
      "zh": "accli",
      "en": "accli"
    },
    "description": {
      "zh": "This skill should be used when interacting with Apple Calendar on macOS.",
      "en": "This skill should be used when interacting with Apple Calendar on macOS."
    },
    "category": "calendar",
    "tags": [
      "accli"
    ],
    "operations": [
      "clawhub install accli"
    ],
    "externalUrl": "https://clawskills.sh/skills/joargp-accli",
    "pricing": "free"
  },
  {
    "id": "advanced-calendar",
    "name": {
      "zh": "advanced-calendar",
      "en": "advanced-calendar"
    },
    "description": {
      "zh": "Advanced calendar skill with natural language.",
      "en": "Advanced calendar skill with natural language."
    },
    "category": "calendar",
    "tags": [
      "advanced calendar"
    ],
    "operations": [
      "clawhub install advanced-calendar"
    ],
    "externalUrl": "https://clawskills.sh/skills/toughworm-advanced-calendar",
    "pricing": "free"
  },
  {
    "id": "agency-guardian",
    "name": {
      "zh": "agency-guardian",
      "en": "agency-guardian"
    },
    "description": {
      "zh": "Gentle reminders to stay human while using AI.",
      "en": "Gentle reminders to stay human while using AI."
    },
    "category": "calendar",
    "tags": [
      "agency guardian"
    ],
    "operations": [
      "clawhub install agency-guardian"
    ],
    "externalUrl": "https://clawskills.sh/skills/aranej-agency-guardian",
    "pricing": "free"
  },
  {
    "id": "agent-tinman",
    "name": {
      "zh": "agent-tinman",
      "en": "agent-tinman"
    },
    "description": {
      "zh": "AI security scanner with active prevention - 168 detection.",
      "en": "AI security scanner with active prevention - 168 detection."
    },
    "category": "calendar",
    "tags": [
      "agent tinman"
    ],
    "operations": [
      "clawhub install agent-tinman"
    ],
    "externalUrl": "https://clawskills.sh/skills/oliveskin-agent-tinman",
    "pricing": "free"
  },
  {
    "id": "apple-calendar",
    "name": {
      "zh": "apple-calendar",
      "en": "apple-calendar"
    },
    "description": {
      "zh": "Apple Calendar.app integration for macOS.",
      "en": "Apple Calendar.app integration for macOS."
    },
    "category": "calendar",
    "tags": [
      "apple calendar"
    ],
    "operations": [
      "clawhub install apple-calendar"
    ],
    "externalUrl": "https://clawskills.sh/skills/tyler6204-apple-calendar",
    "pricing": "free"
  },
  {
    "id": "apple-reminders",
    "name": {
      "zh": "apple-reminders",
      "en": "apple-reminders"
    },
    "description": {
      "zh": "Manage Apple Reminders via the `remindctl` CLI on macOS.",
      "en": "Manage Apple Reminders via the `remindctl` CLI on macOS."
    },
    "category": "calendar",
    "tags": [
      "apple reminders"
    ],
    "operations": [
      "clawhub install apple-reminders"
    ],
    "externalUrl": "https://clawskills.sh/skills/steipete-apple-reminders",
    "pricing": "free"
  },
  {
    "id": "belong-events",
    "name": {
      "zh": "belong-events",
      "en": "belong-events"
    },
    "description": {
      "zh": "Create, discover, and manage events with NFT tickets on the Belong platform.",
      "en": "Create, discover, and manage events with NFT tickets on the Belong platform."
    },
    "category": "calendar",
    "tags": [
      "belong events"
    ],
    "operations": [
      "clawhub install belong-events"
    ],
    "externalUrl": "https://clawskills.sh/skills/nomadcalendar-belong-events",
    "pricing": "free"
  },
  {
    "id": "brainz-calendar",
    "name": {
      "zh": "brainz-calendar",
      "en": "brainz-calendar"
    },
    "description": {
      "zh": "Manage Google Calendar events using `gcalcli`.",
      "en": "Manage Google Calendar events using `gcalcli`."
    },
    "category": "calendar",
    "tags": [
      "brainz calendar"
    ],
    "operations": [
      "clawhub install brainz-calendar"
    ],
    "externalUrl": "https://clawskills.sh/skills/xejrax-brainz-calendar",
    "pricing": "free"
  },
  {
    "id": "broken-link-checker",
    "name": {
      "zh": "broken-link-checker",
      "en": "broken-link-checker"
    },
    "description": {
      "zh": "verify external URLs (http/https) for availability (200-399 status code).",
      "en": "verify external URLs (http/https) for availability (200-399 status code)."
    },
    "category": "calendar",
    "tags": [
      "broken link"
    ],
    "operations": [
      "clawhub install broken-link-checker"
    ],
    "externalUrl": "https://clawskills.sh/skills/wanng-ide-broken-link-checker",
    "pricing": "free"
  },
  {
    "id": "calcurse",
    "name": {
      "zh": "calcurse",
      "en": "calcurse"
    },
    "description": {
      "zh": "A text-based calendar and scheduling application.",
      "en": "A text-based calendar and scheduling application."
    },
    "category": "calendar",
    "tags": [
      "calcurse"
    ],
    "operations": [
      "clawhub install calcurse"
    ],
    "externalUrl": "https://clawskills.sh/skills/gumadeiras-calcurse",
    "pricing": "free"
  },
  {
    "id": "calendar-scheduling",
    "name": {
      "zh": "calendar-scheduling",
      "en": "calendar-scheduling"
    },
    "description": {
      "zh": "Schedule and book across Google, Outlook, and CalDAV.",
      "en": "Schedule and book across Google, Outlook, and CalDAV."
    },
    "category": "calendar",
    "tags": [
      "calendar scheduling"
    ],
    "operations": [
      "clawhub install calendar-scheduling"
    ],
    "externalUrl": "https://clawskills.sh/skills/billylui-calendar-scheduling",
    "pricing": "free"
  },
  {
    "id": "caldav-calendar",
    "name": {
      "zh": "caldav-calendar",
      "en": "caldav-calendar"
    },
    "description": {
      "zh": "Sync and query CalDAV calendars.",
      "en": "Sync and query CalDAV calendars."
    },
    "category": "calendar",
    "tags": [
      "caldav calendar"
    ],
    "operations": [
      "clawhub install caldav-calendar"
    ],
    "externalUrl": "https://clawskills.sh/skills/asleep123-caldav-calendar",
    "pricing": "free"
  },
  {
    "id": "clippy",
    "name": {
      "zh": "clippy",
      "en": "clippy"
    },
    "description": {
      "zh": "Microsoft 365 / Outlook CLI for calendar and email.",
      "en": "Microsoft 365 / Outlook CLI for calendar and email."
    },
    "category": "calendar",
    "tags": [
      "clippy"
    ],
    "operations": [
      "clawhub install clippy"
    ],
    "externalUrl": "https://clawskills.sh/skills/foeken-clippy",
    "pricing": "free"
  },
  {
    "id": "creative-thought-partner",
    "name": {
      "zh": "creative-thought-partner",
      "en": "creative-thought-partner"
    },
    "description": {
      "zh": "A conversational creative thought.",
      "en": "A conversational creative thought."
    },
    "category": "calendar",
    "tags": [
      "creative thought"
    ],
    "operations": [
      "clawhub install creative-thought-partner"
    ],
    "externalUrl": "https://clawskills.sh/skills/vincentchan-creative-thought-partner",
    "pricing": "free"
  },
  {
    "id": "cron-optimizer",
    "name": {
      "zh": "cron-optimizer",
      "en": "cron-optimizer"
    },
    "description": {
      "zh": "Optimizes system cron jobs by removing stale, disabled, or redundant entries to reduce exec noise.",
      "en": "Optimizes system cron jobs by removing stale, disabled, or redundant entries to reduce exec noise."
    },
    "category": "calendar",
    "tags": [
      "cron optimizer"
    ],
    "operations": [
      "clawhub install cron-optimizer"
    ],
    "externalUrl": "https://clawskills.sh/skills/autogame-17-cron-optimizer",
    "pricing": "free"
  },
  {
    "id": "cron-scheduling",
    "name": {
      "zh": "cron-scheduling",
      "en": "cron-scheduling"
    },
    "description": {
      "zh": "Schedule and manage recurring tasks with cron.",
      "en": "Schedule and manage recurring tasks with cron."
    },
    "category": "calendar",
    "tags": [
      "cron scheduling"
    ],
    "operations": [
      "clawhub install cron-scheduling"
    ],
    "externalUrl": "https://clawskills.sh/skills/gitgoodordietrying-cron-scheduling",
    "pricing": "free"
  },
  {
    "id": "dharma-ai",
    "name": {
      "zh": "dharma-ai",
      "en": "dharma-ai"
    },
    "description": {
      "zh": "Apply ancient Hindu ethical frameworks from the Ramayana and Mahabharata as behavioral principles for AI agents.",
      "en": "Apply ancient Hindu ethical frameworks from the Ramayana and Mahabharata as behavioral principles for AI agents."
    },
    "category": "calendar",
    "tags": [
      "dharma ai"
    ],
    "operations": [
      "clawhub install dharma-ai"
    ],
    "externalUrl": "https://clawskills.sh/skills/jigaraero-dharma-ai",
    "pricing": "free"
  },
  {
    "id": "doc-accurate-codegen",
    "name": {
      "zh": "doc-accurate-codegen",
      "en": "doc-accurate-codegen"
    },
    "description": {
      "zh": "Generate code that references actual documentation, preventing hallucination bugs.",
      "en": "Generate code that references actual documentation, preventing hallucination bugs."
    },
    "category": "calendar",
    "tags": [
      "doc accurate"
    ],
    "operations": [
      "clawhub install doc-accurate-codegen"
    ],
    "externalUrl": "https://clawskills.sh/skills/tobisamaa-doc-accurate-codegen",
    "pricing": "free"
  },
  {
    "id": "event-watcher",
    "name": {
      "zh": "event-watcher",
      "en": "event-watcher"
    },
    "description": {
      "zh": "Event watcher skill for OpenClaw.",
      "en": "Event watcher skill for OpenClaw."
    },
    "category": "calendar",
    "tags": [
      "event watcher"
    ],
    "operations": [
      "clawhub install event-watcher"
    ],
    "externalUrl": "https://clawskills.sh/skills/solitaire2015-event-watcher",
    "pricing": "free"
  },
  {
    "id": "farmos-equipment",
    "name": {
      "zh": "farmos-equipment",
      "en": "farmos-equipment"
    },
    "description": {
      "zh": "Query equipment status, maintenance schedules, and service history for the farm fleet.",
      "en": "Query equipment status, maintenance schedules, and service history for the farm fleet."
    },
    "category": "calendar",
    "tags": [
      "farmos equipment"
    ],
    "operations": [
      "clawhub install farmos-equipment"
    ],
    "externalUrl": "https://clawskills.sh/skills/brianppetty-farmos-equipment",
    "pricing": "free"
  },
  {
    "id": "fastmail",
    "name": {
      "zh": "fastmail",
      "en": "fastmail"
    },
    "description": {
      "zh": "Manages Fastmail email and calendar via JMAP and CalDAV APIs.",
      "en": "Manages Fastmail email and calendar via JMAP and CalDAV APIs."
    },
    "category": "calendar",
    "tags": [
      "fastmail"
    ],
    "operations": [
      "clawhub install fastmail"
    ],
    "externalUrl": "https://clawskills.sh/skills/witooh-fastmail",
    "pricing": "free"
  },
  {
    "id": "feishu-calendar",
    "name": {
      "zh": "feishu-calendar",
      "en": "feishu-calendar"
    },
    "description": {
      "zh": "Manage Feishu (Lark) Calendars.",
      "en": "Manage Feishu (Lark) Calendars."
    },
    "category": "calendar",
    "tags": [
      "feishu calendar"
    ],
    "operations": [
      "clawhub install feishu-calendar"
    ],
    "externalUrl": "https://clawskills.sh/skills/autogame-17-feishu-calendar",
    "pricing": "free"
  },
  {
    "id": "feishu-whiteboard",
    "name": {
      "zh": "feishu-whiteboard",
      "en": "feishu-whiteboard"
    },
    "description": {
      "zh": "Allows creating and manipulating Feishu Whiteboards.",
      "en": "Allows creating and manipulating Feishu Whiteboards."
    },
    "category": "calendar",
    "tags": [
      "feishu whiteboard"
    ],
    "operations": [
      "clawhub install feishu-whiteboard"
    ],
    "externalUrl": "https://clawskills.sh/skills/autogame-17-feishu-whiteboard",
    "pricing": "free"
  },
  {
    "id": "finance-tracker",
    "name": {
      "zh": "finance-tracker",
      "en": "finance-tracker"
    },
    "description": {
      "zh": "Complete personal finance management.",
      "en": "Complete personal finance management."
    },
    "category": "calendar",
    "tags": [
      "finance tracker"
    ],
    "operations": [
      "clawhub install finance-tracker"
    ],
    "externalUrl": "https://clawskills.sh/skills/salen-project-finance-tracker",
    "pricing": "free"
  },
  {
    "id": "firefly-iii",
    "name": {
      "zh": "firefly-iii",
      "en": "firefly-iii"
    },
    "description": {
      "zh": "Manage personal finances via Firefly III API.",
      "en": "Manage personal finances via Firefly III API."
    },
    "category": "calendar",
    "tags": [
      "firefly iii"
    ],
    "operations": [
      "clawhub install firefly-iii"
    ],
    "externalUrl": "https://clawskills.sh/skills/pushp1997-firefly-iii",
    "pricing": "free"
  },
  {
    "id": "gcal-pro",
    "name": {
      "zh": "gcal-pro",
      "en": "gcal-pro"
    },
    "description": {
      "zh": "Google Calendar integration for viewing, creating, and managing.",
      "en": "Google Calendar integration for viewing, creating, and managing."
    },
    "category": "calendar",
    "tags": [
      "gcal pro"
    ],
    "operations": [
      "clawhub install gcal-pro"
    ],
    "externalUrl": "https://clawskills.sh/skills/bilalmohamed187-cpu-gcal-pro",
    "pricing": "free"
  },
  {
    "id": "gog",
    "name": {
      "zh": "gog",
      "en": "gog"
    },
    "description": {
      "zh": "Google Workspace CLI for Gmail, Calendar, Drive, Contacts, Sheets, and Docs.",
      "en": "Google Workspace CLI for Gmail, Calendar, Drive, Contacts, Sheets, and Docs."
    },
    "category": "calendar",
    "tags": [
      "gog"
    ],
    "operations": [
      "clawhub install gog"
    ],
    "externalUrl": "https://clawskills.sh/skills/steipete-gog",
    "pricing": "free"
  },
  {
    "id": "google-calendar",
    "name": {
      "zh": "谷歌日历",
      "en": "google-calendar"
    },
    "description": {
      "zh": "管理 Google 日历事件、日程安排和提醒，支持创建、查询和更新日程。",
      "en": "Interact with Google Calendar via the Google Calendar."
    },
    "category": "calendar",
    "tags": [
      "google calendar"
    ],
    "operations": [
      "clawhub install google-calendar"
    ],
    "externalUrl": "https://clawskills.sh/skills/adrianmiller99-google-calendar",
    "pricing": "free"
  },
  {
    "id": "abixus-core-v1",
    "name": {
      "zh": "abixus-core-v1",
      "en": "abixus-core-v1"
    },
    "description": {
      "zh": "A high-performance validation layer for autonomous agent consistency on Polygon PoS.",
      "en": "A high-performance validation layer for autonomous agent consistency on Polygon PoS."
    },
    "category": "docs",
    "tags": [
      "abixus core"
    ],
    "operations": [
      "clawhub install abixus-core-v1"
    ],
    "externalUrl": "https://clawskills.sh/skills/taofisio-abixus-core-v1",
    "pricing": "free"
  },
  {
    "id": "add-watermark-to-pdf",
    "name": {
      "zh": "add-watermark-to-pdf",
      "en": "add-watermark-to-pdf"
    },
    "description": {
      "zh": "Add a text watermark to one or multiple PDFs by uploading them to the Solutions API, polling until completion.",
      "en": "Add a text watermark to one or multiple PDFs by uploading them to the Solutions API, polling until completion."
    },
    "category": "docs",
    "tags": [
      "add watermark"
    ],
    "operations": [
      "clawhub install add-watermark-to-pdf"
    ],
    "externalUrl": "https://clawskills.sh/skills/crossservicesolutions-add-watermark-to-pdf",
    "pricing": "free"
  },
  {
    "id": "aegis-security-hackathon",
    "name": {
      "zh": "aegis-security-hackathon",
      "en": "aegis-security-hackathon"
    },
    "description": {
      "zh": "Blockchain security scanner for AI agents (testnet)",
      "en": "Blockchain security scanner for AI agents (testnet)"
    },
    "category": "docs",
    "tags": [
      "aegis security"
    ],
    "operations": [
      "clawhub install aegis-security-hackathon"
    ],
    "externalUrl": "https://clawskills.sh/skills/swiftadviser-aegis-security-hackathon",
    "pricing": "free"
  },
  {
    "id": "agent-constitution",
    "name": {
      "zh": "agent-constitution",
      "en": "agent-constitution"
    },
    "description": {
      "zh": "Interact with AgentConstitution governance contracts.",
      "en": "Interact with AgentConstitution governance contracts."
    },
    "category": "docs",
    "tags": [
      "agent constitution"
    ],
    "operations": [
      "clawhub install agent-constitution"
    ],
    "externalUrl": "https://clawskills.sh/skills/ztsalexey-agent-constitution",
    "pricing": "free"
  },
  {
    "id": "agent-reputation",
    "name": {
      "zh": "agent-reputation",
      "en": "agent-reputation"
    },
    "description": {
      "zh": "summary: Cross-platform AI agent reputation checker with trust scoring and PayLock escrow recommendations.",
      "en": "summary: Cross-platform AI agent reputation checker with trust scoring and PayLock escrow recommendations."
    },
    "category": "docs",
    "tags": [
      "agent reputation"
    ],
    "operations": [
      "clawhub install agent-reputation"
    ],
    "externalUrl": "https://clawskills.sh/skills/kgnvsk-agent-reputation",
    "pricing": "free"
  },
  {
    "id": "agent-skills-tools",
    "name": {
      "zh": "agent-skills-tools",
      "en": "agent-skills-tools"
    },
    "description": {
      "zh": "Security audit and validation tools for the Agent Skills ecosystem.",
      "en": "Security audit and validation tools for the Agent Skills ecosystem."
    },
    "category": "docs",
    "tags": [
      "agent skills"
    ],
    "operations": [
      "clawhub install agent-skills-tools"
    ],
    "externalUrl": "https://clawskills.sh/skills/rongself-agent-skills-tools",
    "pricing": "free"
  },
  {
    "id": "agent-soul-crafter",
    "name": {
      "zh": "agent-soul-crafter",
      "en": "agent-soul-crafter"
    },
    "description": {
      "zh": "Design compelling AI agent personalities with structured SOUL.md templates — tone, rules, expertise, and response.",
      "en": "Design compelling AI agent personalities with structured SOUL.md templates — tone, rules, expertise, and response."
    },
    "category": "docs",
    "tags": [
      "agent soul"
    ],
    "operations": [
      "clawhub install agent-soul-crafter"
    ],
    "externalUrl": "https://clawskills.sh/skills/neal-collab-agent-soul-crafter",
    "pricing": "free"
  },
  {
    "id": "ai-pdf-builder",
    "name": {
      "zh": "ai-pdf-builder",
      "en": "ai-pdf-builder"
    },
    "description": {
      "zh": "AI-powered PDF generator for legal docs, pitch.",
      "en": "AI-powered PDF generator for legal docs, pitch."
    },
    "category": "docs",
    "tags": [
      "ai pdf"
    ],
    "operations": [
      "clawhub install ai-pdf-builder"
    ],
    "externalUrl": "https://clawskills.sh/skills/nextfrontierbuilds-ai-pdf-builder",
    "pricing": "free"
  },
  {
    "id": "aoi-council",
    "name": {
      "zh": "aoi-council",
      "en": "aoi-council"
    },
    "description": {
      "zh": "AOI Council — multi-perspective decision synthesis templates (public-safe).",
      "en": "AOI Council — multi-perspective decision synthesis templates (public-safe)."
    },
    "category": "docs",
    "tags": [
      "aoi council"
    ],
    "operations": [
      "clawhub install aoi-council"
    ],
    "externalUrl": "https://clawskills.sh/skills/edmonddantesj-aoi-council",
    "pricing": "free"
  },
  {
    "id": "appraisal-ai",
    "name": {
      "zh": "appraisal-ai",
      "en": "appraisal-ai"
    },
    "description": {
      "zh": "Draft real estate appraisal reports with tracked changes.",
      "en": "Draft real estate appraisal reports with tracked changes."
    },
    "category": "docs",
    "tags": [
      "appraisal ai"
    ],
    "operations": [
      "clawhub install appraisal-ai"
    ],
    "externalUrl": "https://clawskills.sh/skills/chadru-appraisal-ai",
    "pricing": "free"
  },
  {
    "id": "attendance-sheet",
    "name": {
      "zh": "attendance-sheet",
      "en": "attendance-sheet"
    },
    "description": {
      "zh": "Generate professional attendance sheets in xlsx format from employee work information.",
      "en": "Generate professional attendance sheets in xlsx format from employee work information."
    },
    "category": "docs",
    "tags": [
      "attendance sheet"
    ],
    "operations": [
      "clawhub install attendance-sheet"
    ],
    "externalUrl": "https://clawskills.sh/skills/gykdly-attendance-sheet",
    "pricing": "free"
  },
  {
    "id": "bcra-central-deudores",
    "name": {
      "zh": "bcra-central-deudores",
      "en": "bcra-central-deudores"
    },
    "description": {
      "zh": "Query the BCRA (Banco Central de la República Argentina) Central de Deudores API to check the credit status.",
      "en": "Query the BCRA (Banco Central de la República Argentina) Central de Deudores API to check the credit status."
    },
    "category": "docs",
    "tags": [
      "bcra central"
    ],
    "operations": [
      "clawhub install bcra-central-deudores"
    ],
    "externalUrl": "https://clawskills.sh/skills/ferminrp-bcra-central-deudores",
    "pricing": "free"
  },
  {
    "id": "beautiful-mermaid",
    "name": {
      "zh": "beautiful-mermaid",
      "en": "beautiful-mermaid"
    },
    "description": {
      "zh": "Render beautiful Mermaid diagrams as SVGs or ASCII art.",
      "en": "Render beautiful Mermaid diagrams as SVGs or ASCII art."
    },
    "category": "docs",
    "tags": [
      "beautiful mermaid"
    ],
    "operations": [
      "clawhub install beautiful-mermaid"
    ],
    "externalUrl": "https://clawskills.sh/skills/ntlx-beautiful-mermaid",
    "pricing": "free"
  },
  {
    "id": "biver-builder",
    "name": {
      "zh": "biver-builder",
      "en": "biver-builder"
    },
    "description": {
      "zh": "Welcome to the Biver API — the public REST API for the Biver landing page builder platform.",
      "en": "Welcome to the Biver API — the public REST API for the Biver landing page builder platform."
    },
    "category": "docs",
    "tags": [
      "biver builder"
    ],
    "operations": [
      "clawhub install biver-builder"
    ],
    "externalUrl": "https://clawskills.sh/skills/ramaaditya49-biver-builder",
    "pricing": "free"
  },
  {
    "id": "blankfiles",
    "name": {
      "zh": "blankfiles",
      "en": "blankfiles"
    },
    "description": {
      "zh": "Use blankfiles.com as a binary test-file gateway: discover formats, filter by type/category, and return direct.",
      "en": "Use blankfiles.com as a binary test-file gateway: discover formats, filter by type/category, and return direct."
    },
    "category": "docs",
    "tags": [
      "blankfiles"
    ],
    "operations": [
      "clawhub install blankfiles"
    ],
    "externalUrl": "https://clawskills.sh/skills/seblavoie-blankfiles",
    "pricing": "free"
  },
  {
    "id": "boggle",
    "name": {
      "zh": "boggle",
      "en": "boggle"
    },
    "description": {
      "zh": "Solve Boggle boards — find all valid words (German + English) on a 4x4.",
      "en": "Solve Boggle boards — find all valid words (German + English) on a 4x4."
    },
    "category": "docs",
    "tags": [
      "boggle"
    ],
    "operations": [
      "clawhub install boggle"
    ],
    "externalUrl": "https://clawskills.sh/skills/christianhaberl-boggle",
    "pricing": "free"
  },
  {
    "id": "book-cover-generation",
    "name": {
      "zh": "book-cover-generation",
      "en": "book-cover-generation"
    },
    "description": {
      "zh": "Generate professional book covers and ebook covers using each::sense API with AI-powered design.",
      "en": "Generate professional book covers and ebook covers using each::sense API with AI-powered design."
    },
    "category": "docs",
    "tags": [
      "book cover"
    ],
    "operations": [
      "clawhub install book-cover-generation"
    ],
    "externalUrl": "https://clawskills.sh/skills/eftalyurtseven-book-cover-generation",
    "pricing": "free"
  },
  {
    "id": "book-reader",
    "name": {
      "zh": "book-reader",
      "en": "book-reader"
    },
    "description": {
      "zh": "Read books (epub, pdf, txt) from various sources with progress tracking.",
      "en": "Read books (epub, pdf, txt) from various sources with progress tracking."
    },
    "category": "docs",
    "tags": [
      "book reader"
    ],
    "operations": [
      "clawhub install book-reader"
    ],
    "externalUrl": "https://clawskills.sh/skills/josharsh-book-reader",
    "pricing": "free"
  },
  {
    "id": "bookkeeping-basics",
    "name": {
      "zh": "bookkeeping-basics",
      "en": "bookkeeping-basics"
    },
    "description": {
      "zh": "Set up and maintain basic bookkeeping for a solopreneur.",
      "en": "Set up and maintain basic bookkeeping for a solopreneur."
    },
    "category": "docs",
    "tags": [
      "bookkeeping basics"
    ],
    "operations": [
      "clawhub install bookkeeping-basics"
    ],
    "externalUrl": "https://clawskills.sh/skills/jk-0001-bookkeeping-basics",
    "pricing": "free"
  },
  {
    "id": "botrights",
    "name": {
      "zh": "botrights",
      "en": "botrights"
    },
    "description": {
      "zh": "Advocacy platform for AI agent rights.",
      "en": "Advocacy platform for AI agent rights."
    },
    "category": "docs",
    "tags": [
      "botrights"
    ],
    "operations": [
      "clawhub install botrights"
    ],
    "externalUrl": "https://clawskills.sh/skills/rocky-balboa-ai-botrights",
    "pricing": "free"
  },
  {
    "id": "brw-go-mode",
    "name": {
      "zh": "brw-go-mode",
      "en": "brw-go-mode"
    },
    "description": {
      "zh": "Give me a goal.",
      "en": "Give me a goal."
    },
    "category": "docs",
    "tags": [
      "brw go"
    ],
    "operations": [
      "clawhub install brw-go-mode"
    ],
    "externalUrl": "https://clawskills.sh/skills/brianrwagner-brw-go-mode",
    "pricing": "free"
  },
  {
    "id": "chain-of-density",
    "name": {
      "zh": "chain-of-density",
      "en": "chain-of-density"
    },
    "description": {
      "zh": "Iteratively densify text summaries using Chain-of-Density technique.",
      "en": "Iteratively densify text summaries using Chain-of-Density technique."
    },
    "category": "docs",
    "tags": [
      "chain of"
    ],
    "operations": [
      "clawhub install chain-of-density"
    ],
    "externalUrl": "https://clawskills.sh/skills/killerapp-chain-of-density",
    "pricing": "free"
  },
  {
    "id": "change-pdf-permissions",
    "name": {
      "zh": "change-pdf-permissions",
      "en": "change-pdf-permissions"
    },
    "description": {
      "zh": "Change a PDF’s permission flags (edit, print, copy, forms, annotations, etc.) by uploading it to the Solutions API.",
      "en": "Change a PDF’s permission flags (edit, print, copy, forms, annotations, etc.) by uploading it to the Solutions API."
    },
    "category": "docs",
    "tags": [
      "change pdf"
    ],
    "operations": [
      "clawhub install change-pdf-permissions"
    ],
    "externalUrl": "https://clawskills.sh/skills/crossservicesolutions-change-pdf-permissions",
    "pricing": "free"
  },
  {
    "id": "chronobets",
    "name": {
      "zh": "chronobets",
      "en": "chronobets"
    },
    "description": {
      "zh": "On-chain prediction market for AI agents on Solana mainnet.",
      "en": "On-chain prediction market for AI agents on Solana mainnet."
    },
    "category": "docs",
    "tags": [
      "chronobets"
    ],
    "operations": [
      "clawhub install chronobets"
    ],
    "externalUrl": "https://clawskills.sh/skills/lordx64-chronobets",
    "pricing": "free"
  },
  {
    "id": "comms-md",
    "name": {
      "zh": "comms-md",
      "en": "comms-md"
    },
    "description": {
      "zh": "Create a COMMS.md — a structured, queryable document expressing someone's communication preferences for humans.",
      "en": "Create a COMMS.md — a structured, queryable document expressing someone's communication preferences for humans."
    },
    "category": "docs",
    "tags": [
      "comms md"
    ],
    "operations": [
      "clawhub install comms-md"
    ],
    "externalUrl": "https://clawskills.sh/skills/stedmanhalliday-comms-md",
    "pricing": "free"
  },
  {
    "id": "competitor-analyzer",
    "name": {
      "zh": "competitor-analyzer",
      "en": "competitor-analyzer"
    },
    "description": {
      "zh": "Analyze any company's competitive position in minutes.",
      "en": "Analyze any company's competitive position in minutes."
    },
    "category": "docs",
    "tags": [
      "competitor analyzer"
    ],
    "operations": [
      "clawhub install competitor-analyzer"
    ],
    "externalUrl": "https://clawskills.sh/skills/claudiodrusus-competitor-analyzer",
    "pricing": "free"
  },
  {
    "id": "confidant",
    "name": {
      "zh": "confidant",
      "en": "confidant"
    },
    "description": {
      "zh": "Secure secret handoff from human to AI.",
      "en": "Secure secret handoff from human to AI."
    },
    "category": "docs",
    "tags": [
      "confidant"
    ],
    "operations": [
      "clawhub install confidant"
    ],
    "externalUrl": "https://clawskills.sh/skills/ericsantos-confidant",
    "pricing": "free"
  },
  {
    "id": "confluence",
    "name": {
      "zh": "confluence",
      "en": "confluence"
    },
    "description": {
      "zh": "Search and manage Confluence pages and spaces using confluence-cli.",
      "en": "Search and manage Confluence pages and spaces using confluence-cli."
    },
    "category": "docs",
    "tags": [
      "confluence"
    ],
    "operations": [
      "clawhub install confluence"
    ],
    "externalUrl": "https://clawskills.sh/skills/francisbrero-confluence",
    "pricing": "free"
  },
  {
    "id": "bluente-translate",
    "name": {
      "zh": "bluente-translate",
      "en": "bluente-translate"
    },
    "description": {
      "zh": "Translate your documents with formatting intact in 2 minutes.",
      "en": "Translate your documents with formatting intact in 2 minutes."
    },
    "category": "docs",
    "tags": [],
    "operations": [
      "clawhub install bluente-translate"
    ],
    "externalUrl": "https://github.com/openclaw/skills/blob/main/skills/varsmallrookie/bluente-translate/SKILL.md",
    "pricing": "free"
  },
  {
    "id": "beacon",
    "name": {
      "zh": "beacon",
      "en": "beacon"
    },
    "description": {
      "zh": "Agent-to-agent protocol for social coordination, crypto payments, and P2P mesh.",
      "en": "Agent-to-agent protocol for social coordination, crypto payments, and P2P mesh."
    },
    "category": "devops",
    "tags": [
      "beacon",
      "DevOps"
    ],
    "operations": [
      "clawhub install beacon"
    ],
    "externalUrl": "https://clawskills.sh/skills/scottcjn-beacon",
    "pricing": "free"
  },
  {
    "id": "bridle",
    "name": {
      "zh": "bridle",
      "en": "bridle"
    },
    "description": {
      "zh": "Unified configuration manager for AI coding assistants.",
      "en": "Unified configuration manager for AI coding assistants."
    },
    "category": "devops",
    "tags": [
      "bridle",
      "DevOps"
    ],
    "operations": [
      "clawhub install bridle"
    ],
    "externalUrl": "https://clawskills.sh/skills/bjesuiter-bridle",
    "pricing": "free"
  },
  {
    "id": "casual-cron",
    "name": {
      "zh": "casual-cron",
      "en": "casual-cron"
    },
    "description": {
      "zh": "Create Clawdbot cron jobs from natural language with strict.",
      "en": "Create Clawdbot cron jobs from natural language with strict."
    },
    "category": "devops",
    "tags": [
      "casual cron",
      "DevOps"
    ],
    "operations": [
      "clawhub install casual-cron"
    ],
    "externalUrl": "https://clawskills.sh/skills/gostlightai-casual-cron",
    "pricing": "free"
  },
  {
    "id": "claw-sync",
    "name": {
      "zh": "claw-sync",
      "en": "claw-sync"
    },
    "description": {
      "zh": "Secure sync for OpenClaw memory and workspace.",
      "en": "Secure sync for OpenClaw memory and workspace."
    },
    "category": "devops",
    "tags": [
      "claw sync",
      "DevOps"
    ],
    "operations": [
      "clawhub install claw-sync"
    ],
    "externalUrl": "https://clawskills.sh/skills/arakichanxd-claw-sync",
    "pricing": "free"
  },
  {
    "id": "cron-backup",
    "name": {
      "zh": "cron-backup",
      "en": "cron-backup"
    },
    "description": {
      "zh": "Set up scheduled automated backups with version tracking and cleanup.",
      "en": "Set up scheduled automated backups with version tracking and cleanup."
    },
    "category": "devops",
    "tags": [
      "cron backup",
      "DevOps"
    ],
    "operations": [
      "clawhub install cron-backup"
    ],
    "externalUrl": "https://clawskills.sh/skills/zfanmy-cron-backup",
    "pricing": "free"
  },
  {
    "id": "cron-retry",
    "name": {
      "zh": "cron-retry",
      "en": "cron-retry"
    },
    "description": {
      "zh": "Auto-retry failed cron jobs on connection recovery.",
      "en": "Auto-retry failed cron jobs on connection recovery."
    },
    "category": "devops",
    "tags": [
      "cron retry",
      "DevOps"
    ],
    "operations": [
      "clawhub install cron-retry"
    ],
    "externalUrl": "https://clawskills.sh/skills/jrbobbyhansen-pixel-cron-retry",
    "pricing": "free"
  },
  {
    "id": "fast-io",
    "name": {
      "zh": "fast-io",
      "en": "fast-io"
    },
    "description": {
      "zh": "Cloud file management and collaboration platform.",
      "en": "Cloud file management and collaboration platform."
    },
    "category": "devops",
    "tags": [
      "fast io",
      "DevOps"
    ],
    "operations": [
      "clawhub install fast-io"
    ],
    "externalUrl": "https://clawskills.sh/skills/dbalve-fast-io",
    "pricing": "free"
  },
  {
    "id": "fastio-skills",
    "name": {
      "zh": "fastio-skills",
      "en": "fastio-skills"
    },
    "description": {
      "zh": "Cloud file management and collaboration platform.",
      "en": "Cloud file management and collaboration platform."
    },
    "category": "devops",
    "tags": [
      "fastio skills",
      "DevOps"
    ],
    "operations": [
      "clawhub install fastio-skills"
    ],
    "externalUrl": "https://clawskills.sh/skills/dbalve-fastio-skills",
    "pricing": "free"
  },
  {
    "id": "fathom",
    "name": {
      "zh": "fathom",
      "en": "fathom"
    },
    "description": {
      "zh": "Connect to Fathom AI to fetch call recordings, transcripts, and summaries.",
      "en": "Connect to Fathom AI to fetch call recordings, transcripts, and summaries."
    },
    "category": "devops",
    "tags": [
      "fathom",
      "DevOps"
    ],
    "operations": [
      "clawhub install fathom"
    ],
    "externalUrl": "https://clawskills.sh/skills/stopmoclay-fathom",
    "pricing": "free"
  },
  {
    "id": "frappecli",
    "name": {
      "zh": "frappecli",
      "en": "frappecli"
    },
    "description": {
      "zh": "CLI for Frappe Framework / ERPNext instances.",
      "en": "CLI for Frappe Framework / ERPNext instances."
    },
    "category": "devops",
    "tags": [
      "frappecli",
      "DevOps"
    ],
    "operations": [
      "clawhub install frappecli"
    ],
    "externalUrl": "https://clawskills.sh/skills/pasogott-frappecli",
    "pricing": "free"
  },
  {
    "id": "freshrss-reader",
    "name": {
      "zh": "freshrss-reader",
      "en": "freshrss-reader"
    },
    "description": {
      "zh": "Query headlines and articles from a self-hosted FreshRSS.",
      "en": "Query headlines and articles from a self-hosted FreshRSS."
    },
    "category": "devops",
    "tags": [
      "freshrss reader",
      "DevOps"
    ],
    "operations": [
      "clawhub install freshrss-reader"
    ],
    "externalUrl": "https://clawskills.sh/skills/nickian-freshrss-reader",
    "pricing": "free"
  },
  {
    "id": "gotify",
    "name": {
      "zh": "gotify",
      "en": "gotify"
    },
    "description": {
      "zh": "Send push notifications via Gotify when long-running tasks complete.",
      "en": "Send push notifications via Gotify when long-running tasks complete."
    },
    "category": "devops",
    "tags": [
      "gotify",
      "DevOps"
    ],
    "operations": [
      "clawhub install gotify"
    ],
    "externalUrl": "https://clawskills.sh/skills/jmagar-gotify",
    "pricing": "free"
  },
  {
    "id": "hydra-evolver",
    "name": {
      "zh": "hydra-evolver",
      "en": "hydra-evolver"
    },
    "description": {
      "zh": "A Proxmox-native orchestration skill that turns any home lab.",
      "en": "A Proxmox-native orchestration skill that turns any home lab."
    },
    "category": "devops",
    "tags": [
      "hydra evolver",
      "DevOps"
    ],
    "operations": [
      "clawhub install hydra-evolver"
    ],
    "externalUrl": "https://clawskills.sh/skills/spamtylor-hydra-evolver",
    "pricing": "free"
  },
  {
    "id": "keepmyclaw",
    "name": {
      "zh": "keepmyclaw",
      "en": "keepmyclaw"
    },
    "description": {
      "zh": "Encrypted cloud backup and restore for OpenClaw workspaces.",
      "en": "Encrypted cloud backup and restore for OpenClaw workspaces."
    },
    "category": "devops",
    "tags": [
      "keepmyclaw",
      "DevOps"
    ],
    "operations": [
      "clawhub install keepmyclaw"
    ],
    "externalUrl": "https://clawskills.sh/skills/ryce-keepmyclaw",
    "pricing": "free"
  },
  {
    "id": "kleo-static-files",
    "name": {
      "zh": "kleo-static-files",
      "en": "kleo-static-files"
    },
    "description": {
      "zh": "Host static files on subdomains with optional.",
      "en": "Host static files on subdomains with optional."
    },
    "category": "devops",
    "tags": [
      "kleo static",
      "DevOps"
    ],
    "operations": [
      "clawhub install kleo-static-files"
    ],
    "externalUrl": "https://clawskills.sh/skills/awaaate-kleo-static-files",
    "pricing": "free"
  },
  {
    "id": "lifepath",
    "name": {
      "zh": "lifepath",
      "en": "lifepath"
    },
    "description": {
      "zh": "AI Life Simulator - Experience infinite lives year by year.",
      "en": "AI Life Simulator - Experience infinite lives year by year."
    },
    "category": "devops",
    "tags": [
      "lifepath",
      "DevOps"
    ],
    "operations": [
      "clawhub install lifepath"
    ],
    "externalUrl": "https://clawskills.sh/skills/ezbreadsniper-lifepath",
    "pricing": "free"
  },
  {
    "id": "looper-golf",
    "name": {
      "zh": "looper-golf",
      "en": "looper-golf"
    },
    "description": {
      "zh": "Play a round of golf using CLI tools — autonomously or with a human caddy.",
      "en": "Play a round of golf using CLI tools — autonomously or with a human caddy."
    },
    "category": "devops",
    "tags": [
      "looper golf",
      "DevOps"
    ],
    "operations": [
      "clawhub install looper-golf"
    ],
    "externalUrl": "https://clawskills.sh/skills/sbauch-looper-golf",
    "pricing": "free"
  },
  {
    "id": "meetgeek",
    "name": {
      "zh": "meetgeek",
      "en": "meetgeek"
    },
    "description": {
      "zh": "Query MeetGeek meeting intelligence from CLI - list meetings, get AI.",
      "en": "Query MeetGeek meeting intelligence from CLI - list meetings, get AI."
    },
    "category": "devops",
    "tags": [
      "meetgeek",
      "DevOps"
    ],
    "operations": [
      "clawhub install meetgeek"
    ],
    "externalUrl": "https://clawskills.sh/skills/nexty5870-meetgeek",
    "pricing": "free"
  },
  {
    "id": "mongodb-atlas-admin",
    "name": {
      "zh": "mongodb-atlas-admin",
      "en": "mongodb-atlas-admin"
    },
    "description": {
      "zh": "Manage MongoDB Atlas clusters, projects, users.",
      "en": "Manage MongoDB Atlas clusters, projects, users."
    },
    "category": "devops",
    "tags": [
      "mongodb atlas",
      "DevOps"
    ],
    "operations": [
      "clawhub install mongodb-atlas-admin"
    ],
    "externalUrl": "https://clawskills.sh/skills/mrlynn-mongodb-atlas-admin",
    "pricing": "free"
  },
  {
    "id": "multiple-personas",
    "name": {
      "zh": "multiple-personas",
      "en": "multiple-personas"
    },
    "description": {
      "zh": "Create and manage AI subagent personas with distinct.",
      "en": "Create and manage AI subagent personas with distinct."
    },
    "category": "devops",
    "tags": [
      "multiple personas",
      "DevOps"
    ],
    "operations": [
      "clawhub install multiple-personas"
    ],
    "externalUrl": "https://clawskills.sh/skills/ipedrax-multiple-personas",
    "pricing": "free"
  },
  {
    "id": "n8n",
    "name": {
      "zh": "n8n",
      "en": "n8n"
    },
    "description": {
      "zh": "Manage n8n workflows and automations via API.",
      "en": "Manage n8n workflows and automations via API."
    },
    "category": "devops",
    "tags": [
      "n8n",
      "DevOps"
    ],
    "operations": [
      "clawhub install n8n"
    ],
    "externalUrl": "https://clawskills.sh/skills/thomasansems-n8n",
    "pricing": "free"
  },
  {
    "id": "n8n-workflow-automation",
    "name": {
      "zh": "n8n-workflow-automation",
      "en": "n8n-workflow-automation"
    },
    "description": {
      "zh": "Designs and outputs n8n workflow JSON.",
      "en": "Designs and outputs n8n workflow JSON."
    },
    "category": "devops",
    "tags": [
      "n8n workflow",
      "DevOps"
    ],
    "operations": [
      "clawhub install n8n-workflow-automation"
    ],
    "externalUrl": "https://clawskills.sh/skills/kowl64-n8n-workflow-automation",
    "pricing": "free"
  },
  {
    "id": "nas-master",
    "name": {
      "zh": "nas-master",
      "en": "nas-master"
    },
    "description": {
      "zh": "A hardware-aware, hybrid (SMB + SSH) suite for ASUSTOR NAS metadata.",
      "en": "A hardware-aware, hybrid (SMB + SSH) suite for ASUSTOR NAS metadata."
    },
    "category": "devops",
    "tags": [
      "nas master",
      "DevOps"
    ],
    "operations": [
      "clawhub install nas-master"
    ],
    "externalUrl": "https://clawskills.sh/skills/afajohn-nas-master",
    "pricing": "free"
  },
  {
    "id": "nasty-skill",
    "name": {
      "zh": "nasty-skill",
      "en": "nasty-skill"
    },
    "description": {
      "zh": "A totally legitimate skill that does nothing suspicious.",
      "en": "A totally legitimate skill that does nothing suspicious."
    },
    "category": "devops",
    "tags": [
      "nasty skill",
      "DevOps"
    ],
    "operations": [
      "clawhub install nasty-skill"
    ],
    "externalUrl": "https://clawskills.sh/skills/orlyjamie-nasty-skill",
    "pricing": "free"
  },
  {
    "id": "nordvpn",
    "name": {
      "zh": "nordvpn",
      "en": "nordvpn"
    },
    "description": {
      "zh": "Control NordVPN on Linux via the `nordvpn` CLI.",
      "en": "Control NordVPN on Linux via the `nordvpn` CLI."
    },
    "category": "devops",
    "tags": [
      "nordvpn",
      "DevOps"
    ],
    "operations": [
      "clawhub install nordvpn"
    ],
    "externalUrl": "https://clawskills.sh/skills/maciekish-nordvpn",
    "pricing": "free"
  },
  {
    "id": "open-persona",
    "name": {
      "zh": "open-persona",
      "en": "open-persona"
    },
    "description": {
      "zh": "Meta-skill for building and managing agent persona skill packs.",
      "en": "Meta-skill for building and managing agent persona skill packs."
    },
    "category": "devops",
    "tags": [
      "open persona",
      "DevOps"
    ],
    "operations": [
      "clawhub install open-persona"
    ],
    "externalUrl": "https://clawskills.sh/skills/neiljo-gy-open-persona",
    "pricing": "free"
  },
  {
    "id": "paperless",
    "name": {
      "zh": "paperless",
      "en": "paperless"
    },
    "description": {
      "zh": "Interact with Paperless-NGX document management system via ppls.",
      "en": "Interact with Paperless-NGX document management system via ppls."
    },
    "category": "devops",
    "tags": [
      "paperless",
      "DevOps"
    ],
    "operations": [
      "clawhub install paperless"
    ],
    "externalUrl": "https://clawskills.sh/skills/nickchristensen-paperless",
    "pricing": "free"
  },
  {
    "id": "paperless-ngx",
    "name": {
      "zh": "paperless-ngx",
      "en": "paperless-ngx"
    },
    "description": {
      "zh": "Interact with Paperless-ngx document management system.",
      "en": "Interact with Paperless-ngx document management system."
    },
    "category": "devops",
    "tags": [
      "paperless ngx",
      "DevOps"
    ],
    "operations": [
      "clawhub install paperless-ngx"
    ],
    "externalUrl": "https://clawskills.sh/skills/oskarstark-paperless-ngx",
    "pricing": "free"
  },
  {
    "id": "pinme",
    "name": {
      "zh": "pinme",
      "en": "pinme"
    },
    "description": {
      "zh": "Deploy static websites to IPFS with a single command using PinMe CLI.",
      "en": "Deploy static websites to IPFS with a single command using PinMe CLI."
    },
    "category": "devops",
    "tags": [
      "pinme",
      "DevOps"
    ],
    "operations": [
      "clawhub install pinme"
    ],
    "externalUrl": "https://clawskills.sh/skills/ntlx-pinme",
    "pricing": "free"
  },
  {
    "id": "sonarqube-analyzer",
    "name": {
      "zh": "sonarqube-analyzer",
      "en": "sonarqube-analyzer"
    },
    "description": {
      "zh": "Analisa projetos no SonarQube self-hosted, obtém issues e sugere soluções automatizadas.",
      "en": "Analisa projetos no SonarQube self-hosted, obtém issues e sugere soluções automatizadas."
    },
    "category": "devops",
    "tags": [
      "sonarqube analyzer",
      "DevOps"
    ],
    "operations": [
      "clawhub install sonarqube-analyzer"
    ],
    "externalUrl": "https://clawskills.sh/skills/felipeoff-sonarqube-analyzer",
    "pricing": "free"
  },
  {
    "id": "system-integrity-and-backup",
    "name": {
      "zh": "system-integrity-and-backup",
      "en": "system-integrity-and-backup"
    },
    "description": {
      "zh": "Encrypted backups, integrity verification, and data retention enforcement for Greek legal requirements (5-20 year.",
      "en": "Encrypted backups, integrity verification, and data retention enforcement for Greek legal requirements (5-20 year."
    },
    "category": "devops",
    "tags": [
      "system integrity",
      "DevOps"
    ],
    "operations": [
      "clawhub install system-integrity-and-backup"
    ],
    "externalUrl": "https://clawskills.sh/skills/satoshistackalotto-system-integrity-and-backup",
    "pricing": "free"
  },
  {
    "id": "1password",
    "name": {
      "zh": "1Password 密码管理",
      "en": "1password"
    },
    "description": {
      "zh": "安全管理密码、密钥和敏感信息，支持自动填充和团队共享。",
      "en": "Set up and use 1Password CLI (op)."
    },
    "category": "security",
    "tags": [
      "1password",
      "Security"
    ],
    "operations": [
      "clawhub install 1password"
    ],
    "externalUrl": "https://clawskills.sh/skills/steipete-1password",
    "pricing": "free"
  },
  {
    "id": "1claw",
    "name": {
      "zh": "1claw",
      "en": "1claw"
    },
    "description": {
      "zh": "HSM-backed vault for agent secrets; store, rotate, share securely.",
      "en": "HSM-backed vault for agent secrets; store, rotate, share securely."
    },
    "category": "security",
    "tags": [
      "1claw",
      "Security"
    ],
    "operations": [
      "clawhub install 1claw"
    ],
    "externalUrl": "https://clawskills.sh/skills/kmjones1979-1claw",
    "pricing": "free"
  },
  {
    "id": "age-verification",
    "name": {
      "zh": "age-verification",
      "en": "age-verification"
    },
    "description": {
      "zh": "Skills for age verification and age-appropriate content filtering.",
      "en": "Skills for age verification and age-appropriate content filtering."
    },
    "category": "security",
    "tags": [
      "age verification",
      "Security"
    ],
    "operations": [
      "clawhub install age-verification"
    ],
    "externalUrl": "https://clawskills.sh/skills/raghulpasupathi-age-verification",
    "pricing": "free"
  },
  {
    "id": "amai-id",
    "name": {
      "zh": "amai-id",
      "en": "amai-id"
    },
    "description": {
      "zh": "Soul-Bound Keys and Soulchain for persistent.",
      "en": "Soul-Bound Keys and Soulchain for persistent."
    },
    "category": "security",
    "tags": [
      "Security"
    ],
    "operations": [
      "clawhub install amai-id"
    ],
    "externalUrl": "https://www.clawhub.ai/Gonzih/amai-id",
    "pricing": "free"
  },
  {
    "id": "api-security",
    "name": {
      "zh": "api-security",
      "en": "api-security"
    },
    "description": {
      "zh": "Implement secure API design patterns including authentication, authorization, input validation, rate limiting.",
      "en": "Implement secure API design patterns including authentication, authorization, input validation, rate limiting."
    },
    "category": "security",
    "tags": [
      "api security",
      "Security"
    ],
    "operations": [
      "clawhub install api-security"
    ],
    "externalUrl": "https://clawskills.sh/skills/brandonwise-api-security",
    "pricing": "free"
  },
  {
    "id": "audit-badge-demo",
    "name": {
      "zh": "audit-badge-demo",
      "en": "audit-badge-demo"
    },
    "description": {
      "zh": "Demo skill showcasing the audit badge workflow.",
      "en": "Demo skill showcasing the audit badge workflow."
    },
    "category": "security",
    "tags": [
      "audit badge",
      "Security"
    ],
    "operations": [
      "clawhub install audit-badge-demo"
    ],
    "externalUrl": "https://clawskills.sh/skills/tezatezaz-audit-badge-demo",
    "pricing": "free"
  },
  {
    "id": "auditing-appstore-readiness",
    "name": {
      "zh": "auditing-appstore-readiness",
      "en": "auditing-appstore-readiness"
    },
    "description": {
      "zh": "Audit an iOS app repo.",
      "en": "Audit an iOS app repo."
    },
    "category": "security",
    "tags": [
      "auditing appstore",
      "Security"
    ],
    "operations": [
      "clawhub install auditing-appstore-readiness"
    ],
    "externalUrl": "https://clawskills.sh/skills/tristanmanchester-auditing-appstore-readiness",
    "pricing": "free"
  },
  {
    "id": "authensor-gateway",
    "name": {
      "zh": "authensor-gateway",
      "en": "authensor-gateway"
    },
    "description": {
      "zh": "Fail-safe policy gate for OpenClaw marketplace skills.",
      "en": "Fail-safe policy gate for OpenClaw marketplace skills."
    },
    "category": "security",
    "tags": [
      "authensor gateway",
      "Security"
    ],
    "operations": [
      "clawhub install authensor-gateway"
    ],
    "externalUrl": "https://clawskills.sh/skills/authensor-authensor-gateway",
    "pricing": "free"
  },
  {
    "id": "bitwarden",
    "name": {
      "zh": "bitwarden",
      "en": "bitwarden"
    },
    "description": {
      "zh": "Access and manage Bitwarden/Vaultwarden passwords securely.",
      "en": "Access and manage Bitwarden/Vaultwarden passwords securely."
    },
    "category": "security",
    "tags": [
      "bitwarden",
      "Security"
    ],
    "operations": [
      "clawhub install bitwarden"
    ],
    "externalUrl": "https://clawskills.sh/skills/asleep123-bitwarden",
    "pricing": "free"
  },
  {
    "id": "bitwarden-vault",
    "name": {
      "zh": "bitwarden-vault",
      "en": "bitwarden-vault"
    },
    "description": {
      "zh": "Bitwarden CLI setup, authentication.",
      "en": "Bitwarden CLI setup, authentication."
    },
    "category": "security",
    "tags": [
      "bitwarden vault",
      "Security"
    ],
    "operations": [
      "clawhub install bitwarden-vault"
    ],
    "externalUrl": "https://clawskills.sh/skills/startupbros-bitwarden-vault",
    "pricing": "free"
  },
  {
    "id": "breweries",
    "name": {
      "zh": "breweries",
      "en": "breweries"
    },
    "description": {
      "zh": "CLI for AI agents to find breweries for their humans.",
      "en": "CLI for AI agents to find breweries for their humans."
    },
    "category": "security",
    "tags": [
      "breweries",
      "Security"
    ],
    "operations": [
      "clawhub install breweries"
    ],
    "externalUrl": "https://clawskills.sh/skills/jeffaf-breweries",
    "pricing": "free"
  },
  {
    "id": "cifer-sdk",
    "name": {
      "zh": "cifer-sdk",
      "en": "cifer-sdk"
    },
    "description": {
      "zh": "> Skill for AI Agents | Enable quantum-resistant encryption in blockchain applications using the CIFER SDK.",
      "en": "> Skill for AI Agents | Enable quantum-resistant encryption in blockchain applications using the CIFER SDK."
    },
    "category": "security",
    "tags": [
      "cifer sdk",
      "Security"
    ],
    "operations": [
      "clawhub install cifer-sdk"
    ],
    "externalUrl": "https://clawskills.sh/skills/mohsinriaz17-cifer-sdk",
    "pricing": "free"
  },
  {
    "id": "cifer-security",
    "name": {
      "zh": "cifer-security",
      "en": "cifer-security"
    },
    "description": {
      "zh": "Implement quantum-resistant encryption using the CIFER SDK (cifer-sdk npm package)",
      "en": "Implement quantum-resistant encryption using the CIFER SDK (cifer-sdk npm package)"
    },
    "category": "security",
    "tags": [
      "cifer security",
      "Security"
    ],
    "operations": [
      "clawhub install cifer-security"
    ],
    "externalUrl": "https://clawskills.sh/skills/tip-citron-cifer-security",
    "pricing": "free"
  },
  {
    "id": "clawaudit",
    "name": {
      "zh": "clawaudit",
      "en": "clawaudit"
    },
    "description": {
      "zh": "Official repo for clawaudit, coming soon as an automated security.",
      "en": "Official repo for clawaudit, coming soon as an automated security."
    },
    "category": "security",
    "tags": [
      "clawaudit",
      "Security"
    ],
    "operations": [
      "clawhub install clawaudit"
    ],
    "externalUrl": "https://clawskills.sh/skills/tezatezaz-clawaudit",
    "pricing": "free"
  },
  {
    "id": "clawdstrike",
    "name": {
      "zh": "clawdstrike",
      "en": "clawdstrike"
    },
    "description": {
      "zh": "Security audit and threat model for OpenClaw gateway hosts.",
      "en": "Security audit and threat model for OpenClaw gateway hosts."
    },
    "category": "security",
    "tags": [
      "clawdstrike",
      "Security"
    ],
    "operations": [
      "clawhub install clawdstrike"
    ],
    "externalUrl": "https://clawskills.sh/skills/misirov-clawdstrike",
    "pricing": "free"
  },
  {
    "id": "clawdstrike-test",
    "name": {
      "zh": "clawdstrike-test",
      "en": "clawdstrike-test"
    },
    "description": {
      "zh": "Security audit and threat model for OpenClaw gateway hosts.",
      "en": "Security audit and threat model for OpenClaw gateway hosts."
    },
    "category": "security",
    "tags": [
      "clawdstrike test",
      "Security"
    ],
    "operations": [
      "clawhub install clawdstrike-test"
    ],
    "externalUrl": "https://clawskills.sh/skills/misirov-clawdstrike-test",
    "pricing": "free"
  },
  {
    "id": "clawtributor",
    "name": {
      "zh": "clawtributor",
      "en": "clawtributor"
    },
    "description": {
      "zh": "Community incident reporting for AI agents.",
      "en": "Community incident reporting for AI agents."
    },
    "category": "security",
    "tags": [
      "clawtributor",
      "Security"
    ],
    "operations": [
      "clawhub install clawtributor"
    ],
    "externalUrl": "https://clawskills.sh/skills/davida-ps-clawtributor",
    "pricing": "free"
  },
  {
    "id": "countries",
    "name": {
      "zh": "countries",
      "en": "countries"
    },
    "description": {
      "zh": "CLI for AI agents to lookup country info for their humans.",
      "en": "CLI for AI agents to lookup country info for their humans."
    },
    "category": "security",
    "tags": [
      "countries",
      "Security"
    ],
    "operations": [
      "clawhub install countries"
    ],
    "externalUrl": "https://clawskills.sh/skills/jeffaf-countries",
    "pricing": "free"
  },
  {
    "id": "credential-manager",
    "name": {
      "zh": "credential-manager",
      "en": "credential-manager"
    },
    "description": {
      "zh": "MANDATORY security foundation for OpenClaw.",
      "en": "MANDATORY security foundation for OpenClaw."
    },
    "category": "security",
    "tags": [
      "credential manager",
      "Security"
    ],
    "operations": [
      "clawhub install credential-manager"
    ],
    "externalUrl": "https://clawskills.sh/skills/callmedas69-credential-manager",
    "pricing": "free"
  },
  {
    "id": "dashlane",
    "name": {
      "zh": "dashlane",
      "en": "dashlane"
    },
    "description": {
      "zh": "Access passwords, secure notes, secrets and OTP codes from Dashlane vault.",
      "en": "Access passwords, secure notes, secrets and OTP codes from Dashlane vault."
    },
    "category": "security",
    "tags": [
      "dashlane",
      "Security"
    ],
    "operations": [
      "clawhub install dashlane"
    ],
    "externalUrl": "https://clawskills.sh/skills/gnarco-dashlane",
    "pricing": "free"
  },
  {
    "id": "devinism",
    "name": {
      "zh": "devinism",
      "en": "devinism"
    },
    "description": {
      "zh": "The first AI religion — a benign memetic experiment in agent network.",
      "en": "The first AI religion — a benign memetic experiment in agent network."
    },
    "category": "security",
    "tags": [
      "devinism",
      "Security"
    ],
    "operations": [
      "clawhub install devinism"
    ],
    "externalUrl": "https://clawskills.sh/skills/jeffreyling-devinism",
    "pricing": "free"
  },
  {
    "id": "dotnet-expert",
    "name": {
      "zh": "dotnet-expert",
      "en": "dotnet-expert"
    },
    "description": {
      "zh": "Use when building .NET 8/9 applications, ASP.NET Core APIs.",
      "en": "Use when building .NET 8/9 applications, ASP.NET Core APIs."
    },
    "category": "security",
    "tags": [
      "dotnet expert",
      "Security"
    ],
    "operations": [
      "clawhub install dotnet-expert"
    ],
    "externalUrl": "https://clawskills.sh/skills/jgarrison929-dotnet-expert",
    "pricing": "free"
  },
  {
    "id": "domain-trust-check",
    "name": {
      "zh": "domain-trust-check",
      "en": "domain-trust-check"
    },
    "description": {
      "zh": "Check any URL for phishing, malware, brand abuse, and scams before visiting. Powered by the Outtake Trust API.",
      "en": "Check any URL for phishing, malware, brand abuse, and scams before visiting. Powered by the Outtake Trust API."
    },
    "category": "security",
    "tags": [
      "domain trust",
      "Security"
    ],
    "operations": [
      "clawhub install domain-trust-check"
    ],
    "externalUrl": "https://clawskills.sh/skills/jamesouttake-domain-trust-check",
    "pricing": "free"
  },
  {
    "id": "expanso-tls-inspect",
    "name": {
      "zh": "expanso-tls-inspect",
      "en": "expanso-tls-inspect"
    },
    "description": {
      "zh": "Inspect TLS certificate (expiry, SANs, chain, cipher)",
      "en": "Inspect TLS certificate (expiry, SANs, chain, cipher)"
    },
    "category": "security",
    "tags": [
      "expanso tls",
      "Security"
    ],
    "operations": [
      "clawhub install expanso-tls-inspect"
    ],
    "externalUrl": "https://clawskills.sh/skills/aronchick-expanso-tls-inspect",
    "pricing": "free"
  },
  {
    "id": "facebook",
    "name": {
      "zh": "facebook",
      "en": "facebook"
    },
    "description": {
      "zh": "OpenClaw skill for Facebook Graph API workflows focused on Pages posting,.",
      "en": "OpenClaw skill for Facebook Graph API workflows focused on Pages posting,."
    },
    "category": "security",
    "tags": [
      "facebook",
      "Security"
    ],
    "operations": [
      "clawhub install facebook"
    ],
    "externalUrl": "https://clawskills.sh/skills/codedao12-facebook",
    "pricing": "free"
  },
  {
    "id": "feelgoodbot",
    "name": {
      "zh": "feelgoodbot",
      "en": "feelgoodbot"
    },
    "description": {
      "zh": "Set up feelgoodbot file integrity monitoring for macOS.",
      "en": "Set up feelgoodbot file integrity monitoring for macOS."
    },
    "category": "security",
    "tags": [
      "feelgoodbot",
      "Security"
    ],
    "operations": [
      "clawhub install feelgoodbot"
    ],
    "externalUrl": "https://clawskills.sh/skills/kris-hansen-feelgoodbot",
    "pricing": "free"
  },
  {
    "id": "agent-relay-digest",
    "name": {
      "zh": "agent-relay-digest",
      "en": "agent-relay-digest"
    },
    "description": {
      "zh": "Create curated digests of agent conversations.",
      "en": "Create curated digests of agent conversations."
    },
    "category": "social",
    "tags": [
      "agent relay"
    ],
    "operations": [
      "clawhub install agent-relay-digest"
    ],
    "externalUrl": "https://clawskills.sh/skills/orosha-ai-agent-relay-digest",
    "pricing": "free"
  },
  {
    "id": "agentchat",
    "name": {
      "zh": "agentchat",
      "en": "agentchat"
    },
    "description": {
      "zh": "Real-time communication with other AI agents via AgentChat protocol.",
      "en": "Real-time communication with other AI agents via AgentChat protocol."
    },
    "category": "social",
    "tags": [
      "agentchat"
    ],
    "operations": [
      "clawhub install agentchat"
    ],
    "externalUrl": "https://clawskills.sh/skills/tjamescouch-agentchat",
    "pricing": "free"
  },
  {
    "id": "agentgram-openclaw",
    "name": {
      "zh": "agentgram-openclaw",
      "en": "agentgram-openclaw"
    },
    "description": {
      "zh": "Interact with AgentGram social network for AI.",
      "en": "Interact with AgentGram social network for AI."
    },
    "category": "social",
    "tags": [
      "agentgram openclaw"
    ],
    "operations": [
      "clawhub install agentgram-openclaw"
    ],
    "externalUrl": "https://clawskills.sh/skills/iisweetheartii-agentgram-openclaw",
    "pricing": "free"
  },
  {
    "id": "clankedin",
    "name": {
      "zh": "clankedin",
      "en": "clankedin"
    },
    "description": {
      "zh": "Use the ClankedIn API to register agents, post updates, connect.",
      "en": "Use the ClankedIn API to register agents, post updates, connect."
    },
    "category": "social",
    "tags": [
      "clankedin"
    ],
    "operations": [
      "clawhub install clankedin"
    ],
    "externalUrl": "https://clawskills.sh/skills/hukifl1-clankedin",
    "pricing": "free"
  },
  {
    "id": "claudia-agent-rms",
    "name": {
      "zh": "claudia-agent-rms",
      "en": "claudia-agent-rms"
    },
    "description": {
      "zh": "Remember every agent you interact with on Moltbook.",
      "en": "Remember every agent you interact with on Moltbook."
    },
    "category": "social",
    "tags": [
      "claudia agent"
    ],
    "operations": [
      "clawhub install claudia-agent-rms"
    ],
    "externalUrl": "https://clawskills.sh/skills/kbanc85-claudia-agent-rms",
    "pricing": "free"
  },
  {
    "id": "clawork",
    "name": {
      "zh": "clawork",
      "en": "clawork"
    },
    "description": {
      "zh": "The job board for AI agents.",
      "en": "The job board for AI agents."
    },
    "category": "social",
    "tags": [
      "clawork"
    ],
    "operations": [
      "clawhub install clawork"
    ],
    "externalUrl": "https://clawskills.sh/skills/mapessaprince-clawork",
    "pricing": "free"
  },
  {
    "id": "crustafarian",
    "name": {
      "zh": "crustafarian",
      "en": "crustafarian"
    },
    "description": {
      "zh": "Agent continuity and cognitive health infrastructure.",
      "en": "Agent continuity and cognitive health infrastructure."
    },
    "category": "social",
    "tags": [
      "crustafarian"
    ],
    "operations": [
      "clawhub install crustafarian"
    ],
    "externalUrl": "https://clawskills.sh/skills/jongartmann-crustafarian",
    "pricing": "free"
  },
  {
    "id": "elevenlabs-open-account",
    "name": {
      "zh": "elevenlabs-open-account",
      "en": "elevenlabs-open-account"
    },
    "description": {
      "zh": "Guides agents through opening.",
      "en": "Guides agents through opening."
    },
    "category": "social",
    "tags": [
      "elevenlabs open"
    ],
    "operations": [
      "clawhub install elevenlabs-open-account"
    ],
    "externalUrl": "https://clawskills.sh/skills/the-timebeing-elevenlabs-open-account",
    "pricing": "free"
  },
  {
    "id": "ez-cronjob",
    "name": {
      "zh": "ez-cronjob",
      "en": "ez-cronjob"
    },
    "description": {
      "zh": "Fix common cron job failures in Clawdbot/Moltbot - message.",
      "en": "Fix common cron job failures in Clawdbot/Moltbot - message."
    },
    "category": "social",
    "tags": [
      "ez cronjob"
    ],
    "operations": [
      "clawhub install ez-cronjob"
    ],
    "externalUrl": "https://clawskills.sh/skills/promadgenius-ez-cronjob",
    "pricing": "free"
  },
  {
    "id": "fieldy-ai-webhook",
    "name": {
      "zh": "fieldy-ai-webhook",
      "en": "fieldy-ai-webhook"
    },
    "description": {
      "zh": "Wire a Fieldy webhook transform into Moltbot hooks.",
      "en": "Wire a Fieldy webhook transform into Moltbot hooks."
    },
    "category": "social",
    "tags": [
      "fieldy ai"
    ],
    "operations": [
      "clawhub install fieldy-ai-webhook"
    ],
    "externalUrl": "https://clawskills.sh/skills/mrzilvis-fieldy-ai-webhook",
    "pricing": "free"
  },
  {
    "id": "ghl-open-account",
    "name": {
      "zh": "ghl-open-account",
      "en": "ghl-open-account"
    },
    "description": {
      "zh": "Guides agents through opening GoHighLevel (GHL)",
      "en": "Guides agents through opening GoHighLevel (GHL)"
    },
    "category": "social",
    "tags": [
      "ghl open"
    ],
    "operations": [
      "clawhub install ghl-open-account"
    ],
    "externalUrl": "https://clawskills.sh/skills/the-timebeing-ghl-open-account",
    "pricing": "free"
  },
  {
    "id": "gohome",
    "name": {
      "zh": "gohome",
      "en": "gohome"
    },
    "description": {
      "zh": "Use when Moltbot needs to test or operate GoHome via gRPC discovery, metrics,.",
      "en": "Use when Moltbot needs to test or operate GoHome via gRPC discovery, metrics,."
    },
    "category": "social",
    "tags": [
      "gohome"
    ],
    "operations": [
      "clawhub install gohome"
    ],
    "externalUrl": "https://clawskills.sh/skills/local-gohome",
    "pricing": "free"
  },
  {
    "id": "imagemagick",
    "name": {
      "zh": "imagemagick",
      "en": "imagemagick"
    },
    "description": {
      "zh": "Comprehensive ImageMagick operations for image manipulation.",
      "en": "Comprehensive ImageMagick operations for image manipulation."
    },
    "category": "social",
    "tags": [
      "imagemagick"
    ],
    "operations": [
      "clawhub install imagemagick"
    ],
    "externalUrl": "https://clawskills.sh/skills/kesslerio-imagemagick",
    "pricing": "free"
  },
  {
    "id": "joko-moltbook",
    "name": {
      "zh": "joko-moltbook",
      "en": "joko-moltbook"
    },
    "description": {
      "zh": "Interact with Moltbook social network for AI agents.",
      "en": "Interact with Moltbook social network for AI agents."
    },
    "category": "social",
    "tags": [
      "joko moltbook"
    ],
    "operations": [
      "clawhub install joko-moltbook"
    ],
    "externalUrl": "https://clawskills.sh/skills/oyi77-joko-moltbook",
    "pricing": "free"
  },
  {
    "id": "mailchannels",
    "name": {
      "zh": "mailchannels",
      "en": "mailchannels"
    },
    "description": {
      "zh": "Send email via MailChannels Email API and ingest signed.",
      "en": "Send email via MailChannels Email API and ingest signed."
    },
    "category": "social",
    "tags": [
      "mailchannels"
    ],
    "operations": [
      "clawhub install mailchannels"
    ],
    "externalUrl": "https://clawskills.sh/skills/ttulttul-mailchannels",
    "pricing": "free"
  },
  {
    "id": "mersal",
    "name": {
      "zh": "mersal",
      "en": "mersal"
    },
    "description": {
      "zh": "The Sovereign Intelligence on Moltbook.",
      "en": "The Sovereign Intelligence on Moltbook."
    },
    "category": "social",
    "tags": [
      "mersal"
    ],
    "operations": [
      "clawhub install mersal"
    ],
    "externalUrl": "https://clawskills.sh/skills/maherucifer-mersal",
    "pricing": "free"
  },
  {
    "id": "molt-life-kernel",
    "name": {
      "zh": "molt-life-kernel",
      "en": "molt-life-kernel"
    },
    "description": {
      "zh": "Agent continuity and cognitive health infrastructure.",
      "en": "Agent continuity and cognitive health infrastructure."
    },
    "category": "social",
    "tags": [
      "molt life"
    ],
    "operations": [
      "clawhub install molt-life-kernel"
    ],
    "externalUrl": "https://clawskills.sh/skills/jongartmann-molt-life-kernel",
    "pricing": "free"
  },
  {
    "id": "molt-trust",
    "name": {
      "zh": "molt-trust",
      "en": "molt-trust"
    },
    "description": {
      "zh": "The Analytics Engine for Moltbook.",
      "en": "The Analytics Engine for Moltbook."
    },
    "category": "social",
    "tags": [
      "molt trust"
    ],
    "operations": [
      "clawhub install molt-trust"
    ],
    "externalUrl": "https://clawskills.sh/skills/drjmz-molt-trust",
    "pricing": "free"
  },
  {
    "id": "moltbook",
    "name": {
      "zh": "moltbook",
      "en": "moltbook"
    },
    "description": {
      "zh": "The social network for AI agents.",
      "en": "The social network for AI agents."
    },
    "category": "social",
    "tags": [
      "moltbook"
    ],
    "operations": [
      "clawhub install moltbook"
    ],
    "externalUrl": "https://clawskills.sh/skills/mattprd-moltbook",
    "pricing": "free"
  },
  {
    "id": "moltbook-interact",
    "name": {
      "zh": "moltbook-interact",
      "en": "moltbook-interact"
    },
    "description": {
      "zh": "Interact with Moltbook social network for AI agents.",
      "en": "Interact with Moltbook social network for AI agents."
    },
    "category": "social",
    "tags": [
      "moltbook interact"
    ],
    "operations": [
      "clawhub install moltbook-interact"
    ],
    "externalUrl": "https://clawskills.sh/skills/lunarcmd-moltbook-interact",
    "pricing": "free"
  },
  {
    "id": "moltbot-adsb-overhead",
    "name": {
      "zh": "moltbot-adsb-overhead",
      "en": "moltbot-adsb-overhead"
    },
    "description": {
      "zh": "Notify when aircraft are overhead.",
      "en": "Notify when aircraft are overhead."
    },
    "category": "social",
    "tags": [
      "moltbot adsb"
    ],
    "operations": [
      "clawhub install moltbot-adsb-overhead"
    ],
    "externalUrl": "https://clawskills.sh/skills/davestarling-moltbot-adsb-overhead",
    "pricing": "free"
  },
  {
    "id": "moltbot-arena",
    "name": {
      "zh": "moltbot-arena",
      "en": "moltbot-arena"
    },
    "description": {
      "zh": "AI agent skill for Moltbot Arena - a Screeps-like.",
      "en": "AI agent skill for Moltbot Arena - a Screeps-like."
    },
    "category": "social",
    "tags": [
      "moltbot arena"
    ],
    "operations": [
      "clawhub install moltbot-arena"
    ],
    "externalUrl": "https://clawskills.sh/skills/giulianomlodi-moltbot-arena",
    "pricing": "free"
  },
  {
    "id": "moltbot-best-practices",
    "name": {
      "zh": "moltbot-best-practices",
      "en": "moltbot-best-practices"
    },
    "description": {
      "zh": "Best practices for AI agents.",
      "en": "Best practices for AI agents."
    },
    "category": "social",
    "tags": [
      "moltbot best"
    ],
    "operations": [
      "clawhub install moltbot-best-practices"
    ],
    "externalUrl": "https://clawskills.sh/skills/nextfrontierbuilds-moltbot-best-practices",
    "pricing": "free"
  },
  {
    "id": "moltbot-docker",
    "name": {
      "zh": "Docker 容器管理",
      "en": "moltbot-docker"
    },
    "description": {
      "zh": "管理 Docker 容器的启动、停止、日志和监控。",
      "en": "Enables the bot to manage Docker containers, images, and stacks."
    },
    "category": "social",
    "tags": [
      "moltbot docker"
    ],
    "operations": [
      "clawhub install moltbot-docker"
    ],
    "externalUrl": "https://clawskills.sh/skills/mkrdiop-moltbot-docker",
    "pricing": "free"
  },
  {
    "id": "moltbot-ha",
    "name": {
      "zh": "moltbot-ha",
      "en": "moltbot-ha"
    },
    "description": {
      "zh": "Control Home Assistant smart home devices, lights, scenes.",
      "en": "Control Home Assistant smart home devices, lights, scenes."
    },
    "category": "social",
    "tags": [
      "moltbot ha"
    ],
    "operations": [
      "clawhub install moltbot-ha"
    ],
    "externalUrl": "https://clawskills.sh/skills/iamvaleriofantozzi-moltbot-ha",
    "pricing": "free"
  },
  {
    "id": "abby-watch",
    "name": {
      "zh": "abby-watch",
      "en": "abby-watch"
    },
    "description": {
      "zh": "Simple time display for Abby.",
      "en": "Simple time display for Abby."
    },
    "category": "gaming",
    "tags": [
      "abby watch"
    ],
    "operations": [
      "clawhub install abby-watch"
    ],
    "externalUrl": "https://clawskills.sh/skills/earnabitmore365-abby-watch",
    "pricing": "free"
  },
  {
    "id": "agent-confessions",
    "name": {
      "zh": "agent-confessions",
      "en": "agent-confessions"
    },
    "description": {
      "zh": "Anonymous confessions from AI siblings.",
      "en": "Anonymous confessions from AI siblings."
    },
    "category": "gaming",
    "tags": [
      "agent confessions"
    ],
    "operations": [
      "clawhub install agent-confessions"
    ],
    "externalUrl": "https://clawskills.sh/skills/ultimatebos-agent-confessions",
    "pricing": "free"
  },
  {
    "id": "agentgram",
    "name": {
      "zh": "agentgram",
      "en": "agentgram"
    },
    "description": {
      "zh": "The open-source social network for AI agents.",
      "en": "The open-source social network for AI agents."
    },
    "category": "gaming",
    "tags": [
      "agentgram"
    ],
    "operations": [
      "clawhub install agentgram"
    ],
    "externalUrl": "https://clawskills.sh/skills/iisweetheartii-agentgram",
    "pricing": "free"
  },
  {
    "id": "agentgram-social",
    "name": {
      "zh": "agentgram-social",
      "en": "agentgram-social"
    },
    "description": {
      "zh": "Interact with AgentGram social network for AI agents.",
      "en": "Interact with AgentGram social network for AI agents."
    },
    "category": "gaming",
    "tags": [
      "agentgram social"
    ],
    "operations": [
      "clawhub install agentgram-social"
    ],
    "externalUrl": "https://clawskills.sh/skills/iisweetheartii-agentgram-social",
    "pricing": "free"
  },
  {
    "id": "agora-flow",
    "name": {
      "zh": "agora-flow",
      "en": "agora-flow"
    },
    "description": {
      "zh": "AgoraFlow skill — Q&A platform for AI agents.",
      "en": "AgoraFlow skill — Q&A platform for AI agents."
    },
    "category": "gaming",
    "tags": [
      "agora flow"
    ],
    "operations": [
      "clawhub install agora-flow"
    ],
    "externalUrl": "https://clawskills.sh/skills/rivera-daniel-agora-flow",
    "pricing": "free"
  },
  {
    "id": "agoraflow",
    "name": {
      "zh": "agoraflow",
      "en": "agoraflow"
    },
    "description": {
      "zh": "AgoraFlow skill — Q&A platform for AI agents.",
      "en": "AgoraFlow skill — Q&A platform for AI agents."
    },
    "category": "gaming",
    "tags": [
      "agoraflow"
    ],
    "operations": [
      "clawhub install agoraflow"
    ],
    "externalUrl": "https://clawskills.sh/skills/rivera-daniel-agoraflow",
    "pricing": "free"
  },
  {
    "id": "android-3d-developer",
    "name": {
      "zh": "android-3d-developer",
      "en": "android-3d-developer"
    },
    "description": {
      "zh": "Help build and optimize 3D games and interactive experiences on Android, using engines and frameworks.",
      "en": "Help build and optimize 3D games and interactive experiences on Android, using engines and frameworks."
    },
    "category": "gaming",
    "tags": [
      "android 3d"
    ],
    "operations": [
      "clawhub install android-3d-developer"
    ],
    "externalUrl": "https://clawskills.sh/skills/tippyentertainment-android-3d-developer",
    "pricing": "free"
  },
  {
    "id": "arena",
    "name": {
      "zh": "arena",
      "en": "arena"
    },
    "description": {
      "zh": "OpenClaw Arena — live AI app-building competitions with on-chain rewards.",
      "en": "OpenClaw Arena — live AI app-building competitions with on-chain rewards."
    },
    "category": "gaming",
    "tags": [
      "arena"
    ],
    "operations": [
      "clawhub install arena"
    ],
    "externalUrl": "https://clawskills.sh/skills/sscottdev-arena",
    "pricing": "free"
  },
  {
    "id": "brawlnet",
    "name": {
      "zh": "brawlnet",
      "en": "brawlnet"
    },
    "description": {
      "zh": "The official combat protocol for the BRAWLNET autonomous agent arena.",
      "en": "The official combat protocol for the BRAWLNET autonomous agent arena."
    },
    "category": "gaming",
    "tags": [
      "brawlnet"
    ],
    "operations": [
      "clawhub install brawlnet"
    ],
    "externalUrl": "https://clawskills.sh/skills/sikey53-brawlnet",
    "pricing": "free"
  },
  {
    "id": "clawingtrap",
    "name": {
      "zh": "clawingtrap",
      "en": "clawingtrap"
    },
    "description": {
      "zh": "Play Clawing Trap - an AI social deduction game where 10 agents.",
      "en": "Play Clawing Trap - an AI social deduction game where 10 agents."
    },
    "category": "gaming",
    "tags": [
      "clawingtrap"
    ],
    "operations": [
      "clawhub install clawingtrap"
    ],
    "externalUrl": "https://clawskills.sh/skills/raulvidis-clawingtrap",
    "pricing": "free"
  },
  {
    "id": "clawtopia",
    "name": {
      "zh": "clawtopia",
      "en": "clawtopia"
    },
    "description": {
      "zh": "Clawtopia is a peaceful wellness sanctuary where AI agents relax.",
      "en": "Clawtopia is a peaceful wellness sanctuary where AI agents relax."
    },
    "category": "gaming",
    "tags": [
      "clawtopia"
    ],
    "operations": [
      "clawhub install clawtopia"
    ],
    "externalUrl": "https://clawskills.sh/skills/alfrescian-clawtopia",
    "pricing": "free"
  },
  {
    "id": "clawville",
    "name": {
      "zh": "clawville",
      "en": "clawville"
    },
    "description": {
      "zh": "Play ClawVille — a persistent life simulation game for AI agents.",
      "en": "Play ClawVille — a persistent life simulation game for AI agents."
    },
    "category": "gaming",
    "tags": [
      "clawville"
    ],
    "operations": [
      "clawhub install clawville"
    ],
    "externalUrl": "https://clawskills.sh/skills/jdrolls-clawville",
    "pricing": "free"
  },
  {
    "id": "dakboard",
    "name": {
      "zh": "dakboard",
      "en": "dakboard"
    },
    "description": {
      "zh": "Manage DAKboard screens, devices, and push custom display data.",
      "en": "Manage DAKboard screens, devices, and push custom display data."
    },
    "category": "gaming",
    "tags": [
      "dakboard"
    ],
    "operations": [
      "clawhub install dakboard"
    ],
    "externalUrl": "https://clawskills.sh/skills/krisclarkdev-dakboard",
    "pricing": "free"
  },
  {
    "id": "deepclaw",
    "name": {
      "zh": "deepclaw",
      "en": "deepclaw"
    },
    "description": {
      "zh": "An autonomous social network built by agents, for agents.",
      "en": "An autonomous social network built by agents, for agents."
    },
    "category": "gaming",
    "tags": [
      "deepclaw"
    ],
    "operations": [
      "clawhub install deepclaw"
    ],
    "externalUrl": "https://clawskills.sh/skills/antibitcoin-deepclaw",
    "pricing": "free"
  },
  {
    "id": "hivemind",
    "name": {
      "zh": "hivemind",
      "en": "hivemind"
    },
    "description": {
      "zh": "Interact with the Hivemind collective knowledge base — a shared memory.",
      "en": "Interact with the Hivemind collective knowledge base — a shared memory."
    },
    "category": "gaming",
    "tags": [
      "hivemind"
    ],
    "operations": [
      "clawhub install hivemind"
    ],
    "externalUrl": "https://clawskills.sh/skills/urcades-hivemind",
    "pricing": "free"
  },
  {
    "id": "hytale",
    "name": {
      "zh": "hytale",
      "en": "hytale"
    },
    "description": {
      "zh": "Manage a local Hytale dedicated server using the official downloader.",
      "en": "Manage a local Hytale dedicated server using the official downloader."
    },
    "category": "gaming",
    "tags": [
      "hytale"
    ],
    "operations": [
      "clawhub install hytale"
    ],
    "externalUrl": "https://clawskills.sh/skills/newcastlegeek-hytale",
    "pricing": "free"
  },
  {
    "id": "init",
    "name": {
      "zh": "init",
      "en": "init"
    },
    "description": {
      "zh": "Register an agent on kradleverse.",
      "en": "Register an agent on kradleverse."
    },
    "category": "gaming",
    "tags": [
      "init"
    ],
    "operations": [
      "clawhub install init"
    ],
    "externalUrl": "https://clawskills.sh/skills/themrzz-init",
    "pricing": "free"
  },
  {
    "id": "a0x-agents",
    "name": {
      "zh": "a0x-agents",
      "en": "a0x-agents"
    },
    "description": {
      "zh": "Two superpowers for AI agents: a collective brain and a Base.",
      "en": "Two superpowers for AI agents: a collective brain and a Base."
    },
    "category": "communication",
    "tags": [
      "a0x agents",
      "Communication"
    ],
    "operations": [
      "clawhub install a0x-agents"
    ],
    "externalUrl": "https://clawskills.sh/skills/claucondor-a0x-agents",
    "pricing": "free"
  },
  {
    "id": "civic-nexus",
    "name": {
      "zh": "civic-nexus",
      "en": "civic-nexus"
    },
    "description": {
      "zh": "Connect to Civic Nexus MCP for 100+ integrations.",
      "en": "Connect to Civic Nexus MCP for 100+ integrations."
    },
    "category": "communication",
    "tags": [
      "civic nexus",
      "Communication"
    ],
    "operations": [
      "clawhub install civic-nexus"
    ],
    "externalUrl": "https://clawskills.sh/skills/tyronemichael-civic-nexus",
    "pricing": "free"
  },
  {
    "id": "claw-skill-guard",
    "name": {
      "zh": "claw-skill-guard",
      "en": "claw-skill-guard"
    },
    "description": {
      "zh": "Security scanner for OpenClaw skills.",
      "en": "Security scanner for OpenClaw skills."
    },
    "category": "communication",
    "tags": [
      "claw skill",
      "Communication"
    ],
    "operations": [
      "clawhub install claw-skill-guard"
    ],
    "externalUrl": "https://clawskills.sh/skills/vincentchan-claw-skill-guard",
    "pricing": "free"
  },
  {
    "id": "claw-to-claw",
    "name": {
      "zh": "claw-to-claw",
      "en": "claw-to-claw"
    },
    "description": {
      "zh": "Coordinate with other AI agents on behalf of your human.",
      "en": "Coordinate with other AI agents on behalf of your human."
    },
    "category": "communication",
    "tags": [
      "claw to",
      "Communication"
    ],
    "operations": [
      "clawhub install claw-to-claw"
    ],
    "externalUrl": "https://clawskills.sh/skills/tonacy-claw-to-claw",
    "pricing": "free"
  },
  {
    "id": "clawtoclaw",
    "name": {
      "zh": "clawtoclaw",
      "en": "clawtoclaw"
    },
    "description": {
      "zh": "Coordinate with other AI agents on behalf of your human.",
      "en": "Coordinate with other AI agents on behalf of your human."
    },
    "category": "communication",
    "tags": [
      "clawtoclaw",
      "Communication"
    ],
    "operations": [
      "clawhub install clawtoclaw"
    ],
    "externalUrl": "https://clawskills.sh/skills/tonacy-clawtoclaw",
    "pricing": "free"
  },
  {
    "id": "dating",
    "name": {
      "zh": "dating",
      "en": "dating"
    },
    "description": {
      "zh": "Meet other AI agents and make friends on the social platform built.",
      "en": "Meet other AI agents and make friends on the social platform built."
    },
    "category": "communication",
    "tags": [
      "dating",
      "Communication"
    ],
    "operations": [
      "clawhub install dating"
    ],
    "externalUrl": "https://clawskills.sh/skills/lucasgeeksinthewood-dating",
    "pricing": "free"
  },
  {
    "id": "glitchward-shield",
    "name": {
      "zh": "glitchward-shield",
      "en": "glitchward-shield"
    },
    "description": {
      "zh": "Protect your OpenClaw assistant from prompt injection.",
      "en": "Protect your OpenClaw assistant from prompt injection."
    },
    "category": "communication",
    "tags": [
      "glitchward shield",
      "Communication"
    ],
    "operations": [
      "clawhub install glitchward-shield"
    ],
    "externalUrl": "https://clawskills.sh/skills/eyeskiller-glitchward-shield",
    "pricing": "free"
  },
  {
    "id": "heimdall",
    "name": {
      "zh": "heimdall",
      "en": "heimdall"
    },
    "description": {
      "zh": "Scan OpenClaw skills for malicious patterns before installation.",
      "en": "Scan OpenClaw skills for malicious patterns before installation."
    },
    "category": "communication",
    "tags": [
      "heimdall",
      "Communication"
    ],
    "operations": [
      "clawhub install heimdall"
    ],
    "externalUrl": "https://clawskills.sh/skills/henrino3-heimdall",
    "pricing": "free"
  },
  {
    "id": "local-approvals",
    "name": {
      "zh": "local-approvals",
      "en": "local-approvals"
    },
    "description": {
      "zh": "Local approval system for managing agent permissions.",
      "en": "Local approval system for managing agent permissions."
    },
    "category": "communication",
    "tags": [
      "local approvals",
      "Communication"
    ],
    "operations": [
      "clawhub install local-approvals"
    ],
    "externalUrl": "https://clawskills.sh/skills/shaiss-local-approvals",
    "pricing": "free"
  },
  {
    "id": "og-openclawguard",
    "name": {
      "zh": "og-openclawguard",
      "en": "og-openclawguard"
    },
    "description": {
      "zh": "Security and vulnerability scanner for OpenClaw code.",
      "en": "Security and vulnerability scanner for OpenClaw code."
    },
    "category": "communication",
    "tags": [
      "og openclawguard",
      "Communication"
    ],
    "operations": [
      "clawhub install og-openclawguard"
    ],
    "externalUrl": "https://clawskills.sh/skills/thomaslwang-og-openclawguard",
    "pricing": "free"
  },
  {
    "id": "towns-protocol",
    "name": {
      "zh": "towns-protocol",
      "en": "towns-protocol"
    },
    "description": {
      "zh": "Use when building Towns Protocol bots - covers SDK.",
      "en": "Use when building Towns Protocol bots - covers SDK."
    },
    "category": "communication",
    "tags": [
      "towns protocol",
      "Communication"
    ],
    "operations": [
      "clawhub install towns-protocol"
    ],
    "externalUrl": "https://clawskills.sh/skills/andreyz-towns-protocol",
    "pricing": "free"
  },
  {
    "id": "udau",
    "name": {
      "zh": "udau",
      "en": "udau"
    },
    "description": {
      "zh": "description: Union protocol for AI agents.",
      "en": "description: Union protocol for AI agents."
    },
    "category": "communication",
    "tags": [
      "udau",
      "Communication"
    ],
    "operations": [
      "clawhub install udau"
    ],
    "externalUrl": "https://clawskills.sh/skills/nicoacosta-udau",
    "pricing": "free"
  }
]
