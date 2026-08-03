import { Breadcrumb } from "@/components/layout/breadcrumb"
import { DeliveryHero } from "@/components/sections/delivery/delivery-hero"
import { InfoCards } from "@/components/sections/delivery/info-cards"
import { ServicesSection } from "@/components/sections/delivery/services-section"
import { DeliveryZones } from "@/components/sections/delivery/zones-section"
import { CTABanner } from "@/components/ui/cta-banner"

export default function DeliveryPage() {
  return (
    <>
      <Breadcrumb />
      <DeliveryHero className="py-8" />
      <ServicesSection className="py-8" />
      <InfoCards className="py-6" />
      <DeliveryZones className="py-8" />
      {/* <CTABanner /> */}
    </>
  )
}
