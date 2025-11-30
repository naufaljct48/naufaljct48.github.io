import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient orb - subtle */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      </div>
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
      <ScrollToTopButton />
      <Chatbot />
    </div>
  );
}

export default App;
