import { Breadcrumb } from "@/components/layout/breadcrumb"
import { PromoBanner } from "@/components/ui/promo-banner"
import { DeliveryHero } from "@/components/sections/delivery/delivery-hero"
import { InfoCards } from "@/components/sections/delivery/info-cards"
import { ServicesSection } from "@/components/sections/delivery/services-section"
import { DeliveryMethods } from "@/components/sections/delivery/delivery-methods"
import { ZonesSection } from "@/components/sections/delivery/zones-section"
import { HelpCard } from "@/components/sections/delivery/help-card"

export default function DeliveryPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />

        <DeliveryHero />
        <InfoCards />
        <ServicesSection />
        <DeliveryMethods />
        <ZonesSection />

        <PromoBanner
          title="VIP CLUB"
          description="Вступай в наш VIP CLUB и получай до 50% кешбэк!"
          href="/vip"
          className="mb-8"
        />

        <HelpCard />
      </div>
    </div>
  )
}
