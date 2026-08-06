import { Card } from "./card"
import { cn } from "@/components/lib/utils"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  className?: string
}

export function ServiceCard({ icon: Icon, title, description, href, className }: ServiceCardProps) {
  return (
    <Card as="a" href={href} className={cn("flex items-start gap-4 group", className)}>
      <Icon
        className="w-6 h-6 mt-0.5 shrink-0 text-accent transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,106,0,0.5)]"
        strokeWidth={1.5}
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-display uppercase tracking-wider text-text-primary group-hover:text-accent transition-colors duration-200 mb-1">
          {title}
        </h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
      <svg
        className="w-5 h-5 mt-1 shrink-0 text-accent transition-all duration-300 group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </Card>
  )
}
