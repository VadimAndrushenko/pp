"use client"

import { useEffect, useState } from "react"
import type { GalleryPhoto } from "@/types"
import { Card } from "@/components/ui/card"
import { Lightbox } from "@/components/ui/lightbox"
import { useNaturalAspect } from "@/hooks/use-natural-aspect"

interface AlbumGroup {
  dateKey: string
  dateLabel: string
  photos: GalleryPhoto[]
}

function groupByDate(photos: GalleryPhoto[]): AlbumGroup[] {
  const map = new Map<string, AlbumGroup>()
  for (const photo of photos) {
    const group = map.get(photo.dateKey) ?? { dateKey: photo.dateKey, dateLabel: photo.dateLabel, photos: [] }
    group.photos.push(photo)
    map.set(photo.dateKey, group)
  }
  return [...map.values()].sort((a, b) => (a.dateKey < b.dateKey ? 1 : -1))
}

function scrollToDate(dateKey: string) {
  document.getElementById(`album-${dateKey}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
}

function PhotoThumb({ photo, onOpen }: { photo: GalleryPhoto; onOpen: () => void }) {
  const ratio = useNaturalAspect(photo.image)

  return (
    <Card
      className="relative cursor-pointer overflow-hidden p-0"
      onClick={onOpen}
    >
      {/* Фото растягивается на весь контейнер карточки, сохраняя натуральные
          пропорции; всё, что выходит за пределы карточки, обрезается overflow-hidden */}
      <div
        className="relative w-full overflow-hidden bg-surface"
        style={{ aspectRatio: `${ratio} / 1` }}
      >
        <img
          src={photo.image}
          alt={photo.title}
          width={1600}
          height={1200}
          className="block h-full w-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="border-t border-border bg-surface p-3">
        <p className="font-display uppercase leading-tight text-text-primary">{photo.title}</p>
      </div>
    </Card>
  )
}

export function PhotoAlbums({ photos }: { photos: GalleryPhoto[] }) {
  const [activeAlbum, setActiveAlbum] = useState<{ photos: GalleryPhoto[]; index: number } | null>(null)
  const albums = groupByDate(photos)

  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""))
    const release = new URLSearchParams(window.location.search).get("release") || ""
    if (!hash || !release) return

    const target = albums.find((a) => `album-${a.dateKey}` === hash && a.dateKey === release)
    if (!target) return

    const timer = window.setTimeout(() => {
      window.document.getElementById(`album-${target.dateKey}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setActiveAlbum({ photos: target.photos, index: 0 })
    }, 100)

    return () => window.clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albums])

  return (
    <section id="photos" className="section-py">
      <h2 className="section-heading font-display font-bold uppercase text-text-primary mb-2">
        Фото отчёты
        
        <p className="text-sm font-display uppercase tracking-wider mb-6 mt-2 text-accent" >
          Все фото с наших мероприятий
        </p>
      </h2>

      <div className="flex flex-col gap-10">
        {albums.map((album) => (
          <div key={album.dateKey} id={`album-${album.dateKey}`}>
            <h3 className="section-heading font-display font-bold uppercase text-text-primary mb-6">
              {album.dateLabel}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {album.photos.map((photo, index) => (
                <PhotoThumb
                  key={photo.id}
                  photo={photo}
                  onOpen={() => {
                    scrollToDate(album.dateKey)
                    setActiveAlbum({ photos: album.photos, index })
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {activeAlbum && (
        <Lightbox
          key={`${activeAlbum.index}-${activeAlbum.photos.length}`}
          photos={activeAlbum.photos}
          initialIndex={activeAlbum.index}
          onClose={() => setActiveAlbum(null)}
        />
      )}
    </section>
  )
}
