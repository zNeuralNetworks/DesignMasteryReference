import { ReferenceEntry } from '../../types';

export const glassmorphism: ReferenceEntry = {
  id: "glassmorphism",
  title: "Glassmorphism Deep Dive",
  domain: "color",
  format: "style",
  verdict: "conditional",
  useContext: ["saas", "mobile", "consumer"],
  confidenceScore: 88,
  slug: "glassmorphism",
  complexity: "intermediate",
  description: "Learn how to create the frosted glass effect using backdrop filters and translucency.",
  quickTake: "Glassmorphism uses background blur and semi-transparency to create a 'frosted glass' aesthetic that adds depth and modern flair to a UI.",
  whyItMatters: "In a world of 'flat' design, glassmorphism provides a way to establish hierarchy and depth without relying on heavy shadows. It creates a premium, high-tech feel.",
  mechanism: [
    "Apply a semi-transparent background color (e.g., white with 10-20% opacity)",
    "Use 'backdrop-filter: blur()' to blur the content behind the element",
    "Add a thin, semi-transparent border to define the edges of the 'glass'",
    "Place the element over a vibrant, colorful background to maximize the effect"
  ],
  whenToUse: [
    "Floating navigation bars and headers",
    "Modal overlays and slide-over panels",
    "Dashboard widgets that need to stand out from a complex background"
  ],
  whenNotToUse: [
    "Low-power devices or older browsers that don't support backdrop-filter",
    "When readability is critical and the background content is too busy",
    "In highly 'minimalist' or 'brutalist' designs where depth is discouraged"
  ],
  tradeoffs: [
    { pro: "Adds a modern, premium sense of depth and layering", con: "High performance cost due to real-time background blurring" },
    { pro: "Works well with vibrant, brand-heavy backgrounds", con: "Can compromise text legibility if not carefully balanced" }
  ],
  failureModes: [
    "The 'Muddy' Look: Using too much opacity, making the glass look like solid gray",
    "Legibility Fail: Placing thin text over a busy, blurred background without enough contrast",
    "Performance Lag: Over-using backdrop-blur on many elements simultaneously"
  ],
  alternatives: [
    { entryId: "neumorphism", condition: "Use for a different approach to depth and soft UI" },
    { entryId: "dark-mode-design", condition: "Use to ensure glass effects work across light and dark themes" }
  ],
  a11ySpecs: [
    "Ensure text contrast meets WCAG standards against the blurred background",
    "Provide a solid background fallback for users with 'reduced transparency' settings",
    "Avoid using glass effects for primary content areas"
  ],
  perfImpact: "high",
  implementationNotes: [
    "Use Tailwind's \`backdrop-blur-*\` and \`bg-white/10\` utilities",
    "Always include a fallback \`bg-white\` for browsers without backdrop-filter support",
    "Limit the blur radius (10px-20px) to balance aesthetics and performance"
  ],
  checklist: [
    "Verified text contrast against the actual blurred background",
    "Provided a solid fallback for unsupported backdrop-filter environments",
    "Limited simultaneous blur layers on low-power devices"
  ],
  relatedEntryIds: ['neumorphism', 'dark-mode-design', 'gradient-mesh'],
  interactiveComponent: "Glassmorphism",
  tags: ["CSS","Tailwind","Visual Design"],
  contentStatus: 'hardened',
  content: `

# Glassmorphism

Glassmorphism is a trend that emphasizes light and dark capabilities to create a sense of depth. Key characteristics include:

*   **Translucency**: The background is blurred, creating a "frosted glass" look.
*   **Vivid colors**: Use colorful backgrounds to highlight the blurred effect.
*   **Subtle borders**: A semi-transparent white border adds definition.

### CSS Implementation
The core property is \`backdrop-filter: blur(10px)\`. In Tailwind, we use \`backdrop-blur-md\` or \`backdrop-blur-xl\`.

> Always add a fallback background color for browsers that don't support backdrop-filter.
    
`,
  intentTags: ["improve-aesthetics"],
};
