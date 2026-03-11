"use client";

import { useState } from "react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Our Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faq" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col items-start">
            <span
              className="text-xl md:text-2xl font-semibold tracking-[0.3em] text-charcoal"
            >
              Reeves Estates
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm tracking-wide text-charcoal/70 hover:text-bronze transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:7135235577"
              className="font-body text-base font-extrabold tracking-wide hover:text-bronze-dark transition-colors"
              style={{ color: "#B8956A" }}
            >
              Call or Text 713-523-5577
</a>
            <a
              href="#about"
              className="font-body text-sm tracking-wide text-charcoal/70 hover:text-bronze transition-colors"
            >
              About Reeves
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-charcoal transition-transform ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-charcoal transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-charcoal transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-cream/95 backdrop-blur-md ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-body text-sm tracking-wide text-charcoal/70 hover:text-bronze transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:7135235577"
            onClick={() => setMobileOpen(false)}
            className="font-body text-base font-extrabold tracking-wide hover:text-bronze-dark transition-colors"
            style={{ color: "#B8956A" }}
          >
            Call or Text
          </a>
          <a
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="font-body text-sm tracking-wide text-charcoal/70 hover:text-bronze transition-colors"
          >
            About Reeves
          </a>
        </div>
      </div>
    </nav>
  );
}
