"use client";

import { motion } from "motion/react";
import { FadeIn } from "./animations";

interface ProjectNarrativeProps {
  challenge: string;
  approach: string;
  impact: string;
  keyTakeaway: string;
}

const blocks = [
  { key: "challenge" as const, heading: "The Challenge", number: "01" },
  { key: "approach" as const, heading: "The Approach", number: "02" },
  { key: "impact" as const, heading: "The Impact", number: "03" },
  { key: "keyTakeaway" as const, heading: "Key Takeaway", number: "04" },
];

function NarrativeBlock({
  number,
  heading,
  body,
  delay,
  direction,
}: {
  number: string;
  heading: string;
  body: string;
  delay: number;
  direction: "up" | "left" | "right";
}) {
  return (
    <FadeIn direction={direction} delay={delay}>
      <div className="flex flex-col gap-[clamp(0.5rem,1vw,0.82rem)]">
        {/* Animated top border */}
        <div className="relative h-[2px] w-full overflow-hidden bg-primary/20">
          <motion.div
            className="absolute inset-y-0 left-0 bg-primary"
            initial={{ width: "0%" }}
            whileInView={{ width: "38%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay, ease: "easeOut" as const }}
          />
        </div>

        {/* Large watermark number */}
        <span
          className="select-none font-extrabold leading-none text-primary"
          style={{
            fontSize: "clamp(3.5rem,7vw,6.5rem)",
            opacity: 0.1,
          }}
        >
          {number}
        </span>

        {/* Heading with green dot */}
        <div className="-mt-2 flex items-center gap-[0.5rem]">
          <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
          <h3 className="text-[clamp(1rem,1.6vw,1.4rem)] font-semibold leading-design text-primary-deepest">
            {heading}
          </h3>
        </div>

        {/* Body */}
        <p className="pl-[1rem] text-[clamp(0.72rem,0.85vw,0.88rem)] leading-[1.8] text-[#4d4845]">
          {body}
        </p>
      </div>
    </FadeIn>
  );
}

export default function ProjectNarrative({
  challenge,
  approach,
  impact,
  keyTakeaway,
}: ProjectNarrativeProps) {
  const content = { challenge, approach, impact, keyTakeaway };

  return (
    <section className="w-full overflow-hidden bg-background px-[5%] py-[clamp(3.2rem,6.5vw,5.7rem)]">
      <div className="mx-auto max-w-[1728px]">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="mb-[clamp(2.5rem,5vw,4.5rem)]">
            <span className="mb-[clamp(0.5rem,0.82vw,0.82rem)] inline-block rounded-full bg-primary px-[1.65rem] py-[0.26rem] text-[0.72rem] font-medium text-white">
              Project Narrative
            </span>
            <h2 className="text-[clamp(1.65rem,3.7vw,3rem)] font-normal leading-design text-primary-deepest">
              The{" "}
              <span className="font-extrabold uppercase text-primary">
                Story
              </span>{" "}
              Behind It
            </h2>
          </div>
        </FadeIn>

        {/* Mobile: single column */}
        <div className="flex flex-col gap-[clamp(2.5rem,5vw,4rem)] lg:hidden">
          {blocks.map(({ key, heading, number }, i) => (
            <NarrativeBlock
              key={key}
              number={number}
              heading={heading}
              body={content[key]}
              delay={i * 0.1}
              direction="up"
            />
          ))}
        </div>

        {/* Desktop: 2-column staggered editorial layout */}
        <div className="hidden items-start gap-[clamp(2rem,5vw,5rem)] lg:flex">
          {/* Left column — blocks 1 & 3 */}
          <div className="flex flex-1 flex-col gap-[clamp(3rem,6vw,5.5rem)]">
            <NarrativeBlock
              number={blocks[0].number}
              heading={blocks[0].heading}
              body={content[blocks[0].key]}
              delay={0}
              direction="right"
            />
            <NarrativeBlock
              number={blocks[2].number}
              heading={blocks[2].heading}
              body={content[blocks[2].key]}
              delay={0.2}
              direction="right"
            />
          </div>

          {/* Vertical gradient divider */}
          <div className="w-[1px] flex-shrink-0 self-stretch bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          {/* Right column — blocks 2 & 4, shifted down for stagger */}
          <div
            className="flex flex-1 flex-col gap-[clamp(3rem,6vw,5.5rem)]"
            style={{ marginTop: "clamp(4rem,8vw,7rem)" }}
          >
            <NarrativeBlock
              number={blocks[1].number}
              heading={blocks[1].heading}
              body={content[blocks[1].key]}
              delay={0.1}
              direction="left"
            />
            <NarrativeBlock
              number={blocks[3].number}
              heading={blocks[3].heading}
              body={content[blocks[3].key]}
              delay={0.3}
              direction="left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
