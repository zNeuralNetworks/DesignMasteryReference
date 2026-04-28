import { ReferenceEntry } from '../../types';

export const filtering_sorting_ui: ReferenceEntry = {
  id: "filtering-sorting-ui",
  title: "Filtering & Sorting UI",
  domain: "data",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "marketplace", "data"],
  confidenceScore: 91,
  slug: "filtering-sorting-ui",
  complexity: "intermediate",
  description: "Patterns for letting users narrow and reorder data sets — filter chips, sidebar panels, inline column controls, and the UX of active filter state.",
  quickTake: "Show applied filters prominently so users know what's active. Make clearing filters easy — a single 'Clear all' plus per-filter remove. For many filters, a sidebar or popover; for few, inline chips. Sorting belongs on column headers in tables, not in a separate dropdown when columns are available.",
  whyItMatters: "Invisible filters are catastrophic — users think data is missing or broken when they don't see an active filter. Active filter state is also critical for sharing/bookmarking: filters must live in the URL. Filtering UX is one of the highest-impact improvements in any data-heavy product.",
  mechanism: [
    "Show active filters as removable chips/badges directly in the data view",
    "Put filter controls where users expect them: sidebar for complex multi-faceted filters, top bar for simple chip selection",
    "Encode filter state in URL params so filters persist on refresh and can be shared",
    "Column sorting: up/down arrow on column header — single click cycles none → asc → desc → none",
  ],
  whenToUse: [
    "Any list or table with more than 20 items across multiple dimensions",
    "Marketplace/discovery UIs where users need to narrow by category, price, rating",
    "Dashboards where date range and segment filters are primary interactions",
  ],
  whenNotToUse: [
    "Under 20 items: just show everything; filtering adds friction",
    "Single-dimension filtering: a search box is often cleaner than a filter panel",
  ],
  tradeoffs: [
    { pro: "Lets users find relevant items in large datasets without scrolling", con: "Complex filter UIs require significant design and engineering investment" },
    { pro: "URL-encoded filters enable sharing and bookmarking of filtered views", con: "URL filter state management adds complexity to routing and state management" },
  ],
  failureModes: [
    "Hidden active filters: user filtered yesterday, returns today and doesn't see the filter — thinks data is wrong",
    "No clear all: user must remove filters one at a time through 8 chips",
    "Filter doesn't update URL: sharing a filtered view shares an unfiltered URL",
    "Zero results with no explanation: user applied a filter that returns nothing, no guidance",
  ],
  alternatives: [
    { entryId: "search-patterns", condition: "Search when users know what specific item they want; filter when browsing a set" },
    { entryId: "data-table-patterns", condition: "Column sorting is a component of table design" },
  ],
  a11ySpecs: [
    "Filter chips: role='checkbox' with aria-checked state; keyboard activatable",
    "Announce filter changes to screen readers: aria-live='polite' on result count ('Showing 14 results')",
    "Sort buttons: aria-sort='ascending' | 'descending' | 'none' on column headers",
    "Clear all button: descriptive label, keyboard accessible",
  ],
  perfImpact: "medium",
  implementationNotes: [
    "URL encoding: use URL search params for filter state — ?status=active&category=design",
    "Debounce filter requests: 300ms delay before triggering API call on selection change",
    "Optimistic filter: update displayed items client-side immediately, sync with server",
    "Default sort: most recently updated descending is almost always the right default",
  ],
  checklist: [
    "Active filters visible as removable chips in the data view",
    "Clear all button available when any filter is active",
    "Filter state encoded in URL",
    "Zero results state explains what filters are active and offers clear path",
    "Column sort state shown visually (arrow indicator) and in aria-sort attribute",
  ],
  relatedEntryIds: ['data-table-patterns', 'search-patterns', 'pagination-patterns', 'empty-states'],
  tags: ["filtering", "sorting", "filter UI", "active filters", "column sort", "faceted search", "data filtering"],
  intentTags: ["reduce-cognitive-load", "improve-feedback"],
  contentStatus: 'hardened',
  content: `
# Filtering & Sorting UI

Filtering is only useful if users know what's active.

## Active Filter State

The #1 filtering mistake is hiding active filters. When users can't see what filters are applied, they think the data is wrong or missing.

**Always show active filters as chips in the data area:**

\`\`\`tsx
{activeFilters.length > 0 && (
  <div className="flex items-center gap-2 flex-wrap">
    <span className="text-sm text-slate-500">Filtered by:</span>
    {activeFilters.map(filter => (
      <button
        key={filter.id}
        onClick={() => removeFilter(filter.id)}
        className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-primary-50 text-primary-700 rounded-full"
      >
        {filter.label}
        <X size={10} />
      </button>
    ))}
    <button onClick={clearAllFilters} className="text-xs text-slate-400 hover:text-slate-600">
      Clear all
    </button>
  </div>
)}
\`\`\`

## Filter Placement

| Complexity | Filter count | Placement |
|---|---|---|
| Simple | 1–3 filter types | Inline chips above data |
| Moderate | 4–8 filter types | Popover or collapsible row |
| Complex | 9+ filter types | Sidebar panel |

## Column Sorting

Put sorting on column headers — not a separate dropdown:

\`\`\`tsx
<th
  onClick={() => toggleSort('name')}
  aria-sort={sortCol === 'name' ? sortDir : 'none'}
  className="cursor-pointer select-none"
>
  Name {sortCol === 'name' ? (sortDir === 'asc' ? '↑' : '↓') : '↕'}
</th>
\`\`\`

Three states: unsorted → ascending → descending → unsorted.

## URL State

\`\`\`typescript
// Encode filters in URL
const params = new URLSearchParams({
  status: activeStatus,
  sortBy: sortColumn,
  sortDir: sortDirection,
});
router.push(\`?\${params.toString()}\`);
\`\`\`

This enables sharing filtered views and bookmark support.
`,
};
