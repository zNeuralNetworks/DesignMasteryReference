import { ReferenceEntry } from '../../types';

export const theme_bioluminescent: ReferenceEntry = {
  id: "theme-bioluminescent",
  title: "Theme: Bioluminescent",
  domain: "color",
  format: "style",
  verdict: "recommended",
  useContext: ["saas", "gaming", "devtools"],
  confidenceScore: 92,
  slug: "theme-bioluminescent",
  complexity: "intermediate",
  description: "A deep-sea inspired aesthetic combining dark navy backgrounds with glowing organic accents.",
  quickTake: "The Bioluminescent Theme is a specialized dark mode aesthetic that uses deep, saturated blues and high-contrast neon accents to create an immersive, futuristic, and organic feel.",
  whyItMatters: "Standard dark modes can feel cold and clinical. Bioluminescent design adds a layer of 'Life' and 'Energy' to an interface, making it feel more like a living organism than a static tool. It is particularly effective for high-focus environments where visual hierarchy is driven by light emission.",
  mechanism: [
    "Abyssal Backgrounds: Using extremely deep navy or indigo (\`#020617\`) to create a sense of infinite depth",
    "Electric Accents: Using vibrant cyans, limes, and purples that appear to 'glow' against the dark backdrop",
    "Glow Effects: Applying subtle \`box-shadow\` or \`drop-shadow\` halos to interactive elements to simulate light emission",
    "Organic Gradients: Using soft, non-linear gradients that mimic the natural light patterns of deep-sea life"
  ],
  whenToUse: [
    "Designing developer tools, IDEs, or terminal emulators",
    "Creating immersive gaming interfaces or crypto-trading platforms",
    "Building 'Night Mode' alternatives that need to feel more premium than standard gray themes"
  ],
  whenNotToUse: [
    "In applications that require high readability for long-form text (stick to high-contrast light modes)",
    "When the brand identity is rooted in 'Traditional' or 'Conservative' values",
    "In environments with high ambient light (e.g., outdoor use) where dark themes are hard to see"
  ],
  tradeoffs: [
    { pro: "Creates an extremely immersive and visually striking user experience", con: "Can be difficult to maintain accessibility (contrast) for all users" },
    { pro: "Reduces eye strain in low-light environments", con: "Requires careful management of 'Glow' effects to avoid visual clutter" }
  ],
  failureModes: [
    "The 'Neon Mess': Using too many vibrant colors, making the UI feel like a 'Las Vegas' sign",
    "Contrast Failure: Not providing enough contrast between the deep background and the text",
    "Over-Glow: Using shadows that are too large or bright, making the UI feel 'blurry' or 'unfocused'"
  ],
  alternatives: [
    { entryId: "dark-mode-design", condition: "Use for a more standard, neutral dark mode approach" },
    { entryId: "gradient-mesh", condition: "Use to create the organic, moving backgrounds that complement this theme" }
  ],
  a11ySpecs: [
    "Ensure all text meets WCAG 2.1 AA contrast requirements against the deep background",
    "Provide a 'High Contrast' mode for users with visual impairments",
    "Don't rely on 'Glow' alone to indicate interactive states (use borders or icons)"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use Tailwind's \`bg-slate-950\` and \`text-cyan-400\` as a starting point",
    "Leverage \`drop-shadow-xl\` with custom colors for the bioluminescent glow",
    "Apply subtle animations to the glow effects to make them feel 'alive'"
  ],
  checklist: [
    "Constrained glow effects to interaction or hierarchy signals",
    "Audited neon accent contrast against deep backgrounds",
    "Provided non-glow affordances for focus and active states"
  ],
  relatedEntryIds: ['theme-swiss-polarity', 'glassmorphism', 'gradient-mesh', 'color-rule'],
  interactiveComponent: "BioluminescentDemo",
  tags: ["Visual Design","Dark Mode","CSS","Theming"],
  contentStatus: 'hardened',
  content: `

# Bioluminescent Design

Inspired by the deep ocean, **Bioluminescent UI** is a specialized dark mode aesthetic. Unlike standard dark modes (which use neutral greys), this theme relies on deep saturated blues and high-contrast neon accents.

### Color Palette
*   **Abyssal Background**: \`#020617\` (Slate 950) or deep indigo. It creates a sense of infinite depth.
*   **Electric Accents**: Cyan (\`#06b6d4\`) and Lime (\`#84cc16\`) mimic the light produced by deep-sea organisms.
*   **Glow Effects**: Using CSS \`box-shadow\` or \`drop-shadow\` to create a halo around interactive elements, simulating light emission.

### Usage
This theme is popular in developer tools, crypto platforms, and gaming interfaces where a "futuristic" or "immersive" feel is desired.
    
`,
  intentTags: ["improve-aesthetics"],
};
