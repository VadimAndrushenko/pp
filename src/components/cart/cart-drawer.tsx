"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, Check, ChevronDown, CircleAlert, Clock, LocateFixed, MapPin, MapPinned, MessageCircle, MessageSquare, Search, Send, ShoppingBag, Trash2, Truck, User, X } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import type { OrderRecord } from "@/components/cart/cart-context"
import { getPrices } from "@/lib/pricing"
import { DELIVERY_ETA, FREE_DELIVERY_FROM, getDelivery } from "@/lib/delivery"

const formatOrderDate = (iso: string) =>
  new Date(iso).toLocaleString("ru-RU", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  })
import { AddToCartControl } from "@/components/cart/add-to-cart-control"
import { MapPicker } from "@/components/cart/map-picker"
import { menuData } from "@/config/menu-data"

const BADGE_FILTERS = [
  { label: "Все", value: null },
  { label: "Веганское", value: "веганское блюдо" },
  { label: "Вегетарианское", value: "вегетарианское блюдо" },
  { label: "Без сахара", value: "без добавленного сахара" },
] as const

const CONTACTS = [
  { id: "telegram", label: "Telegram", Icon: Send },
  { id: "whatsapp", label: "WhatsApp", Icon: MessageCircle },
  { id: "zalo", label: "Zalo", Icon: MessageSquare },
] as const

type ContactId = (typeof CONTACTS)[number]["id"]

// TODO: заменить на реальные контакты ресторана
const RESTAURANT_CONTACTS: Record<ContactId, string> = {
  telegram: "https://t.me/poidem_pozhrem",
  whatsapp: "https://wa.me/84000000000",
  zalo: "https://zalo.me/0000000000",
}

interface CheckoutForm {
  name: string
  address: string
  comment: string
  contact: ContactId
  telegram: string
  phone: string
  location: { lat: number; lng: number } | null
}

const DEFAULT_CHECKOUT_FORM: CheckoutForm = {
  name: "",
  address: "",
  comment: "",
  contact: "telegram",
  telegram: "",
  phone: "",
  location: null,
}

const CHECKOUT_STORAGE_KEY = "pp-checkout"

const FIELD_CLS =
  "w-full px-4 py-3.5 rounded-xl bg-bg/70 border border-border/50 text-base text-text-primary placeholder:text-text-muted outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_14px_rgba(255,106,0,0.25)]"

const LABEL_CLS = "block font-display uppercase tracking-wider text-sm text-text-secondary mb-2"

const ICON_BTN_CLS =
  "flex items-center justify-center w-9 h-9 rounded-full border border-border/50 text-text-secondary transition-all duration-200 hover:text-accent hover:border-accent hover:shadow-[0_0_12px_rgba(255,106,0,0.35)]"

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, clearCart, totalCount, totalAmount, addOrder, orders, clearOrders, addItem } =
    useCart()

  const [searchOpen, setSearchOpen] = useState(false)
  const [historyOpen, setHistoryOpen] = useState(false)
  const [confirmClear, setConfirmClear] = useState(false)
  const [query, setQuery] = useState("")
  const [badge, setBadge] = useState<string | null>(null)
  const [expandedKey, setExpandedKey] = useState<string | null>(null)
  const [step, setStep] = useState<"cart" | "checkout" | "done">("cart")
  const [form, setForm] = useState<CheckoutForm>(DEFAULT_CHECKOUT_FORM)
  const [mapOpen, setMapOpen] = useState(false)

  const updateForm = useCallback((patch: Partial<CheckoutForm>) => {
    setForm((f) => ({ ...f, ...patch }))
  }, [])

  // восстановление данных оформления (имя, адрес и т.д.) после перезагрузки
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(CHECKOUT_STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as Partial<CheckoutForm>
      if (!parsed || typeof parsed !== "object") return
      const parsedContact =
        parsed.contact === "telegram" || parsed.contact === "whatsapp" || parsed.contact === "zalo"
          ? parsed.contact
          : null
      const validLocation =
        parsed.location &&
        typeof parsed.location.lat === "number" &&
        typeof parsed.location.lng === "number"
          ? parsed.location
          : null
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage
      setForm((f) => ({
        ...f,
        name: typeof parsed.name === "string" ? parsed.name : f.name,
        address: typeof parsed.address === "string" ? parsed.address : f.address,
        comment: typeof parsed.comment === "string" ? parsed.comment : f.comment,
        contact: parsedContact ?? f.contact,
        telegram: typeof parsed.telegram === "string" ? parsed.telegram : f.telegram,
        phone: typeof parsed.phone === "string" ? parsed.phone : f.phone,
        location: validLocation ?? f.location,
      }))
    } catch {
      // ignore corrupted storage
    }
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(form))
    } catch {
      // storage full or unavailable
    }
  }, [form])

  const handleMapPick = useCallback(
    (lat: number, lng: number, address: string) => {
      setForm((f) => ({ ...f, location: { lat, lng }, address }))
    },
    [],
  )

  const tgValid = /^@[A-Za-z0-9_]{3,}$/.test(form.telegram.trim())
  const phoneValid = /^\+\d{8,14}$/.test(form.phone.trim())

  const contactHandle = (() => {
    if (form.contact === "telegram") {
      return tgValid ? form.telegram.trim() : null
    }
    return phoneValid ? form.phone.trim() : null
  })()

  const canSubmit =
    form.name.trim().length >= 2 && form.address.trim().length >= 5 && contactHandle !== null

  const handleClose = () => {
    closeCart()
    setExpandedKey(null)
    // поиск, история и шаг оформления сохраняются между открытиями корзины;
    // полный сброс — только после оформленного заказа
    if (step === "done") {
      setSearchOpen(false)
      setQuery("")
      setBadge(null)
      setMapOpen(false)
      setHistoryOpen(false)
      setStep("cart")
    }
  }

  const handleSubmit = () => {
    if (!canSubmit || step !== "checkout") return
    addOrder({
      items: items.map((i) => ({
        name: i.dish.name,
        quantity: i.quantity,
        price: getPrices(i.dish).final,
      })),
      total: grandTotal,
    })
    // TODO: отправка в Telegram-бота (адрес + location + состав заказа)
    console.log("order:", {
      name: form.name.trim(),
      address: form.address,
      location: form.location,
      contact: form.contact,
      contactHandle,
      deliveryFee,
      total: grandTotal,
      items: items.map((i) => ({ name: i.dish.name, quantity: i.quantity })),
    })
    setStep("done")
    clearCart()
  }

  const allDishes = useMemo(
    () =>
      menuData.flatMap((menu) =>
        menu.sections.flatMap((section) =>
          section.dishes.map((dish) => ({
            key: dish.name,
            dish,
            menuTitle: menu.title,
          })),
        ),
      ),
    [],
  )

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return allDishes
      .filter(({ dish }) => {
        const text = [dish.name, dish.description, dish.composition, dish.subtitle, dish.base]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
        const matchQuery = !q || text.includes(q)
        const matchBadge = !badge || (dish.badges ?? []).some((b) => b.toLowerCase() === badge)
        return matchQuery && matchBadge
      })
  }, [allDishes, query, badge])

  const formattedTotal = totalAmount.toLocaleString("ru-RU")

  const repeatOrder = (order: OrderRecord) => {
    let added = 0
    for (const item of order.items) {
      const entry = allDishes.find((d) => d.dish.name === item.name)
      if (!entry) continue
      for (let i = 0; i < item.quantity; i++) {
        addItem(entry.key, entry.dish)
        added++
      }
    }
    if (added > 0) {
      setHistoryOpen(false)
      setConfirmClear(false)
      setExpandedKey(null)
    }
  }

  const handleClearHistory = () => {
    if (!confirmClear) {
      setConfirmClear(true)
      return
    }
    clearOrders()
    setConfirmClear(false)
  }

  const { free: freeDelivery, fee: deliveryFee, remaining: deliveryRemaining } = getDelivery(totalAmount)
  const grandTotal = totalAmount + deliveryFee

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 z-[55] bg-black/70 backdrop-blur-sm"
          />
          <motion.aside
            id="cart-drawer"
            data-open={isOpen}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed top-0 right-0 bottom-0 z-[65] flex flex-col w-full max-w-[516px] max-sm:max-w-full bg-surface border-l border-border/40 shadow-[0_0_60px_rgba(0,0,0,0.7)] overscroll-contain"
          >
            <div className="px-5 py-4 border-b border-border/30">
              {historyOpen ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setHistoryOpen(false)
                        setConfirmClear(false)
                      }}
                      aria-label="Назад к корзине"
                      className={ICON_BTN_CLS}
                    >
                      <ArrowLeft className="w-4 h-4" strokeWidth={2.2} />
                    </button>
                    <h2 className="font-display uppercase tracking-widest text-2xl font-bold text-text-primary">
                      Мои заказы
                    </h2>
                  </div>
                  <button onClick={handleClose} aria-label="Закрыть корзину" className={ICON_BTN_CLS}>
                    <X className="w-4 h-4" strokeWidth={2.2} />
                  </button>
                </div>
              ) : searchOpen ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSearchOpen(false)
                        setQuery("")
                        setBadge(null)
                      }}
                      aria-label="Выйти из поиска"
                      className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full border border-border/50 text-text-secondary transition-all duration-200 hover:text-accent hover:border-accent hover:shadow-[0_0_12px_rgba(255,106,0,0.35)]"
                    >
                      <ArrowLeft className="w-4 h-4" strokeWidth={2.2} />
                    </button>
                    <div className="relative flex-1">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" strokeWidth={2.2} />
                      <input
                        autoFocus
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Поиск по названию, описанию, составу…"
                        className="w-full py-2.5 pl-10 pr-10 rounded-full bg-bg/70 border border-accent/40 text-sm text-text-primary placeholder:text-text-muted outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_16px_rgba(255,106,0,0.35)]"
                      />
                      {query && (
                        <button
                          onClick={() => setQuery("")}
                          aria-label="Очистить поиск"
                          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full text-text-muted hover:text-accent transition-colors"
                        >
                          <X className="w-3.5 h-3.5" strokeWidth={2.4} />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                    {BADGE_FILTERS.map((filter) => (
                      <button
                        key={filter.label}
                        onClick={() => setBadge(filter.value)}
                        className={`shrink-0 px-3 py-1.5 rounded-full font-display uppercase tracking-wider text-xs border transition-all duration-200 ${
                          badge === filter.value
                            ? "bg-accent border-accent text-black shadow-[0_0_14px_rgba(255,106,0,0.5)]"
                            : "border-border/50 text-text-secondary hover:text-accent hover:border-accent"
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : step === "checkout" ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setStep("cart")} aria-label="Назад к корзине" className={ICON_BTN_CLS}>
                      <ArrowLeft className="w-4 h-4" strokeWidth={2.2} />
                    </button>
                    <h2 className="font-display uppercase tracking-widest text-2xl font-bold text-text-primary">
                      Оформление
                    </h2>
                  </div>
                  <button onClick={handleClose} aria-label="Закрыть корзину" className={ICON_BTN_CLS}>
                    <X className="w-4 h-4" strokeWidth={2.2} />
                  </button>
                </div>
              ) : step === "done" ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-success/15 border border-success/50 shadow-[0_0_16px_rgba(62,207,110,0.35)]">
                      <Check className="w-5 h-5 text-success" strokeWidth={2.4} />
                    </span>
                    <h2 className="font-display uppercase tracking-widest text-2xl font-bold text-text-primary">
                      Готово
                    </h2>
                  </div>
                  <button onClick={handleClose} aria-label="Закрыть корзину" className={ICON_BTN_CLS}>
                    <X className="w-4 h-4" strokeWidth={2.2} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/15 border border-accent/40">
                      <ShoppingBag className="w-5 h-5 text-accent" />
                    </span>
                    <div>
                      <h2 className="font-display uppercase tracking-widest text-xl font-bold text-text-primary">
                        Корзина
                      </h2>
                      {totalCount > 0 && (
                        <p className="text-xs text-text-muted font-display uppercase tracking-wider">
                          {totalCount} {totalCount === 1 ? "блюдо" : totalCount < 5 ? "блюда" : "блюд"}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setHistoryOpen(true)
                        setSearchOpen(false)
                      }}
                      aria-label="Мои заказы"
                      className="flex items-center gap-1.5 px-3 h-9 rounded-full border border-border/50 text-text-secondary transition-all duration-200 hover:text-accent hover:border-accent hover:shadow-[0_0_12px_rgba(255,106,0,0.35)]"
                    >
                      <Clock className="w-3.5 h-3.5 shrink-0" strokeWidth={2.2} />
                      <span className="font-display uppercase tracking-wider text-xs whitespace-nowrap">
                        Мои заказы
                      </span>
                    </button>
                    <button
                      onClick={() => setSearchOpen(true)}
                      aria-label="Поиск блюд"
                      className="flex items-center justify-center w-9 h-9 rounded-full border border-border/50 text-text-secondary transition-all duration-200 hover:text-accent hover:border-accent hover:shadow-[0_0_12px_rgba(255,106,0,0.35)]"
                    >
                      <Search className="w-4 h-4" strokeWidth={2.2} />
                    </button>
                    <button
                      onClick={handleClose}
                      aria-label="Закрыть корзину"
                      className="flex items-center justify-center w-9 h-9 rounded-full border border-border/50 text-text-secondary transition-all duration-200 hover:text-accent hover:border-accent hover:rotate-90"
                    >
                      <X className="w-4 h-4" strokeWidth={2.2} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {historyOpen ? (
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                {orders.length === 0 ? (
                  <div className="flex flex-col items-center justify-center gap-3 py-14 text-center">
                    <Clock className="w-10 h-10 text-text-muted/40" strokeWidth={1.4} />
                    <p className="text-sm text-text-muted">Заказов пока не было</p>
                  </div>
                ) : (
                  <>
                    {orders.map((order) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-card bg-bg/60 border border-border/30 p-4"
                      >
                        <div className="flex items-center justify-between gap-3 mb-2.5">
                          <span className="text-xs text-text-muted font-display uppercase tracking-wider">
                            {formatOrderDate(order.createdAt)}
                          </span>
                          <span className="font-display text-base whitespace-nowrap">
                            <span className="text-text-primary">{order.total.toLocaleString("ru-RU")}</span>{" "}
                            <span className="text-accent text-xs">VND</span>
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {order.items.map((item, idx) => (
                            <li
                              key={`${order.id}-${idx}`}
                              className="flex items-baseline gap-2 text-sm"
                            >
                              <span className="text-text-muted truncate min-w-0">{item.name}</span>
                              <span className="shrink-0 text-accent font-display whitespace-nowrap">
                                ×{item.quantity}
                              </span>
                              <span className="ml-auto shrink-0 font-display whitespace-nowrap text-text-primary text-xs">
                                {(item.price * item.quantity).toLocaleString("ru-RU")}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => repeatOrder(order)}
                          className="mt-3 w-full py-2.5 rounded-full border border-accent/50 bg-accent/10 text-accent font-display uppercase tracking-wider text-xs transition-all duration-200 hover:bg-accent hover:text-black hover:shadow-[0_0_14px_rgba(255,106,0,0.4)] active:scale-[0.98]"
                        >
                          Повторить заказ
                        </button>
                      </motion.div>
                    ))}
                    <button
                      onClick={handleClearHistory}
                      className={`w-full py-2.5 rounded-xl border text-xs font-display uppercase tracking-wider transition-colors duration-200 ${
                        confirmClear
                          ? "border-neon-red/60 bg-neon-red/10 text-neon-red"
                          : "border-border/50 text-text-muted hover:text-neon-red hover:border-neon-red/50"
                      }`}
                    >
                      {confirmClear ? "Точно очистить историю?" : "Очистить историю"}
                    </button>
                  </>
                )}
              </div>
            ) : searchOpen ? (
              <div className="flex-1 overflow-y-auto px-4 py-4">
                {results.length === 0 ? (
                  <div className="flex flex-col items-center justify-center gap-3 py-14 text-center">
                    <Search className="w-10 h-10 text-text-muted/40" strokeWidth={1.4} />
                    <p className="text-sm text-text-muted">
                      Ничего не найдено — попробуйте изменить запрос или фильтр
                    </p>
                  </div>
              ) : (
                  <div className="space-y-2.5">
                    <p className="text-xs text-text-muted font-display uppercase tracking-wider px-1">
                      Найдено: {results.length}
                    </p>
                    <AnimatePresence initial={false}>
                      {results.map(({ key, dish, menuTitle }) => {
                        const prices = getPrices(dish)
                        return (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="relative rounded-card bg-bg/60 border border-border/30 hover:border-accent/50 transition-colors duration-300"
                        >
                          {prices.hasDiscount && (
                            <span className="absolute -top-2.5 -left-2.5 z-20 -rotate-[8deg] flex items-center px-2 py-0.5 bg-gradient-to-r from-success to-[#57e389] shadow-[0_0_16px_rgba(62,207,110,0.6)] font-display text-[10px] font-bold uppercase tracking-wider text-black whitespace-nowrap">
                              Скидка {dish.discount}%
                            </span>
                          )}
                          <div className="flex items-center gap-3 p-3.5">
                            <button
                              onClick={() => setExpandedKey(expandedKey === key ? null : key)}
                              aria-label={`Подробнее о «${dish.name}»`}
                              className="min-w-0 flex-1 text-left"
                            >
                              <span className="flex items-start gap-2">
                                <span className="font-display uppercase tracking-wide text-sm text-text-primary leading-snug break-words">
                                  {dish.name}
                                </span>
                                <ChevronDown
                                  className={`w-4 h-4 mt-0.5 shrink-0 text-accent transition-transform duration-300 ${
                                    expandedKey === key ? "rotate-180" : ""
                                  }`}
                                  strokeWidth={2.2}
                                />
                              </span>
                              <span className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-text-muted truncate">{menuTitle}</span>
                                {dish.weight && (
                                  <span className="text-xs text-accent font-display uppercase tracking-wider">
                                    {dish.weight}
                                  </span>
                                )}
                              </span>
                              <span className="flex flex-wrap items-center gap-1.5 mt-1.5">
                                {dish.badges?.map((b) => (
                                  <span
                                    key={b}
                                    className={`px-2 py-0.5 rounded-full text-[9px] font-display uppercase tracking-wider border ${
                                      b.toLowerCase() === "без добавленного сахара"
                                        ? "text-neon-blue border-neon-blue/50 bg-neon-blue/10"
                                        : "text-success border-success/50 bg-success/10"
                                    }`}
                                  >
                                    {b}
                                  </span>
                                ))}
                              </span>
                            </button>
                            <div className="flex flex-col items-end gap-1.5 shrink-0">
                              {prices.hasDiscount && (
                                <span className="font-display text-xs text-text-muted/70 line-through whitespace-nowrap">
                                  {prices.original.toLocaleString("ru-RU")} VND
                                </span>
                              )}
                              <span className="font-display text-base whitespace-nowrap">
                                <span className="text-text-primary">{prices.final.toLocaleString("ru-RU")}</span>{" "}
                                <span className="text-accent text-xs">VND</span>
                              </span>
                              <div className="w-32 max-sm:w-28">
                                <AddToCartControl dish={dish} compact />
                              </div>
                            </div>
                          </div>
                          <AnimatePresence initial={false}>
                            {expandedKey === key && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="px-3.5 pb-3.5 pt-0 space-y-2 border-t border-border/20 mt-3 pt-3 text-sm leading-relaxed">
                                  {dish.description && (
                                    <p>
                                      <span className="font-display uppercase tracking-wider text-accent text-xs">
                                        Описание:{" "}
                                      </span>
                                      <span className="text-text-muted text-sm">{dish.description}</span>
                                    </p>
                                  )}
                                  {dish.subtitle && (
                                    <p>
                                      <span className="font-display uppercase tracking-wider text-accent text-xs">
                                        На выбор:{" "}
                                      </span>
                                      <span className="text-text-muted text-sm">{dish.subtitle}</span>
                                    </p>
                                  )}
                                  {dish.base && (
                                    <p>
                                      <span className="font-display uppercase tracking-wider text-accent text-xs">
                                        Основа на выбор:{" "}
                                      </span>
                                      <span className="text-text-muted text-sm">{dish.base}</span>
                                    </p>
                                  )}
                                  {dish.composition && (
                                    <p>
                                      <span className="font-display uppercase tracking-wider text-accent text-xs">
                                        Состав:{" "}
                                      </span>
                                      <span className="text-text-muted text-sm">{dish.composition}</span>
                                    </p>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    })}
                  </AnimatePresence>
                  </div>
                )}
              </div>
            ) : step === "done" ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-5 px-6 text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  className="flex items-center justify-center w-24 h-24 rounded-full bg-success/15 border-2 border-success shadow-[0_0_40px_rgba(62,207,110,0.45)]"
                >
                  <Check className="w-12 h-12 text-success" strokeWidth={2.6} />
                </motion.div>
                <div>
                  <h3 className="font-display uppercase tracking-widest text-2xl font-bold text-text-primary mb-1.5">
                    Заказ оформлен!
                  </h3>
                  <p className="font-display uppercase tracking-wider text-base text-accent mb-2">
                    Ожидайте подтверждения
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Менеджер проверит наличие блюд, итоговую стоимость и точное время доставки
                    и свяжется с вами.
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed mt-2">
                    Обычно это занимает 5–15 минут.
                  </p>
                </div>
                <div className="w-full max-w-xs space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    {CONTACTS.map(({ id, label, Icon }) => (
                      <button
                        key={id}
                        onClick={() => updateForm({ contact: id })}
                        className={`flex flex-col items-center gap-1.5 py-3 rounded-xl border transition-all duration-200 ${
                          form.contact === id
                            ? "bg-accent/10 border-accent text-accent shadow-[0_0_14px_rgba(255,106,0,0.25)]"
                            : "border-border/50 text-text-secondary hover:text-accent hover:border-accent"
                        }`}
                      >
                        <Icon className="w-5 h-5" strokeWidth={1.8} />
                        <span className="font-display uppercase tracking-wider text-[11px]">{label}</span>
                      </button>
                    ))}
                  </div>
                  <a
                    href={RESTAURANT_CONTACTS[form.contact]}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2.5 py-3.5 rounded-full border-2 border-accent/60 bg-accent/10 text-accent font-display uppercase tracking-widest font-bold text-sm transition-all duration-300 hover:bg-accent hover:text-black hover:shadow-[0_0_26px_rgba(255,106,0,0.5)] active:scale-[0.97]"
                  >
                    {(() => {
                      const Icon = CONTACTS.find((c) => c.id === form.contact)?.Icon ?? Send
                      return <Icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
                    })()}
                    Написать нам
                  </a>
                </div>
                <button
                  onClick={handleClose}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-accent to-accent-hover font-display uppercase tracking-widest font-bold text-black text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_26px_rgba(255,106,0,0.5)] active:scale-[0.97]"
                >
                  Отлично
                </button>
              </div>
            ) : step === "checkout" ? (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
                  <div>
                    <label htmlFor="checkout-name" className={LABEL_CLS}>
                      Имя
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent pointer-events-none" strokeWidth={2} />
                      <input
                        id="checkout-name"
                        value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })}
                        placeholder="Как к вам обращаться?"
                        autoComplete="name"
                        className={`${FIELD_CLS} pl-10`}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="checkout-address" className={LABEL_CLS}>
                        Адрес доставки
                      </label>
                      <button
                        onClick={() => setMapOpen((v) => !v)}
                        className="flex items-center gap-1.5 mb-2 text-xs font-display uppercase tracking-wider text-accent hover:text-accent-hover transition-colors duration-150"
                      >
                        <MapPinned className="w-3.5 h-3.5" strokeWidth={2} />
                        {mapOpen ? "Скрыть карту" : "На карте"}
                      </button>
                    </div>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent pointer-events-none" strokeWidth={2} />
                      <input
                        id="checkout-address"
                        value={form.address}
                        onChange={(e) => updateForm({ address: e.target.value })}
                        placeholder="Улица, дом, квартира…"
                        className={`${FIELD_CLS} pl-10`}
                      />
                    </div>
                    {form.location && !mapOpen && (
                      <p className="mt-1.5 text-sm text-text-muted flex items-center gap-1.5">
                        <LocateFixed className="w-3.5 h-3.5 shrink-0 text-accent" />
                        Точка на карте: {form.location.lat.toFixed(5)}, {form.location.lng.toFixed(5)}
                      </p>
                    )}
                    <AnimatePresence initial={false}>
                      {mapOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3">
                            <MapPicker
                              initial={form.location}
                              initialAddress={form.address || null}
                              onPick={handleMapPick}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label htmlFor="checkout-comment" className={LABEL_CLS}>
                      Комментарий курьеру
                    </label>
                    <textarea
                      id="checkout-comment"
                      value={form.comment}
                      onChange={(e) => updateForm({ comment: e.target.value })}
                      placeholder="Код домофона, этаж, ориентиры…"
                      rows={2}
                      className={`${FIELD_CLS} resize-none`}
                    />
                  </div>

                  <div>
                    <span className={LABEL_CLS}>Способ связи</span>
                    <div className="grid grid-cols-3 gap-2">
                      {CONTACTS.map(({ id, label, Icon }) => (
                        <button
                          key={id}
                          onClick={() => updateForm({ contact: id })}
                          className={`flex flex-col items-center gap-2 py-4 rounded-xl border transition-all duration-200 ${
                            form.contact === id
                              ? "bg-accent/10 border-accent text-accent shadow-[0_0_14px_rgba(255,106,0,0.25)]"
                              : "border-border/50 text-text-secondary hover:text-accent hover:border-accent"
                          }`}
                        >
                          <Icon className="w-6 h-6" strokeWidth={1.8} />
                          <span className="font-display uppercase tracking-wider text-sm">{label}</span>
                        </button>
                      ))}
                    </div>
                    <AnimatePresence initial={false}>
                      <motion.div
                        key={form.contact}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className={`${LABEL_CLS} mt-3 mb-1.5`}>
                          {form.contact === "telegram" ? "Ник в Telegram" : "Номер телефона"}
                        </p>
                        {form.contact === "telegram" ? (
                          <>
                            <input
                              value={form.telegram}
                              onChange={(e) => updateForm({ telegram: e.target.value.replace(/\s/g, "") })}
                              placeholder="@username"
                              autoCapitalize="off"
                              spellCheck={false}
                              className={FIELD_CLS}
                            />
                            {form.telegram.trim() !== "" && !tgValid && (
                              <p className="mt-1.5 text-sm text-neon-red">
                                Ник должен начинаться с @ и содержать минимум 3 символа
                              </p>
                            )}
                          </>
                        ) : (
                          <>
                            <input
                              inputMode="tel"
                              value={form.phone}
                              onChange={(e) => updateForm({ phone: e.target.value.replace(/[^\d+]/g, "").slice(0, 15) })}
                              placeholder="+84 912 345 678"
                              className={FIELD_CLS}
                            />
                            {form.phone.trim() !== "" && !phoneValid ? (
                              <p className="mt-1.5 text-sm text-neon-red">
                                Номер должен начинаться с кода страны: +84, +7, +998…
                              </p>
                            ) : (
                              <p className="mt-1.5 text-sm text-text-muted">
                                Укажите номер с кодом страны: +84, +7, +998…
                              </p>
                            )}
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="rounded-xl border border-border/40 bg-bg/40 p-4">
                    <p className="font-display uppercase tracking-widest text-sm text-text-secondary mb-3">
                      Состав заказа
                    </p>
                    <ul className="space-y-2">
                      {items.map((item) => {
                        const prices = getPrices(item.dish)
                        return (
                          <li key={item.key} className="flex items-baseline gap-2 text-base">
                            <span className="text-text-muted truncate min-w-0">{item.dish.name}</span>
                            <span className="shrink-0 text-accent font-display whitespace-nowrap">
                              ×{item.quantity}
                            </span>
                            <span className="font-display whitespace-nowrap shrink-0 ml-auto">
                              <span className="text-text-primary">
                                {(prices.final * item.quantity).toLocaleString("ru-RU")}
                              </span>{" "}
                              <span className="text-accent text-sm">VND</span>
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-border/30 space-y-2">
                      <div className="flex justify-between text-base">
                        <span className="text-text-muted">Доставка</span>
                        {freeDelivery ? (
                          <span className="font-display text-success">Бесплатно</span>
                        ) : (
                          <span className="font-display whitespace-nowrap">
                            <span className="text-text-primary">{deliveryFee.toLocaleString("ru-RU")}</span>{" "}
                            <span className="text-accent text-sm">VND</span>
                          </span>
                        )}
                      </div>
                      <div className="flex justify-between text-base">
                        <span className="text-text-muted">Время доставки</span>
                        <span className="font-display text-text-secondary whitespace-nowrap">
                          ~{DELIVERY_ETA}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-display uppercase tracking-widest text-base text-text-secondary">
                          Итого
                        </span>
                        <span className="font-display text-2xl font-bold whitespace-nowrap">
                          <span className="text-text-primary">{grandTotal.toLocaleString("ru-RU")}</span>{" "}
                          <span className="text-accent text-base">VND</span>
                        </span>
                      </div>
                      {!freeDelivery && (
                        <p className="text-xs text-text-muted leading-relaxed">
                          При заказе от {FREE_DELIVERY_FROM.toLocaleString("ru-RU")} VND доставка за
                          наш счёт
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 rounded-2xl border-2 border-accent/60 bg-accent/10 px-5 py-5 shadow-[0_0_28px_rgba(255,106,0,0.25)]">
                    <span className="flex shrink-0 items-center justify-center w-11 h-11 rounded-full bg-accent text-black shadow-[0_0_18px_rgba(255,106,0,0.55)]">
                      <CircleAlert className="w-7 h-7" strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="font-display uppercase tracking-widest text-sm font-bold text-accent mb-1.5">
                        Важно!
                      </p>
                      <p className="text-base text-text-primary leading-relaxed">
                        Наличие блюд, итоговую стоимость и точное время доставки менеджер
                        подтвердит после получения заказа.
                      </p>
                    </div>
                  </div>
                 </div>

                 <div className="px-5 py-4 border-t border-border/30 bg-bg/40">
                  <button
                    disabled={!canSubmit}
                    onClick={handleSubmit}
                    className={`w-full py-3.5 rounded-full bg-gradient-to-r from-accent to-accent-hover font-display uppercase tracking-widest font-bold text-black text-sm transition-all duration-300 active:scale-[0.98] ${
                      canSubmit
                        ? "hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,106,0,0.55)]"
                        : "opacity-40 cursor-not-allowed"
                    }`}
                  >
                    Отправить заказ
                  </button>
                  <p className="text-center text-xs text-text-muted mt-2.5">
                    Заказ будет отправлен оператору в {CONTACTS.find((c) => c.id === form.contact)?.label}
                  </p>
                </div>
              </>
            ) : items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center justify-center w-20 h-20 rounded-full border border-dashed border-accent/50 bg-accent/5"
                >
                  <ShoppingBag className="w-9 h-9 text-accent/70" strokeWidth={1.4} />
                </motion.div>
                <div>
                  <h3 className="font-display uppercase tracking-widest text-lg text-text-primary mb-1">
                    Корзина пуста
                  </h3>
                  <p className="text-sm text-text-muted">
                    Выбирайте блюда из меню — нажимайте на плюс, и они появятся здесь. Или найдите блюдо через поиск
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                  <AnimatePresence initial={false}>
                    {items.map((item) => {
                      const prices = getPrices(item.dish)
                      return (
                        <motion.div
                          key={item.key}
                          layout
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: 40, height: 0, marginBottom: 0 }}
                          transition={{ duration: 0.2 }}
                          className="relative rounded-card bg-bg/60 border border-border/30 p-4 hover:border-accent/40 transition-colors duration-300"
                        >
                          <button
                            onClick={() => removeItem(item.key)}
                            aria-label={`Убрать ${item.dish.name}`}
                            className="absolute top-3 right-3 flex items-center justify-center w-7 h-7 rounded-full text-text-muted transition-all duration-200 hover:text-neon-red hover:bg-neon-red/10"
                          >
                            <Trash2 className="w-3.5 h-3.5" strokeWidth={2} />
                          </button>
                          <button
                            onClick={() => setExpandedKey(expandedKey === item.key ? null : item.key)}
                            aria-label={`Подробнее о «${item.dish.name}»`}
                            className="w-full text-left pr-8"
                          >
                            <span className="flex items-start gap-2">
                              <span className="font-display uppercase tracking-wide text-sm text-text-primary leading-snug">
                                {item.dish.name}
                              </span>
                              <ChevronDown
                                className={`w-4 h-4 mt-0.5 shrink-0 text-accent transition-transform duration-300 ${
                                  expandedKey === item.key ? "rotate-180" : ""
                                }`}
                                strokeWidth={2.2}
                              />
                            </span>
                            {item.dish.weight && (
                              <span className="block text-xs text-accent font-display uppercase tracking-wider mt-0.5">
                                {item.dish.weight}
                              </span>
                            )}
                            {item.dish.badges && item.dish.badges.length > 0 && (
                              <span className="flex flex-wrap items-center gap-1.5 mt-1.5">
                                {item.dish.badges.map((b) => (
                                  <span
                                    key={b}
                                    className={`px-2 py-0.5 rounded-full text-[9px] font-display uppercase tracking-wider border ${
                                      b.toLowerCase() === "без добавленного сахара"
                                        ? "text-neon-blue border-neon-blue/50 bg-neon-blue/10"
                                        : "text-success border-success/50 bg-success/10"
                                    }`}
                                  >
                                    {b}
                                  </span>
                                ))}
                              </span>
                            )}
                          </button>
                          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/20">
                            <AddToCartControl dish={item.dish} variant="stepper" />
                            <span className="flex flex-col items-end leading-tight">
                              {prices.hasDiscount && (
                                <span className="font-display text-xs text-text-muted/70 line-through whitespace-nowrap">
                                  {(prices.original * item.quantity).toLocaleString("ru-RU")} VND
                                </span>
                              )}
                              <span className="font-display text-lg whitespace-nowrap">
                                <span className="text-text-primary">
                                  {(prices.final * item.quantity).toLocaleString("ru-RU")}
                                </span>{" "}
                                <span className="text-accent text-sm">VND</span>
                              </span>
                            </span>
                          </div>
                          <AnimatePresence initial={false}>
                            {expandedKey === item.key && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-3 pt-3 border-t border-border/20 space-y-2 text-sm leading-relaxed">
                                  {item.dish.description && (
                                    <p>
                                      <span className="font-display uppercase tracking-wider text-accent text-sm">
                                        Описание:{" "}
                                      </span>
                                      <span className="text-text-muted text-sm">{item.dish.description}</span>
                                    </p>
                                  )}
                                  {item.dish.subtitle && (
                                    <p>
                                      <span className="font-display uppercase tracking-wider text-accent text-sm">
                                        На выбор:{" "}
                                      </span>
                                      <span className="text-text-muted text-sm">{item.dish.subtitle}</span>
                                    </p>
                                  )}
                                  {item.dish.base && (
                                    <p>
                                      <span className="font-display uppercase tracking-wider text-accent text-sm">
                                        Основа на выбор:{" "}
                                      </span>
                                      <span className="text-text-muted text-sm">{item.dish.base}</span>
                                    </p>
                                  )}
                                  {item.dish.composition && (
                                    <p>
                                      <span className="font-display uppercase tracking-wider text-accent text-sm">
                                        Состав:{" "}
                                      </span>
                                      <span className="text-text-muted text-sm">{item.dish.composition}</span>
                                    </p>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    })}
                  </AnimatePresence>
                </div>

                <div className="px-5 py-4 border-t border-border/30 bg-bg/40">
                  <div className="flex items-center justify-between">
                    <span className="font-display uppercase tracking-widest text-sm text-text-secondary">
                      Итого
                    </span>
                    <span className="font-display text-2xl font-bold whitespace-nowrap">
                      <span className="text-text-primary">{formattedTotal}</span>{" "}
                      <span className="text-accent text-lg">VND</span>
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-2.5 mt-2.5 rounded-xl border px-3.5 py-2.5 ${
                      freeDelivery
                        ? "border-success/60 bg-success/10 shadow-[0_0_16px_rgba(62,207,110,0.3)]"
                        : "border-accent/50 bg-accent/10 shadow-[0_0_16px_rgba(255,106,0,0.3)]"
                    }`}
                  >
                    <Truck
                      className={`w-4 h-4 shrink-0 ${freeDelivery ? "text-success" : "text-accent"}`}
                      strokeWidth={2.2}
                    />
                    {freeDelivery ? (
                      <span className="text-xs font-display uppercase tracking-wider text-success leading-snug">
                        Доставка за наш счёт — заказ от {FREE_DELIVERY_FROM.toLocaleString("ru-RU")} VND
                      </span>
                    ) : (
                      <span className="text-xs font-display uppercase tracking-wider text-accent leading-snug">
                        Ещё {deliveryRemaining.toLocaleString("ru-RU")} VND — и доставка за наш счёт
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setStep("checkout")
                      setSearchOpen(false)
                      setQuery("")
                      setBadge(null)
                      setExpandedKey(null)
                    }}
                    className="w-full py-3.5 mt-3 rounded-full bg-gradient-to-r from-accent to-accent-hover font-display uppercase tracking-widest font-bold text-black text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,106,0,0.55)] active:scale-[0.98]"
                  >
                    Оформить заказ
                  </button>
                  <p className="text-center text-xs text-text-muted mt-2.5">
                    Оплата на месте — картой или наличными
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}