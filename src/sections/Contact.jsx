import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../components/Button";


// --- CONTACT SECTION (REBUILT) ---
export const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('¡Mensaje enviado! (Esto es una demo)');
    };

    const contactInfo = [
        { icon: <Mail className="w-5 h-5 text-primary" />, title: 'Email', value: 'diegoceballosdev@gmail.com' },
        { icon: <Phone className="w-5 h-5 text-primary" />, title: 'Teléfono', value: '+54 387 5134270' },
        { icon: <MapPin className="w-5 h-5 text-primary" />, title: 'Ubicación', value: 'Remoto / Salta, Argentina' },
    ];

    return (
        <section id="contact" className="py-32 relative overflow-hidden">

            {/* RESPLANDOR DE FONDO centrado*/}
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="container  mx-auto px-6 relative z-10">

                {/* ENCABEZADO */}
                <div className="text-center mx-auto max-w-3xl mb-16">

                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Contacto
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Hablemos
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            de tu proyecto
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        ¿Tienes un proyecto en mente? ¡Estoy aquí para ayudarte a hacerlo realidad!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 p-10 lg:p-0 ">

                    <div className="flex justify-center items-center animate-fade-in animation-delay-200">
                        <img src="/contact-img.svg" alt="" />
                    </div>

                    {/* INFO Y WPP */}
                    <div className="space-y-8 pt-4 animate-fade-in animation-delay-200" >
                        <div className="space-y-8">
                            {contactInfo.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl glass shadow-sm transition-border hover:border hover:border-primary/20">
                                    <div className="p-3 bg-secondary rounded-lg">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                                        <p className="text-muted-foreground text-sm">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 flex flex-col">
                            <a
                                href="https://wa.me/543875134270?text=Hola%20Diego%2C%20me%20gustar%C3%ADa%20hablar%20contigo%20sobre%20un%20proyecto."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="w-full" size="lg">
                                    <FaWhatsapp size={24} />
                                    Enviar un mensaje
                                </Button>
                            </a>
                            {/* <a
                                href="mailto:diegoceballosdev@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="w-full" size="lg">
                                    <Send size={24} />
                                    Contactar via Email
                                </Button>
                            </a> */}
                        </div>

                        <div className="space-y-4">

                        </div>

                    </div>

                    {/* Right Column: Form */}
                    {/* <div
                        className="glass p-8 rounded-2xl shadow-sm hover:border-primary/20 transition-border"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 focus:outline-none transition-all"
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 focus:outline-none transition-all"
                                        placeholder="tu@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 focus:outline-none focus:ring-2transition-all"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                    required
                                ></textarea>
                            </div>

                            <Button size="lg" className="w-full" type="submit">
                                    <Send size={24} />
                                    Enviar Mensaje
                            </Button>
                        </form>
                    </div> */}

                </div>
            </div>
        </section>
    );
};