import { ReferenceEntry } from '../../types';

export const theme_technical_blueprint: ReferenceEntry = {
  id: "theme-technical-blueprint",
  title: "Theme: Technical Blueprint",
  domain: "color",
  format: "style",
  verdict: "recommended",
  useContext: ["devtools", "saas", "portfolio"],
  confidenceScore: 88,
  slug: "theme-technical-blueprint",
  complexity: "advanced",
  description: "An engineering-drawing aesthetic using white line-work on deep Prussian blue — the visual language of architectural plans, circuit schematics, and CAD diagrams.",
  quickTake: "Technical Blueprint transposes the aesthetics of engineering drafting — white strokes on indigo, dot-grid backgrounds, dimension annotations, and component outlines — into digital UI. It signals technical precision, structural integrity, and the confidence of something that has been designed, not assembled.",
  whyItMatters: "A growing class of tools — infrastructure visualization, design handoff, network topology, CAD-adjacent interfaces — genuinely needs to look like what they represent. Technical Blueprint doesn't borrow from industrial design as decoration; it applies drafting conventions as a coherent design system that communicates technical authority.",
  mechanism: [
    "Prussian Blue Base: Deep indigo `#002855` or `#003366` — the exact tone of cyanotype and Diazo blueprints — as the primary background",
    "White Line Economy: All structural elements rendered as 1px white or `#9ec8ff` (cyan-200) outlines — fills are used only for active/selected states, not structure",
    "Dot Grid Substrate: A subtle repeating `radial-gradient` or SVG dot pattern at 24px intervals communicates 'measured space' without competing with content",
    "Dimension Typography: Uppercase monospace for all labels, annotations, and measurements — `letter-spacing: 0.1em`, small caps — mirroring drafting title blocks",
    "Component Anatomy: UI components represented as outlined rectangles with labels outside — buttons, cards, and inputs have borders but minimal fill"
  ],
  whenToUse: [
    "Infrastructure and network topology visualization tools",
    "Design handoff and specification interfaces showing component anatomy",
    "Architecture and engineering portfolio sites",
    "Developer tools, CLI GUIs, or system configurators where precision is the brand"
  ],
  whenNotToUse: [
    "Consumer applications that need warmth, approachability, or legible color semantics",
    "High-density data tables or text-heavy reference content (white-on-blue fatigues at scale)",
    "Mobile-primary contexts where the drafting aesthetic doesn't reduce gracefully",
    "Any interface requiring rich color coding for status or domain differentiation"
  ],
  tradeoffs: [
    { pro: "Immediately communicates technical precision and structural thinking", con: "White-on-blue at small sizes is harder to read than standard text-on-white" },
    { pro: "The drafting aesthetic naturally expresses relational, structural, and spatial content", con: "Prose content (documentation, onboarding) feels anachronistic within the system" },
    { pro: "Visually distinct — no other mainstream aesthetic occupies this space", con: "High implementation cost: every component must be re-skinned from scratch" }
  ],
  failureModes: [
    "Blueprint Creep: Introducing colored fills for cards or backgrounds 'to make it feel less heavy' — this destroys the line-economy aesthetic",
    "Low-Contrast Type: White 12px type on `#002855` can fail WCAG AA — test rigorously and use `#9ec8ff` accents only for decorative line-work, not body text",
    "Dot Grid Noise: A dot grid that's too prominent competes with content — keep opacity below 15% (`rgba(255,255,255,0.08)`)",
    "Forced Schematic: Turning non-structural UI (a form, a nav) into blueprint-style components — it must be organic to the domain"
  ],
  alternatives: [
    { entryId: "theme-operator-console", condition: "Use when the interface shows live data feeds rather than structural/spatial representations" },
    { entryId: "dark-mode-design", condition: "Use for a more accessible, general-purpose dark interface without the engineering-drawing constraint" },
    { entryId: "glassmorphism", condition: "Use when the dark interface needs depth cues through layering rather than precision through outlines" }
  ],
  a11ySpecs: [
    "White (`#ffffff`) on `#002855` achieves 14.9:1 contrast — passes AAA. This must be the standard for all body text",
    "Cyan-200 (`#a5f3fc`) on `#002855` achieves ~9.1:1 — acceptable for accent use but do not use for body text under 14px",
    "The dot-grid background must not interfere with text legibility — test by printing or zooming to 400%",
    "Active and focus states must be clearly distinguishable from the Prussian blue base — use a fully filled white or cyan shape, not just a border change"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Base: `bg-[#002855] text-white` — deep Prussian blue to white",
    "Dot grid: `background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px); background-size: 24px 24px`",
    "Component outlines: `border border-white/30` for inactive, `border-white` for active/selected",
    "Accent lines: `text-[#9ec8ff]` (blue-300) — lighter cyan for secondary annotations and dimension labels",
    "Typography: `font-mono uppercase tracking-widest text-[11px]` for labels; `font-mono text-[13px]` for values; `font-sans font-bold text-2xl tracking-tight` for display headings (contrast with monospace label system)",
    "Grid lines: `border border-dashed border-white/10` for structural guides — dashed borders distinguish guides from component borders",
    "Selection state: `bg-white/10 border-white` — a subtle fill separates selected from unselected"
  ],
  checklist: [
    "All body text uses white on Prussian blue — verified at ≥14.9:1 contrast",
    "Dot grid opacity set below 15% to avoid competing with content",
    "Component borders use `border-white/30` (inactive) vs `border-white` (active) — no fills for structure",
    "Labels use uppercase monospace to read as annotations rather than content",
    "Dashed borders distinguish structural guides from solid component borders"
  ],
  relatedEntryIds: ['theme-operator-console', 'dark-mode-design', 'glassmorphism', 'color-rule'],
  interactiveComponent: "TechnicalBlueprintDemo",
  tags: ["Visual Design", "Dark Mode", "Engineering", "Theming", "CAD", "Blueprint", "devtools"],
  contentStatus: 'hardened',
  content: `

# Technical Blueprint

**Technical Blueprint** adapts the visual grammar of engineering drafting — cyanotype blueprints, architectural plans, circuit schematics — into a coherent UI design system.

It is not a metaphor. It is the same principles: white line-work on deep blue, dot-grid substrate, labeled component anatomy, and the precision of something measured rather than estimated.

## Color System

| Role | Value | Usage |
|---|---|---|
| Background | \`#002855\` (Prussian blue) | All surfaces — single background color |
| Primary text | \`#ffffff\` | Body text and critical labels |
| Line accents | \`#9ec8ff\` (blue-300) | Secondary lines, dimension annotations |
| Active fill | \`rgba(255,255,255,0.1)\` | Selected / hovered component state |
| Grid | \`rgba(255,255,255,0.08)\` | Dot grid substrate |
| Danger / Alert | \`#fca5a5\` (rose-300) | Error states — must still read on dark blue |

There are no additional colors. A second background color is a violation of the system.

## The Dot Grid

The dot grid is what makes the space feel measured rather than blank:

\`\`\`css
background-image: radial-gradient(
  rgba(255, 255, 255, 0.08) 1px,
  transparent 1px
);
background-size: 24px 24px;
\`\`\`

Keep opacity under 10–12%. Above that, it competes with content. The grid communicates "this space is precise" without asserting itself.

## Component Anatomy

In Technical Blueprint, components are represented through outlines, not fills:

\`\`\`
┌─────────────────────────────────────┐
│  COMPONENT: PrimaryButton           │  ← title block (uppercase mono)
│  width: 120px  height: 40px         │  ← dimension annotations
│                                     │
│  ┌──── [SUBMIT] ────┐               │  ← component outline (white)
│  │    border: 1px   │               │  ← structural labels outside
│  └──────────────────┘               │
└─────────────────────────────────────┘
\`\`\`

The **title block** convention (bottom-right corner with component name, type, and version) maps naturally to component metadata displays in design handoff tools.

## Typography

\`\`\`
Section headers  →  font-sans, 24px, font-bold, tracking-tight, white
UI labels        →  font-mono, 11px, uppercase, tracking-widest, blue-300
Data values      →  font-mono, 13px, white
Annotations      →  font-mono, 10px, white/60, italic
\`\`\`

The tension between the clean sans display face and the monospace annotation layer is the typographic signature of the system.

## When It Works

Technical Blueprint works when the interface is *describing* or *showing* technical structure — network diagrams, component libraries, infrastructure maps. The aesthetic and the content are in agreement.

It fails when applied to interfaces where the job is emotional (onboarding), dense-text (documentation), or data-rich (dashboards) — use Operator Console or System Atlas for those.
`,
  intentTags: ["improve-aesthetics"],
};
