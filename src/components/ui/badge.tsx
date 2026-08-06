import { cn } from "@/components/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "accent" | "success"
  className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-surface text-text-secondary border border-border",
    accent: "bg-accent text-white",
    success: "bg-success text-black",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-display uppercase tracking-wider px-3 py-1 rounded-sm",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
