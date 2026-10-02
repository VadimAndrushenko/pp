import type { Metadata } from "next"
import Link from "next/link"
import { Oswald, Montserrat } from "next/font/google"
import { SITE_NAME } from "@/lib/seo/config"
import "./globals.css"

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  display: "swap",
})

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Страница не найдена",
  description: "Такой страницы нет. Вернитесь на главную или откройте меню и расписание событий.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div
      className={`${oswald.variable} ${montserrat.variable} flex max-h-screen flex-col items-center justify-center bg-bg px-4 text-center font-body text-text-primary antialiased`}
    >
      <p className="font-display text-7xl leading-none text-accent drop-shadow-accent sm:text-8xl">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl uppercase tracking-wider sm:text-3xl">
        Такой страницы нет
      </h1>
      <p className="mt-4 max-w-md text-text-secondary">
        Возможно, ссылка устарела. Загляните на главную или посмотрите меню и расписание мероприятий.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-card bg-accent px-6 py-3 font-display uppercase tracking-wider text-black transition-colors hover:bg-accent-hover"
        >
          На главную
        </Link>
        <Link
          href="/menu"
          className="rounded-card border border-accent px-6 py-3 font-display uppercase tracking-wider text-accent transition-colors hover:bg-accent hover:text-black"
        >
          Меню
        </Link>
        <Link
          href="/events"
          className="rounded-card border border-accent px-6 py-3 font-display uppercase tracking-wider text-accent transition-colors hover:bg-accent hover:text-black"
        >
          События
        </Link>
      </div>
      <p className="mt-10 text-sm text-text-muted">{SITE_NAME}</p>
    </div>
  )
}