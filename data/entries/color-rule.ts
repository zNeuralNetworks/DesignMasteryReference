import { ReferenceEntry } from '../../types';

export const color_rule: ReferenceEntry = {
  id: "color-rule",
  title: "The 60-30-10 Rule",
  domain: "color",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "marketing", "visual-design"],
  confidenceScore: 92,
  slug: "color-rule",
  complexity: "beginner",
  description: "A timeless decorating rule that helps you create a balanced color palette easily.",
  quickTake: "The 60-30-10 rule is a proportional guideline for distributing colors in a composition to ensure visual balance and hierarchy.",
  whyItMatters: "Choosing colors is easy; balancing them is hard. This rule prevents 'Color Overload' and ensures that your accent colors (CTAs) actually stand out against a neutral background.",
  mechanism: [
    "60% Primary (Neutral): The dominant color, usually the background or large surfaces (e.g., White, Light Gray, or Dark Navy)",
    "30% Secondary (Brand): The supporting color, used for headers, sidebars, or secondary components",
    "10% Accent (Action): The 'pop' of color used exclusively for interactive elements like buttons and links"
  ],
  whenToUse: [
    "Creating a new brand identity or design system",
    "Designing marketing landing pages and hero sections",
    "Simplifying a cluttered or 'rainbow' interface"
  ],
  whenNotToUse: [
    "Experimental or 'Brutalist' designs that intentionally break balance",
    "Data-heavy dashboards where color is used semantically for many categories",
    "Monochromatic designs where only one hue is used in various shades"
  ],
  tradeoffs: [
    { pro: "Guaranteed visual balance and professional look", con: "Can feel formulaic or 'too safe' for creative brands" },
    { pro: "Makes CTAs highly effective and easy to find", con: "Requires discipline to not 'leak' the accent color into other elements" }
  ],
  failureModes: [
    "The 'Rainbow' Effect: Using 5-6 colors in equal proportions, confusing the user",
    "Accent Dilution: Using the 10% accent color for non-interactive elements, weakening its signal",
    "Low Contrast: Choosing a primary and secondary color that are too similar in value"
  ],
  alternatives: [
    { entryId: "dark-mode-design", condition: "Use to adjust the 60-30-10 proportions for dark themes" },
    { entryId: "color-blindness", condition: "Use to ensure your 10% accent color is accessible" }
  ],
  a11ySpecs: [
    "Ensure the 10% accent color has a 4.5:1 contrast ratio against the 60% primary color",
    "Don't rely solely on the 10% color to convey meaning (double-encode with icons)",
    "Test the palette in grayscale to ensure the 10% accent is the most prominent value"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Define these proportions in your CSS variables or Tailwind config",
    "Use 'bg-primary', 'bg-secondary', and 'bg-accent' semantic names",
    "Apply the accent color only to the most important action on the page"
  ],
  checklist: [
    "Assigned each color a semantic job before adding palette variation",
    "Reserved accent color for action, state, or hierarchy signals",
    "Checked contrast and meaning in light, dark, and high-contrast contexts"
  ],
  relatedEntryIds: ['typography-scale', 'design-tokens', 'gradient-mesh'],
  interactiveComponent: "ColorRuleDemo",
  tags: ["Visual Design","Colors","UI","color system","too many colors","colors feel random","fix colors","no color consistency","clashing colors"],
  contentStatus: 'draft',
  content: `

# Balancing Colors

Struggling with color usage? The **60-30-10 Rule** is a classic principle used in interior design and UI.

*   **60% Primary Color**: The neutral background. It creates the canvas (usually White, Cream, or Dark Grey).
*   **30% Secondary Color**: The supporting color. Used for cards, sidebars, or headers.
*   **10% Accent Color**: The "pop". Used for Call-to-Actions (Buttons, Links, Alerts).
    
`,
  intentTags: ["improve-aesthetics", "fix-accessibility"],
};
