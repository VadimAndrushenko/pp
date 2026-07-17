"use client";

import { useState } from "react";
import PlayButton from "@/components/ui/PlayButton";
import VideoModal from "@/components/ui/VideoModal";

export default function VideoSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#ff6a00]/50">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a1414] to-[#1a1a1a]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">🏮</div>
                  <div className="text-xs">Фото интерьера (заглушка)</div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-overlay" />

            <div className="absolute inset-0 flex items-center justify-center">
              <PlayButton onClick={() => setModalOpen(true)} />
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h3 className="text-xl md:text-2xl font-black uppercase text-white">
                ПОСМОТРИТЕ НАШ РЕСТОРАН
              </h3>
              <p className="text-sm text-[#ff6a00] font-semibold">
                КОРОТКОЕ ВИДЕО О НАС
              </p>
            </div>
          </div>
        </div>
      </section>

      <VideoModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
