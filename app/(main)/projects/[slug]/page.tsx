import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../lib/projects";
import ProjectDetailHero from "../../components/ProjectDetailHero";
import ProjectOverview from "../../components/ProjectOverview";
import ProjectNarrative from "../../components/ProjectNarrative";
import CallToAction from "../../components/CallToAction";

const BASE_URL = "https://refabafrica.tacommunity.org";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const url = `${BASE_URL}/projects/${slug}`;
  const title = project.title;
  const description = project.description;
  const ogImage = project.image1;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.description,
    image: `${BASE_URL}${project.image1}`,
    url: `${BASE_URL}/projects/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "Refab Africa",
      url: BASE_URL,
    },
    datePublished: project.date,
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
