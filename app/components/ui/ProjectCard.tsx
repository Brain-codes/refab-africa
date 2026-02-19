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
      <div className="mb-[clamp(2rem,3vw,3rem)] flex items-start justify-between gap-4">
        <div className="flex flex-col gap-[clamp(0.75rem,1.5vw,1.25rem)]">
          <h3 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-semibold leading-design text-primary">
            {title}
          </h3>
          <p className="max-w-242 text-[clamp(0.875rem,1.5vw,1.2rem)] leading-design text-primary-deepest">
            {description}
          </p>
        </div>

        {/* Arrow Icon Button */}
        <Link
          href={href}
          className="flex h-[clamp(3rem,5vw,4.9375rem)] w-[clamp(3rem,5vw,4.9375rem)] shrink-0 items-center justify-center rounded-sm bg-primary transition-colors hover:bg-primary-dark"
          aria-label={`View ${title} project details`}
        >
          <ArrowUpRight className="h-[clamp(1.5rem,2.5vw,2rem)] w-[clamp(1.5rem,2.5vw,2rem)] text-white" />
        </Link>
      </div>

      {/* Images Grid */}
      <div className="mb-[clamp(1.5rem,2.5vw,2rem)] grid grid-cols-1 gap-[clamp(1rem,2vw,2rem)] md:grid-cols-[1.53fr_1fr]">
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
      <div className="flex flex-wrap gap-[clamp(0.5rem,1vw,1rem)]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm border border-primary bg-primary-light px-[clamp(0.75rem,1.5vw,1.5rem)] py-[clamp(0.375rem,0.8vw,0.625rem)] text-[clamp(0.875rem,1vw,1rem)] font-medium text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
