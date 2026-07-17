import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <MapPin size={16} className="text-[#ff6a00]" />
          <span>97 Trần Hưng Đạo, Dương Đông, Phú Quốc</span>
        </div>
      </div>
    </footer>
  );
}
