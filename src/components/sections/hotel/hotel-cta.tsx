import { BookingButton } from "@/components/ui/booking-button"

export function HotelCta({ className }: { className?: string }) {
  return (
    <div className={className}>
      <BookingButton label="Забронировать номер" />
    </div>
  )
}
