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
    <div className="flex flex-col items-center gap-[clamp(1rem,2vw,1.375rem)]">
      {/* Step number + title badge */}
      <div className="flex flex-col items-center">
        <span className="text-[clamp(2rem,3.5vw,3rem)] font-bold leading-design text-primary">
          STEP {step}
        </span>
        <span className="mt-[0.125rem] inline-block rounded-full bg-primary px-[clamp(1.5rem,3vw,2.4375rem)] py-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(1rem,1.5vw,1.5rem)] font-semibold leading-design text-white">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="max-w-[19rem] text-center text-[clamp(0.875rem,1.2vw,1rem)] leading-design text-primary-deepest">
        {description}
      </p>
    </div>
  );
}
