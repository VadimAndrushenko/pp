import type { Metadata } from "next"
import Link from "next/link"
import {
  AlarmClock,
  CalendarHeart,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
} from "lucide-react"

import { Breadcrumb } from "@/components/layout/breadcrumb"
import { BookingForm } from "@/components/sections/booking/booking-form"
import { getSiteSettings } from "@/lib/data/settings"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Забронировать столик — Poidem Pozhrem",
  description:
    "Бронирование столика в ресторане «Пойдём Пожрём» на Фукуоке. Выберите дату, время, количество гостей и зону — перезвоним и подтвердим бронь.",
}

/** Что обещаем гостю — короткие плашки под hero. */
const PERKS = [
  { Icon: Clock, title: "24/7", desc: "Бронируем на любое время суток" },
  { Icon: Users, title: "До 60 гостей", desc: "Компании и большие встречи" },
  { Icon: Sparkles, title: "Любая зона", desc: "У окна, сцена, терраса" },
]

/** Что происходит после отправки заявки. */
const STEPS = [
  {
    step: "01",
    title: "Оставляете заявку",
    desc: "Заполняете форму — это занимает минуту и ни к чему не обязывает.",
  },
  {
    step: "02",
    title: "Мы перезваниваем",
    desc: "Подтверждаем время, зону и любые пожелания по телефону.",
  },
  {
    step: "03",
    title: "Стол ваш",
    desc: "Встречаем вас, накрываем стол. Остальное — наша забота.",
  },
]

export default async function BookingPage() {
  const { links } = await getSiteSettings()
  const { addressFull, phone, phoneHref } = links

  return (
    <>
      <Breadcrumb items={[{ label: "Бронирование" }]} />

      {/* HERO */}
      <section className="section-py">
        <p className="mb-4 text-accent/90 text-xs md:text-sm tracking-[0.35em] uppercase">
          бронь столика за пару минут
        </p>
        <h1 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
          Забронировать
          <br />
          <span
            className="text-accent"
            style={{
              textShadow:
                "0 0 20px var(--color-accent-dim), 0 0 60px color-mix(in srgb, var(--color-accent) 35%, transparent)",
            }}
          >
            столик
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-white/70 text-base md:text-lg">
          Выберите дату, время и количество гостей — перезвоним, подтвердим бронь и
          подскажем лучшую зону под вашу компанию.
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {PERKS.map(({ Icon, title, desc }) => (
            <li
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-accent/60"
            >
              <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
              <p className="mt-2 font-display text-sm font-bold uppercase tracking-wide">
                {title}
              </p>
              <p className="mt-1 text-sm text-white/60">{desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ФОРМА + КОНТАКТЫ */}
      <section className="pb-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-7">
          <div className="lg:col-span-2">
            <BookingForm />
          </div>

          {/* Быстрые способы забронировать, если не хочется ждать звонка */}
          <aside className="flex flex-col gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <h2 className="font-display text-lg font-bold uppercase tracking-wide">
                Не ждать звонка
              </h2>
              <p className="mt-2 text-sm text-white/60">
                Напишите нам — ответим в том же мессенджере.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 transition-all duration-300 hover:border-[#25D366] hover:text-[#25D366]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/15">
                    <MessageCircle className="h-4 w-4 text-[#25D366]" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-semibold">WhatsApp</span>
                </a>

                <a
                  href={links.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 transition-all duration-300 hover:border-[#229ED9] hover:text-[#229ED9]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#229ED9]/15">
                    <MessageCircle className="h-4 w-4 text-[#229ED9]" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-semibold">Telegram</span>
                </a>

                <a
                  href={phoneHref}
                  className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 transition-all duration-300 hover:border-accent hover:text-accent"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10">
                    <Phone className="h-4 w-4 text-accent" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-semibold">{phone}</span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <h2 className="font-display text-lg font-bold uppercase tracking-wide">
                Где мы находимся
              </h2>
              <p className="mt-3 flex items-start gap-2.5 text-sm text-white/65">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
                {addressFull}
              </p>
              <Link
                href="/find-us"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:drop-shadow-accent"
              >
                Как добраться
                <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* КАК ВСЁ ПРОИСХОДИТ */}
      <section className="pb-16">
        <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-white/[0.02] to-transparent p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_color-mix(in_srgb,var(--color-accent)_15%,transparent)]" />
          <div className="relative">
            <p className="text-accent/90 text-xs tracking-[0.35em] uppercase">
              всё просто
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
              Как проходит бронирование
            </h2>

            <ol className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {STEPS.map(({ step, title, desc }) => (
                <li key={step} className="relative">
                  <span className="font-display text-4xl font-bold text-accent drop-shadow-accent">
                    {step}
                  </span>
                  <p className="mt-2 font-display text-base font-bold uppercase tracking-wide">
                    {title}
                  </p>
                  <p className="mt-1.5 text-sm text-white/60">{desc}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/55">
              <span className="flex items-center gap-2">
                <AlarmClock className="h-4 w-4 text-accent" strokeWidth={1.75} />
                Работаем ежедневно 24/7
              </span>
              <span className="flex items-center gap-2">
                <CalendarHeart className="h-4 w-4 text-accent" strokeWidth={1.75} />
                Банкеты и события — по договорённости
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}