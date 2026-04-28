import { ReferenceEntry } from '../../types';

export const celebration_rewards: ReferenceEntry = {
  id: "celebration-rewards",
  title: "Celebration & Rewards",
  domain: "interaction",
  format: "pattern",
  verdict: "recommended",
  useContext: ["edtech", "saas", "consumer"],
  confidenceScore: 95,
  slug: "celebration-rewards",
  complexity: "intermediate",
  description: "Using the Peak-End Rule and variable rewards to create delight upon task completion.",
  quickTake: "Celebration and rewards are psychological tools used to reinforce positive behavior and create a memorable 'End' to a user journey.",
  whyItMatters: "According to the Peak-End Rule, users judge an experience based on its most intense point and its conclusion. A well-timed celebration turns a mundane task completion into a moment of delight and achievement.",
  mechanism: [
    "Trigger a visual celebration (e.g., confetti, badges) immediately upon task completion",
    "Use satisfying auditory feedback (e.g., a positive chime) to reinforce success",
    "Provide 'Variable Rewards' (e.g., different types of badges or animations) to maintain interest",
    "Link the reward clearly to the effort expended (e.g., 'You mastered X!')"
  ],
  whenToUse: [
    "Completing a lesson or module in a learning app",
    "Hitting a major milestone in a productivity tool (e.g., 'Inbox Zero')",
    "Successful onboarding completion or first-time feature use"
  ],
  whenNotToUse: [
    "Routine, high-frequency actions where celebration would be annoying",
    "Serious or high-stakes contexts (e.g., banking, medical apps) where confetti is inappropriate",
    "When the user has failed a task (use constructive feedback instead)"
  ],
  tradeoffs: [
    { pro: "Increases user retention and emotional connection to the product", con: "Can feel 'childish' or 'gimmicky' if not aligned with the brand voice" },
    { pro: "Provides a clear sense of closure and progress", con: "Requires careful timing to avoid interrupting the next task" }
  ],
  failureModes: [
    "The 'Empty' Reward: Celebrating a task that was too easy or insignificant",
    "Delayed Delight: Triggering the celebration too long after the action, breaking the link",
    "Over-Stimulation: Using too many particles or loud sounds that overwhelm the user"
  ],
  alternatives: [
    { entryId: "peak-end-rule", condition: "Use to understand the psychological basis for celebration" },
    { entryId: "habit-streaks", condition: "Use to provide long-term rewards for consistent behavior" }
  ],
  a11ySpecs: [
    "Provide a way to disable animations (respect 'prefers-reduced-motion')",
    "Ensure celebrations don't interfere with screen reader announcements",
    "Use non-distracting, pleasant sounds that can be muted"
  ],
  perfImpact: "medium",
  implementationNotes: [
    "Use 'canvas-confetti' for lightweight, high-performance particle effects",
    "Leverage 'framer-motion' for badge reveal animations",
    "Keep celebrations brief (1-2 seconds) to avoid blocking the user"
  ],
  checklist: [
    "Reserved celebration for meaningful user progress or completion",
    "Kept reward animation interruptible and reduced-motion aware",
    "Avoided reward loops that manipulate users into low-value actions"
  ],
  relatedEntryIds: ['gamified-leaderboards', 'goal-setting-ui', 'case-study-duolingo'],
  interactiveComponent: "CelebrationDemo",
  tags: ["EdTech","Gamification","Delight"],
  contentStatus: 'hardened',
  content: `

# The Peak-End Rule

Psychological research suggests that users judge an experience largely based on how they felt at its peak (most intense point) and at its end. In EdTech, finishing a lesson is the "End".

### Designing Delight
Don't just show a "Done" text. Celebrate!
1.  **Visuals**: Confetti, particles, or badge unlocks.
2.  **Sound**: A satisfying chime (Positive Reinforcement).
3.  **Timing**: Trigger the celebration immediately upon success to link the action to the reward (Operant Conditioning).
    
`,
  intentTags: ["improve-feedback", "improve-aesthetics"],
};
