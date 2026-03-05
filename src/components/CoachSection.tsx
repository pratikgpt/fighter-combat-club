import { motion } from "framer-motion";
import { Award, Users, Shield } from "lucide-react";
import coachPhoto from "../assets/deepak-patil.jpg";

const credentials = [
  { icon: Award,  text: "Head Coach & Founder - Fighter Combat Club" },
  { icon: Shield, text: "MMA & Combat Sports Specialist"             },
  { icon: Users,  text: "100+ athletes trained across all levels"    },
];

const CoachSection = () => {
  return (
    <section id="coach" className="border-t border-[#1F1F1F] py-20">
      <div className="container grid items-center gap-12 lg:grid-cols-2">

        {/* ── Left: Photo frame ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative overflow-hidden rounded-[8px] border border-[#1F1F1F] bg-[#111111]" style={{ aspectRatio: "3/4" }}>
            <img
              src={coachPhoto}
              alt="Deepak Patil"
              className="h-full w-full object-cover object-center"
            />

            {/* Bottom gradient bar with name — stays even after photo is added */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#080808] to-transparent p-6">
              <p className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground">
                Deepak Patil
              </p>
              <p className="text-xs uppercase tracking-widest text-primary">
                Head Coach & Founder
              </p>
            </div>
          </div>

          {/* Offset accent border — adds depth */}
          <div
            className="pointer-events-none absolute -bottom-3 -right-3 rounded-[8px] border border-primary/15"
            style={{ inset: "auto -12px -12px auto", width: "100%", height: "100%" }}
            aria-hidden
          />
        </motion.div>

        {/* ── Right: Bio content ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-body text-xs uppercase tracking-widest text-primary">
            Head Coach & Founder
          </span>

          <h2
            className="mt-6 font-heading font-bold uppercase leading-[0.9] tracking-tighter text-foreground"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)" }}
          >
            Deepak<br />
            <span className="text-gradient-crimson">Patil.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#888888] md:text-lg">
            Deepak Patil founded Fighter Combat Club with one mission - to bring
            world-class MMA training to everyday people in Kandivali. With years of
            competitive experience and a deep belief in well-rounded combat education,
            he built a curriculum that rotates through every discipline, so no skill
            gets left behind.
          </p>

          <p className="mt-4 text-base leading-relaxed text-[#888888]">
            Whether you're stepping onto the mat for the first time or preparing for
            your next cage fight, Deepak's coaching adapts to where you are - and
            pushes you toward where you need to be.
          </p>

          {/* Credentials */}
          <ul className="mt-8 space-y-3">
            {credentials.map((c, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] bg-primary/10">
                  <c.icon size={14} className="text-primary" />
                </div>
                <p className="text-sm text-[#888888]">{c.text}</p>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-[4px] bg-primary px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-primary/85"
          >
            Train With Deepak
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default CoachSection;
