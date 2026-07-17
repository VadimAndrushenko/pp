"use client";

import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const items = [
  { label: "КАРАОКЕ ВЕЧЕР", date: "23 МАЯ", isVideo: true },
  { label: "ДЕНЬ РОЖДЕНИЯ РЕСТОРАНА", date: "20 МАЯ", isVideo: false },
  { label: "КВИЗ «ПОЙДЁМ ПОЖРЁМ»", date: "18 МАЯ", isVideo: true },
  { label: "БИЗНЕС-ВСТРЕЧА", date: "15 МАЯ", isVideo: false },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = items.map(() => ({ src: "" as const }));

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-black tracking-wider uppercase font-heading">
            ФОТО И ВИДЕООТЧЁТЫ
          </h2>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1 text-sm text-[#ff6a00] transition hover:text-[#ff7a1a]"
          >
            СМОТРЕТЬ ВСЁ <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {items.map((item, i) => (
            <button
              key={item.label}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#2a1414] to-[#1a1a1a] border border-white/10"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl">📸</span>
              </div>
              {item.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 text-black">
                    <Play size={20} fill="currentColor" />
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-overlay p-3">
                <div className="text-xs font-bold tracking-wider text-white">
                  {item.label}
                </div>
                <div className="text-[10px] text-gray-400">{item.date}</div>
              </div>
            </button>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
        />
      </div>
    </section>
  );
}
