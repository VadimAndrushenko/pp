import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { links } from "@/config/links"

// Официальный бренд-значок Grab (Simple Icons)
function IconGrab({ className, color }: { className?: string; color: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill={color}>
      <title>Grab</title>
      <path d="M23.129 10.863a2.927 2.927 0 00-2.079-.872c-.57 0-1.141.212-1.455.421-.651.434-1.186.904-2.149 2.148v.894c.817-1.064 1.59-1.903 2.177-2.364.386-.31.933-.501 1.427-.501 1.275 0 2.352 1.077 2.352 2.352v.538c0 .63-.247 1.223-.698 1.668a2.341 2.341 0 01-1.654.685c-1.048 0-1.97-.719-2.22-1.701l-.422.51c.307 1.03 1.417 1.789 2.642 1.789.778 0 1.516-.31 2.079-.872.562-.562.871-1.3.871-2.079v-.538c0-.778-.31-1.517-.871-2.078m-12.8-.274c.406 0 .757.087 1.074.266.149-.186.299-.337.411-.449-.335-.256-.903-.415-1.485-.415-.83 0-1.584.3-2.122.843-.534.54-.83 1.287-.83 2.107v3.489h.598V12.94c0-1.385.968-2.352 2.354-2.352m5.678 5.84v-3.488c0-1.072-.84-1.913-1.913-1.913-.5 0-.976.203-1.343.57a1.895 1.895 0 00-.57 1.343v.538c0 1.037.877 1.913 1.913 1.913.285 0 .671-.07.908-.264v-.631c-.232.187-.57.298-.908.298a1.302 1.302 0 01-1.315-1.316v-.538a1.3 1.3 0 011.315-1.314 1.3 1.3 0 011.316 1.314v3.489zM0 12.596v.193c0 1.036.393 2.003 1.107 2.722a3.759 3.759 0 002.689 1.112c.82 0 1.548-.186 2.162-.551.506-.302.73-.607.75-.635V12.22H3.65v.597H6.11v2.434l-.002.002c-.288.288-.972.77-2.312.77a3.165 3.165 0 01-2.279-.938 3.247 3.247 0 01-.92-2.297v-.193c0-.83.375-1.656 1.026-2.269a3.558 3.558 0 012.442-.967c.847 0 1.438.129 1.913.416v-.67c-.494-.21-1.085-.305-1.913-.305C1.862 8.8 0 10.538 0 12.595m10.329-.968c.226 0 .419.037.571.112.075-.186.151-.339.262-.525-.162-.116-.549-.186-.833-.186-1.09 0-1.913.823-1.913 1.913v3.489h.598V12.94c0-.774.54-1.314 1.315-1.314m-4.351-.702v-.707c-.541-.29-1.131-.419-1.913-.419-.799 0-1.555.293-2.132.824-.577.532-.895 1.233-.895 1.972v.193c0 1.542 1.237 2.796 2.758 2.796 1.237 0 1.745-.405 1.874-.533v-1.794H3.65v.598h1.46v.899l-.005.001c-.187.075-.578.231-1.31.231-.58 0-1.122-.225-1.528-.636a2.203 2.203 0 01-.632-1.562v-.193c0-1.192 1.113-2.198 2.43-2.198.91 0 1.45.147 1.913.528m14.105 1.126c.27-.27.623-.424.967-.424.737 0 1.315.577 1.315 1.314v.538c0 .738-.578 1.316-1.315 1.316-.357 0-.702-.196-.972-.55a2.151 2.151 0 01-.418-1.12l-.484.591c.095.452.33.885.665 1.19.344.313.774.486 1.209.486a1.915 1.915 0 001.913-1.913v-.538c0-.499-.202-.977-.57-1.343a1.896 1.896 0 00-1.343-.57c-.316 0-.818.114-1.417.652l-.002.002c-.16.16-.536.536-.765.804-.384.42-.943 1.054-1.42 1.688v.933c.529-.68.833-1.06 1.33-1.634.445-.519.996-1.15 1.307-1.422m-8.939 1.428c0 .779.31 1.517.872 2.08a2.93 2.93 0 002.078.87c.33 0 .669-.07.908-.188v-.597c-.28.117-.618.188-.908.188-1.274 0-2.352-1.077-2.352-2.353v-.538c0-1.275 1.078-2.352 2.352-2.352a2.34 2.34 0 012.353 2.353v3.488h.598v-3.604a2.979 2.979 0 00-.915-2.006 2.92 2.92 0 00-2.036-.83c-.778 0-1.516.31-2.078.873a2.926 2.926 0 00-.872 2.078zm6.918-2.313c.183-.22.372-.443.596-.631V7.378h-.596zm1.037-.876V7.378h.597V9.88a3.601 3.601 0 00-.597.41" />
    </svg>
  )
}

// Официальный бренд-значок Telegram (Simple Icons)
function IconTelegram({ className, color }: { className?: string; color: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill={color}>
      <title>Telegram</title>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

// Package + moped (Tabler Icons) — своя доставка
function IconOwnDelivery({ color }: { color: string }) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <svg
        viewBox="0 0 24 24"
        className="absolute h-9 w-9 -translate-x-3 -translate-y-4"
        fill="none"
        stroke={color}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
        <path d="M12 12l8 -4.5" />
        <path d="M12 12l0 9" />
        <path d="M12 12l-8 -4.5" />
        <path d="M16 5.25l-8 4.5" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="absolute h-11 w-11 translate-x-3 translate-y-3"
        fill="none"
        stroke={color}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M5 16v1a2 2 0 0 0 4 0v-5h-3a3 3 0 0 0 -3 3v1h10a6 6 0 0 1 5 -4v-5a2 2 0 0 0 -2 -2h-1" />
        <path d="M6 9l3 0" />
      </svg>
    </div>
  )
}

const methods = [
  {
    key: "grab",
    color: "var(--color-grab)",
    logo: <IconGrab className="aspect-square w-20" color="var(--color-grab)" />,
    title: "Grab",
    description: "Закажите через приложение Grab",
    cta: "Перейти в Grab",
    href: links.grab,
  },
  {
    key: "telegram",
    color: "var(--color-neon-blue)",
    logo: <IconTelegram className="w-14 aspect-square " color="var(--color-neon-blue)" />,
    title: "Telegram",
    description: "Быстрый заказ через наш Telegram-бот",
    cta: "Перейти в TG-бот",
    href: links.telegramBot,
  },
  {
    key: "own",
    color: "var(--color-accent)",
    logo: <IconOwnDelivery color="var(--color-accent)" />,
    title: "Собственная доставка",
    description: "Наши курьеры привезут всё сами",
    cta: "Заказать",
    href: null,
  },
] as const

export function DeliveryMethods({ className }: { className?: string }) {
  return (
    <section className={className}>
      <h2 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-5">
        Выберите способ доставки
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {methods.map((m) => (
          <Card
            key={m.key}
            className="neon-card group flex flex-col items-center gap-3 rounded-[var(--radius-card)] py-6 text-center"
            style={{
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: m.color,
              ["--glow" as any]: m.color,
            }}
          >
            <div className="flex h-13 items-center justify-center">{m.logo}</div>

            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-[var(--color-text-primary)]">
              {m.title}
            </h3>

            <p className=" leading-snug text-[var(--color-text-secondary)] max-w-[210px]">
              {m.description}
            </p>

            {m.cta && (() => {
              const common = "neon-btn mt-2 w-full max-w-[240px] rounded-[var(--radius-sm)] bg-transparent font-display uppercase tracking-wide inline-flex items-center justify-center gap-2 text-sm py-3 px-6"
              const st: React.CSSProperties = { borderWidth: "2px", borderStyle: "solid", borderColor: m.color, color: m.color }

              if (m.href) {
                return (
                  <a href={m.href} target="_blank" rel="noopener noreferrer" className={common} style={st}>
                    {m.cta}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                )
              }
              return (
                <button className={common} style={st}>
                  {m.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              )
            })()}
          </Card>
        ))}
      </div>
    </section>
  )
}