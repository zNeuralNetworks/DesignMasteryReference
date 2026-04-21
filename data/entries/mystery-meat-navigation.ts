import { ReferenceEntry } from '../../types';

export const mystery_meat_navigation: ReferenceEntry = {
  id: "mystery-meat-navigation",
  title: "Anti-Pattern: Mystery Meat Navigation",
  domain: "components",
  format: "anti-pattern",
  verdict: "anti-pattern",
  useContext: ["saas", "mobile", "content"],
  confidenceScore: 98,
  slug: "mystery-meat-navigation",
  complexity: "intermediate",
  description: "Why you should never force users to hover over elements to figure out what they do.",
  quickTake: "Mystery Meat Navigation (MMN) hides functionality behind hover states, destroying discoverability and making mobile use impossible.",
  whyItMatters: "Navigation is the skeleton of your app. If users have to 'hunt' for controls, cognitive load spikes and task completion rates plummet.",
  mechanism: [
    "Hiding labels or icons until a hover event occurs",
    "Using non-standard icons without text labels",
    "Relying on tooltips as the primary method of identification"
  ],
  whenToUse: [
    "Experimental art projects where frustration is part of the experience",
    "Internal tools for power users who have memorized the UI (still not recommended)"
  ],
  whenNotToUse: [
    "Any professional SaaS or E-commerce application",
    "Mobile-first or responsive web applications",
    "Accessibility-compliant interfaces"
  ],
  tradeoffs: [
    { pro: "Cleaner, more 'minimal' aesthetic", con: "Catastrophic drop in discoverability" },
    { pro: "Reduced visual noise", con: "Zero usability on touch devices" }
  ],
  failureModes: [
    "Mobile users unable to access core features",
    "New users abandoning the app due to 'hidden' complexity",
    "Screen readers failing to announce the purpose of controls"
  ],
  alternatives: [
    { entryId: "progressive-disclosure", condition: "Use to hide secondary actions while keeping primary ones visible" },
    { entryId: "contextual-glossary", condition: "Use for complex terminology without hiding the UI" }
  ],
  a11ySpecs: [
    "Controls must have visible text labels or clear, standard icons",
    "Interactive elements must be identifiable without hover",
    "Focus states must be as visible as hover states"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Always pair icons with text labels in primary navigation",
    "Use 'Always Visible' labels for mobile navigation bars",
    "Test your UI with a touch-device emulator to find hidden hover dependencies"
  ],
  checklist: [
    "Verified every primary navigation item is identifiable without hover",
    "Paired non-standard icons with visible text or persistent labels",
    "Tested the navigation with keyboard, screen reader, and touch input"
  ],
  relatedEntryIds: ['scroll-jacking', 'deceptive-patterns', 'hicks-law'],
  interactiveComponent: "MysteryNavigationDemo",
  tags: ["UX","Bad Design","Accessibility","confusing navigation","icon only","unlabeled buttons","fix navigation","users get lost","nav makes no sense"],
  content: `

# Mystery Meat Navigation

Coined in 1998 by Vincent Flanders, **Mystery Meat Navigation** (MMN) refers to buttons or links that don't look like clickable elements until you hover over them.

### Why it fails
1.  **Discovery**: Users cannot predict where they can click.
2.  **Mobile**: There is no "hover" state on touch screens. MMN renders your site unusable on mobile.
3.  **Accessibility**: Screen readers and keyboard users often struggle to identify these controls.

### The Rule
Form follows function. A button should look like a button. A link should look like a link.
    
`,
  intentTags: ["improve-feedback", "reduce-cognitive-load"],
};
