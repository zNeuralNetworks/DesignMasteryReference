# Content Strategy & Audit: DesignMastery Reference

This document outlines the current state of content and provides a roadmap for hardening existing entries and expanding the library with high-leverage professional patterns.

---

## 1. Current State Audit
The library currently contains **57 entries**. All entries in `data/entries/` are fully fleshed out with high confidence scores (85–98) and complete field coverage across mechanism, tradeoffs, failureModes, a11ySpecs, implementationNotes, and interactive demos.

> **Note:** A prior version of this doc stated ~80% of entries were in a "Migrated Placeholder" state. That reflected the state of `data/lessons/` — a now-deleted parallel directory of 54 stub files that was never wired into the app. The active `data/entries/` library has been production-quality since v1.0.0.

### 1.1 Editorial Tiers
Entries are differentiated by the optional `contentStatus` field:
- `flagship`: Showcase entries with interactive demos, rich content, and cross-references (e.g., *Optimistic UI*, *Hick's Law*, *Case Study: Linear*)
- `hardened`: Fully spec-complete, verified for accuracy, no gaps
- `draft`: Newly added or awaiting a depth pass (default when unset)

**Priority for `flagship` designation:** entries with `confidenceScore >= 95` and an assigned `interactiveComponent`.

---

## 2. Hardening Roadmap (High Priority)
The following entries should be prioritized for deep-dive content updates:

1.  **Hick's Law:** Add specific logarithmic decision-time data and "Choice Overload" failure modes.
2.  **Gestalt Principles:** Add specific spacing/margin specs (e.g., the 2x rule for grouping).
3.  **Skeleton Screens:** Add "Flicker" failure modes and "Minimum Loading Time" implementation notes.
4.  **Design Tokens:** Add naming convention specs (Category-Type-Item-Subitem).
5.  **Web Vitals:** Add specific LCP/FID/CLS targets and "Field vs Lab" data tradeoffs.

---

## 3. New Content Opportunities

### 3.1 Interaction (Advanced Patterns)
*   **Command Palettes (The CMD+K Pattern):** Analysis of the "Omnisearch" trend (Linear, Slack, Raycast).
*   **Multi-Select & Batch Actions:** UX for managing large datasets (Shift-click, Marquee select).
*   **Infinite Scroll vs. Pagination:** Decision matrix for content discovery vs. item retrieval.

### 3.2 Psychology (Decision Support)
*   **Peak-End Rule:** Designing for the most intense and final moments of a user journey.
*   **Zeigarnik Effect:** Using incomplete tasks to drive engagement (e.g., profile completion bars).
*   **Von Restorff Effect:** Using isolation to drive attention to primary CTAs.

### 3.3 Accessibility (Technical Specs)
*   **Skip Links:** Implementation specs for keyboard-only users.
*   **Focus Traps:** How to manage focus in modals and slide-overs correctly.
*   **Cognitive Load A11y:** Designing for users with ADHD or dyslexia.

### 3.4 Systems (Architectural)
*   **Multi-Brand Design Systems:** Strategies for theming across distinct brand identities.
*   **Component Lifecycle:** Managing deprecation and versioning in a shared library.
*   **The "Headless" Pattern:** Tradeoffs of using Radix/Headless UI vs. building from scratch.

### 3.5 Anti-Patterns (Risk Management)
*   **Deceptive Patterns (Dark Patterns):** Analysis of "Forced Continuity" and "Sneak into Basket."
*   **Modal Overload:** The psychological cost of "Pop-up Fatigue."
*   **Infinite Scroll Fatigue:** When "More Content" becomes a usability barrier.

---

## 4. Decision Support Tools (Feature Ideas)
Beyond static entries, the app could benefit from interactive "Calculators":
*   **Decision Time Calculator:** Input number of choices to see the Hick's Law impact.
*   **A11y Checklist Generator:** Select a component type (e.g., "Modal") to get a custom A11y spec sheet.
*   **Perf Budget Estimator:** Calculate the impact of adding heavy visual patterns (e.g., Glassmorphism) on TTI.

---

## 5. Content Style Guide
*   **Tone:** Senior-to-Senior. No "What is a button?" content.
*   **Density:** Use bullet points, bold text, and tables. No long paragraphs.
*   **Actionable:** Every entry must answer: "What should I do in my code/Figma right now?"
