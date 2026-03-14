"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const images = [
  "/images/about-hero-1.png",
  "/images/about-hero-2.png",
  "/images/about-hero-3.png",
];

// ── Text stagger container ────────────────────────────────────────────────────
const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-deepest">

      {/* SVG background pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/svg-background-image-pattern.svg"
          alt=""
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Left green accent bar — echoes the mobile nav menu */}
      <div className="absolute bottom-0 left-0 top-0 z-10 w-[3px] bg-primary/50" />

      {/* ── Main layout ── */}
      <div className="relative z-10 mx-auto max-w-[1728px] px-[5%] pt-[clamp(7rem,13vw,10rem)] pb-[clamp(3rem,6vw,5rem)]">
        <div className="flex flex-col gap-[clamp(2.5rem,5vw,4rem)] lg:flex-row lg:items-center lg:gap-[clamp(3rem,5vw,5rem)]">

          {/* ════════════════════════════════════════
               LEFT — Editorial text content
              ════════════════════════════════════════ */}
          <motion.div
            className="flex flex-col gap-[clamp(1rem,2vw,1.5rem)] lg:flex-[0_0_42%]"
            variants={textContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge + decorative line */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="inline-block rounded-full bg-primary px-5 py-[4px] text-[0.72rem] font-medium text-white">
                About
              </span>
              <div className="h-[1px] w-[clamp(1.5rem,4vw,3rem)] bg-primary/50" />
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/25">
                Refab Africa
              </span>
            </motion.div>

            {/* ── Dramatic mixed-weight headline ── */}
            <motion.div variants={fadeUp}>
              <h1 className="flex flex-col gap-0 leading-none">
                {/* "Transforming" — small connector */}
                <span className="text-[clamp(0.82rem,1.4vw,1.1rem)] font-normal text-white/50 mb-[0.3em]">
                  Transforming
                </span>
                {/* "TEXTILE" — massive, primary green */}
                <span className="text-[clamp(3rem,7.5vw,7rem)] font-extrabold uppercase leading-none tracking-tight text-primary">
                  Textile
                </span>
                {/* "WASTE" — massive, white */}
                <span className="text-[clamp(3rem,7.5vw,7rem)] font-extrabold uppercase leading-none tracking-tight text-white">
                  Waste
                </span>
                {/* connector */}
                <span className="text-[clamp(0.82rem,1.4vw,1.1rem)] font-normal text-white/50 mt-[0.4em]">
                  into meaningful impact through creativity.
                </span>
              </h1>
            </motion.div>

            {/* Divider: green bar + faint line */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="h-[2px] w-8 rounded-full bg-primary" />
              <div className="h-[1px] flex-1 bg-white/10" />
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="max-w-[480px] text-[clamp(0.72rem,0.95vw,0.92rem)] font-normal leading-[1.75] text-white/55"
            >
              We are a sustainability-driven collective turning discarded textiles
              into purpose-built solutions — partnering with communities, healthcare
              organisations, and creatives to prove that responsible fashion can be
              both beautiful and deeply impactful.
            </motion.p>

            {/* ── CTAs ── */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-sm bg-primary px-[clamp(1.65rem,3.3vw,2.6rem)] py-[clamp(0.72rem,1.23vw,0.92rem)] text-[clamp(0.72rem,1vw,1rem)] font-bold leading-design text-white transition-colors hover:bg-primary/90"
              >
                Donate Textiles
              </Link>
              <Link
                href="/agent"
                className="inline-flex items-center justify-center rounded-sm border border-primary bg-primary-light px-[clamp(1.65rem,3.3vw,2.6rem)] py-[clamp(0.72rem,1.23vw,0.92rem)] text-[clamp(0.72rem,1vw,1rem)] font-bold leading-design text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Get Involved
              </Link>
            </motion.div>

            {/* ── Image count indicator (mobile only, editorial touch) ── */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-[clamp(1rem,2vw,1.5rem)] lg:hidden"
            >
              {["01", "02", "03"].map((n) => (
                <span
                  key={n}
                  className="text-[0.62rem] font-bold tracking-widest text-white/30"
                >
                  {n}
                </span>
              ))}
              <div className="h-[1px] flex-1 bg-white/10" />
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════════
               RIGHT — Image mosaic
              ════════════════════════════════════════ */}
          <div className="lg:flex-1">

            {/* ── DESKTOP: asymmetric 2-column grid ──
                Image 1 spans both rows on the left.
                Images 2 & 3 stack on the right. ── */}
            <div
              className="hidden lg:grid lg:grid-cols-2 lg:gap-[clamp(0.5rem,0.8vw,0.82rem)]"
              style={{ height: "clamp(380px,56vh,640px)" }}
            >
              {/* Image 1 — left column, full height */}
              <motion.div
                className="relative row-span-2 overflow-hidden rounded-[18px]"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" as const }}
              >
                <Image
                  src={images[0]}
                  alt="Refab Africa community"
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  sizes="28vw"
                  priority
                />
                {/* Number label */}
                <span className="absolute left-3 top-3 rounded-full bg-primary px-[0.5rem] py-[2px] text-[0.6rem] font-bold text-white">
                  01
                </span>
                {/* Bottom caption strip */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-3 pt-8">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-widest text-white/60">
                    Community
                  </p>
                </div>
              </motion.div>

              {/* Image 2 — top right */}
              <motion.div
                className="relative overflow-hidden rounded-[18px] border border-white/10"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
              >
                <Image
                  src={images[1]}
                  alt="Refab Africa process"
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  sizes="28vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-[0.5rem] py-[2px] text-[0.6rem] font-bold text-white">
                  02
                </span>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-3 pt-8">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-widest text-white/60">
                    Process
                  </p>
                </div>
              </motion.div>

              {/* Image 3 — bottom right, green border accent */}
              <motion.div
                className="relative overflow-hidden rounded-[18px] border-2 border-primary/50"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" as const }}
              >
                <Image
                  src={images[2]}
                  alt="Refab Africa impact"
                  fill
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                  sizes="28vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-[0.5rem] py-[2px] text-[0.6rem] font-bold text-white">
                  03
                </span>
                {/* Corner accent bracket */}
                <div className="absolute bottom-2 right-2 h-5 w-5 border-b-2 border-r-2 border-primary" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-3 pt-8">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-widest text-white/60">
                    Impact
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ── MOBILE: full-width + 2-col grid ── */}
            <div className="flex flex-col gap-[clamp(0.62rem,2vw,1rem)] lg:hidden">
              {/* Image 1: full width, wide crop */}
              <motion.div
                className="relative aspect-[16/9] overflow-hidden rounded-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
              >
                <Image
                  src={images[0]}
                  alt="Refab Africa community"
                  fill
                  className="object-cover grayscale"
                  sizes="90vw"
                  priority
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-[0.5rem] py-[2px] text-[0.6rem] font-bold text-white">
                  01
                </span>
              </motion.div>

              {/* Images 2 & 3: side by side */}
              <div className="grid grid-cols-2 gap-[clamp(0.62rem,2vw,1rem)]">
                {[images[1], images[2]].map((src, i) => (
                  <motion.div
                    key={src}
                    className={`relative aspect-[4/5] overflow-hidden rounded-sm ${
                      i === 1 ? "border-2 border-primary/50" : "border border-white/10"
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.42 + i * 0.12,
                      ease: "easeOut" as const,
                    }}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover grayscale"
                      sizes="45vw"
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-primary px-[0.5rem] py-[2px] text-[0.6rem] font-bold text-white">
                      {String(i + 2).padStart(2, "0")}
                    </span>
                    {i === 1 && (
                      <div className="absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-primary" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
