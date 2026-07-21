import { Card } from "@/components/ui/card"
import { Mic, Music, Users, Star } from "lucide-react"

const features = [
  { icon: Users, title: "Вместимость", desc: "До 50 гостей" },
  { icon: Mic, title: "Оборудование", desc: "Звук, свет, микрофоны" },
  { icon: Music, title: "Музыка", desc: "DJ или живая музыка" },
  { icon: Star, title: "Меню", desc: "Индивидуальное меню" },
]

export function BanquetFeatures() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      {features.map((item, i) => {
        const Icon = item.icon
        return (
          <Card key={i} className="flex items-center gap-4 p-4">
            <Icon className="w-8 h-8 shrink-0" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
            <div>
              <h3 className="text-sm font-display uppercase text-[var(--color-text-primary)]">{item.title}</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
