import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import type { ReactNode } from "react"

interface BookingButtonProps {
  href?: string
  label?: string
  icon?: ReactNode
  className?: string
}

const WHATSAPP_HREF = "https://wa.me/84855559797"

export function BookingButton({
  href = WHATSAPP_HREF,
  label = "Забронировать стол",
  icon = <Phone className="h-5 w-5 lg:h-7 lg:w-7" />,
  className,
}: BookingButtonProps) {
  return (
    <Button
      variant="solid"
      size="full"
      as="a"
      href={href}
      className={className}
    >
      {icon}
      {label}
    </Button>
  )
}
