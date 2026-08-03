import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const cards = [
  {
    href: "/gallery/photos",
    title: "Фото отчёты",
    image: "https://picsum.photos/seed/poidem-collage-photo/600/400",
  },
  {
    href: "/gallery/videos",
    title: "Видео отчёты",
    image: "https://picsum.photos/seed/poidem-collage-video/600/400",
  },
]

export function HeroCards({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-4 max-sm:gap-3 ${className ?? ""}`}>
      {cards.map((card) => (
        <Card
          key={card.href}
          as="a"
          href={card.href}
          className="group p-0 flex flex-col h-full overflow-hidden transition-all duration-500 ease-out hover:scale-100 active:scale-95 hover:-translate-y-2 hover:shadow-[0_4px_24px_-6px_var(--color-accent)] cursor-pointer"
        >
          <div className="relative aspect-[2/1] w-full shrink-0 overflow-hidden max-lg:aspect-[3/2] max-[500px]:aspect-square max-sm:aspect-[2/3]">
            <Image src={card.image} alt={card.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
          <div className="absolute bottom-0 z-10 flex flex-col flex-1 gap-2 p-5 max-sm:p-1.5 max-sm:inset-x-0 max-sm:mx-auto max-sm:w-fit max-sm:items-center max-sm:text-center max-sm:py-3">
            <h3 className="
              flex items-center justify-center gap-3 text-center text-3xl 
              font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] 
              max-lg:text-2xl max-sm:text-lg


            ">
              <span>{card.title}</span>
              <ArrowRight
                className="
                  w-16 h-16 text-[var(--color-accent)] transition-transform duration-500 group-hover:translate-x-1.5 
                  max-lg:w-12 max-lg:h-12 max-sm:w-7 max-sm:h-7
                "
                strokeWidth={2}
              />
            </h3>
          </div>
        </Card>
      ))}
    </div>
  )
}