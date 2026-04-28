import { ReferenceEntry } from '../../types';

export const emphasis_techniques: ReferenceEntry = {
  id: "emphasis-techniques",
  title: "Emphasis Techniques",
  domain: "visual-hierarchy",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "content", "marketing", "dashboard"],
  confidenceScore: 91,
  slug: "emphasis-techniques",
  complexity: "beginner",
  description: "The specific techniques used to make one element stand out from its context — bold, color, size, isolation, contrast, and enclosure.",
  quickTake: "Emphasis works by contrast — an element stands out only relative to its surroundings. The most effective technique depends on what's already happening in the design. In a typographically heavy layout, color pops. In a colorful layout, whitespace isolation pops. Never use all techniques at once.",
  whyItMatters: "Without emphasis, everything competes equally for attention. With too much emphasis, nothing stands out. The right technique at the right scale makes users notice exactly what matters — a CTA, a warning, a key number — without creating visual noise.",
  mechanism: [
    "Bold/weight: most available lever for text — use 600–700 for moderate, 800–900 for strong emphasis",
    "Color: use primary brand or semantic color (red for warning, green for success) as spotlight",
    "Size: increase size 1.25–1.5× relative to surroundings for subtle, 2× for strong",
    "Isolation: surround element with more white space than its neighbors",
    "Enclosure: border, background fill, or card wrapping creates visual boundary",
    "Contrast inversion: light element on dark background (or vice versa) in an otherwise uniform field",
  ],
  whenToUse: [
    "Primary CTAs that must stand out from secondary actions",
    "Warning messages, error states, and alerts that need immediate attention",
    "Key metrics or statistics that are the main point of a section",
    "Required form fields vs. optional fields",
  ],
  whenNotToUse: [
    "More than 2–3 emphasized elements per view — emphasis is relative, it dilutes with each use",
    "Decorative purposes — emphasis signals importance; false signals train users to ignore them",
  ],
  tradeoffs: [
    { pro: "Directs user attention without changing information architecture", con: "Over-emphasis is worse than no emphasis — when everything is highlighted, nothing is" },
    { pro: "Works across text, buttons, cards, and data elements", con: "Each technique carries connotations (red = danger) that can conflict with visual intent" },
  ],
  failureModes: [
    "Bold soup: 30% of body text is bold — bold loses all emphasis value",
    "Error red used decoratively: training users to ignore red",
    "All caps for emphasis: reduces readability significantly at length",
    "Multiple techniques on one element: bold + color + size + enclosure = visual noise, not emphasis",
  ],
  alternatives: [
    { entryId: "visual-weight", condition: "Visual weight is the underlying principle; emphasis techniques are the tools" },
    { entryId: "type-hierarchy", condition: "Typographic hierarchy applies emphasis techniques specifically to text" },
  ],
  a11ySpecs: [
    "Color alone must not convey emphasis — pair color change with bold, icon, or text label (WCAG 1.4.1)",
    "Don't use all-caps for emphasis in long strings — screen readers may spell it out letter by letter",
    "Bold semantic elements: <strong> for actual importance, not just visual bold",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Button hierarchy: solid primary (highest) > outlined (medium) > ghost (lowest) — never reverse",
    "Callout cards: border-left with accent color is a classic enclosure technique for blockquotes/tips",
    "Data tables: use font-tabular-nums + font-weight-600 on a key metric column to draw the eye",
    "Warning states: amber background + amber border + dark amber text — color + enclosure together",
  ],
  checklist: [
    "Only 1–2 primary emphasized elements per view",
    "Color emphasis paired with at least one other indicator (weight, size, or border)",
    "Bold used for less than 15% of visible text",
    "Button visual hierarchy matches action importance hierarchy",
  ],
  relatedEntryIds: ['visual-weight', 'type-hierarchy', 'white-space', 'color-rule'],
  tags: ["emphasis", "visual emphasis", "highlight", "CTA design", "bold text", "call to action", "make it stand out"],
  intentTags: ["increase-emphasis", "improve-aesthetics"],
  contentStatus: 'hardened',
  content: `
# Emphasis Techniques

Emphasis works by contrast. An element stands out only because its neighbors recede. The moment everything is emphasized, nothing is.

## The Six Techniques

### 1. Weight (text-specific)
\`\`\`css
.body { font-weight: 400; }
.emphasized { font-weight: 600; }  /* moderate */
.strong { font-weight: 800; }      /* strong — use sparingly */
\`\`\`

### 2. Color
Assign one primary "emphasis color" — your brand primary or a semantic color.
Reserve it exclusively for things that matter. If it appears on every second element, it's decoration.

### 3. Size
1.25× for subtle callout. 1.5–2× for strong heading emphasis.
Don't increase size alone — pair with weight contrast.

### 4. Isolation
Surround the element with more space than its neighbors get.
A metric with 32px padding in a card with 16px padding elsewhere will draw the eye.

### 5. Enclosure
Borders, background fills, or cards create an implicit "box" that separates content from context.
\`\`\`html
<!-- Callout with left border -->
<div class="border-l-4 border-primary-500 pl-4 bg-primary-50 py-3">
  Important note here
</div>
\`\`\`

### 6. Contrast Inversion
Light element on dark section (or dark on light) where everything else is uniform.
The most dramatic technique — use for hero moments only.

## Technique Matching

| What's already heavy | What pops |
|---|---|
| Dense typography | Color + isolation |
| Colorful UI | Whitespace, size increase |
| Monochrome layout | Color accent |
| Dense data table | Weight, monospace digits, right-align |

The right technique is the one that contrasts with its immediate context.
`,
};
