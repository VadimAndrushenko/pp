"use client"

import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react"
import type { MenuDish } from "@/config/menu-data"
import { menuData } from "@/config/menu-data"
import { getPrices } from "@/lib/pricing"

function buildDishIndex(): Map<string, MenuDish> {
  const index = new Map<string, MenuDish>()
  for (const menu of menuData) {
    for (const section of menu.sections) {
      for (const dish of section.dishes) {
        index.set(dish.name, dish)
      }
    }
  }
  return index
}

export interface CartItem {
  key: string
  dish: MenuDish
  quantity: number
}

export interface OrderHistoryItem {
  name: string
  quantity: number
  price: number
}

export interface OrderRecord {
  id: string
  createdAt: string
  items: OrderHistoryItem[]
  total: number
}

const ORDERS_STORAGE_KEY = "pp-orders"

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
  orders: OrderRecord[]
  openCart: () => void
  closeCart: () => void
  addItem: (key: string, dish: MenuDish) => void
  increment: (key: string) => void
  decrement: (key: string) => void
  removeItem: (key: string) => void
  clearCart: () => void
  addOrder: (record: Omit<OrderRecord, "id" | "createdAt">) => void
  clearOrders: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })
  const [isOpen, setIsOpen] = useState(false)
  const [orders, setOrders] = useState<OrderRecord[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[]
        if (Array.isArray(parsed)) {
          const index = buildDishIndex()
          const merged = parsed.map((item) => {
            const fresh = index.get(item.key)
            return fresh ? { ...item, dish: fresh } : item
          })
          dispatch({ type: "hydrate", items: merged })
        }
      }
      const ordersRaw = window.localStorage.getItem(ORDERS_STORAGE_KEY)
      if (ordersRaw) {
        const parsedOrders = JSON.parse(ordersRaw) as OrderRecord[]
        if (Array.isArray(parsedOrders)) {
          // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage
          setOrders(parsedOrders)
        }
      }
    } catch {
      // ignore corrupted storage
    }
     
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

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders))
    } catch {
      // storage full or unavailable
    }
  }, [orders, hydrated])

  const value = useMemo<CartContextValue>(() => {
    const totalCount = state.items.reduce((acc, item) => acc + item.quantity, 0)
    const totalAmount = state.items.reduce(
      (acc, item) => acc + getPrices(item.dish).final * item.quantity,
      0,
    )
    return {
      items: state.items,
      isOpen,
      totalCount,
      totalAmount,
      orders,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem: (key, dish) => dispatch({ type: "add", key, dish }),
      increment: (key) => dispatch({ type: "increment", key }),
      decrement: (key) => dispatch({ type: "decrement", key }),
      removeItem: (key) => dispatch({ type: "remove", key }),
      clearCart: () => dispatch({ type: "clear" }),
      addOrder: (record) =>
        setOrders((prev) => {
          // одинаковые заказы повторно не записываем
          const signature = JSON.stringify({ items: record.items, total: record.total })
          if (prev.some((o) => JSON.stringify({ items: o.items, total: o.total }) === signature)) {
            return prev
          }
          return [
            {
              ...record,
              id:
                typeof crypto !== "undefined" && "randomUUID" in crypto
                  ? crypto.randomUUID()
                  : `order-${Date.now()}`,
              createdAt: new Date().toISOString(),
            },
            ...prev,
          ]
        }),
      clearOrders: () => setOrders([]),
    }
  }, [state.items, isOpen, orders])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider")
  }
  return ctx
}