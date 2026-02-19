"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "./animations";

const AUTOPLAY_DELAY = 4000;

interface ProjectOverviewProps {
  overview: string;
  gallery: string[];
}

export default function ProjectOverview({
  overview,
  gallery,
}: ProjectOverviewProps) {
  const autoplay = useRef(
    Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      dragFree: false,
      duration: 30,
    },
    [autoplay.current],
  );

  // ── Progress using Embla Autoplay plugin's timeUntilNext() ────────
  const [progress, setProgress] = useState(0);
  const rafId = useRef<number | null>(null);

  const startProgressTick = useCallback((api: typeof emblaApi) => {
    if (!api) return;
    const plugin = api.plugins().autoplay as typeof autoplay.current | undefined;
    if (!plugin) return;

    const tick = () => {
      const remaining = plugin.timeUntilNext();
      if (remaining !== null) {
        const elapsed = AUTOPLAY_DELAY - remaining;
        setProgress(Math.min((elapsed / AUTOPLAY_DELAY) * 100, 100));
      }
      rafId.current = requestAnimationFrame(tick);
    };

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    // Reset progress on every slide change, restart tick
    const onSelect = () => {
      setProgress(0);
      startProgressTick(emblaApi);
    };

    emblaApi.on("select", onSelect);
    startProgressTick(emblaApi);

    return () => {
      emblaApi.off("select", onSelect);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [emblaApi, startProgressTick]);

  // ── Arrows ────────────────────────────────────────────────────────
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="w-full bg-background pb-[clamp(3.2rem,6.5vw,5.7rem)]">
      <div className="  relative">

        {/* ── Overview Card ── */}
        <div className="px-[5%] h-fit absolute top-[clamp(-33rem,-24.5vw,-16.4rem)] left-1/2 -translate-x-1/2 w-full">
          <FadeIn direction="up">
            <div className="rounded-l bg-[#dff2dc] p-[clamp(1.65rem,4.1vw,3.3rem)]">
              <h2 className="mb-[clamp(0.82rem,1.65vw,1.23rem)] text-[clamp(1.65rem,3.7vw,2.5rem)] font-normal leading-design text-primary-deepest">
                Project <span className="font-extrabold text-primary">OVERVIEW</span>
              </h2>
              <p className="max-w-[740px] text-[clamp(0.72rem,1.2vw,1rem)] font-normal leading-design text-primary-deepest">
                {overview}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* ── Gallery ── */}
        <div className="mt-[clamp(12.3rem,16.4vw,20.5rem)] overflow-x-hidden">

          {/* Heading */}
          <FadeIn direction="up">
            <h2 className="text-center md:mt-0 mt-10 text-[clamp(1.65rem,3.7vw,2.5rem)] font-normal leading-design text-primary-deepest mb-[clamp(1.23rem,2.5vw,2rem)]">
              Our <span className="font-extrabold text-primary uppercase">Gallery</span>
            </h2>
          </FadeIn>

          {/* Full-width carousel — bleeds edge to edge */}
          <div className="w-full relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {gallery.map((src, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 aspect-[442/594]
                               w-[80%] sm:w-[55%] md:w-[30%] lg:w-[21%]
                               pl-3 sm:pl-4"
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 55vw, 30vw"
                        draggable={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Controls: arrows left, progress right */}
          <div className="mt-6 flex items-center justify-between px-[5%]">
            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                aria-label="Previous slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Progress bar driven by autoplay.timeUntilNext() */}
            <div className="h-[3px] w-[clamp(98px,16.5vw,213px)] overflow-hidden rounded-full bg-primary/20">
              <div
                className="h-full bg-primary transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
