import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MakingDifference from "@/components/MakingDifference";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import HowToHelp from "@/components/HowToHelp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <MakingDifference />
        <AboutSection />
        <ImpactSection />
        <HowToHelp />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
