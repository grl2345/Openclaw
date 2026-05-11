"use client"

import { useEffect, useRef } from "react"

/**
 * AdSlot — Google AdSense 广告位
 *
 * 注意：为了通过 AdSense 审核，绝对不要在没有真实广告时显示
 * "广告位/AD/Advertisement" 字样的占位框 —— 谷歌会判定为
 * "伪造广告位 / 鼓励点击" 或 "无库存内容"，直接拒审。
 *
 * 行为：
 *   - 配置了 NEXT_PUBLIC_ADSENSE_CLIENT 和 slot id 时，渲染真实 <ins class="adsbygoogle">
 *   - 否则什么都不渲染（不占位、不显示文字）
 *
 * 使用：
 *   <AdSlot slot="content-inline" />
 *   <AdSlot slot="sidebar-top" />
 */

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

type SlotName =
  | "sidebar-top"
  | "sidebar-mid"
  | "sidebar-bottom"
  | "content-inline"
  | "article-bottom"

interface AdSlotProps {
  slot: SlotName
  children?: React.ReactNode
  className?: string
}

const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-5612094173556578"

// 把语义化的 slot 名映射成 AdSense 后台创建的 data-ad-slot ID。
// 留空表示该位置暂未在 AdSense 后台创建广告单元，组件会安全地不渲染。
const slotIdMap: Record<SlotName, string | undefined> = {
  "sidebar-top": process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR_TOP,
  "sidebar-mid": process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR_MID,
  "sidebar-bottom": process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR_BOTTOM,
  "content-inline": process.env.NEXT_PUBLIC_ADSENSE_SLOT_CONTENT_INLINE,
  "article-bottom": process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE_BOTTOM,
}

export function AdSlot({ slot, children, className = "" }: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pushedRef = useRef(false)
  const slotId = slotIdMap[slot]
  const hasRealAd = Boolean(slotId)

  useEffect(() => {
    if (!hasRealAd || pushedRef.current) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      pushedRef.current = true
    } catch {
      // ignore — adsbygoogle 未就绪时不抛错
    }
  }, [hasRealAd])

  // 自定义内容（例如自托管赞助）
  if (children) {
    return (
      <div className={className} data-ad-slot={slot}>
        {children}
      </div>
    )
  }

  // 未配置真实 slot id 时不渲染任何东西，避免出现"伪造广告位"
  if (!hasRealAd) return null

  return (
    <div ref={containerRef} className={className} data-ad-slot={slot}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
