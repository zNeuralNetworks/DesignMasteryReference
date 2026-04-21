import { ReferenceEntry } from '../../types';

export const doherty_threshold: ReferenceEntry = {
  id: "doherty-threshold",
  title: "Doherty Threshold",
  domain: "psychology",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile", "consumer"],
  confidenceScore: 89,
  slug: "doherty-threshold",
  complexity: "beginner",
  description: "System responses under 400ms keep users in a flow state. Above 400ms, users disengage from the task — perceived performance drops non-linearly.",
  quickTake: "400ms is the threshold between 'instant' and 'I'm waiting'. Above it, users notice the delay and lose focus. Below it, the system feels responsive and users stay in flow. Most modern apps violate this constantly — every database query, every API call, every page load is an opportunity to keep or lose user attention.",
  whyItMatters: "Response time directly affects productivity and engagement. IBM research showed that users are 33× more productive when response times are under 400ms vs. over 1 second. In SaaS, slow interfaces directly reduce the number of actions users complete per session — which reduces feature adoption and retention.",
  mechanism: [
    "Under 100ms: interactions feel instant — no wait state needed, no feedback required",
    "100–400ms: feels responsive — optional subtle feedback (button press state) is sufficient",
    "400ms–1s: users notice the wait — show loading indicator to signal 'working'",
    "1s+: users disengage — show progress, estimated time, or use optimistic UI to mask the wait",
  ],
  whenToUse: [
    "Any interaction with a server round-trip or heavy computation",
    "Page navigation, form submission, search, data loading",
    "Benchmarking performance improvements — 400ms is the target threshold",
  ],
  whenNotToUse: [
    "Pure client-side interactions with no async work — targeting 400ms is over-engineering",
  ],
  tradeoffs: [
    { pro: "Clear target for engineering teams — 400ms is a concrete benchmark", con: "Some operations (file upload, report generation) genuinely can't be under 400ms — need clear loading states" },
    { pro: "Optimistic UI can make operations feel under-threshold even when they're not", con: "Optimistic UI creates reconciliation complexity when server responses fail" },
  ],
  failureModes: [
    "No loading indicator at 400ms+: users think the click didn't register and click again",
    "Generic spinner for all waits: users have no sense of how long to wait",
    "Progress bar that lies: fake progress bar fills in 5s for an operation that takes 30s",
    "Optimistic UI without rollback: showing success before server confirms, then having to undo",
  ],
  alternatives: [
    { entryId: "skeleton-screens", condition: "Skeleton screens are the recommended loading pattern for 400ms+ data loads" },
    { entryId: "optimistic-ui", condition: "Optimistic UI preemptively shows success to keep users under the threshold" },
  ],
  a11ySpecs: [
    "Loading states must be announced to screen readers: aria-live='polite' for non-urgent, aria-live='assertive' for critical",
    "aria-busy='true' on containers while loading, removed when complete",
    "Don't block keyboard focus during loading — users should be able to navigate away",
  ],
  perfImpact: "high",
  implementationNotes: [
    "Measure with Web Vitals: INP (Interaction to Next Paint) should be under 200ms (good) / 500ms (needs improvement)",
    "useTransition (React 18): mark updates as non-urgent so UI stays responsive during slow renders",
    "Prefetch data on hover/focus before user clicks — first-class technique to stay under 400ms",
    "Cache aggressively: stale-while-revalidate pattern shows cached data instantly, updates in background",
  ],
  checklist: [
    "Common interactions under 400ms (measure with Lighthouse or Web Vitals)",
    "Loading indicator shown for all operations over 400ms",
    "Optimistic UI applied to common write operations (create, delete, toggle)",
    "Loading states announced via aria-live for screen readers",
  ],
  relatedEntryIds: ['skeleton-screens', 'optimistic-ui', 'web-vitals', 'performance-tuning'],
  tags: ["Doherty threshold", "response time", "perceived performance", "400ms", "loading performance", "flow state"],
  intentTags: ["improve-performance", "improve-feedback"],
  content: `
# Doherty Threshold

400 milliseconds. Above it, users notice. Below it, they don't.

## The Research

Walter Doherty and Ahrvind Thadani (1982) documented that response times under 400ms keep users in a productive flow state. Above 400ms, users shift attention away from the task and become observers waiting for the system.

The effect compounds: at 1 second, users lose the thread of thought. At 10 seconds, they switch applications.

## The Response Time Scale

| Time | User experience | Design response |
|------|-----------------|-----------------|
| < 100ms | Instantaneous | No indicator needed |
| 100–400ms | Feels fast | Optional: button press state |
| 400ms–1s | Noticeable delay | Show loading spinner |
| 1s–5s | Waiting | Progress indicator + "Loading..." text |
| 5s+ | Frustrating | Progress bar + description of what's happening |
| 10s+ | Task abandonment | Background processing + notification on complete |

## Masking Latency with Optimistic UI

When the server round-trip will exceed 400ms, show success immediately and confirm asynchronously:

\`\`\`typescript
// User clicks "Complete task"
function completeTask(id: string) {
  // 1. Update UI immediately (optimistic)
  setTasks(prev => prev.map(t => t.id === id ? { ...t, done: true } : t));

  // 2. Confirm with server
  api.completeTask(id).catch(() => {
    // 3. Rollback on failure
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: false } : t));
    toast.error('Failed to complete task');
  });
}
\`\`\`

User sees instant response. Network round-trip happens invisibly.

## Measuring Your Threshold

Chrome DevTools > Performance > Record → look for "Interaction to Next Paint" (INP). Web Vitals target: under 200ms is excellent, under 500ms is acceptable.
`,
};
