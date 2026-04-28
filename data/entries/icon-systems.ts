import { ReferenceEntry } from '../../types';

export const icon_systems: ReferenceEntry = {
  id: "icon-systems",
  title: "Icon Systems",
  domain: "tokens",
  format: "system",
  verdict: "recommended",
  useContext: ["saas", "mobile", "dashboard", "consumer"],
  confidenceScore: 88,
  slug: "icon-systems",
  complexity: "intermediate",
  description: "Choosing, implementing, and scaling an icon library — size scales, stroke consistency, SVG optimization, and when icons help vs. hurt comprehension.",
  quickTake: "Icons work as memory aids for recognized functions, not as standalone communication. An icon without a label is often ambiguous — the hamburger menu, heart icon, and magnifying glass are recognized; most domain-specific icons are not. Use icon + label for critical navigation; icon-only only when function is universally known.",
  whyItMatters: "Icons are overused as visual shorthand where labels would communicate better. Mystery meat navigation is an anti-pattern — icon-only nav that leaves users guessing. Conversely, good icon use reduces visual scanning burden in familiar contexts. The decision of when to use icons vs. labels vs. both is consistently wrong in most products.",
  mechanism: [
    "Size scale: 12px (inline text), 16px (buttons/labels), 20px (UI actions), 24px (primary actions), 32px+ (feature icons)",
    "Stroke width consistency: all icons in a set must use the same stroke weight relative to their size",
    "Icon-only: only for universally recognized functions (close ×, back ←, search 🔍)",
    "Icon + label: for navigation, new features, and anything where function is ambiguous",
  ],
  whenToUse: [
    "Navigation where labels AND icons together reduce scan time",
    "Status indicators (✓ ✗ ⚠) where icons supplement text",
    "Button affordance reinforcement (trash icon on delete button)",
  ],
  whenNotToUse: [
    "Icon-only navigation for domain-specific actions (what does a 'gauge' icon mean in your product?)",
    "Decorative icons that add visual complexity without aiding comprehension",
  ],
  tradeoffs: [
    { pro: "Icons reduce visual scan burden for recognized functions", con: "Unrecognized icons force users to hover/tap to discover function — adds friction" },
    { pro: "Icon sets provide visual consistency across the UI", con: "Mixing icon sets (some Heroicons, some Lucide) creates inconsistent stroke weights and styles" },
  ],
  failureModes: [
    "Mystery meat navigation: 5 icon-only nav items users must hover to discover",
    "Inconsistent icon sizes: 16px, 18px, and 20px icons mixed in the same component",
    "Missing labels on new features: 'this icon is intuitive' to the designer, not to the user",
    "PNG icons: pixelated at non-standard sizes; use SVG always",
  ],
  alternatives: [
    { entryId: "mystery-meat-navigation", condition: "Icon-only navigation without labels — the specific anti-pattern to avoid" },
    { entryId: "design-tokens", condition: "Icon sizes and colors should be design tokens for system consistency" },
  ],
  a11ySpecs: [
    "Icon-only buttons: aria-label on the button, not the icon — <button aria-label='Delete'><TrashIcon /></button>",
    "Decorative icons: aria-hidden='true' so screen readers skip them",
    "SVG icons: role='img' with <title> if standalone; aria-hidden if decorative",
    "Color icons: ensure minimum 3:1 contrast against background",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Lucide React or Heroicons: tree-shakeable, consistent stroke, React components — recommended",
    "Icon sprite vs. inline SVG: inline SVG for animated/interactive icons; sprite for large icon counts",
    "SVGO to optimize SVG files — removes metadata, reduces file size by 20–50%",
    "currentColor: fill and stroke should use currentColor so icon color matches parent text color",
  ],
  checklist: [
    "All icons from a single consistent set (same stroke weight and style)",
    "Icon-only buttons have aria-label on the button element",
    "Decorative icons have aria-hidden='true'",
    "Size tokens defined for icon scale (16, 20, 24px)",
    "Navigation labels paired with icons",
  ],
  relatedEntryIds: ['mystery-meat-navigation', 'design-tokens', 'component-props', 'badges-tags-chips'],
  tags: ["icon system", "icons", "SVG icons", "icon library", "icon sizing", "Lucide", "Heroicons"],
  intentTags: ["improve-readability", "improve-aesthetics"],
  contentStatus: 'hardened',
  content: `
# Icon Systems

Icons accelerate recognition for known functions. They don't replace labels for unknown ones.

## The Recognition Test

Before using an icon, ask: *would a new user, seeing this icon for the first time, know what it does?*

| Icon | Recognition | Label needed? |
|------|-------------|---------------|
| × (close) | Universal | Optional |
| ← (back) | Universal | Optional |
| 🔍 (search) | Universal | Optional |
| 📊 (analytics) | Common | Recommended |
| Custom domain icon | Low | Required |

## Size Scale

\`\`\`
12px  — inline with text (small badges, inline labels)
16px  — buttons, form labels, table row actions
20px  — primary UI actions, sidebar nav items
24px  — hero actions, prominent nav items
32px  — feature icons, empty state illustrations
\`\`\`

Never mix sizes arbitrarily. All icons in a component should use the same size.

## Implementation (Lucide React)

\`\`\`tsx
import { Trash2, Edit, Check } from 'lucide-react';

// Icon-only button — aria-label on button
<button aria-label="Delete item" onClick={handleDelete}>
  <Trash2 size={16} aria-hidden="true" />
</button>

// Icon + label — icon is decorative
<button>
  <Edit size={16} aria-hidden="true" />
  Edit profile
</button>

// Status icon (semantic) — describe it
<CheckCircle size={20} aria-label="Completed" className="text-emerald-500" />
\`\`\`

## currentColor

Set icon stroke/fill to \`currentColor\` so they inherit text color automatically:

\`\`\`css
.icon { stroke: currentColor; }
\`\`\`

Then control icon color via text color utilities: \`text-slate-400\`, \`text-primary-500\`, etc.
`,
};
