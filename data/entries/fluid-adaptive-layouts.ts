import { ReferenceEntry } from '../../types';

export const fluid_adaptive_layouts: ReferenceEntry = {
  id: "fluid-adaptive-layouts",
  title: "Fluid & Adaptive Layouts",
  domain: "responsiveness",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "content", "marketing", "mobile", "dashboard"],
  confidenceScore: 92,
  slug: "fluid-adaptive-layouts",
  complexity: "intermediate",
  description: "Layouts that scale continuously between breakpoints using proportional units, rather than jumping between fixed states.",
  quickTake: "Fluid layouts use percentages and viewport units to scale continuously. Adaptive layouts snap to distinct states at breakpoints. Most production layouts combine both — fluid within breakpoint ranges, adaptive across them.",
  whyItMatters: "Purely fixed-width layouts break at unexpected viewport sizes. Purely fluid layouts create unreadable extremes (600px-wide text columns, or 12px cards on mobile). Combining fluid scaling within bounded ranges gives the best of both approaches.",
  mechanism: [
    "Use percentage widths for grid columns so they scale within a breakpoint range",
    "Use max-width constraints to prevent content from becoming too wide on large screens",
    "Use min() and max() functions for values that should scale but have hard limits",
    "Apply breakpoints only when the fluid behavior breaks down — not at device sizes",
  ],
  whenToUse: [
    "Multi-column layouts that need to work from tablet to wide desktop",
    "Card grids where the number of columns should change at breakpoints",
    "Content pages where text column width must stay within readable range",
  ],
  whenNotToUse: [
    "Highly structured data tables — fixed column widths maintain scannability",
    "Pixel-precise marketing layouts where designer has specified exact widths",
  ],
  tradeoffs: [
    { pro: "Handles all screen sizes gracefully without edge cases at specific widths", con: "Requires more thought than fixed-width layouts — intermediate states must be tested" },
    { pro: "Fewer breakpoints needed since content scales within ranges", con: "Fluid text sizing can cause readability issues if min/max aren't set carefully" },
  ],
  failureModes: [
    "No max-width: fluid columns become unreadably wide on 2560px monitors",
    "Too fluid: removing all breakpoints means a sidebar at 30% width is 96px on mobile and 768px on 4K",
    "Fluid images without aspect-ratio: images reflow and cause layout shift",
  ],
  alternatives: [
    { entryId: "breakpoint-strategy", condition: "When you need discrete layout changes rather than continuous scaling" },
    { entryId: "css-grid-layouts", condition: "CSS Grid auto-fill/auto-fit often provides fluid behavior without custom breakpoints" },
  ],
  a11ySpecs: [
    "Fluid layouts must not cause content to overlap at any viewport width",
    "Text must remain readable — minimum 16px body text at all fluid sizes",
    "Ensure touch targets remain 44px minimum even when parent container scales down",
  ],
  perfImpact: "low",
  implementationNotes: [
    "CSS Grid auto-fit with minmax: grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))",
    "Fluid container: width: min(90%, 1200px); margin-inline: auto",
    "Fluid spacing: gap: clamp(1rem, 3vw, 2rem) scales gaps proportionally",
    "Use aspect-ratio on image containers to prevent reflow during load",
  ],
  checklist: [
    "All fluid containers have max-width constraints to prevent over-expansion",
    "Grid layouts tested at 320px, 768px, 1280px, 1920px",
    "Text columns constrained to 45–75ch for readable line length",
    "Images have explicit aspect-ratio to prevent layout shift",
  ],
  relatedEntryIds: ['breakpoint-strategy', 'mobile-first-design', 'css-grid-layouts', 'responsive-typography'],
  tags: ["fluid layout", "adaptive layout", "responsive grid", "layout scales", "fix mobile", "flexible layout"],
  intentTags: ["fix-alignment", "improve-readability"],
  contentStatus: 'hardened',
  content: `
# Fluid & Adaptive Layouts

Most production layouts need both fluid scaling and adaptive breakpoints — not one or the other.

## The Spectrum

**Fixed:** \`width: 1200px\` — breaks below 1200px, wastes space above.

**Fluid:** \`width: 90%\` — technically responsive, but a 3-column grid at 300px is unusable.

**Fluid within adaptive:** 3 columns above 1024px (each 30% wide), 2 columns at 640px–1024px, 1 column below 640px. Within each range, everything scales proportionally.

## Key CSS Techniques

### Fluid containers
\`\`\`css
.container {
  width: min(90%, 1200px);
  margin-inline: auto;
}
\`\`\`

### Auto-flowing grids (eliminates most breakpoints)
\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1rem, 2.5vw, 2rem);
}
\`\`\`

Cards automatically reflow from 1 to N columns as space allows. No breakpoints needed.

### Bounded fluid values
\`\`\`css
.sidebar { width: clamp(240px, 25%, 360px); }
\`\`\`

Scales between 240px and 360px proportionally, never outside those bounds.

## When to Use Breakpoints vs. Fluid

Use **fluid** when the content works at all sizes within a range (cards that scale from 280px to 400px wide).

Use **adaptive breakpoints** when the layout fundamentally changes (sidebar collapses to a drawer, 3-column grid becomes 1-column).
`,
};
