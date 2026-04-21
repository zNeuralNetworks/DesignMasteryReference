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
  content: `

# Designing for the Dark

Dark mode isn't just about swapping white for black. It requires careful color calibration to ensure accessibility and comfort.

### Key Rules
1.  **Avoid Pure Black**: Use dark greys (e.g., \`#121212\`) to reduce eye strain and smearing on OLED screens.
2.  **Desaturate Colors**: Bright accent colors vibrate against dark backgrounds. Lower the saturation or use lighter pastel tones.
    
`,
  intentTags: ["improve-aesthetics", "fix-accessibility"],
};
