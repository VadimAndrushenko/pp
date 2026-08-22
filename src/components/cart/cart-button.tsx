"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"

export function CartButton() {
  const { isOpen, openCart, totalCount, totalAmount } = useCart()

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.button
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={openCart}
          aria-label="Открыть корзину"
      className="fixed bottom-5 right-5 z-[70] flex h-14 items-center gap-3 rounded-full bg-gradient-to-br from-accent to-accent-hover pl-[1.15rem] pr-[1.15rem] text-black shadow-[0_0_30px_rgba(255,106,0,0.5)] transition-shadow duration-300 hover:shadow-[0_0_45px_rgba(255,106,0,0.75)] active:scale-95"
      whileTap={{ scale: 0.95 }}
    >
      <ShoppingCart className="w-6 h-6 shrink-0" strokeWidth={2.2} />
      <AnimatePresence mode="popLayout" initial={false}>
        {totalCount > 0 && (
          <motion.span
            key="cart-total"
            layout
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center gap-3 overflow-hidden whitespace-nowrap"
          >
            <span className="font-display text-lg font-bold leading-none">
              {totalAmount.toLocaleString("ru-RU")}
              <span className="ml-1 text-xs font-semibold opacity-75">VND</span>
            </span>
          </motion.span>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {totalCount > 0 && (
          <motion.span
            key={totalCount}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            className="absolute -top-1 -right-1 flex items-center justify-center min-w-6 h-6 px-1.5 rounded-full bg-black text-accent border border-accent/60 text-xs font-display font-bold shadow-[0_0_12px_rgba(255,106,0,0.6)]"
          >
            {totalCount}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
      )}
    </AnimatePresence>
  )
}
