import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"

const zones = [
  { label: "Центр города", price: "1 490 000₫" },
  { label: "Север острова", price: "1 690 000₫" },
]

export function HookahOutPricing({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h2 className="text-center font-display font-bold uppercase tracking-wide text-5xl max-xl:text-4xl max-sm:text-3xl text-[var(--color-text-primary)] mb-6">
        Стоимость доставки
      </h2>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
        {zones.map(({ label, price }) => (
          <Card
            key={label}
            className="group relative overflow-hidden p-6 max-sm:p-4 rounded-[var(--radius-card)] bg-gradient-to-br from-[var(--color-surface)] to-black border border-[var(--color-border)] shadow-[0_0_16px_-6px_var(--color-accent-dim)] hover:border-[var(--color-accent)] hover:shadow-[0_0_28px_-4px_var(--color-accent)] transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[var(--color-accent-dim)] to-transparent group-hover:from-[var(--color-accent)] transition-all duration-500" />

            <div className="flex items-center justify-center text-center gap-8 max-xl:gap-6 max-sm:gap-4 py-6 max-sm:py-4 ">
              <div className="flex items-center justify-center w-24 h-24 max-xl:w-20 max-xl:h-20 max-sm:w-16 max-sm:h-16 rounded-full bg-[var(--color-accent)]/10 ring-1 ring-[var(--color-border)] group-hover:bg-[var(--color-accent)]/20 group-hover:ring-[var(--color-accent)] transition-all duration-500">
                <MapPin className="w-14 h-14 max-xl:w-11 max-xl:h-11 max-sm:w-9 max-sm:h-9 text-[var(--color-accent)]" strokeWidth={2} />
              </div>

              <div className="space-y-1.5">
                <p className="text-3xl max-xl:text-2xl max-sm:text-xl text-[var(--color-text-primary)] font-display uppercase tracking-widest font-semibold">
                  {label}
                </p>
                <p className="text-5xl max-xl:text-4xl max-sm:text-2xl font-display font-bold text-[var(--color-accent)]">
                  {price}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <p className="text-center text-base max-sm:text-sm text-[var(--color-text-secondary)] mt-4">
        * Цены указаны за один кальян на компанию.
      </p>
    </div>
  )
}