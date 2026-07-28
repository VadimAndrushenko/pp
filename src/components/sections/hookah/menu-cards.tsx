import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const cards = [
  {
    href: "/menu/hookah.pdf",
    title: "Кальянное меню",
    subtitle: "Выбери вкус и крепость по своему настроению",
    image: "/images/hookah/menu-cover.png",
    buttonLabel: "Смотреть меню",
  },
  {
    href: "/delivery",
    title: "Выездной кальян",
    subtitle: "Привезём и установим в любую точку",
    image: "/images/hookah/delivery-cover.png",
    buttonLabel: "Подробнее",
  },
]

export function HookahMenuCards({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-5 max-lg:gap-x-4 ${className ?? ""}`}>
      {cards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className="group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] aspect-[4/2.3] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_0_30px_rgba(255,106,0,0.35)]"
        >
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 z-10 flex flex-col justify-between p-10 max-lg:p-6 max-sm:px-3.5 max-sm:py-2.5" >
            <div className="flex items-center flex-col text-center">
              <h3 className="
                text-[32px] font-display font-bold uppercase tracking-wide text-[var(--color-text-primary)] 
                transition-all duration-300 group-hover:text-[var(--color-accent)] 
 
                max-lg:text-[24px] max-sm:text-lg
              ">
                {card.title}
              </h3>
              <p className="
                mt-2 lg:text-lg text-[var(--color-text-secondary)] max-w-[300px] transition-all duration-300 
                group-hover:text-[var(--color-text-primary)]

                max-lg:text-base max-sm:text-sm
              ">
                {card.subtitle}
              </p>
            </div>

            <div className="flex items-center flex-1">
              <span className="
                inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-card)] 
                border border-[var(--color-border)] font-display uppercase tracking-wider text-sm 
                text-[var(--color-text-primary)] transition-all duration-300 group-hover:bg-[var(--color-accent)] 
                group-hover:border-[var(--color-accent)] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,106,0,0.4)]

                max-lg:px-4 max-lg:py-2 max-lg:text-xs
              ">
                {card.buttonLabel}
                <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
