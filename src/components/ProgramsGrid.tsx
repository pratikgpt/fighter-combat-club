import { Target, Shield, Dumbbell, Flame, ArrowRight, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

const disciplines = [
  { icon: Target,   label: "Boxing",              tag: "Footwork · Combinations · Head Movement" },
  { icon: Shield,   label: "Brazilian Jiu-Jitsu", tag: "Ground Control · Chokes · Submissions"   },
  { icon: Dumbbell, label: "Wrestling",            tag: "Takedowns · Clinch · Top Game"           },
  { icon: Flame,    label: "Muay Thai",            tag: "Elbows · Knees · Kicks · Clinch"         },
];

const ProgramsGrid = () => {
  return (
    <section id="programs" className="border-t border-[#1F1F1F] py-20">
      <div className="container">

        {/* Section header — left-aligned for editorial feel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <h2
            className="font-heading font-bold uppercase leading-[0.9] tracking-tighter text-foreground"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            One Program.{" "}
            <span className="text-gradient-crimson">Every Weapon.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#888888] md:text-lg">
            We don't split our fighters. One structured curriculum rotating through every
            combat discipline - so each session sharpens a different skill. Train everything.
            Become complete.
          </p>
        </motion.div>

        {/* Main card — featured split layout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-[8px] border border-[#1F1F1F] bg-[#111111] glow-crimson"
        >
          <div className="grid lg:grid-cols-2">

            {/* Left — Program info */}
            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-body text-xs uppercase tracking-widest text-primary">
                  MMA Fighter Development
                </span>

                <h3
                  className="mt-6 font-heading font-bold uppercase leading-[0.92] tracking-tighter text-foreground"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  All Skill Levels.<br />One Mat.
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-[#888888] md:text-base">
                  Whether you've never thrown a punch or you're stepping into your first
                  cage - our program is built for you. Every class focuses on a rotating
                  discipline so you build real, well-rounded skills week by week.
                </p>

                {/* Rotation indicator */}
                <div className="mt-8 flex items-center gap-2.5 text-sm text-[#666666]">
                  <RotateCcw size={14} className="text-primary" />
                  <span>Disciplines rotate every session</span>
                </div>
              </div>

              {/* CTA sits at the bottom of the left panel */}
              <a
                href="#contact"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-[4px] bg-primary px-8 py-4 font-heading text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-primary/85"
              >
                Claim Free Trial <ArrowRight size={16} />
              </a>
            </div>

            {/* Right — Discipline list */}
            <div className="border-t border-[#1F1F1F] bg-[#0D0D0D] p-8 md:p-12 lg:border-l lg:border-t-0">
              <p className="font-body text-xs uppercase tracking-widest text-[#666666]">
                What You'll Train
              </p>

              <div className="mt-6 space-y-3">
                {disciplines.map((d, i) => (
                  <motion.div
                    key={d.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-4 rounded-[6px] border border-[#1F1F1F] bg-[#111111] p-4 transition-all hover:border-primary/30 hover:bg-[#181818]"
                  >
                    {/* Icon pill */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-primary/10">
                      <d.icon size={18} className="text-primary" />
                    </div>

                    <div>
                      <p className="font-heading text-sm font-bold uppercase tracking-tight text-foreground">
                        {d.label}
                      </p>
                      <p className="mt-0.5 text-xs text-[#666666]">{d.tag}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsGrid;
