import { Button } from "@/components/ui/button"
import { getSiteSettings } from "@/lib/data/settings"
import { Phone } from "lucide-react"
import type { ReactNode } from "react"

interface BookingButtonProps {
  href?: string
  label?: string
  icon?: ReactNode
  size?: "sm" | "md" | "lg" | "full"
  className?: string
}

export async function BookingButton({
  href,
  label = "Забронировать стол",
  icon = <Phone className="h-8 w-8 max-sm:h-6 max-sm:w-6" />,
  size = "full",
  className,
}: BookingButtonProps) {
  const { links } = await getSiteSettings()
  return (
    <Button
      variant="solid"
      size={size}
      as="a"
      href={href ?? links.bookingForm}
      className={"gap-3 max-sm:gap-2 " + (className ?? "")}
    >
      {icon}
      {label}
    </Button>
  )
}
