import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PromoBanner } from "@/components/ui/promo-banner"
import { links } from "@/config/links"
import { Truck, Coffee, Cigarette, Wine, MessageCircle, Send, Phone, Bike, ArrowRight } from "lucide-react"

const zones = [
  { zone: "Центр (Дуонг Донг)", price: "50.000–90.000₫", time: "~45-60мин" },
  { zone: "Север острова", price: "150.000₫", time: "~90-120мин" },
  { zone: "Юг острова", price: "150.000₫", time: "~90-120мин" },
]

const services = [
  {
    icon: Coffee,
    title: "Еда и напитки",
    description: "Все блюда из меню с доставкой",
    href: "/menu",
  },
  {
    icon: Cigarette,
    title: "Кальяны",
    description: "Премиальные кальяны на выезд",
    href: "/hookah",
  },
  {
    icon: Wine,
    title: "Напитки",
    description: "Алкогольные и безалкогольные",
    href: "/menu",
  },
]

export default function DeliveryPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />

        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 mb-8">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-2">
              Доставка
            </h1>
            <p className="text-sm font-display uppercase tracking-wider mb-3" style={{ color: "var(--color-accent)" }}>
              Еды, напитков и кальянов
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Быстрая и надёжная доставка по всему острову.
            </p>
          </div>
          <div
            className="w-full lg:w-[40%] h-48 rounded-[var(--radius-card)] bg-cover bg-center mt-6 lg:mt-0"
            style={{ backgroundImage: "url('https://picsum.photos/seed/poidem-delivery-hero/600/400')", backgroundColor: "var(--color-surface)" }}
          />
        </div>

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

        <section className="mb-10">
          <h2 className="text-lg font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-4">
            Что доставляем?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <Card key={i} as="a" href={s.href} className="flex flex-col gap-3 p-4">
                  <Icon className="w-6 h-6" style={{ color: "var(--color-accent)" }} strokeWidth={1.5} />
                  <h3 className="text-sm font-display uppercase text-[var(--color-text-primary)]">{s.title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)]">{s.description}</p>
                  <ArrowRight className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
                </Card>
              )
            })}
          </div>
        </section>

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

        <section className="mb-10">
          <h2 className="text-lg font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-4">
            Зоны доставки и стоимость
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {zones.map((z, i) => (
              <Card key={i} className="p-4 text-center">
                <h3 className="text-sm font-display uppercase text-[var(--color-text-primary)] mb-2">{z.zone}</h3>
                <p className="text-lg font-display font-bold text-[var(--color-accent)] mb-1">{z.price}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{z.time}</p>
              </Card>
            ))}
          </div>
        </section>

        <PromoBanner
          title="VIP CLUB"
          description="Вступай в наш VIP CLUB и получай до 50% кешбэк!"
          href="/vip"
          className="mb-8"
        />

        <Card className="p-5 mb-8">
          <h3 className="text-sm font-display uppercase text-[var(--color-text-primary)] mb-3">Нужна помощь?</h3>
          <div className="flex flex-wrap gap-3 mb-3">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] text-xs font-display uppercase"
              style={{ backgroundColor: "var(--color-whatsapp)", color: "white" }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] text-xs font-display uppercase"
              style={{ backgroundColor: "var(--color-telegram)", color: "white" }}
            >
              <Send className="w-4 h-4" />
              Telegram
            </a>
          </div>
          <a
            href={`tel:${links.phone}`}
            className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
          >
            <Phone className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
            {links.phone}
          </a>
        </Card>
      </div>
    </div>
  )
}
