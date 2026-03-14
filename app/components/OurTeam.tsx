"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "./animations";

const AUTOPLAY_DELAY = 3500;
// Higher = more subtle parallax shift. 10 means ±10% image shift when diff = ±1 snap.
const PARALLAX_FACTOR = 10;

// ── Data ──────────────────────────────────────────────────────────────────────
const team = [
  {
    name: "Faith Oyedepo",
    role: "Operations Manager",
    image: "/images/team/FAITH.png",
  },
  {
    name: "Ben OGUNBOLA",
    role: "CO EXECUTIVE",
    image: "/images/team/BEN.png",
  },
  {
    name: "EBOSE IFADA",
    role: "MEDIA PERSONEL",
    image: "/images/team/EBOSE.png",
  },
  {
    name: "RACHEAL ATTAH",
    role: "EXECUTIVE PRESIDENT",
    image: "/images/team/RACHEAL.png",
  },
  {
    name: "EFE ADEWUMI ADENUGA",
    role: "NEXT BILLIONARE",
    image: "/images/team/EFE.png",
  },
  {
    name: "CHRISTABEL PRINCEWILL",
    role: "IDEA ORGANIZER",
    image: "/images/team/CHRISTABEL.png",
  },
  {
    name: "SOLOMON ADONAI",
    role: "W's IN THE CHAT",
    image: "/images/team/SOLOMON.png",
  },
  {
    name: "ADVOCATE OF HUMAN RIGHTS",
    role: "DATA ANALYST",
    image: "/images/team/DONALD.png",
  },
];

// ── Name formatter — uppercase all, bold the surname (last word) ──────────────
function formatName(raw: string) {
  const words = raw.trim().toUpperCase().split(/\s+/);
  if (words.length === 1) return <span className="font-bold">{words[0]}</span>;
  const given = words.slice(0, -1).join(" ");
  const surname = words[words.length - 1];
  return (
    <>
      <span className="font-normal">{given} </span>
      <span className="font-bold">{surname}</span>
    </>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────
// `parallaxImageRef` — when provided (mobile), the image layer receives the
// parallax transform. It's scaled 120% so edges stay hidden during the shift.
// Desktop cards receive no ref and no scale.
function TeamCard({
  name,
  role,
  image,
  parallaxImageRef,
}: {
  name: string;
  role: string;
  image: string;
  parallaxImageRef?: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div className="relative aspect-[379/470] w-full overflow-hidden md:rounded-[27px] rounded-sm">
      {/* Image layer */}
      <div
        ref={parallaxImageRef}
        className="absolute inset-0"
        style={parallaxImageRef ? { transform: "scale(1.2)" } : undefined}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 70vw, 25vw"
        />
      </div>
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      {/* Text overlay */}
      <div className="absolute bottom-[clamp(0.82rem,1.5vw,1.5rem)] left-[clamp(0.82rem,1.5vw,1.5rem)]">
        <p className="text-[clamp(0.72rem,1vw,1rem)] leading-design text-white">
          {formatName(name)}
        </p>
        <p className="text-[clamp(0.62rem,1vw,1rem)] font-normal leading-design text-primary">
          {role}
        </p>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function OurTeam() {
  const autoplay = useRef(
    Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay.current],
  );

  // ── Progress + slide counter ──────────────────────────────────────
  const [progress, setProgress] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
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

  // ── Parallax ──────────────────────────────────────────────────────
  // Index-aligned refs to each card's image layer div
  const parallaxNodes = useRef<(HTMLDivElement | null)[]>([]);

  const applyParallax = useCallback((api: typeof emblaApi) => {
    if (!api) return;
    const engine = api.internalEngine();
    const scrollProgress = api.scrollProgress();
    const slidesInView = api.slidesInView();

    api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      // diffToTarget: distance of this snap from the current scroll position.
      // 0 = active/centred, >0 = to the right, <0 = to the left.
      const diffToTarget = scrollSnap - scrollProgress;

      engine.slideRegistry[snapIndex].forEach((slideIndex) => {
        if (!slidesInView.includes(slideIndex)) return;
        const node = parallaxNodes.current[slideIndex];
        if (!node) return;
        // Negative factor: image lags behind the slide, creating depth.
        const translate = (diffToTarget * -100) / PARALLAX_FACTOR;
        node.style.transform = `scale(1.2) translateX(${translate}%)`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setProgress(0);
      setSelectedIndex(emblaApi.selectedScrollSnap());
      startProgressTick(emblaApi);
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", applyParallax);
    emblaApi.on("reInit", applyParallax);

    startProgressTick(emblaApi);
    applyParallax(emblaApi); // seed on mount

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("scroll", applyParallax);
      emblaApi.off("reInit", applyParallax);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [emblaApi, startProgressTick, applyParallax]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="w-full bg-background py-[clamp(3.2rem,6.5vw,5.7rem)]">

      {/* Heading — padded, stays inside container */}
      <div className="mx-auto max-w-432 px-[5%]">
        <FadeIn direction="up">
          <h2 className="mb-[clamp(1.65rem,3.3vw,3.3rem)] text-[clamp(1.65rem,3.3vw,3rem)] font-medium leading-design text-primary-deepest">
            Our <span className="font-extrabold text-primary uppercase"> Team </span>
          </h2>
        </FadeIn>
      </div>

      {/* ── Mobile: edge-to-edge parallax carousel ── */}
      <div className="md:hidden">

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="min-w-[clamp(197px,59vw,280px)] flex-shrink-0 pl-3"
              >
                <TeamCard
                  {...member}
                  parallaxImageRef={(el) => {
                    parallaxNodes.current[index] = el;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Controls — arrows + counter + progress */}
        <div className="mt-5 flex items-center justify-between px-[5%]">
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              aria-label="Previous member"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next member"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[0.78rem] font-semibold text-primary-deepest">
              <span className="text-primary">{pad(selectedIndex + 1)}</span>
              <span className="mx-1 text-primary-deepest/30">/</span>
              {pad(team.length)}
            </span>
            <div className="h-[3px] w-[clamp(80px,28vw,160px)] overflow-hidden rounded-full bg-primary/20">
              <div
                className="h-full bg-primary transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* ── Desktop: 4-column grid (unchanged) ── */}
      <div className="mx-auto hidden max-w-432 px-[5%] md:grid md:grid-cols-4 md:gap-[clamp(0.62rem,1vw,1rem)]">
        {team.map((member, i) => (
          <FadeIn key={member.name} direction="up" delay={i * 0.05}>
            <TeamCard {...member} />
          </FadeIn>
        ))}
      </div>

    </section>
  );
}
