import { Map } from "lucide-react"

import { getSiteSettings } from "@/lib/data/settings"

export async function ContactsMap() {
  const { links } = await getSiteSettings()

  return (
    <section className="section-py">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Map className="h-5 w-5 text-accent" />
          <h3 className="font-display font-bold uppercase text-base sm:text-xl text-text-primary">Как нас найти</h3>
        </div>
        <div className="relative w-full overflow-hidden rounded-card border border-border aspect-[16/4] min-h-[300px]">
          <iframe
            src={links.googleMapsEmbed}
            style={{ border: 0, position: "absolute", inset: 0, width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/20" />
        </div>
      </div>
    </section>
  )
}