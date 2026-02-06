"use client";

import { useParallax } from "react-scroll-parallax";
import type { ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  easing?: "ease" | "easeIn" | "easeOut" | "easeInOut";
}

export default function ParallaxSection({
  children,
  speed = -5,
  className,
  easing = "easeOut",
}: ParallaxSectionProps) {
  const { ref } = useParallax<HTMLDivElement>({
    speed,
    easing,
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
