import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { links } from "@/config/links"
import { Send, Bike } from "lucide-react"

export function DeliveryMethods() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-4">
        Выберите способ доставки
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Card className="flex flex-col items-center gap-3 p-5 text-center" style={{ borderColor: "var(--color-grab)" }}>
          <span className="text-2xl">🔵</span>
          <h3 className="text-sm font-display uppercase text-[var(--color-text-primary)]">Grab</h3>
          <Button variant="outline" size="sm" as="a" href={links.grab}>
            Перейти в Grab
          </Button>
        </Card>
        <Card className="flex flex-col items-center gap-3 p-5 text-center">
          <Send className="w-8 h-8" style={{ color: "var(--color-telegram)" }} />
          <h3 className="text-sm font-display uppercase text-[var(--color-text-primary)]">Telegram</h3>
          <Button variant="outline" size="sm" as="a" href={links.telegramBot}>
            Перейти в TG-бот
          </Button>
        </Card>
        <Card className="flex flex-col items-center gap-3 p-5 text-center">
          <Bike className="w-8 h-8" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
          <h3 className="text-sm font-display uppercase text-[var(--color-text-primary)]">Собственная доставка</h3>
          <Button variant="solid" size="sm">
            Заказать
          </Button>
        </Card>
      </div>
    </section>
  )
}
