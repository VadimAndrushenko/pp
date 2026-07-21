import { Card } from "@/components/ui/card"

const zones = [
  { zone: "Центр (Дуонг Донг)", price: "50.000–90.000₫", time: "~45-60мин" },
  { zone: "Север острова", price: "150.000₫", time: "~90-120мин" },
  { zone: "Юг острова", price: "150.000₫", time: "~90-120мин" },
]

export function ZonesSection() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-4">
        Зоны доставки и стоимость
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {zones.map((z, i) => (
          <Card key={i} className="p-4 text-center">
            <h3 className="text-sm font-display uppercase text-[var(--color-text-primary)] mb-2">{z.zone}</h3>
            <p className="text-lg font-display font-bold text-[var(--color-accent)] mb-1">{z.price}</p>
            <p className="text-xs text-[var(--color-text-muted)]">{z.time}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
