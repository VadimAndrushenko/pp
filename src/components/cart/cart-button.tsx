"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"

export function CartButton() {
  const { isOpen, openCart, closeCart, totalCount } = useCart()

  return (
    <motion.button
      onClick={isOpen ? closeCart : openCart}
      aria-label={isOpen ? "Закрыть корзину" : "Открыть корзину"}
      className="fixed bottom-5 right-5 z-[70] flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-hover text-black shadow-[0_0_30px_rgba(255,106,0,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,106,0,0.7)] active:scale-95"
      whileTap={{ scale: 0.9 }}
    >
      <ShoppingCart className="w-6 h-6" strokeWidth={2.2} />
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
  )
}