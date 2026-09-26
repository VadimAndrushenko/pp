import { Mic2, PartyPopper, Users, Music2, Utensils, Sparkles } from "lucide-react"

type Feature = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  desc: string
}

const features: Feature[] = [
  {
    icon: Users,
    title: "До 50 гостей",
    desc: "Уютный зал, полностью ваш на весь вечер",
  },
  {
    icon: Mic2,
    title: "Сцена и звук",
    desc: "Профессиональный свет, микрофоны, DJ-пульт",
  },
  {
    icon: Music2,
    title: "Живая музыка",
    desc: "Артисты, ведущий, караоке — по вашему сценарию",
  },
  {
    icon: Utensils,
    title: "Меню под вас",
    desc: "Банкетное меню, фуршет, кальяны, бар",
  },
]

export function BanquetFeatures() {
  return (
    <section className="section-py">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 font-display text-xl font-bold uppercase tracking-widest text-accent sm:text-2xl">
            <Sparkles className="h-6 w-6 sm:h-7 sm:w-7" />
            Что внутри
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold uppercase leading-tight tracking-tight text-text-primary">
            Всё для крутого <span className="text-accent">вечера</span>
          </h2>
        </div>
      </div>

      <div
        data-testid="banquet-features-grid"
        className="grid grid-cols-2 gap-3 lg:gap-4"
      >
        {features.map((f) => {
          const Icon = f.icon
          return (
            <div
              key={f.title}
              className="hover-lift group relative overflow-hidden rounded-card border border-border bg-surface/40 p-3 backdrop-blur-sm transition-colors hover:border-accent sm:p-5"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, var(--color-accent-dim), transparent 70%)" }}
              />
              <div className="relative">
                <Icon className="h-6 w-6 text-accent sm:h-8 sm:w-8" strokeWidth={1.5} />
                <h3 className="mt-2 font-display text-sm font-bold uppercase tracking-wide text-text-primary sm:mt-4 sm:text-lg">
                  {f.title}
                </h3>
                <p className="mt-1 text-xs text-text-secondary sm:text-sm">{f.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export function BanquetOccasions() {
  const items = [
    { title: "Банкет / День рождения", desc: "Индивидуальное меню, украшение зала, торт." },
    { title: "Корпоратив", desc: "Тимбилдинг, ведущий, фото, живая музыка." },
    { title: "Выступление артиста", desc: "Сцена, свет, звук, аудитория — арендуем под концерт или шоу." },
    { title: "Тематический вечер", desc: "Караоке-баттл, стендап, поэтический вечер, презентация." },
  ]

  return (
    <section className="section-py">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 font-display text-xl font-bold uppercase tracking-widest text-accent sm:text-2xl">
            <PartyPopper className="h-6 w-6 sm:h-7 sm:w-7" />
            Форматы
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold uppercase leading-tight tracking-tight text-text-primary">
            Для любого <span className="text-accent">повода</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-text-secondary sm:text-base">
            Арендуйте зал целиком, выступайте на нашей сцене или соберите у нас день
            рождения, корпоратив, тематический вечер — сценарий и меню соберём вместе.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((it, i) => (
          <div
            key={it.title}
            className="group relative flex items-start gap-4 overflow-hidden rounded-card border border-border bg-surface/40 p-5 transition-colors hover:border-accent"
          >
            <span className="font-display text-3xl font-bold leading-none text-accent/70 group-hover:text-accent">
              0{i + 1}
            </span>
            <div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-text-primary">
                {it.title}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}