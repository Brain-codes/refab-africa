"use client";

import Image from "next/image";
import Button from "./ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "./animations";

const impactCards = [
  {
    id: "textile-waste",
    title: "Textile Waste Recovery",
    description:
      "We collect and repurpose discarded fabrics, giving new life to materials that would otherwise end up in landfills.",
    image: "/images/impact-textile-waste.png",
  },
  {
    id: "circular-fashion",
    title: "Circular Fashion & Products",
    description:
      "We design functional, well-crafted products from recovered textiles, proving that sustainability and quality can coexist.",
    image: "/images/impact-circular-fashion.png",
  },
  {
    id: "community",
    title: "Community & Collaboration",
    description:
      "We work with creatives, artisans, and partners to create dignified opportunities and shared impact across communities.",
    image: "/images/impact-community.png",
  },
];

export default function Impact() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-light px-[5%] py-[clamp(4rem,8vw,7rem)]">
      {/* TODO: Add decorative background vector (impact-bg-vector.svg) once downloaded from Figma */}

      <div className="relative z-10 mx-auto max-w-[1728px]">
        {/* ── Header Row ── */}
        <FadeIn direction="up" as="div">
          <div className="flex flex-wrap items-center justify-between gap-[clamp(1.5rem,3vw,2rem)]">
            <div className="flex max-w-[54rem] flex-col gap-[1rem]">
              <h2 className="text-[clamp(2rem,4.5vw,3.1rem)] font-medium leading-design text-primary-deepest">
                Turning Textile <br className="md:flex hidden" /> Waste Into{" "}
                <span className="font-extrabold text-primary not-italic">
                  IMPACT
                </span>
              </h2>
              <p className="text-[clamp(0.875rem,1.5vw,1.2rem)] leading-design text-primary-deepest">
                We transforms discarded textiles into functional products,
                creative solutions, and opportunities that benefit both people
                and the planet.
              </p>
            </div>

            <Button variant="outline" href="/donate">
              Donate Now
            </Button>
          </div>
        </FadeIn>

        {/* ── Bento Card Grid ── */}
        <StaggerContainer
          className="mt-[clamp(2rem,4vw,3.5rem)] grid grid-cols-1 gap-[clamp(1rem,1.6vw,1.625rem)] sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.15}
        >
          {/* Card 1 — Full Image */}
          <StaggerItem>
            <div className="relative aspect-[503/632] overflow-hidden rounded-2xl border border-primary">
              <Image
                src="/images/impact-card-1.png"
                alt="Impact through textile waste recovery"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </StaggerItem>

          {/* Card 2 — Textile Waste Recovery (text + clipped bg image) */}
          <StaggerItem>
            <div className="relative aspect-[503/632] overflow-hidden rounded-2xl border border-primary bg-primary-light">
              {/* Background image — overflow-clipped by parent */}
              <div className="absolute inset-0">
                <Image
                  src={impactCards[0].image}
                  alt=""
                  fill
                  className="object-cover opacity-20"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-between p-[clamp(1.5rem,3vw,3rem)]">
                <h3 className="text-[clamp(1.5rem,2.8vw,2.5rem)] font-semibold leading-design text-primary">
                  {impactCards[0].title}
                </h3>
                <p className="text-[clamp(0.875rem,1.5vw,1.5rem)] leading-design text-primary-deepest">
                  {impactCards[0].description}
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Card 3 — Circular Fashion & Products (image + text) */}
          <StaggerItem>
            <div className="relative aspect-[503/632] overflow-hidden rounded-2xl border border-primary bg-primary-light">
              {/* Clipped image */}
              <div className="absolute inset-0">
                <Image
                  src={impactCards[1].image}
                  alt=""
                  fill
                  className="object-cover opacity-20"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-between p-[clamp(1.5rem,3vw,3rem)]">
                <h3 className="text-[clamp(1.5rem,2.8vw,2.5rem)] font-semibold leading-design text-primary">
                  {impactCards[1].title}
                </h3>
                <p className="text-[clamp(0.875rem,1.5vw,1.5rem)] leading-design text-primary-deepest">
                  {impactCards[1].description}
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Card 4 — Wide Full Image */}
          <StaggerItem className="sm:col-span-2">
            <div className="relative aspect-[503/632] overflow-hidden rounded-2xl border border-primary sm:aspect-[1032/632]">
              <Image
                src="/images/impact-card-4.png"
                alt="Community collaboration and impact"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 66vw"
              />
            </div>
          </StaggerItem>

          {/* Card 5 — Community & Collaboration (text + bottom image) */}
          <StaggerItem>
            <div className="relative aspect-[503/632] overflow-hidden rounded-2xl border border-primary bg-primary-light">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={impactCards[2].image}
                  alt=""
                  fill
                  className="object-cover opacity-20"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-between p-[clamp(1.5rem,3vw,3rem)]">
                <h3 className="text-[clamp(1.5rem,2.8vw,2.5rem)] font-semibold leading-design text-primary">
                  {impactCards[2].title}
                </h3>
                <p className="text-[clamp(0.875rem,1.5vw,1.5rem)] leading-design text-primary-deepest">
                  {impactCards[2].description}
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* ── Bottom CTA Buttons ── */}
        <FadeIn direction="up" as="div" delay={0.2}>
          <div className="mt-[clamp(2rem,4vw,3.5rem)] flex flex-wrap items-center justify-center gap-[clamp(1rem,2.2vw,2.1875rem)]">
            <Button variant="primary-dark" href="/portfolio">
              See How We Create Impact
            </Button>
            <Button variant="outline" href="/about">
              Learn More About Our Work
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
