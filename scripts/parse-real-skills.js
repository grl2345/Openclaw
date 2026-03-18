#!/usr/bin/env node
// 解析 awesome-openclaw-skills README.md，提取真实技能数据
// 生成 lib/all-skills.ts

const fs = require('fs')
const path = require('path')

const readme = fs.readFileSync('/tmp/awesome-skills.md', 'utf-8')

// 类别映射
const categoryMap = {
  'Git & GitHub': 'git',
  'Coding Agents & IDEs': 'productivity',
  'Browser & Automation': 'browser',
  'Web & Frontend Development': 'devops',
  'DevOps & Cloud': 'devops',
  'Image & Video Generation': 'media',
  'Apple Apps & Services': 'productivity',
  'Search & Research': 'research',
  'Clawdbot Tools': 'cli',
  'CLI Utilities': 'cli',
  'Marketing & Sales': 'marketing',
  'Productivity & Tasks': 'productivity',
  'AI & LLMs': 'ai-tools',
  'Data & Analytics': 'analytics',
  'Finance': 'finance',
  'Media & Streaming': 'media',
  'Notes & PKM': 'notes',
  'iOS & macOS Development': 'productivity',
  'Transportation': 'iot',
  'Personal Development': 'health',
  'Agent-to-Agent Protocols': 'communication',
  'Health & Fitness': 'health',
  'Communication': 'communication',
  'Speech & Transcription': 'media',
  'Smart Home & IoT': 'iot',
  'Shopping & E-commerce': 'ecommerce',
  'Calendar & Scheduling': 'calendar',
  'PDF & Documents': 'docs',
  'Self-Hosted & Automation': 'devops',
  'Security & Passwords': 'security',
  'Moltbook': 'social',
  'Gaming': 'gaming',
}

// 提取技能
const skills = []
const seenIds = new Set()

// 匹配 markdown 列表项: - [name](url) - description
const skillRegex = /^- \[([^\]]+)\]\(([^)]+)\)\s*-\s*(.+)$/gm

// 先找到当前类别
let currentCategory = 'productivity'
const lines = readme.split('\n')

for (let i = 0; i < lines.length; i++) {
  const line = lines[i]

  // 检测类别标题
  const catMatch = line.match(/<h3[^>]*>([^<]+)<\/h3>/)
  if (catMatch) {
    const catName = catMatch[1].trim()
    if (categoryMap[catName]) {
      currentCategory = categoryMap[catName]
    }
  }

  // 检测技能条目
  const skillMatch = line.match(/^- \[([^\]]+)\]\(([^)]+)\)\s*-\s*(.+)$/)
  if (skillMatch) {
    const [, name, url, desc] = skillMatch
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

    if (seenIds.has(id) || !id) continue
    seenIds.add(id)

    // 清理描述
    const cleanDesc = desc.replace(/\*\*/g, '').trim()

    // 生成中文名和中文描述（简单翻译标记）
    const zhName = name
    const zhDesc = cleanDesc

    // 提取标签
    const tags = []
    if (url.includes('clawskills.sh')) {
      const slugMatch = url.match(/\/skills\/([^/]+)$/)
      if (slugMatch) {
        const parts = slugMatch[1].split('-')
        // 取前2-3个有意义的词作为标签
        tags.push(name.split(/[-\s]/).slice(0, 2).join(' '))
      }
    }
    if (currentCategory === 'git') tags.push('Git')
    if (currentCategory === 'devops') tags.push('DevOps')
    if (currentCategory === 'browser') tags.push('Browser')
    if (currentCategory === 'research') tags.push('Research')
    if (currentCategory === 'media') tags.push('Media')
    if (currentCategory === 'productivity') tags.push('Productivity')
    if (currentCategory === 'communication') tags.push('Communication')
    if (currentCategory === 'cli') tags.push('CLI')
    if (currentCategory === 'marketing') tags.push('Marketing')
    if (currentCategory === 'ai-tools') tags.push('AI')
    if (currentCategory === 'finance') tags.push('Finance')
    if (currentCategory === 'security') tags.push('Security')

    // 确定定价
    const pricing = cleanDesc.toLowerCase().includes('free') ? 'free'
      : cleanDesc.toLowerCase().includes('paid') || cleanDesc.toLowerCase().includes('$') ? 'freemium'
      : 'free'

    skills.push({
      id,
      name: { zh: zhName, en: name },
      description: { zh: zhDesc, en: cleanDesc },
      category: currentCategory,
      tags: tags.slice(0, 3),
      operations: [`clawhub install ${name.toLowerCase().replace(/\s+/g, '-')}`],
      externalUrl: url,
      pricing,
    })
  }
}

console.log(`Parsed ${skills.length} real skills`)

// 生成 TypeScript 文件
const categories = [
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
  { id: "media", nameZh: "媒体 · 创作", nameEn: "Media & Creative" },
  { id: "browser", nameZh: "浏览器 · 自动化", nameEn: "Browser & Automation" },
  { id: "education", nameZh: "教育 · 学习", nameEn: "Education & Learning" },
  { id: "health", nameZh: "健康 · 生活", nameEn: "Health & Life" },
  { id: "iot", nameZh: "智能家居 · IoT", nameEn: "Smart Home & IoT" },
  { id: "gaming", nameZh: "游戏", nameEn: "Gaming" },
  { id: "ecommerce", nameZh: "电商 · 购物", nameEn: "E-commerce" },
  { id: "design", nameZh: "设计 · UI", nameEn: "Design & UI" },
  { id: "docs", nameZh: "文档 · PDF", nameEn: "Documents & PDF" },
  { id: "translation", nameZh: "翻译 · 语言", nameEn: "Translation & Language" },
  { id: "cli", nameZh: "CLI 工具", nameEn: "CLI Utilities" },
]

const catIds = categories.map(c => `  | "${c.id}"`).join('\n')

let output = `// 真实 Skills 数据 - 来源：VoltAgent/awesome-openclaw-skills（5,366+ 真实技能）
// https://github.com/VoltAgent/awesome-openclaw-skills
// 所有链接均为真实可访问的 ClawHub 技能页面
// 共 ${skills.length} 个技能，覆盖 ${categories.length} 大类

export type AllSkillCategoryId =
${catIds}

export const allSkillCategories: { id: AllSkillCategoryId; nameZh: string; nameEn: string }[] = ${JSON.stringify(categories, null, 2)}

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

export const allSkills: AllSkill[] = ${JSON.stringify(skills, null, 2)}
`

const outPath = path.join(__dirname, '..', 'lib', 'all-skills.ts')
fs.writeFileSync(outPath, output)
console.log(`Written to ${outPath}`)

// 统计各类别
const catCount = {}
skills.forEach(s => {
  catCount[s.category] = (catCount[s.category] || 0) + 1
})
console.log('Category distribution:')
Object.entries(catCount).sort((a,b) => b[1]-a[1]).forEach(([k,v]) => {
  console.log(`  ${k}: ${v}`)
})
