"use client";

import Button from "./ui/Button";
import ProcessStep from "./ui/ProcessStep";
import ProcessCurve from "./ui/ProcessCurve";
import { FadeIn } from "./animations";

const processSteps = [
  {
    step: 1,
    title: "Textile Collection",
    description:
      "We source discarded fabrics and textile waste from reliable channels, ensuring materials are responsibly recovered.",
  },
  {
    step: 2,
    title: "Design & Repurpose",
    description:
      "Recovered textiles are reimagined through thoughtful design, turning waste into functional and creative products.",
  },
  {
    step: 3,
    title: "Production & Craft",
    description:
      "We collaborate with creatives and makers to bring designs to life through careful craftsmanship and quality control.",
  },
  {
    step: 4,
    title: "Impact & Distribution",
    description:
      "Finished products are shared, sold, or deployed in ways that maximize environmental and social impact.",
  },
];

export default function TheProcess() {
  return (
    <section className="w-full overflow-hidden bg-primary-light px-[5%] py-[clamp(4rem,8vw,7rem)]">
      <div className="mx-auto max-w-[1728px]">
        {/* ── Section Header ── */}
        <FadeIn direction="up" as="div">
          <div className="flex flex-col items-center gap-[1rem] text-center">
            {/* Badge */}
            <span className="inline-block rounded-[1.25rem] bg-primary px-[2rem] py-[0.3125rem] text-[0.875rem] font-medium text-white">
              The Process
            </span>
            {/* Title */}
            <h2 className="text-[clamp(2rem,4.5vw,3.625rem)] font-medium leading-design text-primary-deepest">
              How We Create{" "}
              <span className="font-bold uppercase text-primary">IMPACT</span>
            </h2>
            {/* Description */}
            <p className="max-w-[54.5rem] text-[clamp(0.875rem,1.5vw,1.5rem)] leading-design text-primary-deepest">
              From discarded textiles to meaningful outcomes, our process is
              built on intention, collaboration, and sustainability.
            </p>
          </div>
        </FadeIn>

        {/* ── Process Steps (Zigzag) ── */}
        <div className="mt-[clamp(3rem,6vw,5rem)] flex flex-col">
          {processSteps.map((step, index) => {
            const isOdd = step.step % 2 !== 0;
            const isLast = index === processSteps.length - 1;

            return (
              <FadeIn key={step.step} direction="up" delay={index * 0.1}>
                {/* Desktop: 2-col grid with order swap for zigzag */}
                <div className="grid grid-cols-1 items-center lg:grid-cols-[1fr_2fr]">
                  <div
                    className={`flex justify-center py-[clamp(1.5rem,3vw,2rem)] ${isOdd ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <ProcessStep
                      step={step.step}
                      title={step.title}
                      description={step.description}
                    />
                  </div>
                  {!isLast && (
                    <div
                      className={`hidden lg:flex lg:items-center ${isOdd ? "lg:order-2" : "lg:order-1"}`}
                    >
                      <ProcessCurve index={index as 0 | 1 | 2} />
                    </div>
                  )}
                </div>

                {/* Mobile/Tablet: vertical dashed connector */}
                {!isLast && (
                  <div className="flex justify-center lg:hidden">
                    <div className="h-[clamp(3rem,6vw,5rem)] border-l-[4px] border-dashed border-primary-82" />
                  </div>
                )}
              </FadeIn>
            );
          })}
        </div>

        {/* ── Bottom CTA Banner ── */}
        <FadeIn direction="up" as="div" delay={0.2}>
          <div className="mx-auto mt-[clamp(3rem,6vw,5rem)] flex w-full flex-col items-center gap-[clamp(1rem,2vw,1.5625rem)] md:rounded-[2.25rem] rounded-sm bg-primary-deepest px-[5%] py-[clamp(2.5rem,5vw,4rem)] text-center lg:w-[71%]">
            <p className="text-[clamp(1rem,1.5vw,1.5rem)] font-medium leading-design text-white">
              Every step is guided by sustainability, creativity, and
              people-first thinking.
            </p>
            <Button variant="outline" href="/donate">
              Donate Now
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
