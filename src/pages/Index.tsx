import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustedBySection } from "@/components/landing/TrustedBySection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { PlatformSection } from "@/components/landing/PlatformSection";
import { PantheonSection } from "@/components/landing/PantheonSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />
        <PlatformSection />
        <PantheonSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
