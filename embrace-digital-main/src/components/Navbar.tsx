import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/afrikinew-logo.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Afrikinew"
            className={cn(
              "h-[120px] object-contain transition-all",
              !scrolled && "brightness-0 invert"
            )}
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium px-3 py-2 rounded-lg transition-all relative",
                activeSection === link.href
                  ? scrolled
                    ? "text-primary bg-accent"
                    : "text-primary-foreground bg-primary-foreground/15"
                  : scrolled
                  ? "text-muted-foreground hover:text-primary hover:bg-accent"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              )}
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="ml-4 rounded-lg font-semibold">
            <a href="#contacto">Solicitar Orçamento</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn("md:hidden", scrolled ? "text-foreground" : "text-primary-foreground")}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                activeSection === link.href
                  ? "text-primary bg-accent"
                  : "text-muted-foreground hover:text-primary hover:bg-accent"
              )}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="w-full mt-3 rounded-lg">
            <a href="#contacto" onClick={() => setIsOpen(false)}>Solicitar Orçamento</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
