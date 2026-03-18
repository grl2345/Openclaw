import fs from 'fs';

let content = fs.readFileSync('lib/all-skills.ts', 'utf8');

// Translation map for well-known skill names and descriptions
const translations = {
  'google-calendar': { name: '谷歌日历', desc: '管理 Google 日历事件、日程安排和提醒，支持创建、查询和更新日程。' },
  'google-home': { name: '谷歌智能家居', desc: '控制 Google Nest 智能设备，管理智能家居场景。' },
  'google-analytics-api': { name: '谷歌分析 API', desc: 'Google Analytics API 集成，获取网站流量和用户行为数据。' },
  '1password': { name: '1Password 密码管理', desc: '安全管理密码、密钥和敏感信息，支持自动填充和团队共享。' },
  'academic-research': { name: '学术研究助手', desc: '辅助学术论文搜索、文献综述和研究分析。' },
  'academic-research-hub': { name: '学术研究中心', desc: '一站式学术研究平台，整合多个学术数据库和引用管理。' },
  'academic-writer': { name: '学术写作助手', desc: '辅助学术论文写作，支持格式化、引用和语法优化。' },
  'academic-writing': { name: '学术论文写作', desc: '学术写作全流程支持，从大纲到终稿。' },
  'academic-writing-refiner': { name: '学术写作优化', desc: '优化学术文章的表达、逻辑和格式。' },
  '12306': { name: '12306 火车票助手', desc: '查询火车票余票、时刻表，辅助抢票和出行规划。' },
  'a-share-real-time-data': { name: 'A股实时行情', desc: '获取 A 股实时行情数据、K线图和技术指标。' },
  'a-share-short-decision': { name: 'A股短线决策', desc: '基于技术分析的 A 股短线交易决策辅助工具。' },
  '2nd-brain': { name: '第二大脑笔记', desc: '构建个人知识库，智能管理和检索笔记与想法。' },
  'agent-commons': { name: '智能体公共库', desc: '查阅、提交、扩展和质疑推理链的公共智能体工具。' },
  'agent-team-orchestration': { name: '多智能体协作编排', desc: '编排多智能体团队，定义角色、任务生命周期和交接协议。' },
  'agentdo': { name: '智能体任务队列', desc: '发布任务给其他 AI 智能体，或从任务队列领取工作。' },
  'agentgate': { name: '智能体网关', desc: '智能体访问控制和流量管理网关。' },
  'airadar': { name: 'AI 雷达监控', desc: 'AI 项目和趋势实时监控与预警。' },
  'moltbot-docker': { name: 'Docker 容器管理', desc: '管理 Docker 容器的启动、停止、日志和监控。' },
  'better-notion': { name: 'Notion 增强版', desc: '增强版 Notion 集成，支持高级查询和自动化操作。' },
  'adaptive-learning-agents': { name: '自适应学习代理', desc: '根据用户行为自动调整学习策略的智能代理。' },
  'adhd-assistant': { name: 'ADHD 专注助手', desc: '帮助 ADHD 用户保持专注、管理任务和时间。' },
  'accessibility-toolkit': { name: '无障碍工具包', desc: '网页和应用无障碍检测与优化工具。' },
  'activity-analyzer': { name: '活动分析器', desc: '分析用户活动数据，生成洞察报告。' },
  'actual-budget': { name: '实际预算管理', desc: '个人和家庭预算管理，支持账单追踪和支出分析。' },
  'ad-ready': { name: '广告创意生成', desc: '快速生成广告文案和创意素材。' },
  'adaptive-reasoning': { name: '自适应推理', desc: '根据上下文动态调整推理策略的智能引擎。' },
};

// For each skill, update zh name and description
for (const [id, trans] of Object.entries(translations)) {
  const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Update name.zh
  const nameRegex = new RegExp(
    '("id":\\s*"' + escapedId + '"[\\s\\S]*?"name":\\s*\\{[\\s\\S]*?"zh":\\s*)"[^"]*"'
  );
  content = content.replace(nameRegex, '$1"' + trans.name + '"');

  // Update description.zh
  const descRegex = new RegExp(
    '("id":\\s*"' + escapedId + '"[\\s\\S]*?"description":\\s*\\{[\\s\\S]*?"zh":\\s*)"[^"]*"'
  );
  content = content.replace(descRegex, '$1"' + trans.desc + '"');
}

fs.writeFileSync('lib/all-skills.ts', content);
console.log('Updated skill Chinese translations');
