import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PartyPopper, Mic, Music, Users, CalendarCheck, Star } from "lucide-react"

export default function BanquetPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-2">
          Банкет / Аренда зала
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Отпразднуйте своё событие в лучшем ресторане Фукуока. Аренда зала, выступления, мероприятия.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: Users, title: "Вместимость", desc: "До 50 гостей" },
            { icon: Mic, title: "Оборудование", desc: "Звук, свет, микрофоны" },
            { icon: Music, title: "Музыка", desc: "DJ или живая музыка" },
            { icon: Star, title: "Меню", desc: "Индивидуальное меню" },
          ].map((item, i) => {
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

        <Card className="p-6 text-center mb-8">
          <PartyPopper className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
          <h2 className="text-xl font-display font-bold uppercase text-[var(--color-text-primary)] mb-3">
            Заказать банкет
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6">
            Свяжитесь с нами для обсуждения деталей
          </p>
          <Button variant="solid" size="lg" as="a" href="https://wa.me/84855559797">
            Связаться
          </Button>
        </Card>
      </div>
    </div>
  )
}
