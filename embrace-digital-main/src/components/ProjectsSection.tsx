import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

import img1 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0010.jpg';
import img2 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0011.jpg';
import img3 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0012.jpg';
import img4 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0013.jpg';
import img5 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0014.jpg';
import img6 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0015.jpg';
import img7 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0016.jpg';
import img8 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0017.jpg';
import img9 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0018.jpg';
import img10 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0019.jpg';
import img11 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0020.jpg';
import img12 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0021.jpg';
import img13 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0022.jpg';
import img14 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0023.jpg';
import img15 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0024.jpg';
import img16 from '../assets/Associação Mabunda Okwatissa/Imagens do lar/IMG-20260423-WA0025.jpg';

const projects = [
  {
    id: "mabunda-okwatissa",
    title: "Associação Mabunda Okwatissa",
    description: "Conheça o nosso impacto e o trabalho desenvolvido no campo.",
    cover: img1,
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16]
  }
  // Future projects can be added here
];

const ProjectsSection = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openVisualizer = (projectIndex: number) => {
    setActiveProjectIndex(projectIndex);
    setSelectedImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeVisualizer = useCallback(() => {
    setActiveProjectIndex(null);
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const navigateImage = useCallback((direction: 'next' | 'prev', e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex === null || activeProjectIndex === null) return;
    
    const projectImagesLength = projects[activeProjectIndex].images.length;
    
    if (direction === 'next') {
      setSelectedImageIndex((prev) => (prev! === projectImagesLength - 1 ? 0 : prev! + 1));
    } else {
      setSelectedImageIndex((prev) => (prev! === 0 ? projectImagesLength - 1 : prev! - 1));
    }
  }, [selectedImageIndex, activeProjectIndex]);

  // Keyboard navigation for the lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null || activeProjectIndex === null) return;
      if (e.key === 'Escape') closeVisualizer();
      if (e.key === 'ArrowRight') navigateImage('next');
      if (e.key === 'ArrowLeft') navigateImage('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, activeProjectIndex, closeVisualizer, navigateImage]);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {activeProjectIndex === null ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Projectos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Nossas <span className="text-primary">Iniciativas</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Clique num projecto para ver a galeria completa.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  onClick={() => openVisualizer(index)}
                  className="bg-card overflow-hidden shadow-card hover:shadow-elevated transition-all group cursor-pointer flex flex-col"
                >
                  <div className="h-56 relative overflow-hidden shrink-0">
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                       <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                         Ver Galeria
                       </span>
                    </div>
                    <div className="absolute bottom-3 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                      {project.images.length} fotos
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : null}

        {/* Visualizer / Lightbox */}
        <AnimatePresence>
          {activeProjectIndex !== null && selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeVisualizer}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-6"
            >
              {/* Close Button */}
              <button
                onClick={closeVisualizer}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-[60] p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md transition-all"
                aria-label="Close visualizer"
              >
                <X className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              {/* Main Image Area */}
              <div 
                className="relative w-full flex-1 flex items-center justify-center min-h-0 mb-4 group"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={(e) => navigateImage('prev', e)}
                  className="absolute left-2 md:left-6 z-[60] p-2 md:p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                <motion.img
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  src={projects[activeProjectIndex].images[selectedImageIndex]}
                  alt={`${projects[activeProjectIndex].title} large image ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
                />

                <button
                  onClick={(e) => navigateImage('next', e)}
                  className="absolute right-2 md:right-6 z-[60] p-2 md:p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </div>
              
              {/* Counter */}
              <div className="text-white/70 text-sm font-medium z-[60] mb-2">
                {selectedImageIndex + 1} / {projects[activeProjectIndex].images.length}
              </div>

              {/* Thumbnails Row */}
              <div 
                className="h-20 md:h-24 w-full max-w-5xl flex gap-2 overflow-x-auto pb-2 items-center flex-nowrap"
                onClick={(e) => e.stopPropagation()}
                style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.3) transparent' }}
              >
                {projects[activeProjectIndex].images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    onClick={() => setSelectedImageIndex(i)}
                    className={`h-full w-auto aspect-video object-cover cursor-pointer rounded-md transition-all duration-200 shrink-0
                      ${i === selectedImageIndex 
                        ? 'border-2 border-primary scale-[1.02] opacity-100 shadow-lg' 
                        : 'opacity-50 hover:opacity-100'
                      }`}
                    alt={`Thumbnail ${i + 1}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;