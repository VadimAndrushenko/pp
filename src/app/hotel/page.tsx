import { Breadcrumb } from "@/components/layout/breadcrumb"
import { HotelHero } from "@/components/sections/hotel/hotel-hero"
import { HotelAmenities } from "@/components/sections/hotel/hotel-amenities"
import { HotelCta } from "@/components/sections/hotel/hotel-cta"

export default function HotelPage() {
  return (
    <div className="px-5 py-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb />
        <HotelHero />
        <HotelAmenities />
        <HotelCta />
      </div>
    </div>
  )
}
