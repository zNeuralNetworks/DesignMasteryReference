import { ReferenceEntry } from '../../types';

export const gestalt_proximity: ReferenceEntry = {
  id: "gestalt-proximity",
  title: "Gestalt: Law of Proximity",
  domain: "visual-hierarchy",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile"],
  confidenceScore: 98,
  slug: "gestalt-proximity",
  complexity: "intermediate",
  description: "Elements that are close together are perceived as a group.",
  quickTake: "Proximity is the most powerful grouping mechanism in visual design, overriding color, shape, and even borders.",
  whyItMatters: "Correct proximity creates an intuitive information hierarchy. Incorrect proximity forces the brain to work harder to decode which label belongs to which input.",
  mechanism: [
    "Identify related elements (e.g., a label and its input)",
    "Reduce the whitespace between related elements",
    "Increase the whitespace between unrelated groups (The 2x Rule)",
    "Remove unnecessary borders or lines that clutter the UI"
  ],
  whenToUse: [
    "Form design (Label-Input pairing)",
    "Card layouts (Title-Description-Action grouping)",
    "Navigation menus (Grouping related links)"
  ],
  whenNotToUse: [
    "When extreme information density is required (e.g., data grids)",
    "When a 'Brutalist' or chaotic aesthetic is intentionally desired"
  ],
  tradeoffs: [
    { pro: "Cleaner UI with fewer visual separators", con: "Requires more vertical/horizontal space (whitespace)" },
    { pro: "Instant cognitive grouping", con: "Can lead to 'loose' layouts if not balanced with other Gestalt laws" }
  ],
  failureModes: [
    "Ambiguous Pairing: A label placed exactly halfway between two inputs",
    "Floating Action: A button placed too far from the content it affects",
    "Grid Collapse: Rows in a table being so close that they merge into a single block"
  ],
  alternatives: [
    { entryId: "gestalt-common-region", condition: "Use borders/backgrounds when whitespace alone isn't enough to separate groups" },
    { entryId: "cognitive-chunking", condition: "Use to manage the number of groups created by proximity" }
  ],
  a11ySpecs: [
    "Ensure the visual grouping matches the DOM order for screen readers",
    "Use semantic grouping tags (e.g., <fieldset> and <legend>) for related form controls",
    "Maintain sufficient contrast between grouped elements and the background"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use a consistent spacing scale (e.g., 4px, 8px, 16px, 32px)",
    "The '2x Rule': The space between groups should be at least twice the space within a group",
    "Test your layout by squinting—if the groups are still distinct, your proximity is correct"
  ],
  checklist: [
    "Used spacing to show relationship before adding visual chrome",
    "Checked that unrelated controls are not visually grouped by accident",
    "Verified responsive wrapping preserves proximity-based relationships"
  ],
  relatedEntryIds: ['bento-grids', 'typography-scale', 'gestalt-common-region'],
  interactiveComponent: "GestaltProximityDemo",
  tags: ["Psychology","Layout","Visual Design","spacing","whitespace","cluttered","grouping","fix spacing","elements feel disconnected","visual noise"],
  content: `

# The Law of Proximity

The human brain seeks patterns. The strongest grouping mechanism is **Proximity**: things that are close to each other are related.

### UI Application
*   **Whitespace**: You don't need borders to separate content. Simply increasing margin/padding between two groups is enough to tell the user they are separate.
*   **Form Labels**: A label should be closer to its input field than to the input field above it.

> If you have to use a line to separate content, your whitespace is likely incorrect.
    
`,
  intentTags: ["fix-alignment", "reduce-cognitive-load"],
};
