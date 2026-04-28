# Codebase Consolidation Plan: DesignMastery Reference

> **STATUS: COMPLETED** — All items below were executed as part of v1.0.0 (2026-04-14). This document is preserved for historical reference. No action required.

**Goal**: Fully remove the legacy "curriculum/lesson" architecture and consolidate the app into a single reference-first system.

## 1. File System Refactor
- [x] Rename directory `data/lessons` to `data/entries`.
- [x] Verify `features/reference/` contains all necessary components (`ReferenceLibrary`, `ReferenceViewer`, `EbookGenerator`).

## 2. Global Search & Replace (Surgical)
- [x] **"Lesson" → "ReferenceEntry"**: Updated all type definitions in `types.ts`, variable names, component props, and data files.
- [x] **"LessonLibrary" → "ReferenceLibrary"**: Updated all component references and imports.
- [x] **"LessonViewer" → "ReferenceViewer"**: Updated all component references and imports.
- [x] **"curriculum" → "reference"**: Updated route paths in `App.tsx`, UI text, and internal naming.

## 3. Data Layer Consolidation
- [x] Updated `data/index.ts`: Changed import paths from `./lessons/` to `./entries/`. Exported array named `entries` typed as `ReferenceEntry[]`.

## 4. Feature Cleanup
- [x] **Admin Dashboard**: Removed all "Curriculum" or "Lesson" terminology.
- [x] **Diagnostics**: Updated `TestRunner.tsx` to use new naming and routes.
- [x] **AI Assistant**: `ReferenceAssistant.tsx` was part of the plan but is not present in the current codebase — the Gemini integration was not shipped. See TGR-131 for re-implementation tracking.

## 5. Dead Code & Type Safety
- [x] Removed orphaned files and unused components.
- [x] All TypeScript errors resolved (`npm run lint` passes).
- [x] `npm run build` succeeds.
- [ ] **`migrate-entries.ts`** in root: leftover migration script, not yet deleted. See TGR-132.

## 6. Verification Checklist
- [x] Library page loads and filters work.
- [x] Reference Viewer loads data correctly for all entries.
- [x] Routing from Library to Viewer is functional.
- [x] Admin Dashboard authentication and entry listing work.
- [x] Diagnostics suite passes all tests.
