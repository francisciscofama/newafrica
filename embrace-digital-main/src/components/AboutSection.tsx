import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Fornecer soluções tecnológicas inovadoras que impulsionem o crescimento dos nossos clientes em África e no mundo.",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser a referência em transformação digital no continente africano, conectando negócios ao futuro.",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Inovação, integridade, excelência, colaboração e compromisso com o desenvolvimento sustentável.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Quem é a <span className="text-primary">Afrikinew</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              A Afrikinew é uma empresa de tecnologia focada em criar soluções
              digitais que transformam negócios. Com experiência sólida no
              mercado africano, combinamos talento local com as melhores
              práticas globais para entregar resultados excepcionais.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A nossa equipa de profissionais qualificados trabalha em estreita
              colaboração com cada cliente para compreender as suas necessidades
              únicas e desenvolver soluções à medida que geram valor real.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={teamImg}
              alt="Equipa Afrikinew a trabalhar"
              className="rounded-xl shadow-elevated w-full object-cover h-80 lg:h-96"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl px-6 py-3 shadow-lg">
              <p className="text-2xl font-bold">2+</p>
              <p className="text-sm opacity-80">Anos de Experiência</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
