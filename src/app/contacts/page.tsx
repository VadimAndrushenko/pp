"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, MessageCircle, MessageSquare, Send, MapPin, Map, Clock, Mail, Globe, Loader2 } from "lucide-react"

const CONTACT_METHODS = [
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
    color: "var(--color-whatsapp)",
  },
  {
    icon: Send,
    label: "TELEGRAM",
    value: "@poidem_pozhrem",
    hint: "Напишите нам",
    href: "https://t.me/poidem_pozhrem",
    color: "var(--color-telegram)",
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

/* --------------------------------------------------------------------
 * Локальные SVG-иконки соцсетей.
 * В lucide-react нет Instagram/Facebook/Youtube (убрали из-за trademark),
 * поэтому это отдельные компоненты — стандартный line-icon стиль, 24x24,
 * рисуются через currentColor, чтобы наследовать цвет из className.
 * ------------------------------------------------------------------ */

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  )
}

const SOCIALS = [
  { icon: Send, label: "t.me/poidem_po_zhrem", href: "https://t.me/poidem_po_zhrem" },
  { icon: InstagramIcon, label: "instagram.com/poidem_po_zhrem", href: "https://instagram.com/poidem_po_zhrem" },
  { icon: FacebookIcon, label: "facebook.com/PoidemPozhrem", href: "https://facebook.com/PoidemPozhrem" },
  { icon: YoutubeIcon, label: "youtube.com/@poidempozhrEM", href: "https://youtube.com/@poidempozhrEM" },
]

/**
 * Лучи по бокам от заголовка "КОНТАКТЫ".
 * Квадратный viewBox (120x120) — чтобы фан не плющило при разных пропорциях контейнера.
 * 5 лучей из одной точки (14,60), чередование толщины: толстый-тонкий-толстый-тонкий-толстый.
 */
function BurstLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 6px var(--color-accent-dim))" }}
    >
      <line x1="14" y1="30" x2="55" y2="22" stroke="var(--color-accent)" strokeWidth="5" strokeLinecap="round" />
      <line x1="14" y1="45" x2="50" y2="41" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="60" x2="58" y2="60" stroke="var(--color-accent)" strokeWidth="5" strokeLinecap="round" />
      <line x1="14" y1="75" x2="50" y2="79" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="90" x2="55" y2="98" stroke="var(--color-accent)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

function ContactsGrid() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: подключить реальную отправку (API route / email-сервис)
    setStatus("sending")
    setTimeout(() => setStatus("sent"), 800)
  }

  return (
    <div className="space-y-10">
      {/* ЗАГОЛОВОК — только текст, без фото, с лучами по бокам от "КОНТАКТЫ" */}
      <div className="text-center pt-2">
        <div className="relative mx-auto flex max-w-3xl items-center justify-center">
          <BurstLines className="absolute left-4 sm:left-8 top-1/2 h-16 w-16 -translate-y-1/2 scale-x-[-1] sm:h-24 sm:w-24 lg:h-32 lg:w-32" />
          <h1 className="font-display font-extrabold uppercase text-6xl text-[var(--color-text-primary)] sm:text-7xl lg:text-8xl">
            КОНТАКТЫ
          </h1>
          <BurstLines className="absolute right-4 sm:right-8 top-1/2 h-16 w-16 -translate-y-1/2 sm:h-24 sm:w-24 lg:h-32 lg:w-32" />
        </div>
        <p className="mt-2 font-display font-bold uppercase text-3xl text-[var(--color-accent)] sm:text-4xl lg:text-5xl">
          МЫ ВСЕГДА НА СВЯЗИ!
        </p>
        <p className="mt-4 text-base text-[var(--color-text-secondary)] sm:text-lg">
          Свяжитесь с нами удобным для вас способом
        </p>
      </div>

      {/* СПОСОБЫ СВЯЗИ */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {CONTACT_METHODS.map((m) => {
          const Icon = m.icon
          return (
            <Link
              key={m.label}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift neon-card flex flex-col items-center rounded-[var(--radius-card)] border border-[var(--color-border)] px-4 py-6 text-center"
              style={{ ["--glow" as string]: m.color }}
            >
              <span
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: m.color }}
              >
                <Icon className="h-6 w-6 text-white" strokeWidth={2} />
              </span>
              <span className="font-display font-bold uppercase text-sm text-[var(--color-text-primary)]">
                {m.label}
              </span>
              <span className="mt-1 text-sm font-semibold text-[var(--color-accent)]">{m.value}</span>
              <span className="mt-1 text-xs text-[var(--color-text-muted)]">{m.hint}</span>
            </Link>
          )
        })}
      </div>

      {/* АДРЕС + РЕЖИМ РАБОТЫ */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Карточка адреса — фото фасада как ПОЛНЫЙ фон карточки, естественные пропорции 1024x977 */}
        <div className="relative a w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] min-h-[300px]">
          <Image
            src="/images/contacts/facade.png"
            alt="Фасад ресторана Poidem Pozhrem"
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-0 top-0 p-5">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[var(--color-accent)]" />
              <h3 className="font-display font-bold uppercase text-base sm:text-xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Наш адрес</h3>
            </div>
            <p className="pt-2 text-xs sm:text-base text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              97 Trần Hưng Đạo, Дương Đông, Phú Quốc
              <br />
              2 этаж (вход через Holiday Center)
            </p>
          </div>
        </div>

      <div className="flex gap-5 rounded-[var(--radius-card)] border border-[var(--color-border)] p-5 min-h-[200px] sm:min-h-[260px] max-sm:flex-col max-sm:p-3">
        <div className="flex flex-col justify-center flex-1">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[var(--color-accent)]" />
            <h3 className="font-display font-bold uppercase text-base sm:text-xl max-sm:text-sm text-[var(--color-text-primary)]">
              Режим работы
            </h3>
          </div>

          <p className="mt-4 font-display font-extrabold uppercase text-6xl max-sm:text-5xl text-[var(--color-accent)]">
            24/7
          </p>
          <p className="mt-2 text-lg max-sm:text-base uppercase text-white">Все 7 дней в неделю</p>
          <hr className="mt-2 border-gray-600" />

          <div className="mt-4 space-y-3 text-xl max-sm:text-sm max-sm:flex justify-between gap-3">
            <div>
              <p className="font-display font-bold uppercase text-[var(--color-accent)]">Кухня и бар</p>
              <p className="text-white">Круглосуточно</p>
            </div>
            <div>
              <p className="font-display font-bold uppercase text-[var(--color-accent)]">Завтраки / Коворкинг</p>
              <p className="text-[var(--color-text-secondary)]">Ежедневно с 08:00 до 17:00</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-sm:flex-row max-sm:mt-2 items-center justify-center gap-4 max-sm:gap-3">
          <div className="text-center">
            <div className="mb-2 flex items-center justify-center gap-1.5">
              <MapPin className="h-4 w-4" style={{ color: "#FC3F1D" }} />
              <span className="text-xs max-sm:text-[11px] font-medium text-[var(--color-text-primary)]">Яндекс Карты</span>
            </div>
            <div className="relative h-28 w-28 max-sm:h-36 max-sm:w-36 overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-border)]">
              <Image src="/images/contacts/qr-yandex.png" alt="QR-код Яндекс Карты" fill className="object-cover" />
            </div>
          </div>

          <div className="text-center">
            <div className="mb-2 flex items-center justify-center gap-1.5">
              <MapPin className="h-4 w-4" style={{ color: "#4285F4" }} />
              <span className="text-xs max-sm:text-[11px] font-medium text-[var(--color-text-primary)]">Google Maps</span>
            </div>
            <div className="relative h-28 w-28 max-sm:h-36 max-sm:w-36 overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-border)]">
              <Image src="/images/contacts/qr-google.png" alt="QR-код Google Maps" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* КАК НАС НАЙТИ — карта Google Maps */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Map className="h-5 w-5 text-[var(--color-accent)]" />
          <h3 className="font-display font-bold uppercase text-base sm:text-xl text-[var(--color-text-primary)]">Как нас найти</h3>
        </div>
        <div className="relative w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] aspect-[16/4] min-h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.6977096240234!2d103.9614389748743!3d10.205185289910963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78dcc750e2e1b%3A0xb5338d32fc7decc6!2sPOIDEM%20POZHREM%20%E2%80%94%20Russian%2C%20Caucasian%2C%20European%20%26%20Eastern%20Cuisine!5e0!3m2!1sru!2sil!4v1785186951084!5m2!1sru!2sil"
            style={{ border: 0, position: "absolute", inset: 0, width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/20" />
        </div>
      </div>

      {/* ФОРМА ОБРАТНОЙ СВЯЗИ */}
      <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display font-bold uppercase text-[var(--color-text-primary)]">Напишите нам</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--color-text-secondary)]">
            <span className="flex items-center gap-1">
              <Mail className="h-3.5 w-3.5 text-[var(--color-accent)]" /> poidempozhrem@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <Globe className="h-3.5 w-3.5 text-[var(--color-accent)]" /> poidempozhrem.com
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-[var(--color-text-primary)]">
              Ваше имя <span className="text-[#ef4444]">*</span>
            </span>
            <input
              required
              type="text"
              placeholder="Иван Иванов"
              className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)]"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-[var(--color-text-primary)]">
              Email / Telegram / WhatsApp <span className="text-[#ef4444]">*</span>
            </span>
            <input
              required
              type="text"
              placeholder="example@mail.com / @username / +1234567890"
              className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)]"
            />
          </label>
          <label className="flex flex-col gap-1.5 lg:col-span-2">
            <span className="text-sm font-medium text-[var(--color-text-primary)]">
              Ваше сообщение <span className="text-[#ef4444]">*</span>
            </span>
            <textarea
              required
              placeholder="Введите ваше сообщение..."
              rows={4}
              className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)]"
            />
          </label>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="hover-lift flex items-center justify-center gap-2 rounded-[var(--radius-card)] bg-[var(--color-accent)] py-4 font-display font-bold uppercase text-sm text-black transition-colors hover:bg-[var(--color-accent-hover)] disabled:opacity-70 lg:col-span-2"
          >
            {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {status === "sent" ? "Отправлено!" : "Отправить сообщение"}
          </button>

          <p className="text-center text-xs text-[var(--color-text-muted)] lg:col-span-2">
            Мы ответим вам в ближайшее время!
          </p>
        </form>

        <div className="mt-5 flex flex-wrap justify-center gap-4 border-t border-[var(--color-border)] pt-4">
          {SOCIALS.map((s) => {
            const Icon = s.icon
            return (
              <Link
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)]"
              >
                <Icon className="h-4 w-4" />
                {s.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ContactsGrid
export { ContactsGrid }