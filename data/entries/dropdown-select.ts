import { ReferenceEntry } from '../../types';

export const dropdown_select: ReferenceEntry = {
  id: "dropdown-select",
  title: "Dropdown & Select Patterns",
  domain: "components",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile", "consumer", "marketplace"],
  confidenceScore: 90,
  slug: "dropdown-select",
  complexity: "intermediate",
  description: "Patterns for single and multi-select dropdowns, comboboxes, and action menus — when to use each and how to build them accessibly.",
  quickTake: "The native <select> is reliable and accessible but unstyable. Custom dropdowns give design control but require full ARIA implementation. Use native for simple selects in forms; use custom for combobox search, multi-select, or when design consistency is critical.",
  whyItMatters: "Dropdowns are used everywhere but built poorly 90% of the time — missing keyboard navigation, no ARIA roles, not closeable with Escape. A broken dropdown blocks task completion entirely. Getting the fundamentals right also prevents accessibility audit failures.",
  mechanism: [
    "Native <select>: use for simple single-select in forms — accessible by default, works on all devices",
    "Custom dropdown: implement Listbox ARIA pattern with keyboard navigation (arrows, Enter, Escape, Home, End)",
    "Combobox: searchable dropdown — use Combobox ARIA pattern with aria-autocomplete",
    "Multi-select: show selected items as chips/tags inside the trigger, provide Clear All",
  ],
  whenToUse: [
    "5+ mutually exclusive options where radio buttons would take too much space",
    "Searchable/filterable option lists (combobox variant)",
    "Action menus triggered from a button (not a form field)",
  ],
  whenNotToUse: [
    "2–4 options: use radio buttons or segmented control (always visible = faster selection)",
    "Binary choices: use a checkbox or toggle switch",
    "Primary navigation: menus should use nav/menu ARIA patterns, not select",
  ],
  tradeoffs: [
    { pro: "Saves space compared to radio buttons for large option sets", con: "Hidden options reduce discoverability — users must click to see choices" },
    { pro: "Familiar interaction model users know from OS and web", con: "Custom dropdowns require significant ARIA/keyboard implementation work" },
  ],
  failureModes: [
    "No keyboard navigation in custom dropdown: arrow keys don't move focus between options",
    "Escape doesn't close: standard user expectation violated",
    "Dropdown clips at viewport edge: panel opens off-screen on small viewports",
    "Multi-select: no visible count of selected items when dropdown is closed",
  ],
  alternatives: [
    { entryId: "command-palettes", condition: "When options are numerous and search is the primary interaction" },
    { entryId: "form-validation-ux", condition: "Dropdowns in forms need validation feedback patterns" },
  ],
  a11ySpecs: [
    "Use role='listbox' and role='option' with aria-selected for custom select dropdowns",
    "Use role='combobox' with aria-expanded, aria-haspopup, aria-autocomplete for searchable variants",
    "Keyboard: Down/Up moves focus, Enter selects, Escape closes, Home/End jump to first/last",
    "Selected state must be communicated to screen readers (not just visual highlight)",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Radix UI Select and Headless UI Listbox/Combobox handle full ARIA compliance",
    "Floating-ui (Popper.js successor) handles viewport-aware positioning to prevent clipping",
    "Virtual scroll for 100+ options: only render visible items in the dropdown list",
    "On mobile: consider opening a bottom sheet instead of a floating dropdown for easier tapping",
  ],
  checklist: [
    "Keyboard navigable: arrows, Enter, Escape, Home/End all work",
    "Dropdown positions to avoid viewport clipping (flip to top if near bottom edge)",
    "Multi-select shows selected count in trigger when closed",
    "ARIA roles match the interaction type (listbox vs combobox vs menu)",
  ],
  relatedEntryIds: ['form-validation-ux', 'command-palettes', 'modal-dialog', 'tabs-navigation'],
  tags: ["dropdown", "select", "combobox", "multi-select", "custom dropdown", "form elements"],
  intentTags: ["reduce-cognitive-load", "fix-accessibility"],
  content: `
# Dropdown & Select Patterns

Three distinct patterns share the "dropdown" name but need different ARIA implementations:

## 1. Select (form field)
Single value selection in a form. Maps to the native \`<select>\` mental model.

**ARIA:** \`role="listbox"\` + \`role="option"\` + \`aria-selected\`

Use when: picking a country, category, or status.

## 2. Combobox (searchable select)
Type to filter options. Combines a text input with a listbox popup.

**ARIA:** \`role="combobox"\` + \`aria-expanded\` + \`aria-autocomplete="list"\`

Use when: 20+ options, or the user knows what they want and typing is faster than scanning.

## 3. Menu (action trigger)
A button that opens a list of actions (not values). Each item performs an action.

**ARIA:** \`role="menu"\` + \`role="menuitem"\`

Use when: "More actions..." overflow menus, context menus, toolbar actions.

---

## Keyboard Requirements

| Key | Behavior |
|-----|----------|
| ↓ / ↑ | Move focus between options |
| Enter / Space | Select focused option |
| Escape | Close without selecting |
| Home / End | Jump to first / last option |
| Type characters | Jump to matching option (select/listbox) |

Skipping any of these is an accessibility failure.

## Mobile: Bottom Sheet Alternative

A floating dropdown on mobile is small, hard to tap, and clips at edges. For important selections on mobile, open a bottom sheet instead — full-width, easy to dismiss, options are large tap targets.
`,
};
