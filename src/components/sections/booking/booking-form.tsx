"use client"

import { useState } from "react"
import {
  AlarmClock,
  Calendar,
  Check,
  Hash,
  Loader2,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Users,
} from "lucide-react"

/* ─────────── визуальные константы в стиле сайта ─────────── */

const FIELD =
  "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-base text-white outline-none transition-all duration-300 placeholder:text-white/35 focus:border-accent focus:shadow-[0_0_14px_color-mix(in_srgb,var(--color-accent)_25%,transparent)] [color-scheme:dark]"

const LABEL =
  "mb-2 flex items-center gap-1.5 font-display text-xs font-medium uppercase tracking-widest text-white/70"

/* ─────────── опции селектов (совпадают с коллекцией Bookings) ─────────── */

const ZONES = [
  { value: "any", label: "Любая" },
  { value: "window", label: "У окна" },
  { value: "stage", label: "У сцены" },
  { value: "hall", label: "В зале" },
  { value: "terrace", label: "Терраса" },
] as const

const OCCASIONS = [
  { value: "just-dinner", label: "Просто поужинать" },
  { value: "birthday", label: "День рождения" },
  { value: "date", label: "Свидание" },
  { value: "friends", label: "Друзья" },
  { value: "corporate", label: "Корпоратив" },
  { value: "event", label: "Событие" },
] as const

/* ─────────── компонент ─────────── */

export function BookingForm() {
  // Временно: заявка никуда не отправляется и нигде не сохраняется,
  // только имитация успешной отправки. Валидации нет.
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setTimeout(() => setStatus("sent"), 800)
  }

  // Минимальная дата — сегодня, чтобы нельзя было выбрать прошлое.
  const today = new Date().toISOString().slice(0, 10)

  if (status === "sent") {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/10 via-white/[0.02] to-transparent p-8 text-center md:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_color-mix(in_srgb,var(--color-accent)_18%,transparent)]"
        />
        <div className="relative">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent shadow-[0_0_30px_color-mix(in_srgb,var(--color-accent)_50%,transparent)]">
            <Check className="h-8 w-8 text-black" strokeWidth={3} />
          </div>
          <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
            Стол забронирован
          </h3>
          <p className="mx-auto mt-3 max-w-md text-white/75">
            Заявка принята. Мы перезвоним, чтобы подтвердить бронь.
          </p>
          <p className="mt-6 text-xs uppercase tracking-widest text-white/45">
            Работаем ежедневно 24/7 — мы на связи
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-testid="booking-form"
      noValidate
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-transparent to-accent/[0.05] p-5 shadow-card-glow backdrop-blur-sm sm:p-8"
    >
      {/* Декоративные пятна-глоу в углах карточки */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-60 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--color-accent-dim), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -left-20 h-48 w-48 rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--color-accent-dim), transparent 70%)",
        }}
      />

      <div className="relative grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* ── Имя ── */}
        <div className="lg:col-span-1">
          <label htmlFor="guestName" className={LABEL}>
            <Users className="h-3.5 w-3.5 text-accent" /> Ваше имя
            <span className="text-[#ef4444]">*</span>
          </label>
          <input
            id="guestName"
            name="guestName"
            type="text"
            required
            autoComplete="name"
            placeholder="Иван Иванов"
            className={FIELD}
          />
        </div>

        {/* ── Телефон ── */}
        <div className="lg:col-span-1">
          <label htmlFor="phone" className={LABEL}>
            <Phone className="h-3.5 w-3.5 text-accent" /> Телефон
            <span className="text-[#ef4444]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+84 783 779 879"
            className={FIELD}
          />
        </div>

        {/* ── Дата ── */}
        <div>
          <label htmlFor="date" className={LABEL}>
            <Calendar className="h-3.5 w-3.5 text-accent" /> Дата
            <span className="text-[#ef4444]">*</span>
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            min={today}
            className={FIELD}
          />
        </div>

        {/* ── Время ── */}
        <div>
          <label htmlFor="time" className={LABEL}>
            <AlarmClock className="h-3.5 w-3.5 text-accent" /> Время
            <span className="text-[#ef4444]">*</span>
          </label>
          <input
            id="time"
            name="time"
            type="time"
            required
            className={FIELD}
          />
        </div>

        {/* ── Гости: обычное числовое поле ── */}
        <div>
          <label htmlFor="guestsCount" className={LABEL}>
            <Users className="h-3.5 w-3.5 text-accent" /> Сколько вас будет
            <span className="text-[#ef4444]">*</span>
          </label>
          <div className="relative">
            <Hash className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
            <input
              id="guestsCount"
              name="guestsCount"
              type="number"
              required
              min={1}
              max={60}
              defaultValue={4}
              placeholder="4"
              aria-label="Количество гостей"
              className={`${FIELD} pl-11`}
            />
          </div>
        </div>

        {/* ── Зона ── */}
        <div>
          <label htmlFor="zone" className={LABEL}>
            <MapPin className="h-3.5 w-3.5 text-accent" /> Где сесть
          </label>
          <select id="zone" name="zone" defaultValue="any" className={FIELD}>
            {ZONES.map(({ value, label }) => (
              <option key={value} value={value} className="bg-black">
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* ── Повод ── */}
        <div className="lg:col-span-2">
          <label htmlFor="occasion" className={LABEL}>
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Повод
          </label>
          <select
            id="occasion"
            name="occasion"
            defaultValue="just-dinner"
            className={FIELD}
          >
            {OCCASIONS.map(({ value, label }) => (
              <option key={value} value={value} className="bg-black">
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* ── Пожелания ── */}
        <div className="lg:col-span-2">
          <label htmlFor="comment" className={LABEL}>
            Пожелания
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={4}
            placeholder="Аллергии, детский стул, любимый стол у сцены..."
            className={`${FIELD} resize-none`}
          />
        </div>

        {/* ── Кнопка ── */}
        <button
          type="submit"
          disabled={status !== "idle"}
          data-testid="booking-submit"
          className="hover-lift group flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-black shadow-[0_0_25px_color-mix(in_srgb,var(--color-accent)_50%,transparent)] transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 lg:col-span-2"
        >
          {status === "sending" ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          )}
          {status === "sending" ? "Отправляем..." : "Забронировать стол"}
        </button>

        <p className="text-center text-xs text-white/45 lg:col-span-2">
          Нажимая кнопку, вы соглашаетесь с тем, что мы перезвоним для подтверждения.
          Работаем ежедневно 24/7.
        </p>
      </div>
    </form>
  )
}