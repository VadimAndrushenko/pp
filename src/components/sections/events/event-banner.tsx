import Image from "next/image"

export function EventBanner() {
  return (
    <div
      className="relative section-py min-h-[230px] flex items-center overflow-hidden rounded-card border border-border aspect-[16/6] max-sm:aspect-auto"
    >
      <Image
        src="/images/events/karaoke-banner.png"
        alt="Караоке и танцы"
        fill
        className="relative object-contain max-sm:object-cover max-sm:object-[20%_50%]"
      />
      <p className="relative w-full pl-[50%] leading-snug">
        <span className="block text-3xl max-lg:text-xl uppercase text-text-primary max-md:text-base max-sm:text-sm">
          ПОСЛЕ ОСНОВНОЙ ПРОГРАММЫ —
        </span>
        <span className="my-3 max-lg:my-1 block font-display font-extrabold uppercase text-8xl max-lg:text-6xl text-accent max-md:text-4xl max-sm:text-2xl">
          КАРАОКЕ И ТАНЦЫ
        </span>
        <span className="block font-bold uppercase text-4xl max-lg:text-3xl text-text-primary max-md:text-xl max-sm:text-base">
          ДО САМОГО УТРА!
        </span>
      </p>
    </div>
  )
}