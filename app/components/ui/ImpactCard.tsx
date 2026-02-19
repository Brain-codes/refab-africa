interface ImpactCardProps {
  title: string;
  description: string;
}

export default function ImpactCard({ title, description }: ImpactCardProps) {
  return (
    <div className="flex gap-[clamp(1rem,2vw,2rem)] rounded-default border border-primary-dark bg-overlay-white-15 p-[clamp(1rem,1.6vw,1.625rem)_clamp(0.75rem,1.2vw,1.1875rem)] backdrop-blur-sm">
      {/* Tear-drop icon */}
      <div className="h-[49px] w-[49px] shrink-0 rounded-[651px_651px_0_651px] bg-primary" />

      {/* Text content */}
      <div className="flex flex-col gap-[clamp(1rem,1.8vw,1.8125rem)]">
        <h3 className="text-[clamp(1rem,1.5vw,1.5rem)] font-semibold uppercase leading-design text-primary">
          {title}
        </h3>
        <p className="text-[clamp(0.875rem,1.5vw,1.5rem)] font-normal leading-design text-white">
          {description}
        </p>
      </div>
    </div>
  );
}
