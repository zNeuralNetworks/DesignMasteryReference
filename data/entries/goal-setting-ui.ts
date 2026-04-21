import { ReferenceEntry } from '../../types';

export const goal_setting_ui: ReferenceEntry = {
  id: "goal-setting-ui",
  title: "Goal Setting & Commitment",
  domain: "components",
  format: "pattern",
  verdict: "recommended",
  useContext: ["edtech", "saas", "psychology"],
  confidenceScore: 94,
  slug: "goal-setting-ui",
  complexity: "intermediate",
  description: "Leveraging \"Implementation Intentions\" to help users stick to their learning targets.",
  quickTake: "Goal Setting & Implementation Intentions is a psychological pattern that helps users bridge the 'Intention-Behavior Gap' by making specific, actionable commitments.",
  whyItMatters: "Users often start with high motivation but fail to follow through. Research shows that people are 2x more likely to complete a task if they explicitly state *when*, *where*, and *how* they will do it.",
  mechanism: [
    "Implementation Intentions: Prompting users to set a specific schedule (e.g., 'I will study for 15 mins at 8 PM')",
    "Public Commitment: Allowing users to share their goals with friends or a community to increase accountability",
    "Micro-Goals: Breaking large, daunting objectives into small, achievable daily targets",
    "Visual Contracts: Using 'I Commit' buttons and visual summaries to trigger a psychological sense of obligation"
  ],
  whenToUse: [
    "Onboarding flows for habit-building apps (Fitness, Learning, Productivity)",
    "Setting up new projects or learning paths in a SaaS platform",
    "Encouraging users to return to the app after a period of inactivity"
  ],
  whenNotToUse: [
    "In apps where tasks are one-off and don't require long-term commitment",
    "When the user is already highly motivated and the extra steps would be friction",
    "In clinical or high-stress environments where failing a 'commitment' could be harmful"
  ],
  tradeoffs: [
    { pro: "Significantly improves long-term follow-through and retention", con: "Adds friction to the onboarding or setup process" },
    { pro: "Helps users build realistic expectations and habits", con: "Can lead to 'Goal Fatigue' if the targets are too aggressive" }
  ],
  failureModes: [
    "The 'Over-Commitment' Trap: Allowing users to set unrealistic goals that they inevitably fail",
    "Missing Reminders: Not following up with notifications that reference the user's specific commitment",
    "Rigid Goals: Not allowing users to easily adjust their goals as their circumstances change"
  ],
  alternatives: [
    { entryId: "habit-streaks", condition: "Use to track the daily execution of the goals set here" },
    { entryId: "confidence-checks", condition: "Use to ensure the user feels capable of achieving the goal they set" }
  ],
  a11ySpecs: [
    "Ensure goal-setting inputs (sliders, chips) are fully keyboard and screen reader accessible",
    "Provide clear textual summaries of the commitment the user is making",
    "Avoid using complex, purely visual metaphors for goal progress without text alternatives"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use 'Implementation Intention' templates (e.g., 'I will [Action] at [Time] in [Place]')",
    "Store user goals in a way that can be easily referenced in personalized notifications",
    "Provide 'Quick Select' options for common, achievable goals (e.g., '5 mins a day')"
  ],
  checklist: [
    "Framed goals as specific, measurable user outcomes",
    "Supported editing goals as user context changes",
    "Separated encouragement from deceptive urgency or pressure"
  ],
  relatedEntryIds: ['habit-streaks', 'mastery-paths', 'celebration-rewards'],
  interactiveComponent: "GoalSettingDemo",
  tags: ["EdTech","Psychology","Retention"],
  content: `

# The Power of Commitment

Research shows that people are 2x more likely to follow through on a task if they explicitly state **when** and **how much** they will do it. This is called an **Implementation Intention**.

### Designing the Commitment
Allow users to set a specific daily goal (e.g., "15 minutes" or "1 Entry").

1.  **Low Friction**: Use sliders or quick-select chips.
2.  **Visual Feedback**: Show them what "success" looks like (e.g., "That's 2 books a year!").
3.  **Contract**: Use a button that says "I Commit" rather than just "Save". This triggers a subtle psychological contract.
    
`,
  intentTags: ["improve-feedback", "reduce-cognitive-load"],
};
