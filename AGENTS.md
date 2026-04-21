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

---

## 6. Project-Specific Rules
*   **Icons:** Use `lucide-react` exclusively.
*   **Styling:** Use Tailwind CSS utility classes. Avoid custom CSS files.
*   **Animation:** Use `framer-motion` for all transitions and interactive states.
*   **Images:** Use `picsum.photos` with descriptive seeds for placeholders. Always include `referrerPolicy="no-referrer"`.
