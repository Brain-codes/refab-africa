"use client";

import BrandCard from "./ui/BrandCard";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";

const partners = [
  {
    id: 1,
    name: "One Barrow",
    logo: "/images/brand-one-barrow.png",
  },
  {
    id: 2,
    name: "TA Community",
    logo: "/images/brand-ta-community.png",
  },
];

export default function Collaboration() {
  return (
    <section className="w-full overflow-hidden bg-background px-[5%] py-[clamp(3.2rem,6.5vw,5.7rem)]">
      <div className="mx-auto max-w-432">
        {/* ── Section Header ── */}
        <FadeIn direction="up" as="div">
          <div className="mb-[clamp(2.5rem,5vw,4.9rem)] flex flex-col items-center gap-4 text-center">
            {/* Badge */}
            <span className="inline-block rounded-lg bg-primary px-8 py-1.25 text-xs font-medium text-white">
              Brands we've worked with
            </span>

            {/* Title */}
            <h2 className="text-[clamp(1.65rem,3.7vw,2.5rem)] font-medium leading-design text-primary-deepest">
              Built Through{" "}
              <span className="font-extrabold text-primary not-italic uppercase">COLLABORATION</span>
            </h2>

            {/* Description */}
            <p className="mx-auto max-w-321 text-[clamp(0.72rem,1.2vw,1rem)] leading-design text-primary-deepest">
              Refab Africa is not built in isolation. Our work thrives through
              collaboration with creatives, artisans, brands, communities, and
              organizations who believe in building a more responsible future.
            </p>
          </div>
        </FadeIn>

        {/* ── Partner Brands Grid ── */}
        <StaggerContainer
          className="flex flex-wrap items-start justify-center gap-[clamp(1.23rem,2.5vw,2.5rem)]"
          stagger={0.1}
        >
          {partners.map((partner) => (
            <StaggerItem key={partner.id}>
              <BrandCard name={partner.name} logo={partner.logo} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
