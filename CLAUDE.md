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

## Git Workflow

- `main` is the production branch (auto-deploys to Vercel)
- Feature branches for all new work
- Small, isolated fixes (like breakpoint tweaks) can go directly to `main`
- Rebase feature branches onto `main` after direct fixes: `git rebase main`