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
    "nav.usecases": "用例合集",
    "nav.categories": "分类浏览",
    "nav.contribute": "贡献指南",
    "nav.about": "关于我们",
    "nav.skills": "精选 Skills",
    "nav.github": "GitHub",
    "lang.switch": "EN",

    // Skills（来源 VoltAgent/awesome-openclaw-skills）
    "skills.title": "精选 Skills",
    "skills.subtitle": "来自 ClawHub 官方技能库的优质扩展，按分类筛选，一键安装",
    "skills.viewall": "在 GitHub 查看完整列表",
    "skills.source": "来源：awesome-openclaw-skills",
    "skills.category.git": "Git & GitHub",
    "skills.category.productivity": "生产力与任务",
    "skills.category.communication": "沟通与协作",
    "skills.category.devops": "DevOps 与云",
    "skills.category.research": "搜索与研究",
    "skills.category.calendar": "日历与日程",
    "skills.category.notes": "笔记与 PKM",
    "skills.operations": "常用操作",

    // Brand
    "brand.name": "OpenClaw Market",

    // Hero
    "hero.badge": "开源 · 社区驱动 · 持续更新",
    "hero.title": "OpenClaw Market",
    "hero.subtitle": "AI 智能体最佳用例合集",
    "hero.description": "40+ 个经过验证的真实场景，手把手教你用 AI 智能体自动化工作与生活",
    "hero.cta.start": "开始探索",
    "hero.cta.github": "GitHub 仓库",
    "hero.stats.usecases": "用例数量",
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
    "footer.copyright": "OpenClaw Market 用例合集",
    "footer.links": "快速链接",
    "footer.resources": "资源",
    "footer.community": "社区",
    "footer.rights": "保留所有权利",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.usecases": "Use Cases",
    "nav.categories": "Categories",
    "nav.contribute": "Contribute",
    "nav.about": "About Us",
    "nav.skills": "Skills",
    "nav.github": "GitHub",
    "lang.switch": "中文",

    // Skills (from VoltAgent/awesome-openclaw-skills)
    "skills.title": "Featured Skills",
    "skills.subtitle": "Curated extensions from ClawHub — filter by category, install with one command",
    "skills.viewall": "View full list on GitHub",
    "skills.source": "Source: awesome-openclaw-skills",
    "skills.category.git": "Git & GitHub",
    "skills.category.productivity": "Productivity & Tasks",
    "skills.category.communication": "Communication",
    "skills.category.devops": "DevOps & Cloud",
    "skills.category.research": "Search & Research",
    "skills.category.calendar": "Calendar & Scheduling",
    "skills.category.notes": "Notes & PKM",
    "skills.operations": "Common operations",

    // Brand
    "brand.name": "OpenClaw Market",

    // Hero
    "hero.badge": "Open Source · Community Driven · Updated",
    "hero.title": "OpenClaw Market",
    "hero.subtitle": "AI Agent Use Cases Collection",
    "hero.description": "40+ verified real-world scenarios to help you automate work and life with AI agents",
    "hero.cta.start": "Explore Now",
    "hero.cta.github": "GitHub Repo",
    "hero.stats.usecases": "Use Cases",
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
    "footer.copyright": "OpenClaw Market Use Cases",
    "footer.links": "Quick Links",
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
