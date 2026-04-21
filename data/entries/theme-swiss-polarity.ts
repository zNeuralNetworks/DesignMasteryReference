import { ReferenceEntry } from '../../types';

export const theme_swiss_polarity: ReferenceEntry = {
  id: "theme-swiss-polarity",
  title: "Theme: Swiss Polarity",
  domain: "color",
  format: "style",
  verdict: "recommended",
  useContext: ["saas", "portfolio", "visual-design"],
  confidenceScore: 94,
  slug: "theme-swiss-polarity",
  complexity: "intermediate",
  description: "A stark, high-contrast aesthetic rooted in the International Typographic Style.",
  quickTake: "Swiss Polarity (Neo-Brutalism) is a stark, high-contrast aesthetic that prioritizes clarity and structure through rigid grids, visible borders, and bold typography.",
  whyItMatters: "In a world of soft shadows and gradients, Swiss Polarity stands out by being 'Architecturally Honest'. It removes all decorative fluff, making the interface feel like a precise, functional tool. It is highly effective for conveying authority, technical precision, and modern sophistication.",
  mechanism: [
    "Visible Grid Lines: Using 1px solid borders (\`border-black\`) to explicitly separate content areas",
    "No Border Radius: Using sharp, 90-degree corners (\`rounded-none\`) for all buttons, cards, and containers",
    "Extreme Contrast: Pairing pure black (\`#000000\`) with off-white (\`#FDFBF7\`) or raw primary colors",
    "Typographic Dominance: Using large, bold, sans-serif fonts (Helvetica, Inter) as the primary visual element"
  ],
  whenToUse: [
    "Designing portfolios for architects, designers, or engineers",
    "Creating technical SaaS tools where precision and clarity are paramount",
    "Building brand-heavy marketing sites that want to convey a 'Modernist' or 'Brutalist' aesthetic"
  ],
  whenNotToUse: [
    "In consumer apps that need to feel 'Friendly', 'Warm', or 'Approachable'",
    "When the content is highly emotional or organic (e.g., a meditation app)",
    "In UIs that require a lot of depth and layering (stick to shadows and gradients)"
  ],
  tradeoffs: [
    { pro: "Creates an extremely clear, structured, and authoritative aesthetic", con: "Can feel 'Cold' or 'Aggressive' to some users" },
    { pro: "Highly accessible due to naturally high contrast", con: "Requires perfect alignment and spacing; any error is immediately visible" }
  ],
  failureModes: [
    "The 'Cluttered' Grid: Using too many visible borders, making the UI feel 'busy' and hard to scan",
    "Lack of Hierarchy: Making everything too bold and high-contrast, so nothing stands out",
    "Inconsistent Spacing: Not following a strict grid, which destroys the 'Swiss' precision"
  ],
  alternatives: [
    { entryId: "bento-grids", condition: "Use to organize content within the Swiss Polarity framework" },
    { entryId: "typography-scale", condition: "Use to ensure your bold typography follows a logical hierarchy" }
  ],
  a11ySpecs: [
    "Naturally high contrast makes this theme very accessible for low-vision users",
    "Ensure that visible borders don't interfere with the ability to identify interactive elements",
    "Use clear focus rings that stand out against the high-contrast background"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use Tailwind's \`rounded-none\`, \`border\`, and \`border-black\` utility classes",
    "Set the base font size slightly larger to emphasize the typographic focus",
    "Use a strict 4px or 8px grid for all margins and paddings"
  ],
  checklist: [
    "Maintained strong hierarchy using spacing, type, and contrast rather than decoration",
    "Checked asymmetric layouts for stable responsive behavior",
    "Kept monochrome restraint from hiding status or interaction signals"
  ],
  relatedEntryIds: ['theme-bioluminescent', 'typography-scale', 'color-rule'],
  interactiveComponent: "SwissPolarityDemo",
  tags: ["Visual Design","Brutalism","Layout","Theming"],
  content: `

# Swiss Polarity (Neo-Brutalism)

**Swiss Polarity** takes the principles of the **International Typographic Style** (1950s) and applies them to modern web interfaces. It creates clarity through extreme contrast and rigid structure.

### Key Characteristics
1.  **Grid Lines**: Visible 1px borders separate content areas explicitly.
2.  **No Border Radius**: Buttons and cards are sharp rectangles (\`rounded-none\`).
3.  **High Contrast**: Pure Black (\`#000000\`) on Off-White (\`#FDFBF7\`) or raw primary colors (Red, Blue).
4.  **Typography**: Large, bold sans-serif fonts (Helvetica, Inter) act as the primary visual element.

### Why it works
It conveys honesty and functionality. By removing shadows, gradients, and rounded corners, the interface feels "raw" and "tool-like".
    
`,
  intentTags: ["improve-aesthetics", "increase-emphasis"],
};
