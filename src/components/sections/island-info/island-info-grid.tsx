import { Card } from "@/components/ui/card"
import { Globe, Sun, Umbrella, Ship, Plane, UtensilsCrossed } from "lucide-react"

const infoCards = [
  { icon: Sun, title: "Погода", desc: "Тропический климат круглый год" },
  { icon: Umbrella, title: "Пляжи", desc: "Лучшие пляжи острова" },
  { icon: Ship, title: "Транспорт", desc: "Как передвигаться по острову" },
  { icon: Plane, title: "Как добраться", desc: "Авиаперелёты и паромы" },
  { icon: UtensilsCrossed, title: "Где поесть", desc: "Рестораны и кафе" },
  { icon: Globe, title: "Достопримечательности", desc: "Что посмотреть" },
]

export function IslandInfoGrid({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${className ?? ""}`}>
      {infoCards.map((item, i) => {
        const Icon = item.icon
        return (
          <Card key={i} className="flex items-start gap-4 p-5">
            <Icon className="w-8 h-8 shrink-0" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
            <div>
              <h3 className="text-sm font-display uppercase text-[var(--color-text-primary)] mb-1">{item.title}</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
