import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image1: string;
  image2: string;
  tags: string[];
  href?: string;
}

export default function ProjectCard({
  title,
  description,
  image1,
  image2,
  tags,
  href = "#",
}: ProjectCardProps) {
  return (
    <div className="flex flex-col">
      {/* Header with title, description, and arrow button */}
      <div className="mb-[clamp(1.65rem,2.5vw,2.5rem)] flex items-start justify-between gap-4">
        <div className="flex flex-col gap-[clamp(0.62rem,1.2vw,1rem)]">
          <h3 className="text-[clamp(1.23rem,2vw,2rem)] font-semibold leading-design text-primary">
            {title}
          </h3>
          <p className="max-w-242 text-[clamp(0.72rem,1.2vw,1rem)] leading-design text-primary-deepest">
            {description}
          </p>
        </div>

        {/* Arrow Icon Button */}
        <Link
          href={href}
          className="flex h-[clamp(2.5rem,4.1vw,4rem)] w-[clamp(2.5rem,4.1vw,4rem)] shrink-0 items-center justify-center rounded-sm bg-primary transition-colors hover:bg-primary-dark"
          aria-label={`View ${title} project details`}
        >
          <ArrowUpRight className="h-[clamp(1.23rem,2vw,1.65rem)] w-[clamp(1.23rem,2vw,1.65rem)] text-white" />
        </Link>
      </div>

      {/* Images Grid */}
      <div className="mb-[clamp(1.23rem,2vw,1.65rem)] grid grid-cols-1 gap-[clamp(0.82rem,1.65vw,1.65rem)] md:grid-cols-[1.53fr_1fr]">
        <div className="relative aspect-[1.93] w-full overflow-hidden md:rounded-3xl rounded-sm border border-primary">
          <Image
            src={image1}
            alt={`${title} - Image 1`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
        <div className="relative aspect-[1.26] w-full overflow-hidden md:rounded-3xl rounded-sm border border-primary">
          <Image
            src={image2}
            alt={`${title} - Image 2`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-[clamp(0.41rem,0.82vw,0.82rem)]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm border border-primary bg-primary-light px-[clamp(0.62rem,1.2vw,1.23rem)] py-[clamp(0.31rem,0.65vw,0.51rem)] text-[clamp(0.72rem,0.82vw,0.82rem)] font-medium text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
