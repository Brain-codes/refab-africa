"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  splitBy?: "chars" | "words" | "lines";
  stagger?: number;
  duration?: number;
  scrollTrigger?: boolean;
}

export default function TextReveal({
  children,
  className,
  as: Tag = "p",
  splitBy = "chars",
  stagger = 0.03,
  duration = 0.6,
  scrollTrigger = true,
}: TextRevealProps) {
  "use no memo";
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current?.querySelector("[data-split-target]");
      if (!el) return;

      const split = SplitText.create(el, {
        type: splitBy,
        autoSplit: true,
        onSplit(self: InstanceType<typeof SplitText>) {
          const targets =
            splitBy === "chars"
              ? self.chars
              : splitBy === "words"
                ? self.words
                : self.lines;

          gsap.from(targets, {
            opacity: 0,
            y: splitBy === "lines" ? 20 : 10,
            duration,
            stagger,
            ease: "power2.out",
            ...(scrollTrigger && {
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }),
          });
        },
      });

      return () => {
        split.revert();
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef}>
      <Tag data-split-target className={className}>
        {children}
      </Tag>
    </div>
  );
}
