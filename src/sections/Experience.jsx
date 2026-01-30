import { ExperienceItem } from "../components/ExperienceItem";

const EXPERIENCE = [
    {
        role: 'Freelance Full Stack Developer',
        company: 'Proyectos Personales / Clientes',
        period: '2025 - Presente',
        desc: 'Desarrollo de landing pages y SPAs enfocados en UI moderna y performance.',
        stack: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Supabase', 'Zustand', 'TanStack Query', 'Vercel'],
        tasks: [
            'Implementación de consumo y sincronización de datos con Supabase y TanStack Query.',
            'Gestión de estado global con Zustand y navegación optimizada.',
            'Despliegues continuos y actualizaciones en Vercel.'
        ]
    },
    {
        role: 'Sistema de ventas E-commerce',
        company: 'Proyecto Final de Carrera',
        period: '2024 - 2025',
        desc: 'Desarrollo integral de una plataforma e-commerce full stack.',
        stack: ['HTML', 'Tailwind', 'JS', 'Alpine.js', 'PHP', 'Laravel', 'Livewire', 'MySQL'],
        tasks: [
            'Panel de administración para gestión de productos, órdenes y envíos.',
            'Autenticación robusta con roles y permisos.',
            'Reportes exportables (PDF/Excel) y notificaciones por email.',
            'Modelado de BD con migraciones y lógica de pagos.'
        ]
    }
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