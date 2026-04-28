import { ReferenceEntry } from '../../types';

export const z_index_stacking: ReferenceEntry = {
  id: "z-index-stacking",
  title: "Z-Index & Stacking Contexts",
  domain: "layout",
  format: "system",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "devtools", "productivity"],
  confidenceScore: 91,
  slug: "z-index-stacking",
  complexity: "intermediate",
  description: "A structured approach to managing element layering using z-index scales and understanding stacking contexts.",
  quickTake: "Z-index only works within the same stacking context. Most z-index bugs aren't about the number being too low — they're about being in the wrong stacking context entirely. Use a named scale (100/200/300) to make layering intentional.",
  whyItMatters: "Tooltip-behind-modal and dropdown-clipped-by-parent are among the most common layout bugs in production. They almost always trace back to implicit stacking contexts created by transform or opacity — not the z-index value itself.",
  mechanism: [
    "Define a named z-index scale: base(0), dropdown(100), sticky(200), overlay(300), modal(400), toast(500), tooltip(600)",
    "Identify implicit stacking context creators: transform, opacity < 1, filter, will-change, isolation: isolate",
    "Use CSS custom properties or design tokens to reference scale values by name",
    "Audit parent elements when z-index stops working — the fix is usually removing a transform from an ancestor",
  ],
  whenToUse: [
    "Any component that overlaps other elements (dropdowns, tooltips, modals, toasts)",
    "Sticky headers and sidebars that need to stay above scrolling content",
    "Complex layouts where multiple layers interact",
  ],
  whenNotToUse: [
    "As a band-aid for layout problems that should be solved with positioning",
    "Arbitrary high values (z-index: 9999) — use the scale instead",
  ],
  tradeoffs: [
    { pro: "Predictable layering across the entire application", con: "Requires discipline — one rogue z-index: 9999 breaks the system" },
    { pro: "Named scale makes intent readable in code", con: "Stacking context rules require deep CSS knowledge to debug" },
  ],
  failureModes: [
    "Tooltip hidden behind modal: tooltip is in a different stacking context created by a parent transform",
    "Dropdown clipped: parent has overflow: hidden without a high enough z-index",
    "Sticky header covered by content: missing z-index on the sticky element",
    "Z-index war: multiple developers incrementing values until one reaches 99999",
  ],
  alternatives: [
    { entryId: "flexbox-patterns", condition: "When overlap can be avoided entirely with proper layout" },
  ],
  a11ySpecs: [
    "Ensure focus order matches visual layer order — a tooltip visually on top must also be next in tab order",
    "Modal overlays must use aria-modal and trap focus within the layer",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use CSS custom properties: --z-dropdown: 100; --z-modal: 400; etc.",
    "Add isolation: isolate to component roots that should not leak z-index upward",
    "Use Chrome DevTools layers panel to debug stacking context issues visually",
  ],
  checklist: [
    "Defined a named z-index scale in design tokens",
    "Audited parent elements for implicit stacking context creators before adding z-index",
    "Used isolation: isolate on component wrappers that need self-contained layering",
  ],
  relatedEntryIds: ['flexbox-patterns', 'css-grid-layouts', 'focus-management'],
  tags: ["z-index", "stacking context", "tooltip behind modal", "dropdown clipped", "layering", "z-index not working", "overlay bug"],
  intentTags: ["fix-alignment"],
  contentStatus: 'hardened',
  content: `
# Z-Index & Stacking Contexts

Z-index is one of CSS's most misunderstood properties. The number isn't the problem — the *context* is.

## What Creates a Stacking Context

A new stacking context is created by any element with:
- \`position\` + \`z-index\` (not auto)
- \`opacity\` less than 1
- \`transform\`, \`filter\`, \`perspective\`, \`clip-path\`
- \`will-change\` with certain values
- \`isolation: isolate\`

Once inside a stacking context, z-index values are relative to *that context*, not the document root. This is why \`z-index: 9999\` sometimes doesn't work.

## A Practical Scale

\`\`\`css
:root {
  --z-base:     0;
  --z-raised:   10;
  --z-dropdown: 100;
  --z-sticky:   200;
  --z-overlay:  300;
  --z-modal:    400;
  --z-toast:    500;
  --z-tooltip:  600;
}
\`\`\`

## Debugging the "Z-Index Not Working" Bug

1. Open DevTools → find the element that should be on top
2. Walk up its ancestor chain
3. Look for any element with \`transform\`, \`opacity < 1\`, or \`filter\`
4. That's your stacking context boundary — z-index fights happen *within* it

The fix is almost never "increase the z-index." It's usually "remove the transform from the parent" or "add \`isolation: isolate\` to create a deliberate boundary."
`,
};
