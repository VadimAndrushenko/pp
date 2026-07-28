import { Breadcrumb } from "@/components/layout/breadcrumb"
import { PromotionsHero } from "@/components/sections/promotions/promotions-hero"
import { PromotionsGrid } from "@/components/sections/promotions/promotions-grid"
import { PromotionsBanner } from "@/components/sections/promotions/promotions-banner"

export default function PromotionsPage() {
  return (
    <>
      <Breadcrumb />
      <PromotionsHero />
      <PromotionsGrid />
      <PromotionsBanner />
    </>
  )
}
