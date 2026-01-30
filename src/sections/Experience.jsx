import { ExperienceItem } from "../components/ExperienceItem";

const EXPERIENCE = [
  {
    role: "Freelance Full Stack Developer",
    company: "Proyectos Personales / Clientes",
    period: "2025 - Presente",
    desc: "Desarrollo de landing pages, SPAs y tiendas online con foco en UI moderna, performance y buenas prácticas de producción.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Zustand",
      "TanStack Query",
      "React Router",
      "Zod",
      "React Hook Form",
      "Vercel",
    ],
    tasks: [
      "Construí landing pages y SPAs 100% responsive, con componentes reutilizables y micro-interacciones/animaciones orientadas a UX.",
      "Implementé consumo y sincronización de datos con Supabase + TanStack Query (fetching, caché, paginación, invalidación y estados de carga/error).",
      "Gestioné estado global con Zustand para carrito y features de UI, optimizando la experiencia de navegación.",
      "Desarrollé flujos de autenticación y protección de rutas (login/register, roles y guards) para dashboards y secciones privadas.",
      "Desplegué y mantuve proyectos en Vercel con iteraciones rápidas, correcciones y mejoras continuas.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Proyecto Final de Carrera — Sistema de Ventas E-commerce",
    period: "2024 - 2025",
    desc: "Desarrollo end-to-end de un e-commerce full stack con tienda pública, panel de administración y reportes para gestión.",
    stack: ["HTML", "Tailwind CSS", "JavaScript", "Alpine.js", "PHP", "Laravel", "Livewire", "MySQL"],
    tasks: [
      "Desarrollé la tienda pública responsive: home, catálogo, filtros avanzados, detalle de producto, carrito y flujo de compra.",
      "Implementé un panel de administración para gestión de productos, órdenes de compra y envíos.",
      "Integré autenticación (registro/login) y gestión de usuarios con roles y permisos para control de acceso.",
      "Generé reportes exportables a PDF y Excel para análisis y control administrativo.",
      "Implementé notificaciones por email y lógica del flujo de compra/procesamiento de pagos.",
      "Modelé y administré la base de datos en MySQL usando migraciones, seeders y factories.",
    ],
  },
];


export const Experience = () => {
    
    return (
        <section id="experience" className="py-32 relative overflow-hidden">

            {/* RESPLANDOR DE FONDO centrado*/}
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"/>
            
            <div className="container lg:max-w-6xl mx-auto px-6 relative z-10">
                {/* ENCABEZADO */}
                <div className="text-center mx-auto max-w-3xl mb-16">

                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Mí trayectoria
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Experiencia
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            Profesional
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Mi trayectoria en el mundo del desarrollo de software.
                    </p>
                </div>

                <div className="animate-fade-in animation-delay-300">
                    {
                        EXPERIENCE.map((exp, idx) => (
                            <ExperienceItem key={idx} data={exp} />
                        ))}
                </div>
            </div>
        </section>
    );
};