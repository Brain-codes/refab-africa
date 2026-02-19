"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface ProjectDetailHeroProps {
  title: string;
  location: string;
  date: string;
  image: string;
}

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

export default function ProjectDetailHero({
  title,
  location,
  date,
  image,
}: ProjectDetailHeroProps) {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-overlay-dark" />
      </div>

      {/* Content — vertically & horizontally centered */}
      <div className="relative z-10 flex min-h-dvh items-center justify-center px-6 sm:px-10 md:px-16 lg:px-[141px]">
        <motion.div
          className="flex w-full max-w-[900px] flex-col items-center gap-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h1
            className="text-[clamp(2rem,5vw,4rem)] font-semibold leading-design text-white"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          {/* Location */}
          <motion.p
            className="text-[clamp(1rem,2vw,1.5rem)] font-normal leading-design text-white"
            variants={itemVariants}
          >
            Location: {location}
          </motion.p>

          {/* Date */}
          <motion.p
            className="text-[clamp(1rem,2vw,1.5rem)] font-normal leading-design text-white"
            variants={itemVariants}
          >
            Date: {date}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
