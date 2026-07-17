import type { ReactNode } from "react";

export default function OrangeButton({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-2xl border border-[#ff6a00] px-6 py-3 text-sm font-semibold tracking-wider uppercase text-white transition hover:bg-[#ff6a00]/10 active:bg-[#ff6a00]/20 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
