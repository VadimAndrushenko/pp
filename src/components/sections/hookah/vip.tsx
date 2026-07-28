import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HookahVIP({ className }: { className?: string }) {
  return (
    <Link
      href="/vip"
      className={`group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-accent)]/30 block transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,106,0,0.3)] hover:border-[var(--color-accent)]/80 ${className ?? ""}`}
    >
      <div className="absolute inset-0 transition-all duration-300 group-hover:scale-105">
        <Image
          src="/images/hookah/vip-hookah-bg.png"
          alt=""
          fill
          className="object-cover object-right opacity-70 transition-all duration-300 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
      </div>

      <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 py-5 sm:py-3 px-6 sm:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-10">
          <h2 className="shrink-0 text-center text-[var(--color-accent)] font-display uppercase leading-[0.9] tracking-tight transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,106,0,0.8)]">
            <span className="font-semibold text-6xl max-sm:text-5xl">VIP</span>
            <br />
            <span className="text-5xl max-sm:text-4xl">CLUB</span>
          </h2>

          <div className="relative shrink-0 w-[160px] sm:w-[220px] rotate-1 -mt-7 sm:ml-0 ml-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-2">
            <div
              className="absolute inset-4 -z-10 blur-xl opacity-25 transition-all duration-300 group-hover:opacity-50 group-hover:blur-2xl"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <Image
              src="/images/hookah/vip-card.png"
              alt="VIP Club карта"
              width={600}
              height={380}
              className="relative w-full h-auto mix-blend-screen"
            />
          </div>
        </div>

        <div className="flex flex-1 min-w-0 items-center justify-between gap-4 sm:block">
          <p className="text-2xl font-display uppercase tracking-wide text-[var(--color-text-primary)] leading-snug sm:mb-6 max-md:text-sm transition-all duration-300 group-hover:text-white">
            Вступай в наш VIP CLUB
            <span className="hidden sm:inline"><br /></span>и получай до 50% кешбэк!
          </p>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-sm)] border border-[var(--color-accent)] font-display uppercase tracking-wider transition-all duration-300 shrink-0 max-sm:text-sm max-sm:px-4 max-sm:py-2 group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:shadow-[0_0_25px_rgba(255,106,0,0.5)]">
            Подробнее
            <ArrowRight className="w-4 aspect-square text-[var(--color-accent)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white max-sm:w-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}
