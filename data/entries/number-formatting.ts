import { ReferenceEntry } from '../../types';

export const number_formatting: ReferenceEntry = {
  id: "number-formatting",
  title: "Number Formatting",
  domain: "data",
  format: "pattern",
  verdict: "recommended",
  useContext: ["dashboard", "saas", "data", "marketplace"],
  confidenceScore: 90,
  slug: "number-formatting",
  complexity: "beginner",
  description: "Displaying numbers in data-dense interfaces — abbreviations, precision, currency, percentages, and the typographic settings that make numbers scannable.",
  quickTake: "1.2M is faster to read than 1,247,832. Show the level of precision the user needs for their decision, not the full precision available. Use tabular numerals for aligned columns. Right-align all numbers in tables. Show +/- context for change metrics.",
  whyItMatters: "Numbers are the primary content in dashboards and data products. Poor formatting — wrong precision, inconsistent alignment, missing context — makes data harder to read and comparisons harder to make. Good number formatting makes patterns visible instantly.",
  mechanism: [
    "Abbreviate large numbers: 1.2M, 842K, $3.4B — precision exceeding the user's decision need adds noise",
    "Right-align all numeric columns in tables for vertical scanability",
    "Use tabular figures (font-variant-numeric: tabular-nums) so digit widths are equal — columns stay aligned",
    "Show change context: current value + delta + percentage change vs. comparison period",
  ],
  whenToUse: [
    "Any table, dashboard, or data display with more than a few numbers",
    "Financial figures, metrics, percentages, counts — all benefit from consistent treatment",
  ],
  whenNotToUse: [
    "Abbreviated numbers in contexts requiring full precision (invoices, contracts, API responses)",
    "Truncating precision when the difference is decision-relevant (3.14% vs. 3.18% in finance)",
  ],
  tradeoffs: [
    { pro: "Abbreviation improves scannability for overview contexts", con: "Abbreviated numbers lose precision — wrong for contexts requiring exact values" },
    { pro: "Consistent alignment makes column comparison effortless", con: "Right-aligned text in left-aligned text columns looks broken if not scoped to number columns" },
  ],
  failureModes: [
    "Inconsistent precision: $1,247,832.00 and $842K in the same table — comparison is impossible",
    "Left-aligned numbers: eye must scan to find the most significant digit for each value",
    "No change context: 'Revenue: $142,000' with no comparison — is this good or bad?",
    "Percentage displayed as decimal: 0.0314 instead of 3.14% — requires mental calculation",
  ],
  alternatives: [
    { entryId: "data-table-patterns", condition: "Number formatting is applied within data table column design" },
    { entryId: "chart-selection", condition: "Charts visualize numerical data and have their own axis formatting requirements" },
  ],
  a11ySpecs: [
    "Abbreviations: use aria-label with full value — '1.2M' should have aria-label='1,200,000'",
    "Currency symbols: use appropriate Unicode symbols, not just '$' for international contexts",
    "Screen readers: 3.14% reads as '3.14 percent' correctly; 0.0314 doesn't communicate the percentage",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Intl.NumberFormat: new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(1247000) → '1.2M'",
    "Tabular numbers: font-variant-numeric: tabular-nums (Tailwind: font-tabular-nums)",
    "Currency: Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })",
    "Color for change: green for positive delta, red for negative — with text labels too (WCAG)",
  ],
  checklist: [
    "All numbers in data tables right-aligned",
    "font-variant-numeric: tabular-nums on number columns",
    "Large numbers abbreviated consistently (K, M, B) throughout the view",
    "Change metrics show both absolute and percentage delta",
    "Percentages displayed as '3.14%' not '0.0314'",
  ],
  relatedEntryIds: ['data-table-patterns', 'chart-selection', 'dashboard-layout-patterns', 'data-visualization-principles'],
  tags: ["number formatting", "data tables", "currency", "large numbers", "tabular numbers", "dashboard numbers"],
  intentTags: ["improve-readability", "increase-density"],
  contentStatus: 'hardened',
  content: `
# Number Formatting

Numbers are only useful if they're readable. Formatting is the difference between data and noise.

## The Abbreviation Standard

| Value | Display | Context |
|-------|---------|---------|
| 1,247,832 | 1.2M | Dashboard, overview |
| 1,247,832 | 1,247,832 | Invoice, contract, exact |
| 842,000 | 842K | — |
| 0.0314 | 3.14% | Always convert decimals to percent |
| -0.0021 | -0.21% | Sign + percent |

## Tabular Numerals

In tables, use tabular-numerals so all digits are the same width:

\`\`\`css
.number-column {
  font-variant-numeric: tabular-nums;
  text-align: right;
}
\`\`\`

Without this: digit widths vary, columns won't align visually even with right-align.

## Change Context

Raw numbers are rarely actionable without comparison:

\`\`\`tsx
<div className="text-2xl font-bold tabular-nums">$142,000</div>
<div className="text-sm text-slate-500">
  <span className="text-emerald-600 font-medium">+$14,780 (11.6%)</span>
  {' '}vs. last month
</div>
\`\`\`

## Using Intl.NumberFormat

\`\`\`typescript
// Compact notation
const fmt = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  maximumFractionDigits: 1
});
fmt.format(1_247_000); // → "1.2M"
fmt.format(842_000);   // → "842K"

// Currency
const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});
currency.format(142000); // → "$142,000"

// Percentage
const pct = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 1
});
pct.format(0.0314); // → "3.1%"
\`\`\`
`,
};
