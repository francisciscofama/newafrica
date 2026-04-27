import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import ffneo from "../assets/Partners/FFNeoCommerce.jpg";
import luctech from "../assets/Partners/LUCTech.jpg";
import tchohamba from "../assets/Partners/Grupo Tchohamba.jpg";

const testimonials = [
  {
    name: "Francisco Afonso",
    role: "CEO, FFNEOCOMMERCE",
    text: "A Afrikinew transformou completamente a nossa operação.",
    rating: 5,
    initials: "FA",
  },
  {
    name: "Martin Bráulio",
    role: "CEO",
    text: "Profissionalismo e qualidade excepcionais.",
    rating: 5,
    initials: "MB",
  },

  {
    name: "Filipe Marques",
    role: "CEO FF CENTER",
    text: "Extremamente impressionado com o vosso  serviço",
    rating: 5,
    initials: "FM",
  },
];

const partners = [
  { name: "FFNEOCOMMERCE", logo: ffneo },
  { name: "LUCTECH", logo: luctech },
  { name: "ADPGEST", logo: null },
  { name: "FF CENTER", logo: null },
  { name: "GRUPO TCHOHAMBA", logo: tchohamba },
];

const ClientsSection = () => {
  return (
    <section id="clientes" className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
            Clientes & Parceiros
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            O que dizem os nossos <span className="text-primary">clientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card rounded-none p-8 shadow-card hover:shadow-elevated transition-all relative group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-secondary text-secondary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-widest font-semibold">
            Empresas que confiam em nós
          </p>
          <div className="flex overflow-hidden group">
            <div className="flex gap-8 animate-loop-scroll group-hover:[animation-play-state:paused] min-w-max pr-8">
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={`first-${p.name}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center w-48 h-24 bg-card shadow-card p-4"
                >
                  {p.logo ? (
                    <img 
                      src={p.logo} 
                      alt={p.name} 
                      className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <span className="font-heading font-semibold text-lg text-muted-foreground hover:text-primary transition-all">
                      {p.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-8 animate-loop-scroll group-hover:[animation-play-state:paused] min-w-max pr-8" aria-hidden="true">
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={`second-${p.name}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center w-48 h-24 bg-card shadow-card p-4"
                >
                  {p.logo ? (
                    <img 
                      src={p.logo} 
                      alt={p.name} 
                      className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <span className="font-heading font-semibold text-lg text-muted-foreground hover:text-primary transition-all">
                      {p.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
