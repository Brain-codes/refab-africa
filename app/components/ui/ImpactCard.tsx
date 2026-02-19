interface ImpactCardProps {
  title: string;
  description: string;
}

export default function ImpactCard({ title, description }: ImpactCardProps) {
  return (
    <div className="flex gap-[clamp(0.82rem,1.65vw,1.65rem)] rounded-default border border-primary-dark bg-overlay-white-15 p-[clamp(0.82rem,1.3vw,1.33rem)_clamp(0.62rem,1vw,0.97rem)] backdrop-blur-sm">
      {/* Tear-drop icon */}
      <div className="h-[40px] w-[40px] shrink-0 rounded-[535px_535px_0_535px] bg-primary" />

      {/* Text content */}
      <div className="flex flex-col gap-[clamp(0.82rem,1.5vw,1.49rem)]">
        <h3 className="text-[clamp(0.82rem,1.2vw,1.23rem)] font-semibold uppercase leading-design text-primary">
          {title}
        </h3>
        <p className="text-[clamp(0.72rem,1.2vw,1.23rem)] font-normal leading-design text-white">
          {description}
        </p>
      </div>
    </div>
  );
}
