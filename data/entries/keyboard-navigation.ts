import { ReferenceEntry } from '../../types';

export const keyboard_navigation: ReferenceEntry = {
  id: "keyboard-navigation",
  title: "Keyboard Navigation",
  domain: "interaction",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "consumer", "mobile"],
  confidenceScore: 96,
  slug: "keyboard-navigation",
  complexity: "intermediate",
  description: "Designing interfaces that are fully operable by keyboard — tab order, focus management, keyboard shortcuts, and the ARIA interaction patterns that make custom components accessible.",
  quickTake: "Keyboard accessibility isn't just for users with motor disabilities — power users, developers, and anyone using a laptop without a mouse depends on it. If you can't Tab through the interface in a sensible order and activate every function with Enter/Space, the product fails its largest accessibility requirements.",
  whyItMatters: "WCAG 2.1.1 (Level A) requires all functionality to be operable by keyboard. Keyboard accessibility failures are among the most common accessibility issues found in audits. Beyond compliance, keyboard-navigable interfaces are faster for power users — keyboard shortcuts are a productivity feature, not an accessibility afterthought.",
  mechanism: [
    "Tab order must follow visual reading order — never create a tab order that jumps around the page illogically",
    "Focus indicator must be visible — browser default is often removed, must be replaced with a clear custom outline",
    "Custom components need keyboard interaction: buttons → Enter/Space; dropdowns → arrow keys; modals → Tab trapped inside",
    "Skip links: 'Skip to main content' as first focusable element for users navigating through nav every time",
  ],
  whenToUse: [
    "All web applications — keyboard accessibility is required by WCAG Level A",
    "SaaS products where power users benefit from keyboard shortcuts",
  ],
  whenNotToUse: [
    "No exceptions — all interactive elements must be keyboard accessible",
  ],
  tradeoffs: [
    { pro: "WCAG compliance and accessibility for motor-impaired users", con: "Custom components require significant ARIA and keyboard event handler implementation" },
    { pro: "Power users significantly faster with keyboard shortcuts", con: "Focus management (especially in SPAs) requires careful attention to navigation events" },
  ],
  failureModes: [
    "outline: none on :focus without replacement: focus position completely invisible",
    "div/span used as buttons: not focusable, no keyboard events — use <button>",
    "Modal without focus trap: Tab leaves the modal while it's open — users interact with background content",
    "Logical DOM order vs. visual order mismatch: CSS reordering with flex/grid breaks Tab sequence",
  ],
  alternatives: [
    { entryId: "focus-management", condition: "Focus management is a deeper look at programmatic focus control in SPAs" },
    { entryId: "command-palettes", condition: "Command palettes are the power user keyboard navigation layer" },
  ],
  a11ySpecs: [
    "WCAG 2.1.1 (A): All functionality operable by keyboard",
    "WCAG 2.4.3 (A): Focus order preserves meaning and operability",
    "WCAG 2.4.7 (AA): Focus visible — keyboard focus indicator must be visible",
    "WCAG 2.4.11 (AA, 2.2): Focus appearance — minimum 2px outline, 3:1 contrast",
  ],
  perfImpact: "low",
  implementationNotes: [
    "Skip link: <a href='#main' class='sr-only focus:not-sr-only'>Skip to main content</a> as first DOM element",
    "Focus trap in modals: use focus-trap-react or Radix Dialog (handles this automatically)",
    "Custom focus style: :focus-visible { outline: 2px solid #2563eb; outline-offset: 2px } — only shows for keyboard users",
    "Roving tabindex: for arrow-key navigation in toolbars/menus — one tabindex=0, rest tabindex=-1",
  ],
  checklist: [
    "All interactive elements reachable by Tab in logical order",
    "Visible focus indicator on all focusable elements (custom, not browser default which CSS removes)",
    "Modals trap focus inside while open",
    "Escape closes modals, dropdowns, and overlays",
    "Skip to main content link is first focusable element",
    "No div/span used as buttons — use semantic button element",
  ],
  relatedEntryIds: ['focus-management', 'aria-live-regions', 'modal-dialog', 'command-palettes'],
  tags: ["keyboard navigation", "keyboard accessibility", "Tab order", "focus indicator", "WCAG keyboard", "keyboard shortcuts"],
  intentTags: ["fix-accessibility"],
  contentStatus: 'hardened',
  content: `
# Keyboard Navigation

Every interactive element must be reachable and operable with a keyboard. This is both a legal requirement and a power-user feature.

## The Tab Order Test

Open your app and press Tab repeatedly. You should:
1. See a visible focus indicator moving through interactive elements
2. Reach every button, link, input, and interactive component
3. Encounter elements in a logical reading order (top-left to bottom-right)

If focus disappears, jumps randomly, or gets stuck — there's a keyboard accessibility failure.

## Focus Visibility

The most common issue: developers remove the browser default outline without replacing it.

\`\`\`css
/* ❌ Never do this globally */
* { outline: none; }

/* ✅ Use :focus-visible for custom style */
:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
  border-radius: 4px;
}
\`\`\`

\`:focus-visible\` only shows for keyboard navigation (not mouse clicks) — removes the click-focus annoyance while keeping keyboard focus visible.

## Custom Component Patterns

| Component | Keys | ARIA |
|-----------|------|------|
| Button | Enter, Space | role="button" (or use \`<button>\`) |
| Link | Enter | role="link" (or use \`<a>\`) |
| Checkbox | Space | role="checkbox" + aria-checked |
| Dropdown | ↓ open, ↑↓ navigate, Enter select, Esc close | role="listbox" + role="option" |
| Modal | Tab stays inside, Esc closes | role="dialog" + aria-modal |
| Menu | ↑↓ navigate, Enter activate, Esc close | role="menu" + role="menuitem" |

## Skip Links

\`\`\`html
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:rounded-lg focus:shadow">
  Skip to main content
</a>

<main id="main-content">...</main>
\`\`\`

Without this, keyboard users must tab through the entire navigation on every page.

## SPA Navigation

When navigating between routes, move focus to the page heading or main content:

\`\`\`typescript
router.on('routeChange', () => {
  const heading = document.querySelector('h1');
  heading?.setAttribute('tabindex', '-1');
  heading?.focus();
});
\`\`\`
`,
};
