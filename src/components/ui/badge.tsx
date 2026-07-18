import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "accent" | "success"
  className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)]",
    accent: "bg-[var(--color-accent)] text-white",
    success: "bg-[var(--color-success)] text-black",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-display uppercase tracking-wider px-3 py-1 rounded-[var(--radius-sm)]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
