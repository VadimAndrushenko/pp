import { Crown } from "lucide-react"

export function VipHero({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <Crown className="w-10 h-10" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
        <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
          VIP Club
        </h1>
      </div>

      <p className="text-sm font-display uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>
        Вступай в наш VIP CLUB и получай до 50% кешбэк!
      </p>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Эксклюзивные привилегии для постоянных гостей.
      </p>
    </div>
  )
}
