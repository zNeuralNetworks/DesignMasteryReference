import { ReferenceEntry } from '../../types';

export const white_space: ReferenceEntry = {
  id: "white-space",
  title: "White Space & Breathing Room",
  domain: "visual-hierarchy",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "marketing", "content", "dashboard", "portfolio"],
  confidenceScore: 95,
  slug: "white-space",
  complexity: "beginner",
  description: "Using empty space intentionally to create grouping, hierarchy, and visual rest — making dense interfaces feel organized rather than cluttered.",
  quickTake: "White space is not empty space — it's a design element. More space around an element increases its perceived importance. Tight spacing makes elements feel related; loose spacing separates them. When an interface feels 'cluttered', the fix is almost always more space, not less content.",
  whyItMatters: "Cluttered interfaces overwhelm users. Eyes don't know where to look and tasks take longer. Strategic white space creates visual groups without visible borders, communicates hierarchy without added elements, and reduces cognitive load by making structure apparent at a glance.",
  mechanism: [
    "Use space to create grouping (Gestalt proximity): related elements close together, unrelated further apart",
    "Increase space around important elements to increase their visual weight",
    "Consistent spacing scale (4px grid): 4, 8, 12, 16, 24, 32, 48, 64px — don't use arbitrary values",
    "Active white space: intentional, generous padding inside cards, sections, and around focal elements",
  ],
  whenToUse: [
    "All UI — there is no interface that doesn't benefit from intentional spacing",
    "Especially: forms, dashboards, navigation, card layouts, typographic content",
  ],
  whenNotToUse: [
    "Maximum density tables where every pixel is needed for data (spreadsheet-level density)",
    "Mobile apps where screen real estate is genuinely limited — but even here, use spacing thoughtfully",
  ],
  tradeoffs: [
    { pro: "Creates hierarchy and grouping without adding visual elements", con: "Too much white space on data-dense interfaces removes necessary information from view" },
    { pro: "Universally improves perceived quality — spacious = premium", con: "Requires discipline across a team — arbitrary spacing decisions create inconsistency" },
  ],
  failureModes: [
    "Random spacing: using 9px, 13px, 22px instead of consistent scale — creates visual noise",
    "Equal spacing everywhere: related and unrelated elements get same gap — groups disappear",
    "Padding vs. margin confusion: padding changes background coverage, margin doesn't",
    "Responsive spacing: forgetting to reduce large desktop spacing on mobile (64px padding on 375px viewport)",
  ],
  alternatives: [
    { entryId: "gestalt-proximity", condition: "Gestalt proximity is the formal principle behind how spacing creates grouping" },
    { entryId: "spacing-systems", condition: "A spacing system formalizes the scale so teams apply spacing consistently" },
  ],
  a11ySpecs: [
    "WCAG 1.4.12: Text spacing must be adjustable without loss of content — don't override user-defined spacing",
    "Minimum touch target spacing: 8px between interactive elements to prevent mis-taps",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Tailwind spacing scale maps to 4px grid: p-1=4px, p-2=8px, p-4=16px, p-6=24px, p-8=32px",
    "Section separation: 48–80px between page sections; 24–32px between components",
    "Inner padding: 16–24px for standard cards; 24–32px for prominent feature cards",
    "Use gap on flexbox/grid instead of margin on children for consistent spacing",
  ],
  checklist: [
    "Spacing values from consistent scale (multiples of 4 or 8)",
    "Related items have tighter spacing than unrelated items",
    "Card/section inner padding at least 16px",
    "Reduced spacing values on mobile viewports",
  ],
  relatedEntryIds: ['gestalt-proximity', 'spacing-systems', 'visual-weight', 'type-hierarchy'],
  tags: ["white space", "spacing", "cluttered UI", "breathing room", "padding", "visual noise", "margin"],
  intentTags: ["fix-alignment", "reduce-cognitive-load", "improve-aesthetics"],
  content: `
# White Space & Breathing Room

White space isn't empty — it's a design element that creates grouping, hierarchy, and calm.

## Space Creates Groups

Elements placed close together appear related. Elements further apart appear separate. This is Gestalt proximity in action.

\`\`\`
Name        Role           Status
Email       Department     ← These three look like one block
Phone       Location       ← These three look like another

                           ← Gap between sections
Name        Role           Status
\`\`\`

No borders needed. Space did the work.

## Space Creates Importance

More space around an element = more visual weight = more important.

A hero headline with 80px padding feels significant. The same headline with 12px padding feels like body text. The content hasn't changed — the space around it has.

## The Spacing Scale

Use a consistent scale based on a 4px or 8px base unit:

| Token | Value | Tailwind | Use |
|---|---|---|---|
| xs | 4px | p-1 | Icon gaps, inline spacing |
| sm | 8px | p-2 | Compact list items |
| md | 16px | p-4 | Card padding, form field gap |
| lg | 24px | p-6 | Section padding, component gaps |
| xl | 32px | p-8 | Wide card padding |
| 2xl | 48px | p-12 | Section dividers |
| 3xl | 64px | p-16 | Hero padding, page sections |

**Never use values outside this scale.** Arbitrary values (11px, 22px) create visual noise.

## The Cluttered UI Fix

When an interface looks "cluttered", resist the instinct to remove content. First, try:
1. Increase section separation (more space between unrelated groups)
2. Increase inner padding (more breathing room inside cards/containers)
3. Align elements to create implied structure

Usually, adding space is enough.
`,
};
