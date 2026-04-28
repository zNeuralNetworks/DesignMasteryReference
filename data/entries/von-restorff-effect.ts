import { ReferenceEntry } from '../../types';

export const von_restorff_effect: ReferenceEntry = {
  id: "von-restorff-effect",
  title: "Von Restorff Effect",
  domain: "psychology",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "marketing", "dashboard", "consumer"],
  confidenceScore: 93,
  slug: "von-restorff-effect",
  complexity: "beginner",
  description: "Items that are visually distinct from their surroundings are more likely to be noticed and remembered — the 'isolation effect'.",
  quickTake: "One item that looks different from a group of similar items will be seen and remembered. This is why the 'recommended' pricing plan stands out, why the primary CTA differs from secondary actions, and why a single red error message reads against a sea of grey text. Difference = attention.",
  whyItMatters: "Every interface has a hierarchy of what users should notice. The Von Restorff effect is the mechanism that makes visual hierarchy work — the visually distinct element captures attention because the human visual system is wired to notice pattern breaks. Use it to direct users to what matters most.",
  mechanism: [
    "Make the target element visually distinct in exactly one primary dimension: color, size, shape, or weight",
    "Ensure the surrounding elements are visually similar to each other to maximize contrast",
    "Avoid overusing isolation — multiple 'isolated' elements cancel each other out",
    "The isolation effect works in text, UI, and data — highlighted row in a table, featured card in a grid",
  ],
  whenToUse: [
    "Pricing: highlighting the recommended/popular plan",
    "Navigation: marking the current section or primary CTA",
    "Forms: calling out required fields or errors among neutral fields",
    "Content: drawing attention to the key takeaway in a list or data set",
  ],
  whenNotToUse: [
    "When all items are equally important — isolation creates false hierarchy",
    "More than 1–2 isolated elements per view — multiple isolated items compete, defeating the purpose",
  ],
  tradeoffs: [
    { pro: "Guides attention with zero user effort — pre-attentive processing, no thought required", con: "If users expect isolation (e.g., 'recommended' badges on every product), they learn to ignore it" },
    { pro: "Works across all modalities: color, size, motion, position", con: "Isolation creates hierarchy whether you intend it or not — accidental isolation is misleading" },
  ],
  failureModes: [
    "Too many isolated elements: three 'highlighted' plans in a pricing table — all lose isolation effect",
    "Isolation for decoration: bright colored badges that don't indicate importance train users to ignore color",
    "Wrong attribute isolated: making the cheapest plan the visual standout instead of the recommended one",
  ],
  alternatives: [
    { entryId: "visual-weight", condition: "Visual weight is the broader principle; Von Restorff is specifically about distinctness within a group" },
    { entryId: "emphasis-techniques", condition: "The techniques used to create isolation" },
  ],
  a11ySpecs: [
    "Isolation must not rely on color alone — pair visual distinctness with text label, icon, or shape change",
    "Screen readers should encounter distinction semantically: aria-label, role, or text content that matches visual emphasis",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Pricing table: scale the recommended plan up 1.05× and add a 'Most Popular' badge + filled card background",
    "Button hierarchy: filled primary button is isolated against ghost/outlined secondaries",
    "Data tables: highlighted row with accent background for 'your current plan' or 'selected item'",
    "Navigation: active state with filled pill or underline vs. plain text links",
  ],
  checklist: [
    "At most 1–2 visually isolated elements per view",
    "Isolated elements are genuinely the most important, not decorative",
    "Surrounding elements are visually similar to each other",
    "Isolation uses more than color alone",
  ],
  relatedEntryIds: ['visual-weight', 'emphasis-techniques', 'serial-position-effect', 'gestalt-proximity'],
  tags: ["Von Restorff", "isolation effect", "visual distinction", "pricing design", "recommended plan", "attention"],
  intentTags: ["increase-emphasis", "improve-aesthetics"],
  contentStatus: 'hardened',
  content: `
# Von Restorff Effect

The item that looks different from everything around it will be noticed and remembered.

## The Principle

When everything looks the same, the different one stands out. This is a pre-attentive visual process — it happens before conscious thought. The human visual system is tuned to notice pattern breaks because, in evolutionary terms, something that breaks the pattern might be important.

## Classic Applications

### Pricing Tables
\`\`\`
[Basic]          [★ Pro]          [Enterprise]
$9/mo            $29/mo           $99/mo
- Feature A      - Feature A      - Feature A
- Feature B      - Feature B      - Feature B
                 - Feature C      - Feature C
                 Most Popular     - Feature D
\`\`\`

The Pro plan is isolated by: card elevation, top badge, different background color, slightly larger scale. All surrounding plans are visually similar. Pro is not.

### Navigation
Active state stands out from all inactive links. One different, many similar.

### Error States
One red field in a grey form. The form is the context — the error breaks it.

## The Isolation Budget

You have room for **one or two isolated elements per view** before the effect degrades.

Three highlighted pricing plans → none stands out.
Four "urgent" notifications → all feel routine.
Bold text on 30% of content → bold means nothing.

Pick what matters most. Isolate only that.

## Accidental Isolation

Isolation happens whether you intend it or not. If you accidentally make the "free" tier most visually prominent in a pricing table, users will focus on it — even if you wanted them to choose Pro.

Audit your interfaces for unintentional isolation.
`,
};
