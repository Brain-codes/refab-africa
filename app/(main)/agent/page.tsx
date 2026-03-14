import type { Metadata } from "next";
import AgentRegister from "../components/AgentRegister";
import CallToAction from "../components/CallToAction";

export const metadata: Metadata = {
  title: "Become an Agent — Join Our Network",
  description:
    "Register as a Refab Africa agent — washer or sorter. Join our community-driven network turning textile waste into meaningful impact across Nigeria.",
  alternates: {
    canonical: "https://refabafrica.tacommunity.org/agent",
  },
  openGraph: {
    url: "https://refabafrica.tacommunity.org/agent",
    title: "Become an Agent | Refab Africa",
    description:
      "Join the Refab Africa agent network as a washer or sorter. Earn a stipend, develop skills, and help build a sustainable Nigeria.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Become a Refab Africa Agent" }],
  },
  twitter: {
    title: "Become an Agent | Refab Africa",
    description:
      "Register as a Refab Africa washer or sorter — build skills and earn while driving sustainable textile impact.",
    images: ["/og-image.png"],
  },
};

export default function AgentPage() {
  return (
    <main>
      <AgentRegister />
      <CallToAction />
    </main>
  );
}
