import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
  "FFNEOCOMMERCE",
  "LUCTECH",
  "ADPGEST",
  "FF CENTER",
  "GRUPO TCHOHAMBA",
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
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all relative group"
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
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl px-8 py-4 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all text-muted-foreground hover:text-primary font-heading font-semibold text-lg"
              >
                {p}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
