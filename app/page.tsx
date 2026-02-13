import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Impact from "./components/Impact";

export default function Home(): React.JSX.Element {
  return (
    <main>
      <Hero />
      <Stats />
      <Impact />
    </main>
  );
}
