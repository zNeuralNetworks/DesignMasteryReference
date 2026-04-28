import { ReferenceEntry } from '../../types';

export const type_hierarchy: ReferenceEntry = {
  id: "type-hierarchy",
  title: "Typographic Hierarchy",
  domain: "typography",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "content", "marketing", "dashboard", "portfolio"],
  confidenceScore: 94,
  slug: "type-hierarchy",
  complexity: "beginner",
  description: "Using size, weight, and color contrast to create a clear reading order that guides users through content.",
  quickTake: "Hierarchy is about contrast, not complexity. Three levels (display, body, caption) handle 90% of interfaces. The most common failure is using too many weights and sizes — when everything is emphasized, nothing is.",
  whyItMatters: "Without hierarchy, users scan randomly and miss critical information. With it, the eye moves predictably from most to least important — reducing cognitive load and increasing completion rates for key tasks.",
  mechanism: [
    "Define three levels: Display (headlines, key numbers), Body (main readable text), Supporting (labels, captions, metadata)",
    "Use weight as the primary contrast lever — black/800 for display, regular/400 for body, medium/500 for supporting",
    "Use size as a secondary lever — display 1.5–4× body size, supporting 0.75–0.875× body size",
    "Use color sparingly for the third level — fg for display/body, fg-muted for supporting",
  ],
  whenToUse: [
    "Any interface with more than two text elements",
    "Content pages, dashboards, cards, and forms",
    "Wherever users need to scan before reading",
  ],
  whenNotToUse: [
    "Purely decorative text treatments where hierarchy is intentionally absent",
  ],
  tradeoffs: [
    { pro: "Clear scan path reduces time-to-task for users", con: "Overly rigid hierarchy can make interfaces feel cold or institutional" },
    { pro: "Fewer type styles = faster design decisions and more consistent output", con: "Some content genuinely needs 4+ levels (long-form docs, legal) — forcing three becomes awkward" },
  ],
  failureModes: [
    "Everything bold: using font-weight: 600 for body text means there's no room for display text to stand out",
    "Size-only hierarchy: increasing size without weight change creates weak contrast between levels",
    "Too many levels: 5+ type sizes with subtle differences that users can't distinguish create visual noise",
    "Inconsistent application: H2 sometimes looks like body text when styles are applied ad hoc",
  ],
  alternatives: [
    { entryId: "typography-scale", condition: "Use a modular scale to generate mathematically consistent size steps" },
    { entryId: "visual-weight", condition: "When text hierarchy needs to work alongside non-text elements" },
  ],
  a11ySpecs: [
    "Heading elements (h1–h6) must reflect visual hierarchy — don't skip levels for styling purposes",
    "Color must not be the sole differentiator between hierarchy levels (WCAG 1.4.1)",
    "Minimum contrast 4.5:1 for body text, 3:1 for large text (18px+ or 14px+ bold)",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Tailwind prose plugin applies sensible typographic hierarchy to markdown content automatically",
    "Limit to 2 font weights in body content: 400 (body) and 600–700 (emphasis/heading)",
    "Display text (hero, stats, KPIs) can use 800–900 weight for maximum contrast",
    "Supporting text: text-sm + text-fg-muted is usually sufficient — avoid adding another font size",
  ],
  checklist: [
    "Defined three clear hierarchy levels with distinct weight and/or size contrast",
    "No more than 3 font sizes in a single card or section",
    "Heading HTML elements match visual hierarchy (h1 is visually largest)",
  ],
  relatedEntryIds: ['typography-scale', 'serial-position-effect', 'visual-weight', 'emphasis-techniques'],
  tags: ["typographic hierarchy", "text hierarchy", "headings", "typography feels flat", "nothing stands out", "font weight", "improve readability"],
  intentTags: ["increase-emphasis", "improve-readability"],
  contentStatus: 'hardened',
  content: `
# Typographic Hierarchy

Hierarchy tells the eye where to start. Without it, users scan randomly and miss what matters.

## The Three-Level System

| Level | Role | Weight | Size | Color |
|---|---|---|---|---|
| Display | Headlines, KPIs, hero text | 700–900 | 1.5–4× body | fg (full contrast) |
| Body | Readable prose and UI text | 400–500 | 1rem baseline | fg |
| Supporting | Labels, captions, metadata | 400–500 | 0.75–0.875× body | fg-muted |

Three levels handle 90% of interfaces. Resist adding a fourth unless content genuinely demands it (long-form articles, legal docs).

## Weight Is the Primary Lever

Size gets the most attention but weight does the heavy lifting. Compare:

- 32px Regular vs 16px Regular = size contrast, weak hierarchy feel
- 32px Black (900) vs 16px Regular (400) = size + weight contrast, strong hierarchy

Weight contrast makes the larger text *feel* larger. Without it, size alone reads as decoration.

## The Dilution Problem

Every time you add bold text, you're spending hierarchy budget. If 40% of your body text is bold, bold no longer means important — it just means noise.

**Rule**: Emphasis should cover less than 15% of visible text at any time.
`,
};
