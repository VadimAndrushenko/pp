"use client"

import { ShoppingCart, Truck } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { getDelivery } from "@/lib/delivery"

export function CartButton() {
  const { isOpen, openCart, totalCount, totalAmount } = useCart()

  const delivery = getDelivery(totalAmount)
  const showDeliveryHint = !isOpen && totalCount > 0

  return (
    <>
      <div
        className={`fixed bottom-[5.4rem] right-5 z-[70] flex items-center gap-2 px-3.5 py-2 rounded-full backdrop-blur-sm whitespace-nowrap max-sm:max-w-[calc(100vw-2.5rem)] pointer-events-none transition-all duration-300 ease-out ${
          showDeliveryHint ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-90"
        } ${
          delivery.free
            ? "bg-black/90 border border-success/60 shadow-[0_0_20px_rgba(62,207,110,0.45)]"
            : "bg-black/90 border border-accent/60 shadow-[0_0_20px_rgba(255,106,0,0.45)]"
        }`}
      >
        <Truck
          className={`w-4 h-4 shrink-0 ${delivery.free ? "text-success" : "text-accent"}`}
          strokeWidth={2.2}
        />
        {delivery.free ? (
          <span className="text-xs font-display uppercase tracking-wider text-success truncate">
            Доставка за наш счёт
          </span>
        ) : (
          <span className="text-xs font-display uppercase tracking-wider text-accent truncate">
            Ещё {(delivery.remaining).toLocaleString("ru-RU")} VND — доставка бесплатно
          </span>
        )}
      </div>
      <button
        onClick={openCart}
        aria-label="Открыть корзину"
        className={`fixed bottom-5 right-5 z-[70] flex h-14 items-center gap-3 rounded-full bg-gradient-to-br from-accent to-accent-hover pl-[1.15rem] pr-[1.15rem] text-black shadow-[0_0_30px_rgba(255,106,0,0.5)] transition-all duration-300 ease-out hover:shadow-[0_0_45px_rgba(255,106,0,0.75)] active:scale-95 ${
          isOpen ? "pointer-events-none opacity-0 translate-y-3 scale-90" : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        <ShoppingCart className="w-6 h-6 shrink-0" strokeWidth={2.2} />
        {totalCount > 0 && (
          <span className="flex items-center gap-3 overflow-hidden whitespace-nowrap animate-fade-in">
            <span className="font-display text-lg font-bold leading-none">
              {totalAmount.toLocaleString("ru-RU")}
              <span className="ml-1 text-xs font-semibold opacity-75">VND</span>
            </span>
          </span>
        )}
        {totalCount > 0 && (
          <span
            key={totalCount}
            className="absolute -top-1 -right-1 flex items-center justify-center min-w-6 h-6 px-1.5 rounded-full bg-black text-accent border border-accent/60 text-xs font-display font-bold shadow-[0_0_12px_rgba(255,106,0,0.6)] animate-scale-pop"
          >
            {totalCount}
          </span>
        )}
      </button>
    </>
  )
}