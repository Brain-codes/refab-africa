import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import FAQ from "../components/FAQ";
import CallToAction from "../components/CallToAction";

export const metadata = {
  title: "Contact — Refab Africa",
  description:
    "Get in touch with Refab Africa. We'd love to hear from you.",
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
