import { ReferenceEntry } from '../../types';

export const adaptive_scaffolding: ReferenceEntry = {
  id: "adaptive-scaffolding",
  title: "Adaptive Scaffolding",
  domain: "interaction",
  format: "pattern",
  verdict: "recommended",
  useContext: ["edtech", "saas", "onboarding"],
  confidenceScore: 94,
  slug: "adaptive-scaffolding",
  complexity: "intermediate",
  description: "Providing hints and assistance only when the learner struggles, maintaining 'Desirable Difficulty'.",
  quickTake: "Adaptive scaffolding provides just enough support to help a user progress without doing the work for them, respecting the 'Zone of Proximal Development'.",
  whyItMatters: "If a task is too easy, users get bored. If it's too hard, they get frustrated and quit. Adaptive scaffolding maintains the 'Goldilocks' level of difficulty that drives deep learning and engagement.",
  mechanism: [
    "Monitor user performance and time-on-task",
    "Provide a subtle hint after the first failure (e.g., highlighting a relevant area)",
    "Provide a more explicit hint after the second failure (e.g., a textual clue)",
    "Reveal the full solution only after multiple failed attempts or upon explicit request"
  ],
  whenToUse: [
    "Educational software and learning platforms",
    "Complex SaaS onboarding for technical features",
    "Interactive tutorials and 'sandbox' environments"
  ],
  whenNotToUse: [
    "Critical productivity tasks where speed is the only goal",
    "Emergency or safety-critical interfaces where hints would cause dangerous delays",
    "When the user has already demonstrated mastery of the task"
  ],
  tradeoffs: [
    { pro: "Encourages self-correction and deeper learning", con: "Requires complex logic to track and trigger hints correctly" },
    { pro: "Reduces frustration and abandonment rates", con: "Can be perceived as 'annoying' if the hints are too obvious or frequent" }
  ],
  failureModes: [
    "The 'Clippy' Effect: Providing unhelpful or obvious hints that interrupt the user's flow",
    "Hint Dependency: Users relying on the scaffolding instead of learning the core concept",
    "Delayed Help: Waiting too long to provide support, leading to user abandonment"
  ],
  alternatives: [
    { entryId: "progressive-disclosure", condition: "Use to hide complex information until it is requested" },
    { entryId: "constructive-feedback", condition: "Use to provide diagnostic feedback after a failure" }
  ],
  a11ySpecs: [
    "Ensure hints are announced by screen readers when they appear",
    "Maintain high contrast for visual hints (e.g., highlights)",
    "Allow users to disable or skip scaffolding if they prefer"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use a 'Hint' button that only becomes active after a certain amount of time or failures",
    "Leverage 'Shake' animations for subtle negative feedback before providing a hint",
    "Track 'Hint Usage' in analytics to identify tasks that are too difficult"
  ],
  checklist: [
    "Defined the signal that advances or removes each scaffold",
    "Allowed users to reveal help again after it disappears",
    "Verified scaffolding does not hide primary task controls"
  ],
  relatedEntryIds: ['onboarding-tours', 'cognitive-chunking', 'mastery-paths'],
  interactiveComponent: "ScaffoldingDemo",
  tags: ["EdTech","Feedback","Interaction"],
  contentStatus: 'hardened',
  content: `

# Just-in-Time Help

**Scaffolding** refers to the support structures provided to a student. In UI terms, this means not giving the answer away, but providing progressive hints.

### The Feedback Loop
1.  **Attempt 1 (Wrong)**: Shake animation + "Try again". (Encourage self-correction).
2.  **Attempt 2 (Wrong)**: Show a subtle Hint. (Scaffold).
3.  **Attempt 3 (Wrong)**: Show the Solution + Explanation.

This keeps the user in the "Zone of Proximal Development"—not too easy, not too hard.
    
`,
  intentTags: ["reduce-cognitive-load", "improve-feedback"],
};
