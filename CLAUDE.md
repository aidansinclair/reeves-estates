# CLAUDE.md

> Claude Code reads this file automatically at the start of every session.
> It is the single source of truth for project conventions. Follow it precisely.

## Project Overview

**reevesestates.com** — Single-page marketing website for Reeves Estates, a Houston-based estate handling business.

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

- Single page: `src/app/page.tsx` (marked `"use client"`)
- Global styles: `src/app/globals.css`
- Components: all in `src/components/` — Navigation, Hero, TrustBar, Services, HowItWorks, About, Testimonials, Contact, Footer
- Scroll animations: `IntersectionObserver` in root page applies `visible` class to `.fade-in-section` elements

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
- **Email:** midtownmodern@gmail.com
- **Location:** Houston, TX

## Active Branches & Known Issues

> Update this section as work progresses.

- `feature/cal-booking-modal` — Cal.com booking integration (modal-based)
- `feature/test-tooltip-button` — Tooltip button experiment
- Hero carousel images may not load on feature branches (works on `main`)
- Contact section has a four-column layout issue to resolve
- **Font overhaul needed:** Replace all existing fonts (Cormorant Garamond, PP Neue Machina, Inter, etc.) with the new three-font system: PP Hatton Medium, PP Pangram Sans Compact, PP Fragment Glare. Add .otf files to fonts folder, set up with next/font/local, update globals.css and all components.

---

## UX Audit — Open Items
*Conducted April 2026 via live site review of reevesestates.com. Ordered by priority. Do not close any item without explicit instruction from Aidan.*

---

### Resolved

#### 1. ~~Animation/hydration failure — content invisible on live site~~
~~All sections below the hero render with `opacity: 0` or offscreen transforms that never resolve.~~
**Resolved:** Added 1500ms timeout fallback in `page.tsx` and `prefers-reduced-motion` CSS rule in `globals.css`.

#### 3. ~~Hero scroll dead zone~~
~~Hero at full viewport height left ~580px of empty space before the next section.~~
**Resolved:** Hero set to `min-h-screen md:min-h-[85vh]`; TrustBar hidden on mobile; section padding reduced.

#### 4. ~~Section backgrounds too similar — no visual rhythm~~
~~Alternating sections were perceptually identical at `bg-cream` and `bg-cream-dark/50`.~~
**Resolved:** Credentials block uses `bg-charcoal`; HowItWorks uses `bg-cream-dark` with `border-y border-bronze/10`.

#### 5. ~~About content buried at scroll position 7 of 8~~
~~Key differentiators (50+ years, 3 generations, 5,000 sq ft gallery) appeared only near the bottom.~~
**Resolved:** Added Credentials component (charcoal stat block) between HowItWorks and Services.

#### 13. ~~FAQ accordion lacks ARIA accessibility~~
~~The `+` indicator didn't communicate state to screen readers.~~
**Resolved:** `aria-expanded`, `aria-controls`, `role="region"`, and `+` / `−` toggle all implemented.

---

### Still open

#### 2. Contact email is a Gmail address
`midtownmodern@gmail.com` appears in the footer and contact section. For attorneys, executors, and high-net-worth clients, this undermines confidence.

**When ready:** Replace with a professional address (e.g. `matt@reevesestates.com`) via Google Workspace or Zoho. Update every instance — footer, contact section, mailto links, any form handlers.

#### 6. Hero CTA hierarchy
The phone number is visually primary; "Schedule a Consultation" is secondary. Many visitors arriving during an estate transition aren't ready to call cold — the lower-commitment action deserves equal or greater weight.

**Suggestion:** Make "Schedule a Consultation" the filled bronze button and the phone number the secondary action. The number already appears in the nav.

#### 7. Services section: 10 cards with no grouping
A flat grid of ten cards can feel overwhelming for a visitor who arrives distressed.

**Suggestion:** Group into three named categories:
- **"Sell Everything"** — Cash Buyout, Estate Sales, On-Site Sales
- **"Sell Selectively"** — Fine Art & Antiques, Private Treaty, Partial Estates
- **"Just Handle It"** — Executor Support, Estate Appraisal, Estate Clearance, Living Estates

Each category could have a brief one-line descriptor.

#### 8. "View all services in detail →" CTA
This link appears after the services grid on a single-page site. Visitors don't know where it leads.

**Suggestion:** Either remove it, replace with "Talk to us about your specific situation →" linking to `#contact`, or save it for a future `/services` page.

#### 9. Contact section heading doesn't signal function
"Your Estate. Uniquely Yours." is good brand copy but doesn't identify the section for a visitor who's scanning.

**Suggestion:** Add a functional subheading — e.g. "Get in Touch" or "Start the Conversation."

#### 10. Hero scroll affordance is low contrast
"LEARN HOW WE WORK TOGETHER ↓" is small caps at near-white on the hero photo. It's easy to miss as the only downward cue on a full-height hero.

**Suggestion:** Increase contrast, or add a semi-opaque background behind the prompt. Alternatively, letting the trust bar peek above the fold makes the invitation implicit.

#### 11. FAQ missing pricing/commission transparency
Visitors are often quietly wondering what Reeves costs. No FAQ entry addresses fee structure.

**Suggestion:** Add one entry — something like: *"Our fee structure varies by service type — estate sales operate on commission, while buyouts involve a direct purchase offer. We'll walk you through the specifics on our first call."*

#### 12. Testimonials lack specificity
Current attributions have no dates or service type. Adding context makes them feel more credible.

**Suggestion:** Append service type and year — e.g. "M. Patterson, Houston — Estate Sale, 2024".

#### 14. Trust bar content
"Three Generations of Expertise · Fine Art · Antiques · Decorative Arts · Discreet. Thorough. Trusted." is trying to do a lot in a narrow band.

**Suggestion:** Split into two focused lines — credentials on one, gallery differentiator on the other.

#### 15. Hero headline audience-match
"The Provenance Continues." is elegant but assumes art-world vocabulary. Non-collector executors may not immediately connect.

**Suggestion:** Don't change without testing. The subhead carries the plain-language weight — make sure it's always legible at all viewports.

---

*Last reviewed: April 2026. Mark items resolved above rather than deleting them, so the audit history is preserved.*

---

## Git Workflow

- `main` is the production branch (auto-deploys to Vercel)
- Feature branches for all new work
- Small, isolated fixes (like breakpoint tweaks) can go directly to `main`
- Rebase feature branches onto `main` after direct fixes: `git rebase main`

**Vercel previews:** Branch preview deployments exist but the preview URL is not reliably accessible during a session — clicking a deployment link typically lands on GitHub rather than the live preview. The practical approach is to merge to `main` to verify changes on the live site. Don't wait for a preview URL to confirm work.