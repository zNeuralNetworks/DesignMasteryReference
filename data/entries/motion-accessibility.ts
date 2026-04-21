import { ReferenceEntry } from '../../types';

export const motion_accessibility: ReferenceEntry = {
  id: "motion-accessibility",
  title: "Motion Accessibility",
  domain: "motion",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "mobile", "marketing", "consumer", "dashboard"],
  confidenceScore: 96,
  slug: "motion-accessibility",
  complexity: "beginner",
  description: "Respecting user preferences for reduced motion to prevent harm from animations for people with vestibular disorders, epilepsy, and other motion sensitivities.",
  quickTake: "prefers-reduced-motion is not optional — it's a WCAG requirement. About 35% of people over 40 have vestibular disorders; rapid or large-scale animations can cause nausea, dizziness, or seizures. The fix is a single media query. There's no excuse for skipping it.",
  whyItMatters: "Animation without a reduced-motion fallback can cause genuine physical harm. Vestibular disorders affect millions of users. Epilepsy is triggered by flickering. This is not a minor accessibility concern — it's a health issue. WCAG 2.3.3 (WCAG 2.1 AAA) specifically covers animation from interactions.",
  mechanism: [
    "Wrap all non-essential animations in @media (prefers-reduced-motion: no-preference)",
    "Or explicitly remove animations: @media (prefers-reduced-motion: reduce) { * { animation: none; transition: none; } }",
    "Provide instant state changes as fallback — same function, no motion",
    "Parallax, auto-playing video, and scroll-jacking are highest risk — remove entirely under reduced-motion",
  ],
  whenToUse: [
    "Always — every project with any animation must implement prefers-reduced-motion",
  ],
  whenNotToUse: [
    "Never skip this — there are no exceptions",
  ],
  tradeoffs: [
    { pro: "One media query prevents potential physical harm to a significant user population", con: "No real tradeoff — implementation takes minutes and affects users who have opted into reduced motion" },
  ],
  failureModes: [
    "Blanket animation removal: removing all transitions creates jarring instant-state-changes — retain opacity fades at reduced duration instead",
    "prefers-reduced-motion only on some animations: inconsistent — some scroll animations still trigger",
    "Using JavaScript to check: @media is faster and more reliable than window.matchMedia — use CSS first",
    "Applying to wrong scope: global * { animation: none } also removes loading spinners and progress indicators that users need",
  ],
  alternatives: [
    { entryId: "scroll-animations", condition: "Scroll animations need separate reduced-motion treatment" },
    { entryId: "fluid-motion", condition: "Full motion system design should build reduced-motion in from the start" },
  ],
  a11ySpecs: [
    "WCAG 2.3.3 (AAA): Motion from interactions must be suppressible",
    "WCAG 2.3.1 (A): Three flashes or below threshold — no flashing content > 3 times per second",
    "WCAG 1.4.2: Audio control — auto-playing video with sound must have controls",
    "Inform users about motion before they experience it on motion-intensive pages",
  ],
  perfImpact: "low",
  implementationNotes: [
    "CSS approach: wrap animations with @media (prefers-reduced-motion: no-preference) { ... }",
    "Alternative: @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }",
    "Framer Motion: import { MotionConfig } from 'framer-motion'; <MotionConfig reducedMotion='user'>",
    "React hook: const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches",
  ],
  checklist: [
    "@media (prefers-reduced-motion) applied to all animations",
    "Parallax effects disabled under reduced-motion",
    "Auto-playing animations (loaders, looping illustrations) instant or stopped under reduced-motion",
    "Page transitions instant or simple fade-only under reduced-motion",
    "Scroll-triggered animations disabled under reduced-motion",
  ],
  relatedEntryIds: ['scroll-animations', 'scroll-jacking', 'fluid-motion', 'page-transitions', 'easing-curves'],
  tags: ["motion accessibility", "prefers-reduced-motion", "vestibular", "animation accessibility", "WCAG motion"],
  intentTags: ["fix-accessibility"],
  content: `
# Motion Accessibility

Animation can cause genuine physical harm. This is not a suggestion.

## The Problem

Vestibular disorders affect the inner ear's balance system. Rapid animations, parallax, and large-scale motion can cause:
- Nausea and dizziness
- Headaches
- Disorientation

Epilepsy can be triggered by flashing content (> 3 flashes per second).

Approximately 1 in 3 adults over 40 has some degree of vestibular dysfunction.

## The Fix

\`\`\`css
/* Method 1: Opt-in — only animate when user hasn't requested reduced motion */
@media (prefers-reduced-motion: no-preference) {
  .card-enter {
    animation: fadeUp 300ms ease-out;
  }
}

/* Method 2: Opt-out — remove all animation when user requests reduction */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
\`\`\`

## Framer Motion

\`\`\`tsx
import { MotionConfig } from 'framer-motion';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* All framer-motion animations respect OS preference automatically */}
      <Router />
    </MotionConfig>
  );
}
\`\`\`

## Highest-Risk Patterns

These should be completely removed (not just slowed) under reduced-motion:

1. **Parallax scrolling** — background/foreground at different speeds
2. **Auto-playing looping animations** — logos, backgrounds, illustrations
3. **Scroll-jacking** — taking control of scroll behavior
4. **Large-scale transforms** — elements flying in from off-screen

These can cause immediate symptoms for sensitive users. Don't slow them down — remove them entirely.
`,
};
