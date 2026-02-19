"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { FadeIn } from "./animations";

// ── Data ──────────────────────────────────────────────────────────────────────
const team = [
  {
    name: "Faith Oyedepo",
    role: "Operations Manager",
    image: "/images/team/faith.png",
  },
  {
    name: "Ben OGUNBOLA",
    role: "CO EXECUTIVE",
    image: "/images/team/ben.png",
  },
  {
    name: "EBOSE IFADA",
    role: "MEDIA PERSONEL",
    image: "/images/team/ebose.png",
  },
  {
    name: "RACHEAL ATTAH",
    role: "EXECUTIVE PRESIDENT",
    image: "/images/team/racheal.png",
  },
  {
    name: "EFE ADEWUMI ADENUGA",
    role: "NEXT BILLIONARE",
    image: "/images/team/efe.png",
  },
  {
    name: "CHRISTABEL PRINCEWILL",
    role: "IDEA ORGANIZER",
    image: "/images/team/christabel.png",
  },
  {
    name: "SOLOMON ADONAI",
    role: "W's IN THE CHAT",
    image: "/images/team/solomon.png",
  },
  {
    name: "ADVOCATE OF HUMAN RIGHTS",
    role: "DATA ANALYST",
    image: "/images/team/donald.png",
  },
];

// ── Card ──────────────────────────────────────────────────────────────────────
function TeamCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="relative aspect-[379/470] w-full overflow-hidden md:rounded-[27px] rounded-sm">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 70vw, 25vw"
      />
      {/* Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      {/* Text overlay */}
      <div className="absolute bottom-[clamp(0.82rem,1.5vw,1.5rem)] left-[clamp(0.82rem,1.5vw,1.5rem)]">
        <p className="text-[clamp(0.72rem,1vw,1rem)] font-bold leading-design text-white">
          {name}
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
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <section className="w-full bg-background py-[clamp(3.2rem,6.5vw,5.7rem)]">
      <div className="mx-auto max-w-432 px-[5%]">
        {/* Heading */}
        <FadeIn direction="up">
          <h2 className="mb-[clamp(1.65rem,3.3vw,3.3rem)] text-[clamp(1.65rem,3.3vw,3rem)] font-normal leading-design text-primary-deepest">
            Our Team
          </h2>
        </FadeIn>
      </div>

      {/* ── Mobile: horizontal carousel (bleeds edge to edge) ── */}
      <div className="md:hidden px-[5%]">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-[clamp(0.62rem,2.5vw,1rem)]">
            {team.map((member) => (
              <div
                key={member.name}
                className="min-w-[clamp(197px,59vw,280px)] flex-shrink-0"
              >
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop: 4-column grid ── */}
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
