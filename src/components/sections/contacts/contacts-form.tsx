"use client"

import { useState } from "react"
import Link from "next/link"
import { Send, Mail, Globe, Loader2 } from "lucide-react"
import { links } from "@/config/links"
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/ui/social-icons"

const SOCIALS = [
  { icon: Send, label: "t.me/poidem_pozhrem", href: links.telegram },
  { icon: InstagramIcon, label: "instagram.com/poidem_po_zhrem", href: links.instagram },
  { icon: FacebookIcon, label: "facebook.com/PoidemPozhrem", href: links.facebook },
  { icon: YoutubeIcon, label: "youtube.com/@poidempozhrEM", href: links.youtube },
]

export function ContactsForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setTimeout(() => setStatus("sent"), 800)
  }

  return (
    <section className="section-py">
      <div className="rounded-card border border-border p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display font-bold uppercase text-text-primary">Напишите нам</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-secondary">
            <span className="flex items-center gap-1">
              <Mail className="h-3.5 w-3.5 text-accent" /> poidempozhrem@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <Globe className="h-3.5 w-3.5 text-accent" /> poidempozhrem.com
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-text-primary">
              Ваше имя <span className="text-[#ef4444]">*</span>
            </span>
            <input
              required
              type="text"
              placeholder="Иван Иванов"
              className="rounded-sm border border-border bg-transparent px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-muted focus:border-accent"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-text-primary">
              Email / Telegram / WhatsApp <span className="text-[#ef4444]">*</span>
            </span>
            <input
              required
              type="text"
              placeholder="example@mail.com / @username / +1234567890"
              className="rounded-sm border border-border bg-transparent px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-muted focus:border-accent"
            />
          </label>
          <label className="flex flex-col gap-1.5 lg:col-span-2">
            <span className="text-sm font-medium text-text-primary">
              Ваше сообщение <span className="text-[#ef4444]">*</span>
            </span>
            <textarea
              required
              placeholder="Введите ваше сообщение..."
              rows={4}
              className="rounded-sm border border-border bg-transparent px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-muted focus:border-accent"
            />
          </label>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="hover-lift flex items-center justify-center gap-2 rounded-card bg-accent py-4 font-display font-bold uppercase text-sm text-black transition-colors hover:bg-accent-hover disabled:opacity-70 lg:col-span-2"
          >
            {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {status === "sent" ? "Отправлено!" : "Отправить сообщение"}
          </button>

          <p className="text-center text-xs text-text-muted lg:col-span-2">
            Мы ответим вам в ближайшее время!
          </p>
        </form>

        <div className="mt-5 flex flex-wrap justify-center gap-4 border-t border-border pt-4">
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
      </div>
    </section>
  )
}