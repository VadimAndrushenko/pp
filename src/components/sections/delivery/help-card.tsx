import { Card } from "@/components/ui/card"
import { links } from "@/config/links"
import { MessageCircle, Send, Phone } from "lucide-react"

export function HelpCard() {
  return (
    <Card className="p-5 mb-8">
      <h3 className="text-sm font-display uppercase text-[var(--color-text-primary)] mb-3">Нужна помощь?</h3>
      <div className="flex flex-wrap gap-3 mb-3">
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] text-xs font-display uppercase"
          style={{ backgroundColor: "var(--color-whatsapp)", color: "white" }}
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
        <a
          href={links.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-[var(--radius-sm)] text-xs font-display uppercase"
          style={{ backgroundColor: "var(--color-telegram)", color: "white" }}
        >
          <Send className="w-4 h-4" />
          Telegram
        </a>
      </div>
      <a
        href={`tel:${links.phone}`}
        className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
      >
        <Phone className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
        {links.phone}
      </a>
    </Card>
  )
}
