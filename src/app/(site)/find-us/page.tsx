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
    img: '/IMG_0935.PNG',
    alt: 'Витрина Holiday Center с вывеской POIDEM POZHREM',
  },
  {
    n: 2,
    title: 'Зайдите\nв главный вход',
    desc: 'Широкая лестница ведёт внутрь',
    img: '/IMG_0935.PNG',
    alt: 'Главный вход в Holiday Center с широкой лестницей',
  },
  {
    n: 3,
    title: 'Поднимитесь\nна 2 этаж',
    desc: 'Следуйте по лестнице прямо вверх',
    img: '/IMG_0935.PNG',
    alt: 'Красная лестница ведущая на второй этаж',
  },
  {
    n: 4,
    title: 'Вы\nна 2 этаже',
    desc: 'Поверните направо и следуйте указателям POIDEM POZHREM',
    img: '/IMG_0935.PNG',
    alt: 'Указатель POIDEM POZHREM на втором этаже',
  },
]

export default async function FindUsPage() {
  const { links } = await getSiteSettings()
  const address = links.address
  const gmapsPlace = links.googleMaps
  const yandex = links.yandexMaps
  const gmapsEmbed = links.googleMapsEmbed

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <Breadcrumb />

      {/* ─── HERO ─────────────────────────────── */}
      <section className="relative section-py">
        <div className="mx-auto max-w-7xl px-4 md:px-8 text-center">
          <p className="text-accent/90 text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.35em] uppercase mb-4">
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

      {/* ─── 4 STEPS ─── */}
      <section className="relative pb-16 md:pb-24">
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-3 sm:gap-5 md:gap-6 px-2">
          {STEPS.map((s) => (
            <StepCard key={s.n} {...s} />
          ))}
        </div>
      </section>

      {/* ─── COMPACT INFO + MAP + QR ─── */}
      <section className="relative pb-20 md:pb-28">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-accent/25 bg-gradient-to-br from-white/[0.03] via-transparent to-accent/[0.05] p-4 sm:p-5 md:p-6">
          <div className="pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl shadow-[inset_0_0_60px_color-mix(in_srgb,var(--color-accent)_10%,transparent)]" />

          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-stretch">
            {/* LEFT: text + address + QR */}
            <div className="flex flex-col items-center justify-center text-center min-w-0">
              <p className="text-accent text-sm sm:text-base md:text-lg lg:text-2xl tracking-[0.3em] uppercase mb-1.5">
                важно знать
              </p>
              <h2 className="font-black uppercase leading-[1] tracking-tight text-lg sm:text-xl md:text-2xl lg:text-4xl">
                Не ищите ресторан{' '}
                <span
                  className="text-accent"
                  style={{ textShadow: '0 0 15px var(--color-accent-dim)' }}
                >
                  с улицы!
                </span>
              </h2>
              <p className="mt-2 text-white/75 text-xs sm:text-sm lg:text-lg">
                <span className="text-white font-bold">POIDEM POZHREM</span>{' '}
                <span className="text-accent font-semibold">внутри</span>{' '}
                <span className="text-white font-semibold">HOLIDAY CENTER</span>,{' '}
                <span className="text-accent font-semibold">2 этаж</span>.
              </p>

              {/* Address */}
              <div className="mt-3 flex items-center justify-center gap-2.5 lg:gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-2.5 lg:p-4 min-w-0">
                <MapPin className="h-4 w-4 lg:h-5 lg:w-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <div className="text-[10px] lg:text-sm uppercase tracking-widest text-white/50">
                    адрес
                  </div>
                  <div className="mt-0.5 text-[11px] sm:text-xs lg:text-base font-semibold uppercase leading-snug break-words">
                    {address}
                  </div>
                </div>
              </div>

              {/* QR row — 2 in a row, fitted inside the column */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-6 lg:mt-4 w-full min-w-0">
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

            {/* RIGHT: map */}
            <div className="relative flex flex-col lg:justify-center min-w-0 lg:items-stretch">
              <div className="relative flex w-full lg:flex-1 flex-col overflow-hidden rounded-xl md:rounded-2xl border border-white/10 transition-colors hover:border-accent/60">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:flex-1 lg:min-h-0 w-full bg-white/[0.02]">
                    <iframe
                      src={gmapsEmbed}
                      title="Карта расположения POIDEM POZHREM в Holiday Center"
                      className="absolute inset-0 h-full w-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                <div className="flex shrink-0 items-center justify-between gap-2 border-t border-white/10 px-2.5 py-1.5 min-w-0">
                  <span className="truncate text-[10px] uppercase tracking-wider text-white/70 min-w-0">
                    {address}
                  </span>
                  <a
                    href={gmapsPlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 rounded-full bg-accent hover:bg-accent-hover text-black px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest transition"
                  >
                    В картах <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* QR row — under the map below lg */}
              <div className="hidden max-lg:grid max-lg:grid-cols-2 gap-4 max-lg:mt-4 w-full min-w-0">
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
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(max-width: 1280px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/40 blur-md" />
            <div className="relative flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-accent text-black font-black text-xl sm:text-2xl shadow-[0_0_20px_var(--color-accent-dim)]">
              {n}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-6 md:p-7">
        <h3 className="whitespace-pre-line font-black uppercase leading-[1.05] tracking-tight text-base sm:text-xl md:text-2xl">
          {title}
        </h3>
        <p className="mt-2 sm:mt-3 leading-snug text-sm sm:text-lg text-accent font-semibold">
          {desc}
        </p>
      </div>
    </div>
  )
}

/* ─────────── QR Card ───────────
   Mobile: картинка сверху, подпись снизу (flex-col)
   sm+:    картинка слева, подпись справа (flex-row)
   Внутри блока карточки центрируются по ширине через justify-center у контейнера.
*/
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
      className="group flex w-full min-w-0 flex-col lg:flex-row items-center justify-center gap-2 lg:gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-2 lg:p-4 transition hover:border-accent/60"
    >
      <div className="relative h-20 w-20 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-32 lg:w-32 max-lg:w-full max-lg:h-auto max-lg:aspect-square shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1023px) 45vw, 8rem"
          className="object-cover max-lg:object-contain"
        />
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <div className="flex items-center gap-1.5 lg:gap-2">
          <span className="h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full" style={{ backgroundColor: dotColor }} />
          <span className="text-[9px] lg:text-xs uppercase tracking-widest text-white/60">
            сканируй
          </span>
        </div>
        <span className="mt-0.5 text-[11px] sm:text-sm lg:text-base font-bold uppercase text-white group-hover:text-accent transition-colors leading-tight text-center lg:text-left break-words">
          {label}
        </span>
      </div>
    </a>
  )
}
