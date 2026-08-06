import { Breadcrumb } from "@/components/layout/breadcrumb"
import { IslandInfoHero } from "@/components/sections/island-info/island-info-hero"
import { IslandInfoGrid } from "@/components/sections/island-info/island-info-grid"

export default function IslandInfoPage() {
  return (
    <>
      <Breadcrumb />
      <IslandInfoHero className="section-py" />
      <IslandInfoGrid className="section-py" />
    </>
  )
}
