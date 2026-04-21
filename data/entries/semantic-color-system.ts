import { ReferenceEntry } from '../../types';

export const semantic_color_system: ReferenceEntry = {
  id: "semantic-color-system",
  title: "Semantic Color System",
  domain: "color",
  format: "system",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile", "consumer"],
  confidenceScore: 93,
  slug: "semantic-color-system",
  complexity: "intermediate",
  description: "Organizing a product's color palette by purpose rather than hue — separating brand, semantic (success/warning/error), and surface colors to enable consistent application at scale.",
  quickTake: "Name colors by role, not appearance. '--color-success' is better than '--color-green' because it can be purple in a different theme. Reserve semantic colors exclusively for their role — if green is 'success', never use green decoratively. Semantic color systems scale across dark mode, theming, and future palette changes.",
  whyItMatters: "Products with ad hoc color decisions end up with 40+ color values — slightly different greys, multiple blues, multiple greens with no clear purpose. Semantic systems reduce to 10–15 intentional tokens, make dark mode straightforward (just swap surface values), and make accessibility audits manageable (test 15 combinations, not 400).",
  mechanism: [
    "Brand colors: primary (actions, links, brand identity) and primary hover state",
    "Semantic colors: success (green), warning (amber), error (red), info (blue) — used exclusively for status",
    "Surface colors: page background, card, raised surface — the neutral layering stack",
    "Text colors: default (high contrast), muted (secondary), faint (disabled/placeholder)",
  ],
  whenToUse: [
    "All product UI — semantic color systems benefit any product with more than 5 components",
    "Before implementing dark mode — semantic tokens make dark mode a token-swap, not a rewrite",
    "Before white-labeling — semantic system is prerequisite for multi-brand theming",
  ],
  whenNotToUse: [
    "Single-page marketing sites with no repeated UI patterns",
    "Projects where CSS variables/tokens aren't available (very rare legacy contexts)",
  ],
  tradeoffs: [
    { pro: "10–15 tokens cover 95% of color decisions — fast, consistent choices", con: "Requires initial architecture discipline and team adoption" },
    { pro: "Dark mode and theming become straightforward token swaps", con: "Strict semantic meaning requires resist 'just use success green for this decorative flourish'" },
  ],
  failureModes: [
    "Using semantic colors decoratively: using error-red as a stylistic accent — trains users to ignore red warnings",
    "Too many tokens: 80+ semantic tokens nobody can remember their purpose",
    "No enforcement: developers use raw hex values under deadline — system degrades",
    "Hardcoded surface colors: bg-white in components breaks in dark mode",
  ],
  alternatives: [
    { entryId: "design-tokens", condition: "Design tokens are the implementation mechanism for semantic color systems" },
    { entryId: "multi-brand-theming", condition: "Semantic colors are the foundation layer for multi-brand theming" },
  ],
  a11ySpecs: [
    "Test all semantic color roles against their typical backgrounds (success text on success background, etc.)",
    "Error color: red alone doesn't work for protanopia — error state must also use icon + text, not color only",
    "Ensure semantic color tokens meet 3:1 minimum contrast for UI elements, 4.5:1 for text",
  ],
  perfImpact: "low",
  implementationNotes: [
    "CSS custom properties: best approach — no build step, dynamic theming, broad support",
    "Tailwind 4 @theme: define semantic tokens in theme block, generates utilities automatically",
    "Naming convention: --color-[role] or --[role]-[variant] (--color-primary, --color-primary-hover)",
    "Token documentation: maintain a Notion/Storybook page mapping each token to its use case",
  ],
  checklist: [
    "Semantic tokens defined for: brand, success, warning, error, surface, text",
    "No raw hex or primitive values in component styles",
    "Semantic colors reserved exclusively for their role (no decorative use of error red)",
    "Dark mode: surface tokens swap to dark values, semantic tokens adjust for dark backgrounds",
  ],
  relatedEntryIds: ['design-tokens', 'multi-brand-theming', 'dark-mode-design', 'color-rule'],
  tags: ["semantic colors", "color system", "design tokens", "color roles", "brand colors", "success warning error"],
  intentTags: ["improve-aesthetics", "improve-performance"],
  content: `
# Semantic Color System

Name colors by what they mean, not what they look like.

## The Structure

### Brand Layer
\`\`\`css
--color-primary:       #2563eb;  /* buttons, links, active states */
--color-primary-hover: #1d4ed8;
--color-primary-bg:    #eff6ff;  /* light tint for badges, backgrounds */
\`\`\`

### Semantic Layer (Status)
\`\`\`css
--color-success:    #16a34a;
--color-success-bg: #f0fdf4;
--color-warning:    #d97706;
--color-warning-bg: #fffbeb;
--color-error:      #dc2626;
--color-error-bg:   #fef2f2;
--color-info:       #0284c7;
--color-info-bg:    #f0f9ff;
\`\`\`

### Surface Layer (Neutral)
\`\`\`css
--color-page:       #f8fafc;  /* page background */
--color-surface:    #ffffff;  /* card/container */
--color-raised:     #f1f5f9;  /* secondary surface */
--color-border:     #e2e8f0;
\`\`\`

### Text Layer
\`\`\`css
--color-text:        #0f172a;  /* default */
--color-text-muted:  #64748b;  /* secondary */
--color-text-faint:  #94a3b8;  /* disabled, placeholder */
\`\`\`

## The Reserved Use Rule

**--color-success is for success states only.** Never use it for decorative accents because you like the green. Never use --color-error for a sale badge.

This matters because semantic colors build user expectations. Red means something is wrong. Green means something succeeded. Using them decoratively destroys that signal.

## Dark Mode Token Swap

\`\`\`css
[data-theme="dark"] {
  --color-page:    #0f172a;
  --color-surface: #1e293b;
  --color-raised:  #334155;
  --color-border:  rgba(255,255,255,0.08);
  --color-text:    #f8fafc;
  --color-text-muted: #94a3b8;
}
\`\`\`

Components that use semantic tokens get dark mode for free. Components with hardcoded \`bg-white\` don't.
`,
};
