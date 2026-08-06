import Image from "next/image"
import { Truck, Award, Users, PackageCheck, Clock } from "lucide-react"

const features = [
  { icon: Truck, label: "Быстрая доставка" },
  { icon: Award, label: "Премиальное качество" },
  { icon: Users, label: "Профессиональные кальянщики" },
  { icon: PackageCheck, label: "Полный комплект оборудования" },
  { icon: Clock, label: "Работаем 24/7" },
]

export function HookahOutHero({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center ${className ?? ""} md:min-h-[320px] min-[550px]:max-md:min-h-[250px]`}>
      <div className="space-y-2.5 w-[40%] max-lg:w-[60%]">
        <h1 className="text-9xl font-display font-bold uppercase tracking-tight text-text-primary md:mb-7 max-lg:text-7xl max-md:text-5xl max-sm:text-5xl">
          <span className="block text-text-primary">Выездной</span>
          <span className="block text-accent">кальян</span>
        </h1>
        <p className="text-3xl tracking-wide font-medium text-text-secondary max-lg:text-2xl max-md:text-lg max-sm:text-base">
          Привезём полностью готовый кальян в отель, на виллу или в апартаменты. Всё для вашего комфорта и отдыха!
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