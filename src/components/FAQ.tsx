"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQGroup {
  title: string;
  items: FAQItem[];
}

const faqGroups: FAQGroup[] = [
  {
    title: "About the Process",
    items: [
      {
        question: "How quickly can Reeves Estates get started?",
        answer:
          "We can typically arrange an initial consultation within 48 hours. For time-sensitive situations, we do our best to accommodate same-week visits.",
      },
      {
        question: "What happens during the initial consultation?",
        answer:
          "One of our specialists visits the property, listens to your situation, and assesses the full scope of the estate \u2014 at no charge and with no obligation. We then recommend the approach that best fits your needs and timeline.",
      },
      {
        question: "Do I need to organize anything before you arrive?",
        answer:
          "Not at all. We ask that you leave everything exactly as it is. Part of what we do is assess the estate in its entirety \u2014 including items you may not realize have value.",
      },
    ],
  },
  {
    title: "About the Buyout Option",
    items: [
      {
        question: "What is a cash buyout?",
        answer:
          "A cash buyout means Reeves Estates purchases your entire estate inventory outright \u2014 one transaction, one payment, fast closing. No waiting for buyers, no commission fees, no uncertainty.",
      },
      {
        question: "How is the buyout price determined?",
        answer:
          "Our specialists draw on decades of expertise in fine art, antiques, and mid-century modern furniture to assess fair market value. We make a transparent, no-obligation offer based on that assessment.",
      },
      {
        question: "Can I sell just part of the estate?",
        answer:
          "Yes. We handle partial estates and work with you to identify which pieces to include.",
      },
    ],
  },
  {
    title: "About Living Estates",
    items: [
      {
        question: "What is a living estate sale?",
        answer:
          "A living estate sale is for clients who are downsizing or relocating. We handle everything with the same care and discretion we bring to any estate, on your timeline.",
      },
      {
        question:
          "We\u2019re moving a parent into assisted living. Can Reeves help?",
        answer:
          "Absolutely. This is one of the most common situations we handle. We work sensitively with families during what can be an emotional transition, managing the process so you can focus on what matters most.",
      },
    ],
  },
  {
    title: "About the Gallery & Sales",
    items: [
      {
        question: "What makes Reeves Estates different?",
        answer:
          "Our 5,000 square foot gallery in Houston\u2019s Midtown gives us a significant advantage. Rather than a rushed sale in a private home, we bring the estate to our gallery \u2014 presenting pieces in a professional environment that attracts serious buyers.",
      },
      {
        question: "What neighbourhoods do you serve?",
        answer:
          "We serve Houston and the surrounding area, with particular experience in River Oaks, Midtown, and Houston\u2019s condo and high-rise communities.",
      },
      {
        question: "Can you conduct a sale at the property itself?",
        answer:
          "Yes. We organize and manage professional on-site sales events \u2014 handling all logistics, pricing, marketing, and staffing from start to finish.",
      },
    ],
  },
  {
    title: "Practical Questions",
    items: [
      {
        question: "How are proceeds handled?",
        answer:
          "We provide a full accounting of all items sold and issue payment promptly after the sale concludes. Complete transparency at every step.",
      },
      {
        question: "What happens to items that don\u2019t sell?",
        answer:
          "Options include donation to Houston-area charities, recycling, or removal \u2014 we handle all of it so the property is left clean and ready.",
      },
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes. Reeves carries full professional liability insurance and operates in full compliance with Texas state requirements for estate sales and appraisals.",
      },
    ],
  },
];

function AccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-bronze/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left cursor-pointer"
      >
        <span className="font-heading text-xl md:text-2xl font-medium text-charcoal/85 pr-4">
          {item.question}
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
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-charcoal mb-4">
            Your Questions, Answered
          </h2>
          <div className="w-16 h-[1px] bg-bronze mx-auto" />
        </div>

        <div className="space-y-12 fade-in-section">
          {faqGroups.map((group, i) => (
            <div key={i}>
              <h3 className="font-heading text-2xl md:text-3xl font-medium text-bronze mb-4 text-center">
                {group.title}
              </h3>
              <div className="border-t border-bronze/10">
                {group.items.map((item, j) => (
                  <AccordionItem key={j} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
