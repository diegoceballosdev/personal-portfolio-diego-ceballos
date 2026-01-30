import { Button } from "@/components/Button";
import {
    ArrowRight,
    ChevronDown,
    Github,
    Linkedin,
    Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const socialLinks = [
    { icon: Github, href: "https://github.com/diegoceballosdev" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/diegoceballosdev/" },
    { icon: FaInstagram, href: "https://www.instagram.com/diegoceballos.dev/" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@diegoceballos.dev" },
];

const skills = [
    "React",
    "Laravel",
    "Typescript",
    "PHP",
    "Java",
    "Node.js",
    "Tailwind CSS",
    "MySQL",
    "PostgreSQL",
    "Git",
    "Vercel",
    "Supabase",
    "Tiendanube",
    // "Next.js",
    // "Livewire",
];

export const Hero = () => {
    return (
        <section className="realative min-h-screen flex items-center overflow-hidden">

            {/* FONDO */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.jpg"
                    alt="Hero image"
                    className="w-full h-full object-cover opacity-40"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* PUNTOS FLOTANTES */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, index) => (
                    <div
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}>
                    </div>
                ))}
            </div>

            {/* CONTENIDO */}
            <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 items-center">

                    {/* COLUMNA IZQUIERDA */}
                    <div className="space-y-8 justify-center lg:justify-start text-center lg:text-left">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />Fullstack Developer
                            </span>
                        </div>

                        <div className="text-center lg:text-left justify-center lg:justify-start ">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Creando <span className="text-primary glow-text">experiencias</span>
                                <br />
                                digitales{' '} <span className="font-serif italic font-normal text-white">modernas</span>
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    y escalables
                                </span>
                            </h1>
                            <p className="inline lg:block text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hola, soy Diego Ceballos, programador especializado en React y Laravel. Ayudo a negocios y startups a construir su presencia digital con tecnologías de vanguardia y soluciones escalables.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300 justify-center lg:justify-start">
                            <a href="#contact"><Button size="lg">
                                Contactame <ArrowRight className="w-5 h-5" />
                            </Button></a>
                            <a href="https://drive.google.com/file/d/1y4pSC7rcLY5lr3iOrn5-XajisjKtD0ZZ/view?usp=sharing" download={true} target="_black">
                                <AnimatedBorderButton>
                                    <Download className="w-5 h-5" />
                                    Descargar CV
                                </AnimatedBorderButton>
                            </a>
                        </div>

                        {/* REDES SOLCIALES */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400 justify-center lg:justify-start">
                            <span className="text-sm text-muted-foreground">Sigueme: </span>
                            {
                                socialLinks.map((social, index) => (
                                    <a href={social.href} key={index} target="_blank" className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                        {<social.icon className="w-5 h-5" />}
                                    </a>
                                ))
                            }
                        </div>

                    </div>

                    {/* COLUMNA DERECHA */}
                    <div className="relative animate-fade-in animation-delay-300 mt-6 lg:mt-0">
                        {/* IMAGEN */}
                        <div className="relative max-w-md mx-auto">
                            <div
                                className="absolute inset-0 
                                rounded-3xl bg-gradient-to-br 
                                from-primary/30 via-transparent 
                                to-primary/10 blur-2xl animate-pulse"
                            />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img
                                    src="/profile-photo.png"
                                    alt="Diego Ceballos"
                                    className="w-full aspect-[4/5] object-cover rounded-2xl" />

                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium">
                                            Disponible
                                        </span>
                                    </div>
                                </div>
                                {/* Stats Badge */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-2xl font-bold text-primary">1+</div>
                                    <div className="text-xs text-muted-foreground">
                                        Año de Exp.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SKILLS */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Tecnologias</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, index) => (

                                <div
                                    key={index}
                                    className="shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                    <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">

                        <span className="text-xs uppercase tracking-wider">Scroll</span>
                        <ChevronDown className="w-6 h-6 animate-bounce" />

                    </a>
                </div>
            </div>


        </section >
    );
}