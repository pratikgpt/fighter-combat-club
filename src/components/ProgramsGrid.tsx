import { Swords, Shield, Flame, Baby, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const programs = [
  {
    icon: Swords,
    title: "Mixed Martial Arts",
    description:
      "Complete combat system blending striking and grappling. From white belt to cage-ready competitor.",
  },
  {
    icon: Shield,
    title: "Brazilian Jiu-Jitsu",
    description:
      "Master the gentle art of ground fighting. Develop technique, leverage, and strategic thinking.",
  },
  {
    icon: Flame,
    title: "Kickboxing & Muay Thai",
    description:
      "Devastating stand-up striking with the art of eight limbs. Build power, speed, and conditioning.",
  },
  {
    icon: Baby,
    title: "Kids Martial Arts",
    description:
      "Fun, safe, and structured classes building confidence, discipline, and anti-bullying skills.",
  },
];

const ProgramsGrid = () => {
  return (
    <section id="programs" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-4xl font-bold uppercase tracking-tighter text-foreground md:text-5xl">
            Master Your <span className="text-gradient-crimson">Discipline</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            World-class programs for every skill level.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="hover-lift group rounded-lg border border-border bg-card p-6"
            >
              <program.icon className="mb-4 h-10 w-10 text-primary" />
              <h3 className="font-heading text-xl font-semibold uppercase tracking-tight text-foreground">
                {program.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {program.description}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wide text-primary transition-all group-hover:gap-3"
              >
                Learn More <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsGrid;
