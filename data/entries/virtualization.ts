import { ReferenceEntry } from '../../types';

export const virtualization: ReferenceEntry = {
  id: "virtualization",
  title: "List Virtualization",
  domain: "data",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "big-data"],
  confidenceScore: 96,
  slug: "virtualization",
  complexity: "advanced",
  description: "Rendering massive datasets without crashing the browser by windowing the viewport.",
  quickTake: "List Virtualization (or Windowing) is a performance technique that only renders the items currently visible in the viewport, regardless of the total list size.",
  whyItMatters: "Rendering 10,000+ DOM nodes will crash a browser's memory and make style calculations agonizingly slow. Virtualization allows you to handle 'infinite' data with a constant, low memory footprint.",
  mechanism: [
    "Calculate the total height of the list based on item count and height",
    "Create a scrollable container with that total height",
    "Determine which items are currently in the 'window' (viewport + buffer)",
    "Render only those items, using absolute positioning to place them correctly"
  ],
  whenToUse: [
    "Massive data tables and grids",
    "Social media feeds with infinite scroll",
    "Log viewers and large-scale analytics dashboards"
  ],
  whenNotToUse: [
    "Small lists (e.g., <100 items) where the overhead isn't justified",
    "Lists with highly variable, unpredictable item heights (though 'dynamic' virtualization exists)",
    "When SEO is a priority and you need all content to be in the initial DOM"
  ],
  tradeoffs: [
    { pro: "Drastically improves initial load time and scrolling performance", con: "Breaks native browser 'Find on Page' (CMD+F) functionality" },
    { pro: "Constant memory usage regardless of dataset size", con: "More complex to implement, especially with dynamic heights" }
  ],
  failureModes: [
    "The 'Blank' Scroll: Scrolling faster than the virtualization can render new items",
    "Broken Accessibility: Screen readers losing context of the total list size",
    "Inconsistent Heights: Items overlapping or having gaps due to incorrect height calculations"
  ],
  alternatives: [
    { entryId: "performance-tuning", condition: "Use for general rendering optimization tips" },
    { entryId: "debounce-throttle", condition: "Use to optimize the scroll listeners driving the virtualization" }
  ],
  a11ySpecs: [
    "Use 'aria-setsize' and 'aria-posinset' to inform screen readers of the total list context",
    "Ensure keyboard navigation (Arrow keys) works correctly across virtualized boundaries",
    "Maintain focus management when items are added/removed from the DOM"
  ],
  perfImpact: "high",
  implementationNotes: [
    "Use libraries like 'react-window' or 'tanstack-virtual' for robust implementations",
    "Always include a 'buffer' of items above and below the viewport to prevent flickering",
    "Use 'memo' on list items to prevent unnecessary re-renders during scroll"
  ],
  checklist: [
    "Verified keyboard navigation across rendered and unrendered rows",
    "Exposed total item count and item position with aria metadata",
    "Tested fast scroll behavior for blank windows or overlapping rows"
  ],
  relatedEntryIds: ['web-vitals', 'debounce-throttle', 'performance-tuning'],
  interactiveComponent: "VirtualizationDemo",
  tags: ["React","Big Data","Scalability"],
  content: `

# Windowing / Virtualization

Rendering 10,000 items in the DOM is a performance death sentence. The browser consumes huge memory and style calculations become slow.

### The Solution
**Virtualization** only renders the items that are currently visible in the viewport (plus a small buffer).
    
`,
  intentTags: ["improve-performance", "increase-density"],
};
