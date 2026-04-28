import { ReferenceEntry } from '../../types';

export const fluid_motion: ReferenceEntry = {
  id: "fluid-motion",
  title: "Fluid Motion Design",
  domain: "motion",
  format: "style",
  verdict: "recommended",
  useContext: ["saas", "mobile", "consumer"],
  confidenceScore: 95,
  slug: "fluid-motion",
  complexity: "intermediate",
  description: "Creating natural, physics-based animations that guide the user eye.",
  quickTake: "Fluid motion design uses physics-based principles (springs, inertia) to make UI transitions feel natural, predictable, and premium.",
  whyItMatters: "Standard linear animations feel robotic and 'cheap'. Fluid motion creates a sense of quality and craftsmanship, helping users maintain spatial context during layout changes.",
  mechanism: [
    "Use 'Spring' physics instead of 'Duration' for natural movement",
    "Apply 'Stagger' effects to reveal content progressively",
    "Leverage 'Shared Layout' transitions to morph elements between states",
    "Use 'Exit' animations to prevent elements from simply vanishing"
  ],
  whenToUse: [
    "Page transitions and route changes",
    "Expanding cards or modal entrances",
    "List reordering or filtering animations"
  ],
  whenNotToUse: [
    "High-frequency utility actions where speed is the only goal",
    "When motion would distract from critical data consumption",
    "Low-power devices where complex physics calculations cause lag"
  ],
  tradeoffs: [
    { pro: "Creates a highly polished, 'App-like' feel", con: "Requires more complex implementation (e.g., Framer Motion)" },
    { pro: "Reduces cognitive load by maintaining spatial context", con: "Can be over-engineered, leading to 'Motion Sickness'" }
  ],
  failureModes: [
    "The 'Bouncy' UI: Using too much spring tension, making elements feel unstable",
    "Slow Transitions: Forcing users to wait for an animation to finish before acting",
    "Inconsistent Easing: Mixing linear and spring animations in the same view"
  ],
  alternatives: [
    { entryId: "micro-interactions", condition: "Use for small, button-level feedback" },
    { entryId: "scroll-animations", condition: "Use for animations driven by scroll position" }
  ],
  a11ySpecs: [
    "Always respect 'prefers-reduced-motion' media query",
    "Ensure animations don't exceed 500ms for routine tasks",
    "Avoid flashing or high-frequency oscillating animations"
  ],
  perfImpact: "medium",
  implementationNotes: [
    "Use 'framer-motion' for its robust spring and layout transition support",
    "Animate 'transform' and 'opacity' to ensure GPU acceleration",
    "Use 'AnimatePresence' to handle exit animations for unmounting components"
  ],
  checklist: [
    "Used motion to preserve spatial continuity between states",
    "Kept easing and duration consistent across related transitions",
    "Provided reduced-motion fallbacks that preserve state clarity"
  ],
  relatedEntryIds: ['scroll-animations', 'micro-interactions'],
  interactiveComponent: "FluidMotion",
  tags: ["Framer Motion","Animation"],
  contentStatus: 'hardened',
  content: `

# Fluid Motion

Motion shouldn't just be decoration; it should describe spatial relationships.

*   **Ease-out**: Objects entering the screen should slow down as they arrive (decelerate).
*   **Ease-in**: Objects leaving should speed up (accelerate).
*   **Shared Layout**: Elements morphing from one state to another (like a card expanding to a page) help maintain context.

> In Framer Motion, using \`layout\` props automatically animates changes in layout (width, height, position) with high performance.
    
`,
  intentTags: ["improve-aesthetics", "improve-feedback"],
};
