import { Check } from "lucide-react";
import { motion } from "framer-motion";
import facilityImg from "@/assets/facility.jpg";

/*
 * Sample week rotation — edit these to match the actual class schedule.
 * The note below the grid makes it clear to visitors this may vary.
 */
const weekRotation = [
  { day: "Mon", discipline: "Boxing",            tag: "Striking & Footwork"      },
  { day: "Tue", discipline: "BJJ",               tag: "Ground Game & Submissions" },
  { day: "Wed", discipline: "Wrestling",         tag: "Takedowns & Clinch Work"   },
  { day: "Thu", discipline: "Muay Thai",         tag: "Kicks, Elbows & Knees"     },
  { day: "Fri", discipline: "MMA Sparring",      tag: "Full-Contact Drills"        },
  { day: "Sat", discipline: "Open Mat",          tag: "All Disciplines"           },
];

const facilities = [
  "Pro Octagon",
  "Heavy Bag Zone",
  "Functional Fitness Area",
  "Beginner-Friendly Environment",
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="border-t border-[#1F1F1F] py-20">
      <div className="container">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2
            className="font-heading font-bold uppercase leading-[0.9] tracking-tighter text-foreground"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            How We <span className="text-gradient-crimson">Train.</span>
          </h2>
          <p className="mt-4 max-w-lg text-base text-[#888888]">
            Each session sharpens a different weapon. The rotation ensures you develop
            everywhere — not just where you're comfortable.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* ── Left: Discipline rotation grid ─────────────────────── */}
          <div>
            <p className="mb-5 font-body text-xs uppercase tracking-widest text-[#666666]">
              Sample Week Rotation
            </p>

            <div className="space-y-2">
              {weekRotation.map((item, i) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group flex items-center gap-4 rounded-[6px] border border-[#1F1F1F] bg-[#111111] px-5 py-4 transition-all hover:border-primary/30 hover:bg-[#181818]"
                >
                  {/* Day label */}
                  <span className="w-9 font-heading text-sm font-bold uppercase tracking-widest text-primary">
                    {item.day}
                  </span>

                  {/* Divider */}
                  <div className="h-5 w-px shrink-0 bg-[#1F1F1F]" />

                  {/* Discipline */}
                  <div className="flex-1">
                    <p className="font-heading text-sm font-bold uppercase tracking-tight text-foreground">
                      {item.discipline}
                    </p>
                    <p className="text-xs text-[#666666]">{item.tag}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-4 text-xs text-[#333333]">
              * Schedule may vary. Contact us for current class times.
            </p>
          </div>

          {/* ── Right: Hours, facility, image, CTA ─────────────────── */}
          <div className="flex flex-col gap-5">

            {/* Operating hours */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[8px] border border-[#1F1F1F] bg-[#111111] p-6"
            >
              <p className="font-body text-xs uppercase tracking-widest text-[#666666]">
                Operating Hours
              </p>
              <div className="mt-4 space-y-2">
                <div>
                  <p className="font-heading text-base font-bold uppercase text-foreground">
                    Mon – Sat
                  </p>
                  <p className="text-sm text-[#888888]">6:00 AM to 11:00 PM</p>
                </div>
                <div>
                  <p className="font-heading text-base font-bold uppercase text-foreground">
                    Sunday
                  </p>
                  <p className="text-sm text-[#888888]">Closed</p>
                </div>
              </div>
            </motion.div>

            {/* Facility features */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="rounded-[8px] border border-[#1F1F1F] bg-[#111111] p-6"
            >
              <p className="font-body text-xs uppercase tracking-widest text-[#666666]">
                Facility
              </p>
              <ul className="mt-4 space-y-2.5">
                {facilities.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                    <Check size={14} className="shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Facility photo */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="overflow-hidden rounded-[8px] border border-[#1F1F1F]"
            >
              <img
                src={facilityImg}
                alt="Fighter Combat Club training facility"
                className="h-44 w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Inline CTA — drives urgency without leaving the section */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="rounded-[4px] bg-primary py-4 text-center font-heading text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-primary/85"
            >
              Start This Week
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
