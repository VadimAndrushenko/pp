import { Card } from "@/components/ui/card"
import { links } from "@/config/links"
import { MapPin, Phone, MessageCircle, Send, Clock } from "lucide-react"

export function ContactsGrid() {
  return (
    <>
      <h1 className="text-4xl max-md:text-3xl font-display font-bold uppercase tracking-tight text-text-primary mb-6">
        Контакты
      </h1>

      <div className="grid grid-cols-1 gap-4">
        <Card className="flex items-start gap-4 p-5">
          <MapPin className="w-6 h-6 shrink-0 mt-1 text-accent"  strokeWidth={1.5} />
          <div>
            <h3 className="text-sm font-display uppercase text-text-primary mb-1">Адрес</h3>
            <p className="text-sm text-text-secondary">{links.address}</p>
          </div>
        </Card>

        <Card className="flex items-start gap-4 p-5">
          <Clock className="w-6 h-6 shrink-0 mt-1 text-accent"  strokeWidth={1.5} />
          <div>
            <h3 className="text-sm font-display uppercase text-text-primary mb-1">Часы работы</h3>
            <p className="text-sm text-text-secondary">ПН – ВТ: 07:00 – 02:00</p>
            <p className="text-sm text-accent">СР – ВС: 24/7</p>
          </div>
        </Card>

        <Card as="a" href={links.phoneHref} className="flex items-start gap-4 p-5">
          <Phone className="w-6 h-6 shrink-0 mt-1 text-accent"  strokeWidth={1.5} />
          <div>
            <h3 className="text-sm font-display uppercase text-text-primary mb-1">Телефон</h3>
            <p className="text-sm text-text-secondary">{links.phone}</p>
          </div>
        </Card>

        <Card as="a" href={links.whatsapp} className="flex items-start gap-4 p-5">
          <MessageCircle className="w-6 h-6 shrink-0 mt-1 text-whatsapp"  />
          <div>
            <h3 className="text-sm font-display uppercase text-text-primary mb-1">WhatsApp</h3>
            <p className="text-sm text-text-secondary">Написать в WhatsApp</p>
          </div>
        </Card>

        <Card as="a" href={links.telegram} className="flex items-start gap-4 p-5">
          <Send className="w-6 h-6 shrink-0 mt-1 text-telegram"  />
          <div>
            <h3 className="text-sm font-display uppercase text-text-primary mb-1">Telegram</h3>
            <p className="text-sm text-text-secondary">Написать в Telegram</p>
          </div>
        </Card>

        <Card as="a" href={links.instagram} className="flex items-start gap-4 p-5">
          <span className="w-6 h-6 shrink-0 mt-1 flex items-center justify-center text-lg">📷</span>
          <div>
            <h3 className="text-sm font-display uppercase text-text-primary mb-1">Instagram</h3>
            <p className="text-sm text-text-secondary">@poidem_pozhrem</p>
          </div>
        </Card>
      </div>
    </>
  )
}
