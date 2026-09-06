"use client"

import { useEffect } from "react"
import { createPortal } from "react-dom"
import type { ReactNode } from "react"
import { X } from "lucide-react"

export function MapFullscreen({
  open,
  onClose,
  title = "Выбор адреса на карте",
  children,
}: {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  if (typeof window === "undefined") return null

  return createPortal(
    <div
      aria-hidden={!open}
      inert={!open}
      className={`fixed inset-0 z-[90] ${open ? "" : "pointer-events-none"}`}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute inset-0 flex flex-col transition-all duration-300 ease-out ${
          open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-border/30 bg-surface/95 backdrop-blur-md">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
            <h3 className="font-display uppercase tracking-wider text-sm text-text-primary truncate">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Закрыть карту"
            title="Закрыть карту"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-border/50 text-text-secondary transition-all duration-200 hover:text-accent hover:border-accent hover:shadow-[0_0_12px_rgba(255,106,0,0.35)] active:scale-90 shrink-0"
          >
            <X className="w-4 h-4" strokeWidth={2.2} />
          </button>
        </div>
        <div className="flex-1 min-h-0 relative">{children}</div>
      </div>
    </div>,
    document.body,
  )
}