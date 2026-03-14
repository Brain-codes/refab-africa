import type { Metadata } from "next";
import CallToAction from "../components/CallToAction";
import PageHero from "../components/PageHero";
import ProjectsList from "../components/ProjectsList";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Refab Africa's portfolio of community-driven sustainability projects — from medical outreach to circular fashion initiatives across Nigeria and Africa.",
  alternates: {
    canonical: "https://refabafrica.tacommunity.org/projects",
  },
  openGraph: {
    url: "https://refabafrica.tacommunity.org/projects",
    title: "Our Projects | Refab Africa",
    description:
      "Explore Refab Africa's portfolio of community-driven sustainability and textile upcycling projects across Africa.",
    images: [{ url: "/images/hero-projects-bg.png", width: 1200, height: 630, alt: "Refab Africa Projects" }],
  },
  twitter: {
    title: "Our Projects | Refab Africa",
    description:
      "Explore Refab Africa's portfolio of community-driven sustainability and textile upcycling projects across Africa.",
    images: ["/images/hero-projects-bg.png"],
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        badge="Our Projects"
        title={<>Each Step Proves <span className="font-extrabold text-primary not-italic uppercase">SUSTAINABILITY</span> In Africa</>}
        description="Every project Refab Africa puts a dot on is a step to a better Africa on making this continent a sustainable one and a textile free on."
        image="/images/hero-projects-bg.png"
      />
      <ProjectsList />
      <CallToAction />
    </main>
  );
}
