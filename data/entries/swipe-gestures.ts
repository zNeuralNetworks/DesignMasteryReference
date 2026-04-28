import { ReferenceEntry } from '../../types';

export const swipe_gestures: ReferenceEntry = {
  id: "swipe-gestures",
  title: "Mobile Swipe Gestures",
  domain: "interaction",
  format: "principle",
  verdict: "recommended",
  useContext: ["mobile", "consumer", "saas"],
  confidenceScore: 94,
  slug: "swipe-gestures",
  complexity: "intermediate",
  description: "Implementing common mobile patterns like \"Swipe to Delete\" or \"Swipe to Archive\".",
  quickTake: "Mobile Swipe Actions are gestural shortcuts that allow users to perform common tasks (like deleting or archiving) by swiping list items, saving screen real estate and increasing efficiency.",
  whyItMatters: "On mobile devices, screen space is at a premium. Swipe actions allow you to hide secondary controls behind a simple gesture, keeping the UI clean while providing power users with fast, tactile shortcuts.",
  mechanism: [
    "Threshold Detection: Determining when a swipe has traveled far enough to trigger an action",
    "Visual Reveal: Showing the underlying action (icon/color) as the user swipes",
    "Haptic Feedback: Providing a subtle vibration when the swipe threshold is reached",
    "Undo Mechanic: Always providing a way to reverse an accidental swipe action (e.g., a toast with 'Undo')"
  ],
  whenToUse: [
    "Managing lists of items (Emails, Tasks, Notifications)",
    "Designing mobile-first applications where efficiency is a priority",
    "Providing shortcuts for high-frequency actions (Archive, Delete, Flag)"
  ],
  whenNotToUse: [
    "In desktop applications where mouse-based swiping is non-standard and difficult",
    "When the action is critical and irreversible (always require a confirmation modal)",
    "In UIs where swiping conflicts with other gestures (like horizontal scrolling or page navigation)"
  ],
  tradeoffs: [
    { pro: "Saves valuable screen space and reduces visual clutter", con: "Actions are 'hidden' and must be discovered by the user" },
    { pro: "Provides a fast, tactile experience for power users", con: "Requires careful implementation to avoid accidental triggers" }
  ],
  failureModes: [
    "The 'Hidden' Feature: Users not knowing that swipe actions exist because there's no visual cue",
    "Accidental Deletion: Triggering a destructive action too easily without an undo option",
    "Gesture Conflict: Swiping to delete accidentally triggering a 'Back' navigation gesture"
  ],
  alternatives: [
    { entryId: "thumb-zone", condition: "Use to ensure swipe actions are within the comfortable reach of the thumb" },
    { entryId: "toast-notifications", condition: "Use to provide the 'Undo' option after a swipe action" }
  ],
  a11ySpecs: [
    "Swipe actions MUST have a visible, button-based alternative for non-gestural users",
    "Ensure the swipe state is announced by screen readers (e.g., 'Swiped to reveal delete')",
    "Provide clear textual labels for the hidden actions"
  ],
  perfImpact: "medium",
  implementationNotes: [
    "Use 'Framer Motion' or 'react-use-gesture' for smooth, high-performance swipe logic",
    "Implement a 'Spring' animation for the reveal and snap-back effects",
    "Test on multiple devices to ensure the swipe threshold feels 'right' across different screen sizes"
  ],
  checklist: [
    "Provided visible alternatives for every swipe-only action",
    "Confirmed gesture thresholds do not conflict with native scrolling",
    "Protected destructive swipe actions with confirmation or undo"
  ],
  relatedEntryIds: ['thumb-zone', 'micro-interactions', 'fitts-law'],
  interactiveComponent: "SwipeAction",
  tags: ["Mobile","Gestures","Touch"],
  contentStatus: 'draft',
  content: `

# Gestural Interaction

On mobile touchscreens, buttons occupy valuable screen real estate. **Gestures** act as invisible shortcuts.

### Swipe Actions
A common pattern in email and todo apps is swiping a list item to reveal actions underneath.
    
`,
  intentTags: ["improve-feedback", "improve-aesthetics"],
};
