import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function Breadcrumb(){
  return (
    <Link
      href="/"
      className="group relative inline-flex text-[var(--color-accent)] items-center gap-2 text-lg font-display uppercase tracking-wider mb-6 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(255,106,0,0.5)] hover:scale-105"
    >
      <span className="relative inline-flex items-center gap-2">
        <ArrowLeft className="w-4 aspect-square transition-all duration-300 group-hover:-translate-x-1.5" />
        <span className="relative">
          Главная
          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[var(--color-accent)] shadow-[0_0_6px_var(--color-accent)] transition-all duration-300 group-hover:w-full" />
        </span>
      </span>
    </Link>
  )
}
