import { ReferenceEntry } from '../../types';

export const design_tokens: ReferenceEntry = {
  id: "design-tokens",
  title: "Design Tokens",
  domain: "tokens",
  format: "system",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "devtools"],
  confidenceScore: 95,
  slug: "design-tokens",
  complexity: "intermediate",
  description: "The visual atoms of the design system: colors, spacing, and typography values stored as data.",
  quickTake: "Design tokens are the 'single source of truth' for design decisions, enabling multi-platform consistency and rapid theming.",
  whyItMatters: "Hardcoded values lead to 'design debt' and inconsistent UIs. Tokens allow you to update your entire brand identity by changing a single JSON file.",
  mechanism: [
    "Identify primitive values (colors, spacing, font sizes)",
    "Assign semantic names based on intent (e.g., 'action-primary' vs 'blue-500')",
    "Store tokens in a platform-agnostic format (JSON/YAML)",
    "Distribute tokens to CSS, iOS, and Android via build tools (e.g., Style Dictionary)"
  ],
  whenToUse: [
    "Building a multi-platform design system",
    "Implementing Dark Mode or multi-brand theming",
    "Teams with more than 3 designers/developers"
  ],
  whenNotToUse: [
    "Small, one-off marketing sites",
    "Prototypes where speed of creation is more important than maintenance",
    "Simple apps with a fixed, unchanging brand identity"
  ],
  tradeoffs: [
    { pro: "Centralized control over brand consistency", con: "Initial setup overhead and build process complexity" },
    { pro: "Enables rapid theming (e.g., Dark Mode)", con: "Learning curve for naming conventions and semantic usage" }
  ],
  failureModes: [
    "Token Bloat: Creating too many tokens for every minor variation",
    "Poor Naming: Using descriptive names (blue-500) instead of semantic ones (action-primary)",
    "Manual Overrides: Developers bypassing tokens to use hardcoded values in a hurry"
  ],
  alternatives: [
    { entryId: "atomic-design", condition: "Use to organize components that consume these tokens" },
    { entryId: "variable-fonts", condition: "Use to manage typography tokens more fluidly" }
  ],
  a11ySpecs: [
    "Include contrast-ratio metadata in color tokens",
    "Ensure typography tokens use relative units (rem/em) for scaling",
    "Define 'Focus' and 'Error' tokens with high visibility"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use the CTI (Category-Type-Item) naming convention",
    "Leverage tools like Style Dictionary or Theo for multi-platform export",
    "Map tokens to Tailwind CSS variables for a seamless developer experience"
  ],
  checklist: [
    "Separated primitive, semantic, and component-scoped token layers",
    "Included contrast and state metadata for color tokens",
    "Validated generated platform outputs against source token names"
  ],
  relatedEntryIds: ['component-props', 'color-rule', 'typography-scale'],
  interactiveComponent: "DesignTokensDemo",
  tags: ["Architecture","Theming","Variables"],
  content: `

# Design Tokens

Design Tokens are the semantic variables used to store design decisions. Instead of hardcoding hex values like \`#2563eb\` or pixels like \`16px\`, we use names like \`color-primary-600\` or \`spacing-md\`.
    
`,
  intentTags: ["improve-aesthetics", "improve-performance"],
};
