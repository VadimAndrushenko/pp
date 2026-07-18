"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { workingHours } from "@/config/links"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.5)]" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(10, 10, 10, 0.95)" : "var(--color-bg)",
        borderColor: "var(--color-border)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="px-5 py-3 flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <span className="text-2xl transition-transform duration-300 group-hover:scale-110">🥔</span>
          <div className="flex flex-col leading-none font-display uppercase">
            <span className="text-base tracking-wider text-[var(--color-text-primary)]">POIDEM</span>
            <span className="text-base tracking-wider text-[var(--color-text-primary)]">
              POZHREM
              <span style={{ color: "var(--color-accent)" }}>!</span>
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-xs font-display uppercase tracking-wider">
          <div className="flex gap-4 text-[var(--color-text-muted)]">
            <div className="flex items-center gap-2">
              <span>{workingHours.weekdays.label}</span>
              <span className="text-[var(--color-text-secondary)]">{workingHours.weekdays.hours}</span>
            </div>
            <span className="text-[var(--color-border)]">|</span>
            <div className="flex items-center gap-2">
              <span>{workingHours.weekends.label}</span>
              <span className="text-[var(--color-accent)] font-bold">{workingHours.weekends.hours}</span>
            </div>
          </div>

          <button className="flex items-center gap-1 px-3 py-1 rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-200">
            RU
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
          aria-label="Меню"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="px-5 py-4 flex flex-col gap-4 text-sm font-display uppercase">
          <div className="flex flex-col gap-2 text-[var(--color-text-muted)]">
            <div className="flex justify-between">
              <span>{workingHours.weekdays.label}</span>
              <span className="text-[var(--color-text-secondary)]">{workingHours.weekdays.hours}</span>
            </div>
            <div className="flex justify-between">
              <span>{workingHours.weekends.label}</span>
              <span className="text-[var(--color-accent)] font-bold">{workingHours.weekends.hours}</span>
            </div>
          </div>
          <button className="flex items-center justify-center gap-1 w-full py-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
            RU
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>
    </header>
  )
}
