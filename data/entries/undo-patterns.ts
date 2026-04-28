import { ReferenceEntry } from '../../types';

export const undo_patterns: ReferenceEntry = {
  id: "undo-patterns",
  title: "Undo Patterns",
  domain: "interaction",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "consumer", "mobile", "dashboard"],
  confidenceScore: 93,
  slug: "undo-patterns",
  complexity: "intermediate",
  description: "Providing undo capability for destructive or reversible actions — toast-based undo, Cmd+Z, and command pattern architecture for multi-level undo.",
  quickTake: "Undo is better than confirmation for reversible actions. Instead of 'Are you sure you want to delete?' ask nothing, delete immediately, show an undo toast for 5 seconds. Users who meant to delete are uninterrupted. Users who didn't can recover. This pattern dramatically improves task flow while maintaining safety.",
  whyItMatters: "Confirmation dialogs add friction to every action to protect against the rare accident. Undo protects against the same accidents without adding friction — it's the better safety mechanism for reversible operations. Apps with good undo feel forgiving and fast; apps with dialogs-for-everything feel paranoid and slow.",
  mechanism: [
    "Toast undo: perform action immediately, show dismissable toast with Undo button for 5–10s",
    "Undo stack: client-side history of reversible commands; Cmd+Z triggers undo, Cmd+Shift+Z redo",
    "Command pattern: encapsulate each action as an object with execute() and undo() methods",
    "Soft delete: mark records as deleted but retain in database for X days before permanent deletion",
  ],
  whenToUse: [
    "Deleting items that can be restored (emails, tasks, documents)",
    "Moving items (drag-drop, folder reorganization)",
    "Content edits in rich text editors",
    "Bulk actions (archive all, mark all as read)",
  ],
  whenNotToUse: [
    "Truly irreversible operations: sending emails, charging payments, deleting production data permanently",
    "Operations with external side effects that can't be undone: posting to social media, triggering webhooks",
  ],
  tradeoffs: [
    { pro: "Removes friction from routine operations while maintaining safety net", con: "Requires storing undo state — memory overhead for complex objects" },
    { pro: "Users feel more confident to act — less fear of mistakes", con: "Toast undo requires server-side soft delete — adds database complexity" },
  ],
  failureModes: [
    "Undo toast dismissed before user reads it: 5s minimum, pause on hover, 10s for bulk operations",
    "Undo doesn't work across sessions: Cmd+Z scope typically limited to current session",
    "Partial undo: undoing one step of a multi-step operation leaves data in inconsistent state",
    "No indication undo is available: users don't know they can undo if the option isn't visible",
  ],
  alternatives: [
    { entryId: "confirmation-patterns", condition: "Use confirmation for irreversible operations where undo isn't possible" },
    { entryId: "optimistic-ui", condition: "Optimistic UI is the prerequisite for smooth undo — assume success first" },
  ],
  a11ySpecs: [
    "Undo toast: accessible with keyboard — Tab to undo button, Enter/Space activates",
    "Keyboard undo: Cmd+Z should work — announce 'Action undone' via aria-live when triggered",
    "Toast role='status' for non-urgent; provide adequate time before dismissal",
    "Focus management: after undo, focus should move to the restored item",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Toast with undo: sonner or react-hot-toast support action buttons natively",
    "Soft delete: add deleted_at timestamp column, filter out in queries, purge in background job after 30 days",
    "useUndoHistory hook: useReducer with UNDO/REDO actions and past/future state stacks",
    "Keyboard: useEffect with keydown listener, check for Cmd/Ctrl+Z, call undo from history",
  ],
  checklist: [
    "All reversible destructive actions offer undo toast (5s minimum)",
    "Bulk actions offer extended undo window (10s)",
    "Cmd+Z triggers undo in edit contexts",
    "Soft delete implemented server-side — undo calls restore endpoint",
    "Undo toast accessible by keyboard",
  ],
  relatedEntryIds: ['confirmation-patterns', 'optimistic-ui', 'toast-notifications', 'error-states'],
  tags: ["undo", "undo pattern", "undo toast", "Cmd+Z", "delete undo", "reversible actions", "soft delete"],
  intentTags: ["improve-feedback", "reduce-cognitive-load"],
  contentStatus: 'flagship',
  content: `
# Undo Patterns

Undo is a better alternative to confirmation dialogs for reversible actions.

## Toast Undo: The Standard Pattern

\`\`\`typescript
function deleteItem(id: string) {
  const item = items.find(i => i.id === id);

  // Remove immediately (optimistic)
  setItems(prev => prev.filter(i => i.id !== id));

  // Tell the server
  const timeoutId = setTimeout(() => {
    api.deleteItem(id); // Permanent after timeout
  }, 5000);

  // Show undo toast
  toast(\`"\${item.name}" deleted\`, {
    action: {
      label: 'Undo',
      onClick: () => {
        clearTimeout(timeoutId);
        setItems(prev => [...prev, item]); // Restore
        toast.dismiss();
      },
    },
    duration: 5000,
  });
}
\`\`\`

Users who meant to delete: uninterrupted, action complete.
Users who made a mistake: 5 seconds to recover without a dialog in their face.

## Multi-Level Undo Stack

\`\`\`typescript
const useUndoHistory = <T>(initialState: T) => {
  const [history, dispatch] = useReducer(historyReducer, {
    past: [],
    present: initialState,
    future: [],
  });

  const undo = () => dispatch({ type: 'UNDO' });
  const redo = () => dispatch({ type: 'REDO' });
  const setState = (newState: T) => dispatch({ type: 'SET', state: newState });

  return { state: history.present, undo, redo, setState,
    canUndo: history.past.length > 0,
    canRedo: history.future.length > 0 };
};
\`\`\`

## Keyboard Binding

\`\`\`typescript
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'z') {
      e.preventDefault();
      if (e.shiftKey) {
        redo();
      } else {
        undo();
      }
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, [undo, redo]);
\`\`\`

## When Not to Offer Undo

If you can't actually reverse the action, don't offer undo:
- Sending a transactional email → no undo
- Charging a payment → no undo
- Publishing to an external service → no undo

Use confirmation dialogs for these instead.
`,
};
