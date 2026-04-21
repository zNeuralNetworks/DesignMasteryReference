import { ReferenceEntry } from '../../types';

export const tooltip_popover: ReferenceEntry = {
  id: "tooltip-popover",
  title: "Tooltips & Popovers",
  domain: "components",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "consumer"],
  confidenceScore: 90,
  slug: "tooltip-popover",
  complexity: "beginner",
  description: "Tooltips reveal on hover for brief labels; popovers are persistent interactive panels triggered on click. Using the wrong one causes usability failures.",
  quickTake: "Tooltips are for supplementary labels on hover — not required content. Popovers are for interactive content that requires user attention. If content is critical, don't hide it in a tooltip. If users need to interact with the content, use a popover. On touch devices, tooltips don't exist.",
  whyItMatters: "Tooltips are one of the most misused patterns. Critical instructions hidden in tooltips are invisible to touch users and keyboard-only users. A tooltip containing form instructions that users need to fill a field is an accessibility failure. The distinction between tooltip and popover determines whether users can access and interact with your content.",
  mechanism: [
    "Tooltip: hover-triggered, non-interactive, brief text only — role='tooltip' with aria-describedby",
    "Popover: click-triggered, persistent, can contain interactive content (buttons, links, forms)",
    "Tooltip delay: 200–400ms before showing, immediate on touch (but touch tooltips don't work)",
    "Positioning: use floating-ui to avoid viewport clipping — flip placement automatically",
  ],
  whenToUse: [
    "Tooltip: icon button labels, keyboard shortcuts, truncated text expansion, data point context",
    "Popover: action confirmations, mini-forms, rich content previews, filter panels",
  ],
  whenNotToUse: [
    "Tooltip: required instructions, critical warnings, content that must be actionable",
    "Tooltip: mobile-only interfaces (no hover = no tooltip)",
    "Popover: simple text that doesn't require persistence or interaction",
  ],
  tradeoffs: [
    { pro: "Keeps UI clean by hiding secondary information until needed", con: "Hidden information is invisible — users who need it must discover the hover affordance" },
    { pro: "Tooltips are nearly free to implement correctly", con: "Popovers require focus management and close behavior to be accessible" },
  ],
  failureModes: [
    "Required content in a tooltip: touch users never see it, keyboard users may miss it",
    "No delay on tooltip: tooltips flashing as cursor passes over icons is distracting",
    "Popover doesn't close on Escape: standard expectation violated",
    "Tooltip on disabled elements: CSS pointer-events: none blocks hover on disabled buttons",
  ],
  alternatives: [
    { entryId: "modal-dialog", condition: "When interaction requires more space or full user attention" },
    { entryId: "progressive-disclosure", condition: "When content should be revealed inline rather than in a floating layer" },
  ],
  a11ySpecs: [
    "Tooltips: role='tooltip' on the content; aria-describedby on the trigger pointing to tooltip id",
    "Tooltips must be keyboard accessible — show on :focus as well as :hover",
    "Popovers: manage focus — move to first interactive element on open; return to trigger on close",
    "Popovers: Escape closes; click-outside closes; aria-expanded on trigger",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Radix UI Tooltip and Popover components handle ARIA and focus management correctly",
    "floating-ui for positioning — computes flip/shift/arrow placement to avoid clipping",
    "Touch tooltips: show on tap with auto-dismiss, or use a different pattern (info icon that opens popover)",
    "Tooltip delay: CSS transition-delay: 200ms or JS setTimeout on mouseenter",
  ],
  checklist: [
    "Tooltips show on both :hover and :focus",
    "No required content hidden in tooltips",
    "Popovers close on Escape and click-outside",
    "Popovers return focus to trigger on close",
    "Tested on touch device — tooltip-dependent features work without hover",
  ],
  relatedEntryIds: ['modal-dialog', 'progressive-disclosure', 'focus-management', 'dropdown-select'],
  tags: ["tooltip", "popover", "hover state", "overlay patterns", "contextual help", "floating UI"],
  intentTags: ["improve-feedback", "reduce-cognitive-load"],
  content: `
# Tooltips & Popovers

Same visual metaphor, completely different interaction models.

## Tooltip
- Triggered by: **hover** (and :focus for keyboard users)
- Content: **text only**, supplementary information
- Behavior: disappears when hover ends, not interactive
- ARIA: \`role="tooltip"\` + \`aria-describedby\`

\`\`\`tsx
<button aria-describedby="save-tooltip">
  <Save size={16} />
</button>
<div role="tooltip" id="save-tooltip">Save changes (⌘S)</div>
\`\`\`

## Popover
- Triggered by: **click** (or Enter/Space)
- Content: **anything** — text, buttons, forms, links
- Behavior: persists until dismissed, interactive
- ARIA: \`aria-expanded\` + \`aria-haspopup\` on trigger; focus moves inside

\`\`\`tsx
<button aria-expanded={open} aria-haspopup="true" onClick={() => setOpen(true)}>
  Filter options
</button>
{open && (
  <div role="dialog" aria-label="Filter options">
    <FilterForm />
    <button onClick={() => setOpen(false)}>Close</button>
  </div>
)}
\`\`\`

## The Touch Problem

On touch devices, there is no hover state. **Tooltips don't exist on mobile.**

If your feature relies on a tooltip for understanding, either:
1. Make the label visible by default
2. Use an ⓘ icon that opens a **popover** on tap
3. Put the information inline in the UI

Never hide critical instructions in a hover-only tooltip.

## Positioning

Use floating-ui (or a component library that wraps it) to handle:
- Flip: tooltip/popover appears above when near the bottom edge
- Shift: slides horizontally to stay within viewport
- Arrow: pointer follows the placed position
`,
};
