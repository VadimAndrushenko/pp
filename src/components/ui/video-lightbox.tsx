"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"
import type { GalleryVideo } from "@/types"

type Phase = "idle" | "entering" | "open" | "leaving"

interface VideoLightboxProps {
  videos: GalleryVideo[]
  initialIndex: number
  onClose: () => void
}

export function VideoLightbox({ videos, initialIndex, onClose }: VideoLightboxProps) {
  const [phase, setPhase] = useState<Phase>("entering")
  const [selectedIndex, setSelectedIndex] = useState(initialIndex)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ startIndex: initialIndex })

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
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
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

  const current = videos[selectedIndex]

  return (
    <div
      className={`fixed inset-0 z-50 ${phase === "leaving" ? "animate-overlay-leave" : "animate-overlay-enter"}`}
      style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={close}
    >
      <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
        <div
          className={`relative flex h-[85vh] w-full max-w-6xl flex-col max-sm:h-[80vh] ${
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

          <div className="relative min-h-0 flex-1">
            {canScrollPrev && (
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Предыдущее видео"
                className="absolute left-0 top-1/2 z-20 flex aspect-square w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-all duration-200 hover:bg-white/25 max-sm:w-8"
              >
                <ChevronLeft size={24} strokeWidth={2.5} />
              </button>
            )}
            {canScrollNext && (
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Следующее видео"
                className="absolute right-0 top-1/2 z-20 flex aspect-square w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-all duration-200 hover:bg-white/25 max-sm:w-8"
              >
                <ChevronRight size={24} strokeWidth={2.5} />
              </button>
            )}

            <div className="absolute top-4 left-4 z-10 rounded-full bg-black/40 px-3 py-1.5 text-xs font-display uppercase tracking-wider text-white">
              {selectedIndex + 1}/{videos.length}
            </div>

            <div ref={emblaRef} className="h-full overflow-hidden">
              <div className="flex h-full">
                {videos.map((video, index) => (
                  <div key={video.id} className="relative h-full min-w-0 flex-[0_0_100%] px-1.5">
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="relative h-full w-full max-w-5xl bg-black overflow-hidden">
                        {selectedIndex === index ? (
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="h-full w-full"
                            frameBorder="0"
                            title={video.title}
                          />
                        ) : (
                          <div
                            className="w-full h-full bg-cover bg-center bg-surface"
                            style={{
                              backgroundImage: `url(https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg)`,
                            }}
                          >
                            <div className="w-full h-full flex items-center justify-center">
                              <div
                                className="w-10 h-10 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                              >
                                <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 flex shrink-0 flex-col items-center gap-1 border-t border-white/10 bg-black/85 p-4 backdrop-blur-sm">
            <p className="text-xl font-display uppercase tracking-wider text-white">
              {current?.title}
            </p>
            <p className="text-xs text-white/70">{current?.dateLabel}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
