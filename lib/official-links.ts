/**
 * OpenClaw 官方资源：内容来源、官方指导
 * 用于精选资讯页「官方指导」区块
 */
export interface OfficialLink {
  id: string
  titleZh: string
  titleEn: string
  url: string
  introZh: string
  introEn: string
}

export const OFFICIAL_LINKS: OfficialLink[] = [
  {
    id: "docs",
    titleZh: "OpenClaw 官方文档",
    titleEn: "OpenClaw Docs",
    url: "https://docs.openclaw.ai",
    introZh: "最权威的学习资源，从安装、配置到进阶用法全覆盖。包含概念说明、API 说明与最佳实践，遇到问题先查这里。",
    introEn: "Authoritative docs covering install, config, and advanced usage. Concepts, API reference, and best practices—check here first.",
  },
  {
    id: "github",
    titleZh: "OpenClaw GitHub 仓库",
    titleEn: "OpenClaw GitHub",
    url: "https://github.com/openclaw/openclaw",
    introZh: "源码、Issue、Release 与讨论均在此。可参与贡献、提 Bug 或查看版本更新说明与 Roadmap。",
    introEn: "Source code, issues, releases, and discussions. Contribute, report bugs, or check release notes and roadmap.",
  },
  {
    id: "quickstart",
    titleZh: "OpenClaw 快速开始",
    titleEn: "Quick Start",
    url: "https://docs.openclaw.ai/start/getting-started",
    introZh: "官方推荐的新手入门路径：从环境准备到第一次对话，按步骤完成即可跑通。",
    introEn: "Official path for beginners: from environment setup to first conversation, step by step.",
  },
  {
    id: "docker",
    titleZh: "OpenClaw Docker 部署",
    titleEn: "Docker Install",
    url: "https://docs.openclaw.ai/install/docker",
    introZh: "使用 Docker 一键部署的详细指南，包含镜像拉取、环境变量与常用命令说明。",
    introEn: "Step-by-step Docker deployment: image pull, environment variables, and common commands.",
  },
  {
    id: "faq",
    titleZh: "OpenClaw 常见问题",
    titleEn: "FAQ",
    url: "https://docs.openclaw.ai/help/faq",
    introZh: "部署、连接飞书/微信、模型配置等常见问题与解答，遇到报错可先在此检索。",
    introEn: "Common questions on deployment, Feishu/WeChat setup, model config, and troubleshooting.",
  },
  {
    id: "updating",
    titleZh: "OpenClaw 更新指南",
    titleEn: "Updating Guide",
    url: "https://docs.openclaw.ai/install/updating",
    introZh: "如何平滑升级到新版本、注意事项与回滚方式，避免升级导致服务不可用。",
    introEn: "How to upgrade safely, what to watch for, and how to roll back if needed.",
  },
  {
    id: "wizard",
    titleZh: "OpenClaw 配置向导",
    titleEn: "Config Wizard",
    url: "https://docs.openclaw.ai/start/wizard",
    introZh: "交互式配置向导，按步骤选择部署方式、模型与集成渠道，生成对应配置。",
    introEn: "Interactive wizard: choose deployment, model, and integrations step by step.",
  },
  {
    id: "vision",
    titleZh: "OpenClaw 愿景文档",
    titleEn: "Vision",
    url: "https://github.com/openclaw/openclaw/blob/main/VISION.md",
    introZh: "了解 OpenClaw 的产品定位、设计哲学与长期方向，适合贡献者与深度用户阅读。",
    introEn: "Product vision, design philosophy, and long-term direction for contributors and power users.",
  },
  {
    id: "discord",
    titleZh: "OpenClaw Discord 社区",
    titleEn: "Discord Community",
    url: "https://discord.gg/clawd",
    introZh: "官方 Discord 社区，可提问、交流用法与参与活动，获取一手动态与答疑。",
    introEn: "Official Discord for questions, tips, and events. Get updates and help from the team.",
  },
  {
    id: "showcase",
    titleZh: "OpenClaw 案例展示",
    titleEn: "Showcase",
    url: "https://docs.openclaw.ai/start/showcase",
    introZh: "官方收集的真实用户使用案例与场景，可参考他人用法或提交自己的案例。",
    introEn: "Curated user cases and scenarios. See how others use OpenClaw or submit your own.",
  },
]
