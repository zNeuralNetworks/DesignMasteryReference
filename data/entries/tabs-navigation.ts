import { ReferenceEntry } from '../../types';

export const tabs_navigation: ReferenceEntry = {
  id: "tabs-navigation",
  title: "Tabs & Navigation Patterns",
  domain: "components",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile", "consumer"],
  confidenceScore: 91,
  slug: "tabs-navigation",
  complexity: "beginner",
  description: "Tabs organize related content into parallel sections, letting users switch between views without losing context.",
  quickTake: "Tabs work when content is parallel, mutually exclusive, and roughly equal in importance. Use them for 2–7 sections. Below 2, it's not a tab; above 7, users lose track. On mobile, tabs collapse to scrollable chips or a bottom nav — never wrap to a second line.",
  whyItMatters: "Tabs are one of the most-misused components. They're appropriate for parallel, peer-level content — not for sequential steps, hierarchical navigation, or content that varies wildly in volume. Getting the mental model right reduces user confusion about what's 'inside' a tab.",
  mechanism: [
    "Use tabs for parallel, peer-level sections — same type of content, different scope",
    "Active tab indicator: bold text + bottom border or filled background for clear affordance",
    "Keep tab labels short (1–2 words) and descriptive — avoid generic 'Overview', 'Details'",
    "Mobile: use scrollable tabs or move to bottom nav — never wrap to multiple rows",
  ],
  whenToUse: [
    "Parallel content sections with equal information hierarchy (Settings tabs: Account, Security, Billing)",
    "Content that users switch between frequently without needing both open simultaneously",
    "Filtering views of the same data (All / Active / Archived)",
  ],
  whenNotToUse: [
    "Sequential workflows — use a stepper instead",
    "Hierarchical navigation — use a sidebar or breadcrumb",
    "Content where users need to compare across sections simultaneously",
  ],
  tradeoffs: [
    { pro: "Reduces visual complexity by hiding non-active content", con: "Content in inactive tabs is not visible — bad for discoverability" },
    { pro: "Familiar pattern users understand immediately", con: "Mobile tabs with 5+ items are hard to tap and often get cut off" },
  ],
  failureModes: [
    "Sequential steps labeled as tabs: users don't understand they must complete in order",
    "7+ tabs: users lose track of what's available and rarely explore beyond tab 4",
    "Wrapping tabs on mobile: second row of tabs looks broken and confuses users",
    "URL not updating with tab state: back button doesn't restore the correct tab",
  ],
  alternatives: [
    { entryId: "progressive-disclosure", condition: "When content needs to be revealed progressively rather than in parallel sections" },
    { entryId: "sidebar-layouts", condition: "When navigation has hierarchy or too many items for tabs" },
  ],
  a11ySpecs: [
    "Use ARIA role='tablist', role='tab', role='tabpanel' with aria-selected and aria-controls",
    "Tab keyboard navigation: arrow keys move between tabs, Enter/Space activates",
    "Active tabpanel must be the only visible tab panel in the DOM (or use aria-hidden on others)",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Lazy-render tab content to avoid loading all tabs on initial paint",
    "Preserve tab state in URL hash or query param for deep linking and back button support",
    "Headless UI and Radix UI Tab components handle ARIA correctly out of the box",
    "Mobile: min-width on tab items + overflow-x: auto; hide scrollbar with -webkit-scrollbar: none",
  ],
  checklist: [
    "2–7 tabs maximum",
    "Tab labels are 1–2 words and describe the content, not the action",
    "ARIA tablist/tab/tabpanel roles applied correctly",
    "Tab state reflected in URL for back-button support",
    "Mobile tested — no wrapping to second row",
  ],
  relatedEntryIds: ['sidebar-layouts', 'progressive-disclosure', 'modal-dialog', 'command-palettes'],
  tags: ["tabs", "navigation", "tabbed content", "tab component", "SaaS navigation", "settings tabs"],
  intentTags: ["reduce-cognitive-load", "improve-readability"],
  content: `
# Tabs & Navigation Patterns

Tabs are a deceptively simple pattern. Used correctly, they reduce complexity. Used incorrectly, they hide content users need.

## When Tabs Are the Right Choice

Tabs work for **parallel, peer-level content** — content of the same type, just with different scope or filter.

✓ Settings: Account | Security | Notifications | Billing
✓ Project views: Board | List | Calendar | Timeline
✓ Filter state: All | Active | Completed | Archived

✗ Checkout steps (sequential, not parallel)
✗ Site-wide navigation (hierarchical, not peer-level)
✗ Before/after comparisons (users need to see both at once)

## Anatomy

- **Tab strip**: visible tabs, active indicator, scrollable on mobile
- **Active indicator**: bottom border, background fill, or bold text — must be clearly distinct
- **Tab panel**: content area that changes with selection

## Mobile Tabs

Options in order of preference:
1. **Scrollable tab strip** — overflow: auto, hidden scrollbar, leftmost tab visible
2. **Bottom navigation bar** — works for 3–5 primary sections in native-feeling apps
3. **Collapsed dropdown** — last resort for 6+ tabs on narrow screens

Never: wrap to a second row. It looks like a broken layout.

## URL State

Tab selection should update the URL:
\`\`\`
/settings#security
/settings?tab=security
\`\`\`

This enables deep linking, back button support, and page refresh preservation.
`,
};
