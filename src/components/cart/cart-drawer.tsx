"use client"

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Check, ChevronDown, Minus, Plus, Search, ShoppingBag, Trash2, X, ArrowLeft } from "lucide-react"
import { parsePrice, useCart } from "@/components/cart/cart-context"
import { menuData } from "@/config/menu-data"

const BADGE_FILTERS = [
  { label: "Все", value: null },
  { label: "Веганское", value: "веганское блюдо" },
  { label: "Вегетарианское", value: "вегетарианское блюдо" },
  { label: "Без сахара", value: "без добавленного сахара" },
] as const

export function CartDrawer() {
  const { items, isOpen, closeCart, increment, decrement, removeItem, addItem, totalCount, totalAmount } =
    useCart()

  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [badge, setBadge] = useState<string | null>(null)
  const [justAdded, setJustAdded] = useState<string | null>(null)
  const [expandedKey, setExpandedKey] = useState<string | null>(null)

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

  const handleSearchAdd = (key: string, dish: (typeof results)[number]["dish"]) => {
    addItem(key, dish)
    setJustAdded(key)
    window.setTimeout(() => setJustAdded((prev) => (prev === key ? null : prev)), 1200)
  }

  const formattedTotal = totalAmount.toLocaleString("ru-RU")

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
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
              {searchOpen ? (
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
                      onClick={() => setSearchOpen(true)}
                      aria-label="Поиск блюд"
                      className="flex items-center justify-center w-9 h-9 rounded-full border border-border/50 text-text-secondary transition-all duration-200 hover:text-accent hover:border-accent hover:shadow-[0_0_12px_rgba(255,106,0,0.35)]"
                    >
                      <Search className="w-4 h-4" strokeWidth={2.2} />
                    </button>
                    <button
                      onClick={closeCart}
                      aria-label="Закрыть корзину"
                      className="flex items-center justify-center w-9 h-9 rounded-full border border-border/50 text-text-secondary transition-all duration-200 hover:text-accent hover:border-accent hover:rotate-90"
                    >
                      <X className="w-4 h-4" strokeWidth={2.2} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {searchOpen ? (
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
                        const inCart = items.some((item) => item.key === key)
                        return (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.18 }}
                          className="rounded-card bg-bg/60 border border-border/30 hover:border-accent/50 transition-colors duration-300"
                        >
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
                            <div className="flex flex-col items-end gap-2 shrink-0">
                              <span className="font-display text-base whitespace-nowrap">
                                <span className="text-text-primary">{parsePrice(dish.price).toLocaleString("ru-RU")}</span>{" "}
                                <span className="text-accent text-xs">VND</span>
                              </span>
                              <button
                                onClick={() => handleSearchAdd(key, dish)}
                                aria-label={`Добавить «${dish.name}» в корзину`}
                                className={`flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-300 active:scale-90 ${
                                  justAdded === key
                                    ? "bg-success border-success text-black shadow-[0_0_16px_rgba(62,207,110,0.5)]"
                                    : inCart
                                      ? "border-accent text-accent bg-accent/10"
                                      : "bg-accent/10 border-accent text-accent hover:bg-accent hover:text-black hover:shadow-[0_0_16px_rgba(255,106,0,0.5)]"
                                }`}
                              >
                                {justAdded === key ? (
                                  <Check className="w-4 h-4" strokeWidth={3} />
                                ) : (
                                  <Plus className="w-4 h-4" strokeWidth={2.6} />
                                )}
                              </button>
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
                      const amount = parsePrice(item.dish.price)
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
                            <div className="flex items-center gap-2.5">
                              <button
                                onClick={() => decrement(item.key)}
                                aria-label="Убрать одну порцию"
                                className="flex items-center justify-center w-8 h-8 rounded-full border border-border/50 text-text-secondary transition-all duration-200 hover:border-accent hover:text-accent active:scale-90"
                              >
                                <Minus className="w-3.5 h-3.5" strokeWidth={2.4} />
                              </button>
                              <span className="font-display text-lg text-text-primary min-w-6 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => increment(item.key)}
                                aria-label="Добавить одну порцию"
                                className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-black transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_0_14px_rgba(255,106,0,0.5)] active:scale-90"
                              >
                                <Plus className="w-3.5 h-3.5" strokeWidth={2.4} />
                              </button>
                            </div>
                            <span className="font-display text-lg whitespace-nowrap">
                              <span className="text-text-primary">
                                {(amount * item.quantity).toLocaleString("ru-RU")}
                              </span>{" "}
                              <span className="text-accent text-sm">VND</span>
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
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display uppercase tracking-widest text-sm text-text-secondary">
                      Итого
                    </span>
                    <span className="font-display text-2xl font-bold whitespace-nowrap">
                      <span className="text-text-primary">{formattedTotal}</span>{" "}
                      <span className="text-accent text-lg">VND</span>
                    </span>
                  </div>
                  <button className="w-full py-3.5 rounded-full bg-gradient-to-r from-accent to-accent-hover font-display uppercase tracking-widest font-bold text-black text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,106,0,0.55)] active:scale-[0.98]">
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