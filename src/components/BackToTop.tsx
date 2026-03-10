"use client";

import { useState, useEffect, useCallback } from "react";

const sectionIds = [
  null, // top of page
  "how-it-works",
  "services",
  "faq",
  "testimonials",
  "about",
  "contact",
];

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = useCallback(() => {
    const scrollY = window.scrollY;

    // Find sections in DOM order and their top positions
    const positions: { id: string | null; top: number }[] = [
      { id: null, top: 0 },
    ];

    for (const id of sectionIds) {
      if (!id) continue;
      const el = document.getElementById(id);
      if (el) {
        positions.push({ id, top: el.offsetTop - 80 }); // offset for fixed nav
      }
    }

    // Sort by position descending to find the nearest section above
    positions.sort((a, b) => b.top - a.top);

    const target = positions.find((p) => p.top < scrollY - 10);

    window.scrollTo({
      top: target ? target.top : 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll up"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ backgroundColor: "#B8956A" }}
    >
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
