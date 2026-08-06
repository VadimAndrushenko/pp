"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Phone } from "lucide-react"
import { workingHours } from "@/config/links"
import { cn } from "@/components/lib/utils"

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
        "fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-500",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled && "shadow-[0_4px_20px_rgba(0,0,0,0.5)]",
        scrolled ? "bg-[rgba(10,10,10,0.95)]" : "bg-bg",
      )}
      style={{
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="shrink-0 group">
          <Image src="/logo.png" alt="POIDEM POZHREM" width={200} height={70} className="h-14 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-xs font-display uppercase tracking-wider">
          <div className="flex gap-4 text-text-muted">
            <div className="flex items-center gap-2">
              <span>{workingHours.daily.label}</span>
              <span className="text-accent font-bold">{workingHours.daily.hours}</span>
            </div>
          </div>

          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-display font-bold uppercase text-xs tracking-wider border-2 border-accent text-accent transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,106,0,0.4)]"
          >
            <Phone className="w-3.5 h-3.5" />
            Контакты
          </Link>

          <button className="flex items-center gap-1 px-3 py-1 rounded-sm border border-border text-text-secondary hover:text-accent hover:border-accent transition-all duration-200">
            RU
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
          aria-label="Меню"
        >
          <span
            className={cn(
              "block h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out",
              isOpen && "translate-y-[7px] rotate-45",
              isOpen ? "bg-accent" : "bg-text-primary",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out bg-text-primary",
              isOpen && "opacity-0 scale-x-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out",
              isOpen && "-translate-y-[7px] -rotate-45",
              isOpen ? "bg-accent" : "bg-text-primary",
            )}
          />
        </button>
      </div>

      <div
        className="lg:hidden grid transition-all duration-500 ease-in-out bg-surface"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="px-5 py-4 flex flex-col gap-4 text-sm font-display uppercase">
          <div className="flex flex-col gap-2 text-text-muted">
            <div className="flex justify-between">
              <span>{workingHours.daily.label}</span>
              <span className="text-accent font-bold">{workingHours.daily.hours}</span>
            </div>
          </div>
          <Link
            href="/contacts"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-display font-bold uppercase text-sm tracking-wider border-2 border-accent text-accent transition-all duration-200"
          >
            <Phone className="w-4 h-4" />
            Контакты
          </Link>

          <button className="flex items-center justify-center gap-1 w-full py-2 rounded-sm border border-border text-text-secondary hover:text-accent transition-colors">
            RU
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
        </div>
      </div>
    </header>
  )
}
