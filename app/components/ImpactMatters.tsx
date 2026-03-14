"use client";

import Image from "next/image";
import ImpactCard from "./ui/ImpactCard";
import Button from "./ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";

const impactItems = [
  {
    title: "Reducing Textile Waste",
    description:
      "We intercept discarded fabrics and redirect them from landfills into meaningful reuse, helping reduce environmental strain and material waste.",
  },
  {
    title: "Supporting Circular Creativity",
    description:
      "By turning waste into resources, we enable designers and creatives to build responsibly without compromising on quality or expression.",
  },
  {
    title: "Empowering People Through Work",
    description:
      "Our process creates opportunities for collaboration, skill-building, and dignified participation across the value chain.",
  },
];

export default function ImpactMatters() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-deepest px-[5%] py-[clamp(3.2rem,6.5vw,7.2rem)]">
      {/* TODO: Add decorative SVG vectors (Vector 1 & Vector 3) once downloaded from Figma */}

      <div className="relative z-10 mx-auto max-w-[1728px]">
              {/* SVG background pattern */}
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <Image
                  src="/images/wave-1.svg"
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>
        {/* ── Header ── */}
        <FadeIn direction="up" as="div">
          <div className="flex flex-col gap-[0.82rem]">
            <h2 className="text-[clamp(1.65rem,3.7vw,2.5rem)] font-medium leading-design text-white">
              <span className="font-extrabold text-primary">IMPACT</span> That
              Matters
            </h2>
            <p className="max-w-[44rem] text-[clamp(0.72rem,1.2vw,1rem)] leading-design text-white">
              Every action we take contributes to a more sustainable future for
              people and the planet.
            </p>
          </div>
        </FadeIn>

        {/* ── Image Container with Cards Inside ── */}
        <FadeIn direction="up" as="div" delay={0.1}>
          <div className="relative mt-[clamp(1.65rem,3.3vw,3.3rem)] overflow-hidden md:rounded-2xl rounded-sm border border-primary p-[clamp(1.65rem,4.1vw,3.9rem)]">
            {/* Background image — covers entire container, blurred */}
            <Image
              src="/images/impact-matters-featured.png"
              alt="Refab Africa impact through textile waste recovery and community empowerment"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 90vw"
            />
            {/* Frosted overlay — matches Figma backdrop-filter blur(6.4px) */}
            <div className="absolute inset-0 backdrop-blur-md bg-[#001a038f]" />

            {/* ── Impact Cards (inside the container) ── */}
            <StaggerContainer
              className="relative z-10 flex flex-col items-center gap-[clamp(1.23rem,4.1vw,3.9rem)]"
              stagger={0.15}
            >
              {/* Row 1 — Two cards side by side */}
              <div className="grid w-full grid-cols-1 gap-[clamp(1.23rem,4.1vw,3.9rem)] sm:grid-cols-2">
                <StaggerItem>
                  <ImpactCard
                    title={impactItems[0].title}
                    description={impactItems[0].description}
                  />
                </StaggerItem>
                <StaggerItem>
                  <ImpactCard
                    title={impactItems[1].title}
                    description={impactItems[1].description}
                  />
                </StaggerItem>
              </div>

              {/* Row 2 — Single centered card */}
              <div className="w-full sm:w-1/2">
                <StaggerItem>
                  <ImpactCard
                    title={impactItems[2].title}
                    description={impactItems[2].description}
                  />
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </FadeIn>

        {/* ── Join CTAs ── */}
        <FadeIn direction="up" delay={0.2} as="div">
          <div className="mt-[clamp(1.65rem,3vw,2.5rem)] flex flex-wrap gap-3">
            <Button variant="outline" href="/agent">Become an Agent</Button>
            <Button variant="outline" href="/upcycler">Join as Upcycler</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
