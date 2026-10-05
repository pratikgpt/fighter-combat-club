import { motion } from "framer-motion";
import { Award, Users, Shield } from "lucide-react";
import coachPhoto from "../assets/deepak-patil.jpg";

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden
  >
    <defs>
      <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <path
      fill="url(#ig-grad)"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
    />
  </svg>
);

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
          className="relative lg:order-1"
        >
          <div className="relative overflow-hidden rounded-[8px] border border-[#1F1F1F] bg-[#111111]" style={{ aspectRatio: "3/4" }}>
            <img
              src={coachPhoto}
              alt="Deepak Patil"
              className="h-full w-full object-cover object-center"
            />

            {/* Bottom gradient bar with name — stays even after photo is added */}
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#080808] to-transparent p-6">
              <p className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground">
                Deepak Patil
              </p>
              <p className="text-xs uppercase tracking-widest text-primary">
                Head Coach & Founder
              </p>
            </div>
          </div>

          {/* Instagram badge */}
          <a
            href="https://www.instagram.com/deepak.patil.official/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#1F1F1F] bg-[#111111] text-[#888888] transition-colors hover:border-primary/40 hover:text-primary"
            aria-label="Deepak Patil on Instagram"
          >
            <InstagramIcon size={18} />
          </a>

        </motion.div>

        {/* ── Right: Bio content ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:order-2"
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
            world-class MMA training to everyday people in Mumbai. With years of
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
