import { ReferenceEntry } from '../../types';

export const progressive_disclosure: ReferenceEntry = {
  id: "progressive-disclosure",
  title: "Progressive Disclosure",
  domain: "interaction",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile"],
  confidenceScore: 92,
  slug: "progressive-disclosure",
  complexity: "intermediate",
  description: "Managing complexity by showing users only what they need, when they need it.",
  quickTake: "Progressive disclosure prevents cognitive overload by deferring advanced or rarely used features to a secondary screen or state.",
  whyItMatters: "Professional tools are often complex. Progressive disclosure allows you to maintain a clean 'novice' experience without sacrificing 'expert' power.",
  mechanism: [
    "Identify 'Primary' vs 'Secondary' actions",
    "Hide secondary actions behind a 'More', 'Advanced', or 'Settings' trigger",
    "Reveal the information only when the user explicitly requests it"
  ],
  whenToUse: [
    "Complex forms with optional fields",
    "Dashboards with deep-dive data",
    "Onboarding flows to avoid overwhelming new users"
  ],
  whenNotToUse: [
    "Critical information needed for immediate decision making",
    "Emergency actions (e.g., 'Cancel Payment', 'Stop Engine')",
    "When the 'trigger' to reveal information is too hidden (Mystery Meat)"
  ],
  tradeoffs: [
    { pro: "Cleaner, more focused UI", con: "Increases the number of clicks to reach advanced features" },
    { pro: "Lower cognitive load for new users", con: "Can hide important features from experts if not discoverable" }
  ],
  failureModes: [
    "Users never finding the 'hidden' features they need",
    "Excessive nesting leading to 'pogo-sticking' (back and forth between screens)",
    "Poorly labeled triggers that don't explain what will be revealed"
  ],
  alternatives: [
    { entryId: "cognitive-chunking", condition: "Use to group related items without hiding them" },
    { entryId: "adaptive-scaffolding", condition: "Use to provide help text rather than hiding UI" }
  ],
  a11ySpecs: [
    "Use correct ARIA attributes (aria-expanded, aria-controls)",
    "Ensure triggers are keyboard accessible",
    "Manage focus when content is revealed (e.g., in a modal or accordion)"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use accordions for inline disclosure",
    "Use 'Advanced' tabs or modals for deep-dive settings",
    "Ensure the 'Reveal' action is clearly distinguished from 'Navigate' actions"
  ],
  checklist: [
    "Kept primary task actions visible without requiring exploration",
    "Made disclosure controls explicit, keyboard reachable, and stateful",
    "Verified hidden content is not required to understand the current decision"
  ],
  relatedEntryIds: ['onboarding-tours', 'empty-states', 'hicks-law'],
  interactiveComponent: "ProgressiveDisclosure",
  tags: ["UX","Forms","Interaction","form too long","overwhelming form","cluttered form","fix forms","too much information","show less upfront"],
  content: `

# Progressive Disclosure

Complex forms and settings overwhelm users. Progressive disclosure sequences information, revealing advanced or optional details only when the user requests them.

## Visual Anatomy

A progressive disclosure interaction has three states:
1. **Collapsed/Hidden**: The trigger is visible (e.g., "Show advanced options"). The revealed content is hidden.
2. **Transitioning**: The trigger animates to indicate change (e.g., arrow rotation). The hidden content slides/fades in.
3. **Expanded/Revealed**: The trigger updates its state indicator. The hidden content is fully visible and interactive.

The **key property**: the revealed panel is controlled by the user's explicit action (click, toggle), not by hover or automatic reveal.

## Implementation Patterns

### 1. Accordion Pattern
**Best for:** Multi-section forms, settings pages, FAQs with mutually exclusive sections.
- One trigger expands one panel; collapsing one may auto-collapse others (exclusive mode).
- Use \`<details>\` + \`<summary>\` in HTML for semantic structure.
- Ensure \`aria-expanded\`, \`aria-controls\` are managed on the trigger.
- **Example:** "Advanced Search Filters" accordion in an e-commerce search form.

### 2. Step Wizard / Multi-Step Form
**Best for:** Long forms with clear logical stages.
- Each step hides the next; the "Next" button reveals the subsequent step.
- Triggers are sequential (Next > Step 2 > Step 3) rather than random-access.
- Back navigation must preserve previously entered data.
- **Example:** A checkout flow (Shipping > Payment > Review > Confirm).

### 3. Details / Summary (HTML5 Native)
**Best for:** Lightweight disclosure without custom styling.
- \`<details>\` element natively handles open/close state; browser manages toggle.
- Minimal JavaScript; styling is basic but accessible.
- Limited for complex multi-step flows.
- **Example:** "What's the difference between Basic and Pro?" help text.

## When to Use Each Pattern

| Pattern | Use When | Avoid When |
|---------|----------|-----------|
| **Accordion** | Multiple optional sections; users browse selectively | Strict sequential order needed; all sections equally critical |
| **Step Wizard** | Clear progression; data entered in stages | Simple forms with few fields; unrelated sections |
| **Details/Summary** | Help text, tooltips, lightweight reveal | Complex interactions; custom styling required |

## Common Pitfalls

- **Invisible Triggers**: Label triggers clearly ("More options" beats "..."). Triggers must be visually distinct.
- **Excessive Nesting**: Don't hide content within hidden content (e.g., an accordion inside a modal inside a form). Users lose context.
- **Lost Data**: If a user goes back to a disclosed section, preserve their previous input.
- **Broken Accessibility**: Always include \`aria-expanded\` and announce state changes to screen readers.
`,
  intentTags: ["reduce-cognitive-load", "improve-readability"],
};
