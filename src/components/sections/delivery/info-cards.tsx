import { Card } from "@/components/ui/card"
import { Clock, Wallet } from "lucide-react"

export function InfoCards() {
  return (
    <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 section-py">
      <Card className="group relative overflow-hidden p-5 rounded-card bg-gradient-to-br from-surface to-black border border-border shadow-card-glow hover:border-accent hover:shadow-card-glow-hover transition-all duration-500 hover:-translate-y-1">
        {/* верхняя световая полоса — всегда видна, ярче при hover */}
        <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-accent-dim to-transparent group-hover:from-accent transition-all duration-500" />

        <div className="flex items-start gap-4">
          <div className="shrink-0 flex items-center justify-center w-11 h-11 max-sm:w-9 max-sm:h-9 rounded-full bg-accent/10 ring-1 ring-border group-hover:bg-accent/20 group-hover:ring-accent transition-all duration-500">
            <Clock className="w-5 h-5 max-sm:w-4 max-sm:h-4 text-accent" strokeWidth={2} />
          </div>
          <div>
            <p className="text-base max-sm:text-sm text-text-primary font-display uppercase tracking-widest mb-2 font-semibold">
              Время доставки
            </p>
            <p className="text-lg max-sm:text-base text-text-primary font-medium leading-relaxed">
              <span className="block">Центр <span className="text-accent">45–60 мин</span></span>
              <span className="block">Север / Юг <span className="text-accent">90–120 мин</span></span>
            </p>
          </div>
        </div>
      </Card>

      <Card className="group relative overflow-hidden p-5 rounded-card bg-gradient-to-br from-surface to-black border border-border shadow-card-glow hover:border-accent hover:shadow-card-glow-hover transition-all duration-500 hover:-translate-y-1">
        <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-accent-dim to-transparent group-hover:from-accent transition-all duration-500" />

        <div className="flex items-start gap-4">
          <div className="shrink-0 flex items-center justify-center w-11 h-11 max-sm:w-9 max-sm:h-9 rounded-full bg-accent/10 ring-1 ring-border group-hover:bg-accent/20 group-hover:ring-accent transition-all duration-500">
            <Wallet className="w-5 h-5 max-sm:w-4 max-sm:h-4 text-accent" strokeWidth={2} />
          </div>
          <div>
            <p className="text-base max-sm:text-sm text-text-primary font-display uppercase tracking-widest mb-2 font-semibold">
              Бесплатная доставка
            </p>
            <p className="text-lg max-sm:text-base text-text-primary font-medium leading-relaxed">
              <span className="block">Бесплатная доставка от <span className="text-accent font-semibold">1.000.000₫</span></span>
              <span className="block">Мин. заказ <span className="text-accent font-semibold">100.000₫</span></span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}