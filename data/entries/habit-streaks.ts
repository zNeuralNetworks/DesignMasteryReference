import { ReferenceEntry } from '../../types';

export const habit_streaks: ReferenceEntry = {
  id: "habit-streaks",
  title: "Habit Formation (Streaks)",
  domain: "interaction",
  format: "pattern",
  verdict: "recommended",
  useContext: ["edtech", "gamification", "consumer"],
  confidenceScore: 96,
  slug: "habit-streaks",
  complexity: "intermediate",
  description: "Leveraging loss aversion with streak counters to build daily learning habits.",
  quickTake: "Habit Formation & Streaks is a retention pattern that uses consecutive days of activity to build momentum and leverage the psychological fear of losing progress.",
  whyItMatters: "Building a new habit is hard. Streaks provide a simple, visual representation of progress that becomes more valuable the longer it lasts. This leverages 'Loss Aversion'—users will work harder to avoid losing a 100-day streak than they would to gain a new reward.",
  mechanism: [
    "Consecutive Tracking: Counting and displaying the number of days in a row the user has completed a target action",
    "Visual Momentum: Using symbols like 'Flames' or 'Chains' that grow or change as the streak increases",
    "Streak Freeze: Providing a safety net (often as a reward or purchase) to prevent a single missed day from destroying momentum",
    "Social Proof: Allowing users to share their streaks to gain social validation and increase commitment"
  ],
  whenToUse: [
    "Designing apps that require daily or high-frequency engagement (Language, Fitness, Meditation)",
    "Encouraging users to complete a series of onboarding tasks",
    "Building community-driven platforms where consistency is valued"
  ],
  whenNotToUse: [
    "In utility apps where daily use isn't natural or necessary",
    "When the 'Streak' becomes a source of anxiety rather than motivation",
    "In apps where quality of work is more important than frequency (e.g., deep-work tools)"
  ],
  tradeoffs: [
    { pro: "Extremely effective at driving daily active users (DAU) and retention", con: "Can lead to 'Burnout' if the user feels forced to use the app" },
    { pro: "Creates a strong sense of personal achievement and momentum", con: "Breaking a long streak can cause significant emotional distress and churn" }
  ],
  failureModes: [
    "The 'Demotivator': Not providing a 'Freeze' or recovery mechanic, leading to churn after a single missed day",
    "Inaccurate Tracking: Technical bugs that reset streaks incorrectly, destroying user trust",
    "Low Value: Using streaks for actions that don't actually benefit the user's long-term goals"
  ],
  alternatives: [
    { entryId: "case-study-duolingo", condition: "Use to see the most famous implementation of habit streaks" },
    { entryId: "celebration-rewards", condition: "Use to provide positive reinforcement alongside the fear of loss" }
  ],
  a11ySpecs: [
    "Ensure streak counts and statuses are clearly announced by screen readers",
    "Use high-contrast colors for streak indicators (e.g., the 'Flame' icon)",
    "Provide non-visual cues (like haptic feedback or sounds) for streak milestones"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use 'Lottie' for celebratory animations when a streak milestone is reached",
    "Implement server-side validation for streak logic to prevent client-side manipulation",
    "Send 'Streak at Risk' notifications a few hours before the daily reset"
  ],
  checklist: [
    "Defined what behavior the streak should reinforce and why it matters",
    "Provided streak repair or grace rules for legitimate interruptions",
    "Avoided shame-based loss messaging when a streak ends"
  ],
  relatedEntryIds: ['peak-end-rule', 'gamified-leaderboards', 'goal-setting-ui'],
  interactiveComponent: "StreakDemo",
  tags: ["EdTech","Gamification","Retention"],
  content: `

# Designing for Consistency

Learning requires consistency. The **Streak Counter** is a powerful UI pattern that leverages *Loss Aversion*—the psychological tendency to prefer avoiding losses to acquiring equivalent gains.

### Visual Design
*   **The Flame**: A universal symbol for "hot" streaks.
*   **Calendar View**: Visualizing "Don't Break the Chain".
*   **Freeze Streak**: A mechanic to save a streak (monetization or reward), reducing user churn if they miss one day accidentally.
    
`,
  intentTags: ["improve-feedback", "reduce-cognitive-load"],
};
