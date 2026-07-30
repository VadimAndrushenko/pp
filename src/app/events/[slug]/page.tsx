import Image from "next/image"
import { notFound } from "next/navigation"

import {
  Calendar,
  Camera,
  Clock,
  Martini,
  MapPin,
  ShieldCheck,
  UtensilsCrossed,
  Users,
  Wine,
  Music,
  MicVocal,
  Brain,
  Briefcase,
  Sparkles,
  Star,
  Coffee,
  Trophy,
  Lightbulb,
  Beer,
  Heart,
  Gift,
  Dices,
  Handshake,
  CupSoda,
  Disc3,
  Smile,
  Soup,
} from "lucide-react"

import { BookingButton } from "@/components/ui/booking-button"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { events } from "@/config/events"

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Wine, Martini, UtensilsCrossed, Users, Camera, Music, MicVocal, Brain,
  Briefcase, Sparkles, Star, Coffee, Trophy, Lightbulb, Beer, Heart,
  Calendar, Clock, MapPin, ShieldCheck,
  Gift, Dices, Handshake, CupSoda, Disc3, Smile, Soup,
}

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
      <div className="relative flex items-center mb-10 md:min-h-[320px] min-[550px]:max-md:min-h-[250px]">
        <div className="space-y-2.5 w-[40%] max-lg:w-[60%]">
          <div className="w-fit space-y-1 lg:space-y-2">
            <span className="block font-display font-extrabold uppercase tracking-wider text-[var(--color-accent)] text-xl lg:text-4xl">
              {event.dayOfWeek.toUpperCase()}
            </span>
            <div className="neon-card inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 lg:px-6 lg:py-3">
              <Clock className="h-4 w-4 text-[var(--color-accent)] lg:h-5 lg:w-5" />
              <span className="font-display font-bold text-[10px] text-[var(--color-text-primary)] lg:text-base">
                {event.time}
              </span>
            </div>
          </div>
          <h1 className="text-8xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] md:mb-7 max-lg:text-7xl max-md:text-5xl max-sm:text-5xl">
            {details.titleLine1}{details.titleLine2 ? <br /> : null}{details.titleLine2}{details.titleLine3 ? <br /> : null}{details.titleLine3}
            {!details.titleLine2 && !details.titleLine3 ? null : null}
          </h1>
          <p className="text-5xl text-[var(--color-accent)] font-display uppercase tracking-wider md:mb-5 max-lg:text-3xl max-md:text-xl max-sm:text-lg">
            {details.subtitle}
          </p>
        </div>
        <div className="absolute left-0 right-0 top- h-[150%] rounded-[var(--radius-card)] -z-10  ">
          <Image
            src="/images/events/monday-afterparty.png"
            alt={event.title}
            fill
            className="lg:object-contain max-lg:object-cover"
          />
        </div>
      </div>

      <p className="mt-6 border-l-2 border-[var(--color-accent)] pl-4 text-sm leading-relaxed text-[var(--color-text-secondary)] lg:mt-10 lg:pl-6 lg:text-xl">
        {event.description}
      </p>

      <h3 className="mb-6 max-lg:mb-4 mt-12 max-lg:mt-8 font-display font-bold uppercase text-4xl tracking-wide text-[var(--color-text-primary)]">
        {details.featuresHeading}
      </h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
        {details.features.map((f) => {
          const Icon = iconMap[f.icon]
          return (
            <div
              key={f.title}
              className="hover-lift neon-card flex flex-col items-center gap-2 rounded-[var(--radius-card)] border border-[var(--color-border)] p-4 text-center lg:gap-4 lg:p-8"
            >
              <Icon className="h-12 w-12 max-lg:h-8 max-lg:w-8 text-[var(--color-accent)]" strokeWidth={1.5} />
              <span className="font-display font-bold uppercase text-lg max-lg:text-sm leading-tight text-[var(--color-text-primary)]">
                {f.title}
              </span>
              <span className="text-base max-lg:text-xs leading-snug text-[var(--color-text-secondary)]">
                {f.desc}
              </span>
            </div>
          )
        })}
      </div>

      <div className="relative mt-12 max-lg:mt-8 min-h-[230px] flex items-center overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] aspect-[16/6] max-sm:aspect-auto">
        <Image
          src="/images/events/karaoke-banner.png"
          alt="Караоке и танцы"
          fill
          className="relative object-contain max-sm:object-cover max-sm:object-[20%_50%]"
        />
        <p className="relative w-full pl-[50%] leading-snug ">
          <span className="block text-3xl max-lg:text-xl uppercase text-[var(--color-text-primary)] max-md:text-base max-sm:text-sm">
            ПОСЛЕ ОСНОВНОЙ ПРОГРАММЫ —
          </span>
          <span className="my-3 max-lg:my-1 block font-display font-extrabold uppercase text-8xl max-lg:text-6xl text-[var(--color-accent)] max-md:text-4xl max-sm:text-2xl">
            КАРАОКЕ И ТАНЦЫ
          </span>
          <span className="block font-bold uppercase text-4xl max-lg:text-3xl text-[var(--color-text-primary)] max-md:text-xl max-sm:text-base">
            ДО САМОГО УТРА!
          </span>
        </p>
      </div>

      <div className="neon-card mt-6 grid grid-cols-2 gap-y-4 rounded-[var(--radius-card)] border border-[var(--color-border)] py-5 sm:grid-cols-4 lg:mt-12 lg:py-8">
        {([
          { icon: "Clock", label: "СТАРТ", value: event.time },
          { icon: "Calendar", label: "ДЕНЬ", value: event.dayOfWeek.toUpperCase() },
          { icon: "MapPin", label: "МЕСТО", value: "POIDEM POZHREM" },
          { icon: "ShieldCheck", label: "ВОЗРАСТ", value: "18+" },
        ] as const).map((item, i) => {
          const Icon = iconMap[item.icon]
          return (
            <div
              key={item.label}
              className={`flex flex-col items-center gap-1 px-2 text-center lg:gap-2 ${
                i % 2 === 1 ? "border-l border-[var(--color-border)]" : ""
              } ${i >= 2 ? "border-t border-[var(--color-border)] sm:border-t-0 pt-2 " : ""} ${
                i > 0 ? "sm:border-l sm:border-[var(--color-border)]" : ""
              }`}
            >
              <Icon className="h-5 w-5 text-[var(--color-accent)] lg:h-8 lg:w-8" strokeWidth={1.5} />
              <span className="text-[10px] uppercase tracking-wide text-[var(--color-text-secondary)] lg:text-sm">
                {item.label}
              </span>
              <span className="font-display font-bold text-xs uppercase text-[var(--color-text-primary)] lg:text-xl">
                {item.value}
              </span>
            </div>
          )
        })}
      </div>

      <BookingButton
        href="https://wa.me/84855559797"
        label="ЗАБРОНИРОВАТЬ СТОЛ"
        className="mb-8 mt-6 text-black lg:mt-12 lg:py-6 lg:text-2xl"
      />
    </div>
  )
}
