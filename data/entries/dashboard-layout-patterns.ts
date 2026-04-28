import { ReferenceEntry } from '../../types';

export const dashboard_layout_patterns: ReferenceEntry = {
  id: "dashboard-layout-patterns",
  title: "Dashboard Layout Patterns",
  domain: "data",
  format: "pattern",
  verdict: "recommended",
  useContext: ["dashboard", "saas", "data"],
  confidenceScore: 92,
  slug: "dashboard-layout-patterns",
  complexity: "intermediate",
  description: "Structural patterns for organizing KPIs, charts, tables, and filters in data dashboards — information hierarchy, layout grids, and common dashboard archetypes.",
  quickTake: "Dashboards fail when they show everything equally. The best dashboards have one primary question they answer immediately, with supporting data available on request. Use a Z-reading pattern: KPI summary row at top, primary chart large center, supporting data smaller below.",
  whyItMatters: "Dashboard design is where information architecture meets visual design. A dashboard that buries the most important metric below the fold, or gives equal visual weight to 12 different charts, fails its purpose. Users need to answer their core question in the first 5 seconds.",
  mechanism: [
    "Define the primary question the dashboard answers — that answer must be the largest, most prominent element",
    "Group by decision type: monitoring (status), analysis (trends), operational (tasks)",
    "KPI summary row: 3–5 large numbers at top — the '5-second glance' answer",
    "Primary chart: 50–60% of the viewport width — the main insight",
  ],
  whenToUse: [
    "Business intelligence dashboards with multiple data dimensions",
    "Operations/monitoring dashboards where status is the primary question",
    "Analytics views where trends drive decisions",
  ],
  whenNotToUse: [
    "Single-metric displays — just show the number",
    "Report views meant for printing or sharing — different layout requirements",
  ],
  tradeoffs: [
    { pro: "Clear layout hierarchy makes the most important insight immediately obvious", con: "Requires knowing your users' primary question — generic 'show everything' dashboards are easier to design but less useful" },
    { pro: "Grid-based layouts allow flexible customization by users", con: "User-customizable dashboards require significant engineering for grid persistence and drag-to-rearrange" },
  ],
  failureModes: [
    "Equal-sized charts: 12 identical-sized charts with no visual hierarchy — user doesn't know what matters",
    "Metric overload: 20+ KPI numbers — too many to scan, key numbers get lost",
    "No time context: showing revenue numbers without comparison period (vs. last month, vs. target)",
    "Dense without density controls: no way to switch between summary and detailed views",
  ],
  alternatives: [
    { entryId: "bento-grids", condition: "Bento grid patterns for asymmetric, editorial-style data layouts" },
    { entryId: "data-table-patterns", condition: "When tabular data is the primary dashboard component" },
  ],
  a11ySpecs: [
    "Charts need text alternatives: either a summary data table or aria description of key insight",
    "Color coding in dashboards: always pair with text labels or patterns",
    "Ensure dashboard is navigable by keyboard: skip to main content, logical focus order",
  ],
  perfImpact: "medium",
  implementationNotes: [
    "CSS Grid for dashboard layout: named areas provide semantic layout with easy responsive switching",
    "KPI cards: fixed height (80–100px) to ensure alignment in the summary row",
    "Date range picker in top-right — universal dashboard convention users expect",
    "Skeleton loading per-card: load cards independently rather than blocking entire dashboard",
  ],
  checklist: [
    "Primary question answered in top-left area within first viewport",
    "KPI summary row with 3–5 key numbers at top",
    "Primary chart significantly larger than supporting charts",
    "Date range filter visible and accessible without scrolling",
    "Loading state per-card (not page-level spinner)",
  ],
  relatedEntryIds: ['chart-selection', 'data-table-patterns', 'filtering-sorting-ui', 'bento-grids', 'skeleton-screens'],
  tags: ["dashboard", "dashboard layout", "KPI", "data dashboard", "analytics", "B2B dashboard", "dashboard design"],
  intentTags: ["reduce-cognitive-load", "improve-readability"],
  contentStatus: 'hardened',
  content: `
# Dashboard Layout Patterns

A dashboard is an answer machine. Design it around the question it answers.

## The Hierarchy Rule

Every dashboard has one primary metric or question. That answer must be:
- Largest element on the page
- In the top-left or center
- Visible without scrolling

Everything else is supporting context.

## The Standard Layout

\`\`\`
┌─────────────────────────────────────────────────────────┐
│ [Filters: Date range, Segment]              [Export]     │
├──────────┬──────────┬──────────┬──────────────────────┤
│  Revenue │  Users   │  Conv.   │   Trend (7-day)       │
│  $142k   │  4,821   │  3.2%    │   ▂▃▅▄▇▆█             │
│  ↑12%    │  ↑5%     │  ↓0.3%   │                       │
├──────────┴──────────┴──────────┤                        │
│          Primary Chart          │   Secondary Chart     │
│          (60% width)            │   (38% width)         │
│                                 │                        │
├─────────────────────────────────┴────────────────────────┤
│                    Data Table                             │
└───────────────────────────────────────────────────────────┘
\`\`\`

## KPI Summary Row

3–5 numbers. Large text (28–36px). Each card:
- Primary metric (big)
- Label (small, muted)
- Trend vs. comparison period (green/red with arrow)
- Context: absolute or percentage change

## Chart Size Hierarchy

| Priority | Width | Height |
|----------|-------|--------|
| Primary | 60–70% | 280–320px |
| Secondary | 30–38% | 240–280px |
| Tertiary | 45–50% | 180–220px |

Resist making all charts the same size. Equal sizing removes hierarchy.

## Date Range Context

Every metric must answer: *compared to what?*

Revenue $142k needs: *vs. $127k last period (+12%)*

No comparison = no meaning.
`,
};
