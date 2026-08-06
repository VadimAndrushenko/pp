import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"
import { links } from "@/config/links"

export function ContactsActions() {
  return (
    <section className="section-py">
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-card bg-gradient-to-br from-surface to-black p-5 border border-border shadow-card-glow hover:border-accent hover:shadow-card-glow-hover hover:-translate-y-1 transition-all duration-500"
        >
          <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-accent-dim to-transparent group-hover:from-accent transition-all duration-500" />
          <div className="flex items-start gap-4">
            <div className="shrink-0 flex items-center justify-center w-11 h-11 max-sm:w-9 max-sm:h-9 rounded-full bg-accent/10 ring-1 ring-border group-hover:bg-accent/20 group-hover:ring-accent transition-all duration-500">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <div>
              <span className="font-display uppercase tracking-widest text-xs text-text-muted">Быстрое бронирование</span>
              <p className="font-bold text-lg text-text-primary">Забронировать столик</p>
            </div>
          </div>
        </a>
        <Link
          href="/delivery"
          className="group relative overflow-hidden rounded-card bg-gradient-to-br from-surface to-black p-5 border border-border shadow-card-glow hover:border-accent hover:shadow-card-glow-hover hover:-translate-y-1 transition-all duration-500"
        >
          <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-accent-dim to-transparent group-hover:from-accent transition-all duration-500" />
          <div className="flex items-start gap-4">
            <div className="shrink-0 flex items-center justify-center w-11 h-11 max-sm:w-9 max-sm:h-9 rounded-full bg-accent/10 ring-1 ring-border group-hover:bg-accent/20 group-hover:ring-accent transition-all duration-500">
              <MessageCircle className="w-5 h-5 text-accent" />
            </div>
            <div>
              <span className="font-display uppercase tracking-widest text-xs text-text-muted">Еда, напитки и кальян</span>
              <p className="font-bold text-lg text-text-primary">Заказать доставку</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}