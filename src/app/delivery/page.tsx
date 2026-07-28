import { Breadcrumb } from "@/components/layout/breadcrumb"
import { PromoBanner } from "@/components/ui/promo-banner"
import { DeliveryHero } from "@/components/sections/delivery/delivery-hero"
import { InfoCards } from "@/components/sections/delivery/info-cards"
import { ServicesSection } from "@/components/sections/delivery/services-section"
import { DeliveryMethods } from "@/components/sections/delivery/delivery-methods"
import { CTABanner } from "@/components/ui/cta-banner"
import { DeliveryZones } from "@/components/sections/delivery/zones-section"

export default function DeliveryPage() {
  return (
    <>
      <Breadcrumb />

      <DeliveryHero className="py-8" />
      <InfoCards className="py-6" />
      <ServicesSection className="py-8" />
      <DeliveryMethods className="py-8" />
      <DeliveryZones className="py-8" />

      <PromoBanner
        title="VIP CLUB"
        description="Вступай в наш VIP CLUB и получай до 50% кешбэк!"
        href="/vip"
        className="py-8"
      />

      <CTABanner />
    </>
  )
}
