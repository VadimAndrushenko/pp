export function CurrencyHero({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-text-primary">
        Обмен рублей
      </h1>
      <p className="text-sm font-display uppercase tracking-wider text-accent" >
        Выгодный курс, быстро и безопасно
      </p>
      <p className="text-sm text-text-secondary">
        Обмен валюты на территории ресторана. Лучший курс на острове.
      </p>
    </div>
  )
}
