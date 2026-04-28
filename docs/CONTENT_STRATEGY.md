# Content Strategy & Audit: DesignMastery Reference

This document outlines the current state of content and provides a roadmap for hardening existing entries and expanding the library.

**Last updated:** 2026-04-28

---

## 1. Current State Audit

The library currently contains **121 entries** across 11 domains. All entries in `data/entries/` are structurally complete (pass `npm run validate:entries`), but content depth varies significantly.

### 1.1 Editorial Tiers

Entries are differentiated by the optional `contentStatus` field:
- `flagship`: Showcase entries with interactive demos, rich content, and cross-references
- `hardened`: Fully spec-complete, verified for accuracy, no gaps
- `draft`: Newly added or awaiting a depth pass (default when unset)

**Current status:** No entry has `contentStatus` set. Assigning tiers is tracked in TGR-91.

**Known draft-quality entries** (truncated content sections): `empty-states`, `gestalt-proximity`, `dark-mode-design`, `performance-tuning`.

**Flagship-quality candidates** (confidenceScore ≥ 95 + interactiveComponent): `spacing-systems`, `mystery-meat-navigation`, `form-validation-ux`.

---

## 2. Hardening Roadmap (High Priority)

The following entries are prioritised for deep-dive content updates (TGR-91):

1. **Hick's Law** — Add logarithmic decision-time data and "Choice Overload" failure modes
2. **Gestalt Principles** — Add specific spacing/margin specs (e.g., the 2x rule for grouping)
3. **Skeleton Screens** — Add "Flicker" failure modes and "Minimum Loading Time" implementation notes
4. **Design Tokens** — Add naming convention specs (Category-Type-Item-Subitem)
5. **Web Vitals** — Add specific LCP/FID/CLS targets and "Field vs Lab" data tradeoffs
6. **Empty States** — Expand truncated content; add codeSnippet
7. **Dark Mode Design** — Expand truncated content; add CSS variable codeSnippet
8. **Performance Tuning** — Expand truncated content; add reflow vs. repaint examples

---

## 3. New Content Opportunities

### 3.1 Interaction (Advanced Patterns)

| Entry | Status |
|---|---|
| Command Palettes (CMD+K pattern) | ✅ Shipped (`command-palettes.ts`) |
| Multi-Select & Batch Actions | ⬜ Not yet added |
| Infinite Scroll vs. Pagination | ⚠️ Partial — `pagination-patterns.ts` exists; no dedicated comparison entry |

### 3.2 Psychology (Decision Support)

| Entry | Status |
|---|---|
| Peak-End Rule | ✅ Shipped (`peak-end-rule.ts`) |
| Zeigarnik Effect | ✅ Shipped (`zeigarnik-effect.ts`) |
| Von Restorff Effect | ✅ Shipped (`von-restorff-effect.ts`) |

### 3.3 Accessibility (Technical Specs)

| Entry | Status |
|---|---|
| Skip Links | ⚠️ Partial — `keyboard-navigation.ts` covers related territory; no dedicated entry |
| Focus Traps (modal/slide-over focus management) | ⚠️ Partial — `focus-management.ts` exists; focus traps not explicitly covered |
| Cognitive Load A11y (ADHD, dyslexia) | ⬜ Not yet added |

### 3.4 Systems (Architectural)

| Entry | Status |
|---|---|
| Multi-Brand Design Systems | ✅ Shipped (`multi-brand-theming.ts`) |
| Component Lifecycle (deprecation, versioning) | ⬜ Not yet added |
| Headless Component Pattern (Radix/Headless UI vs. custom) | ⬜ Not yet added |

### 3.5 Anti-Patterns (Risk Management)

| Entry | Status |
|---|---|
| Deceptive Patterns (Dark Patterns) | ✅ Shipped (`deceptive-patterns.ts`) |
| Modal Overload / Pop-up Fatigue | ⚠️ Partial — `modal-dialog.ts` covers modal UX; overload not explicitly framed as anti-pattern |
| Infinite Scroll Fatigue | ⬜ Not yet added |
| Notification Fatigue | ✅ Shipped (`notification-fatigue.ts`) |

---

## 4. Decision Support Tools (Future Feature Ideas)

- **Decision Time Calculator** — Input number of choices to see Hick's Law impact (TGR-125 scope)
- **A11y Checklist Generator** — Select a component type to get a custom A11y spec sheet
- **Perf Budget Estimator** — Calculate impact of heavy visual patterns on TTI

---

## 5. Content Style Guide

- **Tone:** Senior-to-Senior. No "What is a button?" content.
- **Density:** Bullet points, bold text, tables. No long paragraphs.
- **Actionable:** Every entry must answer: "What should I do in my code/Figma right now?"
- **quickTake standard:** Metric-driven or failure-specific ("50%+ form abandonment") — not abstract principle statements ("proximity is a grouping mechanism")
- **Checklist standard:** Non-obvious, testable items — not generic ("Verified accessibility")
