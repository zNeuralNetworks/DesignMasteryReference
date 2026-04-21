import { ReferenceEntry } from '../../types';

export const optimistic_ui: ReferenceEntry = {
  id: "optimistic-ui",
  title: "Optimistic UI",
  domain: "interaction",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "mobile"],
  confidenceScore: 95,
  slug: "optimistic-ui",
  complexity: "intermediate",
  description: "Making your app feel instant by predicting success before the server responds.",
  quickTake: "Optimistic UI eliminates perceived latency by updating the interface before the server confirms success, creating a 'zero-latency' feel.",
  whyItMatters: "In modern web apps, network latency is the primary bottleneck for perceived speed. Optimistic updates make apps feel native and responsive.",
  mechanism: [
    "User triggers an action (e.g., liking a post)",
    "UI state updates immediately with the expected result",
    "Request is sent to the server in the background",
    "If successful, the UI remains unchanged",
    "If failed, the UI is rolled back and an error is shown"
  ],
  whenToUse: [
    "Low-stakes actions (likes, favorites, simple toggles)",
    "High-frequency interactions where speed is critical",
    "Environments with variable network latency"
  ],
  whenNotToUse: [
    "High-stakes financial transactions",
    "Actions that require server-side validation (e.g., unique usernames)",
    "Operations with high failure probability"
  ],
  tradeoffs: [
    { pro: "Instant perceived performance", con: "Increased state management complexity" },
    { pro: "Reduced user frustration", con: "Risk of 'UI flicker' if rollback occurs" }
  ],
  failureModes: [
    "Network timeout leading to delayed rollback",
    "Concurrent edits causing state desync",
    "Silent failures where the user assumes success but data is lost"
  ],
  alternatives: [
    { entryId: "skeleton-screens", condition: "Use for initial page loads or complex data fetching" },
    { entryId: "debounce-throttle", condition: "Use for search inputs or rapid-fire events" }
  ],
  a11ySpecs: [
    "Use aria-live regions to announce errors if a rollback occurs",
    "Ensure focus is maintained or managed during state transitions",
    "Provide clear visual feedback for 'pending' vs 'confirmed' states if necessary"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use libraries like React Query or SWR which have built-in optimistic update support",
    "Always implement a robust rollback mechanism",
    "Consider adding a subtle 'syncing' indicator for longer background tasks"
  ],
  checklist: [
    "Defined rollback behavior for every failed mutation path",
    "Separated pending, confirmed, and failed states in the UI contract",
    "Announced rollback or failure through an aria-live region"
  ],
  relatedEntryIds: ['toast-notifications', 'micro-interactions', 'performance-tuning'],
  interactiveComponent: "OptimisticUIDemo",
  tags: ["Performance","UX","State Management","app feels slow","waiting for server","laggy UI","fix perceived performance","button clicks feel delayed"],
  content: `

# Faking Speed

Network requests take time (200ms - 2s). Standard UI waits for the server to respond before updating the screen. **Optimistic UI** updates the screen *immediately* as if the request already succeeded.

### The Flow
1.  **Trigger**: User clicks "Send".
2.  **Optimistic Update**: Immediately render the message in the chat list.
3.  **Background Request**: Send the data to the server.
4.  **Reconciliation**:
    *   *Success*: Do nothing (the UI is already correct).
    *   *Error*: Roll back the UI change and show an error toast.
    
`,
  intentTags: ["improve-feedback", "improve-performance"],
};
