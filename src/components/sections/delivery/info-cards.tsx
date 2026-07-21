import { Card } from "@/components/ui/card"

export function InfoCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
      <Card className="p-4">
        <p className="text-xs text-[var(--color-text-muted)] font-display uppercase mb-1">Время доставки</p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Центр 45–60 мин / Север/Юг 90–120 мин
        </p>
      </Card>
      <Card className="p-4">
        <p className="text-xs text-[var(--color-text-muted)] font-display uppercase mb-1">Минимальный заказ</p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Бесплатная доставка от 1.000.000₫ / Мин. заказ 100.000₫
        </p>
      </Card>
    </div>
  )
}
