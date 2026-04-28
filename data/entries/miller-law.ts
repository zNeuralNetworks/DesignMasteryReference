import { ReferenceEntry } from '../../types';

export const miller_law: ReferenceEntry = {
  id: "miller-law",
  title: "Miller's Law",
  domain: "psychology",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile"],
  confidenceScore: 98,
  slug: "miller-law",
  complexity: "intermediate",
  description: "Working memory holds approximately 7 (±2) items; design must chunk, hide, or sequence beyond this limit.",
  quickTake: "Miller's Law is a foundational cognitive constraint: humans can hold ~7 items in working memory at once. When a UI exceeds this, cognitive load spikes and error rates rise.",
  whyItMatters: "This is the scientific basis for design heuristics like Hick's Law and progressive disclosure. Understanding Miller's Law helps you chunk information logically and avoid cognitive overload.",
  mechanism: [
    "Working memory is temporary storage; items decay quickly (~20 seconds without rehearsal).",
    "Chunking groups items into meaningful units: '1234567890' (10 items) vs. '123-456-7890' (3 items).",
    "Sequence information: Show 5 items, let user complete that section, reveal the next 5.",
    "Hide optional information: Show only critical items; defer advanced options to disclosure triggers."
  ],
  whenToUse: [
    "Designing navigation menus (limit to 5–7 top-level items)",
    "Breaking long forms into multi-step wizards",
    "Chunking search results into logical groups",
    "Designing dashboards with many widgets (group into cards or tabs)"
  ],
  whenNotToUse: [
    "Expert tools where all controls must be visible (but even then, apply chunking via groups)",
    "Data tables where density is required (but use pagination or virtualization to manage cognitive load)"
  ],
  tradeoffs: [
    { pro: "Lower cognitive load; easier decision-making", con: "Requires more design work to structure information" },
    { pro: "Reduced error rates", con: "More clicks/steps to complete a task" }
  ],
  failureModes: [
    "The 'Feature Dump': A dashboard with 20+ metrics all at once; users don't know where to look.",
    "Flat navigation: 12+ top-level menu items with no grouping; users can't remember where 'Settings' lives.",
    "Unchunked lists: Showing a 50-item list flat; users must read/scan all 50 to find their target.",
    "Mixed concerns: Putting form fields, actions, and settings all in the same visual space."
  ],
  alternatives: [
    { entryId: "hicks-law", condition: "Use to reduce decision time by limiting options" },
    { entryId: "cognitive-chunking", condition: "Use to group related items into meaningful units" },
    { entryId: "progressive-disclosure", condition: "Use to hide secondary information and reduce initial load" }
  ],
  a11ySpecs: [
    "Ensure chunking is conveyed semantically (use <fieldset>, <section>, ARIA landmarks).",
    "Announce chunk boundaries to screen readers.",
    "Don't rely on visual spacing alone to convey chunking; use headings and labels."
  ],
  perfImpact: "low",
  implementationNotes: [
    "Audit your UI: Count the number of top-level items/decisions. If > 9, apply chunking.",
    "Use visual grouping (cards, spacing, borders) to reinforce chunks.",
    "Use labels and headings (h2, h3) to announce each chunk.",
    "Test with users: Can they recall where to find a feature after leaving the page? If not, chunking failed."
  ],
  checklist: [
    "Grouped related items into chunks of 5–7 items",
    "Each chunk has a clear label and visual boundary",
    "Users can find items without reading everything"
  ],
  relatedEntryIds: ['hicks-law', 'cognitive-chunking', 'progressive-disclosure', 'serial-position-effect'],
  interactiveComponent: "ChunkingDemo",
  tags: ["Psychology","Cognitive Load","Memory","working memory","7 plus or minus 2","chunking","too much information"],
  contentStatus: 'hardened',
  content: `

# Working Memory Limits

George Miller published "The Magical Number Seven, Plus or Minus Two" in 1956. It remains one of the most cited papers in cognitive psychology.

**The Finding**: Humans can hold approximately 7 items (±2) in working memory at a time. Beyond this, items are forgotten or confused.

## What This Means for Design

1. **Avoid information dump**: Don't show 20 items at once. Show 5–7, let the user process, then reveal more.
2. **Chunk information**: "5551234567" (10 items) is harder to remember than "555-123-4567" (3 items). Structure matters.
3. **Reduce decision paralysis**: Fewer choices = faster decisions = fewer errors.
4. **Use progressive disclosure**: Hide advanced options; reveal on demand.

## Real-World Examples

- **Navigation**: 7 top-level menu items (Good) vs. 15 top-level menu items (Bad).
- **Forms**: 5 fields per step (Good) vs. 20 fields on one page (Bad).
- **Search results**: Group results by category (Good) vs. show 100 flat results (Bad).
- **Dashboards**: 3–5 widgets per section (Good) vs. 15 widgets competing for attention (Bad).
`,
  intentTags: ["reduce-cognitive-load", "improve-readability"],
};
