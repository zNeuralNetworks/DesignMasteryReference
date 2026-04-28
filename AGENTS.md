# Agent Instructions: DesignMastery Reference

This file provides specific context and rules for AI coding assistants (Gemini, Claude, Codex, etc.) working on this repository.

---

## 1. The "Spec Sheet" Mandate
Every new reference entry added to `/data/entries` **MUST** follow the high-density "Spec Sheet" model. Do not use generic descriptions.
*   **Verdict:** Must be one of `recommended`, `conditional`, `experimental`, or `anti-pattern`.
*   **Judgment First:** Prioritize `failureModes`, `tradeoffs`, and `alternatives` over basic definitions.
*   **Technical Specs:** Always include `perfImpact` and `a11ySpecs`.

## 2. Data Model Integrity
*   The source of truth for all data structures is `/types.ts`.
*   If you modify the `ReferenceEntry` interface, you **MUST** update the `ReferenceLibrary` and `ReferenceViewer` components to reflect the changes.
*   All entries must be registered in `/data/index.ts`.

## 3. Component Architecture
*   **Feature Isolation:** Keep UI components in `/features/[feature-name]`.
*   **Demos:** Interactive demos should be placed in `/features/demos/InteractiveDemos.tsx` and exported.
*   **Visuals:** Static visual representations for cards should be added to `/features/demos/StaticVisuals.tsx`.

## 4. AI Assistant Persona
*   The system prompt for the in-app Reference Assistant is located in `/services/prompts.ts`.
*   When modifying the assistant's behavior, maintain the "Senior Design Systems Architect" persona.

## 5. Development Workflow
*   **Linting:** Always run `npm run lint` (or `tsc --noEmit`) after modifying entries to ensure type safety.
*   **Migration:** The `migrate-entries.ts` script was used for the initial schema upgrade. New entries should be created manually following the updated schema.

## 6. Project-Specific Rules
*   **Icons:** Use `lucide-react` exclusively.
*   **Styling:** Use Tailwind CSS utility classes. Avoid custom CSS files.
*   **Animation:** Use `framer-motion` for all transitions and interactive states.
*   **Images:** Use `picsum.photos` with descriptive seeds for placeholders. Always include `referrerPolicy="no-referrer"`.

## 7. Linear Workflow

All work for this repo is tracked in **Linear → Synapse Drift team → DesignMasteryReference project**.

**Project:** https://linear.app/babia/project/designmasteryreference-4c48b6472fe8
**Runbook:** https://linear.app/babia/document/runbook-designmasteryreference-ebe635f1deba

### Step-by-step workflow

1. **Before starting any non-trivial task:** check the open issues in the DesignMasteryReference project and identify the active NEXT issue. Current NEXT: **TGR-90** — Deploy to Cloud Run.
2. **Reference the issue** in every commit message and PR description: e.g. `fix: harden relatedEntryIds validation (TGR-92)`.
3. **When the task is complete:** mark the Linear issue as Done.
4. **For new work** not yet tracked: create a Linear issue under the DesignMasteryReference project before implementing. Assign the appropriate labels:
   - `infra`, `deployment` — Cloud Run, build pipeline, CI
   - `content` — entry quality, schema, validation
   - `frontend`, `ux` — UI features, interaction model
   - `system` — tooling, scripts, project hygiene

### Open issues (as of 2026-04-28)

| ID | Title | Status |
|---|---|---|
| TGR-90 | Deploy to Cloud Run | Todo — **NEXT** |
| TGR-91 | Audit and harden entry content quality | Backlog |
| TGR-93 | Comparison page: support 3+ entries | Backlog |
| TGR-124 | PWA support — offline reading | Backlog |
| TGR-125 | Live code playground | Backlog |
| TGR-126 | Progress tracking — per-entry review state | Backlog |
