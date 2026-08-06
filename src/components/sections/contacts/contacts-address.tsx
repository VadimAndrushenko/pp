import Image from "next/image"
import { MapPin, Clock } from "lucide-react"

export function ContactsAddress() {
  return (
    <section className="section-py">
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <div className="relative a w-full overflow-hidden rounded-card border border-border min-h-[300px]">
          <Image
            src="/images/contacts/facade.png"
            alt="Фасад ресторана Poidem Pozhrem"
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-0 top-0 p-5">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <h3 className="font-display font-bold uppercase text-base sm:text-xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Наш адрес</h3>
            </div>
            <p className="pt-2 text-xs sm:text-base text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              97 Trần Hưng Đạo, Дương Đông, Phú Quốc
              <br />
              2 этаж (вход через Holiday Center)
            </p>
          </div>
        </div>

      <div className="flex gap-5 rounded-card border border-border p-5 min-h-[200px] sm:min-h-[260px] max-sm:flex-col max-sm:p-3">
        <div className="flex flex-col justify-center flex-1">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-accent" />
            <h3 className="font-display font-bold uppercase text-base sm:text-xl max-sm:text-sm text-text-primary">
              Режим работы
            </h3>
          </div>

          <p className="mt-4 font-display font-extrabold uppercase text-6xl max-sm:text-5xl text-accent">
            24/7
          </p>
          <p className="mt-2 text-lg max-sm:text-base uppercase text-white">Все 7 дней в неделю</p>
          <hr className="mt-2 border-gray-600" />

          <div className="mt-4 space-y-3 text-xl max-sm:text-sm max-sm:flex justify-between gap-3">
            <div>
              <p className="font-display font-bold uppercase text-accent">Кухня и бар</p>
              <p className="text-white">Круглосуточно</p>
            </div>
            <div>
              <p className="font-display font-bold uppercase text-accent">Завтраки / Коворкинг</p>
              <p className="text-text-secondary">Ежедневно с 08:00 до 17:00</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-sm:flex-row max-sm:mt-2 items-center justify-center gap-4 max-sm:gap-3">
          <div className="text-center">
            <div className="mb-2 flex items-center justify-center gap-1.5">
              <MapPin className="h-4 w-4" style={{ color: "#FC3F1D" }} />
              <span className="text-xs max-sm:text-[11px] font-medium text-text-primary">Яндекс Карты</span>
            </div>
            <div className="relative h-28 w-28 max-sm:h-36 max-sm:w-36 overflow-hidden rounded-sm border border-border">
              <Image src="/images/contacts/qr-yandex.png" alt="QR-код Яндекс Карты" fill className="object-cover" />
            </div>
          </div>

          <div className="text-center">
            <div className="mb-2 flex items-center justify-center gap-1.5">
              <MapPin className="h-4 w-4" style={{ color: "#4285F4" }} />
              <span className="text-xs max-sm:text-[11px] font-medium text-text-primary">Google Maps</span>
            </div>
            <div className="relative h-28 w-28 max-sm:h-36 max-sm:w-36 overflow-hidden rounded-sm border border-border">
              <Image src="/images/contacts/qr-google.png" alt="QR-код Google Maps" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}