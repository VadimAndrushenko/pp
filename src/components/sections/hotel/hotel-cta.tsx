import { Button } from "@/components/ui/button"

export function HotelCta({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Button variant="solid" size="full" as="a" href="https://wa.me/84855559797">
        Забронировать номер
      </Button>
    </div>
  )
}
