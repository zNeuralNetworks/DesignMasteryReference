import { ReferenceEntry } from '../../types';

export const staggered_animation: ReferenceEntry = {
  id: "staggered-animation",
  title: "Staggered Animation",
  domain: "motion",
  format: "pattern",
  verdict: "conditional",
  useContext: ["marketing", "saas", "mobile", "consumer"],
  confidenceScore: 84,
  slug: "staggered-animation",
  complexity: "intermediate",
  description: "Animating list items or grid elements sequentially with small delays to create a cascade effect that guides the eye and adds visual sophistication.",
  quickTake: "Staggered animation guides the eye through a list and adds premium feel. But delay must be tiny — 30–50ms per item. Larger delays become frustrating animations that prevent users from seeing content. Never stagger more than 8–10 items. Always check prefers-reduced-motion.",
  whyItMatters: "A stagger that's too slow is more annoying than no stagger at all — it actively delays content presentation. At the right timing (30–50ms offset), staggering creates a guided reading flow and makes complex layouts feel organized. The line between 'polished' and 'slow' is about 30ms.",
  mechanism: [
    "Each item animates independently with a cumulative delay: item[i] delay = i × 40ms",
    "Cap stagger at 8–10 items maximum — beyond that, last items take too long to appear",
    "Keep individual item animation short: 200–300ms fade + translate-y(8px) to(0)",
    "Items should be fully visible before user can scroll to them",
  ],
  whenToUse: [
    "Page-load reveals for marketing/landing pages with defined sections",
    "Card grids appearing on first load",
    "Menu items in a navigation drawer opening",
  ],
  whenNotToUse: [
    "Data that updates dynamically — newly inserted items shouldn't stagger",
    "Long lists (10+ items) — last items appear too late",
    "Productivity apps where content should appear instantly",
    "Inline content the user is waiting to see",
  ],
  tradeoffs: [
    { pro: "Creates visual hierarchy and guides eye through content on first view", con: "Delays content visibility — users waiting for content see stagger as slowness" },
    { pro: "Adds premium, considered feel to interfaces", con: "Can feel repetitive on pages visited multiple times" },
  ],
  failureModes: [
    "100ms+ stagger delay: 10 items × 100ms = 1 second before last item appears — unacceptable",
    "Stagger on every page visit: returning users are forced to wait through the animation each time",
    "Staggering pagination: new page load staggers items users have already seen",
    "No exit animation: items fade out instantly while entering slowly — asymmetric feels broken",
  ],
  alternatives: [
    { entryId: "scroll-animations", condition: "Scroll-triggered reveals are a more controlled alternative to page-load stagger" },
    { entryId: "page-transitions", condition: "Page-level transitions often make per-item stagger unnecessary" },
  ],
  a11ySpecs: [
    "prefers-reduced-motion: make all items appear instantly (transition: none; opacity: 1)",
    "Items must be in DOM immediately — stagger is CSS/JS animation only, not DOM insertion delay",
    "Screen readers should not be affected — aria attributes shouldn't change during stagger",
  ],
  perfImpact: "low",
  implementationNotes: [
    "CSS approach: animation-delay: calc(var(--index) * 40ms) with CSS custom property on each item",
    "Framer Motion: staggerChildren: 0.04 in parent variants",
    "Only play stagger on mount — track hasMounted ref to skip on re-renders",
    "Intersection observer: trigger stagger when container enters viewport, not on page load",
  ],
  checklist: [
    "Stagger delay 30–50ms per item maximum",
    "Maximum 8–10 items staggered",
    "prefers-reduced-motion: all items appear simultaneously, no delay",
    "Stagger only plays on first mount, not on data refetches or re-renders",
  ],
  relatedEntryIds: ['scroll-animations', 'page-transitions', 'easing-curves', 'motion-accessibility'],
  tags: ["stagger animation", "list animation", "cascade animation", "Framer Motion stagger", "entrance animation"],
  intentTags: ["improve-aesthetics", "improve-feedback"],
  content: `
# Staggered Animation

When done right, staggered entrance is one of the most effective polish techniques. When done wrong, it's one of the most annoying.

## The Timing Rule

**30–50ms per item.** Not 100ms. Not 80ms. 30–50ms.

At 40ms per item, 8 items take 320ms total. At 100ms per item, 8 items take 800ms — close to a second of forced waiting.

\`\`\`css
.item {
  opacity: 0;
  transform: translateY(8px);
  animation: fadeUp 250ms ease-out forwards;
  animation-delay: calc(var(--stagger-index) * 40ms);
}

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}
\`\`\`

\`\`\`tsx
{items.map((item, i) => (
  <div key={item.id} style={{ '--stagger-index': i } as React.CSSProperties}>
    <Item {...item} />
  </div>
))}
\`\`\`

## With Framer Motion

\`\`\`typescript
const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.04 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } }
};
\`\`\`

## Play Once, Not Every Time

Stagger should play on the first mount — not every time data refreshes or the user navigates back.

\`\`\`typescript
const [hasAnimated, setHasAnimated] = useState(false);

useEffect(() => { setHasAnimated(true); }, []);

// Only apply stagger classes before hasAnimated is true
\`\`\`

## Reduced Motion

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  .item {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
\`\`\`
`,
};
