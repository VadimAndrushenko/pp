import Image from "next/image"

const deliveryImages = ["/images/hookah/delivery-1.png", "/images/hookah/delivery-2.png"]

export function HookahDelivery() {
  return (
    <section className="mb-12">
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
    </section>
  )
}
