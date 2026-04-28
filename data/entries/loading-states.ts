import { ReferenceEntry } from '../../types';

export const loading_states: ReferenceEntry = {
  id: "loading-states",
  title: "Loading States",
  domain: "interaction",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "mobile", "consumer", "dashboard"],
  confidenceScore: 94,
  slug: "loading-states",
  complexity: "beginner",
  description: "Communicating that the system is working — matching the loading pattern to the operation type, duration, and location in the UI.",
  quickTake: "The right loading pattern depends on duration and scope. Under 400ms: no indicator needed. 400ms–2s: inline spinner. 2s+: skeleton screen for content, progress bar with status text for known operations. Spinners for everything is lazy — skeleton screens outperform spinners on perceived speed by 20–30%.",
  whyItMatters: "Loading states are the primary way users know the system is responding. No loading indicator after 400ms causes users to click again (doubling the operation). Generic spinners everywhere create anxiety without information. Skeleton screens calibrate user expectations and make actual content feel faster because users don't notice the transition.",
  mechanism: [
    "Under 400ms: no indicator — instant transitions don't need feedback",
    "400ms–2s: inline spinner on the triggering element (button, input area)",
    "2s–8s: skeleton screen for data-heavy content; progress bar with text for known-length operations",
    "8s+: background operation — move to queue, notify on complete",
  ],
  whenToUse: [
    "All async operations over 400ms need loading feedback",
    "Page loads, data fetches, form submissions, file uploads",
  ],
  whenNotToUse: [
    "Under 400ms — adding a spinner that flashes briefly is worse than no spinner",
    "For operations that use optimistic UI — show the result, not the loader",
  ],
  tradeoffs: [
    { pro: "Appropriate loading feedback prevents double-clicks and user confusion", con: "Skeleton screens require layout knowledge upfront — harder to implement than spinners" },
    { pro: "Skeleton screens improve perceived performance significantly", con: "If actual content layout differs from skeleton, the transition creates layout shift" },
  ],
  failureModes: [
    "No loading state: user thinks click didn't register and clicks again (double submission)",
    "Page-level spinner for partial data load: entire page blank while one section loads",
    "Spinner with no timeout: operation fails silently while spinner keeps spinning indefinitely",
    "Skeleton that doesn't match layout: content appears and everything shifts — worse than a spinner",
  ],
  alternatives: [
    { entryId: "skeleton-screens", condition: "Skeleton screens are the recommended pattern for content loading" },
    { entryId: "optimistic-ui", condition: "Optimistic UI eliminates loading states for common operations" },
  ],
  a11ySpecs: [
    "Loading state announced to screen readers: aria-live='polite' with status text, or aria-busy='true'",
    "Don't trap focus during loading — users should be able to navigate away",
    "Button loading state: disable button + aria-disabled='true', change text to 'Saving...'",
    "Loading completion announced: 'Saved' or 'Loaded' via aria-live region",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Button loading: replace text with spinner inline, disable, set aria-busy='true'",
    "Suspense (React 18): wrap async components in <Suspense fallback={<Skeleton />}>",
    "Always add timeout: if loading exceeds 15s, show error state — don't spin indefinitely",
    "Transition duration: if content appears in < 150ms, skip skeleton entirely (flashes awkwardly)",
  ],
  checklist: [
    "All async operations over 400ms have loading feedback",
    "Button disabled during submission with loading text",
    "Loading state has timeout — shows error if operation never completes",
    "Loading announced via aria-live or aria-busy",
    "Skeleton layout matches actual content layout",
  ],
  relatedEntryIds: ['skeleton-screens', 'optimistic-ui', 'error-states', 'doherty-threshold'],
  tags: ["loading states", "loading spinner", "skeleton loader", "progress bar", "async loading", "loading UX"],
  intentTags: ["improve-feedback", "improve-performance"],
  contentStatus: 'hardened',
  content: `
# Loading States

Loading feedback prevents confusion. The wrong loading pattern creates it.

## The Loading Decision Tree

\`\`\`
Duration?
│
├── < 400ms → No indicator needed
│             (instant transitions don't need feedback)
│
├── 400ms–2s → Inline spinner
│              (on the triggering element, not page-level)
│
├── 2s–8s → Content loading?
│            ├── Yes → Skeleton screen
│            └── No (known operation) → Progress bar + status text
│
└── > 8s → Background queue
           (notify on complete, don't make user wait)
\`\`\`

## Button Loading State

\`\`\`tsx
<button
  disabled={isLoading}
  aria-busy={isLoading}
  className={isLoading ? 'opacity-70 cursor-not-allowed' : ''}
>
  {isLoading ? (
    <>
      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
      Saving...
    </>
  ) : 'Save changes'}
</button>
\`\`\`

## Skeleton vs. Spinner: When to Use Each

| Pattern | Use when | Duration |
|---------|----------|----------|
| Spinner | Operation result, no visual layout to anticipate | Any |
| Skeleton | Content with a known layout structure (cards, lists, tables) | 400ms+ |
| Progress bar | Upload, download, multi-step operation with measurable progress | Any |
| Inline placeholder | A single field or value loading within a loaded page | Any |

## Skeleton Best Practice

Match the skeleton exactly to the final layout — otherwise the content transition creates jarring shift.

\`\`\`tsx
// Use same layout structure as real content
{isLoading ? (
  <div className="animate-pulse space-y-3">
    <div className="h-4 bg-slate-200 rounded w-3/4" />
    <div className="h-4 bg-slate-200 rounded w-1/2" />
    <div className="h-4 bg-slate-200 rounded w-5/6" />
  </div>
) : (
  <div className="space-y-3">{content}</div>
)}
\`\`\`
`,
};
