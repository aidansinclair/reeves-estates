import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Houston Estate Sale Services",
  description:
    "Full-service estate management in Houston — estate sales, cash buyouts, appraisals, fine art & antiques, executor support, and complete estate clearance. Serving River Oaks, Midtown, Memorial, and surrounding communities.",
  alternates: { canonical: "https://reevesestates.com/services" },
  openGraph: {
    title: "Houston Estate Sale Services | Reeves Estates",
    description:
      "Full-service estate management in Houston — estate sales, cash buyouts, appraisals, fine art & antiques, executor support, and complete estate clearance.",
    url: "https://reevesestates.com/services",
  },
};

const services = [
  {
    id: "estate-sales",
    title: "Estate Sales",
    tagline: "Houston's most trusted full-service estate sale company.",
    body: [
      "When the time comes to settle an estate, every decision matters. Reeves Estates manages the entire process — from the initial walkthrough and comprehensive cataloging to professional staging, targeted marketing, and conducting the sale itself.",
      "We hold estate sales at our 5,000 square foot gallery in Midtown Houston, giving your family's belongings the presentation they deserve. Rather than rushed home sales that depress prices, our gallery environment attracts serious collectors, interior designers, and private buyers who understand value.",
      "Every item is priced by specialists with decades of experience in fine art, antiques, and mid-century modern furniture. You receive a full accounting of every sale, with proceeds distributed promptly at close.",
    ],
    keywords: ["Houston estate sales", "estate sale company Houston", "estate sale services Houston"],
  },
  {
    id: "cash-buyout",
    title: "Cash Buyout",
    tagline: "One offer. One payment. One closing.",
    body: [
      "For families who need certainty and speed, our cash buyout service provides exactly that. We purchase your entire estate outright — no waiting for individual buyers, no commission fees, no drawn-out timelines.",
      "Our team conducts a thorough on-site assessment and delivers a fair cash offer, typically within 48 hours of your initial consultation. If accepted, we handle all removal and clearance. You receive a single payment and a property ready for whatever comes next.",
      "Cash buyouts are particularly well-suited for executor situations, out-of-town family members managing an estate remotely, or any circumstance where simplicity and speed matter more than maximizing individual sale prices.",
    ],
    keywords: ["estate buyout Houston", "cash buyout estate Houston", "buy estate contents Houston"],
  },
  {
    id: "estate-appraisal",
    title: "Estate Appraisal",
    tagline: "Accurate valuations by specialists, not generalists.",
    body: [
      "Before any estate sale or buyout, understanding what you have is essential. Our appraisal team brings deep expertise in fine art, decorative antiques, mid-century modern furniture, jewelry, and collectibles — categories where generalist appraisers routinely under- or over-value.",
      "We provide comprehensive written valuations that document each item with provenance, condition notes, and current market comparables. These reports satisfy the requirements of estate attorneys, courts, insurance carriers, and tax filings.",
      "An accurate appraisal protects the estate, gives executors confidence, and ensures that every decision made downstream — whether sale, distribution, or donation — is made on solid ground.",
    ],
    keywords: ["estate appraisal Houston", "fine art appraisal Houston", "antiques appraisal Houston TX"],
  },
  {
    id: "fine-art-antiques",
    title: "Fine Art & Antiques",
    tagline: "Your most valuable pieces handled by the right hands.",
    body: [
      "Reeves Art + Design has been a fixture of the Houston art market since 1969. That history gives Reeves Estates an edge that no generalist estate company can match: direct access to a network of serious collectors, auction specialists, and private buyers who specifically seek fine art, antiques, and mid-century modern pieces.",
      "We handle the full spectrum — paintings, prints, sculpture, silver, porcelain, estate jewelry, and significant furniture — with the care and market knowledge each category demands. High-value pieces are never lumped into a general sale when a better outcome is available.",
      "For pieces that warrant it, we explore private treaty sales, consignment with specialist dealers, and direct placement with known collectors before recommending any other channel.",
    ],
    keywords: ["fine art estate sale Houston", "antiques estate Houston", "mid-century modern furniture Houston"],
  },
  {
    id: "private-treaty-sales",
    title: "Private Treaty Sales",
    tagline: "Discreet placement for pieces that deserve it.",
    body: [
      "Not every significant item should go through a public sale. Private treaty sales connect sellers directly with qualified buyers — without the exposure, fees, and uncertainty of auction.",
      "We maintain active relationships with collectors, interior designers, and institutions across Houston and beyond. When a piece warrants a more considered approach — whether for reasons of value, provenance, or family preference — we identify the right buyer and negotiate a fair price privately.",
      "This service is available as a standalone engagement or as part of a broader estate sale strategy, where certain items are placed privately while the remainder goes through our gallery sale.",
    ],
    keywords: ["private estate sale Houston", "private treaty sale antiques Houston"],
  },
  {
    id: "executor-support",
    title: "Executor Support",
    tagline: "We make the executor's job manageable.",
    body: [
      "Serving as executor of an estate is a significant responsibility — and the personal property component is often the most time-consuming part. Reeves Estates works directly alongside estate attorneys and executors to ensure every asset is properly identified, documented, valued, and accounted for.",
      "We provide the written documentation that probate proceedings require, coordinate with legal counsel on timeline and process, and handle all logistics so the executor can focus on the broader responsibilities of the role.",
      "For out-of-town executors managing a Houston estate remotely, we serve as the trusted local partner who keeps the process moving — communicating clearly at every stage and requiring as little from you as possible.",
    ],
    keywords: ["executor estate services Houston", "estate attorney support Houston", "probate estate sale Houston"],
  },
  {
    id: "estate-clearance",
    title: "Estate Clearance",
    tagline: "From full to empty — completely handled.",
    body: [
      "Once a sale is complete, a property still needs to be cleared. Our estate clearance service manages the full removal of what remains — donating usable items to Houston charities and nonprofits, recycling what can be recycled, and disposing of the rest responsibly.",
      "We leave properties broom-clean and ready for the next chapter, whether that's a sale, a rental, or a handoff to family. No second vendors, no second coordination.",
      "Clearance is included as part of our full estate management engagements, and is also available as a standalone service for families who have already handled the sale through other means.",
    ],
    keywords: ["estate clearance Houston", "estate cleanout Houston TX", "property clearance Houston"],
  },
  {
    id: "on-site-sales",
    title: "On-Site Sales",
    tagline: "A professional sale, conducted in the home.",
    body: [
      "Some families prefer that a sale take place at the property itself — out of sentiment, practicality, or the nature of the contents. We organize and manage professional on-site estate sales with the same expertise we bring to our gallery.",
      "We handle pricing, staging, marketing, staffing, and security for the duration of the sale. Our team manages the flow of buyers, processes transactions, and provides a complete accounting at close.",
      "On-site sales work particularly well for large properties with significant furniture and household contents, where transportation to our gallery would be impractical or cost-prohibitive.",
    ],
    keywords: ["on-site estate sale Houston", "estate sale at home Houston", "estate sale management Houston"],
  },
  {
    id: "living-estates",
    title: "Living Estates",
    tagline: "Downsizing handled with care, on your timeline.",
    body: [
      "Not every estate sale follows a loss. Many of our clients come to us while they're still very much present — downsizing from a large home, relocating to a retirement community, or simply simplifying after decades of accumulation.",
      "Living estate services are conducted with particular sensitivity. We work at your pace, on your schedule, and with full respect for the emotional complexity of parting with a lifetime of belongings. Nothing moves without your approval.",
      "We bring the same expertise in valuation and placement to living estates as we do to any other engagement — ensuring that what you choose to sell brings the right return, and that what you choose to keep is properly documented.",
    ],
    keywords: ["downsizing estate sale Houston", "living estate sale Houston", "senior downsizing Houston"],
  },
  {
    id: "partial-estates",
    title: "Partial Estates",
    tagline: "You don't have to sell everything.",
    body: [
      "Some families need to move only certain items — a collection, a room's worth of furniture, the contents of a storage unit. Reeves Estates works with partial estates with the same professionalism we bring to full engagements.",
      "We'll assess what you have, advise on which items are worth selling versus donating, and handle placement through whichever channel makes the most sense — gallery sale, private buyer, or specialist dealer.",
      "There is no minimum size requirement. If it's worth selling, we can help you sell it well.",
    ],
    keywords: ["partial estate sale Houston", "sell estate items Houston", "estate consignment Houston"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-charcoal py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-body text-xs tracking-widest uppercase text-bronze mb-4">
            Reeves Estates · Houston, TX
          </p>
          <h1
            className="text-4xl md:text-6xl font-light text-cream mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Houston Estate Sale Services
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-8" />
          <p
            className="text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            From a single significant piece to a complete estate, Reeves brings
            three generations of expertise to every engagement.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="flex flex-col divide-y divide-bronze/15">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="py-14 lg:py-16">
              <p className="font-body text-xs tracking-widest uppercase text-bronze mb-3">
                {service.keywords[0]}
              </p>
              <h2
                className="text-3xl md:text-4xl font-light text-charcoal mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {service.title}
              </h2>
              <p
                className="text-lg text-charcoal/60 italic mb-8"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {service.tagline}
              </p>
              <div className="flex flex-col gap-4">
                {service.body.map((para, i) => (
                  <p key={i} className="font-body text-base leading-relaxed text-charcoal/75">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-charcoal py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-light text-cream mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Every estate is different.
          </h2>
          <p className="font-body text-sm text-cream/60 mb-10">
            Call us for a no-obligation conversation about your situation.
            We&rsquo;ll tell you honestly what we can do and what it will cost.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8324749547"
              className="px-8 py-3.5 bg-bronze text-cream font-body text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Call 832-474-9547
            </a>
            <a
              href="mailto:midtownmodern@gmail.com?subject=Schedule%20an%20estate%20sale%20consultation"
              className="px-8 py-3.5 border border-cream/30 text-cream font-body text-sm tracking-widest uppercase hover:border-bronze hover:text-bronze transition-colors"
            >
              Send an Email
            </a>
          </div>
          <div className="mt-12 pt-8 border-t border-cream/10">
            <Link
              href="/"
              className="font-body text-xs tracking-widest uppercase text-cream/30 hover:text-bronze transition-colors"
            >
              ← Back to Reeves Estates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
