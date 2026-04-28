import { ReferenceEntry } from '../../types';

export const mobile_first_design: ReferenceEntry = {
  id: "mobile-first-design",
  title: "Mobile-First Design",
  domain: "responsiveness",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "mobile", "marketing", "content", "consumer", "marketplace"],
  confidenceScore: 96,
  slug: "mobile-first-design",
  complexity: "beginner",
  description: "Designing for the smallest screen first and progressively enhancing the experience for larger viewports.",
  quickTake: "Mobile-first forces content prioritization decisions upfront. If it doesn't fit on mobile, it probably wasn't important. Starting with desktop and trying to shrink down always produces worse mobile experiences than building up.",
  whyItMatters: "Over 60% of web traffic is mobile. Desktop-first CSS means mobile users download override styles they never use. Mobile-first with min-width queries means each breakpoint only adds — never overrides — which is smaller, faster, and cleaner.",
  mechanism: [
    "Start with base styles for the narrowest viewport (320px–375px)",
    "Use min-width media queries to add layout complexity as space increases",
    "Force content priority decisions at the smallest size — if it doesn't fit, cut or collapse it",
    "Test on a real device at each design phase, not just browser resize",
  ],
  whenToUse: [
    "New projects — always start mobile-first",
    "Any product with significant mobile traffic (check analytics)",
    "Consumer apps, content sites, marketplaces where mobile is the primary context",
  ],
  whenNotToUse: [
    "Internal tooling used exclusively on desktop (B2B dashboards with known desktop-only users)",
    "Retrofitting legacy codebases — sometimes desktop-first is the lesser evil when rewriting isn't feasible",
  ],
  tradeoffs: [
    { pro: "Forces content prioritization that benefits all screen sizes", con: "Requires more upfront thinking about information hierarchy" },
    { pro: "CSS output is leaner — additions not overrides", con: "Designers comfortable with desktop-first need to reframe their workflow" },
  ],
  failureModes: [
    "Desktop-first migration: adding max-width queries on top of desktop CSS creates specificity tangles",
    "Mobile as afterthought: designing at 1440px then squishing features into 375px always produces poor results",
    "Testing only in browser DevTools: emulation misses touch events, real font rendering, and performance differences",
  ],
  alternatives: [
    { entryId: "breakpoint-strategy", condition: "Define breakpoints after establishing mobile baseline" },
    { entryId: "fluid-adaptive-layouts", condition: "When content needs to scale continuously rather than jump at breakpoints" },
  ],
  a11ySpecs: [
    "Mobile viewport must not disable user scaling: never use user-scalable=no in meta viewport",
    "Touch targets must be minimum 44×44px (Apple) / 48dp (Material Design)",
    "Ensure content is accessible without hover interactions on touch devices",
  ],
  perfImpact: "low",
  implementationNotes: [
    "CSS structure: base rules first, then @media (min-width: 640px), then @media (min-width: 1024px)",
    "In Tailwind: unprefixed utilities apply to all sizes; sm:, md:, lg: apply at min-widths",
    "Never use max-width media queries in a mobile-first system — they fight the cascade",
    "Meta viewport: <meta name='viewport' content='width=device-width, initial-scale=1'> — always include",
  ],
  checklist: [
    "Base CSS styles written for mobile viewport without any media queries",
    "All media queries use min-width (not max-width)",
    "Tested on a real mobile device, not only DevTools emulation",
    "meta viewport tag includes width=device-width without user-scalable=no",
  ],
  relatedEntryIds: ['breakpoint-strategy', 'touch-target-sizing', 'fluid-adaptive-layouts', 'thumb-zone'],
  tags: ["mobile-first", "responsive design", "fix mobile", "mobile layout", "doesn't work on small screen", "mobile UX"],
  intentTags: ["fix-alignment", "improve-readability"],
  contentStatus: 'hardened',
  content: `
# Mobile-First Design

Mobile-first is a constraint, not a limitation. The constraint forces decisions that make every screen size better.

## The Core Principle

Write base styles for mobile. Use \`min-width\` media queries to enhance for larger screens.

\`\`\`css
/* Mobile base — no media query needed */
.card { display: block; padding: 1rem; }

/* Tablet and up */
@media (min-width: 768px) {
  .card { display: flex; padding: 1.5rem; }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .card { padding: 2rem; max-width: 800px; }
}
\`\`\`

In Tailwind: \`p-4 md:p-6 lg:p-8\` — the pattern is identical.

## Why Not Desktop-First?

Desktop-first means mobile is a series of *overrides*:

\`\`\`css
/* Desktop */
.nav { display: flex; gap: 2rem; }

/* Now undo everything for mobile */
@media (max-width: 767px) {
  .nav { display: none; }
}
\`\`\`

Mobile users still download the flex styles. You fight the cascade at every breakpoint. Content priority is never questioned.

## The Content Priority Test

When a feature "doesn't fit" on mobile, you have three options:
1. Cut it (was it necessary?)
2. Collapse it (progressive disclosure)
3. Move it (different position in hierarchy)

If you can't decide, the feature probably isn't important enough to show on mobile — which often means it wasn't important enough on desktop either.
`,
};
