import { ReferenceEntry } from '../../types';

export const modal_dialog: ReferenceEntry = {
  id: "modal-dialog",
  title: "Modal & Dialog Patterns",
  domain: "components",
  format: "pattern",
  verdict: "conditional",
  useContext: ["saas", "dashboard", "productivity", "systems", "marketplace"],
  confidenceScore: 90,
  slug: "modal-dialog",
  complexity: "intermediate",
  description: "Modals interrupt the current task to demand attention — use them only when the action requires it and always manage focus precisely.",
  quickTake: "Modals are the right tool for confirmations, quick forms, and focused workflows that don't warrant a new page. Overuse leads to modal fatigue; underuse leads to context-switching. The key question: does the user need to compare the modal content with something behind it?",
  whyItMatters: "A modal that appears unexpectedly, traps users without a clear exit, or contains too much content damages trust and increases error rates. Conversely, using a drawer or new page for a two-field form adds unnecessary navigation overhead. Choosing the right container for a task is as important as what's inside it.",
  mechanism: [
    "Evaluate the task type: confirmation or short form → modal; long form or multi-step → drawer or new page; contextual detail → popover or inline expansion",
    "On open, move focus to the first interactive element or the dialog container itself (aria-modal='true', role='dialog')",
    "Trap focus inside: Tab and Shift+Tab cycle through focusable elements within the modal only",
    "Provide three close paths: Escape key, backdrop click (except for critical/destructive confirms), and an explicit X button",
    "On close, return focus to the element that triggered the modal",
    "For destructive confirm dialogs, disable backdrop-click-to-close — require explicit button press"
  ],
  whenToUse: [
    "Confirming irreversible actions (delete, revoke, disconnect) where the user must acknowledge consequences",
    "Short task-specific forms (2-5 fields) that don't warrant navigating away",
    "Preview or quick-edit workflows where the user needs the modal to feel temporary",
    "System alerts that require acknowledgment before the user can continue"
  ],
  whenNotToUse: [
    "Forms with more than 5-7 fields — use a dedicated page or side sheet",
    "Content the user needs to reference while interacting — use a drawer or split layout",
    "Onboarding flows — use a dedicated page or a step-through component",
    "Modals triggered automatically on page load — this is almost always a deceptive or disruptive pattern"
  ],
  tradeoffs: [
    { pro: "Focuses user attention on a single task without full navigation overhead", con: "Interrupts flow; multiple modals stacked is a UX failure mode" },
    { pro: "Ephemeral feel makes temporary tasks feel lightweight", con: "On mobile, full-screen modals are often more appropriate than desktop-style overlays" },
    { pro: "Well-managed focus makes modals fully keyboard and screen-reader accessible", con: "Focus management code is complex and easy to break — requires thorough testing" }
  ],
  failureModes: [
    "Focus not moved into modal on open — screen reader users don't know a dialog appeared",
    "Focus escapes the modal — keyboard users can interact with content behind the overlay",
    "Escape key not wired to close — keyboard-only users are trapped",
    "Focus not returned to trigger element on close — keyboard users lose their location",
    "Modal content taller than viewport with no scroll container — content is inaccessible",
    "Stacking modals (modal opens another modal) — always close the first before opening a second",
    "Backdrop click closes a destructive confirm — user accidentally dismisses without confirming"
  ],
  alternatives: [
    { entryId: "progressive-disclosure", condition: "Use inline expansion or an accordion when the detail is secondary and the user may want to compare it with surrounding content" },
    { entryId: "focus-management", condition: "Use comprehensive focus management patterns for any modal or overlay to ensure keyboard and screen reader accessibility" },
    { entryId: "hicks-law", condition: "Simplify the number of choices presented inside a modal — decision overload inside a confined space is amplified" }
  ],
  a11ySpecs: [
    "Dialog container must have role='dialog' and aria-modal='true'",
    "Dialog must have an accessible name via aria-labelledby pointing to the visible title, or aria-label if no visible title",
    "Focus must be trapped inside the modal while it is open",
    "Escape key must close the modal in all cases except destructive confirms",
    "Focus must return to the trigger element when the modal closes",
    "Scroll within modal must be keyboard-accessible — avoid overflow:hidden on the scroll container",
    "Backdrop overlay must not receive focus or be announced by screen readers (aria-hidden='true' or inert on background)"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use the native HTML <dialog> element for built-in focus trapping and Escape handling in modern browsers — polyfill for older targets",
    "Animate modals with scale + opacity (0.95 → 1.0, 0 → 1) for a natural feel; keep duration under 200ms",
    "For scroll inside a modal, set max-height with overflow-y:auto on the content area, not the entire dialog",
    "Maintain a modal stack manager if your app ever needs layered modals (e.g., a confirm inside a form modal) — always limit to one layer",
    "On mobile, consider translating modal behavior to a bottom sheet for thumb reach ergonomics"
  ],
  checklist: [
    "Focus moves into the dialog on open",
    "Focus is trapped — Tab/Shift+Tab cycle stays within modal",
    "Escape key closes the modal",
    "Focus returns to trigger element on close",
    "Dialog has role='dialog', aria-modal='true', and an accessible name",
    "Backdrop click is disabled for destructive confirms",
    "Modal content scrolls correctly if taller than viewport",
    "Mobile view uses appropriate sizing (bottom sheet or full-screen)"
  ],
  relatedEntryIds: ["focus-management", "progressive-disclosure", "hicks-law"],
  tags: ["modal UX", "dialog patterns", "modal accessibility", "focus trap", "overlay"],
  intentTags: ["reduce-cognitive-load", "fix-accessibility"],
  content: `# Modal & Dialog Patterns

## When to Use a Modal vs. Alternatives

The modal isn't the only overlay pattern — choosing the wrong container is the most common dialog mistake.

| Container | Best for | Avoid when |
|-----------|----------|------------|
| **Modal** | Confirms, short forms, alerts | Long forms, reference content |
| **Drawer/Sheet** | Extended forms, settings panels | Quick confirms |
| **Popover** | Contextual detail, inline editing | Actions requiring full attention |
| **New page** | Multi-step flows, resource creation | Quick tasks that would lose context |
| **Inline expansion** | Supplementary detail beside content | Tasks requiring focused attention |

The deciding question: **does the user need to see behind the overlay while working?** If yes, a modal is the wrong tool.

## Focus Management

Focus management is what separates accessible modals from traps.

**On open:**
1. Move focus to the first focusable element in the modal (typically the title or first input), or the dialog container if no interactive elements exist immediately
2. Set \`aria-modal="true"\` on the dialog element so screen readers understand the context boundary

**While open:**
- Tab and Shift+Tab must cycle only through elements inside the modal
- The browser's default Tab behavior leaks focus into the background — you must intercept and redirect it

**On close:**
- Always return focus to the element that triggered the modal
- If the trigger was removed from the DOM, fall back to a logical parent element

## Confirm Dialogs for Destructive Actions

Confirm dialogs are a special modal subtype with stricter rules:

- **Label the action, not the consequence.** "Delete Project" is better than "Are you sure?"
- **Mirror the CTA in the confirm button.** If the action is "Delete", the button says "Delete", not "Confirm" or "OK"
- **Use red/error styling** on the destructive button to signal severity
- **Disable backdrop click** — accidental dismissal of a delete confirm is catastrophic
- **Never use a confirm dialog for reversible actions.** Undo patterns (see: undo-patterns) are better UX for soft deletes

## Sizing and Scroll Behavior

**Width tiers:**
- \`sm\` (400px): Single-field confirms, simple alerts
- \`md\` (560px): Standard forms, quick-edit flows
- \`lg\` (720px): Data-heavy forms, preview content
- \`xl\` (900px+): Use sparingly; consider a drawer instead

**Scroll rules:**
- The modal header and footer (with action buttons) should be sticky
- The content area between them scrolls
- Never let the action buttons scroll out of view — users can't complete the task

## Mobile Considerations

Desktop modal patterns break on mobile. Below 768px:
- Replace centered overlay with a **bottom sheet** (slides up from bottom)
- Full-screen modals work for focused tasks but feel heavy for simple confirms
- The drag handle affords swipe-to-close on bottom sheets — wire it up
- Ensure the keyboard doesn't cover action buttons (use \`env(safe-area-inset-bottom)\`)
`,
};
