"use client"

import { createContext, useContext, useCallback, useEffect, useState, type ReactNode } from "react"
import useEmblaCarousel from "embla-carousel-react"
import type { UseEmblaCarouselType } from "embla-carousel-react"

type EmblaCarouselType = NonNullable<UseEmblaCarouselType[1]>
interface EmblaOptionsType {
  loop?: boolean
  align?: "start" | "center" | "end"
  slidesToScroll?: number
  skipSnaps?: boolean
  duration?: number
  [key: string]: unknown
}

interface CarouselContextValue {
  emblaRef: (node: HTMLElement | null) => void
  emblaApi: EmblaCarouselType | undefined
  canScrollPrev: boolean
  canScrollNext: boolean
  selectedIndex: number
  scrollSnapList: number[]
}

const CarouselContext = createContext<CarouselContextValue | null>(null)

export function useCarousel() {
  const ctx = useContext(CarouselContext)
  if (!ctx) throw new Error("useCarousel must be used within CarouselProvider")
  return ctx
}

interface CarouselProviderProps {
  children: ReactNode
  opts?: EmblaOptionsType
}

export function CarouselProvider({ children, opts }: CarouselProviderProps) {
  const options: EmblaOptionsType = {
    loop: false,
    align: "start",
    slidesToScroll: 1,
    skipSnaps: false,
    duration: 25,
    ...opts,
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnapList, setScrollSnapList] = useState<number[]>([])

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
    setSelectedIndex(api.selectedScrollSnap())
    setScrollSnapList(api.scrollSnapList())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("resize", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
      emblaApi.off("resize", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <CarouselContext.Provider
      value={{ emblaRef, emblaApi, canScrollPrev, canScrollNext, selectedIndex, scrollSnapList }}
    >
      {children}
    </CarouselContext.Provider>
  )
}
