"use client"

import { Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import type { MenuDish } from "@/config/menu-data"

export function AddToCartControl({ dish, variant = "full", compact = false }: { dish: MenuDish; variant?: "full" | "stepper"; compact?: boolean }) {
  const { items, addItem, increment, decrement } = useCart()
  const qty = items.find((i) => i.key === dish.name)?.quantity ?? 0

  const stepper = (
    <>
      <button
        onClick={() => decrement(dish.name)}
        aria-label="Убрать одну порцию"
        className={`flex items-center justify-center shrink-0 rounded-full border border-success/60 text-success transition-all duration-200 hover:bg-success hover:text-black active:scale-90 ${
          compact ? "w-7 h-7" : "w-8 h-8"
        }`}
      >
        <Minus className={compact ? "w-3 h-3" : "w-3.5 h-3.5"} strokeWidth={2.6} />
      </button>
      <span key={qty} className="animate-pop-in font-display text-lg font-bold text-text-primary min-w-7 text-center">{qty}</span>
      <button
        onClick={() => increment(dish.name)}
        aria-label="Добавить одну порцию"
        className={`flex items-center justify-center shrink-0 rounded-full bg-success text-black transition-all duration-200 hover:shadow-[0_0_16px_rgba(62,207,110,0.6)] active:scale-90 ${
          compact ? "w-7 h-7" : "w-8 h-8"
        }`}
      >
        <Plus className={compact ? "w-3 h-3" : "w-3.5 h-3.5"} strokeWidth={2.8} />
      </button>
    </>
  )

  if (variant === "stepper") return stepper

  return qty === 0 ? (
    <button
      onClick={() => addItem(dish.name, dish)}
      aria-label={`Добавить «${dish.name}» в корзину`}
      className={`group/buy flex w-full items-center justify-center gap-2 rounded-full border-2 border-success bg-success/10 text-success font-display uppercase font-bold shadow-[0_0_14px_rgba(62,207,110,0.2)] transition-all duration-300 hover:bg-success hover:text-black hover:shadow-[0_0_26px_rgba(62,207,110,0.55)] hover:scale-[1.03] active:scale-[0.94] ${
        compact ? "h-9 text-xs tracking-wider" : "h-11 text-sm tracking-widest gap-2.5"
      }`}
    >
      {!compact && <ShoppingBag className="w-4 h-4" strokeWidth={2.2} />}
      Купить
      <span
        className={`flex items-center justify-center rounded-full bg-success text-black transition-colors duration-300 group-hover/buy:bg-black group-hover/buy:text-success ${
          compact ? "w-4 h-4" : "w-5 h-5"
        }`}
      >
        <Plus className={compact ? "w-3 h-3" : "w-3.5 h-3.5"} strokeWidth={3} />
      </span>
    </button>
  ) : (
    <div
      className={`flex w-full items-center justify-between rounded-full border-2 border-success bg-success/10 shadow-[0_0_18px_rgba(62,207,110,0.25)] ${
        compact ? "h-9 px-1" : "h-11 px-2"
      }`}
    >
      {stepper}
    </div>
  )
}
