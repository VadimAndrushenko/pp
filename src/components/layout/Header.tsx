"use client";

import { useState, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-4 py-3 max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🪙</span>
            <div className="leading-tight">
              <span className="block text-lg font-black tracking-widest text-white">
                POIDEM
              </span>
              <span className="block text-lg font-black tracking-widest text-[#ff6a00]">
                POZHREM!
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-wider">
            <div className="flex gap-4 text-gray-300">
              <div className="text-right">
                <div>ПН – ВТ</div>
                <div className="text-white">07:00 – 02:00</div>
              </div>
              <div className="text-right">
                <div>СР – ВС</div>
                <div className="inline-block rounded-full border border-[#ff6a00] px-3 py-0.5 text-[#ff6a00]">
                  24/7
                </div>
              </div>
            </div>
            <button className="flex items-center gap-1 rounded-full border border-gray-600 px-3 py-1 text-white transition hover:border-[#ff6a00]">
              RU <ChevronDown size={14} />
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="text-white md:hidden"
            aria-label="Меню"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
