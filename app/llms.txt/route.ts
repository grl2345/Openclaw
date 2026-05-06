import { NextResponse } from "next/server"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.openclaw-s.com"

export const dynamic = "force-static"

export function GET() {
  const body = `# OpenClaw Hub

> 面向新手和爱好者的 OpenClaw 一站式导航站，收录 800+ 精选技能、50+ 场景案例，覆盖部署教程、技能开发、API 选型与最佳实践。
> A curated portal for OpenClaw — 800+ skills, 50+ use cases, install guides, API recommendations and original tutorials.

## 核心导航 / Core Pages

- [首页 / Home](${baseUrl}/): 站点入口与精选内容
- [技能目录 / Skills](${baseUrl}/skills): 800+ OpenClaw 技能浏览与搜索
- [场景案例 / Use Cases](${baseUrl}/usecases): 50+ 真实场景案例
- [安装教程 / Install](${baseUrl}/install): 桌面端与云端部署教程
- [技能使用指南 / Skills Guide](${baseUrl}/skills-guide): 命令、搜索、办公自动化等使用教程
- [API 推荐 / API Recommend](${baseUrl}/api-recommend): AI 模型 API 聚合推荐与对比

## 内容 / Content

- [博客 & 教程 / Blog](${baseUrl}/blog): 原创技术博客与实战教程
- [更新日志 / Changelog](${baseUrl}/changelog): OpenClaw 版本发布说明与升级指南
- [官方手册 / News](${baseUrl}/news): 官方文档链接与社区动态

## 关于 / About

- [关于我们 / About](${baseUrl}/about): 站点使命与团队
- [联系我们 / Contact](${baseUrl}/contact): 邮箱、微信公众号、合作咨询
- [隐私政策 / Privacy](${baseUrl}/privacy)
- [服务条款 / Terms](${baseUrl}/terms)

## Optional

- [Sitemap](${baseUrl}/sitemap.xml)
- [RSS](${baseUrl}/api/rss)
`

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
