import { ReferenceEntry } from '../../types';

export const neumorphism: ReferenceEntry = {
  id: "neumorphism",
  title: "Neumorphism (Soft UI)",
  domain: "color",
  format: "style",
  verdict: "conditional",
  useContext: ["consumer", "mobile", "visual-design"],
  confidenceScore: 85,
  slug: "neumorphism",
  complexity: "intermediate",
  description: "The \"New Skeuomorphism\" that uses highlights and shadows to create soft, extruded shapes.",
  quickTake: "Neumorphism (Soft UI) is a visual style that mimics real-world objects by using light and dark shadows to make elements appear as if they are extruded from or recessed into the background.",
  whyItMatters: "Neumorphism provides a tactile, organic feel that stands out from the flat design trend. However, it is notoriously difficult to implement accessibly, as it relies on subtle contrast and shadows to define boundaries.",
  mechanism: [
    "Dual Shadows: Using a light shadow (top-left) and a dark shadow (bottom-right) to create depth",
    "Background Matching: The element's background color must exactly match the page background for the effect to work",
    "Subtle Gradients: Using very soft linear gradients to enhance the 3D 'extrusion' effect",
    "Recessed States: Inverting the shadows to make an element appear 'pressed' or 'inset'"
  ],
  whenToUse: [
    "Designing consumer-facing mobile apps with a 'tactile' or 'premium' feel",
    "Creating calculator, remote control, or music player interfaces",
    "Experimental or brand-heavy projects where visual uniqueness is prioritized over high-density data"
  ],
  whenNotToUse: [
    "Accessibility-critical applications (Government, Healthcare, Enterprise SaaS)",
    "High-density dashboards where boundaries must be sharp and clear",
    "When the background color cannot be strictly controlled or is dynamic"
  ],
  tradeoffs: [
    { pro: "Creates a unique, soft, and modern aesthetic", con: "Extremely poor accessibility due to low contrast boundaries" },
    { pro: "Provides a tactile sense of depth and hierarchy", con: "Very difficult to maintain across different themes (Light/Dark)" }
  ],
  failureModes: [
    "The 'Invisible Button': Using shadows that are too subtle for users with low-vision to see",
    "Contrast Failure: Not providing enough contrast between the 'extruded' surface and the background",
    "Over-Use: Applying neumorphism to every element, making the UI feel 'mushy' and hard to scan"
  ],
  alternatives: [
    { entryId: "glassmorphism", condition: "Use for a more modern, accessible way to create depth" },
    { entryId: "design-tokens", condition: "Use to manage the complex shadow values required for neumorphism" }
  ],
  a11ySpecs: [
    "You MUST provide a high-contrast border or distinct color for interactive states",
    "Don't rely on shadows alone to indicate focus or active states",
    "Test the UI with color-blindness and low-vision simulators"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use 'box-shadow' with multiple values for the light and dark effects",
    "Ensure the background color is a mid-tone (not pure white or black) for the best effect",
    "Use 'inset' shadows for the 'pressed' state of buttons"
  ],
  checklist: [
    "Verified controls remain identifiable without relying on soft shadows",
    "Checked contrast for pressed, disabled, and focused states",
    "Avoided neumorphic styling for critical forms or dense tools"
  ],
  relatedEntryIds: ['glassmorphism', 'dark-mode-design', 'color-rule'],
  interactiveComponent: "Neumorphism",
  tags: ["CSS","Visual Design","Shadows"],
  content: `

# Neumorphism

Neumorphism (Soft UI) mimics real-world objects by using two shadows: a light one (top-left) and a dark one (bottom-right). This creates the illusion that elements are extruded from the background.

### The Code
It relies heavily on \`box-shadow\`.
\`box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;\`
    
`,
  intentTags: ["improve-aesthetics"],
};
