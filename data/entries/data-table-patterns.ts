import { ReferenceEntry } from '../../types';

export const data_table_patterns: ReferenceEntry = {
  id: "data-table-patterns",
  title: "Data Table Patterns",
  domain: "data",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "devtools"],
  confidenceScore: 94,
  slug: "data-table-patterns",
  complexity: "advanced",
  description: "Tables are the primary surface for B2B data — sorting, filtering, selection, and density decisions have compounding UX consequences.",
  quickTake: "Well-designed tables make complex data scannable and actionable. Poorly designed tables hide critical information and create frustration for users who spend hours working with them.",
  whyItMatters: "B2B users spend significant time in tables (analytics dashboards, customer lists, transaction histories). A 10% improvement in table UX can save thousands of hours of user time annually.",
  mechanism: [
    "Column visibility and ordering: Users need to scan horizontally and often want to hide irrelevant columns or reorder by frequency of use.",
    "Sorting and filtering: Data must be sortable by multiple columns and filterable without page reloads (client-side for <10k rows, server-side for larger datasets).",
    "Row selection and bulk actions: Users often need to perform actions on multiple rows (delete, export, tag, etc.).",
    "Density and scrolling: Dense tables are harder to read but show more data; sparse tables are readable but require scrolling.",
    "Sticky headers: When scrolling vertically, headers must remain visible so users know what each column is."
  ],
  whenToUse: [
    "Displaying lists of structured data (users, transactions, inventory, etc.)",
    "Analytics dashboards with multiple dimensions and metrics",
    "Administrative interfaces where bulk actions are common"
  ],
  whenNotToUse: [
    "Single records or unstructured data — use cards instead.",
    "Mobile-first interfaces with < 3 columns — consider a different layout.",
    "Data where exploration (filtering/sorting) is not important — consider a summary view."
  ],
  tradeoffs: [
    { pro: "Compact view of many records", con: "Complex UI with many interactive elements" },
    { pro: "Fast scanning and comparison", con: "Mobile experience is poor without responsive redesign" },
    { pro: "Powerful (sorting, filtering, selection)", con: "Steep learning curve for users unfamiliar with dense UIs" }
  ],
  failureModes: [
    "Fixed column widths that truncate important data (e.g., email, URLs).",
    "Non-sticky headers: Users scroll down and lose context of which column is which.",
    "No sorting: Users must manually scan all rows to find relevant data.",
    "Row selection without clear visual feedback: Users perform bulk actions on the wrong rows.",
    "Cramped rows with no padding: Text merges together; hard to distinguish between rows.",
    "Unresizable columns: Data can't fit; users are stuck with poor column widths.",
    "No pagination or virtualization: Loading 10k rows at once creates performance issues and cognitive overload."
  ],
  alternatives: [
    { entryId: "virtualization", condition: "Use to render large datasets efficiently without lag" },
    { entryId: "progressive-disclosure", condition: "Hide secondary columns and show only on-demand" },
    { entryId: "skeleton-screens", condition: "Show loading state while table data is fetching" },
    { entryId: "empty-states", condition: "Handle cases where no data exists (zero results, filters too narrow)" }
  ],
  a11ySpecs: [
    "Use semantic <table>, <thead>, <tbody>, <tr>, <th>, <td> markup.",
    "Header cells must have <th> with scope='col' or scope='row' attributes.",
    "Sortable columns must use <button> inside <th>, not just plain text.",
    "Row selection checkboxes must have clear labels (not just a visual state).",
    "Use aria-sort='ascending' or 'descending' on sorted columns.",
    "Announce row selection count and provide a 'Select All' button with aria-label."
  ],
  perfImpact: "medium",
  implementationNotes: [
    "For < 1k rows: Client-side sorting and filtering is fine (everything in memory).",
    "For 1k–10k rows: Use pagination (50–100 rows per page) and server-side filtering.",
    "For > 10k rows: Use virtualization (e.g., react-window) to render only visible rows.",
    "Sticky headers: position: sticky; top: 0; z-index: 10; (adjust z-index as needed).",
    "Column resizing: Allow users to drag column borders to resize; persist preferences in localStorage.",
    "Row height: Use at least 40px for touch targets; 32px minimum for mouse-only devices.",
    "Highlight on hover: Add a subtle background on row hover (e.g., bg-slate-50) so users know which row they're about to click.",
    "Checkbox in first column: Standard pattern; left-align, not right-align."
  ],
  checklist: [
    "Headers are sticky and visible when scrolling",
    "Columns are sortable (visual indicator + actually sorts data)",
    "Columns are filterable without page reload",
    "Row selection is supported with bulk action buttons",
    "Table works with keyboard navigation (Tab, arrow keys, Enter)",
    "Performance is acceptable for the dataset size (no lag when scrolling)"
  ],
  relatedEntryIds: ['virtualization', 'progressive-disclosure', 'skeleton-screens', 'empty-states'],
  interactiveComponent: "VirtualizationDemo",
  tags: ["Interaction","B2B","Data Dense","tables","dashboard","sorting and filtering","fix layout","dashboard looks cluttered","bulk actions"],
  contentStatus: 'hardened',
  content: `

# Data Table Patterns

Tables are the workhorse UI for B2B applications. Users spend hours in tables scanning, filtering, sorting, and bulk-editing data.

A few missing features can turn a productive table into a frustrating one.

## Core Features

### Sorting
Every column should be sortable. The current sort column must show a visual indicator (↑ up, ↓ down, ↨ neutral). Clicking cycles through: ascending → descending → unsorted.

### Filtering
Provide filters above the table or in a sidebar. Filters should work immediately without page reload (client-side for small datasets, server-side for large ones).

### Row Selection
Checkboxes in the first column. Include a "Select All" checkbox in the header. Bulk action buttons appear when rows are selected. Show count: "3 rows selected" + "Delete" button.

### Sticky Headers
When users scroll vertically, column headers must stay visible. Otherwise, they lose context of which column is which.

### Responsive Design
Tables are difficult on mobile. Options:
- Hide low-priority columns on mobile; show only essential data + a "details" expand button.
- Horizontal scroll with sticky first column (order ID always visible).
- Card view on mobile; table on desktop (see progressive disclosure).

### Density
Offer compact (28–32px rows) and comfortable (40px+ rows) viewing modes. Dense tables fit more data but are harder to scan; comfortable tables are readable but require scrolling.

## Performance

| Dataset Size | Strategy | Tool |
|---|---|---|
| < 1k rows | Client-side sorting/filtering | Just JavaScript |
| 1k–10k | Pagination (50–100 rows/page) + Server-side filtering | Pagination component |
| > 10k | Virtualization (render only visible rows) | react-window or react-virtualized |

## Common Mistakes

1. **Fixed column widths**: Text gets truncated; users can't read the data.
2. **No sticky headers**: Users scroll down and forget what each column means.
3. **No sorting**: Users must manually scan to find what they're looking for.
4. **Loading all rows at once**: 50k rows in the DOM = browser freeze.
5. **Unclear row selection**: Users don't know which rows are selected; perform actions on wrong data.
`,
  intentTags: ["increase-density", "fix-alignment"],
};
