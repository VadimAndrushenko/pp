import Image from "next/image"
import type { MenuData } from "@/config/menu-data"

export function MenuHero({ menu }: { menu: MenuData }) {
  return (
    <section className="relative overflow-hidden rounded-card border border-border mb-8">
      <Image
        src={menu.image}
        alt={menu.title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
      <div className="relative z-10 flex flex-col justify-center min-h-[340px] max-sm:min-h-[280px] p-10 max-lg:p-8 max-sm:px-5">
        <p className="font-display uppercase tracking-widest text-accent text-base max-sm:text-sm mb-4 drop-shadow-accent">
          Меню ресторана
        </p>
        <h1 className="font-display font-bold uppercase tracking-tight text-7xl max-lg:text-6xl max-sm:text-5xl text-white">
          {menu.title}
        </h1>
        <p className="mt-4 max-w-xl text-text-secondary text-xl max-sm:text-base">
          {menu.subtitle}
        </p>
      </div>
    </section>
  )
}