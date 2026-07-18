"use client"

import Image from "next/image"
import { MotionDiv } from "@/components/ui/motion-div"
import { NeonHeading } from "@/components/ui/neon-heading"
import { site } from "@/config/site"

export function HeroSection() {
  return (
    <section className="">
        <div className="max-w-7xl mx-auto px-3 py-8 lg:py-12 flex flex-col lg:flex-row lg:items-stretch lg:gap-12">
          {/* LEFT COLUMN */}
          <div className="flex-1 flex flex-col justify-between">
            <MotionDiv direction="left" delay={0.1} className="mb-6">
              <h1 className="text-[40px] leading-[1.1] md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
                <span className="text-[var(--color-text-primary)]">
                  Ресторан на Фукуоке, где каждый день
                </span>{" "}
                <span style={{ color: "var(--color-accent)" }}>
                  что-то происходит!
                </span>
              </h1>
              <div
                className="h-0.5 w-16 mb-6"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              <p className="text-xl md:text-2xl text-[var(--color-text-primary)] font-display uppercase tracking-wider leading-relaxed max-w-lg">
                {site.cuisines.split("•").map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <span style={{ color: "var(--color-accent)" }}>•</span>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
            </MotionDiv>

            {/* NEON — desktop only, inside left column */}
            <div className="hidden lg:block lg:mt-auto">
              <MotionDiv direction="up" delay={0.25}>
                <NeonHeading
                  prefix={site.neonSlogan.line1}
                  accent1={site.neonSlogan.accent1}
                  accent2={site.neonSlogan.accent2}
                  subtitle={site.neonSlogan.subtitle}
                  align="left"
                />
              </MotionDiv>
            </div>
          </div>

          {/* RIGHT COLUMN — фото */}
          <MotionDiv
            direction="right"
            delay={0.2}
            className="relative mt-8 lg:mt-0 lg:w-[700px] lg:shrink-0"
          >
            <div className="relative right-11 rounded-[var(--radius-card)] transition-all duration-500">
              <Image
                src="/images/people.png"
                alt="People"
                width={800}
                height={600}
                className="object-cover w-full lg:w-[800px] h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/0 10% to-transparent z-10" />
            </div>
          </MotionDiv>
        </div>

        {/* NEON — mobile only, after the image */}
        <div className="lg:hidden mt-8">
          <MotionDiv direction="up" delay={0.25}>
            <NeonHeading
              prefix={site.neonSlogan.line1}
              accent1={site.neonSlogan.accent1}
              accent2={site.neonSlogan.accent2}
              subtitle={site.neonSlogan.subtitle}
              align="left"
            />
          </MotionDiv>
        </div>
    </section>
  )
}
