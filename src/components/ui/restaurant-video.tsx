"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export function RestaurantVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="section-py">
      <div
        className="relative w-full aspect-video max-h-[620px] rounded-card overflow-hidden cursor-pointer bg-cover bg-center bg-surface group hover-lift"
        style={{
          backgroundImage: isPlaying ? "none" : "url('https://picsum.photos/seed/poidem-interior/800/450')",
        }}
        onClick={() => !isPlaying && setIsPlaying(true)}
      >
        {isPlaying ? (
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            poster="https://picsum.photos/seed/poidem-interior/800/450"
          >
            <source src="/video/restaurant.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-all duration-500 group-hover:scale-110">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </div>
            <div className="text-center">
              <p className="text-2xl max-md:text-lg font-display uppercase tracking-wider text-white drop-shadow-lg">
                Посмотрите наш ресторан
              </p>
              <p
                className="text-sm font-display uppercase tracking-wider mt-1 drop-shadow-lg text-accent"
              >
                Короткое видео о нас
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}