import { Breadcrumb } from "@/components/layout/breadcrumb"
import { IslandInfoHero } from "@/components/sections/island-info/island-info-hero"
import { IslandInfoGrid } from "@/components/sections/island-info/island-info-grid"

export const revalidate = 5400

export default function IslandInfoPage() {
  return (
    <>
      <Breadcrumb />
      <IslandInfoHero />
      <IslandInfoGrid />
    </>
  )
}
