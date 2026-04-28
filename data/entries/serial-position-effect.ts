import { ReferenceEntry } from '../../types';

export const serial_position_effect: ReferenceEntry = {
  id: "serial-position-effect",
  title: "Serial Position Effect",
  domain: "visual-hierarchy",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "content", "mobile"],
  confidenceScore: 94,
  slug: "serial-position-effect",
  complexity: "intermediate",
  description: "Why users best remember the first and last items in a series (Primacy & Recency effects).",
  quickTake: "The Serial Position Effect dictates that users have a 'U-shaped' memory curve, recalling the beginning and end of a list much better than the middle.",
  whyItMatters: "If you place critical information or actions in the middle of a long list or navigation bar, users are statistically likely to forget or overlook them.",
  mechanism: [
    "Primacy Effect: The first items are encoded into long-term memory more effectively",
    "Recency Effect: The last items are still present in short-term (working) memory",
    "The 'Middle' Slump: Items in the center receive the least cognitive attention"
  ],
  whenToUse: [
    "Ordering items in a navigation bar (Home first, Profile/Settings last)",
    "Presenting pricing tiers (Most popular or cheapest at the ends)",
    "Designing onboarding slides or educational content"
  ],
  whenNotToUse: [
    "Alphabetical lists where the order is expected and functional",
    "Search results where relevance must dictate order regardless of position",
    "Data tables where users scan for specific values rather than memorizing the set"
  ],
  tradeoffs: [
    { pro: "Ensures critical actions are remembered", con: "Can lead to 'burying' important but secondary information in the middle" },
    { pro: "Optimizes for the way human memory actually works", con: "May conflict with other ordering logic (e.g., chronological)" }
  ],
  failureModes: [
    "The 'Hidden Middle': Placing a high-value CTA in the 4th position of a 7-item list",
    "Information Overload: Long lists where the 'middle' becomes a blur of forgotten data",
    "Recency Bias: Users making decisions based only on the last thing they saw"
  ],
  alternatives: [
    { entryId: "cognitive-chunking", condition: "Use to break long lists into smaller units to create more 'ends'" },
    { entryId: "typography-scale", condition: "Use to highlight middle items that would otherwise be forgotten" }
  ],
  a11ySpecs: [
    "Ensure the visual order matches the tab order for keyboard users",
    "Use ARIA landmarks to help users navigate to the 'ends' of a page quickly",
    "Provide 'Skip to Content' links to bypass long lists"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Place the most important action at the far right (or far left) of a toolbar",
    "In long forms, put the most critical inputs at the very beginning",
    "Use 'Summary' sections at the end of long pages to leverage the Recency Effect"
  ],
  checklist: [
    "Placed high-value actions at the beginning or end of scanned sequences",
    "Protected middle-position items with grouping or emphasis when needed",
    "Verified keyboard and screen-reader order match intended priority"
  ],
  relatedEntryIds: ['hicks-law', 'fitts-law', 'gestalt-proximity'],
  interactiveComponent: "SerialPositionDemo",
  tags: ["Psychology","Navigation","Memory"],
  contentStatus: 'draft',
  content: `

# Primacy & Recency

The human memory is flawed. When presented with a list of items, we are statistically most likely to remember:
1.  **The First Item (Primacy Effect)**: Because we had time to encode it into long-term memory.
2.  **The Last Item (Recency Effect)**: Because it is still sitting in short-term memory.
    
`,
  intentTags: ["increase-emphasis", "reduce-cognitive-load"],
};
