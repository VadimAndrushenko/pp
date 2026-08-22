"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { MenuDish } from "@/config/menu-data"
import { Leaf, CandyOff, Plus, Check } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"

type BadgeIcon = React.ComponentType<{ className?: string; strokeWidth?: number }>

const badgeConfig: Record<string, { Icon: BadgeIcon; className: string }> = {
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
  const priceMatch = dish.price.match(/^(.+?)\s*(VND)?$/i)
  const amount = priceMatch?.[1] ?? dish.price
  const currency = priceMatch?.[2] ?? ""
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(dish.name, dish)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1400)
  }

  return (
    <div className="relative group py-6 px-5 max-sm:py-4 max-sm:pb-16 max-sm:px-3 rounded-lg bg-surface/25 border border-border/35 transition-all duration-300 hover:bg-surface/40 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(0,0,0,0.25)]">
      {typeof index === "number" && (
        <span className="absolute right-4 bottom-4 z-10 max-sm:hidden font-display text-2xl whitespace-nowrap">
          <span className="text-accent/80">{"|"}</span>
          <span className="text-white">{index + 1}</span>
          <span className="text-accent/80">{"|"}</span>
        </span>
      )}
      <div className="flex items-baseline gap-4 mb-5 pr-16 max-sm:pr-0 max-sm:flex-col max-sm:items-stretch max-sm:gap-2">
        <div className="flex items-baseline gap-3 min-w-0 max-sm:w-full">
          <h3 className="font-display uppercase tracking-wide text-3xl max-sm:text-xl text-text-primary transition-colors duration-200 group-hover:text-accent">
            {dish.name}
          </h3>
          {typeof index === "number" && (
            <span className="shrink-0 ml-auto sm:hidden font-display text-xl whitespace-nowrap">
              <span className="text-accent/80">{"|"}</span>
              <span className="text-white">{index + 1}</span>
              <span className="text-accent/80">{"|"}</span>
            </span>
          )}
        </div>
        <span className="flex-1 border-b border-dotted border-text-muted/50 translate-y-[-0.3em] hidden sm:block" />
        <div className="flex items-baseline gap-3 whitespace-nowrap max-sm:mt-3 max-sm:pt-2.5 max-sm:border-t max-sm:border-border/50 max-sm:items-center">
          {dish.weight && (
            <>
              <span className="font-display text-accent text-2xl whitespace-nowrap order-1 max-sm:order-3 max-sm:text-xl max-sm:text-white">
                {dish.weight}
              </span>
              <span
                className="w-px self-center h-7 bg-border/70 order-2 max-sm:order-2"
                aria-hidden="true"
              />
            </>
          )}
          <span className="font-display text-3xl whitespace-nowrap order-3 max-sm:order-1 max-sm:text-2xl">
            <span className="text-white">{amount}</span>{" "}
            {currency && <span className="text-accent">{currency}</span>}
          </span>
          <motion.button
            onClick={handleAdd}
            aria-label={`Добавить «${dish.name}» в корзину`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.82 }}
            className="absolute top-4 right-4 z-20 max-sm:top-auto max-sm:bottom-4 flex items-center justify-center w-11 h-11 max-sm:w-9 max-sm:h-9 rounded-full border-2 border-success bg-success/10 text-success shadow-[0_0_16px_rgba(62,207,110,0.25)] transition-[background-color,color,box-shadow] duration-300 hover:bg-success hover:text-black hover:shadow-[0_0_26px_rgba(62,207,110,0.6)]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {added ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0, rotate: -120 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 120 }}
                  transition={{ type: "spring", stiffness: 500, damping: 22 }}
                >
                  <Check className="w-5 h-5 max-sm:w-4 max-sm:h-4" strokeWidth={3} />
                </motion.span>
              ) : (
                <motion.span
                  key="plus"
                  initial={{ scale: 0, rotate: 120 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: -120 }}
                  transition={{ type: "spring", stiffness: 500, damping: 22 }}
                >
                  <Plus className="w-5 h-5 max-sm:w-4 max-sm:h-4" strokeWidth={2.6} />
                </motion.span>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {added && (
                <>
                  <motion.span
                    key="ripple"
                    className="absolute inset-0 rounded-full border-2 border-success pointer-events-none"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 2, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  <motion.span
                    key="plus-one"
                    className="absolute -top-1 left-1/2 -translate-x-1/2 font-display text-sm font-bold text-success pointer-events-none whitespace-nowrap"
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: [0, 1, 1, 0], y: -18 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    +1
                  </motion.span>
                </>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {dish.description && (
        <p className="mt-2.5 max-sm:text-sm sm:max-w-[80%] leading-relaxed lg:leading-loose">
          <span className="font-display uppercase tracking-wider text-accent text-base max-sm:text-sm">Описание: </span>
          <span className="text-text-muted text-base max-sm:text-sm">{dish.description}</span>
        </p>
      )}

      {dish.subtitle && (
        <p className="mt-2.5 max-sm:text-sm sm:max-w-[80%] leading-relaxed lg:leading-loose">
          <span className="font-display uppercase tracking-wider text-accent text-base max-sm:text-sm">На выбор: </span>
          <span className="text-text-muted text-base max-sm:text-sm">{dish.subtitle}</span>
        </p>
      )}

      {dish.base && (
        <p className="mt-2.5 max-sm:text-sm sm:max-w-[80%] leading-relaxed lg:leading-loose">
          <span className="font-display uppercase tracking-wider text-accent text-base max-sm:text-sm">Основа на выбор: </span>
          <span className="text-text-muted text-base max-sm:text-sm">{dish.base}</span>
        </p>
      )}

      {dish.composition && (
        <p className="mt-2.5 max-sm:text-sm sm:max-w-[80%] leading-relaxed lg:leading-loose">
          <span className="font-display uppercase tracking-wider text-accent text-base max-sm:text-sm">Состав: </span>
          <span className="text-text-muted text-base max-sm:text-sm">{dish.composition}</span>
        </p>
      )}

      {dish.badges && dish.badges.length > 0 && (
        <div className="mt-6 pt-4 border-t border-border/30 pr-16 flex flex-wrap gap-2.5">
          {dish.badges.map((badge) => (
            <MenuDishBadge key={badge} label={badge} />
          ))}
        </div>
      )}
    </div>
  )
}