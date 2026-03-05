import { motion } from "framer-motion";

const stats = [
  { value: "500+",        label: "Members Trained"   },
  { value: "4.9 / 5",    label: "Google Rating"     },
  { value: "All Levels",  label: "Welcome Here"      },
  { value: "6 Days",      label: "A Week, 6 AM+"     },
];

const SocialProof = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-y border-[#1F1F1F] bg-[#111111] py-7"
    >
      <div className="container">
        <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              /* Vertical divider between columns on md+, hidden on mobile grid */
              className={`text-center ${
                i > 0 ? "md:border-l md:border-[#1F1F1F]" : ""
              }`}
            >
              <p className="font-heading text-xl font-bold uppercase text-foreground md:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-[#666666]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SocialProof;
