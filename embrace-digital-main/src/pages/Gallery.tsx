import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 mt-16">
        <ProjectsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;