import { ReferenceEntry } from '../../types';

export const search_patterns: ReferenceEntry = {
  id: "search-patterns",
  title: "Search UX Patterns",
  domain: "components",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "marketplace", "content", "consumer"],
  confidenceScore: 92,
  slug: "search-patterns",
  complexity: "intermediate",
  description: "Designing effective search experiences — input affordances, autocomplete, results display, empty states, and the difference between search and filter.",
  quickTake: "Search and filter solve different problems: search finds unknown items; filter narrows known sets. Most apps need both. Good search shows results as-you-type (300ms debounce), provides instant feedback, and handles zero results gracefully with suggestions rather than a dead end.",
  whyItMatters: "Broken search is the most frustrating UX failure mode in content-heavy products. Users who can't find what they're looking for leave. A zero-result state with no recovery path is a dead end. Search that works well is one of the highest-retention features in any product.",
  mechanism: [
    "Debounce input at 300ms — triggers search on pause, not every keystroke",
    "Show results inline (autocomplete) for navigational search; full results page for complex queries",
    "Always handle zero results: show 'no results for X', suggest alternatives or clear query",
    "Search across multiple content types: show categorized results (People / Documents / Actions)",
  ],
  whenToUse: [
    "Apps with 20+ items that users need to find by name",
    "Any navigation pattern where Cmd+K command palette or global search improves speed",
    "Content discovery where browsing alone isn't sufficient",
  ],
  whenNotToUse: [
    "Under 20 items — just show all of them; search adds friction not value",
    "As the only navigation method — search supplements, doesn't replace, browsable navigation",
  ],
  tradeoffs: [
    { pro: "Fastest path to specific items for expert users who know what they want", con: "New users don't know what to search for — requires browsability alongside search" },
    { pro: "Scales to unlimited content — interface doesn't change as database grows", con: "Poor search relevance destroys trust — users need to find what they expect" },
  ],
  failureModes: [
    "Zero results with no recovery: 'No results found' with no suggestions or clear button",
    "No debounce: searching on every keystroke causes flickering and excess API calls",
    "Search icon only, no visible input: users don't realize search is available",
    "Case/typo sensitivity: exact-match only search fails on small spelling variations",
  ],
  alternatives: [
    { entryId: "command-palettes", condition: "Cmd+K command palette combines search with actions for power users" },
    { entryId: "filtering-sorting-ui", condition: "When users need to narrow a visible set rather than find specific items" },
  ],
  a11ySpecs: [
    "Search input: role='search' on the wrapping form or landmark",
    "Results list: role='listbox' with aria-live='polite' to announce result count changes",
    "Announce result count: 'Showing 12 results for ...' — announced to screen readers",
    "Clear button: aria-label='Clear search' — 'X' alone isn't descriptive",
  ],
  perfImpact: "medium",
  implementationNotes: [
    "Client-side search: Fuse.js for fuzzy matching up to ~5000 items; very fast, no server needed",
    "Server search: debounce + AbortController to cancel in-flight requests on new keystroke",
    "Highlight matched text in results with <mark> or span.search-highlight",
    "Recent searches: localStorage for last 5 queries — reduces friction on repeat searches",
  ],
  checklist: [
    "Search debounced at 300ms",
    "Zero results state has recovery options (clear, suggestions, or help link)",
    "Results count announced to screen readers",
    "Search input visible, not icon-only, above the fold",
    "Clear button accessible with aria-label",
  ],
  relatedEntryIds: ['command-palettes', 'filtering-sorting-ui', 'empty-states', 'dropdown-select'],
  tags: ["search UX", "search patterns", "autocomplete", "search results", "zero results state", "search design"],
  intentTags: ["reduce-cognitive-load", "improve-feedback"],
  contentStatus: 'hardened',
  content: `
# Search UX Patterns

Search and filter are different tools for different tasks. Know which one your users need.

## Search vs. Filter

**Search**: User knows what they want but doesn't know where it is. "Find that invoice from March."

**Filter**: User sees a set and wants to narrow it. "Show only invoices from Q1 over $5k."

Most apps need both, but they're different interactions with different UI requirements.

## Search Input States

1. **Empty** — placeholder text, optional recent searches
2. **Typing** — debounced results appearing below (300ms delay)
3. **Results** — list with highlighted matches, count announcement
4. **No results** — clear recovery path, not a dead end
5. **Loading** — inline spinner or skeleton

## Zero Results: Don't Dead-End the User

Bad:
> No results found.

Good:
> No results for "invooice" — did you mean "invoice"?
> Or browse all documents →

Always offer: correct the query, clear the query, or browse alternatives.

## Autocomplete vs. Full Results Page

Use **inline autocomplete** when:
- Search is navigational (user is going to an item)
- Top 5 results are usually sufficient
- Speed is critical (app navigation, command palette)

Use a **full results page** when:
- Results need sorting/filtering
- Complex result cards with multiple data points
- Users need to compare results

## Debouncing

\`\`\`typescript
const debouncedSearch = useMemo(
  () => debounce((query: string) => performSearch(query), 300),
  []
);
\`\`\`

300ms is the sweet spot — responsive without triggering on every character.
`,
};
