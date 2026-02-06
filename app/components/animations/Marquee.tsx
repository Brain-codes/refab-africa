import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  pauseOnHover?: boolean;
}

export default function Marquee({
  children,
  className,
  duration = 20,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div
        className={`flex w-max animate-marquee gap-[5%] ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
