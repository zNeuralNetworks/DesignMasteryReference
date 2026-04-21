import { ReferenceEntry } from '../../types';

export const spacing_systems: ReferenceEntry = {
  id: "spacing-systems",
  title: "Spacing Systems",
  domain: "layout",
  format: "system",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile", "devtools", "content", "portfolio", "marketing", "marketplace", "consumer", "productivity", "systems"],
  confidenceScore: 96,
  slug: "spacing-systems",
  complexity: "beginner",
  description: "A consistent spacing scale built on an 8px base grid that governs all whitespace decisions in a UI.",
  quickTake: "Spacing systems eliminate visual chaos by constraining all margins, padding, and gaps to a predictable scale. An 8px base grid works because most screens divide evenly by 8, and human perception groups values that share a common divisor. Without a spacing system, every spacing decision is a coin flip that compounds into incoherence.",
  whyItMatters: "Inconsistent spacing is the single fastest way to make a UI look unfinished — even when every other decision is correct. A spacing system forces rhythm into layouts automatically, reducing the cognitive load of per-component spacing decisions and making handoff to engineers deterministic. Systems built on tokens can be changed globally in one edit.",
  mechanism: [
    "Choose a base unit — 4px for dense UIs (devtools, data tables), 8px for standard product, 16px for marketing/editorial",
    "Define a named scale: xs=4, sm=8, md=16, lg=24, xl=32, 2xl=48, 3xl=64 — each step is meaningful, not arbitrary",
    "Map the scale to spacing tokens (--space-sm, --space-md etc.) or a Tailwind/CSS-in-JS config so engineers reference names, not raw numbers",
    "Apply the scale consistently: use smaller values within components, larger values between components, largest values between sections"
  ],
  whenToUse: [
    "Starting a new design system or UI from scratch — establish spacing tokens before building any components",
    "When a UI feels 'off' but you can't explain why — audit spacing first; inconsistency is usually the culprit",
    "When multiple designers or engineers contribute to one codebase — a shared scale prevents divergence",
    "When a product needs to support both compact and comfortable density modes — a token-based scale makes switching trivial"
  ],
  whenNotToUse: [
    "One-off illustration or decorative layouts where artistic spacing serves the composition better than systematic rhythm",
    "Highly constrained legacy codebases where introducing a new spacing layer would require too much refactoring to be practical"
  ],
  tradeoffs: [
    { pro: "Eliminates per-component spacing debates — designers and engineers share a vocabulary", con: "Rigid scales can feel constraining for expressive or editorial layouts that need irregular rhythm" },
    { pro: "Token-based spacing enables global density changes in a single config edit", con: "Initial setup requires discipline; teams without tooling enforcement will drift back to arbitrary values" },
    { pro: "8px base aligns with most design tool grids and screen pixel densities", con: "4px-based scales require more steps to reach large spacing values, making the token list longer" }
  ],
  failureModes: [
    "Using raw pixel values in components instead of tokens — the system exists in the config but not in practice",
    "Creating too many steps (xs through 9xl) so designers still have to choose between nearly-identical values",
    "Ignoring spacing between sections and only applying the scale within components — macro rhythm breaks",
    "Different base units for different parts of the product (marketing uses 16px grid, app uses 8px) causing visual mismatch at transition points"
  ],
  alternatives: [
    { entryId: "design-tokens", condition: "Use when you need spacing to be part of a broader theming and multi-brand token system" },
    { entryId: "bento-grids", condition: "Use when the layout itself is the product and grid-based card placement needs to be explicit" }
  ],
  a11ySpecs: [
    "Minimum 4px spacing between interactive elements to reduce mis-tap risk on touch devices",
    "Ensure spacing tokens never collapse to 0 between focusable elements — focus rings need visual breathing room"
  ],
  perfImpact: "low",
  implementationNotes: [
    "In Tailwind, the default spacing scale is already 4px-based (space-1=4px, space-2=8px) — map your named scale to Tailwind values in tailwind.config.js",
    "In CSS, use custom properties on :root — --space-sm: 8px; — and reference them throughout; this is the fastest path to global density changes",
    "In Figma, use Styles or Variables for spacing tokens so inspect panel shows semantic names, not px values",
    "For component libraries, enforce the scale via a lint rule (e.g., stylelint-no-unsupported-browser-features or a custom spacing lint) to catch raw values at PR time"
  ],
  checklist: [
    "Defined a named spacing scale with at least 6 steps from a consistent base unit",
    "Spacing scale is stored as design tokens or config values — not hardcoded in components",
    "Spacing between sections uses values from the larger end of the scale (32px+)",
    "Spacing within components uses values from the smaller end of the scale (4–16px)",
    "All team members know the token names and the scale is documented in the design system"
  ],
  relatedEntryIds: ['design-tokens', 'typography-scale', 'bento-grids'],
  tags: ["spacing", "whitespace", "8px grid", "rhythm", "layout", "fix spacing", "elements feel disconnected", "no visual structure", "whitespace", "spacing scale", "tokens", "padding", "margins"],
  intentTags: ["fix-alignment", "improve-aesthetics"],
  content: `
# Spacing Systems

## The 8px Grid

The 8px base unit is not arbitrary — it divides evenly into common screen widths (360, 375, 390, 414, 768, 1024, 1280, 1440px), maps cleanly to Material Design's 8dp baseline, and matches the default line-height increments most type scales produce naturally. Use 4px as your base only when building dense data-heavy UIs (dev tools, data grids) where 8px gaps become visually heavy.

A standard 6-step scale covers nearly every need:

| Token     | Value | Use                              |
|-----------|-------|----------------------------------|
| space-1   | 4px   | Icon inner padding, tight insets |
| space-2   | 8px   | Component inner spacing          |
| space-3   | 16px  | Default component padding        |
| space-4   | 24px  | Component-to-component gaps      |
| space-5   | 32px  | Section separation               |
| space-6   | 48px  | Major section breaks             |
| space-7   | 64px  | Page-level section gaps          |

## Applying the Scale: Micro vs Macro Spacing

**Micro spacing** (within a component): use space-1 through space-3. A button's horizontal padding is typically space-3 (16px), vertical space-2 (8px). A card's internal padding is space-3 to space-4.

**Macro spacing** (between components and sections): use space-4 through space-7. The gap between a page heading and the first content block: space-5 (32px). The gap between major page sections: space-6 or space-7. This hierarchy is what creates visual rhythm — content breathes, sections are clearly delineated.

**The most common mistake**: applying the same spacing value everywhere. A UI where everything has 16px of space around it has no hierarchy — every element screams with equal priority.

## Token Implementation

\`\`\`css
/* CSS custom properties on :root */
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 48px;
  --space-7: 64px;
}
\`\`\`

\`\`\`js
// tailwind.config.js — map semantic names to Tailwind's scale
theme: {
  extend: {
    spacing: {
      'xs': '4px',
      'sm': '8px',
      'md': '16px',
      'lg': '24px',
      'xl': '32px',
      '2xl': '48px',
      '3xl': '64px',
    }
  }
}
\`\`\`

## Density Modes

A spacing system built on tokens makes density modes trivial. A "compact" mode simply redefines the token values at a smaller base:

\`\`\`css
[data-density="compact"] {
  --space-3: 12px;
  --space-4: 20px;
  --space-5: 28px;
}
\`\`\`

This is impossible to do safely with hardcoded pixel values — it requires touching every component. Token-based spacing is the prerequisite for any serious density or theming work.

## Diagnosing Spacing Problems

If a layout looks wrong but you can't pin down why: audit with a consistent-spacing overlay. In Figma, use the "measure" tool to spot-check gaps. In the browser, use a spacing overlay bookmarklet or simply inspect computed styles. Common symptoms and causes:

- **Elements feel disconnected**: macro spacing is too large — reduce section gaps
- **UI feels cramped**: micro spacing is too small — increase component inner padding
- **No visual hierarchy**: same spacing value used at every level — introduce variation between micro and macro
- **Looks unfinished**: spacing is inconsistent (13px here, 17px there) — enforce the token scale, no raw values
`,
};
