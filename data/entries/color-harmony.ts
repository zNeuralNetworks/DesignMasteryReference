import { ReferenceEntry } from '../../types';

export const color_harmony: ReferenceEntry = {
  id: "color-harmony",
  title: "Color Harmony",
  domain: "color",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "marketing", "consumer", "portfolio", "mobile"],
  confidenceScore: 89,
  slug: "color-harmony",
  complexity: "intermediate",
  description: "How colors relate to each other — complementary, analogous, triadic, and split-complementary schemes — and which harmonic relationships work for UI vs. illustration vs. branding.",
  quickTake: "UI design needs restraint: 2–3 colors maximum from a controlled palette. Analogous schemes (neighbors on the color wheel) are safest for UI backgrounds and surfaces. Complementary pairs (opposites) create maximum contrast for CTAs and alerts. Complex schemes (triadic, tetradic) are for illustration and branding, not UI.",
  whyItMatters: "Random color combinations look random. Harmonic relationships look intentional. Understanding why certain palettes work — and why others feel jarring — enables designers to build product color palettes that communicate brand personality while maintaining visual cohesion.",
  mechanism: [
    "Analogous: 3–4 colors adjacent on the color wheel — harmonious, calm, good for backgrounds",
    "Complementary: 2 colors opposite on the wheel — high contrast, energetic, good for accents/CTAs",
    "Split-complementary: one base + two adjacent to its complement — balanced contrast without tension",
    "Triadic: 3 colors equally spaced — vibrant, complex, better for illustration than UI",
  ],
  whenToUse: [
    "Building a product color palette from scratch",
    "Choosing accent colors that work with an existing brand primary",
    "Evaluating why an existing color combination feels 'off'",
  ],
  whenNotToUse: [
    "As a rigid formula — color theory guides, but brand context, cultural meaning, and accessibility override harmonic rules",
    "Triadic and tetradic schemes for product UI — too complex for interfaces",
  ],
  tradeoffs: [
    { pro: "Harmonic palettes feel cohesive without being monotonous", con: "Strict harmonic rules can conflict with brand palette requirements" },
    { pro: "Provides vocabulary for discussing and validating color decisions", con: "No harmonic scheme replaces contrast testing — a perfectly harmonious palette can fail accessibility" },
  ],
  failureModes: [
    "All analogous: background, card, and accent all too similar — no contrast or emphasis points",
    "Complementary without restraint: red/green in equal proportion looks like a Christmas decoration",
    "Warm and cool clash: mixing warm yellows and cool blues without intentional relationship",
    "Saturation mismatch: high-saturation primary with low-saturation supporting colors looks disconnected",
  ],
  alternatives: [
    { entryId: "color-rule", condition: "The 60/30/10 rule applies harmonic palettes in practical proportion" },
    { entryId: "semantic-color-system", condition: "Semantic color systems assign purpose to colors beyond aesthetic relationship" },
  ],
  a11ySpecs: [
    "Harmonic beauty doesn't guarantee accessible contrast — test every text/background combination",
    "Colorblind accessibility: red/green complementary pairs are the most common colorblindness combination — always pair with shape/text",
    "Minimum 4.5:1 for body text, 3:1 for large text — measure with actual contrast checkers, not visual judgment",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Oklch color space for perceptually uniform palettes — equal lightness steps feel equal visually",
    "Radix Colors, Tailwind, or Material Design 3 tonal surfaces provide pre-built harmonic scales",
    "Coolors.co and Paletton for interactive harmonic palette generation",
    "HSL for easier color relationship intuition: complementary = hue + 180°",
  ],
  checklist: [
    "Product palette uses one of the four harmonic relationships",
    "Complementary accent color used sparingly for emphasis (≤20% of visual area)",
    "Saturation levels consistent across palette (not mixing muted and vivid)",
    "All text/background combinations tested for contrast",
  ],
  relatedEntryIds: ['color-rule', 'semantic-color-system', 'dark-mode-design', 'gradient-mesh'],
  tags: ["color harmony", "complementary colors", "analogous colors", "color palette", "color wheel", "color theory"],
  intentTags: ["improve-aesthetics", "fix-accessibility"],
  contentStatus: 'hardened',
  content: `
# Color Harmony

Colors that feel like they belong together share a geometric relationship on the color wheel.

## The Four Harmonic Schemes

### Analogous
Colors adjacent on the wheel (within ~60°).

**Feel:** Calm, cohesive, natural.
**Best for:** Backgrounds, surface colors, gradient pairs.
**Example:** Blue-600, Cyan-500, Sky-400 — all in the blue-teal range.

### Complementary
Colors opposite on the wheel (180° apart).

**Feel:** High contrast, energetic, bold.
**Best for:** Primary + accent pairs, CTA buttons on brand backgrounds.
**Example:** Blue + Orange, Red + Green, Purple + Yellow.

**Warning:** Red/green complementary is the most common colorblindness combination. Always pair with text labels.

### Split-Complementary
One base + two colors adjacent to its complement.

**Feel:** Balanced contrast without visual tension.
**Best for:** Three-color palettes with personality.
**Example:** Blue primary, Yellow-orange and Red-orange accents.

### Triadic
Three colors equally spaced (120° apart).

**Feel:** Vibrant, complex, playful.
**Best for:** Illustration, branding, not UI.
**Example:** Red, Blue, Yellow — classic primary triad.

## UI Application Rule

Product UI typically needs: **one primary + one neutral + one semantic accent.**

The harmony relationship is between the primary and accent:
- Analogous primary/accent: calm, professional
- Complementary primary/accent: energetic, bold, high-contrast

Everything else is neutral (slate/grey) — neutrals don't have a harmonic relationship requirement.

## Saturation Consistency

Mixing vivid (high saturation) and muted (low saturation) colors creates visual incoherence.

If your primary is vivid (Tailwind blue-600), keep supporting colors at similar saturation (slate-600, not a muted taupe). Or go fully muted with your primary.
`,
};
