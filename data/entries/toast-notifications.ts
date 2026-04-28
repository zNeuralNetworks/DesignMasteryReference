import { ReferenceEntry } from '../../types';

export const toast_notifications: ReferenceEntry = {
  id: "toast-notifications",
  title: "Toast Notifications",
  domain: "interaction",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile"],
  confidenceScore: 94,
  slug: "toast-notifications",
  complexity: "intermediate",
  description: "Providing non-blocking feedback that informs users without interrupting their flow.",
  quickTake: "Toasts provide transient, non-interruptive feedback for low-stakes system events (e.g., 'Saved', 'Copied to clipboard').",
  whyItMatters: "Modals are too disruptive for routine actions. Toasts allow users to continue their work while receiving confirmation that their action was successful.",
  mechanism: [
    "Trigger the notification based on a background action",
    "Display a small, floating message (usually at the top-right or bottom-center)",
    "Include an icon for quick status recognition (Success, Error, Info)",
    "Automatically dismiss after a short duration (3-5 seconds)"
  ],
  whenToUse: [
    "Confirming background actions (e.g., 'Draft Saved')",
    "Low-priority system alerts (e.g., 'New version available')",
    "Copy-to-clipboard confirmations"
  ],
  whenNotToUse: [
    "Critical errors that require immediate user action (Use Modals instead)",
    "Long messages that require careful reading",
    "Actions that are irreversible and high-stakes"
  ],
  tradeoffs: [
    { pro: "Non-disruptive and allows for continuous workflow", con: "Easy to miss if the user is focused on another part of the screen" },
    { pro: "Low cognitive load for simple confirmations", con: "Can become annoying if triggered too frequently ('Toast Fatigue')" }
  ],
  failureModes: [
    "The 'Stacking' Problem: Multiple toasts covering critical UI elements",
    "Too Fast: Dismissing the toast before the user has time to read it",
    "Missing Action: Providing an 'Undo' button in a toast that disappears too quickly"
  ],
  alternatives: [
    { entryId: "constructive-feedback", condition: "Use for inline, persistent feedback within a form" },
    { entryId: "empty-states", condition: "Use when the entire page state changes due to an action" }
  ],
  a11ySpecs: [
    "Use 'aria-live' regions (polite) to announce toasts to screen readers",
    "Ensure toasts don't steal focus unless they contain a critical action",
    "Allow users to dismiss toasts via the keyboard (e.g., Escape key)"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use libraries like 'sonner' or 'react-hot-toast' for polished behavior",
    "Limit the number of visible toasts to 3 at a time",
    "Provide a 'Close' button for users who want to dismiss them manually"
  ],
  checklist: [
    "Mapped toast severity to aria-live politeness and timeout behavior",
    "Kept destructive or blocking actions out of transient toast-only UI",
    "Verified stacked toasts do not cover navigation or primary controls"
  ],
  relatedEntryIds: ['skeleton-screens', 'micro-interactions', 'optimistic-ui'],
  interactiveComponent: "Toast",
  tags: ["Feedback","UX","Components"],
  contentStatus: 'draft',
  content: `

# Toasts & Snackbars

A "Toast" is a small message that pops up (usually at the bottom or top right) to provide feedback.

### Heuristics
*   **Transient**: They should disappear automatically after 3-5 seconds.
*   **Non-blocking**: They shouldn't prevent the user from clicking other things.
    
`,
  intentTags: ["improve-feedback", "reduce-cognitive-load"],
};
