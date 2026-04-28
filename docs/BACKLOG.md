# Project Backlog: DesignMastery Reference

This document tracks planned features, technical debt, and content requirements.
Linear is the source of truth for active issues — this file reflects the same state.

---

## 1. High Priority (Phase 2)

### 1.1 Content Hardening

- [ ] **Audit all 121 entries and assign contentStatus** (`draft | hardened | flagship`): Many entries have truncated `content` sections from the initial migration (identified: empty-states, gestalt-proximity, dark-mode-design, performance-tuning). No entry currently has `contentStatus` set. → **TGR-91**
- [ ] **Complete draft entries**: Expand truncated `content` sections; ensure all entries have code snippets where applicable.
- [x] **Case Studies present**: Linear, Airbnb, Duolingo, Imprint case studies exist following Spec Sheet format.

### 1.2 Retrieval Improvements

- [ ] **Intent prefix detection in search**: Wire `fix:` / `impl:` / `avoid:` prefix parsing into `referenceIndex.ts` query parser so intent filtering is query-driven, not just UI-driven. → **TGR-128**
- [ ] **Fix Guides expansion**: Grow from 6 to 10-12 symptom categories. Missing: "animation feels wrong", "dashboard feels cluttered", "card hierarchy unclear", "form is confusing". → **TGR-129**

### 1.3 Comparison Engine Enhancements

- [ ] **Multi-Pattern Comparison**: Allow comparing 3+ patterns simultaneously. → **TGR-93**
- [ ] **Comparison Export**: Generate a "Decision Matrix" PDF from a comparison view. → **TGR-130**

---

## 2. Technical Debt

### 2.1 Data Integrity

- [x] **Schema Validation Script**: `data/validateEntries.ts` validates all required fields, confidence score range, duplicate ids/slugs, and generic checklist detection. Wired into `npm run lint` via `npm run validate:entries`.
- [x] **Broken Link Checker**: `validateEntries.ts` cross-validates all `relatedEntryIds` and `alternatives.entryId` against the registered entry id set.

### 2.2 Performance

- [x] **Dynamic Imports**: Route-level code splitting via `React.lazy()` in `App.tsx`. Per-entry demo components are lazily resolved via `entry.interactiveComponent` with a `Suspense` boundary in `ReferenceViewer`.

### 2.3 UX Polish

- [ ] **Silent demo failure fallback**: If `entry.interactiveComponent` doesn't match a registered demo, the preview disappears with no message. Add a fallback state. → **TGR-131**
- [ ] **Copy-to-clipboard on code snippets**: `ReferenceViewer` code blocks have no copy button. → **TGR-132**
- [ ] **⌘K discoverability**: No hint on the library page that ⌘K opens the command palette with Quick Fix chips. → **TGR-133**

---

## 3. Future Vision (Phase 3)

### 3.1 Knowledge Graph

- [ ] **Visual Map**: D3.js or canvas interactive graph showing how principles (Foundations) lead to specific UI Patterns.
- [ ] **Decision Trees**: Interactive flows to help users select a pattern based on their constraints.

### 3.2 Personalization

- [ ] **Progress Tracking**: Per-entry `unseen | reviewed | mastered` state in localStorage. → **TGR-126**
- [ ] **Bookmarks/Collections**: Save "Pattern Stacks" for specific projects.
- [ ] **User Notes**: Private annotation layer for internal implementation notes.

### 3.3 Expanded Access

- [ ] **PWA Support**: Offline reading for subway/airplane. → **TGR-124**
- [ ] **Live Code Playground**: Inline Sandpack/Monaco per entry. → **TGR-125**
