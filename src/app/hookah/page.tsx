import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PriceCard } from "@/components/ui/price-card"
import { PromoBanner } from "@/components/ui/promo-banner"
import {
  Cigarette,
  Bike,
  Check,
  Sparkles,
  Flame,
  Snowflake,
  Clock,
  Syringe,
  ShieldCheck,
  MessageCircle,
  Send,
  ArrowRight,
} from "lucide-react"

const features = [
  { icon: Sparkles, title: "Премиальный табак", description: "Must Have, Darkside, Black Burn" },
  { icon: Flame, title: "Более 40 вкусов", description: "На любой выбор" },
  { icon: Snowflake, title: "Колба со льдом", description: "Прохладный дым" },
  { icon: Clock, title: "Готовность 5–7 минут", description: "Быстрая подача" },
  { icon: Syringe, title: "Замена в первые 3 минуты", description: "Если не понравился вкус" },
  { icon: ShieldCheck, title: "Чистота и гигиена", description: "Одноразовые мундштуки" },
]

const prices = [
  { id: "light", name: "Light", price: "349.000₫", image: "https://picsum.photos/seed/poidem-hookah-yellow/200/200", description: "Классический вкус" },
  { id: "medium", name: "Medium", price: "409.000₫", image: "https://picsum.photos/seed/poidem-hookah-blue/200/200", description: "Насыщенный вкус" },
  { id: "strong", name: "Strong", price: "509.000₫", image: "https://picsum.photos/seed/poidem-hookah-red/200/200", description: "Крепкий и яркий" },
]

const deliveryZones = [
  {
    title: "Центр острова",
    price: "150.000₫",
    image: "https://picsum.photos/seed/poidem-delivery-center/600/300",
    features: ["Привоз и установка", "Раскуривание", "Обратный вывоз"],
  },
  {
    title: "Север и удалённые районы",
    price: "250.000₫",
    image: "https://picsum.photos/seed/poidem-delivery-north/600/300",
    features: ["Привоз и установка", "Раскуривание", "Обратный вывоз"],
  },
]

export default function HookahPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />

        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 mb-10">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-2">
              Кальяны
            </h1>
            <p className="text-sm font-display uppercase tracking-wider mb-3" style={{ color: "var(--color-accent)" }}>
              Более 40 вкусов на выбор
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Премиальные кальяны в ресторане и с выездом на дом или мероприятие.
            </p>
          </div>
          <div
            className="w-full lg:w-[40%] h-48 rounded-[var(--radius-card)] bg-cover bg-center mt-6 lg:mt-0"
            style={{ backgroundImage: "url('https://picsum.photos/seed/poidem-hookah-hero/600/400')", backgroundColor: "var(--color-surface)" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <Card as="a" href="/menu/hookah.pdf" className="flex flex-col gap-4 p-5">
            <Cigarette className="w-8 h-8" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
            <h3 className="text-lg font-display uppercase text-[var(--color-text-primary)]">Кальянное меню</h3>
            <div
              className="w-full h-32 rounded-[var(--radius-sm)] bg-cover bg-center"
              style={{ backgroundImage: "url('https://picsum.photos/seed/poidem-hookah-menu/400/300')", backgroundColor: "var(--color-surface)" }}
            />
            <Button variant="outline" size="sm">
              Смотреть меню
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>
          <Card as="a" href="/delivery" className="flex flex-col gap-4 p-5">
            <Bike className="w-8 h-8" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
            <h3 className="text-lg font-display uppercase text-[var(--color-text-primary)]">Выездной кальян</h3>
            <div
              className="w-full h-32 rounded-[var(--radius-sm)] bg-cover bg-center"
              style={{ backgroundImage: "url('https://picsum.photos/seed/poidem-hookah-delivery/400/300')", backgroundColor: "var(--color-surface)" }}
            />
            <Button variant="outline" size="sm">
              Подробнее
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-6">
            Почему у нас лучшие кальяны?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <Card key={i} className="flex flex-col items-center text-center gap-2 p-4">
                  <Icon className="w-6 h-6" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
                  <h3 className="text-xs font-display uppercase text-[var(--color-text-primary)]">{feature.title}</h3>
                  <p className="text-[10px] text-[var(--color-text-secondary)]">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-6">
            Стоимость кальяна в ресторане
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {prices.map((tier) => (
              <PriceCard key={tier.id} {...tier} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Badge>Колба со льдом +150.000₫</Badge>
            <Badge>Фруктовая чаша +200.000₫</Badge>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-6">
            Выездной кальян на дом или мероприятие
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliveryZones.map((zone, i) => (
              <Card key={i} className="overflow-hidden p-0">
                <div
                  className="w-full h-36 bg-cover bg-center"
                  style={{ backgroundImage: `url(${zone.image})`, backgroundColor: "var(--color-surface)" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-display uppercase text-[var(--color-text-primary)] mb-1">{zone.title}</h3>
                  <p className="text-xl font-display font-bold text-[var(--color-accent)] mb-3">{zone.price}</p>
                  <ul className="space-y-1">
                    {zone.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                        <Check className="w-3 h-3" style={{ color: "var(--color-accent)" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="p-5 mb-8 border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            Для бронирования выездного кальяна свяжитесь с нами в Telegram или WhatsApp
          </p>
          <div className="flex gap-3 mb-4">
            <a
              href="https://t.me/poidem_pozhrem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] text-xs font-display uppercase"
              style={{ backgroundColor: "var(--color-telegram)", color: "white" }}
            >
              <Send className="w-4 h-4" />
              Telegram
            </a>
            <a
              href="https://wa.me/84855559797"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] text-xs font-display uppercase"
              style={{ backgroundColor: "var(--color-whatsapp)", color: "white" }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
          <Button variant="solid" size="full">
            Заказать
          </Button>
        </Card>

        <PromoBanner
          title="VIP CLUB"
          description="Вступай в наш VIP CLUB и получай до 50% кешбэк!"
          href="/vip"
          className="mb-8"
        />
      </div>
    </div>
  )
}
