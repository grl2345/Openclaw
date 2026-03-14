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
    "nav.quickstart": "如何开始",
    "nav.usecases": "用例合集",
    "nav.categories": "分类浏览",
    "nav.contribute": "贡献指南",
    "nav.about": "关于我们",
    "nav.install": "部署安装",
    "nav.diary": "养虾日记",
    "nav.skills": "精选 Skills",
    "nav.github": "GitHub",
    "lang.switch": "EN",

    // Skills（来源 VoltAgent/awesome-openclaw-skills）
    "skills.title": "精选 Skills",
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
    "brand.name": "OpenClaw Market",

    // Hero
    "hero.badge": "养虾必备",
    "hero.title": "OpenClaw Market",
    "hero.subtitle": "用好 OpenClaw，从这一站开始",
    "hero.description": "精选用例、必装技能、部署指引，照着做就能用。",
    "hero.firstTime": "第一次来？点「如何开始」按 3 步走。",
    "hero.cta.start": "看用例",
    "hero.cta.guide": "如何开始",
    "hero.cta.github": "GitHub 仓库",
    "hero.stats.usecases": "用例数量",

    // QuickStart（新手指南）
    "quickstart.title": "3 步上手",
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
    "footer.description": "OpenClaw Market AI 智能体最佳用例合集，帮助中文用户发现 AI 的无限可能。",
    "footer.sources.title": "内容来源",
    "footer.sources.intro": "精选自开源社区。",
    "footer.sources.usecases": "用例来自",
    "footer.sources.usecases.zh": "中文版",
    "footer.sources.usecases.en": "国际版",
    "footer.sources.skills": "技能来自",
    "footer.sources.sep": "，",
    "footer.sources.skills.clawhub": "ClawHub",
    "footer.sources.skills.repo": "awesome-openclaw-skills",
    "footer.copyright": "OpenClaw Market 用例合集",
    "footer.links": "快速链接",
    "footer.support": "支持作者",
    "footer.resources": "资源",
    "footer.community": "社区",
    "footer.rights": "保留所有权利",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.quickstart": "How to start",
    "nav.usecases": "Use Cases",
    "nav.categories": "Categories",
    "nav.contribute": "Contribute",
    "nav.about": "About Us",
    "nav.install": "Install Guide",
    "nav.diary": "Claw Diary",
    "nav.skills": "Skills",
    "nav.github": "GitHub",
    "lang.switch": "中文",

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
    "brand.name": "OpenClaw Market",

    // Hero
    "hero.badge": "Essential for OpenClaw",
    "hero.title": "OpenClaw Market",
    "hero.subtitle": "Get the most out of OpenClaw — start here",
    "hero.description": "Curated use cases, required skills, install guide. Copy, follow, run.",
    "hero.firstTime": "First time? Click « How to start » and follow 3 steps.",
    "hero.cta.start": "Browse use cases",
    "hero.cta.guide": "How to start",
    "hero.cta.github": "GitHub Repo",
    "hero.stats.usecases": "Use Cases",

    // QuickStart
    "quickstart.title": "Get started in 3 steps",
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
    "footer.description": "OpenClaw Market AI Agent Best Use Cases Collection, helping users discover the possibilities of AI.",
    "footer.sources.title": "Content sources",
    "footer.sources.intro": "Curated from the open source community. ",
    "footer.sources.usecases": "Use cases: ",
    "footer.sources.usecases.zh": "Chinese",
    "footer.sources.usecases.en": "international",
    "footer.sources.skills": "Skills: ",
    "footer.sources.sep": ". ",
    "footer.sources.skills.clawhub": "ClawHub",
    "footer.sources.skills.repo": "awesome-openclaw-skills",
    "footer.copyright": "OpenClaw Market Use Cases",
    "footer.links": "Quick Links",
    "footer.support": "Support",
    "footer.resources": "Resources",
    "footer.community": "Community",
    "footer.rights": "All rights reserved",
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh")

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
