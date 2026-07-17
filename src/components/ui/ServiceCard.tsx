import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export default function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 rounded-2xl border border-[#ff6a00]/40 p-4 transition hover:border-[#ff6a00] hover:bg-[#ff6a00]/5 group"
    >
      <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-[#ff6a00]/50 text-[#ff6a00]">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-bold tracking-wider uppercase text-white">
          {title}
        </div>
        <div className="text-xs text-gray-400 mt-0.5 line-clamp-2">
          {description}
        </div>
      </div>
      <ChevronRight
        size={18}
        className="flex-shrink-0 text-[#ff6a00] transition-transform group-hover:translate-x-0.5"
      />
    </a>
  );
}
