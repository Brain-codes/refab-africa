"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface PageHeroProps {
  badge: string;
  title: React.ReactNode;
  description: string;
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

export default function PageHero({
  badge,
  title,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-primary-deepest">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-[clamp(6.5rem,12.5vw,10rem)] sm:px-10 md:px-16 lg:px-[141px]">
        <motion.div
          className="mx-auto flex max-w-432 flex-col gap-[clamp(0.82rem,1.65vw,1.23rem)]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.span
            className="inline-block w-fit rounded-lg bg-primary px-8 py-1.25 text-xs font-medium text-white"
            variants={itemVariants}
          >
            {badge}
          </motion.span>

          {/* Title */}
          <motion.h1
            className="max-w-[932px] text-[clamp(1.65rem,4.1vw,3.3rem)] font-normal leading-design text-white"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="max-w-[817px] text-[clamp(0.82rem,1.65vw,1.23rem)] font-normal leading-design text-white"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
