import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  variant?: "outline" | "solid" | "ghost"
  className?: string
  as?: "div" | "a" | "button"
  href?: string
  onClick?: () => void
  style?: React.CSSProperties
}

export function Card({ children, variant = "outline", className, as: Tag = "div", href, onClick, style }: CardProps) {
  const variants = {
    outline:
      "border border-[var(--color-border)] bg-transparent",
    solid:
      "bg-[var(--color-surface)] border border-[var(--color-border)]",
    ghost:
      "bg-transparent border-none",
  }

  const classes = cn(
    "rounded-[var(--radius-card)] p-4 transition-all duration-300",
    variants[variant],
    Tag === "a" &&
      "block hover:border-[var(--color-accent)] hover:shadow-[0_0_20px_rgba(255,106,0,0.15)] hover:scale-[1.02] cursor-pointer active:scale-[0.98]",
    Tag === "button" &&
      "hover:border-[var(--color-accent)] hover:shadow-[0_0_15px_rgba(255,106,0,0.1)] cursor-pointer active:scale-[0.98]",
    className,
  )

  if (Tag === "a") {
    return (
      <a
        href={href}
        className={classes}
        style={style}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <Tag className={classes} onClick={onClick} style={style}>
      {children}
    </Tag>
  )
}
