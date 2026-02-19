"use client";
"use no memo";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const curveSrcs = [
  "/images/process-curve-1.svg",
  "/images/process-curve-2.svg",
  "/images/process-curve-3.svg",
] as const;

interface ProcessCurveProps {
  /** 0 = Step 1→2, 1 = Step 2→3, 2 = Step 3→4 */
  index: 0 | 1 | 2;
  className?: string;
}

export default function ProcessCurve({
  index,
  className = "",
}: ProcessCurveProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Curve 2 (index 1) flows right-to-left, so reveal from the right side
  const isRTL = index === 1;

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        {
          clipPath: isRTL
            ? "inset(0 0 0 100%)"
            : "inset(0 100% 0 0)",
        },
        {
          clipPath: "inset(0 0% 0 0%)",
          ease: "none" as const,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            end: "bottom 50%",
            scrub: 1,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      <Image
        src={curveSrcs[index]}
        alt=""
        width={1012}
        height={275}
        className="w-full"
        priority
      />
    </div>
  );
}
