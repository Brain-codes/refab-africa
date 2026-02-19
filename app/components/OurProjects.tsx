"use client";

import ProjectCard from "./ui/ProjectCard";
import Button from "./ui/Button";
import { FadeIn } from "./animations";
import { projects } from "../lib/projects";

// Show only the first 2 projects on the homepage
const featuredProjects = projects.slice(0, 2);

export default function OurProjects() {
  return (
    <section className="w-full overflow-hidden bg-primary-light px-[5%] py-[clamp(4rem,8vw,7rem)]">
      <div className="mx-auto max-w-432">
        {/* ── Section Header ── */}
        <FadeIn direction="up" as="div">
          <div className="mb-[clamp(2rem,3vw,2.5rem)] flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div className="flex flex-col gap-4">
              {/* Badge */}
              <span className="inline-block w-fit rounded-lg bg-primary px-8 py-1.25 text-xs font-medium text-white">
                Case Study
              </span>

              {/* Title */}
              <h2 className="text-[clamp(2rem,4.5vw,3.1rem)] font-medium leading-design text-primary-deepest">
                Our <span className="font-extrabold text-primary">Projects</span> 
              </h2>

              {/* Description */}
              <p className="max-w-186 text-[clamp(0.875rem,1.5vw,1.2rem)] leading-design text-primary-deepest">
                Refab Africa is not built in isolation. Our work thrives through
                collaboration with creatives, artisans, brands, communities.
              </p>
            </div>

            {/* View All Button */}
            <Button variant="outline" href="/projects">
              View All
            </Button>
          </div>

          {/* Divider */}
          <div className="mb-[clamp(3rem,5vw,5rem)] h-px w-full bg-primary" />
        </FadeIn>

        {/* ── Projects List ── */}
        <div className="flex flex-col gap-[clamp(3rem,5vw,5rem)]">
          {featuredProjects.map((project, index) => (
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
              {index < featuredProjects.length - 1 && (
                <div className="my-[clamp(3rem,5vw,5rem)] h-px w-full bg-primary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
