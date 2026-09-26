"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Send,
  Mail,
  Globe,
  Loader2,
  Calendar,
  Clock,
  MessageSquare,
  User,
  AtSign,
} from "lucide-react"
import { links } from "@/config/links"
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/ui/social-icons"

const SOCIALS = [
  { icon: Send, label: "t.me/poidem_pozhrem", href: links.telegram },
  { icon: InstagramIcon, label: "instagram.com/poidem_po_zhrem", href: links.instagram },
  { icon: FacebookIcon, label: "facebook.com/PoidemPozhrem", href: links.facebook },
  { icon: YoutubeIcon, label: "youtube.com/@poidempozhrEM", href: links.youtube },
]

export interface ContactFormBaseProps {
  /** Заголовок карточки формы */
  title?: string
  /** Показать бейджи с email/сайтом в шапке */
  showContactMeta?: boolean
  /** Показать блок соц-сетей под формой */
  showSocials?: boolean
  /** Дополнительное поле: желаемая дата */
  withDate?: boolean
  /** Дополнительное поле: желаемое время */
  withTime?: boolean
  /** Подпись для поля «сообщение» — например «Доп. вопросы» */
  messageLabel?: string
  /** Плейсхолдер для поля «сообщение» */
  messagePlaceholder?: string
  /** Пометить «сообщение» как необязательное */
  messageOptional?: boolean
  /** Подпись кнопки отправки */
  submitLabel?: string
  /** Подпись после успешной отправки */
  submittedLabel?: string
  /** Приписка под кнопкой */
  footerHint?: string
  /** Идентификатор для якорной прокрутки */
  id?: string
  className?: string
}

export function ContactFormBase({
  title = "Напишите нам",
  showContactMeta = true,
  showSocials = true,
  withDate = false,
  withTime = false,
  messageLabel = "Ваше сообщение",
  messagePlaceholder = "Введите ваше сообщение...",
  messageOptional = false,
  submitLabel = "Отправить сообщение",
  submittedLabel = "Отправлено!",
  footerHint = "Мы ответим вам в ближайшее время!",
  id,
  className,
}: ContactFormBaseProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    // Временно: заявка никуда не отправляется, только UX-имитация
    setTimeout(() => setStatus("sent"), 800)
  }

  const showExtras = withDate || withTime

  return (
    <section id={id} className={`section-py scroll-mt-24 ${className ?? ""}`}>
      <div className="relative overflow-hidden rounded-card border border-border bg-surface/40 p-5 sm:p-8 shadow-card-glow backdrop-blur-sm">
        {/* Декоративный акцент в углу */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-accent-dim), transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-56 w-56 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-accent-dim), transparent 70%)" }}
        />

        <div className="relative mb-5 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-text-primary">
            {title}
          </h3>
          {showContactMeta && (
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-secondary">
              <span className="flex items-center gap-1">
                <Mail className="h-3.5 w-3.5 text-accent" /> poidempozhrem@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Globe className="h-3.5 w-3.5 text-accent" /> poidempozhrem.com
              </span>
            </div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          data-testid="contact-form"
          className="relative grid grid-cols-1 gap-4 lg:grid-cols-2"
        >
          <label className="flex flex-col gap-1.5">
            <span className="flex items-center gap-1.5 text-sm font-medium text-text-primary">
              <User className="h-3.5 w-3.5 text-accent" />
              Ваше имя <span className="text-[#ef4444]">*</span>
            </span>
            <input
              required
              type="text"
              name="name"
              data-testid="contact-form-name"
              placeholder="Иван Иванов"
              className="rounded-sm border border-border bg-black/40 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent focus:shadow-accent-sm"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="flex items-center gap-1.5 text-sm font-medium text-text-primary">
              <AtSign className="h-3.5 w-3.5 text-accent" />
              Email / Telegram / WhatsApp <span className="text-[#ef4444]">*</span>
            </span>
            <input
              required
              type="text"
              name="contact"
              data-testid="contact-form-contact"
              placeholder="example@mail.com / @username / +1234567890"
              className="rounded-sm border border-border bg-black/40 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent focus:shadow-accent-sm"
            />
          </label>

          {showExtras && (
            <div
              className={`grid grid-cols-1 gap-4 lg:col-span-2 ${
                withDate && withTime ? "sm:grid-cols-2" : "sm:grid-cols-1"
              }`}
            >
              {withDate && (
                <label className="flex flex-col gap-1.5">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-text-primary">
                    <Calendar className="h-3.5 w-3.5 text-accent" />
                    Желаемая дата
                  </span>
                  <input
                    type="date"
                    name="date"
                    data-testid="contact-form-date"
                    className="rounded-sm border border-border bg-black/40 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent focus:shadow-accent-sm [color-scheme:dark]"
                  />
                </label>
              )}
              {withTime && (
                <label className="flex flex-col gap-1.5">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-text-primary">
                    <Clock className="h-3.5 w-3.5 text-accent" />
                    Желаемое время
                  </span>
                  <input
                    type="time"
                    name="time"
                    data-testid="contact-form-time"
                    className="rounded-sm border border-border bg-black/40 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent focus:shadow-accent-sm [color-scheme:dark]"
                  />
                </label>
              )}
            </div>
          )}

          <label className="flex flex-col gap-1.5 lg:col-span-2">
            <span className="flex items-center gap-1.5 text-sm font-medium text-text-primary">
              <MessageSquare className="h-3.5 w-3.5 text-accent" />
              {messageLabel}
              {!messageOptional && <span className="text-[#ef4444]">*</span>}
            </span>
            <textarea
              required={!messageOptional}
              name="message"
              data-testid="contact-form-message"
              placeholder={messagePlaceholder}
              rows={4}
              className="rounded-sm border border-border bg-black/40 px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent focus:shadow-accent-sm resize-none"
            />
          </label>

          <button
            type="submit"
            data-testid="contact-form-submit"
            disabled={status !== "idle"}
            className="hover-lift group flex items-center justify-center gap-2 rounded-card bg-accent py-4 font-display text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-accent-hover disabled:opacity-70 lg:col-span-2"
          >
            {status === "sending" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            )}
            {status === "sent" ? submittedLabel : submitLabel}
          </button>

          <p className="text-center text-xs text-text-muted lg:col-span-2">
            {footerHint}
          </p>
        </form>

        {showSocials && (
          <div className="relative mt-5 flex flex-wrap justify-center gap-4 border-t border-border pt-4">
            {SOCIALS.map((s) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent flex items-center gap-1.5 text-xs text-text-secondary"
                >
                  <Icon className="h-4 w-4" />
                  {s.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}