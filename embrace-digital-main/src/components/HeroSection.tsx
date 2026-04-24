import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useRef } from "react";

const Counter = ({
  from = 0,
  to,
  suffix = "",
  label,
}: {
  from?: number;
  to: number;
  suffix?: string;
  label: string;
}) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2.5, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);

  return (
    <div className="text-center sm:text-left">
      <p className="text-3xl md:text-4xl font-bold text-secondary flex items-baseline gap-0.5">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </p>
      <p className="text-sm mt-1 text-primary-foreground/60">{label}</p>
    </div>
  );
};

const floatingShapes = [
  { size: 120, x: "80%", y: "15%", delay: 0 },
  { size: 80, x: "90%", y: "60%", delay: 1.5 },
  { size: 60, x: "70%", y: "80%", delay: 0.8 },
  { size: 40, x: "85%", y: "40%", delay: 2 },
];

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      </div>

      {/* Floating decorative shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary-foreground/10"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-secondary/30 backdrop-blur-sm">
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block w-2 h-2 rounded-full bg-secondary"
              />
              Inovação Tecnológica em África
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="pl-50 text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-primary-foreground"
          >
            Soluções tecnológicas para{" "}
            <span className="relative inline-block">
              <span className="text-secondary">transformar</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-secondary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                style={{ originX: 0 }}
              />
            </span>{" "}
            o seu negócio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl mb-10 leading-relaxed text-primary-foreground/75 max-w-2xl"
          >
            Desenvolvimento de software, apps mobile, infraestrutura cloud e
            consultoria tecnológica. Conectamos o seu negócio ao futuro digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary rounded-none hover:bg-secondary/90 text-secondary-foreground font-semibold text-base px-8 h-14 transition-all hover:-translate-y-0.5"
            >
              <a href="#contacto">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 rounded-none text-black hover:bg-primary-foreground/10 hover:text-white font-semibold text-base px-8 h-14 backdrop-blur-sm"
            >
              <a href="#servicos">
                <Play className="mr-2 w-4 h-4" />
                Ver Serviços
              </a>
            </Button>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-10 mt-16 pt-8 border-t border-primary-foreground/15"
          >
            {/* <Counter to={100} suffix="+" label="Projectos Entregues" />
            <Counter to={50} suffix="+" label="Clientes Satisfeitos" />
            <Counter to={8} suffix="+" label="Anos de Experiência" /> */}
            {/* <div className="text-center sm:text-left">
              <p className="text-3xl md:text-4xl font-bold text-secondary">
                24/7
              </p>
              <p className="text-sm mt-1 text-primary-foreground/60">
                Suporte Técnico
              </p>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
