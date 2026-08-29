import Image from "next/image"
import type { MenuData } from "@/config/menu-data"

export function MenuHero({ menu, index }: { menu: MenuData; index?: number }) {
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/25" />
      <div className="relative z-10 flex flex-col justify-center min-h-[240px] max-sm:min-h-[180px] p-6 max-lg:p-5 max-sm:px-4">
        <div className="flex items-center gap-6 max-sm:gap-4">
          <div className="min-w-0 flex-1">
            <p className="font-display uppercase tracking-widest text-accent text-sm max-sm:text-xs mb-3 max-sm:mb-2 drop-shadow-accent">
              Меню ресторана
            </p>
            <h1 className="font-display font-bold uppercase tracking-tight text-6xl max-lg:text-5xl max-sm:text-3xl text-white">
              {menu.title}
            </h1>
            {menu.subtitle && (
              <p className="mt-4 max-sm:mt-2 max-w-xl text-text-secondary text-lg max-sm:text-sm">
                {menu.subtitle}
              </p>
            )}
          </div>
          {typeof index === "number" && (
            <span className="font-display text-2xl max-sm:text-xl whitespace-nowrap rounded-sm border border-border/60 bg-black/40 px-2.5 py-1 backdrop-blur-sm shrink-0">
              <span className="text-accent/80">{"|"}</span>
              <span className="text-white">{index + 1}</span>
              <span className="text-accent/80">{"|"}</span>
            </span>
          )}
        </div>
      </div>
    </section>
  )
}