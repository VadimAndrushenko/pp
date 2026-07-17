import { Coffee, Calendar, Cigarette, Camera } from "lucide-react";

const features = [
  {
    icon: Coffee,
    label: "РУССКАЯ, КАВКАЗСКАЯ, ВОСТОЧНАЯ, ЕВРОПЕЙСКАЯ И АЗИАТСКАЯ КУХНИ",
  },
  { icon: Calendar, label: "КАЖДЫЙ ДЕНЬ — МЕРОПРИЯТИЯ" },
  { icon: Cigarette, label: "ПРЕМИАЛЬНЫЕ КАЛЬЯНЫ" },
  { icon: Camera, label: "ФОТО- И ВИДЕООТЧЁТЫ" },
];

export default function NeonSlogan() {
  return (
    <section className="py-12 md:py-16 border-y border-[#ff6a00]/20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight uppercase font-heading neon-glow-pink">
              Я ВЫБИРАЮ
              <br />
              ВКУСНО
              <br />
              ЖИТЬ!
            </h2>
            <p className="mt-3 text-lg text-[#ff6a00] font-semibold">
              И ЭТО ЛУЧШЕЕ РЕШЕНИЕ СЕГОДНЯ
            </p>
          </div>

          <div className="flex md:flex-col gap-6 md:gap-4">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex flex-col items-center gap-1 text-center min-w-[80px]"
              >
                <f.icon size={28} className="text-[#ff6a00]" />
                <span className="text-[10px] font-semibold tracking-wider text-gray-300 uppercase leading-tight max-w-[120px]">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
