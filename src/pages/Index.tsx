import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramSection from "@/components/ProgramSection";
import OfferStackSection from "@/components/OfferStackSection";
import FounderSection from "@/components/FounderSection";
import ApplySection from "@/components/ApplySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramSection />
        <OfferStackSection />
        <FounderSection />
        <ApplySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;