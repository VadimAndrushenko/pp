import { Breadcrumb } from "@/components/layout/breadcrumb"
import { VipHero } from "@/components/sections/vip/vip-hero"
import { VipBenefits } from "@/components/sections/vip/vip-benefits"
import { VipCard } from "@/components/sections/vip/vip-card"

export default function VipPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <VipHero />
        <VipBenefits />
        <VipCard />
      </div>
    </div>
  )
}
