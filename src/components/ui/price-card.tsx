import { Card } from "./card"
import { cn } from "@/lib/utils"
import type { PriceTier } from "@/types"

interface PriceCardProps extends PriceTier {
  className?: string
}

export function PriceCard({ name, price, image, description, className }: PriceCardProps) {
  return (
    <Card className={cn("flex flex-col items-center text-center gap-3", className)}>
      <div
        className="w-20 h-20 rounded-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <h3 className="text-lg font-display uppercase text-[var(--color-text-primary)]">{name}</h3>
      {description && (
        <p className="text-xs text-[var(--color-text-secondary)]">{description}</p>
      )}
      <p className="text-xl font-display font-bold text-[var(--color-accent)]">{price}</p>
    </Card>
  )
}
