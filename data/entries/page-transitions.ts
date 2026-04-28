import { ReferenceEntry } from '../../types';

export const page_transitions: ReferenceEntry = {
  id: "page-transitions",
  title: "Page Transitions",
  domain: "motion",
  format: "pattern",
  verdict: "conditional",
  useContext: ["saas", "marketing", "mobile", "consumer"],
  confidenceScore: 87,
  slug: "page-transitions",
  complexity: "intermediate",
  description: "Animating between routes or views to communicate navigation direction, maintain context, and reduce perceived load time.",
  quickTake: "Page transitions add perceived performance and communicate hierarchy when done well, and just delay users when done poorly. Keep transitions under 300ms for lateral navigation, 400ms for hierarchical (push/drill-down). Always implement prefers-reduced-motion. Skip transitions on direct URL navigation.",
  whyItMatters: "A blank white flash between pages is jarring and feels broken. A well-timed transition communicates 'you went deeper' vs 'you went sideways' — spatial orientation in an otherwise flat URL-based world. But slow or gratuitous transitions are worse than no transitions at all.",
  mechanism: [
    "Fade: simplest, works for lateral navigation between peer pages",
    "Slide: communicates direction — push right for deeper, slide back for breadcrumb navigation",
    "Shared element: morphs a card/image into the detail view — powerful but complex to implement",
    "Use the View Transitions API for native browser-supported morphing",
  ],
  whenToUse: [
    "Mobile-web apps where native-app feel is the goal",
    "Hierarchical content where drill-down/back navigation benefits from directional cues",
    "Marketing sites where transitions are part of the visual design language",
  ],
  whenNotToUse: [
    "Productivity apps where speed is the priority — transitions slow down power users",
    "When the transition takes longer than the actual page render (defeats the purpose)",
    "Direct URL navigation — users expect the page to load immediately",
  ],
  tradeoffs: [
    { pro: "Reduces perceived blank-screen flash during navigation", con: "Adds real delay if not implemented correctly (transition blocks content display)" },
    { pro: "Communicates spatial hierarchy, especially on mobile", con: "Adds implementation complexity; shared element transitions are particularly complex" },
  ],
  failureModes: [
    "Blocking transition: new page content hidden during 400ms animation — user waits with nothing to see",
    "Direction mismatch: back button animates forward (to the right) — disorienting",
    "No reduced-motion fallback: users with vestibular disorders experience motion sickness",
    "Transition on tab changes: tabbed interfaces shouldn't slide — they're not hierarchical",
  ],
  alternatives: [
    { entryId: "skeleton-screens", condition: "Skeleton screens address perceived load time without requiring page transitions" },
    { entryId: "micro-interactions", condition: "Micro-interactions for UI feedback without full-page motion" },
  ],
  a11ySpecs: [
    "@media (prefers-reduced-motion: reduce) — remove or fade all transitions to 0ms",
    "Transitions must not prevent focus management — new page must receive focus on navigation",
    "Don't use transitions to hide content loading — screen readers announce page content, not animations",
  ],
  perfImpact: "low",
  implementationNotes: [
    "View Transitions API: document.startViewTransition(() => updateDOM()) — native browser support in Chrome/Edge",
    "Framer Motion: AnimatePresence + variants for React route transitions",
    "Keep page transitions on transform/opacity only — never animate layout properties",
    "Pre-render the incoming page before starting the transition to avoid blank frames",
  ],
  checklist: [
    "Transition duration under 300ms for lateral, 400ms for hierarchical navigation",
    "prefers-reduced-motion: no transitions or instant fade only",
    "Back navigation animates in the correct reverse direction",
    "New page content is pre-rendered before transition starts",
  ],
  relatedEntryIds: ['micro-interactions', 'fluid-motion', 'motion-accessibility', 'skeleton-screens'],
  tags: ["page transitions", "route transitions", "navigation animation", "view transitions", "mobile transitions"],
  intentTags: ["improve-feedback", "improve-aesthetics"],
  contentStatus: 'hardened',
  content: `
# Page Transitions

Transitions between pages serve two jobs: reduce the jarring blank flash, and communicate navigation direction.

## Duration Guidelines

| Navigation type | Duration | Easing |
|---|---|---|
| Lateral (peer pages) | 200–250ms | ease-in-out |
| Hierarchical (drill-down) | 300–350ms | ease-out (entering) |
| Return navigation | 250–300ms | ease-in (exiting) |
| Modal presentation | 300–400ms | spring or ease-out |

Never exceed 400ms. Users notice every millisecond of a page transition.

## The View Transitions API

Native browser transitions without JavaScript frameworks:

\`\`\`javascript
async function navigate(href) {
  if (!document.startViewTransition) {
    window.location.href = href;
    return;
  }

  document.startViewTransition(async () => {
    await fetch(href); // or React/router update
    updateDOM();
  });
}
\`\`\`

The browser handles the cross-fade automatically. Add CSS for custom animations:

\`\`\`css
::view-transition-old(root) {
  animation: 200ms ease-in slide-out;
}
::view-transition-new(root) {
  animation: 300ms ease-out slide-in;
}
\`\`\`

## Reduced Motion

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
  }
}
\`\`\`

This is non-negotiable. Users with vestibular disorders can experience nausea from page-level animations.
`,
};
