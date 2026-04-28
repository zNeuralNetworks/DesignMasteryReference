import { ReferenceEntry } from '../../types';

export const complexity_overload: ReferenceEntry = {
  id: "complexity-overload",
  title: "Complexity Overload",
  domain: "visual-hierarchy",
  format: "anti-pattern",
  verdict: "anti-pattern",
  useContext: ["saas", "dashboard", "devtools"],
  confidenceScore: 96,
  slug: "complexity-overload",
  complexity: "intermediate",
  description: "Exposing too many features, settings, or options simultaneously overloads working memory and stalls decisions.",
  quickTake: "When a UI presents 20 equally important options, users freeze or abandon the task. Complexity overload is the opposite of progressive disclosure.",
  whyItMatters: "Working memory holds ~7 items at a time (Miller's Law). Exceeding this causes decision fatigue, increased error rates, and task abandonment.",
  mechanism: [
    "Too many equal-weight options forces the user to evaluate each one (analysis paralysis).",
    "No visual hierarchy means the user must read and compare all options before deciding.",
    "Mixed feature and settings controls create context switching (e.g., 'Save', 'Cancel', 'Reset', 'Advanced', 'Help' all in the same row).",
    "Lack of defaults means the user must make a decision for every field, even optional ones."
  ],
  whenToUse: [
    "Auditing an existing UI that users report as overwhelming or hard to learn",
    "Designing feature-rich tools where progressive disclosure is needed",
    "Evaluating whether a feature set should be split into separate surfaces",
  ],
  whenNotToUse: [
    "Never expose all features/options at the same hierarchical level.",
    "Never force the user to decide on optional fields with no defaults.",
    "Never mix primary, secondary, and destructive actions without visual separation."
  ],
  tradeoffs: [
    { pro: "All options visible; no 'hidden' features", con: "Cognitive overload; users make worse decisions or abandon" },
    { pro: "No clicks required to see all options", con: "Too many clicks required to choose and complete the task" }
  ],
  failureModes: [
    "The 'Dashboard of Dread': A settings page with 40+ controls, all equal-weight, no sections.",
    "The 'Toolbar Nightmare': A toolbar with 15 buttons crammed together, no grouping or priority.",
    "Analysis Paralysis: Users spend 5 minutes reading all options for a field, then abandon the form.",
    "The 'Nuclear Option': Putting 'Delete Account' next to 'Save' without visual/cognitive distinction."
  ],
  alternatives: [
    { entryId: "hicks-law", condition: "Apply to reduce decision time by limiting visible options" },
    { entryId: "progressive-disclosure", condition: "Hide advanced/secondary options behind a disclosure trigger" },
    { entryId: "cognitive-chunking", condition: "Group related options to create mental 'chunks'" }
  ],
  a11ySpecs: [
    "Ensure grouping is conveyed both visually and semantically (use <fieldset> for forms).",
    "Announce group labels to screen readers.",
    "Maintain logical tab order; don't force users to tab through all 20 options."
  ],
  perfImpact: "low",
  implementationNotes: [
    "Audit your UI: if more than 7-9 top-level options are visible, apply grouping or disclosure.",
    "Use 'Smart Defaults' for optional fields so users don't have to decide on everything.",
    "Visually distinguish primary (Save), secondary (Cancel), and destructive (Delete) actions.",
    "Test with users: if they hesitate or read every label, your UI is too complex."
  ],
  checklist: [
    "Grouped related controls under clear section headings",
    "Limited top-level options to 5–7 choices",
    "Applied smart defaults to reduce required decisions"
  ],
  relatedEntryIds: ['hicks-law', 'progressive-disclosure', 'cognitive-chunking'],
  interactiveComponent: "HicksLawDemo",
  tags: ["Anti-Pattern","Interaction","Cognitive Load","too many options","choice overload","overwhelming interface","decision fatigue","analysis paralysis"],
  contentStatus: 'hardened',
  content: `

# Complexity Overload

Exposing too many features or options simultaneously doesn't empower users—it paralyzes them.

## Why It Happens

Designers think: "Show everything, then the user can choose."

Users experience: "I don't know where to start. I'm going to abandon this."

## The Solution Stack

1. **Identify Primary vs Secondary**: Which options do 80% of users need? Focus on those.
2. **Group Related Options**: Use sections, tabs, or accordions to break the mental load.
3. **Progressive Disclosure**: Hide advanced options behind "More" or "Advanced" buttons.
4. **Smart Defaults**: Don't force users to decide on optional fields; provide sensible defaults.
5. **Visual Hierarchy**: Use size, color, and spacing to signal importance (see Hick's Law).

## The 7±2 Rule

Miller's Law states humans can hold ~7 items in working memory at once. If your UI presents 15 equal-weight options, you've exceeded that limit. Users will freeze, make worse decisions, or abandon the task entirely.
`,
  intentTags: ["reduce-cognitive-load", "improve-readability"],
};
