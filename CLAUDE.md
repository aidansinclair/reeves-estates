# CLAUDE.md

> Claude Code reads this file automatically at the start of every session.
> It is the single source of truth for project conventions. Follow it precisely.

## Current State
*Last updated: 2026-05-01*

**Last session:** Diagnosed and fixed broken Vercel auto-deploy — the live `reeves-estates` Vercel project (ReevesEstates team) had no git repo connected. Connected `aidansinclair/reeves-estates` and confirmed webhook auto-deploys are working. Corrected CLAUDE.md architecture — removed "single-page site" framing, documented full multi-page route structure. Resolved audit item 8 (not actually orphaned — `/services` page exists).

**Unresolved — Vercel/GitHub handoff connection:**
The `reeves-estates/website` GitHub repo (under the `reeves-estates` GitHub account, intended for client handoff to Matt Reeves) cannot currently be connected to Vercel. Vercel only sees GitHub accounts linked via OAuth, and the `reeves-estates` GitHub account has not been successfully added to Vercel despite the GitHub App being installed on it. The blocker appears to be that Vercel's "Add GitHub Account" OAuth flow requires active GitHub session switching — it didn't work while logged in as `aidansinclair`. **Resolution path:** While logged into GitHub as `reeves-estates`, click "Add GitHub Account" in Vercel Git settings, complete the OAuth flow, then reconnect the project to `reeves-estates/website`.

**Current deploy setup (working):**
- Local remote: `git@github.com:aidansinclair/reeves-estates.git`
- Vercel project: ReevesEstates team → `reeves-estates` → connected to `aidansinclair/reeves-estates`
- Auto-deploys on push to `main` ✓

**Next up (suggested):**
- Audit item 6: flip hero CTA hierarchy — make "Schedule a Consultation" primary (filled bronze), phone number secondary
- Delete `CalEmbed.tsx` if confirmed unused
- Confirm whether `feature/services-grouping` has been merged into `main` or is still open
- Audit item 11: add pricing/commission FAQ entry
- Resolve `reeves-estates/website` Vercel connection (see above)

## Project Overview

**reevesestates.com** — Marketing website for Reeves Estates, a Houston-based estate handling business. The site has a long-scroll homepage and a growing set of SEO content pages.

- **Live site:** reevesestates.com
- **Hosting:** Vercel (auto-deploys from `main`)
- **Repo:** github.com/aidansinclair/reeves-estates (private)

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4 (with PostCSS)
- Path alias: `@/*` maps to `./src/*`

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build
- `npm run lint` — Run ESLint (flat config with core-web-vitals + typescript rules)

## Architecture

**Homepage:** `src/app/page.tsx` (marked `"use client"`) — long-scroll page composing all marketing sections.

**SEO content pages** (under `src/app/(content)/`, shared Navigation + Footer layout):
- `/services` — expanded services detail page
- `/faq` — dedicated FAQ page
- `/neighborhoods/[slug]` — neighbourhood pages (bellaire, memorial, midtown, museum-district, river-oaks, tanglewood, upper-kirby, west-university)

**Supporting files:**
- Global styles: `src/app/globals.css`
- Components: all in `src/components/` — Navigation, Hero, TrustBar, Credentials, Services, HowItWorks, About, Testimonials, Contact, Footer, FAQ, FAQAccordion, BackToTop, PullQuote, PhoneLink
- `src/app/sitemap.ts` and `src/app/robots.ts` — SEO metadata
- Scroll animations: `IntersectionObserver` in root page applies `visible` class to `.fade-in-section` elements; 1000ms `setTimeout` fallback forces `opacity: 1; transform: none` if JS animations don't fire

## Design System

### Colors

| Name     | Hex       | Usage                                       |
|----------|-----------|----------------------------------------------|
| Cream    | `#F8F4EE` | Page backgrounds, light surfaces             |
| Charcoal | `#1C1C1C` | Body text, dark sections                     |
| Bronze   | `#B8956A` | Accents, CTAs, borders, interactive elements |

Use Tailwind tokens — never hardcode hex values in components.

### Typography

**THIS IS THE DEFINITIVE FONT SYSTEM. Do not substitute, override, or load alternatives.**

| Font                      | Role            | Usage                                    |
|---------------------------|-----------------|------------------------------------------|
| PP Hatton Medium          | H1 — Display    | Hero headlines, large display text       |
| PP Pangram Sans Compact   | H2 — Headings   | Section headings, card titles, labels    |
| PP Fragment Glare         | Body            | Paragraphs, descriptions, UI text        |

**Exact CSS values (locked — use these precisely):**

```css
/* H1 — PP Hatton Medium */
font-family: 'PP Hatton', serif;
font-weight: 500;
font-size: 96px;
line-height: 0.95;
letter-spacing: -0.020em;

/* H2 — PP Pangram Sans Compact */
font-family: 'PP Pangram Sans Compact', sans-serif;
font-weight: 400;
font-size: 26px;
line-height: 1.03;
letter-spacing: 0.005em;

/* Body — PP Fragment Glare */
font-family: 'PP Fragment Glare', serif;
font-weight: 400;
font-size: 22px;
line-height: 1.25;
letter-spacing: 0.010em;
```

**Font files:** Add `.otf` files to the fonts folder (check `/fonts`, `/public/fonts`, or `/src/fonts`). Load via `next/font/local`. Expose as CSS variables and reference in Tailwind config. Do NOT use `next/font/google`.

**CSS variable names (use these in components — do not hardcode font-family strings):**

| Variable          | Font                    | Tailwind class  |
|-------------------|-------------------------|-----------------|
| `--font-hatton`   | PP Hatton Medium        | `font-heading`  |
| `--font-pangram`  | PP Pangram Sans Compact | `font-compact`  |
| `--font-fragment` | PP Fragment Glare       | `font-body`     |

Aliases: `--font-display` and `--font-heading` both resolve to `--font-hatton`.

> **Note:** If you find Cormorant Garamond, PP Neue Machina, Playfair Display, Libre Baskerville, or Inter used for display/body roles in the codebase, they are from an older design system and should be replaced with the three fonts listed above.

### Tone & Voice

**This matters. Read it carefully before writing ANY copy.**

Reeves Estates serves people during some of the most overwhelming transitions of their lives — inheriting an estate, downsizing, letting go of a loved one's belongings. The voice must honor that.

**The feel:** Quiet confidence. Warmth without sentimentality. Expertise that reassures rather than intimidates. Think: a trusted advisor who speaks in a calm, unhurried way — someone who has done this before and will walk beside you through it.

**Write like this:**
- Conversational but polished — never stiff, never corporate
- Short, clear sentences. Let the ideas breathe.
- Speak to one person, not an audience
- Lead with empathy, follow with competence
- Use active voice. Say "we" and "you," not "the client" or "one"

**Never write like this:**
- Cold, transactional, or clinical language
- Jargon, buzzwords, or filler ("leverage," "optimize," "solutions," "streamline")
- Aggressive sales pressure or urgency tactics
- Generic placeholder copy — every sentence should feel like it was written for this business specifically
- Exclamation points (except very rarely, in a moment of genuine warmth)

**Design sensibility:** Estate law firm meets high-end gallery. Generous whitespace, restrained animation, no visual clutter. The site should feel like walking into a quiet, well-lit room.

## Design System — Spacing

This site uses a tighter spacing scale than Tailwind defaults. Apply the following rules to all new and edited components:

- Default section vertical padding: py-10 (not py-16 or py-20)
- Large section vertical padding: py-14 lg:py-20 (not py-20 lg:py-28)
- Component internal padding: p-6 (not p-8 or p-10)
- Gap between elements: gap-4 (not gap-6 or gap-8)
- Margin between text blocks: mb-4 (not mb-6 or mb-8)

When in doubt, use the smaller spacing value. Generous whitespace is not a goal on this site — density and elegance are preferred over open space.

Never add extra padding or margin "for breathing room" without explicit instruction.

## Key Conventions

### Before building or modifying anything, read:

1. `src/app/globals.css` — base styles, font-face declarations, CSS custom properties
2. `src/app/page.tsx` — layout patterns, component usage, spacing
3. Tailwind config (v4 may use `globals.css` or `@theme` instead of `tailwind.config.ts`)
4. Existing components in `src/components/` — match their patterns

### Responsive breakpoints

- Mobile-first design
- Nav switches from hamburger → full desktop nav at `xl:` (1280px), NOT `lg:` (1024px)
- iPad Pro 12" (1024px) must get the hamburger menu
- Use `xl:` for any layout that should only appear on laptop/desktop screens

### Images

- Store in `/public/images`
- Use `next/image` with proper `width`, `height`, and `alt` attributes
- Prefer WebP format for photography

## Contact Info

- **Phone:** 832-474-9547
- **Email:** midtownmodern@gmail.com *(client's explicit preference — do not change without instruction from Aidan)*
- **Location:** Houston, TX

## Active Branches & Known Issues

> Update this section as work progresses.

**Active branches:**
- `feature/email-cta` — Email CTA experiment
- `feature/faq-page` — Dedicated /faq page
- `feature/faq-schema-contact-page` — FAQ schema markup + contact page
- `feature/neighborhood-river-oaks` — River Oaks neighbourhood content
- `feature/phone-link-desktop` — Desktop phone link treatment
- `feature/services-grouping` — Services category grouping (may be merged into main already)
- `feature/post-seo-polish` / `feature/seo-content` / `release/seo-phase-1` — SEO work

**Open issues:**
- Contact section layout: verify four-column layout is resolved on mobile
- `feature/services-grouping`: confirm whether this branch has been merged into `main` or is still open

---

## UX Audit — Open Items
*Conducted April 2026 via live site review of reevesestates.com. Ordered by priority. CC should not close any item without explicit instruction from Aidan.*

---

### 🔴 P0 — Fix Immediately

#### ✅ 1. Animation/hydration failure — content invisible on live site *(fixed)*
All sections below the hero render with `opacity: 0` or offscreen transforms that never resolve. The IntersectionObserver or scroll-trigger animation logic was failing silently.

**Resolution:** 1000ms `setTimeout` fallback added in `page.tsx` forces `opacity: 1; transform: none` on all `.fade-in-section` elements if JS animations don't fire. `@media (prefers-reduced-motion: reduce)` rule added in `globals.css`.

#### 2. Contact email is a Gmail address *(client preference — do not change)*
`midtownmodern@gmail.com` is flagged as a trust signal risk for high-net-worth clients. However, the client has explicitly requested this address be kept. No action to be taken.

---

### 🟠 P1 — High Priority

#### ✅ 3. Hero scroll dead zone (~580px of no content signal) *(fixed)*
Hero was `min-h-screen` at large displays. **Resolution:** Changed to `min-h-screen md:min-h-[85vh]` so the next section always peeks above the fold on desktop.

#### ✅ 4. Section backgrounds are too similar — no visual rhythm *(partially fixed)*
Sections were indistinguishable. **Resolution:** `border-bronze/10` horizontal rules added between sections (`HowItWorks.tsx`, `Testimonials.tsx`). Full charcoal alternation was not implemented — open if further contrast is needed.

#### ✅ 5. About section is buried at scroll position 7 of 8 *(partially addressed)*
**Resolution:** `Credentials` block added between HowItWorks and Services, surfacing three-generation credentials and gallery differentiator earlier in the page. Full About section remains in its original position.

---

### 🟡 P2 — Medium Priority

#### 6. Hero CTA hierarchy: phone number leads, consultation lags
`832-474-9547` is the primary hero CTA. For a service handling estate transitions, many visitors are not ready to call cold — the lower-commitment action should receive equal or greater visual weight.

**Fix:** Make "Schedule a Consultation" the primary button (filled, bronze) and the phone number the secondary action (outlined or text-only). The phone number already appears in the nav — it doesn't need to be the hero's primary CTA.

#### ✅ 7. Services section: 10 cards with no grouping *(fixed)*
**Resolution:** Services grouped into three named categories — "Sell Everything," "Sell Selectively," "Just Handle It" — each with a one-line descriptor. Implemented in `Services.tsx`.

#### ✅ 8. "View all services in detail →" CTA is orphaned *(not an issue — /services page exists)*
`/services` is a real SEO-targeted page at `src/app/(content)/services/page.tsx`. Both this button and the footer Quick Link correctly point to it.

#### ✅ 9. Contact section heading doesn't signal function *(fixed)*
**Resolution:** Contact section heading updated to "Contact Us" with a supporting paragraph. Implemented in `Contact.tsx`.

---

### 🟢 P3 — Lower Priority / Refinement

#### 10. Hero scroll affordance is too low contrast
"LEARN HOW WE WORK TOGETHER ↓" is styled in small caps at near-white on the hero photo. Most visitors won't notice it. It is the only downward affordance on a hero that occupies 100vh.

**Fix:** Increase contrast of the scroll prompt, or replace with an animated chevron on a semi-opaque pill/background. Alternatively, ensure the trust bar peeks above the fold (see P1 item 3) so the scroll invitation is implicit.

#### 11. FAQ missing pricing/commission transparency
Every visitor is silently wondering what Reeves costs. There is no FAQ entry addressing pricing, commission, or fee structure. This silence increases friction and drop-off.

**Fix:** Add one FAQ entry under "Practical Questions":
> *"How does Reeves charge for its services?"*
> Answer can be intentionally vague: "Our fee structure varies by service type — estate sales operate on commission, while buyouts involve a direct purchase offer. We'll walk you through the specifics on our first call."

#### 12. Testimonials lack specificity
Current attributions: "M. Patterson, Houston" / "R. Caldwell, Estate Attorney" / "J. & S. Whitmore, River Oaks". No photos, no dates, no service type referenced.

**Fix:** Add service type and approximate year after each attribution:
- "M. Patterson, Houston — Estate Sale, 2024"
- "R. Caldwell, Estate Attorney — Executor Engagement, 2023"
- "J. & S. Whitmore, River Oaks — Private Treaty Sale, 2024"

Photos optional but would significantly increase credibility.

#### ✅ 13. FAQ accordion lacks ARIA accessibility *(fixed)*
**Resolution:** `aria-expanded` and `aria-controls` added to FAQ accordion triggers in `FAQ.tsx`.

#### 14. Trust bar underutilises first post-hero real estate
"Three Generations of Expertise · Fine Art · Antiques · Decorative Arts · Discreet. Thorough. Trusted." tries to do too much in 118px.

**Fix:** Split into two lines or a two-column layout:
- Line 1 (credentials): "Three generations of expertise in fine art, antiques & decorative arts"
- Line 2 (differentiator): "Houston's only estate service with a dedicated 5,000 sq ft gallery"

#### 15. Hero headline audience-match risk
"The Provenance Continues." is elegant but assumes art-world vocabulary. The word "provenance" has a specific technical meaning that a non-collector executor may not immediately connect to their situation.

**Fix:** Do not change the headline without testing. But consider A/B testing against a more direct alternative and measuring bounce rate. The subhead "White-glove service. Cash offers. Nothing left behind." is strong — ensure it's visible and legible at all viewport sizes, not just on large displays.

---

*Last reviewed: April 2026. Items should be checked off in CLAUDE.md as completed, not deleted, so the audit history is preserved.*

---

## Git Workflow

- `main` is the production branch (auto-deploys to Vercel)
- Feature branches for all new work
- Small, isolated fixes (like breakpoint tweaks) can go directly to `main`
- Rebase feature branches onto `main` after direct fixes: `git rebase main`