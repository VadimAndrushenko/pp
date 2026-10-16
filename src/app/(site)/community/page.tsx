import { Breadcrumb } from "@/components/layout/breadcrumb"
import { CommunityHero } from "@/components/sections/community/community-hero"

export const revalidate = 5400

export default function CommunityPage() {
  return (
    <>
      <Breadcrumb />
      <CommunityHero />
    </>
  )
}
