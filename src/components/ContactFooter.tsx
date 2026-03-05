import { useState } from "react";
import { MapPin, Phone, Facebook, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const programs = ["Mixed Martial Arts", "Brazilian Jiu-Jitsu", "Kickboxing & Muay Thai", "Kids Martial Arts"];

const ContactFooter = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", program: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="container grid gap-16 lg:grid-cols-2">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl font-bold uppercase tracking-tighter text-foreground md:text-5xl">
            Start Your <span className="text-gradient-crimson">Journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fill in your details and we'll get you on the mat.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-lg border border-primary/30 bg-primary/10 p-8 text-center">
              <p className="font-heading text-xl font-semibold uppercase text-foreground">
                We'll be in touch!
              </p>
              <p className="mt-2 text-muted-foreground">
                Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-md border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-md border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <select
                required
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full rounded-md border border-border bg-card px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="" disabled>
                  Program of Interest
                </option>
                {programs.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-8 py-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110 animate-pulse-glow"
              >
                Claim Free Trial
              </button>
            </form>
          )}
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground">
            Find Us
          </h3>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-1 shrink-0 text-primary" />
              <a href="tel:+919619439394" className="text-foreground hover:text-primary transition-colors">
                +91 96194 39394
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-primary" />
              <p className="text-muted-foreground">
                Ground floor, Kishkant CHS, Datta Mandir Rd, Kandivali West, Mumbai
              </p>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-6 overflow-hidden rounded-lg border border-border bg-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0!2d72.84!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAwLjAiTiA3MsKwNTAnMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="250"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fighter Combat Club Location"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://share.google/2QFXU8NqZ1dvlBKts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:brightness-110"
            >
              Get Directions <ArrowRight size={16} />
            </a>
            <a
              href="https://www.facebook.com/fighter.combat.club/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-heading text-sm uppercase tracking-wider text-foreground transition-all hover:bg-secondary"
            >
              <Facebook size={18} /> Facebook
            </a>
          </div>

          {/* Footer */}
          <div className="mt-16 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Fighter Combat Club. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFooter;
