# DesignMastery Reference: Product Design Document (PDD) [SUPERSEDED]

> **STATUS: SUPERSEDED** — This is the original v1.0 PDD from 2026-04-14. It is preserved for historical reference.
> The current authoritative PDD is `docs/PDD.md` (v1.3.0, updated 2026-04-28).

**Version**: Reference System v1.0  
**Internal Name**: DesignMasteryReference

---

## 1. Overview
DesignMastery is a premium reference library for UI/UX, frontend systems, and product design judgment. It is **not** a course platform or interactive learning app. It is designed to help professionals:
*   Quickly understand design patterns and principles.
*   Evaluate tradeoffs and boundary conditions.
*   Access implementation guidance (Tailwind/React).
*   Compare related concepts through a structured knowledge graph.

The product behaves like a **field manual** or a **structured handbook** for high-signal knowledge retrieval.

---

## 2. Problem Statement
The current application resembles a lesson-based course platform, which signals the wrong product metaphor. Professionals do not need another course; they need fast answers, clear explanations, and actionable implementation guidance during their real-world workflow.

---

## 3. Core Product Principles

### 3.1 Speed of Retrieval
The primary success metric is how quickly a user can find the answer to: *What is this? When should I use it? What are the tradeoffs? How do I implement it?*

### 3.2 Structured Knowledge > Narrative Content
Replace long-form markdown-first content with structured, scannable sections: Summary, Mechanism, Tradeoffs, Usage Conditions, and Implementation Notes.

### 3.3 High Information Density
The UI must reduce empty space, increase meaningful signal, and surface metadata early to support scanning over reading.

### 3.4 Authority Through Clarity
The product should feel calm, precise, and editorial. Authority comes from better hierarchy and taxonomy, not trendy decoration.

---

## 4. Information Architecture & Taxonomy

### 4.1 Lookup Domains
1.  **Foundations**: Typography, Color, Spacing, Visual Hierarchy, Layout, Gestalt.
2.  **Interaction Patterns**: Navigation, Empty/Loading States, Toasts, Focus States, Onboarding.
3.  **Psychology**: Hick’s Law, Fitts’s Law, Serial Position Effect, Cognitive Chunking.
4.  **Systems & Engineering**: Design Tokens, Atomic Design, Performance (CLS), Optimistic UI.
5.  **Accessibility**: Focus Management, Color Blindness, Screen-reader implications.
6.  **Visual Styles & References**: Bento Grids, Glassmorphism, Swiss Polarity, Case Studies.

### 4.2 Classification Model
Each entry is defined by:
*   **Domain**: (e.g., Foundations, Interaction)
*   **Format**: Principle, Pattern, System, Style, Anti-Pattern, Case Study.
*   **Complexity**: Basic, Intermediate, Advanced.
*   **Tags & Related Entries**: For conceptual adjacency.

---

## 5. Reference Data Model

```typescript
type ReferenceEntry = {
  id: string;
  slug: string;
  title: string;
  domain: 'foundations' | 'interaction' | 'psychology' | 'systems' | 'accessibility' | 'style';
  format: 'principle' | 'pattern' | 'system' | 'style' | 'anti-pattern' | 'case-study';
  complexity: 'basic' | 'intermediate' | 'advanced';
  summary: string;
  quickTake: string;
  whyItMatters: string;
  mechanism?: string[];
  whenToUse?: string[];
  whenNotToUse?: string[];
  tradeoffs?: string[];
  commonPitfalls?: string[];
  implementationNotes?: string[];
  checklist?: string[];
  codeSnippet?: {
    language: 'css' | 'tailwind' | 'tsx' | 'js';
    code: string;
  };
  relatedEntryIds?: string[];
  tags: string[];
  visualComponent?: string;
};
```

---

## 6. UI & Copy Strategy

### 6.1 Library (Home Page)
*   **Framing**: "Reference Library for UI Systems and Product Design."
*   **Interface**: Search-first, real-time filtering by Domain and Format.
*   **Density**: Tighter vertical rhythm, smaller hero, metadata-rich cards.

### 6.2 Reference Viewer (Topic Page)
*   **Layout**: Structured "Reference Sheet" layout.
*   **Visual Block**: Reframed as "Live Spec" or "Pattern Preview."
*   **Assistant**: Repurposed into "Related Topics" or "Implementation Lookup."

### 6.3 Language Pivot
*   **Remove**: Master, Learning, Lesson, Start Lesson, Learning Assistant.
*   **Adopt**: Reference, Entry, View Reference, Related Concepts, Quick Take, Implementation Notes, Tradeoffs.

---

## 7. Execution Plan
- [x] **Phase 1: Repositioning**: Update product copy and rename components (Lesson → ReferenceEntry).
- [x] **Phase 2: Data Refactor**: Update `types.ts` and migrate lesson data into structured fields.
- [x] **Phase 3: Library Redesign**: Implement search-first UI and high-density card anatomy.
- [x] **Phase 4: Reference Viewer Redesign**: Restructure layout into a true reference sheet.
- [x] **Phase 5: Content Hardening**: Rewrite entries to remove absolute language and add precise tradeoffs/pitfalls.

---

## 8. Implementation Roadmap (AI Studio Prompts)

This section provides detailed, step-by-step prompts for Google AI Studio to execute the transition to **DesignMasteryReference**.

### Phase 1: Repositioning & Taxonomy Refactor [COMPLETE]
**Goal**: Update the application's identity, metadata, and core types to align with the reference model.

> **Prompt for AI Studio**:
> "1. [x] Update `metadata.json`: Change name to 'DesignMastery Reference' and description to 'A premium reference library for UI/UX systems, interaction patterns, and product design judgment.'
> 2. [x] Update `types.ts`: 
>    - Replace `Category` with `Domain` ('foundations' | 'interaction' | 'psychology' | 'systems' | 'accessibility' | 'style') and `Format` ('principle' | 'pattern' | 'system' | 'style' | 'anti-pattern' | 'case-study').
>    - Rename `Lesson` interface to `ReferenceEntry` and add the following fields: `slug: string`, `domain: Domain`, `format: Format`, `complexity: 'basic' | 'intermediate' | 'advanced'`, `quickTake: string`, `whyItMatters: string`, `mechanism?: string[]`, `whenToUse?: string[]`, `whenNotToUse?: string[]`, `tradeoffs?: string[]`, `commonPitfalls?: string[]`, `implementationNotes?: string[]`, `checklist?: string[]`, `codeSnippet?: { language: string, code: string }`, `relatedEntryIds?: string[]`.
> 3. [x] Update `App.tsx`: 
>    - Change the route path `/lesson/:id` to `/reference/:id`.
>    - Update the `NotFound` component and any 'Back to Curriculum' links to say 'Back to Reference Library'.
> 4. [x] Rename directories: Move `features/curriculum` to `features/reference` and rename files within (e.g., `LessonLibrary.tsx` to `ReferenceLibrary.tsx`, `LessonViewer.tsx` to `ReferenceViewer.tsx`). Update all imports accordingly."

### Phase 2: Data Migration [COMPLETE]
**Goal**: Migrate all 54 existing lesson files to the new `ReferenceEntry` schema using an automated script.

> **Prompt for AI Studio**:
> "1. [x] Create a migration script `migrate-to-reference.ts` that:
>    - Reads all files in `data/lessons/`.
>    - Maps the old `category` to the new `domain` and `format` (e.g., 'UX Principle' -> domain: 'interaction', format: 'principle').
>    - Transforms the existing `Lesson` objects into `ReferenceEntry` objects, populating `quickTake` and `whyItMatters` with placeholders or extracted snippets from the content.
>    - Ensures `content` remains as the full markdown body.
> 2. [x] Run the script using `npx tsx migrate-to-reference.ts`.
> 3. [x] Update `data/index.ts` to import and export the new `ReferenceEntry` type and updated lesson files.
> 4. [x] Delete the migration script after successful execution."

### Phase 3: Library UI Overhaul (Search-First) [COMPLETE]
**Goal**: Redesign the main browse page for high-density lookup and fast retrieval.

> **Prompt for AI Studio**:
> "1. [x] Redesign `features/reference/ReferenceLibrary.tsx`:
>    - Shrink the Hero section to be more compact and utility-focused.
>    - Implement a prominent, real-time Search bar.
>    - Add multi-select filters for `Domain`, `Format`, and `Complexity`.
>    - Replace the large card grid with a high-density list or tight grid view.
>    - Each card should surface metadata (Domain, Format) and a `quickTake` snippet.
>    - Change CTA from 'Start Lesson' to 'View Reference'.
> 2. [x] Ensure the layout is responsive and optimized for scanning."

### Phase 4: Reference Viewer Redesign [COMPLETE]
**Goal**: Transform the lesson page into a structured "Reference Sheet."

> **Prompt for AI Studio**:
> "1. [x] Redesign `features/reference/ReferenceViewer.tsx`:
>    - Move the `interactiveComponent` (now 'Live Spec') to a side panel or a secondary section so it doesn't dominate the fold.
>    - Create a structured header with the `quickTake` and `whyItMatters` sections prominently displayed.
>    - Implement a 'Reference Specs' section that renders `mechanism`, `tradeoffs`, `whenToUse`, and `implementationNotes` as clean, bulleted lists.
>    - Add a 'Code Snippets' section if `codeSnippet` is present.
>    - Add a 'Related References' section at the bottom using `relatedEntryIds`."

### Phase 5: AI & Service Alignment [COMPLETE]
**Goal**: Repurpose the AI assistant and services for reference lookup.

> **Prompt for AI Studio**:
> "1. [x] Update `services/prompts.ts`: Change `DESIGN_TUTOR_SYSTEM_INSTRUCTION` to `REFERENCE_ASSISTANT_SYSTEM_INSTRUCTION`. Reframing the AI as a 'Reference Assistant' that provides fast lookups, comparisons, and implementation guidance.
> 2. [x] Update `services/geminiService.ts` to use the new instruction.
> 3. [x] Rename `features/tutor/GeminiTutor.tsx` to `features/reference/ReferenceAssistant.tsx`.
>    - Update UI labels (e.g., 'DesignMastery AI' -> 'Reference Assistant').
>    - Repurpose the 'Start Chatting' button to 'Ask about this pattern'."

---

## 9. Changelog

### v1.0.0 (2026-04-14)
- **Product Pivot**: Rebranded "DesignMastery" to "DesignMastery Reference".
- **Taxonomy**: Implemented `Domain` and `Format` classification system.
- **Data Migration**: Automated migration of 54 entries to the new `ReferenceEntry` schema.
- **Library UI**: New search-first library with high-density grid/list views and advanced filtering.
- **Viewer UI**: Redesigned reference sheets with structured sections for mechanisms, tradeoffs, and technical notes.
- **AI Assistant**: Repurposed "Design Tutor" as "Reference Assistant" with a senior architect persona.
- **Infrastructure**: Cleaned up file structure, updated routing, and verified system diagnostics.

---
*This document serves as the authoritative blueprint for DesignMastery Reference.*


