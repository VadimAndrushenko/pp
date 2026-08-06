export function IslandInfoHero({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h1 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-text-primary">
        Инфо-Фукуок
      </h1>
      <p className="text-sm font-display uppercase tracking-wider text-accent" >
        Вся полезная информация об острове
      </p>
      <p className="text-sm text-text-secondary">
        Полезная информация для туристов и жителей острова Фукуок.
      </p>
    </div>
  )
}
