import { ReferenceEntry } from '../../types';

export const aesthetic_usability_effect: ReferenceEntry = {
  id: "aesthetic-usability-effect",
  title: "Aesthetic-Usability Effect",
  domain: "psychology",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "marketing", "consumer", "portfolio", "mobile"],
  confidenceScore: 91,
  slug: "aesthetic-usability-effect",
  complexity: "beginner",
  description: "Users perceive aesthetically pleasing designs as more usable — attractive interfaces create a 'halo effect' that increases tolerance for minor issues and creates positive first impressions.",
  quickTake: "Beautiful design doesn't just look good — it makes users believe the product works better, tolerate bugs more, and return more often. The flip side: a gorgeous UI with a broken core function creates worse impressions than a plain UI with a working one. Aesthetics amplify, not replace, usability.",
  whyItMatters: "First impressions are formed in 50 milliseconds. Users trust attractive products more. When something goes wrong, users of visually polished products attribute the failure to themselves more often than to the product. Aesthetic investment directly affects retention metrics — not just brand perception.",
  mechanism: [
    "Visual polish increases perceived competence and trustworthiness — users generalize from appearance to quality",
    "Beautiful design creates positive affect, which increases tolerance for friction and errors",
    "The effect is strongest on first use when users have no functional data to counter the impression",
    "Aesthetic quality amplifies functional quality but cannot substitute for it long-term",
  ],
  whenToUse: [
    "First impressions: landing pages, onboarding, initial product experience",
    "Trust-sensitive products: financial, health, data products where user trust is a core requirement",
    "Competitive markets where functional differentiation is low",
  ],
  whenNotToUse: [
    "As a substitute for usability — aesthetic effects diminish with repeated exposure to functional failures",
    "Internal tools where users have no choice and form strong impressions regardless",
  ],
  tradeoffs: [
    { pro: "Users tolerate more friction and bugs on visually polished products", con: "Creates expectation debt — beautiful design sets high expectations that poor function doesn't meet" },
    { pro: "Increases perceived competence and trustworthiness before any interaction", con: "Over-investment in aesthetics while neglecting function creates worse outcomes than moderate investment in both" },
  ],
  failureModes: [
    "Aesthetic-only design: stunning visuals, broken core workflows — users feel deceived after trust-building phase",
    "Delaying function for aesthetics: 'we'll fix bugs after it looks great' — users encounter functional failures during the highest-trust phase",
    "Aesthetic mismatch: beautiful landing page, ugly in-product experience — perception cliff on activation",
  ],
  alternatives: [
    { entryId: "visual-weight", condition: "Visual weight principles are the technical implementation of aesthetic hierarchy" },
    { entryId: "empty-states", condition: "Empty states are a high-aesthetic-impact, low-cost investment in first impressions" },
  ],
  a11ySpecs: [
    "Aesthetic choices must not sacrifice accessibility — decorative patterns that reduce contrast, complex animations without reduced-motion support",
    "Beautiful and accessible are not in conflict — high contrast, clear typography, and good spacing are both accessible and aesthetic",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Highest ROI aesthetic investments: consistent spacing, good type scale, intentional color system, quality illustrations/icons",
    "Lowest ROI: elaborate animations that delay function, decorative elements that add load time without value",
    "Empty states are the #1 underinvested area — they're the most-seen first-time experience",
    "Micro-interactions add aesthetic polish at minimal cost — hover states, button press feedback",
  ],
  checklist: [
    "Visual design consistency throughout the product (not just landing page)",
    "First-time user flow given highest aesthetic attention",
    "Empty and loading states are designed, not afterthoughts",
    "Aesthetic investments don't sacrifice accessibility or performance",
  ],
  relatedEntryIds: ['empty-states', 'micro-interactions', 'visual-weight', 'onboarding-tours'],
  tags: ["aesthetic usability", "visual polish", "first impressions", "beautiful design", "trust", "design quality"],
  intentTags: ["improve-aesthetics", "improve-feedback"],
  content: `
# Aesthetic-Usability Effect

Attractive interfaces are perceived as more usable — even before users have tried to use them.

## The Research

Masaaki Kurosu and Kaori Kashimura (1995) asked participants to rate ATM interfaces on aesthetics and usability. The correlation was striking: participants consistently rated attractive interfaces as easier to use — even when the interfaces were functionally identical.

This isn't irrationality. It's a reasonable heuristic: organizations that invest in aesthetics tend to also invest in quality. Users have learned that beautiful = well-made.

## What This Means in Practice

**The amplifier model:**
> Aesthetic quality × Functional quality = Perceived product quality

A 9/10 aesthetic product with 7/10 function is perceived better than an 8/10 aesthetic product with 7/10 function.

But:
> 9/10 aesthetic × 2/10 function = trust violation

Beautiful design sets expectations. If function fails them, the betrayal feels worse than if a plain interface had failed.

## The First 50 Milliseconds

Users form first impressions in 50ms — before reading a word or clicking anything. This is pure visual processing. Aesthetics matter most in this window.

What creates positive impressions in 50ms:
- Generous whitespace and clear breathing room
- Consistent visual rhythm
- Clear type hierarchy
- Intentional, harmonious color use

## Where to Invest

**Highest ROI:**
- Empty states (first experience, zero data, seen by every new user)
- Onboarding flow (trust-building phase)
- Loading and error states (moment of stress)

**Lower ROI:**
- Elaborate illustrations on rarely-visited pages
- Animations on power-user workflows
`,
};
