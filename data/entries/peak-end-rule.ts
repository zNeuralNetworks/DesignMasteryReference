import { ReferenceEntry } from '../../types';

export const peak_end_rule: ReferenceEntry = {
  id: "peak-end-rule",
  title: "Psychology: Peak-End Rule",
  domain: "psychology",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "mobile", "content"],
  confidenceScore: 94,
  slug: "peak-end-rule",
  complexity: "intermediate",
  description: "Users judge an experience based on how they felt at its peak and its end, rather than the average of every moment.",
  quickTake: "To create a positive memory of your app, focus your design efforts on the most intense moment (the 'Peak') and the final interaction (the 'End').",
  whyItMatters: "Users don't remember every second of your app. They remember the 'vibe' left by the highlights and the exit. A great ending can save a mediocre experience.",
  mechanism: [
    "Identify the 'Peak' moment (e.g., completing a difficult task, receiving a reward)",
    "Amplify the positive emotion at that peak with micro-interactions or visuals",
    "Ensure the 'End' of the journey (e.g., logout, success screen) is satisfying and clear",
    "Minimize negative peaks (e.g., error states, long waits) even if the rest of the app is fast"
  ],
  whenToUse: [
    "Designing checkout and payment flows",
    "Onboarding completion screens",
    "Success states for complex task management"
  ],
  whenNotToUse: [
    "Utility tools where 'invisible' design is the goal (e.g., a calculator)",
    "High-frequency, low-stakes interactions where 'peaks' would be distracting"
  ],
  tradeoffs: [
    { pro: "Creates lasting positive brand perception", con: "Can lead to neglecting the 'middle' of the experience" },
    { pro: "High ROI on design effort", con: "Requires deep understanding of user emotional journey" }
  ],
  failureModes: [
    "The 'Bad Ending': A great app with a frustrating or confusing logout/success screen",
    "Missing the Peak: Treating a major user achievement as a mundane data update",
    "Negative Peaks: Allowing a single bad error message to define the entire session memory"
  ],
  alternatives: [
    { entryId: "celebration-rewards", condition: "Use to amplify the 'Peak' moment" },
    { entryId: "habit-streaks", condition: "Use to create a recurring 'End' state that drives return" }
  ],
  a11ySpecs: [
    "Ensure 'Peak' celebrations (confetti, etc.) respect 'prefers-reduced-motion'",
    "Success messages must be clearly announced by screen readers",
    "End-of-journey actions must be easily reachable via keyboard"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use 'framer-motion' for 'Peak' animations to make them feel premium",
    "Invest in high-quality copy for success and exit screens",
    "Audit your 'Negative Peaks' (404 pages, error toasts) to ensure they aren't defining the memory"
  ],
  checklist: ["Identified the emotional peak", "Polished the exit experience", "Checked for negative peaks"],
  interactiveComponent: "CelebrationDemo",
  relatedEntryIds: ["celebration-rewards", "habit-streaks"],
  tags: ["Psychology","UX Design","Retention"],
  content: `
# Designing for Memory

The **Peak-End Rule** is a psychological heuristic that describes how humans evaluate past experiences. We don't average the experience; we focus on the extremes and the conclusion.

### The "Peak"
The peak is the most emotionally intense point in the journey. In a fitness app, it's the moment you hit a new personal record. In a SaaS app, it's the moment a complex report finishes generating. **Amplify this.** Use color, motion, and celebratory copy.

### The "End"
The final moment is the last thing the brain encodes. If a user finishes a task but is left wondering "did it work?", the memory is tainted. **Close the loop.** A clear "Success" state with a logical next step is essential.

> "A bad ending can ruin a great movie. The same is true for your app."
`,
  intentTags: ["improve-feedback", "improve-aesthetics"],
};
