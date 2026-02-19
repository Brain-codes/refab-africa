import { FadeIn } from "./animations";

interface ProjectNarrativeProps {
  challenge: string;
  approach: string;
  impact: string;
  keyTakeaway: string;
}

const blocks = [
  { key: "challenge" as const, heading: "The Challenge" },
  { key: "approach" as const, heading: "The Approach" },
  { key: "impact" as const, heading: "The Impact" },
  { key: "keyTakeaway" as const, heading: "Key Takeaway" },
];

export default function ProjectNarrative({
  challenge,
  approach,
  impact,
  keyTakeaway,
}: ProjectNarrativeProps) {
  const content = { challenge, approach, impact, keyTakeaway };

  return (
    <section className="w-full bg-background px-[5%] py-[clamp(3.2rem,6.5vw,5.7rem)]">
      <div className="mx-auto max-w-432">
        <div className="flex flex-col gap-[clamp(2.5rem,4.5vw,4.5rem)] max-w-[711px]">
          {blocks.map(({ key, heading }, i) => (
            <FadeIn key={key} direction="up" delay={i * 0.1}>
              <div className="flex flex-col gap-[clamp(0.62rem,1vw,1rem)]">
                <h3 className="text-[clamp(0.92rem,1.2vw,1.23rem)] font-semibold leading-[1.5] text-[#121212]">
                  {heading}
                </h3>
                <p className="text-[clamp(0.72rem,0.82vw,0.82rem)] leading-[1.5] text-[#4d4845]">
                  {content[key]}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
