import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../lib/projects";
import ProjectDetailHero from "../../components/ProjectDetailHero";
import ProjectOverview from "../../components/ProjectOverview";
import ProjectNarrative from "../../components/ProjectNarrative";
import CallToAction from "../../components/CallToAction";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
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
      <ProjectNarrative
        challenge={project.challenge}
        approach={project.approach}
        impact={project.impact}
        keyTakeaway={project.keyTakeaway}
      />
      <CallToAction />
    </main>
  );
}
