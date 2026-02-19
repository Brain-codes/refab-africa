"use client";

import ProjectCard from "./ui/ProjectCard";
import { FadeIn } from "./animations";
import { projects } from "../lib/projects";

export default function ProjectsList() {
  return (
    <section className="w-full overflow-hidden bg-primary-light px-[5%] py-[clamp(3.2rem,6.5vw,5.7rem)]">
      <div className="mx-auto max-w-432">
        {/* ── Section Header ── */}
        <FadeIn direction="up" as="div">
          <div className="mb-[clamp(1.65rem,2.5vw,2rem)] flex flex-col gap-4">
            {/* Badge */}
            <span className="inline-block w-fit rounded-lg bg-primary px-8 py-1.25 text-xs font-medium text-white">
              Case Study
            </span>

            {/* Title */}
            <h2 className="text-[clamp(1.65rem,3.7vw,2.5rem)] font-medium leading-design text-primary-deepest">
              Our <span className="font-extrabold text-primary">Projects</span>
            </h2>

            {/* Description */}
            <p className="max-w-186 text-[clamp(0.72rem,1.2vw,1rem)] leading-design text-primary-deepest">
              Refab Africa is not built in isolation. Our work thrives through
              collaboration with creatives, artisans, brands, communities.
            </p>
          </div>

          {/* Divider */}
          <div className="mb-[clamp(2.5rem,4.1vw,4.1rem)] h-px w-full bg-primary" />
        </FadeIn>

        {/* ── Projects List ── */}
        <div className="flex flex-col gap-[clamp(2.5rem,4.1vw,4.1rem)]">
          {projects.map((project, index) => (
            <div key={project.id}>
              <FadeIn direction="up" delay={index * 0.1}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image1={project.image1}
                  image2={project.image2}
                  tags={project.tags}
                  href={`/projects/${project.slug}`}
                />
              </FadeIn>

              {/* Divider between projects (not after last one) */}
              {index < projects.length - 1 && (
                <div className="my-[clamp(2.5rem,4.1vw,4.1rem)] h-px w-full bg-primary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
