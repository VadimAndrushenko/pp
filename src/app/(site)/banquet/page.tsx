import { Breadcrumb } from "@/components/layout/breadcrumb"
import { BanquetHero } from "@/components/sections/banquet/hero"
import { BanquetFeatures, BanquetOccasions } from "@/components/sections/banquet/features"
import { BanquetCta } from "@/components/sections/banquet/cta"

export const metadata = {
  title: "Аренда зала и выступления — Пойдём Пожрём",
  description:
    "Аренда зала, сцены и оборудования для банкетов, корпоративов, концертов и тематических вечеров в ресторане «Пойдём Пожрём» на Фукуоке.",
}

export default function BanquetPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Аренда и выступления" }]} />
      <BanquetHero />
      <BanquetFeatures />
      <BanquetOccasions />
      <BanquetCta />
    </>
  )
}