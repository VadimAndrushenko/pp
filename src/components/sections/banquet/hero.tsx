import Link from "next/link"
import { CalendarHeart, ChevronRight, Mic2, Sparkles, Users } from "lucide-react"

import { getSiteSettings } from "@/lib/data/settings"

const offers = [
  { icon: Users, title: "Аренда зала", desc: "до 50 гостей, зал ваш целиком" },
  { icon: Mic2, title: "Выступления", desc: "сцена, свет, звук, микрофоны" },
  { icon: CalendarHeart, title: "Мероприятия", desc: "дни рождения, корпоративы, шоу" },
]

export async function BanquetHero() {
  const { links } = await getSiteSettings()

  return (
    <section className="section-py">
      <div className="relative overflow-hidden rounded-card border border-border bg-surface/40 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
        {/* мягкий акцентный свет */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-accent-dim), transparent 70%)" }}
        />

        <div className="relative max-w-3xl">
          <p className="mb-4 inline-flex w-fit items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-accent drop-shadow-accent-sm">
            <Sparkles className="h-4 w-4" />
            Аренда · Выступления · Мероприятия
          </p>

          <h1 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Ваш вечер —{" "}
            <span className="text-accent drop-shadow-accent">на нашей сцене</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
            Зал, сцена, свет, звук и банкетное меню — всё под ключ. Вам остаётся только
            начать вечер.
          </p>

          {/* три варианта сотрудничества */}
          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {offers.map(({ icon: Icon, title, desc }) => (
              <li
                key={title}
                className="rounded-card border border-border bg-black/30 p-4 transition-colors hover:border-accent"
              >
                <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                <p className="mt-2 font-display text-sm font-bold uppercase tracking-wide text-text-primary">
                  {title}
                </p>
                <p className="mt-1 text-sm text-text-secondary">{desc}</p>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex gap-3 max-[500px]:flex-col">
            <Link
              href="#zayavka"
              data-testid="banquet-hero-cta"
              className="
                hover-lift inline-flex items-center gap-2 rounded-card bg-accent 
                px-6 py-3 font-display text-sm font-bold uppercase tracking-wider 
                text-black transition-colors hover:bg-accent-hover

                max-md:flex-1 
              "
            >
              Оставить заявку
              <ChevronRight className="h-4 w-4" />
            </Link>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="banquet-hero-wa"
              className="
                inline-flex items-center gap-2 rounded-card border border-border bg-black/40 
                px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-text-primary 
                backdrop-blur-sm transition-colors hover:border-accent hover:text-accent

                max-md:flex-1 
              "
            >
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
