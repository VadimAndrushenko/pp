import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Check, Percent, Gift, Star, Zap } from "lucide-react"

const benefits = [
  { icon: Percent, title: "Кешбэк до 50%", description: "Возвращаем бонусами до половины суммы заказа" },
  { icon: Gift, title: "Подарки на день рождения", description: "Скидки и угощения от заведения" },
  { icon: Star, title: "Приоритетный вход", description: "Без очереди в выходные и праздники" },
  { icon: Zap, title: "Эксклюзивные предложения", description: "Только для участников клуба" },
]

export default function VipPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />

        <div className="flex items-center gap-3 mb-4">
          <Crown className="w-10 h-10" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
          <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
            VIP Club
          </h1>
        </div>

        <p className="text-sm font-display uppercase tracking-wider mb-2" style={{ color: "var(--color-accent)" }}>
          Вступай в наш VIP CLUB и получай до 50% кешбэк!
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Эксклюзивные привилегии для постоянных гостей.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <Card key={i} className="flex items-start gap-4 p-5">
                <Icon className="w-8 h-8 shrink-0" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
                <div>
                  <h3 className="text-base font-display uppercase text-[var(--color-text-primary)] mb-1">{b.title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)]">{b.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="p-6 text-center mb-8">
          <Crown className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
          <h2 className="text-xl font-display font-bold uppercase text-[var(--color-text-primary)] mb-3">
            Оформить карту VIP
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6">
            Свяжитесь с нами для получения персональной VIP-карты
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="solid" size="lg" as="a" href="https://wa.me/84855559797">
              WhatsApp
            </Button>
            <Button variant="outline" size="lg" as="a" href="https://t.me/poidem_pozhrem">
              Telegram
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
