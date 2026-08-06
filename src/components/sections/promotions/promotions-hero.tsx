export function PromotionsHero({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-text-primary">
        Акции и бонусы
      </h1>
      <p className="text-sm text-text-secondary">
        Спецпредложения и бонусная программа для наших гостей.
      </p>
    </div>
  )
}
