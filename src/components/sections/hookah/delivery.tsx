import Image from "next/image"
import Link from "next/link"

const deliveryImages = ["/images/hookah/delivery-1.png", "/images/hookah/delivery-2.png"]

export function HookahDelivery({ className }: { className?: string }) {
  return (
    <section className={className}>
      <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-6">
        Выездной кальян на дом или мероприятие
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {deliveryImages.map((src, i) => (
          <div key={i} className="rounded-[var(--radius-card)] border border-[var(--color-border)] overflow-hidden">
            <div className="relative w-full">
              <Image src={src} alt="" width={400} height={400} className="w-full h-auto" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Link
          href="/hookah/out"
          className="inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider transition-all duration-200 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white px-8 py-4 rounded-[var(--radius-card)] text-base"
        >
          Подробнее о выездном кальяне
        </Link>
      </div>
    </section>
  )
}
