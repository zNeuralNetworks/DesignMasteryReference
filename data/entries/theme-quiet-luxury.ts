import { ReferenceEntry } from '../../types';

export const theme_quiet_luxury: ReferenceEntry = {
  id: "theme-quiet-luxury",
  title: "Theme: Quiet Luxury Editorial",
  domain: "color",
  format: "style",
  verdict: "recommended",
  useContext: ["portfolio", "content", "marketing"],
  confidenceScore: 91,
  slug: "theme-quiet-luxury",
  complexity: "intermediate",
  description: "A restrained, whitespace-driven aesthetic rooted in high-fashion editorial design — where absence communicates value.",
  quickTake: "Quiet Luxury is the anti-trend: no gradients, no neon, no shadows. Warm cream backgrounds, hairline rules, generous leading, and a single restrained serif create an interface that feels like Bottega Veneta's website, not a startup's.",
  whyItMatters: "Most digital interfaces communicate urgency and abundance. Quiet Luxury communicates its opposite: confidence, restraint, and exclusivity. When every pixel is deliberate and space is the primary design material, the interface signals that the brand doesn't need to shout.",
  mechanism: [
    "Warm Neutrals: Cream (`#faf7f2`) rather than pure white, warm near-black (`#1a1611`) rather than `#000000` — the warmth reads as human, not clinical",
    "Typographic Hierarchy Through Weight Alone: No color changes for headings — only weight, size, and tracking. Serif for display, geometric sans for UI chrome",
    "Hairline Rules: 1px `border-stone-200` horizontal rules replace section backgrounds, cards, and dividers — space does more structural work than containers",
    "Extreme Leading: Body text at 1.8–2× line height; headlines at tight 0.95× tracking — the white space between lines is itself a design decision",
    "Single Accent Restraint: One warm accent (terracotta `#c2714f`, champagne `#d4af72`, or moss `#6b7c4f`) used sparingly for a single interaction state or brand signal"
  ],
  whenToUse: [
    "Premium consumer products where exclusivity is part of the brand proposition",
    "Portfolio sites for architects, photographers, designers, and high-end brands",
    "Editorial content platforms, long-form publishing, and cultural journalism",
    "Luxury e-commerce where the product imagery must carry the visual weight"
  ],
  whenNotToUse: [
    "SaaS tools, dashboards, or any interface requiring high information density",
    "Consumer apps with a playful or approachable brand personality",
    "Mobile-heavy contexts where generous whitespace becomes wasted scroll distance",
    "Any interface requiring strong visual affordances for non-expert users"
  ],
  tradeoffs: [
    { pro: "Creates an immediate sense of premium quality and editorial confidence", con: "Accessibility risk: low-contrast warm neutrals can fail WCAG on smaller type" },
    { pro: "Photography and product imagery is elevated rather than competed with", con: "Demands extremely high-quality imagery — poor photos are mercilessly exposed" },
    { pro: "Timeless aesthetic that doesn't trend-chase", con: "Conversion-focused elements (CTAs, forms) feel incongruous without careful integration" }
  ],
  failureModes: [
    "Beige Soup: Using the same warm neutral for background, cards, and text with insufficient contrast — the page becomes texturally flat",
    "Serif Noise: Using multiple serif faces or mixing editorial serifs with system UI fonts — Quiet Luxury depends on typographic discipline",
    "Crowded Luxury: Adding features or content that forces higher density — the aesthetic only works when the content is curated",
    "Fake Luxury: Applying the palette to a product that doesn't match — warm cream on a fast-food delivery app reads as irony, not confidence"
  ],
  alternatives: [
    { entryId: "theme-swiss-polarity", condition: "Use when the aesthetic needs to signal precision and structure rather than warmth and restraint" },
    { entryId: "variable-fonts", condition: "Variable fonts dramatically extend typographic expression within this system without adding new typefaces" },
    { entryId: "typography-scale", condition: "The typographic hierarchy is the entire system — a rigorous type scale is non-negotiable" }
  ],
  a11ySpecs: [
    "Cream background on warm near-black text: verify contrast ratio — `#1a1611` on `#faf7f2` achieves ~17:1 (passes AAA)",
    "Stone-200 rules and muted text (`#78716c`) against cream may fail AA at small sizes — test carefully",
    "Single accent color must carry no semantic meaning (it's decorative) — use text or icons for state communication",
    "Generous line height (1.8+) substantially improves readability for dyslexic users — a natural accessibility win"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Base: `bg-[#faf7f2] text-[#1a1611]` — warm cream to warm near-black",
    "Serif display: `font-serif tracking-tight leading-[0.95]` for headlines over 40px",
    "Body: `font-sans text-[15px] leading-[1.8] text-stone-700` — generous leading is essential",
    "Rules: `border-t border-stone-200` — hairline rule as a section separator instead of `<hr>` with default styling",
    "Accent: `text-[#c2714f]` for a single link color or hover state — do not introduce a second accent",
    "Cards: Do not use rounded cards or shadows — use whitespace and a subtle border (`border border-stone-100`) or no container at all",
    "Photography: Aspect-ratio constrained images with `object-cover object-center` — no thumbnails under 400px wide"
  ],
  checklist: [
    "Verified cream-to-near-black body text contrast passes WCAG AA",
    "Single accent color used for at most one interaction state",
    "Section structure uses hairline rules rather than background fills",
    "Body text set to 1.8× line height minimum",
    "No shadows, gradients, or border-radius on content containers"
  ],
  relatedEntryIds: ['theme-swiss-polarity', 'variable-fonts', 'typography-scale', 'color-rule'],
  interactiveComponent: "QuietLuxuryDemo",
  tags: ["Visual Design", "Editorial", "Typography", "Theming", "Premium", "Minimal"],
  content: `

# Quiet Luxury Editorial

**Quiet Luxury** is a design philosophy, not just a palette. It originates in high-fashion brands (Bottega Veneta, The Row, Loro Piana) whose visual identity communicates through restraint: no logos, no trends, no noise.

Applied to digital interfaces, it produces work that feels editorially confident — the opposite of the gradient-heavy, animation-rich aesthetic that dominates SaaS.

## Color System

| Role | Value | Rationale |
|---|---|---|
| Background | \`#faf7f2\` | Warm cream — human, not clinical |
| Primary text | \`#1a1611\` | Warm near-black — consistent with cream warmth |
| Secondary text | \`#78716c\` (stone-500) | Muted, never pure grey |
| Rules / borders | \`#e7e5e4\` (stone-200) | Hairline — structural but quiet |
| Accent | \`#c2714f\` (terracotta) | One only — for a single link/CTA state |
| Paper white | \`#ffffff\` | Used only for modals or overlays that "float" |

**The rule**: if you're tempted to add a second color, question whether a weight change or size change achieves the same hierarchy instead.

## Typography

Quiet Luxury is, at its core, a typographic system. The visual interest comes entirely from type.

\`\`\`
Display headline  → Serif (Playfair, Cormorant, or system-serif)
                    Font-size: 48–96px
                    Tracking: -0.02em (tight)
                    Leading: 0.95

Body text         → Geometric sans (Inter, DM Sans)
                    Font-size: 15–16px
                    Tracking: 0
                    Leading: 1.8–1.9

UI labels / nav   → Same sans, uppercase, tracking-widest, 10–11px
\`\`\`

The tension between the open serif display and the tight sans UI is the entire system.

## Spatial Rhythm

Space is not empty — it's the medium. In Quiet Luxury, a 120px section gap communicates as strongly as a border. Rules:

1. **Never reduce whitespace to fit more content** — cut the content
2. **Sections separated by rules, not backgrounds**: a 1px \`border-stone-200\` rather than a \`bg-stone-100\` section fill
3. **No cards** — content lives directly on the page without containers
4. **Images full-bleed or at a constrained fixed aspect ratio** — no thumbnails

## What Breaks It

The aesthetic is fragile. A single inconsistency — one blue button, one shadow, one card with rounded corners — reads as a mistake rather than intention. Quiet Luxury demands complete commitment.
`,
  intentTags: ["improve-aesthetics", "improve-readability"],
};
