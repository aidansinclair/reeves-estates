"use client";

import { useState } from "react";
import { faqGroups } from "@/lib/faq-data";

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-bronze/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left cursor-pointer"
      >
        <span className="font-heading text-xl md:text-2xl font-medium text-charcoal/85 pr-4">
          {question}
        </span>
        <span
          className={`text-bronze text-xl flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-7" : "max-h-0"
        }`}
      >
        <p className="font-body text-base leading-relaxed text-charcoal/60 pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  return (
    <div className="space-y-12">
      {faqGroups.map((group, i) => (
        <div key={i}>
          <h2 className="font-heading text-2xl md:text-3xl font-medium text-bronze mb-4 text-center">
            {group.title}
          </h2>
          <div className="border-t border-bronze/10">
            {group.items.map((item, j) => (
              <AccordionItem
                key={j}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
