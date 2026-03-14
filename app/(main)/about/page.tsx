import type { Metadata } from "next";
import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import OurTeam from "../components/OurTeam";
import OurJourney from "../components/OurJourney";
import CallToAction from "../components/CallToAction";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Refab Africa's mission to transform textile waste into meaningful community impact through circular fashion, upcycling, and cross-sector collaboration.",
  alternates: {
    canonical: "https://refabafrica.tacommunity.org/about",
  },
  openGraph: {
    url: "https://refabafrica.tacommunity.org/about",
    title: "About Us | Refab Africa",
    description:
      "Learn about Refab Africa's mission to transform textile waste into meaningful community impact.",
    images: [{ url: "/images/about-hero-1.png", width: 1200, height: 630, alt: "About Refab Africa" }],
  },
  twitter: {
    title: "About Us | Refab Africa",
    description:
      "Learn about Refab Africa's mission to transform textile waste into meaningful community impact.",
    images: ["/images/about-hero-1.png"],
  },
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
