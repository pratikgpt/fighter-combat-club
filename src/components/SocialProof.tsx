import { Star } from "lucide-react";
import { motion } from "framer-motion";

const SocialProof = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-y border-border bg-secondary/50 py-6"
    >
      <div className="container flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-primary text-primary" />
          ))}
        </div>
        <p className="text-center font-heading text-sm uppercase tracking-wider text-muted-foreground">
          <span className="font-semibold text-foreground">4.9/5 Star Rating on Google</span>
          {" "}— Trusted by over 500+ fighters and beginners.
        </p>
      </div>
    </motion.section>
  );
};

export default SocialProof;
