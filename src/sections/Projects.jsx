import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
 import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Kong Tienda Online (E-commerce TALL)",
    description:
      "Plataforma e-commerce completa con tienda pública y dashboard admin. Catálogo, carrito y checkout con Niubiz + Mercado Pago; gestión de usuarios, productos, órdenes y envíos; banners, FAQ y datos de contacto. Seguridad con autenticación, roles/permisos, reportes PDF/Excel, charts y notificaciones por email.",
    image: "/projects/tienda-laravel.jpg",
    tags: ["PHP, Laravel", "Livewire", "TailwindCSS", "MySQL", "Mercado Pago"],
    link: null,
    github: "https://github.com/diegoceballosdev/Ecommerce-Kong-Laravel",
  },
  {
    title: "CellTech (Tienda SPA)",
    description:
      "SPA de e-commerce para celulares con home y catálogo, carrito y flujo de compra con pago por depósito bancario. Incluye dashboard para administración de productos y órdenes, autenticación (login/register) y protección de rutas por roles. Manejo de estado y datos optimizado con Zustand + TanStack Query.",
    image: "/projects/celltech.png",
    tags: ["React", "TypeScript", "TailwindCSS", "Supabase", "Zustand, TanStack Query, Zod, Vercel"],
    link: "https://celltech-snowy.vercel.app/",
    github: "https://github.com/diegoceballosdev/Tienda-Online-React-Vite-Supabase",
  },
    {
    title: "Dark Gym (Landing Fitness)",
    description:
      "Landing dark premium para gimnasio: navegación clara, hero potente, secciones de servicios, CTA directo por WhatsApp y mapa integrado de Google Maps. Experiencia mobile-first, UI moderna y componentes reutilizables, desplegada en Vercel.",
    image: "/projects/darkgym.png",
    tags: ["React", "TypeScript", "TailwindCSS", "AOS.js", "Vercel", "Google Maps", "UI/UX"],
    link: "https://dark-gym-typescript-react-vite.vercel.app/",
    github: "https://github.com/diegoceballosdev/dark-gym-typescript-react-vite",
  },
  {
    title: "Agencia MarketDig (Landing Marketing)",
    description:
      "Landing page orientada a conversión para agencia de marketing, con foco en estética, jerarquía visual y micro-interacciones. Animaciones fluidas con Motion (Framer Motion) y diseño 100% responsive, optimizada para performance y deploy en Vercel.",
    image: "/projects/marketdig.png",
    tags: ["React", "TypeScript", "TailwindCSS", "Motion", "Vercel", "Responsive UI"],
    link: "https://agenciamarketdig.vercel.app/",
    github: "https://github.com/diegoceballosdev/Landing-Page-Marketing-Agency-React",
  },
  {
    title: "Portfolio Personal (Dev)",
    description:
      "Portfolio moderno y altamente visual para mostrar proyectos y habilidades. Animaciones y efectos de entrada, transiciones suaves y diseño 100% responsive con enfoque en estética, legibilidad y experiencia de navegación.",
    image: "/projects/portfolio.png",
    tags: ["React", "JavaScript", "TailwindCSS", "Vercel", "Animations"],
    link: null,
    github: null,
  },
];


export const Projects = () => {
    return (

        <section id="projects" className="py-32 relative overflow-hidden">

            {/* RESPLANDOR DE FONDO */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* ENCABEZADO */}
                <div className="text-center mx-auto max-w-3xl mb-16">

                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Trabajo destacado
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Proyectos que
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            generan impacto.
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Una selección de mis trabajos recientes, soluciones adaptadas a las necesidades modernas del mercado digital.
                    </p>
                </div>

                {/* GRID DE PROYECTOS */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="animate-fade-in animation-delay-300 group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* IMAGEN */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"
                                />

                                {/* ENLACES SUPERPUESTOS */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    { 
                                        project.link && <a
                                        href={project.link} target="_blank"
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>}
                                    { project.github && <a
                                        href={project.github} target="_blank"
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>}
                                </div>
                            </div>

                            {/* CONTENIDO */}
                            <div className="p-6 space-y-4">

                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>

                                <p className="text-muted-foreground text-md">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* BOTONES PARA MÓVILES */}
                                <div className="flex gap-8 lg:hidden mt-4 pt-4 border-t border-custom">
                                    { project.github &&
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 font-semibold text-primary">
                                        <Github size={14} /> Código
                                    </a>}
                                    { project.link &&
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 font-semibold text-primary">
                                        <ExternalLink size={14} /> Demo
                                    </a>}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* VER TODOS LOS PROYECTOS */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        Ver todos los proyectos
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};
