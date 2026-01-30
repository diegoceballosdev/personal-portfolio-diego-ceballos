import { Github, Linkedin, } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const socialLinks = [
    { icon: Github, href: "https://github.com/diegoceballosdev" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/diegoceballosdev/" },
    { icon: FaInstagram, href: "https://www.instagram.com/diegoceballos.dev/" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@diegoceballos.dev" },
];

const footerLinks = [
    { href: "#about", text: "Sobre mí" },
    { href: "#services", text: "Servicios" },
    { href: "#projects", text: "Proyectos" },
    { href: "#experience", text: "Experiencia" },
    { href: "#education", text: "Educación" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              DC<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Diego E. Ceballos. Todos los derechos reservados.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.text}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};