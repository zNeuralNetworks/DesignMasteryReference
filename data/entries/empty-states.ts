import { ReferenceEntry } from '../../types';

export const empty_states: ReferenceEntry = {
  id: "empty-states",
  title: "Designing Empty States",
  domain: "interaction",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile"],
  confidenceScore: 92,
  slug: "empty-states",
  complexity: "intermediate",
  description: "Turning \"zero data\" moments into opportunities for onboarding and education.",
  quickTake: "An empty state is not a dead end; it's a 'starter kit' that tells the user what's missing and how to fix it.",
  whyItMatters: "The first time a user opens your app, it's likely empty. If they see a blank screen, they assume it's broken or useless. A good empty state drives the 'First Value' moment.",
  mechanism: [
    "Acknowledge the current state (e.g., 'No projects yet')",
    "Explain the benefit of the feature (e.g., 'Projects help you organize your work')",
    "Provide a clear, primary CTA (e.g., 'Create your first project')",
    "Optionally provide 'Sample Data' or a tutorial to lower the barrier to entry"
  ],
  whenToUse: [
    "New accounts with no data",
    "Search results with no matches",
    "Cleared notifications or task lists (Success state)"
  ],
  whenNotToUse: [
    "Temporary loading states (Use Skeleton Screens instead)",
    "System errors or network failures (Use Error States instead)",
    "When data is expected but missing due to a bug"
  ],
  tradeoffs: [
    { pro: "Reduces 'Blank Canvas' anxiety for new users", con: "Requires custom illustration and copy for every feature" },
    { pro: "Acts as a secondary onboarding layer", con: "Can become annoying if it persists too long (e.g., on a dashboard)" }
  ],
  failureModes: [
    "The 'Dead End': Telling the user there's no data but not telling them how to add it",
    "Generic Copy: Using 'No data found' instead of feature-specific language",
    "Over-Illustration: Using massive graphics that push the CTA off-screen"
  ],
  alternatives: [
    { entryId: "skeleton-screens", condition: "Use for temporary loading states" },
    { entryId: "onboarding-tours", condition: "Use for a more guided, multi-step introduction" }
  ],
  a11ySpecs: [
    "Ensure the primary CTA is the first focused element in the empty state",
    "Provide alt text for any illustrative graphics",
    "Use clear, descriptive headings for the state"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use a 'Success' vibe for cleared states (e.g., 'All caught up!')",
    "Keep the CTA prominent and singular—don't overwhelm with choices",
    "Consider 'Ghost' UI (faded examples) to show what the data *will* look like"
  ],
  checklist: [
    "Explained why the state is empty without blaming the user",
    "Provided the next best action when recovery is possible",
    "Removed decorative copy that delays task recovery"
  ],
  relatedEntryIds: ['toast-notifications', 'progressive-disclosure', 'onboarding-tours'],
  interactiveComponent: "EmptyState",
  tags: ["UX","Onboarding","Illustration","empty page","blank state","nothing to show","fix empty state","users confused on first load"],
  content: `

# The "Empty" Opportunity

An empty state is what users see when there is no data to display. It is often the first impression.

### Don't leave it blank
A blank screen implies an error. Good empty states should:
1.  **Educate**: Explain *what* should be here.
2.  **Encourage**: Tell the user *how* to add data.
    
`,
  intentTags: ["improve-feedback", "improve-aesthetics"],
};
