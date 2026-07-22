import { Card } from "@/components/ui/card"
import { Clock, Wallet } from "lucide-react"

export function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <Card className="group relative overflow-hidden p-5 rounded-[var(--radius-card)] bg-gradient-to-br from-[var(--color-surface)] to-black border border-[var(--color-border)] shadow-[0_0_16px_-6px_var(--color-accent-dim)] hover:border-[var(--color-accent)] hover:shadow-[0_0_28px_-4px_var(--color-accent)] transition-all duration-500 hover:-translate-y-1">
        {/* верхняя световая полоса — всегда видна, ярче при hover */}
        <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[var(--color-accent-dim)] to-transparent group-hover:from-[var(--color-accent)] transition-all duration-500" />

        <div className="flex items-start gap-4">
          <div className="shrink-0 flex items-center justify-center w-11 h-11 max-sm:w-9 max-sm:h-9 rounded-full bg-[var(--color-accent)]/10 ring-1 ring-[var(--color-border)] group-hover:bg-[var(--color-accent)]/20 group-hover:ring-[var(--color-accent)] transition-all duration-500">
            <Clock className="w-5 h-5 max-sm:w-4 max-sm:h-4 text-[var(--color-accent)]" strokeWidth={2} />
          </div>
          <div>
            <p className="text-base max-sm:text-sm text-[var(--color-text-primary)] font-display uppercase tracking-widest mb-2 font-semibold">
              Время доставки
            </p>
            <p className="text-lg max-sm:text-base text-[var(--color-text-primary)] font-medium leading-relaxed">
              <span className="block">Центр <span className="text-[var(--color-accent)]">45–60 мин</span></span>
              <span className="block">Север / Юг <span className="text-[var(--color-accent)]">90–120 мин</span></span>
            </p>
          </div>
        </div>
      </Card>

      <Card className="group relative overflow-hidden p-5 rounded-[var(--radius-card)] bg-gradient-to-br from-[var(--color-surface)] to-black border border-[var(--color-border)] shadow-[0_0_16px_-6px_var(--color-accent-dim)] hover:border-[var(--color-accent)] hover:shadow-[0_0_28px_-4px_var(--color-accent)] transition-all duration-500 hover:-translate-y-1">
        <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[var(--color-accent-dim)] to-transparent group-hover:from-[var(--color-accent)] transition-all duration-500" />

        <div className="flex items-start gap-4">
          <div className="shrink-0 flex items-center justify-center w-11 h-11 max-sm:w-9 max-sm:h-9 rounded-full bg-[var(--color-accent)]/10 ring-1 ring-[var(--color-border)] group-hover:bg-[var(--color-accent)]/20 group-hover:ring-[var(--color-accent)] transition-all duration-500">
            <Wallet className="w-5 h-5 max-sm:w-4 max-sm:h-4 text-[var(--color-accent)]" strokeWidth={2} />
          </div>
          <div>
            <p className="text-base max-sm:text-sm text-[var(--color-text-primary)] font-display uppercase tracking-widest mb-2 font-semibold">
              Бесплатная доставка
            </p>
            <p className="text-lg max-sm:text-base text-[var(--color-text-primary)] font-medium leading-relaxed">
              <span className="block">Бесплатная доставка от <span className="text-[var(--color-accent)] font-semibold">1.000.000₫</span></span>
              <span className="block">Мин. заказ <span className="text-[var(--color-accent)] font-semibold">100.000₫</span></span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}