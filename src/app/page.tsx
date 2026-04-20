"use client";
// trigger Vercel preview build
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05 }
    );

    sections.forEach((el) => observer.observe(el));

    // Safety net: if observer never fires (JS error, timing issue), force all visible
    const fallback = setTimeout(() => {
      sections.forEach((el) => el.classList.add("visible"));
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <main>
      <Navigation />
      <Hero />
      <div className="hidden md:block"><TrustBar /></div>
      <HowItWorks />
<Services />
      <FAQ />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
