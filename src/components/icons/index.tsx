export type IconProps = {
  className?: string
  style?: React.CSSProperties
  strokeWidth?: number
}

export function Cloche({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 14h20" />
      <path d="M12 14v4" />
      <path d="M6 10a6 6 0 0 1 12 0" />
      <path d="M4 14c0 2.5 2 5 8 5s8-2.5 8-5" />
    </svg>
  )
}

export function BowlSteam({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v2" />
      <path d="M11 2v2" />
      <path d="M14 2v2" />
      <path d="M2 12c0 2.5 2 7 10 7s10-4.5 10-7" />
      <path d="M3 12h18" />
      <path d="M6 12c0-2 1-4 6-4s6 2 6 4" />
    </svg>
  )
}

export function Skewer({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2L4 18" />
      <path d="M4 18l-2 3" />
      <path d="M16 6l-3 5" />
      <path d="M18 10l-4 6" />
      <path d="M20 14l-5 7" />
      <path d="M8 4l-2 4" />
      <path d="M6 8l-1 3" />
      <circle cx="10" cy="20" r="2" />
    </svg>
  )
}

export function OrnamentSnowflake({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20" />
      <path d="M2 12h20" />
      <path d="M4.93 4.93l14.14 14.14" />
      <path d="M19.07 4.93L4.93 19.07" />
      <path d="M6 6l2 2" />
      <path d="M12 6v2" />
      <path d="M6 12h2" />
      <path d="M16 12h2" />
      <path d="M12 16v2" />
      <path d="M18 6l-2 2" />
      <path d="M6 18l2-2" />
      <path d="M18 18l-2-2" />
    </svg>
  )
}

export function OrnamentFlower({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1a4 4 0 0 0 0 8" />
      <path d="M12 15a4 4 0 0 0 0 8" />
      <path d="M1 12a4 4 0 0 0 8 0" />
      <path d="M15 12a4 4 0 0 0 8 0" />
      <path d="M4.5 4.5a4 4 0 0 0 5.66 5.66" />
      <path d="M13.84 13.84a4 4 0 0 0 5.66 5.66" />
      <path d="M4.5 19.5a4 4 0 0 0 5.66-5.66" />
      <path d="M13.84 10.16a4 4 0 0 0 5.66-5.66" />
    </svg>
  )
}

export function OrnamentGeometric({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" />
      <polygon points="12,6 18,9 18,15 12,18 6,15 6,9" />
      <polygon points="12,10 15,11.5 15,14.5 12,16 9,14.5 9,11.5" />
    </svg>
  )
}

export function Star({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12,2 15.5,9 23,9.5 17,15 18.5,23 12,19 5.5,23 7,15 1,9.5 8.5,9" />
    </svg>
  )
}

export function Lotus({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c-4 0-8-2.5-8-8 0-6 8-12 8-12s8 6 8 12c0 5.5-4 8-8 8z" />
      <path d="M12 14c-2 0-3-1-3-3 0-2 3-5 3-5s3 3 3 5c0 2-1 3-3 3z" />
      <path d="M8 17c-1-1.5-1-3 0-4" />
      <path d="M16 17c1-1.5 1-3 0-4" />
    </svg>
  )
}

export function Glass({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2h8l2 16H6L8 2z" />
      <path d="M6 18c0 2 2 3 6 3s6-1 6-3" />
      <path d="M12 18v3" />
      <path d="M9 10h6" />
    </svg>
  )
}

export function Bottle({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2h4v4l-2 3v5h-2V9L8 6V2z" />
      <path d="M6 18c0 2 2 4 6 4s6-2 6-4" />
      <path d="M6 14c0 2 2 4 6 4s6-2 6-4" />
      <path d="M10 18v4" />
      <path d="M14 18v4" />
    </svg>
  )
}

export function Pretzel({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c-4 0-6-2-6-4 0-2 1-3 3-3s3 1 3 3c0 1-1 2-2 2" />
      <path d="M6 18c-2-3-4-5-4-8 0-4 4-7 10-7s10 3 10 7c0 3-2 5-4 8" />
      <path d="M18 18c-2 3-4 4-6 4" />
      <path d="M16 10a2 2 0 0 0-4 0" />
      <path d="M8 10a2 2 0 0 1 4 0" />
      <path d="M12 10v4" />
    </svg>
  )
}

export function Crescent({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      <path d="M16 4v2" />
      <path d="M18 6h2" />
      <path d="M17 2v1" />
      <path d="M19 4l1-1" />
      <path d="M12 21v-2" />
    </svg>
  )
}

export function Hookah({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 16v6" />
      <path d="M12 16c-3 0-5-2-5-5V5c0-1 1-2 2-2h6c1 0 2 1 2 2v6c0 3-2 5-5 5z" />
      <path d="M9 5h6" />
      <path d="M9 8h6" />
      <path d="M9 11h6" />
      <path d="M4 22c0-2 2-3 4-3" />
      <path d="M20 22c0-2-2-3-4-3" />
      <path d="M12 22h-2" />
      <path d="M14 22h-2" />
    </svg>
  )
}
