import { Card } from "./card"
import { cn } from "@/components/lib/utils"
import { ArrowRight } from "lucide-react"

interface PromoBannerProps {
  title: string
  description: string
  href: string
  image?: string
  className?: string
}

export function PromoBanner({ title, description, href, image, className }: PromoBannerProps) {
  return (
    <Card
      as="a"
      href={href}
      className={cn(
        "relative overflow-hidden min-h-[160px] flex flex-col justify-end p-5",
        image ? "text-white" : "text-[var(--color-text-primary)]",
        className,
      )}
      style={
        image
          ? {
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <h3 className="text-lg font-display uppercase tracking-wider mb-1">{title}</h3>
      <p className="text-xs text-[var(--color-text-secondary)] mb-3">{description}</p>
      <span
        className="inline-flex items-center gap-1 text-xs font-display uppercase tracking-wider"
        style={{ color: "var(--color-accent)" }}
      >
        Подробнее
        <ArrowRight className="w-3 h-3" />
      </span>
    </Card>
  )
}
