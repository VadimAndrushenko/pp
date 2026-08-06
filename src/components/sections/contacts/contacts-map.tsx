import { Map } from "lucide-react"

export function ContactsMap() {
  return (
    <section className="section-py">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Map className="h-5 w-5 text-accent" />
          <h3 className="font-display font-bold uppercase text-base sm:text-xl text-text-primary">Как нас найти</h3>
        </div>
        <div className="relative w-full overflow-hidden rounded-card border border-border aspect-[16/4] min-h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.6977096240234!2d103.9614389748743!3d10.205185289910963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a78dcc750e2e1b%3A0xb5338d32fc7decc6!2sPOIDEM%20POZHREM%20%E2%80%94%20Russian%2C%20Caucasian%2C%20European%20%26%20Eastern%20Cuisine!5e0!3m2!1sru!2sil!4v1785186951084!5m2!1sru!2sil"
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