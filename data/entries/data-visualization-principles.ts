import { ReferenceEntry } from '../../types';

export const data_visualization_principles: ReferenceEntry = {
  id: "data-visualization-principles",
  title: "Data Visualization Principles",
  domain: "data",
  format: "principle",
  verdict: "recommended",
  useContext: ["dashboard", "saas", "data", "content"],
  confidenceScore: 93,
  slug: "data-visualization-principles",
  complexity: "intermediate",
  description: "Fundamental principles for presenting data clearly — data-ink ratio, chart junk, honest scales, and the difference between charts that reveal and charts that obscure.",
  quickTake: "Every element in a chart should carry data. Decorative grid lines, 3D effects, gradient fills, and chart borders are all chart junk — they consume attention without adding information. Remove everything that doesn't serve comprehension. The cleaner the chart, the faster the insight.",
  whyItMatters: "Edward Tufte's research showed that chart junk actively harms comprehension — readers spend cognitive effort processing visual noise instead of data. A clean chart with the right chart type communicates its insight faster and with less reader effort than a decorated chart with the same data.",
  mechanism: [
    "Data-ink ratio: maximize the proportion of ink/pixels devoted to actual data vs. decoration",
    "Remove: chart borders, background fills, heavy gridlines, unnecessary tick marks, 3D effects",
    "Keep: light gridlines (can help read values), axes, data labels when needed, legend only if multiple series",
    "Lie factor: visual representation of change must match actual data change — 2× value = 2× bar height",
  ],
  whenToUse: [
    "All data visualization — these are foundational principles, not advanced techniques",
    "Chart audit: review existing visualizations against these principles",
  ],
  whenNotToUse: [
    "When decoration serves a specific purpose (dense styling for brand consistency in marketing reports)",
    "When users are unfamiliar with sparse charts and need visual guidance",
  ],
  tradeoffs: [
    { pro: "Sparse charts communicate insights faster with less cognitive effort", con: "Extremely minimal charts can feel unpolished to users expecting visual richness" },
    { pro: "Removing chart junk reveals patterns obscured by decoration", con: "Gridlines and borders can actually aid reading for complex multi-series charts" },
  ],
  failureModes: [
    "Truncated scale: y-axis starting at 90% makes a 1% change look like 50% — dishonest",
    "Area chart from non-zero baseline: area implies magnitude from zero — must start at zero",
    "Dual y-axis: two y-axes with different scales can be manipulated to imply any correlation",
    "Overloaded chart: 12 lines on one line chart — impossible to read, should be small multiples",
  ],
  alternatives: [
    { entryId: "chart-selection", condition: "Choose the right chart type before applying visualization principles" },
    { entryId: "dashboard-layout-patterns", condition: "Layout principles for charts in dashboard context" },
  ],
  a11ySpecs: [
    "All charts must have a text summary or data table alternative",
    "Color scales: use colorblind-accessible palettes (Okabe-Ito, Viridis)",
    "Focus on contrast: data series must be distinguishable without relying on color alone",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Recharts: disable cartesianGrid or use stroke='#f1f5f9' for near-invisible guides",
    "Axes: axisLine={false}, tickLine={false} for cleaner appearance",
    "Tooltip: replace heavy default tooltips with minimal custom versions",
    "Colors: slate-200 for gridlines, slate-400 for axis text — never black",
  ],
  checklist: [
    "No 3D chart effects",
    "Y-axis starts at zero for bar charts",
    "Gridlines light (low contrast) or absent",
    "No decorative chart borders or backgrounds",
    "Dual y-axis avoided (or justified with extreme care)",
    "Chart has accessible text alternative",
  ],
  relatedEntryIds: ['chart-selection', 'dashboard-layout-patterns', 'number-formatting', 'data-table-patterns'],
  tags: ["data visualization", "chart design", "data-ink ratio", "chart junk", "Tufte", "visualization principles"],
  intentTags: ["improve-readability", "reduce-cognitive-load"],
  content: `
# Data Visualization Principles

The goal of a chart is to transfer an insight from the data to the reader's mind as efficiently as possible. Everything that doesn't help that transfer is in the way.

## Data-Ink Ratio

Edward Tufte's principle: maximize the proportion of a chart that represents actual data.

**Remove:**
- Chart borders
- Background fills (grey chart backgrounds)
- Heavy gridlines
- Redundant axis labels
- Drop shadows
- 3D effects
- Decorative icons or illustrations

**Keep:**
- The data itself
- Axis labels (minimal styling)
- Light gridlines when they help reading values
- Legend (only if multiple series)
- One title and one subtitle if needed

## Honest Representation

The visual change in a chart must match the actual data change.

**The truncated y-axis problem:**
\`\`\`
Bad:                    Good:
90%  ┤ ██████           0%  ┤
91%  ┤ ████████████          ┤
92%  ┤ ██████               ┤
    (1% looks like 100%)   (1% looks like 1%)
\`\`\`

**Rule:** Bar charts must start at zero. Area charts must start at zero. Line charts can show a non-zero baseline if clearly labeled.

## Small Multiples

When comparing many series, one chart with 12 lines is unreadable. Use small multiples — many small charts, same scale, easy comparison:

\`\`\`
[Jan] ___   [Feb] __/   [Mar] /\_
[Apr] ___   [May] __/   [Jun] ___
\`\`\`

Same insight, readable at a glance.

## The Lie Factor

Lie factor = size of effect in graphic / size of effect in data.

If revenue doubled (2×), the bar representing it should be 2× taller. Any other ratio distorts the data.

3D charts almost always have a lie factor > 1 because perspective distorts height.
`,
};
