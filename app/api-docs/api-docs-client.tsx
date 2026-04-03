"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Send,
  Webhook,
  Key,
  MessageSquare,
  FileText,
  Zap,
  Package,
  Copy,
  Check,
} from "lucide-react"

// ── API Endpoint data ──────────────────────────────────────────────────────────

interface ApiEndpoint {
  method: "GET" | "POST" | "PUT" | "DELETE"
  path: string
  titleZh: string
  titleEn: string
  descZh: string
  descEn: string
  requestExample?: string
  responseExample?: string
}

interface ApiSection {
  id: string
  icon: React.ElementType
  titleZh: string
  titleEn: string
  descZh: string
  descEn: string
  endpoints: ApiEndpoint[]
}

const apiSections: ApiSection[] = [
  {
    id: "auth",
    icon: Key,
    titleZh: "认证",
    titleEn: "Authentication",
    descZh: "所有 API 请求需要在 Header 中携带 API Key 进行身份验证。",
    descEn: "All API requests require an API Key in the Authorization header.",
    endpoints: [
      {
        method: "POST",
        path: "/api/v1/auth/token",
        titleZh: "获取访问令牌",
        titleEn: "Get Access Token",
        descZh: "使用 API Key 换取短期访问令牌，令牌有效期 24 小时。",
        descEn: "Exchange an API Key for a short-lived access token (24h validity).",
        requestExample: `curl -X POST https://your-openclaw.example.com/api/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "oc_sk_xxxxxxxxxxxx"
  }'`,
        responseExample: `{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expires_at": "2026-04-04T12:00:00Z",
  "token_type": "Bearer"
}`,
      },
    ],
  },
  {
    id: "chat",
    icon: MessageSquare,
    titleZh: "对话",
    titleEn: "Chat",
    descZh: "核心对话接口，支持流式和非流式响应。",
    descEn: "Core chat endpoints supporting streaming and non-streaming responses.",
    endpoints: [
      {
        method: "POST",
        path: "/api/v1/chat/completions",
        titleZh: "发送对话（兼容 OpenAI 格式）",
        titleEn: "Chat Completions (OpenAI-compatible)",
        descZh: "发送消息并获取 AI 回复。请求和响应格式兼容 OpenAI Chat Completions API，可直接使用 OpenAI SDK 对接。",
        descEn: "Send messages and get AI replies. Request/response format is OpenAI Chat Completions API compatible — you can use the OpenAI SDK directly.",
        requestExample: `curl -X POST https://your-openclaw.example.com/api/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o",
    "messages": [
      { "role": "system", "content": "You are a helpful assistant." },
      { "role": "user", "content": "What is OpenClaw?" }
    ],
    "stream": false
  }'`,
        responseExample: `{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "created": 1711680000,
  "model": "gpt-4o",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "OpenClaw is an open-source AI assistant framework..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 25,
    "completion_tokens": 42,
    "total_tokens": 67
  }
}`,
      },
      {
        method: "GET",
        path: "/api/v1/chat/history",
        titleZh: "获取对话历史",
        titleEn: "Get Chat History",
        descZh: "获取指定会话的历史消息列表，支持分页。",
        descEn: "Retrieve message history for a session, with pagination support.",
        requestExample: `curl https://your-openclaw.example.com/api/v1/chat/history?session_id=sess_123&limit=20 \\
  -H "Authorization: Bearer YOUR_TOKEN"`,
        responseExample: `{
  "session_id": "sess_123",
  "messages": [
    {
      "role": "user",
      "content": "Hello",
      "timestamp": "2026-04-03T10:00:00Z"
    },
    {
      "role": "assistant",
      "content": "Hi! How can I help?",
      "timestamp": "2026-04-03T10:00:01Z"
    }
  ],
  "has_more": false
}`,
      },
    ],
  },
  {
    id: "skills",
    icon: Package,
    titleZh: "技能管理",
    titleEn: "Skills",
    descZh: "查询、安装和管理 OpenClaw 技能。",
    descEn: "Query, install, and manage OpenClaw skills.",
    endpoints: [
      {
        method: "GET",
        path: "/api/v1/skills",
        titleZh: "列出已安装技能",
        titleEn: "List Installed Skills",
        descZh: "返回当前实例已安装的所有技能及其状态。",
        descEn: "Returns all installed skills and their status on the current instance.",
        requestExample: `curl https://your-openclaw.example.com/api/v1/skills \\
  -H "Authorization: Bearer YOUR_TOKEN"`,
        responseExample: `{
  "skills": [
    {
      "id": "google-calendar",
      "name": "Google Calendar",
      "version": "1.2.0",
      "status": "active",
      "permissions": ["calendar.read", "calendar.write"]
    },
    {
      "id": "web-search",
      "name": "Web Search",
      "version": "2.0.1",
      "status": "active",
      "permissions": ["network.outbound"]
    }
  ],
  "total": 2
}`,
      },
      {
        method: "POST",
        path: "/api/v1/skills/install",
        titleZh: "安装技能",
        titleEn: "Install a Skill",
        descZh: "通过技能 ID 安装社区技能，可指定版本。",
        descEn: "Install a community skill by ID, optionally specifying a version.",
        requestExample: `curl -X POST https://your-openclaw.example.com/api/v1/skills/install \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "skill_id": "notion-sync",
    "version": "latest"
  }'`,
        responseExample: `{
  "skill_id": "notion-sync",
  "version": "1.3.2",
  "status": "installed",
  "message": "Skill installed successfully. Restart not required."
}`,
      },
    ],
  },
  {
    id: "workflows",
    icon: Zap,
    titleZh: "工作流",
    titleEn: "Workflows",
    descZh: "创建和管理自动化工作流。",
    descEn: "Create and manage automation workflows.",
    endpoints: [
      {
        method: "GET",
        path: "/api/v1/workflows",
        titleZh: "列出工作流",
        titleEn: "List Workflows",
        descZh: "返回所有已定义的工作流及其运行状态。",
        descEn: "Returns all defined workflows and their run status.",
        requestExample: `curl https://your-openclaw.example.com/api/v1/workflows \\
  -H "Authorization: Bearer YOUR_TOKEN"`,
        responseExample: `{
  "workflows": [
    {
      "id": "wf_daily_news",
      "name": "daily-news-digest",
      "status": "active",
      "trigger": "cron: 0 9 * * *",
      "last_run": "2026-04-03T09:00:00Z",
      "last_status": "success"
    }
  ],
  "total": 1
}`,
      },
      {
        method: "POST",
        path: "/api/v1/workflows/{id}/trigger",
        titleZh: "手动触发工作流",
        titleEn: "Trigger Workflow Manually",
        descZh: "手动触发指定工作流执行，可传入输入参数。",
        descEn: "Manually trigger a workflow execution, with optional input parameters.",
        requestExample: `curl -X POST https://your-openclaw.example.com/api/v1/workflows/wf_daily_news/trigger \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input": { "topic": "AI agent frameworks" }
  }'`,
        responseExample: `{
  "run_id": "run_abc456",
  "workflow_id": "wf_daily_news",
  "status": "running",
  "started_at": "2026-04-03T15:30:00Z"
}`,
      },
    ],
  },
  {
    id: "webhooks",
    icon: Webhook,
    titleZh: "Webhook",
    titleEn: "Webhooks",
    descZh: "配置 Webhook 以接收 OpenClaw 事件通知。",
    descEn: "Configure webhooks to receive OpenClaw event notifications.",
    endpoints: [
      {
        method: "POST",
        path: "/api/v1/webhooks",
        titleZh: "创建 Webhook",
        titleEn: "Create Webhook",
        descZh: "注册一个新的 Webhook 端点，选择需要订阅的事件类型。",
        descEn: "Register a new webhook endpoint and select event types to subscribe to.",
        requestExample: `curl -X POST https://your-openclaw.example.com/api/v1/webhooks \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-server.com/webhook",
    "events": ["chat.completed", "workflow.finished", "skill.error"],
    "secret": "whsec_your_secret"
  }'`,
        responseExample: `{
  "id": "wh_789",
  "url": "https://your-server.com/webhook",
  "events": ["chat.completed", "workflow.finished", "skill.error"],
  "status": "active",
  "created_at": "2026-04-03T12:00:00Z"
}`,
      },
    ],
  },
]

// ── SDK Examples ────────────────────────────────────────────────────────────────

interface SdkExample {
  lang: string
  label: string
  code: string
}

const sdkExamples: SdkExample[] = [
  {
    lang: "python",
    label: "Python",
    code: `from openai import OpenAI

# OpenClaw 兼容 OpenAI SDK，只需修改 base_url
client = OpenAI(
    api_key="oc_sk_xxxxxxxxxxxx",
    base_url="https://your-openclaw.example.com/api/v1"
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "你是一个有帮助的助手。"},
        {"role": "user", "content": "用 Python 写一个快速排序"},
    ],
)

print(response.choices[0].message.content)`,
  },
  {
    lang: "javascript",
    label: "Node.js",
    code: `import OpenAI from "openai";

// OpenClaw is OpenAI-compatible — just change the baseURL
const client = new OpenAI({
  apiKey: "oc_sk_xxxxxxxxxxxx",
  baseURL: "https://your-openclaw.example.com/api/v1",
});

const response = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Write a quicksort in TypeScript" },
  ],
});

console.log(response.choices[0].message.content);`,
  },
  {
    lang: "curl",
    label: "cURL",
    code: `curl -X POST https://your-openclaw.example.com/api/v1/chat/completions \\
  -H "Authorization: Bearer oc_sk_xxxxxxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "user", "content": "Hello, OpenClaw!"}
    ]
  }'`,
  },
]

// ── Component ──────────────────────────────────────────────────────────────────

const methodColor: Record<string, string> = {
  GET: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  POST: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  PUT: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  DELETE: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute right-2 top-2 rounded-md border border-border/50 bg-background/80 p-1.5 text-muted-foreground transition-colors hover:text-foreground"
      title="Copy"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  )
}

export function ApiDocsClient() {
  const { locale } = useI18n()
  const isZh = locale === "zh"
  const [activeSdk, setActiveSdk] = useState(0)
  const [expandedEndpoints, setExpandedEndpoints] = useState<Set<string>>(new Set())

  const toggleEndpoint = (key: string) => {
    setExpandedEndpoints((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          <Code2 className="h-4 w-4" />
          {isZh ? "开发者文档" : "Developer Docs"}
        </div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {isZh ? "OpenClaw API 文档" : "OpenClaw API Reference"}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {isZh
            ? "OpenClaw 提供兼容 OpenAI 格式的 REST API，可使用现有的 OpenAI SDK 直接对接"
            : "OpenClaw provides an OpenAI-compatible REST API — use existing OpenAI SDKs directly"}
        </p>
      </header>

      {/* Quick Start - SDK Examples */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">
          {isZh ? "快速开始" : "Quick Start"}
        </h2>
        <div className="rounded-xl border border-border/60 bg-card/50 overflow-hidden">
          {/* SDK tabs */}
          <div className="flex border-b border-border/40">
            {sdkExamples.map((sdk, i) => (
              <button
                key={sdk.lang}
                onClick={() => setActiveSdk(i)}
                className={`px-5 py-3 text-sm font-medium transition-colors ${
                  activeSdk === i
                    ? "border-b-2 border-primary text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {sdk.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <pre className="overflow-x-auto p-5 text-sm leading-relaxed">
              <code>{sdkExamples[activeSdk].code}</code>
            </pre>
            <CopyButton text={sdkExamples[activeSdk].code} />
          </div>
        </div>
      </section>

      {/* Base URL Note */}
      <section className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <h3 className="mb-2 text-sm font-semibold text-primary">
          {isZh ? "Base URL" : "Base URL"}
        </h3>
        <p className="text-sm text-muted-foreground">
          {isZh
            ? "所有 API 端点的基础路径为你的 OpenClaw 实例地址，例如："
            : "All API endpoints are relative to your OpenClaw instance URL:"}
        </p>
        <code className="mt-2 block rounded-md bg-background/50 px-3 py-2 text-sm font-mono">
          https://your-openclaw.example.com/api/v1
        </code>
      </section>

      {/* API Sections */}
      <div className="space-y-12">
        {apiSections.map((section) => {
          const Icon = section.icon
          return (
            <section key={section.id} id={section.id}>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    {isZh ? section.titleZh : section.titleEn}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {isZh ? section.descZh : section.descEn}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {section.endpoints.map((ep) => {
                  const key = `${section.id}-${ep.method}-${ep.path}`
                  const isExpanded = expandedEndpoints.has(key)

                  return (
                    <div
                      key={key}
                      className="rounded-xl border border-border/60 bg-card/50 overflow-hidden"
                    >
                      {/* Endpoint header (clickable) */}
                      <button
                        onClick={() => toggleEndpoint(key)}
                        className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-muted/30"
                      >
                        <Badge
                          variant="outline"
                          className={`shrink-0 font-mono text-[10px] ${methodColor[ep.method]}`}
                        >
                          {ep.method}
                        </Badge>
                        <code className="text-sm font-mono text-foreground">
                          {ep.path}
                        </code>
                        <span className="ml-auto text-sm text-muted-foreground">
                          {isZh ? ep.titleZh : ep.titleEn}
                        </span>
                      </button>

                      {/* Expanded detail */}
                      {isExpanded && (
                        <div className="border-t border-border/40 p-5 space-y-4">
                          <p className="text-sm text-muted-foreground">
                            {isZh ? ep.descZh : ep.descEn}
                          </p>

                          {ep.requestExample && (
                            <div>
                              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                {isZh ? "请求示例" : "Request Example"}
                              </h4>
                              <div className="relative rounded-lg bg-muted/30 border border-border/40">
                                <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
                                  <code>{ep.requestExample}</code>
                                </pre>
                                <CopyButton text={ep.requestExample} />
                              </div>
                            </div>
                          )}

                          {ep.responseExample && (
                            <div>
                              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                {isZh ? "响应示例" : "Response Example"}
                              </h4>
                              <div className="relative rounded-lg bg-muted/30 border border-border/40">
                                <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
                                  <code>{ep.responseExample}</code>
                                </pre>
                                <CopyButton text={ep.responseExample} />
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>

      {/* Footer note */}
      <div className="mt-16 rounded-xl border border-border/60 bg-card/50 p-6 text-center">
        <FileText className="mx-auto mb-3 h-8 w-8 text-muted-foreground/50" />
        <p className="text-sm text-muted-foreground">
          {isZh
            ? "API 文档持续完善中。更多端点和 SDK 示例即将更新。如需帮助，请访问 GitHub Discussions。"
            : "API docs are continuously being improved. More endpoints and SDK examples coming soon. For help, visit GitHub Discussions."}
        </p>
      </div>
    </div>
  )
}
