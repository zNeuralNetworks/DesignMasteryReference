import { ReferenceEntry } from '../../types';

export const fitts_law: ReferenceEntry = {
  id: "fitts-law",
  title: "Fitts's Law",
  domain: "psychology",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "mobile", "dashboard"],
  confidenceScore: 98,
  slug: "fitts-law",
  complexity: "intermediate",
  description: "The time required to rapidly move to a target area is a function of the ratio between the distance to the target and the width of the target.",
  quickTake: "Fitts's Law states that the larger and closer a target is, the faster it is to acquire. Conversely, small, distant targets are the hardest to hit.",
  whyItMatters: "In UI design, this dictates the size and placement of primary actions. If a button is too small or too far from the user's current focus, task completion time spikes.",
  mechanism: [
    "Identify the user's current cursor or thumb position",
    "Calculate the distance to the target action",
    "Increase the target's interactive area (hitbox) for critical actions",
    "Place related actions close to each other to minimize travel time"
  ],
  whenToUse: [
    "Designing primary Call-to-Action (CTA) buttons",
    "Mobile navigation and 'Thumb Zone' optimization",
    "Contextual menus (Right-click or hover menus)"
  ],
  whenNotToUse: [
    "Destructive actions (e.g., 'Delete Account') where you want to *increase* friction",
    "Expert tools where users have high precision and require high density",
    "When target size would consume too much visual real estate"
  ],
  tradeoffs: [
    { pro: "Faster task completion and reduced user frustration", con: "Larger targets consume more screen real estate" },
    { pro: "Better accessibility for users with motor impairments", con: "Can lead to 'clunky' or oversized UI if over-applied" }
  ],
  failureModes: [
    "The 'Pixel Hunt': Tiny buttons that are hard to click on high-DPI screens",
    "Travel Fatigue: Placing the 'Next' button on the opposite side of the screen from the input",
    "Hitbox Mismatch: A button that looks large but only has a small clickable text area"
  ],
  alternatives: [
    { entryId: "thumb-zone", condition: "Use specifically for mobile ergonomic optimization" },
    { entryId: "progressive-disclosure", condition: "Use to hide secondary actions rather than making them small" }
  ],
  a11ySpecs: [
    "Minimum touch target size of 44x44px (Apple) or 48x48px (Google)",
    "Ensure interactive areas are clearly defined in the DOM",
    "Avoid placing targets too close to each other to prevent accidental clicks"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use padding instead of margins to increase the clickable area of a button",
    "Leverage 'Magic Corners' (the 1px at the edge of the screen) for global triggers",
    "Test with a 'fat finger' emulator to verify mobile hitboxes"
  ],
  checklist: [
    "Sized high-frequency targets for reliable pointer and touch activation",
    "Placed primary actions close to the user’s current interaction path",
    "Checked spacing prevents adjacent target mis-taps"
  ],
  relatedEntryIds: ['hicks-law', 'serial-position-effect', 'swipe-gestures'],
  interactiveComponent: "FittsLawDemo",
  tags: ["Psychology","UX","Mobile","buttons too small","hard to tap","small click targets","fix touch targets","mobile usability","tap accuracy"],
  contentStatus: 'draft',
  content: `

# Target Acquisition

Fitts's Law is a predictive model of human movement. It fundamentally says: **Big targets close to the starting point are fastest to hit.**

### The Formula
\`T = a + b * log2(D/W + 1)\`
    
`,
  intentTags: ["fix-alignment", "improve-aesthetics"],
};
