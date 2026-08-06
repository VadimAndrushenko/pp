import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumb({ items = [] }: { items?: BreadcrumbItem[] }) {
  if (items.length > 0) {
    return (
      <nav
        aria-label="Хлебные крошки"
        className="flex items-center flex-wrap gap-x-1.5 gap-y-1 mb-6 font-display uppercase tracking-wider text-xs sm:text-sm md:text-lg"
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-1 text-text-secondary transition-all duration-300 hover:text-accent hover:drop-shadow-accent hover:scale-105"
        >
          <ArrowLeft className="w-4 aspect-square shrink-0 transition-all duration-300 group-hover:-translate-x-1" />
          <span className="relative">
            Главная
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent shadow-accent-sm transition-all duration-300 group-hover:w-full" />
          </span>
        </Link>
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <span key={item.label} className="flex items-center gap-x-1.5">
              <span className="text-text-muted">•</span>
              {isLast ? (
                <span className="text-accent">{item.label}</span>
              ) : (
                <Link
                  href={item.href ?? "/"}
                  className="group relative text-text-secondary transition-all duration-300 hover:text-accent hover:drop-shadow-accent hover:scale-105"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent shadow-accent-sm transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              )}
            </span>
          )
        })}
      </nav>
    )
  }

  return (
    <Link
      href="/"
      className="group relative inline-flex text-accent items-center gap-2 text-sm md:text-lg font-display uppercase tracking-wider mb-6 transition-all duration-300 hover:drop-shadow-accent hover:scale-105"
    >
      <span className="relative inline-flex items-center gap-2">
        <ArrowLeft className="w-4 aspect-square transition-all duration-300 group-hover:-translate-x-1" />
        <span className="relative">
          Главная
          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent shadow-accent-sm transition-all duration-300 group-hover:w-full" />
        </span>
      </span>
    </Link>
  )
}