"use client"

import { Breadcrumb } from "@/components/layout/breadcrumb"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { EventsPreview } from "@/components/sections/events/events-preview"
import { MapCTA } from "@/components/ui/map-cta"
import { QuickNav } from "@/components/sections/main/quick-nav"
import { events } from "@/config/events"
import { MicVocal, Music, CalendarCheck, Eye, Gift, Image } from "lucide-react"
import type { NavItem } from "@/components/sections/main/quick-nav"

export default function TodayPage() {
  const todayEvent = events[4]
  const upcomingEvents = events.filter((e) => e.id !== todayEvent.id).slice(0, 6)

  const todayNavItems: NavItem[] = [
    { icon: CalendarCheck, label: "Смотреть всю афишу", desc: "Все мероприятия", href: "/events" },
    { icon: Eye, label: "Наши мероприятия", desc: "Что мы проводим", href: "/events" },
    { icon: Gift, label: "Акции и бонусы", desc: "Скидки и предложения", href: "/promotions" },
    { icon: Image, label: "Фото и видеоотчёты", desc: "Как у нас прошло", href: "/gallery" },
  ]

  return (
    <>
      <div className="flex items-center justify-between mb-6">
          <Breadcrumb />
          <span className="inline-flex items-center gap-1.5 text-xl font-display uppercase tracking-wider px-4 py-2 rounded-[var(--radius-sm)] border border-[var(--color-border)]">
            <span style={{ color: "var(--color-accent)" }}>24</span>
            <span style={{ color: "var(--color-text-primary)" }}>МАЯ</span>
            <span style={{ color: "var(--color-accent)" }}>Пятница</span>
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-2">
          Что сегодня?
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-8">
          Афиша событий на сегодня
        </p>

        <Card className="overflow-hidden p-0">
          <div className="relative">
            <Badge variant="accent" className="absolute top-3 left-3 z-10">
              Сегодня
            </Badge>
            <Badge className="absolute top-3 right-3 z-10">
              {todayEvent.time}
            </Badge>
            <div
              className="w-full h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${todayEvent.image})`, backgroundColor: "var(--color-surface)" }}
            />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-display font-bold uppercase text-[var(--color-text-primary)] mb-1">
              {todayEvent.title}
            </h2>
            {todayEvent.subtitle && (
              <p className="text-sm font-display uppercase tracking-wider mb-2" style={{ color: "var(--color-accent)" }}>
                {todayEvent.subtitle}
              </p>
            )}
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">{todayEvent.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              <Badge>
                <MicVocal className="w-3 h-3" />
                Живой вокал
              </Badge>
              <Badge>
                <Music className="w-3 h-3" />
                Лучшие хиты
              </Badge>
              <Badge variant="success">Вход свободный</Badge>
            </div>
            <Button variant="solid" size="full" as="a" href="https://wa.me/84855559797">
              🪑 Забронировать стол
            </Button>
          </div>
        </Card>

        <div className="py-8">
          <QuickNav embedded items={todayNavItems} />
        </div>

        <EventsPreview
          title="Дальнейшие события"
          events={upcomingEvents}
          linkLabel="Смотреть все"
          className="py-8"
        />

        <Card className="flex items-center gap-4 p-5">
          <div className="flex-1">
            <p className="text-sm font-display uppercase tracking-wider text-[var(--color-text-primary)] mb-2">
              Участие бесплатно!
            </p>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Бронь столов рекомендуем заранее. Дресс-код casual. Будем рады видеть вас!
            </p>
          </div>
          <div
            className="w-20 h-20 rounded-[var(--radius-sm)] bg-cover bg-center shrink-0"
            style={{ backgroundImage: "url('https://picsum.photos/seed/poidem-interior-night/400/400')", backgroundColor: "var(--color-surface)" }}
          />
        </Card>
    </>
  )
}
