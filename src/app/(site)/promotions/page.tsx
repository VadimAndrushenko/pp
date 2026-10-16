import { Breadcrumb } from "@/components/layout/breadcrumb"
import { PromotionsHero } from "@/components/sections/promotions/promotions-hero"
import { PromotionsGrid } from "@/components/sections/promotions/promotions-grid"

export const revalidate = 5400
// import { PromotionsBanner } from "@/components/sections/promotions/promotions-banner"

export default function PromotionsPage() {
  return (
    <>
      <Breadcrumb />
      <PromotionsHero />
      <PromotionsGrid />
      {/* <PromotionsBanner /> */}
    </>
  )
}
