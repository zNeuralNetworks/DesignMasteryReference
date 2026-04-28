import { ReferenceEntry } from '../../types';

export const contextual_glossary: ReferenceEntry = {
  id: "contextual-glossary",
  title: "Contextual Glossaries",
  domain: "components",
  format: "pattern",
  verdict: "recommended",
  useContext: ["edtech", "saas", "content"],
  confidenceScore: 92,
  slug: "contextual-glossary",
  complexity: "intermediate",
  description: "Reducing cognitive load by providing just-in-time definitions without leaving the context.",
  quickTake: "Contextual glossaries provide definitions for technical terms exactly where they appear, preventing users from having to leave their current task to look up information.",
  whyItMatters: "Jargon is a major barrier to learning and productivity. By providing 'just-in-time' definitions, you reduce cognitive load and keep users in the 'flow' state.",
  mechanism: [
    "Identify technical terms or jargon within the content",
    "Style these terms with a subtle visual cue (e.g., a dashed underline)",
    "Trigger a popover or tooltip on hover or click that contains the definition",
    "Include a link to a full glossary page for more in-depth information"
  ],
  whenToUse: [
    "Educational content and documentation",
    "Complex SaaS platforms with industry-specific terminology",
    "Onboarding flows for technical products"
  ],
  whenNotToUse: [
    "Common words that most users already understand",
    "When the UI is already too cluttered with interactive elements",
    "On mobile devices where hover states aren't available (use click/tap instead)"
  ],
  tradeoffs: [
    { pro: "Significantly reduces cognitive load and task interruption", con: "Can add visual noise if too many terms are highlighted" },
    { pro: "Improves accessibility for non-expert users", con: "Requires careful management of tooltip positioning and focus" }
  ],
  failureModes: [
    "The 'Dictionary' Trap: Providing definitions that are too long or academic",
    "Obscured Content: Tooltips that cover up the very text the user is trying to read",
    "Inconsistent Styling: Highlighting terms in some places but not others"
  ],
  alternatives: [
    { entryId: "cognitive-chunking", condition: "Use to break down complex information into smaller pieces" },
    { entryId: "progressive-disclosure", condition: "Use to hide complex details until they are needed" }
  ],
  a11ySpecs: [
    "Ensure tooltips are accessible via keyboard (Tab and Escape)",
    "Use 'aria-describedby' to link the term to its definition",
    "Maintain sufficient contrast for the highlighted terms"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use Radix UI or shadcn 'Tooltip' or 'Popover' components for robust behavior",
    "Limit definitions to 1-2 concise sentences",
    "Use a dashed underline (\`border-b border-dashed\`) to signal interactivity"
  ],
  checklist: [
    "Explained domain terms at the point of confusion without breaking flow",
    "Kept glossary triggers visible and keyboard accessible",
    "Avoided using glossary content as a substitute for clear labels"
  ],
  relatedEntryIds: ['mystery-meat-navigation', 'progressive-disclosure', 'onboarding-tours'],
  interactiveComponent: "GlossaryDemo",
  tags: ["EdTech","UX","Accessibility"],
  contentStatus: 'hardened',
  content: `

# Contextual Definitions

In educational apps, jargon is a barrier. Instead of forcing users to a separate glossary page, use **contextual popovers**.

This technique reduces **cognitive load** and keeps the user in the "flow" state of learning. 

> Use a dashed underline style for glossary terms. This is a universal pattern indicating "this text has a tooltip."
    
`,
  intentTags: ["improve-readability", "reduce-cognitive-load"],
};
