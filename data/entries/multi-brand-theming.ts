import { ReferenceEntry } from '../../types';

export const multi_brand_theming: ReferenceEntry = {
  id: "multi-brand-theming",
  title: "Multi-Brand Theming",
  domain: "tokens",
  format: "system",
  verdict: "conditional",
  useContext: ["saas", "marketplace"],
  confidenceScore: 85,
  slug: "multi-brand-theming",
  complexity: "advanced",
  description: "Architecting a component library and token system to support multiple visual themes, white-labeling, or brand variants from a single codebase.",
  quickTake: "Multi-brand theming requires a two-layer token system: semantic tokens (--color-primary, --color-surface) reference primitive tokens (--slate-900, --blue-500). Swap only the semantic layer per brand. Components reference semantic tokens exclusively — primitive values never appear in components.",
  whyItMatters: "White-label SaaS products must render in client brand colors without code duplication. Without a token architecture, theming requires editing hundreds of hardcoded color values. With semantic tokens, a full rebrand is one CSS file change. This is the architectural difference between products that scale to many brands and products that don't.",
  mechanism: [
    "Primitive layer: raw values — all possible colors, sizes, spacing (--blue-500: #3b82f6)",
    "Semantic layer: purpose-named aliases referencing primitives (--color-primary: var(--blue-500))",
    "Theme: a set of semantic token overrides -- theme-client-a.css overrides semantic tokens only",
    "Components: use only semantic tokens, never primitives directly",
  ],
  whenToUse: [
    "White-label SaaS products serving enterprise clients with their own branding",
    "Multi-product companies with shared component libraries across different brand identities",
    "Products with light/dark mode (simplest case of the same pattern)",
  ],
  whenNotToUse: [
    "Single-brand products — semantic tokens add complexity without value",
    "When brand variants are few and infrequent — a simpler approach (different CSS classes) may suffice",
  ],
  tradeoffs: [
    { pro: "Full brand rebrand in one CSS file — no component code changes", con: "Requires strict discipline: one escaped primitive token in a component breaks the system" },
    { pro: "Components are brand-agnostic and truly reusable", con: "Initial architecture requires upfront design and developer education investment" },
  ],
  failureModes: [
    "Primitives in components: using var(--blue-500) directly in a button — it won't theme",
    "Too many semantic tokens: 200 semantic tokens with names nobody can remember",
    "Semantic naming that's too specific: --product-card-header-bg is brittle; --color-surface-raised is reusable",
    "No token enforcement: developers bypass the token system under deadline pressure",
  ],
  alternatives: [
    { entryId: "design-tokens", condition: "Design tokens are the foundation of multi-brand theming — understand the single-theme case first" },
    { entryId: "dark-mode-design", condition: "Dark mode is the simplest application of semantic theming" },
  ],
  a11ySpecs: [
    "Each brand theme must independently meet contrast requirements — theming can break accessibility",
    "Test WCAG 4.5:1 text contrast for every brand palette",
    "Focus indicators must be visible in every theme",
  ],
  perfImpact: "low",
  implementationNotes: [
    "CSS variables are the right primitive — JavaScript token injection is slower and harder to manage",
    "Theme application: add data-theme='client-a' on <html> or a root container",
    "Tailwind 4 @theme directive: redefine color tokens per theme in scoped CSS",
    "Token linting: Stylelint rule to prohibit raw hex values in component CSS",
  ],
  checklist: [
    "Two-layer token system: primitive + semantic",
    "All components reference only semantic tokens",
    "Each client theme file overrides only semantic tokens",
    "Contrast tested for every theme variant",
    "Token documentation: semantic token names with use descriptions",
  ],
  relatedEntryIds: ['design-tokens', 'dark-mode-design', 'color-rule', 'component-props'],
  tags: ["multi-brand", "white label", "theming", "design tokens", "brand theming", "token architecture"],
  intentTags: ["improve-aesthetics", "improve-performance"],
  contentStatus: 'hardened',
  content: `
# Multi-Brand Theming

Theme-ability is an architecture decision, not a CSS decision. The right structure makes rebranding a one-file change.

## The Two-Layer Architecture

### Layer 1: Primitive Tokens
All possible values in your design system. Never referenced directly in components.

\`\`\`css
:root {
  --blue-500: #3b82f6;
  --blue-600: #2563eb;
  --slate-900: #0f172a;
  --slate-500: #64748b;
  --white: #ffffff;
}
\`\`\`

### Layer 2: Semantic Tokens
Purpose-named aliases. These are what components use.

\`\`\`css
:root {
  --color-primary:         var(--blue-600);
  --color-primary-hover:   var(--blue-700);
  --color-text:            var(--slate-900);
  --color-text-muted:      var(--slate-500);
  --color-surface:         var(--white);
  --color-surface-raised:  var(--white);
}
\`\`\`

### Theme Override
Only semantic tokens are overridden per brand:

\`\`\`css
/* theme-client-acme.css */
[data-theme="acme"] {
  --color-primary:       #e11d48; /* Acme red */
  --color-primary-hover: #be123c;
}
\`\`\`

Apply with: \`<html data-theme="acme">\`

## Component Rule

\`\`\`css
/* ✅ Correct — uses semantic token */
.button-primary { background: var(--color-primary); }

/* ❌ Wrong — uses primitive — won't theme */
.button-primary { background: var(--blue-600); }

/* ❌ Wrong — hardcoded — definitely won't theme */
.button-primary { background: #2563eb; }
\`\`\`

## Minimal Viable Semantic Tokens

Start with 10–15 tokens maximum:

\`\`\`
--color-primary, --color-primary-hover
--color-surface, --color-surface-raised
--color-text, --color-text-muted
--color-border
--color-success, --color-warning, --color-error
\`\`\`

Expand only when a new theming need arises.
`,
};
