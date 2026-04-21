import { ReferenceEntry } from '../../types';

export const elevation_shadows: ReferenceEntry = {
  id: "elevation-shadows",
  title: "Elevation & Shadows",
  domain: "tokens",
  format: "system",
  verdict: "recommended",
  useContext: ["saas", "consumer", "mobile", "marketing"],
  confidenceScore: 90,
  slug: "elevation-shadows",
  complexity: "intermediate",
  description: "Using shadow depth and surface layering to communicate z-axis hierarchy — which elements float above others and why.",
  quickTake: "Shadows communicate layering. No shadow = flat/same level. Small shadow = card on page. Large shadow = floating element (dropdown, modal). The shadow scale must be consistent — mixing arbitrary shadow values creates incoherent depth. Dark mode needs shadows replaced by border + subtle background tint.",
  whyItMatters: "Elevation communicates interaction affordance — a card with a shadow looks clickable; an elevated modal looks like it's above the page. Inconsistent elevation breaks the spatial metaphor. Users rely on depth to understand what's interactive, what's in focus, and what's part of which group.",
  mechanism: [
    "Define 4–5 elevation levels: 0 (flat), 1 (card/surface), 2 (sticky/raised), 3 (floating/dropdown), 4 (modal/dialog)",
    "Each level has a corresponding shadow value — shadow size and blur increase with elevation",
    "Higher elevation = more prominent; use it for elements with higher interaction priority",
    "Dark mode: drop shadows, use border + slightly lighter background instead",
  ],
  whenToUse: [
    "Layered UI: cards on page background, dropdowns above cards, modals above everything",
    "Interactive affordance: cards that can be clicked feel clickable with a shadow on hover",
    "Sticky elements: headers and toolbars that scroll over content need elevation to separate them",
  ],
  whenNotToUse: [
    "Flat design aesthetic where elevation is intentionally absent",
    "Dark mode as the only context — shadows don't work on dark backgrounds, use border approach",
  ],
  tradeoffs: [
    { pro: "Communicates layer hierarchy intuitively — users understand depth without reading", con: "Shadow complexity can make interfaces feel heavy or skeuomorphic if overdone" },
    { pro: "Hover shadows on cards communicate interactivity affordance", con: "Dark mode requires completely different elevation approach — increases design system complexity" },
  ],
  failureModes: [
    "Too many shadow values: 15 different box-shadows in the codebase — no coherent hierarchy",
    "Large shadow on flat content: drop shadow on body text feels wrong",
    "No elevation change on interaction: hovered card should increase elevation; not changing it removes the affordance",
    "Identical shadows on dropdowns and cards: hierarchy collapses — dropdown should clearly float above",
  ],
  alternatives: [
    { entryId: "design-tokens", condition: "Shadow values should be design tokens for consistent application" },
    { entryId: "z-index-stacking", condition: "Z-index and elevation work together — shadow should match z-index level" },
  ],
  a11ySpecs: [
    "Elevation must not be the only indicator of focus or active state — pair with outline or color change",
    "Modals and dialogs: visible elevated surface with sufficient contrast from page background",
    "Dark mode: ensure elevation is perceivable without shadows (use border or tint difference)",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Tailwind shadow scale: shadow-sm (card), shadow-md (raised), shadow-lg (dropdown), shadow-xl (modal)",
    "Hover elevation: transition: box-shadow 150ms ease-out; on hover: shadow-md → shadow-lg",
    "Dark mode shadows: use border-white/10 and bg-white/5 for layering instead of box-shadow",
    "Performance: box-shadow triggers repaint but not layout — acceptable for hover state changes",
  ],
  checklist: [
    "Elevation scale defined with 4–5 levels maximum",
    "Interactive cards increase elevation on hover",
    "Modals use highest elevation (most prominent shadow or border)",
    "Dark mode uses border/tint approach instead of shadows",
    "Shadow values stored as design tokens, not hardcoded",
  ],
  relatedEntryIds: ['z-index-stacking', 'design-tokens', 'dark-mode-design', 'modal-dialog'],
  tags: ["elevation", "shadows", "box-shadow", "depth", "card design", "z-axis", "layering"],
  intentTags: ["improve-aesthetics", "improve-feedback"],
  content: `
# Elevation & Shadows

Shadows communicate where things are in 3D space. The size of the shadow tells users how high above the surface an element floats.

## The 5-Level Scale

| Level | Name | Use | Tailwind |
|-------|------|-----|---------|
| 0 | Flat | Inline elements, page text | (none) |
| 1 | Card | Cards on page background | shadow-sm |
| 2 | Raised | Sticky headers, focused cards | shadow-md |
| 3 | Floating | Dropdowns, tooltips, popovers | shadow-lg |
| 4 | Overlay | Modals, dialogs, full-screen layers | shadow-xl or shadow-2xl |

Stick to this scale. Never create elevation level 1.5 with a custom shadow.

## Interactive Elevation

Cards that can be clicked should rise on hover:

\`\`\`css
.card {
  box-shadow: var(--shadow-sm);
  transition: box-shadow 150ms ease-out, transform 150ms ease-out;
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}
\`\`\`

The slight lift + shadow increase communicates "this can be clicked."

## Dark Mode: No Shadows

Shadows don't work on dark backgrounds — the contrast between shadow and surface is too low.

Instead, use **elevation via border and background:**

\`\`\`css
/* Light mode: shadow elevation */
.card { box-shadow: 0 1px 3px rgba(0,0,0,0.1); }

/* Dark mode: border + tint elevation */
@media (prefers-color-scheme: dark) {
  .card {
    box-shadow: none;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.05);
  }
  .card.elevated {
    border: 1px solid rgba(255,255,255,0.12);
    background: rgba(255,255,255,0.08);
  }
}
\`\`\`

## The Token Definition

\`\`\`css
:root {
  --shadow-sm:  0 1px 2px rgba(0,0,0,0.05);
  --shadow-md:  0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05);
  --shadow-lg:  0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05);
  --shadow-xl:  0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04);
}
\`\`\`
`,
};
