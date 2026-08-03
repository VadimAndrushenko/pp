import { Card } from "@/components/ui/card"

interface Photo {
  id: string
  image: string
  title: string
  date: string
}

export function PhotosGrid({ photos, className }: { photos: Photo[]; className?: string }) {
  return (
    <section id="photos" className={className}>
      <h2 className="section-heading font-display font-bold uppercase text-[var(--color-text-primary)] mb-2">Фото отчёты</h2>
      <p className="text-sm font-display uppercase tracking-wider mb-6" style={{ color: "var(--color-accent)" }}>
        Все фото с наших мероприятий
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {photos.map((p) => (
          <Card key={p.id} className="relative overflow-hidden p-0 aspect-square">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${p.image})`, backgroundColor: "var(--color-surface)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-xs font-display uppercase text-white">{p.title}</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">{p.date}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
