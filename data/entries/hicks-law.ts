import { ReferenceEntry } from '../../types';

export const hicks_law: ReferenceEntry = {
  id: "hicks-law",
  title: "Hick's Law",
  domain: "psychology",
  format: "principle",
  verdict: "recommended",
  useContext: ["saas", "dashboard", "mobile"],
  confidenceScore: 95,
  slug: "hicks-law",
  complexity: "intermediate",
  description: "The time it takes to make a decision increases with the number and complexity of choices.",
  quickTake: "Hick's Law dictates that every additional option added to a UI increases the user's cognitive load and decision time logarithmically.",
  whyItMatters: "In high-conversion environments (checkouts, onboarding), every second of decision delay increases the probability of abandonment.",
  mechanism: [
    "Identify the core task the user needs to perform",
    "Categorize secondary options into logical groups",
    "Hide advanced or rarely used features (Progressive Disclosure)",
    "Use 'Smart Defaults' to reduce the need for active choice"
  ],
  whenToUse: [
    "Navigation menus with more than 7 items",
    "Onboarding flows with multiple configuration steps",
    "Control panels and settings pages"
  ],
  whenNotToUse: [
    "Expert tools where 'Power Users' require all controls visible for speed",
    "Creative software where exploration is the goal",
    "Search results where volume is a signal of quality"
  ],
  tradeoffs: [
    { pro: "Reduced cognitive load and faster task completion", con: "Increased number of clicks/steps to reach hidden options" },
    { pro: "Cleaner, more professional aesthetic", con: "Risk of hiding features that users actually need" }
  ],
  failureModes: [
    "Choice Overload: Users freezing when presented with too many equal-weight options",
    "Analysis Paralysis: Users abandoning a flow because the decision feels too high-stakes",
    "Hidden Complexity: Making the UI look simple but making the workflow harder"
  ],
  alternatives: [
    { entryId: "progressive-disclosure", condition: "Use to defer secondary choices to a later stage" },
    { entryId: "cognitive-chunking", condition: "Use to group related items into a single mental unit" }
  ],
  a11ySpecs: [
    "Ensure grouped options are announced correctly by screen readers",
    "Use clear headings to separate choice categories",
    "Maintain a logical tab order through grouped choices"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Aim for 5-7 items per category (Miller's Law)",
    "Use visual hierarchy to highlight the 'Recommended' or 'Primary' choice",
    "Monitor 'Time to Task Completion' in analytics to find choice bottlenecks"
  ],
  checklist: [
    "Reduced visible choices at the exact decision point",
    "Moved secondary actions behind clear progressive disclosure",
    "Measured task completion, not just visual simplicity"
  ],
  relatedEntryIds: ['serial-position-effect', 'fitts-law', 'gestalt-proximity'],
  interactiveComponent: "HicksLawDemo",
  tags: ["Psychology","UX Research","Conversion","too many options","choice overload","decision fatigue","overwhelming interface","fix navigation","simplify choices","analysis paralysis"],
  contentStatus: 'draft',
  content: `

# Cognitive Load & Decision Making

Hick's Law states: *The time it takes to make a decision increases logarithmically with the number of choices.*

### Application in UI
1.  **Reduce Options**: Don't show 20 links in a nav menu. Categorize them into 4-5 groups.
2.  **Break it down**: Use multi-step forms instead of one giant page.
    
`,
  intentTags: ["reduce-cognitive-load", "improve-readability"],
};
