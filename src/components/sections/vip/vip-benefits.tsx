import { Card } from "@/components/ui/card"
import { Percent, Gift, Star, Zap } from "lucide-react"

const benefits = [
  { icon: Percent, title: "Кешбэк до 50%", description: "Возвращаем бонусами до половины суммы заказа" },
  { icon: Gift, title: "Подарки на день рождения", description: "Скидки и угощения от заведения" },
  { icon: Star, title: "Приоритетный вход", description: "Без очереди в выходные и праздники" },
  { icon: Zap, title: "Эксклюзивные предложения", description: "Только для участников клуба" },
]

export function VipBenefits({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${className ?? ""}`}>
      {benefits.map((b, i) => {
        const Icon = b.icon
        return (
          <Card key={i} className="flex items-start gap-4 p-5">
            <Icon className="w-8 h-8 shrink-0 text-accent"  strokeWidth={1.5} />
            <div>
              <h3 className="text-base font-display uppercase text-text-primary mb-1">{b.title}</h3>
              <p className="text-xs text-text-secondary">{b.description}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
