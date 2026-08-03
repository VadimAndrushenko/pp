type IconProps = {
  className?: string
  strokeWidth?: number
}

export function HookahIcon({ className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 64 80" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="32" cy="6" r="3" />
      <line x1="32" y1="9" x2="32" y2="13" />
      <path d="M25,14 Q32,9 39,14 Q32,19 25,14 Z" />
      <line x1="32" y1="19" x2="32" y2="22" />
      <path d="M19,23 Q19,22 20,22 L44,22 Q45,22 45,23 L39,33 L25,33 Z" />
      <line x1="32" y1="33" x2="32" y2="47" />
      <path d="M25,47 C15,49 12,57 15,62 C18,68 24,72 32,72 C40,72 46,68 49,62 C52,57 49,49 39,47 Z" />
      <path d="M20,61 Q26,57 32,61 Q38,65 44,61" />
      <path d="M42,49 C52,51 57,58 53,65 C50,70 44,71 42,67 C40,64 43,61 46,62" />
      <circle cx="46" cy="62" r="1.6" />
    </svg>
  )
}

export function TobaccoJarIcon({ className, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="12" y1="2.2" x2="12" y2="3.6" />
      <ellipse cx="12" cy="5.2" rx="4.6" ry="1.4" />
      <path d="M5.3,9.8 C4.3,10.3 4.3,11.5 5.4,11.9" />
      <path d="M7.4,5.4 L7.1,14.2 C7.1,17.2 9.2,19.4 12,19.4 C14.8,19.4 16.9,17.2 16.9,14.2 L16.6,5.4" />
      <path d="M9.4,10.8 Q10.6,9.8 9.6,8.7" />
    </svg>
  )
}

export function CoalCubesIcon({ className, strokeWidth = 1.75 }: IconProps) {
  const cube = (cx: number, cy: number) => (
    <g>
      <path d={`M${cx - 4},${cy - 2} L${cx},${cy - 4} L${cx + 4},${cy - 2} L${cx},${cy} Z`} />
      <path d={`M${cx - 4},${cy - 2} L${cx},${cy} L${cx},${cy + 5} L${cx - 4},${cy + 3} Z`} />
      <path d={`M${cx + 4},${cy - 2} L${cx},${cy} L${cx},${cy + 5} L${cx + 4},${cy + 3} Z`} />
    </g>
  )
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {cube(7.5, 16)}
      {cube(16.5, 16)}
      {cube(12, 9)}
    </svg>
  )
}

export function DeliveryTruckIcon({ className, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="0.5" y1="9.5" x2="2.5" y2="9.5" />
      <line x1="0.5" y1="12" x2="1.8" y2="12" />
      <rect x="3" y="7.5" width="11" height="8" rx="1" />
      <path d="M14,10.5 H18.2 L21,13.3 V15.5 H14 Z" />
      <circle cx="7.5" cy="17.5" r="1.6" />
      <circle cx="18" cy="17.5" r="1.6" />
    </svg>
  )
}

export function ToolsIcon({ className, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4.5,20 L14,10.5" />
      <path d="M14,10.5 L16.2,7.8" />
      <path d="M14,10.5 L17.6,9.6" />
      <path d="M16.2,7.8 L17.6,9.6" />
      <path d="M19.5,20 L11,11.5" />
      <path d="M11,11.5 L8.6,10.4" />
      <path d="M11,11.5 L9.9,9.1" />
      <rect x="17.6" y="17.6" width="3.2" height="3.2" rx="0.6" transform="rotate(45 19.2 19.2)" />
    </svg>
  )
}

export function ChatPersonIcon({ className, strokeWidth = 1.75 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="6.8" cy="8" r="2.6" />
      <path d="M3,19.5 C3,15 4.6,13 6.8,13 C9,13 10.6,15 10.6,19.5" />
      <rect x="12.5" y="3.5" width="9" height="6.4" rx="2" />
      <path d="M14.5,9.9 L13.3,12.3 L16.6,9.9" />
    </svg>
  )
}