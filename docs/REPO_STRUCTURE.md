# Repository Structure: DesignMastery Reference

This document outlines the organisation of the DesignMastery Reference codebase.

**Last updated:** 2026-04-28

---

## 1. Root Directory

| File | Purpose |
|---|---|
| `App.tsx` | Main application component and routing (HashRouter, React.lazy code splitting) |
| `main.tsx` | Application entry point; mounts ErrorBoundary + ThemeProvider + AnnotationProvider |
| `types.ts` | Global TypeScript interfaces and types — **single source of truth for ReferenceEntry** |
| `index.css` | Global styles and CSS variable token definitions (theming) |
| `vite.config.ts` | Vite build configuration |
| `CLAUDE.md` | Claude Code project instructions (Linear workflow, architecture map, dev commands) |
| `AGENTS.md` | AI assistant instructions for all agents (Gemini, Claude, Codex) |
| `README.md` | Public-facing project overview |
| `migrate-entries.ts` | Leftover migration script from v1.0.0 data migration — candidate for deletion (TGR-133) |

---

## 2. `/docs` — Documentation Hub

| File | Purpose |
|---|---|
| `PDD.md` | Product Design Document — vision, roadmap, phases |
| `IA.md` | Information Architecture — taxonomy, schema, navigation |
| `REPO_STRUCTURE.md` | This file |
| `CHANGELOG.md` | Version history |
| `BACKLOG.md` | Tracked feature and debt backlog (mirrors Linear) |
| `CONTENT_STRATEGY.md` | Entry content audit and new content roadmap |
| `CONTRIBUTING.md` | Guide for adding entries and demos |
| `CODEBASE_STRATEGY_COMPLETE.md` | Historical refactor plan — COMPLETED, preserved for reference |
| `CONSOLIDATION_PLAN_COMPLETE.md` | Historical curriculum→reference migration plan — COMPLETED |
| `CURRICULUM_RESTRUCTURING.md` | Historical PDD v1.0 — SUPERSEDED by PDD.md v1.3.0 |
| `code-graph.html` | Static interactive codebase module dependency graph |

---

## 3. `/data` — Data Layer

| File/Dir | Purpose |
|---|---|
| `index.ts` | Central registry — imports and exports all 121 `ReferenceEntry` objects |
| `validateEntries.ts` | Schema + cross-ref validation; checks required fields, duplicate ids/slugs, broken `relatedEntryIds` and `alternatives.entryId` |
| `fixGuides.ts` | 6 symptom-to-solution Fix Guide objects used by `ReferenceLibrary.tsx` |
| `entries/` | 121 individual TypeScript files, one per reference entry (e.g., `spacing-systems.ts`) |

---

## 4. `/features` — Feature-Based Components

### `/features/reference`

| File | Purpose |
|---|---|
| `ReferenceLibrary.tsx` | Main library surface — Solve/Explore mode, Fix Guide carousel, SolveCards, filtering, grid/list toggle |
| `referenceIndex.ts` | All filter, sort, and search logic — `filterReferenceEntries`, `sortReferenceEntries`, `matchesIntentFilter` |
| `ReferenceViewer.tsx` | Entry detail view — spec sheet, sticky sidebar, interactive demo, comparison links |
| `ReferenceCommandPalette.tsx` | ⌘K command palette — intent-prefix detection, Quick Fix chips, keyboard navigation |
| `ComparisonPage.tsx` | Comparison page — architectural verdict + decision framework |
| `ComparisonTable.tsx` | Side-by-side comparison table component |
| `EbookGenerator.tsx` | PDF/E-Book export view — print-optimised layout for the full library |
| `AboutPage.tsx` | About page |

### `/features/demos`

| File | Purpose |
|---|---|
| `InteractiveDemos.tsx` | 54 exported interactive demo components resolved at runtime via `entry.interactiveComponent` |
| `StaticVisuals.tsx` | Static card preview visuals for the library grid (58 components) |

### `/features/admin`

| File | Purpose |
|---|---|
| `AdminDashboard.tsx` | PIN-protected admin dashboard (PIN: 19901991) — entry listing, basic CRUD UI |

### `/features/diagnostics`

| File | Purpose |
|---|---|
| `TestRunner.tsx` | In-browser smoke test runner for data integrity and component rendering |

---

## 5. `/components` — Shared UI Primitives

| File | Purpose |
|---|---|
| `Layout.tsx` | Sticky nav, theme switcher, annotation toggle, scroll-to-top; wraps all pages |
| `Annotation.tsx` | Design annotation pin component; renders inline design decision notes |
| `Tooltip.tsx` | Generic tooltip component |

---

## 6. `/contexts` — React Contexts

| File | Purpose |
|---|---|
| `ThemeContext.tsx` | Provides `useTheme()` and `ThemeProvider`; manages active CSS variable theme across the app |
| `AnnotationContext.tsx` | Provides `useAnnotations()` and `AnnotationProvider`; manages annotation visibility toggle |

---

## 7. `/scripts`

| File | Purpose |
|---|---|
| `validate-entries.ts` | Entry point for `npm run validate:entries` — imports all entries from `data/index.ts` and runs `validateEntries()` |

---

## 8. Architectural Principles

1. **Feature Isolation:** UI, logic, and types for a specific feature live within its `/features` subdirectory.
2. **Data-Driven UI:** UI reacts to the `ReferenceEntry` schema in `types.ts`. Adding a field should only require updates in viewer and library — not scattered throughout.
3. **Static First:** Reference data is TypeScript objects — zero-latency lookup, full type safety, no backend.
4. **Validation at lint time:** `npm run lint` chains `validate:entries` (cross-ref integrity + schema) + `typecheck` — catches content errors before build.
5. **No AI services in current build:** `services/` directory and `ReferenceAssistant.tsx` were planned but not shipped. Re-implementation tracked in TGR-131.
