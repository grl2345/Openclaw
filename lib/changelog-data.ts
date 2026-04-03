export interface ChangelogEntry {
  slug: string
  version: string
  releaseDate: string
  releasedBy: string
  contributorCount: number
  coverImage: string
  githubUrl: string
  tagline: { zh: string; en: string }
  summary: { zh: string; en: string }
  highlights: { icon: string; zh: string; en: string }[]
  sections: ChangelogSection[]
}

export interface ChangelogSection {
  id: string
  type: "breaking" | "feature" | "improvement" | "fix" | "upgrade"
  title: { zh: string; en: string }
  items: ChangelogItem[]
}

export interface ChangelogItem {
  title: { zh: string; en: string }
  body: { zh: string; en: string }
  code?: string
  badge?: "breaking" | "new" | "improved" | "fixed"
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    slug: "v2026-4-2",
    version: "v2026.4.2",
    releaseDate: "2026-04-02",
    releasedBy: "steipete",
    contributorCount: 27,
    coverImage: "/logo.webp",
    githubUrl: "https://github.com/openclaw/openclaw/releases/tag/v2026.4.2",
    tagline: {
      zh: "更少臃肿，更多龙虾。",
      en: "Less bloat. More lobster.",
    },
    summary: {
      zh: "OpenClaw v2026.4.2 是一次专注于基础设施健壮性的重要版本。核心亮点包括：恢复并完善了 Durable Task Flow 任务编排引擎、收紧了原生执行审批机制、加固了多个 AI 提供商的传输层安全，并大幅收窄了插件激活边界，同时修复了一批影响 Windows 执行与 WhatsApp 附件传递的关键 Bug。共有 27 位贡献者参与了本次发布。",
      en: "OpenClaw v2026.4.2 is a significant release focused on infrastructure robustness. Key highlights include restoring and refining the Durable Task Flow orchestration engine, tightening native execution approval mechanisms, hardening transport-layer security across multiple AI providers, narrowing plugin activation boundaries, and fixing critical bugs affecting Windows execution and WhatsApp attachment delivery. 27 contributors participated in this release.",
    },
    highlights: [
      { icon: "🔄", zh: "Durable Task Flow 任务编排", en: "Durable Task Flow orchestration" },
      { icon: "🔓", zh: "更安全的原生执行默认值 + 审批", en: "Better native exec defaults + approvals" },
      { icon: "🤖", zh: "Copilot · Kimi · 多提供商加固", en: "Copilot + Kimi + provider hardening" },
      { icon: "🔌", zh: "更严格的插件激活边界", en: "Tighter plugin activation boundaries" },
      { icon: "🛡️", zh: "提供商传输层与路由加固", en: "Hardened provider transport + routing" },
    ],
    sections: [
      {
        id: "breaking",
        type: "breaking",
        title: { zh: "破坏性变更", en: "Breaking Changes" },
        items: [
          {
            badge: "breaking",
            title: {
              zh: "xAI 插件配置路径迁移",
              en: "xAI Plugin Settings Migration",
            },
            body: {
              zh: "原先存放于核心层 `tools.web.x_search.*` 的 xAI 搜索配置，已迁移至插件自有路径 `plugins.entries.xai.config.xSearch.*`。同时，认证方式统一使用 `plugins.entries.xai.config.webSearch.apiKey` 或环境变量 `XAI_API_KEY`。\n\n**为什么要做这个改动？** 将配置所有权还给插件本身，可以避免核心层因平台差异产生无谓耦合。旧路径的权威性配置如果被插件静默覆盖，往往是难以定位的 Bug 根源。迁移完成后，插件可以独立演进，核心层不再需要感知具体工具的配置细节。\n\n运行 `openclaw doctor --fix` 可自动完成迁移。",
              en: "The legacy `tools.web.x_search.*` configuration has moved to plugin-owned paths at `plugins.entries.xai.config.xSearch.*`. Authentication standardizes on `plugins.entries.xai.config.webSearch.apiKey` or the `XAI_API_KEY` environment variable.\n\n**Why this change?** Returning configuration ownership to the plugin itself prevents unnecessary coupling in the core layer caused by platform differences. If a plugin silently overrides authoritative config in the legacy core path, it often becomes a hard-to-trace bug. After migration, plugins can evolve independently and the core no longer needs to be aware of tool-specific configuration details.\n\nRun `openclaw doctor --fix` for automatic migration.",
            },
            code: "# 自动迁移\nopenclaw doctor --fix\n\n# 手动验证新路径\nopenclaw config get plugins.entries.xai.config.xSearch",
          },
          {
            badge: "breaking",
            title: {
              zh: "Firecrawl Web Fetch 配置路径迁移",
              en: "Firecrawl Web Fetch Migration",
            },
            body: {
              zh: "Firecrawl 的 Web Fetch 配置从 `tools.web.fetch.firecrawl.*` 迁移至 `plugins.entries.firecrawl.config.webFetch.*`。此外，`web_fetch` 的回退路由从原先的「Firecrawl 独占」模式，改为通过新的 fetch-provider 边界进行分发，允许用户配置多个 fetch provider 互为备份。\n\n**实际影响：** 如果你在配置文件里手写了 `tools.web.fetch.firecrawl.*`，升级后该配置将被忽略，请务必在升级前运行迁移命令。",
              en: "Configuration previously at `tools.web.fetch.firecrawl.*` now resides in `plugins.entries.firecrawl.config.webFetch.*`. Additionally, the `web_fetch` fallback routing has shifted from the previous 'Firecrawl-exclusive' model to dispatch through a new fetch-provider boundary, allowing multiple fetch providers to act as fallbacks for each other.\n\n**Practical impact:** If you have manually written `tools.web.fetch.firecrawl.*` in your config file, this configuration will be ignored after upgrading. Be sure to run the migration command before upgrading.",
            },
            code: "# 升级前先迁移\nopenclaw doctor --fix\n\n# 验证 Firecrawl 新路径\nopenclaw config get plugins.entries.firecrawl.config.webFetch",
          },
        ],
      },
      {
        id: "features",
        type: "feature",
        title: { zh: "核心新特性", en: "Major New Features" },
        items: [
          {
            badge: "new",
            title: {
              zh: "Durable Task Flow 任务编排引擎（恢复 + 增强）",
              en: "Durable Task Flow Infrastructure (Restored & Enhanced)",
            },
            body: {
              zh: "Task Flow 是 OpenClaw 最重要的基础设施之一，允许将复杂任务拆解为多个「流」并在后台持久化执行，而不依赖 LLM 的单次会话上下文。此次版本对其进行了全面重建：\n\n- **Managed vs. Mirrored 同步模式**：Managed 模式由 OpenClaw 运行时完全接管流的生命周期；Mirrored 模式则允许外部系统驱动流的状态变化，OpenClaw 作为从属方跟踪状态。两种模式可以在不同场景下灵活切换。\n- **持久化流状态追踪**：即使 OpenClaw 重启，正在执行的 Task Flow 也能从中断点恢复，而不是从头开始。对于耗时数小时的后台任务（例如批量爬取、文档处理），这一特性极为关键。\n- **Revision 管理**：每次流定义的变更都会生成新的 Revision，允许并行运行不同版本的流，同时保留历史快照供回溯。\n- **`openclaw flows` 检查与恢复原语**：新的 CLI 子命令允许列出、检查、暂停和恢复后台流，无需重启整个服务。",
              en: "Task Flow is one of OpenClaw's most important infrastructure pieces, allowing complex tasks to be broken down into multiple 'flows' that execute durably in the background without relying on a single LLM session context. This release features a complete rebuild:\n\n- **Managed vs. Mirrored sync modes**: Managed mode gives the OpenClaw runtime full control over the flow lifecycle; Mirrored mode allows external systems to drive flow state changes while OpenClaw tracks state as a follower. Both modes can be flexibly switched between for different scenarios.\n- **Durable flow state tracking**: Even if OpenClaw restarts, in-progress Task Flows can resume from the interruption point rather than starting over. This is critical for long-running background tasks (e.g., batch scraping, document processing).\n- **Revision management**: Each change to a flow definition generates a new Revision, allowing different versions of a flow to run in parallel while retaining historical snapshots for rollback.\n- **`openclaw flows` inspection & recovery primitives**: New CLI subcommands allow listing, inspecting, pausing, and resuming background flows without restarting the entire service.",
            },
            code: "# 列出所有后台流\nopenclaw flows list\n\n# 检查特定流的状态\nopenclaw flows inspect <flow-id>\n\n# 从中断点恢复流\nopenclaw flows resume <flow-id>",
          },
          {
            badge: "new",
            title: {
              zh: "Android 助理集成（Google Assistant App Actions）",
              en: "Android Assistant Integration (Google Assistant App Actions)",
            },
            body: {
              zh: "OpenClaw 现在支持作为 Android Google Assistant 的 App Action 目标。这意味着用户可以直接通过语音或 Assistant 触发 OpenClaw，并将 prompt 直接注入聊天输入框，无需手动切换 App。\n\n**技术细节：** 本次新增了 assistant-role 入口点和 Google Assistant App Actions 元数据声明。当系统收到 Assistant 触发事件时，OpenClaw 会解析 Intent 参数并将其转化为 chat composer 的预填充内容，用户只需确认即可执行。\n\n**典型场景：** 「嘿 Google，让 OpenClaw 总结一下我今天的邮件」—— 这类需要跨应用协作的任务，现在可以无缝完成。",
              en: "OpenClaw now supports being a target for Android Google Assistant App Actions. This means users can trigger OpenClaw directly through voice or Assistant and inject prompts directly into the chat composer without manually switching apps.\n\n**Technical details:** This adds assistant-role entrypoints and Google Assistant App Actions metadata declarations. When the system receives an Assistant trigger event, OpenClaw parses Intent parameters and converts them into pre-filled content for the chat composer — the user only needs to confirm execution.\n\n**Typical scenario:** 'Hey Google, have OpenClaw summarize my emails today' — tasks that require cross-app collaboration can now be completed seamlessly.",
            },
          },
          {
            badge: "new",
            title: {
              zh: "插件回复拦截：before_agent_reply Hook",
              en: "Plugin Reply Interception: before_agent_reply Hook",
            },
            body: {
              zh: "新增 `before_agent_reply` 钩子，允许插件在 LLM 生成回复之前进行拦截，并用合成回复（Synthetic Reply）直接短路返回，完全绕过 LLM 调用。\n\n**使用场景：**\n- 缓存常见问题的预设答案，跳过 LLM 以节省 Token；\n- 对特定格式的输入（如命令式 prompt）直接由插件处理并返回结构化数据；\n- 合规过滤：如果检测到敏感内容，在到达 LLM 之前返回拒绝提示。\n\n**与 `after_agent_reply` 的区别：** `after_agent_reply` 是在 LLM 已经生成回复之后修改，而 `before_agent_reply` 可以完全跳过 LLM 调用，成本更低，延迟更短。",
              en: "The new `before_agent_reply` hook allows plugins to intercept before the LLM generates a reply and return a synthetic reply that completely short-circuits the LLM call.\n\n**Use cases:**\n- Cache preset answers for common questions, skipping LLM calls to save tokens;\n- For specific formatted inputs (e.g., command-style prompts), have the plugin handle them directly and return structured data;\n- Compliance filtering: if sensitive content is detected, return a rejection prompt before it reaches the LLM.\n\n**Difference from `after_agent_reply`:** `after_agent_reply` modifies after the LLM has already generated a reply, while `before_agent_reply` can completely skip the LLM call, resulting in lower cost and lower latency.",
            },
            code: "// 插件示例：拦截特定命令\nexport const beforeAgentReply: Hook = async (ctx) => {\n  if (ctx.userMessage.startsWith('/status')) {\n    return { synthetic: true, reply: await getSystemStatus() }\n  }\n  return null // 不拦截，继续走 LLM\n}",
          },
          {
            badge: "new",
            title: {
              zh: "Provider Runtime Hooks：插件自有重放 Hook",
              en: "Provider Runtime Hooks: Plugin-Owned Replay Surfaces",
            },
            body: {
              zh: "Provider Runtime 现在暴露了三类新的插件自有钩子挂载点，允许插件精细控制 AI 提供商的行为：\n\n1. **Transcript Policy Hook**：在回复写入对话历史之前，插件可以决定哪些内容应该保留或裁剪，避免敏感信息残留在上下文中。\n2. **Cleanup Hook**：提供商会话结束时的清理逻辑，插件可以在此释放资源或上报遥测。\n3. **Reasoning-Mode Dispatch Hook**：当用户请求「思考模式」（如 Claude Extended Thinking、o1 系列）时，插件可以拦截并注入自定义的推理前置 prompt，或切换为不同的 provider endpoint。",
              en: "The Provider Runtime now exposes three new categories of plugin-owned hook mounting points, allowing plugins to fine-grained control AI provider behavior:\n\n1. **Transcript Policy Hook**: Before replies are written to conversation history, plugins can decide what content should be retained or trimmed, preventing sensitive information from persisting in context.\n2. **Cleanup Hook**: Cleanup logic when a provider session ends; plugins can release resources or report telemetry here.\n3. **Reasoning-Mode Dispatch Hook**: When users request 'thinking mode' (e.g., Claude Extended Thinking, o1 series), plugins can intercept and inject custom reasoning pre-prompts, or switch to a different provider endpoint.",
            },
          },
        ],
      },
      {
        id: "improvements",
        type: "improvement",
        title: { zh: "重要改进", en: "Notable Improvements" },
        items: [
          {
            badge: "improved",
            title: {
              zh: "Matrix 消息：符合规范的 m.mentions 元数据",
              en: "Matrix Messaging: Spec-Compliant m.mentions Metadata",
            },
            body: {
              zh: "Matrix 协议要求通过 `m.mentions` 字段来触发精准的用户通知推送。此前 OpenClaw 的 Matrix 集成在多种消息类型下未能正确填充该字段，导致 @mention 不触发通知。\n\n本次修复覆盖了以下场景：文本发送、媒体标题（caption）、消息编辑、投票回退消息（poll fallback）、以及 action 触发的编辑。现在无论哪种消息路径，`m.mentions` 都会被正确注入，确保 Matrix 服务器能可靠地派发推送通知。",
              en: "The Matrix protocol requires the `m.mentions` field to trigger precise user notification pushes. Previously, OpenClaw's Matrix integration failed to properly populate this field for multiple message types, causing @mentions not to trigger notifications.\n\nThis fix covers the following scenarios: text sends, media captions, message edits, poll fallback messages, and action-driven edits. Now regardless of the message path, `m.mentions` is correctly injected, ensuring Matrix servers can reliably dispatch push notifications.",
            },
          },
          {
            badge: "improved",
            title: {
              zh: "飞书协作：文档评论事件流 + 线程内回复",
              en: "Feishu Collaboration: Drive Comment-Event Flow + In-Thread Replies",
            },
            body: {
              zh: "飞书（Lark）云文档的评论场景是国内企业用户的高频需求。此前 OpenClaw 对飞书 Drive 事件的处理缺乏线程上下文，回复往往落在错误的层级。\n\n本次新增了专用的 Drive 评论事件流，能够正确解析评论所属的文档版本、评论 ID 和线程 ID，并将 OpenClaw 的回复精准投递到对应的评论线程中，而不是在文档顶层新建评论。对于需要在飞书文档中进行 AI 审阅、AI 批注的工作流，这是一个关键改进。",
              en: "Feishu (Lark) cloud document comment scenarios are a high-frequency need for domestic enterprise users. Previously, OpenClaw's handling of Feishu Drive events lacked thread context, causing replies to often land at the wrong level.\n\nThis release adds a dedicated Drive comment-event flow that correctly parses the document version, comment ID, and thread ID that a comment belongs to, and precisely delivers OpenClaw's reply to the corresponding comment thread rather than creating a new comment at the document top level. This is a critical improvement for workflows requiring AI review or AI annotation within Feishu documents.",
            },
          },
          {
            badge: "improved",
            title: {
              zh: "WhatsApp：扩展 MIME 类型映射 + 未知类型优雅降级",
              en: "WhatsApp: Extended MIME Mappings + Graceful Fallback for Unknown Types",
            },
            body: {
              zh: "WhatsApp 的附件传递依赖准确的 MIME 类型映射。此前 OpenClaw 的映射表缺少 HTML、XML、CSS 等常见开发者文件类型，导致发送这类文件时附件被丢弃（静默失败）。\n\n本次更新：\n- 补充了 `text/html`、`application/xml`、`text/css` 等 MIME 映射；\n- 对于仍未覆盖的类型，改为优雅降级（fallback to `application/octet-stream`）而非静默丢弃。用户会收到「无法预览，但可下载」的提示，而不是附件凭空消失。",
              en: "WhatsApp attachment delivery depends on accurate MIME type mappings. Previously, OpenClaw's mapping table was missing common developer file types like HTML, XML, and CSS, causing files of these types to be silently dropped when sent.\n\nThis update:\n- Adds MIME mappings for `text/html`, `application/xml`, `text/css`, and others;\n- For types still not covered, gracefully falls back to `application/octet-stream` instead of silently dropping. Users will see a 'cannot preview, but can download' prompt rather than the attachment disappearing without explanation.",
            },
          },
          {
            badge: "improved",
            title: {
              zh: "安全加固：HTTP · Stream · WebSocket 统一请求认证",
              en: "Security Hardening: Unified Auth Across HTTP, Stream, and WebSocket",
            },
            body: {
              zh: "此前，OpenClaw 的 HTTP、流式（SSE/Streaming）、WebSocket 三条请求路径各自维护独立的认证和代理配置，存在因路径差异导致认证被绕过的风险。\n\n本次将请求认证、代理配置、TLS 设置和 Header 注入统一收归到一个中心化的请求策略层。具体改进包括：\n- **消除私有网络访问推断**：不再从 base URL 推断请求是否为私有网络访问，改为显式配置，防止因 URL 伪造导致的权限提升；\n- **跨端点 Policy 统一**：OpenAI、Anthropic 及兼容端点的请求策略不再各自为政，防止伪造 host 继承原生默认配置。",
              en: "Previously, OpenClaw's three request paths — HTTP, streaming (SSE/Streaming), and WebSocket — each maintained independent authentication and proxy configurations, creating a risk of authentication bypass due to path differences.\n\nThis release centralizes request authentication, proxy configuration, TLS settings, and header injection into a unified request policy layer. Specific improvements include:\n- **Eliminating private network access inference**: No longer infers whether a request is private network access from the base URL; now requires explicit configuration, preventing privilege escalation via URL spoofing;\n- **Unified cross-endpoint Policy**: Request policies for OpenAI, Anthropic, and compatible endpoints no longer operate independently, preventing spoofed hosts from inheriting native default configurations.",
            },
          },
        ],
      },
      {
        id: "fixes",
        type: "fix",
        title: { zh: "关键 Bug 修复", en: "Critical Bug Fixes" },
        items: [
          {
            badge: "fixed",
            title: {
              zh: "执行审批：非法 security / ask / askFallback 值不再导致策略损坏",
              en: "Execution Approvals: Invalid security/ask/askFallback Values No Longer Corrupt Policy",
            },
            body: {
              zh: "当配置文件中出现格式错误的 `security`、`ask` 或 `askFallback` 值时，旧版本会将其原样写入规范化后的策略对象，导致策略解析在运行时出现不可预期的行为（有时表现为「应该审批的操作被直接放行」）。现在这些非法值会在规范化阶段被剥离，并以警告日志告知用户，而不是静默接受。",
              en: "When malformed `security`, `ask`, or `askFallback` values appear in config files, the old version would write them as-is into the normalized policy object, causing policy resolution to exhibit unpredictable behavior at runtime (sometimes manifesting as 'operations that should require approval being passed through directly'). These invalid values are now stripped during the normalization phase and reported to the user via warning logs, rather than being silently accepted.",
            },
          },
          {
            badge: "fixed",
            title: {
              zh: "Windows 执行：引号感知的 Allowlist 模式匹配恢复",
              en: "Windows Exec: Quote-Aware Allowlist Pattern Matching Restored",
            },
            body: {
              zh: "Windows 下路径通常包含空格（如 `C:\\Program Files\\...`），需要用引号包裹。旧版本的 Allowlist 匹配逻辑在遇到带引号的路径时会失败，导致原本在 Allowlist 中的命令被错误拒绝。本次修复在 gateway 层和 node execution 层同步引入了引号感知的模式匹配，确保 Windows 用户的执行审批行为与预期一致。",
              en: "Paths on Windows often contain spaces (e.g., `C:\\Program Files\\...`) and need to be wrapped in quotes. The old version's allowlist matching logic would fail when encountering quoted paths, causing commands legitimately on the allowlist to be incorrectly rejected. This fix introduces quote-aware pattern matching simultaneously in the gateway layer and node execution layer, ensuring Windows users' execution approval behavior matches expectations.",
            },
          },
          {
            badge: "fixed",
            title: {
              zh: "浏览器 CDP：trailing-dot localhost host 正确识别为回环地址",
              en: "Browser CDP: Trailing-dot Localhost Hosts Correctly Recognized as Loopback",
            },
            body: {
              zh: "Chrome DevTools Protocol (CDP) 连接时，部分工具会生成带 trailing dot 的 localhost 地址（如 `localhost.`）。旧版本的回环地址检测逻辑不处理这种格式，导致 WebSocket URL 改写失败，CDP 连接被拒绝。现在在进行回环检测之前，会先对 host 进行 normalize（去除尾部点号），修复了远程 CDP WebSocket URL 改写的问题。",
              en: "When connecting via Chrome DevTools Protocol (CDP), some tools generate localhost addresses with a trailing dot (e.g., `localhost.`). The old loopback detection logic didn't handle this format, causing WebSocket URL rewriting to fail and CDP connections to be rejected. Now the host is normalized (trailing dot removed) before loopback detection, fixing the remote CDP WebSocket URL rewriting issue.",
            },
          },
          {
            badge: "fixed",
            title: {
              zh: "WhatsApp 个人手机模式：断开连接时正确发送 unavailable presence",
              en: "WhatsApp Personal Phone Mode: Correctly Sends unavailable Presence on Disconnect",
            },
            body: {
              zh: "WhatsApp 的推送通知依赖 presence 状态：当客户端在线时发送 `available`，离线时发送 `unavailable`。旧版本在「自聊模式」（self-chat mode，即用个人手机号接入）断开连接时，未正确发送 `unavailable` presence，导致 WhatsApp 服务器认为客户端仍然在线，从而不派发推送通知。现在断开时会正确发送 `unavailable`，个人手机模式的推送通知恢复正常。",
              en: "WhatsApp push notifications depend on presence state: `available` is sent when the client is online, `unavailable` when offline. In the old version, when disconnecting in 'self-chat mode' (personal phone number integration), `unavailable` presence was not correctly sent, causing WhatsApp servers to believe the client was still online and thus not dispatching push notifications. Now `unavailable` is correctly sent on disconnect, restoring push notifications for personal phone mode.",
            },
          },
        ],
      },
      {
        id: "upgrade",
        type: "upgrade",
        title: { zh: "升级指南", en: "How to Upgrade" },
        items: [
          {
            title: { zh: "标准升级步骤", en: "Standard Upgrade Steps" },
            body: {
              zh: "升级前请务必先运行迁移命令，否则 xAI 和 Firecrawl 相关配置将在升级后失效。",
              en: "Be sure to run the migration command before upgrading, otherwise xAI and Firecrawl related configurations will become invalid after upgrading.",
            },
            code: "# 1. 先备份当前配置\nopenclaw config backup\n\n# 2. 运行迁移诊断（自动修复兼容性问题）\nopenclaw doctor --fix\n\n# 3. 拉取最新版本\ngit pull && npm install\n# 或 Docker 用户\ndocker pull openclaw/openclaw:v2026.4.2\n\n# 4. 验证迁移结果\nopenclaw doctor",
          },
        ],
      },
    ],
  },

  // ── v2026.3.15 ──────────────────────────────────────────────────────────────
  {
    slug: "v2026-3-15",
    version: "v2026.3.15",
    releaseDate: "2026-03-15",
    releasedBy: "core-team",
    contributorCount: 22,
    coverImage: "/logo.webp",
    githubUrl: "https://github.com/openclaw/openclaw/releases/tag/v2026.3.15",
    tagline: {
      zh: "MCP 协议原生支持，技能生态全面开放。",
      en: "Native MCP protocol, fully open skill ecosystem.",
    },
    summary: {
      zh: "OpenClaw v2026.3.15 带来了 Model Context Protocol (MCP) 原生支持，允许任何兼容 MCP 的工具直接以技能形式接入 OpenClaw，无需额外适配层。同时新增了技能热加载、运行时权限沙箱与技能市场 API，大幅降低了第三方开发者的接入门槛。",
      en: "OpenClaw v2026.3.15 introduces native MCP (Model Context Protocol) support, allowing any MCP-compatible tool to plug in directly as a skill without an adapter layer. Also includes hot-reload for skills, a runtime permission sandbox, and a Skill Marketplace API.",
    },
    highlights: [
      { icon: "🔗", zh: "MCP 协议原生支持", en: "Native MCP protocol support" },
      { icon: "🔥", zh: "技能热加载", en: "Skill hot-reload" },
      { icon: "🛡️", zh: "运行时权限沙箱", en: "Runtime permission sandbox" },
      { icon: "🏪", zh: "技能市场 API", en: "Skill Marketplace API" },
    ],
    sections: [
      {
        id: "features",
        type: "feature",
        title: { zh: "核心新特性", en: "Major New Features" },
        items: [
          {
            badge: "new",
            title: { zh: "MCP 协议原生支持", en: "Native MCP Protocol Support" },
            body: {
              zh: "OpenClaw 现在原生支持 Model Context Protocol (MCP)，任何实现了 MCP Server 接口的工具都可以零配置接入。这意味着 Claude Desktop、Cursor、Windsurf 等工具的 MCP 插件可以直接在 OpenClaw 中使用，极大丰富了技能生态。",
              en: "OpenClaw now natively supports the Model Context Protocol (MCP). Any tool implementing the MCP Server interface can plug in with zero configuration, enabling skills from Claude Desktop, Cursor, Windsurf, and more to work directly in OpenClaw.",
            },
            code: "# 接入一个 MCP 技能\nopenclaw skills add --mcp https://mcp-server.example.com\n\n# 列出所有 MCP 技能\nopenclaw skills list --type mcp",
          },
          {
            badge: "new",
            title: { zh: "技能热加载", en: "Skill Hot-Reload" },
            body: {
              zh: "开发模式下，技能文件变更后自动重载，无需重启 OpenClaw 服务。大幅提升技能开发的迭代效率。",
              en: "In development mode, skill files are automatically reloaded on change without restarting OpenClaw, greatly improving iteration speed for skill development.",
            },
          },
          {
            badge: "new",
            title: { zh: "运行时权限沙箱", en: "Runtime Permission Sandbox" },
            body: {
              zh: "技能执行现在运行在隔离沙箱中，每个技能只能访问其声明的权限范围（文件系统、网络、环境变量等）。未声明的权限访问会被拦截并记录日志。",
              en: "Skills now execute in an isolated sandbox. Each skill can only access its declared permission scope (filesystem, network, env vars, etc.). Undeclared permission access is intercepted and logged.",
            },
          },
        ],
      },
      {
        id: "improvements",
        type: "improvement",
        title: { zh: "重要改进", en: "Notable Improvements" },
        items: [
          {
            badge: "improved",
            title: { zh: "技能安装速度提升 3x", en: "3x Faster Skill Installation" },
            body: {
              zh: "重写了技能包的下载与解压逻辑，引入并行下载和增量更新，平均安装速度提升 3 倍。",
              en: "Rewrote skill package download and extraction logic with parallel downloads and incremental updates, averaging 3x faster installation.",
            },
          },
          {
            badge: "improved",
            title: { zh: "对话上下文压缩算法升级", en: "Conversation Context Compression Upgrade" },
            body: {
              zh: "新的上下文压缩算法在保留关键信息的同时，Token 消耗减少约 40%，长对话场景下效果尤为明显。",
              en: "New context compression algorithm reduces token consumption by ~40% while preserving key information, especially noticeable in long conversations.",
            },
          },
        ],
      },
      {
        id: "fixes",
        type: "fix",
        title: { zh: "关键 Bug 修复", en: "Critical Bug Fixes" },
        items: [
          {
            badge: "fixed",
            title: { zh: "飞书机器人断线重连失败", en: "Feishu Bot Reconnection Failure" },
            body: {
              zh: "修复了飞书机器人在网络波动后无法自动重连的问题，现在会以指数退避策略自动重试。",
              en: "Fixed Feishu bot failing to automatically reconnect after network fluctuations. Now retries with exponential backoff.",
            },
          },
        ],
      },
    ],
  },

  // ── v2026.2.28 ──────────────────────────────────────────────────────────────
  {
    slug: "v2026-2-28",
    version: "v2026.2.28",
    releaseDate: "2026-02-28",
    releasedBy: "core-team",
    contributorCount: 19,
    coverImage: "/logo.webp",
    githubUrl: "https://github.com/openclaw/openclaw/releases/tag/v2026.2.28",
    tagline: {
      zh: "多模态来了：图片、语音、文件一把梭。",
      en: "Multimodal is here: images, voice, files — all in one.",
    },
    summary: {
      zh: "v2026.2.28 聚焦多模态能力，新增图片理解、语音转文字、文件解析三大能力，并支持在对话中混合使用。同时优化了 Docker 镜像体积和启动速度。",
      en: "v2026.2.28 focuses on multimodal capabilities: image understanding, speech-to-text, and file parsing, all usable together in conversation. Also optimized Docker image size and startup speed.",
    },
    highlights: [
      { icon: "🖼️", zh: "图片理解能力", en: "Image understanding" },
      { icon: "🎙️", zh: "语音转文字", en: "Speech-to-text" },
      { icon: "📄", zh: "文件解析（PDF/Excel/Word）", en: "File parsing (PDF/Excel/Word)" },
      { icon: "🐳", zh: "Docker 镜像瘦身 60%", en: "60% smaller Docker image" },
    ],
    sections: [
      {
        id: "features",
        type: "feature",
        title: { zh: "核心新特性", en: "Major New Features" },
        items: [
          {
            badge: "new",
            title: { zh: "多模态输入：图片理解", en: "Multimodal Input: Image Understanding" },
            body: {
              zh: "用户可以直接发送图片给 OpenClaw，AI 会自动识别图片内容并参与对话。支持截图 OCR、图表解读、UI 审查等场景。需要后端模型支持 Vision 能力（如 GPT-4o、Claude Sonnet 4 等）。",
              en: "Users can send images directly to OpenClaw. The AI automatically recognizes image content and incorporates it into the conversation. Supports screenshot OCR, chart interpretation, UI review, etc. Requires a vision-capable backend model (GPT-4o, Claude Sonnet 4, etc.).",
            },
          },
          {
            badge: "new",
            title: { zh: "语音消息支持", en: "Voice Message Support" },
            body: {
              zh: "支持接收语音消息并自动转为文字，再交由 AI 处理。目前支持 Whisper 和国内讯飞语音引擎，可通过配置切换。",
              en: "Supports receiving voice messages with automatic speech-to-text conversion before AI processing. Currently supports Whisper and iFlytek engines, configurable via settings.",
            },
          },
          {
            badge: "new",
            title: { zh: "文件解析引擎", en: "File Parsing Engine" },
            body: {
              zh: "内置 PDF、Excel、Word、CSV 文件解析器。用户发送文件后，OpenClaw 自动提取文本内容并注入对话上下文，支持「帮我总结这份报告」「这个表格有什么异常」等交互。",
              en: "Built-in parsers for PDF, Excel, Word, and CSV files. When a user sends a file, OpenClaw auto-extracts text and injects it into the conversation context.",
            },
          },
        ],
      },
      {
        id: "improvements",
        type: "improvement",
        title: { zh: "重要改进", en: "Notable Improvements" },
        items: [
          {
            badge: "improved",
            title: { zh: "Docker 镜像瘦身 60%", en: "60% Smaller Docker Image" },
            body: {
              zh: "通过多阶段构建和依赖裁剪，生产镜像从 1.2GB 缩减至 480MB，冷启动时间从 12s 降至 5s。",
              en: "Multi-stage builds and dependency pruning reduced the production image from 1.2GB to 480MB; cold start dropped from 12s to 5s.",
            },
          },
        ],
      },
    ],
  },

  // ── v2026.2.10 ──────────────────────────────────────────────────────────────
  {
    slug: "v2026-2-10",
    version: "v2026.2.10",
    releaseDate: "2026-02-10",
    releasedBy: "core-team",
    contributorCount: 15,
    coverImage: "/logo.webp",
    githubUrl: "https://github.com/openclaw/openclaw/releases/tag/v2026.2.10",
    tagline: {
      zh: "企业微信 & 钉钉正式支持。",
      en: "WeCom & DingTalk officially supported.",
    },
    summary: {
      zh: "v2026.2.10 新增企业微信和钉钉两大国内协作平台的官方适配，覆盖消息收发、群聊、卡片消息和审批流等场景。同时引入了对话记忆持久化和用户画像系统。",
      en: "v2026.2.10 adds official adapters for WeCom (Enterprise WeChat) and DingTalk, covering messaging, group chat, card messages, and approval flows. Also introduces persistent conversation memory and user profiling.",
    },
    highlights: [
      { icon: "💼", zh: "企业微信适配", en: "WeCom adapter" },
      { icon: "📌", zh: "钉钉适配", en: "DingTalk adapter" },
      { icon: "🧠", zh: "对话记忆持久化", en: "Persistent conversation memory" },
      { icon: "👤", zh: "用户画像系统", en: "User profiling system" },
    ],
    sections: [
      {
        id: "features",
        type: "feature",
        title: { zh: "核心新特性", en: "Major New Features" },
        items: [
          {
            badge: "new",
            title: { zh: "企业微信官方适配", en: "WeCom Official Adapter" },
            body: {
              zh: "完整支持企业微信的应用消息、群机器人、卡片消息与审批回调。配置向导已更新，支持一键生成企业微信应用配置。",
              en: "Full support for WeCom app messages, group bots, card messages, and approval callbacks. The config wizard has been updated for one-click WeCom app setup.",
            },
          },
          {
            badge: "new",
            title: { zh: "钉钉官方适配", en: "DingTalk Official Adapter" },
            body: {
              zh: "支持钉钉企业内部应用、群聊机器人和互动卡片。支持 @机器人 触发对话，群内多人协作场景。",
              en: "Supports DingTalk internal apps, group chat bots, and interactive cards. Supports @bot triggers and multi-user collaboration in group chats.",
            },
          },
          {
            badge: "new",
            title: { zh: "对话记忆持久化", en: "Persistent Conversation Memory" },
            body: {
              zh: "OpenClaw 现在可以跨会话记住用户的偏好和历史上下文。记忆存储在本地 SQLite 或 Supabase 中，支持按用户隔离。用户可以要求 OpenClaw「记住我喜欢简洁的回复」，后续对话会自动应用。",
              en: "OpenClaw can now remember user preferences and historical context across sessions. Memory is stored in local SQLite or Supabase, isolated per user.",
            },
          },
        ],
      },
      {
        id: "fixes",
        type: "fix",
        title: { zh: "关键 Bug 修复", en: "Critical Bug Fixes" },
        items: [
          {
            badge: "fixed",
            title: { zh: "长消息截断导致回复不完整", en: "Long Message Truncation Causing Incomplete Replies" },
            body: {
              zh: "修复了当用户输入超过 4000 字符时，消息在传入 LLM 前被静默截断的问题。现在会自动分段处理并拼接完整回复。",
              en: "Fixed an issue where user messages over 4000 characters were silently truncated before reaching the LLM. Now auto-segments and concatenates complete replies.",
            },
          },
        ],
      },
    ],
  },

  // ── v2026.1.20 ──────────────────────────────────────────────────────────────
  {
    slug: "v2026-1-20",
    version: "v2026.1.20",
    releaseDate: "2026-01-20",
    releasedBy: "core-team",
    contributorCount: 18,
    coverImage: "/logo.webp",
    githubUrl: "https://github.com/openclaw/openclaw/releases/tag/v2026.1.20",
    tagline: {
      zh: "工作流引擎 1.0：让 AI 按步骤干活。",
      en: "Workflow Engine 1.0: AI that follows steps.",
    },
    summary: {
      zh: "v2026.1.20 引入了工作流引擎 1.0，用户可以定义多步骤的自动化流程，让 OpenClaw 按预设步骤执行复杂任务。同时新增了定时任务调度、Webhook 触发器和执行日志面板。",
      en: "v2026.1.20 introduces Workflow Engine 1.0 for defining multi-step automation flows. Also adds scheduled tasks, webhook triggers, and an execution log dashboard.",
    },
    highlights: [
      { icon: "⚡", zh: "工作流引擎 1.0", en: "Workflow Engine 1.0" },
      { icon: "⏰", zh: "定时任务调度", en: "Scheduled tasks" },
      { icon: "🪝", zh: "Webhook 触发器", en: "Webhook triggers" },
      { icon: "📊", zh: "执行日志面板", en: "Execution log dashboard" },
    ],
    sections: [
      {
        id: "features",
        type: "feature",
        title: { zh: "核心新特性", en: "Major New Features" },
        items: [
          {
            badge: "new",
            title: { zh: "工作流引擎 1.0", en: "Workflow Engine 1.0" },
            body: {
              zh: "用 YAML 或可视化编辑器定义多步骤工作流。每个步骤可以是技能调用、条件分支、循环或等待用户确认。支持变量传递和错误重试。典型场景：「每天早上 9 点，抓取新闻 → 生成摘要 → 发送到飞书群」。",
              en: "Define multi-step workflows via YAML or visual editor. Each step can be a skill call, conditional branch, loop, or user confirmation wait. Supports variable passing and error retry.",
            },
            code: "# 示例工作流\nname: daily-news-digest\ntrigger:\n  cron: \"0 9 * * *\"\nsteps:\n  - skill: web-search\n    input: \"今日 AI 领域重要新闻\"\n  - skill: summarize\n    input: \"{{steps.0.output}}\"\n  - skill: feishu-send\n    input: \"{{steps.1.output}}\"\n    channel: \"#ai-news\"",
          },
          {
            badge: "new",
            title: { zh: "定时任务调度", en: "Scheduled Task Scheduling" },
            body: {
              zh: "内置 Cron 调度器，支持以 cron 表达式定义定时任务。可与工作流配合使用，也可单独触发技能。支持时区配置。",
              en: "Built-in cron scheduler supporting cron expressions for scheduled tasks. Works with workflows or standalone skill triggers. Timezone-aware.",
            },
          },
          {
            badge: "new",
            title: { zh: "Webhook 触发器", en: "Webhook Triggers" },
            body: {
              zh: "每个工作流可以生成唯一的 Webhook URL，外部系统（GitHub、Jira、监控告警等）可通过 HTTP POST 触发工作流执行。",
              en: "Each workflow can generate a unique webhook URL. External systems (GitHub, Jira, monitoring alerts) can trigger workflow execution via HTTP POST.",
            },
          },
        ],
      },
      {
        id: "improvements",
        type: "improvement",
        title: { zh: "重要改进", en: "Notable Improvements" },
        items: [
          {
            badge: "improved",
            title: { zh: "Web UI 全面重构", en: "Web UI Complete Redesign" },
            body: {
              zh: "Web 管理面板使用 React + Tailwind CSS 完全重写，支持暗色模式、移动端自适应和实时对话流展示。",
              en: "Web admin panel completely rewritten with React + Tailwind CSS. Supports dark mode, mobile responsive, and real-time conversation streaming.",
            },
          },
        ],
      },
    ],
  },

  // ── v2026.1.5 ───────────────────────────────────────────────────────────────
  {
    slug: "v2026-1-5",
    version: "v2026.1.5",
    releaseDate: "2026-01-05",
    releasedBy: "core-team",
    contributorCount: 12,
    coverImage: "/logo.webp",
    githubUrl: "https://github.com/openclaw/openclaw/releases/tag/v2026.1.5",
    tagline: {
      zh: "OpenClaw 正式发布：你的开源 AI 助理。",
      en: "OpenClaw GA: your open-source AI assistant.",
    },
    summary: {
      zh: "OpenClaw v2026.1.5 是首个正式发布版本（GA），标志着项目从 Beta 阶段进入生产可用状态。核心功能包括：多模型支持（OpenAI/Anthropic/本地模型）、飞书集成、技能系统、Web 聊天界面和 Docker 一键部署。",
      en: "OpenClaw v2026.1.5 is the first General Availability (GA) release, marking the transition from Beta to production-ready. Core features include multi-model support (OpenAI/Anthropic/local), Feishu integration, skill system, web chat UI, and one-click Docker deployment.",
    },
    highlights: [
      { icon: "🎉", zh: "首个正式发布版本 (GA)", en: "First GA release" },
      { icon: "🤖", zh: "多模型支持", en: "Multi-model support" },
      { icon: "💬", zh: "飞书集成", en: "Feishu integration" },
      { icon: "🧩", zh: "技能系统", en: "Skill system" },
      { icon: "🐳", zh: "Docker 一键部署", en: "One-click Docker deployment" },
    ],
    sections: [
      {
        id: "features",
        type: "feature",
        title: { zh: "核心特性", en: "Core Features" },
        items: [
          {
            badge: "new",
            title: { zh: "多模型支持", en: "Multi-Model Support" },
            body: {
              zh: "开箱即用支持 OpenAI (GPT-4o/4o-mini)、Anthropic (Claude Sonnet/Haiku)、DeepSeek、Ollama 本地模型等。通过统一的 Provider 接口，可以自由切换和混合使用不同模型。",
              en: "Out-of-the-box support for OpenAI (GPT-4o/4o-mini), Anthropic (Claude Sonnet/Haiku), DeepSeek, Ollama local models, and more. A unified Provider interface allows free switching and mixing of different models.",
            },
          },
          {
            badge: "new",
            title: { zh: "飞书集成", en: "Feishu Integration" },
            body: {
              zh: "官方飞书机器人适配，支持单聊、群聊、@机器人触发、富文本消息和卡片消息。配合配置向导，10 分钟完成飞书接入。",
              en: "Official Feishu bot adapter supporting DM, group chat, @bot triggers, rich text, and card messages. With the config wizard, Feishu setup takes 10 minutes.",
            },
          },
          {
            badge: "new",
            title: { zh: "技能系统", en: "Skill System" },
            body: {
              zh: "可插拔的技能架构，通过 `openclaw skills add` 一键安装社区技能。首批技能覆盖搜索、日历、邮件、代码执行等 50+ 场景。",
              en: "Pluggable skill architecture with one-command installation via `openclaw skills add`. First batch covers 50+ scenarios including search, calendar, email, and code execution.",
            },
            code: "# 安装技能\nopenclaw skills add google-calendar\nopenclaw skills add web-search\nopenclaw skills add code-runner",
          },
          {
            badge: "new",
            title: { zh: "Docker 一键部署", en: "One-Click Docker Deployment" },
            body: {
              zh: "提供官方 Docker 镜像和 docker-compose 模板，`docker compose up` 即可启动完整服务。支持 x86_64 和 ARM64 架构。",
              en: "Official Docker image and docker-compose template. `docker compose up` starts the full service. Supports x86_64 and ARM64 architectures.",
            },
            code: "# 一键启动\ngit clone https://github.com/openclaw/openclaw.git\ncd openclaw\ncp .env.example .env\n# 编辑 .env 填入你的 API Key\ndocker compose up -d",
          },
        ],
      },
    ],
  },
]

export function getChangelog(slug: string): ChangelogEntry | undefined {
  return CHANGELOG.find((c) => c.slug === slug)
}
