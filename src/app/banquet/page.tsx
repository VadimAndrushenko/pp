import { Breadcrumb } from "@/components/layout/breadcrumb"
import { BanquetHero } from "@/components/sections/banquet/hero"
import { BanquetFeatures } from "@/components/sections/banquet/features"
import { BanquetCta } from "@/components/sections/banquet/cta"

export default function BanquetPage() {
  return (
    <>
      <Breadcrumb />
      <BanquetHero className="py-8" />
      <BanquetFeatures className="py-8" />
      <BanquetCta className="py-8" />
    </>
  )
}
