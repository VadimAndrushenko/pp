import { Breadcrumb } from "@/components/layout/breadcrumb"
import { CommunityHero } from "@/components/sections/community/community-hero"

export default function CommunityPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <CommunityHero />
      </div>
    </div>
  )
}
