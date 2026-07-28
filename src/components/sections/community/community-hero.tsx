import { Card } from "@/components/ui/card"
import { Send, CalendarCheck } from "lucide-react"

export function CommunityHero({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
        Сообщество
      </h1>
      <p className="text-sm font-display uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>
        Люди, знакомства, мероприятия, общение
      </p>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Мы — сообщество русскоязычных на Фукуоке. Знакомства, общение, совместные мероприятия.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card as="a" href="https://t.me/poidem_pozhrem" className="flex items-center gap-4 p-5">
          <Send className="w-8 h-8 shrink-0" style={{ color: "var(--color-telegram)" }} />
          <div>
            <h3 className="text-sm font-display uppercase text-[var(--color-text-primary)]">Telegram чат</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Общайся с сообществом</p>
          </div>
        </Card>
        <Card as="a" href="/events" className="flex items-center gap-4 p-5">
          <CalendarCheck className="w-8 h-8 shrink-0" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
          <div>
            <h3 className="text-sm font-display uppercase text-[var(--color-text-primary)]">Мероприятия</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Календарь встреч</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
