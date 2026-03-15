"use client"

import Image from "next/image"

interface LobsterIconProps {
  className?: string
  size?: number
}

/**
 * 站点 Logo：红色卡通龙虾（透明 PNG）
 */
export function LobsterIcon({ className = "", size = 24 }: LobsterIconProps) {
  return (
    <Image
      src="/logo.png"
      alt="懂得AI"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
      unoptimized
    />
  )
}
