import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, hsl(0 0% 100%) 1px, transparent 1px), radial-gradient(circle at 80% 50%, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary-foreground/20"
          >
            <Sparkles className="w-4 h-4" />
            Pronto para começar?
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Transforme a sua ideia em <br className="hidden md:block" />
            realidade digital
          </h2>
          <p className="text-lg text-primary-foreground/75 mb-10 max-w-xl mx-auto">
            Contacte-nos hoje e receba uma proposta personalizada para o seu
            projecto. Sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base px-8 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <a href="#contacto">
                Solicitar Orçamento Grátis
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10 font-semibold text-base px-8 h-14 rounded-xl"
            >
              <a
                href="https://chat.whatsapp.com/CDMncFLnmoI7GZHWQzWNiS"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
