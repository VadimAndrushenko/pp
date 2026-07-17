import { MapPin, ArrowRight } from "lucide-react";

export default function RouteBlock() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <a
          href="https://maps.google.com/?q=97+Trần+Hưng+Đạo+Dương+Đông+Phú+Quốc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-[#ff6a00] p-4 transition hover:bg-[#ff6a00]/5 group"
        >
          <MapPin size={24} className="text-[#ff6a00]" />
          <span className="flex-1 text-base font-bold tracking-wider uppercase text-white">
            ПОСТРОИТЬ МАРШРУТ
          </span>
          <ArrowRight
            size={20}
            className="text-[#ff6a00] transition-transform group-hover:translate-x-1"
          />
        </a>

        <p className="mt-3 text-xs text-gray-500 text-center">
          Выберите карту
        </p>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <a
            href="https://maps.google.com/?q=97+Trần+Hưng+Đạo+Dương+Đông+Phú+Quốc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#ff6a00] hover:bg-[#ff6a00]/5"
          >
            <span className="text-lg">📍</span> Google Maps
          </a>
          <a
            href="https://yandex.ru/maps/?text=97+Trần+Hưng+Đạo+Dương+Đông+Phú+Quốc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-[#ff6a00] hover:bg-[#ff6a00]/5"
          >
            <span className="text-lg">🗺️</span> Яндекс Карты
          </a>
        </div>
      </div>
    </section>
  );
}
