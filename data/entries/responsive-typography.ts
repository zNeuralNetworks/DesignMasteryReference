import { ReferenceEntry } from '../../types';

export const responsive_typography: ReferenceEntry = {
  id: "responsive-typography",
  title: "Responsive Typography",
  domain: "typography",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "content", "marketing", "portfolio", "mobile"],
  confidenceScore: 91,
  slug: "responsive-typography",
  complexity: "intermediate",
  description: "Scaling type fluidly across screen sizes using clamp(), min/max constraints, and viewport-aware type scales.",
  quickTake: "CSS clamp() enables truly fluid type that scales smoothly between a minimum and maximum size without breakpoint jumps. Pure vw-based sizing is inaccessible — always pair with clamp() to respect browser zoom.",
  whyItMatters: "Fixed font sizes on mobile cause zooming and horizontal scrolling. Pure vw-based sizes break when users zoom in (WCAG 1.4.4). Fluid type with clamp() solves both — it scales with the viewport but respects user font size preferences.",
  mechanism: [
    "Define minimum size (mobile), maximum size (desktop), and preferred fluid value for each type level",
    "Use clamp(min, preferred, max) — e.g. clamp(1rem, 2.5vw, 1.5rem)",
    "Preferred value should be a vw calculation: (target - min) / (max-viewport - min-viewport) × 100vw",
    "Test at 200% browser zoom to ensure text remains readable and doesn't overflow",
  ],
  whenToUse: [
    "Display and heading text that needs to scale dramatically between mobile and desktop",
    "Content-heavy sites where reading comfort is critical",
    "Marketing pages with large hero type",
  ],
  whenNotToUse: [
    "Body text — body copy rarely needs to change beyond 14–16px; fixed sizes are more predictable",
    "When design system uses strict t-shirt size tokens that shouldn't vary by viewport",
  ],
  tradeoffs: [
    { pro: "Smooth scaling without jarring breakpoint jumps", con: "clamp() math is non-obvious and hard to read" },
    { pro: "Single declaration handles all viewport sizes", con: "Requires testing at multiple viewport widths and zoom levels" },
  ],
  failureModes: [
    "Pure vw sizing (font-size: 4vw) fails WCAG 1.4.4 — text can't be zoomed to 200% without loss",
    "Min size too small: text becomes unreadable on small screens if minimum isn't 0.875rem+",
    "Max size too large: display text overwhelming on wide monitors if maximum isn't constrained",
  ],
  alternatives: [
    { entryId: "typography-scale", condition: "Use when a fixed modular scale with breakpoint overrides is sufficient" },
    { entryId: "variable-fonts", condition: "Use variable fonts when fine-grained weight/width variation is needed alongside size scaling" },
  ],
  a11ySpecs: [
    "Always use rem or em in clamp() min/max values — never px alone — to respect browser font size settings",
    "Test at 200% browser zoom — text must not overflow or become truncated (WCAG 1.4.4)",
    "Minimum font size for body text should be 1rem (16px equivalent)",
  ],
  perfImpact: "low",
  implementationNotes: [
    "clamp(1rem, 2.5vw + 0.5rem, 1.5rem) — the '+ 0.5rem' shifts the curve up, useful for headings",
    "Tailwind 4 supports arbitrary clamp values: text-[clamp(1.5rem,4vw,2.5rem)]",
    "Use a fluid type calculator (utopia.fyi) to generate scales without manual math",
    "Test with Chrome DevTools device toolbar at 320px, 768px, 1440px, and 2560px",
  ],
  checklist: [
    "All fluid values use clamp() with rem-based min/max, not bare vw",
    "Tested at 200% browser zoom without text overflow",
    "Body text is fixed size (not fluid) for predictable reading comfort",
  ],
  relatedEntryIds: ['typography-scale', 'variable-fonts', 'mobile-first-design', 'line-length'],
  tags: ["responsive typography", "fluid type", "clamp()", "font scaling", "mobile typography", "font too small on mobile"],
  intentTags: ["improve-readability", "fix-accessibility"],
  content: `
# Responsive Typography

Type needs to work at 320px and 2560px. The old way was breakpoint overrides. The modern way is \`clamp()\`.

## The clamp() Formula

\`\`\`css
font-size: clamp(minimum, preferred, maximum);

/* Example: body text */
font-size: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);

/* Example: display heading */
font-size: clamp(2rem, 1rem + 4vw, 4.5rem);
\`\`\`

The preferred value is a \`vw\`-based expression that scales with viewport width. The min/max cap it at safe extremes.

## Why Not Just vw?

\`font-size: 4vw\` is inaccessible. When a user sets their browser font size to 200%, \`vw\` doesn't respond — it's tied to the viewport, not the user's preferences. \`clamp()\` with \`rem\` min/max values respects both.

## Practical Scale

| Level | Mobile | Desktop | clamp |
|---|---|---|---|
| Display | 2rem | 4.5rem | clamp(2rem, 1rem + 4vw, 4.5rem) |
| H1 | 1.75rem | 3rem | clamp(1.75rem, 1rem + 3vw, 3rem) |
| H2 | 1.375rem | 2rem | clamp(1.375rem, 1rem + 1.5vw, 2rem) |
| Body | 1rem | 1rem | fixed — no scaling needed |

Use [utopia.fyi](https://utopia.fyi) to generate full fluid scales without manual math.
`,
};
