import { ReferenceEntry } from '../../types';

export const button_design: ReferenceEntry = {
  id: "button-design",
  title: "Button Design",
  domain: "components",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile", "marketing", "productivity", "systems"],
  confidenceScore: 97,
  slug: "button-design",
  complexity: "beginner",
  description: "A complete system for button hierarchy, sizing, states, and grouping that ensures clear visual priority and accessible interaction.",
  quickTake: "Every view should have at most one primary action. Secondary and ghost buttons support without competing. Getting hierarchy wrong is the most common reason CTAs get ignored.",
  whyItMatters: "Button hierarchy is how users understand what the interface wants them to do next. A page full of equally-weighted buttons forces the user to figure out priority on their own — that's cognitive load that kills conversion and causes errors. The right hierarchy makes the right action obvious without reading.",
  mechanism: [
    "Establish a four-tier hierarchy: primary (filled, brand color) → secondary (outlined) → ghost (text only) → destructive (red-tinted fill or outline)",
    "Apply the one-primary-per-view rule: one filled primary button signals the recommended action; all others must be visually subordinate",
    "Size to touch targets — minimum 44×44px for mobile, 36px height acceptable on dense desktop UIs",
    "Design all six states explicitly: default, hover, focus (visible outline), active/pressed, disabled (not just opacity-50), loading (spinner replaces label, width locked)",
    "For icon-only buttons, pair a visible tooltip and aria-label; never rely on icon recognition alone",
    "In button groups, maintain consistent height and use dividers or gap — never let borders double-up"
  ],
  whenToUse: [
    "Any interactive trigger that submits data, navigates, or initiates a process",
    "Modal footers where primary/secondary actions need clear hierarchy",
    "Toolbar and action bar contexts where icon buttons are acceptable if labeled",
    "Forms where a single primary submit action exists"
  ],
  whenNotToUse: [
    "Navigation between pages or sections — use links or nav items instead",
    "Toggling a setting state — use a toggle/switch component",
    "Selecting one of many options — use radio buttons or a segmented control",
    "Inline text actions within prose — use a text link"
  ],
  tradeoffs: [
    { pro: "Clear hierarchy speeds decision-making and reduces errors", con: "Strict one-primary rule can feel limiting in dashboards with multiple valid actions" },
    { pro: "Explicit disabled state prevents confusion about why nothing happened", con: "Disabled buttons offer no feedback about why they're disabled — pair with tooltip or helper text" },
    { pro: "Loading state prevents double-submit and shows system responsiveness", con: "Locking button width during loading requires knowing approximate label width in advance" }
  ],
  failureModes: [
    "Multiple primary buttons on the same view — users freeze when everything looks equally important",
    "Disabled button with no explanation — users don't know how to enable it",
    "Missing focus ring — keyboard users lose their place completely",
    "Ghost button on a light background with insufficient contrast — fails WCAG AA",
    "Icon button without accessible label — screen readers announce nothing meaningful",
    "Destructive action styled as primary — users accidentally delete without warning"
  ],
  alternatives: [
    { entryId: "micro-interactions", condition: "Use when you want loading/success/error state transitions to feel polished rather than abrupt" },
    { entryId: "form-validation-ux", condition: "Use when button disabled state is conditional on form validity — pair with inline validation" }
  ],
  a11ySpecs: [
    "All buttons must have a text label or aria-label — never an empty button",
    "Focus ring must be visible and meet 3:1 contrast ratio against adjacent color",
    "Disabled buttons should use aria-disabled='true' rather than the HTML disabled attribute when you still want them focusable for tooltip explanations",
    "Loading state must announce to screen readers — use aria-busy='true' and update aria-label to 'Saving…' or equivalent",
    "Color alone must not distinguish button variants — shape, border, or label differentiates them",
    "Minimum touch target 44×44px on mobile; use padding to meet this without enlarging visual size"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Lock button width during loading state to prevent layout shift — set min-width equal to the default label width",
    "Use CSS custom properties for button color tokens so theme switching works without component rewrites",
    "Prefer a polymorphic button component that can render as <button> or <a> depending on whether it triggers an action or navigates",
    "For icon buttons in toolbars, a Tooltip component wrapping the button is the cleanest approach for label exposure",
    "Avoid nesting interactive elements — never put an anchor inside a button or vice versa"
  ],
  checklist: [
    "Only one primary button exists per view or modal",
    "All six states designed: default, hover, focus, active, disabled, loading",
    "Touch targets meet 44×44px minimum on mobile breakpoints",
    "Destructive actions use a distinct visual treatment and require confirmation",
    "Every icon-only button has an aria-label and visible tooltip",
    "Focus ring is visible and meets 3:1 contrast ratio",
    "Loading state locks width and announces via aria-busy",
    "Disabled state includes a tooltip or helper text explaining why"
  ],
  relatedEntryIds: ["hicks-law", "micro-interactions", "form-validation-ux"],
  tags: ["button looks weak", "CTA ignored", "button hierarchy", "fix buttons", "primary button"],
  intentTags: ["increase-emphasis", "improve-feedback"],
  contentStatus: 'hardened',
  content: `# Button Design

## Hierarchy: The One-Primary Rule

Every interactive surface has a most-important action. The button system's job is to make that action visually obvious without the user needing to read labels first.

**Four tiers:**
- **Primary** — filled background, brand color. One per view. Signals the recommended next step.
- **Secondary** — outlined or lightly tinted. Supports the primary without competing.
- **Ghost** — text-only or minimal border. For low-stakes, reversible, or supplementary actions.
- **Destructive** — red or error-tinted. Reserved for irreversible actions (delete, revoke, disconnect).

A common mistake is treating secondary buttons as "less important primaries." They aren't — they're for actions the user might want but the UI isn't recommending.

## Sizing and Touch Targets

| Size | Height | Padding | Use |
|------|--------|---------|-----|
| sm   | 32px   | 12px h  | Dense tables, tags, inline actions |
| md   | 40px   | 16px h  | Default for most UIs |
| lg   | 48px   | 20px h  | Hero CTAs, mobile primary actions |

The **44×44px touch target rule** (Apple HIG / WCAG 2.5.5) applies to all interactive elements on touch screens. You can pad around a visually smaller button to meet this — the visual and interactive areas don't have to match.

## State Design

Every button needs six states designed, not assumed:

1. **Default** — the resting state
2. **Hover** — lightens or darkens ~10%, cursor changes to pointer
3. **Focus** — visible outline (2px solid, offset 2px), never removed via \`outline: none\` without a replacement
4. **Active/Pressed** — slight scale-down (0.97) or deeper color shift
5. **Disabled** — reduced opacity AND a cursor:not-allowed, optionally still focusable with \`aria-disabled\` for tooltip access
6. **Loading** — spinner replaces or precedes label, width locked, \`aria-busy="true"\`

## Icon Buttons

Icon-only buttons are efficient but carry two risks: ambiguity (does this pencil mean edit or annotate?) and inaccessibility.

Rules:
- Always provide \`aria-label\` with the action name ("Edit entry", not "Pencil")
- Wrap in a Tooltip that shows on hover and focus
- Use a visible label when space allows — icon + label is always clearer than icon alone
- For toolbar contexts, group related icon buttons with a divider

## Button Groups

When multiple actions relate to the same object (Save / Cancel, Accept / Decline), group them:
- Use consistent height across all buttons in the group
- Primary action always on the right in Western left-to-right contexts (or use your product convention consistently)
- Never let adjacent outlined buttons share a border — use a gap or merge into a segmented button
- Maximum three buttons in a group before considering a dropdown overflow
`,
};
