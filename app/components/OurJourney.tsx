import { FadeIn } from "./animations";

// ── Data ──────────────────────────────────────────────────────────────────────
const journeyItems = [
  {
    month: "January",
    description:
      "Founded with a vision to transform businesses, we started our journey.",
    position: "above" as const,
  },
  {
    month: "February",
    description:
      "Founded with a vision to transform businesses, we started our journey.",
    position: "below" as const,
  },
  {
    month: "March",
    description:
      "Founded with a vision to transform businesses, we started our journey.",
    position: "above" as const,
  },
  {
    month: "April",
    description:
      "Founded with a vision to transform businesses, we started our journey.",
    position: "below" as const,
  },
];

const DOT_POSITIONS = [12.5, 37.5, 62.5, 87.5];

// ── Item content (shared between desktop and mobile) ─────────────────────────
function JourneyItem({ month, description }: { month: string; description: string }) {
  return (
    <>
      <h3 className="text-[clamp(1.44rem,2.9vw,3rem)] font-bold leading-design text-primary-deepest capitalize uppercase">
        {month}
      </h3>
      <p className="mt-[clamp(0.21rem,0.41vw,0.41rem)] text-[clamp(0.72rem,1vw,1rem)] font-normal leading-design text-black">
        {description}
      </p>
    </>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function OurJourney() {
  const above = journeyItems.filter((i) => i.position === "above");
  const below = journeyItems.filter((i) => i.position === "below");

  return (
    <section className="w-full bg-primary-light px-[5%] py-[clamp(3.2rem,6.5vw,5.7rem)]">
      <div className="mx-auto max-w-432">

        {/* Heading */}
        <FadeIn direction="up">
          <h2 className="mb-[clamp(2.5rem,5vw,4.9rem)] text-[clamp(1.65rem,3.3vw,3rem)] font-medium leading-design text-primary-deepest">
            Our <span className="font-extrabold text-primary uppercase"> Q1 Journey </span>
          </h2>
        </FadeIn>

        {/* ── Desktop: horizontal zigzag timeline ── */}
        <div className="hidden md:block">

          {/* Row above the line: January (col 1) and March (col 3) */}
          <div className="grid grid-cols-4">
            {above.map((item, i) => (
              <div
                key={item.month}
                className={i === 0 ? "col-start-1 pr-4" : "col-start-3 pr-4"}
              >
                <FadeIn direction="up" delay={i * 0.1}>
                  <JourneyItem {...item} />
                </FadeIn>
              </div>
            ))}
          </div>

          {/* Timeline line with dots */}
          <div
            className="relative my-[clamp(1.23rem,2.5vw,2.5rem)]"
            aria-hidden="true"
          >
            {/* Horizontal line */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-primary" />
            {/* Dots */}
            <div className="relative h-5 flex items-center">
              {DOT_POSITIONS.map((pct) => (
                <div
                  key={pct}
                  className="absolute h-5 w-5 -translate-x-1/2 rounded-full bg-primary"
                  style={{ left: `${pct}%` }}
                />
              ))}
            </div>
          </div>

          {/* Row below the line: February (col 2) and April (col 4) */}
          <div className="grid grid-cols-4">
            {below.map((item, i) => (
              <div
                key={item.month}
                className={i === 0 ? "col-start-2 pr-4" : "col-start-4"}
              >
                <FadeIn direction="up" delay={i * 0.1 + 0.2}>
                  <JourneyItem {...item} />
                </FadeIn>
              </div>
            ))}
          </div>

        </div>

        {/* ── Mobile: vertical timeline ── */}
        <div className="flex flex-col md:hidden">
          {journeyItems.map((item, i) => (
            <FadeIn key={item.month} direction="up" delay={i * 0.1}>
              <div className="flex gap-[clamp(1rem,3vw,1.5rem)]">
                {/* Connector: dot + vertical line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="mt-[0.4rem] h-4 w-4 rounded-full bg-primary" />
                  {i < journeyItems.length - 1 && (
                    <div className="mt-2 w-px flex-1 bg-primary/30" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-[clamp(1.5rem,4vw,2.5rem)]">
                  <JourneyItem {...item} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
