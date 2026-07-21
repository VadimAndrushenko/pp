import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Gem, Cherry } from "lucide-react"
import Slider from "@/components/ui/Slider"

const hookahPrice = ["/images/hookah/light.png", "/images/hookah/medium.png", "/images/hookah/strong.png"]

export function HookahPrices() {
  return (
    <section className="mb-12">
      <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 mb-4 -mx-5 px-5 md:mx-0 md:px-0">
        <Slider title="Стоимость кальяна в ресторане" cols={{ base: 1, sm: 2, lg: 3 }} className="mb-4">
          {hookahPrice.map((src) => (
            <div key={src} className="rounded-[var(--radius-card)] border border-[var(--color-border)] overflow-hidden">
              <Image src={src} alt="" width={400} height={400} className="w-full h-auto" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="flex items-center gap-4 p-5">
          <Gem className="w-8 h-8 shrink-0" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
          <div>
            <p className="text-sm font-display uppercase tracking-wider text-[var(--color-text-primary)]">Колба со льдом</p>
            <p className="text-2xl font-display font-bold" style={{ color: "var(--color-accent)" }}>+150.000₫</p>
          </div>
        </Card>
        <Card className="flex items-center gap-4 p-5">
          <Cherry className="w-8 h-8 shrink-0" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
          <div>
            <p className="text-sm font-display uppercase tracking-wider text-[var(--color-text-primary)]">Фруктовая чаша</p>
            <p className="text-2xl font-display font-bold" style={{ color: "var(--color-accent)" }}>+200.000₫</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
