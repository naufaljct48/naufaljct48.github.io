import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import RouteSection from "./components/RouteSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import NextStation from "./components/NextStation";
import { useScrollMotion } from "./hooks/useScrollMotion";
import { useSpotlight } from "./hooks/useSpotlight";

function App() {
  useScrollMotion();
  useSpotlight();

  return (
    <div className="min-h-screen overflow-x-clip">
      <a
        href="#lines"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:text-on-ink focus:px-4 focus:py-2 focus:rounded-full"
      >
        Skip to projects
      </a>
      <Navbar />
      <NextStation />
      <main>
        <Hero />
        <RouteSection />
        <Projects />
        <About />
      </main>
      <Footer />
      <ScrollToTopButton />
      <div className="spotlight" aria-hidden="true" />
    </div>
  );
}

export default App;
