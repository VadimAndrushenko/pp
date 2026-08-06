import { notFound } from "next/navigation"

import { BookingButton } from "@/components/ui/booking-button"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { EventHero } from "@/components/sections/events/event-hero"
import { EventDescription } from "@/components/sections/events/event-description"
import { EventProgram } from "@/components/sections/events/event-program"
import { EventBanner } from "@/components/sections/events/event-banner"
import { EventInfo } from "@/components/sections/events/event-info"
import { events } from "@/config/events"

type EventDetail = {
  titleLine1: string
  titleLine2?: string
  titleLine3?: string
  subtitle: string
  featuresHeading: string
  features: Array<{ icon: string; title: string; desc: string }>
}

const EVENT_DETAILS: Record<string, EventDetail> = {
  "after-weekend-party": {
    titleLine1: "AFTER",
    titleLine2: "WEEKEND",
    titleLine3: "PARTY",
    subtitle: "ПРОДОЛЖАЕМ ВЫХОДНЫЕ",
    featuresHeading: "В ПРОГРАММЕ",
    features: [
      { icon: "MicVocal", title: "КАРАОКЕ ДО УТРА", desc: "Свободный микрофон и любимые хиты" },
      { icon: "Martini", title: "СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ БАРА", desc: "Коктейли и напитки по приятным ценам" },
      { icon: "Gift", title: "РОЗЫГРЫШИ ШОТОВ И ПОДАРКОВ", desc: "Каждый час приятные сюрпризы" },
      { icon: "Music", title: "ЛУЧШИЕ ТАНЦЕВАЛЬНЫЕ ХИТЫ", desc: "Танцпол, где разогреваем неделю" },
      { icon: "Users", title: "НОВЫЕ ЛЮДИ И ОТЛИЧНОЕ НАСТРОЕНИЕ", desc: "Знакомства, общение и драйв" },
    ],
  },
  "business-breakfast": {
    titleLine1: "GAME",
    titleLine2: "NIGHT",
    subtitle: "ИГРЫ • КОНКУРСЫ • ПРИЗЫ",
    featuresHeading: "В ПРОГРАММЕ",
    features: [
      { icon: "Dices", title: "НАСТОЛЬНЫЕ ИГРЫ", desc: "Популярные игры для компаний и новых знакомств" },
      { icon: "Trophy", title: "ТУРНИРЫ И КОНКУРСЫ", desc: "Соревнования с призами для всех гостей" },
      { icon: "Music", title: "МУЗЫКАЛЬНЫЕ УГАДАЙКИ", desc: "Любимые хиты, визуальные и аудио-викторины" },
      { icon: "Gift", title: "ПРИЗЫ И ПОДАРКИ", desc: "Каждый участник может выиграть классные призы" },
      { icon: "Users", title: "НОВЫЕ ЛЮДИ И ОБЩЕНИЕ", desc: "Знакомства, общение и крутая атмосфера" },
    ],
  },
  "quiz-poidem-pozhrem": {
    titleLine1: "СВОИ",
    titleLine2: "ЛЮДИ",
    subtitle: "ВСТРЕЧА ЭКСПАТОВ И НОВЫЕ ЗНАКОМСТВА",
    featuresHeading: "В ПРОГРАММЕ",
    features: [
      { icon: "Users", title: "ОБЩЕНИЕ", desc: "Свободное общение в дружеской атмосфере" },
      { icon: "Handshake", title: "НОВЫЕ ЗНАКОМСТВА", desc: "Находите друзей и единомышленников по всему миру" },
      { icon: "MicVocal", title: "КАРАОКЕ", desc: "Любимые песни для всех желающих" },
      { icon: "Music", title: "МУЗЫКА", desc: "Лучшие хиты и приятная атмосфера вечера" },
      { icon: "Wine", title: "НАПИТКИ И УГОЩЕНИЯ", desc: "Вкусные блюда и напитки по отличным ценам" },
    ],
  },
  "live-music": {
    titleLine1: "ЖИВАЯ",
    titleLine2: "МУЗЫКА",
    subtitle: "АКУСТИЧЕСКИЙ ВЕЧЕР",
    featuresHeading: "В ПРОГРАММЕ",
    features: [
      { icon: "Music", title: "ЖИВОЙ ЗВУК", desc: "Акустическое исполнение" },
      { icon: "MicVocal", title: "ВОКАЛ", desc: "Профессиональный вокал" },
      { icon: "Heart", title: "АТМОСФЕРА", desc: "Уютная обстановка" },
      { icon: "Users", title: "ЗРИТЕЛИ", desc: "Тёплая публика" },
      { icon: "Star", title: "ХИТЫ", desc: "Любимые песни" },
    ],
  },
  "karaoke-battle": {
    titleLine1: "ТЕМАТИЧЕСКИЙ",
    titleLine2: "КВИЗ",
    subtitle: "ИНТЕЛЛЕКТ • ЭМОЦИИ • ПРИЗЫ • ВЕСЕЛЬЕ",
    featuresHeading: "В ПРОГРАММЕ",
    features: [
      { icon: "Brain", title: "РАЗНЫЕ ТЕМЫ", desc: "Новые вопросы каждую неделю" },
      { icon: "Users", title: "КОМАНДНАЯ ИГРА", desc: "2-8 человек в команде" },
      { icon: "Trophy", title: "ПРИЗЫ И ПОДАРКИ", desc: "Победители получают крутые награды" },
      { icon: "Music", title: "МУЗЫКА И АТМОСФЕРА", desc: "Лучшая музыка и отличное настроение" },
      { icon: "Smile", title: "ВЕСЕЛЬЕ И ОБЩЕНИЕ", desc: "Новые знакомства и море эмоций" },
    ],
  },
  "dj-party": {
    titleLine1: "ШКОЛЬНАЯ",
    titleLine2: "ДИСКОТЕКА",
    titleLine3: "90-2000",
    subtitle: "ЛУЧШИЕ ХИТЫ ДВУХ ПОКОЛЕНИЙ • ТАНЦЫ • КАРАОКЕ • ВЕЧЕРИНКА",
    featuresHeading: "В ПРОГРАММЕ",
    features: [
      { icon: "Disc3", title: "ХИТЫ 90-2000", desc: "Лучшие треки двух легендарных десятилетий" },
      { icon: "Music", title: "ТАНЦЫ ДО УТРА", desc: "Танцпол, который не пустеет до самого утра" },
      { icon: "MicVocal", title: "КАРАОКЕ ДЛЯ ВСЕХ", desc: "Пой любимые песни с друзьями и новыми людьми" },
      { icon: "Gift", title: "КОНКУРСЫ И ПОДАРКИ", desc: "Призы, розыгрыши и отличное настроение" },
      { icon: "Users", title: "НОВЫЕ ЛЮДИ И ДРУЗЬЯ", desc: "Знакомства, общение и яркие впечатления" },
    ],
  },
  "show-program": {
    titleLine1: "ВОСКРЕСНЫЙ",
    titleLine2: "ОПОХМЕЛ",
    subtitle: "ГОТОВИМ ТЕЛО К ЖИЗНИ И ПРОДОЛЖАЕМ ВЕЧЕР ВМЕСТЕ",
    featuresHeading: "В ПРОГРАММЕ",
    features: [
      { icon: "Soup", title: "ГОРЯЧАЯ БАЗА — ЖИДКОЕ ЗОЛОТО", desc: "Супы и блюда, которые ставят на ноги" },
      { icon: "CupSoda", title: "ОТРЕЗВЛЕНИЕ", desc: "Бодрящие напитки для восстановления сил" },
      { icon: "Beer", title: "ПРОДОЛЖЕНИЕ БАНКЕТА", desc: "Пиво, коктейли и классические напитки" },
      { icon: "Music", title: "КАРАОКЕ И МУЗЫКА", desc: "Любимые хиты и живой вайб" },
      { icon: "Users", title: "ОТЛИЧНАЯ КОМПАНИЯ", desc: "Друзья, общение и весёлое настроение" },
    ],
  },
}

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }))
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = events.find((e) => e.slug === slug)
  const details = event ? EVENT_DETAILS[event.slug] : undefined

  if (!event || !details) {
    notFound()
  }

  return (
    <div>
      <Breadcrumb />
      <EventHero
        event={event}
        titleLine1={details.titleLine1}
        titleLine2={details.titleLine2}
        titleLine3={details.titleLine3}
        subtitle={details.subtitle}
      />
      <EventDescription description={event.description} />
      <EventProgram heading={details.featuresHeading} features={details.features} />
      <EventBanner />
      <EventInfo time={event.time} dayOfWeek={event.dayOfWeek} />
      <section className="section-py">
        <BookingButton
          href="https://wa.me/84855559797"
          label="ЗАБРОНИРОВАТЬ СТОЛ"
          className="text-black lg:py-6 lg:text-2xl"
        />
      </section>
    </div>
  )
}