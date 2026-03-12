"use client"

interface LobsterIconProps {
  className?: string
  size?: number
}

export function LobsterIcon({ className = "", size = 24 }: LobsterIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Body */}
      <ellipse cx="24" cy="28" rx="10" ry="12" fill="currentColor" opacity="0.9" />
      <ellipse cx="24" cy="28" rx="7" ry="9" fill="currentColor" opacity="0.7" />
      
      {/* Head */}
      <circle cx="24" cy="16" r="8" fill="currentColor" />
      <circle cx="24" cy="16" r="5" fill="currentColor" opacity="0.8" />
      
      {/* Eyes */}
      <circle cx="20" cy="13" r="2" fill="white" />
      <circle cx="28" cy="13" r="2" fill="white" />
      <circle cx="20" cy="13" r="1" fill="currentColor" opacity="0.8" />
      <circle cx="28" cy="13" r="1" fill="currentColor" opacity="0.8" />
      
      {/* Antennae */}
      <path
        d="M20 10 Q16 4 12 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M28 10 Q32 4 36 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Left Claw */}
      <path
        d="M14 22 Q8 18 6 14 Q4 10 8 10 Q12 10 14 14"
        fill="currentColor"
      />
      <path
        d="M14 22 Q8 26 4 28 Q0 30 2 34 Q4 36 8 34 Q12 32 14 28"
        fill="currentColor"
      />
      
      {/* Right Claw */}
      <path
        d="M34 22 Q40 18 42 14 Q44 10 40 10 Q36 10 34 14"
        fill="currentColor"
      />
      <path
        d="M34 22 Q40 26 44 28 Q48 30 46 34 Q44 36 40 34 Q36 32 34 28"
        fill="currentColor"
      />
      
      {/* Tail segments */}
      <ellipse cx="24" cy="38" rx="6" ry="3" fill="currentColor" opacity="0.85" />
      <ellipse cx="24" cy="42" rx="4" ry="2" fill="currentColor" opacity="0.75" />
      <ellipse cx="24" cy="45" rx="3" ry="1.5" fill="currentColor" opacity="0.65" />
      
      {/* Tail fan */}
      <path
        d="M24 46 Q20 48 18 46 Q16 44 18 42 L24 46"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M24 46 Q28 48 30 46 Q32 44 30 42 L24 46"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  )
}
