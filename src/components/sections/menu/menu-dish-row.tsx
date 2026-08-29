"use client"

import type { MenuDish } from "@/config/menu-data"
import { Leaf, CandyOff, Star } from "lucide-react"
import { AddToCartControl } from "@/components/cart/add-to-cart-control"
import { getPrices } from "@/lib/pricing"

type BadgeIcon = React.ComponentType<{ className?: string; strokeWidth?: number }>

const badgeConfig: Record<string, { Icon: BadgeIcon; className: string }> = {
  "премиум": {
    Icon: Star,
    className:
      "text-[#ffd700] border-[#ffd700]/60 bg-gradient-to-b from-[#ffd700]/30 to-[#ffd700]/10 shadow-[0_0_20px_rgba(255,215,0,0.4),inset_0_0_12px_rgba(255,215,0,0.15)]",
  },
  "веганское блюдо": {
    Icon: Leaf,
    className:
      "text-success border-success/60 bg-gradient-to-b from-success/30 to-success/10 shadow-[0_0_20px_rgba(62,207,110,0.4),inset_0_0_12px_rgba(62,207,110,0.15)]",
  },
  "вегетарианское блюдо": {
    Icon: Leaf,
    className:
      "text-success border-success/60 bg-gradient-to-b from-success/30 to-success/10 shadow-[0_0_20px_rgba(62,207,110,0.4),inset_0_0_12px_rgba(62,207,110,0.15)]",
  },
  "без добавленного сахара": {
    Icon: CandyOff,
    className:
      "text-neon-blue border-neon-blue/60 bg-gradient-to-b from-neon-blue/30 to-neon-blue/10 shadow-[0_0_20px_rgba(46,107,255,0.4),inset_0_0_12px_rgba(46,107,255,0.15)]",
  },
}

function MenuDishBadge({ label }: { label: string }) {
  const config = badgeConfig[label.toLowerCase()]
  const Icon = config?.Icon
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-display font-semibold uppercase tracking-[0.15em] backdrop-blur-sm text-sm max-sm:text-xs ${config?.className ?? ""}`}
    >
      {Icon && (
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black/50 ring-1 ring-inset ring-white/15">
          <Icon className="w-3 h-3" strokeWidth={2.2} />
        </span>
      )}
      {label}
    </span>
  )
}

export function MenuDishRow({ dish, index }: { dish: MenuDish; index?: number }) {
  const { original, final, hasDiscount } = getPrices(dish)

  return (
    <div className="relative isolate group py-6 px-5 max-sm:py-4 max-sm:px-3 lg:min-h-[13.625rem] rounded-lg bg-surface/25 border border-border/35 transition-all duration-300 hover:bg-surface/40 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(0,0,0,0.25)]">
      {hasDiscount && (
        <span className="absolute -top-3 -left-3 z-30 -rotate-[8deg] flex items-center px-3 py-1 bg-gradient-to-r from-success to-[#57e389] shadow-[0_0_22px_rgba(62,207,110,0.65)] font-display text-sm font-bold uppercase tracking-wider text-black whitespace-nowrap">
          Скидка {dish.discount}%
        </span>
      )}
      <div>
      {typeof index === "number" && (
        <span className="absolute right-4 bottom-4 -z-10 max-lg:hidden font-display text-2xl whitespace-nowrap">
          <span className="text-accent/80">{"|"}</span>
          <span className="text-white">{index + 1}</span>
          <span className="text-accent/80">{"|"}</span>
        </span>
      )}
      <div className="flex items-baseline gap-4 mb-5 max-lg:flex-col max-lg:items-stretch max-lg:gap-2">
        <div className="flex items-baseline gap-3 min-w-0 max-lg:w-full">
          <h3 className="font-display uppercase tracking-wide text-3xl max-sm:text-xl text-text-primary transition-colors duration-200 group-hover:text-accent">
            {dish.name}
          </h3>
          {typeof index === "number" && (
            <span className="shrink-0 ml-auto lg:hidden font-display text-xl whitespace-nowrap">
              <span className="text-accent/80">{"|"}</span>
              <span className="text-white">{index + 1}</span>
              <span className="text-accent/80">{"|"}</span>
            </span>
          )}
        </div>
        <span className="flex-1 border-b border-dotted border-text-muted/50 translate-y-[-0.3em] hidden lg:block" />
        <div className="flex items-baseline gap-3 whitespace-nowrap max-lg:mt-3 max-lg:pt-2.5 max-lg:border-t max-lg:border-border/50 max-lg:items-center">
          {dish.weight && (
            <>
              <span className="font-display text-accent text-2xl whitespace-nowrap order-1 max-lg:order-3 max-sm:text-xl max-sm:text-white">
                {dish.weight}
              </span>
              <span
                className="w-px self-center h-7 bg-border/70 order-2 max-sm:order-2"
                aria-hidden="true"
              />
            </>
          )}
          {hasDiscount ? (
            <span className="flex flex-col items-start leading-tight order-3 max-lg:order-1">
              <span className="font-display text-xl max-sm:text-base text-text-muted/70 line-through whitespace-nowrap">
                {original.toLocaleString("ru-RU")}{" "}
                <span className="text-accent/70">VND</span>
              </span>
              <span className="font-display text-3xl max-sm:text-2xl text-white whitespace-nowrap">
                {final.toLocaleString("ru-RU")}{" "}
                <span className="text-accent">VND</span>
              </span>
            </span>
          ) : (
            <span className="font-display text-3xl whitespace-nowrap order-3 max-lg:order-1 max-sm:text-2xl">
              <span className="text-white">{original.toLocaleString("ru-RU")}</span>{" "}
              <span className="text-accent">VND</span>
            </span>
          )}
          <div className="order-4 lg:hidden ml-auto w-32">
            <AddToCartControl dish={dish} compact />
          </div>
        </div>
      </div>

      <div className="flex items-start gap-5 max-lg:flex-col max-lg:gap-3">
        <div className="lg:w-[70%] max-lg:w-full space-y-2.5">
          {dish.description && (
            <p className="max-sm:text-sm leading-relaxed lg:leading-loose">
              <span className="font-display uppercase tracking-wider text-accent text-base max-sm:text-sm">Описание: </span>
              <span className="text-text-muted text-base max-sm:text-sm">{dish.description}</span>
            </p>
          )}

          {dish.subtitle && (
            <p className="max-sm:text-sm leading-relaxed lg:leading-loose">
              <span className="font-display uppercase tracking-wider text-accent text-base max-sm:text-sm">На выбор: </span>
              <span className="text-text-muted text-base max-sm:text-sm">{dish.subtitle}</span>
            </p>
          )}

          {dish.base && (
            <p className="max-sm:text-sm leading-relaxed lg:leading-loose">
              <span className="font-display uppercase tracking-wider text-accent text-base max-sm:text-sm">Основа на выбор: </span>
              <span className="text-text-muted text-base max-sm:text-sm">{dish.base}</span>
            </p>
          )}

          {dish.composition && (
            <p className="max-sm:text-sm leading-relaxed lg:leading-loose">
              <span className="font-display uppercase tracking-wider text-accent text-base max-sm:text-sm">Состав: </span>
              <span className="text-text-muted text-base max-sm:text-sm">{dish.composition}</span>
            </p>
          )}
        </div>
        <div className="lg:w-[30%] max-lg:hidden">
          <AddToCartControl dish={dish} />
        </div>
      </div>

      {dish.badges && dish.badges.length > 0 && (
        <div className="mt-6 pt-4 border-t border-border/30 pr-16 flex flex-wrap gap-2.5">
          {dish.badges.map((badge) => (
            <MenuDishBadge key={badge} label={badge} />
          ))}
        </div>
      )}
      </div>
    </div>
  )
}