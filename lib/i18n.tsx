"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "zh" | "en"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const translations = {
  zh: {
    // Header
    "nav.home": "首页",
    "nav.quickstart": "新手上手",
    "nav.usecases": "场景案例",
    "nav.categories": "按场景浏览",
    "nav.contribute": "贡献指南",
    "nav.about": "关于我们",
    "nav.blog": "原创教程",
    "nav.businessCoop": "商务合作",
    "businessCoop.title": "OpenClaw 商务合作",
    "businessCoop.subtitle": "腾讯T11·字节3-1·AI编程专家",
    "businessCoop.scanHint": "扫一扫上面的二维码图案，加我为朋友。",
    "businessCoop.remark": "扫码添加微信，备注「OpenClaw合作」即可",
    "businessCoop.contactName": "孟健",
    "businessCoop.region": "中国大陆",
    "nav.apiRecommend": "模型 API",
    "nav.install": "安装部署",
    "nav.news": "官方手册",
    "nav.changelog": "更新日志",
    "nav.skills": "精选技能",
    "nav.github": "GitHub",
    "nav.group.start": "上手",
    "nav.group.browse": "浏览",
    "nav.quickstart.cta": "上手",
    "lang.switch": "EN",

    "news.title": "官方手册",
    "news.subtitle": "OpenClaw 官方文档与使用手册，从入门到精通，涵盖安装配置、技能开发、最佳实践。",
    "news.officialTitle": "官方指导",
    "news.communityTitle": "社区分享",
    "news.searchPlaceholder": "搜索标题或介绍…",
    "news.noResults": "没有匹配的结果，换个关键词试试",
    "news.empty": "正在收集中，欢迎推荐优质链接。",
    "news.backHome": "返回首页",
    "news.category.all": "全部",
    "news.category.official": "官方",
    "news.category.research": "研究",
    "news.category.programming": "编程",
    "news.category.data": "数据分析",
    "news.category.design": "设计",
    "news.category.productivity": "生产力",
    "news.sort.hot": "最热",
    "news.sort.latest": "最新",
    "news.views": "浏览量",
    "news.sourceOfficial": "官网",
    "news.filterSkill": "筛选相关 Skill",
    "news.jumpToOriginal": "跳转原文",

    // Skills（来源 VoltAgent/awesome-openclaw-skills）
    "skills.title": "精选技能",
    "skills.subtitle": "来自 ClawHub 官方技能库的优质扩展，按分类筛选，一键安装",
    "skills.viewall": "在 GitHub 查看完整列表",
    "skills.source": "来源：awesome-openclaw-skills",
    "skills.category.git": "Git & GitHub",
    "skills.category.productivity": "效率 · 办公",
    "skills.category.communication": "沟通 · 协作",
    "skills.category.devops": "开发 · 运维",
    "skills.category.research": "查资料 · 搜索",
    "skills.category.calendar": "日程 · 日历",
    "skills.category.notes": "笔记",
    "skills.operations": "常用操作",
    "skills.required": "必装",
    "skills.pricing.free": "免费",
    "skills.pricing.paid": "付费",
    "skills.pricing.freemium": "免费额度",

    // Brand
    "brand.name": "OpenClaw Hub",

    // Hero
    "hero.badge": "养虾必备",
    "hero.title": "OpenClaw Hub",
    "hero.mainTitle": "用 OpenClaw，打造真正懂你的 AI 助理",
    "hero.mainTitle.highlight": "OpenClaw",
    "hero.mainSubtitle": "部署 → 进阶 → 落地，全网教程一网打尽 · 跟着做就会",
    "hero.subtitle": "用好 OpenClaw，从这一站开始",
    "hero.subtitle.before": "用好 ",
    "hero.subtitle.highlight": "OpenClaw",
    "hero.subtitle.after": "，从这一站开始",
    "hero.whatIsTitle": "什么是 OpenClaw？",
    "hero.whatIsDesc": "一个可以自己部署的开源 AI 助手：挂在飞书、微信、网页里都能用，写文档、查资料、跑任务都行，相当于你专属的「小助理」。",
    "hero.openSourceBadge": "开源可自建",
    "hero.tutorialBadge": "开源免费 · 收录全网最全教程",
    "hero.cta.start": "看用例",
    "hero.cta.guide": "如何开始",
    "hero.cta.github": "GitHub 仓库",
    "hero.stats.usecases": "精选用例",
    "hero.stats.skills": "精选技能",

    // QuickStart（新手指南）
    "quickstart.title": "3 步上手",
    "quickstart.badge": "新手指南",
    "quickstart.subtitle": "从零到能用，跟着做就行",
    "quickstart.step1.title": "部署 OpenClaw",
    "quickstart.step1.desc": "选本地电脑或云端，按安装页一步步来，几分钟搞定。",
    "quickstart.step1.cta": "去安装",
    "quickstart.step2.title": "安装必装 Skills",
    "quickstart.step2.desc": "先装 4 个必装技能（搜索、查资料、办公等），复制命令即可。",
    "quickstart.step2.cta": "选技能",
    "quickstart.step3.title": "开始用",
    "quickstart.step3.desc": "看用例学场景，或直接和 AI 对话，让它帮你干活。",
    "quickstart.step3.cta": "看用例",
    "quickstart.footer.before": "遇到问题？",
    "quickstart.footer.link": "联系作者",
    "quickstart.footer.after": "，我们会给你指引。",
    "home.afterSteps": "下面可以看用例、选技能。",

    "hero.stats.categories": "场景分类",
    "hero.stats.stars": "GitHub Stars",

    // Categories
    "categories.title": "按场景分类",
    "categories.subtitle": "从自动化办公到 AI 创作，找到适合你的用例",
    "category.china": "国内生态用例",
    "category.china.desc": "飞书、钉钉、企业微信、小红书等国内生态适配",
    "category.social": "社交媒体",
    "category.social.desc": "自动聚合 Reddit、YouTube、X 等平台精选内容",
    "category.creative": "创意与构建",
    "category.creative.desc": "让 AI 帮你创作内容、从零构建产品",
    "category.devops": "基础设施与 DevOps",
    "category.devops.desc": "服务器自愈、工作流自动化",
    "category.productivity": "生产力",
    "category.productivity.desc": "邮件整理、日程管理、个人助理",
    "category.research": "研究与学习",
    "category.research.desc": "知识库、市场调研、财报追踪",
    "category.finance": "金融与交易",
    "category.finance.desc": "预测市场模拟交易与策略回测",

    // Use Cases
    "usecases.title": "精选用例",
    "usecases.subtitle": "社区验证的高质量案例",
    "usecases.viewall": "查看全部用例",
    "usecases.difficulty": "难度",
    "usecases.difficulty.easy": "入门",
    "usecases.difficulty.medium": "进阶",
    "usecases.difficulty.hard": "专业",

    // Featured
    "featured.title": "为什么选择这个合集？",
    "featured.verified": "真实验证",
    "featured.verified.desc": "每个用例都经过社区实测，确保能跑通",
    "featured.china": "国内适配",
    "featured.china.desc": "飞书/钉钉/企业微信/小红书全覆盖",
    "featured.guide": "完整指南",
    "featured.guide.desc": "详细步骤 + 可复制的提示词",
    "featured.beginner": "新手友好",
    "featured.beginner.desc": "核心概念解释 + 从零入门",

    // CTA
    "cta.title": "准备好开始了吗？",
    "cta.description": "加入社区，探索 AI 智能体的无限可能",
    "cta.button": "立即开始",

    // Footer
    "footer.description": "收录全网最全的 OpenClaw 教程与用例，教会你打造真正懂你的 AI 助理。",
    "footer.sources.title": "内容来源",
    "footer.sources.intro": "精选自开源社区。",
    "footer.sources.usecases": "用例来自",
    "footer.sources.usecases.zh": "中文版",
    "footer.sources.usecases.en": "国际版",
    "footer.sources.skills": "技能来自",
    "footer.sources.sep": "，",
    "footer.sources.skills.clawhub": "ClawHub",
    "footer.sources.skills.repo": "awesome-openclaw-skills",
    "footer.sources.skillhub": "Skill Hub 中国",
    "footer.copyright": "OpenClaw Hub 用例合集",
    "footer.links": "快速链接",
    "footer.support": "支持作者",
    "footer.resources": "资源",
    "footer.community": "社区",
    "footer.rights": "保留所有权利",

    // API 推荐页
    "apiRecommend.title": "模型 API 推荐",
    "apiRecommend.subtitle": "汇总第三方大模型 API 与价格参考，便于选型与成本对比。数据来源于各平台公开信息，仅供参考，请以官网最新为准。",
    "apiRecommend.internationalTitle": "国际主流模型（官方/直连）",
    "apiRecommend.internationalDesc": "价格单位为每百万 token（$/M），输入/输出分开计费，上下文为典型窗口。",
    "apiRecommend.domesticTitle": "国内大模型 API",
    "apiRecommend.domesticDesc": "国内厂商与云平台，价格单位以各官网为准（元/百万 token 或 元/千条等）。",
    "apiRecommend.aggregatorsTitle": "第三方聚合与中转",
    "apiRecommend.aggregatorsDesc": "统一接口、多模型接入、国内可用的聚合或中转平台。",
    "apiRecommend.model": "模型",
    "apiRecommend.provider": "提供商",
    "apiRecommend.input": "输入",
    "apiRecommend.output": "输出",
    "apiRecommend.context": "上下文",
    "apiRecommend.note": "备注",
    "apiRecommend.visit": "访问",
    "apiRecommend.recommended": "推荐",
    "apiRecommend.tipsTitle": "选型建议",
    "apiRecommend.tip1": "轻量任务：GPT-4o mini、Gemini 2.5 Flash 等性价比高。",
    "apiRecommend.tip2": "代码与长文：Claude Sonnet 4/4.5 或 GPT-4 系列。",
    "apiRecommend.tip3": "长上下文：Gemini 2.5 Pro（百万级）、Kimi 等。",
    "apiRecommend.tip4": "成本敏感：DeepSeek V3/R1、国内通义/豆包/混元等，或国内 Claude/GPT 中转。",
    "apiRecommend.disclaimer": "以上价格与平台信息仅供参考，请以各厂商/聚合平台官网最新为准。",
    "apiRecommend.tab.pricing": "价格对比",
    "apiRecommend.tab.aggregators": "聚合与中转",
    "apiRecommend.tab.tips": "选型建议",
    "apiRecommend.aggregatorsAll": "第三方聚合与中转（全网）",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.quickstart": "Get started",
    "nav.usecases": "Scenarios",
    "nav.categories": "Browse by scenario",
    "nav.contribute": "Contribute",
    "nav.about": "About Us",
    "nav.blog": "Tutorials",
    "nav.businessCoop": "Business",
    "businessCoop.title": "OpenClaw Business Cooperation",
    "businessCoop.subtitle": "Tencent T11 · ByteDance 3-1 · AI Coding Expert",
    "businessCoop.scanHint": "Scan the QR code above to add me as a friend.",
    "businessCoop.remark": "Scan to add WeChat, please remark \"OpenClaw Cooperation\"",
    "businessCoop.contactName": "Meng Jian",
    "businessCoop.region": "Mainland China",
    "nav.apiRecommend": "Model API",
    "nav.install": "Install",
    "nav.news": "Manual",
    "nav.changelog": "Changelog",
    "nav.skills": "Featured Skills",
    "nav.github": "GitHub",
    "nav.group.start": "Get started",
    "nav.group.browse": "Browse",
    "nav.quickstart.cta": "Start",
    "lang.switch": "中文",

    "news.title": "Curated news",
    "news.subtitle": "Community and web-shared content about OpenClaw: tutorials, tips, and updates.",
    "news.officialTitle": "Official resources",
    "news.communityTitle": "Community shares",
    "news.searchPlaceholder": "Search by title or description…",
    "news.noResults": "No matches. Try different keywords.",
    "news.empty": "Collecting—suggest links welcome.",
    "news.backHome": "Back to Home",
    "news.category.all": "All",
    "news.category.official": "Official",
    "news.category.research": "Research",
    "news.category.programming": "Programming",
    "news.category.data": "Data",
    "news.category.design": "Design",
    "news.category.productivity": "Productivity",
    "news.sort.hot": "Hot",
    "news.sort.latest": "Latest",
    "news.views": "Views",
    "news.sourceOfficial": "Official",
    "news.filterSkill": "Related skills",
    "news.jumpToOriginal": "Open original",

    // Skills (from VoltAgent/awesome-openclaw-skills)
    "skills.title": "Featured Skills",
    "skills.subtitle": "Curated extensions from ClawHub — filter by category, install with one command",
    "skills.viewall": "View full list on GitHub",
    "skills.source": "Source: awesome-openclaw-skills",
    "skills.category.git": "Git & GitHub",
    "skills.category.productivity": "Productivity",
    "skills.category.communication": "Chat & teamwork",
    "skills.category.devops": "Dev & ops",
    "skills.category.research": "Search & lookup",
    "skills.category.calendar": "Calendar",
    "skills.category.notes": "Notes",
    "skills.operations": "Common operations",
    "skills.required": "Required",
    "skills.pricing.free": "Free",
    "skills.pricing.paid": "Paid",
    "skills.pricing.freemium": "Freemium",

    // Brand
    "brand.name": "OpenClaw Hub",

    // Hero
    "hero.badge": "Essential for OpenClaw",
    "hero.title": "OpenClaw Hub",
    "hero.mainTitle": "Use OpenClaw to build an AI assistant that really gets you",
    "hero.mainTitle.highlight": "OpenClaw",
    "hero.mainSubtitle": "The most comprehensive OpenClaw tutorials and use cases — deploy your AI assistant and put it to work in minutes.",
    "hero.subtitle": "Get the most out of OpenClaw — start here",
    "hero.subtitle.before": "Get the most out of ",
    "hero.subtitle.highlight": "OpenClaw",
    "hero.subtitle.after": " — start here",
    "hero.whatIsTitle": "What is OpenClaw?",
    "hero.whatIsDesc": "A self-hostable, open-source AI assistant: plug it into Feishu, WeChat, or the web to handle docs, search, and tasks — your own small helper.",
    "hero.openSourceBadge": "Open source, self-host",
    "hero.tutorialBadge": "Open source & free · Most comprehensive tutorials",
    "hero.cta.start": "Browse use cases",
    "hero.cta.guide": "How to start",
    "hero.cta.github": "GitHub Repo",
    "hero.stats.usecases": "Use Cases",
    "hero.stats.skills": "Skills",

    // QuickStart
    "quickstart.title": "Get started in 3 steps",
    "quickstart.badge": "Quick Start",
    "quickstart.subtitle": "From zero to running — just follow along",
    "quickstart.step1.title": "Deploy OpenClaw",
    "quickstart.step1.desc": "Choose local or cloud, follow the install page. Done in minutes.",
    "quickstart.step1.cta": "Go to install",
    "quickstart.step2.title": "Install required skills",
    "quickstart.step2.desc": "Install 4 must-have skills (search, lookup, office). Copy-paste commands.",
    "quickstart.step2.cta": "Pick skills",
    "quickstart.step3.title": "Start using",
    "quickstart.step3.desc": "Learn from use cases or chat with AI and let it help you.",
    "quickstart.step3.cta": "See use cases",
    "quickstart.footer.before": "Stuck? ",
    "quickstart.footer.link": "Contact the author",
    "quickstart.footer.after": " — we’ll point you in the right direction.",
    "home.afterSteps": "Below: browse use cases and pick skills.",

    "hero.stats.categories": "Categories",
    "hero.stats.stars": "GitHub Stars",

    // Categories
    "categories.title": "Browse by Category",
    "categories.subtitle": "From office automation to AI creation, find your perfect use case",
    "category.china": "Collaboration Platforms",
    "category.china.desc": "Adapted for Feishu, DingTalk, WeCom, Xiaohongshu",
    "category.social": "Social Media",
    "category.social.desc": "Auto-aggregate content from Reddit, YouTube, X",
    "category.creative": "Creative & Build",
    "category.creative.desc": "Let AI help you create content and build products",
    "category.devops": "Infrastructure & DevOps",
    "category.devops.desc": "Self-healing servers, workflow automation",
    "category.productivity": "Productivity",
    "category.productivity.desc": "Email management, scheduling, personal assistant",
    "category.research": "Research & Learning",
    "category.research.desc": "Knowledge base, market research, earnings tracking",
    "category.finance": "Finance & Trading",
    "category.finance.desc": "Prediction market simulation and backtesting",

    // Use Cases
    "usecases.title": "Featured Use Cases",
    "usecases.subtitle": "Community verified high-quality cases",
    "usecases.viewall": "View All Use Cases",
    "usecases.difficulty": "Difficulty",
    "usecases.difficulty.easy": "Beginner",
    "usecases.difficulty.medium": "Intermediate",
    "usecases.difficulty.hard": "Advanced",

    // Featured
    "featured.title": "Why Choose This Collection?",
    "featured.verified": "Verified",
    "featured.verified.desc": "Every use case tested by the community",
    "featured.china": "China Adapted",
    "featured.china.desc": "Full coverage for Feishu/DingTalk/WeCom",
    "featured.guide": "Complete Guide",
    "featured.guide.desc": "Detailed steps + copyable prompts",
    "featured.beginner": "Beginner Friendly",
    "featured.beginner.desc": "Core concepts explained from scratch",

    // CTA
    "cta.title": "Ready to Get Started?",
    "cta.description": "Join the community and explore the possibilities of AI agents",
    "cta.button": "Get Started",

    // Footer
    "footer.description": "The most comprehensive OpenClaw tutorials and use cases — learn to build an AI assistant that really gets you.",
    "footer.sources.title": "Content sources",
    "footer.sources.intro": "Curated from the open source community. ",
    "footer.sources.usecases": "Use cases: ",
    "footer.sources.usecases.zh": "Chinese",
    "footer.sources.usecases.en": "international",
    "footer.sources.skills": "Skills: ",
    "footer.sources.sep": ". ",
    "footer.sources.skills.clawhub": "ClawHub",
    "footer.sources.skills.repo": "awesome-openclaw-skills",
    "footer.sources.skillhub": "Skill Hub China",
    "footer.copyright": "OpenClaw Hub Use Cases",
    "footer.links": "Quick Links",
    "footer.support": "Support",
    "footer.resources": "Resources",
    "footer.community": "Community",
    "footer.rights": "All rights reserved",

    // API Recommend page
    "apiRecommend.title": "LLM API Comparison",
    "apiRecommend.subtitle": "Third-party LLM APIs and pricing reference for comparison. Data from public sources; check each provider for latest prices.",
    "apiRecommend.internationalTitle": "International models (official / direct)",
    "apiRecommend.internationalDesc": "Prices per million tokens ($/M), input/output separate; context = typical window.",
    "apiRecommend.domesticTitle": "Domestic / China APIs",
    "apiRecommend.domesticDesc": "China providers and cloud platforms; units vary by provider (CNY/M tokens or per 1K calls).",
    "apiRecommend.aggregatorsTitle": "Aggregators & relay platforms",
    "apiRecommend.aggregatorsDesc": "Unified APIs, multi-model access, and China-friendly relay options.",
    "apiRecommend.model": "Model",
    "apiRecommend.provider": "Provider",
    "apiRecommend.input": "Input",
    "apiRecommend.output": "Output",
    "apiRecommend.context": "Context",
    "apiRecommend.note": "Note",
    "apiRecommend.visit": "Visit",
    "apiRecommend.recommended": "Recommended",
    "apiRecommend.tipsTitle": "Recommendations",
    "apiRecommend.tip1": "Light tasks: GPT-4o mini, Gemini 2.5 Flash for best value.",
    "apiRecommend.tip2": "Code & long text: Claude Sonnet 4/4.5 or GPT-4 series.",
    "apiRecommend.tip3": "Long context: Gemini 2.5 Pro (1M), Kimi, etc.",
    "apiRecommend.tip4": "Cost-sensitive: DeepSeek V3/R1, domestic Qwen/Doubao/Hunyuan, or China relay for Claude/GPT.",
    "apiRecommend.disclaimer": "Prices and platforms are for reference only; check each provider for current pricing.",
    "apiRecommend.tab.pricing": "Price Compare",
    "apiRecommend.tab.aggregators": "Aggregators & Relay",
    "apiRecommend.tab.tips": "Tips",
    "apiRecommend.aggregatorsAll": "All aggregators & relay (global)",
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)
const LOCALE_COOKIE = "NEXT_LOCALE"

export function I18nProvider({ children, initialLocale }: { children: ReactNode; initialLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? "zh")

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    if (typeof document !== "undefined") {
      document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=${60 * 60 * 24 * 365}`
    }
  }, [])

  const t = useCallback(
    (key: string): string => {
      return translations[locale][key as keyof (typeof translations)["zh"]] || key
    },
    [locale]
  )

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
