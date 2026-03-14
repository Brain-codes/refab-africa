import type { Metadata } from "next";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Impact from "../components/Impact";
import ImpactMatters from "../components/ImpactMatters";
import TheProcess from "../components/TheProcess";
import WhyRefab from "../components/WhyRefab";
import OurProjects from "../components/OurProjects";
import Collaboration from "../components/Collaboration";
import CallToAction from "../components/CallToAction";

export const metadata: Metadata = {
  title: "Reimagining Sustainability in Africa",
  description:
    "Refab Africa transforms textile waste into meaningful products while empowering communities through collaboration, circular fashion, and sustainable impact across Africa.",
  alternates: {
    canonical: "https://refabafrica.tacommunity.org",
  },
  openGraph: {
    url: "https://refabafrica.tacommunity.org",
    title: "Refab Africa — Reimagining Sustainability in Africa",
    description:
      "Transforming textile waste into meaningful products while empowering communities through collaboration and creativity.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Refab Africa hero" }],
  },
};

export default function Home(): React.JSX.Element {
  return (
    <main>
      <Hero />
      <Stats />
      <Impact />
      <ImpactMatters />
      <TheProcess />
      <WhyRefab />
      <OurProjects />
      <Collaboration />
      <CallToAction />
    </main>
  );
}
