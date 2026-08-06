import { Breadcrumb } from "@/components/layout/breadcrumb"
import { HotelHero } from "@/components/sections/hotel/hotel-hero"
import { HotelAmenities } from "@/components/sections/hotel/hotel-amenities"
import { HotelCta } from "@/components/sections/hotel/hotel-cta"

export default function HotelPage() {
  return (
    <>
      <Breadcrumb />
      <HotelHero className="section-py" />
      <HotelAmenities className="section-py" />
      <HotelCta className="section-py" />
    </>
  )
}
