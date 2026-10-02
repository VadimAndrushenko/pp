import { BookingButton } from "@/components/ui/booking-button"

export function HotelCta() {
  return (
    <div className="section-py">
      <BookingButton href="/contacts" label="Забронировать номер" />
    </div>
  )
}
