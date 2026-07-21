import { Breadcrumb } from "@/components/layout/breadcrumb"
import { PromotionsHero } from "@/components/sections/promotions/promotions-hero"
import { PromotionsGrid } from "@/components/sections/promotions/promotions-grid"
import { PromotionsBanner } from "@/components/sections/promotions/promotions-banner"

export default function PromotionsPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <PromotionsHero />
        <PromotionsGrid />
        <PromotionsBanner />
      </div>
    </div>
  )
}
