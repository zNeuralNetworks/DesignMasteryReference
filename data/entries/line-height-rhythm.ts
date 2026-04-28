import { ReferenceEntry } from '../../types';

export const line_height_rhythm: ReferenceEntry = {
  id: "line-height-rhythm",
  title: "Line Height & Vertical Rhythm",
  domain: "typography",
  format: "system",
  verdict: "recommended",
  useContext: ["content", "saas", "dashboard", "systems", "marketing", "portfolio", "productivity"],
  confidenceScore: 93,
  slug: "line-height-rhythm",
  complexity: "intermediate",
  description: "A system for consistent vertical spacing in typography using unitless line-height values and rhythm-based spacing between text elements.",
  quickTake: "Body text needs line-height 1.5–1.6; display text needs 1.1–1.2. Always use unitless values to prevent inheritance bugs. Vertical rhythm means the space between every text element is a multiple of your base line height, creating a felt sense of order even when users can't identify it.",
  whyItMatters: "Vertical rhythm is the invisible scaffolding that makes typography feel composed. When line heights are inconsistent or spacing between elements is arbitrary, text feels unsettled and hard to scan. A consistent rhythm allows the eye to move predictably through content without extra cognitive effort.",
  mechanism: [
    "Set a base font-size (typically 16px) and a base line-height (1.5 = 24px effective leading)",
    "Use unitless line-height values (1.5, not 1.5rem or 24px) so the value scales correctly when children have different font-sizes",
    "Set display/heading line-height between 1.1–1.25 — larger type needs tighter leading to feel cohesive",
    "Use multiples of your base line height (24px) for spacing between elements: 24px, 48px, 72px",
    "Create a spacing scale derived from the base leading and apply it as margin-bottom on headings and paragraphs"
  ],
  whenToUse: [
    "Building any product with meaningful text content that users read linearly",
    "Creating a design system where typographic consistency across components is required",
    "Designing long-form content pages, documentation, or editorial layouts",
    "When your current typography feels 'off' but you can't pinpoint why"
  ],
  whenNotToUse: [
    "Single-word or single-line UI elements like buttons and chips where vertical rhythm is irrelevant",
    "Data-dense tables where row height is determined by content constraints, not typographic rhythm",
    "Strictly decorative headline treatments where artistic spacing overrides system rules"
  ],
  tradeoffs: [
    { pro: "Creates a felt sense of typographic order that users perceive as 'polished'", con: "Requires upfront system thinking; harder to retrofit into an existing product" },
    { pro: "Unitless line-height prevents subtle inheritance bugs across font sizes", con: "Tighter display line-heights (1.1) can clip descenders in some fonts — always test" },
    { pro: "Rhythm-based spacing makes design decisions easier and more consistent", con: "Strict baseline grids are nearly impossible to maintain in fluid web layouts" }
  ],
  failureModes: [
    "Using pixel or rem values for line-height (e.g., `line-height: 24px`) which breaks when font-size changes on child elements",
    "Applying body line-height (1.5) to large display headings, making them feel airy and disconnected",
    "Random margin-bottom values on headings that don't relate to the base leading unit",
    "Different line-heights on the same semantic element in different components, breaking system consistency",
    "Forgetting to set tighter leading on one-line components (badges, tags) that look odd with full body leading"
  ],
  alternatives: [
    { entryId: "typography-scale", condition: "Use when size ratios are the primary issue; rhythm can be layered on top of a scale" },
    { entryId: "spacing-systems", condition: "Use for inter-component spacing — rhythm governs within text blocks, spacing systems govern between components" }
  ],
  a11ySpecs: [
    "WCAG 1.4.12 requires line-height to be at least 1.5x the font size — unitless 1.5 satisfies this",
    "Users may override line-height via browser settings or user stylesheets; avoid `!important` on line-height",
    "Test at 200% browser zoom to ensure leading doesn't collapse or overflow",
    "Ensure heading line-heights accommodate characters with tall ascenders and deep descenders in the chosen font"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Always use unitless line-height: `line-height: 1.5` not `line-height: 1.5rem`",
    "In Tailwind: `leading-normal` (1.5) for body, `leading-tight` (1.25) for headings, `leading-none` (1) for single-line UI elements",
    "Define as CSS custom properties: `--leading-body: 1.5; --leading-display: 1.15; --leading-tight: 1.1`",
    "Derive spacing from the effective leading: if body is 16px × 1.5 = 24px, use multiples of 24 for element spacing",
    "Use `lh` unit (CSS 2023) for rhythm-aware spacing: `margin-bottom: 1lh` equals exactly one line of text"
  ],
  checklist: [
    "Body line-height is unitless and between 1.5–1.6",
    "Heading line-heights are between 1.1–1.25 at all sizes",
    "No pixel or rem values used for line-height on text elements",
    "Spacing between text elements is a multiple of the base leading unit",
    "Line heights tested with tall characters (Å, É, g, y) in the actual deployed font",
    "Line-height settings are documented as design tokens in the system"
  ],
  relatedEntryIds: ["typography-scale", "spacing-systems"],
  tags: ["text feels cramped", "spacing between lines", "typography rhythm", "text hard to read", "leading", "vertical rhythm"],
  intentTags: ["improve-readability", "improve-aesthetics"],
  contentStatus: 'flagship',
  content: `# Line Height & Vertical Rhythm

## Why Unitless Line-Height Is Non-Negotiable

Line-height is one of the most subtly broken properties in CSS when set with units. Consider:

\`\`\`css
/* WRONG — uses px */
.parent {
  font-size: 16px;
  line-height: 24px; /* 1.5 ratio */
}
.child {
  font-size: 24px;
  /* line-height: 24px is INHERITED, not scaled — now 1.0 ratio */
}

/* CORRECT — unitless */
.parent {
  font-size: 16px;
  line-height: 1.5;
}
.child {
  font-size: 24px;
  /* line-height: 1.5 is inherited and computed as 36px — correct */
}
\`\`\`

Unitless values are computed by multiplying against the element's own font-size. Pixel or rem values are passed down as-is, creating collapsed leading on larger child elements.

## The Two-Tier System

Text has two primary contexts with different leading needs:

**Body text (14px–18px): line-height 1.5–1.6**
The extra space gives the eye room to travel across long lines and return to the next line accurately. At 1.5, a 16px font has 24px of leading — 8px of space between the descenders of one line and the ascenders of the next.

**Display text (24px+): line-height 1.1–1.25**
Large type already has generous apparent spacing due to its size. Applying body leading to a 64px heading creates a disconnected, floating feeling. Tighter leading holds large text together visually.

\`\`\`css
:root {
  --leading-body: 1.55;
  --leading-display: 1.15;
  --leading-ui: 1.2; /* Labels, chips, short UI text */
}

body, p { line-height: var(--leading-body); }
h1, h2, h3 { line-height: var(--leading-display); }
label, .caption { line-height: var(--leading-ui); }
\`\`\`

## Vertical Rhythm: Spacing as a Multiplier

Vertical rhythm means every space between elements is a multiple of your base leading unit. If your body is 16px with line-height 1.5, your base unit is 24px.

| Element | Recommended spacing |
|---|---|
| Paragraph → paragraph | 1× unit (24px) |
| H3 bottom margin | 0.5× unit (12px) |
| H3 top margin (after paragraph) | 2× unit (48px) |
| Section breaks | 3–4× unit (72–96px) |

This doesn't mean using magic pixel numbers — it means your spacing scale is derived from your leading unit:

\`\`\`css
/* Base rhythm unit: 24px (16px × 1.5) */
.prose p { margin-bottom: 1.5rem; }        /* 24px */
.prose h2 { margin-top: 3rem; margin-bottom: 0.75rem; }  /* 48px / 12px */
.prose h3 { margin-top: 2.25rem; margin-bottom: 0.5rem; } /* 36px / 8px */
\`\`\`

## Display Heading Traps

Two common failures with display line-heights:

1. **Descender clipping**: fonts with long descenders (g, y, p, q) may clip visually at line-height 1.0. Test by placing a word like "typography" in a background-colored container and checking if descenders have visual room.

2. **Multi-line heading collapse**: a heading that wraps to two lines at line-height 1.0 looks like a single dense block. Prefer 1.1–1.15 minimum, which gives enough air to read as two separate lines while still feeling tight.

## The \`lh\` Unit (Modern CSS)

CSS now has a \`lh\` unit that equals the computed line-height of the element. This enables truly rhythm-aware spacing:

\`\`\`css
p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1lh; /* exactly one line of space — 24px at 16px base */
}
\`\`\`

Browser support is strong as of 2024 (Chrome 109+, Firefox 120+, Safari 17.2+).
`,
};
