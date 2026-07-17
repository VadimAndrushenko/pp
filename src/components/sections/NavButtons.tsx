import { Soup, Star, Bike, Video } from "lucide-react";

const buttons = [
  { icon: Soup, label: "МЕНЮ" },
  { icon: Star, label: "ЧТО СЕГОДНЯ?" },
  { icon: Bike, label: "ДОСТАВКА" },
  { icon: Video, label: "КАК У НАС" },
];

export default function NavButtons() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-4">
          {buttons.map((b) => (
            <a
              key={b.label}
              href="#"
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#ff6a00]/50 aspect-square p-4 transition hover:border-[#ff6a00] hover:bg-[#ff6a00]/5 group"
            >
              <b.icon
                size={40}
                className="text-[#ff6a00] transition-transform group-hover:scale-110"
              />
              <span className="text-sm font-black tracking-wider uppercase text-white text-center leading-tight">
                {b.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
