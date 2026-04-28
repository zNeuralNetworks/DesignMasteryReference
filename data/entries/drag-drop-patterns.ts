import { ReferenceEntry } from '../../types';

export const drag_drop_patterns: ReferenceEntry = {
  id: "drag-drop-patterns",
  title: "Drag & Drop Patterns",
  domain: "interaction",
  format: "pattern",
  verdict: "conditional",
  useContext: ["saas", "dashboard", "consumer"],
  confidenceScore: 87,
  slug: "drag-drop-patterns",
  complexity: "advanced",
  description: "Implementing drag and drop interactions for reordering, sorting, and moving items — affordances, feedback, accessibility alternatives, and mobile considerations.",
  quickTake: "Drag and drop is an ergonomic power feature, not a baseline interaction. It must always have a keyboard alternative (reorder with arrow keys, cut/paste between lists). Visual affordances (drag handle icon, cursor change, drop zone highlight) are required — drag without affordance is undiscoverable. Mobile drag is notoriously difficult — test thoroughly.",
  whyItMatters: "Drag and drop is a power interaction that makes reordering feel direct and satisfying when done well. But it requires significant implementation care: affordance discovery, drag feedback, drop zone indicators, undo, and keyboard alternatives. Without these, it becomes a source of user frustration — items dropped in wrong locations with no undo.",
  mechanism: [
    "Drag handle affordance: ⠿ icon (dots/grip) signals draggability; cursor: grab on hover",
    "Drag feedback: show a ghost/preview of the item being dragged at cursor position",
    "Drop zone: highlight valid drop targets with a visual indicator (blue border, gap opening)",
    "Keyboard alternative: up/down arrows to reorder with modifier key, or grab mode triggered by Space",
  ],
  whenToUse: [
    "Reordering items in a list or grid (kanban boards, task priority, playlist)",
    "Moving items between containers (filing documents, kanban column moves)",
    "Layout builders and dashboard customization",
  ],
  whenNotToUse: [
    "Primary navigation — drag is discovery failure; links are the right pattern",
    "Forms and data entry — users expect Tab/Enter, not drag",
    "When a simple up/down button or sort dropdown serves the same purpose with less complexity",
  ],
  tradeoffs: [
    { pro: "Direct manipulation feels powerful and satisfying for power users", con: "Complex to implement correctly — HTML5 DnD API is notoriously unreliable on mobile" },
    { pro: "Intuitive for spatial reorganization (kanban, file systems)", con: "Discoverable only if affordance is visible — many users never try dragging" },
  ],
  failureModes: [
    "No drag affordance: users don't know items can be dragged",
    "No keyboard alternative: fails WCAG 2.1.1 keyboard accessibility",
    "No undo: misplaced item with no way to recover",
    "Mobile drag broken: touch events handled differently than mouse — often drops in wrong location",
  ],
  alternatives: [
    { entryId: "undo-patterns", condition: "Drag and drop must have undo — combine with undo toast pattern" },
    { entryId: "swipe-gestures", condition: "Swipe is a mobile-native alternative to drag for common list actions" },
  ],
  a11ySpecs: [
    "WCAG 2.1.1: keyboard alternative required — drag-to-reorder must have arrow key alternative",
    "WCAG 2.5.1: pointer gestures must have single-pointer alternatives",
    "ARIA: announce drag start, position, and drop via aria-live ('Grabbed item X. Use arrow keys to move.')",
    "Drag handles: accessible button with aria-label and keyboard activation (Space/Enter to enter drag mode)",
  ],
  perfImpact: "medium",
  implementationNotes: [
    "dnd-kit: best React DnD library — accessible by default, touch support, modular",
    "@hello-pangea/dnd (Atlassian fork of react-beautiful-dnd): good for sorted lists, kanban",
    "Mobile: test with actual touch devices — touch emulation in DevTools is unreliable for DnD",
    "Performance: use transform positioning during drag (not top/left) to avoid layout thrashing",
  ],
  checklist: [
    "Drag handle (⠿ icon) visible on draggable items",
    "Cursor changes to grab/grabbing during drag",
    "Drop zone highlighted during drag-over",
    "Keyboard alternative: arrow keys to reorder in keyboard/accessibility mode",
    "Undo available after drop",
    "Tested on real touch devices",
  ],
  relatedEntryIds: ['undo-patterns', 'swipe-gestures', 'keyboard-navigation', 'optimistic-ui'],
  tags: ["drag and drop", "drag reorder", "DnD", "kanban", "sortable list", "file drop", "drag affordance"],
  intentTags: ["improve-feedback", "fix-accessibility"],
  contentStatus: 'flagship',
  content: `
# Drag & Drop Patterns

Drag and drop is a power feature. Implement the affordances and alternatives — or don't implement it at all.

## Required Affordances

### 1. Drag Handle
\`\`\`tsx
import { GripVertical } from 'lucide-react';

<div className="flex items-center gap-2">
  <button
    {...dragHandleProps}
    aria-label="Drag to reorder"
    className="cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500"
  >
    <GripVertical size={16} />
  </button>
  <div>{itemContent}</div>
</div>
\`\`\`

### 2. Drop Zone Indicator
During drag-over, highlight the drop target:
\`\`\`css
.drop-target.drag-over {
  border: 2px dashed #3b82f6;
  background: #eff6ff;
}
\`\`\`

### 3. Ghost Preview
The dragged item should appear as a semi-transparent clone following the cursor.

## Keyboard Alternative (Required)

When a user focuses a drag handle and presses Space, enter "reorder mode":
- ↑/↓ moves the item up/down
- Space or Enter confirms the position
- Escape cancels and returns to original position

Announce each move: *"Item moved to position 3 of 7"* via aria-live.

## With dnd-kit

\`\`\`tsx
import { DndContext, SortableContext, useSortable } from '@dnd-kit/sortable';

function SortableItem({ id, children }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      {...attributes}
    >
      <button {...listeners} aria-label="Drag to reorder">
        <GripVertical size={16} />
      </button>
      {children}
    </div>
  );
}
\`\`\`

## Always Provide Undo

\`\`\`typescript
function handleDragEnd(event: DragEndEvent) {
  const previousOrder = items;
  const newOrder = reorder(items, event);
  setItems(newOrder);

  toast('Reordered', {
    action: {
      label: 'Undo',
      onClick: () => setItems(previousOrder)
    },
    duration: 5000,
  });
}
\`\`\`
`,
};
