"use client"

import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react"
import type { MenuDish } from "@/config/menu-data"

export interface CartItem {
  key: string
  dish: MenuDish
  quantity: number
}

interface CartState {
  items: CartItem[]
}

type CartAction =
  | { type: "add"; key: string; dish: MenuDish }
  | { type: "increment"; key: string }
  | { type: "decrement"; key: string }
  | { type: "remove"; key: string }
  | { type: "clear" }
  | { type: "hydrate"; items: CartItem[] }

const STORAGE_KEY = "pp-cart"

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "add": {
      const existing = state.items.find((item) => item.key === action.key)
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.key === action.key ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        }
      }
      return { items: [...state.items, { key: action.key, dish: action.dish, quantity: 1 }] }
    }
    case "increment":
      return {
        items: state.items.map((item) =>
          item.key === action.key ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      }
    case "decrement":
      return {
        items: state.items
          .map((item) =>
            item.key === action.key ? { ...item, quantity: item.quantity - 1 } : item,
          )
          .filter((item) => item.quantity > 0),
      }
    case "remove":
      return { items: state.items.filter((item) => item.key !== action.key) }
    case "clear":
      return { items: [] }
    case "hydrate":
      return { items: action.items }
    default:
      return state
  }
}

export function parsePrice(price: string): number {
  const digits = price.match(/\d/g)
  return digits ? parseInt(digits.join(""), 10) : 0
}

interface CartContextValue {
  items: CartItem[]
  isOpen: boolean
  totalCount: number
  totalAmount: number
  openCart: () => void
  closeCart: () => void
  addItem: (key: string, dish: MenuDish) => void
  increment: (key: string) => void
  decrement: (key: string) => void
  removeItem: (key: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[]
        if (Array.isArray(parsed)) {
          dispatch({ type: "hydrate", items: parsed })
        }
      }
    } catch {
      // ignore corrupted storage
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    } catch {
      // storage full or unavailable
    }
  }, [state.items, hydrated])

  const value = useMemo<CartContextValue>(() => {
    const totalCount = state.items.reduce((acc, item) => acc + item.quantity, 0)
    const totalAmount = state.items.reduce(
      (acc, item) => acc + parsePrice(item.dish.price) * item.quantity,
      0,
    )
    return {
      items: state.items,
      isOpen,
      totalCount,
      totalAmount,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem: (key, dish) => dispatch({ type: "add", key, dish }),
      increment: (key) => dispatch({ type: "increment", key }),
      decrement: (key) => dispatch({ type: "decrement", key }),
      removeItem: (key) => dispatch({ type: "remove", key }),
      clearCart: () => dispatch({ type: "clear" }),
    }
  }, [state.items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider")
  }
  return ctx
}