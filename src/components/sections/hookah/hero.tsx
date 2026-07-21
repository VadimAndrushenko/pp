import Image from "next/image"

export function HookahHero() {
  return (
    <div className="relative flex items-center mb-10 md:min-h-[320px] min-[550px]:max-md:min-h-[250px]">
      <div className="space-y-2.5 w-[40%] max-lg:w-[60%]">
        <h1 className="text-9xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)] md:mb-7 max-lg:text-7xl max-md:text-5xl max-sm:text-5xl">
          Кальяны
        </h1>
        <p className="text-5xl text-[var(--color-accent)] font-display uppercase tracking-wider md:mb-5 max-lg:text-3xl max-md:text-xl max-sm:text-lg">
          Более 40 вкусов на выбор
        </p>
        <p className="text-3xl tracking-wide font-medium text-[var(--color-text-secondary)] max-lg:text-2xl max-md:text-lg max-sm:text-base">
          Премиальные кальяны в ресторане и с выездом на дом или мероприятие.
        </p>
      </div>
      <div className="absolute bottoom-11 right-0 w-[100%] h-[150%] rounded-[var(--radius-card)] -z-10 min-[460px]:max-sm:h-[170%]">
        <Image
          src="/images/hookah/shisha.png"
          alt="Кальян"
          fill
          className="lg:object-contain max-lg:object-cover"
        />
      </div>
    </div>
  )
}
