import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Percent, Star, Cake, Coffee, Beer } from "lucide-react"

const promotions = [
  { icon: Gift, title: "День рождения", desc: "Празднуй у нас и получай подарки!", badge: "Активно" },
  { icon: Percent, title: "Счастливые часы", desc: "Скидки на напитки с 17:00 до 19:00", badge: "Ежедневно" },
  { icon: Star, title: "Бонусная программа", desc: "Копите бонусы и оплачивайте до 50% заказа", badge: "Постоянно" },
  { icon: Coffee, title: "Бизнес-завтрак", desc: "Скидка 20% на завтраки в будние дни", badge: "Активно" },
  { icon: Beer, title: "Пивной сет", desc: "Сет закусок к пиву со скидкой 15%", badge: "Активно" },
  { icon: Cake, title: "Караоке-батл", desc: "Победитель получает десерт в подарок", badge: "Каждую пятницу" },
]

export function PromotionsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 section-py">
      {promotions.map((p, i) => {
        const Icon = p.icon
        return (
          <Card key={i} className="flex items-start gap-4 p-5">
            <Icon className="w-8 h-8 shrink-0 mt-1 text-accent"  strokeWidth={1.5} />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-base font-display uppercase text-text-primary">{p.title}</h3>
                <Badge>{p.badge}</Badge>
              </div>
              <p className="text-xs text-text-secondary">{p.desc}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
