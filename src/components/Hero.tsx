"use client";

import { useState, useEffect } from "react";

const images = [
  "/images/hero/hero-1.webp",
  "/images/hero/hero-2.webp",
  "/images/hero/hero-3.webp",
  "/images/hero/hero-4.webp",
  "/images/hero/hero-5.webp",
  "/images/hero/hero-6.webp",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image carousel */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "low"}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === currentImage ? 1 : 0 }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(17, 17, 17, 0.45)" }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1
          className="hero-fade-in text-[15vw] md:text-[9vw] lg:text-[min(7vw,110px)] text-cream mb-4 text-center"
          style={{ fontFamily: "var(--font-hatton)", fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.020em" }}
        >
          The Provenance Continues.
        </h1>
        <div className="hero-fade-in w-[60px] h-[1px] bg-bronze mx-auto mb-6" />
        <p
          className="hero-fade-in-delay font-body text-[1.1rem] md:text-[1.5rem] text-white italic leading-relaxed mb-14 px-2"
        >
          White-glove service. Cash offers.<br className="md:hidden" />{" "}Nothing left behind.
        </p>

        <div className="hero-fade-in-delay-2 flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Mobile: tap-to-call button */}
            <a
              href="tel:8324749547"
              className="lg:hidden px-8 py-3.5 bg-bronze text-cream font-body text-sm tracking-widest uppercase hover:bg-bronze-dark transition-colors rounded-md"
            >
              Call Now 832-474-9547
            </a>
            {/* Desktop: plain display text */}
            <span className="hidden lg:block font-body text-3xl font-semibold text-white tracking-normal">
              832-474-9547
            </span>
            <a
              href="mailto:midtownmodern@gmail.com?subject=Schedule%20an%20estate%20sale%20consultation"
              className="px-8 py-3.5 border border-cream/40 text-cream font-body text-sm tracking-widest uppercase hover:text-bronze transition-colors rounded-md"
            >
              Schedule a Consultation
            </a>
          </div>

          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 mt-6 md:mt-12 lg:mt-16 group cursor-pointer"
          >
            <span className="font-body text-xs tracking-widest uppercase font-semibold text-cream/60 group-hover:text-cream/90 transition-colors">
              Learn how we work together
            </span>
            <svg
              className="w-5 h-5 text-cream/50 group-hover:text-cream/80 transition-colors animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
