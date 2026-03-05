import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />

      <div className="container relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-5xl font-bold uppercase leading-none tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Elite Combat Training in{" "}
            <span className="text-gradient-crimson">Kandivali West.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Train with champions. Build discipline. Master your mind and body.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-primary px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110 animate-pulse-glow"
            >
              Book Your First Class
            </a>
            <a
              href="#programs"
              className="rounded-md border border-border px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:bg-secondary"
            >
              View Programs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
