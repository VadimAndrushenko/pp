import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function Breadcrumb({
  mb = "mb-6"
}: {
  mb?: string
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 text-sm font-display uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors ${mb}`}
    >
      <ArrowLeft className="w-4 h-4 text-[var(--color-accent)]" />
      Главная
    </Link>
  )
}