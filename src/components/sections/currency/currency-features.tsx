import { Card } from "@/components/ui/card"
import { RefreshCw, ShieldCheck, Clock } from "lucide-react"

const features = [
  { icon: RefreshCw, title: "Выгодный курс", desc: "Лучший курс на острове" },
  { icon: ShieldCheck, title: "Безопасно", desc: "Только легальные операции" },
  { icon: Clock, title: "Быстро", desc: "Обмен за 2 минуты" },
]

export function CurrencyFeatures() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      {features.map((item, i) => {
        const Icon = item.icon
        return (
          <Card key={i} className="flex flex-col items-center text-center gap-3 p-5">
            <Icon className="w-8 h-8" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
            <h3 className="text-sm font-display uppercase text-[var(--color-text-primary)]">{item.title}</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">{item.desc}</p>
          </Card>
        )
      })}
    </div>
  )
}
