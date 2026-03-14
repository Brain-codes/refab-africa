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
    <section className="w-full overflow-hidden bg-primary-light px-[5%] py-[clamp(3.2rem,6.5vw,5.7rem)]">
      <div className="mx-auto max-w-[1728px]">
        {/* ── Section Header ── */}
        <FadeIn direction="up" as="div">
          <div className="flex flex-col items-center gap-[0.82rem] text-center">
            {/* Badge */}
            <span className="inline-block rounded-[1rem] bg-primary px-[1.65rem] py-[0.26rem] text-[0.72rem] font-medium text-white">
              The Process
            </span>
            {/* Title */}
            <h2 className="text-[clamp(1.65rem,3.7vw,3rem)] font-medium leading-design text-primary-deepest">
              How We Create{" "}
              <span className="font-bold uppercase text-primary">IMPACT</span>
            </h2>
            {/* Description */}
            <p className="max-w-[44.7rem] text-[clamp(0.72rem,1.2vw,1.23rem)] leading-design text-primary-deepest">
              From discarded textiles to meaningful outcomes, our process is
              built on intention, collaboration, and sustainability.
            </p>
          </div>
        </FadeIn>

        {/* ── Process Steps (Zigzag) ── */}
        <div className="mt-[clamp(2.5rem,5vw,4.1rem)] flex flex-col w-full">
          {processSteps.map((step, index) => {
            const isOdd = step.step % 2 !== 0;
            const isLast = index === processSteps.length - 1;

            return (
              <FadeIn key={step.step} direction="up" delay={index * 0.1}>
                {/* Desktop: flex with direction swap for zigzag */}
                <div className={`flex flex-col w-full items-center ${
                  isLast 
                    ? (isOdd ? "lg:flex-row lg:justify-start" : "lg:flex-row lg:justify-end")
                    : (isOdd ? "lg:flex-row" : "lg:flex-row-reverse")
                }`}>
                  <div className={`flex justify-center py-[clamp(1.23rem,2.5vw,1.65rem)] ${isLast ? "mx-20" : "lg:flex-1"}`}>
                    <ProcessStep
                      step={step.step}
                      title={step.title}
                      description={step.description}
                    />
                  </div>
                  {!isLast && (
                    <div className="hidden lg:flex lg:items-center lg:flex-[2]">
                      <ProcessCurve index={index as 0 | 1 | 2} />
                    </div>
                  )}
                </div>

                {/* Mobile/Tablet: vertical dashed connector */}
                {!isLast && (
                  <div className="flex justify-center lg:hidden">
                    <div className="h-[clamp(2.5rem,5vw,4.1rem)] border-l-[3px] border-dashed border-primary-82" />
                  </div>
                )}
              </FadeIn>
            );
          })}
        </div>

        {/* ── Bottom CTA Banner ── */}
        <FadeIn direction="up" as="div" delay={0.2}>
          <div className="mx-auto mt-[clamp(2.5rem,5vw,4.1rem)] flex w-full flex-col items-center gap-[clamp(0.82rem,1.65vw,1.28rem)] md:rounded-[1.85rem] rounded-sm bg-primary-deepest px-[5%] py-[clamp(2rem,4.1vw,3.3rem)] text-center lg:w-[71%]">
            <p className="text-[clamp(0.82rem,1.2vw,1.23rem)] font-medium leading-design text-white">
              Every step is guided by sustainability, creativity, and
              people-first thinking.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" href="/donate">Donate Now</Button>
              <Button variant="outline" href="/upcycler">Join as Upcycler</Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
