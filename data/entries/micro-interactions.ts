import { ReferenceEntry } from '../../types';

export const micro_interactions: ReferenceEntry = {
  id: "micro-interactions",
  title: "Mastering Micro-interactions",
  domain: "motion",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "mobile", "consumer"],
  confidenceScore: 95,
  slug: "micro-interactions",
  complexity: "intermediate",
  description: "Small moments of delight that provide feedback and enhance the user experience.",
  quickTake: "Micro-interactions are the 'connective tissue' of a UI, providing instant feedback and making digital products feel tactile and responsive.",
  whyItMatters: "Without micro-interactions, a UI feels static and 'dead'. They guide the user, prevent errors, and create the 'premium' feel that distinguishes top-tier apps.",
  mechanism: [
    "Trigger: The user action (hover, click, scroll) or system event",
    "Rules: The logic of what happens (e.g., button scales down on click)",
    "Feedback: The visual/auditory response (e.g., a subtle spring animation)",
    "Loops & Modes: How the interaction changes over time (e.g., a 'Like' button staying red)"
  ],
  whenToUse: [
    "Button states (Hover, Active, Loading)",
    "Form validation feedback (Success/Error animations)",
    "Navigation transitions and menu toggles"
  ],
  whenNotToUse: [
    "High-frequency actions where animation would slow down the user",
    "When the animation is purely decorative and provides no functional feedback",
    "Low-power devices where heavy animations cause frame drops"
  ],
  tradeoffs: [
    { pro: "Increases user engagement and perceived quality", con: "Can be overdone, leading to 'UI Fatigue'" },
    { pro: "Provides essential functional feedback", con: "Requires careful coordination between design and engineering" }
  ],
  failureModes: [
    "The 'Laggy' Feel: Animations that are too slow or have high latency",
    "Animation Overload: Too many things moving at once, distracting the user",
    "Meaningless Motion: Animations that don't communicate anything about the state"
  ],
  alternatives: [
    { entryId: "fluid-motion", condition: "Use for larger, layout-level transitions" },
    { entryId: "optimistic-ui", condition: "Use to provide instant feedback for server-side actions" }
  ],
  a11ySpecs: [
    "Respect 'prefers-reduced-motion' media query",
    "Ensure interactions don't rely solely on motion to convey meaning",
    "Maintain focus management during interactive transitions"
  ],
  perfImpact: "medium",
  implementationNotes: [
    "Use 'framer-motion' or 'motion/react' for spring-based, natural animations",
    "Keep durations short (usually 100ms-300ms)",
    "Leverage GPU-accelerated properties (transform, opacity) for 60fps performance"
  ],
  checklist: [
    "Mapped each animation to a user action, state change, or system response",
    "Kept motion duration short enough to preserve task flow",
    "Provided non-motion feedback for reduced-motion users"
  ],
  relatedEntryIds: ['scroll-animations', 'toast-notifications', 'fluid-motion'],
  interactiveComponent: "MicroInteraction",
  tags: ["Animation","UX","Feedback","feels unresponsive","no feedback","UI feels dead","fix interactions","missing hover states","no visual response"],
  contentStatus: 'hardened',
  content: `

# Micro-interactions

Micro-interactions are contained product moments that do one small task. They are the details that make a product feel "alive".

### The 4 Parts of a Micro-interaction
1.  **Trigger**: Initiates the interaction (hover, click).
2.  **Rules**: What happens (logic).
3.  **Feedback**: What the user sees/hears (animation).
4.  **Loops & Modes**: Meta-rules (what happens next time).
    
`,
  intentTags: ["improve-feedback", "improve-aesthetics"],
};
