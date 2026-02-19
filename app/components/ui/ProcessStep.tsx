interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

export default function ProcessStep({
  step,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center gap-[clamp(0.82rem,1.65vw,1.13rem)]">
      {/* Step number + title badge */}
      <div className="flex flex-col items-center">
        <span className="text-[clamp(1.65rem,2.9vw,2.5rem)] font-bold leading-design text-primary">
          STEP {step}
        </span>
        <span className="mt-[0.125rem] inline-block rounded-full bg-primary px-[clamp(1.23rem,2.5vw,2rem)] py-[clamp(0.41rem,0.82vw,0.62rem)] text-[clamp(0.82rem,1.2vw,1.23rem)] font-semibold leading-design text-white">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="max-w-[15.6rem] text-center text-[clamp(0.72rem,1vw,0.82rem)] leading-design text-primary-deepest">
        {description}
      </p>
    </div>
  );
}
