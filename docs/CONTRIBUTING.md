# Contributing to DesignMastery Reference

Follow these guidelines to maintain the professional quality of the reference library.

---

## 1. Adding a New Reference Entry

### 1.1 Create the File

Create a new file in `data/entries/[slug].ts`. Use the following template:

```typescript
import { ReferenceEntry } from '../types';

export const my_new_entry: ReferenceEntry = {
  id: "my-new-entry",
  slug: "my-new-entry",
  title: "Pattern: My New Entry",
  domain: "interaction",
  // domains: layout | typography | color | components | interaction |
  //          motion | visual-hierarchy | psychology | responsiveness | data | tokens
  format: "pattern",
  // formats: principle | pattern | system | style | anti-pattern | case-study
  verdict: "recommended",
  // verdicts: recommended | conditional | experimental | anti-pattern
  useContext: ["saas"],
  confidenceScore: 90,
  complexity: "intermediate",
  // complexity: basic | intermediate | advanced
  contentStatus: "draft",
  // contentStatus: draft | hardened | flagship — set to 'draft' when creating
  description: "Brief professional description.",
  quickTake: "The 1-sentence bottom line — metric-driven or failure-specific.",
  whyItMatters: "Architectural justification.",
  content: `Markdown content here...`,
  mechanism: ["Step 1", "Step 2"],
  whenToUse: ["Condition A"],
  whenNotToUse: ["Condition B"],
  tradeoffs: [{ pro: "Benefit", con: "Cost" }],
  failureModes: ["Specific risk — not generic"],
  alternatives: [{ entryId: "other-entry", condition: "When X is true" }],
  a11ySpecs: ["Requirement A"],
  perfImpact: "low",
  // perfImpact: low | medium | high
  implementationNotes: ["Technical tip"],
  checklist: ["Concrete, non-obvious audit item"],
  tags: ["Tag1", "Tag2"],
  intentTags: ["fix-hierarchy", "improve-readability"],
  // intentTags: problem-vocabulary for Fix Guide routing (e.g., "fix-spacing", "improve-contrast")
  relatedEntryIds: [],
  // relatedEntryIds: ids of semantically related entries — validated at build time
};
```

### 1.2 Register the Entry

Import and add your entry to the `entries` array in `data/index.ts`.

### 1.3 Validate

```bash
npm run lint   # runs validate:entries + typecheck
```

All `relatedEntryIds` and `alternatives.entryId` values are cross-validated against the entry registry. Broken references will fail the build.

---

## 2. Creating Interactive Demos

### 2.1 Add the Component

Add your demo component to `features/demos/InteractiveDemos.tsx`.
- Name it `[ConceptId]Demo` (e.g., `OptimisticUIDemo`)
- Ensure it is self-contained, responsive, and handles container resizing
- Prefer `useState` / `useEffect` over external state

### 2.2 Link the Demo

Set the `interactiveComponent` field in your entry file to the component name (e.g., `"OptimisticUIDemo"`).

For static card preview visuals, add a component to `features/demos/StaticVisuals.tsx` and register it in `getCategoryVisual()`.

---

## 3. Quality Standards

- **Authoritative tone:** Write for senior professionals. Avoid fluff and definitions.
- **quickTake:** Must be metric-driven or failure-specific — not an abstract principle statement.
- **failureModes:** Must be concrete and named (e.g., "Ambiguous Pairing") — not generic risks.
- **checklist:** Non-obvious, testable items. Reject placeholder checklists like "Verified accessibility."
- **intentTags:** Add problem-vocabulary tags that match how a developer describes a symptom (not the pattern name).
- **Type safety:** Entry must pass `npm run lint` before committing.
- **Visual consistency:** Use the `StaticVisual` component pattern for library card representations.

---

## 4. Pull Request Process

1. Verify your entry renders correctly in the `ReferenceViewer` (`npm run dev` → navigate to the entry).
2. Check the `ComparisonPage` if you added `alternatives`.
3. Run `npm run lint` — confirm no validation errors or type errors.
4. Reference the relevant Linear issue in your PR description (e.g., `closes TGR-91`).
5. Update `docs/CHANGELOG.md` with a brief entry under the current version.

---

## 5. Linear Workflow

New entries and features are tracked in the **DesignMasteryReference** Linear project.
- Create an issue before starting any non-trivial work
- Reference the issue ID in commits: `feat: add focus-traps entry (TGR-xxx)`
- Mark the issue Done when the PR merges

See `CLAUDE.md` for full Linear routing guidance.
