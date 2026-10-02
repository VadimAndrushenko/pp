import type { Metadata } from "next"
import Link from "next/link"
import { SITE_NAME } from "@/lib/seo/config"

export const metadata: Metadata = {
  title: "Страница не найдена",
  description: "Такой страницы нет. Вернитесь на главную или откройте меню и расписание событий.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-7xl text-accent leading-none mb-4">404</p>
      <h1 className="font-display uppercase tracking-wider text-2xl sm:text-3xl mb-4">
        Такой страницы нет
      </h1>
      <p className="text-text-secondary max-w-md mb-8">
        Возможно, ссылка устарела. Загляните на главную или посмотрите меню и расписание мероприятий.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="px-6 py-3 bg-accent text-black font-display uppercase tracking-wider transition-colors hover:bg-accent-hover"
        >
          На главную
        </Link>
        <Link
          href="/menu"
          className="px-6 py-3 border border-accent text-accent font-display uppercase tracking-wider transition-colors hover:bg-accent hover:text-black"
        >
          Меню
        </Link>
        <Link
          href="/events"
          className="px-6 py-3 border border-accent text-accent font-display uppercase tracking-wider transition-colors hover:bg-accent hover:text-black"
        >
          События
        </Link>
      </div>
      <p className="mt-10 text-text-muted text-sm">{SITE_NAME}</p>
    </div>
  )
}