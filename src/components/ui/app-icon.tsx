"use client"

import { DynamicIcon, type IconName } from "lucide-react/dynamic"

function toKebab(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .replace(/[0-9]+/g, (m) => `-${m}`)
    .toLowerCase()
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

export function AppIcon({
  name,
  className,
  strokeWidth,
}: {
  name: string
  className?: string
  strokeWidth?: number
}) {
  if (!name) return null
  return <DynamicIcon name={toKebab(name) as IconName} className={className} strokeWidth={strokeWidth} />
}