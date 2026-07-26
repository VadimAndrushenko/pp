import Link from "next/link"
import { Armchair, Calendar, Camera, ChevronRight, Martini, Mic2, PersonStanding, UtensilsCrossed, Wine, Users } from "lucide-react"

/**
 * Статичная версия страницы афиши (event detail).
 * Контент захардкожен под конкретное событие — "Понедельник — After Weekend Party".
 * Когда будешь возвращать динамику — замени константу EVENT на event из props/API,
 * структура JSX останется той же.
 *
 * Layout:
 * - Мобилка (<lg): одна колонка, порядок как раньше — фото, заголовок, всё остальное.
 * - Десктоп (lg+): 2 колонки — слева sticky-фото, справа контент. Контейнер до max-w-7xl.
 *
 * Допущение: шапка (лого + бургер) и нижний таб-бар — это layout.tsx, сюда не включены.
 */

const EVENT = {
  heroImage: "/images/events/monday-afterparty.png",
  badgeTitle: "POIDEM POZHREM",
  badgeSubtitle: "RESTAURANT · BAR\nKARAOKE · CAFE",
  titleLine1: "ПОНЕДЕЛЬНИК",
  titleLine2: "AFTER",
  titleLine3: "WEEKEND PARTY",
  subtitle: "ПРОДОЛЖАЕМ ВЫХОДНЫЕ ВМЕСТЕ!",
  scheduleLabel: "КАЖДЫЙ ПОНЕДЕЛЬНИК",
  scheduleTime: "19:00",
  lead: "Лёгкая атмосфера, вкусная кухня,\nлюбимые люди и отличный старт недели!",
  ctaLabel: "ЗАБРОНИРОВАТЬ СТОЛ",
  description:
    "Если после насыщенных выходных вам не хочется в рутину — понедельник создан именно для этой встречи. Вкусный ужин, любимые напитки, новые знакомства и отличное настроение с первых минут.",
  featuresHeading: "ЧТО ВАС ЖДЁТ:",
  features: [
    { icon: Wine, label: "ЛЁГКАЯ АТМОСФЕРА" },
    { icon: Martini, label: "АВТОРСКИЕ КОКТЕЙЛИ" },
    { icon: UtensilsCrossed, label: "ВКУСНАЯ КУХНЯ НА ЛЮБОЙ ВКУС" },
    { icon: Users, label: "НОВЫЕ ЗНАКОМСТВА" },
    { icon: Camera, label: "ФОТО И ВОСПОМИНАНИЯ" },
  ],
  karaoke: {
    lineTop: "ПОСЛЕ ОСНОВНОЙ ПРОГРАММЫ —",
    lineHighlight: "КАРАОКЕ И ТАНЦЫ",
    lineBottom: "ДО САМОГО УТРА!",
  },
  bottomCtaTitle: "ЗАБРОНИРОВАТЬ СТОЛ",
  bottomCtaSubtitle: "ГАРАНТИРУЕМ ЛУЧШИЕ МЕСТА",
  bookingHref: "https://wa.me/84855559797",
}

export default function EventPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-4 pb-10 lg:px-8 lg:pb-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-14 lg:items-start">
          {/* LEFT COLUMN (desktop) — HERO */}
          <div className="lg:sticky lg:top-8">
            <div
              className="relative h-[220px] w-[calc(100%+2rem)] -mx-4 bg-cover bg-center lg:mx-0 lg:h-[560px] lg:w-full lg:rounded-[var(--radius-card)] lg:overflow-hidden"
              style={{ backgroundImage: `url(${EVENT.heroImage})`, backgroundColor: "var(--color-surface)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            </div>
          </div>

          {/* RIGHT COLUMN (desktop) — CONTENT */}
          <div className="mt-8 lg:mt-0">
            {/* TITLE BLOCK */}
            <div className="text-center lg:text-left">
              <h1 className="font-display font-extrabold uppercase leading-[0.95] text-4xl text-[var(--color-text-primary)] lg:text-6xl">
                {EVENT.titleLine1}
              </h1>
              <h1 className="mt-1 font-display font-extrabold uppercase leading-[0.95] text-5xl text-[var(--color-accent)] lg:text-7xl">
                {EVENT.titleLine2}
              </h1>
              <h1 className="mt-1 font-display font-extrabold uppercase leading-[0.95] text-4xl text-[var(--color-accent)] lg:text-6xl">
                {EVENT.titleLine3}
              </h1>
              <p className="mt-4 text-sm uppercase tracking-wide text-[var(--color-text-secondary)] lg:text-base">
                {EVENT.subtitle}
              </p>
            </div>

            {/* SCHEDULE BAR */}
            <div className="neon-card mt-6 flex items-center justify-center gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] py-4 lg:justify-start lg:px-6 lg:py-5">
              <Calendar className="h-5 w-5 text-[var(--color-accent)] lg:h-6 lg:w-6" />
              <span className="font-display font-bold uppercase text-sm text-[var(--color-text-primary)] sm:text-base lg:text-lg">
                {EVENT.scheduleLabel}
              </span>
              <span className="h-5 w-px bg-[var(--color-border)] lg:h-6" />
              <span className="font-display font-bold text-sm text-[var(--color-accent)] sm:text-base lg:text-lg">
                {EVENT.scheduleTime}
              </span>
            </div>

            {/* LEAD TEXT */}
            <p className="mt-6 whitespace-pre-line text-center text-lg font-medium text-[var(--color-text-primary)] lg:text-left lg:text-xl">
              {EVENT.lead}
            </p>

            {/* CTA */}
            <Link
              href={EVENT.bookingHref}
              className="hover-lift mt-6 flex items-center justify-center gap-2 rounded-[var(--radius-card)] bg-[var(--color-accent)] py-4 font-display font-bold uppercase text-sm text-black transition-colors hover:bg-[var(--color-accent-hover)] sm:text-base lg:max-w-md lg:justify-start lg:px-6 lg:text-base"
            >
              <Armchair className="h-5 w-5" />
              {EVENT.ctaLabel}
            </Link>

            {/* DESCRIPTION */}
            <p className="mt-6 text-center text-sm leading-relaxed text-[var(--color-text-secondary)] lg:text-left lg:text-base">
              {EVENT.description}
            </p>

            {/* FEATURES */}
            <h3 className="mb-4 mt-8 text-center font-display font-bold uppercase text-sm tracking-wide text-[var(--color-accent)] lg:text-left lg:text-base">
              {EVENT.featuresHeading}
            </h3>
            <div className="grid grid-cols-5 gap-1 lg:gap-3">
              {EVENT.features.map((f, i) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.label}
                    className={`hover-glow-accent flex flex-col items-center px-1 text-center ${
                      i !== 0 ? "border-l border-[var(--color-border)]" : ""
                    }`}
                  >
                    <Icon className="mb-2 h-6 w-6 text-[var(--color-accent)] lg:h-8 lg:w-8" strokeWidth={1.5} />
                    <span className="text-[9px] uppercase leading-tight text-[var(--color-text-primary)]/90 lg:text-[11px]">
                      {f.label}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* KARAOKE BANNER */}
            <div className="neon-card mt-8 flex items-center justify-between gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] p-4 lg:p-6">
              <Mic2
                className="animate-float h-10 w-10 shrink-0 text-[var(--color-accent)] lg:h-14 lg:w-14"
                strokeWidth={1.5}
                style={{ filter: "drop-shadow(0 0 10px var(--color-accent-dim))" }}
              />
              <p className="flex-1 text-center leading-snug">
                <span className="block text-xs uppercase text-[var(--color-text-primary)] lg:text-sm">
                  {EVENT.karaoke.lineTop}
                </span>
                <span className="my-0.5 block font-display font-extrabold uppercase text-2xl text-[var(--color-accent)] lg:text-4xl">
                  {EVENT.karaoke.lineHighlight}
                </span>
                <span className="block font-bold uppercase text-sm text-[var(--color-text-primary)] lg:text-base">
                  {EVENT.karaoke.lineBottom}
                </span>
              </p>
              <div className="flex shrink-0 text-[var(--color-accent)]">
                <PersonStanding className="h-6 w-6 lg:h-9 lg:w-9" strokeWidth={1.5} />
                <PersonStanding className="-ml-2 h-6 w-6 scale-x-[-1] lg:h-9 lg:w-9" strokeWidth={1.5} />
              </div>
            </div>

            {/* BOTTOM CTA BAR */}
            <Link
              href={EVENT.bookingHref}
              className="hover-lift mt-6 flex items-center gap-3 rounded-[var(--radius-card)] bg-[var(--color-accent)] px-5 py-4 text-black transition-colors hover:bg-[var(--color-accent-hover)] lg:px-6 lg:py-5"
            >
              <Calendar className="h-6 w-6 shrink-0 lg:h-7 lg:w-7" />
              <span className="flex-1">
                <span className="block font-display font-bold uppercase text-base leading-tight lg:text-lg">
                  {EVENT.bottomCtaTitle}
                </span>
                <span className="block text-[11px] uppercase leading-tight opacity-80 lg:text-xs">
                  {EVENT.bottomCtaSubtitle}
                </span>
              </span>
              <ChevronRight className="h-5 w-5 shrink-0 lg:h-6 lg:w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}