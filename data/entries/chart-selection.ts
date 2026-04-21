import { ReferenceEntry } from '../../types';

export const chart_selection: ReferenceEntry = {
  id: "chart-selection",
  title: "Chart Selection",
  domain: "data",
  format: "pattern",
  verdict: "recommended",
  useContext: ["dashboard", "saas", "data"],
  confidenceScore: 94,
  slug: "chart-selection",
  complexity: "intermediate",
  description: "Choosing the right chart type for the data relationship you're communicating — comparison, distribution, composition, trend, or relationship.",
  quickTake: "The most common chart error is using the wrong type: pie charts for comparisons, bar charts for continuous trends, line charts for categorical data. Chart selection should be driven by the data relationship you're communicating, not aesthetic preference. When in doubt: bar charts for comparison, line charts for trends.",
  whyItMatters: "The wrong chart type communicates the wrong relationship. A pie chart with 8 segments doesn't communicate proportion — it creates confusion. A bar chart for daily revenue over 2 years obscures the trend that a line chart would reveal. Chart choice is information design, not decoration.",
  mechanism: [
    "Ask: what relationship do I want to show? (comparison, trend, distribution, composition, correlation)",
    "Comparison: bar chart (categories) — horizontal for long labels, vertical for short",
    "Trend over time: line chart — connects data points to show direction",
    "Composition/proportion: stacked bar (multiple parts) or donut (single ratio, max 4 segments)",
    "Distribution: histogram or box plot — shows spread and outliers",
    "Correlation: scatter plot — shows relationship between two variables",
  ],
  whenToUse: [
    "Any data visualization decision — chart type should always be deliberate",
    "Dashboard design where multiple data types need different treatments",
  ],
  whenNotToUse: [
    "When a single number is clearer than a chart — a KPI card showing '94% uptime' needs no chart",
    "When data has only 2–3 values — just show the numbers",
  ],
  tradeoffs: [
    { pro: "Correct chart type makes patterns immediately apparent without explanation", con: "Complex chart types (bubble, Sankey, treemap) require user education to read" },
    { pro: "Familiar chart types have zero learning curve", con: "Over-relying on bar/line misses patterns that other types would reveal" },
  ],
  failureModes: [
    "Pie chart with >4 segments: human eye can't accurately compare non-adjacent slices",
    "3D charts: visual distortion makes values impossible to read accurately",
    "Truncated y-axis: cutting the y-axis at non-zero exaggerates differences",
    "Line chart with categorical x-axis: implies continuity between categories that doesn't exist",
  ],
  alternatives: [
    { entryId: "data-visualization-principles", condition: "Broader principles for all visualization decisions, not just chart type" },
    { entryId: "dashboard-layout-patterns", condition: "How to arrange multiple charts in a dashboard context" },
  ],
  a11ySpecs: [
    "All charts need text alternatives — either a data table or aria description of the key insight",
    "Don't rely on color alone to distinguish data series — use patterns, labels, or shapes",
    "Provide chart title and description in semantic HTML, not just as visual labels",
  ],
  perfImpact: "medium",
  implementationNotes: [
    "Recharts (React), Chart.js, or D3 for custom charts — Recharts for standard types, D3 for custom",
    "Truncated y-axis: never start at non-zero for bar charts (misleading); acceptable for line charts showing small variation",
    "Responsive charts: set width='100%' height='auto' with aspect ratio container",
    "Color scales: use colorblind-safe palettes — Viridis, Okabe-Ito, or ColorBrewer",
  ],
  checklist: [
    "Chart type matches the data relationship being communicated",
    "No pie charts with >4 segments",
    "No 3D chart types",
    "Y-axis starts at zero for bar/column charts",
    "Color is not the sole differentiator between data series",
  ],
  relatedEntryIds: ['data-visualization-principles', 'dashboard-layout-patterns', 'number-formatting', 'data-table-patterns'],
  tags: ["chart selection", "data visualization", "chart types", "bar chart", "line chart", "pie chart", "dashboard charts"],
  intentTags: ["reduce-cognitive-load", "improve-readability"],
  content: `
# Chart Selection

The right chart makes patterns obvious. The wrong chart hides them.

## Decision Framework

**What relationship are you showing?**

| Relationship | Chart type | Notes |
|---|---|---|
| Comparison across categories | Bar / Column | Horizontal for long labels |
| Trend over time | Line | Area chart if showing volume |
| Part-to-whole composition | Stacked bar or Donut | Max 4 segments for donut |
| Distribution / spread | Histogram or Box plot | — |
| Correlation between variables | Scatter plot | — |
| Single value vs. target | Gauge or Big number | No chart needed for single values |

## The Common Mistakes

### Pie Charts with Many Segments
Human eyes can't accurately compare non-adjacent pie slices. Anything beyond 4 segments should be a bar chart.

Before: pie chart with 7 revenue categories.
After: horizontal bar chart, sorted by value.

### Line Charts for Categorical Data
Line charts imply continuity — that values exist between the plotted points. This is only true for time series and continuous data.

Wrong: line chart connecting Jan, Feb, Mar, Apr revenue (implies February revenue exists between January and February).
Actually fine — months are ordered categories.

Wrong: line chart connecting "Product A", "Product B", "Product C" — no implied continuity.
Right: bar chart.

### Truncated Y-Axis
Starting the y-axis at non-zero on a bar chart makes small differences look enormous.

\`\`\`
Revenue    vs.    Revenue
 $105              $0
 $103          $105
 $101          $103
  ↑ tiny         $101
  differences    ↑ still small
  look huge      differences
\`\`\`

## When No Chart Is Best

Sometimes a KPI card is better than any chart:

\`\`\`
  ┌─────────────┐
  │  94.7%      │
  │  Uptime     │
  │  ↑ +0.3%    │
  └─────────────┘
\`\`\`

If there are fewer than 3 data points, skip the chart.
`,
};
