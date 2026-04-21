import { ReferenceEntry } from '../../types';

export const badges_tags_chips: ReferenceEntry = {
  id: "badges-tags-chips",
  title: "Badges, Tags & Chips",
  domain: "components",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "marketplace", "consumer"],
  confidenceScore: 88,
  slug: "badges-tags-chips",
  complexity: "beginner",
  description: "Small inline labels for status, categorization, and filter selection — when to use badges vs tags vs chips and how to design them clearly.",
  quickTake: "Badges show status/count (non-interactive). Tags show categorization (sometimes removable). Chips are interactive filters or selections. Mixing these patterns creates confusion. Keep labels under 20 characters. Rely on color + shape together — never color alone.",
  whyItMatters: "These three patterns are consistently confused with each other, leading to inconsistent interactive affordances. A badge that looks like a button but doesn't respond to clicks breaks user trust. A chip that looks like a badge but is actually clickable is equally confusing.",
  mechanism: [
    "Badges: status indicators, counts, labels — informational only, not interactive",
    "Tags: categorization labels — can be removable (with ×), rarely primary actions",
    "Chips: filter/selection toggles — clearly interactive, have hover/active/selected states",
    "Use consistent size (usually text-xs/sm), controlled padding, and rounded corners to signal 'label not button'",
  ],
  whenToUse: [
    "Badges: order status, notification counts, feature flags (Beta, New, Deprecated)",
    "Tags: content categorization in cards, search results, user-created labels",
    "Chips: multi-select filter UI, inline attribute selection (size, color), active filter display",
  ],
  whenNotToUse: [
    "Primary actions — use buttons instead",
    "Long text content (>3 words usually) — labels become unreadable as badges",
    "More than 5–6 tags/chips in a group — overwhelming and loses meaning",
  ],
  tradeoffs: [
    { pro: "Compact way to communicate status or categorization without verbose text", con: "Color-coded badges require text labels too for colorblind users" },
    { pro: "Removable chips provide visible state for selected filters", con: "Many similar-looking labels in one area create visual noise" },
  ],
  failureModes: [
    "Status conveyed by color only: red badge looks identical to green badge in grayscale",
    "Chips with no active state: user can't tell which filters are selected",
    "Inconsistent affordance: some badges clickable, others not — users click all of them",
    "Too many status colors: 6 different badge colors with subtle differences loses meaning",
  ],
  alternatives: [
    { entryId: "toast-notifications", condition: "For transient status messages rather than persistent state labels" },
    { entryId: "dropdown-select", condition: "For selecting from a list of options rather than showing active selections" },
  ],
  a11ySpecs: [
    "Never rely on color alone to convey meaning (WCAG 1.4.1) — include a text label or icon",
    "Removable tags need an accessible label on the remove button: aria-label='Remove [tag name]'",
    "Interactive chips must be focusable and activatable by keyboard (role='checkbox' or 'button')",
    "Notification count badges: use aria-label on the icon button ('3 notifications')",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Standard badge sizing: px-2 py-0.5 text-xs rounded-full (Tailwind)",
    "Status badge palette: use semantic colors — emerald for success, amber for warning, red for error, slate for neutral",
    "Chip selected state: filled background vs. outlined; add checkmark icon for clarity",
    "Animate chip entry/removal with scale transition for polish",
  ],
  checklist: [
    "Status badges include text label, not just color",
    "Interactive chips have visible hover and selected states",
    "Non-interactive badges have no cursor: pointer or hover state",
    "Removable tags have accessible remove button labels",
    "No more than 3–4 badge color variants in one view",
  ],
  relatedEntryIds: ['toast-notifications', 'dropdown-select', 'form-validation-ux', 'data-table-patterns'],
  tags: ["badges", "tags", "chips", "status indicators", "filter chips", "labels", "component design"],
  intentTags: ["improve-feedback", "reduce-cognitive-load"],
  content: `
# Badges, Tags & Chips

Three different patterns, often confused. Each has a distinct purpose and interaction model.

## Badge
**Status or count. Non-interactive.**

\`\`\`tsx
<span className="px-2 py-0.5 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full">
  Active
</span>
\`\`\`

Used for: order status, feature flags (Beta), notification counts, plan tier labels.

Never clickable. No hover state. Pure information.

## Tag
**Categorization. Sometimes removable.**

\`\`\`tsx
<span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 text-slate-700 rounded-md">
  Design System
  <button aria-label="Remove Design System tag" className="hover:text-slate-900">×</button>
</span>
\`\`\`

Used for: article categories, user-applied labels, search result metadata.

## Chip
**Filter or selection toggle. Always interactive.**

\`\`\`tsx
<button
  role="checkbox"
  aria-checked={selected}
  className={\`px-3 py-1 text-sm rounded-full border \${
    selected ? 'bg-primary-100 border-primary-300 text-primary-700' : 'bg-white border-slate-200 text-slate-600'
  }\`}
>
  {selected && <Check size={12} className="mr-1" />}
  {label}
</button>
\`\`\`

Used for: filter bars, multi-select attributes (size, color), active filter indicators.

## The Consistency Rule

Pick one visual style for each type and never deviate. If badges can't be clicked and chips can, they must look different. Inconsistency here is what causes users to click non-clickable badges and ignore clickable chips.
`,
};
