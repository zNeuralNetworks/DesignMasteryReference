import { ReferenceEntry } from '../../types';

export const dark_mode_design: ReferenceEntry = {
  id: "dark-mode-design",
  title: "Dark Mode Best Practices",
  domain: "color",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "mobile", "devtools"],
  confidenceScore: 96,
  slug: "dark-mode-design",
  complexity: "intermediate",
  description: "How to implement dark themes that reduce eye strain without sacrificing readability.",
  quickTake: "Dark mode is a functional requirement for modern professional tools, reducing eye strain in low-light environments and improving battery life on OLED screens.",
  whyItMatters: "For users spending 8+ hours a day in your app (developers, designers, analysts), dark mode is a health and productivity feature, not just an aesthetic choice.",
  mechanism: [
    "Use dark gray (e.g., #121212) instead of pure black to reduce 'smearing' and eye strain",
    "Desaturate primary and secondary colors to maintain contrast without 'vibration'",
    "Invert elevation logic: lighter surfaces represent higher elevation in dark mode",
    "Ensure all text meets WCAG AA contrast ratios against dark backgrounds"
  ],
  whenToUse: [
    "Professional tools used for long sessions",
    "Entertainment and media consumption apps",
    "Mobile apps where battery saving is a priority"
  ],
  whenNotToUse: [
    "Apps primarily used outdoors in direct sunlight",
    "Brand identities that rely on high-vibrancy, light-dependent aesthetics",
    "Simple landing pages where the maintenance cost of two themes isn't justified"
  ],
  tradeoffs: [
    { pro: "Significantly reduced eye strain for power users", con: "Doubles the design and QA effort for every new feature" },
    { pro: "Modern, 'premium' aesthetic appeal", con: "Accessibility (contrast) is much harder to get right in dark mode" }
  ],
  failureModes: [
    "Pure Black Backgrounds: Causing high-contrast 'halo' effects and OLED smearing",
    "Vibrating Colors: Using high-saturation blues or reds that 'glow' painfully against dark gray",
    "Inconsistent Elevation: Using shadows that are invisible in dark mode instead of surface lightening"
  ],
  alternatives: [
    { entryId: "design-tokens", condition: "Use to manage theme switching via semantic variables" },
    { entryId: "color-blindness", condition: "Use to ensure dark mode colors are still distinguishable" }
  ],
  a11ySpecs: [
    "Minimum contrast ratio of 4.5:1 for body text",
    "Ensure 'Focus' states are even more prominent in dark mode",
    "Avoid using color alone to distinguish between surfaces"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use CSS Variables (\`--bg-primary\`) to handle theme switching seamlessly",
    "Leverage Tailwind's \`dark:\` modifier for targeted overrides",
    "Automatically detect system preference using \`(prefers-color-scheme: dark)\`"
  ],
  checklist: [
    "Audited contrast in dark mode instead of inverting the light palette",
    "Defined elevation, border, and focus tokens for dark surfaces",
    "Tested charts, alerts, and disabled states against dark backgrounds"
  ],
  relatedEntryIds: ['color-rule', 'color-blindness'],
  interactiveComponent: "DarkMode",
  tags: ["Accessibility","Theming","Colors","dark mode","light mode","fix dark mode","eye strain","low contrast","dark theme looks bad"],
  contentStatus: 'hardened',
  content: `

# Designing for the Dark

Dark mode is not an inversion of light mode. Inverting a light palette — flipping hex values or reversing the Tailwind shade scale — produces vibrating colors, broken elevation, and failed contrast. Each surface, elevation, and semantic color must be reconsidered from first principles.

### The darkness spectrum

Pure black (\`#000000\`) causes two problems on OLED displays: *smearing* (bright text on pure black creates a comet-tail artifact on some screens) and *flat elevation* (you lose the ability to communicate depth via surface lightness). Start with a base around \`#0f0f0f\` to \`#1a1a1a\` and build upward.

Tailwind's \`slate-950\` / \`slate-900\` / \`slate-800\` scale works well as a starting point. Reserve lighter grays for elevated surfaces (modals, dropdowns, tooltips).

### Elevation in dark mode

In light mode, elevation is signaled by shadows. In dark mode, shadows are invisible. Instead, use *surface lightness* to convey elevation:

| Layer         | Approximate tone |
| ------------- | ---------------- |
| Page base     | slate-950        |
| Card surface  | slate-900        |
| Modal / sheet | slate-800        |
| Tooltip       | slate-700        |

### Color desaturation

High-saturation accent colors (a vivid \`blue-600\` for instance) "glow" against dark backgrounds and cause eye fatigue. In dark mode, shift accents toward lighter, less saturated values: \`blue-400\` reads clearly without vibrating.

### Semantic color recalibration

Error red, success green, and warning amber must all be retested for contrast on dark surfaces. The WCAG AA 4.5:1 requirement applies equally. Use a contrast checker — never eyeball it.

### CSS implementation

\`\`\`css
:root {
  --bg-base: #111318;
  --bg-surface: #1c1f26;
  --bg-elevated: #252830;
  --text-primary: #e8eaed;
  --text-muted: #9aa0ab;
  --border: rgba(255,255,255,0.08);
}
\`\`\`

Prefer semantic tokens over raw color values. Switching themes becomes a token swap, not a component rewrite.

### System preference detection

\`\`\`css
@media (prefers-color-scheme: dark) {
  :root { /* dark token overrides */ }
}
\`\`\`

Also expose a manual toggle — some users in bright environments want light mode even if their OS is set to dark.
`,
  intentTags: ["improve-aesthetics", "fix-accessibility"],
};
