import CallToAction from "../components/CallToAction";
import PageHero from "../components/PageHero";
import ProjectsList from "../components/ProjectsList";

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
      <CallToAction/>
    </main>
  );
}
