import { ReferenceEntry } from '../../types';

export const aria_live_regions: ReferenceEntry = {
  id: "aria-live-regions",
  title: "ARIA Live Regions",
  domain: "interaction",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "mobile", "dashboard"],
  confidenceScore: 97,
  slug: "aria-live-regions",
  complexity: "advanced",
  description: "Screen readers only announce dynamic content changes if the region is correctly declared with aria-live; missing this is the most common SPA accessibility failure.",
  quickTake: "When content updates dynamically (status messages, new chat messages, live scores), screen readers won't announce the change unless the region has aria-live. Users are left in the dark.",
  whyItMatters: "Screen reader users navigate using structure (headings, landmarks). When a critical status message appears, they don't know it's there unless you explicitly tell the accessibility tree via aria-live.",
  mechanism: [
    "aria-live='polite' tells screen readers to announce changes when the user finishes speaking/interacting.",
    "aria-live='assertive' interrupts the user immediately (use sparingly for critical alerts).",
    "aria-atomic='true' announces the entire region, not just the changed text.",
    "aria-relevant='additions text' specifies what triggers an announcement (node additions, text changes, removals)."
  ],
  whenToUse: [
    "Status messages (e.g., 'Saving...' → 'Saved successfully')",
    "Real-time notifications (chat, alerts, live updates)",
    "Form validation feedback (errors, success messages)",
    "Search results loading and updating",
    "Progress indicators (0% → 100% completion)"
  ],
  whenNotToUse: [
    "Static content — use semantic HTML instead.",
    "Content that updates on every keystroke — use debouncing; aria-live will spam announcements.",
    "Decorative or non-critical visual changes."
  ],
  tradeoffs: [
    { pro: "Screen reader users get notified of important changes", con: "Requires careful tuning; misconfigured aria-live creates noise" },
    { pro: "No additional visual indicator needed", con: "Sighted users may not notice the update (show visual feedback too)" }
  ],
  failureModes: [
    "Missing aria-live entirely: Status message appears but screen reader says nothing; user is confused.",
    "aria-live='assertive' on everything: Every keystroke triggers an announcement; screen reader is overwhelming.",
    "aria-live without context: Announcing 'Updated' without saying what changed or why.",
    "Stale aria-live regions: Region exists in DOM but is never updated; aria-live is ineffective.",
    "Wrong aria-relevant: Announcing removals when only additions matter, creating unnecessary noise."
  ],
  alternatives: [
    { entryId: "focus-management", condition: "Move focus to the new content instead of (or in addition to) aria-live" },
    { entryId: "toast-notifications", condition: "Combine aria-live with visual toast notifications for sighted users" }
  ],
  a11ySpecs: [
    "Every dynamic update must have an aria-live region (or focus management).",
    "Use aria-live='polite' by default; 'assertive' only for critical/time-sensitive alerts.",
    "Pair aria-live with clear, descriptive text. 'Saved' is ambiguous; 'Your profile was saved successfully' is clear.",
    "Test with a screen reader (NVDA, JAWS, VoiceOver) — read-only checking isn't sufficient."
  ],
  perfImpact: "low",
  implementationNotes: [
    "Place aria-live regions in the DOM at page load, even if empty. If created dynamically, the screen reader may miss announcements.",
    "Debounce rapid updates: If status changes 10 times per second, announce only the final state.",
    "Use aria-live='off' during initial page load (to avoid reading loading states), then switch to 'polite' when interaction starts.",
    "Test keyboard + screen reader together: Ensure announcements don't conflict with keyboard navigation.",
    "Avoid aria-live on parent containers with lots of content; scope to the specific region that changes."
  ],
  checklist: [
    "All dynamic updates (messages, alerts, status) have aria-live regions",
    "aria-live regions are marked 'polite' by default",
    "Announcements use clear, descriptive language",
    "Tested with keyboard + screen reader together"
  ],
  relatedEntryIds: ['focus-management', 'color-blindness', 'toast-notifications'],
  interactiveComponent: "FocusDemo",
  tags: ["Accessibility","ARIA","Screen Reader","dynamic content","announcements","live regions","SPA accessibility"],
  contentStatus: 'hardened',
  content: `

# ARIA Live Regions

Screen readers only read what's in the static DOM. When content updates dynamically (via JavaScript), screen readers won't know unless you tell them using aria-live.

This is the **#1 accessibility failure in modern SPAs**: a button click triggers a status message that sighted users see immediately, but screen reader users never hear about it.

## The Three Attributes

### aria-live
Controls **when** to announce changes:
- \`aria-live='off'\` (default): Don't announce.
- \`aria-live='polite'\`: Announce after user finishes current interaction.
- \`aria-live='assertive'\`: Interrupt immediately (only for critical alerts).

### aria-atomic
Controls **what** to announce:
- \`aria-atomic='false'\` (default): Announce only the changed text.
- \`aria-atomic='true'\`: Announce the entire region.

### aria-relevant
Controls **which changes** trigger an announcement:
- \`aria-relevant='additions text'\`: Announce when content is added or text changes.
- \`aria-relevant='removals'\`: Announce when content is removed.

## Common Patterns

### Status Message (Saving...)
\`\`\`html
<div aria-live="polite" aria-atomic="true">
  {saving ? "Saving..." : "Saved"}
</div>
\`\`\`

### Chat Message
\`\`\`html
<div aria-live="polite" aria-atomic="false">
  {lastMessage}
</div>
\`\`\`

### Critical Alert
\`\`\`html
<div aria-live="assertive" role="alert">
  Your session will expire in 5 minutes
</div>
\`\`\`

## Testing

1. Use NVDA (Windows), JAWS (Windows), or VoiceOver (Mac).
2. Perform an action that updates content.
3. Does the screen reader announce the change?
4. Is the announcement clear and non-repetitive?

If "No," your aria-live is missing or misconfigured.
`,
  intentTags: ["fix-accessibility", "improve-feedback"],
};
