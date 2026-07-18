import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Card } from "@/components/ui/card"
import { Globe, Sun, Umbrella, Ship, Plane, UtensilsCrossed } from "lucide-react"

export default function IslandInfoPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-2">
          Инфо-Фукуок
        </h1>
        <p className="text-sm font-display uppercase tracking-wider mb-2" style={{ color: "var(--color-accent)" }}>
          Вся полезная информация об острове
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Полезная информация для туристов и жителей острова Фукуок.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Sun, title: "Погода", desc: "Тропический климат круглый год" },
            { icon: Umbrella, title: "Пляжи", desc: "Лучшие пляжи острова" },
            { icon: Ship, title: "Транспорт", desc: "Как передвигаться по острову" },
            { icon: Plane, title: "Как добраться", desc: "Авиаперелёты и паромы" },
            { icon: UtensilsCrossed, title: "Где поесть", desc: "Рестораны и кафе" },
            { icon: Globe, title: "Достопримечательности", desc: "Что посмотреть" },
          ].map((item, i) => {
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
      </div>
    </div>
  )
}
