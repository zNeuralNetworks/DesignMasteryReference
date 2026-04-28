import { ReferenceEntry } from '../../types';

export const typography_scale: ReferenceEntry = {
  id: "typography-scale",
  title: "Visual Hierarchy & Scale",
  domain: "typography",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "content", "marketing"],
  confidenceScore: 98,
  slug: "typography-scale",
  complexity: "intermediate",
  description: "Using modular scales and weight contrast to guide the reader's eye.",
  quickTake: "A typographic scale is a mathematical ratio used to determine font sizes, ensuring a harmonious and predictable visual hierarchy.",
  whyItMatters: "Without a scale, font sizes feel arbitrary and 'messy'. A consistent scale creates a professional, structured feel that improves readability and scanning speed.",
  mechanism: [
    "Choose a base font size (usually 16px)",
    "Select a modular scale ratio (e.g., 1.25 for Major Third, 1.414 for Augmented Fourth)",
    "Multiply the base size by the ratio to generate heading levels (H1, H2, H3)",
    "Use weight (Bold, Semibold) and color (Primary, Secondary) to further differentiate levels"
  ],
  whenToUse: [
    "Setting up a new design system or brand identity",
    "Content-heavy pages (blogs, documentation)",
    "Marketing landing pages where hierarchy is critical"
  ],
  whenNotToUse: [
    "Experimental or 'Brutalist' designs where intentional disharmony is the goal",
    "Extremely simple UIs with only one or two text sizes"
  ],
  tradeoffs: [
    { pro: "Guaranteed visual harmony and consistency", con: "Can feel restrictive if a specific 'in-between' size is needed" },
    { pro: "Easier to maintain and scale across platforms", con: "Requires discipline to stick to the defined values" }
  ],
  failureModes: [
    "The 'Flat' UI: Not enough contrast between H1 and H2, making them indistinguishable",
    "Size Bloat: Having 20+ different font sizes in a single app",
    "Poor Line Height: Not adjusting leading (line-height) as font size increases"
  ],
  alternatives: [
    { entryId: "variable-fonts", condition: "Use to fine-tune weight and width contrast" },
    { entryId: "design-tokens", condition: "Use to store and distribute the scale values" }
  ],
  a11ySpecs: [
    "Ensure all font sizes meet minimum readability standards (usually 12px+)",
    "Maintain a contrast ratio of 4.5:1 for body text",
    "Use relative units (rem) to allow for user-controlled browser scaling"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use tools like 'Typescale.com' to visualize your scale before implementation",
    "Map your scale to Tailwind's \`text-*\` utilities for easy developer access",
    "Set line-height to 1.5 for body text and 1.2 for large headings"
  ],
  checklist: [
    "Mapped scale steps to semantic roles, not arbitrary visual sizes",
    "Checked line length, line height, and wrapping at mobile widths",
    "Verified hierarchy remains clear without relying on color alone"
  ],
  relatedEntryIds: ['color-rule', 'gestalt-proximity', 'bento-grids'],
  interactiveComponent: "TypographyDemo",
  tags: ["Fonts","Design","Readability","readability","hierarchy","font scale","text legibility","hard to read","messy text","inconsistent sizes","fix typography"],
  contentStatus: 'draft',
  content: `

# Typographic Hierarchy

Hierarchy tells the reader what is important. It is established through size, weight, and color.

### Modular Scale
Instead of picking random sizes (13px, 17px, 22px), use a ratio (e.g., 1.25 - Major Third).
    
`,
  intentTags: ["improve-readability", "increase-emphasis", "improve-aesthetics"],
};
