export function DeliveryHero() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 mb-8">
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] mb-2">
          Доставка
        </h1>
        <p className="text-sm font-display uppercase tracking-wider mb-3" style={{ color: "var(--color-accent)" }}>
          Еды, напитков и кальянов
        </p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Быстрая и надёжная доставка по всему острову.
        </p>
      </div>
      <div
        className="w-full lg:w-[40%] h-48 rounded-[var(--radius-card)] bg-cover bg-center mt-6 lg:mt-0"
        style={{ backgroundImage: "url('https://picsum.photos/seed/poidem-delivery-hero/600/400')", backgroundColor: "var(--color-surface)" }}
      />
    </div>
  )
}
