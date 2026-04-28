# Information Architecture (IA): DesignMastery Reference

**Version:** 2.0.0
**Status:** Active
**Last Updated:** 2026-04-28

---

## 1. Structural Overview

DesignMastery Reference uses a **Matrix-based Information Architecture**. Every entry exists at the intersection of a **Domain** (subject matter) and a **Format** (structural type). The primary retrieval model is **symptom-driven** — users arrive with a UI problem ("this spacing feels wrong") and find the relevant pattern through Fix Guides, search, or the command palette.

---

## 2. Taxonomy

### 2.1 Domains (The "What")

| Domain | Description |
|---|---|
| `layout` | Spacing, grid, containers, responsive layout, flexbox, CSS grid |
| `typography` | Scale, hierarchy, line height, line length, font pairing, variable fonts |
| `color` | Harmony, semantic color systems, dark mode, color blindness |
| `components` | Buttons, modals, tabs, forms, tables, dropdowns, tooltips |
| `interaction` | State management, feedback, gestures, transitions, onboarding, undo |
| `motion` | Animation principles, easing curves, scroll animations, stagger |
| `visual-hierarchy` | Visual weight, emphasis, F-pattern, serial position |
| `psychology` | Cognitive biases, Hick's Law, Miller's Law, Fitts's Law, Gestalt |
| `responsiveness` | Mobile-first, breakpoints, fluid layouts, thumb zone, touch targets |
| `data` | Data visualization, charts, tables, number formatting |
| `tokens` | Design tokens, atomic design, component props, multi-brand theming |

### 2.2 Formats (The "How")

| Format | Description |
|---|---|
| `principle` | High-level, universal guidance (e.g., Hick's Law) |
| `pattern` | Specific, reusable UI solutions (e.g., Optimistic UI) |
| `system` | Methodologies for organisation (e.g., Atomic Design) |
| `style` | Visual aesthetics and atmospheric design (e.g., Glassmorphism) |
| `anti-pattern` | Practices to avoid with documented failure modes (e.g., Scroll Jacking) |
| `case-study` | Deep-dive analysis of industry-leading implementations |

---

## 3. Data Schema (The Entry)

Every `ReferenceEntry` is a structured object designed for decision support. Source of truth: `types.ts`.

### 3.1 Metadata Layer
- `id` — unique identifier (kebab-case)
- `slug` — URL-friendly identifier
- `title` — professional name of the pattern/principle
- `domain` — one of the 11 domains above
- `format` — one of the 6 formats above
- `complexity` — `basic | intermediate | advanced`
- `contentStatus` — `draft | hardened | flagship` (editorial maturity tier)

### 3.2 Judgment Layer (Decision Support)
- `verdict` — `recommended | conditional | experimental | anti-pattern`
- `confidenceScore` — 0–100 (universality of the advice)
- `useContext` — `saas | mobile | dashboard | devtools | content`

### 3.3 Content Layer
- `quickTake` — 1-sentence bottom line (must be metric-driven or failure-specific)
- `whyItMatters` — architectural justification
- `mechanism` — array of logical steps
- `whenToUse` / `whenNotToUse` — decision logic
- `tradeoffs` — array of `{ pro, con }` objects
- `failureModes` — array of named, specific risks
- `alternatives` — array of `{ entryId, condition }` for redirection

### 3.4 Technical Layer
- `a11ySpecs` — implementation requirements for accessibility
- `perfImpact` — `low | medium | high`
- `implementationNotes` — technical guidance for engineers
- `checklist` — concrete, non-obvious audit items
- `codeSnippet` — implementation reference (language + code)

### 3.5 Retrieval Layer
- `tags` — taxonomy labels for filtering
- `intentTags` — problem-vocabulary for Fix Guide routing (e.g., `fix-hierarchy`, `improve-readability`)
- `relatedEntryIds` — lateral links to similar concepts (cross-ref validated at build time)
- `interactiveComponent` — name of live demo component in `InteractiveDemos.tsx`

---

## 4. Navigation & Discovery

### 4.1 Solve Mode (Default)

The primary interaction model. Optimised for mid-build, symptom-driven retrieval.

- **Fix Guide Carousel** — 6 symptom guides (Typography, Spacing, Layout, Navigation, Performance, Forms) with problem-vocabulary chips. Clicking a guide filters entries using `intentTags` semantic matching.
- **SolveCards** — action-shaped cards showing `quickTake` + top 3 checklist items + "Apply →". Entry-shaped, not article-shaped.
- **Search placeholder** — "Describe the problem: 'spacing feels off', 'hierarchy unclear'..."
- **Active Fix Guide Banner** — collapsible checklist showing matched entry count and guide actions.

### 4.2 Explore Mode (Secondary)

Optimised for ambient browsing of the taxonomy.

- **Theme Gallery Row** — visual entry point for the 6+ aesthetic theme entries.
- **Visual preview cards** — StaticVisual card format with domain/format metadata.
- **Domain pills + intent filter** — full taxonomy browsing controls.

Mode is persisted to `localStorage`. Toggle in page header.

### 4.3 Command Palette (⌘K)

Fastest path to any entry from anywhere in the app.

- **Quick Fix chips** — shown when query is empty; one click per symptom category.
- **Intent prefix detection** — `fix ` → diagnose, `impl ` → implement, `avoid ` / `risk ` → evaluate-risk.
- **Keyboard-first** — ↑↓ navigate, Enter opens, Esc closes.
- **Intent badge** — shown when a prefix is detected in the query.

### 4.4 The Viewer (Entry Detail)

- **Spec Sheet layout** — two-column; left: mechanism, usage, failure modes, alternatives; right: sticky sidebar with performance, a11y, tradeoffs, checklist.
- **"The Bottom Line"** — dark accent section with `quickTake` and verdict.
- **Spec Summary grid** — 6-column at-a-glance: Use When / Avoid When / Failure Mode / Perf / A11y / Alternatives.
- **Interactive demo** — lazy-loaded `interactiveComponent` in sticky sidebar.
- **Comparison trigger** — each alternative entry has a "Compare" link routing to `/compare/{id1}/{id2}`.

### 4.5 The Comparison Engine

- **Side-by-side table** — comparing Verdict, Complexity, Perf Cost, A11y requirements, Tradeoffs.
- **Architectural Verdict card** — "Choose A if X, choose B if Y" in plain English.
- **Decision Framework card** — evaluation guidance + anti-pattern warning if applicable.

---

## 5. Relationship Mapping

Entries form a **Knowledge Graph**:
- `relatedEntryIds` — lateral links to similar concepts (validated at build time)
- `alternatives` — directed links to "better" or "different" solutions with conditions
- `intentTags` — symptom-vocabulary links to Fix Guides
- **Concept Clusters (Phase 3)** — planned visual mapping of how Foundations lead to Patterns

---

## 6. AI Assistant (Not Yet Implemented)

A planned dynamic IA layer allowing natural language queries across the knowledge graph (e.g., "What is the best alternative to Skeleton Screens for a low-bandwidth mobile app?"). Implementation tracked in TGR-131.
