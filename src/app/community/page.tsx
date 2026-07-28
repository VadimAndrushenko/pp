import { Breadcrumb } from "@/components/layout/breadcrumb"
import { CommunityHero } from "@/components/sections/community/community-hero"

export default function CommunityPage() {
  return (
    <>
      <Breadcrumb />
      <CommunityHero className="py-8" />
    </>
  )
}
