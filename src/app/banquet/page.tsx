import { Breadcrumb } from "@/components/layout/breadcrumb"
import { BanquetHero } from "@/components/sections/banquet/hero"
import { BanquetFeatures } from "@/components/sections/banquet/features"
import { BanquetCta } from "@/components/sections/banquet/cta"

export default function BanquetPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <BanquetHero />
        <BanquetFeatures />
        <BanquetCta />
      </div>
    </div>
  )
}
