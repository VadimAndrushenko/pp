import Link from "next/link"
import Image from "next/image"

import {
  Calendar,
  Camera,
  Clock,
  Martini,
  MapPin,
  Phone,
  ShieldCheck,
  UtensilsCrossed,
  Users,
  Wine,
} from "lucide-react"

/**
 * Статичная версия страницы афиши (event detail).
 * Контент захардкожен под конкретное событие — "Понедельник — After Weekend Party".
 * Когда будешь возвращать динамику — замени константу EVENT на event из props/API,
 * структура JSX останется той же.
 *
 * Layout: единая колонка сверху вниз на всех разрешениях. Своего контейнера/max-w
 * не задаём — ширину и отступы (px-3 sm:px-4, max-w-7xl) даёт <main> в layout.tsx.
 * На lg+ типографика и отступы масштабируются вверх, чтобы страница
 * занимала всё доступное пространство внутри контейнера.
 *
 * Допущение: шапка (лого + бургер) и нижний таб-бар — это layout.tsx, сюда не включены.
 */

const EVENT = {
  heroImage: "/images/events/monday-afterparty.png",
  karaokeImage: "/images/events/karaoke-banner.png",
  badgeTitle: "POIDEM POZHREM",
  badgeSubtitle: "RESTAURANT · BAR\nKARAOKE · CAFE",
  scheduleLabel: "ПОНЕДЕЛЬНИК",
  scheduleTime: "21:00",
  titleLine1: "AFTER",
  titleLine2: "WEEKEND",
  titleLine3: "PARTY",
  subtitle: "ПРОДОЛЖАЕМ ВЫХОДНЫЕ ВМЕСТЕ!",
  description:
    "Если после насыщенных выходных вам не хочется в рутину — понедельник создан именно для этой встречи. Вкусный ужин, любимые напитки, новые знакомства и отличное настроение с первых минут.",
  ctaLabel: "ЗАБРОНИРОВАТЬ СТОЛ",
  featuresHeading: "В ПРОГРАММЕ",
  features: [
    { icon: Wine, title: "ЛЁГКАЯ АТМОСФЕРА", desc: "Расслабленный вечер без суеты" },
    { icon: Martini, title: "АВТОРСКИЕ КОКТЕЙЛИ", desc: "Напитки от бармена по особым ценам" },
    { icon: UtensilsCrossed, title: "ВКУСНАЯ КУХНЯ", desc: "Блюда на любой вкус" },
    { icon: Users, title: "НОВЫЕ ЗНАКОМСТВА", desc: "Общение, знакомства и драйв" },
    { icon: Camera, title: "ФОТО И ВОСПОМИНАНИЯ", desc: "Яркие кадры на память" },
  ],
  karaoke: {
    lineTop: "ПОСЛЕ ОСНОВНОЙ ПРОГРАММЫ —",
    lineHighlight: "КАРАОКЕ И ТАНЦЫ",
    lineBottom: "ДО САМОГО УТРА!",
  },
  infoBar: [
    { icon: Clock, label: "СТАРТ", value: "21:00" },
    { icon: Calendar, label: "ДЕНЬ", value: "ПОНЕДЕЛЬНИК" },
    { icon: MapPin, label: "МЕСТО", value: "POIDEM POZHREM" },
    { icon: ShieldCheck, label: "ВОЗРАСТ", value: "18+" },
  ],
  bookingHref: "https://wa.me/84855559797",
}

export default function EventPage() {
  return (
    <div>
      {/* Постер: фото + заголовок поверх на градиенте */}
      {/* <div
        className="relative mt-4 w-[calc(100%+1.5rem)] -mx-3 bg-cover bg-center sm:w-[calc(100%+2rem)] sm:-mx-4 lg:mx-0 lg:w-full lg:rounded-[var(--radius-card)] lg:overflow-hidden aspect-[16/9] max-h-[80vh] flex flex-col justify-end"
        style={{ backgroundImage: `url(${EVENT.heroImage})`, backgroundColor: "var(--color-surface)" }}
        role="img"
        aria-label={`${EVENT.titleLine1} ${EVENT.titleLine2} ${EVENT.titleLine3}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute left-4 top-4 z-10 lg:left-8 lg:top-8">
          
        </div>
        <div className="relative z-10 px-5 pb-6 lg:px-12 lg:pb-12">
          <h1 className="font-display font-extrabold uppercase leading-[0.95] text-4xl text-[var(--color-text-primary)] lg:text-7xl xl:text-8xl">
            {EVENT.titleLine1}
          </h1>
          <h1 className="font-display font-extrabold uppercase leading-[0.95] text-4xl text-[var(--color-text-primary)] lg:text-7xl xl:text-8xl">
            {EVENT.titleLine2}
          </h1>
          <h1 className="font-display font-extrabold uppercase leading-[0.95] text-5xl text-[var(--color-accent)] lg:text-8xl xl:text-9xl">
            {EVENT.titleLine3}
          </h1>
          <p className="link-underline mt-3 inline-block text-sm uppercase tracking-wide text-[var(--color-text-primary)] lg:mt-5 lg:text-2xl">
            {EVENT.subtitle}
          </p>
        </div>
      </div> */}
      <div className="relative flex items-center pt-6 mb-10 md:min-h-[320px] min-[550px]:max-md:min-h-[250px]">
        <div className="space-y-2.5 w-[40%] max-lg:w-[60%]">
          <div className="flex gap-3" >
            <div className="neon-card inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 lg:px-6 lg:py-3">
              <Clock className="h-4 w-4 text-[var(--color-accent)] lg:h-5 lg:w-5" />
              <span className="font-display font-bold text-sm text-[var(--color-text-primary)] lg:text-xl">
                {EVENT.scheduleTime}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-display font-bold uppercase text-sm tracking-wide text-[var(--color-text-secondary)] lg:text-lg">
                {EVENT.scheduleLabel}
              </span>
            </div>
          </div>
          <h1 className="text-8xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] md:mb-7 max-lg:text-7xl max-md:text-5xl max-sm:text-5xl">
            AFTER WEEKEND <span className="text-accent">PARTY</span>
          </h1>
          <p className="text-5xl text-[var(--color-accent)] font-display uppercase tracking-wider md:mb-5 max-lg:text-3xl max-md:text-xl max-sm:text-lg">
            ПРОДОЛЖАЕМ ВЫХОДНЫЕ ВМЕСТЕ!
          </p>
        </div>
        <div className="absolute  right-0 w-[100%] sm:left-10 h-[150%] rounded-[var(--radius-card)] -z-10 min-[460px]:max-sm:h-[170%] max-sm:right-3">
          <Image
            src="/images/events/monday-afterparty.png"
            alt="Доставка еды и кальянов"
            fill
            className="lg:object-contain max-lg:object-cover"
          />
        </div>
      </div>

      {/* Описание */}
      <p className="mt-6 border-l-2 border-[var(--color-accent)] pl-4 text-sm leading-relaxed text-[var(--color-text-secondary)] lg:mt-10 lg:pl-6 lg:text-xl">
        {EVENT.description}
      </p>

      {/* Программа */}
      <h3 className="mb-6 max-lg:mb-4 mt-12 max-lg:mt-8 font-display font-bold uppercase text-4xl tracking-wide text-[var(--color-text-primary)]">
        {EVENT.featuresHeading}
      </h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
        {EVENT.features.map((f) => {
          const Icon = f.icon
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

      {/* Караоке-баннер */}
      <div className="relative mt-12 max-lg:mt-8 min-h-[230px] flex items-center overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] aspect-[16/6] max-sm:aspect-auto">
        <Image
          src={EVENT.karaokeImage}
          alt="Караоке и танцы"
          fill
          className="relative object-contain max-sm:object-cover max-sm:object-[20%_50%]"
        />
        <p className="relative w-full pl-[50%] leading-snug ">
          <span className="block text-3xl max-lg:text-xl uppercase text-[var(--color-text-primary)] max-md:text-base max-sm:text-sm">
            {EVENT.karaoke.lineTop}
          </span>
          <span className="my-3 max-lg:my-1 block font-display font-extrabold uppercase text-8xl max-lg:text-6xl text-[var(--color-accent)] max-md:text-4xl max-sm:text-2xl">
            {EVENT.karaoke.lineHighlight}
          </span>
          <span className="block font-bold uppercase text-4xl max-lg:text-3xl text-[var(--color-text-primary)] max-md:text-xl max-sm:text-base">
            {EVENT.karaoke.lineBottom}
          </span>
        </p>
      </div>

      {/* Инфо-бар */}
      <div className="neon-card mt-6 grid grid-cols-2 gap-y-4 rounded-[var(--radius-card)] border border-[var(--color-border)] py-5 sm:grid-cols-4 lg:mt-12 lg:py-8">
        {EVENT.infoBar.map((item, i) => {
          const Icon = item.icon
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

      {/* CTA */}
      <Link
        href={EVENT.bookingHref}
        className="hover-lift mb-8 mt-6 flex items-center justify-center gap-2 rounded-[var(--radius-card)] bg-[var(--color-accent)] py-4 font-display font-bold uppercase text-sm text-black transition-colors hover:bg-[var(--color-accent-hover)] sm:text-base lg:mt-12 lg:py-6 lg:text-2xl"
      >
        <Phone className="h-5 w-5 lg:h-7 lg:w-7" />
        {EVENT.ctaLabel}
      </Link>
    </div>
  )
}