interface ShimmerEffectProps {
  className?: string;
  width?: string;
  borderRadius?: string;
}

export default function ShimmerEffect({
  className,
  width = "100%",
  borderRadius = "var(--radius-sm)",
}: ShimmerEffectProps) {
  return (
    <div
      className={`animate-shimmer min-h-[1rem] ${className ?? ""}`}
      style={{ width, borderRadius }}
      aria-hidden="true"
    />
  );
}
