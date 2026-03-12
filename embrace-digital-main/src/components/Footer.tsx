import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/afrikinew-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="Afrikinew" className="h-[120px] object-contain mb-4 brightness-0 invert opacity-90" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Soluções tecnológicas inovadoras para transformar negócios em África e no mundo.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Início", "Sobre", "Serviços", "Portfólio", "Contacto"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace("í", "i")}`}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Serviços</h4>
            <ul className="space-y-2">
              {["Software", "Apps Mobile", "Websites", "Cloud", "Segurança"].map((s) => (
                <li key={s}>
                  <span className="text-sm text-primary-foreground/60">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary-foreground/70" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">© 2026 Afrikinew. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
