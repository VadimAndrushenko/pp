function BurstLines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`${className} drop-shadow-accent-dim`}
      fill="none"
      aria-hidden="true"
    >
      <line x1="14" y1="30" x2="55" y2="22" className="stroke-accent" strokeWidth="5" strokeLinecap="round" />
      <line x1="14" y1="45" x2="50" y2="41" className="stroke-accent" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="60" x2="58" y2="60" className="stroke-accent" strokeWidth="5" strokeLinecap="round" />
      <line x1="14" y1="75" x2="50" y2="79" className="stroke-accent" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="90" x2="55" y2="98" className="stroke-accent" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export function ContactsHero() {
  return (
    <section className="section-py">
      <div className="text-center">
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-4 max-sm:gap-2">
          <BurstLines className="h-[120px] w-[120px] shrink-0 scale-x-[-1] max-lg:h-20 max-lg:w-20 max-sm:h-16 max-sm:w-16" />
          <h1 className="font-display font-extrabold uppercase text-8xl text-text-primary max-lg:text-7xl max-sm:text-5xl">
            КОНТАКТЫ
          </h1>
          <BurstLines className="h-[120px] w-[120px] shrink-0 max-lg:h-20 max-lg:w-20 max-sm:h-16 max-sm:w-16" />
        </div>
        <p className="mt-2 font-display font-bold uppercase text-5xl text-accent max-lg:text-4xl max-sm:text-2xl">
          МЫ ВСЕГДА НА СВЯЗИ!
        </p>
      </div>
    </section>
  )
}