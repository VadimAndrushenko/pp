import { Breadcrumb } from "@/components/layout/breadcrumb"
import { IslandInfoHero } from "@/components/sections/island-info/island-info-hero"
import { IslandInfoGrid } from "@/components/sections/island-info/island-info-grid"

export default function IslandInfoPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <IslandInfoHero />
        <IslandInfoGrid />
      </div>
    </div>
  )
}
