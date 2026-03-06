# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Reeves Estates is a single-page marketing website for a Houston-based estate services company. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build
- `npm run lint` — Run ESLint (flat config with core-web-vitals + typescript rules)

## Architecture

- **Next.js App Router** with a single page (`src/app/page.tsx`) marked `"use client"`
- **Path alias**: `@/*` maps to `./src/*`
- **Fonts**: Cormorant Garamond (headings/serif) and Inter (body/sans) loaded via `next/font/google`, exposed as CSS variables `--font-cormorant` and `--font-inter`
- **Styling**: Tailwind CSS v4 with PostCSS; global styles in `src/app/globals.css`
- **Components**: All in `src/components/` — Navigation, Hero, TrustBar, Services, HowItWorks, About, Testimonials, Contact, Footer
- **Scroll animations**: `IntersectionObserver` in the root page applies a `visible` class to `.fade-in-section` elements
