"use client"

import { useState } from "react"
import type { GalleryPhoto } from "@/types"
import { Card } from "@/components/ui/card"
import { Lightbox } from "@/components/ui/lightbox"

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

export function PhotoAlbums({ photos, className }: { photos: GalleryPhoto[]; className?: string }) {
  const [activeAlbum, setActiveAlbum] = useState<{ photos: GalleryPhoto[]; index: number } | null>(null)
  const albums = groupByDate(photos)

  return (
    <section id="photos" className={className}>
      <h2 className="section-heading font-display font-bold uppercase text-text-primary mb-2">
        Фото отчёты
        
        <p className="text-sm font-display uppercase tracking-wider mb-6 mt-2 text-accent" >
          Все фото с наших мероприятий
        </p>
      </h2>
      
      <div className="flex flex-col gap-10">
        {albums.map((album) => (
          <div key={album.dateKey}>
            <h3 className="section-heading font-display font-bold uppercase text-text-primary mb-6">
              {album.dateLabel}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {album.photos.map((photo, index) => (
                <Card
                  key={photo.id}
                  className="relative cursor-pointer overflow-hidden p-0"
                  onClick={() => setActiveAlbum({ photos: album.photos, index })}
                >
                  <div
                    className="aspect-square w-full bg-cover bg-center bg-surface"
                    style={{ backgroundImage: `url(${photo.image})` }}
                  />
                  <div className="border-t border-border bg-surface p-3">
                    <p className=" font-display uppercase leading-tight text-text-primary">
                      {photo.title}
                    </p>
                  </div>
                </Card>
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
