import { Check } from "lucide-react";
import { motion } from "framer-motion";
import facilityImg from "@/assets/facility.jpg";

const features = [
  "Pro Octagon",
  "Heavy Bag Zone",
  "Functional Fitness Area",
  "Beginner-Friendly Classes",
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="border-t border-border bg-secondary/30 py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl font-bold uppercase tracking-tighter text-foreground md:text-5xl">
            Train On <span className="text-gradient-crimson">Your Schedule</span>
          </h2>
          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <p className="font-heading text-sm uppercase tracking-wider text-muted-foreground">
              Operating Hours
            </p>
            <p className="mt-2 text-lg font-medium text-foreground">
              Mon – Sat: 6:00 AM to 11:00 PM
            </p>
            <p className="text-lg font-medium text-foreground">
              Sun: 10:00 AM to 12:30 PM
            </p>
          </div>

          <div className="mt-8">
            <p className="font-heading text-sm uppercase tracking-wider text-muted-foreground">
              Facility Features
            </p>
            <ul className="mt-4 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-foreground">
                  <Check size={18} className="text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-lg border border-border"
        >
          <img
            src={facilityImg}
            alt="Fighter Combat Club facility interior with training equipment"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
