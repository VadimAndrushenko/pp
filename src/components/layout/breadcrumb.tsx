import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function Breadcrumb() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-6"
    >
      <ArrowLeft className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
      Главная
    </Link>
  )
}
