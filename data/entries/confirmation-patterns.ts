import { ReferenceEntry } from '../../types';

export const confirmation_patterns: ReferenceEntry = {
  id: "confirmation-patterns",
  title: "Confirmation Patterns",
  domain: "interaction",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "mobile", "consumer", "dashboard"],
  confidenceScore: 92,
  slug: "confirmation-patterns",
  complexity: "beginner",
  description: "Deciding when to ask users to confirm an action and how to ask — the difference between a good safety check and a friction-generating speed bump.",
  quickTake: "Confirm destructive, irreversible actions. Never confirm routine, reversible ones. A confirmation dialog on every delete is annoying; no confirmation before deleting 5 years of data is dangerous. The right threshold: would a reasonable user be upset if they did this by accident? If yes, confirm. If they could undo it, skip the dialog.",
  whyItMatters: "Unnecessary confirmations train users to click 'OK' without reading — the 'automation bias' of dialogs. After clicking through 50 benign confirmations, users dismiss the one that matters. Conversely, skipping confirmation on destructive actions causes irreversible data loss. The calibration of when to ask is a safety design problem.",
  mechanism: [
    "Confirm when: irreversible, high-cost-to-undo, affects many items, deletes/transfers data",
    "Skip confirmation when: reversible (undo available), low stakes, frequent action",
    "Destructive confirmation: require typing the item name or 'DELETE' for maximum-severity operations",
    "Provide context in the dialog: what will be deleted, what can't be recovered",
  ],
  whenToUse: [
    "Deleting data that can't be recovered (account deletion, permanent file deletion)",
    "Actions affecting many items (bulk delete, mass archive)",
    "Actions with external consequences (sending an email, publishing publicly, transferring ownership)",
    "Billing-related actions (canceling subscription, upgrading plan with cost implications)",
  ],
  whenNotToUse: [
    "Routine low-stakes deletions with undo: archiving an email, deleting a draft",
    "Actions that can be reversed: deactivating a user (can reactivate), unpublishing (can republish)",
    "Every single action — over-confirming trains users to dismiss without reading",
  ],
  tradeoffs: [
    { pro: "Prevents catastrophic accidental data loss", con: "Confirmation fatigue causes users to dismiss important dialogs without reading" },
    { pro: "Text-entry confirmation ensures deliberate action on high-stakes operations", con: "Text-entry confirmation adds friction to valid power-user workflows" },
  ],
  failureModes: [
    "Confirm everything: users develop click-through habit, critical confirmations get dismissed",
    "Vague confirmation: 'Are you sure?' without saying what will happen — users click OK hoping for the best",
    "Default 'OK' on destructive action: delete confirmation where Enter submits the OK — accidental keyboard confirmation",
    "No recovery path mentioned: 'This action cannot be undone' without suggesting backup/export",
  ],
  alternatives: [
    { entryId: "undo-patterns", condition: "Undo is a better pattern than confirmation for reversible actions" },
    { entryId: "modal-dialog", condition: "Confirmation dialogs are a specific type of modal" },
  ],
  a11ySpecs: [
    "Confirmation dialogs: focus must move to dialog on open; return to trigger on close",
    "Destructive button should NOT be the default focused element — user must actively select it",
    "Dialog role='alertdialog' for destructive confirmations (higher urgency than role='dialog')",
    "Escape closes dialog and cancels the action",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Destructive default focus: set autoFocus on Cancel button, not Delete button",
    "Text-entry confirmation: compare input.toLowerCase() === itemName.toLowerCase()",
    "Async confirmation: show loading state in the confirm button while the operation runs",
    "Toast-based soft delete: delete immediately + show 'Undo' toast for 5s — better than dialog for reversible deletes",
  ],
  checklist: [
    "Irreversible actions have confirmation dialogs",
    "Reversible actions use undo instead of confirmation",
    "Confirmation copy explains what will happen and what can't be recovered",
    "Destructive button is not the default focused element",
    "Dialog closes on Escape with action cancelled",
  ],
  relatedEntryIds: ['undo-patterns', 'modal-dialog', 'error-states', 'toast-notifications'],
  tags: ["confirmation dialog", "delete confirmation", "destructive actions", "confirm modal", "undo", "irreversible"],
  intentTags: ["improve-feedback", "reduce-cognitive-load"],
  contentStatus: 'flagship',
  content: `
# Confirmation Patterns

The goal is preventing genuine accidents — not adding friction to every action.

## The Confirmation Decision

Ask: *would a reasonable user be upset if they did this by accident, and can they undo it?*

| Action | Reversible? | Confirm? |
|--------|-------------|----------|
| Delete account | No | Yes — require typing "DELETE" |
| Delete project with 2 years of data | No | Yes — require typing project name |
| Archive email | Yes (unarchive) | No — use undo toast |
| Delete a draft | Low stakes | No — use undo toast |
| Send email to 10,000 users | No | Yes — summary dialog |
| Publish draft post | Reversible | Optional — depends on stakes |

## Anatomy of a Good Confirmation Dialog

\`\`\`tsx
<AlertDialog>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete "Q4 Revenue Report"?</AlertDialogTitle>
      <AlertDialogDescription>
        This will permanently delete the report and all 14 versions.
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>

    {/* Type-to-confirm for maximum severity */}
    <label>Type the report name to confirm:</label>
    <input
      value={confirmInput}
      onChange={e => setConfirmInput(e.target.value)}
      placeholder="Q4 Revenue Report"
    />

    <AlertDialogFooter>
      <AlertDialogCancel autoFocus>Cancel</AlertDialogCancel>  {/* autoFocus on Cancel */}
      <AlertDialogAction
        disabled={confirmInput !== 'Q4 Revenue Report'}
        className="bg-red-600 hover:bg-red-700"
      >
        Delete permanently
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
\`\`\`

## Undo Over Confirmation

For reversible actions, skip the dialog entirely and offer undo:

\`\`\`typescript
function deleteItem(id: string) {
  // Remove immediately
  setItems(prev => prev.filter(item => item.id !== id));

  // Offer undo for 5 seconds
  toast('Item deleted', {
    action: {
      label: 'Undo',
      onClick: () => restoreItem(id),
    },
    duration: 5000,
  });
}
\`\`\`

Faster for users who meant to delete. Recoverable for users who didn't.
`,
};
