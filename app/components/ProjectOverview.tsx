"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "./animations";

interface ProjectOverviewProps {
  overview: string;
  gallery: string[];
}

export default function ProjectOverview({
  overview,
  gallery,
}: ProjectOverviewProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  return (
    <section className="w-full bg-background px-[5%] py-[clamp(4rem,8vw,7rem)]">
      <div className="mx-auto max-w-432">

        {/* ── Overview Card ── */}
        <FadeIn direction="up">
          <div className="rounded-[24px] bg-[#dff2dc] p-[clamp(2rem,5vw,4rem)]">
            <h2 className="mb-[clamp(1rem,2vw,1.5rem)] text-[clamp(1.75rem,4vw,3.625rem)] font-normal leading-design text-primary-deepest">
              Project <span className="font-extrabold uppercase">OVERVIEW</span>
            </h2>
            <p className="max-w-[900px] text-[clamp(0.875rem,1.5vw,1.5rem)] font-normal leading-design text-primary-deepest">
              {overview}
            </p>
          </div>
        </FadeIn>

        {/* ── Gallery ── */}
        <div className="mt-[clamp(3rem,5vw,5rem)]">
          {/* Gallery Heading */}
          <FadeIn direction="up">
            <h2 className="text-center text-[clamp(1.75rem,4vw,3.625rem)] font-normal leading-design text-primary-deepest">
              Our <span className="font-extrabold">Gallery</span>
            </h2>
          </FadeIn>

          {/* Carousel */}
          <FadeIn direction="up" delay={0.1}>
            <div className="relative mt-[clamp(1.5rem,3vw,2.5rem)]">
              {/* Prev Arrow */}
              <button
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous slide"
                className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary p-3 text-white shadow-md transition-colors hover:bg-primary-dark"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Embla Viewport */}
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                  {gallery.map((src, index) => (
                    <div
                      key={index}
                      className="relative aspect-[442/594] min-w-[clamp(240px,28vw,442px)] flex-shrink-0 overflow-hidden rounded-[24px]"
                    >
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 80vw, 30vw"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Arrow */}
              <button
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next slide"
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary p-3 text-white shadow-md transition-colors hover:bg-primary-dark"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
