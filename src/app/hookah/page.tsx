import { Breadcrumb } from "@/components/layout/breadcrumb"
import { HookahHero } from "@/components/sections/hookah/hero"
import { HookahMenuCards } from "@/components/sections/hookah/menu-cards"
import { HookahFeatures } from "@/components/sections/hookah/features"
import { HookahPrices } from "@/components/sections/hookah/prices"
import { HookahDelivery } from "@/components/sections/hookah/delivery"
import { HookahCTA } from "@/components/sections/hookah/cta"
import { HookahVIP } from "@/components/sections/hookah/vip"

export default function HookahPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <HookahHero />
        <HookahMenuCards />
        <HookahFeatures />
        <HookahPrices />
        <HookahDelivery />
        <HookahCTA />
        <HookahVIP />
      </div>
    </div>
  )
}
