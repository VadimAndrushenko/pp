import Image from "next/image"

export function HookahHero({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center ${className ?? ""} min-h-[320px] max-md:min-h-[auto] min-[550px]:max-md:min-h-[250px]`}>
      <div className="space-y-2.5 w-[40%] max-lg:w-[60%]">
        <h1 className="text-9xl font-display font-bold uppercase tracking-tight text-text-primary mb-7 max-md:mb-0 max-lg:text-7xl max-md:text-5xl max-sm:text-5xl">
          Кальяны
        </h1>
        <p className="text-5xl text-accent font-display uppercase tracking-wider mb-5 max-md:mb-0 max-lg:text-3xl max-md:text-xl max-sm:text-lg">
          Более 40 вкусов на выбор
        </p>
        <p className="text-3xl tracking-wide font-medium text-text-secondary max-lg:text-2xl max-md:text-lg max-sm:text-base">
          Премиальные кальяны в ресторане и с выездом на дом или мероприятие.
        </p>
      </div>
      <div className="absolute bottoom-11 right-0 w-[100%] h-[150%] rounded-card -z-10 min-[460px]:max-sm:h-[170%]">
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
