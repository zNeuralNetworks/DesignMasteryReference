import { ReferenceEntry } from '../../types';

export const gestalt_common_region: ReferenceEntry = {
  id: "gestalt-common-region",
  title: "Gestalt: Law of Common Region",
  domain: "visual-hierarchy",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "visual-design"],
  confidenceScore: 94,
  slug: "gestalt-common-region",
  complexity: "beginner",
  description: "Elements sharing an area with a clearly defined boundary are perceived as a group.",
  quickTake: "The Law of Common Region states that elements enclosed within a boundary (like a border or background) are perceived as a single group, even if they are far apart.",
  whyItMatters: "Common Region is one of the strongest grouping principles. It allows you to create clear 'sections' or 'cards' in a UI, helping users understand the relationship between diverse pieces of information at a glance.",
  mechanism: [
    "Enclose related elements within a visible boundary (e.g., a card border)",
    "Use a distinct background color to separate a group from the rest of the page",
    "Apply consistent padding and margins within the region to reinforce the grouping",
    "Use 'Common Region' to override other grouping principles like Proximity if necessary"
  ],
  whenToUse: [
    "Creating 'Cards' for products, articles, or user profiles",
    "Defining 'Sections' in a long-form page or dashboard",
    "Grouping related controls in a toolbar or settings panel"
  ],
  whenNotToUse: [
    "When the UI is already too cluttered with borders and boxes ('Box-itis')",
    "When Proximity alone is sufficient to convey the relationship",
    "In extremely minimalist designs where boundaries are intentionally avoided"
  ],
  tradeoffs: [
    { pro: "Creates very strong, unambiguous grouping", con: "Can lead to 'Visual Noise' if over-used (too many boxes)" },
    { pro: "Allows for clear separation of diverse content types", con: "Requires careful management of spacing and alignment" }
  ],
  failureModes: [
    "The 'Box-itis' Problem: Wrapping every single element in its own box, breaking the visual flow",
    "Inconsistent Boundaries: Using different border styles or background colors for similar groups",
    "Cramped Content: Not providing enough padding inside the common region"
  ],
  alternatives: [
    { entryId: "gestalt-proximity", condition: "Use Proximity for more subtle, less 'boxed-in' grouping" },
    { entryId: "bento-grids", condition: "Use Bento Grids for a more structured, modular application of common regions" }
  ],
  a11ySpecs: [
    "Ensure the boundary (border or background) has sufficient contrast against the page",
    "Use semantic HTML (e.g., <section>, <article>) to define the regions for screen readers",
    "Maintain a logical reading order within the region"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use Tailwind's \`rounded-*\`, \`border\`, and \`bg-*\` utilities to create regions",
    "Apply a subtle shadow (\`shadow-sm\`) to further define the region's depth",
    "Use consistent 'Gaps' between regions to maintain a clean layout"
  ],
  checklist: [
    "Used boundaries to group related controls and content only",
    "Checked that nested regions do not create competing group logic",
    "Verified region labels and landmarks communicate the same grouping"
  ],
  relatedEntryIds: ['cognitive-chunking', 'typography-scale', 'gestalt-proximity'],
  interactiveComponent: "GestaltCommonRegionDemo",
  tags: ["Psychology","Layout","UI","grouping","visual separation","card layout","fix layout","items feel unrelated","no visual structure"],
  contentStatus: 'hardened',
  content: `

# Common Region

While Proximity is powerful, **Common Region** is explicit. By adding a border or background color around a set of elements, you forcefully group them.

### UI Application
*   **Cards**: Placing an image, title, and button inside a white box on a gray background creates a "Card".
*   **Modals**: The window creates a clear region separating the dialog from the backdrop.

> Common Region overrides Proximity. Even if elements are far apart, if they share a background color, they are grouped.
    
`,
  intentTags: ["fix-alignment", "reduce-cognitive-load"],
};
