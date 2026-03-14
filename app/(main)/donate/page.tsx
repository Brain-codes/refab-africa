import type { Metadata } from "next";
import DonateHero from "../components/DonateHero";
import CallToAction from "../components/CallToAction";

export const metadata: Metadata = {
  title: "Donate — Support Our Mission",
  description:
    "Support Refab Africa by donating to help us transform textile waste into meaningful products and empower communities across Africa.",
  alternates: {
    canonical: "https://refabafrica.tacommunity.org/donate",
  },
  openGraph: {
    url: "https://refabafrica.tacommunity.org/donate",
    title: "Donate | Refab Africa",
    description:
      "Your donation helps transform textile waste into meaningful impact and empowers communities across Africa.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Donate to Refab Africa" }],
  },
  twitter: {
    title: "Donate | Refab Africa",
    description:
      "Support Refab Africa — transform textile waste, empower communities, and fund sustainable impact.",
    images: ["/og-image.png"],
  },
};

export default function DonatePage() {
  return (
    <main>
      <DonateHero />
      <CallToAction />
    </main>
  );
}
