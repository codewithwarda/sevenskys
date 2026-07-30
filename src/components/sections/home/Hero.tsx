"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { BrandMark } from "@/components/graphics/BrandMark";
import { ContrailField } from "@/components/graphics/ContrailField";
import { SkylineSilhouette } from "@/components/graphics/SkylineSilhouette";
import { GhostNumeral } from "@/components/graphics/GhostNumeral";
import { SITE, yearsInBusiness } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-paper">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <div className="relative z-10 flex flex-col justify-center overflow-hidden py-20 lg:py-28">
          <GhostNumeral value="07" className="absolute -left-6 -top-10 lg:-top-16" />
          <Container className="relative max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
              <Eyebrow>UAE Transportation &amp; Logistics &middot; Est. {SITE.founded}</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl text-balance font-display text-[clamp(2.75rem,5.8vw,4.5rem)] font-semibold leading-[0.98] tracking-tight text-ink"
            >
              Moving the Emirates,
              <span className="relative ml-3 inline-block text-primary">
                on schedule.
                <svg viewBox="0 0 220 12" className="absolute -bottom-1 left-0 h-3 w-full text-primary/40" preserveAspectRatio="none" aria-hidden>
                  <path d="M2 8 Q 60 2 110 6 T 218 4" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-md text-balance text-[16px] leading-relaxed text-slate"
            >
              For {yearsInBusiness()}+ years, SevenSkys Group of Companies has run the passenger
              transport, towing &amp; recovery, and heavy equipment operations that keep UAE
              businesses, schools and sites on schedule.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="/request-a-quote">Request a Quote</Button>
              <Button href="/contact" variant="outline">Contact Us</Button>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 grid max-w-lg grid-cols-3"
            >
              {[
                { dt: "Founded", dd: String(SITE.founded) },
                { dt: "Divisions", dd: "3 core" },
                { dt: "Coverage", dd: "UAE-wide" },
              ].map((s, i) => (
                <div key={s.dt} className={`border-t-2 pt-4 ${i === 0 ? "border-primary pr-6" : "border-ink/10 px-6"}`}>
                  <dd className="font-display text-3xl font-semibold text-ink">{s.dd}</dd>
                  <dt className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate">{s.dt}</dt>
                </div>
              ))}
            </motion.dl>
          </Container>
        </div>

        {/* Right: brand panel */}
        <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden bg-[#141046] lg:min-h-full lg:clip-diagonal-left">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="absolute inset-0 opacity-70">
            <ContrailField />
          </div>
          <GhostNumeral value="7" tone="white" className="absolute -right-4 -top-6 !opacity-[0.06]" />
          <div className="absolute inset-x-0 bottom-0 text-white/10">
            <SkylineSilhouette />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center gap-7 px-8 text-center"
          >
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-white/15">
              <div className="absolute inset-3 rounded-full border border-dashed border-white/20 animate-[spin_40s_linear_infinite] motion-reduce:animate-none" />
              <BrandMark className="h-24 w-auto text-white" />
            </div>
            <p className="max-w-xs font-mono text-[11px] uppercase tracking-[0.3em] text-white/60">
              Passenger Transport &middot; Towing &amp; Recovery &middot; Heavy Equipment
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
