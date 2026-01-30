import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpio",
    description:
      "Escribir código escalable y mantenible que resista el paso del tiempo.",
  },
  {
    icon: Rocket,
    title: "Rendimiento",
    description:
      "Optimización para la velocidad y entrega de experiencias de usuario ultrarrápidas.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajar en estrecha colaboración con equipos para dar vida a las ideas.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Mantenerse a la vanguardia con las últimas tecnologías y mejores prácticas.",
  },
];

export const About = () => {
  return (

    <section id="about" className="py-36 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* COLUMNA IZQUIERDA */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Sobre mí
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Construyendo el futuro,
              <span className="font-serif italic font-normal text-white">
                {" "}
                un componente a la vez.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Soy un apasionado desarrollador de software con un enfoque en el desarrollo web Full Stack. Mi viaje en la programación comenzó con la curiosidad de entender cómo funcionan las cosas, y hoy en día, esa curiosidad se ha transformado en una carrera profesional.
              </p>
              <p>
                Me especializo en construir aplicaciones web desde cero, cuidando tanto la arquitectura del backend como la experiencia de usuario en el frontend. Aunque mi carrera recién está despegando, cuento con una base sólida de conocimientos y una ética de trabajo enfocada en la calidad.
              </p>
              <p>
                Cuando no estoy programando, me gusta mantenerme actualizado con las últimas tendencias tecnológicas y contribuir a la comunidad creando contenido en redes sociales.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Mi misión es crear experiencias digitales que no solo sean
                funcionales, sino realmente encantadoras: productos que los usuarios amen usar y que los desarrolladores amen mantener."
              </p>
            </div>
          </div>

          {/* COLUMNA DERECHA - Destacados */}
          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};