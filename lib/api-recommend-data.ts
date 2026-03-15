/**
 * 第三方大模型 API 汇总：按「主流模型」对比「各家第三方」价格，带分类与推荐
 * 单位：每百万 token（$/M 或 ¥/M），价格以各平台最新为准，仅供参考。
 */

// ——— 按模型对比：同一模型在不同渠道的价格 ———
export interface ProviderPrice {
  name: string
  nameEn?: string
  input: string
  output: string
  recommended?: boolean
  note?: string
  url?: string
}

export interface ModelCompareRow {
  modelName: string
  modelNameEn?: string
  context?: string
  providers: ProviderPrice[]
}

export interface ModelCategory {
  id: string
  name: string
  nameEn: string
  desc?: string
  descEn?: string
  models: ModelCompareRow[]
}

/** 分类：旗舰 / 性价比 / 国产与长上下文 */
export const modelCategories: ModelCategory[] = [
  {
    id: "flagship",
    name: "旗舰型（强推理、代码、长文）",
    nameEn: "Flagship (reasoning, code, long context)",
    desc: "适合复杂任务、代码生成、长文档理解，单次成本较高。",
    descEn: "For complex tasks, code gen, long docs; higher cost per call.",
    models: [
      {
        modelName: "GPT-4o",
        modelNameEn: "GPT-4o",
        context: "128K",
        providers: [
          { name: "OpenAI 官方", nameEn: "OpenAI", input: "$5", output: "$15", url: "https://platform.openai.com" },
          { name: "OpenRouter", nameEn: "OpenRouter", input: "$5", output: "$15", note: "与官方同价", url: "https://openrouter.ai" },
          { name: "白菜GPT", nameEn: "BaiCai GPT", input: "¥5", output: "¥15", recommended: true, note: "1¥=1$，国内直连", url: "https://baicaigpt.com" },
          { name: "GPTNB", nameEn: "GPTNB", input: "约 ¥5", output: "约 ¥15", note: "与官方一致，送体验额", url: "https://gptnb.ai" },
          { name: "阿里云百炼", nameEn: "Alibaba Bailian", input: "按官网", output: "按官网", note: "需开通对应模型", url: "https://bailian.console.aliyun.com" },
        ],
      },
      {
        modelName: "Claude Sonnet 4 / 4.5",
        modelNameEn: "Claude Sonnet 4.5",
        context: "200K",
        providers: [
          { name: "Anthropic 官方", nameEn: "Anthropic", input: "$3", output: "$15", url: "https://anthropic.com" },
          { name: "OpenRouter", nameEn: "OpenRouter", input: "$3", output: "$15", url: "https://openrouter.ai" },
          { name: "国内中转（多家）", nameEn: "China relay", input: "约 ¥2–3", output: "约 ¥10–12", recommended: true, note: "较官方省 50–70%，需自比价" },
        ],
      },
      {
        modelName: "Claude Opus 4.5",
        modelNameEn: "Claude Opus 4.5",
        context: "200K",
        providers: [
          { name: "Anthropic 官方", nameEn: "Anthropic", input: "$5", output: "$25", url: "https://anthropic.com" },
          { name: "OpenRouter", nameEn: "OpenRouter", input: "$5", output: "$25", url: "https://openrouter.ai" },
          { name: "国内中转（多家）", nameEn: "China relay", input: "约 ¥3–4", output: "约 ¥18–20", recommended: true, note: "国内可用，较官方便宜" },
        ],
      },
      {
        modelName: "Gemini 2.5 Pro",
        modelNameEn: "Gemini 2.5 Pro",
        context: "1M",
        providers: [
          { name: "Google AI 官方", nameEn: "Google AI", input: "$1.25–2.50", output: "$10–15", note: "百万级上下文", url: "https://ai.google.dev" },
          { name: "OpenRouter", nameEn: "OpenRouter", input: "按官网", output: "按官网", url: "https://openrouter.ai" },
        ],
      },
    ],
  },
  {
    id: "value",
    name: "性价比型（日常对话、轻量任务）",
    nameEn: "Value (daily chat, light tasks)",
    desc: "适合高频、轻量调用，单次成本低。",
    descEn: "For high-volume, light usage; low cost per call.",
    models: [
      {
        modelName: "GPT-4o mini",
        modelNameEn: "GPT-4o mini",
        context: "128K",
        providers: [
          { name: "OpenAI 官方", nameEn: "OpenAI", input: "$0.15", output: "$0.60", url: "https://platform.openai.com" },
          { name: "OpenRouter", nameEn: "OpenRouter", input: "$0.15", output: "$0.60", url: "https://openrouter.ai" },
          { name: "白菜GPT", nameEn: "BaiCai GPT", input: "¥0.15", output: "¥0.60", recommended: true, note: "国内直连", url: "https://baicaigpt.com" },
          { name: "GPTNB", nameEn: "GPTNB", input: "约 ¥0.15", output: "约 ¥0.60", url: "https://gptnb.ai" },
        ],
      },
      {
        modelName: "Claude Haiku 3.5",
        modelNameEn: "Claude Haiku 3.5",
        context: "200K",
        providers: [
          { name: "Anthropic 官方", nameEn: "Anthropic", input: "$0.80", output: "$4", url: "https://anthropic.com" },
          { name: "OpenRouter", nameEn: "OpenRouter", input: "$0.80", output: "$4", url: "https://openrouter.ai" },
          { name: "国内中转（多家）", nameEn: "China relay", input: "约 ¥0.5–0.7", output: "约 ¥2.5–3", recommended: true },
        ],
      },
      {
        modelName: "Gemini 2.5 Flash",
        modelNameEn: "Gemini 2.5 Flash",
        context: "1M",
        providers: [
          { name: "Google AI 官方", nameEn: "Google AI", input: "$0.15–0.30", output: "$0.60–3.50", url: "https://ai.google.dev" },
          { name: "OpenRouter", nameEn: "OpenRouter", input: "按官网", output: "按官网", url: "https://openrouter.ai" },
        ],
      },
    ],
  },
  {
    id: "domestic",
    name: "国产与长上下文（DeepSeek / 通义 / Kimi 等）",
    nameEn: "Domestic & long context (DeepSeek, Qwen, Kimi)",
    desc: "国内厂商与云平台，价格多为人民币；部分有免费额度。",
    descEn: "China providers; CNY pricing; some with free tier.",
    models: [
      {
        modelName: "DeepSeek V3",
        modelNameEn: "DeepSeek V3",
        context: "128K",
        providers: [
          { name: "DeepSeek 官方", nameEn: "DeepSeek", input: "¥2", output: "¥8", url: "https://platform.deepseek.com" },
          { name: "阿里云百炼", nameEn: "Alibaba Bailian", input: "¥2", output: "¥8", recommended: true, note: "新用户 200 万 token 免费", url: "https://bailian.console.aliyun.com" },
          { name: "腾讯云", nameEn: "Tencent Cloud", input: "¥2", output: "¥8", note: "约 100 万 token 免费", url: "https://cloud.tencent.com" },
          { name: "百度智能云", nameEn: "Baidu Cloud", input: "¥2", output: "¥8", url: "https://cloud.baidu.com" },
          { name: "火山引擎", nameEn: "Volcengine", input: "¥2", output: "¥8", note: "约 50 万免费，偶有折扣", url: "https://www.volcengine.com" },
          { name: "硅基流动", nameEn: "SiliconFlow", input: "¥2", output: "¥8", url: "https://siliconflow.cn" },
          { name: "OpenRouter", nameEn: "OpenRouter", input: "$0.27", output: "$1.10", note: "海外美元计费", url: "https://openrouter.ai" },
        ],
      },
      {
        modelName: "DeepSeek R1",
        modelNameEn: "DeepSeek R1",
        context: "128K",
        providers: [
          { name: "DeepSeek 官方", nameEn: "DeepSeek", input: "¥4", output: "¥16", note: "推理强化", url: "https://platform.deepseek.com" },
          { name: "阿里云百炼", nameEn: "Alibaba Bailian", input: "¥4", output: "¥16", recommended: true, url: "https://bailian.console.aliyun.com" },
          { name: "腾讯云", nameEn: "Tencent Cloud", input: "¥4", output: "¥16", url: "https://cloud.tencent.com" },
          { name: "百度智能云", nameEn: "Baidu Cloud", input: "¥4", output: "¥16", url: "https://cloud.baidu.com" },
          { name: "火山引擎", nameEn: "Volcengine", input: "¥4", output: "¥16", url: "https://www.volcengine.com" },
        ],
      },
      {
        modelName: "通义千问 Qwen",
        modelNameEn: "Qwen",
        context: "128K+",
        providers: [
          { name: "阿里云百炼", nameEn: "Alibaba Bailian", input: "¥0.5–2/M", output: "¥2–8/M", recommended: true, note: "多规格，有免费额", url: "https://bailian.console.aliyun.com" },
          { name: "OpenRouter", nameEn: "OpenRouter", input: "按官网", output: "按官网", url: "https://openrouter.ai" },
        ],
      },
      {
        modelName: "Kimi 月之暗面",
        modelNameEn: "Kimi",
        context: "长上下文",
        providers: [
          { name: "月之暗面官方", nameEn: "Moonshot", input: "¥60/M", output: "¥60/M", url: "https://platform.moonshot.cn" },
          { name: "阿里云百炼", nameEn: "Alibaba Bailian", input: "按官网", output: "按官网", note: "可接入 Kimi 系列", url: "https://bailian.console.aliyun.com" },
        ],
      },
      {
        modelName: "豆包 Doubao",
        modelNameEn: "Doubao",
        context: "128K",
        providers: [
          { name: "火山引擎", nameEn: "Volcengine", input: "¥0.3–0.8/M", output: "¥0.6–1/M", recommended: true, url: "https://www.volcengine.com" },
          { name: "OpenRouter", nameEn: "OpenRouter", input: "按官网", output: "按官网", url: "https://openrouter.ai" },
        ],
      },
      {
        modelName: "GLM-4 智谱",
        modelNameEn: "GLM-4",
        context: "128K",
        providers: [
          { name: "智谱 AI 开放平台", nameEn: "Zhipu", input: "¥0.1/千条", output: "¥0.1/千条", recommended: true, note: "按条计费", url: "https://open.bigmodel.cn" },
        ],
      },
      {
        modelName: "文心一言 ERNIE",
        modelNameEn: "ERNIE",
        context: "128K",
        providers: [
          { name: "百度千帆", nameEn: "Baidu Qianfan", input: "¥0.012/千 tokens", output: "¥0.012/千 tokens", url: "https://cloud.baidu.com/product/wenxinworkshop" },
          { name: "百度部分模型", nameEn: "Baidu", input: "免费", output: "免费", note: "Speed/Lite 等有免费", url: "https://cloud.baidu.com" },
        ],
      },
      {
        modelName: "腾讯混元",
        modelNameEn: "Hunyuan",
        context: "128K",
        providers: [
          { name: "腾讯云混元", nameEn: "Tencent Hunyuan", input: "按量/包月", output: "按量/包月", recommended: true, note: "有免费额度，Lite 免费", url: "https://cloud.tencent.com/product/hunyuan" },
        ],
      },
    ],
  },
]

// ——— 聚合/中转平台：全网名单，按类型分类 ———
export interface AggregatorRow {
  name: string
  nameEn?: string
  desc: string
  descEn?: string
  url: string
  features?: string[]
}

export interface AggregatorCategory {
  id: string
  name: string
  nameEn: string
  desc?: string
  descEn?: string
  list: AggregatorRow[]
}

/** 国内聚合与中转（GPT/Claude 中转 + 国产多模型聚合） */
const domesticRelay: AggregatorRow[] = [
  { name: "n1n.ai", nameEn: "n1n.ai", desc: "企业级聚合，500+ 模型，人民币结算、国内专线、无需 VPN。", descEn: "Enterprise, 500+ models, CNY, China nodes.", url: "https://explore.n1n.ai/zh", features: ["企业级", "人民币", "国内直连"] },
  { name: "硅基流动 SiliconFlow", nameEn: "SiliconFlow", desc: "DeepSeek、Qwen、Llama 等，模型广场、透明定价，文档完善。", descEn: "DeepSeek, Qwen, Llama; transparent pricing.", url: "https://siliconflow.cn", features: ["国内", "多模型", "开发者友好"] },
  { name: "幂简集成", nameEn: "Mijian", desc: "OpenAI、Claude、文心、Llama 等十余种，Prompt 管理，月免费 10 万 Token。", descEn: "10+ models, prompt mgmt, 10K free/month.", url: "https://www.mijian.io", features: ["多模型", "免费额", "Prompt 管理"] },
  { name: "laozhang.ai", nameEn: "laozhang.ai", desc: "中文语料优化，集成国产大模型，月免费约 5 万 Token。", descEn: "Chinese-optimized, domestic models, free tier.", url: "https://laozhang.ai", features: ["中文优化", "免费额"] },
  { name: "DMXAPI", nameEn: "DMXAPI", desc: "300+ 模型，批量推理、弹性限流，高并发（约 200 QPS）。", descEn: "300+ models, batch inference, 200 QPS.", url: "https://dmxapi.com", features: ["高并发", "多模型"] },
  { name: "BigModel", nameEn: "BigModel", desc: "全球 100+ 主流大模型聚合，多 API 节点含国内专线。", descEn: "100+ models, China nodes.", url: "https://bigmodel.org", features: ["国内专线", "多节点"] },
  { name: "API 易", nameEn: "API Easy", desc: "OpenAI & Claude 中转，比官方便宜约 20–40%，中文支持、微信/支付宝。", descEn: "OpenAI/Claude relay, 20–40% cheaper, CNY pay.", url: "https://apiyi.com", features: ["国内", "便宜", "中文客服"] },
  { name: "简易 API（Jeniya）", nameEn: "Jeniya API", desc: "GPT-4o、Claude、DeepSeek 等，国内直连，新用户送 200 元额度。", descEn: "GPT/Claude/DeepSeek, China relay, 200 CNY trial.", url: "https://gpt4-api.github.io/gpt-api", features: ["国内直连", "免费额", "兼容 OpenAI"] },
  { name: "白菜GPT", nameEn: "BaiCai GPT", desc: "国内直连 OpenAI，1¥=1$ Token，GPT-4o / 4o mini 等。", descEn: "China OpenAI relay, 1 CNY = 1 USD token.", url: "https://baicaigpt.com", features: ["国内直连", "1:1 汇率"] },
  { name: "GPTNB", nameEn: "GPTNB", desc: "官方 API 中转，价格与官方一致，送体验额度。", descEn: "Official relay, same price, free trial.", url: "https://gptnb.ai", features: ["国内", "体验额"] },
  { name: "poloapi", nameEn: "poloapi", desc: "开发者友好聚合网关，实操教程与快速接入。", descEn: "Dev-friendly gateway, quick start.", url: "https://poloapi.top", features: ["开发者", "快速接入"] },
  { name: "4sapi 星链引擎", nameEn: "4sapi", desc: "全场景多模型矩阵，强调节点与模型丰富度。", descEn: "Multi-model, multi-node.", url: "https://4sapi.com", features: ["多场景", "多节点"] },
  { name: "千牛云", nameEn: "Qianniu", desc: "企业级推理，兼容 OpenAI/Anthropic，新用户 300 万 Token 资源包。", descEn: "Enterprise inference, 3M token trial.", url: "https://www.qianniu.cloud", features: ["企业级", "免费包"] },
  { name: "零克云", nameEn: "Lingke", desc: "轻量化聚合，成本控制与资源监控。", descEn: "Lightweight, cost control.", url: "https://lingke.cn", features: ["成本可控"] },
  { name: "白山智算", nameEn: "Baishan", desc: "40+ 模型，DeepSeek、Qwen、Kimi 等，新用户体验金。", descEn: "40+ models, trial credit.", url: "https://www.baishan.com", features: ["多模型", "体验金"] },
]

/** 海外聚合与推理 */
const overseasAggregator: AggregatorRow[] = [
  { name: "OpenRouter", nameEn: "OpenRouter", desc: "统一 API 接入 500+ 模型，OpenAI 兼容，多与官方同价。", descEn: "500+ models, OpenAI-compatible.", url: "https://openrouter.ai", features: ["多模型", "OpenAI 兼容"] },
  { name: "Together AI", nameEn: "Together AI", desc: "开源与推理模型 200+，按 token 透明定价，支持微调与专用端点。", descEn: "200+ open/reasoning models, fine-tuning.", url: "https://together.ai", features: ["开源模型", "推理", "微调"] },
  { name: "Crazyrouter", nameEn: "Crazyrouter", desc: "627+ 模型、102 族，含国产与多模态，7 大区节点，OpenAI/Anthropic/Gemini 格式。", descEn: "627+ models, 7 regions, multimodal.", url: "https://crazyrouter.com", features: ["多区域", "多模态"] },
  { name: "Groq", nameEn: "Groq", desc: "自研 LPU 推理，低延迟、高性价比，160 万+ 开发者。", descEn: "LPU inference, low latency.", url: "https://groq.com", features: ["极速推理", "按 token"] },
  { name: "Fireworks AI", nameEn: "Fireworks AI", desc: "600+ 生产级模型，全球分布式，支持构建与扩展。", descEn: "600+ models, global scale.", url: "https://fireworks.ai", features: ["生产级", "全球"] },
  { name: "fal.ai", nameEn: "fal.ai", desc: "图像/视频/音频/3D 生成，1000+ 模型，推理加速。", descEn: "Image/video/audio, 1000+ models.", url: "https://fal.ai", features: ["生成媒体", "按秒计费"] },
  { name: "Replicate", nameEn: "Replicate", desc: "50,000+ 开源模型托管，自定义部署，按秒/按输出计费。", descEn: "50K+ models, self-host, pay per run.", url: "https://replicate.com", features: ["海量模型", "自托管"] },
  { name: "Hugging Face Inference", nameEn: "Hugging Face", desc: "社区 200 万+ 模型，统一推理 API，可对接 Groq/Fireworks 等。", descEn: "2M+ models, unified inference API.", url: "https://huggingface.co/inference-api", features: ["社区", "统一 API"] },
  { name: "Anyscale", nameEn: "Anyscale", desc: "Ray 生态推理与训练，企业级分布式。", descEn: "Ray ecosystem, enterprise.", url: "https://www.anyscale.com", features: ["Ray", "企业"] },
  { name: "Mistral AI", nameEn: "Mistral AI", desc: "Mistral 官方 API，开源与托管模型。", descEn: "Official Mistral API.", url: "https://mistral.ai", features: ["Mistral 系"] },
]

/** 云厂商一站式（国内大厂模型平台） */
const cloudVendor: AggregatorRow[] = [
  { name: "阿里云百炼", nameEn: "Alibaba Bailian", desc: "通义、DeepSeek、Kimi、GLM 等，新用户多模型免费额度。", descEn: "Qwen, DeepSeek, Kimi, GLM; free tier.", url: "https://bailian.console.aliyun.com", features: ["国内", "多模型", "免费额"] },
  { name: "腾讯云混元", nameEn: "Tencent Hunyuan", desc: "混元大模型 API，通用免费额 + Embedding 额，有效期长。", descEn: "Hunyuan API, free tier.", url: "https://cloud.tencent.com/product/hunyuan", features: ["国内", "免费额"] },
  { name: "火山引擎", nameEn: "Volcengine", desc: "字节旗下，豆包、DeepSeek 等，免费额与活动价。", descEn: "ByteDance; Doubao, DeepSeek.", url: "https://www.volcengine.com", features: ["豆包", "DeepSeek"] },
  { name: "百度千帆 / 文心", nameEn: "Baidu Qianfan", desc: "文心大模型与企业级能力，部分模型免费。", descEn: "ERNIE, enterprise.", url: "https://cloud.baidu.com/product/wenxinworkshop", features: ["文心", "部分免费"] },
  { name: "智谱 AI 开放平台", nameEn: "Zhipu AI", desc: "GLM 系列，按条/按 token，中文与推理优化。", descEn: "GLM series, Chinese optimized.", url: "https://open.bigmodel.cn", features: ["GLM", "国产"] },
]

/** 开源 / 自建网关 */
const openSourceSelfHost: AggregatorRow[] = [
  { name: "One API", nameEn: "One API", desc: "开源 API 管理与转发，多厂商、OpenRouter，可自建。", descEn: "Open-source gateway, self-host.", url: "https://github.com/songquanpeng/one-api", features: ["开源", "自建"] },
  { name: "LiteLLM", nameEn: "LiteLLM", desc: "开源代理，OpenAI 格式调用 100+ 平台，Python/自部署。", descEn: "Open-source proxy, 100+ providers.", url: "https://github.com/BerriAI/litellm", features: ["开源", "统一格式"] },
  { name: "Bifrost (Maxim AI)", nameEn: "Bifrost", desc: "自托管网关，极低延迟，零加价，15+ 厂商，企业合规。", descEn: "Self-hosted, low latency, zero markup.", url: "https://www.maxim.ai", features: ["自托管", "企业"] },
]

export const aggregatorCategories: AggregatorCategory[] = [
  { id: "domestic-relay", name: "国内聚合与中转", nameEn: "China relay & aggregation", desc: "国内直连、人民币计费或优惠汇率的 GPT/Claude/多模型 聚合与中转。", descEn: "China nodes, CNY or discounted rates.", list: domesticRelay },
  { id: "overseas", name: "海外聚合与推理", nameEn: "Overseas aggregation & inference", desc: "海外统一 API、多模型推理与生成平台。", descEn: "Unified API, multi-model inference.", list: overseasAggregator },
  { id: "cloud", name: "云厂商一站式", nameEn: "Cloud vendor one-stop", desc: "国内大厂模型服务平台，多带免费额度。", descEn: "China cloud LLM platforms, free tiers.", list: cloudVendor },
  { id: "opensource", name: "开源 / 自建", nameEn: "Open source & self-host", desc: "可自部署的网关与代理，零加价或完全自主。", descEn: "Self-hosted gateways, no markup.", list: openSourceSelfHost },
]

/** 兼容旧用法：所有平台扁平列表 */
export const aggregators: AggregatorRow[] = aggregatorCategories.flatMap((c) => c.list)
