import { ReferenceEntry } from '../../types';

export const cognitive_chunking: ReferenceEntry = {
  id: "cognitive-chunking",
  title: "Cognitive Chunking",
  domain: "visual-hierarchy",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "content"],
  confidenceScore: 96,
  slug: "cognitive-chunking",
  complexity: "intermediate",
  description: "Breaking complex content into small, digestible steps to prevent cognitive overload.",
  quickTake: "Chunking transforms 'Walls of Text' into manageable units of information, respecting the limits of human working memory (7±2 items).",
  whyItMatters: "When users are overwhelmed, they stop processing information and start scanning or abandoning. Chunking ensures high comprehension and engagement.",
  mechanism: [
    "Identify a large block of related information",
    "Break the information into 3-5 distinct 'chunks'",
    "Use visual separators (whitespace, borders, or cards) to define the chunks",
    "Provide a clear heading or icon for each chunk to aid scanning"
  ],
  whenToUse: [
    "Long onboarding flows or multi-step forms",
    "Complex data dashboards with multiple metrics",
    "Educational content and documentation"
  ],
  whenNotToUse: [
    "Immersive reading experiences (e.g., long-form articles) where flow is key",
    "High-speed data entry where breaking focus between chunks slows down the user",
    "When the 'chunks' are so small they feel fragmented and disjointed"
  ],
  tradeoffs: [
    { pro: "Significantly higher information retention", con: "Increases the overall vertical length of the page" },
    { pro: "Reduces user anxiety and cognitive load", con: "Can feel 'hand-holdy' for expert users who want the full picture" }
  ],
  failureModes: [
    "The 'Fragmented Flow': Breaking a single logical step into too many tiny pieces",
    "Inconsistent Chunking: Using different visual styles for related chunks",
    "Missing Context: Chunks that don't make sense without seeing the previous one"
  ],
  alternatives: [
    { entryId: "progressive-disclosure", condition: "Use to hide chunks entirely until they are needed" },
    { entryId: "bento-grids", condition: "Use to organize chunks into a high-density visual layout" }
  ],
  a11ySpecs: [
    "Use semantic heading levels (H2, H3) to define chunks for screen readers",
    "Ensure each chunk is a reachable landmark if it contains interactive elements",
    "Maintain a logical reading order across chunks"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Aim for the 'Rule of Three': Three chunks is the sweet spot for memory",
    "Use 'Steppers' for sequential chunking (e.g., Step 1 of 4)",
    "Leverage whitespace (at least 32px-48px) to separate chunks without adding visual noise"
  ],
  checklist: [
    "Grouped information around user decisions, not internal data structures",
    "Limited each chunk to a scannable number of concepts or actions",
    "Used headings and spacing to make chunk boundaries explicit"
  ],
  relatedEntryIds: ['gestalt-proximity', 'gestalt-common-region', 'serial-position-effect'],
  interactiveComponent: "ChunkingDemo",
  tags: ["EdTech","Content Design","UX"],
  content: `

# Breaking Down Walls of Text

A "Wall of Text" is the enemy of learning. **Cognitive Chunking** is the practice of breaking information into small, meaningful units.

### UI Pattern: The Stepper Card
Instead of a long scrollable article, present concepts one card at a time.

1.  **Focus**: The user focuses on one concept.
2.  **Accomplishment**: Clicking "Next" provides a micro-sense of progress.
3.  **Retention**: Smaller chunks are easier to commit to working memory.
    
`,
  intentTags: ["reduce-cognitive-load", "improve-readability"],
};
