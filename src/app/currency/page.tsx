import { Breadcrumb } from "@/components/layout/breadcrumb"
import { CurrencyHero } from "@/components/sections/currency/currency-hero"
import { CurrencyFeatures } from "@/components/sections/currency/currency-features"
import { CurrencyCta } from "@/components/sections/currency/currency-cta"

export default function CurrencyPage() {
  return (
    <>
      <Breadcrumb />
      <CurrencyHero className="py-8" />
      <CurrencyFeatures className="py-8" />
      <CurrencyCta className="py-8" />
    </>
  )
}
