"use client";

import { X } from "lucide-react";

const links = [
  "Меню",
  "Афиша",
  "Доставка",
  "Кальянное меню",
  "Акции",
  "Отель",
  "О нас",
  "Контакты",
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-[#0a0a0a] transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white" aria-label="Закрыть">
          <X size={28} />
        </button>
      </div>
      <nav className="flex flex-col items-center gap-6 mt-16">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-2xl font-bold tracking-widest uppercase text-white transition hover:text-[#ff6a00]"
            onClick={onClose}
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
}
