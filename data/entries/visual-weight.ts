import { ReferenceEntry } from '../../types';

export const visual_weight: ReferenceEntry = {
  id: "visual-weight",
  title: "Visual Weight",
  domain: "visual-hierarchy",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "marketing", "dashboard", "content", "portfolio"],
  confidenceScore: 92,
  slug: "visual-weight",
  complexity: "intermediate",
  description: "How size, color, contrast, position, and density interact to make elements feel heavy or light — the basis for directing attention in any layout.",
  quickTake: "Visual weight is why a red dot captures more attention than a large grey box. Size is only one factor. Contrast, saturation, isolation, and position all contribute. The most important element on a page should have the highest visual weight — if it doesn't, the hierarchy is wrong.",
  whyItMatters: "Users don't read interfaces linearly — they're attracted to high-weight elements first. If the wrong element is visually heaviest, users focus on the wrong thing. Visual weight is the tool that makes a CTA button feel urgent, a price feel prominent, and supporting text recede appropriately.",
  mechanism: [
    "Size: larger = heavier, but diminishing returns above a threshold",
    "Contrast: high contrast (dark on light) heavier than low contrast (grey on white)",
    "Color: saturated, warm colors heavier than muted, cool colors — red/orange > blue > grey",
    "Isolation: an element surrounded by white space is heavier than one in a dense group",
    "Position: top-left (reading entry) and center carry more weight than bottom-right",
  ],
  whenToUse: [
    "Whenever setting up reading order in a layout — weight determines what users see first",
    "CTA design, pricing pages, empty states, hero sections",
    "Balancing layouts — a heavy visual element on one side needs counterweight on the other",
  ],
  whenNotToUse: [
    "Intentionally flat/neutral designs where no element should stand out (data tables, ambiguous state)",
  ],
  tradeoffs: [
    { pro: "Controls reading order and attention without explicit 'look here' instructions", con: "Multiple high-weight elements compete and cancel each other — must be used sparingly" },
    { pro: "Works across text, images, and interactive elements uniformly", con: "Cultural weight differences — some colors carry different meaning/weight in different cultures" },
  ],
  failureModes: [
    "Too many heavy elements: when everything is emphasized, nothing is — visual cacophony",
    "CTA same weight as surrounding content: primary action doesn't stand out",
    "Large but low-contrast image overpowers text hierarchy: occupies space but low contrast",
    "Isolated small element ignored: tiny icon with lots of space is noticeable but small text next to heavy image is invisible",
  ],
  alternatives: [
    { entryId: "type-hierarchy", condition: "Typographic hierarchy is the application of visual weight to text" },
    { entryId: "white-space", condition: "Isolation through white space is a primary visual weight tool" },
  ],
  a11ySpecs: [
    "Visual weight must not rely on color alone to communicate importance (WCAG 1.4.1)",
    "Contrast ratio for important text: minimum 4.5:1 against background",
    "High-weight visual elements should also be appropriately represented in DOM order for screen readers",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Weight order of buttons: filled (high) > outlined (medium) > ghost (low) — always use consistent hierarchy",
    "Icon weight: filled icons heavier than line icons — match to context importance",
    "Saturated primary color button on muted background: automatic maximum contrast",
    "Grid balance: heavy elements in one quadrant need counterweight in another or centered anchor",
  ],
  checklist: [
    "Most important element (CTA, key metric, headline) has highest visual weight on the page",
    "No more than 2–3 high-weight elements compete for attention in one view",
    "Buttons follow filled > outlined > ghost weight hierarchy",
    "Supporting text is visually lighter than primary content",
  ],
  relatedEntryIds: ['type-hierarchy', 'white-space', 'gestalt-proximity', 'emphasis-techniques'],
  tags: ["visual weight", "visual hierarchy", "attention", "CTA design", "contrast", "emphasis", "design balance"],
  intentTags: ["increase-emphasis", "improve-aesthetics", "reduce-cognitive-load"],
  content: `
# Visual Weight

Visual weight is the sense that some elements are "heavier" than others — that they demand more attention.

## What Creates Weight

| Factor | Heavy | Light |
|---|---|---|
| Size | Large | Small |
| Contrast | Dark on light / light on dark | Similar tones |
| Color | Saturated, warm | Muted, cool, grey |
| Space | Isolated, surrounded by space | Embedded in dense content |
| Position | Top-left, center | Bottom-right, corners |
| Typography | Black/900 weight, large | Regular/400, small |
| Texture | Complex, detailed | Flat, minimal |

## The Hierarchy Budget

Think of visual weight as a budget. The most important element spends 80% of the budget. Everything else divides the remaining 20%.

When every element spends equally, the budget is over and nothing stands out.

**One primary action.** One dominant headline. One key metric. The rest should be supporting cast.

## CTA Weight Example

\`\`\`
[ Cancel ]   [ Save Changes ]
\`\`\`

The secondary action is ghost (low weight). The primary is filled with primary color (high weight). Users' eyes go to "Save Changes" first.

Swap them and users hesitate at every form. Same words. Different weight. Different behavior.

## Weight vs. Size

Red can be heavier than something 4× larger in grey. Size is only one factor. A single red dot in a sea of grey grabs more attention than a large grey box.

Use this when you can't increase size but need to add emphasis — increase contrast or saturation instead.
`,
};
