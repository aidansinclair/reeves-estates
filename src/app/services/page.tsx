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
    tagline: "We take care of everything — so you don't have to.",
    body: [
      "Settling an estate is a lot to hold. Reeves Estates manages the entire process so you can focus on what actually needs your attention — family, decisions, rest. We start with a walkthrough, then handle cataloging, pricing, staging, and the sale itself.",
      "We hold estate sales at our 5,000 square foot gallery in Midtown Houston. Your family's belongings are presented the way they deserve to be — not in a hurried home sale that drives prices down, but in a curated environment that draws in collectors, designers, and buyers who recognize what they're looking at.",
      "Every item is priced by people who have spent decades with fine art, antiques, and mid-century furniture. When it's done, you receive a full accounting of every sale, and proceeds are distributed promptly.",
    ],
    keywords: ["Houston estate sales", "estate sale company Houston", "estate sale services Houston"],
  },
  {
    id: "cash-buyout",
    title: "Cash Buyout",
    tagline: "One offer. One payment. One closing.",
    body: [
      "Sometimes certainty matters more than anything else. We purchase your entire estate outright — no waiting, no commissions, no individual buyers to manage.",
      "We schedule an on-site visit, review everything, and come back with a fair cash offer — usually within 48 hours of your initial call. If it works for you, we handle all removal and clearance. You receive a single payment and a property ready for whatever comes next.",
      "Cash buyouts work especially well when an executor is managing things remotely, when family is out of town, or when you simply need this handled and behind you.",
    ],
    keywords: ["estate buyout Houston", "cash buyout estate Houston", "buy estate contents Houston"],
  },
  {
    id: "estate-appraisal",
    title: "Estate Appraisal",
    tagline: "Know what you have before you make any decisions.",
    body: [
      "Before any sale, any buyout, any distribution — you need to know what the estate contains and what it's actually worth. Our appraisers bring deep experience in fine art, antiques, mid-century modern furniture, jewelry, and collectibles. These are categories where a generalist will regularly miss the mark.",
      "We provide thorough written valuations: each item documented with provenance, condition notes, and current market comparables. The reports hold up for estate attorneys, courts, insurance carriers, and tax filings.",
      "A good appraisal protects everyone. It gives executors solid footing, gives family members confidence, and ensures that every decision made afterward — whether to sell, distribute, or donate — is made with clear information in hand.",
    ],
    keywords: ["estate appraisal Houston", "fine art appraisal Houston", "antiques appraisal Houston TX"],
  },
  {
    id: "fine-art-antiques",
    title: "Fine Art & Antiques",
    tagline: "Your most valuable pieces handled by the right hands.",
    body: [
      "Reeves Art + Design has been part of the Houston art market since 1969. That history gives Reeves Estates something no generalist estate company can offer: a real network of collectors, auction specialists, and private buyers who specifically seek fine art, antiques, and significant mid-century pieces.",
      "We work across the full range — paintings, prints, sculpture, silver, porcelain, estate jewelry, notable furniture — and bring the care and market knowledge each category requires. High-value pieces are never folded into a general sale when a better outcome is within reach.",
      "For pieces that warrant it, we look first at private treaty placement, consignment with specialist dealers, and direct outreach to known collectors — before we consider any other channel.",
    ],
    keywords: ["fine art estate sale Houston", "antiques estate Houston", "mid-century modern furniture Houston"],
  },
  {
    id: "private-treaty-sales",
    title: "Private Treaty Sales",
    tagline: "Some pieces deserve a quieter path to the right buyer.",
    body: [
      "Not everything should go through a public sale. Private treaty sales connect your family directly with the right buyer — without the fees, the exposure, or the unpredictability of auction.",
      "We keep active relationships with collectors, designers, and institutions across Houston and beyond. When a piece warrants more care — whether for its value, its provenance, or simply your family's preference — we find the right buyer and negotiate a fair price, privately.",
      "This can stand on its own, or it can be part of a broader estate strategy — placing the right pieces quietly while the rest goes through our gallery sale.",
    ],
    keywords: ["private estate sale Houston", "private treaty sale antiques Houston"],
  },
  {
    id: "executor-support",
    title: "Executor Support",
    tagline: "We make your role more manageable.",
    body: [
      "Being named executor is an honor and a burden. The personal property piece of an estate is often the most time-consuming part of it — and the one with the most moving pieces. We work directly alongside estate attorneys and executors to make sure every asset is identified, documented, valued, and accounted for.",
      "We provide the written documentation the probate process requires, coordinate with your legal team on timing and process, and handle all the logistics — so you can stay focused on the responsibilities that only you can carry.",
      "If you're managing a Houston estate from out of town, we're the trusted local partner who keeps things moving and communicates clearly at every step. We ask as little of you as possible.",
    ],
    keywords: ["executor estate services Houston", "estate attorney support Houston", "probate estate sale Houston"],
  },
  {
    id: "estate-clearance",
    title: "Estate Clearance",
    tagline: "From full to empty — completely handled.",
    body: [
      "Once a sale is done, a property still needs to be cleared. We manage the full removal of what remains — donating usable items to Houston charities and nonprofits, recycling where we can, and disposing of the rest responsibly.",
      "We leave properties clean and ready for whatever comes next — a sale, a handoff to family, or a fresh start. No extra vendors, no extra coordination on your end.",
      "Clearance is included as part of our full estate engagements. It's also available on its own for families who've already handled the sale and just need the property cleared.",
    ],
    keywords: ["estate clearance Houston", "estate cleanout Houston TX", "property clearance Houston"],
  },
  {
    id: "on-site-sales",
    title: "On-Site Sales",
    tagline: "A professional sale, conducted in the home.",
    body: [
      "Some families want the sale to happen at the property — for sentimental reasons, practical ones, or because the contents are too substantial to move. We organize and manage professional on-site estate sales with the same standards we bring to our gallery.",
      "We handle everything: pricing, staging, marketing, staffing, and security for the duration of the sale. Our team manages the flow of buyers, processes every transaction, and gives you a full accounting when it's over.",
      "On-site sales work especially well for large properties with significant furniture and household contents — situations where transporting everything to our gallery would be impractical or cost more than it saves.",
    ],
    keywords: ["on-site estate sale Houston", "estate sale at home Houston", "estate sale management Houston"],
  },
  {
    id: "living-estates",
    title: "Living Estates",
    tagline: "Downsizing, on your terms.",
    body: [
      "Not every estate sale follows a loss. Many of our clients come to us while they're very much present — moving from a larger home, transitioning to a retirement community, or simply choosing to simplify after a lifetime of accumulating things that mattered.",
      "We work at your pace, on your timeline, with full respect for what this process feels like. Nothing is touched without your approval. Nothing moves until you're ready.",
      "We bring the same care in valuation and placement to living estates as we do to any other engagement — making sure what you choose to sell returns the right value, and that what you keep is properly documented.",
    ],
    keywords: ["downsizing estate sale Houston", "living estate sale Houston", "senior downsizing Houston"],
  },
  {
    id: "partial-estates",
    title: "Partial Estates",
    tagline: "You don't have to sell everything.",
    body: [
      "Sometimes you need to move a collection. Or a room. Or the contents of a storage unit that's been sitting untouched for years. You don't need a full estate to work with us.",
      "We'll assess what you have, advise on what's worth selling versus donating, and handle placement through whatever channel makes the most sense — our gallery, a private buyer, or a specialist dealer.",
      "There's no minimum. If it's worth selling, we can help you sell it well.",
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
            className="text-4xl md:text-6xl text-cream mb-6"
            style={{ fontFamily: "var(--font-hatton)", fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.020em" }}
          >
            Houston Estate Sale Services
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-8" />
          <p
            className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto"
          >
            Whether you&rsquo;ve just inherited an estate, you&rsquo;re
            downsizing, or you simply need someone to walk beside you through a
            complicated process — you&rsquo;re in the right place.
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
                className="font-heading text-3xl md:text-4xl font-light text-charcoal mb-2"
              >
                {service.title}
              </h2>
              <p
                className="font-body text-lg text-charcoal/60 italic mb-8"
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
            className="font-heading text-3xl md:text-4xl font-light text-cream mb-4"
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
