import { ReferenceEntry } from '../../types';

export const theme_operator_console: ReferenceEntry = {
  id: "theme-operator-console",
  title: "Theme: Operator Console",
  domain: "color",
  format: "style",
  verdict: "recommended",
  useContext: ["devtools", "dashboard", "saas"],
  confidenceScore: 90,
  slug: "theme-operator-console",
  complexity: "intermediate",
  description: "A high-density command-center aesthetic inspired by trading terminals, mission control rooms, and industrial monitoring systems.",
  quickTake: "Operator Console treats every pixel as mission-critical: amber phosphor on deep charcoal, monospace everywhere, and borders that divide the screen into discrete information panes. It communicates competence and control.",
  whyItMatters: "Data-dense professional tools — trading platforms, SRE dashboards, ops centers — need an aesthetic that reinforces density as a feature, not a failure. Operator Console signals to expert users that this interface takes data seriously: nothing is decorative, everything earns its place.",
  mechanism: [
    "Phosphor Palette: Deep charcoal (`#0d1117`) base with amber (`#f59e0b`) or phosphor-green (`#4ade80`) as the single data accent — the exact visual language of CRT terminals",
    "Pane Architecture: Hard 1px borders divide the viewport into named panes (STATUS / FEED / CHART), making the layout legible at a glance like a Bloomberg terminal",
    "Monospace Dominance: JetBrains Mono or Courier New for nearly all type — including labels, headers, and numeric readouts — to reinforce machine-precision",
    "Status Semantics: Color is reserved for state only — amber = active, red = alert, grey = inactive — never used decoratively",
    "Information Density: Row height as low as 28px, no internal padding wasted; truncation with hover expansion preferred over wrapping"
  ],
  whenToUse: [
    "System monitoring dashboards, log viewers, and ops runbooks",
    "Financial data terminals and quantitative trading interfaces",
    "DevOps tools, CI/CD pipelines, and server administration panels",
    "Any context where expert users spend hours scanning dense data"
  ],
  whenNotToUse: [
    "Consumer products or onboarding flows — intimidates non-expert users",
    "Mobile-first interfaces where dense layout breaks down",
    "Editorial or marketing contexts where warmth and approachability matter"
  ],
  tradeoffs: [
    { pro: "Extremely high information density per viewport inch", con: "Steep learning curve for users unfamiliar with terminal aesthetics" },
    { pro: "Color signals status without ambiguity", con: "Limited color palette makes domain expansion (charts, maps) harder to integrate" },
    { pro: "Monospace alignment makes tabular data naturally readable", con: "Proportional type (for prose) feels visually inconsistent within the system" }
  ],
  failureModes: [
    "Amber Overload: Using the accent color for decorative purposes dilutes its status-signaling function — reserve it for live/active states only",
    "Pane Soup: Dividing too many areas with equal-weight borders creates a grid where nothing has hierarchy",
    "Fake Terminal: Applying monospace fonts to a layout that isn't actually dense loses the payoff — the style demands genuine data density",
    "Missing Contrast Audit: Amber on dark charcoal can fail AA; verify #f59e0b on #0d1117 passes 4.5:1"
  ],
  alternatives: [
    { entryId: "theme-technical-blueprint", condition: "Use when the interface shows spatial/structural data rather than live numeric feeds" },
    { entryId: "dark-mode-design", condition: "Use for a more approachable dark interface without the terminal density requirement" },
    { entryId: "data-table-patterns", condition: "Operator Console lives or dies by its table patterns — apply these rigorously" }
  ],
  a11ySpecs: [
    "Verify all amber/green accent text on charcoal backgrounds meets WCAG AA (4.5:1 for normal text)",
    "Status color alone is insufficient — pair red/amber/green with icons or text labels",
    "Monospace at small sizes (11–12px) must be tested for readability by screen reader + zoom users",
    "Provide a higher-contrast variant (white-on-black) as a user preference"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Base: `bg-[#0d1117] text-[#e6edf3]` — GitHub Dark palette is a proven starting point",
    "Accent colors: `text-amber-400` for active states, `text-emerald-400` for success, `text-rose-400` for errors",
    "Borders: `border border-[#30363d]` for pane dividers — never use opacity-based borders in dense layouts",
    "Typography: `font-mono text-[12px] leading-5` for data rows; `font-mono font-bold text-xs uppercase tracking-widest` for pane labels",
    "Dense tables: 28–32px row height, `tabular-nums` CSS feature for aligned numbers",
    "Pane headers: thin horizontal rule (`border-b border-amber-400/30`) distinguishes label from content"
  ],
  checklist: [
    "Color reserved for status semantics (amber=active, red=alert) not decoration",
    "Pane labels use uppercase monospace to distinguish from data",
    "Verified amber/green accent text passes WCAG AA on charcoal background",
    "Row heights set to 28–32px minimum for dense tables"
  ],
  relatedEntryIds: ['theme-technical-blueprint', 'dark-mode-design', 'data-table-patterns', 'color-rule'],
  interactiveComponent: "OperatorConsoleDemo",
  tags: ["Visual Design", "Dark Mode", "Terminal", "Theming", "Data Dense", "Dashboard", "devtools"],
  content: `

# Operator Console

Inspired by Bloomberg Terminal, NASA Mission Control, and industrial SCADA systems, **Operator Console** is a dark-mode aesthetic designed around information density as a first principle.

Standard dark interfaces signal "comfortable night mode." Operator Console signals "this machine is live."

## Color System

| Role | Color | Usage |
|---|---|---|
| Base | \`#0d1117\` (charcoal) | All background panes |
| Body text | \`#e6edf3\` (off-white) | Primary data labels |
| Active / Live | \`#f59e0b\` (amber) | Running jobs, live feeds, cursor |
| Success | \`#4ade80\` (phosphor green) | Completed, healthy, OK |
| Alert | \`#f87171\` (rose) | Errors, warnings, degraded |
| Muted | \`#8b949e\` | Secondary labels, annotations |
| Borders | \`#30363d\` | Pane dividers, separators |

The palette is deliberately narrow. Introducing a new color means introducing a new status category — never a decoration.

## Typography

Everything runs through a single typeface stack:

\`\`\`css
font-family: "JetBrains Mono", "Courier New", monospace;
\`\`\`

- **Pane labels**: 10px, \`font-bold uppercase tracking-widest text-amber-400\`
- **Data rows**: 12px, \`tabular-nums leading-5\`
- **Values**: 14–16px \`font-bold\` for primary metrics, 12px for context

## Layout Architecture

A console viewport is divided into **named panes** using 1px borders. Each pane has a header label and a content area.

\`\`\`
┌─ STATUS ─────────────────┬─ FEED ──────────────────┐
│ BUILD    ● PASSING       │ 14:32:01 deploy started  │
│ COVERAGE ● 94%           │ 14:32:08 tests passed    │
│ UPTIME   ● 99.97%        │ 14:32:11 container live  │
├─ METRICS ────────────────┴─────────────────────────┤
│ p50: 42ms  p95: 118ms  p99: 340ms  errors: 0.02%   │
└───────────────────────────────────────────────────┘
\`\`\`

This structure communicates context immediately — unlike dashboards where the user must hunt for meaning.

## What Makes It Work

**Density is respect.** Expert users operating at high speed don't need breathing room — they need signal. Every row in an Operator Console interface earns its place by showing irreplaceable information.

**Restraint in color = trust in color.** When amber only ever means "live/active," the user trusts it instantly without reading. This is the same principle as traffic lights.

## Common Mistakes

1. **Decorative amber**: Using the accent color on hover states or borders drains its semantic power
2. **Mixed type stacks**: Introducing a proportional font for "headings" breaks the terminal grammar
3. **Rounded corners**: Operator Console requires \`rounded-none\` throughout — radius signals approachability, not precision
4. **Empty panes**: If a pane has no live data, it should show a "—" or "NO DATA", not whitespace
`,
  intentTags: ["improve-aesthetics"],
};
