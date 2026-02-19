import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import OurTeam from "../components/OurTeam";
import OurJourney from "../components/OurJourney";
import CallToAction from "../components/CallToAction";

export const metadata = {
  title: "About — Refab Africa",
  description:
    "Learn about Refab Africa's mission to transform textile waste into meaningful community impact.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutSection />
      <OurTeam />
      <OurJourney />
      <CallToAction />
    </main>
  );
}
