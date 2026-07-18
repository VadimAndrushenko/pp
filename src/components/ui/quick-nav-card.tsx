import { Card } from "./card"
import { LucideIcon } from "lucide-react"

interface QuickNavCardProps {
  icon: LucideIcon
  label: string
  href: string
}

export function QuickNavCard({ icon: Icon, label, href }: QuickNavCardProps) {
  return (
    <Card
      as="a"
      href={href}
      className="flex flex-col items-center justify-center gap-3 p-4 text-center min-h-[120px] group"
    >
      <Icon
        className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,106,0,0.5)]"
        style={{ color: "var(--color-accent)" }}
        strokeWidth={1.5}
      />
      <span className="text-xs font-display uppercase tracking-wider text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
        {label}
      </span>
    </Card>
  )
}
