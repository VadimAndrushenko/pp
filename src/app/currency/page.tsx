import { Breadcrumb } from "@/components/layout/breadcrumb"
import { CurrencyHero } from "@/components/sections/currency/currency-hero"
import { CurrencyFeatures } from "@/components/sections/currency/currency-features"
import { CurrencyCta } from "@/components/sections/currency/currency-cta"

export default function CurrencyPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <CurrencyHero />
        <CurrencyFeatures />
        <CurrencyCta />
      </div>
    </div>
  )
}
