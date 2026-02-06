"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const SLIDE_INTERVAL = 30000; // 30 seconds

const slides = [
  {
    keyword: "SUSTAINABILITY",
    image: "/images/hero-bg.png",
  },
  { 
    keyword: "CIRCULAR FASHION",
    image: "/images/hero-bg-2.png",
  },
  {
    keyword: "SOCIAL IMPACT",
    image: "/images/hero-bg-3.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
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

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      {/* Background Layer: Gradient + Carousel Images */}
      <div className="absolute inset-0">
        {/* Subtle gradient base */}
        <div className="gradient-subtle absolute inset-0" />

        {/* Carousel images with crossfade — both overlap during transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[activeIndex].image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" as const }}
          >
            <Image
              key={slides[activeIndex].image}
              src={slides[activeIndex].image}
              alt=""
              fill
              className="object-cover object-right"
              priority={activeIndex === 0}
              sizes="100vw"
              unoptimized
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-overlay-dark" />
      </div>

      {/* Content — text centered vertically, indicator pinned to bottom */}
      <div className="relative z-10 flex min-h-dvh flex-col px-6 sm:px-10 md:px-16 lg:px-[141px]">
        {/* Spacer to push text to center */}
        <div className="flex-1" />

        {/* Text + Buttons — vertically centered, left-aligned */}
        <motion.div
          className="flex md:w-[60%] w-full flex-col gap-[clamp(2.5rem,5vw,5rem)]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Group */}
          <div className="flex flex-col gap-4">
            <motion.h1
              className="text-[clamp(2rem,5vw,4rem)] font-normal leading-design text-white"
              variants={itemVariants}
            >
              Reimagining the{" "}
              <span className="relative inline-block overflow-hidden align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={slides[activeIndex].keyword}
                    className="inline-block font-extrabold text-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" as const }}
                  >
                    {slides[activeIndex].keyword}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              of Africa
            </motion.h1>

            <motion.p
              className="max-w-[817px] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-design text-white"
              variants={itemVariants}
            >
              Transforming textile waste into meaningful products while
              empowering communities through collaboration and creativity.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 sm:gap-[35px]"
            variants={itemVariants}
          >
            <motion.div variants={buttonVariants}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-primary-dark px-8 py-[18px] text-md font-bold leading-design text-white transition-colors hover:bg-primary sm:px-[51px]"
              >
                Build Impact With Us
              </Link>
            </motion.div>

            <motion.div variants={buttonVariants}>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-sm border border-primary bg-primary-light px-8 py-[18px] text-md font-bold leading-design text-primary transition-colors hover:bg-primary hover:text-white sm:px-[51px]"
              >
                Donate Now
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Spacer to push indicator to bottom */}
        <div className="flex-1" />

        {/* Scroll Indicator — 3 dots synced to carousel, pinned to bottom */}
        <motion.div
          className="flex w-full justify-center pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" as const }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
          >
            <svg
              width="83"
              height="17"
              viewBox="0 0 83 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label={`Slide ${activeIndex + 1} of ${slides.length}`}
            >
              {slides.map((_, i) => (
                <circle
                  key={i}
                  cx={8.5 + i * 33}
                  cy="8.5"
                  r="8.5"
                  fill={i === activeIndex ? "#15B800" : "#7D7D7D"}
                  className="transition-[fill] duration-500"
                />
              ))}
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
