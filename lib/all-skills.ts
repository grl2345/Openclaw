// 占位文件 - 后台 Agent 正在生成完整 1000 条数据
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

export const allSkillCategories: { id: AllSkillCategoryId; nameZh: string; nameEn: string }[] = [
  { id: "git", nameZh: "Git · 代码", nameEn: "Git & Code" },
  { id: "productivity", nameZh: "效率 · 办公", nameEn: "Productivity" },
  { id: "communication", nameZh: "沟通 · 协作", nameEn: "Communication" },
  { id: "devops", nameZh: "开发 · 运维", nameEn: "DevOps & Cloud" },
  { id: "research", nameZh: "搜索 · 调研", nameEn: "Search & Research" },
  { id: "calendar", nameZh: "日历 · 日程", nameEn: "Calendar" },
  { id: "notes", nameZh: "笔记 · 知识库", nameEn: "Notes & PKM" },
  { id: "database", nameZh: "数据库", nameEn: "Database" },
  { id: "analytics", nameZh: "数据分析", nameEn: "Analytics" },
  { id: "ai-tools", nameZh: "AI 工具", nameEn: "AI Tools" },
  { id: "finance", nameZh: "金融 · 支付", nameEn: "Finance" },
  { id: "social", nameZh: "社交媒体", nameEn: "Social Media" },
  { id: "security", nameZh: "安全 · 权限", nameEn: "Security" },
  { id: "marketing", nameZh: "营销 · 运营", nameEn: "Marketing" },
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

export const allSkills: AllSkill[] = []
