export function HotelHero({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-text-primary">
        Отель
      </h1>
      <p className="text-sm font-display uppercase tracking-wider text-accent" >
        Комфортное проживание на Фукуоке
      </p>
      <p className="text-sm text-text-secondary">
        Уютные номера рядом с рестораном. Идеальное место для отдыха.
      </p>
    </div>
  )
}
