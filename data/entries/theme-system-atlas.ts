import { ReferenceEntry } from '../../types';

export const theme_system_atlas: ReferenceEntry = {
  id: "theme-system-atlas",
  title: "Theme: System Atlas",
  domain: "color",
  format: "style",
  verdict: "recommended",
  useContext: ["devtools", "saas", "content"],
  confidenceScore: 89,
  slug: "theme-system-atlas",
  complexity: "advanced",
  description: "A structured reference-document aesthetic that makes complex systems navigable — inspired by technical atlases, design system documentation, and scientific journals.",
  quickTake: "System Atlas treats the interface as a reference work: structured metadata panels, precise typographic hierarchy through size and weight alone, and a neutral palette that defers to content. The visual language of Stripe Press, Observable, and Nature journal applied to product UI.",
  whyItMatters: "Documentation, design systems, knowledge bases, and technical references have a unique constraint: the interface must be completely invisible. The reader's attention belongs to the content — tables, diagrams, code, structured data — not to UI chrome. System Atlas provides a vocabulary for that neutrality while maintaining visual authority.",
  mechanism: [
    "Typographic Hierarchy Without Color: Headings, subheadings, labels, and captions are differentiated by size, weight, and spacing only — color is reserved for interactive links and data accent, never structural hierarchy",
    "Metadata Anatomy: Every content block has a visible metadata layer — domain label, type tag, confidence score, context chips — structured like a scientific paper's header rather than a card's subtitle",
    "Structural Ink: `zinc-900` on `zinc-50` — near-black on near-white, cooler than Quiet Luxury's warmth, precise rather than warm",
    "Single Data Accent: Sapphire `#2563eb` used exclusively for hyperlinks and data highlights — everything else is achromatic",
    "Dense-but-Readable Tables: Tables are a first-class layout element; row height 40px, `tabular-nums`, `font-medium` for values, `text-zinc-500` for labels"
  ],
  whenToUse: [
    "Design system documentation where the components must speak louder than the container",
    "Technical wikis, knowledge bases, and internal reference tools",
    "API documentation, changelog pages, and spec sheets",
    "Any interface where the primary job is helping an expert find a specific piece of information quickly"
  ],
  whenNotToUse: [
    "Consumer-facing products where warmth and personality matter",
    "Marketing or brand pages where visual distinctiveness is the goal",
    "Onboarding flows or first-time user experiences that need emotional engagement",
    "Mobile-first applications where the structured metadata panels don't translate to small screens"
  ],
  tradeoffs: [
    { pro: "Extremely high information legibility — content scans faster than any other aesthetic", con: "Risks feeling clinical or lifeless without careful typographic craft" },
    { pro: "Scales from simple reference pages to full knowledge graph systems", con: "Requires consistent content structure — an inconsistently tagged entry breaks the system" },
    { pro: "Neutral palette makes any content type (code, tables, diagrams) visually integrate cleanly", con: "Differentiation from other 'neutral' systems (GitHub, Notion) requires deliberate craft in spacing and type" }
  ],
  failureModes: [
    "Grey Monotony: Using only zinc-900/500/200 without any typographic rhythm — the page collapses into undifferentiated text",
    "Label Noise: Every piece of content tagged with 5+ metadata chips — the taxonomy overwhelms the content",
    "Faux Reference: Applying the aesthetic to loosely structured content — the precision of System Atlas requires precise underlying content architecture",
    "Invisible Links: Sapphire links on a neutral background are low-contrast — ensure `#2563eb` on `#fafafa` passes 4.5:1"
  ],
  alternatives: [
    { entryId: "theme-quiet-luxury", condition: "Use when the content is editorial and the tone should be warm rather than precise" },
    { entryId: "theme-operator-console", condition: "Use when the content is primarily live data and status rather than static reference" },
    { entryId: "progressive-disclosure", condition: "System Atlas pages are long — progressive disclosure is essential for managing depth" }
  ],
  a11ySpecs: [
    "Sapphire `#2563eb` on `#fafafa` background: verify 4.5:1 contrast (it passes at ~5.9:1 — maintain this)",
    "Zinc-500 secondary text on zinc-50: verify at intended font size — passes AA at 16px+ but may fail at 12px",
    "Tables must use `<th scope='col'>` and `<caption>` for screen reader navigation",
    "Code blocks require `<code>` / `<pre>` semantic markup — not just visual monospace styling"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Base: `bg-zinc-50 text-zinc-900` — cooler and more precise than stone/warm alternatives",
    "Content width: max-w-prose (65ch) for body text; metadata panels in a sidebar at fixed `w-56` or `w-64`",
    "Type scale: Display `text-3xl font-bold tracking-tight`, H2 `text-xl font-semibold`, H3 `text-base font-semibold`, Body `text-[15px] leading-7`, Label `text-[11px] uppercase tracking-wider font-medium text-zinc-500`",
    "Data accent: `text-blue-600` for links only — no other use of blue in the system",
    "Separators: `border-b border-zinc-100` between content sections — thin and non-assertive",
    "Code: `bg-zinc-100 text-zinc-800 font-mono text-[13px]` inline; `bg-zinc-900 text-zinc-100` for block code (dark inversion)",
    "Sidebar metadata: `text-[11px] text-zinc-500 uppercase tracking-wider` for labels, `text-[13px] text-zinc-700 font-medium` for values"
  ],
  checklist: [
    "Typographic hierarchy set through size and weight only — no color differentiation for structure",
    "Single sapphire accent used exclusively for hyperlinks and data callouts",
    "Tables use semantic markup with proper headers and scope attributes",
    "Metadata panels use consistent label/value typography pattern",
    "Code blocks invert to dark background for visual separation"
  ],
  relatedEntryIds: ['theme-quiet-luxury', 'theme-operator-console', 'typography-scale', 'progressive-disclosure'],
  interactiveComponent: "SystemAtlasDemo",
  tags: ["Visual Design", "Documentation", "Typography", "Theming", "Reference", "Knowledge Base", "Systems"],
  contentStatus: 'hardened',
  content: `

# System Atlas

**System Atlas** is the aesthetic of reference works: scientific journals, design system documentation, technical atlases. The visual language of Stripe Press, The Observable Notebook, and Nature journal — applied to product UI.

Its core conviction: the interface is a container for knowledge, not a statement in itself. The chrome must be invisible; only the content speaks.

## Color System

| Role | Value | Usage |
|---|---|---|
| Background | \`#fafafa\` (zinc-50) | Page background — cool off-white, not warm |
| Primary text | \`#18181b\` (zinc-900) | All headings and body |
| Secondary text | \`#71717a\` (zinc-500) | Metadata, labels, captions |
| Tertiary | \`#a1a1aa\` (zinc-400) | Rules, dividers, placeholder |
| Data accent | \`#2563eb\` (blue-600) | Hyperlinks and data callouts ONLY |
| Code (dark) | \`#18181b\` background | Block code — inverted for separation |

The achromatic palette is not a limitation — it is the discipline. Every element that deviates from zinc must justify its color semantically.

## Typographic Architecture

System Atlas has a precise six-level type system:

\`\`\`
H1 Display     36px  font-bold    tracking-tight    zinc-900
H2 Section     24px  font-semibold                  zinc-900
H3 Subsection  18px  font-semibold                  zinc-900
Body           15px  font-normal  leading-7         zinc-800
Metadata       11px  font-medium  uppercase/wide    zinc-500
Code inline    13px  font-mono                      zinc-800
\`\`\`

**The rule**: if you find yourself reaching for a color to create hierarchy, use a weight or size change instead.

## Layout Anatomy

A System Atlas page has three structural zones:

1. **Entry header** — title, domain tag, verdict badge, confidence score, use-context chips
2. **Content body** — prose, tables, code blocks, structured lists; max-width 65ch
3. **Metadata sidebar** — related entries, checklist, cross-references; fixed 224px wide

This tripartite structure makes every entry feel like a reference document: findable, scannable, citable.

## Tables as Content

Tables are not formatted afterthoughts — they're first-class content in System Atlas:

\`\`\`css
table { width: 100%; border-collapse: collapse; }
th    { text-transform: uppercase; letter-spacing: 0.05em;
        font-size: 11px; font-weight: 500; color: #71717a;
        padding: 8px 12px; border-bottom: 1px solid #e4e4e7; }
td    { font-size: 14px; padding: 10px 12px;
        border-bottom: 1px solid #f4f4f5; }
\`\`\`

## What Differentiates It

System Atlas is often confused with "just clean design." The distinction:

- **Notion**: Flexible, informal, user-generated structure — System Atlas is architecturally opinionated
- **GitHub**: Functional but typographically bland — System Atlas has a deliberate type scale
- **Linear**: Clean but branded — System Atlas removes brand expression in favor of content
`,
  intentTags: ["improve-aesthetics", "increase-density"],
};
