import type { Metadata } from "next";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import FAQ from "../components/FAQ";
import CallToAction from "../components/CallToAction";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Refab Africa. Partner with us, collaborate on projects, or support our mission to create sustainable impact through textile innovation.",
  alternates: {
    canonical: "https://refabafrica.tacommunity.org/contact",
  },
  openGraph: {
    url: "https://refabafrica.tacommunity.org/contact",
    title: "Contact Us | Refab Africa",
    description:
      "Get in touch with Refab Africa. Partner with us, collaborate, or support sustainable impact through textile innovation.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Refab Africa" }],
  },
  twitter: {
    title: "Contact Us | Refab Africa",
    description:
      "Get in touch with Refab Africa. Partner with us, collaborate, or support sustainable impact.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <FAQ />
      <CallToAction />
    </main>
  );
}
