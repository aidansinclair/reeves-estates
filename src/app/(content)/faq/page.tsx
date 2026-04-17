import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import { faqGroups } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "Estate Sale FAQs — Houston",
  description:
    "Answers to the questions Houston families ask most about estate sales, cash buyouts, appraisals, and the Reeves Estates process. No obligation to call.",
  alternates: { canonical: "https://reevesestates.com/faq" },
  openGraph: {
    title: "Estate Sale FAQs | Reeves Estates Houston",
    description:
      "Answers to the questions Houston families ask most about estate sales, cash buyouts, appraisals, and the Reeves Estates process.",
    url: "https://reevesestates.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    }))
  ),
};

export default function FAQPage() {
  return (
    <div className="bg-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <div className="bg-charcoal py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-compact text-xs tracking-widest uppercase text-bronze mb-4">
            Reeves Estates · Houston, TX
          </p>
          <h1
            className="text-4xl md:text-6xl text-cream mb-4"
            style={{
              fontFamily: "var(--font-hatton)",
              fontWeight: 500,
              lineHeight: 1.0,
              letterSpacing: "-0.020em",
            }}
          >
            Your Estate Sale Questions, Answered
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            Everything families typically want to know before they call — and a
            few things worth knowing even if you hadn&rsquo;t thought to ask.
          </p>
        </div>
      </div>

      {/* FAQ content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <FAQAccordion />

        {/* Internal links */}
        <div className="border-t border-bronze/15 mt-16 pt-8">
          <p className="font-compact text-xs tracking-widest uppercase text-bronze mb-4">
            Explore our services
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "All Services", href: "/services" },
              { name: "River Oaks", href: "/neighborhoods/river-oaks" },
              { name: "Tanglewood", href: "/neighborhoods/tanglewood" },
              { name: "Memorial", href: "/neighborhoods/memorial" },
              { name: "West University", href: "/neighborhoods/west-university" },
              { name: "Bellaire", href: "/neighborhoods/bellaire" },
              { name: "Museum District", href: "/neighborhoods/museum-district" },
              { name: "Midtown", href: "/neighborhoods/midtown" },
              { name: "Upper Kirby", href: "/neighborhoods/upper-kirby" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-compact text-sm text-charcoal/60 border border-bronze/20 px-3 py-1 hover:text-bronze hover:border-bronze/40 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-charcoal py-14 lg:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-cream mb-4">
            Still have questions?
          </h2>
          <p className="font-body text-base text-cream/65 mb-6 leading-relaxed">
            Call us or send a note. There&rsquo;s no obligation — just an honest
            conversation about your situation and what your options are.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8324749547"
              className="px-8 py-3.5 bg-bronze text-cream font-compact text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Call 832-474-9547
            </a>
            <a
              href="mailto:midtownmodern@gmail.com?subject=Estate%20sale%20question"
              className="px-8 py-3.5 border border-cream/30 text-cream font-compact text-sm tracking-widest uppercase hover:border-bronze hover:text-bronze transition-colors"
            >
              Email us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
