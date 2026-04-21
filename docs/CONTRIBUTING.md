# Contributing to DesignMastery Reference

Thank you for helping build the world's most dense design reference library. Follow these guidelines to maintain the professional quality of the system.

---

## 1. Adding a New Reference Entry

### 1.1 Create the File
Create a new file in `src/data/entries/[slug].ts`. Use the following template:

```typescript
import { ReferenceEntry } from '../../types';

export const my_new_entry: ReferenceEntry = {
  id: "my-new-entry",
  title: "Pattern: My New Entry",
  domain: "interaction", // foundations | interaction | psychology | systems | accessibility | style
  format: "pattern",    // principle | pattern | system | style | anti-pattern | case-study
  verdict: "recommended",
  useContext: ["saas"],
  confidenceScore: 90,
  slug: "my-new-entry",
  complexity: "intermediate",
  description: "Brief professional description.",
  quickTake: "The 1-sentence bottom line.",
  whyItMatters: "Architectural justification.",
  mechanism: [
    "Step 1",
    "Step 2"
  ],
  whenToUse: ["Condition A"],
  whenNotToUse: ["Condition B"],
  tradeoffs: [
    { pro: "Benefit", con: "Cost" }
  ],
  failureModes: ["Risk A"],
  alternatives: [
    { entryId: "other-entry", condition: "When X is true" }
  ],
  a11ySpecs: ["Requirement A"],
  perfImpact: "low",
  implementationNotes: ["Technical tip"],
  tags: ["Tag1", "Tag2"],
  content: `Markdown content here...`,
};
```

### 1.2 Register the Entry
Import and add your entry to the `entries` array in `src/data/index.ts`.

---

## 2. Creating Interactive Demos

### 2.1 Add the Component
Add your demo component to `src/features/demos/InteractiveDemos.tsx`. 
*   Name it `[EntryID]Demo` (e.g., `OptimisticUIDemo`).
*   Ensure it is responsive and handles container resizing.

### 2.2 Link the Demo
Update the `interactiveComponent` field in your entry file with the name of your component.

---

## 3. Quality Standards
*   **Autoritative Tone:** Write for senior professionals. Avoid fluff.
*   **Type Safety:** Ensure your entry passes `npm run lint`.
*   **Visual Consistency:** Use the `StaticVisual` component for library card representations.

---

## 4. Pull Request Process
1.  Verify your entry renders correctly in the `ReferenceViewer`.
2.  Check the `ComparisonPage` if you added alternatives.
3.  Ensure the AI Assistant can answer questions about your new content.
