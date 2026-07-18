import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Banknote, RefreshCw, ShieldCheck, Clock } from "lucide-react"

export default function CurrencyPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-2">
          Обмен рублей
        </h1>
        <p className="text-sm font-display uppercase tracking-wider mb-2" style={{ color: "var(--color-accent)" }}>
          Выгодный курс, быстро и безопасно
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Обмен валюты на территории ресторана. Лучший курс на острове.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: RefreshCw, title: "Выгодный курс", desc: "Лучший курс на острове" },
            { icon: ShieldCheck, title: "Безопасно", desc: "Только легальные операции" },
            { icon: Clock, title: "Быстро", desc: "Обмен за 2 минуты" },
          ].map((item, i) => {
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

        <Card className="p-6 text-center">
          <Banknote className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
          <h2 className="text-xl font-display font-bold uppercase text-[var(--color-text-primary)] mb-3">
            Уточнить курс
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6">
            Свяжитесь с нами для получения актуального курса
          </p>
          <Button variant="solid" as="a" href="https://wa.me/84855559797">
            Узнать курс
          </Button>
        </Card>
      </div>
    </div>
  )
}
