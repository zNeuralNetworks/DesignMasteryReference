import { ReferenceEntry } from '../../types';

export const flexbox_patterns: ReferenceEntry = {
  id: "flexbox-patterns",
  title: "Flexbox Patterns",
  domain: "layout",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile", "devtools", "content", "portfolio", "marketing", "marketplace", "consumer", "productivity"],
  confidenceScore: 95,
  slug: "flexbox-patterns",
  complexity: "beginner",
  description: "Core flexbox mental models and composable patterns for alignment, distribution, and wrapping of UI elements.",
  quickTake: "Flexbox is the right tool when you need to align or distribute items along a single axis — navigation bars, button groups, form rows, card footers, centered heroes. The mental model is simple: a container controls how its direct children are positioned; children can optionally push back with flex-grow, flex-shrink, and align-self. Most layout bugs come from applying flexbox to a two-dimensional problem that needs CSS Grid instead.",
  whyItMatters: "Misunderstanding flexbox is the root cause of a disproportionate share of layout bugs — centering that works in some browsers, items that overflow instead of wrapping, equal-width columns that collapse. Getting the flex mental model right eliminates an entire class of layout uncertainty. The main axis / cross axis framing solves most alignment questions before you even open DevTools.",
  mechanism: [
    "Set display: flex on the container — all direct children become flex items; nested children are unaffected",
    "Choose the main axis with flex-direction: row (default, left-to-right) or column (top-to-bottom); justify-content distributes along the main axis, align-items aligns on the cross axis",
    "Control item sizing: flex-grow (can item expand?), flex-shrink (can item compress?), flex-basis (starting size before growing/shrinking); shorthand flex: 1 means grow=1, shrink=1, basis=0",
    "Allow wrapping with flex-wrap: wrap so items move to new rows/columns instead of overflowing; use gap instead of margins for consistent gutters"
  ],
  whenToUse: [
    "Navigation bars, toolbars, and header rows where items need to be evenly spaced or pushed to ends",
    "Centering a single element (horizontally, vertically, or both) inside a container",
    "Button groups, badge rows, tag lists, and chip collections that may need to wrap",
    "Card internal layouts — header, body, footer arrangement within a fixed-height card",
    "Form field rows where label and input need to align side by side"
  ],
  whenNotToUse: [
    "Two-dimensional layouts (rows AND columns simultaneously) — use CSS Grid; flexbox is fundamentally one-dimensional",
    "Complex page-level layouts with named areas — grid-template-areas is far more readable and maintainable"
  ],
  tradeoffs: [
    { pro: "Solves alignment in one axis with minimal code — less brittle than float or position hacks", con: "Flex children can be difficult to size predictably when their content is dynamic — min-width: 0 gotcha is common" },
    { pro: "gap property replaces margin-based gutter hacks cleanly with no last-child exceptions", con: "flex-wrap creates rows of unequal counts; last row may have orphaned items that look misaligned" },
    { pro: "align-self lets individual children override the container's cross-axis alignment", con: "Deeply nested flex containers become hard to reason about — inspect parent/child chains is necessary" }
  ],
  failureModes: [
    "Forgetting flex-wrap: wrap causes items to overflow the container instead of wrapping to a new line",
    "Not setting min-width: 0 on flex children that contain text — text overflow won't work without it because flex items default to min-width: auto",
    "Using justify-content: space-between on a wrapping row — last row gets items pushed to edges, looking misaligned; use a grid or add invisible spacer items",
    "Applying flexbox to solve a 2D layout — it creates fragile row/column nesting that breaks at edge cases"
  ],
  alternatives: [
    { entryId: "css-grid-layouts", condition: "Use when layout is two-dimensional or requires named template areas" },
    { entryId: "spacing-systems", condition: "Use when the problem is spacing consistency rather than alignment" }
  ],
  a11ySpecs: [
    "flex-direction: row-reverse or column-reverse reverses visual order without changing DOM order — screen readers follow DOM order, which can mismatch visual order and confuse keyboard navigation",
    "Ensure flex-wrap containers still have a logical tab order — wrapping can make focus jump unexpectedly if DOM order doesn't match visual row order"
  ],
  perfImpact: "low",
  implementationNotes: [
    "flex: 1 shorthand sets flex-grow: 1, flex-shrink: 1, flex-basis: 0% — use for equal-width columns; flex: 1 1 auto uses content size as the starting point instead",
    "For a sticky footer pattern: set the page wrapper to display: flex; flex-direction: column; min-height: 100vh and give the main content area flex: 1",
    "gap is now universally supported and is the correct way to add gutters in flex containers — margin-based gutters require :last-child exceptions and break with wrap",
    "Tailwind equivalents: flex, flex-col, items-center, justify-between, flex-wrap, gap-4 — these map 1:1 to the CSS properties"
  ],
  checklist: [
    "Identified which axis is the main axis (row vs column) before applying justify/align properties",
    "Used gap instead of margin for gutters between flex children",
    "Added flex-wrap: wrap for any row that contains items that could overflow on narrow screens",
    "Set min-width: 0 on flex children that contain truncated text or overflow content",
    "Verified DOM order matches visual order if using flex-direction: *-reverse"
  ],
  relatedEntryIds: ['bento-grids', 'spacing-systems', 'css-grid-layouts'],
  tags: ["flexbox", "alignment", "layout", "centering", "alignment broken", "layout not centering", "items not wrapping", "fix layout", "flex-direction", "justify-content", "align-items", "gap", "flex-wrap"],
  intentTags: ["fix-alignment", "improve-aesthetics"],
  content: `
# Flexbox Patterns

## The Mental Model

Flexbox has two axes. The **main axis** is the direction items flow (set by \`flex-direction\`). The **cross axis** is perpendicular to it.

- \`justify-content\` — distributes items along the **main** axis
- \`align-items\` — aligns items along the **cross** axis
- \`align-self\` — overrides \`align-items\` for a single item

This is the source of most flexbox confusion: people try \`justify-content: center\` to center items vertically in a row container and wonder why it doesn't work. It does center — but only along the horizontal main axis. You need \`align-items: center\` for vertical centering in a \`flex-direction: row\` container.

## The Five Essential Patterns

**1. Perfect centering**
\`\`\`css
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
\`\`\`

**2. Space-between nav (items to edges, rest distributed)**
\`\`\`css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
\`\`\`

**3. Equal-width columns**
\`\`\`css
.columns {
  display: flex;
  gap: 24px;
}
.column { flex: 1; } /* each column grows equally */
\`\`\`

**4. Wrapping tag/chip row**
\`\`\`css
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
\`\`\`

**5. Sticky footer (column layout)**
\`\`\`css
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main { flex: 1; } /* pushes footer to bottom */
\`\`\`

## The min-width: 0 Bug

The most common flex bug developers don't understand: flex items have \`min-width: auto\` by default, meaning they will never shrink below their content size. This breaks \`text-overflow: ellipsis\` and overflow handling.

\`\`\`css
/* broken: text overflows the flex item */
.card-title { overflow: hidden; text-overflow: ellipsis; }

/* fixed: allow the flex item to shrink below content size */
.card-title { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
\`\`\`

Any flex child that needs to truncate text, clip overflow, or display a scrollable inner container needs \`min-width: 0\` (or \`min-height: 0\` for column containers).

## flex-grow, flex-shrink, flex-basis

These three properties control how items respond to available space:

| Shorthand     | grow | shrink | basis | Behavior                         |
|---------------|------|--------|-------|----------------------------------|
| \`flex: 0 0 auto\` | 0    | 0      | auto  | Fixed size, never grows/shrinks  |
| \`flex: 1\`     | 1    | 1      | 0%    | Equal share of available space   |
| \`flex: 1 1 auto\`| 1    | 1      | auto  | Starts at content size, then grows |
| \`flex: none\`  | 0    | 0      | auto  | Alias for \`flex: 0 0 auto\`       |

Use \`flex: 1\` for equal columns. Use \`flex: 0 0 200px\` for a fixed-width sidebar. Use \`flex: 1 1 auto\` for form inputs that should expand to fill available row space.

## When to Stop and Use Grid

Reach for CSS Grid the moment you need:
- Items to align across both rows AND columns simultaneously
- Named layout areas (\`grid-template-areas\`)
- Items to span multiple rows or columns
- A layout where the container defines structure, not the items

Flexbox + Grid are not competing tools — flexbox is for component-level 1D layout, grid is for page/section-level 2D layout. Most good UIs use both.
`,
};
