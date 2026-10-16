import { Breadcrumb } from "@/components/layout/breadcrumb"
import { CurrencyHero } from "@/components/sections/currency/currency-hero"
import { CurrencyFeatures } from "@/components/sections/currency/currency-features"
import { CurrencyCta } from "@/components/sections/currency/currency-cta"

export const revalidate = 5400

export default function CurrencyPage() {
  return (
    <>
      <Breadcrumb />
      <CurrencyHero />
      <CurrencyFeatures />
      <CurrencyCta />
    </>
  )
}
