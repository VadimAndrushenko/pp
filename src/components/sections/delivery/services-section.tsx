"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ArrowRight, X, Truck, Package } from "lucide-react"
import { Card } from "@/components/ui/card"
import { links } from "@/config/links"

function IconGrab({ className, color }: { className?: string; color: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill={color}>
      <path d="M23.129 10.863a2.927 2.927 0 00-2.079-.872c-.57 0-1.141.212-1.455.421-.651.434-1.186.904-2.149 2.148v.894c.817-1.064 1.59-1.903 2.177-2.364.386-.31.933-.501 1.427-.501 1.275 0 2.352 1.077 2.352 2.352v.538c0 .63-.247 1.223-.698 1.668a2.341 2.341 0 01-1.654.685c-1.048 0-1.97-.719-2.22-1.701l-.422.51c.307 1.03 1.417 1.789 2.642 1.789.778 0 1.516-.31 2.079-.872.562-.562.871-1.3.871-2.079v-.538c0-.778-.31-1.517-.871-2.078m-12.8-.274c.406 0 .757.087 1.074.266.149-.186.299-.337.411-.449-.335-.256-.903-.415-1.485-.415-.83 0-1.584.3-2.122.843-.534.54-.83 1.287-.83 2.107v3.489h.598V12.94c0-1.385.968-2.352 2.354-2.352m5.678 5.84v-3.488c0-1.072-.84-1.913-1.913-1.913-.5 0-.976.203-1.343.57a1.895 1.895 0 00-.57 1.343v.538c0 1.037.877 1.913 1.913 1.913.285 0 .671-.07.908-.264v-.631c-.232.187-.57.298-.908.298a1.302 1.302 0 01-1.315-1.316v-.538a1.3 1.3 0 011.315-1.314 1.3 1.3 0 011.316 1.314v3.489zM0 12.596v.193c0 1.036.393 2.003 1.107 2.722a3.759 3.759 0 002.689 1.112c.82 0 1.548-.186 2.162-.551.506-.302.73-.607.75-.635V12.22H3.65v.597H6.11v2.434l-.002.002c-.288.288-.972.77-2.312.77a3.165 3.165 0 01-2.279-.938 3.247 3.247 0 01-.92-2.297v-.193c0-.83.375-1.656 1.026-2.269a3.558 3.558 0 012.442-.967c.847 0 1.438.129 1.913.416v-.67c-.494-.21-1.085-.305-1.913-.305C1.862 8.8 0 10.538 0 12.595m10.329-.968c.226 0 .419.037.571.112.075-.186.151-.339.262-.525-.162-.116-.549-.186-.833-.186-1.09 0-1.913.823-1.913 1.913v3.489h.598V12.94c0-.774.54-1.314 1.315-1.314m-4.351-.702v-.707c-.541-.29-1.131-.419-1.913-.419-.799 0-1.555.293-2.132.824-.577.532-.895 1.233-.895 1.972v.193c0 1.542 1.237 2.796 2.758 2.796 1.237 0 1.745-.405 1.874-.533v-1.794H3.65v.598h1.46v.899l-.005.001c-.187.075-.578.231-1.31.231-.58 0-1.122-.225-1.528-.636a2.203 2.203 0 01-.632-1.562v-.193c0-1.192 1.113-2.198 2.43-2.198.91 0 1.45.147 1.913.528m14.105 1.126c.27-.27.623-.424.967-.424.737 0 1.315.577 1.315 1.314v.538c0 .738-.578 1.316-1.315 1.316-.357 0-.702-.196-.972-.55a2.151 2.151 0 01-.418-1.12l-.484.591c.095.452.33.885.665 1.19.344.313.774.486 1.209.486a1.915 1.915 0 001.913-1.913v-.538c0-.499-.202-.977-.57-1.343a1.896 1.896 0 00-1.343-.57c-.316 0-.818.114-1.417.652l-.002.002c-.16.16-.536.536-.765.804-.384.42-.943 1.054-1.42 1.688v.933c.529-.68.833-1.06 1.33-1.634.445-.519.996-1.15 1.307-1.422m-8.939 1.428c0 .779.31 1.517.872 2.08a2.93 2.93 0 002.078.87c.33 0 .669-.07.908-.188v-.597c-.28.117-.618.188-.908.188-1.274 0-2.352-1.077-2.352-2.353v-.538c0-1.275 1.078-2.352 2.352-2.352a2.34 2.34 0 012.353 2.353v3.488h.598v-3.604a2.979 2.979 0 00-.915-2.006 2.92 2.92 0 00-2.036-.83c-.778 0-1.516.31-2.078.873a2.926 2.926 0 00-.872 2.078zm6.918-2.313c.183-.22.372-.443.596-.631V7.378h-.596zm1.037-.876V7.378h.597V9.88a3.601 3.601 0 00-.597.41" />
    </svg>
  )
}

function IconOwnDelivery({ color }: { color: string }) {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center">
      <svg viewBox="0 0 24 24" className="absolute h-8 w-8 -translate-x-2.5 -translate-y-3" fill="none" stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
        <path d="M12 12l8 -4.5" />
        <path d="M12 12l0 9" />
        <path d="M12 12l-8 -4.5" />
        <path d="M16 5.25l-8 4.5" />
      </svg>
      <svg viewBox="0 0 24 24" className="absolute h-9 w-9 translate-x-2.5 translate-y-2.5" fill="none" stroke={color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M5 16v1a2 2 0 0 0 4 0v-5h-3a3 3 0 0 0 -3 3v1h10a6 6 0 0 1 5 -4v-5a2 2 0 0 0 -2 -2h-1" />
        <path d="M6 9l3 0" />
      </svg>
    </div>
  )
}

const services = [
  { title: "Заказать еду и напитки", image: "/images/delivery/food.png" },
  { title: "Заказать кальян", image: "/images/delivery/hookah.png", href: "/hookah/out" },
]

const methods = [
  { 
    key: "grab", 
    label: "Grab Доставка", 
    description: "Быстрая доставка через приложение",
    href: links.grab, 
    color: "#00B14F",
    bgGradient: "from-emerald-500/10 to-emerald-500/5",
    glowColor: "rgba(0,177,79,0.2)"
  },
  { 
    key: "own", 
    label: "Собственная доставка", 
    description: "Доставка от нашего ресторана",
    href: null as string | null, 
    color: "var(--color-accent)",
    bgGradient: "from-orange-500/10 to-orange-500/5",
    glowColor: "rgba(255,106,0,0.2)"
  },
]

type Phase = "idle" | "entering" | "open" | "leaving"

export function ServicesSection({ className }: { className?: string }) {
  const [phase, setPhase] = useState<Phase>("idle")

  const open = useCallback(() => setPhase("entering"), [])
  const close = useCallback(() => setPhase("leaving"), [])

  useEffect(() => {
    if (phase !== "entering") return
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
    const id = requestAnimationFrame(() => setPhase("open"))
    return () => cancelAnimationFrame(id)
  }, [phase])

  useEffect(() => {
    if (phase !== "leaving") return
    const id = setTimeout(() => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
      setPhase("idle")
    }, 350)
    return () => clearTimeout(id)
  }, [phase])

  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <section className={className}>
      <h2 className="text-5xl lg:text-6xl mb-6 font-display">Заказать</h2>
      <div className="grid grid-cols-2 gap-11 max-lg:gap-6 max-sm:gap-3">
        {services.map((s, i) => (
          <div key={i}>
            <Card
              as={s.href ? "a" : "div"}
              href={s.href}
              onClick={s.href ? undefined : open}
              className="group p-0 flex flex-col h-full overflow-hidden transition-all duration-500 ease-out hover:scale-100 active:scale-95 hover:-translate-y-2 hover:shadow-[0_4px_24px_-6px_var(--color-accent)] cursor-pointer"
            >
              <div className="relative aspect-[2/1] w-full shrink-0 overflow-hidden max-lg:aspect-[3/2] max-[500px]:aspect-square max-sm:aspect-[2/3]">
                <Image src={s.image} alt={s.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 z-10 flex flex-col flex-1 gap-2 p-5 max-[500px]:p-3 max-sm:inset-x-0 max-sm:mx-auto max-sm:w-fit max-sm:items-center max-sm:text-center">
                <h3 className="flex items-center justify-center gap-3 text-center text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] max-lg:text-2xl max-[500px]:flex-col max-[500px]:gap-1 max-[500px]:text-sm max-[500px]:leading-tight max-[360px]:text-[13px] max-lg:text-3xl max-sm:text-lg">
                  <span>{s.title}</span>
                  <ArrowRight
                    className="w-10 h-10 lg:w-12 lg:h-12 text-[var(--color-accent)] transition-transform duration-500 group-hover:translate-x-1.5 max-lg:w-8 max-lg:h-8 max-[500px]:w-5 max-[500px]:h-5"
                    strokeWidth={2}
                  />
                </h3>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {phase !== "idle" && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
            phase === "leaving" ? "animate-overlay-leave" : "animate-overlay-enter"
          }`}
          style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
          onClick={close}
        >
          <div
            className={`relative w-full max-w-lg bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] shadow-2xl overflow-hidden ${
              phase === "leaving" ? "animate-modal-leave" : "animate-modal-enter"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Декоративный градиент сверху */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500" />
            
            {/* Кнопка закрытия */}
            <button 
              onClick={close} 
              className="absolute top-2 right-2 z-10 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-all duration-200 hover:rotate-90"
            >
              <X className="w-5 h-5" strokeWidth={2} />
            </button>

            <div className="p-8 max-sm:p-6">
              {/* Заголовок */}
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-[var(--color-text-primary)] mb-2">
                  Выберите способ доставки
                </h3>
                <p className="text-sm lg:text-base text-[var(--color-text-muted)]">
                  Как вам удобнее получить заказ?
                </p>
              </div>

              {/* Карточки методов */}
              <div className="flex gap-4 max-[420px]:flex-col">
                {methods.map((m) => {
                  const Tag = m.href ? "a" : "button"
                  return (
                    <Tag
                      key={m.key}
                      href={m.href ?? undefined}
                      className="group/method relative flex-1 flex flex-col items-center gap-4 rounded-xl border-2 px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 max-sm:px-4 max-sm:py-6 max-[420px]:w-full overflow-hidden"
                      style={{ 
                        borderColor: m.color,
                        color: m.color,
                      }}
                    >
                      {/* Фоновый градиент при наведении */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover/method:opacity-100 transition-opacity duration-300 bg-gradient-to-br"
                        style={{ 
                          background: `linear-gradient(135deg, ${m.glowColor.replace('0.2', '0.08')} 0%, transparent 60%)` 
                        }}
                      />
                      
                      {/* Иконка с анимацией */}
                      <div className="relative transition-transform duration-300 group-hover/method:scale-110">
                        {m.key === "grab" ? (
                          <IconGrab className="w-14 h-14" color={m.color} />
                        ) : (
                          <IconOwnDelivery color={m.color} />
                        )}
                      </div>

                      {/* Текст */}
                      <div className="relative flex flex-col gap-1.5">
                        <span className="font-display text-sm lg:text-base font-bold uppercase tracking-wide leading-tight">
                          {m.label}
                        </span>
                        <span className="text-xs lg:text-sm opacity-70 leading-relaxed">
                          {m.description}
                        </span>
                      </div>

                      {/* Индикатор действия */}
                      <div className="relative mt-1 flex items-center gap-1 text-xs lg:text-sm font-medium opacity-0 group-hover/method:opacity-100 transition-all duration-300 translate-y-1 group-hover/method:translate-y-0">
                        <span>{m.href ? "Перейти" : "Заказать"}</span>
                        <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform duration-300 group-hover/method:translate-x-0.5" />
                      </div>
                    </Tag>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}