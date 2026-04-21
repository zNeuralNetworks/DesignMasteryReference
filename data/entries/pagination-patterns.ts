import { ReferenceEntry } from '../../types';

export const pagination_patterns: ReferenceEntry = {
  id: "pagination-patterns",
  title: "Pagination Patterns",
  domain: "components",
  format: "pattern",
  verdict: "conditional",
  useContext: ["saas", "dashboard", "marketplace", "content"],
  confidenceScore: 89,
  slug: "pagination-patterns",
  complexity: "beginner",
  description: "Strategies for navigating large datasets — classic pagination, infinite scroll, load more, and virtual scrolling — and when to choose each.",
  quickTake: "Pagination, infinite scroll, and load more aren't interchangeable. Use classic pagination for search results and data tables where users need to navigate to specific pages. Use load more for content feeds. Use infinite scroll only for truly endless consumption (social, media). Infinite scroll is wrong for most productivity apps.",
  whyItMatters: "The wrong pagination pattern breaks core tasks. Infinite scroll makes it impossible to return to a position. Classic pagination breaks flow for content consumption. The choice affects whether users can find what they're looking for — it's not just an aesthetic decision.",
  mechanism: [
    "Classic pagination: numbered pages with prev/next — best for known result sets with target positions",
    "Load more: append on demand — best for content feeds where position matters but bottom is unknown",
    "Infinite scroll: auto-append on scroll — best for mindless consumption, worst for task-oriented browsing",
    "Virtual scroll: render visible items only — a performance technique, not a UX pattern",
  ],
  whenToUse: [
    "Classic pagination: search results, data tables, any case where users need to jump to page N",
    "Load more: activity feeds, notification lists, content discovery where users know what they're looking for",
    "Infinite scroll: social media feeds, photo galleries, any purely consumption-oriented experience",
  ],
  whenNotToUse: [
    "Infinite scroll: search results (can't return to position), dashboards, task-oriented lists",
    "Classic pagination: user-generated feeds where 'page 3' has no meaning",
  ],
  tradeoffs: [
    { pro: "Classic pagination: footer is always accessible; users can bookmark/share page N", con: "Classic pagination: clicking to page 2 breaks flow for sequential browsing" },
    { pro: "Infinite scroll: frictionless consumption; no interruption", con: "Infinite scroll: footer unreachable; no 'go back to where I was'" },
  ],
  failureModes: [
    "Infinite scroll on search results: user can't return to item 47 after navigating away",
    "Classic pagination on mobile feed: tapping 'next page' interrupts reading flow",
    "No page count: users don't know if they're on page 2 of 3 or page 2 of 200",
    "Page reload resets to page 1: URL doesn't preserve page state",
  ],
  alternatives: [
    { entryId: "virtualization", condition: "Virtual scroll renders thousands of items efficiently without needing pagination" },
    { entryId: "data-table-patterns", condition: "Data tables have specific pagination requirements distinct from content feeds" },
  ],
  a11ySpecs: [
    "Pagination nav must use <nav> with aria-label='Pagination'",
    "Current page: aria-current='page' on active page number",
    "Previous/Next: must be clearly labeled, not just < > symbols",
    "Infinite scroll: provide a 'Load more' button fallback for keyboard users who can't trigger scroll",
  ],
  perfImpact: "medium",
  implementationNotes: [
    "Preserve page state in URL: /results?page=3 — enables back button and sharing",
    "Show total count when known: 'Showing 41–60 of 347 results'",
    "Cursor-based pagination (not offset) for real-time data — prevents duplicate/missing items during scroll",
    "Prefetch next page on page N hover/focus for instant transitions",
  ],
  checklist: [
    "Pagination pattern matches the use case (not default infinite scroll everywhere)",
    "Current page/position preserved in URL",
    "Total count displayed when available",
    "Keyboard navigable with aria-current on active page",
    "Load more/infinite scroll has keyboard fallback",
  ],
  relatedEntryIds: ['data-table-patterns', 'virtualization', 'skeleton-screens', 'empty-states'],
  tags: ["pagination", "infinite scroll", "load more", "page navigation", "data table pagination", "large lists"],
  intentTags: ["reduce-cognitive-load", "improve-performance"],
  content: `
# Pagination Patterns

Four patterns for large datasets — each solves a different problem.

## Decision Framework

| Pattern | Best for | Avoid when |
|---------|----------|------------|
| Classic pagination | Search results, data tables, findable-position content | Content feeds, discovery browsing |
| Load more | Activity feeds, notifications, soft-ended lists | Real-time data (missed items at insert points) |
| Infinite scroll | Social feeds, galleries, consumption experiences | Task apps, search, anything with a footer |
| Virtual scroll | Performance optimization for 10k+ items | (Pure performance technique, not UX pattern) |

## Classic Pagination

\`\`\`
[← Prev]  1  2  [3]  4  5  ...  24  [Next →]
                  Showing 41–60 of 347 results
\`\`\`

Rules:
- Show current page, 2 neighbors, first and last with ellipsis for long ranges
- Always show total count when known
- Page state lives in the URL

## Load More

Append items on explicit user action. Preserves position, doesn't auto-trigger.

\`\`\`tsx
<button onClick={loadNextPage} disabled={isLoading}>
  {isLoading ? 'Loading...' : \`Load more (\${remaining} remaining)\`}
</button>
\`\`\`

## Infinite Scroll with Keyboard Fallback

Auto-trigger on scroll, but always provide a "Load more" button for keyboard users and screen readers — they can't trigger scroll events.
`,
};
