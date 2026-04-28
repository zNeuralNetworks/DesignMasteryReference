import { ReferenceEntry } from '../../types';

export const color_blindness: ReferenceEntry = {
  id: "color-blindness",
  title: "Designing for Color Blindness",
  domain: "color",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile"],
  confidenceScore: 98,
  slug: "color-blindness",
  complexity: "intermediate",
  description: "Why you should never rely on color alone to convey meaning.",
  quickTake: "Designing for color blindness isn't just about 'accessibility compliance'; it's about ensuring your UI is robust and unambiguous for all users.",
  whyItMatters: "Approximately 8% of men and 0.5% of women have some form of color vision deficiency. If color is your only signal, you are effectively locking out 1 in 12 users from critical information.",
  mechanism: [
    "Double Encoding: Pair color with another visual cue (icons, patterns, or text)",
    "Contrast Testing: Ensure information is still clear in grayscale",
    "Color Selection: Use color palettes that are distinct for common types (Deuteranopia, Protanopia)",
    "Direct Labeling: Label data points directly in charts instead of relying on a color legend"
  ],
  whenToUse: [
    "Status indicators (Success/Error/Warning)",
    "Data visualization and complex charts",
    "Interactive elements and navigation links"
  ],
  whenNotToUse: [
    "Purely decorative elements where meaning is not conveyed",
    "When other visual cues (like text) already provide 100% of the context"
  ],
  tradeoffs: [
    { pro: "Universal usability and legal compliance", con: "Can lead to more 'visual noise' if icons are added everywhere" },
    { pro: "Robust UI that works in low-light or high-glare conditions", con: "Requires more careful planning of the visual system" }
  ],
  failureModes: [
    "The 'Red-Green' Trap: Using only red and green to indicate stop/go or error/success",
    "Legend Dependency: Forcing users to match colors in a chart to a distant legend",
    "Low Contrast Text: Using colored text on a similar-value background"
  ],
  alternatives: [
    { entryId: "dark-mode-design", condition: "Use to ensure contrast is maintained across themes" },
    { entryId: "typography-scale", condition: "Use weight and size to create hierarchy without color" }
  ],
  a11ySpecs: [
    "WCAG 2.1 Level AA requires a contrast ratio of at least 4.5:1 for normal text",
    "Ensure interactive elements have a visible focus state that doesn't rely on color",
    "Use patterns or textures in charts to distinguish data series"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use tools like 'Stark' or browser extensions to simulate CVD in real-time",
    "Leverage Lucide icons to double-encode status (e.g., CheckCircle for success)",
    "Test your UI in 'Grayscale' mode—if you can't use it, it's not accessible"
  ],
  checklist: [
    "Removed color-only communication from status, charts, and validation states",
    "Checked palette distinguishability with common color vision deficiencies",
    "Paired semantic color with text, icon, shape, or pattern encoding"
  ],
  relatedEntryIds: ['focus-management', 'color-rule', 'dark-mode-design'],
  interactiveComponent: "ColorBlindnessDemo",
  tags: ["Accessibility","Inclusion","Visual Design"],
  contentStatus: 'hardened',
  content: `

# Beyond Color

Approximately 1 in 12 men are color blind. If your UI relies solely on Red for "Error" and Green for "Success", a significant portion of your users cannot tell the difference.

### The Deuteranopia Problem
Deuteranopia (Green-blindness) is the most common form. It makes reds and greens look like similar shades of muddy yellow-brown.

### The Solution: Double Encoding
Always pair color with a secondary visual cue:
*   **Icons**: Use a Checkmark vs an Alert Triangle.
*   **Text**: Explicitly state "Success" or "Error".
    
`,
  intentTags: ["fix-accessibility", "improve-aesthetics"],
};
