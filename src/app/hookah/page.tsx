import { Breadcrumb } from "@/components/layout/breadcrumb"
import { HookahHero } from "@/components/sections/hookah/hero"
import { HookahMenuCards } from "@/components/sections/hookah/menu-cards"
import { HookahFeatures } from "@/components/sections/hookah/features"
import { HookahPrices } from "@/components/sections/hookah/prices"
import { HookahDelivery } from "@/components/sections/hookah/delivery"
import { CTABanner } from "@/components/ui/cta-banner"
// import { HookahVIP } from "@/components/sections/hookah/vip"

export default function HookahPage() {
  return (
    <>
      <Breadcrumb />
      <HookahHero className="py-8" />
      <HookahMenuCards className="py-8" />
      <HookahFeatures className="py-8" />
      <HookahPrices className="py-8" />
      <HookahDelivery className="py-8" />
      <CTABanner />
      {/* <HookahVIP className="py-8" /> */}
    </>
  )
}
