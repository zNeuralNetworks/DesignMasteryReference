import { ReferenceEntry } from '../../types';

export const debounce_throttle: ReferenceEntry = {
  id: "debounce-throttle",
  title: "Debouncing & Throttling",
  domain: "tokens",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "devtools"],
  confidenceScore: 98,
  slug: "debounce-throttle",
  complexity: "intermediate",
  description: "Handling high-frequency events like typing and scrolling efficiently.",
  quickTake: "Debouncing and Throttling are rate-limiting techniques used to control how many times a function is executed over time, preventing performance bottlenecks.",
  whyItMatters: "High-frequency events (scroll, resize, keyup) can fire hundreds of times per second. Without rate limiting, expensive operations like API calls or complex DOM updates will crash the main thread and cause 'jank'.",
  mechanism: [
    "Debounce: Delay execution until a specified period of inactivity has passed (e.g., 'Wait until the user stops typing')",
    "Throttle: Limit execution to once every specified interval (e.g., 'Run at most once every 100ms during a scroll')",
    "Leading vs Trailing: Choose whether to fire the function at the start or end of the event stream",
    "Cancelation: Ensure pending executions are cleared when a component unmounts"
  ],
  whenToUse: [
    "Debounce: Search input fields (API calls), auto-saving drafts",
    "Throttle: Scroll-linked animations, window resize listeners, mouse movement tracking",
    "Both: Preventing double-clicks on submit buttons"
  ],
  whenNotToUse: [
    "Low-frequency events where latency is unacceptable",
    "When every single event must be processed (e.g., financial transactions)",
    "Simple state updates that are already optimized by the framework"
  ],
  tradeoffs: [
    { pro: "Significantly improves application performance and responsiveness", con: "Introduces a small, intentional delay in execution" },
    { pro: "Reduces server load by minimizing unnecessary API calls", con: "Can be confusing for users if the delay is too long" }
  ],
  failureModes: [
    "The 'Laggy' Input: Setting a debounce delay too high (e.g., >500ms), making the UI feel unresponsive",
    "Memory Leaks: Forgetting to cancel debounced functions on component unmount",
    "Wrong Choice: Using debounce for a scroll listener, causing the animation to only fire at the very end"
  ],
  alternatives: [
    { entryId: "performance-tuning", condition: "Use to understand the broader context of rendering optimization" },
    { entryId: "virtualization", condition: "Use to handle large datasets that would otherwise slow down the UI" }
  ],
  a11ySpecs: [
    "Ensure that rate-limiting doesn't prevent screen readers from announcing critical state changes",
    "Maintain a responsive feel for keyboard users who may navigate quickly",
    "Provide visual feedback (e.g., a loading spinner) during the debounce delay"
  ],
  perfImpact: "high",
  implementationNotes: [
    "Use 'lodash.debounce' or 'lodash.throttle' for battle-tested implementations",
    "In React, wrap debounced functions in 'useCallback' to prevent recreation on every render",
    "Set a reasonable default delay (e.g., 300ms for search, 100ms for throttle)"
  ],
  checklist: [
    "Selected debounce or throttle based on event semantics, not convenience",
    "Defined leading, trailing, cancellation, and flush behavior",
    "Verified delayed updates do not hide loading, error, or validation feedback"
  ],
  relatedEntryIds: ['web-vitals', 'skeleton-screens', 'optimistic-ui'],
  interactiveComponent: "DebounceDemo",
  tags: ["JavaScript","Optimization","Logic"],
  contentStatus: 'draft',
  content: `

# Rate Limiting Events

JavaScript events like \`onScroll\`, \`onResize\`, or \`onChange\` can fire hundreds of times per second. Running expensive logic (like API calls) on every event crashes performance.

### Definitions
*   **Debounce**: "Wait until the user stops." Good for search bars. It only fires the function if *t* milliseconds have passed without a new event.
*   **Throttle**: "At most once every *t* milliseconds." Good for scroll listeners. It ensures the function fires regularly but not too often.
    
`,
  intentTags: ["improve-performance", "improve-feedback"],
};
