import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProjectsSection />
      <ClientsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
