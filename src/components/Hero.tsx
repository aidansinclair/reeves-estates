"use client";

import { useState, useEffect } from "react";

const images = [
  "https://i.imgur.com/Wt0DQOX.jpeg",
  "https://i.imgur.com/lkE8s1f.jpeg",
  "https://i.imgur.com/W6UML0q.jpeg",
  "https://i.imgur.com/nf6tdE2.jpeg",
  "https://i.imgur.com/5ASp6ne.jpeg",
  "https://i.imgur.com/SeslhEC.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
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
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/50" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="hero-fade-in text-5xl md:text-7xl lg:text-8xl font-light text-cream tracking-[0.15em] mb-2" style={{ fontFamily: "var(--font-neue-machina)" }}>
          Reeves Estates
        </h1>
        <div className="hero-fade-in w-24 h-[1px] bg-bronze mx-auto mb-8" />
        <p className="hero-fade-in-delay text-xl md:text-2xl lg:text-3xl text-cream/90 italic leading-relaxed mb-6" style={{ fontFamily: "var(--font-libre-baskerville)" }}>
          Every piece cared for. Every detail honored.
          <br className="hidden sm:block" /> From first call to final close.
        </p>
        <p className="hero-fade-in-delay font-body text-sm md:text-base text-cream/60 tracking-wide mb-12 max-w-2xl mx-auto">
          Houston&rsquo;s trusted estate specialists &mdash; three generations
          of expertise, one point of contact.
        </p>
        <div className="hero-fade-in-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-bronze text-cream font-body text-sm tracking-widest uppercase hover:bg-bronze-dark transition-colors"
          >
            Schedule a Consultation
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 border border-cream/40 text-cream font-body text-sm tracking-widest uppercase hover:border-bronze hover:text-bronze transition-colors"
          >
            Learn How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
