"use client"

/**
 * AdSlot — 广告位组件
 *
 * 支持多种尺寸和位置，预留占位 + 可选自定义内容。
 * 当没有真实广告时显示占位框，方便后续对接 Google AdSense 或其他广告平台。
 *
 * 使用方式：
 *   <AdSlot slot="sidebar-top" />                    — 右侧栏顶部横幅
 *   <AdSlot slot="sidebar-mid" />                    — 右侧栏中部横幅
 *   <AdSlot slot="content-inline" />                 — 内容区行内广告
 *   <AdSlot slot="article-bottom" />                 — 文章底部广告
 *   <AdSlot slot="sidebar-top"><MyCustomAd /></AdSlot> — 自定义广告内容
 *
 * 对接 AdSense 时，在 children 中放入 <ins> 标签即可：
 *   <AdSlot slot="sidebar-top">
 *     <ins className="adsbygoogle" data-ad-client="ca-pub-xxx" data-ad-slot="yyy" ... />
 *   </AdSlot>
 */

interface AdSlotProps {
  /** 广告位标识，用于区分不同位置 */
  slot: "sidebar-top" | "sidebar-mid" | "sidebar-bottom" | "content-inline" | "article-bottom"
  /** 自定义广告内容（AdSense ins 标签、赞助图片等） */
  children?: React.ReactNode
  /** 额外 className */
  className?: string
}

const slotConfig: Record<
  AdSlotProps["slot"],
  { minH: string; label: string; aspect?: string }
> = {
  "sidebar-top":    { minH: "h-[250px]", label: "广告位 · AD" },
  "sidebar-mid":    { minH: "h-[200px]", label: "广告位 · AD" },
  "sidebar-bottom": { minH: "h-[250px]", label: "广告位 · AD" },
  "content-inline": { minH: "h-[90px]",  label: "广告位 · AD", aspect: "aspect-[728/90]" },
  "article-bottom": { minH: "h-[250px]", label: "广告位 · AD", aspect: "aspect-[728/250]" },
}

export function AdSlot({ slot, children, className = "" }: AdSlotProps) {
  const config = slotConfig[slot]

  // If custom content is provided, render it directly
  if (children) {
    return (
      <div
        className={`overflow-hidden rounded-xl border border-border/60 bg-card/50 ${className}`}
        data-ad-slot={slot}
      >
        {children}
      </div>
    )
  }

  // Placeholder when no ad is configured
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-xl border border-dashed border-border/50 bg-muted/20 ${config.minH} ${config.aspect ?? ""} ${className}`}
      data-ad-slot={slot}
    >
      <div className="text-center">
        <p className="text-[10px] font-medium text-muted-foreground/40">{config.label}</p>
        <p className="text-[9px] text-muted-foreground/30">{slot}</p>
      </div>
    </div>
  )
}
