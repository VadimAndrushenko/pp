import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, PartyPopper } from 'lucide-react'
import { Breadcrumb } from '@/components/layout/breadcrumb'
import { EventsList } from '@/components/sections/events/events-list'
import { getEvents } from '@/lib/payload/events'
import { transformEvents, sortEventsByStart } from '@/lib/transformData'
import { links } from '@/config/links'

export const revalidate = 5400

export const metadata: Metadata = {
  title: 'Расписание мероприятий — Poidem Pozhrem',
  description:
    'Караоке-батлы, квизы, живая музыка, шоу и бизнес-встречи. Каждый день что-то происходит — выбирайте своё событие.',
}

export default async function EventsPage() {
  const events = sortEventsByStart(await getEvents().then((docs) => transformEvents(docs)))

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

      <EventsList events={events} />

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
              href={links.bookingForm}
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
