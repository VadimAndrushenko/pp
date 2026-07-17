import { Play } from "lucide-react";

export default function PlayButton({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 text-[#ff6a00] transition-transform hover:scale-110 active:scale-95 shadow-lg"
      aria-label="Воспроизвести"
    >
      <Play size={28} className="ml-1" fill="currentColor" />
    </button>
  );
}
