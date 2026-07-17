import { ArrowRight } from "lucide-react";

export default function SectionTitle({
  title,
  linkText,
}: {
  title: string;
  linkText?: string;
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl md:text-3xl font-black tracking-wider uppercase font-heading">
        {title}
      </h2>
      {linkText && (
        <a
          href="#"
          className="hidden sm:flex items-center gap-1 text-sm text-[#ff6a00] transition hover:text-[#ff7a1a]"
        >
          {linkText} <ArrowRight size={16} />
        </a>
      )}
    </div>
  );
}
