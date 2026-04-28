import { ReferenceEntry } from '../../types';

export const css_grid_layouts: ReferenceEntry = {
  id: "css-grid-layouts",
  title: "CSS Grid Layouts",
  domain: "layout",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile", "devtools", "content", "portfolio", "marketing", "marketplace", "consumer", "productivity", "systems"],
  confidenceScore: 95,
  slug: "css-grid-layouts",
  complexity: "intermediate",
  description: "CSS Grid is the native two-dimensional layout system for building column/row-based UIs with precise placement and responsive flexibility.",
  quickTake: "CSS Grid excels at layouts where the container defines the structure — dashboard shells, page templates, card grids, and form matrices. Unlike flexbox (which is item-driven), grid is container-driven: you declare the columns and rows, then items flow into or are placed within that structure. The fr unit and auto-fill/auto-fit make grids genuinely responsive without media queries for most cases.",
  whyItMatters: "Before CSS Grid, responsive multi-column layouts required JavaScript, float hacks, or deeply nested flexbox. Grid makes previously complex layouts trivial and explicit — a 3-column dashboard with a spanning header is 5 lines of CSS. More importantly, it separates layout concerns from component concerns: the grid defines space, components fill it.",
  mechanism: [
    "Define columns with grid-template-columns and rows with grid-template-rows; use fr units to allocate proportional space from remaining room after fixed sizes are subtracted",
    "Use repeat() to avoid repetition: repeat(3, 1fr) = three equal columns; repeat(auto-fill, minmax(240px, 1fr)) = responsive columns that wrap automatically",
    "Place items explicitly with grid-column and grid-row shorthand (e.g. grid-column: 1 / 3 to span from line 1 to line 3), or use grid-template-areas for named placement",
    "Use gap (row-gap / column-gap) for gutters — no margin math required; gutters only appear between tracks, never on outer edges"
  ],
  whenToUse: [
    "Page-level layouts with sidebars, headers, and main content areas that need to be defined once and remain stable",
    "Card grids and thumbnail galleries where columns should be responsive and items should be equal-sized",
    "Dashboard layouts where panels span multiple columns or rows",
    "Form layouts where labels and inputs need to align in a two-column matrix",
    "Any layout where items need to align across both rows and columns simultaneously"
  ],
  whenNotToUse: [
    "Single-axis component layouts (a button row, a nav bar, a flex column of items) — flexbox is simpler and more appropriate",
    "Layouts where the number of columns is entirely determined by item content rather than a declared structure"
  ],
  tradeoffs: [
    { pro: "auto-fill with minmax() creates fully responsive grids with zero media queries — the browser calculates breakpoints based on content", con: "Explicit grid placement (grid-column / grid-row) becomes fragile if the grid structure changes — items may end up in wrong cells" },
    { pro: "grid-template-areas gives layouts a readable text map — junior devs can understand the structure instantly", con: "Grid areas must be rectangular — L-shaped or irregular layouts require subgrid or nested grids" },
    { pro: "fr units handle remaining space distribution more intuitively than flex percentages", con: "fr units interact with min-content sizing in non-obvious ways — a 1fr column containing a very wide word may be wider than expected" }
  ],
  failureModes: [
    "Using grid-template-columns: repeat(auto-fill, 1fr) without minmax() — the 1fr without a minimum means columns can collapse to 0px",
    "Forgetting that grid-template-areas definitions must form complete rectangles — partial or L-shaped areas cause the entire template to be invalid",
    "Mixing explicit item placement with auto-placement in the same grid — auto-placed items backfill the earliest available cell, which can cause unexpected ordering",
    "Not setting grid-auto-rows or grid-auto-columns when items flow into implicit tracks — implicit tracks default to auto height which can cause unequal row heights"
  ],
  alternatives: [
    { entryId: "flexbox-patterns", condition: "Use when layout is one-dimensional (items flow in a single row or column)" },
    { entryId: "bento-grids", condition: "Use when the grid IS the visual design — card-based dashboards with intentional irregular spanning" }
  ],
  a11ySpecs: [
    "Grid placement changes visual order without changing DOM order — screen readers follow DOM order, so ensure logical reading sequence is preserved in the source",
    "Avoid using grid-template-areas to reorder content that has a meaningful sequence (steps, numbered sections)"
  ],
  perfImpact: "low",
  implementationNotes: [
    "The most useful responsive pattern: grid-template-columns: repeat(auto-fill, minmax(MIN, 1fr)) where MIN is the smallest acceptable column width — no media queries needed",
    "subgrid (grid-template-columns: subgrid) lets nested grids participate in the parent's track definitions — solves card-grid alignment without JavaScript",
    "For named areas: every row in grid-template-areas must have the same number of cells; use a period (.) for empty cells",
    "Tailwind grid utilities: grid-cols-3, col-span-2, gap-4, grid-rows-2, row-span-2 — combine with md: and lg: prefixes for breakpoint-specific structures"
  ],
  checklist: [
    "Used fr units for flexible columns rather than percentages (which ignore gap)",
    "Used minmax() inside repeat() for responsive grids, not a bare fr value",
    "Verified DOM order matches visual reading order when using explicit grid placement",
    "Used gap for gutters instead of margin on grid items",
    "Tested that implicit track sizing (rows created automatically) doesn't cause unequal heights"
  ],
  relatedEntryIds: ['bento-grids', 'flexbox-patterns', 'spacing-systems'],
  tags: ["css grid", "grid layout", "columns", "responsive", "fr units", "fix layout", "grid layout", "dashboard looks cluttered", "responsive columns", "auto-fill", "auto-fit", "template areas"],
  intentTags: ["fix-alignment", "improve-aesthetics"],
  contentStatus: 'flagship',
  content: `
# CSS Grid Layouts

## Core Concepts

Grid introduces two primitives: **tracks** (columns and rows) and **lines** (the numbered or named boundaries between tracks). Items are placed into cells formed by the intersection of column and row tracks.

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: 240px 1fr; /* fixed sidebar + fluid content */
  grid-template-rows: 60px 1fr 48px; /* header + main + footer */
  gap: 0; /* no gap for a full-page shell layout */
  min-height: 100vh;
}
\`\`\`

The fr unit means "fraction of remaining space after fixed sizes are subtracted." If a container is 1000px wide, \`240px 1fr\` gives 240px to the first column and 760px to the second.

## The Responsive Grid Pattern

The most powerful grid pattern: responsive wrapping columns with no media queries.

\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
\`\`\`

- \`auto-fill\`: create as many columns as can fit
- \`minmax(280px, 1fr)\`: each column is at least 280px, expands equally to fill space
- At 600px viewport: 2 columns. At 900px: 3 columns. At 1200px: 4 columns. No media queries.

**auto-fill vs auto-fit**: \`auto-fill\` creates empty tracks to fill the grid container; \`auto-fit\` collapses empty tracks to 0. For grids with few items that should span full width, use \`auto-fit\`.

## Named Template Areas

For page-level layouts, \`grid-template-areas\` produces self-documenting CSS:

\`\`\`css
.layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 56px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  height: 100vh;
}

.sidebar { grid-area: sidebar; }
.header  { grid-area: header; }
.main    { grid-area: main; }
\`\`\`

The ASCII art string is the actual layout — instantly readable. Rules: areas must be rectangular, every row must have the same number of cells, use \`.\` for empty cells.

## Explicit Item Placement and Spanning

Items can explicitly span multiple tracks:

\`\`\`css
.featured-card {
  grid-column: 1 / 3;   /* spans columns 1–2 (line 1 to line 3) */
  grid-row: 1 / 2;
}

/* Shorthand with span keyword */
.wide-card { grid-column: span 2; }
.tall-panel { grid-row: span 3; }
\`\`\`

Mix explicit and auto-placed items carefully — auto-placed items fill the earliest available cell, which can produce unexpected gaps or ordering when some items are explicitly placed.

## Dashboard Layout Recipe

A common SaaS dashboard grid combining named areas with a responsive content zone:

\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 56px 1fr;
  grid-template-areas: "nav header" "nav main";
  height: 100vh;
}

.main-content {
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  padding: 24px;
  align-content: start;
  overflow-y: auto;
}
\`\`\`

The outer grid handles the shell (sidebar + header). The inner grid handles the responsive card layout. Each layer stays simple.
`,
};
