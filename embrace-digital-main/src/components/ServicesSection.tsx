import { motion } from "framer-motion";
import { Code, Smartphone, Globe, Server, ShieldCheck, Cloud, Monitor, Network, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento de Software",
    description: "Software personalizado para automatizar e optimizar os processos do seu negócio.",
    techs: ["React", "Node.js", "Python", "PostgreSQL"],
  },
  {
    icon: Smartphone,
    title: "Aplicações Mobile",
    description: "Apps nativos e multiplataforma para iOS e Android com experiência de utilizador excepcional.",
    techs: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    icon: Globe,
    title: "Websites",
    description: "Websites modernos, responsivos e optimizados para SEO que convertem visitantes em clientes.",
    techs: ["Next.js", "WordPress", "Tailwind CSS"],
  },
  {
    icon: Monitor,
    title: "Sistemas Empresariais",
    description: "ERP, CRM e sistemas de gestão à medida das necessidades da sua empresa.",
    techs: ["SAP", "Odoo", "Custom ERP"],
  },
  {
    icon: Network,
    title: "Consultoria Tecnológica",
    description: "Orientação estratégica para a transformação digital do seu negócio.",
    techs: ["Análise", "Estratégia", "Implementação"],
  },
  {
    icon: Server,
    title: "Infraestrutura de Redes",
    description: "Projectos, instalação e manutenção de redes corporativas robustas e seguras.",
    techs: ["Cisco", "MikroTik", "Ubiquiti"],
  },
  {
    icon: ShieldCheck,
    title: "Segurança Informática",
    description: "Proteção completa dos seus dados e sistemas contra ameaças cibernéticas.",
    techs: ["Firewall", "Pentest", "SOC"],
  },
  {
    icon: Cloud,
    title: "Cloud & Servidores",
    description: "Migração, gestão e optimização de infraestrutura em nuvem para maior eficiência.",
    techs: ["AWS", "Azure", "Google Cloud"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-muted relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Soluções completas para o seu <span className="text-primary">negócio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços tecnológicos para impulsionar a transformação digital da sua empresa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary-foreground mb-2 transition-colors">{service.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/75 text-sm leading-relaxed mb-4 transition-colors">{service.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.techs.map((tech) => (
                    <span key={tech} className="text-xs bg-accent group-hover:bg-primary-foreground/15 text-accent-foreground group-hover:text-primary-foreground/80 px-2 py-0.5 rounded-full font-medium transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-muted-foreground/30 group-hover:text-primary-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
