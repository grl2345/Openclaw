"use client"

interface AnimatedLobsterLogoProps {
  className?: string
  size?: number
}

/**
 * 大号动画龙虾 logo：参考圆润粉红造型，黑眼青蓝瞳孔、触须、小钳、小脚，带浮动+触须摆动
 */
export function AnimatedLobsterLogo({ className = "", size = 200 }: AnimatedLobsterLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="lobster-body-grad" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#f8a5a5" />
          <stop offset="100%" stopColor="#e85c5c" />
        </radialGradient>
        <filter id="lobster-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 身体：圆润渐变 + 浮动动画 */}
      <circle
        cx="60"
        cy="62"
        r="42"
        fill="url(#lobster-body-grad)"
        filter="url(#lobster-glow)"
        className="animate-lobster-float"
      />

      {/* 两只小手 */}
      <ellipse cx="28" cy="58" rx="12" ry="14" fill="#f8a5a5" className="animate-lobster-float" style={{ animationDelay: "0.1s" }} />
      <ellipse cx="92" cy="58" rx="12" ry="14" fill="#f8a5a5" className="animate-lobster-float" style={{ animationDelay: "0.15s" }} />

      {/* 眼睛：黑底 + 青蓝瞳孔 */}
      <circle cx="48" cy="48" r="10" fill="#1a1a2e" />
      <circle cx="72" cy="48" r="10" fill="#1a1a2e" />
      <circle cx="48" cy="48" r="5" fill="#22d3ee" className="animate-lobster-blink" />
      <circle cx="72" cy="48" r="5" fill="#22d3ee" className="animate-lobster-blink" />

      {/* 触须：带摆动（用 g 包裹并设置 transform-origin） */}
      <g style={{ transformOrigin: "60px 32px" }} className="animate-lobster-antenna">
        <path
          d="M52 32 Q48 18 44 10"
          stroke="#e85c5c"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M68 32 Q72 18 76 10"
          stroke="#e85c5c"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* 两只小脚 */}
      <rect x="44" y="98" width="14" height="8" rx="3" fill="#e85c5c" className="animate-lobster-float" style={{ animationDelay: "0.05s" }} />
      <rect x="62" y="98" width="14" height="8" rx="3" fill="#e85c5c" className="animate-lobster-float" style={{ animationDelay: "0.08s" }} />
    </svg>
  )
}
