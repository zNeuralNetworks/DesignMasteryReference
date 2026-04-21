import { ReferenceEntry } from '../../types';

export const performance_tuning: ReferenceEntry = {
  id: "performance-tuning",
  title: "Browser Rendering Optimization",
  domain: "tokens",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile"],
  confidenceScore: 94,
  slug: "performance-tuning",
  complexity: "advanced",
  description: "Optimizing rendering, minimizing reflows, and managing the main thread.",
  quickTake: "Browser Rendering Optimization is the practice of minimizing the work the browser has to do to paint pixels, focusing on the 'Critical Rendering Path'.",
  whyItMatters: "A beautiful UI is useless if it's slow. High latency, 'jank' during animations, and slow initial loads directly correlate with lower user retention and conversion rates.",
  mechanism: [
    "Minimize 'Reflows' (Layout): Avoid changing properties like 'width', 'height', or 'top' that force the browser to recalculate the entire layout",
    "Minimize 'Repaints': Avoid changing cosmetic properties that force a redraw without layout changes",
    "Leverage 'Compositing': Use 'transform' and 'opacity' to move elements to their own GPU layers, bypassing the main thread",
    "Batch DOM Updates: Use 'requestAnimationFrame' or framework-specific batching to minimize the number of render cycles"
  ],
  whenToUse: [
    "Developing complex animations or transitions",
    "Handling large-scale data updates in the UI",
    "Optimizing for low-power mobile devices"
  ],
  whenNotToUse: [
    "Simple, static pages with minimal interactivity",
    "When the performance bottleneck is on the network or server-side",
    "Prematurely optimizing code that is already running at 60fps"
  ],
  tradeoffs: [
    { pro: "Silky-smooth 60fps animations and instant responsiveness", con: "Requires deep understanding of browser internals and CSS triggers" },
    { pro: "Reduced CPU/Battery usage for mobile users", con: "Can lead to more complex, less readable CSS/JS code" }
  ],
  failureModes: [
    "The 'Layout Thrashing' Problem: Reading and writing to the DOM in a tight loop, forcing multiple reflows",
    "Over-Compositing: Moving too many elements to their own GPU layers, exhausting video memory",
    "Main Thread Blocking: Running heavy JS logic during an animation, causing frame drops"
  ],
  alternatives: [
    { entryId: "web-vitals", condition: "Use to measure the real-world impact of your optimizations" },
    { entryId: "virtualization", condition: "Use to handle massive DOM trees that are inherently slow" }
  ],
  a11ySpecs: [
    "Ensure that optimizations don't break accessibility features like screen reader focus",
    "Maintain a consistent frame rate to avoid triggering motion sensitivity",
    "Test performance with assistive technologies enabled"
  ],
  perfImpact: "high",
  implementationNotes: [
    "Use 'CSS Triggers' (csstriggers.com) to check the impact of specific properties",
    "Leverage Chrome DevTools 'Performance' and 'Rendering' tabs to identify bottlenecks",
    "Prefer 'will-change: transform' for elements that animate frequently"
  ],
  checklist: [
    "Captured baseline metrics before applying optimizations",
    "Mapped each optimization to a measurable Web Vital or interaction metric",
    "Checked low-end device performance, not only desktop development hardware"
  ],
  relatedEntryIds: ['debounce-throttle', 'web-vitals', 'virtualization'],
  interactiveComponent: "Performance",
  tags: ["Optimization","Rendering","React","slow render","jank","frame drops","fix performance","React too slow","re-renders","sluggish UI"],
  content: `

# Rendering Performance

A beautiful UI is useless if it's slow.

### Key Concepts
*   **Reflow vs Repaint**: Changing layout properties (width, left) causes Reflow (expensive). Changing cosmetic properties (color, opacity, transform) causes Repaint (cheaper).
*   **Compositing**: Using \`transform: translate()\` moves the element to its own layer on the GPU, avoiding layout recalculations.
    
`,
  intentTags: ["improve-performance"],
};
