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
  contentStatus: 'hardened',
  content: `

# The Law of Proximity

The human brain is a pattern-matching machine. Of all the Gestalt principles, Proximity is the strongest grouping cue — stronger than shared color, similar shape, or explicit borders.

**Rule**: Things that are physically close to each other are perceived as belonging to the same group.

### Why this matters in UI

Every form, card, and navigation section is an exercise in proximity management. When a label sits equidistant between two inputs, the user's brain cannot determine which input it belongs to. When a "Delete" button floats near a "Save" button with no gap, a misclick becomes a product incident.

### The 2× Rule

The space between unrelated groups should be at least twice the space within a related group. This ratio creates a clear visual hierarchy without requiring any borders, backgrounds, or dividers.

    Within a card:    8px between elements
    Between cards:   24px minimum (3× the internal spacing)
    Between sections: 48px or more

### Application patterns

**Form design** — Label directly above its input (4px gap). Inputs in the same group share 8px gaps. Separate form sections with 24–32px.

**Navigation** — Group related nav items with 4–8px gaps. Separate distinct sections (primary nav vs. user menu) with 24px or a visual divider.

**Cards** — Title, body, and action within a card use tight spacing (8–12px). The space between cards signals that the content resets.

### The border test

If you are reaching for a horizontal rule or a dividing border between sections, ask first: could more whitespace do this job instead? Borders add visual noise. Whitespace is free. Most borders in UI designs are compensating for broken proximity.

> Squint at your layout. If you can still identify the distinct groups, your proximity is correct. If it looks like a wall of content, increase the between-group spacing first.
`,
  intentTags: ["fix-alignment", "reduce-cognitive-load"],
};
