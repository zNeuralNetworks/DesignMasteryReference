# Codebase Consolidation Plan: DesignMastery Reference

**Goal**: Fully remove the legacy “curriculum/lesson” architecture and consolidate the app into a single reference-first system.

## 1. File System Refactor
- [ ] Rename directory `data/lessons` to `data/entries`.
- [ ] Verify `features/reference/` contains all necessary components (`ReferenceLibrary`, `ReferenceViewer`, `ReferenceAssistant`, `EbookGenerator`).

## 2. Global Search & Replace (Surgical)
- [ ] **"Lesson" → "ReferenceEntry"**:
    - Update all type definitions in `types.ts`.
    - Update all variable names and component props across the codebase.
    - Update all data files in `data/entries/*.ts`.
- [ ] **"LessonLibrary" → "ReferenceLibrary"**:
    - Update all component references and imports.
- [ ] **"LessonViewer" → "ReferenceViewer"**:
    - Update all component references and imports.
- [ ] **"curriculum" → "reference"**:
    - Update route paths in `App.tsx`.
    - Update UI text (e.g., "Back to Curriculum" → "Back to Reference Library").
    - Update internal naming (e.g., `curriculumEntries` → `referenceEntries`).

## 3. Data Layer Consolidation
- [ ] Update `data/index.ts`:
    - Change import paths from `./lessons/` to `./entries/`.
    - Ensure the exported array is named `entries` and typed as `ReferenceEntry[]`.

## 4. Feature Cleanup
- [ ] **Admin Dashboard**:
    - Remove all "Curriculum" or "Lesson" terminology from UI and comments.
    - Ensure it correctly maps to the new `ReferenceEntry` fields.
- [ ] **Diagnostics**:
    - Update `TestRunner.tsx` to use the new naming and routes.
- [ ] **AI Assistant**:
    - Ensure `ReferenceAssistant.tsx` is correctly imported and used.

## 5. Dead Code & Type Safety
- [ ] Remove any orphaned files or unused components.
- [ ] Fix all TypeScript errors (run `npm run lint`).
- [ ] Ensure `npm run build` succeeds.

## 6. Verification Checklist
- [ ] Library page loads and filters work.
- [ ] Reference Viewer loads data correctly for all entries.
- [ ] Routing from Library to Viewer is functional.
- [ ] Admin Dashboard authentication and entry listing work.
- [ ] Diagnostics suite passes all tests.

---
*This plan follows the "Surgical Refactor" guidance to ensure consistency and correctness without redesigning the UI.*
