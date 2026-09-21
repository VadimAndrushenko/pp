"use client"

import { useEffect, useState } from "react"

/**
 * Returns the natural aspect ratio (width/height) of an image once it loads.
 * Falls back to 1 while unknown. Use with a CSS grid cell that has
 * overflow:hidden so the <img> can stretch while excess is clipped.
 */
export function useNaturalAspect(src?: string | null): number {
  const [ratio, setRatio] = useState<number>(1)

  useEffect(() => {
    if (!src) return
    let cancelled = false
    const img = new Image()
    img.onload = () => {
      if (cancelled || !img.naturalWidth || !img.naturalHeight) return
      setRatio(img.naturalWidth / img.naturalHeight)
    }
    img.src = src
    return () => {
      cancelled = true
    }
  }, [src])

  return ratio
}
