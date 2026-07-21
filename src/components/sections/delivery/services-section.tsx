import { Card } from "@/components/ui/card"
import { Coffee, Cigarette, Wine, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Coffee,
    title: "Еда и напитки",
    description: "Все блюда из меню с доставкой",
    href: "/menu",
  },
  {
    icon: Cigarette,
    title: "Кальяны",
    description: "Премиальные кальяны на выезд",
    href: "/hookah",
  },
  {
    icon: Wine,
    title: "Напитки",
    description: "Алкогольные и безалкогольные",
    href: "/menu",
  },
]

export function ServicesSection() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-4">
        Что доставляем?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {services.map((s, i) => {
          const Icon = s.icon
          return (
            <Card key={i} as="a" href={s.href} className="flex flex-col gap-3 p-4">
              <Icon className="w-6 h-6" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
              <h3 className="text-sm font-display uppercase text-[var(--color-text-primary)]">{s.title}</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">{s.description}</p>
              <ArrowRight className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
            </Card>
          )
        })}
      </div>
    </section>
  )
}
