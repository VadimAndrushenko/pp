import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Clock, PartyPopper, Sparkles, Ticket, ChevronRight } from 'lucide-react'
import { Breadcrumb } from '@/components/layout/breadcrumb'
import { getEvents } from '@/lib/payload/events'
import { transformEvents } from '@/lib/transformData'
import type { EventCategory, EventItem } from '@/types'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Расписание мероприятий — Poidem Pozhrem',
  description:
    'Караоке-батлы, квизы, живая музыка, шоу и бизнес-встречи. Каждый день что-то происходит — выбирайте своё событие.',
}

const DAY_FILTERS = [
  { param: 'all', label: 'Все дни' },
  { param: 'mon', label: 'Понедельник' },
  { param: 'tue', label: 'Вторник' },
  { param: 'wed', label: 'Среда' },
  { param: 'thu', label: 'Четверг' },
  { param: 'fri', label: 'Пятница' },
  { param: 'sat', label: 'Суббота' },
  { param: 'sun', label: 'Воскресенье' },
] as const

const DAY_PARAMS = DAY_FILTERS.map((day) => day.param)

const CATEGORY_TITLES: Record<EventCategory, string> = {
  all: 'Все',
  karaoke: 'Караоке',
  quiz: 'Квиз',
  music: 'Музыка',
  business: 'Бизнес',
  show: 'Шоу',
}

/** Общий вид бейджей: крупно на десктопе, постепенно мельче к мобильному */
const CHIP =
  'px-2.5 py-1 max-sm:px-1.5 max-sm:py-0.5 text-[11px] max-lg:text-[10px] max-md:text-[9px] max-sm:text-[8px] font-bold uppercase tracking-widest whitespace-nowrap backdrop-blur-md transition-all duration-300 ease-out group-hover:scale-[1.06] group-hover:brightness-125'

type SearchParams = { day?: string }

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const { day } = await searchParams
  const activeParam = day && DAY_PARAMS.includes(day as (typeof DAY_PARAMS)[number]) ? day : 'all'
  const activeDay = DAY_FILTERS.find((item) => item.param === activeParam)!

  const events = await getEvents().then((docs) => transformEvents(docs))

  const dayIndex = new Map<string, number>(DAY_FILTERS.map((item, index) => [item.label, index]))
  const visibleEvents = (
    activeDay.param === 'all'
      ? events
      : events.filter((event) => event.dayOfWeek === activeDay.label)
  )
    .slice()
    .sort((a, b) => (dayIndex.get(a.dayOfWeek) ?? 0) - (dayIndex.get(b.dayOfWeek) ?? 0))

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Breadcrumb />
      </div>

      {/* HERO */}
      <section className="relative section-py">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="text-accent/90 text-xs md:text-sm tracking-[0.35em] uppercase mb-4">
            каждый день — что-то происходит
          </p>
          <h1 className="font-black uppercase leading-[0.95] tracking-tight text-4xl md:text-6xl lg:text-7xl">
            Расписание
            <br />
            <span
              className="text-accent"
              style={{
                textShadow:
                  '0 0 20px var(--color-accent-dim), 0 0 60px color-mix(in srgb, var(--color-accent) 35%, transparent)',
              }}
            >
              мероприятий
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/70 text-base md:text-lg">
            Караоке-батлы, квизы, живая музыка и вечеринки. Приходите на своё событие —
            вход часто свободный, а атмосфера всегда бесплатно.
          </p>
        </div>
      </section>

      {/* DAY FILTER */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {DAY_FILTERS.map(({ param, label }) => {
              const active = param === activeParam
              return (
                <Link
                  key={param}
                  href={param === 'all' ? '/events' : `/events?day=${param}`}
                  scroll={false}
                  className={[
                    'px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm sm:text-xs md:text-base font-medium uppercase tracking-wider transition-all',
                    active
                      ? 'bg-accent text-black shadow-[0_0_25px_color-mix(in_srgb,var(--color-accent)_55%,transparent)]'
                      : 'bg-white/[0.03] text-white/70 border border-white/10 hover:border-accent/60 hover:text-white',
                  ].join(' ')}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="relative py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {visibleEvents.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid gap-5 md:gap-7 grid-cols-1 min-[460px]:grid-cols-2 lg:grid-cols-3 items-stretch">
              {visibleEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="relative rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-white/[0.02] to-transparent p-8 md:p-10 text-center overflow-hidden">
            <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_color-mix(in_srgb,var(--color-accent)_15%,transparent)]" />
            <PartyPopper className="mx-auto h-10 w-10 text-accent" />
            <h3 className="mt-4 text-2xl md:text-3xl font-black uppercase">
              Хотите бронь на событие?
            </h3>
            <p className="mt-3 text-white/70">
              Напишите нам — забронируем стол у сцены и подскажем, что ждёт в этот вечер.
            </p>
            <Link
              href="/contacts"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-hover text-black font-semibold px-6 py-3 uppercase tracking-wider text-sm shadow-[0_0_25px_color-mix(in_srgb,var(--color-accent)_50%,transparent)] transition"
            >
              Забронировать <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ─────────────────────────  CARD  ───────────────────────── */

function EventCard({ event }: { event: EventItem }) {
  // Цвет из админки, иначе — фирменный из CSS-переменной --color-accent
  const accent = event.accentColor?.trim() || 'var(--color-accent)'

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)]"
      style={
        {
          '--accent': accent,
          '--accent-glow': `color-mix(in srgb, ${accent} 33%, transparent)`,
          '--accent-soft': `color-mix(in srgb, ${accent} 12%, transparent)`,
          '--accent-border': `color-mix(in srgb, ${accent} 40%, transparent)`,
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: '0 0 40px 0 var(--accent-glow), inset 0 0 40px 0 var(--accent-soft)' }}
      />

      {/* image */}
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[var(--accent-glow)] to-black" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* badges over image */}
        <div className="absolute left-4 top-4 right-4 flex flex-nowrap gap-2">
          <span
            className={`rounded-full ${CHIP}`}
            style={{
              backgroundColor: 'var(--accent-soft)',
              color: accent,
              border: '1px solid var(--accent-border)',
            }}
          >
            {CATEGORY_TITLES[event.category]}
          </span>
          {event.admission === 'free' ? (
            <span
              className={`rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 ${CHIP}`}
            >
              Вход свободный
            </span>
          ) : (
            <span className={`rounded-full bg-white/10 border border-white/25 text-white ${CHIP}`}>
              <Ticket className="mr-1 max-sm:mr-0.5 inline h-3.5 w-3.5 max-sm:h-3 max-sm:w-3" /> Платно
            </span>
          )}
        </div>

        {/* day/time floating tag */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <div className="text-white/60 text-[10px] max-sm:text-[8px] uppercase tracking-[0.25em] whitespace-nowrap">
              {event.scheduleType === 'recurring' ? 'Каждый' : 'Разово'}
            </div>
            <div className="mt-1 text-white text-xl max-sm:text-base font-bold uppercase leading-none truncate">
              {event.dayOfWeek}
            </div>
          </div>
          <div
            className="shrink-0 rounded-2xl border px-3 py-2 text-sm max-sm:text-xs font-bold whitespace-nowrap backdrop-blur-md"
            style={{
              backgroundColor: 'var(--accent-soft)',
              borderColor: 'var(--accent-glow)',
              color: accent,
            }}
          >
            <Clock className="mr-1 max-sm:mr-0.5 max-sm:mt-0 inline h-3.5 w-3.5 max-sm:h-2.5 max-sm:w-2.5" />
            {event.time}
          </div>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-5 max-sm:p-3 md:p-6">
        <h3 className="text-xl max-sm:text-base md:text-2xl font-black uppercase leading-tight tracking-tight">
          {event.title}
        </h3>
        {event.subtitle && (
          <p className="mt-1 text-sm max-sm:text-xs uppercase tracking-widest" style={{ color: accent }}>
            {event.subtitle}
          </p>
        )}

        <p className="mt-3 flex-1 text-sm max-sm:text-xs text-white/70 line-clamp-3">{event.description}</p>

        {/* meta */}
        <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4 pb-2 max-sm:pb-1 md:pb-3">
          <div className="flex items-center gap-2 max-sm:gap-1 text-xs max-sm:text-[8px] text-white/60">
            <CalendarDays className="h-4 w-4 max-sm:h-3 max-sm:w-3 text-accent" />
            <span className="uppercase tracking-wider">
              {event.date} · {event.month}
            </span>
          </div>
          <span
            className="inline-flex items-center gap-1 max-sm:gap-0.5 text-xs max-sm:text-[8px] font-bold uppercase tracking-widest"
            style={{ color: accent }}
          >
            <span className="relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100">
              Подробнее
            </span>
            <ChevronRight className="h-3.5 w-3.5 max-sm:h-3 max-sm:w-3 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}

/* ─────────────────────────  EMPTY  ───────────────────────── */

function EmptyState() {
  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center">
      <Sparkles className="mx-auto h-10 w-10 text-accent" />
      <h3 className="mt-4 text-2xl font-black uppercase">Пока пусто</h3>
      <p className="mt-2 text-white/60">
        В этой категории мероприятий нет. Загляните позже — календарь обновляется каждую
        неделю.
      </p>
      <Link
        href="/events"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent hover:bg-accent-hover text-black font-semibold px-5 py-2.5 uppercase tracking-wider text-sm transition"
      >
        Все события
      </Link>
    </div>
  )
}
