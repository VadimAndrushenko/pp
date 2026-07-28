import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import Slider from "@/components/ui/Slider"

const services = [
  {
    title: "Еда и напитки",
    description: "Горячие блюда, закуски, салаты, десерты и напитки",
    image: "/images/delivery/food.png",
    href: "/menu",
  },
  {
    title: "Кальяны",
    description: "Более 40 вкусов на выбор. Готовим с любовью!",
    image: "/images/delivery/hookah.png",
    href: "/hookah",
  },
  {
    title: "Напитки",
    description: "Алкогольные и безалкогольные",
    image: "/images/delivery/drinks.png",
    href: "/menu",
  },
]

export function ServicesSection({ className }: { className?: string }) {
  return (
    <section className={className}>
      <Slider title="Что доставляем?" cols={{ base: 1, sm: 2, lg: 3 }} className="mb-4">
        {services.map((s, i) => (
          <Card
            key={i}
            as="a"
            href={s.href}
            className="group p-0 flex flex-col h-full overflow-hidden transition-all duration-500 ease-out hover:scale-100 active:scale-100 hover:-translate-y-2 hover:shadow-[0_4px_24px_-6px_var(--color-accent)]"
          >
            <div className="relative w-full shrink-0 overflow-hidden aspect-[4/3]">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col flex-1 gap-2 p-5">
              <h3 className="text-3xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
                {s.title}
              </h3>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed line-clamp-2 min-h-[3.75rem]">
                {s.description}
              </p>
              <ArrowRight
                className="w-10 h-10 mt-auto pt-2 text-[var(--color-accent)] transition-transform duration-500 group-hover:translate-x-1.5"
                strokeWidth={2}
              />
            </div>
          </Card>
        ))}
      </Slider>
    </section>
  )
}