"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
  type ReactNode,
  Children,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ColsConfig = {
  base?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  [px: number]: number | undefined;
};

interface SliderProps {
  title?: string;
  children: ReactNode;
  className?: string;
  cols?: number | ColsConfig;
  gap?: string | number;
  locale?: string;
}

const NAMED_BREAKPOINTS: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export default function Slider({
  title,
  children,
  className = "",
  cols = 1,
  gap = "1rem",
  locale = "ru",
}: SliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    watchDrag: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const slideClass = `sld-${useId().replace(/:/g, "")}`;

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
    emblaApi.on("resize", update);

    return () => {
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
      emblaApi.off("resize", update);
    };
  }, [emblaApi]);

  const gapValue = typeof gap === "number" ? `${gap}px` : gap;
  const colsMap: ColsConfig = typeof cols === "number" ? { base: cols } : cols;

  const css = useMemo(() => {
    const getFlex = (n: number) => {
      const totalGap = n === 1 ? "0px" : `calc(${gapValue} * ${n - 1})`;
      return `1 0 calc((100% - ${totalGap}) / ${n})`;
    };

    let result = `.${slideClass}{flex:${getFlex(colsMap.base ?? 1)};min-width:0;}`;

    const queries: { px: number; n: number }[] = [];

    Object.entries(colsMap).forEach(([key, value]) => {
      if (key === "base" || value === undefined) return;
      const px = NAMED_BREAKPOINTS[key] ?? Number(key);
      if (!Number.isNaN(px)) {
        queries.push({ px, n: value });
      }
    });

    queries.sort((a, b) => a.px - b.px);

    queries.forEach(({ px, n }) => {
      if (n !== (colsMap.base ?? 1)) {
        result += `@media(min-width:${px}px){.${slideClass}{flex:${getFlex(n)};}}`;
      }
    });

    return result;
  }, [slideClass, colsMap, gapValue]);

  const slides = useMemo(() => {
    return Children.map(children, (child, index) => (
      <div key={index} className={`${slideClass} flex flex-col h-full [&>*]:flex-1`}>
        {child}
      </div>
    ));
  }, [children, slideClass]);

  const showArrows = canScrollPrev || canScrollNext;

  return (
    <div className={className}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {(title || showArrows) && (
        <div className="flex items-center justify-between mb-6">
          {title && (
            <h2 className="text-2xl font-display font-bold uppercase tracking-tight text-[var(--color-text-primary)]">
              {title}
            </h2>
          )}
          {showArrows && (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                aria-label={locale === "en" ? "Previous slide" : "Предыдущий слайд"}
                className="flex aspect-square w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] transition-all hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                disabled={!canScrollNext}
                aria-label={locale === "en" ? "Next slide" : "Следующий слайд"}
                className="flex aspect-square w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] transition-all hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          )}
        </div>
      )}

      <div
        ref={emblaRef}
        className="overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-4"
      >
        <div className="flex items-stretch" style={{ gap: gapValue }}>
          {slides}
        </div>
      </div>
    </div>
  );
}