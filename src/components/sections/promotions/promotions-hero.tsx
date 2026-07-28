export function PromotionsHero({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
        Акции и бонусы
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)]">
        Спецпредложения и бонусная программа для наших гостей.
      </p>
    </div>
  )
}
