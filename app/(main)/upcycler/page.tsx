import type { Metadata } from "next";
import UpcyclerRegister from "../components/UpcyclerRegister";
import CallToAction from "../components/CallToAction";

export const metadata: Metadata = {
  title: "Become an Upcycler — Join the Movement",
  description:
    "Join the Refab Africa upcycling movement. Register as a creative, artisan, or change-maker transforming textile waste into purposeful design, art, and innovation.",
  alternates: {
    canonical: "https://refabafrica.tacommunity.org/upcycler",
  },
  openGraph: {
    url: "https://refabafrica.tacommunity.org/upcycler",
    title: "Become an Upcycler | Refab Africa",
    description:
      "Join a vibrant community of creatives transforming textile waste into purposeful design and climate action across Nigeria.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Become a Refab Africa Upcycler" }],
  },
  twitter: {
    title: "Become an Upcycler | Refab Africa",
    description:
      "Register as a Refab Africa upcycler — bring your creative skills to the circular fashion movement.",
    images: ["/og-image.png"],
  },
};

export default function UpcyclerPage() {
  return (
    <main>
      <UpcyclerRegister />
      <CallToAction />
    </main>
  );
}
