"use client";

import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import PaginationDots from "@/components/ui/PaginationDots";

const events = [
  { day: "15", month: "ИЮН", title: "КАРАОКЕ БАТЛ", time: "ПЯТНИЦА 20:00" },
  { day: "18", month: "ИЮН", title: "КВИЗ «ПОЙДЁМ ПОЖРЁМ»", time: "СУББОТА 19:30" },
  { day: "22", month: "ИЮН", title: "КАВЕР-ГРУППА THE ISLANDERS", time: "ВОСКРЕСЕНЬЕ 21:00" },
  { day: "25", month: "ИЮН", title: "DJ ВЕЧЕРИНКА", time: "ПОНЕДЕЛЬНИК 22:00" },
  { day: "28", month: "ИЮН", title: "БИЗНЕС-ЗАВТРАК", time: "ВТОРНИК 09:00" },
];

export default function EventsCarousel() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-black tracking-wider uppercase font-heading">
            АФИША МЕРОПРИЯТИЙ
          </h2>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1 text-sm text-[#ff6a00] transition hover:text-[#ff7a1a]"
          >
            СМОТРЕТЬ ВСЮ АФИШУ <ArrowRight size={16} />
          </a>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
          {events.map((event) => (
            <a
              key={event.title}
              href="#"
              className="flex-shrink-0 w-[260px] snap-start"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#2a1414] to-[#1a1a1a] border border-white/10">
                <Badge day={event.day} month={event.month} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl">🎉</span>
                </div>
              </div>
              <h3 className="mt-3 text-sm font-bold tracking-wider uppercase text-white">
                {event.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">{event.time}</p>
            </a>
          ))}
        </div>

        <PaginationDots total={5} active={0} />
      </div>
    </section>
  );
}
