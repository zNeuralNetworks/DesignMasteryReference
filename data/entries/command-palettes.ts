import { ReferenceEntry } from '../../types';

export const command_palettes: ReferenceEntry = {
  id: "command-palettes",
  title: "Command Palettes (CMD+K)",
  domain: "components",
  format: "pattern",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "devtools"],
  confidenceScore: 92,
  slug: "command-palettes",
  complexity: "advanced",
  description: "The 'Omnisearch' pattern that allows users to navigate and execute commands via a keyboard-driven modal.",
  quickTake: "Command palettes transform complex UIs into searchable command lines, enabling power users to bypass deep navigation menus entirely.",
  whyItMatters: "As SaaS apps grow in complexity, traditional navigation fails. CMD+K provides a 'zero-latency' navigation path that scales infinitely with your feature set.",
  mechanism: [
    "Trigger a global modal via a keyboard shortcut (usually CMD+K or CTRL+K)",
    "Provide a fuzzy-search input for navigation, actions, and documentation",
    "Display results with clear keyboard shortcuts for execution",
    "Execute the selected action or navigate to the target page instantly"
  ],
  whenToUse: [
    "Professional tools with deep navigation hierarchies (e.g., Linear, Slack)",
    "Developer tools and IDEs",
    "Dashboards with hundreds of possible actions or entities"
  ],
  whenNotToUse: [
    "Simple landing pages or content sites",
    "Mobile-only applications (where keyboard shortcuts are unavailable)",
    "Apps with very few actions where a palette adds unnecessary complexity"
  ],
  tradeoffs: [
    { pro: "Extreme speed for power users", con: "High discoverability barrier for novices" },
    { pro: "Scales to thousands of commands without UI clutter", con: "Requires robust fuzzy-search logic and indexing" }
  ],
  failureModes: [
    "Slow Search: Any latency in the palette destroys the 'instant' feel",
    "Poor Fuzzy Matching: Users failing to find commands due to strict string matching",
    "Shortcut Conflicts: Overriding browser or OS-level shortcuts"
  ],
  alternatives: [
    { entryId: "progressive-disclosure", condition: "Use for secondary actions that don't need keyboard speed" },
    { entryId: "mystery-meat-navigation", condition: "Avoid hiding primary navigation entirely behind a palette" }
  ],
  a11ySpecs: [
    "Use aria-combobox roles for the input and listbox",
    "Ensure focus is trapped within the modal while open",
    "Announce the number of results to screen readers on every keystroke"
  ],
  perfImpact: "medium",
  implementationNotes: [
    "Use libraries like 'cmdk' or 'ninja-keys' for robust implementation",
    "Implement 'Recent Actions' to help users repeat frequent tasks",
    "Ensure the palette is accessible via a visible UI button for discoverability"
  ],
  checklist: ["Verified keyboard accessibility", "Tested fuzzy search accuracy", "Checked for shortcut conflicts"],
  relatedEntryIds: ["progressive-disclosure", "mystery-meat-navigation"],
  tags: ["UX","Productivity","Keyboard","Navigation"],
  content: `
# The CMD+K Revolution

The Command Palette has become the gold standard for professional software navigation. Pioneered by IDEs and popularized by apps like **Linear** and **Slack**, it solves the "Navigation Bloat" problem.

### Key Components
1.  **The Trigger**: A global listener for \`meta+k\`.
2.  **The Fuzzy Search**: A search algorithm that handles typos and partial matches.
3.  **The Action Registry**: A centralized list of all searchable routes and functions.

### Why it works
It leverages **Muscle Memory**. Once a user learns that \`CMD+K > "New Issue"\` works, they stop looking for the "plus" icon. It turns your UI into a command line for the modern web.
`,
  intentTags: ["reduce-cognitive-load", "improve-feedback"],
};
