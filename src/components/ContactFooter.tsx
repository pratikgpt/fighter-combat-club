import { useState } from "react";
import { MapPin, Phone, Facebook, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

/* WhatsApp icon as inline SVG — not available in lucide */
const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const programs = ["MMA Fighter Development", "Kids Martial Arts"];

const ContactFooter = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", program: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-[#1F1F1F] py-20">
      <div className="container grid gap-16 lg:grid-cols-2">

        {/* ── Left: Lead capture form ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-body text-xs uppercase tracking-widest text-primary">
            Free Trial Class
          </span>

          <h2
            className="mt-6 font-heading font-bold uppercase leading-[0.9] tracking-tighter text-foreground"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Start Your{" "}
            <span className="text-gradient-crimson">Journey.</span>
          </h2>

          <p className="mt-4 text-[#888888]">
            Fill in your details. We'll call you within 24 hours to get you on the mat.
          </p>

          {/* Google rating trust signal */}
          <div className="mt-5 flex items-center gap-2.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-xs text-[#666666]">
              <span className="font-medium text-foreground">4.9 / 5</span> on Google
              &nbsp;·&nbsp; 500+ members trust us
            </p>
          </div>

          {submitted ? (
            <div className="mt-10 rounded-[8px] border border-primary/20 bg-primary/5 p-8 text-center">
              <p className="font-heading text-2xl font-bold uppercase text-foreground">
                You're in!
              </p>
              <p className="mt-2 text-sm text-[#888888]">
                Expect a call from us within 24 hours. Welcome to Fighter Combat Club.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="mt-8 space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-[6px] border border-[#1F1F1F] bg-[#111111] px-4 py-3.5 text-foreground placeholder:text-[#3A3A3A] transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-[6px] border border-[#1F1F1F] bg-[#111111] px-4 py-3.5 text-foreground placeholder:text-[#3A3A3A] transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
                />
                <select
                  required
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full rounded-[6px] border border-[#1F1F1F] bg-[#111111] px-4 py-3.5 text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20"
                >
                  <option value="" disabled>Select a Program</option>
                  {programs.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="animate-pulse-glow w-full rounded-[4px] bg-primary py-4 font-heading text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-primary/85"
                >
                  Claim Free Trial
                </button>

                {/* Friction-reducing micro-copy */}
                <p className="text-center text-xs text-[#3A3A3A]">
                  No commitment. No spam. We'll call you within 24 hours.
                </p>
              </form>

              {/* WhatsApp alternative — primary conversion channel in Mumbai */}
              <div className="mt-5">
                <p className="mb-3 text-center text-xs text-[#3A3A3A]">
                  Or reach us directly on WhatsApp
                </p>
                <a
                  href="https://wa.me/919619439394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2.5 rounded-[4px] border border-[#1F1F1F] bg-[#111111] py-3.5 font-heading text-sm uppercase tracking-widest text-foreground transition-all hover:border-[#25D366]/30 hover:bg-[#25D366]/5 hover:text-[#25D366]"
                >
                  <WhatsAppIcon size={16} />
                  Message on WhatsApp
                </a>
              </div>
            </>
          )}
        </motion.div>

        {/* ── Right: Location info + map ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground">
            Find Us
          </h3>

          <div className="mt-6 space-y-4">
            <a
              href="tel:+919619439394"
              className="group flex items-center gap-3 text-foreground transition-colors hover:text-primary"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] border border-[#1F1F1F] bg-[#111111] transition-colors group-hover:border-primary/30">
                <Phone size={14} className="text-primary" />
              </div>
              <span className="text-sm">+91 96194 39394</span>
            </a>

            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[6px] border border-[#1F1F1F] bg-[#111111]">
                <MapPin size={14} className="text-primary" />
              </div>
              <p className="text-sm leading-relaxed text-[#888888]">
                Ground floor, Kishkant CHS, Datta Mandir Rd,<br />
                Kandivali West, Mumbai
              </p>
            </div>
          </div>

          {/* Map — dark-filtered for visual consistency */}
          <div className="mt-6 overflow-hidden rounded-[8px] border border-[#1F1F1F]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0!2d72.84!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAwLjAiTiA3MsKwNTAnMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="220"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fighter Combat Club Location"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://share.google/2QFXU8NqZ1dvlBKts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[4px] bg-primary px-5 py-3 font-heading text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-primary/85"
            >
              Get Directions <ArrowRight size={14} />
            </a>
            <a
              href="https://www.facebook.com/fighter.combat.club/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[4px] border border-[#1F1F1F] px-5 py-3 font-heading text-sm uppercase tracking-widest text-foreground transition-all hover:bg-[#181818]"
            >
              <Facebook size={15} /> Facebook
            </a>
            <a
              href="https://www.instagram.com/fightercombatclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[4px] border border-[#1F1F1F] px-5 py-3 font-heading text-sm uppercase tracking-widest text-foreground transition-all hover:bg-[#181818]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" aria-hidden><defs><radialGradient id="ig-grad-footer" cx="30%" cy="107%" r="150%"><stop offset="0%" stopColor="#fdf497"/><stop offset="5%" stopColor="#fdf497"/><stop offset="45%" stopColor="#fd5949"/><stop offset="60%" stopColor="#d6249f"/><stop offset="90%" stopColor="#285AEB"/></radialGradient></defs><path fill="url(#ig-grad-footer)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
          </div>

          {/* Footer line */}
          <div className="mt-16 border-t border-[#1F1F1F] pt-8">
            <p className="text-xs text-[#333333]">
              © {new Date().getFullYear()} Fighter Combat Club. All rights reserved.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactFooter;
