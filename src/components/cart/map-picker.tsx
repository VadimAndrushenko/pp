"use client"

import dynamic from "next/dynamic"
import type { MapPickerInnerProps } from "./map-picker-inner"

export type MapPickerProps = MapPickerInnerProps

const MapPickerInner = dynamic(() => import("./map-picker-inner"), {
  ssr: false,
  loading: () => (
    <div className="space-y-2">
      <div className="h-10 rounded-full bg-bg/60 animate-pulse" />
      <div className="h-[50vh] min-h-[300px] rounded-xl bg-bg/60 animate-pulse" />
    </div>
  ),
})

export function MapPicker(props: MapPickerInnerProps) {
  return <MapPickerInner {...props} />
}
