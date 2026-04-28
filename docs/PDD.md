# Product Design Document (PDD): DesignMastery Reference

**Version:** 1.3.0
**Status:** Active
**Author:** AI System Architect
**Last updated:** 2026-04-28

---

## 1. Product Vision

DesignMastery Reference is a premium, high-density reference tool for UI/UX designers, design systems architects, and frontend engineers. It is engineered to be a **design debugger** — a field manual for active product building that answers "What's wrong with my UI and how do I fix it?" under time pressure.

### 1.1 Core Philosophy

- **Design Debugger, Not Education:** The primary use case is mid-build, symptom-driven retrieval. "This spacing feels wrong" → fix. Not a course.
- **Judgment over Definition:** Every entry focuses on tradeoffs, failure modes, and alternatives rather than defining a concept.
- **High Density:** Information-rich layouts designed for rapid scanning by experienced professionals.
- **Solve First:** The default interaction model (Solve mode) surfaces Fix Guides and SolveCards before taxonomy browsing.

---

## 2. Target Audience

- **Senior Product Designers:** Looking for tradeoff analysis between complex interaction patterns.
- **Lead Frontend Engineers:** Seeking implementation specs, A11y requirements, and performance costs.
- **Design Systems Architects:** Needing a structured taxonomy for component hierarchy and system principles.

---

## 3. Information Architecture

### 3.1 Taxonomy

Every entry is categorized by **Domain** and **Format**.

| Domain | Description |
| :--- | :--- |
| **layout** | Spacing, grid, responsive, containers |
| **typography** | Scale, hierarchy, line height, pairing |
| **color** | Harmony, semantic systems, dark mode, blindness |
| **components** | Buttons, modals, tabs, forms, tables |
| **interaction** | State management, feedback, gestures, transitions |
| **motion** | Animation principles, easing, scroll, stagger |
| **visual-hierarchy** | Weight, emphasis, F-pattern, serial position |
| **psychology** | Cognitive biases, Hick's, Miller's, Fitts's, Gestalt |
| **responsiveness** | Mobile-first, breakpoints, fluid, thumb zone |
| **data** | Visualization, charts, tables, numbers |
| **tokens** | Design tokens, atomic design, component props |

| Format | Description |
| :--- | :--- |
| **principle** | High-level guidance (e.g., Hick's Law) |
| **pattern** | Reusable UI solutions (e.g., Optimistic UI) |
| **system** | Structural methodologies (e.g., Atomic Design) |
| **anti-pattern** | What to avoid (e.g., Scroll Jacking) |
| **case-study** | Real-world analysis of industry leaders |
| **style** | Visual aesthetics and atmospheric design |

---

## 4. Content Model: The Spec Sheet

Every reference entry follows a strict Spec Sheet structure. Source of truth: `types.ts → ReferenceEntry`.

- **Verdict:** Definitive status (recommended / conditional / experimental / anti-pattern)
- **quickTake:** The 1-sentence bottom line
- **mechanism:** Step-by-step logic of how the pattern works
- **whenToUse / whenNotToUse:** Decision logic side-by-side
- **failureModes:** Explicit documentation of where the pattern breaks
- **alternatives:** Contextual links to superior patterns with tradeoff context
- **perfImpact / a11ySpecs:** Technical specs
- **checklist:** Concrete audit items for implementation review
- **intentTags:** Symptom vocabulary for Fix Guide routing (e.g., "fix-hierarchy", "improve-readability")
- **contentStatus:** `draft | hardened | flagship` — content maturity tier
- **interactiveComponent:** Name of the live demo component in InteractiveDemos.tsx
- **codeSnippet:** Implementation reference

---

## 5. Design System

### 5.1 Typography
- **UI (Inter):** Maximum legibility for controls and labels
- **Technical (JetBrains Mono):** Code, metadata, architectural specs

### 5.2 Color Strategy
- **Primary (Indigo/Slate):** Professional, neutral, authoritative
- **Verdict colors:** Emerald (recommended), Amber (conditional), Purple (experimental), Rose (anti-pattern/risk)
- **Theming:** 6 CSS-variable themes (default, bioluminescent, swiss-polarity, quiet-luxury, operator-console, system-atlas, technical-blueprint)

### 5.3 Motion
- **Framer Motion:** Staggered entrances, subtle scale transforms, layout transitions

---

## 6. Technical Architecture

- **Frontend:** React 18 + TypeScript + Vite 6
- **Styling:** Tailwind CSS v4 (CSS variable theming)
- **Animation:** Framer Motion 11
- **Routing:** React Router v6, HashRouter, route-level code splitting via React.lazy()
- **Data:** Static TypeScript entry files — zero-latency lookup, no backend
- **Intelligence:** Gemini AI Reference Assistant (`services/prompts.ts`)
- **Validation:** `data/validateEntries.ts` — schema + cross-ref integrity, wired into `npm run lint`

---

## 7. Feature Roadmap

### 7.1 Phase 1 — Completed

- ✅ Consolidated "Lesson" app into "Reference" tool
- ✅ Implemented Spec Sheet content model (121 entries)
- ✅ Head-to-head Comparison Engine (ComparisonPage + ComparisonTable)
- ✅ AI Reference Assistant (Gemini, `services/prompts.ts`)
- ✅ Export System — E-Book Generator (`features/reference/EbookGenerator.tsx`)
- ✅ Schema validation + broken link checker (`data/validateEntries.ts`, wired into lint)
- ✅ Dynamic imports — route-level React.lazy() + per-entry demo Suspense boundary
- ✅ Command palette with intent-prefix detection and Quick Fix chips (⌘K)
- ✅ Solve/Explore mode separation — Solve default (Fix Guides first, SolveCards), Explore (ThemeGallery first, visual cards); mode persisted to localStorage
- ✅ Fix Guide routing — 6 symptom guides (Typography, Spacing, Layout, Navigation, Performance, Forms) with semantic intentTag matching
- ✅ Knowledge graph — `relatedEntryIds` populated across entries, clustered by domain

### 7.2 Phase 2 — Active

- ⬜ **Content hardening** — assign `contentStatus` to all 121 entries; complete truncated draft entries (TGR-91)
- ⬜ **Intent prefix detection** — wire `fix:` / `impl:` / `avoid:` prefix parsing into `referenceIndex.ts` query parser (TGR-128)
- ⬜ **Fix Guides expansion** — grow from 6 to 10-12 symptom categories; add "animation feels wrong", "dashboard feels cluttered", "hierarchy unclear" (TGR-129)
- ⬜ **Multi-pattern comparison** — compare 3+ entries simultaneously (TGR-93)
- ⬜ **Comparison Export** — Decision Matrix PDF from comparison view (TGR-130)
- ⬜ **Deploy to Cloud Run** — first production deployment (TGR-90, NEXT)

### 7.3 Phase 3 — Planned

- ⬜ **Concept Clusters** — visual knowledge graph of related patterns (D3.js or canvas)
- ⬜ **Decision Trees** — logic-based flows for pattern selection ("Is your app mobile-first? → Avoid Scroll Jacking")
- ⬜ **Progress Tracking** — per-entry review/mastery state in localStorage (TGR-126)
- ⬜ **PWA Support** — offline reading (TGR-124)
- ⬜ **Live Code Playground** — inline Sandpack/Monaco per entry (TGR-125)
- ⬜ **Bookmarks/Collections** — save "Pattern Stacks" for specific projects
- ⬜ **User Notes** — private annotation layer for internal implementation notes

---

## 8. Success Metrics

- **Time to Insight (TTI):** User finds a definitive judgment in < 30 seconds from symptom
- **Fix Guide hit rate:** Fix Guide carousel surfaces the right guide for the symptom
- **Content depth:** All 121 entries reach `hardened` or `flagship` contentStatus
- **Repeat Use:** High retention among active product builders
