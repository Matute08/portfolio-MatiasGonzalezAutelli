import TransitionPage from "@/components/animations/transition-page/transition-page";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ServicesSection from "@/components/sections/ServicesSection";
import Skills from "@/components/sections/Skills";
import PortfolioSection from "@/components/sections/PortfolioSection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <Hero />
      <About />
      <ServicesSection />
      <Skills />
      <PortfolioSection />
      <Contact />
      <Footer />
    </main>
  );
}
