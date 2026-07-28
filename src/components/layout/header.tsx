"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { workingHours } from "@/config/links"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handler = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 20)

      if (currentY > 100 && currentY > lastScrollY.current) {
        setHidden(true)
        setIsOpen(false)
      } else {
        setHidden(false)
      }

      lastScrollY.current = currentY
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled && "shadow-[0_4px_20px_rgba(0,0,0,0.5)]",
      )}
      style={{
        backgroundColor: scrolled ? "rgba(10, 10, 10, 0.95)" : "var(--color-bg)",
        borderColor: "var(--color-border)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 flex items-center justify-between py-3">
        <Link href="/" className="shrink-0 group">
          <Image src="/logo.png" alt="POIDEM POZHREM" width={200} height={70} className="h-14 w-auto object-contain" />
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

          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-display font-bold uppercase text-xs tracking-wider border-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,106,0,0.4)]"
            style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
          >
            <Phone className="w-3.5 h-3.5" />
            Контакты
          </Link>

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
        className="lg:hidden grid transition-all duration-500 ease-in-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          backgroundColor: "var(--color-surface)",
        }}
      >
        <div className="overflow-hidden">
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
          <Link
            href="/contacts"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-display font-bold uppercase text-sm tracking-wider border-2 transition-all duration-200"
            style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
          >
            <Phone className="w-4 h-4" />
            Контакты
          </Link>

          <button className="flex items-center justify-center gap-1 w-full py-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
            RU
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
        </div>
      </div>
    </header>
  )
}
