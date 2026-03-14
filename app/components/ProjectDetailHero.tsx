"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Calendar } from "lucide-react";

interface ProjectDetailHeroProps {
  title: string;
  location: string;
  date: string;
  image: string;
}

export default function ProjectDetailHero({
  title,
  location,
  date,
  image,
}: ProjectDetailHeroProps) {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Bottom-up gradient — breathes at the top, very dark at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#041F00]/95 via-[#041F00]/45 to-transparent" />
        {/* Left vignette — helps badge readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041F00]/30 via-transparent to-transparent" />
      </div>

      {/* "Project" badge — top left, below navbar */}
      <motion.div
        className="absolute left-[5%] top-[clamp(5rem,10vw,8rem)] z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
      >
        <span className="inline-block rounded-full border border-primary/60 bg-primary/10 px-4 py-1 text-[0.72rem] font-medium uppercase tracking-widest text-white backdrop-blur-sm">
          Project
        </span>
      </motion.div>

      {/* Bottom-anchored editorial content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-[5%] pb-[clamp(2.5rem,5vw,4.5rem)]">
        {/* Full-width separator line */}
        <motion.div
          className="mb-[clamp(1.2rem,2.5vw,2rem)] h-[1px] w-full origin-left bg-white/20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" as const }}
        />

        {/* Title + Meta row */}
        <div className="flex flex-col gap-[clamp(1rem,2vw,1.5rem)] lg:flex-row lg:items-end lg:justify-between">
          {/* Large editorial title */}
          <motion.h1
            className="w-full text-[clamp(2rem,5.5vw,4.5rem)] font-extrabold leading-[1.05] text-white lg:max-w-[65%]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: "easeOut" as const }}
          >
            {title}
          </motion.h1>

          {/* Location + Date meta */}
          <motion.div
            className="flex flex-row gap-[clamp(1rem,2.5vw,2rem)] lg:flex-col lg:items-end lg:gap-[clamp(0.5rem,1vw,0.82rem)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: "easeOut" as const }}
          >
            <div className="flex items-center gap-[0.4rem]">
              <MapPin className="h-[clamp(0.72rem,1vw,0.9rem)] w-[clamp(0.72rem,1vw,0.9rem)] flex-shrink-0 text-primary" />
              <span className="text-[clamp(0.68rem,0.85vw,0.82rem)] text-white/70">
                {location}
              </span>
            </div>
            <div className="flex items-center gap-[0.4rem]">
              <Calendar className="h-[clamp(0.72rem,1vw,0.9rem)] w-[clamp(0.72rem,1vw,0.9rem)] flex-shrink-0 text-primary" />
              <span className="text-[clamp(0.68rem,0.85vw,0.82rem)] text-white/70">
                {date}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Green accent bar */}
        <motion.div
          className="mt-[clamp(1.2rem,2.5vw,2rem)] h-[3px] w-[clamp(80px,12vw,140px)] origin-left rounded-full bg-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: "easeOut" as const }}
        />
      </div>
    </section>
  );
}
