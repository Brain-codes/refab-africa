"use client";

import Image from "next/image";
import { FadeIn } from "./animations";

export default function WhyRefab() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-deepest px-[5%] py-[clamp(4rem,8vw,7rem)]">
      <div className="mx-auto max-w-432">
        <div className="grid grid-cols-1 items-center gap-[clamp(2rem,5vw,4.75rem)] lg:grid-cols-[1.37fr_1fr]">
          {/* ── Left Column: Text Content ── */}
          <FadeIn direction="up" as="div">
            <div className="flex flex-col gap-[clamp(1.5rem,3vw,2.5rem)]">
              {/* Heading */}
              <h2 className="text-[clamp(2rem,4.5vw,3.1rem)] font-medium leading-design text-white">
                Why  <span className="font-bold uppercase text-primary"> Refab africa </span>
              </h2>

              {/* Body Text */}
              <div className="flex flex-col gap-4 text-[clamp(0.875rem,1.5vw,1.2rem)] leading-design text-white">
                <p>
                  Refab Africa was created from the belief that waste is not
                  the end of a story, but the beginning of a new one. In a
                  world where textile waste continues to grow, we choose to see
                  possibility where others see excess.
                </p>
                <p>
                  Rooted in African creativity and context, we transform
                  discarded textiles into meaningful outcomes that respect both
                  people and the planet. Our approach goes beyond recycling, it
                  is about rethinking value, responsibility, and the role
                  creativity plays in shaping a more sustainable future.
                </p>
                <p>
                  At the heart of Refab Africa is collaboration. We work
                  alongside creatives, communities, and partners who share our
                  vision, because we believe lasting impact is built together,
                  not in isolation.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* ── Right Column: Image ── */}
          <FadeIn direction="up" as="div" delay={0.1}>
            <div className="relative aspect-646/862 w-full overflow-hidden ">
              <Image
                src="/images/why-refab-africa.png"
                alt="Refab Africa team and community collaboration in textile waste recovery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
