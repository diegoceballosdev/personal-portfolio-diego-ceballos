import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    { href: "#about", text: "Sobre mí" },
    { href: "#services", text: "Servicios" },
    { href: "#projects", text: "Proyectos" },
    { href: "#experience", text: "Experiencia" },
    { href: "#education", text: "Educación" },
];

export const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 bg-transparent py-5 z-50 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    DC<span className="text-primary">.</span>
                </a>

                {/* NAV DE ESCRITORIO */}
                <div className="hidden lg:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {
                            navLinks.map((link, index) => (
                                <a href={link.href} key={index}
                                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                                    {link.text}
                                </a>
                            ))
                        }
                    </div>
                </div>

                {/* CTA */}
                <div className="hidden lg:block">
                    <a href="#contact">
                        <Button>Contactame</Button>
                    </a>
                </div>

                {/* BOTON DE MENU PARA MOVIL */}
                <button
                    className="lg:hidden p-2 text-foreground "
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>


            {/* MENU PARA MOVIL */}
            {isMobileMenuOpen && <div className="lg:hidden glass-strong animate-fade-in ">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {
                        navLinks.map((link, index) => (
                            <a href={link.href} key={index}
                                className="text-lg text-muted-foreground hover:text-foreground py-2">
                                {link.text}
                            </a>
                        ))
                    }

                    <Button>Contactame</Button>
                </div>
            </div>}
        </header>
    );
}