"use client";

import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Our Services", href: "/services" },
  { label: "FAQs", href: "/#faq" },
  { label: "Testimonials", href: "/#testimonials" },
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
          <a href="/" className="flex items-center">
            <img src="/images/RE-momo.svg" alt="Reeves Estates" className="h-5 sm:h-7 w-auto" />
          </a>

          {/* Desktop links */}
          <TooltipProvider>
            <div className="hidden lg:flex items-baseline gap-4">
              {navLinks.map((link) => (
                <Tooltip key={link.href}>
                  <TooltipTrigger asChild>
                    <a
                      href={link.href}
                      className="font-body uppercase text-sm font-semibold text-charcoal/70 hover:text-bronze transition-colors px-2 py-1 rounded-[5px]"
                    >
                      {link.label}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="rounded-full bg-charcoal text-cream border-bronze">
                    <p>Go to {link.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="/#about"
                    className="font-body uppercase text-sm font-semibold text-charcoal/70 hover:text-bronze transition-colors px-2 py-1 rounded-[5px]"
                  >
                    About Reeves
                  </a>
                </TooltipTrigger>
                <TooltipContent className="rounded-full bg-charcoal text-cream border-bronze">
                  <p>Learn more About Reeves</p>
                </TooltipContent>
              </Tooltip>

              <a href="tel:8324749547" className="font-compact text-base font-bold tracking-wide border border-bronze px-3 py-1.5 text-charcoal">
                832-474-9547
              </a>
            </div>
          </TooltipProvider>

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
              className="font-body uppercase text-sm tracking-wide text-charcoal/70 hover:text-bronze transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3">
            <a
              href="tel:8324749547"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center py-3 font-compact text-base font-bold tracking-widest uppercase text-white rounded transition-colors hover:opacity-90"
              style={{ backgroundColor: "#B8956A" }}
            >
              Call
            </a>
            <a
              href="sms:8324749547"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center py-3 font-compact text-base font-bold tracking-widest uppercase text-white rounded transition-colors hover:opacity-90"
              style={{ backgroundColor: "#B8956A" }}
            >
              Text
            </a>
          </div>
          <a
            href="/#about"
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
