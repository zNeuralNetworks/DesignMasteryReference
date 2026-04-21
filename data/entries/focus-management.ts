import { ReferenceEntry } from '../../types';

export const focus_management: ReferenceEntry = {
  id: "focus-management",
  title: "Accessible Focus States",
  domain: "interaction",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "accessibility"],
  confidenceScore: 98,
  slug: "focus-management",
  complexity: "intermediate",
  description: "Why default outlines aren't enough and how to design beautiful, accessible focus rings.",
  quickTake: "Focus management ensures that keyboard and assistive technology users can always see where they are in the interface and navigate logically.",
  whyItMatters: "For keyboard-only users, the 'Focus Ring' is their cursor. Removing it or making it hard to see effectively 'breaks' the interface for them. A well-designed focus state is a hallmark of a professional, inclusive product.",
  mechanism: [
    "Never use 'outline: none' without providing a visible alternative",
    "Use high-contrast focus rings (e.g., 2px solid primary color with an offset)",
    "Manage focus programmatically when modals or menus open/close",
    "Ensure the focus order (Tab order) follows the visual layout"
  ],
  whenToUse: [
    "All interactive elements (Buttons, Links, Inputs)",
    "Complex components like Modals, Drawers, and Tabs",
    "Navigation menus and breadcrumbs"
  ],
  whenNotToUse: [
    "Non-interactive elements (Static text, images without links)",
    "When using a framework that handles focus management automatically (still verify!)"
  ],
  tradeoffs: [
    { pro: "Ensures legal compliance (WCAG) and universal usability", con: "Can be visually 'noisy' if not integrated into the design system" },
    { pro: "Improves experience for power users (keyboard shortcuts)", con: "Requires careful coordination between CSS and JS for complex components" }
  ],
  failureModes: [
    "The 'Invisible Cursor': Removing focus rings because they 'look ugly' to designers",
    "Focus Traps: Forcing focus into a modal but not allowing the user to escape it",
    "Lost Focus: Letting focus vanish into the 'void' when an element is deleted"
  ],
  alternatives: [
    { entryId: "color-blindness", condition: "Use to ensure focus states don't rely on color alone" },
    { entryId: "dark-mode-design", condition: "Use to ensure focus rings are visible against dark backgrounds" }
  ],
  a11ySpecs: [
    "WCAG 2.1 Level AA requires a visible focus indicator",
    "Focus rings must have a contrast ratio of at least 3:1 against the background",
    "Use ':focus-visible' to only show rings for keyboard users, avoiding 'noise' for mouse users"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use Tailwind's \`focus-visible:ring-2\` utilities for consistent styling",
    "Leverage libraries like 'React Aria' for robust focus trap and management logic",
    "Test your UI using only the 'Tab' key—if you get lost, your focus management is broken"
  ],
  checklist: [
    "Defined where focus moves on open, close, submit, and validation failure",
    "Verified tab order matches visual and task order",
    "Tested modal, popover, and route transitions with keyboard only"
  ],
  relatedEntryIds: ['color-blindness', 'dark-mode-design'],
  interactiveComponent: "FocusDemo",
  tags: ["A11y","Keyboard","CSS"],
  content: `

# Keyboard Navigation

For users who rely on keyboards (motor disabilities or power users), the **focus ring** is their cursor. Removing it with \`outline: none\` breaks the interface.

### The Problem
Default browser outlines can be ugly or inconsistent with your brand. Designers often remove them, leaving keyboard users lost.
    
`,
  intentTags: ["fix-accessibility", "improve-feedback"],
};
