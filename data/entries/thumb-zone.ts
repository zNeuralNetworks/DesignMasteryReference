import { ReferenceEntry } from '../../types';

export const thumb_zone: ReferenceEntry = {
  id: "thumb-zone",
  title: "The Thumb Zone",
  domain: "layout",
  format: "pattern",
  verdict: "recommended",
  useContext: ["mobile", "consumer", "saas"],
  confidenceScore: 95,
  slug: "thumb-zone",
  complexity: "beginner",
  description: "Designing for how users actually hold their phones.",
  quickTake: "The Thumb Zone is the area of a mobile screen that is easily reachable with the thumb when holding the device with one hand.",
  whyItMatters: "Nearly 50% of users hold their phones with one hand. If critical actions (like 'Buy' or 'Submit') are placed in the 'Hard to Reach' zone (top corners), you increase friction and physical strain for the user.",
  mechanism: [
    "Place primary actions in the bottom third of the screen (the 'Easy' zone)",
    "Place secondary or destructive actions in the top third (the 'Hard' zone) to prevent accidental taps",
    "Use large touch targets (at least 44x44px) to account for thumb inaccuracy",
    "Consider 'Bottom Navigation' and 'Floating Action Buttons' (FABs) to keep key controls within reach"
  ],
  whenToUse: [
    "Designing any mobile-first or responsive web application",
    "Optimizing high-frequency interactive flows (e.g., social feeds, checkout)",
    "Creating 'One-Handed' modes for large-screen devices"
  ],
  whenNotToUse: [
    "Desktop-only applications where mouse precision is high",
    "Tablet apps where two-handed use is the norm",
    "When the UI pattern (like a top search bar) is so ingrained that moving it would confuse users"
  ],
  tradeoffs: [
    { pro: "Significantly improves ergonomic comfort and task speed", con: "Can conflict with traditional 'Top-Down' information hierarchy" },
    { pro: "Reduces accidental taps on critical or destructive actions", con: "Requires careful layout planning to avoid 'Bottom-Heavy' designs" }
  ],
  failureModes: [
    "The 'Stretch' Problem: Placing the 'Back' button in the top-left corner, requiring a two-handed grip",
    "Small Targets: Using tiny text links in the thumb zone that are hard to hit accurately",
    "Ignoring Screen Size: Not accounting for the 'Safe Area' on modern notched or curved displays"
  ],
  alternatives: [
    { entryId: "fitts-law", condition: "Use to understand the mathematical basis for target size and distance" },
    { entryId: "swipe-gestures", condition: "Use to provide alternative navigation that doesn't require precise tapping" }
  ],
  a11ySpecs: [
    "Ensure touch targets are at least 44x44 CSS pixels",
    "Provide sufficient spacing between interactive elements to prevent 'Fat Finger' errors",
    "Maintain a logical focus order that matches the visual layout"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use Tailwind's \`h-11 w-11\` (44px) for minimum touch target sizes",
    "Leverage 'Safe Area' insets (\`env(safe-area-inset-bottom)\`) for modern mobile browsers",
    "Test your UI with your own thumb—if you have to stretch, it's poorly designed"
  ],
  checklist: [
    "Placed primary mobile actions in reachable zones for one-handed use",
    "Kept destructive and secondary actions away from accidental thumb paths",
    "Tested with device sizes that reflect the target audience"
  ],
  relatedEntryIds: ['fitts-law', 'swipe-gestures', 'micro-interactions'],
  interactiveComponent: "ThumbZoneDemo",
  tags: ["Mobile","Responsive","Touch"],
  contentStatus: 'draft',
  content: `

# Reachability

Steven Hoober's research shows that 49% of users hold their phone with one hand. The "Thumb Zone" is the area of the screen comfortable to reach with the thumb.
    
`,
  intentTags: ["fix-alignment", "improve-feedback"],
};
