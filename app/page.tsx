import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Impact from "./components/Impact";
import ImpactMatters from "./components/ImpactMatters";
import TheProcess from "./components/TheProcess";
import WhyRefab from "./components/WhyRefab";
import OurProjects from "./components/OurProjects";
import Collaboration from "./components/Collaboration";
import CallToAction from "./components/CallToAction";

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
