import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { links, workingHours } from "@/config/links"

export function FooterContacts() {
  return (
    <div>
      <h2 className="font-display font-bold uppercase text-xs tracking-widest text-accent">
        Контакты
      </h2>
      <address className="mt-4 flex flex-col gap-3 text-sm not-italic text-text-secondary">
        <a
          href={links.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent flex items-start gap-2"
        >
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
          <span>{links.addressFull}</span>
        </a>
        <a href={links.phoneHref} className="link-accent flex items-center gap-2">
          <Phone className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
          <span>{links.phone}</span>
        </a>
        <a href={`mailto:${links.email}`} className="link-accent flex items-center gap-2">
          <Mail className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
          <span>{links.email}</span>
        </a>
        <div className="flex items-start gap-2">
          <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
          <span className="text-accent font-semibold">
            {workingHours.daily.label}: {workingHours.daily.hours}
          </span>
        </div>
      </address>
    </div>
  )
}
