import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as const, delay },
  },
});

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden mb-4">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay — stronger on left where text sits, lets gym image breathe on right */}
      <div className="absolute inset-0 bg-linear-to-r from-[#080808] via-[#080808]/80 to-[#080808]/25" />
      {/* Bottom fade — connects cleanly to next section */}
      <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-transparent to-[#080808]/40" />

      {/* Content — left-anchored, max-width keeps it from sprawling into the image */}
      <div className="container relative z-10 pt-16">
        <div className="max-w-2xl">

          {/* Location badge */}
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-body text-xs uppercase tracking-widest text-primary">
              Kandivali West, Mumbai
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp(0.15)}
            initial="hidden"
            animate="show"
            className="mt-6 font-heading font-bold uppercase leading-[0.9] tracking-tighter text-foreground"
            style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
          >
            Forge A<br />
            <span className="text-gradient-crimson">Complete</span><br />
            Fighter.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp(0.28)}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-lg text-base leading-relaxed text-[#888888] md:text-lg"
          >
            One structured MMA program. Every discipline - boxing, wrestling,
            BJJ, Muay Thai. Coached by Deepak Patil. Built for beginners and
            competitors alike.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="animate-pulse-glow rounded-[4px] bg-primary px-8 py-4 font-heading text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-primary/85"
            >
              Book Free Trial
            </a>
            <a
              href="#programs"
              className="rounded-[4px] border border-[#2D2D2D] px-8 py-4 font-heading text-sm font-bold uppercase tracking-widest text-foreground transition-all hover:bg-[#181818]"
            >
              See How It Works
            </a>
          </motion.div>


        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <ArrowDown size={20} className="animate-bounce-y text-[#3A3A3A]" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
