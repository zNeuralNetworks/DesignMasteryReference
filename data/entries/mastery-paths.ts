import { ReferenceEntry } from '../../types';

export const mastery_paths: ReferenceEntry = {
  id: "mastery-paths",
  title: "Mastery Paths",
  domain: "interaction",
  format: "pattern",
  verdict: "recommended",
  useContext: ["edtech", "gamification", "saas"],
  confidenceScore: 94,
  slug: "mastery-paths",
  complexity: "intermediate",
  description: "Visualizing learning journeys to increase motivation and retention.",
  quickTake: "Mastery Paths & Progress Maps turn a curriculum or task list into a visual journey, leveraging the 'Goal Gradient Effect' to keep users motivated.",
  whyItMatters: "A simple list of lessons is demotivating. A visual 'Path' provides a clear sense of where the user is, where they've been, and how far they have to go. This transforms a daunting curriculum into a series of achievable milestones.",
  mechanism: [
    "Goal Gradient Effect: Visualizing progress so that users accelerate their efforts as they approach a milestone",
    "Unlock Mechanics: Locking future content to create curiosity and a sense of earned value",
    "Branching Paths: Allowing users to choose their own journey, increasing autonomy and engagement",
    "Visual Milestones: Celebrating the completion of major sections with distinct visual markers and rewards"
  ],
  whenToUse: [
    "Designing complex learning platforms (Language, Coding, Professional Skills)",
    "Creating onboarding flows for feature-rich SaaS products",
    "Building career development or goal-tracking tools within an organization"
  ],
  whenNotToUse: [
    "In apps where the content is non-linear and doesn't follow a logical progression",
    "When the 'Path' is too long and daunting, potentially overwhelming the user",
    "In simple utility apps where users just need to perform a single, repetitive task"
  ],
  tradeoffs: [
    { pro: "Provides a powerful, visual narrative for the user's progress", con: "Requires significant design and engineering effort to create and maintain" },
    { pro: "Increases long-term retention by making the 'Next Step' obvious", con: "Can feel too 'Game-like' for some professional or serious contexts" }
  ],
  failureModes: [
    "The 'Dead End': Not providing a clear next step after a user completes a path",
    "Over-Complexity: Creating a path so convoluted that the user gets lost in the UI",
    "Lack of Celebration: Not acknowledging when a user reaches a major milestone, missing a dopamine opportunity"
  ],
  alternatives: [
    { entryId: "habit-streaks", condition: "Use to drive daily engagement within the mastery path" },
    { entryId: "celebration-rewards", condition: "Use to design the specific rewards given at milestones" }
  ],
  a11ySpecs: [
    "Ensure the path and its milestones are fully keyboard-navigable",
    "Provide a textual 'List View' alternative for users who find visual maps difficult to navigate",
    "Use clear ARIA labels to describe the status of each milestone (e.g., 'Completed', 'Locked')"
  ],
  perfImpact: "medium",
  implementationNotes: [
    "Use 'SVG' or 'Canvas' to render complex, non-linear paths efficiently",
    "Implement 'Lazy Loading' for path sections to improve initial load time",
    "Use 'Framer Motion' to animate progress along the path for a more tactile feel"
  ],
  checklist: [
    "Mapped each path step to a concrete capability or decision point",
    "Allowed experienced users to skip known material",
    "Separated progress signaling from manipulative completion pressure"
  ],
  relatedEntryIds: ['adaptive-scaffolding', 'habit-streaks', 'goal-setting-ui'],
  interactiveComponent: "MasteryPath",
  tags: ["EdTech","Gamification","Retention"],
  contentStatus: 'hardened',
  content: `

# Visualizing Progress

In learning applications, a simple list of lessons is demotivating. **Mastery Paths** (or maps) turn the curriculum into a journey.

### The Psychology
1.  **Goal Gradient Effect**: Users accelerate their efforts as they approach a goal.
2.  **Unlock Mechanics**: Locking future content creates curiosity and value.
3.  **Milestones**: visually celebrating small wins releases dopamine, encouraging the user to continue.
    
`,
  intentTags: ["reduce-cognitive-load", "improve-feedback"],
};
