"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./animations";

// ── Count-up hook (reusable pattern from Stats.tsx) ───────────────────────────
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let frameId: number;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration, start]);

  return count;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const stats = [
  { value: 24, suffix: "k+", label: "Textile donated and Recycled" },
  { value: 120, suffix: "+", label: "Active Agents, washers and sorters." },
  { value: 250, suffix: "+", label: "Job created for individuals all time" },
];

const partners = [
  { image: "/images/brand-one-barrow.png", name: "One Barrow", width: 57, height: 57 },
  { image: "/images/brand-ta-community.png", name: "TA Community", width: 96, height: 65 },
];

// ── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({
  value,
  suffix,
  label,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
}) {
  const count = useCountUp(value, 2000, inView);

  return (
    <div className="flex flex-col gap-1 border-l border-[#5e4826] px-[clamp(0.82rem,1.65vw,1.65rem)] py-[clamp(0.82rem,1.2vw,1.23rem)]">
      <span className="text-[clamp(1.65rem,3.3vw,3.3rem)] font-medium leading-design text-primary">
        {count}
        {suffix}
      </span>
      <span className="text-[clamp(0.62rem,0.82vw,0.82rem)] font-normal leading-design text-[#5e4826]">
        {label}
      </span>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.2 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-background px-[5%] py-[clamp(3.2rem,6.5vw,5.7rem)]">
      <div ref={sectionRef} className="mx-auto max-w-432">
        <div className="grid grid-cols-1 gap-x-[clamp(1.65rem,3.3vw,3.3rem)] gap-y-[clamp(2rem,3.3vw,3.3rem)] lg:grid-cols-[2fr_3fr]">

          {/* ── Left: heading ── */}
          <FadeIn direction="up">
            <h2 className="text-[clamp(1.65rem,3.3vw,3rem)] font-normal leading-design text-primary-deepest">
              About Refab Africa
            </h2>
          </FadeIn>

          {/* ── Right: body content ── */}
          <div className="flex flex-col gap-[clamp(1.65rem,3.3vw,3.3rem)]">

            {/* Paragraph */}
            <FadeIn direction="up" delay={0.1}>
              <p className="text-[clamp(0.82rem,1.65vw,1.8rem)] font-normal leading-design text-black">
                ReFab-Africa is a bold initiative addressing the dual challenges
                of textile waste and maternal health in Nigeria through a creative,
                community-driven, and climate-conscious model. By repurposing
                textile waste into stylish, functional clothing and aligning this
                effort with social incentives for health-seeking behavior,
                ReFab-Africa presents a transformative solution that goes far
                beyond fashion. It is a model that fosters sustainability, dignity,
                and access — at once circular and deeply human.
              </p>
            </FadeIn>

            {/* Stats */}
            <FadeIn direction="up" delay={0.2}>
              <div className="grid grid-cols-1 gap-[clamp(0.62rem,1.2vw,1.23rem)] sm:grid-cols-3">
                {stats.map((stat) => (
                  <StatCard key={stat.label} {...stat} inView={inView} />
                ))}
              </div>
            </FadeIn>

            {/* Partners */}
            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-wrap items-center gap-x-[clamp(1.65rem,3.3vw,3.3rem)] gap-y-[clamp(0.82rem,1.65vw,1.65rem)]">
                {partners.map(({ image, name, width, height }) => (
                  <div key={name} className="flex items-center gap-3">
                    <Image
                      src={image}
                      alt={name}
                      width={width}
                      height={height}
                      className="object-contain"
                    />
                    <span className="text-[0.9375rem] font-normal text-black">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
