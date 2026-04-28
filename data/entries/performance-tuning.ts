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
  contentStatus: 'hardened',
  content: `

# Rendering Performance

Every frame the browser renders goes through up to four stages: **JavaScript → Style → Layout → Paint → Composite**. Each stage is a potential bottleneck. Skipping unnecessary stages is the single biggest lever for perceived smoothness.

### The rendering pipeline

**Layout (Reflow)** — Triggered by changing geometric properties: \`width\`, \`height\`, \`top\`, \`left\`, \`margin\`, \`padding\`. Expensive because the browser must recalculate every affected element's position. Changing the width of a flex container can reflow the entire page.

**Paint (Repaint)** — Triggered by changing visual properties that don't affect geometry: \`color\`, \`background-color\`, \`border-color\`, \`box-shadow\`. Cheaper than layout, but still forces the CPU to repaint affected pixels.

**Composite** — Triggered by \`transform\` and \`opacity\` only. These properties operate on GPU layers and bypass both layout and paint. This is the target for all animations.

### The golden rule of animation

Animate only \`transform\` and \`opacity\`. These two properties are composited directly on the GPU and never trigger layout or paint. Animating \`width\`, \`height\`, \`top\`, or \`left\` causes layout thrashing on every frame.

\`\`\`css
/* Bad — causes reflow every frame */
.panel { transition: height 300ms ease; }

/* Good — composited, no reflow */
.panel { transition: transform 300ms ease; transform: scaleY(0); }
\`\`\`

### Layout thrashing

Reading layout properties (\`.offsetHeight\`, \`.getBoundingClientRect()\`) forces the browser to flush any pending style changes and recalculate layout immediately. Doing this in a loop — read, write, read, write — thrashes the rendering pipeline.

**Fix**: Batch all reads first, then all writes. Or use \`requestAnimationFrame\` to defer writes to the next frame boundary.

### will-change

\`\`\`css
.animated-card { will-change: transform; }
\`\`\`

Promotes the element to its own compositor layer *before* the animation starts, eliminating the layer-promotion cost mid-animation. Only apply \`will-change\` to elements that genuinely animate — over-use exhausts GPU memory.

### Measuring, not guessing

Open Chrome DevTools → Performance tab → Record a 5-second interaction. Look for:
- **Long Tasks** (>50ms on the main thread) — blocking interaction
- **Layout Shift** (CLS) — unexpected reflows during user interaction
- **Frame drops** below 60fps in the Frames track

Fix the highest-impact bottleneck, measure again. Never optimize without a before/after comparison.
`,
  intentTags: ["improve-performance"],
};
