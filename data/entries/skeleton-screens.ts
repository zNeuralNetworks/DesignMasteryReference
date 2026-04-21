import { ReferenceEntry } from '../../types';

export const skeleton_screens: ReferenceEntry = {
  id: "skeleton-screens",
  title: "Skeleton Screens",
  domain: "interaction",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile"],
  confidenceScore: 94,
  slug: "skeleton-screens",
  complexity: "intermediate",
  description: "Improving perceived performance by displaying content placeholders instead of spinners.",
  quickTake: "Skeleton screens reduce perceived wait time by providing a visual preview of the layout, shifting focus from 'waiting' to 'content'.",
  whyItMatters: "Spinners focus the user on the 'wait', while skeletons focus them on the 'content'. This shift in focus reduces bounce rates during data-heavy loads.",
  mechanism: [
    "Identify the container dimensions of the incoming content",
    "Render low-fidelity gray shapes (rectangles, circles) in those positions",
    "Apply a subtle shimmer or pulse animation to indicate activity",
    "Swap placeholders for real data once the request completes"
  ],
  whenToUse: [
    "Initial page loads with multiple data sources",
    "Dashboard widgets where layout is predictable",
    "Content-heavy feeds (social media, news)"
  ],
  whenNotToUse: [
    "Fast requests (< 300ms) where the skeleton would 'flicker'",
    "Highly dynamic layouts where placeholders can't match the result",
    "Critical errors where a spinner + message is more honest"
  ],
  tradeoffs: [
    { pro: "Significantly better perceived performance than spinners", con: "Maintenance burden of keeping skeletons in sync with real UI" },
    { pro: "Reduced cognitive load and 'visual jumpiness'", con: "Can feel 'broken' if content fails to load and shimmer persists" }
  ],
  failureModes: [
    "Layout Shift: Skeleton layout mismatching the final content (CLS)",
    "The 'Flicker': Skeletons appearing and disappearing too fast on good connections",
    "Infinite Shimmer: No timeout or error state when a network request fails"
  ],
  alternatives: [
    { entryId: "optimistic-ui", condition: "Use for simple actions (likes, toggles) to skip the wait entirely" },
    { entryId: "web-vitals", condition: "Use to measure and optimize the CLS impact of your skeletons" }
  ],
  a11ySpecs: [
    "Use aria-busy='true' on the container during loading",
    "Ensure screen readers announce the loading state clearly",
    "Avoid high-frequency shimmer animations for motion-sensitive users"
  ],
  perfImpact: "medium",
  implementationNotes: [
    "Use CSS linear-gradient for the shimmer effect to avoid heavy JS animations",
    "Consider a 'minimum loading time' (e.g., 500ms) to prevent skeleton flicker",
    "Use 'aspect-ratio' in CSS to ensure skeletons match final image/video sizes"
  ],
  checklist: [
    "Matched skeleton dimensions to final content to prevent CLS",
    "Added timeout and error replacement for infinite loading states",
    "Disabled or softened shimmer when reduced motion is requested"
  ],
  relatedEntryIds: ['empty-states', 'toast-notifications', 'performance-tuning'],
  interactiveComponent: "SkeletonLoader",
  tags: ["UX","Performance","Loading States","loading feels slow","blank screen","perceived performance","fix loading","app feels slow","spinner fatigue"],
  content: `

# Perceived Performance

A user's waiting experience is psychological. **Skeleton screens** (gray placeholder shapes that shimmer) make an app feel faster than it actually is.

### Comparison
*   **Spinners**: Focus attention on the *waiting*. It creates a "blocked" state.
*   **Skeletons**: Focus attention on the *progress*. It hints at the layout to come, allowing the eye to prepare for content.

### Best Practices
1.  Match the layout of the actual content as closely as possible.
2.  Use a subtle pulse animation to indicate activity.
    
`,
  intentTags: ["improve-feedback", "improve-performance"],
};
