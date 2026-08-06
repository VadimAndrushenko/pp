"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { X } from "lucide-react"
import type { GalleryPhoto } from "@/types"

type Phase = "idle" | "entering" | "open" | "leaving"

interface LightboxProps {
  photos: GalleryPhoto[]
  initialIndex: number
  onClose: () => void
}

export function Lightbox({ photos, initialIndex, onClose }: LightboxProps) {
  const [phase, setPhase] = useState<Phase>("entering")
  const [selectedIndex, setSelectedIndex] = useState(initialIndex)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: initialIndex })

  const close = useCallback(() => setPhase("leaving"), [])

  useEffect(() => {
    if (phase !== "entering") return
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
    const id = requestAnimationFrame(() => setPhase("open"))
    return () => cancelAnimationFrame(id)
  }, [phase])

  useEffect(() => {
    if (phase !== "leaving") return
    const id = setTimeout(() => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
      onClose()
    }, 350)
    return () => clearTimeout(id)
  }, [phase, onClose])

  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (phase !== "open") return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") emblaApi?.scrollNext()
      if (e.key === "ArrowLeft") emblaApi?.scrollPrev()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [phase, emblaApi, close])

  if (phase === "idle") return null

  const current = photos[selectedIndex]

  return (
    <div
      className={`fixed inset-0 z-50 ${phase === "leaving" ? "animate-overlay-leave" : "animate-overlay-enter"}`}
      style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={close}
    >
      <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
        <div
          className={`relative h-[70vh] w-full max-w-6xl max-sm:h-[65vh] ${
            phase === "leaving" ? "animate-modal-leave" : "animate-modal-enter"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Закрыть"
            className="absolute top-4 right-4 z-20 flex aspect-square w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 hover:rotate-90 hover:bg-white/20"
          >
            <X size={20} strokeWidth={2.5} />
          </button>

          <div ref={emblaRef} className="h-full overflow-hidden">
            <div className="flex h-full">
              {photos.map((photo) => (
                <div key={photo.id} className="relative h-full min-w-0 flex-[0_0_100%] px-1.5">
                  <div
                    className="h-full w-full bg-contain bg-center bg-no-repeat bg-surface"
                    style={{ backgroundImage: `url(${photo.image})` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center gap-1 border-t border-white/10 bg-black/85 p-4 backdrop-blur-sm">
            <p className="text-xl font-display uppercase tracking-wider text-white">
              {current?.title}
            </p>
            <p className="text-xs text-white/70">{current?.dateLabel}</p>
          </div>

          <div className="absolute top-4 left-4 z-10 rounded-full bg-black/40 px-3 py-1.5 text-xs font-display uppercase tracking-wider text-white">
            {selectedIndex + 1}/{photos.length}
          </div>
        </div>
      </div>
    </div>
  )
}
