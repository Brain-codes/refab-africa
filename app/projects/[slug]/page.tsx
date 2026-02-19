import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../lib/projects";
import ProjectDetailHero from "../../components/ProjectDetailHero";
import ProjectOverview from "../../components/ProjectOverview";
import CallToAction from "../../components/CallToAction";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main>
      <ProjectDetailHero
        title={project.title}
        location={project.location}
        date={project.date}
        image={project.image1}
      />
      <ProjectOverview overview={project.overview} gallery={project.gallery} />
      <CallToAction />
    </main>
  );
}
