import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Program", href: "#programs" },
  { label: "Coach",   href: "#coach"    },
  { label: "Schedule",href: "#schedule" },
  { label: "Contact", href: "#contact"  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  /* Show solid background + border once user scrolls past the fold */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll while drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#1F1F1F] bg-[#080808]/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-heading text-xl font-bold uppercase tracking-wider text-foreground"
          >
            Fighter<span className="text-primary"> Combat</span> Club
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-heading text-sm uppercase tracking-widest text-[#666666] transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA — no pulse animation here, save it for hero */}
          <a
            href="#contact"
            className="hidden rounded-[4px] bg-primary px-5 py-2.5 font-heading text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-primary/85 md:inline-block"
          >
            Free Trial
          </a>

          {/* Mobile hamburger */}
          <button
            className="p-2 text-foreground md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ──────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel slides in from the right */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
              className="fixed right-0 top-0 bottom-0 z-50 flex w-72 flex-col border-l border-[#1F1F1F] bg-[#111111]"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-[#1F1F1F] px-6 py-5">
                <span className="font-heading text-xs uppercase tracking-widest text-[#666666]">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} className="text-foreground" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-1 flex-col gap-1 px-4 pt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-[4px] px-3 py-4 font-heading text-2xl font-bold uppercase tracking-tight text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="border-t border-[#1F1F1F] p-6">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-[4px] bg-primary py-4 text-center font-heading text-sm font-bold uppercase tracking-widest text-white"
                >
                  Claim Free Trial
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
