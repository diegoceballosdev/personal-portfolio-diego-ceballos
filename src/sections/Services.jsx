import { Briefcase, CheckCircle2, Code2, Layout, Monitor, ShoppingBag } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const SERVICES = [
    {
        title: "Landing • Portfolio • SPA",
        desc: "Desarrollo de experiencias web modernas: desde una landing que convierte hasta una SPA completa, con diseño pro y performance.",
        details: [
            "Diseño responsive mobile-first + UI/UX moderno",
            "Estructura y copy orientados a conversión (CTA)",
            "Formularios robustos + validación + feedback al usuario",
            "Animaciones sutiles (Motion/AOS) sin afectar performance",
            "SEO on-page y optimización de velocidad",
        ],
        icon: <Monitor className="w-10 h-10 mb-4 text-primary" />,
    },
    {
        title: "Webs Institucionales",
        desc: "Sitios sólidos para empresas: credibilidad, claridad y escalabilidad para crecer sin rehacer todo.",
        details: [
            "Diseño responsive mobile-first + UI/UX moderno",
            "Estructura por secciones o multipágina",
            "Diseño consistente con tu identidad visual",
            "SEO técnico básico + performance",
            "Integración con WhatsApp/Email/Maps",
            "Secciones clave: servicios, casos, equipo, FAQs",
            "Mantenimiento y mejoras evolutivas",
        ],
        icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
    },
    {
        title: "Tiendas Online con Tiendanube",
        desc: "E-commerce rápido para vender ya: configuración completa, diseño profesional y catálogo listo para operar.",
        details: [
            "Setup integral: dominio, pagos y envíos",
            "Personalización del tema con identidad de marca",
            "Carga y organización de productos + categorías",
            "Optimización para conversión",
            "Integración con redes sociales",
            "Capacitación para administración de la tienda",
        ],
        icon: <ShoppingBag className="w-10 h-10 mb-4 text-primary" />,
    },
    {
        title: "Sistemas Web Personalizados",
        desc: "Soluciones a medida para automatizar procesos: dashboards, paneles admin, reportes y flujos de trabajo.",
        details: [
            "Definición de módulos según tu negocio y necesidades",
            "Roles y permisos + seguridad por capas",
            "CRUDs avanzados, filtros, búsquedas y auditoría",
            "Reportes y métricas visuales",
            "Integraciones (pagos, email, WhatsApp, APIs)",
            "Deploy y soporte evolutivo",
        ],
        icon: <Code2 className="w-10 h-10 mb-4 text-primary" />,
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-32 relative overflow-hidden">

            {/* RESPLANDOR DE FONDO centrado*/}
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            
            <div className="container mx-auto px-6 relative z-10">

                {/* ENCABEZADO */}
                <div className="text-center mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Lo que ofrezco
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Servicios
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            Profesionales
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Soluciones adaptadas a las necesidades modernas del mercado digital.
                    </p>
                </div>

                {/* TARJETAS */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6" >
                    {SERVICES.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-card p-6 rounded-2xl shadow-sm relative overflow-hidden group animate-fade-in animation-delay-300"
                        >
                            <div className="h-full flex flex-col">
                                <div className="px-3 w-fit rounded-lg  text-primary transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {service.desc}
                                </p>
                                <ul className="mt-auto space-y-2">
                                    {service.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CONTACTO RAPIDO */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        Necesito una wb
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>

            </div>
        </section>
    );
};