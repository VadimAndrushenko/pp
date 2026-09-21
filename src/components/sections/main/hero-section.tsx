"use client"

import Image from "next/image"
import { MotionDiv } from "@/components/ui/motion-div"
import { NeonHeading } from "@/components/ui/neon-heading"
import { site as siteFallback } from "@/config/site"
import type { SiteSettings } from "@/lib/transformData"
import type { HeroSectionData } from "@/lib/transformData"

interface HeroSectionProps {
  site?: SiteSettings["site"]
  hero: HeroSectionData
}

export function HeroSection({ site = siteFallback, hero }: HeroSectionProps) {
  return (
    <section className="relative section-py">
        <div className=" relative">
          <div className="lg:w-[40%] flex flex-col ">
            <MotionDiv direction="left" delay={0.1} className="mb-6">
              <h1 className="leading-[1.1] text-5xl font-display font-bold uppercase tracking-tight mb-4 max-lg:text-4xl max-sm:text-[6.5vw]">
                <span className="text-text-primary">
                  {hero.title.text}
                </span>{" "}
                <span className="text-accent">
                  {hero.title.accent}
                </span>
              </h1>
              <div
                className="h-0.5 w-16 mb-3 bg-accent"
              />
              <p className="text-base max-[450px]:text-sm md:text-2xl text-text-primary font-display uppercase tracking-wider leading-relaxed max-w-lg min-[460]:max-md:max-w-[250px] ">
                {hero.cuisines.split("•").map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <span className="text-accent">•</span>
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
                  prefix={hero.neonSlogan.line1}
                  accent1={hero.neonSlogan.accent1}
                  accent2={hero.neonSlogan.accent2}
                  subtitle={hero.neonSlogan.subtitle}
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
            <div className="relative sm:right-11 rounded-card transition-all duration-500 h-full max-sm:left-10">
              <Image
                src="/api/blob/images/people.png"
                alt="People"
                width={800}
                height={600}
                className="h-full object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/0 10% to-transparent z-10" />
            </div>
          </MotionDiv>
        </div>
    </section>
  )
}
