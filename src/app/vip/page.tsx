import { Breadcrumb } from "@/components/layout/breadcrumb"
import { VipHero } from "@/components/sections/vip/vip-hero"
import { VipBenefits } from "@/components/sections/vip/vip-benefits"
import { VipCard } from "@/components/sections/vip/vip-card"

export default function VipPage() {
  return (
    <>
      <Breadcrumb />
      <VipHero />
      <VipBenefits />
      <VipCard />
    </>
  )
}
