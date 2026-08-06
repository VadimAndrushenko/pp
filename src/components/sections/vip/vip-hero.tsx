import { Crown } from "lucide-react"

export function VipHero() {
  return (
    <div className="section-py">
      <div className="flex items-center gap-3">
        <Crown className="w-10 h-10 text-accent"  strokeWidth={1.5} />
        <h1 className="text-4xl max-md:text-3xl font-display font-bold uppercase tracking-tight text-text-primary">
          VIP Club
        </h1>
      </div>

      <p className="text-sm font-display uppercase tracking-wider text-accent" >
        Вступай в наш VIP CLUB и получай до 50% кешбэк!
      </p>
      <p className="text-sm text-text-secondary">
        Эксклюзивные привилегии для постоянных гостей.
      </p>
    </div>
  )
}
