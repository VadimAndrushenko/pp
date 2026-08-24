import type { MenuDish } from "@/config/menu-data"

export function parseVnd(price: string): number {
  const digits = price.match(/\d/g)
  return digits ? parseInt(digits.join(""), 10) : 0
}

export function getPrices(dish: Pick<MenuDish, "price" | "discount">): {
  original: number
  final: number
  hasDiscount: boolean
} {
  const original = parseVnd(dish.price)
  if (!dish.discount || dish.discount <= 0 || dish.discount >= 100) {
    return { original, final: original, hasDiscount: false }
  }
  const raw = (original * (100 - dish.discount)) / 100
  const final = Math.max(Math.round(raw / 1000) * 1000, 0)
  return { original, final, hasDiscount: true }
}
