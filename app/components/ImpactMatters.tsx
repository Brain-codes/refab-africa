"use client";

import Image from "next/image";
import ImpactCard from "./ui/ImpactCard";
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
    <section className="relative w-full overflow-hidden bg-primary-deepest px-[5%] py-[clamp(4rem,8vw,8.75rem)]">
      {/* TODO: Add decorative SVG vectors (Vector 1 & Vector 3) once downloaded from Figma */}

      <div className="relative z-10 mx-auto max-w-[1728px]">
        {/* ── Header ── */}
        <FadeIn direction="up" as="div">
          <div className="flex flex-col gap-[1rem]">
            <h2 className="text-[clamp(2rem,4.5vw,3.1rem)] font-medium leading-design text-white">
              <span className="font-extrabold text-primary">IMPACT</span> That
              Matters
            </h2>
            <p className="max-w-[54rem] text-[clamp(0.875rem,1.5vw,1.2rem)] leading-design text-white">
              Every action we take contributes to a more sustainable future for
              people and the planet.
            </p>
          </div>
        </FadeIn>

        {/* ── Image Container with Cards Inside ── */}
        <FadeIn direction="up" as="div" delay={0.1}>
          <div className="relative mt-[clamp(2rem,4vw,4rem)] overflow-hidden rounded-2xl border border-primary p-[clamp(2rem,5vw,4.75rem)]">
            {/* Background image — covers entire container, blurred */}
            <Image
              src="/images/impact-matters-featured.png"
              alt="Refab Africa impact through textile waste recovery and community empowerment"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 90vw"
            />
            {/* Frosted overlay — matches Figma backdrop-filter blur(6.4px) */}
            <div className="absolute inset-0 backdrop-blur-md" />

            {/* ── Impact Cards (inside the container) ── */}
            <StaggerContainer
              className="relative z-10 flex flex-col items-center gap-[clamp(1.5rem,5vw,4.75rem)]"
              stagger={0.15}
            >
              {/* Row 1 — Two cards side by side */}
              <div className="grid w-full grid-cols-1 gap-[clamp(1.5rem,5vw,4.75rem)] sm:grid-cols-2">
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
      </div>
    </section>
  );
}
