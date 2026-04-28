import { ReferenceEntry } from '../../types';

export const scroll_jacking: ReferenceEntry = {
  id: "scroll-jacking",
  title: "Anti-Pattern: Scroll Jacking",
  domain: "motion",
  format: "anti-pattern",
  verdict: "anti-pattern",
  useContext: ["saas", "content"],
  confidenceScore: 95,
  slug: "scroll-jacking",
  complexity: "intermediate",
  description: "The usability disaster of overriding the browser's native scrolling behavior.",
  quickTake: "Scroll jacking breaks the fundamental contract between the user and the browser, leading to disorientation and motion sickness.",
  whyItMatters: "Scrolling is a subconscious muscle-memory action. When you change the speed or physics of scrolling, you break the user's sense of control.",
  mechanism: [
    "Intercepting the 'wheel' or 'touchmove' events",
    "Calculating a custom scroll position via JavaScript",
    "Applying the scroll position with custom easing or 'snapping'"
  ],
  whenToUse: [
    "Highly curated 'Scrollytelling' experiences (with extreme caution)",
    "Full-screen presentation decks where each scroll is a slide transition"
  ],
  whenNotToUse: [
    "Long-form content pages",
    "Data-heavy dashboards",
    "Any site where users need to scan or find information quickly"
  ],
  tradeoffs: [
    { pro: "Allows for precisely timed animations", con: "Causes motion sickness and disorientation" },
    { pro: "Creates a 'cinematic' feel", con: "Breaks native browser features (Find in Page, Scroll-to-Top)" }
  ],
  failureModes: [
    "Laggy scrolling on low-end devices",
    "Incompatibility with trackpad gestures or momentum scrolling",
    "Users feeling 'trapped' or unable to reach the bottom of the page"
  ],
  alternatives: [
    { entryId: "scroll-animations", condition: "Use CSS Scroll-Timeline or Intersection Observer for scroll-triggered effects" },
    { entryId: "fluid-motion", condition: "Use for smooth transitions that don't override physics" }
  ],
  a11ySpecs: [
    "Respect 'prefers-reduced-motion' media queries",
    "Ensure keyboard navigation (Space, PageDown) still works correctly",
    "Do not disable the native scrollbar"
  ],
  perfImpact: "high",
  implementationNotes: [
    "Prefer CSS 'scroll-snap-type' for snapping behavior—it's native and performant",
    "If using JS, ensure you are not blocking the main thread",
    "Always provide a way to bypass the scroll-jacked experience"
  ],
  checklist: [
    "Confirmed native wheel, trackpad, touch, and keyboard scroll still work",
    "Respected prefers-reduced-motion and provided a bypass path",
    "Verified browser find, scrollbar, and scroll restoration are not broken"
  ],
  relatedEntryIds: ['mystery-meat-navigation', 'deceptive-patterns', 'micro-interactions'],
  interactiveComponent: "ScrollJackingDemo",
  tags: ["UX","Performance","Bad Design","broken scroll","scroll feels wrong","scroll override","scroll hijacking","fix scroll","janky scrolling"],
  contentStatus: 'hardened',
  content: `

# Scroll Jacking

Scroll Jacking occurs when a website overrides the native scroll mechanism to create a "smoother" or "step-based" experience.

### The Problem
*   **Loss of Control**: Users have spent years building muscle memory for how their mouse wheel or trackpad behaves. Changing the speed or direction feels jarring (motion sickness).
*   **Performance**: JavaScript-driven scrolling is often laggier than the browser's optimized native thread.

> **Exception**: "Scrollytelling" (where scroll *position* triggers animation) is fine, as long as 1px of scroll equals 1px of movement.
    
`,
  intentTags: ["improve-feedback", "improve-performance"],
};
