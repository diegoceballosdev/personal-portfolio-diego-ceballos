import { Award, CheckCircle2, GraduationCap } from "lucide-react";

const EDUCATION = [
    {
        degree: 'Tecnicatura Universitaria en Programación',
        institution: 'Universidad Nacional de Salta',
        period: '2022 - 2025'
    },
    {
        degree: 'Bootcamp de React',
        institution: 'Academia Código Facilito',
        period: 'Oct 2025 - Ene 2026'
    }
];

const CERTIFICATIONS = [
    'Diseño Web con HTML5 + CSS (Fundación Telefónica Movistar)',
    'Programación con Java Standard (Fundación Telefónica Movistar)',
    'Curso Profesional de Python (Academia Código Facilito)',
    'Curso Profesional de Typescript (Academia Código Facilito)',
    'Curso Profesional de React (Academia Código Facilito)',
    'Gestión de Proyectos con Metodologías Ágiles (Fundación Telefónica Movistar)',
    'Curso de Git y GitHub (Academia Todo Code)',
    'Maestría en Tiendanube (Tiendanube & Ecodiem)',
    'Scrum Fundamentals Certified (SCRUMstudy)'
];

export const Education = () => {
    return (
        <section id="education" className="py-32 relative overflow-hidden">

            {/* RESPLANDOR DE FONDO centrado*/}
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"/>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* ENCABEZADO */}
                <div className="text-center mx-auto max-w-3xl mb-16">

                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Mí educación
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Mi formación
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            como desarrollador
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Aquí encontrarás mi educación formal y las certificaciones que he obtenido a lo largo de mis estudios.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-16 animate-fade-in animation-delay-100">

                    {/* Educacion */}
                    <div>
                        <h3 className="flex items-center gap-3 text-2xl font-bold mb-8">
                            <GraduationCap className="text-primary" /> Educación Formal
                        </h3>
                        <div className="space-y-8">
                            {EDUCATION.map((edu, idx) => (
                                <div key={idx} className="bg-card p-6 rounded-xl shadow-sm">
                                    <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                                    <p className="text-primary font-medium">{edu.institution}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{edu.period}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certificaciones */}
                    <div>
                        <h3 className="flex items-center gap-3 text-2xl font-bold mb-8">
                            <Award className="text-primary" /> Certificaciones
                        </h3>
                        <div className="space-y-4">
                            {CERTIFICATIONS.map((cert, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                                    <span className="text-muted-foreground text-sm">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};