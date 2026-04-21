import { ReferenceEntry } from '../../types';

export const onboarding_tours: ReferenceEntry = {
  id: "onboarding-tours",
  title: "Onboarding Tours",
  domain: "interaction",
  format: "principle",
  verdict: "conditional",
  useContext: ["saas", "dashboard", "product-growth"],
  confidenceScore: 92,
  slug: "onboarding-tours",
  complexity: "intermediate",
  description: "Using spotlight effects to guide new users through key features.",
  quickTake: "Onboarding Tours & Feature Spotlights are interactive walkthroughs that guide new users through an application's core value proposition by highlighting specific UI elements.",
  whyItMatters: "First impressions are everything. A well-designed tour reduces 'Time to Value' (TTV) and prevents users from feeling overwhelmed by a complex interface. However, poorly timed or forced tours can be annoying and lead to immediate churn.",
  mechanism: [
    "Spotlight Effect: Dimming the entire screen except for a specific element to force focus",
    "Contextual Tooltips: Providing brief, actionable explanations next to the highlighted element",
    "Progress Indicators: Showing the user how many steps are left in the tour (e.g., 'Step 2 of 5')",
    "Skip Option: Always allowing users to exit the tour at any time to maintain a sense of control"
  ],
  whenToUse: [
    "Introducing a complex, feature-rich dashboard for the first time",
    "Highlighting a major new feature update to existing users",
    "Guiding users through a multi-step setup or configuration process"
  ],
  whenNotToUse: [
    "In simple, intuitive apps where the UI is self-explanatory",
    "When the user is in the middle of a high-focus task (don't interrupt 'Flow')",
    "Forcing a tour every time the app opens (only show once or on request)"
  ],
  tradeoffs: [
    { pro: "Significantly reduces initial confusion and cognitive load", con: "Can be perceived as intrusive or 'hand-holding' by power users" },
    { pro: "Ensures users discover the most important features quickly", con: "Requires careful maintenance as the UI evolves to avoid 'Broken Tours'" }
  ],
  failureModes: [
    "The 'Wall of Text': Using tooltips that are too long and wordy, which users will just skip",
    "The 'Forced March': Not allowing users to skip the tour, causing frustration",
    "Broken Spotlights: Highlighting the wrong element due to layout changes or responsive shifts"
  ],
  alternatives: [
    { entryId: "adaptive-scaffolding", condition: "Use for a more subtle, long-term way to guide users" },
    { entryId: "empty-states", condition: "Use to guide users when they have no data yet, without a forced tour" }
  ],
  a11ySpecs: [
    "Ensure tooltips and spotlighted elements are keyboard-accessible",
    "Use 'aria-describedby' to link tooltips to their respective elements",
    "Provide a way to navigate the tour using only the keyboard (Tab, Enter, Esc)"
  ],
  perfImpact: "low",
  implementationNotes: [
    "Use libraries like 'react-joyride' or 'driver.js' for robust tour management",
    "Track tour completion and 'skip' rates to identify where users are getting stuck",
    "Use 'Local Storage' or a user profile flag to ensure the tour only shows once"
  ],
  checklist: [
    "Allowed users to skip, pause, and restart the tour",
    "Tied each step to a real first-run task rather than feature promotion",
    "Confirmed focus trapping and escape behavior for overlays"
  ],
  relatedEntryIds: ['progressive-disclosure', 'adaptive-scaffolding', 'empty-states'],
  interactiveComponent: "Onboarding",
  tags: ["Onboarding","UX","Product Growth"],
  content: `

# Feature Tours

When a user opens your app for the first time, they lack mental models. An **Onboarding Tour** (or Walkthrough) highlights key UI elements one by one.

### The Spotlight Effect
This technique dims the entire screen except for the focused element. It forces focus.
    
`,
  intentTags: ["reduce-cognitive-load", "improve-feedback"],
};
