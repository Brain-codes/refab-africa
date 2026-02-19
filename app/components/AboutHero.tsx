"use client";

import Image from "next/image";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const images = [
  "/images/about-hero-1.png",
  "/images/about-hero-2.png",
  "/images/about-hero-3.png",
];

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-deepest px-[5%] pt-[clamp(6.5rem,12.3vw,9.8rem)] pb-[clamp(1.65rem,2.5vw,2.5rem)]">
      {/* SVG background pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/svg-background-image-pattern.svg"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-432">

        {/* ── Text content ── */}
        <motion.div
          className="flex flex-col items-center gap-[clamp(0.82rem,1.65vw,1.23rem)] text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.span
            className="inline-block rounded-full bg-primary px-6 py-[4px] text-[clamp(0.62rem,0.82vw,0.72rem)] font-medium text-white"
            variants={itemVariants}
          >
            About
          </motion.span>

          {/* Headline */}
          <motion.h1
            className="text-[clamp(1.65rem,3.3vw,3.3rem)] font-semibold leading-design text-white"
            variants={itemVariants}
          >
            Transforming textile waste into meaningful impact through creativity.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="max-w-[835px] text-[clamp(0.72rem,1vw,1rem)] font-normal leading-design text-white/80"
            variants={itemVariants}
          >
            We are a sustainability-driven collective turning discarded textiles
            into purpose-built solutions — partnering with communities, healthcare
            organisations, and creatives to prove that responsible fashion can be
            both beautiful and deeply impactful.
          </motion.p>
        </motion.div>

        {/* ── Image grid ── */}
        <motion.div
          className="mt-[clamp(2rem,3.3vw,3.3rem)] grid grid-cols-1 gap-[clamp(0.62rem,1vw,1.23rem)] md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((src, i) => (
            <motion.div
              key={src}
              className="relative aspect-[429/515] overflow-hidden md:rounded-[18px] rounded-sm"
              variants={itemVariants}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover grayscale"
                sizes="(max-width: 768px) 90vw, 33vw"
                priority={i === 0}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

