import { ReferenceEntry } from '../../types';

export const gamified_leaderboards: ReferenceEntry = {
  id: "gamified-leaderboards",
  title: "Gamified Leaderboards",
  domain: "data",
  format: "pattern",
  verdict: "recommended",
  useContext: ["edtech", "saas", "social"],
  confidenceScore: 90,
  slug: "gamified-leaderboards",
  complexity: "intermediate",
  description: "Driving engagement through social comparison and competitive ranking.",
  quickTake: "Competitive Leaderboards leverage social comparison and the desire for status to drive user engagement and performance.",
  whyItMatters: "Humans are naturally competitive. A well-designed leaderboard provides a clear 'North Star' for users, encouraging them to perform better by showing them where they stand relative to their peers.",
  mechanism: [
    "Relative Ranking: Showing the user's position relative to those immediately above and below them, rather than just the top 10",
    "Tiered Leagues: Grouping users into skill-based tiers (e.g., Bronze, Silver, Gold) to keep competition fair and achievable",
    "Time-Bound Seasons: Resetting rankings periodically to give new users a chance to reach the top",
    "Social Context: Prioritizing friends or teammates in the ranking to increase personal relevance"
  ],
  whenToUse: [
    "Building educational apps where users need motivation to study daily",
    "Designing fitness or health apps that involve tracking performance",
    "Creating community-driven platforms where status is a key reward"
  ],
  whenNotToUse: [
    "In collaborative environments where competition would be counter-productive",
    "When the user base is too small to create meaningful competition",
    "In highly sensitive or clinical apps where social comparison could cause anxiety"
  ],
  tradeoffs: [
    { pro: "Significantly increases daily active users (DAU) and session length", con: "Can discourage users who fall too far behind the leaders" },
    { pro: "Provides a clear sense of progression and mastery", con: "Requires careful balancing to prevent 'Cheating' or 'Gaming the System'" }
  ],
  failureModes: [
    "The 'Unreachable Peak': Showing a global leaderboard dominated by 'super-users' with impossible scores",
    "Stagnant Rankings: Not resetting the leaderboard, making it impossible for new users to break in",
    "Negative Social Pressure: Making users feel 'shamed' for low rankings, leading to churn"
  ],
  alternatives: [
    { entryId: "habit-streaks", condition: "Use for individual-focused motivation without social comparison" },
    { entryId: "celebration-rewards", condition: "Use to reward progress regardless of social rank" }
  ],
  a11ySpecs: [
    "Ensure leaderboard tables are correctly marked up for screen readers",
    "Provide clear textual descriptions of the user's current rank and progress",
    "Avoid using color alone to indicate rank or status changes"
  ],
  perfImpact: "medium",
  implementationNotes: [
    "Use 'Redis' or similar for high-performance, real-time ranking updates",
    "Implement 'Batching' for leaderboard updates to reduce database load",
    "Use 'Optimistic UI' to show the user's rank increasing immediately after an action"
  ],
  checklist: [
    "Verified ranking encourages the desired behavior, not vanity activity",
    "Provided private or cohort-based alternatives for sensitive contexts",
    "Avoided leaderboards when skill, access, or time advantages dominate outcomes"
  ],
  relatedEntryIds: ['peak-end-rule', 'goal-setting-ui', 'case-study-duolingo'],
  interactiveComponent: "Leaderboard",
  tags: ["Gamification","EdTech","Social"],
  contentStatus: 'draft',
  content: `

# Social Motivation

Leaderboards leverage our innate desire for status. In EdTech, they can drive daily engagement.

### Design Considerations
1.  **The "Local" View**: Don't show the top 10 global users (who have millions of points). Show the user *and their friends*, or users *near their rank*. This makes the goal achievable.
    
`,
  intentTags: ["improve-feedback", "increase-density"],
};
