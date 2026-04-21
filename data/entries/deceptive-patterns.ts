import { ReferenceEntry } from '../../types';

export const deceptive_patterns: ReferenceEntry = {
  id: "deceptive-patterns",
  title: "Anti-Pattern: Deceptive Patterns",
  domain: "interaction",
  format: "anti-pattern",
  verdict: "anti-pattern",
  useContext: ["saas", "mobile", "content"],
  confidenceScore: 98,
  slug: "deceptive-patterns",
  complexity: "intermediate",
  description: "UI patterns designed to trick users into doing things they didn't intend to do.",
  quickTake: "Deceptive patterns (formerly 'Dark Patterns') trade long-term user trust for short-term metrics. They are unethical and increasingly illegal.",
  whyItMatters: "While they may 'boost' conversion in the short term, they lead to high churn, brand damage, and potential legal action under regulations like GDPR or the CCPA.",
  mechanism: [
    "Roach Motel: Making it easy to get into a situation (e.g., a subscription) but hard to get out",
    "Sneak into Basket: Adding extra items to a cart without user consent",
    "Confirmshaming: Using guilt to prevent a user from opting out (e.g., 'No thanks, I prefer to pay full price')",
    "Visual Interference: Hiding the 'Unsubscribe' or 'Cancel' button using low contrast"
  ],
  whenToUse: [
    "Never. There is no professional justification for deceptive design."
  ],
  whenNotToUse: [
    "Everywhere. Professional design should be honest and transparent."
  ],
  tradeoffs: [
    { pro: "Short-term boost in conversion/retention metrics", con: "Permanent loss of user trust and brand equity" },
    { pro: "Artificially low churn rates", con: "High volume of support tickets and negative reviews" }
  ],
  failureModes: [
    "Legal Action: Violating consumer protection laws",
    "Brand Toxicity: Being publicly shamed for unethical practices",
    "Data Corruption: Users providing fake data to bypass deceptive gates"
  ],
  alternatives: [
    { entryId: "progressive-disclosure", condition: "Use to simplify complex choices without being deceptive" },
    { entryId: "constructive-feedback", condition: "Use to guide users honestly rather than tricking them" }
  ],
  a11ySpecs: [
    "Ensure 'Opt-out' or 'Cancel' actions meet minimum contrast requirements",
    "Do not use 'Hidden' text to trick screen readers into selecting options",
    "Ensure the visual hierarchy reflects the user's actual intent"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Audit your checkout and subscription flows for 'Sneak into Basket' patterns",
    "Ensure 'Cancel' buttons are as easy to find as 'Subscribe' buttons",
    "Use clear, neutral language for opt-out buttons—avoid confirmshaming"
  ],
  checklist: ["Removed confirmshaming copy", "Verified easy cancellation path", "Checked for hidden costs"],
  relatedEntryIds: ["mystery-meat-navigation", "scroll-jacking"],
  tags: ["Ethics","UX Design","Legal","Anti-Pattern","dark patterns","manipulative UI","forced consent","tricky UX","unethical design","hidden charges"],
  content: `
# The Cost of Deception

**Deceptive Patterns** are interfaces that have been carefully crafted to trick users into doing things, such as buying insurance with their purchase or signing up for recurring bills.

### Common Types
1.  **Forced Continuity**: Charging a user's credit card after a free trial ends without a clear warning or an easy way to cancel.
2.  **Bait and Switch**: The user sets out to do one thing, but a different, undesirable thing happens instead.
3.  **Hidden Costs**: Extra charges that appear only at the final step of the checkout process.

### The Professional Standard
Ethical design is **Transparent**. If your business model relies on tricking users into staying, the problem is the business model, not the UI.

> "Design should be an advocate for the user, not a trap for them."
`,
  intentTags: ["improve-feedback", "fix-accessibility"],
};
