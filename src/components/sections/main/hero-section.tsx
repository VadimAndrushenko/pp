"use client"

import Image from "next/image"
import { MotionDiv } from "@/components/ui/motion-div"
import { NeonHeading } from "@/components/ui/neon-heading"
import { site } from "@/config/site"

export function HeroSection({ className }: { className?: string }) {
  return (
    <section className={`relative ${className ?? ""}`}>
        <div className=" relative">
          <div className="lg:w-[40%] flex flex-col ">
            <MotionDiv direction="left" delay={0.1} className="mb-6">
              <h1 className="leading-[1.1] text-5xl font-display font-bold uppercase tracking-tight mb-4 max-lg:text-4xl max-sm:text-[6.5vw]">
                <span className="text-[var(--color-text-primary)]">
                  Ресторан на Фукуоке, где каждый день
                </span>{" "}
                <span style={{ color: "var(--color-accent)" }}>
                  что-то происходит!
                </span>
              </h1>
              <div
                className="h-0.5 w-16 mb-3"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              <p className="text-base max-[450px]:text-sm md:text-2xl text-[var(--color-text-primary)] font-display uppercase tracking-wider leading-relaxed max-w-lg min-[460]:max-md:max-w-[250px] ">
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

            {/* NEON */}
            <div>
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

          {/* PHOTO — absolute, natural proportions */}
          <MotionDiv
            direction="right"
            delay={0.2}
            className="absolute bottom-0 right-0 h-full pointer-events-none -z-10 max-lg:max-h-[80%] max-[450px]:max-h-[75%] max-[450px]:translate-y-14"
          >
            <div className="relative sm:right-11 rounded-[var(--radius-card)] transition-all duration-500 h-full max-sm:left-10">
              <Image
                src="/images/people.png"
                alt="People"
                width={800}
                height={600}
                className="h-full object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/0 10% to-transparent z-10" />
            </div>
          </MotionDiv>
        </div>
    </section>
  )
}
