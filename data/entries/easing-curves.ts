import { ReferenceEntry } from '../../types';

export const easing_curves: ReferenceEntry = {
  id: "easing-curves",
  title: "Easing Curves",
  domain: "motion",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "mobile", "marketing", "consumer"],
  confidenceScore: 91,
  slug: "easing-curves",
  complexity: "intermediate",
  description: "How objects accelerate and decelerate during animation determines whether motion feels natural or mechanical. Easing is the difference between UI that feels alive and UI that feels robotic.",
  quickTake: "Linear is almost always wrong. Objects in the real world accelerate and decelerate — they don't move at constant speed. Use ease-out for elements entering the screen (fast start, gentle landing), ease-in for elements leaving (gentle start, quick exit), ease-in-out for repositioning.",
  whyItMatters: "Linear motion looks mechanical and cheap. The right easing makes UI feel physical and alive — users describe well-eased interfaces as 'polished' without being able to say why. Wrong easing (especially linear transitions) is immediately perceivable as unnatural even if users can't articulate it.",
  mechanism: [
    "ease-out: decelerates to a stop — natural for elements entering the screen",
    "ease-in: accelerates out — natural for elements leaving (fast exit feels intentional)",
    "ease-in-out: decelerates at both ends — natural for repositioning/morphing",
    "spring: physics-based with natural overshoot — premium feel for interactive elements",
  ],
  whenToUse: [
    "All animations — linear should almost never appear in production UI",
    "Entering elements: ease-out (door opening metaphor — swings fast then settles)",
    "Exiting elements: ease-in (door closing — quick acceleration, decisive exit)",
  ],
  whenNotToUse: [
    "Linear: only for loading spinners, progress bars, and looped animations",
    "Dramatic spring: high stiffness/bounce for productivity apps feels inappropriate",
  ],
  tradeoffs: [
    { pro: "Correct easing communicates physical presence and polish", con: "Custom cubic-bezier curves require design tool support and developer knowledge to implement" },
    { pro: "Spring easing gives the most natural feel without custom curve math", con: "Spring parameters (stiffness, damping, mass) are hard to coordinate across a team" },
  ],
  failureModes: [
    "All transitions set to ease (CSS default): entering and exiting use the same curve, which feels identical and flat",
    "Linear entrance: element appears at constant speed with no natural landing — jarring",
    "Symmetric easing on exit: ease-out on exit is sluggish — exit should be quick (ease-in)",
    "Spring on layout shifts: physics-based layout changes cause disorienting reflows",
  ],
  alternatives: [
    { entryId: "micro-interactions", condition: "Easing is applied to micro-interactions — they're inseparable" },
    { entryId: "fluid-motion", condition: "Fluid motion design principles cover the full system, of which easing is one component" },
  ],
  a11ySpecs: [
    "@media (prefers-reduced-motion: reduce) — set all animation durations to 0.01ms or animation: none",
    "Never use motion as the sole communicator of state change — pair with color/text change",
  ],
  perfImpact: "low",
  implementationNotes: [
    "CSS built-ins: ease-in = cubic-bezier(0.4,0,1,1); ease-out = cubic-bezier(0,0,0.2,1); ease-in-out = cubic-bezier(0.4,0,0.2,1)",
    "Material Design easing tokens: --md-sys-motion-easing-standard, emphasized, emphasized-decelerate",
    "Framer Motion spring: { type: 'spring', stiffness: 300, damping: 30 } — good default",
    "easings.net and cubic-bezier.com for visual curve editing",
  ],
  checklist: [
    "No linear transitions on UI elements (only on loaders/progress)",
    "Entering animations use ease-out",
    "Exiting animations use ease-in",
    "prefers-reduced-motion: all animations disabled or instant",
  ],
  relatedEntryIds: ['micro-interactions', 'fluid-motion', 'page-transitions', 'motion-accessibility'],
  tags: ["easing", "animation curves", "cubic-bezier", "transitions", "ease-out", "spring animation", "motion design"],
  intentTags: ["improve-aesthetics", "improve-feedback"],
  content: `
# Easing Curves

The difference between UI that feels polished and UI that feels mechanical is almost entirely easing.

## The Core Principle

Objects in the real world don't move at constant speed. They accelerate from rest and decelerate to a stop. **Linear motion looks robotic.** Eased motion looks alive.

## The Four Curves

### ease-out (decelerate)
Fast start → gentle landing. **Use for: entering elements.**

\`\`\`css
transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
\`\`\`

Metaphor: a door swings open quickly, then gently settles at its open position.

### ease-in (accelerate)
Gentle start → fast exit. **Use for: exiting elements.**

\`\`\`css
transition: transform 200ms cubic-bezier(0.4, 0, 1, 1);
\`\`\`

Metaphor: a door pushed to close starts slow, then swings quickly shut.

### ease-in-out (both ends)
Gentle start and end. **Use for: repositioning, morphing.**

\`\`\`css
transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
\`\`\`

### spring (physics)
Overshoot + settle. **Use for: interactive elements that respond to user action.**

\`\`\`typescript
// Framer Motion
animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}
\`\`\`

## Duration × Easing

Easing and duration work together. A 500ms ease-out on a button hover is too slow. A 100ms linear on a modal is too fast and wrong curve.

| Element | Duration | Easing |
|---|---|---|
| Button hover state | 100–150ms | ease-out |
| Dropdown open | 200ms | ease-out |
| Modal enter | 300ms | ease-out |
| Modal exit | 200ms | ease-in |
| Page transition | 300ms | ease-in-out |
`,
};
