import Link from "next/link"
import { Phone, MessageCircle, MessageSquare, Send } from "lucide-react"
import type { ComponentType } from "react"

const CONTACT_METHODS: Array<{
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  value: string
  hint: string
  href: string
  color: string
}> = [
  {
    icon: Phone,
    label: "ТЕЛЕФОН",
    value: "+84 783 779 879",
    hint: "Звоните нам",
    href: "tel:+84783779879",
    color: "#FF3B30",
  },
  {
    icon: MessageCircle,
    label: "WHATSAPP",
    value: "+84 783 779 879",
    hint: "Напишите нам",
    href: "https://wa.me/84783779879",
    color: "#25D366",
  },
  {
    icon: Send,
    label: "TELEGRAM",
    value: "@poidem_pozhrem",
    hint: "Напишите нам",
    href: "https://t.me/poidem_pozhrem",
    color: "#229ED9",
  },
  {
    icon: MessageSquare,
    label: "ZALO",
    value: "+84 783 779 879",
    hint: "Напишите нам",
    href: "https://zalo.me/84783779879",
    color: "#0068FF",
  },
]

export function ContactsMethods() {
  return (
    <section className="section-py">
      <h2 className="section-heading font-display font-bold uppercase text-accent text-center tracking-widest mb-6">
        Свяжитесь с нами удобным для вас способом
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {CONTACT_METHODS.map((m) => {
          const Icon = m.icon
          return (
            <Link
              key={m.label}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift neon-card flex flex-col items-center rounded-card border border-border px-4 py-6 text-center"
              style={{ ["--glow" as string]: m.color }}
            >
              <span
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: m.color }}
              >
                <Icon className="h-6 w-6 text-white" strokeWidth={2} />
              </span>
              <span className="font-display font-bold uppercase text-sm text-text-primary">
                {m.label}
              </span>
              <span className="mt-1 text-sm font-semibold text-accent">{m.value}</span>
              <span className="mt-1 text-xs text-text-muted">{m.hint}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}