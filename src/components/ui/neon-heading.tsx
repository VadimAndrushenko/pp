import { cn } from "@/components/lib/utils"

interface NeonHeadingProps {
  accent1: string
  accent2: string
  prefix?: string
  subtitle?: string
  align?: "center" | "left"
  className?: string
}

const neonSizes = "text-6xl max-[450px]:text-4xl lg:text-7xl xl:text-8xl"

export function NeonHeading({
  accent1,
  accent2,
  prefix,
  subtitle,
  align = "center",
  className,
}: NeonHeadingProps) {
  const isLeft = align === "left"

  const outlineStyle: React.CSSProperties = {
    color: "transparent",
    WebkitTextStroke: "2px white",
  }

  return (
    <div className={cn(isLeft ? "text-left" : "text-center", className)}>
      {prefix && (
        <p
          className={cn(
            "text-3xl max-[450px]:text-xl md:text-4xl font-display tracking-wider mb-2 -rotate-1 animate-glow-reveal",
            isLeft && "text-left",
          )}
          style={{
            color: "transparent",
            WebkitTextStroke: "1.5px white",
            "--neon-glow": "drop-shadow(0 0 6px rgba(46, 107, 255, 0.7)) drop-shadow(0 0 20px rgba(46, 107, 255, 0.4))",
          } as React.CSSProperties}
        >
          {prefix}
        </p>
      )}
      <div
        className={cn(
          "flex flex-col gap-1 mb-3",
          isLeft ? "items-start" : "items-center",
        )}
      >
        <span
          className={cn(neonSizes, "font-display font-bold uppercase tracking-tight animate-glow-reveal -rotate-1")}
          style={{
            ...outlineStyle,
            "--neon-glow": "drop-shadow(0 0 8px rgba(255, 42, 60, 0.8)) drop-shadow(0 0 25px rgba(255, 42, 60, 0.5)) drop-shadow(0 0 50px rgba(255, 42, 60, 0.3))",
          } as React.CSSProperties}
        >
          {accent1}
        </span>
        <span
          className={cn(neonSizes, "font-display font-bold uppercase tracking-tight -mt-2 animate-glow-reveal -rotate-1")}
          style={{
            ...outlineStyle,
            "--neon-glow": "drop-shadow(0 0 8px rgba(255, 42, 60, 0.8)) drop-shadow(0 0 25px rgba(255, 42, 60, 0.5)) drop-shadow(0 0 50px rgba(255, 42, 60, 0.3))",
          } as React.CSSProperties}
        >
          {accent2}
        </span>
      </div>
      {subtitle && (
        <p
          className={cn(
            "text-xl max-[450px]:text-base md:text-2xl font-display uppercase tracking-wider -rotate-1",
            isLeft && "",
          )}
          style={{ color: "var(--color-accent)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
