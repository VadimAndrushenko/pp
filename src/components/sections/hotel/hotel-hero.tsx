export function HotelHero({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
        Отель
      </h1>
      <p className="text-sm font-display uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>
        Комфортное проживание на Фукуоке
      </p>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Уютные номера рядом с рестораном. Идеальное место для отдыха.
      </p>
    </div>
  )
}
