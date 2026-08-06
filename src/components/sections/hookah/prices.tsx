import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Gem, Cherry } from "lucide-react"
import Slider from "@/components/ui/Slider"

const hookahPrice = ["/images/hookah/light.png", "/images/hookah/medium.png", "/images/hookah/strong.png"]

export function HookahPrices({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 mb-4 mx-0 px-0 max-md:-mx-5 max-md:px-5">
        <Slider title="Стоимость кальяна в ресторане" cols={{ base: 1, sm: 2, lg: 3 }} className="mb-4">
          {hookahPrice.map((src) => (
            <div key={src} className="rounded-card border border-border overflow-hidden">
              <Image src={src} alt="" width={400} height={400} className="w-full h-auto" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="flex items-center gap-4 p-5">
          <Gem className="w-8 h-8 shrink-0 text-accent"  strokeWidth={1.5} />
          <div>
            <p className="text-sm font-display uppercase tracking-wider text-text-primary">Колба со льдом</p>
            <p className="text-2xl font-display font-bold text-accent" >+150.000₫</p>
          </div>
        </Card>
        <Card className="flex items-center gap-4 p-5">
          <Cherry className="w-8 h-8 shrink-0 text-accent"  strokeWidth={1.5} />
          <div>
            <p className="text-sm font-display uppercase tracking-wider text-text-primary">Фруктовая чаша</p>
            <p className="text-2xl font-display font-bold text-accent" >+200.000₫</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
