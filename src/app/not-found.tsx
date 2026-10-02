import type { Metadata } from "next"
import Link from "next/link"
import { Oswald, Montserrat } from "next/font/google"
import { DEFAULT_APPLE_ICON, DEFAULT_FAVICON, SITE_NAME } from "@/lib/seo/config"
import { getHomeContentData } from "@/lib/data/homeContent"
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

export async function generateMetadata(): Promise<Metadata> {
  // Та же иконка вкладки, что и на остальном сайте.
  const home = await getHomeContentData()
  const favicon = home.seo.seoFaviconUrl || DEFAULT_FAVICON

  return {
    title: "Страница не найдена",
    description: "Такой страницы нет. Вернитесь на главную или откройте меню и расписание событий.",
    robots: { index: false, follow: true },
    icons: {
      icon: [{ url: favicon, type: "image/png" }],
      apple: [{ url: DEFAULT_APPLE_ICON, type: "image/png", sizes: "180x180" }],
    },
  }
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