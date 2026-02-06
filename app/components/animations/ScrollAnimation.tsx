"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  scrub?: boolean | number;
  start?: string;
  end?: string;
  pin?: boolean;
}

export default function ScrollAnimation({
  children,
  className,
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  scrub = false,
  start = "top 80%",
  end = "bottom 20%",
  pin = false,
}: ScrollAnimationProps) {
  "use no memo";
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(containerRef.current, from, {
        ...to,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          end,
          scrub,
          pin,
          toggleActions: scrub ? undefined : "play none none none",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
