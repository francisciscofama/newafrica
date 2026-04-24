import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
// import portfolioHealth from "@/assets/portfolio-health.jpg";
// import portfolioMobile from "@/assets/portfolio-mobile.jpg";
// import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioCloud from "@/assets/portfolio-cloud.jpg";

const projects = [
  {
    title: "Sistema de Gestão Hospitalar",
    category: "Software Empresarial",
    description: "Plataforma integrada de gestão para hospitais, incluindo agendamento, prontuários eletrónicos e facturação.",
    techs: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "App de Pagamentos Mobile",
    category: "Aplicação Mobile",
    description: "Aplicação de pagamentos digitais com integração bancária para facilitar transações em mercados emergentes.",
    techs: ["React Native", "Firebase", "API REST"],
    image: "https://images.unsplash.com/photo-1514996550219-62672472d03b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Portal E-Commerce",
    category: "Website",
    description: "Plataforma de comércio electrónico completa com gestão de stock, pagamentos online e logística integrada.",
    techs: ["Next.js", "Stripe", "MongoDB"],
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Infraestrutura Cloud Corporativa",
    category: "Cloud & Redes",
    description: "Migração completa de infraestrutura on-premise para cloud, reduzindo custos em 40%.",
    techs: ["AWS", "Docker", "Kubernetes"],
    image: portfolioCloud,
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Portfólio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Projectos que fazem a <span className="text-primary">diferença</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça alguns dos projectos que desenvolvemos para clientes em diversos sectores.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card overflow-hidden shadow-card hover:shadow-elevated transition-all group flex flex-col lg:flex-row"
            >
              <div className="h-48 lg:h-auto lg:w-[60%] relative overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
                  <ExternalLink className="w-10 h-10 text-primary-foreground opacity-0 group-hover:opacity-80 transition-opacity" />
                </div>
              </div>
              <div className="p-6 lg:w-[30%] flex flex-col justify-center">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span key={tech} className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;