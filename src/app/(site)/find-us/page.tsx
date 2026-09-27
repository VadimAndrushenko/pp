import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, ExternalLink } from 'lucide-react'
import { Breadcrumb } from '@/components/layout/breadcrumb'
import { getSiteSettings } from '@/lib/data/settings'


export const metadata: Metadata = {
  title: 'Как найти POIDEM POZHREM — Holiday Center, 2 этаж',
  description:
    'Мы находимся внутри Holiday Center на втором этаже. 97 Trần Hưng Đạo, Dương Đông, Phú Quốc. 4 простых шага — и вы у нас.',
}

const STEPS = [
  {
    n: 1,
    title: 'Найдите\nHoliday Center',
    desc: 'Мы находимся на главной улице Dương Đông',
    img: '/find-us/step-1.webp',
    alt: 'Витрина Holiday Center с вывеской POIDEM POZHREM',
  },
  {
    n: 2,
    title: 'Зайдите\nв главный вход',
    desc: 'Широкая лестница ведёт внутрь',
    img: '/find-us/step-2.webp',
    alt: 'Главный вход в Holiday Center с широкой лестницей',
  },
  {
    n: 3,
    title: 'Поднимитесь\nна 2 этаж',
    desc: 'Следуйте по лестнице прямо вверх',
    img: '/find-us/step-3.webp',
    alt: 'Красная лестница ведущая на второй этаж',
  },
  {
    n: 4,
    title: 'Вы\nна 2 этаже',
    desc: 'Поверните направо и следуйте указателям POIDEM POZHREM',
    img: '/find-us/step-4.webp',
    alt: 'Указатель POIDEM POZHREM на втором этаже',
  },
]

export default async function FindUsPage() {
  // Ссылки и адрес берём из основных настроек (Payload → Settings)
  const { links } = await getSiteSettings()
  const address = links.address
  const gmapsPlace = links.googleMaps
  const yandex = links.yandexMaps
  const gmapsEmbed = links.googleMapsEmbed

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Breadcrumb />
      </div>

      {/* ─── HERO ─────────────────────────────── */}
      <section className="relative section-py">
        <div className="mx-auto max-w-7xl px-4 md:px-8 text-center">
          <p className="text-accent/90 text-[10px] md:text-sm tracking-[0.35em] uppercase mb-4">
            добро пожаловать
          </p>
          <h1 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Как найти{' '}
            <span
              className="text-accent"
              style={{
                textShadow:
                  '0 0 20px var(--color-accent-dim), 0 0 60px color-mix(in srgb, var(--color-accent) 35%, transparent)',
              }}
            >
              POIDEM POZHREM?
            </span>
          </h1>
          <p className="mt-5 md:mt-6 text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Мы находимся в{' '}
            <span className="text-white font-semibold">HOLIDAY CENTER</span> на{' '}
            <span className="text-accent font-semibold">2 этаже</span>
          </p>
        </div>
      </section>

      {/* ─── 4 STEPS ─── mobile 2col, xl 4col ─── */}
      <section className="relative pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
            {STEPS.map((s) => (
              <StepCard key={s.n} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── DON'T LOOK FROM STREET + MAP + QR (компактно) ─── */}
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="relative rounded-3xl border border-accent/25 bg-gradient-to-br from-white/[0.03] via-transparent to-accent/[0.05] p-5 sm:p-6 md:p-8 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_80px_color-mix(in_srgb,var(--color-accent)_12%,transparent)]" />

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* text + QR */}
              <div>
                <p className="text-accent text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-2">
                  важно знать
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-xl sm:text-2xl md:text-3xl">
                  Не ищите ресторан{' '}
                  <span
                    className="text-accent"
                    style={{ textShadow: '0 0 15px var(--color-accent-dim)' }}
                  >
                    с улицы!
                  </span>
                </h2>
                <p className="mt-3 text-white/75 text-sm md:text-base">
                  <span className="text-white font-bold">POIDEM POZHREM</span>{' '}
                  <span className="text-accent font-semibold">внутри</span>{' '}
                  <span className="text-white font-semibold">HOLIDAY CENTER</span>,{' '}
                  <span className="text-accent font-semibold">2 этаж</span>.
                </p>

                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/50">
                      адрес
                    </div>
                    <div className="mt-0.5 text-xs sm:text-sm font-semibold uppercase leading-snug">
                      {address}
                    </div>
                  </div>
                </div>

                {/* QR-коды вместо кнопок */}
                <div className="mt-4 flex flex-wrap gap-3">
                  <QrCard
                    href={gmapsPlace}
                    label="Google Maps"
                    dotColor="#4285F4"
                    src="/images/contacts/qr-google.png"
                    alt="QR-код Google Maps"
                  />
                  <QrCard
                    href={yandex}
                    label="Яндекс Карты"
                    dotColor="#FC3F1D"
                    src="/images/contacts/qr-yandex.png"
                    alt="QR-код Яндекс Карты"
                  />
                </div>
              </div>

              {/* map */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 transition-colors hover:border-accent/60">
                  <div className="relative aspect-[16/10] w-full bg-white/[0.02]">
                    <iframe
                      src={gmapsEmbed}
                      title="Карта расположения POIDEM POZHREM в Holiday Center"
                      className="absolute inset-0 h-full w-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-accent/40 blur-xl animate-pulse" />
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-accent text-black shadow-[0_0_25px_var(--color-accent)]">
                          <MapPin className="h-5 w-5" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-white/10 px-3 py-2">
                    <span className="truncate text-[10px] sm:text-xs uppercase tracking-widest text-white/70">
                      {address}
                    </span>
                    <a
                      href={gmapsPlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent hover:bg-accent-hover text-black px-3 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition"
                    >
                      Открыть в картах <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ─────────── Step Card ─────────── */
function StepCard({
  n,
  title,
  desc,
  img,
  alt,
}: {
  n: number
  title: string
  desc: string
  img: string
  alt: string
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_40px_color-mix(in_srgb,var(--color-accent)_25%,transparent)]">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 1280px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="absolute left-2.5 top-2.5 sm:left-4 sm:top-4">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/40 blur-md" />
            <div className="relative flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-accent text-black font-black text-base sm:text-xl shadow-[0_0_20px_var(--color-accent-dim)]">
              {n}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-5 md:p-6">
        <h3 className="whitespace-pre-line font-black uppercase leading-[1.05] tracking-tight text-sm sm:text-lg md:text-xl">
          {title}
        </h3>
        <p className="mt-2 sm:mt-3 text-white/60 text-[11px] sm:text-sm leading-snug">
          {desc}
        </p>
      </div>
    </div>
  )
}

/* ─────────── QR Card ─────────── */
function QrCard({
  href,
  label,
  dotColor,
  src,
  alt,
}: {
  href: string
  label: string
  dotColor: string
  src: string
  alt: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-2 pr-4 transition hover:border-accent/60"
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: dotColor }} />
          <span className="text-[10px] uppercase tracking-widest text-white/60">
            сканируй
          </span>
        </div>
        <span className="mt-0.5 text-sm font-bold uppercase text-white group-hover:text-accent transition-colors">
          {label}
        </span>
      </div>
    </a>
  ) 
}
