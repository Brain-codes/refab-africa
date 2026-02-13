"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 24, suffix: "k+", label: "CLOTH DONATIONS" },
  { value: 20, suffix: "+", label: "ACTIVE WASHERS" },
  { value: 80, suffix: "+", label: "AGENT REGISTERED" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let frameId: number;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    }

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration, start]);

  return count;
}

function StatItem({ stat, inView }: { stat: Stat; inView: boolean }) {
  const count = useCountUp(stat.value, 2000, inView);

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-design text-primary">
        {count}
        {stat.suffix}
      </span>
      <span className="text-[clamp(0.875rem,1.5vw,1.25rem)] font-bold uppercase leading-design tracking-wide text-primary-deepest">
        {stat.label}
      </span>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-primary-light px-6 py-[clamp(3rem,6vw,5rem)] sm:px-10 md:px-16 lg:px-[141px]"
    >
      <motion.div
        className="mx-auto grid max-w-[1728px] grid-cols-1 gap-10 sm:grid-cols-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
      >
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} inView={inView} />
        ))}
      </motion.div>
    </section>
  );
}
